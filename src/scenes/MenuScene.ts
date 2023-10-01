export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {}

  init() {}

  update() {
    this.scene.start('GameScene');
  }
}
