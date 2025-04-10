import {GameEntity} from './entity-base.js';
import {ButtonMoreGames} from './buttonMoreGames.js';
import {AudioToggle} from './audioToggle.js';
import {PointerSelector} from './pointerSelector.js';

export class HomeControl extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.zIndex = 100;
        // background + title images…
        // playButtonAnim, shopButtonAnim, infoButtonAnim…
        this.pointer = null;
        this.moreGamesBtn = null;
        this.audioToggle = null;
        this.shopControl = null;
    }

    ready() {
        this.pointer = /* spawn PointerSelector */ null;
        this.moreGamesBtn = new ButtonMoreGames(/* ... */);
        this.audioToggle = new AudioToggle(/* ... */);
        // sample.js init home menu UI :contentReference[oaicite:10]{index=10}
    }

    update(dt) {
        // handle button over/down/released :contentReference[oaicite:11]{index=11}
    }

    draw(ctx) {
        // draw background, title, buttons with alpha :contentReference[oaicite:12]{index=12}
    }
}
