ig.module("plugins.jukebox").defines(function () {
    ig.Jukebox = ig.Class.extend({
        init: function () {
            this.player = new jukebox.Player({
                resources: ["media/audio/music/bgm.mp3", "media/audio/music/bgm.ogg"],
                spritemap: {music: {start: 0, end: 13.69, loop: !0}}
            })
        }
    })
});