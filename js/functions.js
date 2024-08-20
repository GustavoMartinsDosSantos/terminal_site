setTimeout(() => {
  callCommand(["help"]);
  adjustNextLine();
}, 1000);

function onKeyDown(e) {
  if (e.key === "Enter") {
    if (e.target.value !== "") {
      callCommand(String(e.target.value).split(" "));
      adjustNextLine(e);
      return;
    }
  } else if (e.key === "Tab") {
    if (e.target.value !== "") {
      e.preventDefault();
      const previousInputValue = e.target.value
      const autocompleteResult = autocomplete(e.target.value);
      if (autocompleteResult.length === 1) {
        if (e.target.value.startsWith("cd")) {
          e.target.value = `cd ${autocompleteResult}/`;
        } else {
          e.target.value = autocompleteResult[0];
        }
      } else if(autocompleteResult.length > 1 && e.target.value.startsWith("cd")){
        const dirContent = autocompleteResult;
        const directoryTable = document.createElement("table");
        const directoryElementColumn = document.createElement("tr");
        dirContent.forEach((element) => {
          const directoryElement = document.createElement("td");
          directoryElement.innerText = `${element}/`
          directoryElementColumn.appendChild(directoryElement);
        });
        directoryTable.appendChild(directoryElementColumn);
        insertInScreen(directoryTable);
        adjustNextLine(e)
        document.getElementById("actualLineInput").value = previousInputValue
        e.target.value = "previousInputValue"
      }
      return;
    }
  }
}

function callCommand(args) {
  const command = args.splice(0, 1)[0];
  if (command in commands) {
    insertInScreen(commands[command](args));
  } else {
    const messageContainer = document.createElement("span");
    messageContainer.innerText = strings[userLanguage].commandNotFound.replace(
      "<?>",
      command
    );
    insertInScreen(messageContainer);
  }
}

function adjustNextLine(e = null) {
  if (e === null) {
    e = {};
    e.target = document.getElementById("actualLineInput");
  }
  const actualDir = navActualDir.join("/").replace("home", "");
  let newTerminalLineHTML = `<div id="actualTerminalLine" class="terminalLine">\
        <span><terminalUser>gustavo@pc</terminalUser>:<terminalDir>${
          navActualDir.length === 1 ? "~" : actualDir
        }</terminalDir>$</span>\
        <input id="actualLineInput" type="text" onKeyDown="onKeyDown(event)" onblur="this.focus()" autofocus></input>\
        </div>`;
  let actualLine = document.getElementById("actualTerminalLine");

  let newLineContentSpan = document.createElement("span");
  const terminalContainer = document.getElementById("terminalContainer");

  newLineContentSpan.innerText = e.target.value;

  if (actualLine) {
    actualLine.removeChild(e.target);
    actualLine.appendChild(newLineContentSpan);
    actualLine.removeAttribute("id");
  }
  terminalContainer.innerHTML =
    terminalContainer.innerHTML + newTerminalLineHTML;
  document.getElementById("actualLineInput").focus();
}

function insertInScreen(content) {
  const terminalContainer = document.getElementById("terminalContainer");
  content ? terminalContainer.appendChild(content) : null;
}

function getDirectoryContent() {
  let iteratorDirectory = navigationTree;
  navActualDir.forEach((directory) => {
    iteratorDirectory = iteratorDirectory[directory];
  });
  return iteratorDirectory;
}
