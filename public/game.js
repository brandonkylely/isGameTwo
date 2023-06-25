window.addEventListener('load', () => {
let config = {
  type: Phaser.AUTO,
  width: 3500,
  height: 1400,
  backgroundColor: 0x090033,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 220
      }
    }
  },
  scale: {
    parent: 'thegame',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pixleArt: true,
  scene: [StartScene, MusicScene, InstructionsScene, GameScene1, GameScene2, GameScene3, HUDScene, PauseScene, GameOver, VictoryScene]
};

game = new Phaser.Game(config);
// manager = new SceneManager(game, config);
// console.log(manager.getScene(GameScene1));
});