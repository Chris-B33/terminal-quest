let currentPath = [];
let error_message = 'Command not found. Type "help" for a list of commands.';

function getCurrentDir() {
    return currentPath.reduce((dir, part) => dir[part], fileSystem);
  }

function handleCommand(cmd) {
    const parts = cmd.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[command]) {
        return commands[command].action(args);
    } else {
        return error_message;
    }
}

let commands = {
    cat: {
        desc: "Print content of given file from",
        action: (filename) => {
            filename = String(filename || "").trim();
            if (filename == "") {
                return "Usage: cat <path_to_file>"
            }

            // If file is in same directory
            const path = filename.split('/').filter(p => p.length > 0);
            let curDir = getCurrentDir();
            if (path.length == 1) {
                if (!curDir[path]) {
                    return 'File not found.';
                } else if (curDir[path]["type"] == "file") {
                    return curDir[path]["content"];
                } else if (curDir[path]["type"] == "directory") {
                    return `${path} is a directory.`;
                }
            }

            // If file is in different directory
            let parts = path.slice(0, -1);
            let file = path.slice(-1);

            for (let part of parts) {
                if (curDir[part] && curDir[part]["type"] == "directory") {
                    curDir = curDir[part];
                } else {
                    return "Invalid file path.";
                }
            }

            if (!curDir[file]) {
                return 'File not found.';
            } else if (curDir[file]["type"] == "file") {
                return curDir[file]["content"];
            } else if (curDir[file]["type"] == "directory") {
                return `${filename} is a directory.`;
            }
        }
    },
    run: {
        desc: "Run given file from filepath.",
        action: (filename) => {
            filename = String(filename || "").trim();
            if (filename == "") {
                return "Usage: run <path_to_file>"
            }

            // If file is in same directory
            const path = filename.split('/').filter(p => p.length > 0);
            let curDir = getCurrentDir();
            if (path.length == 1) {
                if (!curDir[path]) {
                    return 'File not found.';
                } else if (curDir[path]["type"] == "file") {
                    curDir[path]["action"]();
                    return;
                } else if (curDir[path]["type"] == "directory") {
                    return `${path} is a directory.`;
                }
            }

            // If file is in different directory
            let parts = path.slice(0, -1);
            let file = path.slice(-1);

            for (let part of parts) {
                if (curDir[part] && curDir[part]["type"] == "directory") {
                    curDir = curDir[part];
                } else {
                    return "Invalid file path.";
                }
            }

            if (!curDir[file]) {
                return 'File not found.';
            } else if (curDir[file]["type"] == "file") {
                curDir[file]["action"]();
            } else if (curDir[file]["type"] == "directory") {
                return `${filename} is a directory.`;
            }
        }
    },
    cd: {
        desc: "Change directory to desired location. ('..' to go back.)",
        action: (directory) => {
            directory = String(directory || "").trim();
            if (directory == "") return 'Usage: cd <path_to_directory> | ..';

            let dir = getCurrentDir();
            const parts = directory.split('/').filter(p => p.length > 0);

            for (let part of parts) {
                if (part === '..') {
                    if (currentPath.length > 0) {
                        currentPath.pop();
                        dir = getCurrentDir();
                    } else {
                        return 'Already at root.';
                    }
                } else {
                    if (dir[part] && dir[part].type === "directory") {
                        currentPath.push(part);
                        dir = getCurrentDir();
                    } else {
                        return `Directory not found: ${part}`;
                    }
                }
            }

            return `/${currentPath.join("/")}`;
        }
    },
    ls: {
        desc: "List all files in the current directory.",
        action: (directory) => {
            directory = String(directory || "").trim();
            const path = directory.split('/').filter(p => p.length > 0);
            let curDir = getCurrentDir();

            // If same directory
            if (path == "") {
                return `/${currentPath.join("/")} \n${Object.keys(curDir).slice(1).map(name => '├─ ' + name).join('\n')}`;
            }

            // If directory specified
            for (let part of path) {
                if (curDir[part] && curDir[part]["type"] == "directory") {
                    curDir = curDir[part];
                } else {
                    return "Invalid file path.";
                }
            }
            
            if (curDir["type"] == "directory") {
                return `/${directory} \n${Object.keys(curDir).slice(1).map(name => '├─ ' + name).join('\n')}`;
            } else if (curDir["type"] == "file") {
                return `${curDir} is a file.`;
            }
        }
    },
    pwd: {
        desc: "Prints the current working directory.",
        action: () => {
            return `The current working directory is "/${currentPath.join("/")}".`
        }
    },
    clear: {
        desc: 'Clears the terminal screen.',
        action: () => {
            document.getElementById('terminal').innerHTML = ''
        },
    },
    shutdown: {
        desc: 'Shuts down the terminal.',
        action: () => {
            executing = false;
            toggleComputerPower();
        }
    },
    help: {
        desc: 'Lists available commands.',
        action: () => {
            return Object.entries(commands)
            .map(([cmd, {desc}]) => ` - ${cmd}: ${desc}`)
            .join('\n');
        }
    }
};