import {GameEntity} from './entity-base.js';

export class Pointer extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.size = {x: 16, y: 16};
        this.pos = {x: 0, y: 0};
        document.addEventListener('mousemove', this.handleMove.bind(this));
    }

    handleMove(event) {
        const canvas = document.getElementById('game-canvas');
        const rect = canvas.getBoundingClientRect();
        this.pos.x = event.clientX - rect.left;
        this.pos.y = event.clientY - rect.top;
    }

    update() {
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 6, 0, Math.PI * 2);
        ctx.fill();
    }
}