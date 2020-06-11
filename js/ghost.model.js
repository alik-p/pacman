import * as Drawing from './drawing.js';


export function Ghost(x, y, radius = 25) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}


Ghost.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    Drawing.drawGhost(ctx, this.radius);
    ctx.restore();
}
