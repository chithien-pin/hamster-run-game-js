import {_STRINGS} from '../core/config.js';
import {GameEntity} from './entity-base.js';

export class GameTutorial extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.step = 0;
        this.timer = 0;
        this.duration = 2.0;
        this.texts = _STRINGS.Tutorial;
    }

    update(dt) {
        this.timer += dt;
        if (this.timer > this.duration) {
            this.step++;
            this.timer = 0;
            if (this.step >= this.texts.length) this._killed = true;
        }
    }

    draw(ctx) {
        if (this.step >= this.texts.length) return;

        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(100, 320, 600, 100);

        ctx.fillStyle = '#fff';
        ctx.font = '20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.texts[this.step][0], 400, 350);
        ctx.fillText(this.texts[this.step][1], 400, 380);
    }
}
