import {_SETTINGS} from "../core/config";
import {Timer} from '../engine/timer.js';
import {GameEntity} from './entity-base.js';

export class OpeningKitty extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.size = {x: 48, y: 48};
        this.kittyImage = new Image();
        this.kittyImage.src = 'media/graphics/opening/kitty.png';
        this.kittyTitleImage = new Image();
        this.kittyTitleImage.src = 'media/graphics/opening/kittytitle.png';
        this.kittyAnim = -1;
        this.initTimer = null;
    }

    ready() {
        if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
            this.initTimer = new Timer(0.1);
            // sample.js gọi kittyopeningSound :contentReference[oaicite:4]{index=4}
        } else {
            this._killed = true;
            // next level
        }
    }

    update(dt) {
        // logic tăng this.kittyAnim theo timer :contentReference[oaicite:5]{index=5}
    }

    draw(ctx) {
        // gradient background + drawTile kitty + title :contentReference[oaicite:6]{index=6}
    }
}