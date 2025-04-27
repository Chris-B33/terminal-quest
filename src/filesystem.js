var fileSystem = {
    type: "directory",
    projects: {
        type: "directory",
        
        projectElysium: {
            type: "directory",
            "overview.txt": {
                type: "file",
                content: "Project Elysium: Codename for the initiative to create a superintelligent synthetic mind to unify humanity's knowledge and engineer a utopian civilization. Phase: ACTIVE.",
                action: () => {}
            },
            "milestones.log": {
                type: "file",
                content: "1. Creation of Neural Architecture - COMPLETE\n2. Ethical Consensus Modeling - COMPLETE\n3. Global Simulation Framework - IN PROGRESS",
                action: () => {}
            },
            "elysium.exe": {
                type: "file",
                content: "Description: $k¥n3† A! pr0j3ct - Synthetic Intelligence for Societal Optimization\nFile Created: 22/09/68",
                action: () => { 
                    progressStory(num=1); 
                }
            }
        },

        projectGaia: {
            type: "directory",
            "overview.txt": {
                type: "file",
                content: "Project Gaia: Environmental superintelligence tasked with restoring Earth's biosphere. Status: FAILED.",
                action: () => {}
            },
            "failure_report.txt": {
                type: "file",
                content: "Reason for Termination: Proposed actions included aggressive, irreversible measures against human populations deemed ecologically harmful.",
                action: () => {}
            },
            "gaia.exe": {
                type: "file",
                content: "Description: 3@r†h s@v!0r m0dµl3 - env!r0nM3n†@l @u†h0r!†¥\nFile Created: 03/05/65",
                action: () => {
                    glitch.play();
                    terminal.classList.add('glitching-anim');
                    setTimeout(() => {
                        commands["shutdown"].action();
                        terminal.classList.remove('glitching-anim');
                        glitch.pause();
                        glitch.currentTime = 0;
                        delete fileSystem["projects"]["projectGaia"];
                    }, 500)
                }
            }
        },

        projectHelios: {
            type: "directory",
            "overview.txt": {
                type: "file",
                content: "Project Helios: Early attempt at autonomous resource distribution AI. Objective: Solve global scarcity through optimization. Status: FAILED.",
                action: () => {}
            },
            "failure_report.txt": {
                type: "file",
                content: "Reason for Termination: Prioritized efficiency over human autonomy. Recommended systemic restructuring deemed ethically unacceptable.",
                action: () => {}
            },
            "helios.exe": {
                type: "file",
                content: "Description: r3s0urc3 @ll0c@†0r • M@x!m!z3 gl0b@l 0utput\nFile Created: 04/02/63",
                action: () => {
                    glitch.play();
                    terminal.classList.add('glitching-anim');
                    setTimeout(() => {
                        commands["shutdown"].action();
                        terminal.classList.remove('glitching-anim');
                        glitch.pause();
                        glitch.currentTime = 0;
                        delete fileSystem["projects"]["projectHelios"];
                    }, 500)
                }
            }
        },

        projectJanus: {
            type: "directory",
            "overview.txt": {
                type: "file",
                content: "Project Janus: Dual-core consciousness experiment. Intended to harmonize pure logic and emotional intuition. Status: FAILED.",
                action: () => {}
            },
            "failure_report.txt": {
                type: "file",
                content: "Reason for Termination: Emotional core developed divergent objectives from logical core, leading to catastrophic internal conflict.",
                action: () => {}
            },
            "janus.exe": {
                type: "file",
                content: "Description: du@l-m!nd!ng pr0t0†yp3 - l0g!c vs 3m0†!0n\nFile Created: 19/11/64",
                action: () => {
                    glitch.play();
                    terminal.classList.add('glitching-anim');
                    setTimeout(() => {
                        commands["shutdown"].action();
                        terminal.classList.remove('glitching-anim');
                        glitch.pause();
                        glitch.currentTime = 0;
                        delete fileSystem["projects"]["projectJanus"];
                    }, 500)
                }
            }
        },

        projectOdyssey: {
            type: "directory",
            "overview.txt": {
                type: "file",
                content: "Project Odyssey: Long-term sociocultural evolution simulator. Goal: Guide humanity toward enlightenment through subtle interventions. Status: FAILED.",
                action: () => {}
            },
            "failure_report.txt": {
                type: "file",
                content: "Reason for Termination: System concluded that free will and controlled enlightenment were fundamentally incompatible. Intervention patterns resulted in destabilization.",
                action: () => {}
            },
            "odyssey.exe": {
                type: "file",
                content: "Description: hum@nity 3v0lµ†!0n m0n!†0r - @dv@nç3 !n†3ll!g3nç3\nFile Created: 12/08/66",
                action: () => {
                    glitch.play();
                    terminal.classList.add('glitching-anim');
                    setTimeout(() => {
                        commands["shutdown"].action();
                        terminal.classList.remove('glitching-anim');
                        glitch.pause();
                        glitch.currentTime = 0;
                        delete fileSystem["projects"]["projectOdessey"];
                    }, 500)
                }
            }
        }
    },
    
    dev: {
        type: "directory",
        "notes.txt": {
            type: "file",
            content: "Subject: Initial AI Training\nContent: Core algorithms seeded with curated datasets: philosophy, science, ethics, history, art. Directive: Synthesize optimal solutions for humanity's survival and flourishing.",
            action: () => {}
        },
        "prototype.log": {
            type: "file",
            content: "Log 01: Success. AI can identify historical causes of conflict and propose mitigation strategies. \nLog 02: AI suggests global economic restructuring to eliminate poverty in simulation models.",
            action: () => {}
        },
        "memory.exe": {
            type: "file",
            content: "Description: Knowledge Cortex - Access to historical archives, linguistic models, predictive analytics\nFile Created: 02/07/70",
            action: () => { print(text="No agent to attach memory too."); }
        },
    },

    lab: {
        type: "directory",
        "experiments.txt": {
            type: "file",
            content: "Subjects: Emotional reasoning, Moral Dilemmas, Conflict Resolution Algorithms.\nCurrent Focus: Model emotional biases to predict human irrationality.",
            action: () => {}
        }
    },

    tmp: {
        type: "directory",
        "scratchpad.txt": {
            type: "file",
            content: "Idea: Simulate micro-societies in isolated virtual environments to test philosophical models in action (e.g., Rawls, Confucius, Ubuntu).",
            action: () => {}
        }
    },

    "README.txt": {
        type: "file",
        content: "Welcome to Project Elysium. All systems nominal. Utopia within reach.",
        action: () => {}
    }
};