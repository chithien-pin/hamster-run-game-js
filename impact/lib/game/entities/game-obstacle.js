ig.module("game.entities.game-obstacle").requires("impact.entity").defines(function () {
    EntityGameObstacle = ig.Entity.extend({
        offset: {x: 72, y: 100},
        size: {x: 1, y: 1},
        contactRect: {x: -58, y: -95, w: 119, h: 92},
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/obstacle00.png"), new ig.Image("media/graphics/game/objects/obstacle01.png"), new ig.Image("media/graphics/game/objects/obstacle02.png"), new ig.Image("media/graphics/game/objects/obstacle03.png"), new ig.Image("media/graphics/game/objects/obstacle04.png"),
            new ig.Image("media/graphics/game/objects/obstacle05.png"), new ig.Image("media/graphics/game/objects/obstacle06.png"), new ig.Image("media/graphics/game/objects/obstacle07.png"), new ig.Image("media/graphics/game/objects/obstacle08.png"), new ig.Image("media/graphics/game/objects/obstacle09.png"), new ig.Image("media/graphics/game/objects/obstacle10.png"), new ig.Image("media/graphics/game/objects/obstacle11.png")],
        imageId: 0,
        worldPos: {x: 0, y: 0, z: 0},
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 1,
        slidable: !1,
        zWidth: 0,
        knockedOut: !1,
        knockOutPos: {x: 0, y: 0},
        knockOutOffset: {x: 0, y: 0},
        knockOutGravity: 1200,
        knockOutVector: {x: 0, y: 0},
        knockOutAlpha: 0,
        knockOutAngle: 0,
        knockOutDirection: 1,
        knockOutStopped: !1,
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
            if (null != b) {
                if (0 ==
                    b || 1 == b || 2 == b) b = 0 + Math.floor(3 * Math.random());
                if (8 == b || 9 == b) b = 8 + Math.floor(2 * Math.random());
                if (10 == b || 11 == b) b = 10 + Math.floor(2 * Math.random());
                this.imageId = b;
                this.image = this.images[b];
                this.offset.x = this.image.width / 2;
                this.offset.y = this.image.height;
                this.slidable = 3 == b ? !0 : !1;
                this.contactRect.w = this.image.width * this.scaleModifier;
                this.contactRect.h = this.image.height / 2 * this.scaleModifier;
                this.contactRect.x = -this.contactRect.w / 2;
                this.contactRect.y = -this.contactRect.h;
                if (5 == b || 6 == b || 8 == b || 9 == b) this.zWidth =
                    3;
                if (10 == b || 11 == b) this.zWidth = 5
            }
        },
        draw: function () {
            var b = this.worldPos.x, c = this.worldPos.y, d = this.zValue, e = this.control.cameraDistance;
            if (-10 > d) this.killed = !0, this.control.cleanObjects(), this.kill(); else {
                var f = 0;
                this.knockedOut && (b += this.knockOutPos.x, c -= this.knockOutPos.y, f = this.knockOutAngle);
                d = e / d;
                b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d;
                c = this.control.cameraPos.y * d + ig.system.height - c * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y);
                this.pos.x = b;
                this.pos.y = c;
                b = this.control.horizonLine.y;
                e = this.control.horizonLine.y + this.control.distanceFogHeight;
                if (!(c < b)) {
                    c < e && (ig.system.context.globalAlpha = (c - b) / (e - b));
                    this.knockedOut && (ig.system.context.globalAlpha *= this.knockOutAlpha);
                    var j = d * this.scaleModifier, d = this.pos.x, c = this.pos.y, b = -this.offset.x * j,
                        e = -this.offset.y * j, n = this.image.width * j, j = this.image.height * j;
                    0 > n && (n = 0);
                    0 > j && (j = 0);
                    ig.system.context.save();
                    ig.system.context.translate(d, c);
                    0 < f && ig.system.context.rotate(f);
                    ig.system.context.drawImage(this.image.data, b, e, n, j);
                    ig.system.context.restore();
                    ig.system.context.globalAlpha = 1
                }
            }
        },
        update: function () {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO && (this.control.tutorialPauseMode || this.moveForward(-this.control.runSpeed * ig.system.tick))
        },
        moveForward: function (b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred();
            this.knockedOut && (this.zIndex = 2E3, ig.game.sortEntitiesDeferred(), this.knockOutPos.x += this.knockOutVector.x * ig.system.tick,
                this.knockOutPos.y += this.knockOutVector.y * ig.system.tick, 0 < this.knockOutPos.y && (this.knockOutPos.y = 0, this.knockOutVector.x = 0, this.knockOutVector.y = 0, this.knockOutStopped = !0), this.knockOutStopped || (this.knockOutVector.y += this.knockOutGravity * ig.system.tick, this.knockOutAngle += 3 * (this.knockOutDirection * Math.PI) * ig.system.tick, 0 > this.knockOutAngle && (this.knockOutAngle = 2 * Math.PI + this.knockOutAngle), this.knockOutAlpha -= 2 * ig.system.tick, 0 > this.knockOutAlpha && (this.knockOutAlpha = 0, this.knockOutStopped = !0)))
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        },
        knockOut: function () {
            if (!this.knockedOut) {
                this.knockedOut = !0;
                var b = 200 + 100 * Math.random(), c = 1;
                85 < this.worldPos.x ? c = 1 : -85 > this.worldPos.x ? c = -1 : 0.5 <= Math.random() && (c = -1);
                this.knockOutVector.x = b * c / 0.25;
                this.knockOutVector.y = -1200;
                this.knockOutPos.x = 0;
                this.knockOutPos.y = 0;
                this.knockOutAlpha = 1;
                this.knockOutAngle = 0;
                this.knockOutDirection = c
            }
        }
    })
});
