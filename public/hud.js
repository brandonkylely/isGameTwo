class HUDScene extends Phaser.Scene {
  constructor() {
    super('HUDScene');
    this.inventory = undefined;
    this.score;
    this.scoreText;
    this.healthText;
    this.livesText;
    this.defeatsText;
  }
  init(data) {
    console.log('total stars', this.totalStars);
    console.log('init', data);
    this.score = data.score;
    this.totalKills = data.kills;
    this.inventory = data.inventory;
    //difficulty
    //kills
  }
  preload() {}
  create() {
    // this.score = 0;
    // this.totalKills = 0;
    // this.inventory = {
    //   health: 100,
    //   lives: 3,
    //   enemiesDefeated: 0};
    //   this.scene.alpha = 0.2;
    // console.log('scene', this.scene);
    // https://phaser.discourse.group/t/emit-events-across-scenes/666
    this.scene.bringToTop()
    // this.cursors = this.input.keyboard.addKeys('W,S,A,D, SPACE, P, ESC');
    this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, {
      fontSize: '40px',
      fill: '#fff'
    });
    this.healthText = this.add.text(
      3200,
      16,
      `Health: ${this.inventory.health}`,
      {
        fontSize: '40px',
        fill: '#fff'
      }
    );
    this.livesText = this.add.text(3200, 50, `Lives: ${this.inventory.lives}`, {
      fontSize: '40px',
      fill: '#fff'
    });
    this.defeatsText = this.add.text(
      3200,
      84,
      `Defeats: ${this.inventory.enemiesDefeated}`,
      {
        fontSize: '40px',
        fill: '#fff'
      }
    );
  }
  update() {
  }
}