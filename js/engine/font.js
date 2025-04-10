export class Font {
    constructor(imagePath, charWidth = 16, charHeight = 16, firstCharCode = 32) {
        this.image = new Image();
        this.image.src = imagePath;
        this.charWidth = charWidth;
        this.charHeight = charHeight;
        this.firstCharCode = firstCharCode;
        this.loaded = false;

        this.image.onload = () => {
            this.loaded = true;
            this.charsPerRow = Math.floor(this.image.width / charWidth);
        };
    }

    draw(ctx, text, x, y, align = 'left') {
        if (!this.loaded) return;

        if (align === 'center') {
            x -= (text.length * this.charWidth) / 2;
        } else if (align === 'right') {
            x -= text.length * this.charWidth;
        }

        for (let i = 0; i < text.length; i++) {
            const c = text.charCodeAt(i) - this.firstCharCode;
            if (c < 0) continue;

            const sx = (c % this.charsPerRow) * this.charWidth;
            const sy = Math.floor(c / this.charsPerRow) * this.charHeight;

            ctx.drawImage(
                this.image,
                sx, sy, this.charWidth, this.charHeight,
                x + i * this.charWidth, y,
                this.charWidth, this.charHeight
            );
        }
    }
}