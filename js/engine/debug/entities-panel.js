export class EntitiesPanel {
    constructor(game) {
        this.game = game;
    }

    render(ctx) {
        ctx.font = '12px monospace';
        ctx.fillStyle = 'yellow';
        ctx.fillText('Entities:', 10, 20);

        let y = 40;
        this.game.entities.forEach((ent, i) => {
            ctx.fillText(`${i + 1}. ${ent.constructor.name}`, 10, y);
            y += 16;
        });
    }
}