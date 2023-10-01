import Phaser from 'phaser';

import { generateId } from '@/utils/image-id';
import image from '@/assets/food.png';

export const FoodImage = {
  key: generateId(),
  url: image,
};

export class Food extends Phaser.GameObjects.Image {
  static preload(load: Phaser.Loader.LoaderPlugin) {
    load.image(FoodImage);
  }

  total: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, FoodImage.key);

    this.setTexture(FoodImage.key);
    this.setPosition(x * 16, y * 16);
    this.setOrigin(0);

    this.total = 0;

    scene.children.add(this);
  }

  eat() {
    this.total++;
  }
}
