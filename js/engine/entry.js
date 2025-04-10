export const ig = {
    game: null,
    debug: false,
    ready: false,
    resources: [],
    modules: [],
    _loadQueue: [],
    _startRunLoop: null,

    // Classic object merger
    merge(original, extended) {
        for (const key in extended) {
            if (Object.prototype.hasOwnProperty.call(extended, key)) {
                if (
                    typeof extended[key] === 'object' &&
                    !(extended[key] instanceof Array) &&
                    original[key]
                ) {
                    ig.merge(original[key], extended[key]);
                } else {
                    original[key] = extended[key];
                }
            }
        }
        return original;
    },

    // Classic inheritance
    Class(base, props) {
        const klass = function (...args) {
            if (this.init) this.init(...args);
        };

        if (base) {
            klass.prototype = Object.create(base.prototype);
            klass.prototype.constructor = klass;
        }

        if (props) ig.merge(klass.prototype, props);
        return klass;
    },

    main(canvasId, gameClass, fps = 60, width = 800, height = 450, scale = 1) {
        const canvas = document.getElementById(canvasId);
        canvas.width = width * scale;
        canvas.height = height * scale;

        ig.system = {
            canvas,
            context: canvas.getContext('2d'),
            width,
            height,
            scale,
            fps,
            tick: 1 / fps,
            realTime: Date.now(),
            last: Date.now(),
        };

        // eslint-disable-next-line new-cap
        ig.game = new gameClass();
        ig.ready = true;

        const run = function () {
            requestAnimationFrame(run);
            const now = Date.now();
            // eslint-disable-next-line
            const tick = (now - ig.system.last) / 1000;
            ig.system.last = now;

            if (ig.game.update && ig.game.draw) {
                ig.game.update();
                ig.game.draw();
            }
        };

        run();
    }
};
