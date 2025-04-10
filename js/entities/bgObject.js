import {randInt} from '../engine/util.js';
import {GameEntity} from './entity-base.js';

export class BgObject extends GameEntity {
    constructor(zValue = 400) {
        const x = randInt(0, 800); // random horizontal position
        const y = 400;             // near bottom of screen
        super(x, y);

        this.zValue = zValue;
        this.scale = 300 / zValue;

        const index = randInt(0, 27); // bg00 → bg27
        const pad = index.toString().padStart(2, '0');
        this.image = new Image();
        this.image.src = `media/graphics/game/objects/bg${pad}.png`;
    }

    update(dt) {
        this.zValue -= 80 * dt;
        this.scale = 300 / this.zValue;

        if (this.zValue < 100) {
            this._killed = true;
        }
    }

    draw(ctx) {
        if (!this.image.complete) return;

        const w = this.image.width * this.scale;
        const h = this.image.height * this.scale;
        const alpha = Math.max(0, Math.min(1, (this.zValue - 100) / 700)); // linear fade

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.drawImage(this.image, this.pos.x, this.pos.y - h, w, h);
        ctx.globalAlpha = 1;
        ctx.restore();
    }
}
