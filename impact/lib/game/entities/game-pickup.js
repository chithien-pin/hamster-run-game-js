ig.module("game.entities.game-pickup").requires("impact.entity").defines(function () {
    EntityGamePickup = ig.Entity.extend({
        offset: {x: 68, y: 126},
        size: {x: 1, y: 1},
        contactRect: {x: -57, y: -109, w: 114, h: 106},
        zIndex: 1200,
        cookieImage: new ig.Image("media/graphics/game/pickups/cookie.png"),
        cookieOffset: {x: 0, y: 0},
        cookieDown: !1,
        coinAnimSheet: new ig.AnimationSheet("media/graphics/game/pickups/coin_1x10.png", 70, 66),
        anim: null,
        worldPos: {x: 0, y: 0, z: 0},
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 2,
        zWidth: 0,
        pickupId: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.anim = new ig.Animation(this.coinAnimSheet, 0.08, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1);
            this.offset.x = 35;
            this.offset.y = 66;
            this.contactRect.w = 70;
            this.contactRect.h = 66;
            this.contactRect.x = -this.contactRect.w / 2;
            this.contactRect.y = -this.contactRect.h
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setPickupId: function (b) {
            null != b && (this.pickupId =
                b, 1 == b ? (this.offset.x = this.cookieImage.width / 2, this.offset.y = this.cookieImage.height, this.contactRect.w = this.cookieImage.width, this.contactRect.h = this.cookieImage.height) : (this.offset.x = 35, this.offset.y = 66, this.contactRect.w = 70, this.contactRect.h = 66), this.contactRect.x = -this.contactRect.w / 2, this.contactRect.y = -this.contactRect.h / 2)
        },
        draw: function () {
            var b = this.worldPos.x, c = this.worldPos.y, d = this.zValue, e = this.control.cameraDistance;
            if (-10 > d) this.killed = !0, this.control.cleanObjects(), this.kill(); else {
                var e =
                    e / d, f, b = ig.system.width / 2 - this.control.cameraPos.x * e + b * e;
                f = this.control.cameraPos.y * e + ig.system.height - c * e - (1 - e) * (ig.system.height - this.control.vanishingPoint.y);
                this.pos.x = b;
                this.pos.y = f;
                if (!(65 < d)) {
                    45 < d && (ig.system.context.globalAlpha = 1 - (d - 45) / 20);
                    d = e * this.scaleModifier;
                    e = this.control.cameraPos.y * e + ig.system.height - (1 - e) * (ig.system.height - this.control.vanishingPoint.y);
                    0 > e && (e = 0);
                    if (1 == this.pickupId) {
                        if (0 < e) {
                            b = 1 - (c - this.cookieOffset.y) / 500;
                            0 > b && (b = 0);
                            f = this.cookieImage.width / 4 * d * b;
                            var c = this.pos.x,
                                j = ig.system.context;
                            j.save();
                            j.translate(this.bitwiseRound(c), this.bitwiseRound(e));
                            j.scale(1, 0.5);
                            j.beginPath();
                            j.arc(0, 0, f, 0, 2 * Math.PI, !1);
                            j.fillStyle = "rgba(0,0,0," + 0.2 * b + ")";
                            j.fill();
                            j.restore()
                        }
                        c = this.pos.x - (this.offset.x - this.cookieOffset.x) * d;
                        e = this.pos.y - (this.offset.y - this.cookieOffset.y) * d;
                        b = this.cookieImage.width * d;
                        d *= this.cookieImage.height;
                        0 < b && 0 < d && ig.system.context.drawImage(this.cookieImage.data, c, e, b, d)
                    } else 0 < e && (b = 1 - c / 500, 0 > b && (b = 0), f = 17.5 * d * b, c = this.pos.x, j = ig.system.context, j.save(),
                        j.translate(this.bitwiseRound(c), this.bitwiseRound(e)), j.scale(1, 0.5), j.beginPath(), j.arc(0, 0, f, 0, 2 * Math.PI, !1), j.fillStyle = "rgba(0,0,0," + 0.2 * b + ")", j.fill(), j.restore()), c = this.pos.x - this.offset.x * d, e = this.pos.y - this.offset.y * d, ig.system.context.save(), ig.system.context.translate(this.bitwiseRound(c), this.bitwiseRound(e)), ig.system.context.scale(d, d), this.anim.draw(0, 0), ig.system.context.restore();
                    ig.system.context.globalAlpha = 1
                }
            }
        },
        update: function () {
            !this.control.gamePaused && !this.control.gameOver &&
            (!this.control.gameStarting && this.control.character.state != this.control.character.STATES.INTRO && !this.control.tutorialPauseMode) && (this.moveForward(-this.control.runSpeed * ig.system.tick), 1 == this.pickupId ? this.cookieDown ? (this.cookieOffset.y += 60 * ig.system.tick, 0 <= this.cookieOffset.y && (this.cookieOffset.y = -this.cookieOffset.y, this.cookieDown = !1)) : (this.cookieOffset.y -= 60 * ig.system.tick, -20 >= this.cookieOffset.y && (this.cookieOffset.y = -20 - (this.cookieOffset.y + 20), this.cookieDown = !0)) : this.anim.update())
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
