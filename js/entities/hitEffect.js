import {GameEntity} from './entity-base.js';

export class HitEffect extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.size = {x: 64, y: 64};
        this.life = 0.4; // hiệu ứng tồn tại trong 0.4s

        this.image = new Image();
        this.image.src = 'media/graphics/game/effects/hit.png';
    }

    update(dt) {
        this.life -= dt;
        if (this.life <= 0) this._killed = true;
    }

    draw(ctx) {
        const alpha = Math.max(0, this.life / 0.4);
        ctx.save();
        ctx.globalAlpha = alpha;

        if (this.image.complete) {
            ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
        }

        ctx.restore();
    }
}
