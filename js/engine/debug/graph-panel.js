export class GraphPanel {
    constructor(maxPoints = 100) {
        this.data = [];
        this.maxPoints = maxPoints;
    }

    push(value) {
        this.data.push(value);
        if (this.data.length > this.maxPoints) {
            this.data.shift();
        }
    }

    render(ctx, x = 600, y = 300, width = 200, height = 100) {
        if (this.data.length < 2) return;

        ctx.save();
        ctx.strokeStyle = 'lime';
        ctx.beginPath();

        for (let i = 0; i < this.data.length; i++) {
            const px = x + (i / this.maxPoints) * width;
            const py = y + height - this.data[i] * height;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }

        ctx.stroke();
        ctx.restore();
    }
}