import {Animation, AnimationSheet} from '../engine/animation.js';
import {GameEntity} from './entity-base.js';

export class GamePickup extends GameEntity {
    constructor(x = 800, y = 340, settings = {}) {
        super(x, y, settings);

        this.size = {x: 64, y: 64};
        this.speed = 250;
        this.zIndex = 1200;

        this.isCoin = settings.type === 'coin';

        if (this.isCoin) {
            this.anim = new Animation(
                new AnimationSheet('media/graphics/game/pickups/coin_1x10.png', 70, 66),
                0.08,
                [...Array(10).keys()]
            );
        } else {
            this.image = new Image();
            this.image.src = 'media/graphics/game/pickups/cookie.png';
        }
    }

    update(dt) {
        this.pos.x -= this.speed * dt;
        if (this.anim) this.anim.update(dt);

        if (this.pos.x + this.size.x < 0) {
            this._killed = true;
        }
    }

    draw(ctx) {
        if (this.anim) {
            this.anim.draw(ctx, this.pos.x, this.pos.y);
        } else if (this.image?.complete) {
            ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
        } else {
            ctx.fillStyle = 'orange';
            ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        }
    }
}