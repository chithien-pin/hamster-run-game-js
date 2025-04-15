ig.module("game.entities.game-character").requires("impact.entity").defines(function () {
    EntityGameCharacter = ig.Entity.extend({
        offset: {x: 75, y: 240},
        size: {x: 1, y: 1},
        charWidth: 50,
        charHeight: 50,
        runContactRect: {x: -25, y: -50, w: 50, h: 50},
        jumpContactRect: {x: -25, y: -100, w: 50, h: 50},
        jumpOffset: 0,
        jumpTime: 0,
        alpha: 1,
        zIndex: 1200,
        ballAnimSheet: new ig.AnimationSheet("media/graphics/game/character/ball_11x2.png", 150, 300),
        runAnimSheet: new ig.AnimationSheet("media/graphics/game/character/run_7x2.png", 150, 300),
        slideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/slide_5x4.png",
            150, 300),
        jumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/jump_9x2.png", 150, 300),
        runAnim: null,
        slideAnim: null,
        jumpAnim: null,
        anim: null,
        skateboardRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/skaterun_8x2.png", 150, 300),
        skateboardJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/skatejump_9x2.png", 150, 300),
        rollerskateRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerrun_5x1.png", 150, 300),
        rollerskateSlideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerslide_9x2.png",
            150, 300),
        rollerskateJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerjump_8x2.png", 150, 300),
        rocketRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rocketrun_7x2.png", 150, 300),
        rocketJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rocketjump_7x3.png", 150, 300),
        carpetAnimSheet: new ig.AnimationSheet("media/graphics/game/character/carpet_5x2.png", 150, 300),
        hoverboardAnimSheet: new ig.AnimationSheet("media/graphics/game/character/hoverboard_4x2.png",
            150, 300),
        growTime: 0,
        growFPS: 0.03,
        growFrame: 0,
        growImage: [new ig.Image("media/graphics/game/character/grow-anim/frame_0000.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0001.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0002.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0003.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0004.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0005.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0006.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0007.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0008.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0009.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0010.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0011.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0012.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0013.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0014.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0015.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0016.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0017.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0018.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0019.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0020.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0021.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0022.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0023.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0024.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0025.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0026.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0027.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0028.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0029.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0030.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0031.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0032.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0033.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0034.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0035.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0036.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0037.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0038.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0039.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0040.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0041.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0042.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0043.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0044.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0045.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0046.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0047.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0048.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0049.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0050.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0051.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0052.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0053.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0054.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0055.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0056.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0057.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0058.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0059.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0060.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0061.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0062.png"),
            new ig.Image("media/graphics/game/character/grow-anim/frame_0063.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0064.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0065.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0066.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0067.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0068.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0069.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0070.png")],
        STATES: {RUN: 0, SLIDE: 1, JUMP: 2, POWERED: 3, INTRO: 4},
        state: 0,
        worldPos: {x: 0, y: 0, z: 0},
        zValue: 13,
        scale: 1,
        scaleModifier: 1,
        zWidth: 1,
        invulnerableDuration: 2,
        invulnerableStartTime: 0,
        isInvulnerable: !1,
        isShaking: !1,
        shakeDuration: 0.25,
        shakeStartTime: 0,
        shakeOffset: {x: 0, y: 0},
        shakeAmount: 3,
        queuedPowerUp: !1,
        stepSoundPlayed: 0,
        stepSoundPlayedTime: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.ballAnim = new ig.Animation(this.ballAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], !1);
            ig.game.getItemUpgradeEquipped(0) ?
                (this.runAnim = new ig.Animation(this.skateboardRunAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], !1), this.jumpAnim = new ig.Animation(this.skateboardJumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16], !0), this.slideAnim = new ig.Animation(this.slideAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18], !0)) : ig.game.getItemUpgradeEquipped(1) ? (this.runAnim = new ig.Animation(this.rollerskateRunAnimSheet, 0.03, [0, 1, 2, 3, 4], !1), this.jumpAnim =
                    new ig.Animation(this.rollerskateJumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15], !0), this.slideAnim = new ig.Animation(this.rollerskateSlideAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17], !0)) : (ig.game.getItemUpgradeEquipped(2) ? (this.runAnim = new ig.Animation(this.rocketRunAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], !1), this.jumpAnim = new ig.Animation(this.rocketJumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20], !0)) : ig.game.getItemUpgradeEquipped(3) ? this.jumpAnim = this.runAnim = new ig.Animation(this.carpetAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1) : ig.game.getItemUpgradeEquipped(4) ? this.jumpAnim = this.runAnim = new ig.Animation(this.hoverboardAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7], !1) : (this.runAnim = new ig.Animation(this.runAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], !1), this.jumpAnim = new ig.Animation(this.jumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 15, 16], !0)), this.slideAnim =
                    new ig.Animation(this.slideAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18], !0));
            this.anim = this.runAnim;
            this.charWidth *= this.scaleModifier;
            this.charHeight *= this.scaleModifier;
            this.state = this.STATES.INTRO
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred();
            this.growTime = this.control.gameTime
        },
        draw: function () {
            if (this.state == this.STATES.INTRO) {
                var b = this.pos.x, c = this.pos.y;
                ig.system.context.save();
                ig.system.context.translate(this.bitwiseRound(b), this.bitwiseRound(c));
                ig.system.context.scale(0.5, 0.5);
                this.growImage[this.growFrame].draw(-126, -280);
                ig.system.context.restore()
            } else {
                b = this.bitwiseRound(this.pos.x);
                c = this.bitwiseRound(this.pos.y);
                0 > c && (c = 0);
                if (0 < c) {
                    var d = 1 - -this.jumpOffset / 500;
                    0 > d && (d = 0);
                    var e = 30 * d, f = ig.system.context;
                    f.save();
                    f.translate(b, c);
                    f.scale(1, 0.5);
                    f.beginPath();
                    f.arc(0, 0, e, 0, 2 * Math.PI, !1);
                    f.fillStyle = "rgba(0,0,0," + 0.2 * d + ")";
                    f.fill();
                    f.restore()
                }
                b =
                    this.pos.x - this.offset.x + this.shakeOffset.x;
                c = this.pos.y + this.jumpOffset - this.offset.y + this.shakeOffset.y;
                ig.system.context.globalAlpha = this.alpha;
                this.anim.draw(this.bitwiseRound(b), this.bitwiseRound(c));
                ig.system.context.globalAlpha = 1
            }
        },
        update: function () {
            if (!this.control.gamePaused && !this.control.gameOver && !this.control.gameStarting) {
                this.parent();
                if (this.state == this.STATES.INTRO) {
                    var b = this.control.gameTime - this.growTime;
                    this.growFrame = Math.floor(b / this.growFPS);
                    if (this.growFrame >= this.growImage.length &&
                        (this.growFrame = this.growImage.length - 1, 2.5 < b)) {
                        this.run();
                        return
                    }
                }
                this.state == this.STATES.RUN && (ig.game.getItemUpgradeEquipped(0) || ig.game.getItemUpgradeEquipped(1) ? (b = ig.system.clock.delta() - this.stepSoundPlayedTime, 2 < b && (this.stepSoundPlayedTime = ig.system.clock.delta(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.skate))) : !ig.game.getItemUpgradeEquipped(3) && !ig.game.getItemUpgradeEquipped(4) && (4 == this.runAnim.frame && 4 != this.stepSoundPlayed && (this.stepSoundPlayed = 4, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)),
                11 == this.runAnim.frame && 11 != this.stepSoundPlayed && (this.stepSoundPlayed = 11, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step))));
                this.state == this.STATES.POWERED && (3 == this.ballAnim.frame && 3 != this.stepSoundPlayed && (this.stepSoundPlayed = 3, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 8 == this.ballAnim.frame && 8 != this.stepSoundPlayed && (this.stepSoundPlayed = 8, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 14 == this.ballAnim.frame && 14 != this.stepSoundPlayed && (this.stepSoundPlayed =
                    14, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)), 19 == this.ballAnim.frame && 19 != this.stepSoundPlayed && (this.stepSoundPlayed = 19, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)));
                this.control.tutorialPauseMode || (this.anim.update(), this.isInvulnerable && (b = this.control.gameTime - this.invulnerableStartTime, b >= this.invulnerableDuration ? (this.alpha = 1, this.isInvulnerable = !1) : (b %= 0.5, 0.25 < b && (b = 0.25 - (b - 0.25)), this.alpha = 0.25 + 0.75 * (b / 0.25))), this.isShaking && (b = this.control.gameTime - this.shakeStartTime,
                b >= this.shakeDuration && (this.shakeOffset.x = 0, this.shakeOffset.y = 0, this.isShaking = !1)), this.queuedPowerUp && (this.state == this.STATES.RUN || this.state == this.STATES.SLIDE) && this.powerUp())
            }
        },
        run: function () {
            this.state != this.STATES.POWERED && (this.state = this.STATES.RUN, this.anim = this.runAnim, this.anim.rewind(), this.zIndex = 1200 - this.zValue, ig.game.sortEntitiesDeferred())
        },
        slide: function () {
            this.state != this.STATES.POWERED && (this.state = this.STATES.SLIDE, this.anim = this.slideAnim, this.anim.rewind(), this.zIndex =
                1200 - this.zValue, this.zIndex -= 1, ig.game.sortEntitiesDeferred(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.slide))
        },
        jump: function () {
            this.jumpTime = this.control.gameTime;
            this.zIndex = 1200 - this.zValue;
            this.zIndex += 10;
            ig.game.sortEntitiesDeferred();
            this.state != this.STATES.POWERED && !ig.game.getItemUpgradeEquipped(3) && !ig.game.getItemUpgradeEquipped(4) && (this.state = this.STATES.JUMP, this.anim = this.jumpAnim, this.anim.gotoFrame(0), this.anim.rewind());
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.jump)
        },
        queuePowerUp: function () {
            this.queuedPowerUp = !0
        },
        powerUp: function () {
            this.queuedPowerUp = !1;
            this.state != this.STATES.POWERED && (this.state = this.STATES.POWERED, this.anim = this.ballAnim, this.anim.rewind(), this.zIndex = 1200 - this.zValue, ig.game.sortEntitiesDeferred())
        },
        powerDown: function () {
            if (0 > this.jumpOffset) {
                this.state = this.STATES.JUMP;
                this.anim = this.jumpAnim;
                var b = Math.floor((this.control.gameTime - this.jumpTime) / this.anim.frameTime);
                this.anim.rewind();
                this.anim.gotoFrame(b)
            } else this.state = this.STATES.RUN,
                this.run();
            this.invulnerableStartTime = this.control.gameTime - 1;
            this.isInvulnerable = !0
        },
        shake: function () {
            this.isShaking = !0;
            this.shakeStartTime = this.control.gameTime;
            this.shakeOffset.x = -this.shakeAmount + 2 * Math.random() * this.shakeAmount;
            this.shakeOffset.y = -this.shakeAmount
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
