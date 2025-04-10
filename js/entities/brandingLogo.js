import {_SETTINGS} from "../core/config";
import {GameEntity} from './entity-base.js';

export class BrandingLogo extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.image = new Image();
        this.image.src = 'media/graphics/branding/logo.png';
        this.link = _SETTINGS.DeveloperBranding.Logo.Link;
    }

    draw(ctx) {
        if (!this.image.complete) return;
        ctx.drawImage(this.image, this.pos.x, this.pos.y);
    }
}