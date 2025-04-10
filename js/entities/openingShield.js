import {_SETTINGS} from "../core/config";
import {Timer} from '../engine/timer.js';
import {GameEntity} from './entity-base.js';

export class OpeningShield extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.size = {x: 48, y: 48};
        this.shieldImage = new Image();
        this.shieldImage.src = 'media/graphics/opening/shield.png';
        this.mIconImage = new Image();
        this.mIconImage.src = 'media/graphics/opening/m_icon.png';
        this.titleImage = new Image();
        this.titleImage.src = 'media/graphics/opening/title.png';
        this.initTimer = null;
        this.shieldAnim = 0;
        this.move = 0;
    }

    ready() {
        if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
            this.initTimer = new Timer(0.1);
            // sample.js gọi openingSound :contentReference[oaicite:1]{index=1}
        } else {
            this._killed = true;
            // next level via Director
        }
    }

    update(dt) {
        if (this.initTimer && this.initTimer.delta() > 0) {
            this.initTimer = null;
            // bắt đầu shield animation timers…
        }
        // sample.js logic vẽ shield opening :contentReference[oaicite:2]{index=2}
    }

    draw(ctx) {
        // vẽ shield + icon + title với rotation và gradient :contentReference[oaicite:3]{index=3}
    }
}