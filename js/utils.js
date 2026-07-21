function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function tokenize(value) {
  return value.trim().match(/(?:[^\s"]+|"[^"]*")+/g)?.map((part) => part.replace(/^"|"$/g, "")) || [];
}

function card(title, meta, detail, tags = [], links = []) {
  const projectLinks = links.length
    ? `<div class="project-links">${links.map(({ label, url }) => `<span>${label}: <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a></span>`).join("<br>")}</div>`
    : "";
  return `<article class="card"><h3>${title}</h3><span class="meta">${meta}</span><p>${detail}</p>${tags.length ? `<div class="tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}${projectLinks}</article>`;
}

function resolveEntry(name) {
  const directory = getDirectory();
  if (!name) return null;
  const normalized = name.replace(/\/$/, "");
  return Object.prototype.hasOwnProperty.call(directory, normalized) ? { name: normalized, value: directory[normalized] } : null;
}
