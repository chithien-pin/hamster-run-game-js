export class Map {
    constructor(tiles, tileSize, tilesetImagePath) {
        this.tiles = tiles; // 2D array
        this.tileSize = tileSize;
        this.tileset = new Image();
        this.tileset.src = tilesetImagePath;

        this.tilesPerRow = 0;
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

                const dx = col * this.tileSize - offsetX;
                const dy = row * this.tileSize - offsetY;

                ctx.drawImage(
                    this.tileset,
                    sx, sy, this.tileSize, this.tileSize,
                    dx, dy, this.tileSize, this.tileSize
                );
            }
        }
    }
}
