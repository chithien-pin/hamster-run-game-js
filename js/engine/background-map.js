export class BackgroundMap {
    constructor(tiles, tileSize, imagePath) {
        this.tiles = tiles;
        this.tileSize = tileSize;
        this.scroll = {x: 0, y: 0};

        this.tileset = new Image();
        this.tileset.src = imagePath;
        this.loaded = false;

        this.tileset.onload = () => {
            this.loaded = true;
            this.tilesPerRow = Math.floor(this.tileset.width / tileSize);
        };
    }

    draw(ctx, offsetX = 0, offsetY = 0) {
        if (!this.loaded) return;

        for (let row = 0; row < this.tiles.length; row++) {
            for (let col = 0; col < this.tiles[row].length; col++) {
                const tile = this.tiles[row][col];
                if (tile === 0) continue;

                const sx = ((tile - 1) % this.tilesPerRow) * this.tileSize;
                const sy = Math.floor((tile - 1) / this.tilesPerRow) * this.tileSize;
                const dx = col * this.tileSize - this.scroll.x + offsetX;
                const dy = row * this.tileSize - this.scroll.y + offsetY;

                ctx.drawImage(
                    this.tileset,
                    sx, sy, this.tileSize, this.tileSize,
                    dx, dy, this.tileSize, this.tileSize
                );
            }
        }
    }

    setScroll(x, y) {
        this.scroll.x = x;
        this.scroll.y = y;
    }
}