import * as Drawing from './drawing.js';
import { PacMan } from './models.js';


export const Controller = function (canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.pacman = new PacMan(this.canvas.width / 2, this.canvas.height / 2, 20);
    window.requestAnimationFrame(this.frame.bind(this));
}


Controller.prototype.draw = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Drawing.drawGrid(this.context);
    this.pacman.draw(this.context);
}


Controller.prototype.frame = function () {
    this.draw();
    window.requestAnimationFrame(this.frame.bind(this));
}
