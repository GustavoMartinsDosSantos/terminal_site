function autocomplete(incompleteCommand){
  const parsedCommand = incompleteCommand.split(" ")
  const commandsList = Object.keys(commands)

  if(parsedCommand[0] && parsedCommand[0] === "cd"){
    const directorySuggestions = Object.keys(getDirectoryContent())
    return directorySuggestions.filter(directory => directory.startsWith(parsedCommand[1] || ""))
  }

  if(parsedCommand[0] && !parsedCommand[1]){
    return commandsList.filter(command => command.startsWith(incompleteCommand))
  }
}