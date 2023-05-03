class Game extends AdventureScene {
    constructor() {
        super("game", "Beginning Room");
    }

    onEnter() {
        let hole = this.add.text(this.w * 0.5, this.w * 0.25, "🕳 Hole")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a dark hole on the ground.")
            })
            .on('pointerdown', () => {
                    this.showMessage("*you jump down the hole*");
                    this.gotoScene('bad1');
                }
            )
            

        let door = this.add.text(this.w * 0.1, this.w * 0.25, "🚪 Door")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("It a door maybe this lead somewhere.")
            })
            .on('pointerdown', () => {
                    this.showMessage("*You enter the door*");
                    this.gotoScene('room1');
                }
            )

    }
}

class Room1 extends AdventureScene {
    constructor() {
        super("room1", "Room 1");
    }
    onEnter() {
        let back = this.add.text(this.w * 0.3, this.w * 0.45, "Go Back")
            .setFontSize(this.s * 3)
            .setInteractive()
            .on('pointerover', () => this.showMessage("You sure you want to go back."))
            .on('pointerdown', () => {
                this.showMessage("The door is lock... welp");
                this.tweens.add({
                    targets: back,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let door3 = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 Door")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Another door I wonder where this lead us.")
            })
            .on('pointerdown', () => {
                    this.showMessage("*You enter the door*");
                    this.gotoScene('room3');
                }
            )

        let door2 = this.add.text(this.w * 0.5, this.w * 0.15, "🚪 Door")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Another door which is indentiacal to the previous and this door.")
            })
            .on('pointerdown', () => {
                    this.showMessage("*You enter the door*");
                    this.gotoScene('room2');
                }
            )
            let key = this.add.text(this.w * 0.2, this.w * 0.3, "🔑 Small Key")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a small key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the small key.");
                this.gainItem('Small Key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

            let rock = this.add.text(this.w * 0.4, this.w * 0.3, "🪨 Rock")
            .setFontSize(this.s * 2.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a rock... wait a minute tell me you going pick it up")
            })
            .on('pointerdown', () => {
                this.showMessage("YOU FIRMLY BOLDED PICK A ROCK.");
                this.gainItem('THE ROCK (LITTERAY)');
                this.tweens.add({
                    targets: rock,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("room2", "Room 2");
    }
    onEnter() {
        let back = this.add.text(this.w * 0.3, this.w * 0.45, "Go Back")
        .setFontSize(this.s * 3)
        .setInteractive()
        .on('pointerover', () => this.showMessage("I'm just saying you can't."))
        .on('pointerdown', () => {
            this.showMessage("This time the door you enter just dispear *SPOOKY*");
            this.tweens.add({
                targets: back,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100
            });
        });

    let door3 = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 Door")
        .setFontSize(this.s * 2.5)
        .setInteractive()
        .on('pointerover', () => {
                this.showMessage("I swear to god this door look the same.")
        })
        .on('pointerdown', () => {
                this.showMessage("*You enter the door*");
                this.gotoScene('room1');
            }
        )

    let door2 = this.add.text(this.w * 0.5, this.w * 0.15, "🚪 Door")
        .setFontSize(this.s * 2.5)
        .setInteractive()
        .on('pointerover', () => {
                this.showMessage("Can't the game creator make a new sprite image for these door... JEEZ.")
        })
        .on('pointerdown', () => {
                this.showMessage("*You enter the door*");
                this.gotoScene('room4');
            }
        )
    let painting = this.add.text(this.w * 0.3, this.w * 0.3, "🖼 Painting (Underdevlopment)")
        .setFontSize(this.s * 2.5)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Look like a large painting.")
        })
    }
}

class Room3 extends AdventureScene {
    constructor() {
        super("room3", "Room 3");
    }
    onEnter() {
        let back = this.add.text(this.w * 0.3, this.w * 0.45, "Go Back")
        .setFontSize(this.s * 3)
        .setInteractive()
        .on('pointerover', () => this.showMessage("Look buddy you can't go back."))
        .on('pointerdown', () => {
            this.showMessage("You turn around and the door wasn't there");
            this.tweens.add({
                targets: back,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100
            });
        });

    let door3 = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 Door")
        .setFontSize(this.s * 2.5)
        .setInteractive()
        .on('pointerover', () => {
                this.showMessage("door Door DOOR ALL THE SAME DOOR.")
        })
        .on('pointerdown', () => {
                this.showMessage("*You enter the door*");
                this.gotoScene('room4');
            }
        )

    let door2 = this.add.text(this.w * 0.5, this.w * 0.15, "🚪 Door")
        .setFontSize(this.s * 2.5)
        .setInteractive()
        .on('pointerover', () => {
                this.showMessage("BLOODY HEll you though the creator just give us a different type of door.")
        })
        .on('pointerdown', () => {
                this.showMessage("*You enter the door*");
                this.gotoScene('room1');
            }
        )
    
    let laptop = this.add.text(this.w * 0.3, this.w * 0.3, "💻 Laptop")
        .setFontSize(this.s * 2.5)
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("Small Key")) {
                this.showMessage("You've the literally KEY for this Laptop.");
            } else {
                this.showMessage("It's locked. You need a KEY, LMAO get it");
                this.tweens.add({
                    targets: laptop,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("Small Key")) {
                this.loseItem("Small Key");
                this.showMessage("*Jack in*");
                laptop.setText("💻 Laptop");
                this.gotoScene('laptop');
            }
        })
    }
}
class Laptop extends AdventureScene {
    constructor() {
        super("laptop", "Laptop");
    }
    onEnter() {
        let back = this.add.text(this.w * 0.3, this.w * 0.45, "Jack Out")
        .setFontSize(this.s * 3)
        .setInteractive()
        .on('pointerover', () => this.showMessage("You want to leave the laptop space."))
        .on('pointerdown', () => {
            this.showMessage("You Jack Out");
            this.gotoScene('room3');
        });
    }
}
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "THE DOOR OF WONDER!").setFontSize(100);
        this.text1 = this.add.text(50,200, "Click anywhere to begin.").setFontSize(50);
        this.tweens.add({
            targets: this.text1,
                alpha: {from:0, to:1},
                duration: 1950,
                repeat: -1,
        })        
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('game'));
        });
    }
}

class Bad1 extends Phaser.Scene {
    constructor() {
        super('bad1');
    }
    create() {
        this.add.text(50, 50, "You had reach the bad ending where you fall to your death").setFontSize(50);
        this. text1 = this.add.text(50, 100, "Click anywhere to restart.").setFontSize(50);
        this.tweens.add({
            targets: this.text1,
                alpha: {from:0, to:1},
                duration: 1950,
                repeat: -1,
        })        
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Room1, Room3, Laptop],//Intro, Game, Room1, Room2, Room3, Room4, Good, Bad1, Bad2, Laptop
    title: "Adventure Game",
});

