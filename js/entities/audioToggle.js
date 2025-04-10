import { GameEntity } from './entity-base.js';
import { SoundHandler } from '../engine/sound-handler.js';

export class AudioToggle extends GameEntity {
    constructor(x, y) {
        super(x, y);
        this.size = { x: 64, y: 64 };
        this.zIndex = 3000;

        this.pointer = null;
        this.imageMute = new Image();
        this.imageUnmute = new Image();
        this.imageMute.src = 'media/graphics/game/ui/mute.png';
        this.imageUnmute.src = 'media/graphics/game/ui/unmute.png';

        this.soundHandler = new SoundHandler(); // hoặc dùng singleton global
    }

    setPointer(pointer) {
        this.pointer = pointer;
    }

    update(dt) {
        if (!this.pointer) return;

        // Simple AABB collision check with pointer click
        if (this.pointer.pressed &&
            this.pointer.pos.x > this.pos.x &&
            this.pointer.pos.x < this.pos.x + this.size.x &&
            this.pointer.pos.y > this.pos.y &&
            this.pointer.pos.y < this.pos.y + this.size.y) {
            this.soundHandler.toggleMute();
            this.pointer.pressed = false; // prevent repeated toggles
        }
    }

    draw(ctx) {
        const isMuted = this.soundHandler.isMuted();
        const icon = isMuted ? this.imageMute : this.imageUnmute;

        if (icon.complete) {
            ctx.drawImage(icon, this.pos.x, this.pos.y, this.size.x, this.size.y);
        }
    }
}
