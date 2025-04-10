export class IgImage {
    constructor(path) {
        this.path = path;
        this.loaded = false;
        this.width = 0;
        this.height = 0;

        this.data = new Image();
        this.data.onload = () => {
            this.loaded = true;
            this.width = this.data.width;
            this.height = this.data.height;
        };
        this.data.src = path;
    }

    draw(ctx, x, y, width = this.width, height = this.height, flipX = false, flipY = false) {
        if (!this.loaded) return;

        ctx.save();
        if (flipX || flipY) {
            ctx.translate(
                flipX ? x + width : x,
                flipY ? y + height : y
            );
            ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
            ctx.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, width, height);
        } else {
            ctx.drawImage(this.data, x, y, width, height);
        }
        ctx.restore();
    }

    drawTile(ctx, x, y, tile, tileWidth, tileHeight = tileWidth, flipX = false, flipY = false) {
        if (!this.loaded) return;

        const tilesPerRow = Math.floor(this.width / tileWidth);
        const sx = (tile % tilesPerRow) * tileWidth;
        const sy = Math.floor(tile / tilesPerRow) * tileHeight;

        ctx.save();
        if (flipX || flipY) {
            ctx.translate(
                flipX ? x + tileWidth : x,
                flipY ? y + tileHeight : y
            );
            ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
            ctx.drawImage(this.data, sx, sy, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
        } else {
            ctx.drawImage(this.data, sx, sy, tileWidth, tileHeight, x, y, tileWidth, tileHeight);
        }
        ctx.restore();
    }
}
