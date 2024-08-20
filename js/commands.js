let commands = {
  help: () => help(),
  echo: (args) => echo(args),
  clear: () => clear(),
  ls: () => ls(),
  cd: (args) => cd(args),
};

function help() {
  let helpElement = document.createElement("span");
  helpElement.innerHTML +=
    "GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)<br>\
    These shell commands are defined internally.  Type `help' to see this list.<br>";
  helpElement.innerHTML += "<br>List of available commands:<br>";
  Object.keys(commands).forEach((element) => {
    helpElement.innerHTML += element + "<br>";
  });
  insertInScreen(helpElement);
}

function echo(args) {
  const terminalLine = document.createElement("span");
  terminalLine.innerHTML = args.join(" ");
  return terminalLine;
}

function clear() {
  document.getElementById("terminalContainer").innerHTML = "";
}

function ls() {
  const dirContent = getDirectoryContent();
  const directoryTable = document.createElement("table");
  const directoryElementColumn = document.createElement("tr");
  Object.keys(dirContent).forEach((element) => {
    const directoryElement = document.createElement("td");
    typeof dirContent[element] === "object"
      ? (directoryElement.innerText = `${element}/`)
      : (directoryElement.innerText = element);
    directoryElementColumn.appendChild(directoryElement);
  });
  directoryTable.appendChild(directoryElementColumn);
  insertInScreen(directoryTable);
}

function cd(args) {
  const dirContent = getDirectoryContent();
  const toDirectory = args[0] ? args[0].replace("/", "") : args[0];
  if (args.length === 0) {
    navActualDir = ["home"];
  } else if (toDirectory === "..") {
    navActualDir.splice(navActualDir.length - 1, 1);
  } else if (Object.keys(dirContent).includes(toDirectory)) {
    if (typeof dirContent[toDirectory] !== "object") {
      const errSpan = document.createElement("span");
      errSpan.innerText = strings[userLanguage].notADirectory.replace(
        "<?>",
        toDirectory
      );
      insertInScreen(errSpan);
      return;
    }
    navActualDir.push(toDirectory);
  }
}
