ig.module("game.entities.branding-logo").requires("impact.entity").defines(function () {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {x: 32, y: 32},
        zIndex: 10001,
        init: function (b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k ==
                b) return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight, n = window.innerWidth /
                    mobileWidth;
                $("#" + f.id).css("left", this.pos.x * n);
                $("#" + f.id).css("top", this.pos.y * j);
                $("#" + f.id).css("width", this.size.x * n);
                $("#" + f.id).css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), $("#" + f.id).css("left", j + this.pos.x * multiplier), $("#" + f.id).css("top", n + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
