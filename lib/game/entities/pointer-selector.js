ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 5E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {x: 15, y: 15},
        init: function (b, c, d) {
            this.parent(b, c, d)
        }
    })
});
