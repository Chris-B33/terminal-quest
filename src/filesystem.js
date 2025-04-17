var fileSystem = {
        type: "directory",
        home: {
            type: "directory",
            PRIVATE: {
                type: "directory",
                'photos': {
                    type: "directory",
                    'vacation.jpg': {
                        type: "file",
                        content: 'Photo data...',
                        action: () => {}
                    },
                    'family.jpg': {
                        type: "file",
                        content: 'Photo data...',
                        action: () => {}
                    },
                },
                'diary.txt': {
                    type: "file",
                    content: 'Dear diary, today was weird.',
                    action: () => {}
                },
                'passwords.txt': {
                    type: "file",
                    content: 'MySecretPassword123',
                    action: () => {}
                },
            },
            'projects': {
                type: "directory",
                'project3': {
                    type: "directory",
                    'task1.txt': {
                        type: "file",
                        content: 'Task 1 details...',
                        action: () => {}
                    },
                    'task2.txt': {
                        type: "file",
                        content: 'Task 2 details...',
                        action: () => {}
                    },
                },
                'project1.txt': {
                    type: "file",
                    content: 'Project 1 details...',
                    action: () => {}
                },
                'project2.txt': {
                    type: "file",
                    content: 'Project 2 details...',
                    action: () => {}
                },
            },
            'notes.txt': {
                type: "file",
                content: 'To-do: make this work lol',
                action: () => {}
            },
        },
    
        lab: {
            type: "directory",
            'data': {
                type: "directory",
                'data1.csv': {
                    type: "file",
                    content: 'CSV data...',
                    action: () => {}
                },
                'data2.csv': {
                    type: "file",
                    content: 'CSV data...',
                    action: () => {}
                },
            },
            'experiment.log': {
                type: "file",
                content: 'Testing yippee',
                action: () => {}
            },
            'results.txt': {
                type: "file",
                content: 'Experiment results...',
                action: () => {}
            },
        },
    
        dev: {
            type: "directory",
            'src': {
                type: "directory",
                'index.js': {
                    type: "file",
                    content: 'console.log("Index file");',
                    action: () => {}
                },
                'utils.js': {
                    type: "file",
                    content: 'console.log("Utils file");',
                    action: () => {}
                },
            },
            'code.js': {
                type: "file",
                content: 'console.log("Hello, world!");',
                action: () => {}
            },
            'README.md': {
                type: "file",
                content: '# Project Documentation\n\nThis is a sample project.',
                action: () => {}
            },
        },
    
        tmp: {
            type: "directory",
            'cache': {
                type: "directory",
                'cache1.tmp': {
                    type: "file",
                    content: 'Cache data...',
                    action: () => {}
                },
                'cache2.tmp': {
                    type: "file",
                    content: 'Cache data...',
                    action: () => {}
                },
            },
            'tempfile.txt': {
                type: "file",
                content: 'Temporary data...',
                action: () => {}
            },
        },

        "basic.exe" : {
            type: "file",
            content: "Do you think you could actually read a .exe file.",
            action: () => {
                executing = false;
                toggleComputerPower();
            }
        },

        'README.txt': {
            type: "file",
            content: 'Bruh',
            action: () => {}
        }
    };    