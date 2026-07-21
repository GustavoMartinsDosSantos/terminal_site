const terminal = document.getElementById("terminal");
const form = document.getElementById("commandForm");
const input = document.getElementById("commandInput");
const history = [];
let historyIndex = 0;

function updatePrompt() {
  document.getElementById("promptPath").textContent = displayPath();
}

function printOutput(html, className = "output") {
  if (html === null || html === undefined || html === "") return;
  const element = document.createElement("div");
  element.className = className;
  element.innerHTML = html;
  terminal.appendChild(element);
}

function runCommand(rawCommand, showEcho = true) {
  const value = rawCommand.trim();
  if (!value) return;
  if (showEcho) printOutput(`<span class="prompt"><span class="user">gustavo@portfolio</span>:<span class="path">${displayPath()}</span>$</span><span class="typed">${escapeHtml(value)}</span>`, "echo-line");

  const [commandName, ...args] = tokenize(value);
  const command = commands[commandName.toLowerCase()];
  if (!command) printOutput(`<span class="error">${escapeHtml(commandName)}: ${ui.commandNotFound}.</span> <span class="muted">${ui.typeHelp}</span>`);
  else printOutput(command(args));

  terminal.scrollTop = terminal.scrollHeight;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  if (value.trim()) { history.push(value); historyIndex = history.length; runCommand(value); }
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
    historyIndex = Math.max(0, Math.min(history.length, historyIndex + (event.key === "ArrowUp" ? -1 : 1)));
    input.value = history[historyIndex] || "";
    input.setSelectionRange(input.value.length, input.value.length);
  }
  if (event.key === "Tab") {
    event.preventDefault();
    const parts = input.value.split(/\s+/);
    const partial = parts.at(-1).toLowerCase();
    let choices = parts.length === 1 ? commandNames : parts[0] === "project" ? Object.keys(portfolio.projects) : parts[0] === "cd" || parts[0] === "cat" ? Object.keys(getDirectory()) : [];
    const matches = choices.filter((choice) => choice.toLowerCase().startsWith(partial));
    if (matches.length === 1) { parts[parts.length - 1] = matches[0]; input.value = parts.join(" "); }
    else if (matches.length > 1) printOutput(matches.join("    "), "output muted");
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "l") { event.preventDefault(); commands.clear(); }
  if (!event.metaKey && !event.ctrlKey && document.activeElement !== input && event.key.length === 1) input.focus();
});

document.querySelector(".shell").addEventListener("click", () => input.focus());

if (localStorage.getItem("terminal-theme") === "light") document.body.classList.add("light");
printOutput(`<div class="muted">${ui.lastLogin}: ${new Intl.DateTimeFormat(userLanguage === "pt" ? "pt-BR" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date())} ${ui.onPortfolio}</div>`);
printOutput(`<span class="muted">${ui.welcome.replace("help", '<span class="accent">help</span>')}</span>`);
