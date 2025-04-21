const _STRINGS = {
    Loading: {
        Loading: "Đang tải..."
    },
    Tutorial: [
        ["Chào! Tớ tên là Tiny.", "Chào mừng đến với S-Ant Run!"],
        ["Thu thập bánh quy để biến thành", "một quả cầu bất khả chiến bại!"],
        ["Vuốt lên để nhảy", "qua chướng ngại vật."],
        ["Nhấn phím MŨI TÊN LÊN để", "nhảy qua chướng ngại vật."],
        ["Chạm hoặc vuốt sang phải", "để nhặt những đồng xu kia!"],
        ["Nhấn phím MŨI TÊN PHẢI", "để nhặt những đồng xu kia!"],
        ["Bây giờ chúng ta cần đi sang trái.", "Chạm hoặc vuốt sang trái."],
        ["Bây giờ chúng ta cần đi sang trái.", "Nhấn phím MŨI TÊN TRÁI."],
        ["Gần tới rồi! Chạm hoặc vuốt", "sang trái một lần nữa."],
        ["Gần tới rồi! Nhấn phím", "MŨI TÊN TRÁI một lần nữa."],
        ["Vuốt xuống để trượt", "và lấy chiếc bánh quy đó!"],
        ["Nhấn phím MŨI TÊN XUỐNG để trượt", "và lấy chiếc bánh quy đó!"],
        ["Giờ thì tất cả phụ thuộc vào bạn.", "Chúc bạn may mắn và vui vẻ!"]
    ],
    UI: {
        enter: "enter",
        continue: "tiếp tục",
        owned: "owned",
        using: "using",
        skateboard: "skateboard",
        rocket: "rocket",
        hoverboard: "hoverboard"
    }
};

