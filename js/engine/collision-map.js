export class CollisionMap {
    constructor(tiles, tileSize) {
        this.tiles = tiles; // 2D array
        this.tileSize = tileSize;
    }

    getTile(x, y) {
        const col = Math.floor(x / this.tileSize);
        const row = Math.floor(y / this.tileSize);
        return this.tiles[row]?.[col] || 0;
    }

    collideRect(x, y, width, height) {
        const left = Math.floor(x / this.tileSize);
        const right = Math.floor((x + width) / this.tileSize);
        const top = Math.floor(y / this.tileSize);
        const bottom = Math.floor((y + height) / this.tileSize);

        for (let row = top; row <= bottom; row++) {
            for (let col = left; col <= right; col++) {
                if (this.tiles[row]?.[col]) {
                    return true;
                }
            }
        }
        return false;
    }

    draw(ctx, offsetX = 0, offsetY = 0) {
        ctx.strokeStyle = 'rgba(255,0,0,0.3)';
        for (let row = 0; row < this.tiles.length; row++) {
            for (let col = 0; col < this.tiles[row].length; col++) {
                if (this.tiles[row][col]) {
                    ctx.strokeRect(
                        col * this.tileSize - offsetX,
                        row * this.tileSize - offsetY,
                        this.tileSize,
                        this.tileSize
                    );
                }
            }
        }
    }
}