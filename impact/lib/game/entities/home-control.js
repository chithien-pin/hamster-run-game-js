ig.module("game.entities.home-control").requires("impact.entity", "game.entities.button-more-games", "game.entities.audio-toggle", "game.entities.shop-control")
    .defines(function () {
    EntityHomeControl = ig.Entity.extend({
        zIndex: 100,
        isHome: !0,
        bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.jpg"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        time: 1,
        playButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/playgame.png", 110, 64), 0, [0, 1, 2]),
        playButtonPos: {x: 0, y: 590},
        playButtonRect: {x: -55, y: -32, w: 110, h: 64},
        playButtonOffset: {x: 0, y: 0},
        playButtonAlpha: 1,
        playButtonDown: !1,
        shopButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/shop.png", 72, 76), 0, [0, 1, 2]),
        shopButtonPos: {x: 0, y: 593},
        shopButtonRect: {x: -36, y: -38, w: 72, h: 76},
        shopButtonOffset: {x: 0, y: 0},
        shopButtonAlpha: 1,
        shopButtonDown: !1,
        infoButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/info.png", 54, 56), 0, [0, 1, 2]),
        infoButtonPos: {
            x: 0,
            y: 38
        },
        infoButtonRect: {x: -27, y: -28, w: 54, h: 56},
        infoButtonOffset: {x: 0, y: 0},
        infoButtonAlpha: 1,
        infoButtonDown: !1,
        moregamesButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
        moregamesButtonPos: {x: 41, y: 598},
        moregamesButtonRect: {x: -31, y: -21, w: 62, h: 42},
        moregamesButtonOffset: {x: 0, y: 0},
        moregamesButtonAlpha: 1,
        moregamesButtonDown: !1,
        pointer: null,
        moregames: null,
        audiotoggle: null,
        shop: null,
        menuPaused: !1,
        mainMenuAlpha: 1,
        init: function (b, c, d) {
            this.parent(b, c, d);

            if (ig.global.wm) return;

            const sound = ig.soundHandler;
            const game = ig.game;

            if (sound.musicVolume > 0) {
                if (!sound.bgmPlaying) {
                    sound.playBackgroundMusic();
                    sound.setMusicVolume(game.musicVolume);
                    sound.setSfxVolume(game.sfxVolume);
                }
            } else {
                sound.stopBackgroundMusic();
            }

            this.playButtonPos.x = ig.system.width / 2;
            this.shopButtonPos.x = ig.system.width - 10 - this.shopButtonRect.w / 2;
            this.infoButtonPos.x = ig.system.width - 10 - this.infoButtonRect.w / 2;
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            // this.moregames = ig.game.spawnEntity(EntityButtonMoreGames,
            //     this.moregamesButtonPos.x + this.moregamesButtonRect.x, this.moregamesButtonPos.y + this.moregamesButtonRect.y);
            // this.moregames?.divLayerName = "more-games";
            // this.moregames?.size.x = this.moregamesButtonRect.w;
            // this.moregames?.size.y = this.moregamesButtonRect.h;
            // this.moregames?.ready();
            this.audiotoggle = ig.game.spawnEntity(EntityAudioToggle, 37, 38);
            this.audiotoggle.ready();
            this.shop = ig.game.spawnEntity(EntityShopControl, 0, 0);
            this.shop.ready();
            ig.game.sortEntitiesDeferred();
            ig.global.wm || (0 < ig.soundHandler.musicVolume ?
                ig.soundHandler.bgmPlaying || ig.soundHandler.playBackgroundMusic() : ig.soundHandler.stopBackgroundMusic(), ig.game.doShop && (ig.game.doShop = !1, this.showShop()))
        },
        draw: function () {
            var b = ig.system.context;
            b.save();
            this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
            this.bgImage.draw(0, 0);
            b.restore();
            if (0 != this.mainMenuAlpha) {
                b.globalAlpha = this.mainMenuAlpha;
                this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
                var c = this.playButtonPos.x + this.playButtonOffset.x + this.playButtonRect.x,
                    d = this.playButtonPos.y + this.playButtonOffset.y + this.playButtonRect.y;
                this.playButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.playButtonAlpha;
                this.playButtonAnim.draw(c, d);
                b.restore();
                // c = this.shopButtonPos.x + this.shopButtonOffset.x + this.shopButtonRect.x;
                // d = this.shopButtonPos.y + this.shopButtonOffset.y + this.shopButtonRect.y;
                // this.shopButtonDown && (d += 2);
                // b.save();
                // b.globalAlpha = this.mainMenuAlpha * this.shopButtonAlpha;
                // this.shopButtonAnim.draw(c, d);
                // b.restore();
                c = this.infoButtonPos.x + this.infoButtonOffset.x +
                    this.infoButtonRect.x;
                d = this.infoButtonPos.y + this.infoButtonOffset.y + this.infoButtonRect.y;
                this.infoButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.infoButtonAlpha;
                this.infoButtonAnim.draw(c, d);
                b.restore();
                // c = this.moregamesButtonPos.x + this.moregamesButtonOffset.x + this.moregamesButtonRect.x;
                // d = this.moregamesButtonPos.y + this.moregamesButtonOffset.y + this.moregamesButtonRect.y;
                // this.moregamesButtonDown && (d += 2);
                // b.save();
                // b.globalAlpha = this.mainMenuAlpha * this.moregamesButtonAlpha;
                // this.moregamesButtonImage.draw(c,
                //     d);
                // b.restore();
                b.globalAlpha = 1
            }
        },
        playGame: function () {
            console.log('Play Game Clicked')
            ig.input.clearPressed();
            this.moregames?.hide();
            ig.game.firstrun ? (ig.game.doTutorialFlag = !0, ig.game.firstrun = !1, ig.game.savePlayerStats()) : ig.game.doTutorialFlag = !1;
            ig.game.director.jumpTo(LevelGame)
        },
        playTutorial: function () {
            ig.input.clearPressed();
            this.moregames?.hide();
            ig.game.doTutorialFlag = !0;
            ig.game.firstrun = !1;
            ig.game.savePlayerStats();
            ig.game.director.jumpTo(LevelGame)
        },
        showShop: function () {
            this.pause();
            this.shop.show()
        },
        hideShop: function () {
            this.shop.hide();
            this.unpause()
        },
        pause: function () {
            this.menuPaused = !0;
            this.moregames?.hide()
        },
        unpause: function () {
            this.menuPaused = !1;
            this.moregames?.show()
        },
        update: function () {
            this.time += ig.system.tick;
            this.menuPaused || this.checkClicks()
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkClicks: function () {
            this.pointer.refreshPos();
            const pointerBox = {
                x: this.pointer.pos.x + this.pointer.size.x / 2,
                y: this.pointer.pos.y + this.pointer.size.y / 2,
                w: 1,
                h: 1
            };

            // Helper to handle button clicks
            const handleButtonClick = (btnPos, btnRect, btnAnim, btnDownProp, callback) => {
                const box = {
                    x: btnPos.x + btnRect.x,
                    y: btnPos.y + btnRect.y,
                    w: btnRect.w,
                    h: btnRect.h
                };

                if (this.aabbCheck(pointerBox, box)) {
                    this[btnDownProp] = false;
                    btnAnim.tile = ig.ua.mobile ? 0 : 1;

                    if (ig.input.state("click")) {
                        this[btnDownProp] = true;
                        btnAnim.tile = 2;
                    }

                    if (ig.input.released("click")) {
                        this[btnDownProp] = false;
                        if (!ig.ua.mobile) btnAnim.tile = 1;
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
                        callback.call(this);
                        return true;
                    }
                } else {
                    this[btnDownProp] = false;
                    btnAnim.tile = 0;
                }
                return false;
            };

            if (handleButtonClick(this.playButtonPos, this.playButtonRect, this.playButtonAnim, 'playButtonDown', this.playGame)) return;
            // if (handleButtonClick(this.shopButtonPos, this.shopButtonRect, this.shopButtonAnim, 'shopButtonDown', this.showShop)) return;
            if (handleButtonClick(this.infoButtonPos, this.infoButtonRect, this.infoButtonAnim, 'infoButtonDown', this.playTutorial)) return;

            // Special handling for "more games" button (no tile animation)
            const moreBox = {
                x: this.moregamesButtonPos.x + this.moregamesButtonRect.x,
                y: this.moregamesButtonPos.y + this.moregamesButtonRect.y,
                w: this.moregamesButtonRect.w,
                h: this.moregamesButtonRect.h
            };

            if (this.aabbCheck(pointerBox, moreBox)) {
                this.moregamesButtonDown = ig.input.state("click");
                if (ig.input.released("click")) {
                    this.moregamesButtonDown = false;
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
                }
            } else {
                this.moregamesButtonDown = false;
            }
        },
        roundRect: function (b, c, d, e, f, j, n, p) {
            "undefined" == typeof p && (p = !0);
            "undefined" === typeof j && (j = 5);
            b.beginPath();
            b.moveTo(c + j, d);
            b.lineTo(c + e - j, d);
            b.quadraticCurveTo(c + e, d, c + e, d + j);
            b.lineTo(c + e, d + f - j);
            b.quadraticCurveTo(c + e, d + f, c + e - j, d + f);
            b.lineTo(c + j, d + f);
            b.quadraticCurveTo(c, d + f, c, d + f - j);
            b.lineTo(c, d + j);
            b.quadraticCurveTo(c, d, c + j, d);
            b.closePath();
            p && b.stroke();
            n && b.fill()
        }
    })
});
