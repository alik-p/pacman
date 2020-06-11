import * as Drawing from './drawing.js';


export function PacMan(x, y, radius = 20, speed = 100) {
    this.x = x;
    this.y = y;
    this.angle = 0;         // move direction
    this.mouth = 0;         // mouth opening degree [0 to 1]
    this.radius = radius;
    this.speed = speed;
    this.speedX = speed;
    this.speedY = 0;
    this.time = 0;
}


PacMan.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    Drawing.drawPacman(ctx, this.radius, this.mouth);
    ctx.restore();
}


PacMan.prototype.moveDown = function () {
    this.speedX = 0;
    this.speedY = this.speed;
    this.angle = 0.5 * Math.PI;
}


PacMan.prototype.moveLeft = function () {
    this.speedX = -this.speed;
    this.speedY = 0;
    this.angle = Math.PI;
}


PacMan.prototype.moveRight = function () {
    this.speedX = this.speed;
    this.speedY = 0;
    this.angle = 0;
}


PacMan.prototype.moveUp = function () {
    this.speedX = 0;
    this.speedY = -this.speed;
    this.angle = 1.5 * Math.PI;
}


PacMan.prototype.update = function (ctx, timeElapsed) {
    const {width, height} = ctx.canvas;
    const deltaX = this.speedX * timeElapsed
    const deltaY = this.speedY * timeElapsed
    // Right border:
    if (this.x + deltaX - this.radius > width) {
        this.x = -this.radius;
    }
    // Left: border:
    if (this.x + deltaX + this.radius < 0) {
        this.x = width + this.radius;
    }
    // Tob border:
    if (this.y + deltaY + this.radius < 0) {
        this.y = height + this.radius;
    }
    // Bottom border:
    if (this.y + deltaY - this.radius > height) {
        this.y = -this.radius;
    }
    // Position:
    this.x += deltaX;
    this.y += deltaY;
    // Mouth opening:
    this.time += timeElapsed;
    this.mouth = Math.abs(Math.sin(2 * Math.PI * this.time));
}
