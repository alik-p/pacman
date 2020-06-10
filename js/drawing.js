export function drawGrid(ctx, color = 'lightsteelblue', step = 30) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;
    const {width, height} = ctx.canvas;
    for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    ctx.restore();
}


export function drawPacman(ctx, radius) {
    ctx.save();
    const angle = 0.2 * Math.PI;
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, radius, angle, -angle);
    ctx.lineTo(0, 0);
    ctx.closePath()
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
