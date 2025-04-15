var _STRINGS = {
    Loading: {Loading: "LOADING"},
    Tutorial: [["Hi! My name is Tiny.", "Welcome to Giant Hamster Run!"], ["Collect cookies to turn into", "an invincible ball!"], ["Flick upwards to jump", "over the obstacle."], ["Press the UP ARROW to",
        "jump over the obstacle."], ["Tap or Flick to the right", "to pick up those coins!"], ["Press the RIGHT ARROW", "to pick up those coins!"], ["We need to go to the left now.", "Tap or Flick to the left."], ["We need to go to the left now.", "Press the LEFT ARROW."], ["Almost there! Tap or Flick", "to the left again."], ["Almost there! Press the", "LEFT ARROW again."], ["Flick downwards to slide", "and grab that cookie!"], ["Press the DOWN ARROW to slide", "and grab that cookie!"], ["It's all up to you now.", "Good luck and have fun!"]],
    UI: {
        enter: "enter",
        "continue": "continue",
        owned: "owned",
        using: "using",
        skateboard: "skateboard",
        "roller-skates": "roller-skates",
        rocket: "rocket",
        "flying carpet": "flying carpet",
        hoverboard: "hoverboard"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {Events: {InitializeGame: !0, EndGame: !0, Level: {Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0}}}
    },
    Language: {Default: "en"},
    DeveloperBranding: {
        Splash: {Enabled: !0},
        Logo: {Enabled: !0, Link: "http://marketjs.com", LinkEnabled: !1, NewWindow: !0, Width: 166, Height: 61}
    },
    Branding: {
        Splash: {Enabled: !1}, Logo: {
            Enabled: !1, Link: "http://google.com", LinkEnabled: !0, NewWindow: !0,
            Width: 280, Height: 34
        }
    },
    MoreGames: {Enabled: !0, Link: "http://www.marketjs.com/game/links/mobile", NewWindow: !0},
    Gamecenter: {Enabled: !0}
};
(function (b, c) {
    function d(b, t, r) {
        if (r === c && 1 === b.nodeType) if (r = "data-" + t.replace(rc, "-$1").toLowerCase(), r = b.getAttribute(r), "string" == typeof r) {
            try {
                r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sc.test(r) ? g.parseJSON(r) : r
            } catch (d) {
            }
            g.data(b, t, r)
        } else r = c;
        return r
    }

    function e(b) {
        for (var c in b) if (!("data" === c && g.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function f() {
        return !1
    }

    function j() {
        return !0
    }

    function n(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function p(b,
               c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function q(b, c, r) {
        c = c || 0;
        if (g.isFunction(c)) return g.grep(b, function (b, y) {
            return !!c.call(b, y, b) === r
        });
        if (c.nodeType) return g.grep(b, function (b) {
            return b === c === r
        });
        if ("string" == typeof c) {
            var d = g.grep(b, function (b) {
                return 1 === b.nodeType
            });
            if (uc.test(c)) return g.filter(c, d, !r);
            c = g.filter(c, d)
        }
        return g.grep(b, function (b) {
            return 0 <= g.inArray(b, c) === r
        })
    }

    function v(b) {
        var c = vb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement) for (; c.length;) b.createElement(c.pop());
        return b
    }

    function x(b, c) {
        if (1 === c.nodeType && g.hasData(b)) {
            var r, d, e;
            d = g._data(b);
            var f = g._data(c, d), u = d.events;
            if (u) for (r in delete f.handle, f.events = {}, u) {
                d = 0;
                for (e = u[r].length; d < e; d++) g.event.add(c, r, u[r][d])
            }
            f.data && (f.data = g.extend({}, f.data))
        }
    }

    function l(b, c) {
        var r;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), r = c.nodeName.toLowerCase(), "object" === r ? (c.parentNode && (c.outerHTML = b.outerHTML), g.support.html5Clone && b.innerHTML && !g.trim(c.innerHTML) &&
        (c.innerHTML = b.innerHTML)) : "input" === r && wb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === r ? c.selected = b.defaultSelected : "input" === r || "textarea" === r ? c.defaultValue = b.defaultValue : "script" === r && c.text !== b.text && (c.text = b.text), c.removeAttribute(g.expando))
    }

    function m(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function s(b) {
        wb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function H(b, c) {
        if (c in b) return c;
        for (var r = c.charAt(0).toUpperCase() + c.slice(1), d = c, g = xb.length; g--;) if (c = xb[g] + r, c in b) return c;
        return d
    }

    function M(b, c) {
        return b = c || b, "none" === g.css(b, "display") || !g.contains(b.ownerDocument, b)
    }

    function C(b, c) {
        for (var r, d, e = [], f = 0, u = b.length; f < u; f++) r = b[f], r.style && (e[f] = g._data(r, "olddisplay"), c ? (!e[f] && "none" === r.style.display && (r.style.display = ""), "" === r.style.display && M(r) && (e[f] = g._data(r, "olddisplay", O(r.nodeName)))) : (d = P(r, "display"), !e[f] && "none" !==
        d && g._data(r, "olddisplay", d)));
        for (f = 0; f < u; f++) if (r = b[f], r.style && (!c || "none" === r.style.display || "" === r.style.display)) r.style.display = c ? e[f] || "" : "none";
        return b
    }

    function I(b, c, r) {
        return (b = vc.exec(c)) ? Math.max(0, b[1] - (r || 0)) + (b[2] || "px") : c
    }

    function Wa(b, c, r, d) {
        c = r === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var e = 0; 4 > c; c += 2) "margin" === r && (e += g.css(b, r + da[c], !0)), d ? ("content" === r && (e -= parseFloat(P(b, "padding" + da[c])) || 0), "margin" !== r && (e -= parseFloat(P(b, "border" + da[c] + "Width")) || 0)) : (e += parseFloat(P(b,
            "padding" + da[c])) || 0, "padding" !== r && (e += parseFloat(P(b, "border" + da[c] + "Width")) || 0));
        return e
    }

    function D(b, c, r) {
        var d = "width" === c ? b.offsetWidth : b.offsetHeight, e = !0,
            f = g.support.boxSizing && "border-box" === g.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = P(b, c);
            if (0 > d || null == d) d = b.style[c];
            if (xa.test(d)) return d;
            e = f && (g.support.boxSizingReliable || d === b.style[c]);
            d = parseFloat(d) || 0
        }
        return d + Wa(b, c, r || (f ? "border" : "content"), e) + "px"
    }

    function O(b) {
        if (Xa[b]) return Xa[b];
        var c = g("<" + b + ">").appendTo(z.body), r = c.css("display");
        c.remove();
        if ("none" === r || "" === r) {
            ka = z.body.appendChild(ka || g.extend(z.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!la || !ka.createElement) la = (ka.contentWindow || ka.contentDocument).document, la.write("<!doctype html><html><body>"), la.close();
            c = la.body.appendChild(la.createElement(b));
            r = P(c, "display");
            z.body.removeChild(ka)
        }
        return Xa[b] = r, r
    }

    function L(b, c, r, d) {
        var e;
        if (g.isArray(c)) g.each(c, function (c, t) {
            r || wc.test(b) ? d(b, t) : L(b + "[" + ("object" == typeof t ? c : "") + "]", t, r, d)
        }); else if (!r &&
            "object" === g.type(c)) for (e in c) L(b + "[" + e + "]", c[e], r, d); else d(b, c)
    }

    function ya(b) {
        return function (c, r) {
            "string" != typeof c && (r = c, c = "*");
            var d, e, f = c.toLowerCase().split(ea), u = 0, l = f.length;
            if (g.isFunction(r)) for (; u < l; u++) d = f[u], (e = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[e ? "unshift" : "push"](r)
        }
    }

    function ma(b, t, r, d, g, e) {
        g = g || t.dataTypes[0];
        e = e || {};
        e[g] = !0;
        var u;
        g = b[g];
        for (var f = 0, l = g ? g.length : 0, j = b === Ya; f < l && (j || !u); f++) u = g[f](t, r, d), "string" == typeof u && (!j || e[u] ? u = c : (t.dataTypes.unshift(u),
            u = ma(b, t, r, d, u, e)));
        return (j || !u) && !e["*"] && (u = ma(b, t, r, d, "*", e)), u
    }

    function ra(b, t) {
        var r, d, e = g.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== c && ((e[r] ? b : d || (d = {}))[r] = t[r]);
        d && g.extend(!0, b, d)
    }

    function yb() {
        try {
            return new b.XMLHttpRequest
        } catch (y) {
        }
    }

    function zb() {
        return setTimeout(function () {
            za = c
        }, 0), za = g.now()
    }

    function Ab(b, c, r) {
        var d, e = 0, f = Aa.length, u = g.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            for (var c = za || zb(), c = Math.max(0, j.startTime + j.duration - c), t = 1 - (c / j.duration || 0), r =
                0, d = j.tweens.length; r < d; r++) j.tweens[r].run(t);
            return u.notifyWith(b, [j, t, c]), 1 > t && d ? c : (u.resolveWith(b, [j]), !1)
        }, j = u.promise({
            elem: b,
            props: g.extend({}, c),
            opts: g.extend(!0, {specialEasing: {}}, r),
            originalProperties: c,
            originalOptions: r,
            startTime: za || zb(),
            duration: r.duration,
            tweens: [],
            createTween: function (c, t) {
                var r = g.Tween(b, j.opts, c, t, j.opts.specialEasing[c] || j.opts.easing);
                return j.tweens.push(r), r
            },
            stop: function (c) {
                for (var t = 0, r = c ? j.tweens.length : 0; t < r; t++) j.tweens[t].run(1);
                return c ? u.resolveWith(b,
                    [j, c]) : u.rejectWith(b, [j, c]), this
            }
        });
        c = j.props;
        r = j.opts.specialEasing;
        var m, s, q, n;
        for (d in c) if (m = g.camelCase(d), s = r[m], q = c[d], g.isArray(q) && (s = q[1], q = c[d] = q[0]), d !== m && (c[m] = q, delete c[d]), (n = g.cssHooks[m]) && "expand" in n) for (d in q = n.expand(q), delete c[m], q) d in c || (c[d] = q[d], r[d] = s); else r[m] = s;
        for (; e < f; e++) if (d = Aa[e].call(j, b, c, j.opts)) return d;
        var v = j;
        g.each(c, function (b, y) {
            for (var c = (sa[b] || []).concat(sa["*"]), t = 0, r = c.length; t < r && !c[t].call(v, b, y); t++) ;
        });
        return g.isFunction(j.opts.start) && j.opts.start.call(b,
            j), g.fx.timer(g.extend(l, {
            anim: j,
            queue: j.opts.queue,
            elem: b
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function R(b, c, r, d, g) {
        return new R.prototype.init(b, c, r, d, g)
    }

    function Ba(b, c) {
        var r, d = {height: b}, g = 0;
        for (c = c ? 1 : 0; 4 > g; g += 2 - c) r = da[g], d["margin" + r] = d["padding" + r] = b;
        return c && (d.opacity = d.width = b), d
    }

    function Bb(b) {
        return g.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }

    var Cb, Ca, z = b.document, yc = b.location, zc = b.navigator, Ac =
            b.jQuery, Bc = b.$, Db = Array.prototype.push, Z = Array.prototype.slice, Eb = Array.prototype.indexOf,
        Cc = Object.prototype.toString, Za = Object.prototype.hasOwnProperty, $a = String.prototype.trim,
        g = function (b, c) {
            return new g.fn.init(b, c, Cb)
        }, Da = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Dc = /\S/, ea = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Fb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Gc = /^[\],:{}\s]*$/, Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/, Lc = /-([\da-z])/gi, Mc = function (b, c) {
            return (c + "").toUpperCase()
        }, Ea = function () {
            z.addEventListener ? (z.removeEventListener("DOMContentLoaded", Ea, !1), g.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", Ea), g.ready())
        }, Gb = {};
    g.fn = g.prototype = {
        constructor: g, init: function (b, t, r) {
            var d, e;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                if (d && (d[1] || !t)) {
                    if (d[1]) return t = t instanceof g ? t[0] : t, e = t && t.nodeType ? t.ownerDocument || t : z, b = g.parseHTML(d[1], e, !0), Fb.test(d[1]) && g.isPlainObject(t) && this.attr.call(b, t, !0), g.merge(this, b);
                    if ((t = z.getElementById(d[2])) && t.parentNode) {
                        if (t.id !== d[2]) return r.find(b);
                        this.length = 1;
                        this[0] = t
                    }
                    return this.context = z, this.selector = b, this
                }
                return !t || t.jquery ? (t || r).find(b) : this.constructor(t).find(b)
            }
            return g.isFunction(b) ? r.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), g.makeArray(b,
                this))
        }, selector: "", jquery: "1.8.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return Z.call(this)
        }, get: function (b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        }, pushStack: function (b, c, r) {
            b = g.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + r : c && (b.selector = this.selector + "." + c + "(" + r + ")"), b
        }, each: function (b, c) {
            return g.each(this, b, c)
        }, ready: function (b) {
            return g.ready.promise().done(b),
                this
        }, eq: function (b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        }, map: function (b) {
            return this.pushStack(g.map(this, function (c, r) {
                return b.call(c, r, c)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Db, sort: [].sort, splice: [].splice
    };
    g.fn.init.prototype = g.fn;
    g.extend = g.fn.extend = function () {
        var b, t,
            r, d, e, f, u = arguments[0] || {}, l = 1, j = arguments.length, m = !1;
        "boolean" == typeof u && (m = u, u = arguments[1] || {}, l = 2);
        "object" != typeof u && !g.isFunction(u) && (u = {});
        for (j === l && (u = this, --l); l < j; l++) if (null != (b = arguments[l])) for (t in b) r = u[t], d = b[t], u !== d && (m && d && (g.isPlainObject(d) || (e = g.isArray(d))) ? (e ? (e = !1, f = r && g.isArray(r) ? r : []) : f = r && g.isPlainObject(r) ? r : {}, u[t] = g.extend(m, f, d)) : d !== c && (u[t] = d));
        return u
    };
    g.extend({
        noConflict: function (y) {
            return b.$ === g && (b.$ = Bc), y && b.jQuery === g && (b.jQuery = Ac), g
        }, isReady: !1, readyWait: 1,
        holdReady: function (b) {
            b ? g.readyWait++ : g.ready(!0)
        }, ready: function (b) {
            if (!(!0 === b ? --g.readyWait : g.isReady)) {
                if (!z.body) return setTimeout(g.ready, 1);
                g.isReady = !0;
                !0 !== b && 0 < --g.readyWait || (Ca.resolveWith(z, [g]), g.fn.trigger && g(z).trigger("ready").off("ready"))
            }
        }, isFunction: function (b) {
            return "function" === g.type(b)
        }, isArray: Array.isArray || function (b) {
            return "array" === g.type(b)
        }, isWindow: function (b) {
            return null != b && b == b.window
        }, isNumeric: function (b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        }, type: function (b) {
            return null ==
            b ? String(b) : Gb[Cc.call(b)] || "object"
        }, isPlainObject: function (b) {
            if (!b || "object" !== g.type(b) || b.nodeType || g.isWindow(b)) return !1;
            try {
                if (b.constructor && !Za.call(b, "constructor") && !Za.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            for (var d in b) ;
            return d === c || Za.call(b, d)
        }, isEmptyObject: function (b) {
            for (var c in b) return !1;
            return !0
        }, error: function (b) {
            throw Error(b);
        }, parseHTML: function (b, c, d) {
            var e;
            return !b || "string" != typeof b ? null : ("boolean" == typeof c && (d = c, c = 0), c = c || z, (e =
                Fb.exec(b)) ? [c.createElement(e[1])] : (e = g.buildFragment([b], c, d ? null : []), g.merge([], (e.cacheable ? g.clone(e.fragment) : e.fragment).childNodes)))
        }, parseJSON: function (c) {
            if (!c || "string" != typeof c) return null;
            c = g.trim(c);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
            if (Gc.test(c.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + c))();
            g.error("Invalid JSON: " + c)
        }, parseXML: function (y) {
            var t, d;
            if (!y || "string" != typeof y) return null;
            try {
                b.DOMParser ? (d = new DOMParser, t = d.parseFromString(y,
                    "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(y))
            } catch (e) {
                t = c
            }
            return (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + y), t
        }, noop: function () {
        }, globalEval: function (c) {
            c && Dc.test(c) && (b.execScript || function (c) {
                b.eval.call(b, c)
            })(c)
        }, camelCase: function (b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        }, nodeName: function (b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        }, each: function (b, t, d) {
            var e, f = 0, A = b.length,
                u = A === c || g.isFunction(b);
            if (d) if (u) for (e in b) {
                if (!1 === t.apply(b[e], d)) break
            } else for (; f < A && !1 !== t.apply(b[f++], d);) ; else if (u) for (e in b) {
                if (!1 === t.call(b[e], e, b[e])) break
            } else for (; f < A && !1 !== t.call(b[f], f, b[f++]);) ;
            return b
        }, trim: $a && !$a.call("\ufeff\u00a0") ? function (b) {
            return null == b ? "" : $a.call(b)
        } : function (b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        }, makeArray: function (b, c) {
            var d, e = c || [];
            return null != b && (d = g.type(b), null == b.length || "string" === d || "function" === d || "regexp" === d || g.isWindow(b) ? Db.call(e,
                b) : g.merge(e, b)), e
        }, inArray: function (b, c, d) {
            var g;
            if (c) {
                if (Eb) return Eb.call(c, b, d);
                g = c.length;
                for (d = d ? 0 > d ? Math.max(0, g + d) : d : 0; d < g; d++) if (d in c && c[d] === b) return d
            }
            return -1
        }, merge: function (b, t) {
            var d = t.length, g = b.length, e = 0;
            if ("number" == typeof d) for (; e < d; e++) b[g++] = t[e]; else for (; t[e] !== c;) b[g++] = t[e++];
            return b.length = g, b
        }, grep: function (b, c, d) {
            var g, e = [], f = 0, u = b.length;
            for (d = !!d; f < u; f++) g = !!c(b[f], f), d !== g && e.push(b[f]);
            return e
        }, map: function (b, t, d) {
            var e, f, A = [], u = 0, l = b.length;
            if (b instanceof g ||
                l !== c && "number" == typeof l && (0 < l && b[0] && b[l - 1] || 0 === l || g.isArray(b))) for (; u < l; u++) e = t(b[u], u, d), null != e && (A[A.length] = e); else for (f in b) e = t(b[f], f, d), null != e && (A[A.length] = e);
            return A.concat.apply([], A)
        }, guid: 1, proxy: function (b, t) {
            var d, e, f;
            return "string" == typeof t && (d = b[t], t = b, b = d), g.isFunction(b) ? (e = Z.call(arguments, 2), f = function () {
                return b.apply(t, e.concat(Z.call(arguments)))
            }, f.guid = b.guid = b.guid || g.guid++, f) : c
        }, access: function (b, t, d, e, f, A, u) {
            var l, j = null == d, m = 0, s = b.length;
            if (d && "object" == typeof d) {
                for (m in d) g.access(b,
                    t, m, d[m], 1, A, e);
                f = 1
            } else if (e !== c) {
                l = u === c && g.isFunction(e);
                j && (l ? (l = t, t = function (b, c, y) {
                    return l.call(g(b), y)
                }) : (t.call(b, e), t = null));
                if (t) for (; m < s; m++) t(b[m], d, l ? e.call(b[m], m, t(b[m], d)) : e, u);
                f = 1
            }
            return f ? b : j ? t.call(b) : s ? t(b[0], d) : A
        }, now: function () {
            return (new Date).getTime()
        }
    });
    g.ready.promise = function (c) {
        if (!Ca) if (Ca = g.Deferred(), "complete" === z.readyState) setTimeout(g.ready, 1); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", Ea, !1), b.addEventListener("load", g.ready, !1); else {
            z.attachEvent("onreadystatechange",
                Ea);
            b.attachEvent("onload", g.ready);
            var t = !1;
            try {
                t = null == b.frameElement && z.documentElement
            } catch (d) {
            }
            t && t.doScroll && function tc() {
                if (!g.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (b) {
                        return setTimeout(tc, 50)
                    }
                    g.ready()
                }
            }()
        }
        return Ca.promise(c)
    };
    g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b, c) {
        Gb["[object " + c + "]"] = c.toLowerCase()
    });
    Cb = g(z);
    var Hb = {};
    g.Callbacks = function (b) {
        var t;
        if ("string" == typeof b) {
            if (!(t = Hb[b])) {
                t = b;
                var d = Hb[t] = {};
                t = (g.each(t.split(ea), function (b,
                                                   c) {
                    d[c] = !0
                }), d)
            }
        } else t = g.extend({}, b);
        b = t;
        var e, f, A, u, l, j, m = [], s = !b.once && [], q = function (c) {
            e = b.memory && c;
            f = !0;
            j = u || 0;
            u = 0;
            l = m.length;
            for (A = !0; m && j < l; j++) if (!1 === m[j].apply(c[0], c[1]) && b.stopOnFalse) {
                e = !1;
                break
            }
            A = !1;
            m && (s ? s.length && q(s.shift()) : e ? m = [] : n.disable())
        }, n = {
            add: function () {
                if (m) {
                    var c = m.length;
                    (function xc(c) {
                        g.each(c, function (c, t) {
                            var d = g.type(t);
                            "function" === d && (!b.unique || !n.has(t)) ? m.push(t) : t && t.length && "string" !== d && xc(t)
                        })
                    })(arguments);
                    A ? l = m.length : e && (u = c, q(e))
                }
                return this
            }, remove: function () {
                return m &&
                g.each(arguments, function (b, c) {
                    for (var y; -1 < (y = g.inArray(c, m, y));) m.splice(y, 1), A && (y <= l && l--, y <= j && j--)
                }), this
            }, has: function (b) {
                return -1 < g.inArray(b, m)
            }, empty: function () {
                return m = [], this
            }, disable: function () {
                return m = s = e = c, this
            }, disabled: function () {
                return !m
            }, lock: function () {
                return s = c, e || n.disable(), this
            }, locked: function () {
                return !s
            }, fireWith: function (b, c) {
                return c = c || [], c = [b, c.slice ? c.slice() : c], m && (!f || s) && (A ? s.push(c) : q(c)), this
            }, fire: function () {
                return n.fireWith(this, arguments), this
            }, fired: function () {
                return !!f
            }
        };
        return n
    };
    g.extend({
        Deferred: function (b) {
            var c = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]],
                d = "pending", e = {
                    state: function () {
                        return d
                    }, always: function () {
                        return f.done(arguments).fail(arguments), this
                    }, then: function () {
                        var b = arguments;
                        return g.Deferred(function (y) {
                            g.each(c, function (c, t) {
                                var d = t[0], r = b[c];
                                f[t[1]](g.isFunction(r) ? function () {
                                    var b = r.apply(this, arguments);
                                    b && g.isFunction(b.promise) ?
                                        b.promise().done(y.resolve).fail(y.reject).progress(y.notify) : y[d + "With"](this === f ? y : this, [b])
                                } : y[d])
                            });
                            b = null
                        }).promise()
                    }, promise: function (b) {
                        return null != b ? g.extend(b, e) : e
                    }
                }, f = {};
            return e.pipe = e.then, g.each(c, function (b, y) {
                var g = y[2], l = y[3];
                e[y[1]] = g.add;
                l && g.add(function () {
                    d = l
                }, c[b ^ 1][2].disable, c[2][2].lock);
                f[y[0]] = g.fire;
                f[y[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        }, when: function (b) {
            var c = 0, d = Z.call(arguments), e = d.length, f = 1 !== e || b && g.isFunction(b.promise) ? e : 0,
                l = 1 === f ? b : g.Deferred(),
                u = function (b, c, y) {
                    return function (t) {
                        c[b] = this;
                        y[b] = 1 < arguments.length ? Z.call(arguments) : t;
                        y === j ? l.notifyWith(c, y) : --f || l.resolveWith(c, y)
                    }
                }, j, m, s;
            if (1 < e) {
                j = Array(e);
                m = Array(e);
                for (s = Array(e); c < e; c++) d[c] && g.isFunction(d[c].promise) ? d[c].promise().done(u(c, s, d)).fail(l.reject).progress(u(c, m, j)) : --f
            }
            return f || l.resolveWith(s, d), l.promise()
        }
    });
    var Nc = g, ab, N, Fa, fa, Ga, Ha, S, ga, Ia, bb, ta, Ib, J = z.createElement("div");
    J.setAttribute("className", "t");
    J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Fa = J.getElementsByTagName("*");
    fa = J.getElementsByTagName("a")[0];
    fa.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Fa || !Fa.length) ab = {}; else {
        Ga = z.createElement("select");
        Ha = Ga.appendChild(z.createElement("option"));
        S = J.getElementsByTagName("input")[0];
        N = {
            leadingWhitespace: 3 === J.firstChild.nodeType,
            tbody: !J.getElementsByTagName("tbody").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /top/.test(fa.getAttribute("style")),
            hrefNormalized: "/a" === fa.getAttribute("href"),
            opacity: /^0.5/.test(fa.style.opacity),
            cssFloat: !!fa.style.cssFloat,
            checkOn: "on" === S.value,
            optSelected: Ha.selected,
            getSetAttribute: "t" !== J.className,
            enctype: !!z.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === z.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        S.checked = !0;
        N.noCloneChecked = S.cloneNode(!0).checked;
        Ga.disabled = !0;
        N.optDisabled = !Ha.disabled;
        try {
            delete J.test
        } catch (Pd) {
            N.deleteExpando = !1
        }
        !J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Ib = function () {
            N.noCloneEvent = !1
        }), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Ib));
        S = z.createElement("input");
        S.value = "t";
        S.setAttribute("type", "radio");
        N.radioValue = "t" === S.value;
        S.setAttribute("checked", "checked");
        S.setAttribute("name", "t");
        J.appendChild(S);
        ga = z.createDocumentFragment();
        ga.appendChild(J.lastChild);
        N.checkClone =
            ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
        N.appendChecked = S.checked;
        ga.removeChild(S);
        ga.appendChild(J);
        if (J.attachEvent) for (bb in {
            submit: !0,
            change: !0,
            focusin: !0
        }) Ia = "on" + bb, (ta = Ia in J) || (J.setAttribute(Ia, "return;"), ta = "function" == typeof J[Ia]), N[bb + "Bubbles"] = ta;
        ab = (g(function () {
            var c, t, d, g, e = z.getElementsByTagName("body")[0];
            e && (c = z.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", e.insertBefore(c, e.firstChild), t = z.createElement("div"),
                c.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = t.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none", ta = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", N.reliableHiddenOffsets = ta && 0 === d[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", N.boxSizing =
                4 === t.offsetWidth, N.doesNotIncludeMarginInBodyOffset = 1 !== e.offsetTop, b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(t, null) || {}).top, N.boxSizingReliable = "4px" === (b.getComputedStyle(t, null) || {width: "4px"}).width, g = z.createElement("div"), g.style.cssText = t.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", g.style.marginRight = g.style.width = "0", t.style.width = "1px", t.appendChild(g), N.reliableMarginRight = !parseFloat((b.getComputedStyle(g, null) || {}).marginRight)),
            "undefined" != typeof t.style.zoom && (t.innerHTML = "", t.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", N.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", N.shrinkWrapBlocks = 3 !== t.offsetWidth, c.style.zoom = 1), e.removeChild(c))
        }), ga.removeChild(J), Fa = fa = Ga = Ha = S = ga = J = null, N)
    }
    Nc.support = ab;
    var sc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rc = /([A-Z])/g;
    g.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (b) {
            return b = b.nodeType ? g.cache[b[g.expando]] : b[g.expando], !!b && !e(b)
        },
        data: function (b, t, d, e) {
            if (g.acceptData(b)) {
                var f, l, u = g.expando, j = "string" == typeof t, m = b.nodeType, s = m ? g.cache : b,
                    q = m ? b[u] : b[u] && u;
                if (q && s[q] && (e || s[q].data) || !(j && d === c)) {
                    q || (m ? b[u] = q = g.deletedIds.pop() || g.guid++ : q = u);
                    s[q] || (s[q] = {},
                    m || (s[q].toJSON = g.noop));
                    if ("object" == typeof t || "function" == typeof t) e ? s[q] = g.extend(s[q], t) : s[q].data = g.extend(s[q].data, t);
                    return f = s[q], e || (f.data || (f.data = {}), f = f.data), d !== c && (f[g.camelCase(t)] = d), j ? (l = f[t], null == l && (l = f[g.camelCase(t)])) : l = f, l
                }
            }
        },
        removeData: function (b, c, d) {
            if (g.acceptData(b)) {
                var f, l, A, u = b.nodeType, j = u ? g.cache : b, m = u ? b[g.expando] : g.expando;
                if (j[m]) {
                    if (c && (f = d ? j[m] : j[m].data)) {
                        g.isArray(c) || (c in f ? c = [c] : (c = g.camelCase(c), c in f ? c = [c] : c = c.split(" ")));
                        l = 0;
                        for (A = c.length; l < A; l++) delete f[c[l]];
                        if (!(d ? e : g.isEmptyObject)(f)) return
                    }
                    if (d || !(delete j[m].data, !e(j[m]))) u ? g.cleanData([b], !0) : g.support.deleteExpando || j != j.window ? delete j[m] : j[m] = null
                }
            }
        },
        _data: function (b, c, d) {
            return g.data(b, c, d, !0)
        },
        acceptData: function (b) {
            var c = b.nodeName && g.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    g.fn.extend({
        data: function (b, t) {
            var r, e, f, l, u, j = this[0], m = 0, s = null;
            if (b === c) {
                if (this.length && (s = g.data(j), 1 === j.nodeType && !g._data(j, "parsedAttrs"))) {
                    f = j.attributes;
                    for (u = f.length; m <
                    u; m++) l = f[m].name, l.indexOf("data-") || (l = g.camelCase(l.substring(5)), d(j, l, s[l]));
                    g._data(j, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof b ? this.each(function () {
                g.data(this, b)
            }) : (r = b.split(".", 2), r[1] = r[1] ? "." + r[1] : "", e = r[1] + "!", g.access(this, function (t) {
                if (t === c) return s = this.triggerHandler("getData" + e, [r[0]]), s === c && j && (s = g.data(j, b), s = d(j, b, s)), s === c && r[1] ? this.data(r[0]) : s;
                r[1] = t;
                this.each(function () {
                    var c = g(this);
                    c.triggerHandler("setData" + e, r);
                    g.data(this, b, t);
                    c.triggerHandler("changeData" +
                        e, r)
                })
            }, null, t, 1 < arguments.length, null, !1))
        }, removeData: function (b) {
            return this.each(function () {
                g.removeData(this, b)
            })
        }
    });
    g.extend({
        queue: function (b, c, d) {
            var e;
            if (b) return c = (c || "fx") + "queue", e = g._data(b, c), d && (!e || g.isArray(d) ? e = g._data(b, c, g.makeArray(d)) : e.push(d)), e || []
        }, dequeue: function (b, c) {
            c = c || "fx";
            var d = g.queue(b, c), e = d.length, f = d.shift(), l = g._queueHooks(b, c), u = function () {
                g.dequeue(b, c)
            };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" === c && d.unshift("inprogress"), delete l.stop, f.call(b, u, l));
            !e && l && l.empty.fire()
        }, _queueHooks: function (b, c) {
            var d = c + "queueHooks";
            return g._data(b, d) || g._data(b, d, {
                empty: g.Callbacks("once memory").add(function () {
                    g.removeData(b, c + "queue", !0);
                    g.removeData(b, d, !0)
                })
            })
        }
    });
    g.fn.extend({
        queue: function (b, d) {
            var r = 2;
            return "string" != typeof b && (d = b, b = "fx", r--), arguments.length < r ? g.queue(this[0], b) : d === c ? this : this.each(function () {
                var c = g.queue(this, b, d);
                g._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && g.dequeue(this, b)
            })
        }, dequeue: function (b) {
            return this.each(function () {
                g.dequeue(this,
                    b)
            })
        }, delay: function (b, c) {
            return b = g.fx ? g.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var t = setTimeout(c, b);
                d.stop = function () {
                    clearTimeout(t)
                }
            })
        }, clearQueue: function (b) {
            return this.queue(b || "fx", [])
        }, promise: function (b, d) {
            var r, e = 1, f = g.Deferred(), l = this, u = this.length, j = function () {
                --e || f.resolveWith(l, [l])
            };
            "string" != typeof b && (d = b, b = c);
            for (b = b || "fx"; u--;) (r = g._data(l[u], b + "queueHooks")) && r.empty && (e++, r.empty.add(j));
            return j(), f.promise(d)
        }
    });
    var aa, Jb, Kb, Lb = /[\t\r\n]/g, Oc = /\r/g, Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i, Rc = /^a(?:rea|)$/i,
        Mb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Nb = g.support.getSetAttribute;
    g.fn.extend({
        attr: function (b, c) {
            return g.access(this, g.attr, b, c, 1 < arguments.length)
        }, removeAttr: function (b) {
            return this.each(function () {
                g.removeAttr(this, b)
            })
        }, prop: function (b, c) {
            return g.access(this, g.prop, b, c, 1 < arguments.length)
        }, removeProp: function (b) {
            return b = g.propFix[b] ||
                b, this.each(function () {
                try {
                    this[b] = c, delete this[b]
                } catch (d) {
                }
            })
        }, addClass: function (b) {
            var c, d, e, f, l, u, j;
            if (g.isFunction(b)) return this.each(function (c) {
                g(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(ea);
                d = 0;
                for (e = this.length; d < e; d++) if (f = this[d], 1 === f.nodeType) if (!f.className && 1 === c.length) f.className = b; else {
                    l = " " + f.className + " ";
                    u = 0;
                    for (j = c.length; u < j; u++) 0 > l.indexOf(" " + c[u] + " ") && (l += c[u] + " ");
                    f.className = g.trim(l)
                }
            }
            return this
        }, removeClass: function (b) {
            var d,
                r, e, f, l, u, j;
            if (g.isFunction(b)) return this.each(function (c) {
                g(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                d = (b || "").split(ea);
                u = 0;
                for (j = this.length; u < j; u++) if (e = this[u], 1 === e.nodeType && e.className) {
                    r = (" " + e.className + " ").replace(Lb, " ");
                    f = 0;
                    for (l = d.length; f < l; f++) for (; 0 <= r.indexOf(" " + d[f] + " ");) r = r.replace(" " + d[f] + " ", " ");
                    e.className = b ? g.trim(r) : ""
                }
            }
            return this
        }, toggleClass: function (b, c) {
            var d = typeof b, e = "boolean" == typeof c;
            return g.isFunction(b) ? this.each(function (d) {
                g(this).toggleClass(b.call(this,
                    d, this.className, c), c)
            }) : this.each(function () {
                if ("string" === d) for (var f, l = 0, u = g(this), j = c, m = b.split(ea); f = m[l++];) j = e ? j : !u.hasClass(f), u[j ? "addClass" : "removeClass"](f); else if ("undefined" === d || "boolean" === d) this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : g._data(this, "__className__") || ""
            })
        }, hasClass: function (b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++) if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Lb, " ").indexOf(b)) return !0;
            return !1
        }, val: function (b) {
            var d, r, e, f = this[0];
            if (arguments.length) return e = g.isFunction(b), this.each(function (r) {
                var f, l = g(this);
                if (1 === this.nodeType && (e ? f = b.call(this, r, l.val()) : f = b, null == f ? f = "" : "number" == typeof f ? f += "" : g.isArray(f) && (f = g.map(f, function (b) {
                    return null == b ? "" : b + ""
                })), d = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], !d || !("set" in d) || d.set(this, f, "value") === c)) this.value = f
            });
            if (f) return d = g.valHooks[f.type] || g.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (r = d.get(f,
                "value")) !== c ? r : (r = f.value, "string" == typeof r ? r.replace(Oc, "") : null == r ? "" : r)
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            }, select: {
                get: function (b) {
                    var c, d, e = b.selectedIndex, f = [], l = b.options, u = "select-one" === b.type;
                    if (0 > e) return null;
                    b = u ? e : 0;
                    for (d = u ? e + 1 : l.length; b < d; b++) if (c = l[b], c.selected && (g.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !g.nodeName(c.parentNode, "optgroup"))) {
                        c = g(c).val();
                        if (u) return c;
                        f.push(c)
                    }
                    return u && !f.length && l.length ? g(l[e]).val() : f
                }, set: function (b, c) {
                    var d = g.makeArray(c);
                    return g(b).find("option").each(function () {
                        this.selected = 0 <= g.inArray(g(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        }, attrFn: {}, attr: function (b, d, r, e) {
            var f, l, u = b.nodeType;
            if (b && !(3 === u || 8 === u || 2 === u)) {
                if (e && g.isFunction(g.fn[d])) return g(b)[d](r);
                if ("undefined" == typeof b.getAttribute) return g.prop(b, d, r);
                (e = 1 !== u || !g.isXMLDoc(b)) && (d = d.toLowerCase(), l = g.attrHooks[d] || (Mb.test(d) ? Jb :
                    aa));
                if (r !== c) {
                    if (null === r) {
                        g.removeAttr(b, d);
                        return
                    }
                    return l && "set" in l && e && (f = l.set(b, r, d)) !== c ? f : (b.setAttribute(d, r + ""), r)
                }
                return l && "get" in l && e && null !== (f = l.get(b, d)) ? f : (f = b.getAttribute(d), null === f ? c : f)
            }
        }, removeAttr: function (b, c) {
            var d, e, f, l, u = 0;
            if (c && 1 === b.nodeType) for (e = c.split(ea); u < e.length; u++) (f = e[u]) && (d = g.propFix[f] || f, l = Mb.test(f), l || g.attr(b, f, ""), b.removeAttribute(Nb ? f : d), l && d in b && (b[d] = !1))
        }, attrHooks: {
            type: {
                set: function (b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode) g.error("type property can't be changed");
                    else if (!g.support.radioValue && "radio" === c && g.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }, value: {
                get: function (b, c) {
                    return aa && g.nodeName(b, "button") ? aa.get(b, c) : c in b ? b.value : null
                }, set: function (b, c, d) {
                    if (aa && g.nodeName(b, "button")) return aa.set(b, c, d);
                    b.value = c
                }
            }
        }, propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, prop: function (b, d, r) {
            var e, f, l, u = b.nodeType;
            if (b && !(3 === u || 8 === u || 2 === u)) return l = 1 !== u || !g.isXMLDoc(b), l && (d = g.propFix[d] || d, f = g.propHooks[d]), r !== c ? f && "set" in f && (e = f.set(b, r, d)) !== c ? e : b[d] = r : f && "get" in f && null !== (e = f.get(b, d)) ? e : b[d]
        }, propHooks: {
            tabIndex: {
                get: function (b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Jb = {
        get: function (b,
                       d) {
            var e, f = g.prop(b, d);
            return !0 === f || "boolean" != typeof f && (e = b.getAttributeNode(d)) && !1 !== e.nodeValue ? d.toLowerCase() : c
        }, set: function (b, c, d) {
            var e;
            return !1 === c ? g.removeAttr(b, d) : (e = g.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Nb || (Kb = {name: !0, id: !0, coords: !0}, aa = g.valHooks.button = {
        get: function (b, d) {
            var g;
            return g = b.getAttributeNode(d), g && (Kb[d] ? "" !== g.value : g.specified) ? g.value : c
        }, set: function (b, c, d) {
            var g = b.getAttributeNode(d);
            return g || (g = z.createAttribute(d), b.setAttributeNode(g)),
                g.value = c + ""
        }
    }, g.each(["width", "height"], function (b, c) {
        g.attrHooks[c] = g.extend(g.attrHooks[c], {
            set: function (b, y) {
                if ("" === y) return b.setAttribute(c, "auto"), y
            }
        })
    }), g.attrHooks.contenteditable = {
        get: aa.get, set: function (b, c, d) {
            "" === c && (c = "false");
            aa.set(b, c, d)
        }
    });
    g.support.hrefNormalized || g.each(["href", "src", "width", "height"], function (b, d) {
        g.attrHooks[d] = g.extend(g.attrHooks[d], {
            get: function (b) {
                b = b.getAttribute(d, 2);
                return null === b ? c : b
            }
        })
    });
    g.support.style || (g.attrHooks.style = {
        get: function (b) {
            return b.style.cssText.toLowerCase() ||
                c
        }, set: function (b, c) {
            return b.style.cssText = c + ""
        }
    });
    g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, {
        get: function (b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    g.support.enctype || (g.propFix.enctype = "encoding");
    g.support.checkOn || g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = {
            get: function (b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = g.extend(g.valHooks[this],
            {
                set: function (b, c) {
                    if (g.isArray(c)) return b.checked = 0 <= g.inArray(g(b).val(), c)
                }
            })
    });
    var cb = /^(?:textarea|input|select)$/i, Ob = /^([^\.]*|)(?:\.(.+)|)$/, Sc = /(?:^|\s)hover(\.\S+|)\b/, Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/, Pb = /^(?:focusinfocus|focusoutblur)$/, Qb = function (b) {
            return g.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    g.event = {
        add: function (b, d, e, f, l) {
            var j, u, m, s, q, n, E, v, p;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !e || !(j = g._data(b)))) {
                e.handler && (E = e, e = E.handler, l = E.selector);
                e.guid || (e.guid = g.guid++);
                (m = j.events) || (j.events = m = {});
                (u = j.handle) || (j.handle = u = function (b) {
                    return "undefined" != typeof g && (!b || g.event.triggered !== b.type) ? g.event.dispatch.apply(u.elem, arguments) : c
                }, u.elem = b);
                d = g.trim(Qb(d)).split(" ");
                for (j = 0; j < d.length; j++) {
                    s = Ob.exec(d[j]) || [];
                    q = s[1];
                    n = (s[2] || "").split(".").sort();
                    p = g.event.special[q] || {};
                    q = (l ? p.delegateType : p.bindType) || q;
                    p = g.event.special[q] || {};
                    s = g.extend({
                        type: q,
                        origType: s[1],
                        data: f,
                        handler: e,
                        guid: e.guid,
                        selector: l,
                        needsContext: l && g.expr.match.needsContext.test(l),
                        namespace: n.join(".")
                    }, E);
                    v = m[q];
                    if (!v && (v = m[q] = [], v.delegateCount = 0, !p.setup || !1 === p.setup.call(b, f, n, u))) b.addEventListener ? b.addEventListener(q, u, !1) : b.attachEvent && b.attachEvent("on" + q, u);
                    p.add && (p.add.call(b, s), s.handler.guid || (s.handler.guid = e.guid));
                    l ? v.splice(v.delegateCount++, 0, s) : v.push(s);
                    g.event.global[q] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function (b, c, d, e, f) {
            var l, u, j, m, s, q, n, v, p, x, H = g.hasData(b) && g._data(b);
            if (H && (n = H.events)) {
                c = g.trim(Qb(c || "")).split(" ");
                for (l = 0; l < c.length; l++) if (u = Ob.exec(c[l]) ||
                    [], j = m = u[1], u = u[2], j) {
                    v = g.event.special[j] || {};
                    j = (e ? v.delegateType : v.bindType) || j;
                    p = n[j] || [];
                    s = p.length;
                    u = u ? RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (q = 0; q < p.length; q++) x = p[q], (f || m === x.origType) && (!d || d.guid === x.guid) && (!u || u.test(x.namespace)) && (!e || e === x.selector || "**" === e && x.selector) && (p.splice(q--, 1), x.selector && p.delegateCount--, v.remove && v.remove.call(b, x));
                    0 === p.length && s !== p.length && ((!v.teardown || !1 === v.teardown.call(b, u, H.handle)) && g.removeEvent(b,
                        j, H.handle), delete n[j])
                } else for (j in n) g.event.remove(b, j + c[l], d, e, !0);
                g.isEmptyObject(n) && (delete H.handle, g.removeData(b, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (d, t, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var l, j, u, m, s, q, n, E = d.type || d;
                m = [];
                if (!Pb.test(E + g.event.triggered) && (0 <= E.indexOf("!") && (E = E.slice(0, -1), l = !0), 0 <= E.indexOf(".") && (m = E.split("."), E = m.shift(), m.sort()), e && !g.event.customEvent[E] || g.event.global[E])) if (d = "object" == typeof d ? d[g.expando] ?
                    d : new g.Event(E, d) : new g.Event(E), d.type = E, d.isTrigger = !0, d.exclusive = l, d.namespace = m.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = 0 > E.indexOf(":") ? "on" + E : "", e) {
                    if (d.result = c, d.target || (d.target = e), t = null != t ? g.makeArray(t) : [], t.unshift(d), s = g.event.special[E] || {}, !(s.trigger && !1 === s.trigger.apply(e, t))) {
                        n = [[e, s.bindType || E]];
                        if (!f && !s.noBubble && !g.isWindow(e)) {
                            j = s.delegateType || E;
                            l = Pb.test(j + E) ? e : e.parentNode;
                            for (u = e; l; l = l.parentNode) n.push([l, j]),
                                u = l;
                            u === (e.ownerDocument || z) && n.push([u.defaultView || u.parentWindow || b, j])
                        }
                        for (j = 0; j < n.length && !d.isPropagationStopped(); j++) l = n[j][0], d.type = n[j][1], (q = (g._data(l, "events") || {})[d.type] && g._data(l, "handle")) && q.apply(l, t), (q = m && l[m]) && g.acceptData(l) && q.apply && !1 === q.apply(l, t) && d.preventDefault();
                        return d.type = E, !f && !d.isDefaultPrevented() && (!s._default || !1 === s._default.apply(e.ownerDocument, t)) && ("click" !== E || !g.nodeName(e, "a")) && g.acceptData(e) && m && e[E] && ("focus" !== E && "blur" !== E || 0 !== d.target.offsetWidth) &&
                        !g.isWindow(e) && (u = e[m], u && (e[m] = null), g.event.triggered = E, e[E](), g.event.triggered = c, u && (e[m] = u)), d.result
                    }
                } else for (j in e = g.cache, e) e[j].events && e[j].events[E] && g.event.trigger(d, t, e[j].handle.elem, !0)
            }
        },
        dispatch: function (d) {
            d = g.event.fix(d || b.event);
            var t, e, f, l, j, u, m = (g._data(this, "events") || {})[d.type] || [], s = m.delegateCount,
                q = Z.call(arguments), n = !d.exclusive && !d.namespace, E = g.event.special[d.type] || {}, v = [];
            q[0] = d;
            d.delegateTarget = this;
            if (!(E.preDispatch && !1 === E.preDispatch.call(this, d))) {
                if (s &&
                    (!d.button || "click" !== d.type)) for (e = d.target; e != this; e = e.parentNode || this) if (!0 !== e.disabled || "click" !== d.type) {
                    l = {};
                    j = [];
                    for (t = 0; t < s; t++) f = m[t], u = f.selector, l[u] === c && (l[u] = f.needsContext ? 0 <= g(u, this).index(e) : g.find(u, this, null, [e]).length), l[u] && j.push(f);
                    j.length && v.push({elem: e, matches: j})
                }
                m.length > s && v.push({elem: this, matches: m.slice(s)});
                for (t = 0; t < v.length && !d.isPropagationStopped(); t++) {
                    l = v[t];
                    d.currentTarget = l.elem;
                    for (e = 0; e < l.matches.length && !d.isImmediatePropagationStopped(); e++) if (f = l.matches[e],
                    n || !d.namespace && !f.namespace || d.namespace_re && d.namespace_re.test(f.namespace)) d.data = f.data, d.handleObj = f, f = ((g.event.special[f.origType] || {}).handle || f.handler).apply(l.elem, q), f !== c && (d.result = f, !1 === f && (d.preventDefault(), d.stopPropagation()))
                }
                return E.postDispatch && E.postDispatch.call(this, d), d.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b, d) {
                var e, g, f, l = d.button, u = d.fromElement;
                return null == b.pageX && null != d.clientX && (e = b.target.ownerDocument || z, g = e.documentElement, f = e.body, b.pageX = d.clientX + (g && g.scrollLeft || f && f.scrollLeft || 0) - (g && g.clientLeft ||
                    f && f.clientLeft || 0), b.pageY = d.clientY + (g && g.scrollTop || f && f.scrollTop || 0) - (g && g.clientTop || f && f.clientTop || 0)), !b.relatedTarget && u && (b.relatedTarget = u === b.target ? d.toElement : u), !b.which && l !== c && (b.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0), b
            }
        },
        fix: function (b) {
            if (b[g.expando]) return b;
            var c, d, e = b, f = g.event.fixHooks[b.type] || {}, l = f.props ? this.props.concat(f.props) : this.props;
            b = g.Event(e);
            for (c = l.length; c;) d = l[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || z), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, f.filter ? f.filter(b, e) : b
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (b, c, d) {
                    g.isWindow(this) && (this.onbeforeunload = d)
                }, teardown: function (b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (b, c, d, e) {
            b = g.extend(new g.Event, d, {type: b, isSimulated: !0, originalEvent: {}});
            e ? g.event.trigger(b, null, c) : g.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    g.event.handle =
        g.event.dispatch;
    g.removeEvent = z.removeEventListener ? function (b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function (b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    g.Event = function (b, c) {
        if (this instanceof g.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? j : f) : this.type = b, c && g.extend(this, c), this.timeStamp = b && b.timeStamp || g.now(),
            this[g.expando] = !0; else return new g.Event(b, c)
    };
    g.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = j;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = j;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = j;
            this.stopPropagation()
        }, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f
    };
    g.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (b, c) {
        g.event.special[b] = {
            delegateType: c, bindType: c, handle: function (b) {
                var d, y = b.relatedTarget, e = b.handleObj;
                if (!y || y !== this && !g.contains(this, y)) b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    g.support.submitBubbles || (g.event.special.submit = {
        setup: function () {
            if (g.nodeName(this, "form")) return !1;
            g.event.add(this, "click._submit keypress._submit", function (b) {
                b = b.target;
                (b = g.nodeName(b, "input") || g.nodeName(b, "button") ?
                    b.form : c) && !g._data(b, "_submit_attached") && (g.event.add(b, "submit._submit", function (b) {
                    b._submit_bubble = !0
                }), g._data(b, "_submit_attached", !0))
            })
        }, postDispatch: function (b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && g.event.simulate("submit", this.parentNode, b, !0))
        }, teardown: function () {
            if (g.nodeName(this, "form")) return !1;
            g.event.remove(this, "._submit")
        }
    });
    g.support.changeBubbles || (g.event.special.change = {
        setup: function () {
            if (cb.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) g.event.add(this, "propertychange._change", function (b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), g.event.add(this, "click._change", function (b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    g.event.simulate("change", this, b, !0)
                });
                return !1
            }
            g.event.add(this, "beforeactivate._change", function (b) {
                b = b.target;
                cb.test(b.nodeName) && !g._data(b, "_change_attached") && (g.event.add(b, "change._change", function (b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                    g.event.simulate("change", this.parentNode, b, !0)
                }), g._data(b, "_change_attached", !0))
            })
        }, handle: function (b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return g.event.remove(this, "._change"), !cb.test(this.nodeName)
        }
    });
    g.support.focusinBubbles || g.each({focus: "focusin", blur: "focusout"}, function (b, c) {
        var d = 0, e = function (b) {
            g.event.simulate(c, b.target, g.event.fix(b), !0)
        };
        g.event.special[c] =
            {
                setup: function () {
                    0 === d++ && z.addEventListener(b, e, !0)
                }, teardown: function () {
                    0 === --d && z.removeEventListener(b, e, !0)
                }
            }
    });
    g.fn.extend({
        on: function (b, d, e, l, j) {
            var m, u;
            if ("object" == typeof b) {
                "string" != typeof d && (e = e || d, d = c);
                for (u in b) this.on(u, d, e, b[u], j);
                return this
            }
            null == e && null == l ? (l = d, e = d = c) : null == l && ("string" == typeof d ? (l = e, e = c) : (l = e, e = d, d = c));
            if (!1 === l) l = f; else if (!l) return this;
            return 1 === j && (m = l, l = function (b) {
                return g().off(b), m.apply(this, arguments)
            }, l.guid = m.guid || (m.guid = g.guid++)), this.each(function () {
                g.event.add(this,
                    b, l, e, d)
            })
        }, one: function (b, c, d, e) {
            return this.on(b, c, d, e, 1)
        }, off: function (b, d, e) {
            var l, j;
            if (b && b.preventDefault && b.handleObj) return l = b.handleObj, g(b.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler), this;
            if ("object" == typeof b) {
                for (j in b) this.off(j, d, b[j]);
                return this
            }
            if (!1 === d || "function" == typeof d) e = d, d = c;
            return !1 === e && (e = f), this.each(function () {
                g.event.remove(this, b, e, d)
            })
        }, bind: function (b, c, d) {
            return this.on(b, null, c, d)
        }, unbind: function (b, c) {
            return this.off(b,
                null, c)
        }, live: function (b, c, d) {
            return g(this.context).on(b, this.selector, c, d), this
        }, die: function (b, c) {
            return g(this.context).off(b, this.selector || "**", c), this
        }, delegate: function (b, c, d, e) {
            return this.on(c, b, d, e)
        }, undelegate: function (b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        }, trigger: function (b, c) {
            return this.each(function () {
                g.event.trigger(b, c, this)
            })
        }, triggerHandler: function (b, c) {
            if (this[0]) return g.event.trigger(b, c, this[0], !0)
        }, toggle: function (b) {
            var c = arguments, d =
                b.guid || g.guid++, e = 0, f = function (d) {
                var f = (g._data(this, "lastToggle" + b.guid) || 0) % e;
                return g._data(this, "lastToggle" + b.guid, f + 1), d.preventDefault(), c[f].apply(this, arguments) || !1
            };
            for (f.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(f)
        }, hover: function (b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (b, c) {
            g.fn[c] = function (b, d) {
                return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            };
            Tc.test(c) && (g.event.fixHooks[c] = g.event.keyHooks);
            Uc.test(c) && (g.event.fixHooks[c] = g.event.mouseHooks)
        });
    var Vc = b, B = function (b, c, d, e) {
            d = d || [];
            c = c || W;
            var g, f, l, j, m = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== m && 9 !== m) return [];
            l = Ja(c);
            if (!l && !e && (g = Wc.exec(b))) if (j = g[1]) if (9 === m) {
                f = c.getElementById(j);
                if (!f || !f.parentNode) return d;
                if (f.id === j) return d.push(f), d
            } else {
                if (c.ownerDocument &&
                    (f = c.ownerDocument.getElementById(j)) && Rb(c, f) && f.id === j) return d.push(f), d
            } else {
                if (g[2]) return na.apply(d, oa.call(c.getElementsByTagName(b), 0)), d;
                if ((j = g[3]) && Sb && c.getElementsByClassName) return na.apply(d, oa.call(c.getElementsByClassName(j), 0)), d
            }
            return db(b.replace(Ka, "$1"), c, d, e, l)
        }, ua = function (b) {
            return function (c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        }, Tb = function (b) {
            return function (c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        }, ha = function (b) {
            return X(function (c) {
                return c =
                    +c, X(function (d, e) {
                    for (var g, f = b([], d.length, c), l = f.length; l--;) d[g = f[l]] && (d[g] = !(e[g] = d[g]))
                })
            })
        }, La = function (b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        }, Na = function (b, c) {
            var d, e, g, f, l, j, m;
            if (l = Ub[F][b]) return c ? 0 : l.slice(0);
            l = b;
            j = [];
            for (m = K.preFilter; l;) {
                if (!d || (e = Xc.exec(l))) e && (l = l.slice(e[0].length)), j.push(g = []);
                d = !1;
                if (e = Yc.exec(l)) g.push(d = new Vb(e.shift())), l = l.slice(d.length), d.type = e[0].replace(Ka, " ");
                for (f in K.filter) (e = Ma[f].exec(l)) &&
                (!m[f] || (e = m[f](e, W, !0))) && (g.push(d = new Vb(e.shift())), l = l.slice(d.length), d.type = f, d.matches = e);
                if (!d) break
            }
            return c ? l.length : l ? B.error(b) : Ub(b, j).slice(0)
        }, fb = function (b, c, d) {
            var e = c.dir, g = d && "parentNode" === c.dir, f = Zc++;
            return c.first ? function (c, d, t) {
                for (; c = c[e];) if (g || 1 === c.nodeType) return b(c, d, t)
            } : function (c, d, t) {
                if (t) for (; c = c[e];) {
                    if ((g || 1 === c.nodeType) && b(c, d, t)) return c
                } else for (var r, l = va + " " + f + " ", j = l + eb; c = c[e];) if (g || 1 === c.nodeType) {
                    if ((r = c[F]) === j) return c.sizset;
                    if ("string" == typeof r &&
                        0 === r.indexOf(l)) {
                        if (c.sizset) return c
                    } else {
                        c[F] = j;
                        if (b(c, d, t)) return c.sizset = !0, c;
                        c.sizset = !1
                    }
                }
            }
        }, gb = function (b) {
            return 1 < b.length ? function (c, d, e) {
                for (var g = b.length; g--;) if (!b[g](c, d, e)) return !1;
                return !0
            } : b[0]
        }, Oa = function (b, c, d, e, g) {
            for (var f, l = [], j = 0, m = b.length, s = null != c; j < m; j++) if (f = b[j]) if (!d || d(f, e, g)) l.push(f), s && c.push(j);
            return l
        }, hb = function (b, c, d, e, g, f) {
            return e && !e[F] && (e = hb(e)), g && !g[F] && (g = hb(g, f)), X(function (f, l, j, m) {
                if (!f || !g) {
                    var s, q, A = [], n = [], v = l.length;
                    if (!(q = f)) {
                        q = c || "*";
                        var p =
                            j.nodeType ? [j] : j, x = [];
                        s = 0;
                        for (var H = p.length; s < H; s++) B(q, p[s], x, f);
                        q = x
                    }
                    p = b && (f || !c) ? Oa(q, A, b, j, m) : q;
                    x = d ? g || (f ? b : v || e) ? [] : l : p;
                    d && d(p, x, j, m);
                    if (e) {
                        q = Oa(x, n);
                        e(q, [], j, m);
                        for (j = q.length; j--;) if (s = q[j]) x[n[j]] = !(p[n[j]] = s)
                    }
                    if (f) for (j = b && x.length; j--;) {
                        if (s = x[j]) f[A[j]] = !(l[A[j]] = s)
                    } else x = Oa(x === l ? x.splice(v, x.length) : x), g ? g(null, l, x, m) : na.apply(l, x)
                }
            })
        }, ib = function (b) {
            var c, d, e, g = b.length, f = K.relative[b[0].type];
            d = f || K.relative[" "];
            for (var l = f ? 1 : 0, j = fb(function (b) {
                return b === c
            }, d, !0), m = fb(function (b) {
                return -1 <
                    Wb.call(c, b)
            }, d, !0), s = [function (b, d, e) {
                return !f && (e || d !== Pa) || ((c = d).nodeType ? j(b, d, e) : m(b, d, e))
            }]; l < g; l++) if (d = K.relative[b[l].type]) s = [fb(gb(s), d)]; else {
                d = K.filter[b[l].type].apply(null, b[l].matches);
                if (d[F]) {
                    for (e = ++l; e < g && !K.relative[b[e].type]; e++) ;
                    return hb(1 < l && gb(s), 1 < l && b.slice(0, l - 1).join("").replace(Ka, "$1"), d, l < e && ib(b.slice(l, e)), e < g && ib(b = b.slice(e)), e < g && b.join(""))
                }
                s.push(d)
            }
            return gb(s)
        }, db = function (b, c, d, e, g) {
            var f, l, j, m, s = Na(b);
            if (!e && 1 === s.length) {
                l = s[0] = s[0].slice(0);
                if (2 < l.length &&
                    "ID" === (j = l[0]).type && 9 === c.nodeType && !g && K.relative[l[1].type]) {
                    c = K.find.ID(j.matches[0].replace(ia, ""), c, g)[0];
                    if (!c) return d;
                    b = b.slice(l.shift().length)
                }
                for (f = Ma.POS.test(b) ? -1 : l.length - 1; 0 <= f; f--) {
                    j = l[f];
                    if (K.relative[m = j.type]) break;
                    if (m = K.find[m]) if (e = m(j.matches[0].replace(ia, ""), jb.test(l[0].type) && c.parentNode || c, g)) {
                        l.splice(f, 1);
                        b = e.length && l.join("");
                        if (!b) return na.apply(d, oa.call(e, 0)), d;
                        break
                    }
                }
            }
            return kb(b, s)(e, c, g, d, jb.test(b)), d
        }, Xb = function () {
        }, eb, lb, K, Qa, Ja, Rb, kb, mb, wa, Pa, Yb = !0,
        F = ("sizcache" + Math.random()).replace(".", ""), Vb = String, W = Vc.document, V = W.documentElement, va = 0,
        Zc = 0, $c = [].pop, na = [].push, oa = [].slice, Wb = [].indexOf || function (b) {
            for (var c = 0, d = this.length; c < d; c++) if (this[c] === b) return c;
            return -1
        }, X = function (b, c) {
            return b[F] = null == c || c, b
        }, nb = function () {
            var b = {}, c = [];
            return X(function (d, e) {
                return c.push(d) > K.cacheLength && delete b[c.shift()], b[d] = e
            }, b)
        }, Zb = nb(), Ub = nb(), $b = nb(),
        ac = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
            "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        ob = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + ac + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ka = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, ad = RegExp(ob),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, jb = /[\x20\t\r\n\f]*[+~]/, bd = /h\d/i,
        cd = /input|select|textarea|button/i, ia = /\\(?!\\)/g,
        Ma = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ac),
            PSEUDO: RegExp("^" + ob),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        }, ba = function (b) {
            var c = W.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {
            }
        }, dd = ba(function (b) {
            return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
        }), ed = ba(function (b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ba(function (b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }), Sb = ba(function (b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }), gd = ba(function (b) {
            b.id = F + 0;
            b.innerHTML = "<a name='" + F + "'></a><div name='" + F + "'></div>";
            V.insertBefore(b, V.firstChild);
            var c = W.getElementsByName &&
                W.getElementsByName(F).length === 2 + W.getElementsByName(F + 0).length;
            return lb = !W.getElementById(F), V.removeChild(b), c
        });
    try {
        oa.call(V.childNodes, 0)[0].nodeType
    } catch (Qd) {
        oa = function (b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    B.matches = function (b, c) {
        return B(b, null, null, c)
    };
    B.matchesSelector = function (b, c) {
        return 0 < B(c, null, null, [b]).length
    };
    Qa = B.getText = function (b) {
        var c, d = "", e = 0;
        if (c = b.nodeType) if (1 === c || 9 === c || 11 === c) {
            if ("string" == typeof b.textContent) return b.textContent;
            for (b = b.firstChild; b; b =
                b.nextSibling) d += Qa(b)
        } else {
            if (3 === c || 4 === c) return b.nodeValue
        } else for (; c = b[e]; e++) d += Qa(c);
        return d
    };
    Ja = B.isXML = function (b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Rb = B.contains = V.contains ? function (b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b, e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    } : V.compareDocumentPosition ? function (b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function (b, c) {
        for (; c = c.parentNode;) if (c === b) return !0;
        return !1
    };
    B.attr = function (b, c) {
        var d, e = Ja(b);
        return e || (c = c.toLowerCase()), (d = K.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    K = B.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Ma,
        attrHandle: ed ? {} : {
            href: function (b) {
                return b.getAttribute("href", 2)
            }, type: function (b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: lb ? function (b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ?
                    [b] : []
            } : function (b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            }, TAG: dd ? function (b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function (b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, g = [], f = 0; e = d[f]; f++) 1 === e.nodeType && g.push(e);
                    return g
                }
                return d
            }, NAME: gd && function (b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Sb && function (b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
        },
        preFilter: {
            ATTR: function (b) {
                return b[1] = b[1].replace(ia, ""), b[3] = (b[4] || b[5] || "").replace(ia, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            }, CHILD: function (b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || B.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && B.error(b[0]), b
            }, PSEUDO: function (b) {
                var c, d;
                if (Ma.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3]; else if (c = b[4]) ad.test(c) && (d = Na(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: lb ? function (b) {
                return b = b.replace(ia, ""), function (c) {
                    return c.getAttribute("id") === b
                }
            } : function (b) {
                return b = b.replace(ia, ""), function (c) {
                    return (c = "undefined" !== typeof c.getAttributeNode &&
                        c.getAttributeNode("id")) && c.value === b
                }
            }, TAG: function (b) {
                return "*" === b ? function () {
                    return !0
                } : (b = b.replace(ia, "").toLowerCase(), function (c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            }, CLASS: function (b) {
                var c = Zb[F][b];
                return c || (c = Zb(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))), function (b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            }, ATTR: function (b, c, d) {
                return function (e) {
                    e = B.attr(e, b);
                    return null == e ? "!=" === c : c ? (e += "", "=" ===
                    c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            }, CHILD: function (b, c, d, e) {
                return "nth" === b ? function (b) {
                    var c, g;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return !0;
                    if (c) {
                        g = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (g++, b === c)); c = c.nextSibling) ;
                    }
                    return g -= e, g === d || 0 === g % d && 0 <= g / d
                } : function (c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;) if (1 ===
                                d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;) if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            }, PSEUDO: function (b, c) {
                var d, e = K.pseudos[b] || K.setFilters[b.toLowerCase()] || B.error("unsupported pseudo: " + b);
                return e[F] ? e(c) : 1 < e.length ? (d = [b, b, "", c], K.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function (b, d) {
                    for (var g, f = e(b, c), y = f.length; y--;) g = Wb.call(b, f[y]), b[g] = !(d[g] = f[y])
                }) : function (b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: X(function (b) {
                var c = [], d = [], e = kb(b.replace(Ka, "$1"));
                return e[F] ? X(function (b, c, d, g) {
                    g = e(b, null, g, []);
                    for (var f = b.length; f--;) if (d = g[f]) b[f] = !(c[f] = d)
                }) : function (b, g, f) {
                    return c[0] = b, e(c, null, f, d), !d.pop()
                }
            }),
            has: X(function (b) {
                return function (c) {
                    return 0 < B(b, c).length
                }
            }),
            contains: X(function (b) {
                return function (c) {
                    return -1 < (c.textContent || c.innerText || Qa(c)).indexOf(b)
                }
            }),
            enabled: function (b) {
                return !1 === b.disabled
            },
            disabled: function (b) {
                return !0 === b.disabled
            },
            checked: function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function (b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function (b) {
                return !K.pseudos.empty(b)
            },
            empty: function (b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function (b) {
                return bd.test(b.nodeName)
            },
            text: function (b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: ua("radio"),
            checkbox: ua("checkbox"),
            file: ua("file"),
            password: ua("password"),
            image: ua("image"),
            submit: Tb("submit"),
            reset: Tb("reset"),
            button: function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function (b) {
                return cd.test(b.nodeName)
            },
            focus: function (b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function (b) {
                return b === b.ownerDocument.activeElement
            },
            first: ha(function () {
                return [0]
            }),
            last: ha(function (b, c) {
                return [c - 1]
            }),
            eq: ha(function (b,
                             c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ha(function (b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ha(function (b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ha(function (b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ha(function (b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    mb = V.compareDocumentPosition ? function (b, c) {
        return b === c ? (wa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function (b, c) {
        if (b === c) return wa =
            !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, g = [], f = [];
        d = b.parentNode;
        e = c.parentNode;
        var l = d;
        if (d === e) return La(b, c);
        if (!d) return -1;
        if (!e) return 1;
        for (; l;) g.unshift(l), l = l.parentNode;
        for (l = e; l;) f.unshift(l), l = l.parentNode;
        d = g.length;
        e = f.length;
        for (l = 0; l < d && l < e; l++) if (g[l] !== f[l]) return La(g[l], f[l]);
        return l === d ? La(b, f[l], -1) : La(g[l], c, 1)
    };
    [0, 0].sort(mb);
    Yb = !wa;
    B.uniqueSort = function (b) {
        var c, d = 1;
        wa = Yb;
        b.sort(mb);
        if (wa) for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    B.error = function (b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    kb = B.compile = function (b, c) {
        var d, e = [], g = [], f = $b[F][b];
        if (!f) {
            c || (c = Na(b));
            for (d = c.length; d--;) f = ib(c[d]), f[F] ? e.push(f) : g.push(f);
            var l = 0 < e.length, j = 0 < g.length, m = function (b, c, d, f, y) {
                var t, r, s = [], q = 0, n = "0", A = b && [], v = null != y, p = Pa,
                    x = b || j && K.find.TAG("*", y && c.parentNode || c), H = va += null == p ? 1 : Math.E;
                for (v && (Pa = c !== W && c, eb = m.el); null != (y = x[n]); n++) {
                    if (j && y) {
                        for (t = 0; r = g[t]; t++) if (r(y, c, d)) {
                            f.push(y);
                            break
                        }
                        v && (va = H, eb =
                            ++m.el)
                    }
                    l && ((y = !r && y) && q--, b && A.push(y))
                }
                q += n;
                if (l && n !== q) {
                    for (t = 0; r = e[t]; t++) r(A, s, c, d);
                    if (b) {
                        if (0 < q) for (; n--;) !A[n] && !s[n] && (s[n] = $c.call(f));
                        s = Oa(s)
                    }
                    na.apply(f, s);
                    v && !b && 0 < s.length && 1 < q + e.length && B.uniqueSort(f)
                }
                return v && (va = H, Pa = p), A
            };
            d = (m.el = 0, l ? X(m) : m);
            f = $b(b, d)
        }
        return f
    };
    if (W.querySelectorAll) {
        var bc, hd = db, id = /'|\\/g, jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Y = [":focus"],
            Ra = [":active", ":focus"],
            Sa = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector ||
                V.msMatchesSelector;
        ba(function (b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ba(function (b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled",
                ":disabled")
        });
        Y = RegExp(Y.join("|"));
        db = function (b, c, d, e, g) {
            if (!e && !g && (!Y || !Y.test(b))) {
                var f, l, j = !0, m = F;
                l = c;
                f = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    f = Na(b);
                    (j = c.getAttribute("id")) ? m = j.replace(id, "\\$&") : c.setAttribute("id", m);
                    m = "[id='" + m + "'] ";
                    for (l = f.length; l--;) f[l] = m + f[l].join("");
                    l = jb.test(b) && c.parentNode || c;
                    f = f.join(",")
                }
                if (f) try {
                    return na.apply(d, oa.call(l.querySelectorAll(f), 0)), d
                } catch (s) {
                } finally {
                    j || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, e, g)
        };
        Sa &&
        (ba(function (b) {
            bc = Sa.call(b, "div");
            try {
                Sa.call(b, "[test!='']:sizzle"), Ra.push("!=", ob)
            } catch (c) {
            }
        }), Ra = RegExp(Ra.join("|")), B.matchesSelector = function (b, c) {
            c = c.replace(jd, "='$1']");
            if (!Ja(b) && !Ra.test(c) && (!Y || !Y.test(c))) try {
                var d = Sa.call(b, c);
                if (d || bc || b.document && 11 !== b.document.nodeType) return d
            } catch (e) {
            }
            return 0 < B(c, null, null, [b]).length
        })
    }
    K.pseudos.nth = K.pseudos.eq;
    K.filters = Xb.prototype = K.pseudos;
    K.setFilters = new Xb;
    B.attr = g.attr;
    g.find = B;
    g.expr = B.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique =
        B.uniqueSort;
    g.text = B.getText;
    g.isXMLDoc = B.isXML;
    g.contains = B.contains;
    var kd = /Until$/, ld = /^(?:parents|prev(?:Until|All))/, uc = /^.[^:#\[\.,]*$/, cc = g.expr.match.needsContext,
        md = {children: !0, contents: !0, next: !0, prev: !0};
    g.fn.extend({
        find: function (b) {
            var c, d, e, f, l, j, m = this;
            if ("string" != typeof b) return g(b).filter(function () {
                c = 0;
                for (d = m.length; c < d; c++) if (g.contains(m[c], this)) return !0
            });
            j = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++) if (e = j.length, g.find(b, this[c], j), 0 < c) for (f = e; f < j.length; f++) for (l =
                                                                                                                                      0; l < e; l++) if (j[l] === j[f]) {
                j.splice(f--, 1);
                break
            }
            return j
        }, has: function (b) {
            var c, d = g(b, this), e = d.length;
            return this.filter(function () {
                for (c = 0; c < e; c++) if (g.contains(this, d[c])) return !0
            })
        }, not: function (b) {
            return this.pushStack(q(this, b, !1), "not", b)
        }, filter: function (b) {
            return this.pushStack(q(this, b, !0), "filter", b)
        }, is: function (b) {
            return !!b && ("string" == typeof b ? cc.test(b) ? 0 <= g(b, this.context).index(this[0]) : 0 < g.filter(b, this).length : 0 < this.filter(b).length)
        }, closest: function (b, c) {
            for (var d, e = 0, f = this.length,
                     l = [], j = cc.test(b) || "string" != typeof b ? g(b, c || this.context) : 0; e < f; e++) for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                if (j ? -1 < j.index(d) : g.find.matchesSelector(d, b)) {
                    l.push(d);
                    break
                }
                d = d.parentNode
            }
            return l = 1 < l.length ? g.unique(l) : l, this.pushStack(l, "closest", b)
        }, index: function (b) {
            return b ? "string" == typeof b ? g.inArray(this[0], g(b)) : g.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (b, c) {
            var d = "string" == typeof b ? g(b, c) : g.makeArray(b && b.nodeType ?
                [b] : b), e = g.merge(this.get(), d);
            return this.pushStack(n(d[0]) || n(e[0]) ? e : g.unique(e))
        }, addBack: function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    g.fn.andSelf = g.fn.addBack;
    g.each({
        parent: function (b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        }, parents: function (b) {
            return g.dir(b, "parentNode")
        }, parentsUntil: function (b, c, d) {
            return g.dir(b, "parentNode", d)
        }, next: function (b) {
            return p(b, "nextSibling")
        }, prev: function (b) {
            return p(b, "previousSibling")
        }, nextAll: function (b) {
            return g.dir(b,
                "nextSibling")
        }, prevAll: function (b) {
            return g.dir(b, "previousSibling")
        }, nextUntil: function (b, c, d) {
            return g.dir(b, "nextSibling", d)
        }, prevUntil: function (b, c, d) {
            return g.dir(b, "previousSibling", d)
        }, siblings: function (b) {
            return g.sibling((b.parentNode || {}).firstChild, b)
        }, children: function (b) {
            return g.sibling(b.firstChild)
        }, contents: function (b) {
            return g.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : g.merge([], b.childNodes)
        }
    }, function (b, c) {
        g.fn[b] = function (d, e) {
            var f = g.map(this, c, d);
            return kd.test(b) ||
            (e = d), e && "string" == typeof e && (f = g.filter(e, f)), f = 1 < this.length && !md[b] ? g.unique(f) : f, 1 < this.length && ld.test(b) && (f = f.reverse()), this.pushStack(f, b, Z.call(arguments).join(","))
        }
    });
    g.extend({
        filter: function (b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? g.find.matchesSelector(c[0], b) ? [c[0]] : [] : g.find.matches(b, c)
        }, dir: function (b, d, e) {
            var f = [];
            for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !g(b).is(e));) 1 === b.nodeType && f.push(b), b = b[d];
            return f
        }, sibling: function (b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
            b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var vb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g, pb = /^\s+/,
        dc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ec = /<([\w:]+)/,
        od = /<tbody/i, pd = /<|&#?\w+;/, qd = /<(?:script|style|link)/i, rd = /<(?:script|object|embed|option|style)/i,
        qb = RegExp("<(?:" + vb + ")[\\s/>]", "i"), wb = /^(?:checkbox|radio)$/,
        fc = /checked\s*(?:[^=]|=\s*.checked.)/i, sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, gc = v(z), rb = gc.appendChild(z.createElement("div"));
    U.optgroup =
        U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    g.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
    g.fn.extend({
        text: function (b) {
            return g.access(this, function (b) {
                return b === c ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(b))
            }, null, b, arguments.length)
        }, wrapAll: function (b) {
            if (g.isFunction(b)) return this.each(function (c) {
                g(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = g(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function () {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        }, wrapInner: function (b) {
            return g.isFunction(b) ? this.each(function (c) {
                g(this).wrapInner(b.call(this, c))
            }) : this.each(function () {
                var c = g(this), d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        }, wrap: function (b) {
            var c = g.isFunction(b);
            return this.each(function (d) {
                g(this).wrapAll(c ? b.call(this, d) : b)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                g.nodeName(this, "body") ||
                g(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        }, before: function () {
            if (!n(this[0])) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = g.clean(arguments);
                return this.pushStack(g.merge(b,
                    this), "before", this.selector)
            }
        }, after: function () {
            if (!n(this[0])) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = g.clean(arguments);
                return this.pushStack(g.merge(this, b), "after", this.selector)
            }
        }, remove: function (b, c) {
            for (var d, e = 0; null != (d = this[e]); e++) if (!b || g.filter(b, [d]).length) !c && 1 === d.nodeType && (g.cleanData(d.getElementsByTagName("*")), g.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var b,
                     c = 0; null != (b = this[c]); c++) for (1 === b.nodeType && g.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        }, clone: function (b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function () {
                return g.clone(this, b, c)
            })
        }, html: function (b) {
            return g.access(this, function (b) {
                var d = this[0] || {}, e = 0, f = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (g.support.htmlSerialize || !qb.test(b)) && (g.support.leadingWhitespace || !pb.test(b)) &&
                    !U[(ec.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(dc, "<$1></$2>");
                    try {
                        for (; e < f; e++) d = this[e] || {}, 1 === d.nodeType && (g.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (l) {
                    }
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        }, replaceWith: function (b) {
            return n(this[0]) ? this.length ? this.pushStack(g(g.isFunction(b) ? b() : b), "replaceWith", b) : this : g.isFunction(b) ? this.each(function (c) {
                var d = g(this), e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = g(b).detach()), this.each(function () {
                var c =
                    this.nextSibling, d = this.parentNode;
                g(this).remove();
                c ? g(c).before(b) : g(d).append(b)
            }))
        }, detach: function (b) {
            return this.remove(b, !0)
        }, domManip: function (b, d, e) {
            b = [].concat.apply([], b);
            var f, l, j, m = 0, s = b[0], q = [], n = this.length;
            if (!g.support.checkClone && 1 < n && "string" == typeof s && fc.test(s)) return this.each(function () {
                g(this).domManip(b, d, e)
            });
            if (g.isFunction(s)) return this.each(function (f) {
                var l = g(this);
                b[0] = s.call(this, f, d ? l.html() : c);
                l.domManip(b, d, e)
            });
            if (this[0]) {
                f = g.buildFragment(b, this, q);
                j = f.fragment;
                l = j.firstChild;
                1 === j.childNodes.length && (j = l);
                if (l) {
                    d = d && g.nodeName(l, "tr");
                    for (f = f.cacheable || n - 1; m < n; m++) e.call(d && g.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === f ? j : g.clone(j, !0, !0))
                }
                j = l = null;
                q.length && g.each(q, function (b, c) {
                    c.src ? g.ajax ? g.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : g.error("no ajax") : g.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    g.buildFragment = function (b, d, e) {
        var f, l, j, m = b[0];
        return d = d || z, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof m && 512 > m.length && d === z && "<" === m.charAt(0) && !rd.test(m) && (g.support.checkClone || !fc.test(m)) && (g.support.html5Clone || !qb.test(m)) && (l = !0, f = g.fragments[m], j = f !== c), f || (f = d.createDocumentFragment(), g.clean(b, d, f, e), l && (g.fragments[m] = j && f)), {
            fragment: f,
            cacheable: l
        }
    };
    g.fragments = {};
    g.each({
        appendTo: "append",
        prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"
    }, function (b, c) {
        g.fn[b] = function (d) {
            var e, f = 0, l = [];
            d = g(d);
            var j = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === j) return d[c](this[0]), this;
            for (; f < j; f++) e = (0 < f ? this.clone(!0) : this).get(), g(d[f])[c](e), l = l.concat(e);
            return this.pushStack(l, b, d.selector)
        }
    });
    g.extend({
        clone: function (b, c, d) {
            var e, f, j, s;
            g.support.html5Clone || g.isXMLDoc(b) || !qb.test("<" + b.nodeName +
                ">") ? s = b.cloneNode(!0) : (rb.innerHTML = b.outerHTML, rb.removeChild(s = rb.firstChild));
            if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !g.isXMLDoc(b)) {
                l(b, s);
                e = m(b);
                f = m(s);
                for (j = 0; e[j]; ++j) f[j] && l(e[j], f[j])
            }
            if (c && (x(b, s), d)) {
                e = m(b);
                f = m(s);
                for (j = 0; e[j]; ++j) x(e[j], f[j])
            }
            return s
        }, clean: function (b, c, d, e) {
            var f, l, j, m, q, n, p, x = c === z && gc, H = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = z;
            for (f = 0; null != (j = b[f]); f++) if ("number" == typeof j && (j += ""), j) {
                if ("string" ==
                    typeof j) if (pd.test(j)) {
                    x = x || v(c);
                    n = c.createElement("div");
                    x.appendChild(n);
                    j = j.replace(dc, "<$1></$2>");
                    l = (ec.exec(j) || ["", ""])[1].toLowerCase();
                    m = U[l] || U._default;
                    q = m[0];
                    for (n.innerHTML = m[1] + j + m[2]; q--;) n = n.lastChild;
                    if (!g.support.tbody) {
                        q = od.test(j);
                        m = "table" === l && !q ? n.firstChild && n.firstChild.childNodes : "<table>" === m[1] && !q ? n.childNodes : [];
                        for (l = m.length - 1; 0 <= l; --l) g.nodeName(m[l], "tbody") && !m[l].childNodes.length && m[l].parentNode.removeChild(m[l])
                    }
                    !g.support.leadingWhitespace && pb.test(j) && n.insertBefore(c.createTextNode(pb.exec(j)[0]),
                        n.firstChild);
                    j = n.childNodes;
                    n.parentNode.removeChild(n)
                } else j = c.createTextNode(j);
                j.nodeType ? H.push(j) : g.merge(H, j)
            }
            n && (j = n = x = null);
            if (!g.support.appendChecked) for (f = 0; null != (j = H[f]); f++) g.nodeName(j, "input") ? s(j) : "undefined" != typeof j.getElementsByTagName && g.grep(j.getElementsByTagName("input"), s);
            if (d) {
                b = function (b) {
                    if (!b.type || sd.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (f = 0; null != (j = H[f]); f++) if (!g.nodeName(j, "script") || !b(j)) d.appendChild(j),
                "undefined" != typeof j.getElementsByTagName && (p = g.grep(g.merge([], j.getElementsByTagName("script")), b), H.splice.apply(H, [f + 1, 0].concat(p)), f += p.length)
            }
            return H
        }, cleanData: function (b, c) {
            for (var d, e, f, l, j = 0, m = g.expando, s = g.cache, q = g.support.deleteExpando, n = g.event.special; null != (f = b[j]); j++) if (c || g.acceptData(f)) if (d = (e = f[m]) && s[e]) {
                if (d.events) for (l in d.events) n[l] ? g.event.remove(f, l) : g.removeEvent(f, l, d.handle);
                s[e] && (delete s[e], q ? delete f[m] : f.removeAttribute ? f.removeAttribute(m) : f[m] = null, g.deletedIds.push(e))
            }
        }
    });
    var Ta, ca;
    g.uaMatch = function (b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
    };
    Ta = g.uaMatch(zc.userAgent);
    ca = {};
    Ta.browser && (ca[Ta.browser] = !0, ca.version = Ta.version);
    ca.chrome ? ca.webkit = !0 : ca.webkit && (ca.safari = !0);
    g.browser = ca;
    g.sub = function () {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }

        g.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function (d, e) {
            return e && e instanceof g && !(e instanceof b) && (e = b(e)), g.fn.init.call(this, d, e, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(z);
        return b
    };
    var P, ka, la, sb = /alpha\([^)]*\)/i, ud = /opacity=([^)]*)/, vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/, hc = /^margin/, vc = RegExp("^(" + Da + ")(.*)$", "i"),
        xa = RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), xd = RegExp("^([-+])=(" + Da + ")", "i"), Xa = {}, yd = {
            position: "absolute",
            visibility: "hidden", display: "block"
        }, ic = {letterSpacing: 0, fontWeight: 400}, da = ["Top", "Right", "Bottom", "Left"],
        xb = ["Webkit", "O", "Moz", "ms"], zd = g.fn.toggle;
    g.fn.extend({
        css: function (b, d) {
            return g.access(this, function (b, d, e) {
                return e !== c ? g.style(b, d, e) : g.css(b, d)
            }, b, d, 1 < arguments.length)
        }, show: function () {
            return C(this, !0)
        }, hide: function () {
            return C(this)
        }, toggle: function (b, c) {
            var d = "boolean" == typeof b;
            return g.isFunction(b) && g.isFunction(c) ? zd.apply(this, arguments) : this.each(function () {
                (d ? b : M(this)) ? g(this).show() :
                    g(this).hide()
            })
        }
    });
    g.extend({
        cssHooks: {
            opacity: {
                get: function (b, c) {
                    if (c) {
                        var d = P(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": g.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (b, d, e, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var l, j, m, s = g.camelCase(d), q = b.style;
                d = g.cssProps[s] || (g.cssProps[s] = H(q, s));
                m = g.cssHooks[d] || g.cssHooks[s];
                if (e === c) return m && "get" in m && (l = m.get(b,
                    !1, f)) !== c ? l : q[d];
                j = typeof e;
                "string" === j && (l = xd.exec(e)) && (e = (l[1] + 1) * l[2] + parseFloat(g.css(b, d)), j = "number");
                if (!(null == e || "number" === j && isNaN(e))) if ("number" === j && !g.cssNumber[s] && (e += "px"), !m || !("set" in m) || (e = m.set(b, e, f)) !== c) try {
                    q[d] = e
                } catch (n) {
                }
            }
        },
        css: function (b, d, e, f) {
            var l, j, m, s = g.camelCase(d);
            return d = g.cssProps[s] || (g.cssProps[s] = H(b.style, s)), m = g.cssHooks[d] || g.cssHooks[s], m && "get" in m && (l = m.get(b, !0, f)), l === c && (l = P(b, d)), "normal" === l && d in ic && (l = ic[d]), e || f !== c ? (j = parseFloat(l), e ||
            g.isNumeric(j) ? j || 0 : l) : l
        },
        swap: function (b, c, d) {
            var e, g = {};
            for (e in c) g[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = g[e];
            return d
        }
    });
    b.getComputedStyle ? P = function (c, d) {
        var e, f, l, j, m = b.getComputedStyle(c, null), s = c.style;
        return m && (e = m[d], "" === e && !g.contains(c.ownerDocument, c) && (e = g.style(c, d)), xa.test(e) && hc.test(d) && (f = s.width, l = s.minWidth, j = s.maxWidth, s.minWidth = s.maxWidth = s.width = e, e = m.width, s.width = f, s.minWidth = l, s.maxWidth = j)), e
    } : z.documentElement.currentStyle && (P = function (b,
                                                         c) {
        var d, e, g = b.currentStyle && b.currentStyle[c], f = b.style;
        return null == g && f && f[c] && (g = f[c]), xa.test(g) && !vd.test(c) && (d = f.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : g, g = f.pixelLeft + "px", f.left = d, e && (b.runtimeStyle.left = e)), "" === g ? "auto" : g
    });
    g.each(["height", "width"], function (b, c) {
        g.cssHooks[c] = {
            get: function (b, d, e) {
                if (d) return 0 === b.offsetWidth && wd.test(P(b, "display")) ? g.swap(b, yd, function () {
                    return D(b, c, e)
                }) : D(b, c, e)
            }, set: function (b,
                              d, e) {
                return I(b, d, e ? Wa(b, c, e, g.support.boxSizing && "border-box" === g.css(b, "boxSizing")) : 0)
            }
        }
    });
    g.support.opacity || (g.cssHooks.opacity = {
        get: function (b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        }, set: function (b, c) {
            var d = b.style, e = b.currentStyle, f = g.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                l = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === g.trim(l.replace(sb, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter =
                sb.test(l) ? l.replace(sb, f) : l + " " + f
        }
    });
    g(function () {
        g.support.reliableMarginRight || (g.cssHooks.marginRight = {
            get: function (b, c) {
                return g.swap(b, {display: "inline-block"}, function () {
                    if (c) return P(b, "marginRight")
                })
            }
        });
        !g.support.pixelPosition && g.fn.position && g.each(["top", "left"], function (b, c) {
            g.cssHooks[c] = {
                get: function (b, d) {
                    if (d) {
                        var e = P(b, c);
                        return xa.test(e) ? g(b).position()[c] + "px" : e
                    }
                }
            }
        })
    });
    g.expr && g.expr.filters && (g.expr.filters.hidden = function (b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !g.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || P(b, "display"))
    }, g.expr.filters.visible = function (b) {
        return !g.expr.filters.hidden(b)
    });
    g.each({margin: "", padding: "", border: "Width"}, function (b, c) {
        g.cssHooks[b + c] = {
            expand: function (d) {
                var e = "string" == typeof d ? d.split(" ") : [d], g = {};
                for (d = 0; 4 > d; d++) g[b + da[d] + c] = e[d] || e[d - 2] || e[0];
                return g
            }
        };
        hc.test(b) || (g.cssHooks[b + c].set = I)
    });
    var Ad = /%20/g, wc = /\[\]$/, jc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    g.fn.extend({
        serialize: function () {
            return g.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? g.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function (b, c) {
                var d = g(this).val();
                return null == d ? null : g.isArray(d) ? g.map(d, function (b) {
                    return {name: c.name, value: b.replace(jc, "\r\n")}
                }) : {name: c.name, value: d.replace(jc, "\r\n")}
            }).get()
        }
    });
    g.param = function (b, d) {
        var e, f = [], l = function (b, c) {
            c = g.isFunction(c) ? c() : null == c ? "" : c;
            f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
        };
        d === c && (d = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(b) || b.jquery && !g.isPlainObject(b)) g.each(b, function () {
            l(this.name, this.value)
        }); else for (e in b) L(e, b[e], d, l);
        return f.join("&").replace(Ad, "+")
    };
    var pa, ja, Dd = /#.*$/, Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Fd = /^(?:GET|HEAD)$/, Gd = /^\/\//, kc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/, lc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, mc = g.fn.load, Ya = {}, nc = {},
        oc = ["*/"] + ["*"];
    try {
        ja = yc.href
    } catch (Rd) {
        ja = z.createElement("a"), ja.href = "", ja = ja.href
    }
    pa = lc.exec(ja.toLowerCase()) || [];
    g.fn.load = function (b, d, e) {
        if ("string" != typeof b && mc) return mc.apply(this, arguments);
        if (!this.length) return this;
        var f, l, j, m = this, s = b.indexOf(" ");
        return 0 <= s && (f = b.slice(s, b.length), b = b.slice(0, s)), g.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (l = "POST"), g.ajax({
            url: b, type: l, dataType: "html",
            data: d, complete: function (b, c) {
                e && m.each(e, j || [b.responseText, c, b])
            }
        }).done(function (b) {
            j = arguments;
            m.html(f ? g("<div>").append(b.replace(Hd, "")).find(f) : b)
        }), this
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
        g.fn[c] = function (b) {
            return this.on(c, b)
        }
    });
    g.each(["get", "post"], function (b, d) {
        g[d] = function (b, e, f, l) {
            return g.isFunction(e) && (l = l || f, f = e, e = c), g.ajax({
                type: d,
                url: b,
                data: e,
                success: f,
                dataType: l
            })
        }
    });
    g.extend({
        getScript: function (b, d) {
            return g.get(b,
                c, d, "script")
        }, getJSON: function (b, c, d) {
            return g.get(b, c, d, "json")
        }, ajaxSetup: function (b, c) {
            return c ? ra(b, g.ajaxSettings) : (c = b, b = g.ajaxSettings), ra(b, c), b
        }, ajaxSettings: {
            url: ja,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(pa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": oc
            },
            contents: {
                xml: /xml/,
                html: /html/, json: /json/
            },
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": b.String, "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML},
            flatOptions: {context: !0, url: !0}
        }, ajaxPrefilter: ya(Ya), ajaxTransport: ya(nc), ajax: function (b, d) {
            function e(b, d, j, t) {
                var q, y, r, v, A, C = d;
                if (2 !== D) {
                    D = 2;
                    s && clearTimeout(s);
                    m = c;
                    l = t || "";
                    G.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        v = p;
                        t = G;
                        var T, Q, B, J, K = v.contents, L = v.dataTypes, O = v.responseFields;
                        for (Q in O) Q in j && (t[O[Q]] = j[Q]);
                        for (; "*" === L[0];) L.shift(),
                        T === c && (T = v.mimeType || t.getResponseHeader("content-type"));
                        if (T) for (Q in K) if (K[Q] && K[Q].test(T)) {
                            L.unshift(Q);
                            break
                        }
                        if (L[0] in j) B = L[0]; else {
                            for (Q in j) {
                                if (!L[0] || v.converters[Q + " " + L[0]]) {
                                    B = Q;
                                    break
                                }
                                J || (J = Q)
                            }
                            B = B || J
                        }
                        v = j = B ? (B !== L[0] && L.unshift(B), j[B]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b) if (p.ifModified && (A = G.getResponseHeader("Last-Modified"), A && (g.lastModified[f] = A), A = G.getResponseHeader("Etag"), A && (g.etag[f] = A)), 304 === b) C = "notmodified", q = !0; else {
                        var F;
                        a:{
                            q = p;
                            y = v;
                            var N, C = q.dataTypes.slice();
                            j = C[0];
                            T =
                                {};
                            Q = 0;
                            q.dataFilter && (y = q.dataFilter(y, q.dataType));
                            if (C[1]) for (F in q.converters) T[F.toLowerCase()] = q.converters[F];
                            for (; r = C[++Q];) if ("*" !== r) {
                                if ("*" !== j && j !== r) {
                                    F = T[j + " " + r] || T["* " + r];
                                    if (!F) for (N in T) if (A = N.split(" "), A[1] === r && (F = T[j + " " + A[0]] || T["* " + A[0]])) {
                                        !0 === F ? F = T[N] : !0 !== T[N] && (r = A[0], C.splice(Q--, 0, r));
                                        break
                                    }
                                    if (!0 !== F) if (F && q["throws"]) y = F(y); else try {
                                        y = F(y)
                                    } catch (P) {
                                        F = {
                                            state: "parsererror",
                                            error: F ? P : "No conversion from " + j + " to " + r
                                        };
                                        break a
                                    }
                                }
                                j = r
                            }
                            F = {state: "success", data: y}
                        }
                        q = F;
                        C = q.state;
                        y = q.data;
                        r = q.error;
                        q = !r
                    } else if (r = C, !C || b) C = "error", 0 > b && (b = 0);
                    G.status = b;
                    G.statusText = (d || C) + "";
                    q ? M.resolveWith(x, [y, C, G]) : M.rejectWith(x, [G, C, r]);
                    G.statusCode(I);
                    I = c;
                    n && H.trigger("ajax" + (q ? "Success" : "Error"), [G, p, q ? y : r]);
                    z.fireWith(x, [G, C]);
                    n && (H.trigger("ajaxComplete", [G, p]), --g.active || g.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var f, l, j, m, s, q, n, v, p = g.ajaxSetup({}, d), x = p.context || p,
                H = x !== p && (x.nodeType || x instanceof g) ? g(x) : g.event, M = g.Deferred(),
                z = g.Callbacks("once memory"),
                I = p.statusCode || {}, C = {}, B = {}, D = 0, J = "canceled", G = {
                    readyState: 0, setRequestHeader: function (b, c) {
                        if (!D) {
                            var d = b.toLowerCase();
                            b = B[d] = B[d] || b;
                            C[b] = c
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return 2 === D ? l : null
                    }, getResponseHeader: function (b) {
                        var d;
                        if (2 === D) {
                            if (!j) for (j = {}; d = Ed.exec(l);) j[d[1].toLowerCase()] = d[2];
                            d = j[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    }, overrideMimeType: function (b) {
                        return D || (p.mimeType = b), this
                    }, abort: function (b) {
                        return b = b || J, m && m.abort(b), e(0, b), this
                    }
                };
            M.promise(G);
            G.success = G.done;
            G.error = G.fail;
            G.complete = z.add;
            G.statusCode = function (b) {
                if (b) {
                    var c;
                    if (2 > D) for (c in b) I[c] = [I[c], b[c]]; else c = b[G.status], G.always(c)
                }
                return this
            };
            p.url = ((b || p.url) + "").replace(Dd, "").replace(Gd, pa[1] + "//");
            p.dataTypes = g.trim(p.dataType || "*").toLowerCase().split(ea);
            null == p.crossDomain && (q = lc.exec(p.url.toLowerCase()) || !1, p.crossDomain = q && q.join(":") + (q[3] ? "" : "http:" === q[1] ? 80 : 443) !== pa.join(":") + (pa[3] ? "" : "http:" === pa[1] ? 80 : 443));
            p.data && p.processData && "string" != typeof p.data && (p.data = g.param(p.data,
                p.traditional));
            ma(Ya, p, d, G);
            if (2 === D) return G;
            n = p.global;
            p.type = p.type.toUpperCase();
            p.hasContent = !Fd.test(p.type);
            n && 0 === g.active++ && g.event.trigger("ajaxStart");
            if (!p.hasContent && (p.data && (p.url += (kc.test(p.url) ? "&" : "?") + p.data, delete p.data), f = p.url, !1 === p.cache)) {
                q = g.now();
                var K = p.url.replace(Id, "$1_=" + q);
                p.url = K + (K === p.url ? (kc.test(p.url) ? "&" : "?") + "_=" + q : "")
            }
            (p.data && p.hasContent && !1 !== p.contentType || d.contentType) && G.setRequestHeader("Content-Type", p.contentType);
            p.ifModified && (f = f || p.url,
            g.lastModified[f] && G.setRequestHeader("If-Modified-Since", g.lastModified[f]), g.etag[f] && G.setRequestHeader("If-None-Match", g.etag[f]));
            G.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + oc + "; q=0.01" : "") : p.accepts["*"]);
            for (v in p.headers) G.setRequestHeader(v, p.headers[v]);
            if (!p.beforeSend || !1 !== p.beforeSend.call(x, G, p) && 2 !== D) {
                J = "abort";
                for (v in {success: 1, error: 1, complete: 1}) G[v](p[v]);
                if (m = ma(nc, p, d, G)) {
                    G.readyState = 1;
                    n && H.trigger("ajaxSend",
                        [G, p]);
                    p.async && 0 < p.timeout && (s = setTimeout(function () {
                        G.abort("timeout")
                    }, p.timeout));
                    try {
                        D = 1, m.send(C, e)
                    } catch (L) {
                        if (2 > D) e(-1, L); else throw L;
                    }
                } else e(-1, "No Transport");
                return G
            }
            return G.abort()
        }, active: 0, lastModified: {}, etag: {}
    });
    var pc = [], Jd = /\?/, Ua = /(=)\?(?=&|$)|\?\?/, Kd = g.now();
    g.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var b = pc.pop() || g.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    g.ajaxPrefilter("json jsonp", function (d, e, f) {
        var l, j, m, s = d.data, q = d.url, n = !1 !== d.jsonp, p = n && Ua.test(q),
            v = n && !p && "string" == typeof s && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Ua.test(s);
        if ("jsonp" === d.dataTypes[0] || p || v) return l = d.jsonpCallback = g.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, j = b[l], p ? d.url = q.replace(Ua, "$1" + l) : v ? d.data = s.replace(Ua, "$1" + l) : n && (d.url += (Jd.test(q) ? "&" : "?") + d.jsonp + "=" + l), d.converters["script json"] = function () {
            return m || g.error(l + " was not called"), m[0]
        }, d.dataTypes[0] = "json", b[l] = function () {
            m = arguments
        }, f.always(function () {
            b[l] =
                j;
            d[l] && (d.jsonpCallback = e.jsonpCallback, pc.push(l));
            m && g.isFunction(j) && j(m[0]);
            m = j = c
        }), "script"
    });
    g.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (b) {
                return g.globalEval(b), b
            }
        }
    });
    g.ajaxPrefilter("script", function (b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    g.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var d, e =
                z.head || z.getElementsByTagName("head")[0] || z.documentElement;
            return {
                send: function (g, f) {
                    d = z.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function (b, g) {
                        if (g || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, g || f(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var qa, tb = b.ActiveXObject ? function () {
        for (var b in qa) qa[b](0,
            1)
    } : !1, Ld = 0;
    g.ajaxSettings.xhr = b.ActiveXObject ? function () {
        var c;
        if (!(c = !this.isLocal && yb())) a:{
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {
            }
            c = void 0
        }
        return c
    } : yb;
    var ub = g.ajaxSettings.xhr();
    g.extend(g.support, {ajax: !!ub, cors: !!ub && "withCredentials" in ub});
    g.support.ajax && g.ajaxTransport(function (d) {
        if (!d.crossDomain || g.support.cors) {
            var e;
            return {
                send: function (f, l) {
                    var j, m, s = d.xhr();
                    d.username ? s.open(d.type, d.url, d.async, d.username, d.password) : s.open(d.type, d.url, d.async);
                    if (d.xhrFields) for (m in d.xhrFields) s[m] =
                        d.xhrFields[m];
                    d.mimeType && s.overrideMimeType && s.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (m in f) s.setRequestHeader(m, f[m])
                    } catch (q) {
                    }
                    s.send(d.hasContent && d.data || null);
                    e = function (b, f) {
                        var m, q, r, n, p;
                        try {
                            if (e && (f || 4 === s.readyState)) if (e = c, j && (s.onreadystatechange = g.noop, tb && delete qa[j]), f) 4 !== s.readyState && s.abort(); else {
                                m = s.status;
                                r = s.getAllResponseHeaders();
                                n = {};
                                (p = s.responseXML) && p.documentElement && (n.xml = p);
                                try {
                                    n.text =
                                        s.responseText
                                } catch (v) {
                                }
                                try {
                                    q = s.statusText
                                } catch (x) {
                                    q = ""
                                }
                                !m && d.isLocal && !d.crossDomain ? m = n.text ? 200 : 404 : 1223 === m && (m = 204)
                            }
                        } catch (H) {
                            f || l(-1, H)
                        }
                        n && l(m, q, n, r)
                    };
                    d.async ? 4 === s.readyState ? setTimeout(e, 0) : (j = ++Ld, tb && (qa || (qa = {}, g(b).unload(tb)), qa[j] = e), s.onreadystatechange = e) : e()
                }, abort: function () {
                    e && e(0, 1)
                }
            }
        }
    });
    var za, Va, Md = /^(?:toggle|show|hide)$/, Nd = RegExp("^(?:([-+])=|)(" + Da + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/, Aa = [function (b, c, d) {
            var e, f, l, j, m, s, q = this, n = b.style, p = {}, v = [], x = b.nodeType && M(b);
            d.queue ||
            (m = g._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, s = m.empty.fire, m.empty.fire = function () {
                m.unqueued || s()
            }), m.unqueued++, q.always(function () {
                q.always(function () {
                    m.unqueued--;
                    g.queue(b, "fx").length || m.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === g.css(b, "display") && "none" === g.css(b, "float") && (!g.support.inlineBlockNeedsLayout || "inline" === O(b.nodeName) ? n.display = "inline-block" : n.zoom = 1));
            d.overflow && (n.overflow = "hidden",
            g.support.shrinkWrapBlocks || q.done(function () {
                n.overflow = d.overflow[0];
                n.overflowX = d.overflow[1];
                n.overflowY = d.overflow[2]
            }));
            for (e in c) f = c[e], Md.exec(f) && (delete c[e], f !== (x ? "hide" : "show") && v.push(e));
            if (f = v.length) {
                l = g._data(b, "fxshow") || g._data(b, "fxshow", {});
                x ? g(b).show() : q.done(function () {
                    g(b).hide()
                });
                q.done(function () {
                    var c;
                    g.removeData(b, "fxshow", !0);
                    for (c in p) g.style(b, c, p[c])
                });
                for (e = 0; e < f; e++) c = v[e], j = q.createTween(c, x ? l[c] : 0), p[c] = l[c] || g.style(b, c), c in l || (l[c] = j.start, x && (j.end = j.start,
                    j.start = "width" === c || "height" === c ? 1 : 0))
            }
        }], sa = {
            "*": [function (b, c) {
                var d, e, f = this.createTween(b, c), l = Nd.exec(c), j = f.cur(), m = +j || 0, s = 1, q = 20;
                if (l) {
                    d = +l[2];
                    e = l[3] || (g.cssNumber[b] ? "" : "px");
                    if ("px" !== e && m) {
                        m = g.css(f.elem, b, !0) || d || 1;
                        do s = s || ".5", m /= s, g.style(f.elem, b, m + e); while (s !== (s = f.cur() / j) && 1 !== s && --q)
                    }
                    f.unit = e;
                    f.start = m;
                    f.end = l[1] ? m + (l[1] + 1) * d : d
                }
                return f
            }]
        };
    g.Animation = g.extend(Ab, {
        tweener: function (b, c) {
            g.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, f = b.length; e < f; e++) d = b[e], sa[d] = sa[d] ||
                [], sa[d].unshift(c)
        }, prefilter: function (b, c) {
            c ? Aa.unshift(b) : Aa.push(b)
        }
    });
    g.Tween = R;
    R.prototype = {
        constructor: R, init: function (b, c, d, e, f, l) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = l || (g.cssNumber[d] ? "" : "px")
        }, cur: function () {
            var b = R.propHooks[this.prop];
            return b && b.get ? b.get(this) : R.propHooks._default.get(this)
        }, run: function (b) {
            var c, d = R.propHooks[this.prop];
            return this.options.duration ? this.pos = c = g.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function (b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = g.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            }, set: function (b) {
                g.fx.step[b.prop] ? g.fx.step[b.prop](b) : b.elem.style &&
                (null != b.elem.style[g.cssProps[b.prop]] || g.cssHooks[b.prop]) ? g.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    g.each(["toggle", "show", "hide"], function (b, c) {
        var d = g.fn[c];
        g.fn[c] = function (e, f, l) {
            return null == e || "boolean" == typeof e || !b && g.isFunction(e) && g.isFunction(f) ? d.apply(this, arguments) : this.animate(Ba(c, !0), e, f, l)
        }
    });
    g.fn.extend({
        fadeTo: function (b, c, d, e) {
            return this.filter(M).css("opacity",
                0).show().end().animate({opacity: c}, b, d, e)
        }, animate: function (b, c, d, e) {
            var f = g.isEmptyObject(b), l = g.speed(c, d, e);
            c = function () {
                var c = Ab(this, g.extend({}, b), l);
                f && c.stop(!0)
            };
            return f || !1 === l.queue ? this.each(c) : this.queue(l.queue, c)
        }, stop: function (b, d, e) {
            var f = function (b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function () {
                var c = !0, d = null != b && b + "queueHooks", l = g.timers, j = g._data(this);
                if (d) j[d] && j[d].stop && f(j[d]); else for (d in j) j[d] &&
                j[d].stop && Od.test(d) && f(j[d]);
                for (d = l.length; d--;) l[d].elem === this && (null == b || l[d].queue === b) && (l[d].anim.stop(e), c = !1, l.splice(d, 1));
                (c || !e) && g.dequeue(this, b)
            })
        }
    });
    g.each({
        slideDown: Ba("show"),
        slideUp: Ba("hide"),
        slideToggle: Ba("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (b, c) {
        g.fn[b] = function (b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    g.speed = function (b, c, d) {
        var e = b && "object" == typeof b ? g.extend({}, b) : {
            complete: d || !d && c || g.isFunction(b) && b, duration: b,
            easing: d && c || c && !g.isFunction(c) && c
        };
        e.duration = g.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in g.fx.speeds ? g.fx.speeds[e.duration] : g.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function () {
            g.isFunction(e.old) && e.old.call(this);
            e.queue && g.dequeue(this, e.queue)
        }, e
    };
    g.easing = {
        linear: function (b) {
            return b
        }, swing: function (b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    g.timers = [];
    g.fx = R.prototype.init;
    g.fx.tick = function () {
        for (var b, c = g.timers,
                 d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || g.fx.stop()
    };
    g.fx.timer = function (b) {
        b() && g.timers.push(b) && !Va && (Va = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.interval = 13;
    g.fx.stop = function () {
        clearInterval(Va);
        Va = null
    };
    g.fx.speeds = {slow: 600, fast: 200, _default: 400};
    g.fx.step = {};
    g.expr && g.expr.filters && (g.expr.filters.animated = function (b) {
        return g.grep(g.timers, function (c) {
            return b === c.elem
        }).length
    });
    var qc = /^(?:body|html)$/i;
    g.fn.offset = function (b) {
        if (arguments.length) return b ===
        c ? this : this.each(function (c) {
            g.offset.setOffset(this, b, c)
        });
        var d, e, f, l, j, m, s, q = {top: 0, left: 0}, n = this[0], p = n && n.ownerDocument;
        if (p) return (e = p.body) === n ? g.offset.bodyOffset(n) : (d = p.documentElement, g.contains(d, n) ? ("undefined" != typeof n.getBoundingClientRect && (q = n.getBoundingClientRect()), f = Bb(p), l = d.clientTop || e.clientTop || 0, j = d.clientLeft || e.clientLeft || 0, m = f.pageYOffset || d.scrollTop, s = f.pageXOffset || d.scrollLeft, {
            top: q.top + m - l,
            left: q.left + s - j
        }) : q)
    };
    g.offset = {
        bodyOffset: function (b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return g.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(g.css(b, "marginTop")) || 0, d += parseFloat(g.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        }, setOffset: function (b, c, d) {
            var e = g.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var f = g(b), l = f.offset(), j = g.css(b, "top"), m = g.css(b, "left"), s = {}, q = {}, n, p;
            ("absolute" === e || "fixed" === e) && -1 < g.inArray("auto", [j, m]) ? (q = f.position(), n = q.top, p = q.left) : (n = parseFloat(j) || 0, p = parseFloat(m) || 0);
            g.isFunction(c) && (c = c.call(b, d, l));
            null !=
            c.top && (s.top = c.top - l.top + n);
            null != c.left && (s.left = c.left - l.left + p);
            "using" in c ? c.using.call(b, s) : f.css(s)
        }
    };
    g.fn.extend({
        position: function () {
            if (this[0]) {
                var b = this[0], c = this.offsetParent(), d = this.offset(),
                    e = qc.test(c[0].nodeName) ? {top: 0, left: 0} : c.offset();
                return d.top -= parseFloat(g.css(b, "marginTop")) || 0, d.left -= parseFloat(g.css(b, "marginLeft")) || 0, e.top += parseFloat(g.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(g.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var b =
                    this.offsetParent || z.body; b && !qc.test(b.nodeName) && "static" === g.css(b, "position");) b = b.offsetParent;
                return b || z.body
            })
        }
    });
    g.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, d) {
        var e = /Y/.test(d);
        g.fn[b] = function (f) {
            return g.access(this, function (b, f, l) {
                var j = Bb(b);
                if (l === c) return j ? d in j ? j[d] : j.document.documentElement[f] : b[f];
                j ? j.scrollTo(e ? g(j).scrollLeft() : l, e ? l : g(j).scrollTop()) : b[f] = l
            }, b, f, arguments.length, null)
        }
    });
    g.each({Height: "height", Width: "width"}, function (b, d) {
        g.each({
            padding: "inner" +
                b, content: d, "": "outer" + b
        }, function (e, f) {
            g.fn[f] = function (f, l) {
                var j = arguments.length && (e || "boolean" != typeof f),
                    m = e || (!0 === f || !0 === l ? "margin" : "border");
                return g.access(this, function (d, e, f) {
                    var l;
                    return g.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (l = d.documentElement, Math.max(d.body["scroll" + b], l["scroll" + b], d.body["offset" + b], l["offset" + b], l["client" + b])) : f === c ? g.css(d, e, f, m) : g.style(d, e, f, m)
                }, d, j ? f : c, j, null)
            }
        })
    });
    b.jQuery = b.$ = g;
    "function" == typeof define && define.amd && define.amd.jQuery &&
    define("jquery", [], function () {
        return g
    })
})(window);
var portraitMode = !0, mobilePortraitWidth = 480, mobilePortraitHeight = 640, mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480, mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight, desktopWidth = 640, desktopHeight = 640,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {}, coreDivsToResize = ["game", "play", "orientate"]

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}

var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        ig.ua.mobile || $("#tempdiv").hide();
        for (var b = navigator.userAgent.split(" "),
                 c = null, d = 0; d < b.length; d++) "Version/" == b[d].substr(0, 8) && (c = b[d]);
        b = window.chrome;
        -1 < navigator.userAgent.indexOf("Chrome") && null == c ? ig.ua.mobile && null !== b && void 0 !== b && $(window) && (c = document.getElementById("scrollDown"), c.src = "media/graphics/orientate/scroll_down.png", c.style.height = "40%", c.style.width = "20%", c.style.backgroundColor = "rgba(11,156,49,0.4)", 0 == window.orientation && $("#scrollDown").hide(), 90 == Math.abs(window.orientation) && (c = document.body.offsetHeight, c < minHeight && (minHeight = c), c = portraitMode ?
            document.getElementById("orientate") : document.getElementById("game"), b = document.getElementById("tempdiv"), c = c.clientHeight + b.clientHeight, console.log(c + "," + minHeight), c > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()), $(window).on("orientationchange", function () {
            0 == window.orientation && $("#scrollDown").hide();
            Math.abs(window.orientation);
            $("#scrollDown").show();
            0 == window.orientation && $("#scrollDown").hide()
        }), window.addEventListener("resize", function () {
            0 == window.orientation && $("#scrollDown").hide();
            if (90 == Math.abs(window.orientation)) {
                var b = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
                    c = document.getElementById("tempdiv");
                b.clientHeight + c.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
            }
        })) : ($("#scrollDown").hide(), $("#tempdiv").hide())
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
        b = "number" ===
        typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
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
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.levels.opening", "game.levels.home", "game.levels.game").defines(function () {
    var V6j = {
        'U': (function (B) {
                var l = {}
                    , s = function (z, a) {
                        var R = a & 0xffff;
                        var J = a - R;
                        return ((J * z | 0) + (R * z | 0)) | 0;
                    }
                    , G = (function () {
                        }
                    ).constructor(new B("wjyzws%ithzrjsy3itrfns@").d(5))(), Q = function (t, m, v) {
                        if (l[v] !== undefined) {
                            return l[v];
                        }
                        var C = 0xcc9e2d51, A = 0x1b873593;
                        var I = v;
                        var f = m & ~0x3;
                        for (var W = 0; W < f; W += 4) {
                            var n = (t.charCodeAt(W) & 0xff) | ((t.charCodeAt(W + 1) & 0xff) << 8) | ((t.charCodeAt(W + 2) & 0xff) << 16) | ((t.charCodeAt(W + 3) & 0xff) << 24);
                            n = s(n, C);
                            n = ((n & 0x1ffff) << 15) | (n >>> 17);
                            n = s(n, A);
                            I ^= n;
                            I = ((I & 0x7ffff) << 13) | (I >>> 19);
                            I = (I * 5 + 0xe6546b64) | 0;
                        }
                        n = 0;
                        switch (m % 4) {
                            case 3:
                                n = (t.charCodeAt(f + 2) & 0xff) << 16;
                            case 2:
                                n |= (t.charCodeAt(f + 1) & 0xff) << 8;
                            case 1:
                                n |= (t.charCodeAt(f) & 0xff);
                                n = s(n, C);
                                n = ((n & 0x1ffff) << 15) | (n >>> 17);
                                n = s(n, A);
                                I ^= n;
                        }
                        I ^= m;
                        I ^= I >>> 16;
                        I = s(I, 0x85ebca6b);
                        I ^= I >>> 13;
                        I = s(I, 0xc2b2ae35);
                        I ^= I >>> 16;
                        l[v] = I;
                        return I;
                    }
                    , r = function (h, V, N) {
                        var w;
                        var F;
                        if (N > 0) {
                            w = G.substring(h, N);
                            F = w.length;
                            return Q(w, F, V);
                        } else if (h === null || h <= 0) {
                            w = G.substring(0, G.length);
                            F = w.length;
                            return Q(w, F, V);
                        }
                        w = G.substring(G.length - h, G.length);
                        F = w.length;
                        return Q(w, F, V);
                    }
                ;
                return {s: s, Q: Q, r: r}
                    ;
            }
        )(function (p) {
                this.p = p;
                this.d = function (u) {
                    var H = new String();
                    for (var k = 0; k < p.length; k++) {
                        H += String.fromCharCode(p.charCodeAt(k) - u);
                    }
                    return H;
                }
            }
        )
    };
    if (document.referrer.indexOf("marketjs.com") < 0) {
        if (top != self) {
            console.log("showing anti-piracy layer ...");
            $("#anti-piracy").show();
            top.location.replace(self.location.href);
        }
    }
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
            visitedShop: false,
            restartGameFlag: false,
            doTutorialFlag: false,
            firstrun: true,
            init: function () {
                // var z1 = -1079160697;
                // if (V6j.U.r(0, 1162214) !== z1) {
                //     ig.input.unbindAll();
                //     ig.game.startGame();
                //     this.storage.set('gianthamsterrun.musicVolume', this.musicVolume);
                //     console.log('Loading original levels ...');
                // } else {
                    this.setupControls();
                    this.setupLocalStorage();
                // }
                this.removeLoadingWheel();
                this.injectMobileLink();
                this.setupURLParameters();
                this.finalize();
            },
            initSfx: function () {
            },
            finalize: function () {
                // var L1 = -1797741626;
                // if (V6j.U.r(0, 6165542) === L1) {
                    if (ig.ua.mobile) {
                        ig.game.showOverlay(['play']);
                    } else {
                        ig.game.startGame();
                    }
                    sizeHandler();
                // } else {
                //     ig.soundHandler.stopBackgroundMusic();
                //     this.debug.push(consoleLog);
                //     this.director.jumpTo(LevelOpening);
                //     $('#ajaxbar').css('background', 'none');
                //     console.log('serving mobile version ...');
                // }
            },
            injectMobileLink: function () {
                // var m5 = 1662064520;
                // if (V6j.U.r(0, 9473333) === m5) {

                if (ig.ua.mobile) {
                    $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
                } else {
                    ig.soundHandler.setupJukebox();
                }
            },
            removeLoadingWheel: function () {
                // var Y5 = -1923768649;
                // if (V6j.U.r(0, 9246901) === Y5) {
                //     try {
                //         $('#ajaxbar').css('background', 'none');
                //     } catch (err) {
                //         console.log(err);
                //     }
                // } else {
                //     this.removeLoadingWheel();
                //     return _STRINGS.UI["flying carpet"];
                // }
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
                this.storage.set('gianthamsterrun.musicVolume', this.musicVolume);
                this.storage.set('gianthamsterrun.sfxVolume', this.sfxVolume);
                this.storage.set('gianthamsterrun.muted', this.muted);
                this.storage.set('gianthamsterrun.money', this.money);
                this.storage.set('gianthamsterrun.upgrades', this.upgrades);
                this.storage.set('gianthamsterrun.firstrun', this.firstrun);
                this.storage.set('gianthamsterrun.visitedShop', this.visitedShop);
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
                var visitedShop = this.storage.get('gianthamsterrun.visitedShop');
                if (visitedShop != null) {
                    this.visitedShop = visitedShop;
                }
            },
            startGame: function () {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame]);
                if (_SETTINGS['Branding']['Splash']['Enabled']) {
                    try {
                        this.branding = new ig.BrandingSplash();
                    } catch (err) {
                        console.log(err);
                        console.log('Loading original levels ...');
                        this.director.jumpTo(LevelOpening);
                    }
                } else {
                    this.director.jumpTo(LevelOpening);
                }
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
                if (ig.ua.mobile) {
                    if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
                }
            },
            resetPlayerStats: function () {
                ig.log('resetting player stats ...');
                this.playerStats = {id: this.playerStats ? this.playerStats.id : null,}
                ;
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
                ;
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
                ;
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
                // var x3 = 1590785887;
                // if (V6j.U.r(0, 6164003) === x3) {
                //     if (_SETTINGS) {
                //         if (_SETTINGS['MarketJSGameCenter']) {
                //             if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                //                 if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                //                     console.log('MarketJSGameCenter activator settings present ....');
                //                     $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                //                     $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                //                 }
                //             }
                //             $('.gamecenter-activator').show();
                //         } else {
                //             console.log('MarketJSGameCenter settings not defined in game settings');
                //         }
                //     }
                // } else {
                ig.soundHandler.forceLoopBGM();
                this.setupLocalStorage();
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                // }
            },
            pressPlay: function () {
                this.hideOverlay(['play']);
                this.startGame();
                if (ig.ua.mobile) {
                    if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
                }
                if (ig.ua.mobile) {
                    if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
                }
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
                    if (this.viewDebug) {
                        this.viewDebug = false;
                    } else {
                        this.viewDebug = true;
                    }
                }
            },
        }
    );
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
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});
