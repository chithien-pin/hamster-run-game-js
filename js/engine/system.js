// engine/system.js

export class System {
    constructor(canvasId, width = 800, height = 450, scale = 1, fps = 60) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.scale = scale;
        this.fps = fps;

        this.canvas.width = width * scale;
        this.canvas.height = height * scale;

        this.last = Date.now();
        this.tick = 1 / fps;
        this.realTime = 0;
    }

    start(game) {
        const loop = () => {
            const now = Date.now();
            this.tick = (now - this.last) / 1000;
            this.last = now;

            if (game && game.update && game.draw) {
                game.update(this.tick);
                game.draw(this.context);
            }

            requestAnimationFrame(loop);
        };

        loop();
    }

    clear(color = "#000") {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
