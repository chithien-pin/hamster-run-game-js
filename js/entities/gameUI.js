import {GameEntity} from './entity-base.js';

export class GameUI extends GameEntity {
    constructor(x = 0, y = 0) {
        super(x, y);
        this.zIndex = 3000;

        this.score = 0;
        this.coins = 0;
        this.cookies = 0;

        this.fontColor = 'white';
        this.font = '16px monospace';

        this.images = {
            coin: new Image(),
            cookie: new Image()
        };
        this.images.coin.src = 'media/graphics/game/ui/coin.png';
        this.images.cookie.src = 'media/graphics/game/ui/cookie.png';
    }

    update(dt) {
        // you can hook score logic here (optional)
    }

    draw(ctx) {
        ctx.fillStyle = this.fontColor;
        ctx.font = this.font;

        // Score
        ctx.fillText(`Score: ${this.score}`, 20, 30);

        // Coin icon + count
        ctx.drawImage(this.images.coin, 20, 40, 24, 24);
        ctx.fillText(`x ${this.coins}`, 50, 60);

        // Cookie icon + count
        ctx.drawImage(this.images.cookie, 20, 70, 24, 24);
        ctx.fillText(`x ${this.cookies}`, 50, 90);
    }
}