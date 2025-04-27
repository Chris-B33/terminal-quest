let terminal = "";

let history = [];
let historyIndex = -1;

let directory = "";
let inputBuffer = '';
let executing = false;

let isComputerOn = false;

var booting = new Audio('assets/audio/booting.mp3');
var beep = new Audio('assets/audio/beep.mp3');

function delay(delayInms) {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

async function print(text = '', delms = 5) {
    const line = document.createElement('div');
    terminal.insertBefore(line, document.getElementById('prompt-line'));

    line.textContent = '';

    for (let i = 0; i < text.length; i++) {
        line.textContent += text[i];
        terminal.scrollTop = terminal.scrollHeight;
        await delay(delms);
    }
}

function printPrompt() {
    let existingPrompt = document.getElementById('prompt-line');
    if (existingPrompt) {
        terminal.removeChild(existingPrompt);
    }
    const promptLine = document.createElement('div');
    promptLine.id = 'prompt-line';
    promptLine.innerHTML = `> <span class="input-line" id="input-line"></span><span class="blinking-cursor"></span>`;
    terminal.appendChild(promptLine);
    updateInputLine();
}

function updateInputLine() {
    const inputLine = document.getElementById('input-line');
    if (inputLine) {
        inputLine.textContent = inputBuffer;
    }
}

async function toggleComputerPower() {
    if (executing) {
        return;
    }

    executing = true;
    model = document.getElementById('model');

    if (isComputerOn) {
        booting.pause();
        booting.currentTime = 0;
        terminal.classList.add('shutdown-anim');
        terminal.addEventListener('animationend', () => {
            terminal.remove();
            model.src = "assets/models/old_pc_off.glb"
            executing = false;
        });
    } else {
        booting.play();
        createTerminal();
        terminal.classList.add('turn-on-anim');
        terminal.addEventListener('animationend', () => {
            terminal.classList.remove('turn-on-anim');
            model.src = "assets/models/old_pc_on.glb"
            executing = false;
        });
    }

    isComputerOn = !isComputerOn;
}

function createTerminal() {
    terminal = document.createElement("div");
    terminal.id = "terminal"
    let containerDiv = document.getElementById('container');
    containerDiv.appendChild(terminal);

    print('SkyNet v0.99');
    print('Type "help" for a list of available commands.');
    printPrompt();
}

document.addEventListener('keydown', async (e) => {
    if (executing || !isComputerOn) {
        return;
    }

    if (e.key === 'Backspace') {
        inputBuffer = inputBuffer.slice(0, -1);
    } else if (e.key === 'Enter') {
        history.push(inputBuffer);
        historyIndex = history.length;
        beep.play();

        const commandText = inputBuffer;
        const commandLine = document.createElement('div');
        commandLine.textContent = `> ${commandText}`;
        terminal.insertBefore(commandLine, document.getElementById('prompt-line'));

        inputBuffer = '';
        updateInputLine();

        executing = true;
        const response = handleCommand(commandText);
        await print(response, delms=3);
        executing = false;

        printPrompt();
    } else if (e.key == "ArrowUp") {
        if (history.length > 0 && historyIndex > 0) {
            historyIndex--;
            inputBuffer = history[historyIndex];
            updateInputLine();
        }
    } else if (e.key === 'ArrowDown') {
        if (history.length > 0 && historyIndex < history.length - 1) {
            historyIndex++;
            inputBuffer = history[historyIndex];
        } else {
            historyIndex = history.length;
            inputBuffer = '';
        }
        updateInputLine();
      } else if (e.key.length === 1) {
        inputBuffer += e.key;
    }
    updateInputLine();
});