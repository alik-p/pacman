import * as Drawing from './drawing.js';


function PacMan(x, y, radius = 20) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}


PacMan.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    Drawing.drawPacman(ctx, this.radius);
    ctx.restore();
}


export { PacMan }
