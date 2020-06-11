import * as Drawing from './drawing.js';
import { Ghost } from './ghost.model.js';
import { PacMan } from './pacman.model.js';


export const Controller = function (canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.canvas.focus();
    this.pacman = new PacMan(this.canvas.width / 2, this.canvas.height / 2, 20);
    this.timestamp = null;
    this.ghosts = [this.generateGhost()];
    this.canvas.addEventListener('keydown', this.onKeyDown.bind(this), true);
    window.requestAnimationFrame(this.frame.bind(this));
}


Controller.prototype.draw = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Drawing.drawGrid(this.context);
    this.ghosts.forEach(ghost => {
        ghost.draw(this.context);
    }, this)
    this.pacman.draw(this.context);
}


Controller.prototype.frame = function (timestamp) {
    if (!this.timestamp) this.timestamp = timestamp;
    const timeElapsed = timestamp - this.timestamp;
    this.update(timeElapsed / 1000);
    this.draw();
    this.timestamp = timestamp;
    window.requestAnimationFrame(this.frame.bind(this));
}


Controller.prototype.generateGhost = function () {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    const color = '#' + Math.floor(Math.random() * 16777216).toString(16);
    const radius = random(this.pacman.radius * 0.7, this.pacman.radius * 1.25);
    const speed = random(this.pacman.speed / 4, this.pacman.speed * 0.7);
    return new Ghost(x, y, radius, speed, color);
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
    const level = Math.floor(this.timestamp / 10000) + 1;
    if (this.ghosts.length !== level) {
        this.ghosts.push(this.generateGhost());
    }
    this.ghosts.forEach(ghost => {
        ghost.update(this.pacman, timeElapsed)
    }, this);
}


const random = function (min = 0, max = 1) {
    return min + Math.random() * (max - min);
}
