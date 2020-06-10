import * as Drawing from './drawing.js';
import { PacMan } from './models.js';


export const Controller = function (canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.pacman = new PacMan(this.canvas.width / 2, this.canvas.height / 2, 20);
}


Controller.prototype.draw = function () {
    Drawing.drawGrid(this.context);
    this.pacman.draw(this.context);
}
