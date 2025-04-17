ig.module("game.entities.button-more-games").requires("impact.entity").defines(function () {
    EntityButtonMoreGames = ig.Entity.extend({
        size: {x: 176, y: 116}, zIndex: 750, type: ig.Entity.TYPE.B, init: function (b, c, d) {
            this.parent(b, c, d)
        }, ready: function () {
            setTimeout(this.spawnDiv(), 5)
        }, spawnDiv: function () {
            if (!this.canSpawnDiv) if (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled) {
                var b;
                b = this.divLayerName ? this.divLayerName : "more-games";
                this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, !0);
                if (ig.ua.mobile) {
                    var c = window.innerHeight /
                        mobileHeight, d = window.innerWidth / mobileWidth;
                    $("#" + b).css("left", this.pos.x * d);
                    $("#" + b).css("top", this.pos.y * c);
                    $("#" + b).css("width", this.size.x * d);
                    $("#" + b).css("height", this.size.y * c)
                } else c = document.getElementById("game").offsetLeft, d = document.getElementById("game").offsetTop, $("#" + b).css("left", c + this.pos.x * multiplier), $("#" + b).css("top", d + this.pos.y * multiplier), $("#" + b).css("width", this.size.x * multiplier), $("#" + b).css("height", this.size.y * multiplier)
            } else this.kill()
        }, doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k ==
                b) return !0;
            return !1
        }, checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        }, createClickableOutboundLayer: function (b, c, d, e) {
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
            } else j = document.getElementById("game").offsetLeft, n = document.getElementById("game").offsetTop, $("#" + f.id).css("left", j + this.pos.x * multiplier), $("#" + f.id).css("top", n + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }, hide: function () {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            document.getElementById(b).style.visibility = "hidden";
            $("#" + b).hide()
        },
        show: function () {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            document.getElementById(b).style.visibility = "visible";
            $("#" + b).show()
        }, clicking: function () {
        }, released: function () {
        }, over: function () {
        }, leave: function () {
        }
    })
});