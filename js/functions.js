function EnterCommand(e) {
    if (e.key !== 'Enter')
        return
    if (e.target.value !== '')
        CallCommand(String(e.target.value).split(' '))
    AdjustNextLine(e)
}

function CallCommand(args) {
    const command = args.splice(0, 1)[0]
    if (command in commands) {
        InsertInScreen(commands[command](args))

    } else {
        const messageContainer = document.createElement('span')
        messageContainer.innerText = strings[userLanguage].commandNotFound.replace('<?>', command)
        InsertInScreen(messageContainer)
    }
}

function AdjustNextLine(e) {
    const actualDir = navActualDir.join('/').replace('home', '')
    let newTerminalLineHTML = `<div id="actualTerminalLine" class="terminalLine">\
        <span><terminalUser>gustavo@pc</terminalUser>:<terminalDir>${navActualDir.length === 1 ? '~' : actualDir}</terminalDir>$</span>\
        <input id="actualLineInput" type="text" onkeydown="EnterCommand(event)" onblur="this.focus()" autofocus></input>\
        </div>`
    let actualLine = document.getElementById('actualTerminalLine')

    let newLineContentSpan = document.createElement('span')
    const terminalContainer = document.getElementById('terminalContainer')

    newLineContentSpan.innerText = e.target.value

    if (actualLine) {
        actualLine.removeChild(e.target)
        actualLine.appendChild(newLineContentSpan)
        actualLine.removeAttribute('id')
    }
    terminalContainer.innerHTML = terminalContainer.innerHTML + newTerminalLineHTML
    document.getElementById('actualLineInput').focus()
}

function InsertInScreen(content) {
    const terminalContainer = document.getElementById('terminalContainer')
    content
        ? terminalContainer.appendChild(content)
        : null
}

function GetDirectoryContent() {
    let iteratorDirectory = navigationTree
    navActualDir.forEach(directory => {
        iteratorDirectory = iteratorDirectory[directory]
    });
    return iteratorDirectory
}