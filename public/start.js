class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
        this.background;
        this.platform;
        this.title;
        this.startButton;
        this.leaderboardButton;
        this.creditsButton;
    };
    preload() {
    };
    create() {
        this.background = this.add.rectangle(1750, 850, 3500, 1700, 0x0000);
        this.platform = this.physics.add.staticGroup()

        this.title = this.add.text(1750, 800, `isGame:Two`, {
            fontSize: '250px',
            fill: '#fff',
          });
        this.title.setOrigin(0.5,0);

        this.platform.add(this.title);

        this.startButton = this.add.text(1750, 150, `Start Game`, {
            fontSize: '100px',
            fill: '#fff',
        });

        this.startButton.setOrigin(0.5, 0);

        this.physics.add.existing(this.startButton);
        this.startButton.body.bounce.y = 0.8;

        this.leaderboardButton = this.add.text(1750, 300, `Leaderboards`, {
            fontSize: '100px',
            fill: '#fff',
        });

        this.leaderboardButton.setOrigin(0.5, 0);

        this.physics.add.existing(this.leaderboardButton);
        this.leaderboardButton.body.bounce.y = 0.8;

        this.creditsButton = this.add.text(1750, 450, `Credits`, {
            fontSize: '100px',
            fill: '#fff',
        });

        this.creditsButton.setOrigin(0.5, 0);

        this.physics.add.existing(this.creditsButton);
        this.creditsButton.body.bounce.y = 0.8;

        this.instructionsButton = this.add.text(1750, 600, `Instructions`, {
            fontSize: '100px',
            fill: '#fff',
        });

        this.instructionsButton.setOrigin(0.5, 0);

        this.physics.add.existing(this.instructionsButton);
        this.instructionsButton.body.bounce.y = 0.8;


        this.physics.add.collider(this.startButton, this.leaderboardButton);
        this.physics.add.collider(this.startButton, this.creditsButton);
        this.physics.add.collider(this.leaderboardButton, this.creditsButton);
        this.physics.add.collider(this.startButton, this.title);
        this.physics.add.collider(this.leaderboardButton, this.title);
        this.physics.add.collider(this.creditsButton, this.title);
        this.physics.add.collider(this.creditsButton, this.instructionsButton);
        this.physics.add.collider(this.instructionsButton, this.title);


        this.startButton.setInteractive();
        // this.startButton.on('pointeron', () => {
        //     this.startButton.text.fill(0x808080)
        // });

        this.startButton.on('pointerdown', () => {
            this.scene.start('GameScene1');
            this.scene.start('MusicScene');
            this.scene.stop('StartScene');
        });

        this.leaderboardButton.setInteractive();
        // this.leaderboardButton.on('pointeron', () => {
        //     this.leaderboardButton.text.fill(0x808080)
        // });

        this.leaderboardButton.on('pointerdown', () => {
          // replace with heroku link
            // window.location.replace('https://isgame-true.herokuapp.com/scores');
            
            window.location.replace('http://localhost:3001/scores');

            // this.scene.start('LeaderboardScene')

            // testing victory scene
            // this.scene.start('VictoryScene');
            // this.scene.stop('StartScene');
        });

        this.creditsButton.setInteractive();
        // this.creditsButton.on('pointeron',  () => {
        //     this.creditsButton.text.fill(0x808080)
        // });

        this.creditsButton.on('pointerdown', () => {
            // this.scene.start('CreditsScene')

            // testing game over scene
            // this.scene.start('GameOver');
            // this.scene.stop('StartScene');
            window.location.replace('https://github.com/brandonkylely/project2-video-game')
        });

        this.instructionsButton.setInteractive();
        // this.instructionsButton.on('pointeron',  () => {
        //     this.instructionsButton.text.fill(0x808080)
        // });

        this.instructionsButton.on('pointerdown', () => {

            this.scene.start('InstructionsScene');
            this.scene.stop('StartScene');
        });
    };
    update() {

    };
}