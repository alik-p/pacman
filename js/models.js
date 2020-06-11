import * as Drawing from './drawing.js';


function PacMan(x, y, radius = 20) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.mouth = 0; // mouth opening degree [0 to 1]
    this.time = 0;
}


PacMan.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    Drawing.drawPacman(ctx, this.radius, this.mouth);
    ctx.restore();
}


PacMan.prototype.update = function (timeElapsed) {
    this.time += timeElapsed;
    this.mouth = Math.abs(Math.sin(2 * Math.PI * this.time));
}


export { PacMan }
