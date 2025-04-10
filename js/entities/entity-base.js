export class GameEntity {
    constructor(x = 0, y = 0) {
        this.pos = {x, y};
        this.size = {x: 32, y: 32};
        this.vel = {x: 0, y: 0};
    }

    update(dt) {
    }

    draw(ctx) {
    }
}
