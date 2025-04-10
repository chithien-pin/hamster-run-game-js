export class SoundHandler {
    constructor() {
        this.formats = {
            ogg: ".ogg",
            mp3: ".mp3"
        }
        this.jukebox = null
        this.pausePosition = null
        this.globalMute = !1
        this.forceMuted = !1
        this.muted = !1
        this.bgmPlaying = !1
        this.soundPlaying = !1
        this.currentSoundPlaying = null
        this.soundBuffer = []
        this.voSoundLoaded = []
        this.sfxSoundLoaded = []
        this.SOUNDID = {}
        this.voSoundsToLoad = []
        this.sfxSoundsToLoad = [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "button",
            path: "media/audio/sfx/button"
        }, {
            name: "hit",
            path: "media/audio/sfx/hit2"
        }, {
            name: "step",
            path: "media/audio/sfx/step"
        }, {
            name: "skate",
            path: "media/audio/sfx/skate"
        }, {
            name: "jump",
            path: "media/audio/sfx/jump2"
        }, {
            name: "slide",
            path: "media/audio/sfx/woosh"
        }, {
            name: "crunch",
            path: "media/audio/sfx/crunch"
        }, {
            name: "coin",
            path: "media/audio/sfx/ding"
        }, {
            name: "chirp",
            path: "media/audio/sfx/chirp"
        }]
        this.debug = !1
    }

    init() {
        this.initSfx();
        this.setupWindowHandler()
    }

    muteAudio() {
        this.muted = true;
        Howler.mute(true); // nếu dùng Howler.js
        // Hoặc nếu dùng <audio>, loop tất cả và pause hoặc set volume = 0
    }

    unmuteAudio() {
        this.muted = false;
        Howler.mute(false);
    }

    toggleMute() {
        this.muted ? this.unmuteAudio() : this.muteAudio();
    }

    isMuted() {
        return this.muted;
    }
}

// Optional singleton
export const soundHandler = new SoundHandler();