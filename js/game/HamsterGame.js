// eslint-disable-next-line import/named
import {Game} from '../core/game.js';
import {HitEffect} from '../entities/hitEffect.js';

export class HamsterGame extends Game {
    constructor() {
        super();

        this.spawnTimers = {
            cookie: 0,
            bg: 0,
            obstacle: 0
        };
    }

    update(dt) {
        super.update(dt);

        // Spawn cookie mỗi 5s
        this.spawnTimers.cookie += dt;
        if (this.spawnTimers.cookie > 5) {
            this.spawnTimers.cookie = 0;
            this.spawn(this.entityMap.Cookie, 800, 340);
        }

        // Spawn background object mỗi 2s
        this.spawnTimers.bg += dt;
        if (this.spawnTimers.bg > 2) {
            this.spawnTimers.bg = 0;
            this.spawn(this.entityMap.BgObject, Math.random() * 600 + 200);
        }

        // Spawn obstacle mỗi 2s
        this.spawnTimers.obstacle += dt;
        if (this.spawnTimers.obstacle > 2) {
            this.spawnTimers.obstacle = 0;
            this.spawn(this.entityMap.Obstacle, 800, 320);
        }

        // Va chạm đơn giản giữa Player và Obstacle
        const player = this.entities.find(e => e.constructor.name === 'Player');
        for (let entity of this.entities) {
            if (entity.constructor.name === 'Obstacle' && this.collide(player, entity)) {
                this.spawn(HitEffect, player.pos.x, player.pos.y);
                console.log("💥 Game Over!");
                // Bạn có thể dừng game hoặc reset lại tùy ý
            }
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 800, 450);

        // Vẽ background (nếu có)
        if (this.backgroundImage) {
            const bg = new Image();
            bg.src = this.backgroundImage;
            if (bg.complete) {
                ctx.drawImage(bg, 0, 0, 800, 450);
            }
        }

        super.draw(ctx);
    }

    collide(a, b) {
        return (
            a.pos.x < b.pos.x + b.size.x &&
            a.pos.x + a.size.x > b.pos.x &&
            a.pos.y < b.pos.y + b.size.y &&
            a.pos.y + a.size.y > b.pos.y
        );
    }
}
