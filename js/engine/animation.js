export class AnimationSheet {
    constructor(imagePath, frameWidth, frameHeight) {
        this.image = new Image();
        this.image.src = imagePath;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.width = 0;
        this.height = 0;

        this.image.onload = () => {
            this.width = this.image.width;
            this.height = this.image.height;
        };
    }

    getFrame(tileIndex) {
        const cols = Math.floor(this.width / this.frameWidth);
        const x = (tileIndex % cols) * this.frameWidth;
        const y = Math.floor(tileIndex / cols) * this.frameHeight;
        return {x, y, w: this.frameWidth, h: this.frameHeight};
    }
}

export class Animation {
    constructor(sheet, frameTime, sequence = [0]) {
        this.sheet = sheet;
        this.frameTime = frameTime;
        this.sequence = sequence;
        this.timer = 0;
        this.currentFrame = 0;
    }

    update(dt) {
        this.timer += dt;
        if (this.timer >= this.frameTime) {
            this.timer -= this.frameTime;
            this.currentFrame = (this.currentFrame + 1) % this.sequence.length;
        }
    }

    draw(ctx, x, y, flip = false) {
        if (!this.sheet.image.complete) return;

        const tile = this.sheet.getFrame(this.sequence[this.currentFrame]);

        ctx.save();
        if (flip) {
            ctx.translate(x + tile.w, y);
            ctx.scale(-1, 1);
            ctx.drawImage(this.sheet.image, tile.x, tile.y, tile.w, tile.h, 0, 0, tile.w, tile.h);
        } else {
            ctx.drawImage(this.sheet.image, tile.x, tile.y, tile.w, tile.h, x, y, tile.w, tile.h);
        }
        ctx.restore();
    }
}
