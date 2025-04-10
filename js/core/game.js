export class Game {
    constructor() {
        this.entities = [];
        this.deferredKill = [];

        this.spawnQueue = [];
        this.screen = {x: 0, y: 0};
        this.now = Date.now();
        this.last = this.now;
        this.tick = 0;
    }

    spawn(EntityClass, x, y, settings = {}) {
        const ent = new EntityClass(x, y, settings);
        this.entities.push(ent);
        return ent;
    }

    killEntity(entity) {
        this.deferredKill.push(entity);
    }

    update() {
        this.now = Date.now();
        this.tick = (this.now - this.last) / 1000;
        this.last = this.now;

        // update entities
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].update(this.tick);
        }

        // remove killed
        this.entities = this.entities.filter(e => !this.deferredKill.includes(e));
        this.deferredKill = [];
    }

    draw(ctx) {
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(ctx);
        }
    }
}
