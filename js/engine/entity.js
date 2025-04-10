export class Entity {
    constructor(x = 0, y = 0, settings = {}) {
        this.pos = {x, y};
        this.size = settings.size || {x: 32, y: 32};
        this.vel = settings.vel || {x: 0, y: 0};
        this.accel = settings.accel || {x: 0, y: 0};
        this.gravity = settings.gravity || 0;
        this.friction = settings.friction || {x: 0, y: 0};
        this._killed = false;
        this.type = settings.type || 'none';
        this.zIndex = settings.zIndex || 0;
    }

    update(dt) {
        this.vel.x += this.accel.x * dt;
        this.vel.y += (this.accel.y + this.gravity) * dt;

        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
    }

    draw(ctx) {
        ctx.fillStyle = 'lime';
        ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}
