ig.module("game.entities.shop-control").requires("impact.entity").defines(function () {
    EntityShopControl = ig.Entity.extend({
        zIndex: 2E3,
        pointer: null,
        control: null,
        coinImage: new ig.Image("media/graphics/game/ui/game/coinicon.png"),
        coinRect: {x: 20, y: 75, w: 41, h: 42},
        coinCountPos: {x: 75, y: 106},
        lifeImage: new ig.Image("media/graphics/game/ui/game/lifeicon.png"),
        lifeRect: {x: 320, y: 350, w: 40, h: 40},
        titleImage: new ig.Image("media/graphics/game/ui/game/shop-title.png"),
        titlePos: {x: 243, y: 46},
        panelGreyImage: new ig.Image("media/graphics/game/ui/game/shop-panel0.png"),
        panelImage: new ig.Image("media/graphics/game/ui/game/shop-panel1.png"),
        panelPos: {x: 202, y: 179},
        panelOffset: {x: 0, y: 0},
        panelAlpha: 1,
        itemImage: [new ig.Image("media/graphics/game/ui/game/skateboard.png"), new ig.Image("media/graphics/game/ui/game/skates.png"), new ig.Image("media/graphics/game/ui/game/rocket.png"), new ig.Image("media/graphics/game/ui/game/carpet.png"), new ig.Image("media/graphics/game/ui/game/hoverboard.png")],
        itemId: 0,
        itemPos: {x: 254, y: 257},
        itemTextPos: {x: 320, y: 248},
        arrowSheet: new ig.AnimationSheet("media/graphics/game/ui/game/arrow.png",
            50, 46),
        arrowRightAnimUp: null,
        arrowRightAnimDown: null,
        arrowRightAnim: null,
        arrowRightRect: {x: 470, y: 270, w: 50, h: 46},
        arrowLeftAnimUp: null,
        arrowLeftAnimDown: null,
        arrowLeftAnim: null,
        arrowLeftRect: {x: 120, y: 270, w: 50, h: 46},
        buttonSheet: new ig.AnimationSheet("media/graphics/game/ui/game/shop-button.png", 119, 65),
        buttonAnimUp: null,
        buttonAnimDown: null,
        buttonAnim: null,
        buttonRect: {x: 259, y: 420, w: 119, h: 65},
        buttonOffset: {x: 0, y: 0},
        homeSheet: new ig.AnimationSheet("media/graphics/game/ui/game/home.png", 50, 50),
        homeAnimUp: null,
        homeAnimDown: null,
        homeAnim: null,
        homeRect: {x: 295, y: 530, w: 50, h: 50},
        homeOffset: {x: 0, y: 0},
        skateboardPrice: 1E3,
        hidden: !0,
        showDone: !1,
        hideDone: !1,
        isShowing: !1,
        isHiding: !1,
        showTime: 0,
        showDuration: 0.5,
        hideTime: 0,
        hideDuration: 0.5,
        alpha: 0,
        pagingLeft: !1,
        pagingRight: !1,
        pagingTime: 0,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.titlePos.x = ig.system.width / 2 - this.titleImage.width / 2;
            this.panelPos.x = ig.system.width / 2 - this.panelImage.width / 2;
            this.itemPos.x = this.panelPos.x + 52;
            this.itemPos.y = this.panelPos.y + 78;
            this.itemTextPos.x =
                ig.system.width / 2;
            this.itemTextPos.y = this.panelPos.y + 55;
            this.buttonRect.x = ig.system.width / 2 - 61;
            this.homeRect.x = ig.system.width / 2 - 25;
            this.buttonAnimUp = new ig.Animation(this.buttonSheet, 0.1, [0]);
            this.buttonAnimDown = new ig.Animation(this.buttonSheet, 0.1, [1]);
            this.buttonAnim = this.buttonAnimUp;
            this.homeAnimUp = new ig.Animation(this.homeSheet, 0.1, [0]);
            this.homeAnimDown = new ig.Animation(this.homeSheet, 0.1, [1]);
            this.homeAnim = this.homeAnimUp;
            this.arrowLeftAnimUp = new ig.Animation(this.arrowSheet, 0.1, [0]);
            this.arrowLeftAnimDown =
                new ig.Animation(this.arrowSheet, 0.1, [1]);
            this.arrowLeftAnim = this.arrowLeftAnimUp;
            this.arrowLeftAnimUp.flip.x = !0;
            this.arrowLeftAnimDown.flip.x = !0;
            this.arrowRightAnimUp = new ig.Animation(this.arrowSheet, 0.1, [0]);
            this.arrowRightAnimDown = new ig.Animation(this.arrowSheet, 0.1, [1]);
            this.arrowRightAnim = this.arrowRightAnimUp;
            this.arrowLeftRect.x = ig.system.width / 2 - 200;
            this.arrowRightRect.x = ig.system.width / 2 + 150;
            this.lifeRect.x = this.panelPos.x + this.panelImage.width - 45;
            ig.game.getItemUpgradeEquipped(0) ? this.itemId =
                0 : ig.game.getItemUpgradeEquipped(1) ? this.itemId = 1 : ig.game.getItemUpgradeEquipped(2) ? this.itemId = 2 : ig.game.getItemUpgradeEquipped(3) ? this.itemId = 3 : ig.game.getItemUpgradeEquipped(4) && (this.itemId = 4)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]
        },
        draw: function () {
            if (!this.hidden && 0 != this.alpha) {
                ig.system.context.globalAlpha = 0.5 * this.alpha;
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillRect(0, 0, ig.system.width,
                    ig.system.height);
                ig.system.context.globalAlpha = 1;
                ig.system.context.globalAlpha = this.alpha;
                this.titleImage.draw(this.titlePos.x, this.titlePos.y);
                ig.system.context.globalAlpha = this.panelAlpha;
                ig.game.getItemUpgradeStatus(this.itemId) ? this.panelImage.draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y) : this.panelGreyImage.draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y);
                this.itemImage[this.itemId].draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y +
                    this.panelOffset.y);
                ig.system.context.textAlign = "center";
                ig.system.context.font = "18px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#1A4283";
                ig.system.context.fillText(ig.game.getItemUpgradeName(this.itemId), this.itemTextPos.x + this.panelOffset.x, this.itemTextPos.y + this.panelOffset.y);
                if (!ig.game.getItemUpgradeStatus(this.itemId)) {
                    this.buttonAnim.draw(this.buttonRect.x, this.buttonRect.y);
                    ig.system.context.textAlign = "center";
                    ig.system.context.font = "16px mainfont, Helvetica, Verdana";
                    ig.system.context.fillStyle =
                        "#1A4283";
                    var b = this.buttonRect.x - 17 + this.buttonRect.w / 2 + this.buttonOffset.x,
                        c = this.buttonRect.y - 27 + this.buttonRect.h + this.buttonOffset.y;
                    ig.system.context.fillText(ig.game.getItemUpgradePrice(this.itemId), b, c)
                }
                ig.game.getItemUpgradeEquipped(this.itemId) && (b = ig.system.context, b.save(), b.translate(this.lifeRect.x + this.panelOffset.x, this.lifeRect.y + this.panelOffset.y), b.rotate(-Math.PI / 8), this.lifeImage.draw(-this.lifeRect.w / 2, -this.lifeRect.h), b.textAlign = "center", b.font = "16px mainfont, Helvetica, Verdana",
                    b.fillStyle = "#000000", b.fillText(_STRINGS.UI.using, 2, 22), b.fillStyle = "#e45309", b.fillText(_STRINGS.UI.using, 0, 20), b.restore());
                ig.system.context.globalAlpha = 1;
                this.arrowLeftAnim.draw(this.arrowLeftRect.x, this.arrowLeftRect.y);
                this.arrowRightAnim.draw(this.arrowRightRect.x, this.arrowRightRect.y);
                this.homeAnim.draw(this.homeRect.x, this.homeRect.y);
                this.coinImage.draw(this.coinRect.x, this.coinRect.y);
                ig.system.context.textAlign = "left";
                ig.system.context.font = "20px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle =
                    "#000000";
                ig.system.context.fillText(ig.game.money, this.coinCountPos.x + 2, this.coinCountPos.y + 2);
                ig.system.context.fillStyle = "#ffffff";
                ig.system.context.fillText(ig.game.money, this.coinCountPos.x, this.coinCountPos.y);
                ig.system.context.globalAlpha = 1
            }
        },
        show: function () {
            this.hidden = !1;
            this.isShowing = !0;
            this.hideDone = this.showDone = !1;
            this.showTime = ig.system.clock.delta();
            var b = this.showDuration;
            this.offset.y = ig.system.height;
            this.tweenObj = this.tween({offset: {x: 0, y: 0}}, b, {
                easing: ig.Tween.Easing.Elastic.EaseOut,
                entity: this, onComplete: function () {
                    this.entity.showDone = !0;
                    this.entity.isShowing = !1
                }
            });
            this.tweenObj.start();
            ig.game.visitedShop = !0;
            ig.game.savePlayerStats()
        },
        hide: function () {
            this.isHiding = !0;
            this.hideDone = this.showDone = !1;
            this.hideTime = ig.system.clock.delta();
            var b = this.hideDuration;
            this.offset.y = 0;
            this.tweenObj = this.tween({offset: {x: 0, y: ig.system.height}}, b, {
                easing: ig.Tween.Easing.Elastic.EaseIn, entity: this, onComplete: function () {
                    this.entity.hideDone = !0;
                    this.entity.hidden = !0;
                    this.entity.isHiding =
                        !1;
                    this.entity.control.unpause()
                }
            });
            this.tweenObj.start()
        },
        update: function () {
            if (!this.hidden) {
                if (this.isShowing) {
                    var b = ig.system.clock.delta() - this.showTime;
                    b > this.showDuration / 2 && (b = this.showDuration / 2);
                    b /= this.showDuration / 2;
                    this.control.mainMenuAlpha = 1 - b;
                    b = ig.system.clock.delta() - this.showTime;
                    b >= this.showDuration / 2 && (b -= this.showDuration / 2, b > this.showDuration / 2 && (b = this.showDuration / 2), this.alpha = b /= this.showDuration / 2)
                }
                this.isHiding && (b = ig.system.clock.delta() - this.hideTime, b > this.hideDuration /
                2 && (b = this.hideDuration / 2), b /= this.hideDuration / 2, this.alpha = 1 - b, b = ig.system.clock.delta() - this.hideTime, b >= this.hideDuration / 2 && (b -= this.hideDuration / 2, b > this.hideDuration / 2 && (b = this.hideDuration / 2), b /= this.hideDuration / 2, this.control.mainMenuAlpha = b));
                this.tweenObj && this.tweenObj.update();
                this.showDone && this.checkClicks();
                this.pagingRight && (b = ig.system.clock.delta() - this.pagingTime, 0.5 >= b ? (b /= 0.5, this.panelAlpha = 1 - b * b, this.panelOffset.x -= 200 * ig.system.tick) : 1 >= b ? (0.5 >= b - ig.system.tick && (this.panelOffset.x =
                    100, this.itemId += 1, this.itemId >= this.itemImage.length && (this.itemId = 0)), b = (b - 0.5) / 0.5, this.panelAlpha = b * b, this.panelOffset.x -= 200 * ig.system.tick) : (this.pagingRight = !1, this.panelOffset.x = 0));
                this.pagingLeft && (b = ig.system.clock.delta() - this.pagingTime, 0.5 >= b ? (b /= 0.5, 1 < b && (b = 1), this.panelAlpha = 1 - b * b, this.panelOffset.x += 200 * ig.system.tick) : 1 >= b ? (0.5 >= b - ig.system.tick && (this.panelOffset.x = -100, this.itemId -= 1, 0 > this.itemId && (this.itemId = this.itemImage.length - 1)), b = (b - 0.5) / 0.5, 1 < b && (b = 1), this.panelAlpha =
                    b * b, this.panelOffset.x += 200 * ig.system.tick) : (this.pagingLeft = !1, this.panelOffset.x = 0))
            }
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkClicks: function () {
            this.pointer.refreshPos();
            var b = {};
            b.x = this.pointer.pos.x;
            b.y = this.pointer.pos.y;
            b.w = this.pointer.size.x;
            b.h = this.pointer.size.y;
            if (!ig.game.getItemUpgradeStatus(this.itemId) && !this.pagingLeft && !this.pagingRight) if (this.aabbCheck(b, this.buttonRect)) {
                if (ig.input.state("click") && (this.buttonAnim = this.buttonAnimDown,
                    this.buttonOffset.y = 2), ig.input.released("click")) {
                    this.buttonAnim = this.buttonAnimUp;
                    this.buttonOffset.y = 0;
                    var c = ig.game.getItemUpgradePrice(this.itemId);
                    ig.game.money >= c && (ig.game.money -= c, ig.game.setItemUpgradeStatus(this.itemId, !0), ig.game.setItemUpgradeEquipped(this.itemId, !0), ig.game.savePlayerStats(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))
                }
            } else this.buttonAnim = this.buttonAnimUp, this.buttonOffset.y = 0;
            ig.game.getItemUpgradeStatus(this.itemId) && !this.pagingLeft && !this.pagingRight &&
            (c = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }, c.x = this.panelPos.x, c.y = this.panelPos.y, c.w = this.panelImage.width, c.h = this.panelImage.height, this.aabbCheck(b, c) && ig.input.released("click") && (ig.game.getItemUpgradeEquipped(this.itemId) ? ig.game.setItemUpgradeEquipped(this.itemId, !1) : ig.game.setItemUpgradeEquipped(this.itemId, !0), ig.game.savePlayerStats(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)));
            this.aabbCheck(b, this.homeRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown), ig.input.released("click") &&
            (this.homeAnim = this.homeAnimUp, ig.game.savePlayerStats(), this.hide(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp;
            this.aabbCheck(b, this.arrowRightRect) ? (ig.input.state("click") && (this.arrowRightAnim = this.arrowRightAnimDown), ig.input.released("click") && (this.arrowRightAnim = this.arrowRightAnimUp, this.doPageRight(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.arrowRightAnim = this.arrowRightAnimUp;
            this.aabbCheck(b, this.arrowLeftRect) ? (ig.input.state("click") &&
            (this.arrowLeftAnim = this.arrowLeftAnimDown), ig.input.released("click") && (this.arrowLeftAnim = this.arrowLeftAnimUp, this.doPageLeft(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.arrowLeftAnim = this.arrowLeftAnimUp
        },
        doPageLeft: function () {
            !this.pagingLeft && !this.pagingRight && (this.pagingLeft = !0, this.pagingTime = ig.system.clock.delta())
        },
        doPageRight: function () {
            !this.pagingRight && !this.pagingLeft && (this.pagingRight = !0, this.pagingTime = ig.system.clock.delta())
        }
    })
});
