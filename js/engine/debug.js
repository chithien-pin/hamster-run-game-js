export class Debug {
    constructor(ctx) {
        this.ctx = ctx;
        this.lines = [];
    }

    log(label, value) {
        this.lines.push(`${label}: ${value}`);
    }

    render(x = 10, y = 20, lineHeight = 16) {
        this.ctx.font = '12px monospace';
        this.ctx.fillStyle = 'lime';
        for (let i = 0; i < this.lines.length; i++) {
            this.ctx.fillText(this.lines[i], x, y + i * lineHeight);
        }
        this.lines = [];
    }
}
