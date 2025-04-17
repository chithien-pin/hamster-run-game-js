ig.module("impact.sound-handler").defines(function () {
    ig.SoundHandler = ig.Class.extend({
        formats: {ogg: ".ogg", mp3: ".mp3"},
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{name: "staticSound", path: "media/audio/play/static"}, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {name: "kittyopeningSound", path: "media/audio/opening/kittyopening"},
            {name: "button", path: "media/audio/sfx/button"}, {
                name: "hit",
                path: "media/audio/sfx/hit2"
            }, {name: "step", path: "media/audio/sfx/step"}, {
                name: "skate",
                path: "media/audio/sfx/skate"
            }, {name: "jump", path: "media/audio/sfx/jump2"}, {
                name: "slide",
                path: "media/audio/sfx/woosh"
            }, {name: "crunch", path: "media/audio/sfx/crunch"}, {
                name: "coin",
                path: "media/audio/sfx/ding"
            }, {name: "chirp", path: "media/audio/sfx/chirp"}],
        debug: !1,
        init: function () {
            this.initSfx();
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function () {
            if (this.voSoundLoaded.length >=
                this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function (b) {
                    b.isPlaying = !1;
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function (b) {
                    b.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function () {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function () {
            this.jukebox ||
            this.setupJukebox();
            this.jukebox && (this.pausePosition = this.jukebox.player.pause(), this.bgmPlaying = !1)
        },
        playBackgroundMusic: function () {
            this.jukebox || this.setupJukebox();
            this.jukebox && (null != this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : (this.jukebox.player.resume(0), this.jukebox.player.play()), this.bgmPlaying = !0)
        },
        playSound: function (b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function (b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function () {
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function (b, c, d) {
            var e = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({urls: [e, c], onload: d}) : new Howl({urls: [e, c]})
        },
        _muteSounds: function () {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function () {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        focusBlurMute: function () {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function () {
            this.forceMuted || this.unmute()
        },
        setForceMuted: function (b) {
            this.forceMuted = b
        },
        mute: function () {
            this._muteSounds();
            this.jukebox && (this.jukebox.player.pause(), this.jukebox.player.setVolume(0.01));
            this.muted = !0
        },
        unmute: function () {
            this._unMuteSounds();
            if (this.jukebox && this.bgmPlaying) {
                this.jukebox.player.resume();
                var b = this.musicVolume;
                0 == b && (b = 0.01);
                this.jukebox.player.setVolume(b)
            }
            this.muted =
                !1
        },
        setupWindowHandler: function () {
            "true" === getQueryVariable("webview") ? ($(window).focus(function () {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function () {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function () {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function () {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function () {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function (b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function () {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function (b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path,
                    b)
            }
        },
        setupDesktopMusic: function () {
            ig.music.add("media/audio/music/bgm.*", "background")
        },
        setupJukebox: function () {
            this.jukebox = new ig.Jukebox;
            this.jukebox.player.setVolume(0.01);
            this.stopBackgroundMusic()
        },
        forceLoopBGM: function () {
            if (this.bgmPlaying && !this.forceMuted && this.jukebox && this.jukebox.player) if (this.jukebox.player.getCurrentTime()) {
                var b = 0.06;
                ig.ua.mobile && (b = 0.06, ig.ua.android && (b = 0.07));
                this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() >=
                    this.jukebox.player.settings.spritemap.music.end - b && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start)) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end - b && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.isPlaying.start)) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() >=
                    this.jukebox.player.backgroundMusic.end - b && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start))
            } else this.jukebox.player.resume()
        },
        setSfxVolume: function (b) {
            this.sfxVolume = b;
            Howler.volume(this.sfxVolume)
        },
        setMusicVolume: function (b) {
            this.musicVolume = b;
            this.jukebox && (b = this.musicVolume, 0 == b ? (this.jukebox.player.setVolume(b), this.bgmPlaying && this.jukebox.player.pause(), this.bgmPlaying = !1) : (this.jukebox.player.setVolume(b), this.bgmPlaying || this.jukebox.player.resume(0),
                this.bgmPlaying = !0))
        }
    })
});