const _SETTINGS = {
    API: {
        Enabled: true,
        Log: {
            Events: {
                InitializeGame: true,
                EndGame: true,
                Level: {
                    Begin: true,
                    End: true,
                    Win: true,
                    Lose: true,
                    Draw: true
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: true
        },
        Logo: {
            Enabled: true,
            Link: "http://marketjs.com",
            LinkEnabled: false,
            NewWindow: true,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: false
        },
        Logo: {
            Enabled: false,
            Link: "http://google.com",
            LinkEnabled: true,
            NewWindow: true,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: true,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: true
    },
    Gamecenter: {
        Enabled: true
    }
};

const portraitMode = true;

const mobilePortraitWidth = 480;
const mobilePortraitHeight = 640;
const mobileLandscapeWidth = 640;
const mobileLandscapeHeight = 480;

const mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth;
const mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight;

const desktopWidth = 640;
const desktopHeight = 640;

const dynamicClickableEntityDivs = {};
const coreDivsToResize = ["game", "play", "orientate"];
let w, h, multiplier, destW, destH;

function adjustLayers(centered = false) {
    const widthValue = ig.ua.mobile ? w : destW;
    const heightValue = ig.ua.mobile ? h : destH;
    const leftValue = centered ? 0 : (w - destW) / 2;

    coreDivsToResize.forEach(id => {
        const $el = $("#" + id);
        $el.width(widthValue).height(heightValue);
        if (!ig.ua.mobile) {
            $el.css("left", leftValue);
        }
    });

    $("#ajaxbar").width(w).height(h);
}

var minHeight = 99999999;

function sizeHandler() {
    if (!$("#game")) return;

    w = window.innerWidth;
    h = window.innerHeight;

    if (ig.ua.mobile) {
        multiplier = Math.min(h / mobileHeight, w / mobileWidth);
        destW = mobileWidth * multiplier;
        destH = mobileHeight * multiplier;
    } else {
        multiplier = Math.min(h / desktopHeight, w / desktopWidth);
        destW = desktopWidth * multiplier;
        destH = desktopHeight * multiplier;
    }

    widthRatio = w / mobileWidth;
    heightRatio = h / mobileHeight;

    adjustLayers();
    window.scrollTo(0, 1);

    if (!ig.ua.mobile) {
        $("#tempdiv").hide();
        return;
    }

    const userAgentParts = navigator.userAgent.split(" ");
    const versionTag = userAgentParts.find(part => part.startsWith("Version/"));
    const isChrome = navigator.userAgent.includes("Chrome") && !versionTag;
    const chromeObj = window.chrome;

    if (isChrome && chromeObj && $(window)) {
        const scrollDown = document.getElementById("scrollDown");
        if (scrollDown) {
            scrollDown.src = "media/graphics/orientate/scroll_down.png";
            scrollDown.style.height = "40%";
            scrollDown.style.width = "20%";
            scrollDown.style.backgroundColor = "rgba(11,156,49,0.4)";
        }

        const checkScrollVisibility = () => {
            if (window.orientation === 0) {
                $("#scrollDown").hide();
                return;
            }

            const contentHeight = (portraitMode ?
                    document.getElementById("orientate") :
                    document.getElementById("game")).clientHeight
                + document.getElementById("tempdiv").clientHeight;

            console.log(`${contentHeight},${minHeight}`);
            contentHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show();
        };

        checkScrollVisibility();

        $(window).on("orientationchange", () => {
            window.orientation === 0 ? $("#scrollDown").hide() : $("#scrollDown").show();
        });

        window.addEventListener("resize", () => {
            if (window.orientation === 0) {
                $("#scrollDown").hide();
            } else {
                checkScrollVisibility();
            }
        });
    } else {
        $("#scrollDown").hide();
        $("#tempdiv").hide();
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function (b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function (b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend",
        function (b) {
            b.preventDefault();
            return !1
        }, !1))
}

window.addEventListener("resize", function () {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function () {
    orientationHandler()
}, !1);
document.ontouchmove = function () {
    window.scrollTo(0, 1)
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}

var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}

this.jukebox = {};
jukebox.Player = function (b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    }, __addToManager: function () {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    }, __init: function () {
        var b = this, c = this.settings, d = {}, e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var f = function (c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", f, !0);
                window.setTimeout(function () {
                    b.context.removeEventListener("canplaythrough", f, !0);
                    f("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function () {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function () {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    }, __initFlashContext: function (b) {
        var c, d = this.settings.flashMediaElement, e, f = {
            flashvars: b.join("&"),
            quality: "high",
            bgcolor: "#000000",
            wmode: "transparent",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var j = document.createElement("object");
            j.id = "jukebox-flashstream-" + this.id;
            j.setAttribute("type", "application/x-shockwave-flash");
            j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            j.setAttribute("width", "0");
            j.setAttribute("height", "0");
            f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            f.flashvars = b.join("&amp;");
            for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            f.play = !1;
            f.loop = !1;
            f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in f) c.setAttribute(e, f[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    }, backgroundHackForiOS: function () {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    }, play: function (b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id); else {
            var d = this.settings.spritemap, e;
            if (void 0 !== d[b]) e = d[b].start; else if ("number" === typeof b) {
                e = b;
                for (var f in d) if (e >= d[f].start && e <=
                    d[f].end) {
                    b = f;
                    break
                }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    }, stop: function () {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    }, pause: function () {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    }, resume: function (b) {
        b = typeof b === "number" ? b : this.__lastPosition;
        if (b !== null) return this.play(b), this.__lastPosition = null, true;

        // 👇 xử lý play với catch
        this.context.play().catch((err) => {
            console.warn("Autoplay blocked:", err);
        });

        return true;
    }, HTML5API: {
        getVolume: function () {
            return this.context.volume || 1
        }, setVolume: function (b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        }, getCurrentTime: function () {
            return this.context.currentTime || 0
        }, setCurrentTime: function (b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    }, FLASHAPI: {
        getVolume: function () {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        }, setVolume: function (b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        }, getCurrentTime: function () {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        }, setCurrentTime: function (b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function () {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {useFlash: !1, useGameLoop: !1}, __detectFeatures: function () {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{e: "3gp", m: ["audio/3gpp", "audio/amr"]}, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {e: "amr", m: ["audio/amr", "audio/3gpp"]}, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                },
                    {
                        e: "mp3",
                        m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                    }, {e: "mpga", m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]}, {
                        e: "mp4",
                        m: ["audio/mp4", "video/mp4"]
                    }, {
                        e: "ogg",
                        m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                    }, {
                        e: "wav",
                        m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                    }, {e: "webm", m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]}],
                     d, e, f = 0, j = c.length; f < j; f++) if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m) for (var n = 0, p = c[f].m.length; n < p; n++) if (d = c[f].m[n], "" !== b.canPlayType(d)) {
                this.codecs[e] = d;
                break
            } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio =
            !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (q) {
        }
        !0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    }, __getPlayerById: function (b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    }, __getClone: function (b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var f in c) d[f] = c[f];
            d.autoplay = !1;
            f = new jukebox.Player(d, b);
            f.isClone = !0;
            f.wasReady = !1;
            return this.__clones[f.id] = f
        }
        return null
    }, loop: function () {
        if (0 !== this.__playersLength) if (this.__queue.length &&
            this.__playersLength < this.features.channels) {
            var b = this.__queue[0], c = this.__getPlayerById(b.origin);
            if (null !== c) {
                var d = this.__getClone(b.origin, c.settings);
                null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
            }
            this.__queue.splice(0, 1)
        } else for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
            c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    }, getPlayableResource: function (b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c], f = e.match(/\.([^\.]*)$/)[1];
            if (f && this.codecs[f]) return e
        }
        return null
    }, add: function (b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    }, remove: function (b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    }, addToQueue: function (b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function () {
    var b = {}, c = null, d = !0, e = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext; else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext; else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (f) {
            e = !0
        }
    } else d = !1, e = !0;
    if (d) {
        var j = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        j.gain.value = 1;
        j.connect(c.destination)
    }
    var n = function () {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = e;
        this._howls = []
    };
    n.prototype = {
        volume: function (b) {
            b =
                parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (j.gain.value = b);
                for (var c in this._howls) if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio) for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? j.gain.value : this._volume
        }, mute: function () {
            this._setMuted(!0);
            return this
        }, unmute: function () {
            this._setMuted(!1);
            return this
        }, _setMuted: function (b) {
            this._muted = b;
            d && (j.gain.value = b ? 0 : this._volume);
            for (var c in this._howls) if (this._howls.hasOwnProperty(c) &&
                !1 === this._howls[c]._webAudio) for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
        }
    };
    var p = new n, n = null;
    if (!e) var n = new Audio, q = {
        mp3: !!n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/,
            ""),
        mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    };
    var v = function (b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload =
            [b.onload || function () {
            }];
        this._onloaderror = [b.onloaderror || function () {
        }];
        this._onend = [b.onend || function () {
        }];
        this._onpause = [b.onpause || function () {
        }];
        this._onplay = [b.onplay || function () {
        }];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        p._howls.push(this);
        this.load()
    };
    v.prototype = {
        load: function () {
            var d = this, f = null;
            if (!e) {
                for (var j = 0; j < d._urls.length; j++) {
                    var n, v;
                    if (d._format) n = d._format; else if (v = d._urls[j].toLowerCase().split("?")[0], n =
                        (n = v.match(/.+\.([^?]+)(\?|$)/)) && 2 <= n.length ? n : v.match(/data\:audio\/([^?]+);/)) n = n[1]; else {
                        d.on("loaderror");
                        return
                    }
                    if (q[n]) {
                        f = d._urls[j];
                        break
                    }
                }
                if (f) {
                    d._src = f;
                    if (d._webAudio) {
                        var C = f;
                        if (C in b) d._duration = b[C].duration, x(d); else {
                            var I = new XMLHttpRequest;
                            I.open("GET", C, !0);
                            I.responseType = "arraybuffer";
                            I.onload = function () {
                                c.decodeAudioData(I.response, function (c) {
                                    c && (b[C] = c, x(d, c))
                                }, function () {
                                    d.on("loaderror")
                                })
                            };
                            I.onerror = function () {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode,
                                    d.load())
                            };
                            try {
                                I.send()
                            } catch (Wa) {
                                I.onerror()
                            }
                        }
                    } else {
                        var D = new Audio;
                        d._audioNode.push(D);
                        D.src = f;
                        D._pos = 0;
                        D.preload = "auto";
                        D.volume = p._muted ? 0 : d._volume * p.volume();
                        b[f] = d;
                        var O = function () {
                            d._duration = Math.ceil(10 * D.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {_default: [0, 1E3 * d._duration]});
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            D.removeEventListener("canplaythrough", O, !1)
                        };
                        D.addEventListener("canplaythrough", O, !1);
                        D.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function (b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        }, play: function (d, e) {
            var f = this;
            "function" === typeof d && (e = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!f._loaded) return f.on("load", function () {
                f.play(d, e)
            }), f;
            if (!f._sprite[d]) return "function" === typeof e && e(), f;
            f._inactiveNode(function (j) {
                j._sprite = d;
                var q = 0 < j._pos ? j._pos : f._sprite[d][0] / 1E3, n = f._sprite[d][1] / 1E3 - j._pos,
                    v = !(!f._loop && !f._sprite[d][2]), x = "string" === typeof e ? e :
                        Math.round(Date.now() * Math.random()) + "", D, O = {id: x, sprite: d, loop: v};
                D = setTimeout(function () {
                    !f._webAudio && v && f.stop(O.id, O.timer).play(d, O.id);
                    f._webAudio && !v && (f._nodeById(O.id).paused = !0, f._nodeById(O.id)._pos = 0);
                    !f._webAudio && !v && f.stop(O.id, O.timer);
                    f.on("end", x)
                }, 1E3 * n);
                f._onendTimer.push(D);
                O.timer = f._onendTimer[f._onendTimer.length - 1];
                if (f._webAudio) {
                    D = f._sprite[d][0] / 1E3;
                    var L = f._sprite[d][1] / 1E3;
                    j.id = x;
                    j.paused = !1;
                    D = [v, D, L];
                    L = f._nodeById(x);
                    L.bufferSource = c.createBufferSource();
                    L.bufferSource.buffer =
                        b[f._src];
                    L.bufferSource.connect(L.panner);
                    L.bufferSource.loop = D[0];
                    D[0] && (L.bufferSource.loopStart = D[1], L.bufferSource.loopEnd = D[1] + D[2]);
                    L.bufferSource.playbackRate.value = f._rate;
                    f._playStart = c.currentTime;
                    j.gain.value = f._volume;
                    "undefined" === typeof j.bufferSource.start ? j.bufferSource.noteGrainOn(0, q, n) : j.bufferSource.start(0, q, n)
                } else if (4 === j.readyState) j.id = x, j.currentTime = q, j.muted = p._muted, j.volume = f._volume * p.volume(), setTimeout(function () {
                    j.play()
                }, 0); else {
                    f._clearEndTimer(D);
                    var ya = d, ma =
                        e, ra = function () {
                        f.play(ya, ma);
                        j.removeEventListener("canplaythrough", ra, !1)
                    };
                    j.addEventListener("canplaythrough", ra, !1);
                    return f
                }
                f.on("play");
                "function" === typeof e && e(x);
                return f
            });
            return f
        }, pause: function (b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function () {
                d.pause(b)
            }), d;
            d._clearEndTimer(c || 0);
            var e = b ? d._nodeById(b) : d._activeNode();
            if (e) if (e._pos = d.pos(null, b), d._webAudio) {
                if (!e.bufferSource || e.paused) return d;
                e.paused = !0;
                "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) :
                    e.bufferSource.stop(0)
            } else e.pause();
            d.on("pause");
            return d
        }, stop: function (b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function () {
                d.stop(b)
            }), d;
            d._clearEndTimer(c || 0);
            var e = b ? d._nodeById(b) : d._activeNode();
            if (e) if (e._pos = 0, d._webAudio) {
                if (!e.bufferSource || e.paused) return d;
                e.paused = !0;
                "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
            } else e.pause(), e.currentTime = 0;
            return d
        }, mute: function (b) {
            var c = this;
            if (!c._loaded) return c.on("play", function () {
                c.mute(b)
            }),
                c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        }, unmute: function (b) {
            var c = this;
            if (!c._loaded) return c.on("play", function () {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        }, volume: function (b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function () {
                    d.volume(b, c)
                }), d;
                var e = c ? d._nodeById(c) : d._activeNode();
                e && (d._webAudio ? e.gain.value = b : e.volume =
                    b * p.volume());
                return d
            }
            return d._volume
        }, loop: function (b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        }, sprite: function (b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        }, pos: function (b, d) {
            var e = this;
            if (!e._loaded) return e.on("load", function () {
                e.pos(b)
            }), "number" === typeof b ? e : e._pos || 0;
            b = parseFloat(b);
            var f = d ? e._nodeById(d) : e._activeNode();
            if (f) return 0 <= b ? (e.pause(d), f._pos = b, e.play(f._sprite, d), e) : e._webAudio ? f._pos + (c.currentTime - e._playStart) : f.currentTime;
            if (0 <= b) return e;
            for (f = 0; f < e._audioNode.length; f++) if (e._audioNode[f].paused && 4 === e._audioNode[f].readyState) return e._webAudio ? e._audioNode[f]._pos : e._audioNode[f].currentTime
        }, pos3d: function (b, c, d, e) {
            var f = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!f._loaded) return f.on("play", function () {
                f.pos3d(b, c, d, e)
            }), f;
            if (0 <= b || 0 > b) {
                if (f._webAudio) {
                    var j = e ? f._nodeById(e) : f._activeNode();
                    j && (f._pos3d = [b, c, d], j.panner.setPosition(b, c, d))
                }
            } else return f._pos3d;
            return f
        }, fade: function (b, c, d,
                           e, f) {
            var j = this, q = Math.abs(b - c), n = b > c ? "down" : "up", q = q / 0.01, p = d / q;
            if (!j._loaded) return j.on("load", function () {
                j.fade(b, c, d, e, f)
            }), j;
            j.volume(b, f);
            for (var v = 1; v <= q; v++) (function () {
                var b = Math.round(1E3 * (j._volume + ("up" === n ? 0.01 : -0.01) * v)) / 1E3;
                setTimeout(function () {
                    j.volume(b, f);
                    b === c && e && e()
                }, p * v)
            })()
        }, fadeIn: function (b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        }, fadeOut: function (b, c, d, e) {
            var f = this;
            return f.fade(f._volume, b, c, function () {
                d && d();
                f.pause(e);
                f.on("end")
            }, e)
        }, _nodeById: function (b) {
            for (var c =
                this._audioNode[0], d = 0; d < this._audioNode.length; d++) if (this._audioNode[d].id === b) {
                c = this._audioNode[d];
                break
            }
            return c
        }, _activeNode: function () {
            for (var b = null, c = 0; c < this._audioNode.length; c++) if (!this._audioNode[c].paused) {
                b = this._audioNode[c];
                break
            }
            this._drainPool();
            return b
        }, _inactiveNode: function (b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++) if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                b(this._audioNode[d]);
                c = !0;
                break
            }
            this._drainPool();
            if (!c) {
                var e;
                this._webAudio ? (e = this._setupAudioNode(),
                    b(e)) : (this.load(), e = this._audioNode[this._audioNode.length - 1], e.addEventListener("loadedmetadata", function () {
                    b(e)
                }))
            }
        }, _drainPool: function () {
            var b = 0, c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        }, _clearEndTimer: function (b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
                this._onendTimer.splice(b, 1))
        }, _setupAudioNode: function () {
            var b = this._audioNode, d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(j);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        }, on: function (b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c); else for (var e = 0; e < d.length; e++) c ?
                d[e].call(this, c) : d[e].call(this);
            return this
        }, off: function (b, c) {
            for (var d = this["_on" + b], e = c.toString(), f = 0; f < d.length; f++) if (e === d[f].toString()) {
                d.splice(f, 1);
                break
            }
            return this
        }, unload: function () {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = p._howls.indexOf(this);
            null !== c && 0 <= c && p._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var x = function (b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length &&
        (b._sprite = {_default: [0, 1E3 * b._duration]});
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function () {
        return {Howler: p, Howl: v}
    });
    "undefined" !== typeof exports && (exports.Howler = p, exports.Howl = v);
    window.Howler = p;
    window.Howl = v
})();
window.ig.baseUrl = ''
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.levels.opening", "game.levels.home", "game.levels.game").defines(function () {
    MyGame = ig.Game.extend({
            muted: false,
            musicVolume: 0.4,
            sfxVolume: 1,
            money: 0,
            cookies: 0,
            doTutorial: false,
            doShop: false,
            upgrades: [{status: false, equipped: false}
                , {status: false, equipped: false}
                , {status: false, equipped: false}
                , {status: false, equipped: false}
                , {status: false, equipped: false}
                ,],
            visitedShop: true,
            restartGameFlag: false,
            doTutorialFlag: false,
            firstrun: true,
            init: function () {
                this.setupControls();
                this.setupLocalStorage();
                this.removeLoadingWheel();
                this.injectMobileLink();
                this.setupURLParameters();
                console.log('Initializing');
                this.finalize();
            },
            initSfx: function () {
            },
            finalize: function () {
                console.log('Finalize');
                ig.game.startGame();
                sizeHandler();
            },
            injectMobileLink: function () {
                // var m5 = 1662064520;
                // if (V6j.U.r(0, 9473333) === m5) {
                //
                // if (ig.ua.mobile) {
                //     $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
                // } else {
                ig.soundHandler.setupJukebox();
                // }
            },
            removeLoadingWheel: function () {
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (e) {
                    console.warn(e);
                }
            },
            showDebugMenu: function () {
                // var W8 = -1530806791;
                // if (V6j.U.r(0, 1393343) === W8) {
                //     console.log('showing debug menu ...');
                // } else {
                this.removeLoadingWheel();
                // }
                ig.Entity._debugShowBoxes = true;
                $('.ig_debug').show();
            },
            setupLocalStorage: function () {
                // var M8 = 686470937;
                // if (V6j.U.r(0, 1089919) !== M8) {
                // 	this.injectMobileLink();
                // 	MobileAdInGameEnd.Initialize();
                // 	this.debug.push(consoleLog);
                // 	return "";
                // } else {
                this.storage = new ig.Storage();
                // }
                this.getPlayerStats();
                ig.soundHandler.stopBackgroundMusic();
            },
            savePlayerStats: function () {
                if (this.storage == null) return;
                // this.storage.set('gianthamsterrun.musicVolume', this.musicVolume);
                // this.storage.set('gianthamsterrun.sfxVolume', this.sfxVolume);
                // this.storage.set('gianthamsterrun.muted', this.muted);
                // this.storage.set('gianthamsterrun.money', this.money);
                // this.storage.set('gianthamsterrun.upgrades', this.upgrades);
                // this.storage.set('gianthamsterrun.firstrun', this.firstrun);
                // this.storage.set('gianthamsterrun.visitedShop', this.visitedShop);
            },
            getPlayerStats: function () {
                if (this.storage == null) return;
                var musicVolume = this.storage.get('gianthamsterrun.musicVolume');
                if (musicVolume != null) {
                    this.musicVolume = musicVolume;
                }
                ig.soundHandler.setMusicVolume(this.musicVolume);
                var sfxVolume = this.storage.get('gianthamsterrun.sfxVolume');
                if (sfxVolume != null) {
                    this.sfxVolume = sfxVolume;
                }
                ig.soundHandler.setSfxVolume(this.sfxVolume);
                var muted = this.storage.get('gianthamsterrun.muted');
                if (muted != null) {
                    this.muted = muted;
                }
                if (this.muted) {
                    ig.soundHandler.setMusicVolume(0);
                    ig.soundHandler.setSfxVolume(0);
                } else {
                    ig.soundHandler.setMusicVolume(this.musicVolume);
                    ig.soundHandler.setSfxVolume(this.sfxVolume);
                }
                var firstrun = this.storage.get('gianthamsterrun.firstrun');
                if (firstrun != null) {
                    this.firstrun = firstrun;
                }
                var money = this.storage.get('gianthamsterrun.money');
                if (money != null) {
                    this.money = money;
                }
                var upgrades = this.storage.get('gianthamsterrun.upgrades');
                if (upgrades != null) {
                    if (upgrades[0] != null && upgrades[0].status != null && upgrades[0].equipped != null) {
                        this.upgrades = upgrades;
                    }
                }
                // var visitedShop = this.storage.get('gianthamsterrun.visitedShop');
                // if (visitedShop != null) {
                //     this.visitedShop = visitedShop;
                // }
            },
            startGame: function () {
                console.log('Game Start');
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame]);
                this.director.jumpTo(LevelOpening);
                if (ig.ua.mobile) {
                    ig.soundHandler.stopBackgroundMusic();
                    ig.soundHandler.setupJukebox();
                }
                this.getPlayerStats();
                ig.soundHandler.stopBackgroundMusic();
            },
            fpsCount: function () {
                if (!this.fpsTimer) {
                    this.fpsTimer = new ig.Timer(1);
                }
                if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                    if (this.fpsCounter != null) {
                        this.fpsCounter++;
                    } else {
                        this.fpsCounter = 0;
                    }
                } else {
                    ig.game.fps = this.fpsCounter;
                    this.fpsCounter = 0;
                    this.fpsTimer.reset();
                }
            },
            endGame: function () {
                console.log('End game');
                ig.soundHandler.stopBackgroundMusic();
            },
            resetPlayerStats: function () {
                ig.log('resetting player stats ...');
                this.playerStats = {id: this.playerStats ? this.playerStats.id : null,};
            },
            setItemUpgradeEquipped: function (id, val) {
                // var h9 = -1154373233;
                // if (V6j.U.r(0, 4295465) !== h9) {
                //     ig.input.unbindAll();
                //     ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
                // } else {
                for (var i = 0; i < this.upgrades.length; i++) {
                    this.upgrades[i].equipped = false;
                }
                this.upgrades[id].equipped = val;
                // }
            },
            getItemUpgradeEquipped: function (id) {
                return this.upgrades[id].equipped;
            },
            setItemUpgradeStatus: function (id, val) {
                this.upgrades[id].status = val;
            },
            getItemUpgradeStatus: function (id) {
                return this.upgrades[id].status;
            },
            getItemUpgradePrice: function (id) {
                switch (id) {
                    case 0:
                        return 100;
                    case 1:
                        return 200;
                    case 2:
                        return 300;
                    case 3:
                        return 400;
                    case 4:
                        return 500;
                }
                return 0;
            },
            getItemUpgradeName: function (id) {
                switch (id) {
                    case 0:
                        return _STRINGS.UI["skateboard"];
                    case 1:
                        return _STRINGS.UI["roller-skates"];
                    case 2:
                        return _STRINGS.UI["rocket"];
                    case 3:
                        return _STRINGS.UI["flying carpet"];
                    case 4:
                        return _STRINGS.UI["hoverboard"];
                }
                return "";
            },
            setupControls: function () {
                ig.input.unbindAll();
                ig.input.initMouse();
                ig.input.bind(ig.KEY.MOUSE1, 'click');
                ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
                ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
                ig.input.bind(ig.KEY.UP_ARROW, 'up');
                ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
                ig.input.bind(ig.KEY.ENTER, 'enter');
            },
            setupURLParameters: function () {
                this.setupURLParameters = new ig.UrlParameters();
            },
            setupMarketJsGameCenter: function () {
                ig.soundHandler.forceLoopBGM();
                this.setupLocalStorage();
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
            },
            pressPlay: function () {
                console.log('Game PLay');
                this.hideOverlay(['play']);
                // this.startGame();
            },
            pauseGame: function () {
                ig.system.stopRunLoop.call(ig.system);
                console.log('Game Paused');
                var control = ig.game.getEntitiesByType(EntityGameControl)[0];
                if (control) {
                    control.pauseGame();
                }
            },
            resumeGame: function () {
                ig.system.startRunLoop.call(ig.system);
                console.log('Game Resumed');
            },
            showOverlay: function (divList) {
                for (i = 0; i < divList.length; i++) {
                    $('#' + divList[i]).show();
                    document.getElementById(divList[i]).style.visibility = "visible";
                }
            },
            hideOverlay: function (divList) {
                for (i = 0; i < divList.length; i++) {
                    $('#' + divList[i]).hide();
                    document.getElementById(divList[i]).style.visibility = "hidden";
                }
            },
            update: function () {
                this.fpsCount();
                if (this.paused) {
                    for (var i = 0; i < this.entities.length; i++) {
                        if (this.entities[i].ignorePause) {
                            this.entities[i].update();
                        }
                    }
                } else {
                    this.parent();
                    if (ig.soundHandler) {
                        ig.soundHandler.forceLoopBGM();
                    }
                }
            },
            draw: function () {
                // var H3 = -1203433055;
                // if (V6j.U.r(0, 1110895) !== H3) {
                //     ig.soundHandler.setMusicVolume(0);
                //     ig.input.bind(ig.KEY.UP_ARROW, 'up');
                // } else {
                this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
                // }
                this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
                this.drawEntities();
            },
            drawDebug: function () {
                if (!ig.global.wm) {
                    this.debugEnable();
                    if (this.viewDebug) {
                        ig.system.context.fillStyle = '#000000';
                        ig.system.context.globalAlpha = 0.35;
                        ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                        ig.system.context.globalAlpha = 1;
                        if (this.debug && this.debug.length > 0) {
                            for (i = 0; i < this.debug.length; i++) {
                                ig.system.context.font = "10px Arial";
                                ig.system.context.fillStyle = '#ffffff';
                                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                            }
                        }
                    }
                }
            },
            debugCL: function (consoleLog) {
                if (!this.debug) {
                    this.debug = [];
                    this.debugLine = 1;
                    this.debug.push(consoleLog);
                } else {
                    if (this.debug.length < 50) {
                        this.debug.push(consoleLog);
                    } else {
                        this.debug.splice(0, 1);
                        this.debug.push(consoleLog);
                    }
                    this.debugLine++;
                }
                console.log(consoleLog);
            },
            debugEnable: function () {
                if (ig.input.pressed('click')) {
                    this.debugEnableTimer = new ig.Timer(2);
                }
                if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                    if (ig.input.released('click')) {
                        this.debugEnableTimer = null;
                    }
                } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                    this.debugEnableTimer = null;
                    this.viewDebug = !this.viewDebug;
                }
            },
        });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    console.log('ig.main')
    ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});
