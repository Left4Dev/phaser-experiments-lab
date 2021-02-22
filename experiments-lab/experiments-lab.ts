import { config } from "./config";

import "phaser";

export class ExperimentsLab {
  c: number;
  x: number;

  time: number;
  frame: number;

  S: number;
  C: number;
  T: number;
  game: any;
  constructor() {
    this.game = new Phaser.Game(config);

    this.S = Math.sin;
    this.C = Math.cos;
    this.T = Math.tan;
    this.time = 0;
    this.frame = 0;
    config.scene = {
      create: this.create,
      update: () => this.update
    };
  }

  create() {
    var canvasTexture = this.textures.createCanvas("dwitter", 1920, 1080);

    this.c = canvasTexture.getSourceImage();
    this.x = this.c.getContext("2d");

    this.add
      .image(0, 0, "dwitter")
      .setOrigin(0)
      .setScale(0.5);
  }

  update() {
    this.time = this.frame / 60;

    if ((this.time * 60) | (0 == this.frame - 1)) {
      this.time += 0.000001;
    }

    this.frame++;

    this.u(this.time);
  }

  u(t) {
    this.c.width = 1920;
    for (let i = 0; i < 31; i++) {
      for (let j = 25; j > -25; j--) {
        this.x.fillRect(
          960 + j * i * 0.5 * this.C(i * 0.2) + this.C(2 * t + i * 0.2) * 300,
          540 + j * i * 0.5 * this.S(i * 0.2) + this.S(2.2 * t + i * 0.2) * 200,
          9,
          9
        );
      }
    }
  }

  R(r, g, b, a) {
    a = a === undefined ? 1 : a;

    return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
  }
}
