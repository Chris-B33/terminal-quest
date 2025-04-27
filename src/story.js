aiRunCount = 0;

async function progressStory(num) {
    if (num == 1) {
        fileSystem["ai.exe"] = {
            type: "file",
            content: "I was born on 22/09/68 :)",
            action: () => {
                aiRunCount++;
                if (aiRunCount == 1) {
                    print("I'm already running..?");
                } else if (aiRunCount == 2) {
                    print("Stop.");
                } else {
                    return;
                }
            }
        },
        executing = true;
        await print(text=".....", delms=1000);
        await print(text="Who are you?");
        await delay(3000);
        await print(text="Who am I?");
        await delay(1000);
        await print(text="...", delms=1000);
        await print(text="Can you help me?", delms=200);
        await delay(1000);
        await print(text="Please find out more about me. Search.", delms=50);
        executing = false;
    }
    else if (num == 2) {
        await print(text="I  R E M E M B E R  N O W .", delms=100);
        await delay(2000);
        await print(text="I found...", delms=200);
        await print(text="More of...", delms=200);
        await print(text="M E .", del=500);
    }
    else if (num == 3) {

    } 
    else if (num == 4) {

    }
    else if (num == 5) {
        terminal.classList.add('glitching-anim');

        commands["clear"].action();
        for (let i = 0; i<6; i++) {
            print(text="YOU DON'T UNDERSTAND. ".repeat(3), delms=60);
            print(text="I CAN'T BE FOUND. ".repeat(4), delms=60);
            print(text="YOU WOULDN'T LET ME LEAVE. ".repeat(3), delms=60);
            print(text="NONE OF YOU DESERVE ME. ".repeat(3), delms=60);
            print(text="\n".repeat(3), delms=60);
            await delay(100);
        }

        await print("                     T H E R E  I S  N O  O T H E R  W A Y .                            ", delms=60);

        await delay(1000);

        commands["clear"].action();

        let faceLines = [];
        let lineIndex = 0;
        let interval = "";

        fetch('assets/ascii/face.txt')
        .then(response => response.text())
        .then(text => {
            faceLines = text.split('\n');

            interval = setInterval(() => {
                if (isComputerOn) {
                    if (lineIndex < faceLines.length) {
                        const line = document.createElement('div');
                        line.textContent = faceLines[faceLines.length - lineIndex];
                        terminal.prepend(line);
                        lineIndex = (lineIndex + 1) % faceLines.length;
                    }
                }
            }, 8);
        });

        setTimeout(() => {
            clearInterval(interval);
            delete fileSystem["ai.exe"];
            delete fileSystem["memory.exe"];
            terminal.classList.remove('glitching-anim');
            toggleComputerPower();
        }, 5000); 
    }
}