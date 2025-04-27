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
        desc: "Print content of given file in the current directory.",
        action: (filename) => {
            if (filename == "") {
                return "Usage: cat <file>"
            }

            if (filename == "my_suffering.txt") {
                setTimeout(() => { progressStory(3); }, 5000);
            }

            const dir = getCurrentDir();
            const file = dir[filename];
            if (file == null) { return 'File not found.'; }

            if (file["type"] == "file") {
                return file["content"];
            } else if (file["type"] == "directory") {
                return `${filename} is a directory.`;
            }
        }
    },
    run: {
        desc: "Run given file in the current directory.",
        action: (filename) => {
            if (filename == "") {
                return "Usage: run <file>"
            }

            const dir = getCurrentDir();
            const file = dir[filename];

            if (file["type"] == "file") {
                file["action"]();
            } else if (file["type"] == "directory") {
                return `${filename} is a directory.`;
            } else {
                return 'File not found.';
            }
        }
    },
    cd: {
        desc: "Change directory to desired location.",
        action: (directory) => {
            directory = String(directory || "").trim();
            if (directory == "") return 'Usage: cd <directory>';

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
        action: () => {
            const dir = getCurrentDir();
            return `/${currentPath.join("/")} \n${Object.keys(dir).slice(1).map(name => '├─ ' + name).join('\n')}`;
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