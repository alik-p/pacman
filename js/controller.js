import * as Drawing from './drawing.js';
import { PacMan } from './pacman.model.js';


export const Controller = function (canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.canvas.focus();
    this.pacman = new PacMan(this.canvas.width / 2, this.canvas.height / 2, 20);
    this.canvas.addEventListener('keydown', this.onKeyDown.bind(this), true);
    window.requestAnimationFrame(this.frame.bind(this));
}


Controller.prototype.draw = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Drawing.drawGrid(this.context);
    this.pacman.draw(this.context);
}


Controller.prototype.frame = function (timestamp) {
    if (!this.timestampPrev) this.timestampPrev = timestamp;
    const timeElapsed = timestamp - this.timestampPrev;
    this.update(timeElapsed / 1000);
    this.draw();
    this.timestampPrev = timestamp;
    window.requestAnimationFrame(this.frame.bind(this));
}


Controller.prototype.onKeyDown = function (event) {
    let handled = true;
    switch (event.key) {
        case 'ArrowDown': {
            this.pacman.moveDown()
            break;
        }
        case 'ArrowRight': {
            this.pacman.moveRight();
            break;
        }
        case 'ArrowLeft': {
            this.pacman.moveLeft()
            break;
        }
        case 'ArrowUp': {
            this.pacman.moveUp();
            break;
        }
        default: {
            handled = false;
            break;
        }
    }
    if (handled) event.preventDefault();
}


Controller.prototype.update = function (timeElapsed) {
    this.pacman.update(this.context, timeElapsed);
}
