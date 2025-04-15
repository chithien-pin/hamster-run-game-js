ig.module("game.entities.pointer").requires("impact.entity").defines(function () {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function (b) {
            this.objectArray.push(b)
        },
        clickObject: function (b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && b.clicked();
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && b.released()
        },
        refreshPos: function () {
            const scale = ig.system.scale || 1;
            this.pos.x = ig.input.mouse.x / scale - this.size.x / 2 + ig.game.screen.x;
            this.pos.y = ig.input.mouse.y / scale - this.size.y / 2 + ig.game.screen.y;
        },
        update: function () {
            this.refreshPos();
            var b = null, c = -1;
            for (a = this.objectArray.length -
                1; -1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && this.hoveringItem != b && this.hoveringItem.leave(), null != this.hoveringItem && "function" == typeof this.hoveringItem.over && this.hoveringItem == b && this.hoveringItem.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem =
                null);
            this.isClicking && !this.firstClick ? this.firstClick = !0 : this.isReleased && this.firstClick && (this.firstClick = !1);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
