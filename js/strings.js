const strings = {
  "pt-BR": {
    commandNotFound: "Comando '<?>' não encontrado",
    notADirectory: "cd: '<?>': O parâmetro passado não é um diretório",
  },
  "en-US": {
    commandNotFound: "Command '<?>' not found",
    notADirectory: "cd: '<?>': Not a directory",
  },
};

const supportedLanguages = Object.keys(strings);

let userLanguage = navigator.language || navigator.userLanguage;

if (!supportedLanguages.includes(userLanguage)) {
  userLanguage = "en-US";
}

