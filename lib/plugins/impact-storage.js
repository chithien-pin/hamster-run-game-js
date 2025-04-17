ig.module("plugins.impact-storage").requires("impact.game").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        }, init: function () {
            ig.Storage.instance = this
        }, isCapable: function () {
            return "undefined" !== typeof window.localStorage
        }, isSet: function (b) {
            return null !== this.get(b)
        }, initUnset: function (b, c) {
            null === this.get(b) && this.set(b, c)
        }, get: function (b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function (b) {
            return ~~this.get(b)
        }, getFloat: function (b) {
            return parseFloat(this.get(b))
        }, getBool: function (b) {
            return !!this.get(b)
        }, key: function (b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        }, set: function (b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        }, setHighest: function (b, c) {
            c > this.getFloat(b) && this.set(b, c)
        }, remove: function (b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        }, clear: function () {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});