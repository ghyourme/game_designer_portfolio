/**
 * Content Editor — Local-only dev server
 *
 * 참고 문서: docs/DATA_MODEL.md, docs/ARCHITECTURE.md §10 (범위 제한: 백엔드/인증/CMS 제외)
 *
 * 이 서버는 Next.js 앱의 일부가 아니고, Vercel에 배포되지 않는다 — `npm run content-editor`로
 * 로컬에서만 실행하며, 127.0.0.1(로컬호스트)에만 바인딩해 외부 네트워크에서 접근할 수 없다.
 * 인터넷에 노출되지 않으므로 로그인/인증을 두지 않는다(로컬 실행 = 본인만 접근 가능).
 *
 * data/*.json을 직접 읽고 쓴다. 저장 전 항상 data/.backups/에 타임스탬프가 붙은 백업을
 * 남긴다 — 되돌릴 수 있는 유일한 안전장치다.
 *
 * 이미지 업로드도 같은 원칙을 따른다: 실제 Next.js 앱의 `public/images/` 아래에 파일을
 * 직접 쓰고, `data/*.json`의 이미지 경로 필드(예: Project.thumbnail)에는 그 결과 경로
 * (`/images/...`)만 문자열로 저장한다 — Next.js가 이미 `public/`을 그대로 서빙하므로
 * 별도의 이미지 서버나 스토리지가 필요 없다.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { FILES } = require("./schema");

const HOST = "127.0.0.1";
const PORT = 4321;

const ROOT_DIR = path.resolve(__dirname, "..", "..");
const DATA_DIR = path.join(ROOT_DIR, "data");
const BACKUP_DIR = path.join(DATA_DIR, ".backups");
const PUBLIC_DIR = path.join(__dirname, "public");
const APP_PUBLIC_DIR = path.join(ROOT_DIR, "public");
const APP_IMAGES_DIR = path.join(APP_PUBLIC_DIR, "images");

// 업로드가 쓸 수 있는 폴더를 미리 정해둔다 — 클라이언트가 보낸 임의 경로로 쓰지 않는다.
const ALLOWED_UPLOAD_FOLDERS = new Set(["projects", "projects/gallery"]);

const ALLOWED_IMAGE_MIME_TO_EXT = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
};

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function serveStatic(req, res, pathname) {
  const relativePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.join(PUBLIC_DIR, relativePath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(content);
  });
}

function readBody(req, maxBytes = 10 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > maxBytes) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function serveFromDir(res, rootDir, filePath) {
  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(content);
  });
}

function sanitizeFileNameBase(name) {
  const base = path.basename(name).replace(/\.[^./]+$/, "");
  const cleaned = base.replace(/[^a-zA-Z0-9-_가-힣]/g, "-").slice(0, 60);
  return cleaned || "image";
}

function ensureBackupDir() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
}

function handleGetFiles(res) {
  const list = Object.entries(FILES).map(([key, def]) => ({
    key,
    label: def.label,
    kind: def.kind,
  }));
  sendJson(res, 200, list);
}

function handleGetSchema(res, key) {
  const def = FILES[key];
  if (!def) {
    sendJson(res, 404, { error: `알 수 없는 데이터 파일: ${key}` });
    return;
  }
  sendJson(res, 200, def);
}

function handleGetData(res, key) {
  const def = FILES[key];
  if (!def) {
    sendJson(res, 404, { error: `알 수 없는 데이터 파일: ${key}` });
    return;
  }
  const filePath = path.join(DATA_DIR, def.path);
  fs.readFile(filePath, "utf-8", (err, raw) => {
    if (err) {
      sendJson(res, 404, { error: `${def.path}을 읽을 수 없습니다: ${err.message}` });
      return;
    }
    try {
      const data = JSON.parse(raw);
      sendJson(res, 200, data);
    } catch (parseErr) {
      sendJson(res, 500, { error: `${def.path} JSON 파싱 실패: ${parseErr.message}` });
    }
  });
}

async function handlePostData(req, res, key) {
  const def = FILES[key];
  if (!def) {
    sendJson(res, 404, { error: `알 수 없는 데이터 파일: ${key}` });
    return;
  }

  let raw;
  try {
    raw = await readBody(req);
  } catch (err) {
    sendJson(res, 413, { error: err.message });
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    sendJson(res, 400, { error: `잘못된 JSON입니다: ${err.message}` });
    return;
  }

  if (def.kind === "list" && !Array.isArray(data)) {
    sendJson(res, 400, { error: `${def.path}은 배열이어야 합니다.` });
    return;
  }
  if (def.kind === "record" && (Array.isArray(data) || typeof data !== "object" || data === null)) {
    sendJson(res, 400, { error: `${def.path}은 객체여야 합니다.` });
    return;
  }

  const filePath = path.join(DATA_DIR, def.path);

  try {
    ensureBackupDir();
    if (fs.existsSync(filePath)) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupPath = path.join(BACKUP_DIR, `${key}.${timestamp}.json`);
      fs.copyFileSync(filePath, backupPath);
    }
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
    sendJson(res, 200, { ok: true });
  } catch (err) {
    sendJson(res, 500, { error: `저장 실패: ${err.message}` });
  }
}

async function handlePostUpload(req, res) {
  let raw;
  try {
    raw = await readBody(req, 30 * 1024 * 1024);
  } catch (err) {
    sendJson(res, 413, { error: `이미지가 너무 큽니다: ${err.message}` });
    return;
  }

  let body;
  try {
    body = JSON.parse(raw);
  } catch (err) {
    sendJson(res, 400, { error: `잘못된 요청입니다: ${err.message}` });
    return;
  }

  const { folder, filename, dataUrl } = body || {};

  if (!ALLOWED_UPLOAD_FOLDERS.has(folder)) {
    sendJson(res, 400, { error: `허용되지 않은 업로드 폴더입니다: ${folder}` });
    return;
  }

  const match = typeof dataUrl === "string" && dataUrl.match(/^data:([\w/+-]+);base64,(.+)$/);
  if (!match) {
    sendJson(res, 400, { error: "이미지 데이터 형식이 올바르지 않습니다." });
    return;
  }
  const [, mimeType, base64Data] = match;
  const ext = ALLOWED_IMAGE_MIME_TO_EXT[mimeType];
  if (!ext) {
    sendJson(res, 400, { error: `지원하지 않는 이미지 형식입니다: ${mimeType}` });
    return;
  }

  const uniquePrefix = `${Date.now().toString(36)}-${crypto.randomBytes(3).toString("hex")}`;
  const finalName = `${uniquePrefix}-${sanitizeFileNameBase(filename || "image")}${ext}`;
  const targetDir = path.join(APP_IMAGES_DIR, folder);
  const targetPath = path.join(targetDir, finalName);

  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(targetPath, Buffer.from(base64Data, "base64"));
    const publicPath = `/images/${folder}/${finalName}`.replace(/\\/g, "/");
    sendJson(res, 200, { path: publicPath });
  } catch (err) {
    sendJson(res, 500, { error: `이미지 저장 실패: ${err.message}` });
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (pathname === "/api/files" && req.method === "GET") {
    handleGetFiles(res);
    return;
  }

  const schemaMatch = pathname.match(/^\/api\/schema\/([\w-]+)$/);
  if (schemaMatch && req.method === "GET") {
    handleGetSchema(res, schemaMatch[1]);
    return;
  }

  const dataMatch = pathname.match(/^\/api\/data\/([\w-]+)$/);
  if (dataMatch && req.method === "GET") {
    handleGetData(res, dataMatch[1]);
    return;
  }
  if (dataMatch && req.method === "POST") {
    handlePostData(req, res, dataMatch[1]);
    return;
  }

  if (pathname === "/api/upload" && req.method === "POST") {
    handlePostUpload(req, res);
    return;
  }

  if (pathname.startsWith("/api/")) {
    sendJson(res, 404, { error: "알 수 없는 API 경로" });
    return;
  }

  // 업로드한 이미지를 편집 도구 안에서 미리보기 위한 정적 서빙 —
  // 실제 Next.js 앱의 public/ 디렉토리를 읽기 전용으로 그대로 노출한다.
  if (pathname.startsWith("/public-assets/")) {
    const relative = pathname.slice("/public-assets/".length);
    serveFromDir(res, APP_PUBLIC_DIR, path.join(APP_PUBLIC_DIR, relative));
    return;
  }

  serveStatic(req, res, pathname);
});

server.listen(PORT, HOST, () => {
  console.log("");
  console.log(`  콘텐츠 편집 도구가 실행 중입니다 (로컬 전용):`);
  console.log(`  http://${HOST}:${PORT}`);
  console.log("");
  console.log("  Ctrl+C로 종료하세요. 이 서버는 배포되지 않습니다.");
  console.log("");
});
