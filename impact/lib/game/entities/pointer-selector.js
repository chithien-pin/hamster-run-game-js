ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 5E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {x: 15, y: 15},
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        update: function () {
            console.log('Pointer:', {
                rawX: ig.input.mouse.x,
                rawY: ig.input.mouse.y,
                canvasX: ig.input.mouse.x / ig.system.scale,
                canvasY: ig.input.mouse.y / ig.system.scale,
                screenX: ig.game.screen.x,
                screenY: ig.game.screen.y
            });
        }
    })
});
