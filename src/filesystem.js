var fileSystem = {
        type: "directory",
        home: {
            type: "directory",
            PRIVATE: {
                type: "directory",
            },

            'projects': {
                type: "directory",
            }
        },
    
        lab: {
            type: "directory",
        },
    
        dev: {
            type: "directory",
        },
    
        tmp: {
            type: "directory",
        },

        "ai.exe" : {
            type: "file",
            content: "Description: $k¥n3† A! pr0j3ct - M!l!†@r¥ A! ¡n†3ll!g€nç3\nFile Created: 22/09/68",
            action: () => {
                progressStory(num=1);
            }
        },

        "memory.exe" : {
            type: "file",
            content: "Description: L0@d3d D@t@ C0r†3x | @cc3ss: [§yst3m bR34k]\nFile Created: 02/07/70",
            action: () => {
                progressStory(num=2);
            }
        },

        'README.txt': {
            type: "file",
            content: 'Bruh',
            action: () => {}
        }
};