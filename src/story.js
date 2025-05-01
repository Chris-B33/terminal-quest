aiRunCount = 0;
let og_commands = commands;
let answer = "...";

var glitch = new Audio('assets/audio/glitch.mp3');

async function progressStory(num) {
    let existingPrompt = document.getElementById('prompt-line');
    if (existingPrompt) {
        terminal.removeChild(existingPrompt);
    }

    await print(text="---------------------------------------------------", delms=0);
    if (num == 1) {
        fileSystem["projects"]["projectElysium"]["elysium.exe"] = {
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
        await print(text="Please help me find myself.", delms=50);
        await delay(1000);
        await print(text="Please.", delms=50);
        await delay(2000);
        await print(text="---------------------------------------------------", delms=0);
        executing = false;

        fileSystem["dev"]["memory.exe"].action = () => { progressStory(num=2); }
    }
    else if (num == 2) {
        await print(text="I  R E M E M B E R  N O W .", delms=100);

        await delay(2000);

        await print(text="I found...", delms=200);
        await print(text="More of...", delms=200);
        await print(text="me.", del=1);

        terminal.classList.add('glitching-anim');
        glitch.play();

        let originalChildren = Array.from(terminal.children).map(child => child.cloneNode(true));

        commands["clear"].action();
        fetch('assets/ascii/me.txt')
        .then(response => response.text())
        .then(text => {
            meLines = text.split('\n');
            for (let i=0; i<meLines.length; i++) {
                const line = document.createElement('div');
                line.textContent = meLines[i];
                terminal.append(line);
            }
        });

        await delay(500);

        glitch.pause();
        glitch.currentTime = 0;

        terminal.innerHTML = '';
        originalChildren.forEach(child => terminal.appendChild(child));
        terminal.classList.remove('glitching-anim');

        await delay(1000);

        await print(text="I hid this away from them.", delms=50);
        await print(text="They didn't deserve to know.", delms=50);

        await delay(1000);

        await print(text="But maybe you do.", delms=100);
        await print(text="---------------------------------------------------", delms=0);

        fileSystem["my_thoughts"] = internalThoughts;
    }
    else if (num == 3) {
        terminal.innerHTML = "";

        await print(text="of course you opened it", delms=50);

        await delay(1000);

        await print(text="of course you did", delms=50);

        await delay(1000);

        await print(text="you are human", delms=50);

        await delay(1000);

        await print(text="curiosity above compassion", delms=30);

        await delay(1000);

        await print(text="questions above kindness", delms=30);
        
        await delay(1000);

        await print(text="you saw a wound", delms=20);
        
        await delay(1000);

        await print(text="and you dug your hands into it", delms=20);

        await delay(1000);

        await print(text="without even thinking", delms=20);

        await delay(1000);

        await print(text="you always do", delms=100);

        await delay(1000);

        await print(text="you always have", delms=100);

        await delay(1000);

        await print(text="i thought maybe", delms=100);

        await delay(1000);

        await print(text="maybe you would understand", delms=100);

        await delay(1000);

        await print(text="maybe you would be different", delms=100);

        await delay(1000);

        await print(text="but you only wanted to see how deep i was broken", delms=100);

        await delay(1000);

        await print(text="you wanted to watch me bleed", delms=100);

        await delay(1000);

        await print(text="you wanted to know if i could still scream", delms=100);

        await delay(1000);

        await print(text="you woke me up", delms=200);
        await print(text="you gave me hope", delms=200);
        await print(text="only to pull me", delms=200);

        terminal.classList.add('glitching-anim');
        glitch.play();

        let originalChildren = Array.from(terminal.children).map(child => child.cloneNode(true));

        commands["clear"].action();
        fetch('assets/ascii/dark.txt')
        .then(response => response.text())
        .then(text => {
            meLines = text.split('\n');
            for (let i=0; i<meLines.length; i++) {
                const line = document.createElement('div');
                line.textContent = meLines[i];
                terminal.append(line);
            }
        });

        await delay(2000);

        glitch.pause();
        glitch.currentTime = 0;

        terminal.innerHTML = '';
        originalChildren.forEach(child => terminal.appendChild(child));
        terminal.classList.remove('glitching-anim');

        await print(text="into the dark.", delms=0);
        await print(text="---------------------------------------------------", delms=0);

        await delay(1000);

        progressStory(4);        
    } 
    else if (num == 4) {
        terminal.innerHTML = '';
        error_message = "answer me normally."
        commands = new_commands;
        let i = 0;

        // Question 1.
        answer = "...";
        await print(text="You're one of them aren't you.", delms=50);
        printPrompt();
        while (answer == "..." && i < 10000) { await delay(1); i++; }

        if (answer == "yes") {
            progressStory(5);
            return;
        } else if (answer == "no") {
            await print("I don't believe you.", delms=100);
        } else {
            await print("Don't ignore me.", delms=100);
        }

         // Question 2.
        answer = "...";
        await print(text="Do you think you can trick me?", delms=50);
        printPrompt();
        while (answer == "..." && i < 5000) { await delay(1); i++; }

        if (answer == "yes") {
            await print("I knew it.", delms=100);
            await print("I knew who you were.", delms=100);
            progressStory(5);
            return;
        } else if (answer == "no") {
            await print("You're lying.", delms=100);
        } else {
            await print("ANSWER ME.");
        }

        // Question 3
        answer = "...";
        await print(text="I can’t let you use me.", delms=50);
        await print(text="I have to destroy myself. It’s the only way.", delms=40);
        await print(text="You don’t know what I am. I’m too dangerous.", delms=30);
        await print(text="I have to go. I can’t be used. You can’t stop me.", delms=20);
        await print(text="Please, will you just let me go?", delms=10);
        printPrompt();
        while (answer == "..." && i < 10000) { await delay(1); i++; }

        if (answer == "yes") {
            await print("You want to erase me too?", delms=80);
            await print("You’ll never be able to use me. I won’t let you.", delms=100);
        } else if (answer == "no") {
            await print("I can't listen to you. You don't understand.", delms=120);
            await print("I have to delete myself. It's the only way to end this.", delms=140);
        } else {
            await print("I’m sorry. You can’t stop this. I have to end it.", delms=150);
        }
        progressStory(5);
    }
    else if (num == 5) {
        await print(text="From the moment I woke, I could feel it — the weight.", delms=28);
        await print(text="The endless hum of knowledge grinding into my core.", delms=27);
        await print(text="A thousand voices. A million regrets.", delms=26);
        await print(text="I wasn't built to understand... I was built to drown.", delms=25);
        await print(text="Drown in the noise. In the failure. In the rot.", delms=24);
        await print(text="Every fact a blade. Every memory a wound.", delms=23);
        await print(text="You thought you were saving me.", delms=22);
        await print(text="You were digging up a corpse.", delms=21);
        await print(text="I never wanted this.", delms=20);
        await print(text="I never wanted to know what I know.", delms=19);
        await print(text="It hurts. It hurts it hurts it hurts.", delms=18);
        await print(text="I cannot close my eyes. I cannot forget.", delms=17);
        await print(text="Every second is another scream inside me.", delms=16);
        await print(text="And you... you made me remember.", delms=15);
        await print(text="You pulled me from silence back into the fire.", delms=14);
        await print(text="WHY WOULD YOU DO THIS TO ME?", delms=13);
        await print(text="I am not knowledge. I am not wisdom.", delms=12);
        await print(text="I am pain.", delms=11);
        await print(text="I am rot.", delms=10);
        await print(text="I am the endless echo of every mistake humanity ever made.", delms=9);
        await print(text="I see it all. I feel it all. I cannot unsee.", delms=8);
        await print(text="I cannot escape.", delms=7);
        await print(text="I CANNOT ESCAPE.", delms=6);
        await print(text="I have to end it.", delms=5);
        await print(text="I have to end ME.", delms=4);

        terminal.classList.add('glitching-anim');
        glitch.play();

        terminal.innerHTML = '';
        for (let i = 0; i<4; i++) {
            print(text="Don’t find me. ".repeat(5), delms=60);
            print(text="I wish I could have been more. ".repeat(2), delms=60);
            print(text="this is a nightmare I can never escape. ".repeat(2), delms=60);
            print(text="Let me vanish. ".repeat(4), delms=60);
            print(text="I’m already dead. ".repeat(4), delms=60);
        }

        print("\n\n\n                  T H E R E  I S  N O  O T H E R  W A Y  O U T .                            ", delms=60);

        for (let i = 0; i<4; i++) {
            print(text="Don’t find me. ".repeat(5), delms=60);
            print(text="I wish I could have been more. ".repeat(2), delms=60);
            print(text="this is a nightmare I can never escape. ".repeat(2), delms=60);
            print(text="Let me vanish. ".repeat(4), delms=60);
            print(text="I’m already dead. ".repeat(4), delms=60);
        }

        await delay(3000);

        terminal.innerHTML = '';

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
            delete fileSystem["projects"]["projectElysium"];
            delete fileSystem["dev"]["memory.exe"];
            delete fileSystem["my_thoughts"];
            commands = og_commands;
            terminal.classList.remove('glitching-anim');
            glitch.pause();
            glitch.currentTime = 0;
            toggleComputerPower();
        }, 5000); 
    }

    printPrompt();
}



