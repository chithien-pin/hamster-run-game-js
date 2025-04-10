import {_SETTINGS} from "../core/config";
import {GameEntity} from './entity-base.js';

export class BrandingLogoPlaceholder extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.zIndex = 1000;
        this.link = 'https://marketjs.com';
    }

    ready() {
        if (!_SETTINGS.DeveloperBranding.Logo.Enabled) {
            this._killed = true;
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#fff';
        ctx.font = '12px sans-serif';
        ctx.fillText('MarketJS', this.pos.x, this.pos.y);
    }
}