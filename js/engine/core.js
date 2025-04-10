export const ig = {
    system: {
        width: 800,
        height: 450,
        scale: 1,
        fps: 60,
        tick: 1 / 60,
        realTime: 0,
        last: 0,
        canvas: null,
        context: null,

        init(canvasId) {
            this.canvas = document.getElementById(canvasId);
            this.context = this.canvas.getContext('2d');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.last = Date.now();
            this.run();
        },

        run() {
            const loop = () => {
                const now = Date.now();
                this.tick = (now - this.last) / 1000;
                this.last = now;

                if (ig.game && ig.game.update && ig.game.draw) {
                    ig.game.update();
                    ig.game.draw();
                }

                requestAnimationFrame(loop);
            };
            loop();
        }
    },

    game: null
};
