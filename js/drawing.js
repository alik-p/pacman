export function drawGhost(ctx, radius, color = 'blue') {
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color;
    ctx.lineWidth = 0.5;
    const feet = 4;
    const headRadius = radius * 0.8;
    const footRadius = headRadius / feet;
    const eyeRadius = headRadius / 2.5;
    ctx.beginPath();
    // Draw feet:
    for (let foot = 0; foot < feet; foot++) {
        const x = (2 * footRadius * (feet - foot)) - headRadius - footRadius;
        const y = radius - footRadius;
        ctx.arc(x, y, footRadius, 0, Math.PI);
    }
    // Draw body:
    ctx.lineTo(-headRadius, radius - footRadius);
    ctx.arc(0, headRadius - radius, headRadius, Math.PI, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Draw eyes:
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(-eyeRadius, -eyeRadius, eyeRadius, Math.PI, 4 * Math.PI);
    ctx.arc(eyeRadius, -eyeRadius, eyeRadius, Math.PI, 4 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(-eyeRadius * 1.2, -eyeRadius * 0.8, eyeRadius / 2, Math.PI, 4 * Math.PI);
    ctx.arc(eyeRadius * 0.8, -eyeRadius * 0.8, eyeRadius / 2, Math.PI, 4 * Math.PI);
    ctx.fill();
    ctx.restore();
}


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


export function drawPacman(ctx, radius, mouth) {
    ctx.save();
    const angle = 0.2 * Math.PI * mouth;
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
