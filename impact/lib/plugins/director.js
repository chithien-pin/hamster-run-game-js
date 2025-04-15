ig.module("plugins.director").requires("impact.impact").defines(function () {
    ig.Director = ig.Class.extend({
        init: function (b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        }, loadLevel: function (b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        }, loadLevelWithoutEntities: function (b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        }, append: function (b) {
            newLevels = [];
            return "object" ===
            typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        }, nextLevel: function () {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        }, previousLevel: function () {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        }, jumpTo: function (b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        }, firstLevel: function () {
            return this.loadLevel(0)
        }, lastLevel: function () {
            return this.loadLevel(this.levels.length -
                1)
        }, reloadLevel: function () {
            return this.loadLevel(this.currentLevel)
        }
    })
});