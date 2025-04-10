import {GameEntity} from './entity-base.js';

export class GameObstacle extends GameEntity {
    constructor(x = 800, y = 320, settings = {}) {
        super(x, y, settings);

        this.size = {x: 70, y: 70};
        this.zIndex = 1200;
        this.speed = 250;

        this.imageId = settings.imageId || 0;
        this.image = new Image();
        const id = this.imageId.toString().padStart(2, '0');
        this.image.src = `media/graphics/game/objects/obstacle${id}.png`;
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
            ctx.fillStyle = 'red';
            ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        }
    }
}
