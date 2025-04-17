ig.module("game.entities.audio-toggle").requires("impact.entity").defines(function () {
    EntityAudioToggle = ig.Entity.extend({
        zIndex: 3E3,
        toggleAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/mute.png", 54, 56), 0, [0, 1, 2, 3]),
        togglePos: {x: 0, y: 0},
        toggleRect: {x: -27, y: -28, w: 54, h: 56},
        toggleOffset: {x: 0, y: 0},
        toggleAlpha: 1,
        toggleDown: !1,
        pointer: null,
        control: null,
        hidden: !1,
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            (this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]) || (this.control = ig.game.getEntitiesByType(EntityGameControl)[0]);
            this.control || (this.control = ig.game.getEntitiesByType(EntityShopControl)[0])
        },
        draw: function () {
            if (!this.hidden) {
                var b = ig.system.context, c = this.pos.x + this.togglePos.x + this.toggleOffset.x + this.toggleRect.x,
                    d = this.pos.y + this.togglePos.y + this.toggleOffset.y + this.toggleRect.y;
                this.toggleDown && (d += 2);
                b.save();
                b.globalAlpha = this.toggleAlpha;
                this.toggleAnim.draw(c, d);
                b.restore()
            }
        },
        update: function () {
            this.hidden || this.checkClicks()
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkClicks: function () {
            this.pointer.refreshPos();
            var b = {};
            b.x = this.pointer.pos.x + this.pointer.size.x / 2;
            b.y = this.pointer.pos.y + this.pointer.size.y / 2;
            b.w = 1;
            b.h = 1;
            var c = {};
            c.x = this.pos.x + this.togglePos.x + this.toggleRect.x;
            c.y = this.pos.y + this.togglePos.y + this.toggleRect.y;
            c.w = this.toggleRect.w;
            c.h = this.toggleRect.h;
            this.toggleDown = !1;
            this.toggleAnim.tile = 0;
            ig.game.muted ||
            (this.toggleAnim.tile = 1);
            this.aabbCheck(b, c) && (ig.ua.mobile || (this.toggleAnim.tile = 2), ig.input.state("click") && (this.toggleDown = !0, this.toggleAnim.tile = 3), ig.input.released("click") && (this.toggleDown = !1, ig.ua.mobile || (this.toggleAnim.tile = 2), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), ig.game.muted ? this.unmuteAudio() : this.muteAudio(), ig.ua.mobile && (this.toggleAnim.tile = 0, ig.game.muted || (this.toggleAnim.tile = 1))))
        },
        muteAudio: function () {
            ig.game.muted = !0;
            ig.soundHandler.setMusicVolume(0);
            ig.soundHandler.setSfxVolume(0);
            ig.game.savePlayerStats()
        },
        unmuteAudio: function () {
            ig.game.muted = !1;
            ig.soundHandler.setMusicVolume(ig.game.musicVolume);
            ig.soundHandler.setSfxVolume(ig.game.sfxVolume);
            ig.game.savePlayerStats()
        }
    })
});
