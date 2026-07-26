/**
 * Content Editor — client script (vanilla JS, no build step, no framework)
 *
 * currentData를 유일한 진실 공급원으로 두고, 입력마다 path 기반으로 직접 mutate한다.
 * 배열 추가/삭제처럼 구조가 바뀔 때만 폼 전체를 다시 그린다.
 */
(function () {
  const contentEl = document.getElementById("content");
  const fileListEl = document.getElementById("file-list");

  let files = [];
  let currentKey = null;
  let currentDef = null;
  let currentData = null;

  function getAtPath(obj, path) {
    let cur = obj;
    for (const key of path) {
      if (cur == null) return undefined;
      cur = cur[key];
    }
    return cur;
  }

  function setAtPath(obj, path, value) {
    let cur = obj;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      const nextKey = path[i + 1];
      if (cur[key] == null) {
        cur[key] = typeof nextKey === "number" ? [] : {};
      }
      cur = cur[key];
    }
    cur[path[path.length - 1]] = value;
  }

  function generateId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function defaultForField(field) {
    switch (field.type) {
      case "boolean":
        return false;
      case "number":
        return 0;
      case "stringArray":
        return [];
      case "select":
        return field.options && field.options.length > 0 ? field.options[0] : "";
      case "object":
        return defaultsForFields(field.fields || []);
      case "objectArray":
        return [];
      case "raw":
        return [];
      case "text":
      case "textarea":
      default:
        return "";
    }
  }

  function defaultsForFields(fields) {
    const obj = {};
    for (const field of fields) {
      obj[field.key] = defaultForField(field);
    }
    return obj;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v);
      }
    }
    if (children) {
      for (const child of children) {
        if (child) node.appendChild(child);
      }
    }
    return node;
  }

  function labelFor(field) {
    return field.label || field.key;
  }

  function splitLines(text) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  function renderImageField(wrapper, field, path, value) {
    const box = el("div", { class: "image-field" });

    const preview = el("img", { class: "image-preview" });
    preview.style.display = value ? "block" : "none";
    if (value) preview.src = `/public-assets${value}`;
    box.appendChild(preview);

    const pathInput = el("input", { type: "text", placeholder: "/images/..." });
    pathInput.value = value || "";
    pathInput.addEventListener("input", () => {
      setAtPath(currentData, path, pathInput.value);
      preview.style.display = pathInput.value ? "block" : "none";
      if (pathInput.value) preview.src = `/public-assets${pathInput.value}`;
    });
    box.appendChild(pathInput);

    const row = el("div", { class: "image-upload-row" });
    const fileInput = el("input", { type: "file", accept: "image/*" });
    const status = el("span", { class: "image-status" });
    fileInput.addEventListener("change", async () => {
      const file = fileInput.files[0];
      if (!file) return;
      status.textContent = "업로드 중...";
      try {
        const dataUrl = await fileToDataUrl(file);
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ folder: field.uploadFolder, filename: file.name, dataUrl }),
        });
        const body = await res.json();
        if (!res.ok) {
          status.textContent = `실패: ${body.error || "알 수 없는 오류"}`;
          return;
        }
        setAtPath(currentData, path, body.path);
        pathInput.value = body.path;
        preview.src = `/public-assets${body.path}`;
        preview.style.display = "block";
        status.textContent = "업로드 완료";
      } catch (err) {
        status.textContent = `실패: ${err.message}`;
      }
    });
    row.appendChild(fileInput);
    row.appendChild(status);
    box.appendChild(row);

    wrapper.appendChild(box);
  }

  function renderField(container, field, path) {
    const wrapper = el("div", { class: "field" });
    const value = getAtPath(currentData, path);

    if (field.type === "boolean") {
      const row = el("div", { class: "field-checkbox" });
      const input = el("input", { type: "checkbox" });
      input.checked = !!value;
      input.addEventListener("change", () => setAtPath(currentData, path, input.checked));
      const label = el("label", { text: labelFor(field) });
      row.appendChild(input);
      row.appendChild(label);
      wrapper.appendChild(row);
      container.appendChild(wrapper);
      return;
    }

    const label = el("label", { text: labelFor(field) });
    wrapper.appendChild(label);

    if (field.type === "textarea") {
      const textarea = el("textarea");
      textarea.value = value || "";
      textarea.addEventListener("input", () => setAtPath(currentData, path, textarea.value));
      wrapper.appendChild(textarea);
    } else if (field.type === "stringArray") {
      const textarea = el("textarea", { placeholder: "한 줄에 하나씩 입력" });
      textarea.value = (value || []).join("\n");
      textarea.addEventListener("input", () =>
        setAtPath(currentData, path, splitLines(textarea.value)),
      );
      wrapper.appendChild(textarea);
    } else if (field.type === "select") {
      const select = el("select");
      for (const opt of field.options || []) {
        const optionEl = el("option", { value: opt, text: opt });
        if (opt === value) optionEl.selected = true;
        select.appendChild(optionEl);
      }
      select.addEventListener("change", () => setAtPath(currentData, path, select.value));
      wrapper.appendChild(select);
    } else if (field.type === "number") {
      const input = el("input", { type: "number" });
      input.value = value ?? 0;
      input.addEventListener("input", () =>
        setAtPath(currentData, path, Number(input.value)),
      );
      wrapper.appendChild(input);
    } else if (field.type === "raw") {
      const textarea = el("textarea", {
        placeholder: "세부 구조가 정의되지 않은 값입니다 — JSON 형태로 직접 편집하세요.",
      });
      textarea.value = JSON.stringify(value ?? [], null, 2);
      textarea.addEventListener("input", () => {
        try {
          const parsed = JSON.parse(textarea.value);
          setAtPath(currentData, path, parsed);
          textarea.style.borderColor = "";
        } catch {
          textarea.style.borderColor = "#dc2626";
        }
      });
      wrapper.appendChild(textarea);
    } else if (field.type === "image") {
      renderImageField(wrapper, field, path, value);
    } else if (field.type === "object") {
      const group = el("div", { class: "group" });
      group.appendChild(el("div", { class: "group-title", text: labelFor(field) }));
      renderFieldGroup(group, field.fields || [], path);
      wrapper.replaceWith(group);
      container.appendChild(group);
      return;
    } else if (field.type === "objectArray") {
      renderObjectArray(container, field, path);
      return;
    } else {
      // text (default)
      const input = el("input", { type: "text" });
      if (field.readOnly) input.setAttribute("readonly", "readonly");
      input.value = value || "";
      input.addEventListener("input", () => setAtPath(currentData, path, input.value));
      wrapper.appendChild(input);
    }

    container.appendChild(wrapper);
  }

  function renderFieldGroup(container, fields, basePath) {
    for (const field of fields) {
      renderField(container, field, basePath.concat(field.key));
    }
  }

  function renderObjectArray(container, field, path) {
    const group = el("div", { class: "group" });
    group.appendChild(el("div", { class: "group-title", text: labelFor(field) }));

    const items = getAtPath(currentData, path) || [];
    items.forEach((item, index) => {
      const itemPath = path.concat(index);
      const itemLabel = field.itemLabelField
        ? item[field.itemLabelField] || `#${index + 1}`
        : `#${index + 1}`;

      const itemBox = el("div", { class: "array-item" });
      const header = el("div", { class: "array-item-header" });
      header.appendChild(el("span", { class: "array-item-title", text: itemLabel }));
      const removeBtn = el("button", {
        type: "button",
        class: "btn btn-danger",
        text: "삭제",
      });
      removeBtn.addEventListener("click", () => {
        const arr = getAtPath(currentData, path) || [];
        arr.splice(index, 1);
        renderRoot();
      });
      header.appendChild(removeBtn);
      itemBox.appendChild(header);

      renderFieldGroup(itemBox, field.fields || [], itemPath);
      group.appendChild(itemBox);
    });

    const addBtn = el("button", {
      type: "button",
      class: "btn add-item-row",
      text: "+ 항목 추가",
    });
    addBtn.addEventListener("click", () => {
      const arr = getAtPath(currentData, path);
      const list = Array.isArray(arr) ? arr : [];
      const newItem = defaultsForFields(field.fields || []);
      if (field.idField) newItem[field.idField] = generateId();
      list.push(newItem);
      setAtPath(currentData, path, list);
      renderRoot();
    });
    group.appendChild(addBtn);

    container.appendChild(group);
  }

  function renderListEditor(container, def) {
    const items = Array.isArray(currentData) ? currentData : [];

    items.forEach((item, index) => {
      const itemLabel = def.itemLabelField
        ? item[def.itemLabelField] || `#${index + 1}`
        : `#${index + 1}`;

      const itemBox = el("div", { class: "array-item" });
      const header = el("div", { class: "array-item-header" });
      header.appendChild(el("span", { class: "array-item-title", text: itemLabel }));
      const removeBtn = el("button", {
        type: "button",
        class: "btn btn-danger",
        text: "삭제",
      });
      removeBtn.addEventListener("click", () => {
        currentData.splice(index, 1);
        renderRoot();
      });
      header.appendChild(removeBtn);
      itemBox.appendChild(header);

      renderFieldGroup(itemBox, def.fields, [index]);
      container.appendChild(itemBox);
    });

    const addBtn = el("button", {
      type: "button",
      class: "btn add-item-row",
      text: "+ 새 항목 추가",
    });
    addBtn.addEventListener("click", () => {
      const newItem = defaultsForFields(def.fields);
      if (def.idField) newItem[def.idField] = generateId();
      currentData.push(newItem);
      renderRoot();
    });
    container.appendChild(addBtn);
  }

  function showStatus(container, message, isError) {
    const existing = container.querySelector(".status");
    if (existing) existing.remove();
    const status = el("div", {
      class: `status ${isError ? "error" : "ok"}`,
      text: message,
    });
    container.insertBefore(status, container.firstChild.nextSibling);
  }

  async function saveCurrent(statusHost) {
    try {
      const res = await fetch(`/api/data/${currentKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentData),
      });
      const body = await res.json();
      if (!res.ok) {
        showStatus(statusHost, body.error || "저장에 실패했습니다.", true);
        return;
      }
      showStatus(statusHost, "저장되었습니다.", false);
    } catch (err) {
      showStatus(statusHost, `저장 중 오류: ${err.message}`, true);
    }
  }

  function renderRoot() {
    contentEl.innerHTML = "";
    const header = el("h2", { text: currentDef.label });
    contentEl.appendChild(header);

    const formBody = el("div", {});
    contentEl.appendChild(formBody);

    if (currentDef.kind === "record") {
      renderFieldGroup(formBody, currentDef.fields, []);
    } else {
      renderListEditor(formBody, currentDef);
    }

    const actions = el("div", { class: "actions" });
    const saveBtn = el("button", { type: "button", class: "btn btn-primary", text: "저장" });
    saveBtn.addEventListener("click", () => saveCurrent(contentEl));
    actions.appendChild(saveBtn);
    contentEl.appendChild(actions);
  }

  function renderSidebar() {
    fileListEl.innerHTML = "";
    for (const file of files) {
      const li = el("li");
      const btn = el("button", { type: "button", text: file.label });
      if (file.key === currentKey) btn.classList.add("active");
      btn.addEventListener("click", () => selectFile(file.key));
      li.appendChild(btn);
      fileListEl.appendChild(li);
    }
  }

  async function selectFile(key) {
    currentKey = key;
    const [def, data] = await Promise.all([
      fetch(`/api/schema/${key}`).then((r) => r.json()),
      fetch(`/api/data/${key}`).then((r) => r.json()),
    ]);
    currentDef = def;
    currentData = data;
    renderSidebar();
    renderRoot();
  }

  async function init() {
    files = await fetch("/api/files").then((r) => r.json());
    renderSidebar();
  }

  init();
})();
