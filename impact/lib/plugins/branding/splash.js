ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function () {
    ig.BrandingSplash = ig.Class.extend({
        init: function () {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {x: 32, y: 32},
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function (b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200,
                this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({pos: {y: this.endPosY}}, 0.5, {easing: ig.Tween.Easing.Bounce.EaseIn});
            c = this.tween({}, 2.5, {
                onComplete: function () {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function () {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b,
                                                c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight, n = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * n);
                $("#" + f.id).css("top", this.pos.y * j);
                $("#" + f.id).css("width", this.size.x * n);
                $("#" + f.id).css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), $("#" + f.id).css("left", j + this.pos.x * multiplier), $("#" + f.id).css("top", n + this.pos.y *
                multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function () {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent()
        }
    })
});
