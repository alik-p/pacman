function drawGrid(ctx, color = 'lightsteelblue', step = 30) {
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
