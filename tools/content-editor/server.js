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
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { FILES } = require("./schema");

const HOST = "127.0.0.1";
const PORT = 4321;

const ROOT_DIR = path.resolve(__dirname, "..", "..");
const DATA_DIR = path.join(ROOT_DIR, "data");
const BACKUP_DIR = path.join(DATA_DIR, ".backups");
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
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

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 10 * 1024 * 1024) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
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

  if (pathname.startsWith("/api/")) {
    sendJson(res, 404, { error: "알 수 없는 API 경로" });
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
