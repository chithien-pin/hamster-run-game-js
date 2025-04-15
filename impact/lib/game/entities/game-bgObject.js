ig.module("game.entities.game-bgObject").requires("impact.entity").defines(function () {
    EntityGameBgObject = ig.Entity.extend({
        offset: {x: 140, y: 362},
        size: {x: 1, y: 1},
        contactRect: {x: 0, y: 0},
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/bg00.png"), new ig.Image("media/graphics/game/objects/bg01.png"), new ig.Image("media/graphics/game/objects/bg02.png"), new ig.Image("media/graphics/game/objects/bg03.png"), new ig.Image("media/graphics/game/objects/bg04.png"), new ig.Image("media/graphics/game/objects/bg05.png"),
            new ig.Image("media/graphics/game/objects/bg06.png"), new ig.Image("media/graphics/game/objects/bg07.png"), new ig.Image("media/graphics/game/objects/bg08.png"), new ig.Image("media/graphics/game/objects/bg09.png"), new ig.Image("media/graphics/game/objects/bg10.png"), new ig.Image("media/graphics/game/objects/bg11.png"), new ig.Image("media/graphics/game/objects/bg12.png"), new ig.Image("media/graphics/game/objects/bg13.png"), new ig.Image("media/graphics/game/objects/bg14.png"), new ig.Image("media/graphics/game/objects/bg15.png"),
            new ig.Image("media/graphics/game/objects/bg16.png"), new ig.Image("media/graphics/game/objects/bg17.png"), new ig.Image("media/graphics/game/objects/bg18.png"), new ig.Image("media/graphics/game/objects/bg19.png"), new ig.Image("media/graphics/game/objects/bg20.png"), new ig.Image("media/graphics/game/objects/bg21.png"), new ig.Image("media/graphics/game/objects/bg22.png"), new ig.Image("media/graphics/game/objects/bg23.png"), new ig.Image("media/graphics/game/objects/bg24.png"), new ig.Image("media/graphics/game/objects/bg25.png"),
            new ig.Image("media/graphics/game/objects/bg26.png"), new ig.Image("media/graphics/game/objects/bg27.png")],
        imageId: 0,
        worldPos: {x: 0, y: 0, z: 0},
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.setImageId(this.imageId);
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function (b) {
            null != b && (this.imageId =
                b, this.image = this.images[b], this.offset.x = this.image.width / 2, this.offset.y = this.image.height)
        },
        draw: function () {
            var b = this.worldPos.x, c = this.worldPos.y, d = this.zValue, e = this.control.cameraDistance;
            -10 > d ? (this.killed = !0, this.control.cleanObjects(), this.kill()) : (d = e / d, b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d, c = this.control.cameraPos.y * d + ig.system.height - c * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y), this.pos.x = b, this.pos.y = c, b = this.control.horizonLine.y, e = this.control.horizonLine.y +
                this.control.distanceFogHeight, c < b || (c < e && (ig.system.context.globalAlpha = (c - b) / (e - b)), d *= this.scaleModifier, c = this.pos.y - this.offset.y * d - ig.game._rscreen.y, ig.system.context.drawImage(this.image.data, this.bitwiseRound(this.pos.x - this.offset.x * d - ig.game._rscreen.x), this.bitwiseRound(c), this.image.width * d, this.image.height * d), ig.system.context.globalAlpha = 1))
        },
        update: function () {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO &&
            (this.control.tutorialPauseMode || this.moveForward(-this.control.runSpeed * ig.system.tick))
        },
        moveForward: function (b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
