import {_SETTINGS} from "../core/config";
import {GameEntity} from './entity-base.js';

export class ButtonMoreGames extends GameEntity {
    constructor(x, y, settings = {}) {
        super(x, y, settings);
        this.size = {x: 176, y: 116};
        this.zIndex = 750;
        this.link = settings.link || _SETTINGS.MoreGames.Link;
        this.divLayerName = settings.divLayerName || 'more-games';
        this.canSpawnDiv = false;
    }

    ready() {
        setTimeout(() => this.spawnDiv(), 5);
    }

    spawnDiv() {
        if (this.canSpawnDiv) return;
        this.canSpawnDiv = true;
        if (!_SETTINGS.MoreGames.Enabled) {
            this._killed = true;
            return;
        }
        // Tạo hoặc cập nhật layer div click
        this.checkClickableLayer(
            this.divLayerName,
            this.link,
            true
        );
    }

    checkClickableLayer(id, href, newWindow) {
        // TODO: tạo/div hoặc update div tương tự sample.js :contentReference[oaicite:0]{index=0}
    }
}