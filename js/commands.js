let commands = {
    echo: args => Echo(args),
    clear: () => Clear(),
    ls: () => Ls(),
    cd: args => Cd(args)
}

function Echo(args) {
    const terminalLine = document.createElement('span')
    terminalLine.innerHTML = args.join(' ')
    return terminalLine
}

function Clear() {
    document.getElementById('terminalContainer').innerHTML = ''
}

function Ls() {
    const dirContent = GetDirectoryContent()
    const directoryTable = document.createElement('table')
    const directoryElementColumn = document.createElement('tr')
    Object.keys(dirContent).forEach(element => {
        const directoryElement = document.createElement('td')
        typeof dirContent[element] === 'object'
            ? directoryElement.innerText = `${element}/`
            : directoryElement.innerText = element
        directoryElementColumn.appendChild(directoryElement)
    });
    directoryTable.appendChild(directoryElementColumn)
    InsertInScreen(directoryTable)
}

function Cd(args) {
    const dirContent = GetDirectoryContent()
    const toDirectory = args[0]
    if (toDirectory === '..'){
        navActualDir.splice(navActualDir.length - 1, 1)
    } else if(Object.keys(dirContent).includes(toDirectory)){
        if(typeof dirContent[toDirectory] !== 'object'){
            const errSpan = document.createElement('span')
            errSpan.innerText = strings[userLanguage].notADirectory.replace('<?>', toDirectory)
            InsertInScreen(errSpan)
            return
        }
            
        navActualDir.push(toDirectory)
    }
}