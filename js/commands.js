let commands = {
    echo: args => Echo(args),
    clear: () => Clear()
}

function Echo(args){
    const terminalLine = document.createElement('span')
    terminalLine.innerHTML = args.join(' ')
    return terminalLine
}

function Clear(){
    document.getElementById('terminalContainer').innerHTML = ''
}

function Ls(){
    
}