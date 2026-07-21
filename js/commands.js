const commandNames = ["help", "about", "experience", "projects", "project", "skills", "education", "contact", "resume", "ls", "cd", "pwd", "cat", "open", "lang", "theme", "clear", "whoami"];

const commands = {
  help: () => `<p class="section-title">${ui.availableCommands}</p><div class="grid">${card("about · experience · skills", ui.profile, ui.profileHelp)}${card("projects · project <name>", ui.work, ui.workHelp)}${card("contact · open <link>", ui.connections, ui.connectionsHelp)}${card("ls · cd · pwd · cat", ui.navigation, ui.navigationHelp)}</div><p class="muted">${ui.otherCommands}</p>`,
  about: () => `<section><p class="section-title">./about.txt</p><div class="hero"><div class="eyebrow">${portfolio.location}</div><h1>Gustavo Martins<br><span>dos Santos.</span></h1><div class="role">${portfolio.role}</div><p>${portfolio.summary}</p></div><div class="rule"></div><p class="accent">${portfolio.stats}</p></section>`,
  experience: () => `<p class="section-title">./experience.log</p><div class="grid">${portfolio.experience.map((job) => card(`${job.company} · ${job.title}`, job.period, job.detail)).join("")}</div>`,
  projects: () => `<p class="section-title">~/projects</p><div class="grid">${Object.entries(portfolio.projects).map(([slug, project]) => card(project.name, project.status, project.detail, project.tags, project.links) + `<p class="muted">↳ project ${slug}</p>`).join("")}</div>`,
  project: ([name]) => {
    if (!name) return `<span class="warning">${escapeHtml(ui.projectUsage)}</span>`;
    const project = portfolio.projects[name.toLowerCase()];
    return project ? `<p class="section-title">project/${name}</p>${card(project.name, project.status, project.detail, project.tags, project.links)}` : `<span class="error">${ui.projectNotFound}: ${escapeHtml(name)}</span>`;
  },
  skills: () => `<p class="section-title">./skills.json</p><div class="grid">${portfolio.skills.map(([name, time]) => card(name, time, "")).join("")}</div>`,
  education: () => `<p class="section-title">./education</p>${card(ui.educationTitle, ui.educationMeta, ui.educationDetail)}`,
  contact: () => `<p class="section-title">./contact.vcf</p><ul class="list"><li>Email: <a href="${portfolio.links.email}">guga.m.s8@hotmail.com</a></li><li>GitHub: <a href="${portfolio.links.github}" target="_blank" rel="noreferrer">github.com/GustavoMartinsDosSantos</a></li><li>LinkedIn: <a href="${portfolio.links.linkedin}" target="_blank" rel="noreferrer">linkedin.com/in/gustavo-m-santos</a></li><li>${ui.locationLabel}: ${portfolio.location}</li></ul>`,
  resume: () => `${commands.about()}${commands.experience()}${commands.skills()}${commands.education()}${commands.contact()}`,
  whoami: () => `${portfolio.name} — ${portfolio.role}`,
  pwd: () => `/home/gustavo${currentPath.length > 1 ? `/${currentPath.slice(1).join("/")}` : ""}`,
  ls: () => { const directory = getDirectory(); return `<div class="tree">${Object.entries(directory).map(([name, value]) => `${typeof value === "object" ? "<span class=\"path\">" : ""}${escapeHtml(name)}${typeof value === "object" ? "/</span>" : ""}`).join("    ")}</div>`; },
  cd: ([target]) => {
    if (!target || target === "~" || target === "/home/gustavo") currentPath = ["home"];
    else if (target === "..") { if (currentPath.length > 1) currentPath.pop(); }
    else {
      const entry = resolveEntry(target);
      if (!entry) return `<span class="error">cd: ${escapeHtml(target)}: ${ui.fileNotFound}</span>`;
      if (typeof entry.value !== "object") return `<span class="error">cd: ${escapeHtml(target)}: ${ui.notDirectory}</span>`;
      currentPath.push(entry.name);
    }
    updatePrompt();
    return "";
  },
  cat: ([filename]) => {
    const entry = resolveEntry(filename);
    if (!entry) return `<span class="error">cat: ${escapeHtml(filename || "")}: ${ui.fileNotFound}</span>`;
    if (typeof entry.value === "object") return `<span class="error">cat: ${escapeHtml(filename)}: ${ui.isDirectory}</span>`;
    const [command, ...args] = entry.value.split(" ");
    return commands[command](args);
  },
  open: ([target = ""]) => {
    const key = target.toLowerCase();
    if (portfolio.links[key]) { window.open(portfolio.links[key], "_blank", "noopener,noreferrer"); return `<span class="success">${ui.opening} ${key}…</span>`; }
    return `<span class="warning">${escapeHtml(ui.openUsage)}</span>`;
  },
  lang: ([language]) => {
    const normalized = language?.toLowerCase();
    if (!normalized || !["pt", "en"].includes(normalized)) return `<span class="warning">${escapeHtml(ui.languageUsage)}</span>`;
    setLanguage(normalized);
    return `<span class="success">${ui.languageChanged}</span>`;
  },
  theme: ([mode]) => {
    const useLight = mode === "light" || (!mode && !document.body.classList.contains("light"));
    document.body.classList.toggle("light", useLight);
    localStorage.setItem("terminal-theme", useLight ? "light" : "dark");
    return `<span class="success">${ui.themeEnabled.replace("{theme}", useLight ? ui.light : ui.dark)}</span>`;
  },
  clear: () => { document.getElementById("terminal").innerHTML = ""; return null; },
};
