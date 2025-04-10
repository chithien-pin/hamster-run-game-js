export class Director {
    constructor(game) {
        this.game = game;
        this.levels = {};
    }

    addLevel(name, data) {
        this.levels[name] = data;
    }

    gotoLevel(name) {
        const level = this.levels[name];
        if (!level) return;

        this.game.entities = [];
        for (const ent of level.entities) {
            const EntityClass = this.game.entityMap[ent.type];
            if (EntityClass) {
                this.game.spawn(EntityClass, ent.x, ent.y);
            }
        }

        this.game.backgroundImage = level.background || null;
    }
}
