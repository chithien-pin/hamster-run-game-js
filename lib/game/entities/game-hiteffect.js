ig.module("game.entities.game-hiteffect").requires("impact.entity").defines(function () {
    EntityGameHiteffect = ig.Entity.extend({
        offset: {x: 150, y: 150},
        size: {x: 1, y: 1},
        contactRect: {x: 0, y: 0},
        zIndex: 1300,
        explodeAnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion_4x2.png", 300, 300),
        explode2AnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion2_4x2.png", 300, 300),
        explodeAnim: null,
        explode2Anim: null,
        anim: null,
        worldPos: {x: 0, y: 0, z: 0},
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        angle: 0,
        alpha: 1,
        timeAlive: 0,
        effectDuration: 0.3,
        effectId: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.explodeAnim = new ig.Animation(this.explodeAnimSheet, this.effectDuration / 7, [0, 1, 2, 3, 4, 5, 6], !0);
            this.anim = this.explode2Anim = new ig.Animation(this.explode2AnimSheet, this.effectDuration / 8, [0, 1, 2, 3, 4, 5, 6, 7], !0);
            this.angle = 2 * Math.random() * Math.PI
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        setEffectId: function (b) {
            this.effectId = b;
            1 == b ? (this.anim = this.explodeAnim, this.offset.y =
                150, this.scaleModifier = 0.8) : this.anim = this.explode2Anim
        },
        draw: function () {
            var b = this.scale * this.scaleModifier, c = this.bitwiseRound(this.pos.x),
                d = this.bitwiseRound(this.pos.y), e = this.bitwiseRound(-this.offset.x),
                f = this.bitwiseRound(-this.offset.y);
            ig.system.context.save();
            ig.system.context.globalAlpha = this.alpha;
            ig.system.context.translate(c, d);
            ig.system.context.rotate(this.angle);
            ig.system.context.scale(b, b);
            this.anim.draw(e, f);
            ig.system.context.restore()
        },
        update: function () {
            if (!this.control.gamePaused &&
                (this.anim.update(), this.timeAlive += ig.system.tick, this.timeAlive > this.effectDuration && (this.killed = !0, this.control.cleanEffects(), this.kill()), 1 == this.effectId)) {
                var b = this.timeAlive / this.effectDuration;
                1 < b && (b = 1);
                0 > b && (b = 0);
                0.5 < b && (this.alpha = 1 - (b - 0.5) / 0.5)
            }
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
