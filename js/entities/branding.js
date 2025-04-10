import {GameEntity} from './entity-base.js';

export class Branding extends GameEntity {
    constructor() {
        super(320, 200);
        this.image = new Image();
        this.image.src = 'media/graphics/branding/logo.png';
        this.duration = 3;
    }

    update(dt) {
        this.duration -= dt;
        if (this.duration <= 0) this._killed = true;
    }

    draw(ctx) {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.pos.x, this.pos.y);
        }
    }
}
