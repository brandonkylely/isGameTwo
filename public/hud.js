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
  preload() {}
  create() {
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