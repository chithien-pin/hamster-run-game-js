import {GameEntity} from './entity-base.js';

export class Cookie extends GameEntity {
    constructor(x = 800, y = 340) {
        super(x, y);
        this.size = {x: 32, y: 32};
        this.speed = 250;

        this.image = new Image();
        this.image.src = 'media/graphics/game/pickups/cookie.png';
    }

    update(dt) {
        this.pos.x -= this.speed * dt;

        if (this.pos.x + this.size.x < 0) {
            this._killed = true;
        }
    }

    draw(ctx) {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
        } else {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        }
    }
}
