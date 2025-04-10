import {GameEntity} from './entity-base.js';
import {GameUI} from './gameUI.js';
import {Character} from './character.js';
import {GameObstacle} from './gameObstacle.js';
import {GamePickup} from './gamePickup.js';
import {BgObject} from './bgObject.js';
import {HitEffect} from './hitEffect.js';

export class GameControl extends GameEntity {
    constructor(x = 0, y = 0) {
        super(x, y);

        this.zIndex = 100;
        this.character = null;
        this.ui = null;
        this.objects = [];
        this.spawnTimers = {
            pickup: 0,
            obstacle: 0,
            bg: 0
        };

        this.gameOver = false;
    }

    ready() {
        this.character = new Character(200, 300);
        this.ui = new GameUI();

        // spawn UI and character into world
        this.spawn(this.character);
        this.spawn(this.ui);
    }

    update(dt) {
        if (this.gameOver) return;

        this.spawnTimers.pickup += dt;
        this.spawnTimers.obstacle += dt;
        this.spawnTimers.bg += dt;

        if (this.spawnTimers.bg >= 1.5) {
            this.spawnTimers.bg = 0;
            this.spawn(new BgObject(800, 400, {zValue: 400}));
        }

        if (this.spawnTimers.pickup >= 3) {
            this.spawnTimers.pickup = 0;
            this.spawn(new GamePickup(800, 340));
        }

        if (this.spawnTimers.obstacle >= 2) {
            this.spawnTimers.obstacle = 0;
            this.spawn(new GameObstacle(800, 320));
        }

        // collision logic
        for (let ent of this.objects) {
            if (ent instanceof GameObstacle && this.collide(this.character, ent)) {
                this.spawn(new HitEffect(this.character.pos.x, this.character.pos.y));
                this.gameOver = true;
                console.log('💥 Game Over!');
            }
        }
    }

    draw(ctx) {
        // background, objects, character, ui drawn via this.objects
    }

    spawn(entity) {
        this.objects.push(entity);
    }

    collide(a, b) {
        return (
            a.pos.x < b.pos.x + b.size.x &&
            a.pos.x + a.size.x > b.pos.x &&
            a.pos.y < b.pos.y + b.size.y &&
            a.pos.y + a.size.y > b.pos.y
        );
    }

    cleanObjects() {
        this.objects = this.objects.filter(e => !e._killed);
    }

    cleanEffects() {
        this.objects = this.objects.filter(e => !(e instanceof HitEffect));
    }
}
