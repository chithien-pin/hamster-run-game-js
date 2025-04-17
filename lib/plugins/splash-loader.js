ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function () {
    ig.SplashLoader = ig.Loader.extend({
        bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.jpg"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        loadingTextAlpha: 1,
        init: function (b, c) {
            this.parent(b, c);
            this.setupCustomAnimation();
            ig.system.context.font = "18px mainfont, Helvetica, Verdana";
            ig.system.context.fillText("", 0, 0)
        },
        end: function () {
            this.loadingTextAlpha = 1;
            this.draw();
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b);
            window.clearInterval(ig.loadingScreen.animationTimer)
        },
        setupCustomAnimation: function () {
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function () {
            var b = Date.now() / 1E3 % 1;
            0.5 < b && (b = 1 - b);
            this.loadingTextAlpha = 1 - 2 * b
        },
        draw: function () {
            this._drawStatus +=
                (this.status - this._drawStatus) / 5;
            var b = ig.system.context;
            b.save();
            b.fillStyle = "#000000";
            b.fillRect(0, 0, ig.system.width, ig.system.height);
            this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
            this.bgImage.draw(0, 0);
            b.restore();
            this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
            var c;
            w0 = 152;
            h0 = 11;
            x0 = (ig.system.width - w0) / 2;
            y0 = 570;
            ig.system.context.save();
            b.translate(x0 + w0 / 2, y0);
            b.fillStyle = "#000000";
            b.strokeStyle = "#000000";
            b.lineWidth = 0;
            b.fillRect(-w0 / 2, 0, w0,
                h0);
            b.strokeRect(-w0 / 2, 0, w0, h0);
            c = this._drawStatus * w0;
            b.fillStyle = "#A5DE3E";
            b.strokeStyle = "#A5DE3E";
            b.lineWidth = 0;
            b.fillRect(-w0 / 2, 0, c, h0 / 2);
            b.strokeRect(-w0 / 2, 0, c, h0 / 2);
            b.fillStyle = "#67BD51";
            b.strokeStyle = "#67BD51";
            b.lineWidth = 0;
            b.fillRect(-w0 / 2, h0 / 2, c, h0 / 2);
            b.strokeRect(-w0 / 2, h0 / 2, c, h0 / 2);
            ig.system.context.fillStyle = "#000000";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            b = _STRINGS.Loading.Loading;
            c = ig.system.context.measureText("m").width;
            c = h0 + c + 4 * c / 10;
            ig.system.context.globalAlpha =
                this.loadingTextAlpha;
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(b, 0, c);
            ig.system.context.restore()
        }
    })
});