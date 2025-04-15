ig.module("game.entities.game-ui").requires("impact.entity").defines(function () {
    EntityGameUi = ig.Entity.extend({
        zIndex: 3E3,
        overlayAlpha: 1,
        homeSheet: new ig.AnimationSheet("media/graphics/game/ui/game/home.png", 50, 50),
        homeAnimUp: null,
        homeAnimDown: null,
        homeAnim: null,
        homeRect: {x: 582, y: 126, w: 50, h: 50},
        homeEndRect: {x: 270, y: 484, w: 50, h: 50},
        homeEndOffset: {x: 0, y: 0},
        restartSheet: new ig.AnimationSheet("media/graphics/game/ui/game/restart.png", 48, 52),
        restartAnimUp: null,
        restartAnimDown: null,
        restartAnim: null,
        restartEndRect: {
            x: 320,
            y: 483, w: 48, h: 52
        },
        restartEndOffset: {x: 0, y: 0},
        pauseSheet: new ig.AnimationSheet("media/graphics/game/ui/game/pause.png", 37, 40),
        pauseAnimUp: null,
        pauseAnimOver: null,
        pauseAnimDown: null,
        pauseAnim: null,
        pauseRect: {x: 582, y: 26, w: 37, h: 40},
        pauseOffset: {x: 0, y: 0},
        playRect: {x: 615, y: 5, w: 35, h: 44},
        lifeImage: new ig.Image("media/graphics/game/ui/game/lifeicon.png"),
        lifeRect: {x: 502, y: 26, w: 40, h: 40},
        lifeCountPos: {x: 557, y: 56},
        coinImage: new ig.Image("media/graphics/game/ui/game/coinicon.png"),
        coinRect: {x: 20, y: 25, w: 41, h: 42},
        coinCountPos: {x: 75, y: 56},
        cookieImage: new ig.Image("media/graphics/game/ui/game/cookieicon.png"),
        cookieRect: {x: 23, y: 76, w: 35, h: 41},
        cookieCountPos: {x: 95, y: 107},
        powerLevelGrad: null,
        powerLevelRect: {x: 60, y: 78, w: 10, h: 34},
        gameOverTitleImage: new ig.Image("media/graphics/game/ui/game/gameover.png"),
        gameOverTitleRect: {x: 153, y: 131, w: 333, h: 54},
        gameOverTitleOffset: {x: 0, y: 0},
        gameOverPanelImage: new ig.Image("media/graphics/game/ui/game/gameover-panel.png"),
        gameOverPanelRect: {x: 219, y: 307, w: 202, h: 156},
        gameOverPanelOffset: {
            x: 0,
            y: 0
        },
        gameOverBgImage: new ig.Image("media/graphics/game/ui/game/gameover-bg.png"),
        gameOverBgRect: {x: 263, y: 209, w: 114, h: 114},
        gameOverBgOffset: {x: 0, y: 0},
        gameOverAnimSheet: new ig.AnimationSheet("media/graphics/game/ui/game/gameover-anim.png", 114, 114),
        gameOverAnim: null,
        panelIconsImage: new ig.Image("media/graphics/game/ui/game/panel-icons.png"),
        panelIconsRect: {x: 269, y: 337, w: 49, h: 106},
        panelIconsOffset: {x: 0, y: 0},
        pausedTitleImage: new ig.Image("media/graphics/game/ui/game/paused-title.png"),
        pausedTitlePos: {
            x: 0,
            y: 220
        },
        coinEndCountPos: {x: 339, y: 390},
        cookieEndCountPos: {x: 339, y: 443},
        happyBgImage: new ig.Image("media/graphics/game/ui/game/levelup-anim-bg.png"),
        happyBgRect: {x: -17, y: 533, w: 114, h: 114},
        happyBgOffset: {x: 0, y: 0},
        happyAnimSheet: new ig.AnimationSheet("media/graphics/game/ui/game/levelup-anim.png", 114, 114),
        happyAnim: null,
        happyPanelImage: new ig.Image("media/graphics/game/ui/game/levelup-panel.png"),
        happyPanelRect: {x: 219, y: 307, w: 202, h: 155},
        happyPanelOffset: {x: 0, y: 0},
        fingerImage: new ig.Image("media/graphics/game/ui/game/finger.png"),
        fingerRect: {x: 0, y: 0, w: 50, h: 50},
        fingerOffset: {x: 0, y: 0},
        tutorialUIShowTime: 0,
        tutorialUIShowingFlag: !1,
        tutorialUIHideTime: 0,
        tutorialUIHidingFlag: !1,
        tutorialUITickStartTime: 0,
        tutorialUITickFlag: !1,
        tutorialUIFadeTime: 0,
        tutorialUIFadeFlag: !1,
        tutorialUIDrawFlag: !1,
        tutorialUIAlpha: 0,
        tutorialUIOffset: {x: 0, y: 0},
        tutorialID: 0,
        nextTutorialID: 0,
        tutorialTextOrder: 0,
        tutorialTextAlpha: 0,
        tutorialTextRect: {x: 40, y: 470, w: 400, h: 100},
        tutorialTime: 0,
        control: null,
        pointer: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.powerLevelGrad =
                ig.system.context.createLinearGradient(0, 0, 0, this.powerLevelRect.h);
            this.powerLevelGrad.addColorStop(0, "#cc1e1c");
            this.powerLevelGrad.addColorStop(1, "#f59f2a");
            this.pauseAnimUp = new ig.Animation(this.pauseSheet, 0.1, [0]);
            this.pauseAnimOver = new ig.Animation(this.pauseSheet, 0.1, [1]);
            this.pauseAnimDown = new ig.Animation(this.pauseSheet, 0.1, [2]);
            this.pauseAnim = this.pauseAnimUp;
            this.homeAnimUp = new ig.Animation(this.homeSheet, 0.1, [0]);
            this.homeAnimDown = new ig.Animation(this.homeSheet, 0.1, [1]);
            this.homeAnim =
                this.homeAnimUp;
            this.restartAnimUp = new ig.Animation(this.restartSheet, 0.1, [0]);
            this.restartAnimDown = new ig.Animation(this.restartSheet, 0.1, [1]);
            this.restartAnim = this.restartAnimUp;
            this.gameOverAnim = new ig.Animation(this.gameOverAnimSheet, 0.042, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], !1);
            this.pauseRect.x = ig.system.width - 58;
            this.homeRect.x = ig.system.width - 63;
            this.lifeRect.x = ig.system.width - 158;
            this.lifeCountPos.x = ig.system.width - 103;
            this.gameOverTitleRect.x = ig.system.width / 2 - this.gameOverTitleRect.w / 2;
            this.gameOverPanelRect.x = ig.system.width / 2 - this.gameOverPanelRect.w / 2;
            this.gameOverBgRect.x = ig.system.width / 2 - this.gameOverBgRect.w / 2;
            this.panelIconsRect.x = this.gameOverPanelRect.x + 30;
            this.panelIconsRect.y = this.gameOverPanelRect.y + 21;
            this.coinEndCountPos.x = this.panelIconsRect.x + 103;
            this.coinEndCountPos.y = this.panelIconsRect.y + 43;
            this.cookieEndCountPos.x = this.panelIconsRect.x + 103;
            this.cookieEndCountPos.y = this.panelIconsRect.y + 98;
            this.homeEndRect.x = ig.system.width / 2 - this.homeEndRect.w - 40;
            this.restartEndRect.x =
                ig.system.width / 2 + 40;
            this.pausedTitlePos.x = ig.system.width / 2 - this.pausedTitleImage.width / 2;
            this.happyAnim = new ig.Animation(this.happyAnimSheet, 0.084, [0, 1, 2, 3, 4], !0);
            this.tutorialTextRect.x = ig.system.width / 2 - this.tutorialTextRect.w / 2;
            this.happyBgRect.x = this.tutorialTextRect.x - this.happyBgRect.w / 2;
            this.happyBgRect.y = this.tutorialTextRect.y + this.tutorialTextRect.h / 2 - this.happyBgRect.h / 2;
            this.tutorialTextRect.w += this.happyBgRect.w / 2
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function () {
            var b = ig.system.context;
            b.fillStyle = this.control.bgHorizonLinGrad;
            b.fillRect(0, 121, ig.system.width, 195);
            this.drawGameStats();
            this.drawTutorialUI();
            this.control.gamePaused && (ig.system.context.globalAlpha = 0.5, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1, this.pausedTitleImage.draw(this.pausedTitlePos.x, this.pausedTitlePos.y));
            this.control.gamePaused &&
            (b = ig.system.clock.delta() % 2, 1 < b && (b = 1 - (b - 1)), ig.system.context.globalAlpha = 0.25 + 0.75 * b);
            this.pauseAnim.draw(this.pauseRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x, this.pauseRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y);
            this.control.gamePaused && (ig.system.context.globalAlpha = 1, this.homeAnim.draw(this.homeRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x, this.homeRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y));
            this.drawGameOver();
            if (this.control.gameStarting || this.control.gameEnding) ig.system.context.globalAlpha =
                this.overlayAlpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1
        },
        drawGameStats: function () {
            this.lifeImage.draw(this.lifeRect.x, this.lifeRect.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(this.control.lifeCount, this.lifeCountPos.x + 2, this.lifeCountPos.y + 2);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(this.control.lifeCount,
                this.lifeCountPos.x, this.lifeCountPos.y);
            this.coinImage.draw(this.coinRect.x, this.coinRect.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(ig.game.money, this.coinCountPos.x + 2, this.coinCountPos.y + 2);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(ig.game.money, this.coinCountPos.x, this.coinCountPos.y);
            this.cookieImage.draw(this.cookieRect.x, this.cookieRect.y);
            ig.system.context.textAlign =
                "left";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x + 2, this.cookieCountPos.y + 2);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x, this.cookieCountPos.y);
            var b = ig.system.context;
            b.save();
            var c = this.powerLevelRect.w, d = this.powerLevelRect.h, e = this.control.powerLevel;
            b.translate(this.powerLevelRect.x, this.powerLevelRect.y);
            b.fillStyle =
                "#000000";
            b.strokeStyle = "#000000";
            b.lineWidth = 0;
            b.fillRect(2, 2, c, d);
            b.fillStyle = this.powerLevelGrad;
            b.fillRect(0, (1 - e) * d, c, e * d);
            b.strokeStyle = "#ffffff";
            b.lineWidth = 3;
            b.strokeRect(0, 0, c, d);
            b.restore()
        },
        drawGameOver: function () {
            if (this.control.gameOver) {
                var b = ig.system.clock.delta() - this.control.gameOverTime;
                0.5 < b && (b = 0.5);
                ig.system.context.globalAlpha = 0.75 * b / 0.5;
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
                ig.system.context.globalAlpha = 1;
                this.gameOverTitleImage.draw(this.gameOverTitleRect.x +
                    this.gameOverTitleOffset.x, this.gameOverTitleRect.y + this.gameOverTitleOffset.y);
                this.gameOverPanelImage.draw(this.gameOverPanelRect.x + this.gameOverPanelOffset.x, this.gameOverPanelRect.y + this.gameOverPanelOffset.y);
                this.panelIconsImage.draw(this.panelIconsRect.x + this.panelIconsOffset.x, this.panelIconsRect.y + this.panelIconsOffset.y);
                ig.system.context.textAlign = "center";
                ig.system.context.font = "24px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillText(this.control.coinsCollected,
                    this.coinEndCountPos.x + 2, this.coinEndCountPos.y + 2);
                ig.system.context.fillStyle = "#ffffff";
                ig.system.context.fillText(this.control.coinsCollected, this.coinEndCountPos.x, this.coinEndCountPos.y);
                ig.system.context.textAlign = "center";
                ig.system.context.font = "24px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillText(ig.game.cookies, this.cookieEndCountPos.x + 2, this.cookieEndCountPos.y + 2);
                ig.system.context.fillStyle = "#ffffff";
                ig.system.context.fillText(ig.game.cookies,
                    this.cookieEndCountPos.x, this.cookieEndCountPos.y);
                this.gameOverBgImage.draw(this.gameOverBgRect.x + this.gameOverBgOffset.x, this.gameOverBgRect.y + this.gameOverBgOffset.y);
                this.gameOverAnim.draw(this.gameOverBgRect.x + this.gameOverBgOffset.x, this.gameOverBgRect.y + this.gameOverBgOffset.y);
                this.homeAnim.draw(this.homeEndRect.x + this.homeEndOffset.x, this.homeEndRect.y + this.homeEndOffset.y);
                this.restartAnim.draw(this.restartEndRect.x + this.restartEndOffset.x, this.restartEndRect.y + this.restartEndOffset.y)
            }
        },
        drawFPS: function () {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(ig.game.fps, ig.system.width / 2, 40)
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkMainClicks: function () {
            var b = !1;
            this.pointer.refreshPos();
            var c = {};
            c.x = this.pointer.pos.x;
            c.y = this.pointer.pos.y;
            c.w = this.pointer.size.x;
            c.h = this.pointer.size.y;
            this.control.gameOver ? (!b && this.aabbCheck(c,
                this.restartEndRect) ? (ig.input.state("click") && (this.restartAnim = this.restartAnimDown), ig.input.released("click") && (this.restartAnim = this.restartAnimUp, this.control.restartGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)), b = !0) : this.restartAnim = this.restartAnimUp, !b && this.aabbCheck(c, this.homeEndRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown), ig.input.released("click") && (this.homeAnim = this.homeAnimUp, this.control.quitGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) :
                this.homeAnim = this.homeAnimUp) : (!b && this.aabbCheck(c, this.pauseRect) ? (ig.input.state("click") && (this.pauseAnim = this.pauseAnimDown), ig.input.released("click") && (this.pauseAnim = this.pauseAnimOver, this.control.togglePauseGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)), b = !0) : (this.pauseAnim = this.pauseAnimUp, this.control.gamePaused && (this.pauseAnim = this.pauseAnimDown)), this.control.gamePaused && (!b && this.aabbCheck(c, this.homeRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown),
            ig.input.released("click") && (this.homeAnim = this.homeAnimUp, this.control.quitGame(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp))
        },
        update: function () {
            this.checkMainClicks();
            this.control.gameOver && this.gameOverAnim.update();
            if (this.control.gameStarting) {
                var b = ig.system.clock.delta() - this.control.gameStartTime, b = b / 0.25;
                1 < b && (b = 1);
                this.overlayAlpha = 1 - b
            } else this.control.gameEnding && (b = ig.system.clock.delta() - this.control.gameEndTime, b /= 0.25, 1 < b && (b = 1), this.overlayAlpha =
                b);
            this.control.tutorialMode && !this.control.gamePaused && (this.tutorialTime += ig.system.tick);
            this.updateTutorialUI()
        },
        drawTime: function (b, c, d, e) {
            if (!isNaN(this.control.gameTime)) {
                b = Math.floor(this.control.gameTime / 60);
                c = Math.floor(this.control.gameTime % 60);
                10 > c && (c = "0" + c);
                var f = _STRINGS.UI.TIME + ": " + b + ":" + c;
                d = ig.system.context.measureText(f).width;
                e = ig.system.context.measureText("m").width;
                b = ig.system.width / 2 - d / 2;
                c = ig.system.height / 2 + e / 3 + 30;
                ig.system.context.fillText(f, b, c)
            }
        },
        drawArrow: function (b,
                             c, d, e) {
            var f, j;
            f = d - b;
            j = e - c;
            var n = Math.sqrt(f * f + j * j);
            if (0 != n) {
                var p;
                f /= n;
                p = j / n;
                j = d - 10 * f;
                var n = e - 10 * p, q;
                q = -p;
                var v;
                p = j + 10 * q;
                v = n + 10 * f;
                q = j - 10 * q;
                f = n - 10 * f;
                var x = ig.system.context;
                x.fillStyle = "#000000";
                x.beginPath();
                x.moveTo(d, e);
                x.lineTo(p, v);
                x.lineTo(q, f);
                x.closePath();
                x.fill();
                x.strokeStyle = "#000000";
                x.lineWidth = 10;
                x.beginPath();
                x.moveTo(j, n);
                x.lineTo(b, c);
                x.stroke()
            }
        },
        roundRect: function (b, c, d, e, f, j, n, p) {
            "undefined" == typeof p && (p = !0);
            "undefined" === typeof j && (j = 5);
            b.beginPath();
            b.moveTo(c + j, d);
            b.lineTo(c +
                e - j, d);
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
        },
        checkTutorialClicks: function () {
            if (this.control.tutorialMode && !this.tutorialUIHidingFlag && (!this.tutorialUIShowingFlag && !this.tutorialUITickFlag) && (0 == this.control.tutorialStage || 1 == this.control.tutorialStage || 2 == this.control.tutorialStage || 13 == this.control.tutorialStage)) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                this.aabbCheck(b, this.tutorialTextRect) && ig.input.released("click") && (this.control.doNextTutorialStage(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button));
                ig.input.released("enter") && (this.control.doNextTutorialStage(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))
            }
        },
        updateTutorialUI: function () {
            if (this.tutorialUIDrawFlag) {
                if (this.tutorialUIShowingFlag) {
                    var b = 1 - this.tutorialUIOffset.x /
                        ig.system.width;
                    0 > b && (b = 0);
                    1 < b && (b = 1);
                    this.tutorialUIAlpha = 0.25 + 0.75 * b;
                    0 < this.tutorialUIOffset.x ? this.tutorialUIOffset.x -= 2E3 * ig.system.tick : 0 > this.tutorialUIOffset.x && (this.tutorialUIOffset.x += 2E3 * ig.system.tick, 0 <= this.tutorialUIOffset.x && (this.tutorialUIOffset.x = 0, this.tutorialUIShowingFlag = !1, this.happyAnim.rewind(), this.tutorialUITickStartTime = ig.system.clock.delta(), this.tutorialUITickFlag = !0, this.tutorialUIAlpha = 1))
                } else this.tutorialUIHidingFlag && (b = this.tutorialUIOffset.x / -ig.system.width,
                0 > b && (b = 0), 1 < b && (b = 1), this.tutorialUIAlpha = 0.25 + 0.75 * (1 - b), this.tutorialUIOffset.x -= 2E3 * ig.system.tick, this.tutorialUIOffset.x <= -ig.system.width && (this.tutorialUITickFlag = this.tutorialUIFadeFlag = this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = this.tutorialUIHidingFlag = !1, this.tutorialUIAlpha = this.tutorialTextAlpha = 0));
                if (this.tutorialUITickFlag) {
                    var b = (_STRINGS.Tutorial[this.tutorialID][0] + _STRINGS.Tutorial[this.tutorialID][1]).length,
                        c = (ig.system.clock.delta() - this.tutorialUITickStartTime) / (0.02 *
                            b);
                    1 < c && (c = 1);
                    this.tutorialTextOrder = Math.floor(c * b);
                    1 <= c && (this.tutorialUITickFlag = !1, this.tutorialTextOrder = b);
                    this.tutorialTextAlpha = 1
                } else this.tutorialUIFadeFlag && (c = (ig.system.clock.delta() - this.tutorialUIFadeTime) / 0.25, 1 <= c ? (this.tutorialID = this.nextTutorialID, this.tutorialUIFadeFlag = !1, this.happyAnim.rewind(), this.tutorialUITickStartTime = ig.system.clock.delta(), this.tutorialUITickFlag = !0, this.tutorialTextOrder = this.tutorialTextAlpha = 0) : this.tutorialTextAlpha = 1 - c);
                !this.tutorialUIShowingFlag &&
                !this.tutorialUIHidingFlag && (this.happyAnim.update(), this.tutorialUITickFlag || this.checkTutorialClicks())
            }
        },
        showTutorialUI: function (b) {
            this.tutorialUIDrawFlag ? this.tutorialUIHidingFlag ? (this.tutorialUIHidingFlag = !1, this.tutorialUIShowingFlag = !0, this.tutorialUIShowTime = ig.system.clock.delta(), this.tutorialUIOffset.x = ig.system.width, this.happyAnim.rewind(), this.tutorialID = b, this.tutorialTextAlpha = this.tutorialTextOrder = 0) : (this.tutorialUIFadeFlag = !0, this.tutorialUIFadeTime = ig.system.clock.delta(), this.nextTutorialID =
                b) : (this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = !0, this.tutorialUIShowTime = ig.system.clock.delta(), this.tutorialUIOffset.x = ig.system.width, this.happyAnim.rewind(), this.tutorialID = b, this.tutorialTextAlpha = this.tutorialTextOrder = 0)
        },
        hideTutorialUI: function () {
            this.tutorialUIHidingFlag = !0;
            this.tutorialUIHideTime = ig.system.clock.delta()
        },
        drawTutorialUI: function () {
            if (this.tutorialUIDrawFlag) {
                var b = ig.system.context;
                b.globalAlpha = this.tutorialUIAlpha;
                b.save();
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle =
                    "rgba(0,0,0,0.75)";
                var c = this.tutorialTextRect.x + this.tutorialUIOffset.x,
                    d = this.tutorialTextRect.y + this.tutorialUIOffset.y, e = this.tutorialTextRect.w,
                    f = this.tutorialTextRect.h;
                this.roundRect(b, c, d, e, f, 20, !0, !1);
                b.restore();
                b.globalAlpha = 1;
                this.tutorialUIShowingFlag || this.drawText();
                if (!this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUITickFlag && !this.tutorialUIFadeFlag && (0 == this.control.tutorialStage || 1 == this.control.tutorialStage || 2 == this.control.tutorialStage || 13 == this.control.tutorialStage) &&
                    0.5 < ig.system.clock.delta() - this.control.tutorialPausedTime) c = c + e - 20, d = d + f - 10, e = this.tutorialTime % 2, 1 < e && (e = 2 - e), e = 0.25 + 0.75 * e, b.save(), b.font = "12px mainfont, Helvetica, Verdana", b.translate(c, d), b.textAlign = "right", b.fillStyle = "rgba(255,255,255," + e + ")", b.fillText(_STRINGS.UI["continue"], 0, 0), b.restore();
                !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUIFadeFlag && (3 == this.control.tutorialStage ? this.drawJumpInstructions() : 5 == this.control.tutorialStage ? this.drawRightInstructions() :
                    7 == this.control.tutorialStage || 9 == this.control.tutorialStage ? this.drawLeftInstructions() : 11 == this.control.tutorialStage && this.drawSlideInstructions());
                b.globalAlpha = this.tutorialUIAlpha;
                this.happyBgImage.draw(this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x, this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y);
                this.happyAnim.draw(this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x, this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y);
                b.globalAlpha =
                    1
            }
        },
        drawText: function () {
            if (0 != this.tutorialTextOrder) {
                var b, c, d;
                c = this.tutorialTextRect.x + this.tutorialUIOffset.x;
                d = this.tutorialTextRect.y + this.tutorialUIOffset.y;
                c += 80;
                d += 28;
                var e = ig.system.context;
                b = this.tutorialTextOrder;
                var f = _STRINGS.Tutorial[this.tutorialID][0], j = _STRINGS.Tutorial[this.tutorialID][1];
                b < f.length ? (f = f.substr(0, b), j = "") : b < f.length + j.length && (j = j.substr(0, b - f.length));
                e.save();
                e.font = "16px mainfont, Helvetica, Verdana";
                b = 2 * e.measureText("m").width / 3;
                e.translate(c, d + b);
                e.textAlign =
                    "left";
                e.fillStyle = "rgba(255,255,255," + this.tutorialTextAlpha + ")";
                e.fillText(f, 0, 0);
                e.translate(0, 4 * b / 2);
                e.fillText(j, 0, 0);
                e.restore()
            }
        },
        drawJumpInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200, d = this.tutorialTextRect.y - 50, e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 140, 80, 180, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else 0.5 <=
                e && 0.75 > e ? (f = (e - 0.5) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8, 0 > e && (e = 2 * Math.PI + e), d -= 100 * f) : (f = (e - 0.75) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8 + f * Math.PI / 4, 0 > e && (e = 2 * Math.PI + e), d -= 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1), e = this.tutorialTime % 2, 1 < e && (e = 2 - e), b.globalAlpha =
                0.25 + 0.75 * e, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d + 10, c, d - 10), b.globalAlpha = 1, d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), c += 90, b.fillStyle = "rgba(255,255,255,1)",
                b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d)
        },
        drawSlideInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200, d = this.tutorialTextRect.y - 50 - 100, e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 40, 80, 180, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else 0.5 <= e && 0.75 > e ? (f = (e - 0.5) /
                    0.25, 1 < f && (f = 1), e = -Math.PI / 8, 0 > e && (e = 2 * Math.PI + e), d += 100 * f) : (f = (e - 0.75) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8 + f * Math.PI / 4, 0 > e && (e = 2 * Math.PI + e), d += 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1), b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)",
                this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d + 10, c, d - 10), e = this.tutorialTime % 2, 1 < e && (e = 2 - e), b.globalAlpha = 0.25 + 0.75 * e, d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), b.globalAlpha = 1, c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)",
                this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d)
        },
        drawLeftInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200, d = this.tutorialTextRect.y - 50, e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 140, d - 40, 180, 80, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else 0.5 <= e && 0.75 > e ? (f = (e - 0.5) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8, 0 > e && (e = 2 * Math.PI +
                    e), c -= 100 * f) : (f = (e - 0.75) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8 + f * Math.PI / 4, 0 > e && (e = 2 * Math.PI + e), c -= 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1), b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                this.drawArrow(c, d + 10, c, d - 10), d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), e = this.tutorialTime % 2, 1 < e && (e = 2 - e), b.globalAlpha = 0.25 + 0.75 * e, c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), b.globalAlpha = 1, c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20,
                d - 20, 40, 40, 5, !0, !1), this.drawArrow(c - 10, d, c + 10, d)
        },
        drawRightInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 100, d = this.tutorialTextRect.y - 50, e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 40, 180, 80, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else 0.5 <= e && 0.75 > e ? (f = (e - 0.5) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8, 0 > e && (e = 2 * Math.PI + e), c += 100 * f) : (f =
                    (e - 0.75) / 0.25, 1 < f && (f = 1), e = -Math.PI / 8 + f * Math.PI / 4, 0 > e && (e = 2 * Math.PI + e), c += 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else c = ig.system.width / 2 + 150, d = this.tutorialTextRect.y - 100, b.fillStyle = "rgba(0,0,0,0.75)", b.strokeStyle = "rgba(0,0,0,0.75)", this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1), b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c,
                d + 10, c, d - 10), d += 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c, d - 10, c, d + 10), c -= 45, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c + 10, d, c - 10, d), e = this.tutorialTime % 2, 1 < e && (e = 2 - e), b.globalAlpha = 0.25 + 0.75 * e, c += 90, b.fillStyle = "rgba(255,255,255,1)", b.strokeStyle = "rgba(255,255,255,1)", this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1), this.drawArrow(c -
                10, d, c + 10, d), b.globalAlpha = 1
        }
    })
});
