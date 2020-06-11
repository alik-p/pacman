import * as Drawing from './drawing.js';


export function Ghost(x, y, radius = 25, speed = 60) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
}


Ghost.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    Drawing.drawGhost(ctx, this.radius);
    ctx.restore();
}


Ghost.prototype.update = function (target, timeElapsed) {
    const angle = Math.atan2(target.y - this.y, target.x - this.x);
    const x_speed = Math.cos(angle) * this.speed;
    const y_speed = Math.sin(angle) * this.speed;
    this.x += x_speed * timeElapsed;
    this.y += y_speed * timeElapsed;
}
