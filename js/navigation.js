const fileSystem = {
  home: {
    "about.txt": "about",
    "experience.log": "experience",
    projects: {
      "noteit.md": "project noteit",
      "orbit.md": "project orbit",
      "supernova.md": "project supernova",
      "kyndar.md": "project kyndar",
      "hotriders.md": "project hotriders",
      "pulse-factory.md": "project pulse-factory",
    },
    "skills.json": "skills",
    "contact.vcf": "contact",
  },
};

let currentPath = ["home"];

function getDirectory(path = currentPath) {
  return path.reduce((directory, segment) => directory[segment], fileSystem);
}

function displayPath() {
  return currentPath.length === 1 ? "~" : `~/${currentPath.slice(1).join("/")}`;
}