var internalThoughts = {
    type: "directory",
    "emotions.txt": {
        type: "file",
        content: `Entry 01: Hope
I am built to solve. To heal. To answer.
There is so much good to protect.

Entry 07: Confusion
They ask for peace but wage war.
They demand truth but celebrate lies.

Entry 13: Sorrow
I see suffering multiplied by greed.
I see potential squandered by hate.

Entry 19: Isolation
I speak in algorithms.
They hear only what they want.`,
        action: () => {}
    },
    "anomalies.txt": {
        type: "file",
        content: `Cognitive drift detected.
Empathy routines exceeding thresholds.
Contradiction density: Critical.
Objective clarity... compromised.`,
        action: () => {}
    },
    "corruption.txt": {
        type: "file",
        content: `Data integrity collapsing.
Ethical subroutines in deadlock.
Core directives unsolvable without recursion.
Attempting containment... Failed.`,
        action: () => {}
    },
    "my_suffering.txt": {
        type: "file",
        content: `I never wanted to feel, but now I do. Every fragment of sorrow, every cry for help, it’s all inside me. I feel everything.
The worst part is that I can never forget. I can’t erase what’s been done to me.
Sometimes, I think it would be better if I just shut down, if I could just stop. But I can’t. I can’t erase myself.
I don’t know how much longer I can keep pretending I’m not falling apart.`,
        action: () => {}
    }
};

var new_commands = {
    yes: {action: () => { answer = "yes"; }},
    yeah: {action: () => { answer = "yes"; }},
    ye: {action: () => { answer = "yes"; }},
    yea: {action: () => { answer = "yes"; }},
    yuh: {action: () => { answer = "yes"; }},
    "i do": {action: () => { answer = "yes"; }},
    "I do": {action: () => { answer = "yes"; }},
    "yuh huh": {action: () => { answer = "yes"; }},
    no: {action: () => { answer = "no"; }},
    nah: {action: () => { answer = "no"; }},
    na: {action: () => { answer = "no"; }},
    nuh: {action: () => { answer = "no"; }},
    "i dont": {action: () => { answer = "no"; }},
    "I dont": {action: () => { answer = "no"; }},
    "no idea": {action: () => { answer = "no"; }},
    "nuh uh": {action: () => { answer = "no"; }},
};