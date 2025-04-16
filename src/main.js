const terminal = document.getElementById('terminal');

let history = [];
let historyIndex = -1;

let directory = "";
let inputBuffer = '';
let executing = false;

function delay(delayInms) {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

async function print(text = '') {
    const line = document.createElement('div');
    terminal.insertBefore(line, document.getElementById('prompt-line'));

    line.textContent = '';

    for (let i = 0; i < text.length; i++) {
        line.textContent += text[i];
        terminal.scrollTop = terminal.scrollHeight;
        await delay(5);
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

document.addEventListener('keydown', async (e) => {
    if (executing) {
        return;
    }

    if (e.key === 'Backspace') {
        inputBuffer = inputBuffer.slice(0, -1);
    } else if (e.key === 'Enter') {
        history.push(inputBuffer);
        historyIndex = history.length;

        const commandText = inputBuffer;
        const commandLine = document.createElement('div');
        commandLine.textContent = `> ${commandText}`;
        terminal.insertBefore(commandLine, document.getElementById('prompt-line'));

        inputBuffer = '';
        updateInputLine();

        executing = true;
        const response = handleCommand(commandText);
        await print(response);
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

print('SkyNet v0.99');
printPrompt();