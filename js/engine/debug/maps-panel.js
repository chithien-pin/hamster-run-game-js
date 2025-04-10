export class MapsPanel {
    constructor(maps = []) {
        this.maps = maps; // array of { name, instance }
    }

    render(ctx) {
        ctx.font = '12px monospace';
        ctx.fillStyle = 'cyan';
        ctx.fillText('Tile Maps:', 300, 20);

        let y = 40;
        this.maps.forEach((map, i) => {
            ctx.fillText(`${i + 1}. ${map.name}`, 300, y);
            y += 16;
        });
    }
}