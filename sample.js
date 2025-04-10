/* eslint-disable */
var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Loading: {
        Loading: "LOADING"
    },
    Tutorial: [["Hi! My name is Tiny.", "Welcome to Giant Hamster Run!"], ["Collect cookies to turn into", "an invincible ball!"], ["Flick upwards to jump", "over the obstacle."], ["Press the UP ARROW to", "jump over the obstacle."], ["Tap or Flick to the right", "to pick up those coins!"], ["Press the RIGHT ARROW", "to pick up those coins!"], ["We need to go to the left now.", "Tap or Flick to the left."], ["We need to go to the left now.", "Press the LEFT ARROW."], ["Almost there! Tap or Flick", "to the left again."], ["Almost there! Press the", "LEFT ARROW again."], ["Flick downwards to slide", "and grab that cookie!"], ["Press the DOWN ARROW to slide", "and grab that cookie!"], ["It's all up to you now.", "Good luck and have fun!"]],
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
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !0
    }
};
(function (b, c) {
        function d(b, t, r) {
            if (r === c && 1 === b.nodeType)
                if (r = "data-" + t.replace(rc, "-$1").toLowerCase(),
                    r = b.getAttribute(r),
                "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sc.test(r) ? g.parseJSON(r) : r
                    } catch (d) {
                    }
                    g.data(b, t, r)
                } else
                    r = c;
            return r
        }

        function e(b) {
            for (var c in b)
                if (!("data" === c && g.isEmptyObject(b[c])) && "toJSON" !== c)
                    return !1;
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

        function p(b, c) {
            do
                b = b[c];
            while (b && 1 !== b.nodeType);
            return b
        }

        function q(b, c, r) {
            c = c || 0;
            if (g.isFunction(c))
                return g.grep(b, function (b, y) {
                    return !!c.call(b, y, b) === r
                });
            if (c.nodeType)
                return g.grep(b, function (b) {
                    return b === c === r
                });
            if ("string" == typeof c) {
                var d = g.grep(b, function (b) {
                    return 1 === b.nodeType
                });
                if (uc.test(c))
                    return g.filter(c, d, !r);
                c = g.filter(c, d)
            }
            return g.grep(b, function (b) {
                return 0 <= g.inArray(b, c) === r
            })
        }

        function v(b) {
            var c = vb.split("|");
            b = b.createDocumentFragment();
            if (b.createElement)
                for (; c.length;)
                    b.createElement(c.pop());
            return b
        }

        function x(b, c) {
            if (1 === c.nodeType && g.hasData(b)) {
                var r, d, e;
                d = g._data(b);
                var f = g._data(c, d)
                    , u = d.events;
                if (u)
                    for (r in delete f.handle,
                        f.events = {},
                        u) {
                        d = 0;
                        for (e = u[r].length; d < e; d++)
                            g.event.add(c, r, u[r][d])
                    }
                f.data && (f.data = g.extend({}, f.data))
            }
        }

        function l(b, c) {
            var r;
            1 === c.nodeType && (c.clearAttributes && c.clearAttributes(),
            c.mergeAttributes && c.mergeAttributes(b),
                r = c.nodeName.toLowerCase(),
                "object" === r ? (c.parentNode && (c.outerHTML = b.outerHTML),
                g.support.html5Clone && b.innerHTML && !g.trim(c.innerHTML) && (c.innerHTML = b.innerHTML)) : "input" === r && wb.test(b.type) ? (c.defaultChecked = c.checked = b.checked,
                c.value !== b.value && (c.value = b.value)) : "option" === r ? c.selected = b.defaultSelected : "input" === r || "textarea" === r ? c.defaultValue = b.defaultValue : "script" === r && c.text !== b.text && (c.text = b.text),
                c.removeAttribute(g.expando))
        }

        function m(b) {
            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
        }

        function s(b) {
            wb.test(b.type) && (b.defaultChecked = b.checked)
        }

        function H(b, c) {
            if (c in b)
                return c;
            for (var r = c.charAt(0).toUpperCase() + c.slice(1), d = c, g = xb.length; g--;)
                if (c = xb[g] + r,
                c in b)
                    return c;
            return d
        }

        function M(b, c) {
            return b = c || b,
            "none" === g.css(b, "display") || !g.contains(b.ownerDocument, b)
        }

        function C(b, c) {
            for (var r, d, e = [], f = 0, u = b.length; f < u; f++)
                r = b[f],
                r.style && (e[f] = g._data(r, "olddisplay"),
                    c ? (!e[f] && "none" === r.style.display && (r.style.display = ""),
                    "" === r.style.display && M(r) && (e[f] = g._data(r, "olddisplay", O(r.nodeName)))) : (d = P(r, "display"),
                    !e[f] && "none" !== d && g._data(r, "olddisplay", d)));
            for (f = 0; f < u; f++)
                if (r = b[f],
                r.style && (!c || "none" === r.style.display || "" === r.style.display))
                    r.style.display = c ? e[f] || "" : "none";
            return b
        }

        function I(b, c, r) {
            return (b = vc.exec(c)) ? Math.max(0, b[1] - (r || 0)) + (b[2] || "px") : c
        }

        function Wa(b, c, r, d) {
            c = r === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
            for (var e = 0; 4 > c; c += 2)
                "margin" === r && (e += g.css(b, r + da[c], !0)),
                    d ? ("content" === r && (e -= parseFloat(P(b, "padding" + da[c])) || 0),
                    "margin" !== r && (e -= parseFloat(P(b, "border" + da[c] + "Width")) || 0)) : (e += parseFloat(P(b, "padding" + da[c])) || 0,
                    "padding" !== r && (e += parseFloat(P(b, "border" + da[c] + "Width")) || 0));
            return e
        }

        function D(b, c, r) {
            var d = "width" === c ? b.offsetWidth : b.offsetHeight
                , e = !0
                , f = g.support.boxSizing && "border-box" === g.css(b, "boxSizing");
            if (0 >= d || null == d) {
                d = P(b, c);
                if (0 > d || null == d)
                    d = b.style[c];
                if (xa.test(d))
                    return d;
                e = f && (g.support.boxSizingReliable || d === b.style[c]);
                d = parseFloat(d) || 0
            }
            return d + Wa(b, c, r || (f ? "border" : "content"), e) + "px"
        }

        function O(b) {
            if (Xa[b])
                return Xa[b];
            var c = g("<" + b + ">").appendTo(z.body)
                , r = c.css("display");
            c.remove();
            if ("none" === r || "" === r) {
                ka = z.body.appendChild(ka || g.extend(z.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
                if (!la || !ka.createElement)
                    la = (ka.contentWindow || ka.contentDocument).document,
                        la.write("<!doctype html><html><body>"),
                        la.close();
                c = la.body.appendChild(la.createElement(b));
                r = P(c, "display");
                z.body.removeChild(ka)
            }
            return Xa[b] = r,
                r
        }

        function L(b, c, r, d) {
            var e;
            if (g.isArray(c))
                g.each(c, function (c, t) {
                    r || wc.test(b) ? d(b, t) : L(b + "[" + ("object" == typeof t ? c : "") + "]", t, r, d)
                });
            else if (!r && "object" === g.type(c))
                for (e in c)
                    L(b + "[" + e + "]", c[e], r, d);
            else
                d(b, c)
        }

        function ya(b) {
            return function (c, r) {
                "string" != typeof c && (r = c,
                    c = "*");
                var d, e, f = c.toLowerCase().split(ea), u = 0, l = f.length;
                if (g.isFunction(r))
                    for (; u < l; u++)
                        d = f[u],
                        (e = /^\+/.test(d)) && (d = d.substr(1) || "*"),
                            d = b[d] = b[d] || [],
                            d[e ? "unshift" : "push"](r)
            }
        }

        function ma(b, t, r, d, g, e) {
            g = g || t.dataTypes[0];
            e = e || {};
            e[g] = !0;
            var u;
            g = b[g];
            for (var f = 0, l = g ? g.length : 0, j = b === Ya; f < l && (j || !u); f++)
                u = g[f](t, r, d),
                "string" == typeof u && (!j || e[u] ? u = c : (t.dataTypes.unshift(u),
                    u = ma(b, t, r, d, u, e)));
            return (j || !u) && !e["*"] && (u = ma(b, t, r, d, "*", e)),
                u
        }

        function ra(b, t) {
            var r, d, e = g.ajaxSettings.flatOptions || {};
            for (r in t)
                t[r] !== c && ((e[r] ? b : d || (d = {}))[r] = t[r]);
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
            }, 0),
                za = g.now()
        }

        function Ab(b, c, r) {
            var d, e = 0, f = Aa.length, u = g.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                for (var c = za || zb(), c = Math.max(0, j.startTime + j.duration - c), t = 1 - (c / j.duration || 0), r = 0, d = j.tweens.length; r < d; r++)
                    j.tweens[r].run(t);
                return u.notifyWith(b, [j, t, c]),
                    1 > t && d ? c : (u.resolveWith(b, [j]),
                        !1)
            }, j = u.promise({
                elem: b,
                props: g.extend({}, c),
                opts: g.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: c,
                originalOptions: r,
                startTime: za || zb(),
                duration: r.duration,
                tweens: [],
                createTween: function (c, t) {
                    var r = g.Tween(b, j.opts, c, t, j.opts.specialEasing[c] || j.opts.easing);
                    return j.tweens.push(r),
                        r
                },
                stop: function (c) {
                    for (var t = 0, r = c ? j.tweens.length : 0; t < r; t++)
                        j.tweens[t].run(1);
                    return c ? u.resolveWith(b, [j, c]) : u.rejectWith(b, [j, c]),
                        this
                }
            });
            c = j.props;
            r = j.opts.specialEasing;
            var m, s, q, n;
            for (d in c)
                if (m = g.camelCase(d),
                    s = r[m],
                    q = c[d],
                g.isArray(q) && (s = q[1],
                    q = c[d] = q[0]),
                d !== m && (c[m] = q,
                    delete c[d]),
                (n = g.cssHooks[m]) && "expand" in n)
                    for (d in q = n.expand(q),
                        delete c[m],
                        q)
                        d in c || (c[d] = q[d],
                            r[d] = s);
                else
                    r[m] = s;
            for (; e < f; e++)
                if (d = Aa[e].call(j, b, c, j.opts))
                    return d;
            var v = j;
            g.each(c, function (b, y) {
                for (var c = (sa[b] || []).concat(sa["*"]), t = 0, r = c.length; t < r && !c[t].call(v, b, y); t++)

            });
            return g.isFunction(j.opts.start) && j.opts.start.call(b, j),
                g.fx.timer(g.extend(l, {
                    anim: j,
                    queue: j.opts.queue,
                    elem: b
                })),
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function R(b, c, r, d, g) {
            return new R.prototype.init(b, c, r, d, g)
        }

        function Ba(b, c) {
            var r, d = {
                height: b
            }, g = 0;
            for (c = c ? 1 : 0; 4 > g; g += 2 - c)
                r = da[g],
                    d["margin" + r] = d["padding" + r] = b;
            return c && (d.opacity = d.width = b),
                d
        }

        function Bb(b) {
            return g.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
        }

        var Cb, Ca, z = b.document, yc = b.location, zc = b.navigator, Ac = b.jQuery, Bc = b.$,
            Db = Array.prototype.push, Z = Array.prototype.slice, Eb = Array.prototype.indexOf,
            Cc = Object.prototype.toString, Za = Object.prototype.hasOwnProperty, $a = String.prototype.trim,
            g = function (b, c) {
                return new g.fn.init(b, c, Cb)
            }, Da = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Dc = /\S/, ea = /\s+/,
            Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            Fb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Gc = /^[\],:{}\s]*$/, Hc = /(?:^|:|,)(?:\s*\[)+/g,
            Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, Kc = /^-ms-/,
            Lc = /-([\da-z])/gi, Mc = function (b, c) {
                return (c + "").toUpperCase()
            }, Ea = function () {
                z.addEventListener ? (z.removeEventListener("DOMContentLoaded", Ea, !1),
                    g.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", Ea),
                    g.ready())
            }, Gb = {};
        g.fn = g.prototype = {
            constructor: g,
            init: function (b, t, r) {
                var d, e;
                if (!b)
                    return this;
                if (b.nodeType)
                    return this.context = this[0] = b,
                        this.length = 1,
                        this;
                if ("string" == typeof b) {
                    "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                    if (d && (d[1] || !t)) {
                        if (d[1])
                            return t = t instanceof g ? t[0] : t,
                                e = t && t.nodeType ? t.ownerDocument || t : z,
                                b = g.parseHTML(d[1], e, !0),
                            Fb.test(d[1]) && g.isPlainObject(t) && this.attr.call(b, t, !0),
                                g.merge(this, b);
                        if ((t = z.getElementById(d[2])) && t.parentNode) {
                            if (t.id !== d[2])
                                return r.find(b);
                            this.length = 1;
                            this[0] = t
                        }
                        return this.context = z,
                            this.selector = b,
                            this
                    }
                    return !t || t.jquery ? (t || r).find(b) : this.constructor(t).find(b)
                }
                return g.isFunction(b) ? r.ready(b) : (b.selector !== c && (this.selector = b.selector,
                    this.context = b.context),
                    g.makeArray(b, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return Z.call(this)
            },
            get: function (b) {
                return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
            },
            pushStack: function (b, c, r) {
                b = g.merge(this.constructor(), b);
                return b.prevObject = this,
                    b.context = this.context,
                    "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + r : c && (b.selector = this.selector + "." + c + "(" + r + ")"),
                    b
            },
            each: function (b, c) {
                return g.each(this, b, c)
            },
            ready: function (b) {
                return g.ready.promise().done(b),
                    this
            },
            eq: function (b) {
                return b = +b,
                    -1 === b ? this.slice(b) : this.slice(b, b + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            slice: function () {
                return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
            },
            map: function (b) {
                return this.pushStack(g.map(this, function (c, r) {
                    return b.call(c, r, c)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: Db,
            sort: [].sort,
            splice: [].splice
        };
        g.fn.init.prototype = g.fn;
        g.extend = g.fn.extend = function () {
            var b, t, r, d, e, f, u = arguments[0] || {}, l = 1, j = arguments.length, m = !1;
            "boolean" == typeof u && (m = u,
                u = arguments[1] || {},
                l = 2);
            "object" != typeof u && !g.isFunction(u) && (u = {});
            for (j === l && (u = this,
                --l); l < j; l++)
                if (null != (b = arguments[l]))
                    for (t in b)
                        r = u[t],
                            d = b[t],
                        u !== d && (m && d && (g.isPlainObject(d) || (e = g.isArray(d))) ? (e ? (e = !1,
                            f = r && g.isArray(r) ? r : []) : f = r && g.isPlainObject(r) ? r : {},
                            u[t] = g.extend(m, f, d)) : d !== c && (u[t] = d));
            return u
        }

        g.extend({
            noConflict: function (y) {
                return b.$ === g && (b.$ = Bc),
                y && b.jQuery === g && (b.jQuery = Ac),
                    g
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (b) {
                b ? g.readyWait++ : g.ready(!0)
            },
            ready: function (b) {
                if (!(!0 === b ? --g.readyWait : g.isReady)) {
                    if (!z.body)
                        return setTimeout(g.ready, 1);
                    g.isReady = !0;
                    !0 !== b && 0 < --g.readyWait || (Ca.resolveWith(z, [g]),
                    g.fn.trigger && g(z).trigger("ready").off("ready"))
                }
            },
            isFunction: function (b) {
                return "function" === g.type(b)
            },
            isArray: Array.isArray || function (b) {
                return "array" === g.type(b)
            }
            ,
            isWindow: function (b) {
                return null != b && b == b.window
            },
            isNumeric: function (b) {
                return !isNaN(parseFloat(b)) && isFinite(b)
            },
            type: function (b) {
                return null == b ? String(b) : Gb[Cc.call(b)] || "object"
            },
            isPlainObject: function (b) {
                if (!b || "object" !== g.type(b) || b.nodeType || g.isWindow(b))
                    return !1;
                try {
                    if (b.constructor && !Za.call(b, "constructor") && !Za.call(b.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (t) {
                    return !1
                }
                for (var d in b)

                return d === c || Za.call(b, d)
            },
            isEmptyObject: function (b) {
                for (var c in b)
                    return !1;
                return !0
            },
            error: function (b) {
                throw Error(b);
            },
            parseHTML: function (b, c, d) {
                var e;
                return !b || "string" != typeof b ? null : ("boolean" == typeof c && (d = c,
                    c = 0),
                    c = c || z,
                    (e = Fb.exec(b)) ? [c.createElement(e[1])] : (e = g.buildFragment([b], c, d ? null : []),
                        g.merge([], (e.cacheable ? g.clone(e.fragment) : e.fragment).childNodes)))
            },
            parseJSON: function (c) {
                if (!c || "string" != typeof c)
                    return null;
                c = g.trim(c);
                if (b.JSON && b.JSON.parse)
                    return b.JSON.parse(c);
                if (Gc.test(c.replace(Ic, "@").replace(Jc, "]").replace(Hc, "")))
                    return (new Function("return " + c))();
                g.error("Invalid JSON: " + c)
            },
            parseXML: function (y) {
                var t, d;
                if (!y || "string" != typeof y)
                    return null;
                try {
                    b.DOMParser ? (d = new DOMParser,
                        t = d.parseFromString(y, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"),
                        t.async = "false",
                        t.loadXML(y))
                } catch (e) {
                    t = c
                }
                return (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + y),
                    t
            },
            noop: function () {
            },
            globalEval: function (c) {
                c && Dc.test(c) && (b.execScript || function (c) {
                        b.eval.call(b, c)
                    }
                )(c)
            },
            camelCase: function (b) {
                return b.replace(Kc, "ms-").replace(Lc, Mc)
            },
            nodeName: function (b, c) {
                return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
            },
            each: function (b, t, d) {
                var e, f = 0, A = b.length, u = A === c || g.isFunction(b);
                if (d)
                    if (u)
                        for (e in b) {
                            if (!1 === t.apply(b[e], d))
                                break
                        }
                    else
                        for (; f < A && !1 !== t.apply(b[f++], d);)

                else if (u)
                    for (e in b) {
                        if (!1 === t.call(b[e], e, b[e]))
                            break
                    }
                else
                    for (; f < A && !1 !== t.call(b[f], f, b[f++]);)

                return b
            },
            trim: $a && !$a.call("\ufeff\u00a0") ? function (b) {
                    return null == b ? "" : $a.call(b)
                }
                : function (b) {
                    return null == b ? "" : (b + "").replace(Ec, "")
                }
            ,
            makeArray: function (b, c) {
                var d, e = c || [];
                return null != b && (d = g.type(b),
                    null == b.length || "string" === d || "function" === d || "regexp" === d || g.isWindow(b) ? Db.call(e, b) : g.merge(e, b)),
                    e
            },
            inArray: function (b, c, d) {
                var g;
                if (c) {
                    if (Eb)
                        return Eb.call(c, b, d);
                    g = c.length;
                    for (d = d ? 0 > d ? Math.max(0, g + d) : d : 0; d < g; d++)
                        if (d in c && c[d] === b)
                            return d
                }
                return -1
            },
            merge: function (b, t) {
                var d = t.length
                    , g = b.length
                    , e = 0;
                if ("number" == typeof d)
                    for (; e < d; e++)
                        b[g++] = t[e];
                else
                    for (; t[e] !== c;)
                        b[g++] = t[e++];
                return b.length = g,
                    b
            },
            grep: function (b, c, d) {
                var g, e = [], f = 0, u = b.length;
                for (d = !!d; f < u; f++)
                    g = !!c(b[f], f),
                    d !== g && e.push(b[f]);
                return e
            },
            map: function (b, t, d) {
                var e, f, A = [], u = 0, l = b.length;
                if (b instanceof g || l !== c && "number" == typeof l && (0 < l && b[0] && b[l - 1] || 0 === l || g.isArray(b)))
                    for (; u < l; u++)
                        e = t(b[u], u, d),
                        null != e && (A[A.length] = e);
                else
                    for (f in b)
                        e = t(b[f], f, d),
                        null != e && (A[A.length] = e);
                return A.concat.apply([], A)
            },
            guid: 1,
            proxy: function (b, t) {
                var d, e, f;
                return "string" == typeof t && (d = b[t],
                    t = b,
                    b = d),
                    g.isFunction(b) ? (e = Z.call(arguments, 2),
                        f = function () {
                            return b.apply(t, e.concat(Z.call(arguments)))
                        }
                        ,
                        f.guid = b.guid = b.guid || g.guid++,
                        f) : c
            },
            access: function (b, t, d, e, f, A, u) {
                var l, j = null == d, m = 0, s = b.length;
                if (d && "object" == typeof d) {
                    for (m in d)
                        g.access(b, t, m, d[m], 1, A, e);
                    f = 1
                } else if (e !== c) {
                    l = u === c && g.isFunction(e);
                    j && (l ? (l = t,
                            t = function (b, c, y) {
                                return l.call(g(b), y)
                            }
                    ) : (t.call(b, e),
                        t = null));
                    if (t)
                        for (; m < s; m++)
                            t(b[m], d, l ? e.call(b[m], m, t(b[m], d)) : e, u);
                    f = 1
                }
                return f ? b : j ? t.call(b) : s ? t(b[0], d) : A
            },
            now: function () {
                return (new Date).getTime()
            }
        });
        g.ready.promise = function (c) {
            if (!Ca)
                if (Ca = g.Deferred(),
                "complete" === z.readyState)
                    setTimeout(g.ready, 1);
                else if (z.addEventListener)
                    z.addEventListener("DOMContentLoaded", Ea, !1),
                        b.addEventListener("load", g.ready, !1);
                else {
                    z.attachEvent("onreadystatechange", Ea);
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
        }

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
                    t = (g.each(t.split(ea), function (b, c) {
                        d[c] = !0
                    }),
                        d)
                }
            } else
                t = g.extend({}, b);
            b = t;
            var e, f, A, u, l, j, m = [], s = !b.once && [], q = function (c) {
                e = b.memory && c;
                f = !0;
                j = u || 0;
                u = 0;
                l = m.length;
                for (A = !0; m && j < l; j++)
                    if (!1 === m[j].apply(c[0], c[1]) && b.stopOnFalse) {
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
                            }
                        )(arguments);
                        A ? l = m.length : e && (u = c,
                            q(e))
                    }
                    return this
                },
                remove: function () {
                    return m && g.each(arguments, function (b, c) {
                        for (var y; -1 < (y = g.inArray(c, m, y));)
                            m.splice(y, 1),
                            A && (y <= l && l--,
                            y <= j && j--)
                    }),
                        this
                },
                has: function (b) {
                    return -1 < g.inArray(b, m)
                },
                empty: function () {
                    return m = [],
                        this
                },
                disable: function () {
                    return m = s = e = c,
                        this
                },
                disabled: function () {
                    return !m
                },
                lock: function () {
                    return s = c,
                    e || n.disable(),
                        this
                },
                locked: function () {
                    return !s
                },
                fireWith: function (b, c) {
                    return c = c || [],
                        c = [b, c.slice ? c.slice() : c],
                    m && (!f || s) && (A ? s.push(c) : q(c)),
                        this
                },
                fire: function () {
                    return n.fireWith(this, arguments),
                        this
                },
                fired: function () {
                    return !!f
                }
            };
            return n
        }

        g.extend({
            Deferred: function (b) {
                var c = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]]
                    , d = "pending"
                    , e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments),
                            this
                    },
                    then: function () {
                        var b = arguments;
                        return g.Deferred(function (y) {
                            g.each(c, function (c, t) {
                                var d = t[0]
                                    , r = b[c];
                                f[t[1]](g.isFunction(r) ? function () {
                                        var b = r.apply(this, arguments);
                                        b && g.isFunction(b.promise) ? b.promise().done(y.resolve).fail(y.reject).progress(y.notify) : y[d + "With"](this === f ? y : this, [b])
                                    }
                                    : y[d])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function (b) {
                        return null != b ? g.extend(b, e) : e
                    }
                }
                    , f = {};
                return e.pipe = e.then,
                    g.each(c, function (b, y) {
                        var g = y[2]
                            , l = y[3];
                        e[y[1]] = g.add;
                        l && g.add(function () {
                            d = l
                        }, c[b ^ 1][2].disable, c[2][2].lock);
                        f[y[0]] = g.fire;
                        f[y[0] + "With"] = g.fireWith
                    }),
                    e.promise(f),
                b && b.call(f, f),
                    f
            },
            when: function (b) {
                var c = 0, d = Z.call(arguments), e = d.length, f = 1 !== e || b && g.isFunction(b.promise) ? e : 0,
                    l = 1 === f ? b : g.Deferred(), u = function (b, c, y) {
                        return function (t) {
                            c[b] = this;
                            y[b] = 1 < arguments.length ? Z.call(arguments) : t;
                            y === j ? l.notifyWith(c, y) : --f || l.resolveWith(c, y)
                        }
                    }, j, m, s;
                if (1 < e) {
                    j = Array(e);
                    m = Array(e);
                    for (s = Array(e); c < e; c++)
                        d[c] && g.isFunction(d[c].promise) ? d[c].promise().done(u(c, s, d)).fail(l.reject).progress(u(c, m, j)) : --f
                }
                return f || l.resolveWith(s, d),
                    l.promise()
            }
        });
        var Nc = g, ab, N, Fa, fa, Ga, Ha, S, ga, Ia, bb, ta, Ib, J = z.createElement("div");
        J.setAttribute("className", "t");
        J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        Fa = J.getElementsByTagName("*");
        fa = J.getElementsByTagName("a")[0];
        fa.style.cssText = "top:1px;float:left;opacity:.5";
        if (!Fa || !Fa.length)
            ab = {};
        else {
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
                }
            ),
                J.cloneNode(!0).fireEvent("onclick"),
                J.detachEvent("onclick", Ib));
            S = z.createElement("input");
            S.value = "t";
            S.setAttribute("type", "radio");
            N.radioValue = "t" === S.value;
            S.setAttribute("checked", "checked");
            S.setAttribute("name", "t");
            J.appendChild(S);
            ga = z.createDocumentFragment();
            ga.appendChild(J.lastChild);
            N.checkClone = ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
            N.appendChecked = S.checked;
            ga.removeChild(S);
            ga.appendChild(J);
            if (J.attachEvent)
                for (bb in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    Ia = "on" + bb,
                    (ta = Ia in J) || (J.setAttribute(Ia, "return;"),
                        ta = "function" == typeof J[Ia]),
                        N[bb + "Bubbles"] = ta;
            ab = (g(function () {
                var c, t, d, g, e = z.getElementsByTagName("body")[0];
                e && (c = z.createElement("div"),
                    c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
                    e.insertBefore(c, e.firstChild),
                    t = z.createElement("div"),
                    c.appendChild(t),
                    t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    d = t.getElementsByTagName("td"),
                    d[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    ta = 0 === d[0].offsetHeight,
                    d[0].style.display = "",
                    d[1].style.display = "none",
                    N.reliableHiddenOffsets = ta && 0 === d[0].offsetHeight,
                    t.innerHTML = "",
                    t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                    N.boxSizing = 4 === t.offsetWidth,
                    N.doesNotIncludeMarginInBodyOffset = 1 !== e.offsetTop,
                b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(t, null) || {}).top,
                    N.boxSizingReliable = "4px" === (b.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width,
                    g = z.createElement("div"),
                    g.style.cssText = t.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    g.style.marginRight = g.style.width = "0",
                    t.style.width = "1px",
                    t.appendChild(g),
                    N.reliableMarginRight = !parseFloat((b.getComputedStyle(g, null) || {}).marginRight)),
                "undefined" != typeof t.style.zoom && (t.innerHTML = "",
                    t.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1",
                    N.inlineBlockNeedsLayout = 3 === t.offsetWidth,
                    t.style.display = "block",
                    t.style.overflow = "visible",
                    t.innerHTML = "<div></div>",
                    t.firstChild.style.width = "5px",
                    N.shrinkWrapBlocks = 3 !== t.offsetWidth,
                    c.style.zoom = 1),
                    e.removeChild(c))
            }),
                ga.removeChild(J),
                Fa = fa = Ga = Ha = S = ga = J = null,
                N)
        }
        Nc.support = ab;
        var sc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
            , rc = /([A-Z])/g;
        g.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function (b) {
                return b = b.nodeType ? g.cache[b[g.expando]] : b[g.expando],
                !!b && !e(b)
            },
            data: function (b, t, d, e) {
                if (g.acceptData(b)) {
                    var f, l, u = g.expando, j = "string" == typeof t, m = b.nodeType, s = m ? g.cache : b,
                        q = m ? b[u] : b[u] && u;
                    if (q && s[q] && (e || s[q].data) || !(j && d === c)) {
                        q || (m ? b[u] = q = g.deletedIds.pop() || g.guid++ : q = u);
                        s[q] || (s[q] = {},
                        m || (s[q].toJSON = g.noop));
                        if ("object" == typeof t || "function" == typeof t)
                            e ? s[q] = g.extend(s[q], t) : s[q].data = g.extend(s[q].data, t);
                        return f = s[q],
                        e || (f.data || (f.data = {}),
                            f = f.data),
                        d !== c && (f[g.camelCase(t)] = d),
                            j ? (l = f[t],
                            null == l && (l = f[g.camelCase(t)])) : l = f,
                            l
                    }
                }
            },
            removeData: function (b, c, d) {
                if (g.acceptData(b)) {
                    var f, l, A, u = b.nodeType, j = u ? g.cache : b, m = u ? b[g.expando] : g.expando;
                    if (j[m]) {
                        if (c && (f = d ? j[m] : j[m].data)) {
                            g.isArray(c) || (c in f ? c = [c] : (c = g.camelCase(c),
                                c in f ? c = [c] : c = c.split(" ")));
                            l = 0;
                            for (A = c.length; l < A; l++)
                                delete f[c[l]];
                            if (!(d ? e : g.isEmptyObject)(f))
                                return
                        }
                        if (d || !(delete j[m].data,
                            !e(j[m])))
                            u ? g.cleanData([b], !0) : g.support.deleteExpando || j != j.window ? delete j[m] : j[m] = null
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
                    if (this.length && (s = g.data(j),
                    1 === j.nodeType && !g._data(j, "parsedAttrs"))) {
                        f = j.attributes;
                        for (u = f.length; m < u; m++)
                            l = f[m].name,
                            l.indexOf("data-") || (l = g.camelCase(l.substring(5)),
                                d(j, l, s[l]));
                        g._data(j, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof b ? this.each(function () {
                    g.data(this, b)
                }) : (r = b.split(".", 2),
                    r[1] = r[1] ? "." + r[1] : "",
                    e = r[1] + "!",
                    g.access(this, function (t) {
                        if (t === c)
                            return s = this.triggerHandler("getData" + e, [r[0]]),
                            s === c && j && (s = g.data(j, b),
                                s = d(j, b, s)),
                                s === c && r[1] ? this.data(r[0]) : s;
                        r[1] = t;
                        this.each(function () {
                            var c = g(this);
                            c.triggerHandler("setData" + e, r);
                            g.data(this, b, t);
                            c.triggerHandler("changeData" + e, r)
                        })
                    }, null, t, 1 < arguments.length, null, !1))
            },
            removeData: function (b) {
                return this.each(function () {
                    g.removeData(this, b)
                })
            }
        });
        g.extend({
            queue: function (b, c, d) {
                var e;
                if (b)
                    return c = (c || "fx") + "queue",
                        e = g._data(b, c),
                    d && (!e || g.isArray(d) ? e = g._data(b, c, g.makeArray(d)) : e.push(d)),
                    e || []
            },
            dequeue: function (b, c) {
                c = c || "fx";
                var d = g.queue(b, c)
                    , e = d.length
                    , f = d.shift()
                    , l = g._queueHooks(b, c)
                    , u = function () {
                    g.dequeue(b, c)
                };
                "inprogress" === f && (f = d.shift(),
                    e--);
                f && ("fx" === c && d.unshift("inprogress"),
                    delete l.stop,
                    f.call(b, u, l));
                !e && l && l.empty.fire()
            },
            _queueHooks: function (b, c) {
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
                return "string" != typeof b && (d = b,
                    b = "fx",
                    r--),
                    arguments.length < r ? g.queue(this[0], b) : d === c ? this : this.each(function () {
                        var c = g.queue(this, b, d);
                        g._queueHooks(this, b);
                        "fx" === b && "inprogress" !== c[0] && g.dequeue(this, b)
                    })
            },
            dequeue: function (b) {
                return this.each(function () {
                    g.dequeue(this, b)
                })
            },
            delay: function (b, c) {
                return b = g.fx ? g.fx.speeds[b] || b : b,
                    c = c || "fx",
                    this.queue(c, function (c, d) {
                        var t = setTimeout(c, b);
                        d.stop = function () {
                            clearTimeout(t)
                        }
                    })
            },
            clearQueue: function (b) {
                return this.queue(b || "fx", [])
            },
            promise: function (b, d) {
                var r, e = 1, f = g.Deferred(), l = this, u = this.length, j = function () {
                    --e || f.resolveWith(l, [l])
                };
                "string" != typeof b && (d = b,
                    b = c);
                for (b = b || "fx"; u--;)
                    (r = g._data(l[u], b + "queueHooks")) && r.empty && (e++,
                        r.empty.add(j));
                return j(),
                    f.promise(d)
            }
        });
        var aa, Jb, Kb, Lb = /[\t\r\n]/g, Oc = /\r/g, Pc = /^(?:button|input)$/i,
            Qc = /^(?:button|input|object|select|textarea)$/i, Rc = /^a(?:rea|)$/i,
            Mb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Nb = g.support.getSetAttribute;
        g.fn.extend({
            attr: function (b, c) {
                return g.access(this, g.attr, b, c, 1 < arguments.length)
            },
            removeAttr: function (b) {
                return this.each(function () {
                    g.removeAttr(this, b)
                })
            },
            prop: function (b, c) {
                return g.access(this, g.prop, b, c, 1 < arguments.length)
            },
            removeProp: function (b) {
                return b = g.propFix[b] || b,
                    this.each(function () {
                        try {
                            this[b] = c,
                                delete this[b]
                        } catch (d) {
                        }
                    })
            },
            addClass: function (b) {
                var c, d, e, f, l, u, j;
                if (g.isFunction(b))
                    return this.each(function (c) {
                        g(this).addClass(b.call(this, c, this.className))
                    });
                if (b && "string" == typeof b) {
                    c = b.split(ea);
                    d = 0;
                    for (e = this.length; d < e; d++)
                        if (f = this[d],
                        1 === f.nodeType)
                            if (!f.className && 1 === c.length)
                                f.className = b;
                            else {
                                l = " " + f.className + " ";
                                u = 0;
                                for (j = c.length; u < j; u++)
                                    0 > l.indexOf(" " + c[u] + " ") && (l += c[u] + " ");
                                f.className = g.trim(l)
                            }
                }
                return this
            },
            removeClass: function (b) {
                var d, r, e, f, l, u, j;
                if (g.isFunction(b))
                    return this.each(function (c) {
                        g(this).removeClass(b.call(this, c, this.className))
                    });
                if (b && "string" == typeof b || b === c) {
                    d = (b || "").split(ea);
                    u = 0;
                    for (j = this.length; u < j; u++)
                        if (e = this[u],
                        1 === e.nodeType && e.className) {
                            r = (" " + e.className + " ").replace(Lb, " ");
                            f = 0;
                            for (l = d.length; f < l; f++)
                                for (; 0 <= r.indexOf(" " + d[f] + " ");)
                                    r = r.replace(" " + d[f] + " ", " ");
                            e.className = b ? g.trim(r) : ""
                        }
                }
                return this
            },
            toggleClass: function (b, c) {
                var d = typeof b
                    , e = "boolean" == typeof c;
                return g.isFunction(b) ? this.each(function (d) {
                    g(this).toggleClass(b.call(this, d, this.className, c), c)
                }) : this.each(function () {
                    if ("string" === d)
                        for (var f, l = 0, u = g(this), j = c, m = b.split(ea); f = m[l++];)
                            j = e ? j : !u.hasClass(f),
                                u[j ? "addClass" : "removeClass"](f);
                    else if ("undefined" === d || "boolean" === d)
                        this.className && g._data(this, "__className__", this.className),
                            this.className = this.className || !1 === b ? "" : g._data(this, "__className__") || ""
                })
            },
            hasClass: function (b) {
                b = " " + b + " ";
                for (var c = 0, d = this.length; c < d; c++)
                    if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Lb, " ").indexOf(b))
                        return !0;
                return !1
            },
            val: function (b) {
                var d, r, e, f = this[0];
                if (arguments.length)
                    return e = g.isFunction(b),
                        this.each(function (r) {
                            var f, l = g(this);
                            if (1 === this.nodeType && (e ? f = b.call(this, r, l.val()) : f = b,
                                null == f ? f = "" : "number" == typeof f ? f += "" : g.isArray(f) && (f = g.map(f, function (b) {
                                    return null == b ? "" : b + ""
                                })),
                                d = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()],
                            !d || !("set" in d) || d.set(this, f, "value") === c))
                                this.value = f
                        });
                if (f)
                    return d = g.valHooks[f.type] || g.valHooks[f.nodeName.toLowerCase()],
                        d && "get" in d && (r = d.get(f, "value")) !== c ? r : (r = f.value,
                            "string" == typeof r ? r.replace(Oc, "") : null == r ? "" : r)
            }
        });
        g.extend({
            valHooks: {
                option: {
                    get: function (b) {
                        var c = b.attributes.value;
                        return !c || c.specified ? b.value : b.text
                    }
                },
                select: {
                    get: function (b) {
                        var c, d, e = b.selectedIndex, f = [], l = b.options, u = "select-one" === b.type;
                        if (0 > e)
                            return null;
                        b = u ? e : 0;
                        for (d = u ? e + 1 : l.length; b < d; b++)
                            if (c = l[b],
                            c.selected && (g.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !g.nodeName(c.parentNode, "optgroup"))) {
                                c = g(c).val();
                                if (u)
                                    return c;
                                f.push(c)
                            }
                        return u && !f.length && l.length ? g(l[e]).val() : f
                    },
                    set: function (b, c) {
                        var d = g.makeArray(c);
                        return g(b).find("option").each(function () {
                            this.selected = 0 <= g.inArray(g(this).val(), d)
                        }),
                        d.length || (b.selectedIndex = -1),
                            d
                    }
                }
            },
            attrFn: {},
            attr: function (b, d, r, e) {
                var f, l, u = b.nodeType;
                if (b && !(3 === u || 8 === u || 2 === u)) {
                    if (e && g.isFunction(g.fn[d]))
                        return g(b)[d](r);
                    if ("undefined" == typeof b.getAttribute)
                        return g.prop(b, d, r);
                    (e = 1 !== u || !g.isXMLDoc(b)) && (d = d.toLowerCase(),
                        l = g.attrHooks[d] || (Mb.test(d) ? Jb : aa));
                    if (r !== c) {
                        if (null === r) {
                            g.removeAttr(b, d);
                            return
                        }
                        return l && "set" in l && e && (f = l.set(b, r, d)) !== c ? f : (b.setAttribute(d, r + ""),
                            r)
                    }
                    return l && "get" in l && e && null !== (f = l.get(b, d)) ? f : (f = b.getAttribute(d),
                        null === f ? c : f)
                }
            },
            removeAttr: function (b, c) {
                var d, e, f, l, u = 0;
                if (c && 1 === b.nodeType)
                    for (e = c.split(ea); u < e.length; u++)
                        (f = e[u]) && (d = g.propFix[f] || f,
                            l = Mb.test(f),
                        l || g.attr(b, f, ""),
                            b.removeAttribute(Nb ? f : d),
                        l && d in b && (b[d] = !1))
            },
            attrHooks: {
                type: {
                    set: function (b, c) {
                        if (Pc.test(b.nodeName) && b.parentNode)
                            g.error("type property can't be changed");
                        else if (!g.support.radioValue && "radio" === c && g.nodeName(b, "input")) {
                            var d = b.value;
                            return b.setAttribute("type", c),
                            d && (b.value = d),
                                c
                        }
                    }
                },
                value: {
                    get: function (b, c) {
                        return aa && g.nodeName(b, "button") ? aa.get(b, c) : c in b ? b.value : null
                    },
                    set: function (b, c, d) {
                        if (aa && g.nodeName(b, "button"))
                            return aa.set(b, c, d);
                        b.value = c
                    }
                }
            },
            propFix: {
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
            },
            prop: function (b, d, r) {
                var e, f, l, u = b.nodeType;
                if (b && !(3 === u || 8 === u || 2 === u))
                    return l = 1 !== u || !g.isXMLDoc(b),
                    l && (d = g.propFix[d] || d,
                        f = g.propHooks[d]),
                        r !== c ? f && "set" in f && (e = f.set(b, r, d)) !== c ? e : b[d] = r : f && "get" in f && null !== (e = f.get(b, d)) ? e : b[d]
            },
            propHooks: {
                tabIndex: {
                    get: function (b) {
                        var d = b.getAttributeNode("tabindex");
                        return d && d.specified ? parseInt(d.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                    }
                }
            }
        });
        Jb = {
            get: function (b, d) {
                var e, f = g.prop(b, d);
                return !0 === f || "boolean" != typeof f && (e = b.getAttributeNode(d)) && !1 !== e.nodeValue ? d.toLowerCase() : c
            },
            set: function (b, c, d) {
                var e;
                return !1 === c ? g.removeAttr(b, d) : (e = g.propFix[d] || d,
                e in b && (b[e] = !0),
                    b.setAttribute(d, d.toLowerCase())),
                    d
            }
        };
        Nb || (Kb = {
            name: !0,
            id: !0,
            coords: !0
        },
            aa = g.valHooks.button = {
                get: function (b, d) {
                    var g;
                    return g = b.getAttributeNode(d),
                        g && (Kb[d] ? "" !== g.value : g.specified) ? g.value : c
                },
                set: function (b, c, d) {
                    var g = b.getAttributeNode(d);
                    return g || (g = z.createAttribute(d),
                        b.setAttributeNode(g)),
                        g.value = c + ""
                }
            },
            g.each(["width", "height"], function (b, c) {
                g.attrHooks[c] = g.extend(g.attrHooks[c], {
                    set: function (b, y) {
                        if ("" === y)
                            return b.setAttribute(c, "auto"),
                                y
                    }
                })
            }),
            g.attrHooks.contenteditable = {
                get: aa.get,
                set: function (b, c, d) {
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
                return b.style.cssText.toLowerCase() || c
            },
            set: function (b, c) {
                return b.style.cssText = c + ""
            }
        });
        g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, {
            get: function (b) {
                b = b.parentNode;
                return b && (b.selectedIndex,
                b.parentNode && b.parentNode.selectedIndex),
                    null
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
            g.valHooks[this] = g.extend(g.valHooks[this], {
                set: function (b, c) {
                    if (g.isArray(c))
                        return b.checked = 0 <= g.inArray(g(b).val(), c)
                }
            })
        });
        var cb = /^(?:textarea|input|select)$/i
            , Ob = /^([^\.]*|)(?:\.(.+)|)$/
            , Sc = /(?:^|\s)hover(\.\S+|)\b/
            , Tc = /^key/
            , Uc = /^(?:mouse|contextmenu)|click/
            , Pb = /^(?:focusinfocus|focusoutblur)$/
            , Qb = function (b) {
            return g.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
        g.event = {
            add: function (b, d, e, f, l) {
                var j, u, m, s, q, n, E, v, p;
                if (!(3 === b.nodeType || 8 === b.nodeType || !d || !e || !(j = g._data(b)))) {
                    e.handler && (E = e,
                        e = E.handler,
                        l = E.selector);
                    e.guid || (e.guid = g.guid++);
                    (m = j.events) || (j.events = m = {});
                    (u = j.handle) || (j.handle = u = function (b) {
                        return "undefined" != typeof g && (!b || g.event.triggered !== b.type) ? g.event.dispatch.apply(u.elem, arguments) : c
                    }
                        ,
                        u.elem = b);
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
                        if (!v && (v = m[q] = [],
                            v.delegateCount = 0,
                        !p.setup || !1 === p.setup.call(b, f, n, u)))
                            b.addEventListener ? b.addEventListener(q, u, !1) : b.attachEvent && b.attachEvent("on" + q, u);
                        p.add && (p.add.call(b, s),
                        s.handler.guid || (s.handler.guid = e.guid));
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
                    for (l = 0; l < c.length; l++)
                        if (u = Ob.exec(c[l]) || [],
                            j = m = u[1],
                            u = u[2],
                            j) {
                            v = g.event.special[j] || {};
                            j = (e ? v.delegateType : v.bindType) || j;
                            p = n[j] || [];
                            s = p.length;
                            u = u ? RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                            for (q = 0; q < p.length; q++)
                                x = p[q],
                                (f || m === x.origType) && (!d || d.guid === x.guid) && (!u || u.test(x.namespace)) && (!e || e === x.selector || "**" === e && x.selector) && (p.splice(q--, 1),
                                x.selector && p.delegateCount--,
                                v.remove && v.remove.call(b, x));
                            0 === p.length && s !== p.length && ((!v.teardown || !1 === v.teardown.call(b, u, H.handle)) && g.removeEvent(b, j, H.handle),
                                delete n[j])
                        } else
                            for (j in n)
                                g.event.remove(b, j + c[l], d, e, !0);
                    g.isEmptyObject(n) && (delete H.handle,
                        g.removeData(b, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (d, t, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var l, j, u, m, s, q, n, E = d.type || d;
                    m = [];
                    if (!Pb.test(E + g.event.triggered) && (0 <= E.indexOf("!") && (E = E.slice(0, -1),
                        l = !0),
                    0 <= E.indexOf(".") && (m = E.split("."),
                        E = m.shift(),
                        m.sort()),
                    e && !g.event.customEvent[E] || g.event.global[E]))
                        if (d = "object" == typeof d ? d[g.expando] ? d : new g.Event(E, d) : new g.Event(E),
                            d.type = E,
                            d.isTrigger = !0,
                            d.exclusive = l,
                            d.namespace = m.join("."),
                            d.namespace_re = d.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            m = 0 > E.indexOf(":") ? "on" + E : "",
                            e) {
                            if (d.result = c,
                            d.target || (d.target = e),
                                t = null != t ? g.makeArray(t) : [],
                                t.unshift(d),
                                s = g.event.special[E] || {},
                                !(s.trigger && !1 === s.trigger.apply(e, t))) {
                                n = [[e, s.bindType || E]];
                                if (!f && !s.noBubble && !g.isWindow(e)) {
                                    j = s.delegateType || E;
                                    l = Pb.test(j + E) ? e : e.parentNode;
                                    for (u = e; l; l = l.parentNode)
                                        n.push([l, j]),
                                            u = l;
                                    u === (e.ownerDocument || z) && n.push([u.defaultView || u.parentWindow || b, j])
                                }
                                for (j = 0; j < n.length && !d.isPropagationStopped(); j++)
                                    l = n[j][0],
                                        d.type = n[j][1],
                                    (q = (g._data(l, "events") || {})[d.type] && g._data(l, "handle")) && q.apply(l, t),
                                    (q = m && l[m]) && g.acceptData(l) && q.apply && !1 === q.apply(l, t) && d.preventDefault();
                                return d.type = E,
                                !f && !d.isDefaultPrevented() && (!s._default || !1 === s._default.apply(e.ownerDocument, t)) && ("click" !== E || !g.nodeName(e, "a")) && g.acceptData(e) && m && e[E] && ("focus" !== E && "blur" !== E || 0 !== d.target.offsetWidth) && !g.isWindow(e) && (u = e[m],
                                u && (e[m] = null),
                                    g.event.triggered = E,
                                    e[E](),
                                    g.event.triggered = c,
                                u && (e[m] = u)),
                                    d.result
                            }
                        } else
                            for (j in e = g.cache,
                                e)
                                e[j].events && e[j].events[E] && g.event.trigger(d, t, e[j].handle.elem, !0)
                }
            },
            dispatch: function (d) {
                d = g.event.fix(d || b.event);
                var t, e, f, l, j, u, m = (g._data(this, "events") || {})[d.type] || [], s = m.delegateCount,
                    q = Z.call(arguments), n = !d.exclusive && !d.namespace, E = g.event.special[d.type] || {}, v = [];
                q[0] = d;
                d.delegateTarget = this;
                if (!(E.preDispatch && !1 === E.preDispatch.call(this, d))) {
                    if (s && (!d.button || "click" !== d.type))
                        for (e = d.target; e != this; e = e.parentNode || this)
                            if (!0 !== e.disabled || "click" !== d.type) {
                                l = {};
                                j = [];
                                for (t = 0; t < s; t++)
                                    f = m[t],
                                        u = f.selector,
                                    l[u] === c && (l[u] = f.needsContext ? 0 <= g(u, this).index(e) : g.find(u, this, null, [e]).length),
                                    l[u] && j.push(f);
                                j.length && v.push({
                                    elem: e,
                                    matches: j
                                })
                            }
                    m.length > s && v.push({
                        elem: this,
                        matches: m.slice(s)
                    });
                    for (t = 0; t < v.length && !d.isPropagationStopped(); t++) {
                        l = v[t];
                        d.currentTarget = l.elem;
                        for (e = 0; e < l.matches.length && !d.isImmediatePropagationStopped(); e++)
                            if (f = l.matches[e],
                            n || !d.namespace && !f.namespace || d.namespace_re && d.namespace_re.test(f.namespace))
                                d.data = f.data,
                                    d.handleObj = f,
                                    f = ((g.event.special[f.origType] || {}).handle || f.handler).apply(l.elem, q),
                                f !== c && (d.result = f,
                                !1 === f && (d.preventDefault(),
                                    d.stopPropagation()))
                    }
                    return E.postDispatch && E.postDispatch.call(this, d),
                        d.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: ["char", "charCode", "key", "keyCode"],
                filter: function (b, c) {
                    return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode),
                        b
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (b, d) {
                    var e, g, f, l = d.button, u = d.fromElement;
                    return null == b.pageX && null != d.clientX && (e = b.target.ownerDocument || z,
                        g = e.documentElement,
                        f = e.body,
                        b.pageX = d.clientX + (g && g.scrollLeft || f && f.scrollLeft || 0) - (g && g.clientLeft || f && f.clientLeft || 0),
                        b.pageY = d.clientY + (g && g.scrollTop || f && f.scrollTop || 0) - (g && g.clientTop || f && f.clientTop || 0)),
                    !b.relatedTarget && u && (b.relatedTarget = u === b.target ? d.toElement : u),
                    !b.which && l !== c && (b.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0),
                        b
                }
            },
            fix: function (b) {
                if (b[g.expando])
                    return b;
                var c, d, e = b, f = g.event.fixHooks[b.type] || {},
                    l = f.props ? this.props.concat(f.props) : this.props;
                b = g.Event(e);
                for (c = l.length; c;)
                    d = l[--c],
                        b[d] = e[d];
                return b.target || (b.target = e.srcElement || z),
                3 === b.target.nodeType && (b.target = b.target.parentNode),
                    b.metaKey = !!b.metaKey,
                    f.filter ? f.filter(b, e) : b
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (b, c, d) {
                        g.isWindow(this) && (this.onbeforeunload = d)
                    },
                    teardown: function (b, c) {
                        this.onbeforeunload === c && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (b, c, d, e) {
                b = g.extend(new g.Event, d, {
                    type: b,
                    isSimulated: !0,
                    originalEvent: {}
                });
                e ? g.event.trigger(b, null, c) : g.event.dispatch.call(c, b);
                b.isDefaultPrevented() && d.preventDefault()
            }
        };
        g.event.handle = g.event.dispatch;
        g.removeEvent = z.removeEventListener ? function (b, c, d) {
                b.removeEventListener && b.removeEventListener(c, d, !1)
            }
            : function (b, c, d) {
                c = "on" + c;
                b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null),
                    b.detachEvent(c, d))
            }

        g.Event = function (b, c) {
            if (this instanceof g.Event)
                b && b.type ? (this.originalEvent = b,
                    this.type = b.type,
                    this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? j : f) : this.type = b,
                c && g.extend(this, c),
                    this.timeStamp = b && b.timeStamp || g.now(),
                    this[g.expando] = !0;
            else
                return new g.Event(b, c)
        }

        g.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = j;
                var b = this.originalEvent;
                b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = j;
                var b = this.originalEvent;
                b && (b.stopPropagation && b.stopPropagation(),
                    b.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = j;
                this.stopPropagation()
            },
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f
        };
        g.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (b, c) {
            g.event.special[b] = {
                delegateType: c,
                bindType: c,
                handle: function (b) {
                    var d, y = b.relatedTarget, e = b.handleObj;
                    if (!y || y !== this && !g.contains(this, y))
                        b.type = e.origType,
                            d = e.handler.apply(this, arguments),
                            b.type = c;
                    return d
                }
            }
        });
        g.support.submitBubbles || (g.event.special.submit = {
            setup: function () {
                if (g.nodeName(this, "form"))
                    return !1;
                g.event.add(this, "click._submit keypress._submit", function (b) {
                    b = b.target;
                    (b = g.nodeName(b, "input") || g.nodeName(b, "button") ? b.form : c) && !g._data(b, "_submit_attached") && (g.event.add(b, "submit._submit", function (b) {
                        b._submit_bubble = !0
                    }),
                        g._data(b, "_submit_attached", !0))
                })
            },
            postDispatch: function (b) {
                b._submit_bubble && (delete b._submit_bubble,
                this.parentNode && !b.isTrigger && g.event.simulate("submit", this.parentNode, b, !0))
            },
            teardown: function () {
                if (g.nodeName(this, "form"))
                    return !1;
                g.event.remove(this, "._submit")
            }
        });
        g.support.changeBubbles || (g.event.special.change = {
            setup: function () {
                if (cb.test(this.nodeName)) {
                    if ("checkbox" === this.type || "radio" === this.type)
                        g.event.add(this, "propertychange._change", function (b) {
                            "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                        }),
                            g.event.add(this, "click._change", function (b) {
                                this._just_changed && !b.isTrigger && (this._just_changed = !1);
                                g.event.simulate("change", this, b, !0)
                            });
                    return !1
                }
                g.event.add(this, "beforeactivate._change", function (b) {
                    b = b.target;
                    cb.test(b.nodeName) && !g._data(b, "_change_attached") && (g.event.add(b, "change._change", function (b) {
                        this.parentNode && !b.isSimulated && !b.isTrigger && g.event.simulate("change", this.parentNode, b, !0)
                    }),
                        g._data(b, "_change_attached", !0))
                })
            },
            handle: function (b) {
                var c = b.target;
                if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type)
                    return b.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return g.event.remove(this, "._change"),
                    !cb.test(this.nodeName)
            }
        });
        g.support.focusinBubbles || g.each({
            focus: "focusin",
            blur: "focusout"
        }, function (b, c) {
            var d = 0
                , e = function (b) {
                g.event.simulate(c, b.target, g.event.fix(b), !0)
            };
            g.event.special[c] = {
                setup: function () {
                    0 === d++ && z.addEventListener(b, e, !0)
                },
                teardown: function () {
                    0 === --d && z.removeEventListener(b, e, !0)
                }
            }
        });
        g.fn.extend({
            on: function (b, d, e, l, j) {
                var m, u;
                if ("object" == typeof b) {
                    "string" != typeof d && (e = e || d,
                        d = c);
                    for (u in b)
                        this.on(u, d, e, b[u], j);
                    return this
                }
                null == e && null == l ? (l = d,
                    e = d = c) : null == l && ("string" == typeof d ? (l = e,
                    e = c) : (l = e,
                    e = d,
                    d = c));
                if (!1 === l)
                    l = f;
                else if (!l)
                    return this;
                return 1 === j && (m = l,
                    l = function (b) {
                        return g().off(b),
                            m.apply(this, arguments)
                    }
                    ,
                    l.guid = m.guid || (m.guid = g.guid++)),
                    this.each(function () {
                        g.event.add(this, b, l, e, d)
                    })
            },
            one: function (b, c, d, e) {
                return this.on(b, c, d, e, 1)
            },
            off: function (b, d, e) {
                var l, j;
                if (b && b.preventDefault && b.handleObj)
                    return l = b.handleObj,
                        g(b.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler),
                        this;
                if ("object" == typeof b) {
                    for (j in b)
                        this.off(j, d, b[j]);
                    return this
                }
                if (!1 === d || "function" == typeof d)
                    e = d,
                        d = c;
                return !1 === e && (e = f),
                    this.each(function () {
                        g.event.remove(this, b, e, d)
                    })
            },
            bind: function (b, c, d) {
                return this.on(b, null, c, d)
            },
            unbind: function (b, c) {
                return this.off(b, null, c)
            },
            live: function (b, c, d) {
                return g(this.context).on(b, this.selector, c, d),
                    this
            },
            die: function (b, c) {
                return g(this.context).off(b, this.selector || "**", c),
                    this
            },
            delegate: function (b, c, d, e) {
                return this.on(c, b, d, e)
            },
            undelegate: function (b, c, d) {
                return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
            },
            trigger: function (b, c) {
                return this.each(function () {
                    g.event.trigger(b, c, this)
                })
            },
            triggerHandler: function (b, c) {
                if (this[0])
                    return g.event.trigger(b, c, this[0], !0)
            },
            toggle: function (b) {
                var c = arguments
                    , d = b.guid || g.guid++
                    , e = 0
                    , f = function (d) {
                    var f = (g._data(this, "lastToggle" + b.guid) || 0) % e;
                    return g._data(this, "lastToggle" + b.guid, f + 1),
                        d.preventDefault(),
                    c[f].apply(this, arguments) || !1
                };
                for (f.guid = d; e < c.length;)
                    c[e++].guid = d;
                return this.click(f)
            },
            hover: function (b, c) {
                return this.mouseenter(b).mouseleave(c || b)
            }
        });
        g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (b, c) {
            g.fn[c] = function (b, d) {
                return null == d && (d = b,
                    b = null),
                    0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            }

            Tc.test(c) && (g.event.fixHooks[c] = g.event.keyHooks);
            Uc.test(c) && (g.event.fixHooks[c] = g.event.mouseHooks)
        });
        var Vc = b, B = function (b, c, d, e) {
                d = d || [];
                c = c || W;
                var g, f, l, j, m = c.nodeType;
                if (!b || "string" != typeof b)
                    return d;
                if (1 !== m && 9 !== m)
                    return [];
                l = Ja(c);
                if (!l && !e && (g = Wc.exec(b)))
                    if (j = g[1])
                        if (9 === m) {
                            f = c.getElementById(j);
                            if (!f || !f.parentNode)
                                return d;
                            if (f.id === j)
                                return d.push(f),
                                    d
                        } else {
                            if (c.ownerDocument && (f = c.ownerDocument.getElementById(j)) && Rb(c, f) && f.id === j)
                                return d.push(f),
                                    d
                        }
                    else {
                        if (g[2])
                            return na.apply(d, oa.call(c.getElementsByTagName(b), 0)),
                                d;
                        if ((j = g[3]) && Sb && c.getElementsByClassName)
                            return na.apply(d, oa.call(c.getElementsByClassName(j), 0)),
                                d
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
                    return c = +c,
                        X(function (d, e) {
                            for (var g, f = b([], d.length, c), l = f.length; l--;)
                                d[g = f[l]] && (d[g] = !(e[g] = d[g]))
                        })
                })
            }, La = function (b, c, d) {
                if (b === c)
                    return d;
                for (b = b.nextSibling; b;) {
                    if (b === c)
                        return -1;
                    b = b.nextSibling
                }
                return 1
            }, Na = function (b, c) {
                var d, e, g, f, l, j, m;
                if (l = Ub[F][b])
                    return c ? 0 : l.slice(0);
                l = b;
                j = [];
                for (m = K.preFilter; l;) {
                    if (!d || (e = Xc.exec(l)))
                        e && (l = l.slice(e[0].length)),
                            j.push(g = []);
                    d = !1;
                    if (e = Yc.exec(l))
                        g.push(d = new Vb(e.shift())),
                            l = l.slice(d.length),
                            d.type = e[0].replace(Ka, " ");
                    for (f in K.filter)
                        (e = Ma[f].exec(l)) && (!m[f] || (e = m[f](e, W, !0))) && (g.push(d = new Vb(e.shift())),
                            l = l.slice(d.length),
                            d.type = f,
                            d.matches = e);
                    if (!d)
                        break
                }
                return c ? l.length : l ? B.error(b) : Ub(b, j).slice(0)
            }, fb = function (b, c, d) {
                var e = c.dir
                    , g = d && "parentNode" === c.dir
                    , f = Zc++;
                return c.first ? function (c, d, t) {
                        for (; c = c[e];)
                            if (g || 1 === c.nodeType)
                                return b(c, d, t)
                    }
                    : function (c, d, t) {
                        if (t)
                            for (; c = c[e];) {
                                if ((g || 1 === c.nodeType) && b(c, d, t))
                                    return c
                            }
                        else
                            for (var r, l = va + " " + f + " ", j = l + eb; c = c[e];)
                                if (g || 1 === c.nodeType) {
                                    if ((r = c[F]) === j)
                                        return c.sizset;
                                    if ("string" == typeof r && 0 === r.indexOf(l)) {
                                        if (c.sizset)
                                            return c
                                    } else {
                                        c[F] = j;
                                        if (b(c, d, t))
                                            return c.sizset = !0,
                                                c;
                                        c.sizset = !1
                                    }
                                }
                    }
            }, gb = function (b) {
                return 1 < b.length ? function (c, d, e) {
                        for (var g = b.length; g--;)
                            if (!b[g](c, d, e))
                                return !1;
                        return !0
                    }
                    : b[0]
            }, Oa = function (b, c, d, e, g) {
                for (var f, l = [], j = 0, m = b.length, s = null != c; j < m; j++)
                    if (f = b[j])
                        if (!d || d(f, e, g))
                            l.push(f),
                            s && c.push(j);
                return l
            }, hb = function (b, c, d, e, g, f) {
                return e && !e[F] && (e = hb(e)),
                g && !g[F] && (g = hb(g, f)),
                    X(function (f, l, j, m) {
                        if (!f || !g) {
                            var s, q, A = [], n = [], v = l.length;
                            if (!(q = f)) {
                                q = c || "*";
                                var p = j.nodeType ? [j] : j
                                    , x = [];
                                s = 0;
                                for (var H = p.length; s < H; s++)
                                    B(q, p[s], x, f);
                                q = x
                            }
                            p = b && (f || !c) ? Oa(q, A, b, j, m) : q;
                            x = d ? g || (f ? b : v || e) ? [] : l : p;
                            d && d(p, x, j, m);
                            if (e) {
                                q = Oa(x, n);
                                e(q, [], j, m);
                                for (j = q.length; j--;)
                                    if (s = q[j])
                                        x[n[j]] = !(p[n[j]] = s)
                            }
                            if (f)
                                for (j = b && x.length; j--;) {
                                    if (s = x[j])
                                        f[A[j]] = !(l[A[j]] = s)
                                }
                            else
                                x = Oa(x === l ? x.splice(v, x.length) : x),
                                    g ? g(null, l, x, m) : na.apply(l, x)
                        }
                    })
            }, ib = function (b) {
                var c, d, e, g = b.length, f = K.relative[b[0].type];
                d = f || K.relative[" "];
                for (var l = f ? 1 : 0, j = fb(function (b) {
                    return b === c
                }, d, !0), m = fb(function (b) {
                    return -1 < Wb.call(c, b)
                }, d, !0), s = [function (b, d, e) {
                    return !f && (e || d !== Pa) || ((c = d).nodeType ? j(b, d, e) : m(b, d, e))
                }
                ]; l < g; l++)
                    if (d = K.relative[b[l].type])
                        s = [fb(gb(s), d)];
                    else {
                        d = K.filter[b[l].type].apply(null, b[l].matches);
                        if (d[F]) {
                            for (e = ++l; e < g && !K.relative[b[e].type]; e++)

                            return hb(1 < l && gb(s), 1 < l && b.slice(0, l - 1).join("").replace(Ka, "$1"), d, l < e && ib(b.slice(l, e)), e < g && ib(b = b.slice(e)), e < g && b.join(""))
                        }
                        s.push(d)
                    }
                return gb(s)
            }, db = function (b, c, d, e, g) {
                var f, l, j, m, s = Na(b);
                if (!e && 1 === s.length) {
                    l = s[0] = s[0].slice(0);
                    if (2 < l.length && "ID" === (j = l[0]).type && 9 === c.nodeType && !g && K.relative[l[1].type]) {
                        c = K.find.ID(j.matches[0].replace(ia, ""), c, g)[0];
                        if (!c)
                            return d;
                        b = b.slice(l.shift().length)
                    }
                    for (f = Ma.POS.test(b) ? -1 : l.length - 1; 0 <= f; f--) {
                        j = l[f];
                        if (K.relative[m = j.type])
                            break;
                        if (m = K.find[m])
                            if (e = m(j.matches[0].replace(ia, ""), jb.test(l[0].type) && c.parentNode || c, g)) {
                                l.splice(f, 1);
                                b = e.length && l.join("");
                                if (!b)
                                    return na.apply(d, oa.call(e, 0)),
                                        d;
                                break
                            }
                    }
                }
                return kb(b, s)(e, c, g, d, jb.test(b)),
                    d
            }, Xb = function () {
            }, eb, lb, K, Qa, Ja, Rb, kb, mb, wa, Pa, Yb = !0, F = ("sizcache" + Math.random()).replace(".", ""),
            Vb = String, W = Vc.document, V = W.documentElement, va = 0, Zc = 0, $c = [].pop, na = [].push,
            oa = [].slice, Wb = [].indexOf || function (b) {
                for (var c = 0, d = this.length; c < d; c++)
                    if (this[c] === b)
                        return c;
                return -1
            }
            , X = function (b, c) {
                return b[F] = null == c || c,
                    b
            }, nb = function () {
                var b = {}
                    , c = [];
                return X(function (d, e) {
                    return c.push(d) > K.cacheLength && delete b[c.shift()],
                        b[d] = e
                }, b)
            }, Zb = nb(), Ub = nb(), $b = nb(),
            ac = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            ob = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + ac + ")|[^:]|\\\\.)*|.*))\\)|)",
            Ka = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, ad = RegExp(ob),
            Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, jb = /[\x20\t\r\n\f]*[+~]/, bd = /h\d/i,
            cd = /input|select|textarea|button/i, ia = /\\(?!\\)/g, Ma = {
                ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
                NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
                TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ac),
                PSEUDO: RegExp("^" + ob),
                POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
                CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
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
                return b.appendChild(W.createComment("")),
                    !b.getElementsByTagName("*").length
            }), ed = ba(function (b) {
                return b.innerHTML = "<a href='#'></a>",
                b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
            }), fd = ba(function (b) {
                b.innerHTML = "<select></select>";
                b = typeof b.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b
            }), Sb = ba(function (b) {
                return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                    !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e",
                    2 === b.getElementsByClassName("e").length)
            }), gd = ba(function (b) {
                b.id = F + 0;
                b.innerHTML = "<a name='" + F + "'></a><div name='" + F + "'></div>";
                V.insertBefore(b, V.firstChild);
                var c = W.getElementsByName && W.getElementsByName(F).length === 2 + W.getElementsByName(F + 0).length;
                return lb = !W.getElementById(F),
                    V.removeChild(b),
                    c
            });
        try {
            oa.call(V.childNodes, 0)[0].nodeType
        } catch (Qd) {
            oa = function (b) {
                for (var c, d = []; c = this[b]; b++)
                    d.push(c);
                return d
            }
        }
        B.matches = function (b, c) {
            return B(b, null, null, c)
        }

        B.matchesSelector = function (b, c) {
            return 0 < B(c, null, null, [b]).length
        }

        Qa = B.getText = function (b) {
            var c, d = "", e = 0;
            if (c = b.nodeType)
                if (1 === c || 9 === c || 11 === c) {
                    if ("string" == typeof b.textContent)
                        return b.textContent;
                    for (b = b.firstChild; b; b = b.nextSibling)
                        d += Qa(b)
                } else {
                    if (3 === c || 4 === c)
                        return b.nodeValue
                }
            else
                for (; c = b[e]; e++)
                    d += Qa(c);
            return d
        }

        Ja = B.isXML = function (b) {
            return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
        }

        Rb = B.contains = V.contains ? function (b, c) {
                var d = 9 === b.nodeType ? b.documentElement : b
                    , e = c && c.parentNode;
                return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
            }
            : V.compareDocumentPosition ? function (b, c) {
                    return c && !!(b.compareDocumentPosition(c) & 16)
                }
                : function (b, c) {
                    for (; c = c.parentNode;)
                        if (c === b)
                            return !0;
                    return !1
                }

        B.attr = function (b, c) {
            var d, e = Ja(b);
            return e || (c = c.toLowerCase()),
                (d = K.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c),
                    d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
        }

        K = B.selectors = {
            cacheLength: 50,
            createPseudo: X,
            match: Ma,
            attrHandle: ed ? {} : {
                href: function (b) {
                    return b.getAttribute("href", 2)
                },
                type: function (b) {
                    return b.getAttribute("type")
                }
            },
            find: {
                ID: lb ? function (b, c, d) {
                        if ("undefined" !== typeof c.getElementById && !d)
                            return (b = c.getElementById(b)) && b.parentNode ? [b] : []
                    }
                    : function (b, c, d) {
                        if ("undefined" !== typeof c.getElementById && !d)
                            return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
                    }
                ,
                TAG: dd ? function (b, c) {
                        if ("undefined" !== typeof c.getElementsByTagName)
                            return c.getElementsByTagName(b)
                    }
                    : function (b, c) {
                        var d = c.getElementsByTagName(b);
                        if ("*" === b) {
                            for (var e, g = [], f = 0; e = d[f]; f++)
                                1 === e.nodeType && g.push(e);
                            return g
                        }
                        return d
                    }
                ,
                NAME: gd && function (b, c) {
                    if ("undefined" !== typeof c.getElementsByName)
                        return c.getElementsByName(name)
                }
                ,
                CLASS: Sb && function (b, c, d) {
                    if ("undefined" !== typeof c.getElementsByClassName && !d)
                        return c.getElementsByClassName(b)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (b) {
                    return b[1] = b[1].replace(ia, ""),
                        b[3] = (b[4] || b[5] || "").replace(ia, ""),
                    "~=" === b[2] && (b[3] = " " + b[3] + " "),
                        b.slice(0, 4)
                },
                CHILD: function (b) {
                    return b[1] = b[1].toLowerCase(),
                        "nth" === b[1] ? (b[2] || B.error(b[0]),
                            b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])),
                            b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && B.error(b[0]),
                        b
                },
                PSEUDO: function (b) {
                    var c, d;
                    if (Ma.CHILD.test(b[0]))
                        return null;
                    if (b[3])
                        b[2] = b[3];
                    else if (c = b[4])
                        ad.test(c) && (d = Na(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d),
                            b[0] = b[0].slice(0, d)),
                            b[2] = c;
                    return b.slice(0, 3)
                }
            },
            filter: {
                ID: lb ? function (b) {
                        return b = b.replace(ia, ""),
                            function (c) {
                                return c.getAttribute("id") === b
                            }
                    }
                    : function (b) {
                        return b = b.replace(ia, ""),
                            function (c) {
                                return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                            }
                    }
                ,
                TAG: function (b) {
                    return "*" === b ? function () {
                            return !0
                        }
                        : (b = b.replace(ia, "").toLowerCase(),
                                function (c) {
                                    return c.nodeName && c.nodeName.toLowerCase() === b
                                }
                        )
                },
                CLASS: function (b) {
                    var c = Zb[F][b];
                    return c || (c = Zb(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                        function (b) {
                            return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                        }
                },
                ATTR: function (b, c, d) {
                    return function (e) {
                        e = B.attr(e, b);
                        return null == e ? "!=" === c : c ? (e += "",
                            "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (b, c, d, e) {
                    return "nth" === b ? function (b) {
                            var c, g;
                            c = b.parentNode;
                            if (1 === d && 0 === e)
                                return !0;
                            if (c) {
                                g = 0;
                                for (c = c.firstChild; c && !(1 === c.nodeType && (g++,
                                b === c)); c = c.nextSibling)

                            }
                            return g -= e,
                            g === d || 0 === g % d && 0 <= g / d
                        }
                        : function (c) {
                            var d = c;
                            switch (b) {
                                case "only":
                                case "first":
                                    for (; d = d.previousSibling;)
                                        if (1 === d.nodeType)
                                            return !1;
                                    if ("first" === b)
                                        return !0;
                                    d = c;
                                case "last":
                                    for (; d = d.nextSibling;)
                                        if (1 === d.nodeType)
                                            return !1;
                                    return !0
                            }
                        }
                },
                PSEUDO: function (b, c) {
                    var d, e = K.pseudos[b] || K.setFilters[b.toLowerCase()] || B.error("unsupported pseudo: " + b);
                    return e[F] ? e(c) : 1 < e.length ? (d = [b, b, "", c],
                            K.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function (b, d) {
                                for (var g, f = e(b, c), y = f.length; y--;)
                                    g = Wb.call(b, f[y]),
                                        b[g] = !(d[g] = f[y])
                            }) : function (b) {
                                return e(b, 0, d)
                            }
                    ) : e
                }
            },
            pseudos: {
                not: X(function (b) {
                    var c = []
                        , d = []
                        , e = kb(b.replace(Ka, "$1"));
                    return e[F] ? X(function (b, c, d, g) {
                        g = e(b, null, g, []);
                        for (var f = b.length; f--;)
                            if (d = g[f])
                                b[f] = !(c[f] = d)
                    }) : function (b, g, f) {
                        return c[0] = b,
                            e(c, null, f, d),
                            !d.pop()
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
                    return "input" === c && !!b.checked || "option" === c && !!b.selected
                },
                selected: function (b) {
                    return b.parentNode && b.parentNode.selectedIndex,
                    !0 === b.selected
                },
                parent: function (b) {
                    return !K.pseudos.empty(b)
                },
                empty: function (b) {
                    var c;
                    for (b = b.firstChild; b;) {
                        if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c)
                            return !1;
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
                eq: ha(function (b, c, d) {
                    return [0 > d ? d + c : d]
                }),
                even: ha(function (b, c) {
                    for (var d = 0; d < c; d += 2)
                        b.push(d);
                    return b
                }),
                odd: ha(function (b, c) {
                    for (var d = 1; d < c; d += 2)
                        b.push(d);
                    return b
                }),
                lt: ha(function (b, c, d) {
                    for (c = 0 > d ? d + c : d; 0 <= --c;)
                        b.push(c);
                    return b
                }),
                gt: ha(function (b, c, d) {
                    for (d = 0 > d ? d + c : d; ++d < c;)
                        b.push(d);
                    return b
                })
            }
        };
        mb = V.compareDocumentPosition ? function (b, c) {
                return b === c ? (wa = !0,
                    0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
            }
            : function (b, c) {
                if (b === c)
                    return wa = !0,
                        0;
                if (b.sourceIndex && c.sourceIndex)
                    return b.sourceIndex - c.sourceIndex;
                var d, e, g = [], f = [];
                d = b.parentNode;
                e = c.parentNode;
                var l = d;
                if (d === e)
                    return La(b, c);
                if (!d)
                    return -1;
                if (!e)
                    return 1;
                for (; l;)
                    g.unshift(l),
                        l = l.parentNode;
                for (l = e; l;)
                    f.unshift(l),
                        l = l.parentNode;
                d = g.length;
                e = f.length;
                for (l = 0; l < d && l < e; l++)
                    if (g[l] !== f[l])
                        return La(g[l], f[l]);
                return l === d ? La(b, f[l], -1) : La(g[l], c, 1)
            }

        [0, 0].sort(mb);
        Yb = !wa;
        B.uniqueSort = function (b) {
            var c, d = 1;
            wa = Yb;
            b.sort(mb);
            if (wa)
                for (; c = b[d]; d++)
                    c === b[d - 1] && b.splice(d--, 1);
            return b
        }

        B.error = function (b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        }

        kb = B.compile = function (b, c) {
            var d, e = [], g = [], f = $b[F][b];
            if (!f) {
                c || (c = Na(b));
                for (d = c.length; d--;)
                    f = ib(c[d]),
                        f[F] ? e.push(f) : g.push(f);
                var l = 0 < e.length
                    , j = 0 < g.length
                    , m = function (b, c, d, f, y) {
                    var t, r, s = [], q = 0, n = "0", A = b && [], v = null != y, p = Pa,
                        x = b || j && K.find.TAG("*", y && c.parentNode || c), H = va += null == p ? 1 : Math.E;
                    for (v && (Pa = c !== W && c,
                        eb = m.el); null != (y = x[n]); n++) {
                        if (j && y) {
                            for (t = 0; r = g[t]; t++)
                                if (r(y, c, d)) {
                                    f.push(y);
                                    break
                                }
                            v && (va = H,
                                eb = ++m.el)
                        }
                        l && ((y = !r && y) && q--,
                        b && A.push(y))
                    }
                    q += n;
                    if (l && n !== q) {
                        for (t = 0; r = e[t]; t++)
                            r(A, s, c, d);
                        if (b) {
                            if (0 < q)
                                for (; n--;)
                                    !A[n] && !s[n] && (s[n] = $c.call(f));
                            s = Oa(s)
                        }
                        na.apply(f, s);
                        v && !b && 0 < s.length && 1 < q + e.length && B.uniqueSort(f)
                    }
                    return v && (va = H,
                        Pa = p),
                        A
                };
                d = (m.el = 0,
                    l ? X(m) : m);
                f = $b(b, d)
            }
            return f
        }

        if (W.querySelectorAll) {
            var bc, hd = db, id = /'|\\/g, jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Y = [":focus"],
                Ra = [":active", ":focus"],
                Sa = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector || V.msMatchesSelector;
            ba(function (b) {
                b.innerHTML = "<select><option selected=''></option></select>";
                b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                b.querySelectorAll(":checked").length || Y.push(":checked")
            });
            ba(function (b) {
                b.innerHTML = "<p test=''></p>";
                b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
                b.innerHTML = "<input type='hidden'/>";
                b.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled")
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
                        for (l = f.length; l--;)
                            f[l] = m + f[l].join("");
                        l = jb.test(b) && c.parentNode || c;
                        f = f.join(",")
                    }
                    if (f)
                        try {
                            return na.apply(d, oa.call(l.querySelectorAll(f), 0)),
                                d
                        } catch (s) {
                        } finally {
                            j || c.removeAttribute("id")
                        }
                }
                return hd(b, c, d, e, g)
            }

            Sa && (ba(function (b) {
                    bc = Sa.call(b, "div");
                    try {
                        Sa.call(b, "[test!='']:sizzle"),
                            Ra.push("!=", ob)
                    } catch (c) {
                    }
                }),
                    Ra = RegExp(Ra.join("|")),
                    B.matchesSelector = function (b, c) {
                        c = c.replace(jd, "='$1']");
                        if (!Ja(b) && !Ra.test(c) && (!Y || !Y.test(c)))
                            try {
                                var d = Sa.call(b, c);
                                if (d || bc || b.document && 11 !== b.document.nodeType)
                                    return d
                            } catch (e) {
                            }
                        return 0 < B(c, null, null, [b]).length
                    }
            )
        }
        K.pseudos.nth = K.pseudos.eq;
        K.filters = Xb.prototype = K.pseudos;
        K.setFilters = new Xb;
        B.attr = g.attr;
        g.find = B;
        g.expr = B.selectors;
        g.expr[":"] = g.expr.pseudos;
        g.unique = B.uniqueSort;
        g.text = B.getText;
        g.isXMLDoc = B.isXML;
        g.contains = B.contains;
        var kd = /Until$/
            , ld = /^(?:parents|prev(?:Until|All))/
            , uc = /^.[^:#\[\.,]*$/
            , cc = g.expr.match.needsContext
            , md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        g.fn.extend({
            find: function (b) {
                var c, d, e, f, l, j, m = this;
                if ("string" != typeof b)
                    return g(b).filter(function () {
                        c = 0;
                        for (d = m.length; c < d; c++)
                            if (g.contains(m[c], this))
                                return !0
                    });
                j = this.pushStack("", "find", b);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (e = j.length,
                        g.find(b, this[c], j),
                    0 < c)
                        for (f = e; f < j.length; f++)
                            for (l = 0; l < e; l++)
                                if (j[l] === j[f]) {
                                    j.splice(f--, 1);
                                    break
                                }
                return j
            },
            has: function (b) {
                var c, d = g(b, this), e = d.length;
                return this.filter(function () {
                    for (c = 0; c < e; c++)
                        if (g.contains(this, d[c]))
                            return !0
                })
            },
            not: function (b) {
                return this.pushStack(q(this, b, !1), "not", b)
            },
            filter: function (b) {
                return this.pushStack(q(this, b, !0), "filter", b)
            },
            is: function (b) {
                return !!b && ("string" == typeof b ? cc.test(b) ? 0 <= g(b, this.context).index(this[0]) : 0 < g.filter(b, this).length : 0 < this.filter(b).length)
            },
            closest: function (b, c) {
                for (var d, e = 0, f = this.length, l = [], j = cc.test(b) || "string" != typeof b ? g(b, c || this.context) : 0; e < f; e++)
                    for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                        if (j ? -1 < j.index(d) : g.find.matchesSelector(d, b)) {
                            l.push(d);
                            break
                        }
                        d = d.parentNode
                    }
                return l = 1 < l.length ? g.unique(l) : l,
                    this.pushStack(l, "closest", b)
            },
            index: function (b) {
                return b ? "string" == typeof b ? g.inArray(this[0], g(b)) : g.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function (b, c) {
                var d = "string" == typeof b ? g(b, c) : g.makeArray(b && b.nodeType ? [b] : b)
                    , e = g.merge(this.get(), d);
                return this.pushStack(n(d[0]) || n(e[0]) ? e : g.unique(e))
            },
            addBack: function (b) {
                return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
            }
        });
        g.fn.andSelf = g.fn.addBack;
        g.each({
            parent: function (b) {
                return (b = b.parentNode) && 11 !== b.nodeType ? b : null
            },
            parents: function (b) {
                return g.dir(b, "parentNode")
            },
            parentsUntil: function (b, c, d) {
                return g.dir(b, "parentNode", d)
            },
            next: function (b) {
                return p(b, "nextSibling")
            },
            prev: function (b) {
                return p(b, "previousSibling")
            },
            nextAll: function (b) {
                return g.dir(b, "nextSibling")
            },
            prevAll: function (b) {
                return g.dir(b, "previousSibling")
            },
            nextUntil: function (b, c, d) {
                return g.dir(b, "nextSibling", d)
            },
            prevUntil: function (b, c, d) {
                return g.dir(b, "previousSibling", d)
            },
            siblings: function (b) {
                return g.sibling((b.parentNode || {}).firstChild, b)
            },
            children: function (b) {
                return g.sibling(b.firstChild)
            },
            contents: function (b) {
                return g.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : g.merge([], b.childNodes)
            }
        }, function (b, c) {
            g.fn[b] = function (d, e) {
                var f = g.map(this, c, d);
                return kd.test(b) || (e = d),
                e && "string" == typeof e && (f = g.filter(e, f)),
                    f = 1 < this.length && !md[b] ? g.unique(f) : f,
                1 < this.length && ld.test(b) && (f = f.reverse()),
                    this.pushStack(f, b, Z.call(arguments).join(","))
            }
        });
        g.extend({
            filter: function (b, c, d) {
                return d && (b = ":not(" + b + ")"),
                    1 === c.length ? g.find.matchesSelector(c[0], b) ? [c[0]] : [] : g.find.matches(b, c)
            },
            dir: function (b, d, e) {
                var f = [];
                for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !g(b).is(e));)
                    1 === b.nodeType && f.push(b),
                        b = b[d];
                return f
            },
            sibling: function (b, c) {
                for (var d = []; b; b = b.nextSibling)
                    1 === b.nodeType && b !== c && d.push(b);
                return d
            }
        });
        var vb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
            , nd = / jQuery\d+="(?:null|\d+)"/g
            , pb = /^\s+/
            , dc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
            , ec = /<([\w:]+)/
            , od = /<tbody/i
            , pd = /<|&#?\w+;/
            , qd = /<(?:script|style|link)/i
            , rd = /<(?:script|object|embed|option|style)/i
            , qb = RegExp("<(?:" + vb + ")[\\s/>]", "i")
            , wb = /^(?:checkbox|radio)$/
            , fc = /checked\s*(?:[^=]|=\s*.checked.)/i
            , sd = /\/(java|ecma)script/i
            , td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
            , U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }
            , gc = v(z)
            , rb = gc.appendChild(z.createElement("div"));
        U.optgroup = U.option;
        U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
        U.th = U.td;
        g.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
        g.fn.extend({
            text: function (b) {
                return g.access(this, function (b) {
                    return b === c ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(b))
                }, null, b, arguments.length)
            },
            wrapAll: function (b) {
                if (g.isFunction(b))
                    return this.each(function (c) {
                        g(this).wrapAll(b.call(this, c))
                    });
                if (this[0]) {
                    var c = g(b, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && c.insertBefore(this[0]);
                    c.map(function () {
                        for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;)
                            b = b.firstChild;
                        return b
                    }).append(this)
                }
                return this
            },
            wrapInner: function (b) {
                return g.isFunction(b) ? this.each(function (c) {
                    g(this).wrapInner(b.call(this, c))
                }) : this.each(function () {
                    var c = g(this)
                        , d = c.contents();
                    d.length ? d.wrapAll(b) : c.append(b)
                })
            },
            wrap: function (b) {
                var c = g.isFunction(b);
                return this.each(function (d) {
                    g(this).wrapAll(c ? b.call(this, d) : b)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (b) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (b) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
                })
            },
            before: function () {
                if (!n(this[0]))
                    return this.domManip(arguments, !1, function (b) {
                        this.parentNode.insertBefore(b, this)
                    });
                if (arguments.length) {
                    var b = g.clean(arguments);
                    return this.pushStack(g.merge(b, this), "before", this.selector)
                }
            },
            after: function () {
                if (!n(this[0]))
                    return this.domManip(arguments, !1, function (b) {
                        this.parentNode.insertBefore(b, this.nextSibling)
                    });
                if (arguments.length) {
                    var b = g.clean(arguments);
                    return this.pushStack(g.merge(this, b), "after", this.selector)
                }
            },
            remove: function (b, c) {
                for (var d, e = 0; null != (d = this[e]); e++)
                    if (!b || g.filter(b, [d]).length)
                        !c && 1 === d.nodeType && (g.cleanData(d.getElementsByTagName("*")),
                            g.cleanData([d])),
                        d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function () {
                for (var b, c = 0; null != (b = this[c]); c++)
                    for (1 === b.nodeType && g.cleanData(b.getElementsByTagName("*")); b.firstChild;)
                        b.removeChild(b.firstChild);
                return this
            },
            clone: function (b, c) {
                return b = null == b ? !1 : b,
                    c = null == c ? b : c,
                    this.map(function () {
                        return g.clone(this, b, c)
                    })
            },
            html: function (b) {
                return g.access(this, function (b) {
                    var d = this[0] || {}
                        , e = 0
                        , f = this.length;
                    if (b === c)
                        return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                    if ("string" == typeof b && !qd.test(b) && (g.support.htmlSerialize || !qb.test(b)) && (g.support.leadingWhitespace || !pb.test(b)) && !U[(ec.exec(b) || ["", ""])[1].toLowerCase()]) {
                        b = b.replace(dc, "<$1></$2>");
                        try {
                            for (; e < f; e++)
                                d = this[e] || {},
                                1 === d.nodeType && (g.cleanData(d.getElementsByTagName("*")),
                                    d.innerHTML = b);
                            d = 0
                        } catch (l) {
                        }
                    }
                    d && this.empty().append(b)
                }, null, b, arguments.length)
            },
            replaceWith: function (b) {
                return n(this[0]) ? this.length ? this.pushStack(g(g.isFunction(b) ? b() : b), "replaceWith", b) : this : g.isFunction(b) ? this.each(function (c) {
                    var d = g(this)
                        , e = d.html();
                    d.replaceWith(b.call(this, c, e))
                }) : ("string" != typeof b && (b = g(b).detach()),
                    this.each(function () {
                        var c = this.nextSibling
                            , d = this.parentNode;
                        g(this).remove();
                        c ? g(c).before(b) : g(d).append(b)
                    }))
            },
            detach: function (b) {
                return this.remove(b, !0)
            },
            domManip: function (b, d, e) {
                b = [].concat.apply([], b);
                var f, l, j, m = 0, s = b[0], q = [], n = this.length;
                if (!g.support.checkClone && 1 < n && "string" == typeof s && fc.test(s))
                    return this.each(function () {
                        g(this).domManip(b, d, e)
                    });
                if (g.isFunction(s))
                    return this.each(function (f) {
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
                        for (f = f.cacheable || n - 1; m < n; m++)
                            e.call(d && g.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === f ? j : g.clone(j, !0, !0))
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
                        }) : g.error("no ajax") : g.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                        c.parentNode && c.parentNode.removeChild(c)
                    })
                }
                return this
            }
        });
        g.buildFragment = function (b, d, e) {
            var f, l, j, m = b[0];
            return d = d || z,
                d = !d.nodeType && d[0] || d,
                d = d.ownerDocument || d,
            1 === b.length && "string" == typeof m && 512 > m.length && d === z && "<" === m.charAt(0) && !rd.test(m) && (g.support.checkClone || !fc.test(m)) && (g.support.html5Clone || !qb.test(m)) && (l = !0,
                f = g.fragments[m],
                j = f !== c),
            f || (f = d.createDocumentFragment(),
                g.clean(b, d, f, e),
            l && (g.fragments[m] = j && f)),
                {
                    fragment: f,
                    cacheable: l
                }
        }

        g.fragments = {};
        g.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (b, c) {
            g.fn[b] = function (d) {
                var e, f = 0, l = [];
                d = g(d);
                var j = d.length;
                e = 1 === this.length && this[0].parentNode;
                if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === j)
                    return d[c](this[0]),
                        this;
                for (; f < j; f++)
                    e = (0 < f ? this.clone(!0) : this).get(),
                        g(d[f])[c](e),
                        l = l.concat(e);
                return this.pushStack(l, b, d.selector)
            }
        });
        g.extend({
            clone: function (b, c, d) {
                var e, f, j, s;
                g.support.html5Clone || g.isXMLDoc(b) || !qb.test("<" + b.nodeName + ">") ? s = b.cloneNode(!0) : (rb.innerHTML = b.outerHTML,
                    rb.removeChild(s = rb.firstChild));
                if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !g.isXMLDoc(b)) {
                    l(b, s);
                    e = m(b);
                    f = m(s);
                    for (j = 0; e[j]; ++j)
                        f[j] && l(e[j], f[j])
                }
                if (c && (x(b, s),
                    d)) {
                    e = m(b);
                    f = m(s);
                    for (j = 0; e[j]; ++j)
                        x(e[j], f[j])
                }
                return s
            },
            clean: function (b, c, d, e) {
                var f, l, j, m, q, n, p, x = c === z && gc, H = [];
                if (!c || "undefined" == typeof c.createDocumentFragment)
                    c = z;
                for (f = 0; null != (j = b[f]); f++)
                    if ("number" == typeof j && (j += ""),
                        j) {
                        if ("string" == typeof j)
                            if (pd.test(j)) {
                                x = x || v(c);
                                n = c.createElement("div");
                                x.appendChild(n);
                                j = j.replace(dc, "<$1></$2>");
                                l = (ec.exec(j) || ["", ""])[1].toLowerCase();
                                m = U[l] || U._default;
                                q = m[0];
                                for (n.innerHTML = m[1] + j + m[2]; q--;)
                                    n = n.lastChild;
                                if (!g.support.tbody) {
                                    q = od.test(j);
                                    m = "table" === l && !q ? n.firstChild && n.firstChild.childNodes : "<table>" === m[1] && !q ? n.childNodes : [];
                                    for (l = m.length - 1; 0 <= l; --l)
                                        g.nodeName(m[l], "tbody") && !m[l].childNodes.length && m[l].parentNode.removeChild(m[l])
                                }
                                !g.support.leadingWhitespace && pb.test(j) && n.insertBefore(c.createTextNode(pb.exec(j)[0]), n.firstChild);
                                j = n.childNodes;
                                n.parentNode.removeChild(n)
                            } else
                                j = c.createTextNode(j);
                        j.nodeType ? H.push(j) : g.merge(H, j)
                    }
                n && (j = n = x = null);
                if (!g.support.appendChecked)
                    for (f = 0; null != (j = H[f]); f++)
                        g.nodeName(j, "input") ? s(j) : "undefined" != typeof j.getElementsByTagName && g.grep(j.getElementsByTagName("input"), s);
                if (d) {
                    b = function (b) {
                        if (!b.type || sd.test(b.type))
                            return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                    }

                    for (f = 0; null != (j = H[f]); f++)
                        if (!g.nodeName(j, "script") || !b(j))
                            d.appendChild(j),
                            "undefined" != typeof j.getElementsByTagName && (p = g.grep(g.merge([], j.getElementsByTagName("script")), b),
                                H.splice.apply(H, [f + 1, 0].concat(p)),
                                f += p.length)
                }
                return H
            },
            cleanData: function (b, c) {
                for (var d, e, f, l, j = 0, m = g.expando, s = g.cache, q = g.support.deleteExpando, n = g.event.special; null != (f = b[j]); j++)
                    if (c || g.acceptData(f))
                        if (d = (e = f[m]) && s[e]) {
                            if (d.events)
                                for (l in d.events)
                                    n[l] ? g.event.remove(f, l) : g.removeEvent(f, l, d.handle);
                            s[e] && (delete s[e],
                                q ? delete f[m] : f.removeAttribute ? f.removeAttribute(m) : f[m] = null,
                                g.deletedIds.push(e))
                        }
            }
        });
        var Ta, ca;
        g.uaMatch = function (b) {
            b = b.toLowerCase();
            b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }

        Ta = g.uaMatch(zc.userAgent);
        ca = {};
        Ta.browser && (ca[Ta.browser] = !0,
            ca.version = Ta.version);
        ca.chrome ? ca.webkit = !0 : ca.webkit && (ca.safari = !0);
        g.browser = ca;
        g.sub = function () {
            function b(c, d) {
                return new b.fn.init(c, d)
            }

            g.extend(!0, b, this);
            b.superclass = this;
            b.fn = b.prototype = this();
            b.fn.constructor = b;
            b.sub = this.sub;
            b.fn.init = function (d, e) {
                return e && e instanceof g && !(e instanceof b) && (e = b(e)),
                    g.fn.init.call(this, d, e, c)
            }

            b.fn.init.prototype = b.fn;
            var c = b(z);
            return b
        }

        var P, ka, la, sb = /alpha\([^)]*\)/i, ud = /opacity=([^)]*)/, vd = /^(top|right|bottom|left)$/,
            wd = /^(none|table(?!-c[ea]).+)/, hc = /^margin/, vc = RegExp("^(" + Da + ")(.*)$", "i"),
            xa = RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), xd = RegExp("^([-+])=(" + Da + ")", "i"), Xa = {}, yd = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, ic = {
                letterSpacing: 0,
                fontWeight: 400
            }, da = ["Top", "Right", "Bottom", "Left"], xb = ["Webkit", "O", "Moz", "ms"], zd = g.fn.toggle;
        g.fn.extend({
            css: function (b, d) {
                return g.access(this, function (b, d, e) {
                    return e !== c ? g.style(b, d, e) : g.css(b, d)
                }, b, d, 1 < arguments.length)
            },
            show: function () {
                return C(this, !0)
            },
            hide: function () {
                return C(this)
            },
            toggle: function (b, c) {
                var d = "boolean" == typeof b;
                return g.isFunction(b) && g.isFunction(c) ? zd.apply(this, arguments) : this.each(function () {
                    (d ? b : M(this)) ? g(this).show() : g(this).hide()
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
            cssProps: {
                "float": g.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (b, d, e, f) {
                if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                    var l, j, m, s = g.camelCase(d), q = b.style;
                    d = g.cssProps[s] || (g.cssProps[s] = H(q, s));
                    m = g.cssHooks[d] || g.cssHooks[s];
                    if (e === c)
                        return m && "get" in m && (l = m.get(b, !1, f)) !== c ? l : q[d];
                    j = typeof e;
                    "string" === j && (l = xd.exec(e)) && (e = (l[1] + 1) * l[2] + parseFloat(g.css(b, d)),
                        j = "number");
                    if (!(null == e || "number" === j && isNaN(e)))
                        if ("number" === j && !g.cssNumber[s] && (e += "px"),
                        !m || !("set" in m) || (e = m.set(b, e, f)) !== c)
                            try {
                                q[d] = e
                            } catch (n) {
                            }
                }
            },
            css: function (b, d, e, f) {
                var l, j, m, s = g.camelCase(d);
                return d = g.cssProps[s] || (g.cssProps[s] = H(b.style, s)),
                    m = g.cssHooks[d] || g.cssHooks[s],
                m && "get" in m && (l = m.get(b, !0, f)),
                l === c && (l = P(b, d)),
                "normal" === l && d in ic && (l = ic[d]),
                    e || f !== c ? (j = parseFloat(l),
                        e || g.isNumeric(j) ? j || 0 : l) : l
            },
            swap: function (b, c, d) {
                var e, g = {};
                for (e in c)
                    g[e] = b.style[e],
                        b.style[e] = c[e];
                d = d.call(b);
                for (e in c)
                    b.style[e] = g[e];
                return d
            }
        });
        b.getComputedStyle ? P = function (c, d) {
                var e, f, l, j, m = b.getComputedStyle(c, null), s = c.style;
                return m && (e = m[d],
                "" === e && !g.contains(c.ownerDocument, c) && (e = g.style(c, d)),
                xa.test(e) && hc.test(d) && (f = s.width,
                    l = s.minWidth,
                    j = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = e,
                    e = m.width,
                    s.width = f,
                    s.minWidth = l,
                    s.maxWidth = j)),
                    e
            }
            : z.documentElement.currentStyle && (P = function (b, c) {
                var d, e, g = b.currentStyle && b.currentStyle[c], f = b.style;
                return null == g && f && f[c] && (g = f[c]),
                xa.test(g) && !vd.test(c) && (d = f.left,
                    e = b.runtimeStyle && b.runtimeStyle.left,
                e && (b.runtimeStyle.left = b.currentStyle.left),
                    f.left = "fontSize" === c ? "1em" : g,
                    g = f.pixelLeft + "px",
                    f.left = d,
                e && (b.runtimeStyle.left = e)),
                    "" === g ? "auto" : g
            }
        );
        g.each(["height", "width"], function (b, c) {
            g.cssHooks[c] = {
                get: function (b, d, e) {
                    if (d)
                        return 0 === b.offsetWidth && wd.test(P(b, "display")) ? g.swap(b, yd, function () {
                            return D(b, c, e)
                        }) : D(b, c, e)
                },
                set: function (b, d, e) {
                    return I(b, d, e ? Wa(b, c, e, g.support.boxSizing && "border-box" === g.css(b, "boxSizing")) : 0)
                }
            }
        });
        g.support.opacity || (g.cssHooks.opacity = {
            get: function (b, c) {
                return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
            },
            set: function (b, c) {
                var d = b.style
                    , e = b.currentStyle
                    , f = g.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : ""
                    , l = e && e.filter || d.filter || "";
                d.zoom = 1;
                if (!(1 <= c && "" === g.trim(l.replace(sb, "")) && d.removeAttribute && (d.removeAttribute("filter"),
                e && !e.filter)))
                    d.filter = sb.test(l) ? l.replace(sb, f) : l + " " + f
            }
        });
        g(function () {
            g.support.reliableMarginRight || (g.cssHooks.marginRight = {
                get: function (b, c) {
                    return g.swap(b, {
                        display: "inline-block"
                    }, function () {
                        if (c)
                            return P(b, "marginRight")
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
                return 0 === b.offsetWidth && 0 === b.offsetHeight || !g.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || P(b, "display"))
            }
                ,
                g.expr.filters.visible = function (b) {
                    return !g.expr.filters.hidden(b)
                }
        );
        g.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (b, c) {
            g.cssHooks[b + c] = {
                expand: function (d) {
                    var e = "string" == typeof d ? d.split(" ") : [d]
                        , g = {};
                    for (d = 0; 4 > d; d++)
                        g[b + da[d] + c] = e[d] || e[d - 2] || e[0];
                    return g
                }
            };
            hc.test(b) || (g.cssHooks[b + c].set = I)
        });
        var Ad = /%20/g
            , wc = /\[\]$/
            , jc = /\r?\n/g
            ,
            Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
            , Cd = /^(?:select|textarea)/i;
        g.fn.extend({
            serialize: function () {
                return g.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? g.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
                }).map(function (b, c) {
                    var d = g(this).val();
                    return null == d ? null : g.isArray(d) ? g.map(d, function (b) {
                        return {
                            name: c.name,
                            value: b.replace(jc, "\r\n")
                        }
                    }) : {
                        name: c.name,
                        value: d.replace(jc, "\r\n")
                    }
                }).get()
            }
        });
        g.param = function (b, d) {
            var e, f = [], l = function (b, c) {
                c = g.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
            d === c && (d = g.ajaxSettings && g.ajaxSettings.traditional);
            if (g.isArray(b) || b.jquery && !g.isPlainObject(b))
                g.each(b, function () {
                    l(this.name, this.value)
                });
            else
                for (e in b)
                    L(e, b[e], d, l);
            return f.join("&").replace(Ad, "+")
        }

        var pa, ja, Dd = /#.*$/, Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Fd = /^(?:GET|HEAD)$/, Gd = /^\/\//, kc = /\?/,
            Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Id = /([?&])_=[^&]*/,
            lc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, mc = g.fn.load, Ya = {}, nc = {},
            oc = ["*/"] + ["*"];
        try {
            ja = yc.href
        } catch (Rd) {
            ja = z.createElement("a"),
                ja.href = "",
                ja = ja.href
        }
        pa = lc.exec(ja.toLowerCase()) || [];
        g.fn.load = function (b, d, e) {
            if ("string" != typeof b && mc)
                return mc.apply(this, arguments);
            if (!this.length)
                return this;
            var f, l, j, m = this, s = b.indexOf(" ");
            return 0 <= s && (f = b.slice(s, b.length),
                b = b.slice(0, s)),
                g.isFunction(d) ? (e = d,
                    d = c) : d && "object" == typeof d && (l = "POST"),
                g.ajax({
                    url: b,
                    type: l,
                    dataType: "html",
                    data: d,
                    complete: function (b, c) {
                        e && m.each(e, j || [b.responseText, c, b])
                    }
                }).done(function (b) {
                    j = arguments;
                    m.html(f ? g("<div>").append(b.replace(Hd, "")).find(f) : b)
                }),
                this
        }

        g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
            g.fn[c] = function (b) {
                return this.on(c, b)
            }
        });
        g.each(["get", "post"], function (b, d) {
            g[d] = function (b, e, f, l) {
                return g.isFunction(e) && (l = l || f,
                    f = e,
                    e = c),
                    g.ajax({
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
                return g.get(b, c, d, "script")
            },
            getJSON: function (b, c, d) {
                return g.get(b, c, d, "json")
            },
            ajaxSetup: function (b, c) {
                return c ? ra(b, g.ajaxSettings) : (c = b,
                    b = g.ajaxSettings),
                    ra(b, c),
                    b
            },
            ajaxSettings: {
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
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": b.String,
                    "text html": !0,
                    "text json": g.parseJSON,
                    "text xml": g.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: ya(Ya),
            ajaxTransport: ya(nc),
            ajax: function (b, d) {
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
                            for (Q in O)
                                Q in j && (t[O[Q]] = j[Q]);
                            for (; "*" === L[0];)
                                L.shift(),
                                T === c && (T = v.mimeType || t.getResponseHeader("content-type"));
                            if (T)
                                for (Q in K)
                                    if (K[Q] && K[Q].test(T)) {
                                        L.unshift(Q);
                                        break
                                    }
                            if (L[0] in j)
                                B = L[0];
                            else {
                                for (Q in j) {
                                    if (!L[0] || v.converters[Q + " " + L[0]]) {
                                        B = Q;
                                        break
                                    }
                                    J || (J = Q)
                                }
                                B = B || J
                            }
                            v = j = B ? (B !== L[0] && L.unshift(B),
                                j[B]) : void 0
                        }
                        if (200 <= b && 300 > b || 304 === b)
                            if (p.ifModified && (A = G.getResponseHeader("Last-Modified"),
                            A && (g.lastModified[f] = A),
                                A = G.getResponseHeader("Etag"),
                            A && (g.etag[f] = A)),
                            304 === b)
                                C = "notmodified",
                                    q = !0;
                            else {
                                var F;
                                a: {
                                    q = p;
                                    y = v;
                                    var N, C = q.dataTypes.slice();
                                    j = C[0];
                                    T = {};
                                    Q = 0;
                                    q.dataFilter && (y = q.dataFilter(y, q.dataType));
                                    if (C[1])
                                        for (F in q.converters)
                                            T[F.toLowerCase()] = q.converters[F];
                                    for (; r = C[++Q];)
                                        if ("*" !== r) {
                                            if ("*" !== j && j !== r) {
                                                F = T[j + " " + r] || T["* " + r];
                                                if (!F)
                                                    for (N in T)
                                                        if (A = N.split(" "),
                                                        A[1] === r && (F = T[j + " " + A[0]] || T["* " + A[0]])) {
                                                            !0 === F ? F = T[N] : !0 !== T[N] && (r = A[0],
                                                                C.splice(Q--, 0, r));
                                                            break
                                                        }
                                                if (!0 !== F)
                                                    if (F && q["throws"])
                                                        y = F(y);
                                                    else
                                                        try {
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
                                    F = {
                                        state: "success",
                                        data: y
                                    }
                                }
                                q = F;
                                C = q.state;
                                y = q.data;
                                r = q.error;
                                q = !r
                            }
                        else if (r = C,
                        !C || b)
                            C = "error",
                            0 > b && (b = 0);
                        G.status = b;
                        G.statusText = (d || C) + "";
                        q ? M.resolveWith(x, [y, C, G]) : M.rejectWith(x, [G, C, r]);
                        G.statusCode(I);
                        I = c;
                        n && H.trigger("ajax" + (q ? "Success" : "Error"), [G, p, q ? y : r]);
                        z.fireWith(x, [G, C]);
                        n && (H.trigger("ajaxComplete", [G, p]),
                        --g.active || g.event.trigger("ajaxStop"))
                    }
                }

                "object" == typeof b && (d = b,
                    b = c);
                d = d || {};
                var f, l, j, m, s, q, n, v, p = g.ajaxSetup({}, d), x = p.context || p,
                    H = x !== p && (x.nodeType || x instanceof g) ? g(x) : g.event, M = g.Deferred(),
                    z = g.Callbacks("once memory"), I = p.statusCode || {}, C = {}, B = {}, D = 0, J = "canceled", G = {
                        readyState: 0,
                        setRequestHeader: function (b, c) {
                            if (!D) {
                                var d = b.toLowerCase();
                                b = B[d] = B[d] || b;
                                C[b] = c
                            }
                            return this
                        },
                        getAllResponseHeaders: function () {
                            return 2 === D ? l : null
                        },
                        getResponseHeader: function (b) {
                            var d;
                            if (2 === D) {
                                if (!j)
                                    for (j = {}; d = Ed.exec(l);)
                                        j[d[1].toLowerCase()] = d[2];
                                d = j[b.toLowerCase()]
                            }
                            return d === c ? null : d
                        },
                        overrideMimeType: function (b) {
                            return D || (p.mimeType = b),
                                this
                        },
                        abort: function (b) {
                            return b = b || J,
                            m && m.abort(b),
                                e(0, b),
                                this
                        }
                    };
                M.promise(G);
                G.success = G.done;
                G.error = G.fail;
                G.complete = z.add;
                G.statusCode = function (b) {
                    if (b) {
                        var c;
                        if (2 > D)
                            for (c in b)
                                I[c] = [I[c], b[c]];
                        else
                            c = b[G.status],
                                G.always(c)
                    }
                    return this
                }

                p.url = ((b || p.url) + "").replace(Dd, "").replace(Gd, pa[1] + "//");
                p.dataTypes = g.trim(p.dataType || "*").toLowerCase().split(ea);
                null == p.crossDomain && (q = lc.exec(p.url.toLowerCase()) || !1,
                    p.crossDomain = q && q.join(":") + (q[3] ? "" : "http:" === q[1] ? 80 : 443) !== pa.join(":") + (pa[3] ? "" : "http:" === pa[1] ? 80 : 443));
                p.data && p.processData && "string" != typeof p.data && (p.data = g.param(p.data, p.traditional));
                ma(Ya, p, d, G);
                if (2 === D)
                    return G;
                n = p.global;
                p.type = p.type.toUpperCase();
                p.hasContent = !Fd.test(p.type);
                n && 0 === g.active++ && g.event.trigger("ajaxStart");
                if (!p.hasContent && (p.data && (p.url += (kc.test(p.url) ? "&" : "?") + p.data,
                    delete p.data),
                    f = p.url,
                !1 === p.cache)) {
                    q = g.now();
                    var K = p.url.replace(Id, "$1_=" + q);
                    p.url = K + (K === p.url ? (kc.test(p.url) ? "&" : "?") + "_=" + q : "")
                }
                (p.data && p.hasContent && !1 !== p.contentType || d.contentType) && G.setRequestHeader("Content-Type", p.contentType);
                p.ifModified && (f = f || p.url,
                g.lastModified[f] && G.setRequestHeader("If-Modified-Since", g.lastModified[f]),
                g.etag[f] && G.setRequestHeader("If-None-Match", g.etag[f]));
                G.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + oc + "; q=0.01" : "") : p.accepts["*"]);
                for (v in p.headers)
                    G.setRequestHeader(v, p.headers[v]);
                if (!p.beforeSend || !1 !== p.beforeSend.call(x, G, p) && 2 !== D) {
                    J = "abort";
                    for (v in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        G[v](p[v]);
                    if (m = ma(nc, p, d, G)) {
                        G.readyState = 1;
                        n && H.trigger("ajaxSend", [G, p]);
                        p.async && 0 < p.timeout && (s = setTimeout(function () {
                            G.abort("timeout")
                        }, p.timeout));
                        try {
                            D = 1,
                                m.send(C, e)
                        } catch (L) {
                            if (2 > D)
                                e(-1, L);
                            else
                                throw L;
                        }
                    } else
                        e(-1, "No Transport");
                    return G
                }
                return G.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var pc = []
            , Jd = /\?/
            , Ua = /(=)\?(?=&|$)|\?\?/
            , Kd = g.now();
        g.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var b = pc.pop() || g.expando + "_" + Kd++;
                return this[b] = !0,
                    b
            }
        });
        g.ajaxPrefilter("json jsonp", function (d, e, f) {
            var l, j, m, s = d.data, q = d.url, n = !1 !== d.jsonp, p = n && Ua.test(q),
                v = n && !p && "string" == typeof s && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Ua.test(s);
            if ("jsonp" === d.dataTypes[0] || p || v)
                return l = d.jsonpCallback = g.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback,
                    j = b[l],
                    p ? d.url = q.replace(Ua, "$1" + l) : v ? d.data = s.replace(Ua, "$1" + l) : n && (d.url += (Jd.test(q) ? "&" : "?") + d.jsonp + "=" + l),
                    d.converters["script json"] = function () {
                        return m || g.error(l + " was not called"),
                            m[0]
                    }
                    ,
                    d.dataTypes[0] = "json",
                    b[l] = function () {
                        m = arguments
                    }
                    ,
                    f.always(function () {
                        b[l] = j;
                        d[l] && (d.jsonpCallback = e.jsonpCallback,
                            pc.push(l));
                        m && g.isFunction(j) && j(m[0]);
                        m = j = c
                    }),
                    "script"
        });
        g.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (b) {
                    return g.globalEval(b),
                        b
                }
            }
        });
        g.ajaxPrefilter("script", function (b) {
            b.cache === c && (b.cache = !1);
            b.crossDomain && (b.type = "GET",
                b.global = !1)
        });
        g.ajaxTransport("script", function (b) {
            if (b.crossDomain) {
                var d, e = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
                return {
                    send: function (g, f) {
                        d = z.createElement("script");
                        d.async = "async";
                        b.scriptCharset && (d.charset = b.scriptCharset);
                        d.src = b.url;
                        d.onload = d.onreadystatechange = function (b, g) {
                            if (g || !d.readyState || /loaded|complete/.test(d.readyState))
                                d.onload = d.onreadystatechange = null,
                                e && d.parentNode && e.removeChild(d),
                                    d = c,
                                g || f(200, "success")
                        }

                        e.insertBefore(d, e.firstChild)
                    },
                    abort: function () {
                        d && d.onload(0, 1)
                    }
                }
            }
        });
        var qa, tb = b.ActiveXObject ? function () {
                for (var b in qa)
                    qa[b](0, 1)
            }
            : !1, Ld = 0;
        g.ajaxSettings.xhr = b.ActiveXObject ? function () {
                var c;
                if (!(c = !this.isLocal && yb()))
                    a: {
                        try {
                            c = new b.ActiveXObject("Microsoft.XMLHTTP");
                            break a
                        } catch (d) {
                        }
                        c = void 0
                    }
                return c
            }
            : yb;
        var ub = g.ajaxSettings.xhr();
        g.extend(g.support, {
            ajax: !!ub,
            cors: !!ub && "withCredentials" in ub
        });
        g.support.ajax && g.ajaxTransport(function (d) {
            if (!d.crossDomain || g.support.cors) {
                var e;
                return {
                    send: function (f, l) {
                        var j, m, s = d.xhr();
                        d.username ? s.open(d.type, d.url, d.async, d.username, d.password) : s.open(d.type, d.url, d.async);
                        if (d.xhrFields)
                            for (m in d.xhrFields)
                                s[m] = d.xhrFields[m];
                        d.mimeType && s.overrideMimeType && s.overrideMimeType(d.mimeType);
                        !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (m in f)
                                s.setRequestHeader(m, f[m])
                        } catch (q) {
                        }
                        s.send(d.hasContent && d.data || null);
                        e = function (b, f) {
                            var m, q, r, n, p;
                            try {
                                if (e && (f || 4 === s.readyState))
                                    if (e = c,
                                    j && (s.onreadystatechange = g.noop,
                                    tb && delete qa[j]),
                                        f)
                                        4 !== s.readyState && s.abort();
                                    else {
                                        m = s.status;
                                        r = s.getAllResponseHeaders();
                                        n = {};
                                        (p = s.responseXML) && p.documentElement && (n.xml = p);
                                        try {
                                            n.text = s.responseText
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
                        }

                        d.async ? 4 === s.readyState ? setTimeout(e, 0) : (j = ++Ld,
                        tb && (qa || (qa = {},
                            g(b).unload(tb)),
                            qa[j] = e),
                            s.onreadystatechange = e) : e()
                    },
                    abort: function () {
                        e && e(0, 1)
                    }
                }
            }
        });
        var za, Va, Md = /^(?:toggle|show|hide)$/, Nd = RegExp("^(?:([-+])=|)(" + Da + ")([a-z%]*)$", "i"),
            Od = /queueHooks$/, Aa = [function (b, c, d) {
                var e, f, l, j, m, s, q = this, n = b.style, p = {}, v = [], x = b.nodeType && M(b);
                d.queue || (m = g._queueHooks(b, "fx"),
                null == m.unqueued && (m.unqueued = 0,
                        s = m.empty.fire,
                        m.empty.fire = function () {
                            m.unqueued || s()
                        }
                ),
                    m.unqueued++,
                    q.always(function () {
                        q.always(function () {
                            m.unqueued--;
                            g.queue(b, "fx").length || m.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [n.overflow, n.overflowX, n.overflowY],
                "inline" === g.css(b, "display") && "none" === g.css(b, "float") && (!g.support.inlineBlockNeedsLayout || "inline" === O(b.nodeName) ? n.display = "inline-block" : n.zoom = 1));
                d.overflow && (n.overflow = "hidden",
                g.support.shrinkWrapBlocks || q.done(function () {
                    n.overflow = d.overflow[0];
                    n.overflowX = d.overflow[1];
                    n.overflowY = d.overflow[2]
                }));
                for (e in c)
                    f = c[e],
                    Md.exec(f) && (delete c[e],
                    f !== (x ? "hide" : "show") && v.push(e));
                if (f = v.length) {
                    l = g._data(b, "fxshow") || g._data(b, "fxshow", {});
                    x ? g(b).show() : q.done(function () {
                        g(b).hide()
                    });
                    q.done(function () {
                        var c;
                        g.removeData(b, "fxshow", !0);
                        for (c in p)
                            g.style(b, c, p[c])
                    });
                    for (e = 0; e < f; e++)
                        c = v[e],
                            j = q.createTween(c, x ? l[c] : 0),
                            p[c] = l[c] || g.style(b, c),
                        c in l || (l[c] = j.start,
                        x && (j.end = j.start,
                            j.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
            ], sa = {
                "*": [function (b, c) {
                    var d, e, f = this.createTween(b, c), l = Nd.exec(c), j = f.cur(), m = +j || 0, s = 1, q = 20;
                    if (l) {
                        d = +l[2];
                        e = l[3] || (g.cssNumber[b] ? "" : "px");
                        if ("px" !== e && m) {
                            m = g.css(f.elem, b, !0) || d || 1;
                            do
                                s = s || ".5",
                                    m /= s,
                                    g.style(f.elem, b, m + e);
                            while (s !== (s = f.cur() / j) && 1 !== s && --q)
                        }
                        f.unit = e;
                        f.start = m;
                        f.end = l[1] ? m + (l[1] + 1) * d : d
                    }
                    return f
                }
                ]
            };
        g.Animation = g.extend(Ab, {
            tweener: function (b, c) {
                g.isFunction(b) ? (c = b,
                    b = ["*"]) : b = b.split(" ");
                for (var d, e = 0, f = b.length; e < f; e++)
                    d = b[e],
                        sa[d] = sa[d] || [],
                        sa[d].unshift(c)
            },
            prefilter: function (b, c) {
                c ? Aa.unshift(b) : Aa.push(b)
            }
        });
        g.Tween = R;
        R.prototype = {
            constructor: R,
            init: function (b, c, d, e, f, l) {
                this.elem = b;
                this.prop = d;
                this.easing = f || "swing";
                this.options = c;
                this.start = this.now = this.cur();
                this.end = e;
                this.unit = l || (g.cssNumber[d] ? "" : "px")
            },
            cur: function () {
                var b = R.propHooks[this.prop];
                return b && b.get ? b.get(this) : R.propHooks._default.get(this)
            },
            run: function (b) {
                var c, d = R.propHooks[this.prop];
                return this.options.duration ? this.pos = c = g.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b,
                    this.now = (this.end - this.start) * c + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    d && d.set ? d.set(this) : R.propHooks._default.set(this),
                    this
            }
        };
        R.prototype.init.prototype = R.prototype;
        R.propHooks = {
            _default: {
                get: function (b) {
                    var c;
                    return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = g.css(b.elem, b.prop, !1, ""),
                        !c || "auto" === c ? 0 : c) : b.elem[b.prop]
                },
                set: function (b) {
                    g.fx.step[b.prop] ? g.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[g.cssProps[b.prop]] || g.cssHooks[b.prop]) ? g.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
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
                return this.filter(M).css("opacity", 0).show().end().animate({
                    opacity: c
                }, b, d, e)
            },
            animate: function (b, c, d, e) {
                var f = g.isEmptyObject(b)
                    , l = g.speed(c, d, e);
                c = function () {
                    var c = Ab(this, g.extend({}, b), l);
                    f && c.stop(!0)
                }

                return f || !1 === l.queue ? this.each(c) : this.queue(l.queue, c)
            },
            stop: function (b, d, e) {
                var f = function (b) {
                    var c = b.stop;
                    delete b.stop;
                    c(e)
                };
                return "string" != typeof b && (e = d,
                    d = b,
                    b = c),
                d && !1 !== b && this.queue(b || "fx", []),
                    this.each(function () {
                        var c = !0
                            , d = null != b && b + "queueHooks"
                            , l = g.timers
                            , j = g._data(this);
                        if (d)
                            j[d] && j[d].stop && f(j[d]);
                        else
                            for (d in j)
                                j[d] && j[d].stop && Od.test(d) && f(j[d]);
                        for (d = l.length; d--;)
                            l[d].elem === this && (null == b || l[d].queue === b) && (l[d].anim.stop(e),
                                c = !1,
                                l.splice(d, 1));
                        (c || !e) && g.dequeue(this, b)
                    })
            }
        });
        g.each({
            slideDown: Ba("show"),
            slideUp: Ba("hide"),
            slideToggle: Ba("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (b, c) {
            g.fn[b] = function (b, d, e) {
                return this.animate(c, b, d, e)
            }
        });
        g.speed = function (b, c, d) {
            var e = b && "object" == typeof b ? g.extend({}, b) : {
                complete: d || !d && c || g.isFunction(b) && b,
                duration: b,
                easing: d && c || c && !g.isFunction(c) && c
            };
            e.duration = g.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in g.fx.speeds ? g.fx.speeds[e.duration] : g.fx.speeds._default;
            if (null == e.queue || !0 === e.queue)
                e.queue = "fx";
            return e.old = e.complete,
                e.complete = function () {
                    g.isFunction(e.old) && e.old.call(this);
                    e.queue && g.dequeue(this, e.queue)
                }
                ,
                e
        }

        g.easing = {
            linear: function (b) {
                return b
            },
            swing: function (b) {
                return 0.5 - Math.cos(b * Math.PI) / 2
            }
        };
        g.timers = [];
        g.fx = R.prototype.init;
        g.fx.tick = function () {
            for (var b, c = g.timers, d = 0; d < c.length; d++)
                b = c[d],
                !b() && c[d] === b && c.splice(d--, 1);
            c.length || g.fx.stop()
        }

        g.fx.timer = function (b) {
            b() && g.timers.push(b) && !Va && (Va = setInterval(g.fx.tick, g.fx.interval))
        }

        g.fx.interval = 13;
        g.fx.stop = function () {
            clearInterval(Va);
            Va = null
        }

        g.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        g.fx.step = {};
        g.expr && g.expr.filters && (g.expr.filters.animated = function (b) {
                return g.grep(g.timers, function (c) {
                    return b === c.elem
                }).length
            }
        );
        var qc = /^(?:body|html)$/i;
        g.fn.offset = function (b) {
            if (arguments.length)
                return b === c ? this : this.each(function (c) {
                    g.offset.setOffset(this, b, c)
                });
            var d, e, f, l, j, m, s, q = {
                top: 0,
                left: 0
            }, n = this[0], p = n && n.ownerDocument;
            if (p)
                return (e = p.body) === n ? g.offset.bodyOffset(n) : (d = p.documentElement,
                    g.contains(d, n) ? ("undefined" != typeof n.getBoundingClientRect && (q = n.getBoundingClientRect()),
                        f = Bb(p),
                        l = d.clientTop || e.clientTop || 0,
                        j = d.clientLeft || e.clientLeft || 0,
                        m = f.pageYOffset || d.scrollTop,
                        s = f.pageXOffset || d.scrollLeft,
                        {
                            top: q.top + m - l,
                            left: q.left + s - j
                        }) : q)
        }

        g.offset = {
            bodyOffset: function (b) {
                var c = b.offsetTop
                    , d = b.offsetLeft;
                return g.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(g.css(b, "marginTop")) || 0,
                    d += parseFloat(g.css(b, "marginLeft")) || 0),
                    {
                        top: c,
                        left: d
                    }
            },
            setOffset: function (b, c, d) {
                var e = g.css(b, "position");
                "static" === e && (b.style.position = "relative");
                var f = g(b), l = f.offset(), j = g.css(b, "top"), m = g.css(b, "left"), s = {}, q = {}, n, p;
                ("absolute" === e || "fixed" === e) && -1 < g.inArray("auto", [j, m]) ? (q = f.position(),
                    n = q.top,
                    p = q.left) : (n = parseFloat(j) || 0,
                    p = parseFloat(m) || 0);
                g.isFunction(c) && (c = c.call(b, d, l));
                null != c.top && (s.top = c.top - l.top + n);
                null != c.left && (s.left = c.left - l.left + p);
                "using" in c ? c.using.call(b, s) : f.css(s)
            }
        };
        g.fn.extend({
            position: function () {
                if (this[0]) {
                    var b = this[0]
                        , c = this.offsetParent()
                        , d = this.offset()
                        , e = qc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                    return d.top -= parseFloat(g.css(b, "marginTop")) || 0,
                        d.left -= parseFloat(g.css(b, "marginLeft")) || 0,
                        e.top += parseFloat(g.css(c[0], "borderTopWidth")) || 0,
                        e.left += parseFloat(g.css(c[0], "borderLeftWidth")) || 0,
                        {
                            top: d.top - e.top,
                            left: d.left - e.left
                        }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var b = this.offsetParent || z.body; b && !qc.test(b.nodeName) && "static" === g.css(b, "position");)
                        b = b.offsetParent;
                    return b || z.body
                })
            }
        });
        g.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (b, d) {
            var e = /Y/.test(d);
            g.fn[b] = function (f) {
                return g.access(this, function (b, f, l) {
                    var j = Bb(b);
                    if (l === c)
                        return j ? d in j ? j[d] : j.document.documentElement[f] : b[f];
                    j ? j.scrollTo(e ? g(j).scrollLeft() : l, e ? l : g(j).scrollTop()) : b[f] = l
                }, b, f, arguments.length, null)
            }
        });
        g.each({
            Height: "height",
            Width: "width"
        }, function (b, d) {
            g.each({
                padding: "inner" + b,
                content: d,
                "": "outer" + b
            }, function (e, f) {
                g.fn[f] = function (f, l) {
                    var j = arguments.length && (e || "boolean" != typeof f)
                        , m = e || (!0 === f || !0 === l ? "margin" : "border");
                    return g.access(this, function (d, e, f) {
                        var l;
                        return g.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (l = d.documentElement,
                            Math.max(d.body["scroll" + b], l["scroll" + b], d.body["offset" + b], l["offset" + b], l["client" + b])) : f === c ? g.css(d, e, f, m) : g.style(d, e, f, m)
                    }, d, j ? f : c, j, null)
                }
            })
        });
        b.jQuery = b.$ = g;
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return g
        })
    }
)(window);
var portraitMode = !0, mobilePortraitWidth = 480, mobilePortraitHeight = 640, mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480, mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight, desktopWidth = 640, desktopHeight = 640,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {}, coreDivsToResize = ["game", "play", "orientate"];

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++)
        ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w),
            $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW),
            $("#" + coreDivsToResize[i]).height(destH),
            $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize)
        try {
            $("#" + key).width(w),
                $("#" + key).height(h),
                $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2),
                $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
        } catch (c) {
            console.log(c)
        }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}

var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth),
            destW = mobileWidth * multiplier,
            destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth),
            destW = desktopWidth * multiplier,
            destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        ig.ua.mobile || $("#tempdiv").hide();
        for (var b = navigator.userAgent.split(" "), c = null, d = 0; d < b.length; d++)
            "Version/" == b[d].substr(0, 8) && (c = b[d]);
        b = window.chrome;
        -1 < navigator.userAgent.indexOf("Chrome") && null == c ? ig.ua.mobile && null !== b && void 0 !== b && $(window) && (c = document.getElementById("scrollDown"),
            c.src = "media/graphics/orientate/scroll_down.png",
            c.style.height = "40%",
            c.style.width = "20%",
            c.style.backgroundColor = "rgba(11,156,49,0.4)",
        0 == window.orientation && $("#scrollDown").hide(),
        90 == Math.abs(window.orientation) && (c = document.body.offsetHeight,
        c < minHeight && (minHeight = c),
            c = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
            b = document.getElementById("tempdiv"),
            c = c.clientHeight + b.clientHeight,
            console.log(c + "," + minHeight),
            c > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()),
            $(window).on("orientationchange", function () {
                0 == window.orientation && $("#scrollDown").hide();
                Math.abs(window.orientation);
                $("#scrollDown").show();
                0 == window.orientation && $("#scrollDown").hide()
            }),
            window.addEventListener("resize", function () {
                0 == window.orientation && $("#scrollDown").hide();
                if (90 == Math.abs(window.orientation)) {
                    var b = portraitMode ? document.getElementById("orientate") : document.getElementById("game")
                        , c = document.getElementById("tempdiv");
                    b.clientHeight + c.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
                }
            })) : ($("#scrollDown").hide(),
            $("#tempdiv").hide())
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(),
        $("#game").hide()) : ($("#orientate").hide(),
        $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function (b) {
        b.preventDefault();
        return !1
    }, !1),
        document.addEventListener("touchmove", function (b) {
            b.preventDefault();
            return !1
        }, !1),
        document.addEventListener("touchend", function (b) {
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
}

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}

var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b)
            return decodeURIComponent(e[1])
    }
}

this.jukebox = {};
jukebox.Player = function (b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults)
        this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b)
            this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource)
        throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
}
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function () {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this),
            this.__wasAddedToManager = !0)
    },
    __init: function () {
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
            for (e in this.HTML5API)
                this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay],
                this.backgroundMusic.started = Date.now ? Date.now() : +new Date,
                this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function () {
                null !== b.isPlaying && (b.pause(),
                    b.__wasAutoPaused = !0)
            }),
                window.addEventListener("pageshow", function () {
                    b.__wasAutoPaused && (b.resume(),
                        delete b._wasAutoPaused)
                }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI)
                this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else
            throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function (b) {
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
            for (e in f)
                b = document.createElement("param"),
                    b.setAttribute("name", e),
                    b.setAttribute("value", f[e]),
                    j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            f.play = !1;
            f.loop = !1;
            f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in f)
                c.setAttribute(e, f[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function () {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b,
                this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start,
                this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function (b, c) {
        if (null !== this.isPlaying && !0 !== c)
            void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap, e;
            if (void 0 !== d[b])
                e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var f in d)
                    if (e >= d[f].start && e <= d[f].end) {
                        b = f;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b],
            this.context.play && this.context.play(),
                this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function () {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function () {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function (b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b)
            return this.play(b),
                this.__lastPosition = null,
                !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function () {
            return this.context.volume || 1
        },
        setVolume: function (b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function () {
            return this.context.currentTime || 0
        },
        setCurrentTime: function (b) {
            try {
                return this.context.currentTime = b,
                    !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function () {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function (b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b),
                !0) : !1
        },
        getCurrentTime: function () {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function (b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox)
    throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults)
        this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b)
            this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function () {
        jukebox.Manager.loop()
    }, 20) : !0
}
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function () {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            }, {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            }, {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            }, {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            }, {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            }, {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            }, {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            }, {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            }, {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            }, {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            }, {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, e, f = 0, j = c.length; f < j; f++)
                if (e = c[f].e,
                c[f].m.length && "object" === typeof c[f].m)
                    for (var n = 0, p = c[f].m.length; n < p; n++)
                        if (d = c[f].m[n],
                        "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else
                            this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject)
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
                    this.features.flashaudio = !0
            } catch (q) {
            }
        !0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3",
            this.codecs.mpga = "audio/mpeg",
            this.codecs.mp4 = "audio/mp4",
            this.codecs.m4a = "audio/mp4",
            this.codecs["3gp"] = "audio/3gpp",
            this.codecs.amr = "audio/amr",
            this.features.volume = !0,
            this.features.channels = 1)
    },
    __getPlayerById: function (b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function (b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b)
                return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var f in c)
                d[f] = c[f];
            d.autoplay = !1;
            f = new jukebox.Player(d, b);
            f.isClone = !0;
            f.wasReady = !1;
            return this.__clones[f.id] = f
        }
        return null
    },
    loop: function () {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0]
                    , c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()),
                        this.add(d),
                        d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0],
                    c = this.__getPlayerById(b.origin),
                null !== c && c.play(b.pointer, !0),
                    this.__queue.splice(0, 1)),
                    this.__players)
                    b = this.__players[d],
                        c = b.getCurrentTime() || 0,
                        b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function (b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c]
                , f = e.match(/\.([^\.]*)$/)[1];
            if (f && this.codecs[f])
                return e
        }
        return null
    },
    add: function (b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++,
            this.__players[b.id] = b,
            !0) : !1
    },
    remove: function (b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--,
            delete this.__players[b.id],
            !0) : !1
    },
    addToQueue: function (b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }),
            !0) : !1
    }
};
(function () {
        var b = {}
            , c = null
            , d = !0
            , e = !1;
        if ("undefined" !== typeof AudioContext)
            c = new AudioContext;
        else if ("undefined" !== typeof webkitAudioContext)
            c = new webkitAudioContext;
        else if ("undefined" !== typeof Audio) {
            d = !1;
            try {
                new Audio
            } catch (f) {
                e = !0
            }
        } else
            d = !1,
                e = !0;
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
                b = parseFloat(b);
                if (0 <= b && 1 >= b) {
                    this._volume = b;
                    d && (j.gain.value = b);
                    for (var c in this._howls)
                        if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                            for (b = 0; b < this._howls[c]._audioNode.length; b++)
                                this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                    return this
                }
                return d ? j.gain.value : this._volume
            },
            mute: function () {
                this._setMuted(!0);
                return this
            },
            unmute: function () {
                this._setMuted(!1);
                return this
            },
            _setMuted: function (b) {
                this._muted = b;
                d && (j.gain.value = b ? 0 : this._volume);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (var e = 0; e < this._howls[c]._audioNode.length; e++)
                            this._howls[c]._audioNode[e].muted = b
            }
        };
        var p = new n
            , n = null;
        if (!e)
            var n = new Audio
                , q = {
                mp3: !!n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
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
            this._onload = [b.onload || function () {
            }
            ];
            this._onloaderror = [b.onloaderror || function () {
            }
            ];
            this._onend = [b.onend || function () {
            }
            ];
            this._onpause = [b.onpause || function () {
            }
            ];
            this._onplay = [b.onplay || function () {
            }
            ];
            this._onendTimer = [];
            this._webAudio = d && !this._buffer;
            this._audioNode = [];
            this._webAudio && this._setupAudioNode();
            p._howls.push(this);
            this.load()
        };
        v.prototype = {
            load: function () {
                var d = this
                    , f = null;
                if (!e) {
                    for (var j = 0; j < d._urls.length; j++) {
                        var n, v;
                        if (d._format)
                            n = d._format;
                        else if (v = d._urls[j].toLowerCase().split("?")[0],
                            n = (n = v.match(/.+\.([^?]+)(\?|$)/)) && 2 <= n.length ? n : v.match(/data\:audio\/([^?]+);/))
                            n = n[1];
                        else {
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
                            if (C in b)
                                d._duration = b[C].duration,
                                    x(d);
                            else {
                                var I = new XMLHttpRequest;
                                I.open("GET", C, !0);
                                I.responseType = "arraybuffer";
                                I.onload = function () {
                                    c.decodeAudioData(I.response, function (c) {
                                        c && (b[C] = c,
                                            x(d, c))
                                    }, function () {
                                        d.on("loaderror")
                                    })
                                }

                                I.onerror = function () {
                                    d._webAudio && (d._buffer = !0,
                                        d._webAudio = !1,
                                        d._audioNode = [],
                                        delete d._gainNode,
                                        d.load())
                                }

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
                                0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                    _default: [0, 1E3 * d._duration]
                                });
                                d._loaded || (d._loaded = !0,
                                    d.on("load"));
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
                return b ? (this.stop(),
                    this._urls = "string" === typeof b ? [b] : b,
                    this._loaded = !1,
                    this.load(),
                    this) : this._urls
            },
            play: function (d, e) {
                var f = this;
                "function" === typeof d && (e = d);
                if (!d || "function" === typeof d)
                    d = "_default";
                if (!f._loaded)
                    return f.on("load", function () {
                        f.play(d, e)
                    }),
                        f;
                if (!f._sprite[d])
                    return "function" === typeof e && e(),
                        f;
                f._inactiveNode(function (j) {
                    j._sprite = d;
                    var q = 0 < j._pos ? j._pos : f._sprite[d][0] / 1E3, n = f._sprite[d][1] / 1E3 - j._pos,
                        v = !(!f._loop && !f._sprite[d][2]),
                        x = "string" === typeof e ? e : Math.round(Date.now() * Math.random()) + "", D, O = {
                            id: x,
                            sprite: d,
                            loop: v
                        };
                    D = setTimeout(function () {
                        !f._webAudio && v && f.stop(O.id, O.timer).play(d, O.id);
                        f._webAudio && !v && (f._nodeById(O.id).paused = !0,
                            f._nodeById(O.id)._pos = 0);
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
                        L.bufferSource.buffer = b[f._src];
                        L.bufferSource.connect(L.panner);
                        L.bufferSource.loop = D[0];
                        D[0] && (L.bufferSource.loopStart = D[1],
                            L.bufferSource.loopEnd = D[1] + D[2]);
                        L.bufferSource.playbackRate.value = f._rate;
                        f._playStart = c.currentTime;
                        j.gain.value = f._volume;
                        "undefined" === typeof j.bufferSource.start ? j.bufferSource.noteGrainOn(0, q, n) : j.bufferSource.start(0, q, n)
                    } else if (4 === j.readyState)
                        j.id = x,
                            j.currentTime = q,
                            j.muted = p._muted,
                            j.volume = f._volume * p.volume(),
                            setTimeout(function () {
                                j.play()
                            }, 0);
                    else {
                        f._clearEndTimer(D);
                        var ya = d
                            , ma = e
                            , ra = function () {
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
            },
            pause: function (b, c) {
                var d = this;
                if (!d._loaded)
                    return d.on("play", function () {
                        d.pause(b)
                    }),
                        d;
                d._clearEndTimer(c || 0);
                var e = b ? d._nodeById(b) : d._activeNode();
                if (e)
                    if (e._pos = d.pos(null, b),
                        d._webAudio) {
                        if (!e.bufferSource || e.paused)
                            return d;
                        e.paused = !0;
                        "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                    } else
                        e.pause();
                d.on("pause");
                return d
            },
            stop: function (b, c) {
                var d = this;
                if (!d._loaded)
                    return d.on("play", function () {
                        d.stop(b)
                    }),
                        d;
                d._clearEndTimer(c || 0);
                var e = b ? d._nodeById(b) : d._activeNode();
                if (e)
                    if (e._pos = 0,
                        d._webAudio) {
                        if (!e.bufferSource || e.paused)
                            return d;
                        e.paused = !0;
                        "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                    } else
                        e.pause(),
                            e.currentTime = 0;
                return d
            },
            mute: function (b) {
                var c = this;
                if (!c._loaded)
                    return c.on("play", function () {
                        c.mute(b)
                    }),
                        c;
                var d = b ? c._nodeById(b) : c._activeNode();
                d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
                return c
            },
            unmute: function (b) {
                var c = this;
                if (!c._loaded)
                    return c.on("play", function () {
                        c.unmute(b)
                    }),
                        c;
                var d = b ? c._nodeById(b) : c._activeNode();
                d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
                return c
            },
            volume: function (b, c) {
                var d = this;
                b = parseFloat(b);
                if (0 <= b && 1 >= b) {
                    d._volume = b;
                    if (!d._loaded)
                        return d.on("play", function () {
                            d.volume(b, c)
                        }),
                            d;
                    var e = c ? d._nodeById(c) : d._activeNode();
                    e && (d._webAudio ? e.gain.value = b : e.volume = b * p.volume());
                    return d
                }
                return d._volume
            },
            loop: function (b) {
                return "boolean" === typeof b ? (this._loop = b,
                    this) : this._loop
            },
            sprite: function (b) {
                return "object" === typeof b ? (this._sprite = b,
                    this) : this._sprite
            },
            pos: function (b, d) {
                var e = this;
                if (!e._loaded)
                    return e.on("load", function () {
                        e.pos(b)
                    }),
                        "number" === typeof b ? e : e._pos || 0;
                b = parseFloat(b);
                var f = d ? e._nodeById(d) : e._activeNode();
                if (f)
                    return 0 <= b ? (e.pause(d),
                        f._pos = b,
                        e.play(f._sprite, d),
                        e) : e._webAudio ? f._pos + (c.currentTime - e._playStart) : f.currentTime;
                if (0 <= b)
                    return e;
                for (f = 0; f < e._audioNode.length; f++)
                    if (e._audioNode[f].paused && 4 === e._audioNode[f].readyState)
                        return e._webAudio ? e._audioNode[f]._pos : e._audioNode[f].currentTime
            },
            pos3d: function (b, c, d, e) {
                var f = this;
                c = "undefined" === typeof c || !c ? 0 : c;
                d = "undefined" === typeof d || !d ? -0.5 : d;
                if (!f._loaded)
                    return f.on("play", function () {
                        f.pos3d(b, c, d, e)
                    }),
                        f;
                if (0 <= b || 0 > b) {
                    if (f._webAudio) {
                        var j = e ? f._nodeById(e) : f._activeNode();
                        j && (f._pos3d = [b, c, d],
                            j.panner.setPosition(b, c, d))
                    }
                } else
                    return f._pos3d;
                return f
            },
            fade: function (b, c, d, e, f) {
                var j = this
                    , q = Math.abs(b - c)
                    , n = b > c ? "down" : "up"
                    , q = q / 0.01
                    , p = d / q;
                if (!j._loaded)
                    return j.on("load", function () {
                        j.fade(b, c, d, e, f)
                    }),
                        j;
                j.volume(b, f);
                for (var v = 1; v <= q; v++)
                    (function () {
                            var b = Math.round(1E3 * (j._volume + ("up" === n ? 0.01 : -0.01) * v)) / 1E3;
                            setTimeout(function () {
                                j.volume(b, f);
                                b === c && e && e()
                            }, p * v)
                        }
                    )()
            },
            fadeIn: function (b, c, d) {
                return this.volume(0).play().fade(0, b, c, d)
            },
            fadeOut: function (b, c, d, e) {
                var f = this;
                return f.fade(f._volume, b, c, function () {
                    d && d();
                    f.pause(e);
                    f.on("end")
                }, e)
            },
            _nodeById: function (b) {
                for (var c = this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                    if (this._audioNode[d].id === b) {
                        c = this._audioNode[d];
                        break
                    }
                return c
            },
            _activeNode: function () {
                for (var b = null, c = 0; c < this._audioNode.length; c++)
                    if (!this._audioNode[c].paused) {
                        b = this._audioNode[c];
                        break
                    }
                this._drainPool();
                return b
            },
            _inactiveNode: function (b) {
                for (var c = null, d = 0; d < this._audioNode.length; d++)
                    if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                        b(this._audioNode[d]);
                        c = !0;
                        break
                    }
                this._drainPool();
                if (!c) {
                    var e;
                    this._webAudio ? (e = this._setupAudioNode(),
                        b(e)) : (this.load(),
                        e = this._audioNode[this._audioNode.length - 1],
                        e.addEventListener("loadedmetadata", function () {
                            b(e)
                        }))
                }
            },
            _drainPool: function () {
                var b = 0, c;
                for (c = 0; c < this._audioNode.length; c++)
                    this._audioNode[c].paused && b++;
                for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--)
                    this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0),
                        b--,
                        this._audioNode.splice(c, 1))
            },
            _clearEndTimer: function (b) {
                b = this._onendTimer.indexOf(b);
                b = 0 <= b ? b : 0;
                this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
                    this._onendTimer.splice(b, 1))
            },
            _setupAudioNode: function () {
                var b = this._audioNode
                    , d = this._audioNode.length;
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
            },
            on: function (b, c) {
                var d = this["_on" + b];
                if ("function" === typeof c)
                    d.push(c);
                else
                    for (var e = 0; e < d.length; e++)
                        c ? d[e].call(this, c) : d[e].call(this);
                return this
            },
            off: function (b, c) {
                for (var d = this["_on" + b], e = c.toString(), f = 0; f < d.length; f++)
                    if (e === d[f].toString()) {
                        d.splice(f, 1);
                        break
                    }
                return this
            },
            unload: function () {
                for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++)
                    c[d].paused || this.stop(c[d].id),
                        this._webAudio ? c[d].disconnect(0) : c[d].src = "";
                c = p._howls.indexOf(this);
                null !== c && 0 <= c && p._howls.splice(c, 1);
                delete b[this._src]
            }
        };
        if (d)
            var x = function (b, c) {
                b._duration = c ? c.duration : b._duration;
                0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                    _default: [0, 1E3 * b._duration]
                });
                b._loaded || (b._loaded = !0,
                    b.on("load"));
                b._autoplay && b.play()
            };
        "function" === typeof define && define.amd && define(function () {
            return {
                Howler: p,
                Howl: v
            }
        });
        "undefined" !== typeof exports && (exports.Howler = p,
            exports.Howl = v);
        window.Howler = p;
        window.Howl = v
    }
)();
(function (b) {
        Number.prototype.map = function (b, c, d, e) {
            return d + (e - d) * ((this - b) / (c - b))
        }

        Number.prototype.limit = function (b, c) {
            return Math.min(c, Math.max(b, this))
        }

        Number.prototype.round = function (b) {
            b = Math.pow(10, b || 0);
            return Math.round(this * b) / b
        }

        Number.prototype.floor = function () {
            return Math.floor(this)
        }

        Number.prototype.ceil = function () {
            return Math.ceil(this)
        }

        Number.prototype.toInt = function () {
            return this | 0
        }

        Number.prototype.toRad = function () {
            return this / 180 * Math.PI
        }

        Number.prototype.toDeg = function () {
            return 180 * this / Math.PI
        }

        Array.prototype.erase = function (b) {
            for (var c = this.length; c--;)
                this[c] === b && this.splice(c, 1);
            return this
        }

        Array.prototype.random = function () {
            return this[Math.floor(Math.random() * this.length)]
        }

        Function.prototype.bind = Function.prototype.bind || function (b) {
            var c = this;
            return function () {
                var d = Array.prototype.slice.call(arguments);
                return c.apply(b || null, d)
            }
        }

        b.ig = {
            game: null,
            debug: null,
            version: "1.20",
            global: b,
            modules: {},
            resources: [],
            ready: !1,
            baked: !1,
            nocache: "",
            ua: {},
            prefix: b.ImpactPrefix || "",
            lib: "lib/",
            _current: null,
            _loadQueue: [],
            _waitForOnload: 0,
            $: function (b) {
                return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
            },
            $new: function (b) {
                return document.createElement(b)
            },
            copy: function (b) {
                if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class)
                    return b;
                if (b instanceof Array)
                    for (var c = [], d = 0, e = b.length; d < e; d++)
                        c[d] = ig.copy(b[d]);
                else
                    for (d in c = {},
                        b)
                        c[d] = ig.copy(b[d]);
                return c
            },
            merge: function (b, c) {
                for (var d in c) {
                    var e = c[d];
                    if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class)
                        b[d] = e;
                    else {
                        if (!b[d] || "object" != typeof b[d])
                            b[d] = e instanceof Array ? [] : {};
                        ig.merge(b[d], e)
                    }
                }
                return b
            },
            ksort: function (b) {
                if (!b || "object" != typeof b)
                    return [];
                var c = [], d = [], e;
                for (e in b)
                    c.push(e);
                c.sort();
                for (e = 0; e < c.length; e++)
                    d.push(b[c[e]]);
                return d
            },
            setVendorAttribute: function (b, c, d) {
                var e = c.charAt(0).toUpperCase() + c.substr(1);
                b[c] = b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
            },
            getVendorAttribute: function (b, c) {
                var d = c.charAt(0).toUpperCase() + c.substr(1);
                return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
            },
            normalizeVendorAttribute: function (b, c) {
                var d = ig.getVendorAttribute(b, c);
                !b[c] && d && (b[c] = d)
            },
            getImagePixels: function (b, c, d, e, f) {
                var j = ig.$new("canvas");
                j.width = b.width;
                j.height = b.height;
                var n = j.getContext("2d");
                ig.System.SCALE.CRISP(j, n);
                var p = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
                ig.normalizeVendorAttribute(n, "getImageDataHD");
                var C = b.width / p
                    , I = b.height / p;
                j.width = Math.ceil(C);
                j.height = Math.ceil(I);
                n.drawImage(b, 0, 0, C, I);
                return 1 === p ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f)
            },
            module: function (b) {
                if (ig._current)
                    throw "Module '" + ig._current.name + "' defines nothing";
                if (ig.modules[b] && ig.modules[b].body)
                    throw "Module '" + b + "' is already defined";
                ig._current = {
                    name: b,
                    requires: [],
                    loaded: !1,
                    body: null
                };
                ig.modules[b] = ig._current;
                ig._loadQueue.push(ig._current);
                return ig
            },
            requires: function () {
                ig._current.requires = Array.prototype.slice.call(arguments);
                return ig
            },
            defines: function (b) {
                ig._current.body = b;
                ig._current = null;
                ig._initDOMReady()
            },
            addResource: function (b) {
                ig.resources.push(b)
            },
            setNocache: function (b) {
                ig.nocache = b ? "?" + Date.now() : ""
            },
            log: function () {
            },
            assert: function () {
            },
            show: function () {
            },
            mark: function () {
            },
            _loadScript: function (b, c) {
                ig.modules[b] = {
                    name: b,
                    requires: [],
                    loaded: !1,
                    body: null
                };
                ig._waitForOnload++;
                var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache
                    , e = ig.$new("script");
                e.type = "text/javascript";
                e.src = d;
                e.onload = function () {
                    ig._waitForOnload--;
                    ig._execModules()
                }

                e.onerror = function () {
                    throw "Failed to load module " + b + " at " + d + " required from " + c;
                }

                ig.$("head")[0].appendChild(e)
            },
            _execModules: function () {
                for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                    for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
                        var j = d.requires[f];
                        ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1,
                            ig._loadScript(j, d.name))
                    }
                    e && d.body && (ig._loadQueue.splice(c, 1),
                        d.loaded = !0,
                        d.body(),
                        b = !0,
                        c--)
                }
                if (b)
                    ig._execModules();
                else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                    b = [];
                    for (c = 0; c < ig._loadQueue.length; c++) {
                        e = [];
                        j = ig._loadQueue[c].requires;
                        for (f = 0; f < j.length; f++)
                            d = ig.modules[j[f]],
                            (!d || !d.loaded) && e.push(j[f]);
                        b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                    }
                    throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + b.join("\n");
                }
            },
            _DOMReady: function () {
                if (!ig.modules["dom.ready"].loaded) {
                    if (!document.body)
                        return setTimeout(ig._DOMReady, 13);
                    ig.modules["dom.ready"].loaded = !0;
                    ig._waitForOnload--;
                    ig._execModules()
                }
                return 0
            },
            _boot: function () {
                document.location.href.match(/\?nocache/) && ig.setNocache(!0);
                ig.ua.pixelRatio = b.devicePixelRatio || 1;
                ig.ua.viewport = {
                    width: b.innerWidth,
                    height: b.innerHeight
                };
                ig.ua.screen = {
                    width: b.screen.availWidth * ig.ua.pixelRatio,
                    height: b.screen.availHeight * ig.ua.pixelRatio
                };
                ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
                ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
                ig.ua.iPad = /iPad/i.test(navigator.userAgent);
                ig.ua.android = /android/i.test(navigator.userAgent);
                ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
                ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
                ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
                ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
                ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
                ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
                ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
                ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
                ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
                ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
                ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
            },
            _initDOMReady: function () {
                ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(),
                    ig.modules["dom.ready"] = {
                        requires: [],
                        loaded: !1,
                        body: null
                    },
                    ig._waitForOnload++,
                    "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1),
                        b.addEventListener("load", ig._DOMReady, !1)))
            }
        };
        for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !b.requestAnimationFrame; d++)
            b.requestAnimationFrame = b[c[d] + "RequestAnimationFrame"];
        if (b.requestAnimationFrame) {
            var e = 1
                , f = {};
            b.ig.setAnimation = function (c, d) {
                var j = e++;
                f[j] = !0;
                var l = function () {
                    f[j] && (b.requestAnimationFrame(l, d),
                        c())
                };
                b.requestAnimationFrame(l, d);
                return j
            }

            b.ig.clearAnimation = function (b) {
                delete f[b]
            }
        } else
            b.ig.setAnimation = function (c) {
                return b.setInterval(c, 1E3 / 60)
            }
                ,
                b.ig.clearAnimation = function (c) {
                    b.clearInterval(c)
                }

        var j = !1
            , n = /xyz/.test(function () {
            xyz
        }) ? /\bparent\b/ : /.*/;
        b.ig.Class = function () {
        }

        var p = function (b) {
            var c = this.prototype, d = {}, e;
            for (e in b)
                "function" == typeof b[e] && "function" == typeof c[e] && n.test(b[e]) ? (d[e] = c[e],
                    c[e] = function (b, c) {
                        return function () {
                            var e = this.parent;
                            this.parent = d[b];
                            var f = c.apply(this, arguments);
                            this.parent = e;
                            return f
                        }
                    }(e, b[e])) : c[e] = b[e]
        };
        b.ig.Class.extend = function (c) {
            function d() {
                if (!j) {
                    if (this.staticInstantiate) {
                        var b = this.staticInstantiate.apply(this, arguments);
                        if (b)
                            return b
                    }
                    for (var c in this)
                        "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                    this.init && this.init.apply(this, arguments)
                }
                return this
            }

            var e = this.prototype;
            j = !0;
            var f = new this;
            j = !1;
            for (var m in c)
                f[m] = "function" == typeof c[m] && "function" == typeof e[m] && n.test(c[m]) ? function (b, c) {
                    return function () {
                        var d = this.parent;
                        this.parent = e[b];
                        var f = c.apply(this, arguments);
                        this.parent = d;
                        return f
                    }
                }(m, c[m]) : c[m];
            d.prototype = f;
            d.constructor = d;
            d.extend = b.ig.Class.extend;
            d.inject = p;
            return d
        }
    }
)(window);
ig.baked = !0;
ig.module("impact.image").defines(function () {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function (b) {
            return ig.Image.cache[b] || null
        },
        init: function (b) {
            this.path = b;
            this.load()
        },
        load: function (b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null,
                this.data = new Image,
                this.data.onload = this.onload.bind(this),
                this.data.onerror = this.onerror.bind(this),
                this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function () {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function () {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function () {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function (b) {
            var c = this.width * b
                , d = this.height * b
                , e = ig.$new("canvas");
            e.width = this.width;
            e.height = this.height;
            e = e.getContext("2d");
            e.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            var e = e.getImageData(0, 0, this.width, this.height)
                , f = ig.$new("canvas");
            f.width = c;
            f.height = d;
            for (var j = f.getContext("2d"), n = j.getImageData(0, 0, c, d), p = 0; p < d; p++)
                for (var q = 0; q < c; q++) {
                    var v = 4 * (Math.floor(p / b) * this.width + Math.floor(q / b))
                        , x = 4 * (p * c + q);
                    n.data[x] = e.data[v];
                    n.data[x + 1] = e.data[v + 1];
                    n.data[x + 2] = e.data[v + 2];
                    n.data[x + 3] = e.data[v + 3]
                }
            j.putImageData(n, 0, 0);
            this.data = f
        },
        draw: function (b, c, d, e, f, j) {
            if (this.loaded) {
                var n = ig.system.scale;
                f = (f ? f : this.width) * n;
                j = (j ? j : this.height) * n;
                ig.system.context.drawImage(this.data, d ? d * n : 0, e ? e * n : 0, f, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, j);
                ig.Image.drawCount++
            }
        },
        drawTile: function (b, c, d, e, f, j, n) {
            f = f ? f : e;
            if (this.loaded && !(e > this.width || f > this.height)) {
                var p = ig.system.scale
                    , q = Math.floor(e * p)
                    , v = Math.floor(f * p)
                    , x = j ? -1 : 1
                    , l = n ? -1 : 1;
                if (j || n)
                    ig.system.context.save(),
                        ig.system.context.scale(x, l);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * p, Math.floor(d * e / this.width) * f * p, q, v, ig.system.getDrawPos(b) * x - (j ? q : 0), ig.system.getDrawPos(c) * l - (n ? v : 0), q, v);
                (j || n) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function () {
        for (var b in ig.Image.cache)
            ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function () {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function (b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function (b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++)
                    c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function (b) {
            for (var c = 0, d = 0; d < b.length; d++)
                c += this.widthMap[b.charCodeAt(d) - this.firstChar] + this.letterSpacing;
            return c
        },
        heightForString: function (b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function (b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var f = this.height + this.lineSpacing, j = 0; j < b.length; j++)
                    this.draw(b[j], c, d + j * f, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER)
                    j = this._widthForLine(b),
                        c -= e == ig.Font.ALIGN.CENTER ? j / 2 : j;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (j = 0; j < b.length; j++)
                    e = b.charCodeAt(j),
                        c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function (b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length)
                return 0;
            var e = ig.system.scale
                , f = this.widthMap[b] * e
                , j = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, j);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function (b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
                var j = 4 * f + 3;
                0 != c.data[j] ? e++ : 0 == c.data[j] && e && (this.widthMap.push(e),
                    this.indices.push(f - e),
                    d++,
                    e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(f - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function () {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function () {
            for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                var d = ig.Sound.use[c];
                if (b.canPlayType(d.mime)) {
                    this.format = d;
                    break
                }
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function (b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var f = new Audio(e);
                        f.load();
                        this.clips[b].push(f)
                    }
                return this.clips[b][0]
            }
            var j = new Audio(e);
            d && (j.addEventListener("canplaythrough", function p(c) {
                j.removeEventListener("canplaythrough", p, !1);
                d(b, !0, c)
            }, !1),
                j.addEventListener("error", function (c) {
                    d(b, !0, c)
                }, !1));
            j.preload = "auto";
            j.load();
            this.clips[b] = [j];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++)
                    f = new Audio(e),
                        f.load(),
                        this.clips[b].push(f);
            return j
        },
        get: function (b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended)
                    return d.ended && (d.currentTime = 0),
                        d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }),
                Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)),
                this.__defineSetter__("volume", this.setVolume.bind(this)),
                this.__defineGetter__("loop", this.getLooping.bind(this)),
                this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function (b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function () {
            this.tracks.length && (this.stop(),
                this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length,
                this.currentTrack = this.tracks[this.currentIndex],
                this.play())
        },
        pause: function () {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function () {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch (b) {
                    console.log(b)
                }
            }
        },
        play: function (b) {
            if (b && this.namedTracks[b])
                b = this.namedTracks[b],
                b != this.currentTrack && (this.stop(),
                    this.currentTrack = b);
            else if (!this.currentTrack)
                return;
            this.currentTrack.play()
        },
        getLooping: function () {
            return this._loop
        },
        setLooping: function (b) {
            this._loop = b;
            for (var c in this.tracks)
                this.tracks[c].loop = b
        },
        getVolume: function () {
            return this._volume
        },
        setVolume: function (b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks)
                this.tracks[c].volume = this._volume
        },
        fadeOut: function (b) {
            this.currentTrack && (clearInterval(this._fadeInterval),
                this.fadeTimer = new ig.Timer(b),
                this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function () {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(),
                this.currentTrack.volume = this._volume,
                clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function () {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function (b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function (b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function () {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path),
                this.currentClip.volume = ig.soundManager.volume * this.volume,
                this.currentClip.play())
        },
        stop: function () {
            this.currentClip && (this.currentClip.pause(),
                this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function () {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function (b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++)
                this._unloaded.push(this.resources[d].path)
        },
        load: function () {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++)
                    this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else
                this.end()
        },
        loadResource: function (b) {
            b.load(this._loadCallbackBound)
        },
        end: function () {
            this.done || (this.done = !0,
                clearInterval(this._intervalId))
        },
        draw: function () {
        },
        _loadCallback: function (b, c) {
            if (c)
                this._unloaded.erase(b);
            else
                throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function () {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function (b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function (b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function () {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function () {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function () {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function () {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function () {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt,
                this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = 0;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function () {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function () {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (b, c, d, e, f) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, f);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode
        },
        resize: function (b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function (b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function (b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function (b) {
            if ("function" == typeof b.run)
                this.delegate = b,
                    this.startRunLoop();
            else
                throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function () {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function () {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function (b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function () {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass),
                this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function (b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function (b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function (b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function (b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function (b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function () {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function () {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1),
                    ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1),
                    ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1),
                    ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1),
                    ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1),
                    ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1),
                    ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function () {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0,
                window.addEventListener("keydown", this.keydown.bind(this), !1),
                window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function () {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function (b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0,
                this.presses[c] = !0,
                this.delayedKeyup[c] = !0,
                b.stopPropagation(),
                b.preventDefault())
        },
        mousemove: function (b) {
            for (var c = ig.system.canvas, d = 0, e = 0; null != c;)
                d += c.offsetLeft,
                    e += c.offsetTop,
                    c = c.offsetParent;
            var c = b.pageX
                , f = b.pageY;
            b.touches && (c = b.touches[0].clientX,
                f = b.touches[0].clientY);
            this.mouse.x = (c - d) / ig.system.scale;
            this.mouse.y = (f - e) / ig.system.scale
        },
        contextmenu: function (b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(),
                b.preventDefault())
        },
        keydown: function (b) {
            b.stopPropagation();
            b.preventDefault();
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1,
                0 > c && !ig.ua.mobile && window.focus(),
                ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b),
                    b = this.bindings[c])
                    this.actions[b] = !0,
                    this.locks[b] || (this.presses[b] = !0,
                        this.locks[b] = !0)
        },
        keyup: function (b) {
            if ("text" != b.target.type) {
                var c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1];
                c && (this.delayedKeyup[c] = !0,
                    b.stopPropagation(),
                    b.preventDefault())
            }
        },
        devicemotion: function (b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function (b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function (b, c) {
            var d = ig.$(b)
                , e = this;
            d.addEventListener("touchstart", function (b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function (b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function (b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function () {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function (b) {
            return this.actions[b]
        },
        pressed: function (b) {
            return this.presses[b]
        },
        released: function (b) {
            return this.delayedKeyup[b]
        },
        clearPressed: function () {
            for (var b in this.delayedKeyup)
                this.actions[b] = !1,
                    this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function (b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function (b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function () {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "button",
            path: "media/audio/sfx/button"
        }, {
            name: "hit",
            path: "media/audio/sfx/hit2"
        }, {
            name: "step",
            path: "media/audio/sfx/step"
        }, {
            name: "skate",
            path: "media/audio/sfx/skate"
        }, {
            name: "jump",
            path: "media/audio/sfx/jump2"
        }, {
            name: "slide",
            path: "media/audio/sfx/woosh"
        }, {
            name: "crunch",
            path: "media/audio/sfx/crunch"
        }, {
            name: "coin",
            path: "media/audio/sfx/ding"
        }, {
            name: "chirp",
            path: "media/audio/sfx/chirp"
        }],
        debug: !1,
        init: function () {
            this.initSfx();
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function () {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++)
                    this.voSoundLoaded[index].on("end", function (b) {
                        b.isPlaying = !1;
                        this.soundBuffer.pop()
                    }
                        .bind(this, this.voSoundLoaded[index])),
                        this.voSoundLoaded[index].on("play", function (b) {
                            b.isPlaying = !0
                        }
                            .bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function () {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function () {
            this.jukebox || this.setupJukebox();
            this.jukebox && (this.pausePosition = this.jukebox.player.pause(),
                this.bgmPlaying = !1)
        },
        playBackgroundMusic: function () {
            this.jukebox || this.setupJukebox();
            this.jukebox && (null != this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : (this.jukebox.player.resume(0),
                this.jukebox.player.play()),
                this.bgmPlaying = !0)
        },
        playSound: function (b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying)
                this.soundBuffer.push(b),
                    b.play()
        },
        stopAllAndPlaySound: function (b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function () {
            for (index = 0; index < this.soundBuffer.length; index++)
                this.soundBuffer[index].isPlaying = !1,
                    this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function (b, c, d) {
            var e = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [e, c],
                onload: d
            }) : new Howl({
                urls: [e, c]
            })
        },
        _muteSounds: function () {
            for (i = 0; i < ig.resources.length; i++)
                ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function () {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        focusBlurMute: function () {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function () {
            this.forceMuted || this.unmute()
        },
        setForceMuted: function (b) {
            this.forceMuted = b
        },
        mute: function () {
            this._muteSounds();
            this.jukebox && (this.jukebox.player.pause(),
                this.jukebox.player.setVolume(0.01));
            this.muted = !0
        },
        unmute: function () {
            this._unMuteSounds();
            if (this.jukebox && this.bgmPlaying) {
                this.jukebox.player.resume();
                var b = this.musicVolume;
                0 == b && (b = 0.01);
                this.jukebox.player.setVolume(b)
            }
            this.muted = !1
        },
        setupWindowHandler: function () {
            "true" === getQueryVariable("webview") ? ($(window).focus(function () {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }),
                $(window).blur(function () {
                    ig.game && ig.game.pauseGame();
                    ig.soundHandler && ig.soundHandler.focusBlurMute()
                })) : (window.onfocus = function () {
                    ig.game && ig.game.resumeGame();
                    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
                }
                    ,
                    window.onblur = function () {
                        ig.game && ig.game.pauseGame();
                        ig.soundHandler && ig.soundHandler.focusBlurMute()
                    }
            )
        },
        initSfx: function () {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function (b) {
                    this.sfxSoundLoaded.push(this[b])
                }
                    .bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function () {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function (b) {
                    this.voSoundLoaded.push(this[b])
                }
                    .bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function () {
            ig.music.add("media/audio/music/bgm.*", "background")
        },
        setupJukebox: function () {
            this.jukebox = new ig.Jukebox;
            this.jukebox.player.setVolume(0.01);
            this.stopBackgroundMusic()
        },
        forceLoopBGM: function () {
            if (this.bgmPlaying && !this.forceMuted && this.jukebox && this.jukebox.player)
                if (this.jukebox.player.getCurrentTime()) {
                    var b = 0.06;
                    ig.ua.mobile && (b = 0.06,
                    ig.ua.android && (b = 0.07));
                    this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end - b && (this.jukebox.player.pause(),
                        this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start)) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end - b && (this.jukebox.player.pause(),
                        this.jukebox.player.resume(this.jukebox.player.isPlaying.start)) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() >= this.jukebox.player.backgroundMusic.end - b && (this.jukebox.player.pause(),
                        this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start))
                } else
                    this.jukebox.player.resume()
        },
        setSfxVolume: function (b) {
            this.sfxVolume = b;
            Howler.volume(this.sfxVolume)
        },
        setMusicVolume: function (b) {
            this.musicVolume = b;
            this.jukebox && (b = this.musicVolume,
                0 == b ? (this.jukebox.player.setVolume(b),
                this.bgmPlaying && this.jukebox.player.pause(),
                    this.bgmPlaying = !1) : (this.jukebox.player.setVolume(b),
                this.bgmPlaying || this.jukebox.player.resume(0),
                    this.bgmPlaying = !0))
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function () {
    ig.main = function (b, c, d, e, f, j, n) {
        ig.system = new ig.System(b, d, e, f, j || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new (n || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function () {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function (b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function (b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function () {
            this.timer.reset();
            this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function (b) {
            this.timer.set(this.frameTime * -b);
            this.update()
        },
        gotoRandomFrame: function () {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function () {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function (b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha),
                0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(),
                    ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)),
                    ig.system.context.rotate(this.angle),
                    this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y),
                    ig.system.context.restore()),
            1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function () {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        posMP: {
            x: 0,
            y: 0
        },
        posML: {
            x: 0,
            y: 0
        },
        enableReposition: !1,
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function (b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = b;
            this.pos.y = c;
            ig.merge(this, d)
        },
        addAnim: function (b, c, d, e) {
            if (!this.animSheet)
                throw "No animSheet to add the animation " + b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function () {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function (b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick,
                0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function (b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0),
                this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else
                    d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y),
                        this.vel.x = c.x * d,
                        this.vel.y = c.y * d,
                        c = Math.atan2(c.x, c.y),
                    c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        reposition: function () {
            ig.ua.mobile && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x,
                this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x,
                this.pos.y = this.posML.y))
        },
        draw: function () {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function () {
            ig.game.removeEntity(this)
        },
        receiveDamage: function (b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function (b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function (b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function (b) {
            return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function () {
        },
        collideWith: function () {
        },
        ready: function () {
        }
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function (b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    }

    ig.Entity.solveCollision = function (b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED)
            d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED)
            d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d),
            b.collideWith(c, "y"),
            c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d),
            b.collideWith(c, "x"),
            c.collideWith(b, "x"))
    }

    ig.Entity.seperateOnXAxis = function (b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x,
            c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y),
            d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2,
            b.vel.x = -d,
            c.vel.x = d,
            d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y),
            b.pos.x = Math.floor(d.pos.x),
            b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y),
            c.pos.x = Math.ceil(b.pos.x))
    }

    ig.Entity.seperateOnYAxis = function (b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var f = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0,
                f = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else
            ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y),
                b.pos.y = d.pos.y,
                0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0,
                    b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2,
                b.vel.y = -d,
                c.vel.y = d,
                f = c.vel.x * ig.system.tick,
                d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y),
                b.pos.y = d.pos.y,
                b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y),
                c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function () {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [[]],
        name: null,
        init: function (b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length
        },
        getTile: function (b, c) {
            var d = Math.floor(b / this.tilesize)
                , e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function (b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c / this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function () {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function (b, c, f) {
            this.parent(b, c);
            this.tiledef = f || ig.CollisionMap.defaultTileDef;
            for (var j in this.tiledef)
                j | 0 > this.lastSlope && (this.lastSlope = j | 0)
        },
        trace: function (b, c, f, j, n, p) {
            var q = {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b,
                    y: c
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
                , v = Math.ceil(Math.max(Math.abs(f), Math.abs(j)) / this.tilesize);
            if (1 < v)
                for (var x = f / v, l = j / v, m = 0; m < v && (x || l) && !(this._traceStep(q, b, c, x, l, n, p, f, j, m),
                    b = q.pos.x,
                    c = q.pos.y,
                q.collision.x && (f = x = 0),
                q.collision.y && (j = l = 0),
                    q.collision.slope); m++)

            else
                this._traceStep(q, b, c, f, j, n, p, f, j, 0);
            return q
        },
        _traceStep: function (b, c, f, j, n, p, q, v, x, l) {
            b.pos.x += j;
            b.pos.y += n;
            var m = 0;
            if (j) {
                var s = 0 < j ? p : 0
                    , H = 0 > j ? this.tilesize : 0
                    , m = Math.max(Math.floor(f / this.tilesize), 0)
                    , M = Math.min(Math.ceil((f + q) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + s) / this.tilesize);
                var C = Math.floor((c + s) / this.tilesize);
                if (0 < l || j == C || 0 > C || C >= this.width)
                    C = -1;
                if (0 <= j && j < this.width)
                    for (var I = m; I < M && !(-1 != C && (m = this.data[I][C],
                    1 < m && m <= this.lastSlope && this._checkTileDef(b, m, c, f, v, x, p, q, C, I))); I++)
                        if (m = this.data[I][j],
                        1 == m || m > this.lastSlope || 1 < m && this._checkTileDef(b, m, c, f, v, x, p, q, j, I)) {
                            if (1 < m && m <= this.lastSlope && b.collision.slope)
                                break;
                            b.collision.x = !0;
                            b.tile.x = m;
                            c = b.pos.x = j * this.tilesize - s + H;
                            v = 0;
                            break
                        }
            }
            if (n) {
                s = 0 < n ? q : 0;
                n = 0 > n ? this.tilesize : 0;
                m = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                H = Math.min(Math.ceil((b.pos.x + p) / this.tilesize), this.width);
                I = Math.floor((b.pos.y + s) / this.tilesize);
                M = Math.floor((f + s) / this.tilesize);
                if (0 < l || I == M || 0 > M || M >= this.height)
                    M = -1;
                if (0 <= I && I < this.height)
                    for (j = m; j < H && !(-1 != M && (m = this.data[M][j],
                    1 < m && m <= this.lastSlope && this._checkTileDef(b, m, c, f, v, x, p, q, j, M))); j++)
                        if (m = this.data[I][j],
                        1 == m || m > this.lastSlope || 1 < m && this._checkTileDef(b, m, c, f, v, x, p, q, j, I)) {
                            if (1 < m && m <= this.lastSlope && b.collision.slope)
                                break;
                            b.collision.y = !0;
                            b.tile.y = m;
                            b.pos.y = I * this.tilesize - s + n;
                            break
                        }
            }
        },
        _checkTileDef: function (b, c, f, j, n, p, q, v, x, l) {
            var m = this.tiledef[c];
            if (!m)
                return !1;
            c = (m[2] - m[0]) * this.tilesize;
            var s = (m[3] - m[1]) * this.tilesize
                , H = m[4];
            q = f + n + (0 > s ? q : 0) - (x + m[0]) * this.tilesize;
            v = j + p + (0 < c ? v : 0) - (l + m[1]) * this.tilesize;
            if (0 < c * v - s * q) {
                if (0 > n * -s + p * c)
                    return H;
                x = Math.sqrt(c * c + s * s);
                l = s / x;
                x = -c / x;
                var M = q * l + v * x
                    , m = l * M
                    , M = x * M;
                if (m * m + M * M >= n * n + p * p)
                    return H || 0.5 > c * (v - p) - s * (q - n);
                b.pos.x = f + n - m;
                b.pos.y = j + p - M;
                b.collision.slope = {
                    x: c,
                    y: s,
                    nx: l,
                    ny: x
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3
        , c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function (b, c, f, j) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + f,
                    y: c + j
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function () {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function (b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function (b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function (b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function () {
            var b = this.width * this.tilesize * ig.system.scale
                , c = this.height * this.tilesize * ig.system.scale
                , d = Math.ceil(b / this.chunkSize)
                , e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var f = 0; f < e; f++) {
                this.preRenderedChunks[f] = [];
                for (var j = 0; j < d; j++)
                    this.preRenderedChunks[f][j] = this.preRenderChunk(j, f, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, f == e - 1 ? c - f * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function (b, c, d, e) {
            var f = d / this.tilesize / ig.system.scale + 1
                , j = e / this.tilesize / ig.system.scale + 1
                , n = b * this.chunkSize / ig.system.scale % this.tilesize
                , p = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var q = ig.$new("canvas");
            q.width = d;
            q.height = e;
            d = ig.system.context;
            ig.system.context = q.getContext("2d");
            for (e = 0; e < f; e++)
                for (var v = 0; v < j; v++)
                    if (e + b < this.width && v + c < this.height) {
                        var x = this.data[v + c][e + b];
                        x && this.tiles.drawTile(e * this.tilesize - n, v * this.tilesize - p, x - 1, this.tilesize)
                    }
            ig.system.context = d;
            return q
        },
        draw: function () {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function () {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x)
                , c = ig.system.getDrawPos(this.scroll.y);
            this.repeat && (b %= this.width * this.tilesize * ig.system.scale,
                c %= this.height * this.tilesize * ig.system.scale);
            var d = Math.max(Math.floor(b / this.chunkSize), 0)
                , e = Math.max(Math.floor(c / this.chunkSize), 0)
                , f = Math.ceil((b + ig.system.realWidth) / this.chunkSize)
                , j = Math.ceil((c + ig.system.realHeight) / this.chunkSize)
                , n = this.preRenderedChunks[0].length
                , p = this.preRenderedChunks.length;
            this.repeat || (f = Math.min(f, n),
                j = Math.min(j, p));
            for (var q = 0; e < j; e++) {
                for (var v = 0, x = d; x < f; x++) {
                    var l = this.preRenderedChunks[e % p][x % n]
                        , m = -b + x * this.chunkSize - v
                        , s = -c + e * this.chunkSize - q;
                    ig.system.context.drawImage(l, m, s);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f",
                        ig.system.context.strokeRect(m, s, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && m + l.width < ig.system.realWidth && (v = this.chunkSize - l.width,
                        f++)
                }
                this.repeat && l.height < this.chunkSize && s + l.height < ig.system.realHeight && (q = this.chunkSize - l.height,
                    j++)
            }
        },
        drawTiled: function () {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, n = -f - this.tilesize, f = ig.system.width + this.tilesize - f, p = ig.system.height + this.tilesize - j, q = -1, j = -j - this.tilesize; j < p; q++,
                j += this.tilesize) {
                var v = q + e;
                if (v >= this.height || 0 > v) {
                    if (!this.repeat)
                        continue;
                    v = 0 < v ? v % this.height : (v + 1) % this.height + this.height - 1
                }
                for (var x = -1, l = n; l < f; x++,
                    l += this.tilesize) {
                    b = x + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat)
                            continue;
                        b = 0 < b ? b % this.width : (b + 1) % this.width + this.width - 1
                    }
                    if (b = this.data[v][b])
                        (c = this.anims[b - 1]) ? c.draw(l, j) : this.tiles.drawTile(l, j, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function () {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function () {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevelWithoutEntities: function (b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (var c = 0; c < b.layer.length; c++) {
                var d = b.layer[c];
                if ("collision" == d.name)
                    this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            }
        },
        loadLevel: function (b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c],
                "collision" == d.name)
                    this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++)
                this.entities[c].ready()
        },
        loadLevelDeferred: function (b) {
            this._levelToLoad = b
        },
        getMapByName: function (b) {
            if ("collision" == b)
                return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b)
                    return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function (b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function (b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function (b, c, d, e) {
            var f = "string" === typeof b ? ig.global[b] : b;
            if (!f)
                throw "Can't spawn entity of type " + b;
            b = new f(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function () {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function () {
            this._doSortEntities = !0
        },
        removeEntity: function (b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function () {
            this.update();
            this.draw()
        },
        update: function () {
            this._levelToLoad && (this.loadLevel(this._levelToLoad),
                this._levelToLoad = null);
            if (this._doSortEntities || this.autoSort)
                this.sortEntities(),
                    this._doSortEntities = !1;
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++)
                this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c], d;
                for (d in b)
                    b[d].update()
            }
        },
        updateEntities: function () {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function () {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c = this.backgroundMaps[b];
                if (c.foreground)
                    break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++)
                c = this.backgroundMaps[b],
                    c.setScreenPos(this.screen.x, this.screen.y),
                    c.draw()
        },
        drawEntities: function () {
            for (var b = 0; b < this.entities.length; b++)
                this.entities[b].draw()
        },
        checkEntities: function () {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, p = Math.floor(d.pos.x / this.cellSize); p < j; p++)
                        for (var q = f; q < n; q++)
                            if (b[p])
                                if (b[p][q]) {
                                    for (var v = b[p][q], x = 0; x < v.length; x++)
                                        d.touches(v[x]) && !e[v[x].id] && (e[v[x].id] = !0,
                                            ig.Entity.checkPair(d, v[x]));
                                    v.push(d)
                                } else
                                    b[p][q] = [d];
                            else
                                b[p] = {},
                                    b[p][q] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function (b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function (b, c) {
            return b.pos.x + b.size.x - (c.pos.x + c.size.x)
        },
        POS_Y: function (b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function () {
    ig.System.inject({
        run: function () {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function (b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function () {
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log && window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log,
                ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function (b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function (b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function (b) {
            var c = new b.type(b.name, b.label);
            if (b.options)
                for (var d = 0; d < b.options.length; d++) {
                    var e = b.options[d];
                    c.addOption(new ig.DebugOption(e.name, e.object, e.property))
                }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click", function () {
                this.togglePanel(c)
            }
                .bind(this), !1);
            c.menuItem = b;
            e = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var f = this.panelMenu.childNodes[d];
                if (f.textContent > c.label) {
                    this.panelMenu.insertBefore(b, f);
                    e = !0;
                    break
                }
            }
            e || this.panelMenu.appendChild(b)
        },
        showPanel: function (b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function (b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1),
                this.activePanel.menuItem.className = "ig_debug_menu_item",
                this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
            c && (this.activePanel = b)
        },
        ready: function () {
            for (var b in this.panels)
                this.panels[b].ready()
        },
        beforeRun: function () {
            var b = Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function () {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function (b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function (b) {
            this.active = b;
            this.container.style.display = b ? "block" : "none"
        },
        addPanel: function (b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function (b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function () {
        },
        beforeRun: function () {
        },
        afterRun: function () {
        }
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function (b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function () {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function (b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function () {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function () {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes,
                ig.system.context.lineWidth = 1,
                ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y * ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2
                    , c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names,
                ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))),
            "object" == typeof this.target))
                for (var d in this.target)
                    (b = ig.game.getEntityByName(this.target[d])) && this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function (b, c, d, e, f) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(e - ig.game.screen.x), ig.system.getDrawPos(f - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function (b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    }

    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function () {
    ig.Game.inject({
        loadLevel: function (b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function (b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function (b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length)
                this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b]
                        , d = new ig.DebugPanel(b, "Layer " + b)
                        , e = new ig.$new("strong");
                    e.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(e);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function (b, c, d) {
            var e = ig.system.scale
                , f = ig.$new("canvas")
                , j = f.getContext("2d")
                , n = c.tiles.width * e
                , p = c.tiles.height * e
                , q = n / c.tilesize;
            j.drawImage(c.tiles.data, 0, 0, n, p, 0, 0, q, p / c.tilesize);
            j = ig.$new("canvas");
            j.width = c.width * e;
            j.height = c.height * e;
            var v = j.getContext("2d");
            ig.game.clearColor && (v.fillStyle = ig.game.clearColor,
                v.fillRect(0, 0, n, p));
            for (p = n = 0; p < c.width; p++)
                for (var x = 0; x < c.height; x++)
                    (n = c.data[x][p]) && v.drawImage(f, Math.floor((n - 1) * e % q), Math.floor((n - 1) * e / q) * e, e, e, p * e, x * e, e, e);
            f = ig.$new("div");
            f.className = "ig_debug_map_container";
            f.style.width = c.width * e + "px";
            f.style.height = c.height * e + "px";
            q = ig.$new("div");
            q.className = "ig_debug_map_screen";
            q.style.width = ig.system.width / c.tilesize * e - 2 + "px";
            q.style.height = ig.system.height / c.tilesize * e - 2 + "px";
            this.mapScreens[d] = q;
            f.appendChild(j);
            f.appendChild(q);
            b.container.appendChild(f)
        },
        afterRun: function () {
            for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
                var d = this.maps[c]
                    , e = this.mapScreens[c];
                if (d && e) {
                    var f = d.scroll.x / d.tilesize
                        , j = d.scroll.y / d.tilesize;
                    d.repeat && (f %= d.width,
                        j %= d.height);
                    e.style.left = f * b + "px";
                    e.style.top = j * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function () {
    ig.Game.inject({
        draw: function () {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function () {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function () {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function (b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width, 1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function (b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function (b, c, d) {
            var e = ig.$new("span");
            e.className = "ig_debug_legend_color";
            e.style.backgroundColor = d;
            var f = ig.$new("span");
            f.className = "ig_debug_legend_number";
            f.appendChild(document.createTextNode("0"));
            var j = ig.$new("span");
            j.className = "ig_debug_legend";
            j.appendChild(e);
            j.appendChild(document.createTextNode(c + " ("));
            j.appendChild(f);
            j.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(j);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: f
            }
        },
        beginClock: function (b, c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function (b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function (b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function () {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function () {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1
                , c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var e = this.clocks[d];
                e.html.textContent = e.avg.toFixed(2);
                if (e.color && 0 < e.current) {
                    this.ctx.fillStyle = e.color;
                    var f = e.current * this.msHeight
                        , c = c - f;
                    this.ctx.fillRect(b, c, 1, f);
                    e.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++)
                c = this.marks[d],
                    this.ctx.fillStyle = c.color,
                    this.ctx.fillRect(b, 0, 1, this.height),
                c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY),
                    this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function () {
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function () {
    ig.SplashLoader = ig.Loader.extend({
        bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.jpg"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        loadingTextAlpha: 1,
        init: function (b, c) {
            this.parent(b, c);
            this.setupCustomAnimation();
            ig.ua.mobile && MobileAdInGamePreroll.Initialize();
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
            this._drawStatus += (this.status - this._drawStatus) / 5;
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
            b.fillRect(-w0 / 2, 0, w0, h0);
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
            ig.system.context.globalAlpha = this.loadingTextAlpha;
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(b, 0, c);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (b) {
            for (var c = 0; c < this.length; ++c)
                if (this[c] === b)
                    return c;
            return -1
        }
    );
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function () {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++)
                this.tweens[c].update(),
                this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    }

    ig.Entity.prototype.tween = function (b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    }

    ig.Entity.prototype.pauseTweens = function () {
        for (var b = 0; b < this.tweens.length; b++)
            this.tweens[b].pause()
    }

    ig.Entity.prototype.resumeTweens = function () {
        for (var b = 0; b < this.tweens.length; b++)
            this.tweens[b].resume()
    }

    ig.Entity.prototype.stopTweens = function (b) {
        for (var c = 0; c < this.tweens.length; c++)
            this.tweens[c].stop(b)
    }

    ig.Tween = function (b, c, d, e) {
        var f = {}
            , j = {}
            , n = {}
            , p = 0
            , q = !1
            , v = !1
            , x = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function (b) {
            x = b
        }

        this.initEnd = function (b, c, d) {
            if ("object" !== typeof c[b])
                d[b] = c[b];
            else
                for (subprop in c[b])
                    d[b] || (d[b] = {}),
                        this.initEnd(subprop, c[b], d[b])
        }

        this.initStart = function (b, c, d, e) {
            if ("object" !== typeof d[b])
                "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b])
                    e[b] || (e[b] = {}),
                    "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        }

        this.start = function () {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            p = 0;
            -1 == b.tweens.indexOf(this) && b.tweens.push(this);
            v = !0;
            q = new ig.Timer;
            for (var d in c)
                this.initEnd(d, c, j);
            for (d in j)
                this.initStart(d, j, b, f),
                    this.initDelta(d, n, b, j)
        }

        this.initDelta = function (b, c, d, e) {
            if ("object" !== typeof e[b])
                c[b] = e[b] - d[b];
            else
                for (subprop in e[b])
                    c[b] || (c[b] = {}),
                        this.initDelta(subprop, c[b], d[b], e[b])
        }

        this.propUpdate = function (b, c, d, e, f) {
            if ("object" !== typeof d[b])
                c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * f : c[b];
            else
                for (subprop in d[b])
                    this.propUpdate(subprop, c[b], d[b], e[b], f)
        }

        this.propSet = function (b, c, d) {
            if ("object" !== typeof c[b])
                d[b] = c[b];
            else
                for (subprop in c[b])
                    d[b] || (d[b] = {}),
                        this.propSet(subprop, c[b], d[b])
        }

        this.update = function () {
            if (!v)
                return !1;
            if (this.delay) {
                if (q.delta() < this.delay)
                    return;
                this.delay = 0;
                q.reset()
            }
            if (this.paused || this.complete)
                return !1;
            var c = (q.delta() + p) / this.duration
                , c = 1 < c ? 1 : c
                , d = this.easing(c);
            for (property in n)
                this.propUpdate(property, b, f, n, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete)
                        this.onComplete();
                    x && x.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in f)
                        this.propSet(property, f, b);
                    p = 0;
                    q.reset();
                    -1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, f);
                    ig.merge(f, c);
                    ig.merge(j, d);
                    for (property in j)
                        this.initDelta(property, n, b, j);
                    p = 0;
                    q.reset();
                    -1 != this.loopNum && this.loopNum--
                }
            }
        }

        this.pause = function () {
            this.paused = !0;
            p += q.delta()
        }

        this.resume = function () {
            this.paused = !1;
            q.reset()
        }

        this.stop = function (b) {
            b && (this.loop = this.complete = this.paused = !1,
                p += d,
                this.update());
            this.complete = !0
        }
    }

    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function (b) {
        return b
    }

    ig.Tween.Easing.Quadratic.EaseIn = function (b) {
        return b * b
    }

    ig.Tween.Easing.Quadratic.EaseOut = function (b) {
        return -b * (b - 2)
    }

    ig.Tween.Easing.Quadratic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    }

    ig.Tween.Easing.Cubic.EaseIn = function (b) {
        return b * b * b
    }

    ig.Tween.Easing.Cubic.EaseOut = function (b) {
        return --b * b * b + 1
    }

    ig.Tween.Easing.Cubic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    }

    ig.Tween.Easing.Quartic.EaseIn = function (b) {
        return b * b * b * b
    }

    ig.Tween.Easing.Quartic.EaseOut = function (b) {
        return -(--b * b * b * b - 1)
    }

    ig.Tween.Easing.Quartic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    }

    ig.Tween.Easing.Quintic.EaseIn = function (b) {
        return b * b * b * b * b
    }

    ig.Tween.Easing.Quintic.EaseOut = function (b) {
        return (b -= 1) * b * b * b * b + 1
    }

    ig.Tween.Easing.Quintic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    }

    ig.Tween.Easing.Sinusoidal.EaseIn = function (b) {
        return -Math.cos(b * Math.PI / 2) + 1
    }

    ig.Tween.Easing.Sinusoidal.EaseOut = function (b) {
        return Math.sin(b * Math.PI / 2)
    }

    ig.Tween.Easing.Sinusoidal.EaseInOut = function (b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    }

    ig.Tween.Easing.Exponential.EaseIn = function (b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    }

    ig.Tween.Easing.Exponential.EaseOut = function (b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    }

    ig.Tween.Easing.Exponential.EaseInOut = function (b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    }

    ig.Tween.Easing.Circular.EaseIn = function (b) {
        return -(Math.sqrt(1 - b * b) - 1)
    }

    ig.Tween.Easing.Circular.EaseOut = function (b) {
        return Math.sqrt(1 - --b * b)
    }

    ig.Tween.Easing.Circular.EaseInOut = function (b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    }

    ig.Tween.Easing.Elastic.EaseIn = function (b) {
        var c, d = 0.1, e = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1,
            c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
    }

    ig.Tween.Easing.Elastic.EaseOut = function (b) {
        var c, d = 0.1, e = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1,
            c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    }

    ig.Tween.Easing.Elastic.EaseInOut = function (b) {
        var c, d = 0.1, e = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1,
            c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    }

    ig.Tween.Easing.Back.EaseIn = function (b) {
        return b * b * (2.70158 * b - 1.70158)
    }

    ig.Tween.Easing.Back.EaseOut = function (b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    }

    ig.Tween.Easing.Back.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    }

    ig.Tween.Easing.Bounce.EaseIn = function (b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    }

    ig.Tween.Easing.Bounce.EaseOut = function (b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    }

    ig.Tween.Easing.Bounce.EaseInOut = function (b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function () {
    ig.UrlParameters = ig.Class.extend({
        init: function () {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0,
                        console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b)
                switch (b) {
                    case "true":
                        ig.ua.is_uiwebview = !0,
                            console.log("webview mode")
                }
            if (b = getQueryVariable("debug"))
                switch (b) {
                    case "true":
                        ig.game.showDebugMenu(),
                            console.log("debug mode")
                }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(),
                        ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function () {
    ig.Jukebox = ig.Class.extend({
        init: function () {
            this.player = new jukebox.Player({
                resources: ["media/audio/music/bgm.mp3", "media/audio/music/bgm.ogg"],
                spritemap: {
                    music: {
                        start: 0,
                        end: 13.69,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function () {
    ig.Director = ig.Class.extend({
        init: function (b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function (b) {
            for (key in dynamicClickableEntityDivs)
                ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function (b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function (b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b,
                this.levels = this.levels.concat(newLevels),
                !0) : !1
        },
        nextLevel: function () {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function () {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function (b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++)
                this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function () {
            return this.loadLevel(0)
        },
        lastLevel: function () {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function () {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function () {
            ig.Storage.instance = this
        },
        isCapable: function () {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function (b) {
            return null !== this.get(b)
        },
        initUnset: function (b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function (b) {
            if (!this.isCapable())
                return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function (b) {
            return ~~this.get(b)
        },
        getFloat: function (b) {
            return parseFloat(this.get(b))
        },
        getBool: function (b) {
            return !!this.get(b)
        },
        key: function (b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function (b, c) {
            if (!this.isCapable())
                return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function (b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function (b) {
            if (!this.isCapable())
                return null;
            window.localStorage.removeItem(b)
        },
        clear: function () {
            if (!this.isCapable())
                return null;
            window.localStorage.clear()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function () {
    ig.BrandingSplash = ig.Class.extend({
        init: function () {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function (b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320,
                this.size.y = 200,
                this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480,
                this.size.y = 240,
                this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
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
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]),
                $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight
                    , n = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * n);
                $("#" + f.id).css("top", this.pos.y * j);
                $("#" + f.id).css("width", this.size.x * n);
                $("#" + f.id).css("height", this.size.y * j)
            } else
                j = w / 2 - destW / 2,
                    n = h / 2 - destH / 2,
                    console.log(j, n),
                    $("#" + f.id).css("left", j + this.pos.x * multiplier),
                    $("#" + f.id).css("top", n + this.pos.y * multiplier),
                    $("#" + f.id).css("width", this.size.x * multiplier),
                    $("#" + f.id).css("height", this.size.y * multiplier);
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
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function () {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function (b, c, d) {
            this.parent(b, c, d);
            if (d)
                switch (console.log("settings found ... using that div layer name"),
                    b = d.div_layer_name,
                    console.log("settings.centralize:", d.centralize),
                    d.centralize) {
                    case "true":
                        console.log("centralize true");
                        centralize = !0;
                        break;
                    case "false":
                        console.log("centralize false");
                        centralize = !1;
                        break;
                    default:
                        console.log("default ... centralize false"),
                            centralize = !1
                }
            else
                b = "branding-logo",
                    centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled)
                    try {
                        ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                            div_layer_name: b,
                            centralize: centralize
                        })
                    } catch (e) {
                        console.log(e)
                    }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function () {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function (b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width,
                this.size.y = _SETTINGS.Branding.Logo.Height,
            d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2,
                console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"),
                b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"),
                this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]),
                $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight
                    , n = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * n);
                $("#" + f.id).css("top", this.pos.y * j);
                $("#" + f.id).css("width", this.size.x * n);
                $("#" + f.id).css("height", this.size.y * j)
            } else
                j = w / 2 - destW / 2,
                    n = h / 2 - destH / 2,
                    console.log(j, n),
                    $("#" + f.id).css("left", j + this.pos.x * multiplier),
                    $("#" + f.id).css("top", n + this.pos.y * multiplier),
                    $("#" + f.id).css("width", this.size.x * multiplier),
                    $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function () {
    EntityButtonMoreGames = ig.Entity.extend({
        size: {
            x: 176,
            y: 116
        },
        zIndex: 750,
        type: ig.Entity.TYPE.B,
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            setTimeout(this.spawnDiv(), 5)
        },
        spawnDiv: function () {
            if (!this.canSpawnDiv)
                if (this.canSpawnDiv = !0,
                    _SETTINGS.MoreGames.Enabled) {
                    var b;
                    b = this.divLayerName ? this.divLayerName : "more-games";
                    this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, !0);
                    if (ig.ua.mobile) {
                        var c = window.innerHeight / mobileHeight
                            , d = window.innerWidth / mobileWidth;
                        $("#" + b).css("left", this.pos.x * d);
                        $("#" + b).css("top", this.pos.y * c);
                        $("#" + b).css("width", this.size.x * d);
                        $("#" + b).css("height", this.size.y * c)
                    } else
                        c = document.getElementById("game").offsetLeft,
                            d = document.getElementById("game").offsetTop,
                            $("#" + b).css("left", c + this.pos.x * multiplier),
                            $("#" + b).css("top", d + this.pos.y * multiplier),
                            $("#" + b).css("width", this.size.x * multiplier),
                            $("#" + b).css("height", this.size.y * multiplier)
                } else
                    this.kill()
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]),
                $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight
                    , n = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * n);
                $("#" + f.id).css("top", this.pos.y * j);
                $("#" + f.id).css("width", this.size.x * n);
                $("#" + f.id).css("height", this.size.y * j)
            } else
                j = document.getElementById("game").offsetLeft,
                    n = document.getElementById("game").offsetTop,
                    $("#" + f.id).css("left", j + this.pos.x * multiplier),
                    $("#" + f.id).css("top", n + this.pos.y * multiplier),
                    $("#" + f.id).css("width", this.size.x * multiplier),
                    $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hide: function () {
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
        },
        clicking: function () {
        },
        released: function () {
        },
        over: function () {
        },
        leave: function () {
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function () {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else
                    ig.game.director.nextLevel(),
                        ig.system.context.globalAlpha = 1,
                        this.kill()
        },
        update: function () {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()),
                this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null,
                this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++,
                this.sheildTimer.reset()) : (this.sheildTimer = null,
                this.moveTimer = new ig.Timer(0.0010),
                this.mIconTimer = new ig.Timer(0.05),
                this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3,
                this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++,
                this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++,
                this.titleTimer.reset()) : (this.titleTimer = null,
                this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null,
                ig.game.director.nextLevel(),
                ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function () {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2
                    , d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, f = 1; 48 >= f; f += 1)
                    b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)),
                        e++,
                    2 == e && (e = 0,
                        b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160),
                this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function () {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else
                    ig.game.director.nextLevel(),
                        ig.system.context.globalAlpha = 1,
                        this.kill()
        },
        update: function () {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()),
                this.drawKittyOpening())
        },
        updateKittyOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null,
                this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++,
                this.kittyTimer.reset()) : (this.kittyTimer = null,
                this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null,
                ig.game.director.nextLevel(),
                ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function () {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325),
                this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function () {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function (b) {
            this.objectArray.push(b)
        },
        clickObject: function (b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && b.clicked();
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && b.released()
        },
        refreshPos: function () {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else
                this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x,
                    this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2
        },
        update: function () {
            this.refreshPos();
            var b = null
                , c = -1;
            for (a = this.objectArray.length - 1; -1 < a; a--)
                this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex,
                    b = this.objectArray[a]);
            null != b ? (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && this.hoveringItem != b && this.hoveringItem.leave(),
            null != this.hoveringItem && "function" == typeof this.hoveringItem.over && this.hoveringItem == b && this.hoveringItem.over(),
                this.hoveringItem = b,
                this.clickObject(b),
                this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(),
                this.hoveringItem = null);
            this.isClicking && !this.firstClick ? this.firstClick = !0 : this.isReleased && this.firstClick && (this.firstClick = !1);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 5E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 15,
            y: 15
        },
        init: function (b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function () {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.audio-toggle").requires("impact.entity").defines(function () {
    EntityAudioToggle = ig.Entity.extend({
        zIndex: 3E3,
        toggleAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/mute.png", 54, 56), 0, [0, 1, 2, 3]),
        togglePos: {
            x: 0,
            y: 0
        },
        toggleRect: {
            x: -27,
            y: -28,
            w: 54,
            h: 56
        },
        toggleOffset: {
            x: 0,
            y: 0
        },
        toggleAlpha: 1,
        toggleDown: !1,
        pointer: null,
        control: null,
        hidden: !1,
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            (this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]) || (this.control = ig.game.getEntitiesByType(EntityGameControl)[0]);
            this.control || (this.control = ig.game.getEntitiesByType(EntityShopControl)[0])
        },
        draw: function () {
            if (!this.hidden) {
                var b = ig.system.context
                    , c = this.pos.x + this.togglePos.x + this.toggleOffset.x + this.toggleRect.x
                    , d = this.pos.y + this.togglePos.y + this.toggleOffset.y + this.toggleRect.y;
                this.toggleDown && (d += 2);
                b.save();
                b.globalAlpha = this.toggleAlpha;
                this.toggleAnim.draw(c, d);
                b.restore()
            }
        },
        update: function () {
            this.hidden || this.checkClicks()
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkClicks: function () {
            this.pointer.refreshPos();
            var b = {};
            b.x = this.pointer.pos.x + this.pointer.size.x / 2;
            b.y = this.pointer.pos.y + this.pointer.size.y / 2;
            b.w = 1;
            b.h = 1;
            var c = {};
            c.x = this.pos.x + this.togglePos.x + this.toggleRect.x;
            c.y = this.pos.y + this.togglePos.y + this.toggleRect.y;
            c.w = this.toggleRect.w;
            c.h = this.toggleRect.h;
            this.toggleDown = !1;
            this.toggleAnim.tile = 0;
            ig.game.muted || (this.toggleAnim.tile = 1);
            this.aabbCheck(b, c) && (ig.ua.mobile || (this.toggleAnim.tile = 2),
            ig.input.state("click") && (this.toggleDown = !0,
                this.toggleAnim.tile = 3),
            ig.input.released("click") && (this.toggleDown = !1,
            ig.ua.mobile || (this.toggleAnim.tile = 2),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button),
                ig.game.muted ? this.unmuteAudio() : this.muteAudio(),
            ig.ua.mobile && (this.toggleAnim.tile = 0,
            ig.game.muted || (this.toggleAnim.tile = 1))))
        },
        muteAudio: function () {
            ig.game.muted = !0;
            ig.soundHandler.setMusicVolume(0);
            ig.soundHandler.setSfxVolume(0);
            ig.game.savePlayerStats()
        },
        unmuteAudio: function () {
            ig.game.muted = !1;
            ig.soundHandler.setMusicVolume(ig.game.musicVolume);
            ig.soundHandler.setSfxVolume(ig.game.sfxVolume);
            ig.game.savePlayerStats()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop-control").requires("impact.entity").defines(function () {
    EntityShopControl = ig.Entity.extend({
        zIndex: 2E3,
        pointer: null,
        control: null,
        coinImage: new ig.Image("media/graphics/game/ui/game/coinicon.png"),
        coinRect: {
            x: 20,
            y: 75,
            w: 41,
            h: 42
        },
        coinCountPos: {
            x: 75,
            y: 106
        },
        lifeImage: new ig.Image("media/graphics/game/ui/game/lifeicon.png"),
        lifeRect: {
            x: 320,
            y: 350,
            w: 40,
            h: 40
        },
        titleImage: new ig.Image("media/graphics/game/ui/game/shop-title.png"),
        titlePos: {
            x: 243,
            y: 46
        },
        panelGreyImage: new ig.Image("media/graphics/game/ui/game/shop-panel0.png"),
        panelImage: new ig.Image("media/graphics/game/ui/game/shop-panel1.png"),
        panelPos: {
            x: 202,
            y: 179
        },
        panelOffset: {
            x: 0,
            y: 0
        },
        panelAlpha: 1,
        itemImage: [new ig.Image("media/graphics/game/ui/game/skateboard.png"), new ig.Image("media/graphics/game/ui/game/skates.png"), new ig.Image("media/graphics/game/ui/game/rocket.png"), new ig.Image("media/graphics/game/ui/game/carpet.png"), new ig.Image("media/graphics/game/ui/game/hoverboard.png")],
        itemId: 0,
        itemPos: {
            x: 254,
            y: 257
        },
        itemTextPos: {
            x: 320,
            y: 248
        },
        arrowSheet: new ig.AnimationSheet("media/graphics/game/ui/game/arrow.png", 50, 46),
        arrowRightAnimUp: null,
        arrowRightAnimDown: null,
        arrowRightAnim: null,
        arrowRightRect: {
            x: 470,
            y: 270,
            w: 50,
            h: 46
        },
        arrowLeftAnimUp: null,
        arrowLeftAnimDown: null,
        arrowLeftAnim: null,
        arrowLeftRect: {
            x: 120,
            y: 270,
            w: 50,
            h: 46
        },
        buttonSheet: new ig.AnimationSheet("media/graphics/game/ui/game/shop-button.png", 119, 65),
        buttonAnimUp: null,
        buttonAnimDown: null,
        buttonAnim: null,
        buttonRect: {
            x: 259,
            y: 420,
            w: 119,
            h: 65
        },
        buttonOffset: {
            x: 0,
            y: 0
        },
        homeSheet: new ig.AnimationSheet("media/graphics/game/ui/game/home.png", 50, 50),
        homeAnimUp: null,
        homeAnimDown: null,
        homeAnim: null,
        homeRect: {
            x: 295,
            y: 530,
            w: 50,
            h: 50
        },
        homeOffset: {
            x: 0,
            y: 0
        },
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
            this.itemTextPos.x = ig.system.width / 2;
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
            this.arrowLeftAnimDown = new ig.Animation(this.arrowSheet, 0.1, [1]);
            this.arrowLeftAnim = this.arrowLeftAnimUp;
            this.arrowLeftAnimUp.flip.x = !0;
            this.arrowLeftAnimDown.flip.x = !0;
            this.arrowRightAnimUp = new ig.Animation(this.arrowSheet, 0.1, [0]);
            this.arrowRightAnimDown = new ig.Animation(this.arrowSheet, 0.1, [1]);
            this.arrowRightAnim = this.arrowRightAnimUp;
            this.arrowLeftRect.x = ig.system.width / 2 - 200;
            this.arrowRightRect.x = ig.system.width / 2 + 150;
            this.lifeRect.x = this.panelPos.x + this.panelImage.width - 45;
            ig.game.getItemUpgradeEquipped(0) ? this.itemId = 0 : ig.game.getItemUpgradeEquipped(1) ? this.itemId = 1 : ig.game.getItemUpgradeEquipped(2) ? this.itemId = 2 : ig.game.getItemUpgradeEquipped(3) ? this.itemId = 3 : ig.game.getItemUpgradeEquipped(4) && (this.itemId = 4)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]
        },
        draw: function () {
            if (!this.hidden && 0 != this.alpha) {
                ig.system.context.globalAlpha = 0.5 * this.alpha;
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
                ig.system.context.globalAlpha = 1;
                ig.system.context.globalAlpha = this.alpha;
                this.titleImage.draw(this.titlePos.x, this.titlePos.y);
                ig.system.context.globalAlpha = this.panelAlpha;
                ig.game.getItemUpgradeStatus(this.itemId) ? this.panelImage.draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y) : this.panelGreyImage.draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y);
                this.itemImage[this.itemId].draw(this.panelPos.x + this.panelOffset.x, this.panelPos.y + this.panelOffset.y);
                ig.system.context.textAlign = "center";
                ig.system.context.font = "18px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#1A4283";
                ig.system.context.fillText(ig.game.getItemUpgradeName(this.itemId), this.itemTextPos.x + this.panelOffset.x, this.itemTextPos.y + this.panelOffset.y);
                if (!ig.game.getItemUpgradeStatus(this.itemId)) {
                    this.buttonAnim.draw(this.buttonRect.x, this.buttonRect.y);
                    ig.system.context.textAlign = "center";
                    ig.system.context.font = "16px mainfont, Helvetica, Verdana";
                    ig.system.context.fillStyle = "#1A4283";
                    var b = this.buttonRect.x - 17 + this.buttonRect.w / 2 + this.buttonOffset.x
                        , c = this.buttonRect.y - 27 + this.buttonRect.h + this.buttonOffset.y;
                    ig.system.context.fillText(ig.game.getItemUpgradePrice(this.itemId), b, c)
                }
                ig.game.getItemUpgradeEquipped(this.itemId) && (b = ig.system.context,
                    b.save(),
                    b.translate(this.lifeRect.x + this.panelOffset.x, this.lifeRect.y + this.panelOffset.y),
                    b.rotate(-Math.PI / 8),
                    this.lifeImage.draw(-this.lifeRect.w / 2, -this.lifeRect.h),
                    b.textAlign = "center",
                    b.font = "16px mainfont, Helvetica, Verdana",
                    b.fillStyle = "#000000",
                    b.fillText(_STRINGS.UI.using, 2, 22),
                    b.fillStyle = "#e45309",
                    b.fillText(_STRINGS.UI.using, 0, 20),
                    b.restore());
                ig.system.context.globalAlpha = 1;
                this.arrowLeftAnim.draw(this.arrowLeftRect.x, this.arrowLeftRect.y);
                this.arrowRightAnim.draw(this.arrowRightRect.x, this.arrowRightRect.y);
                this.homeAnim.draw(this.homeRect.x, this.homeRect.y);
                this.coinImage.draw(this.coinRect.x, this.coinRect.y);
                ig.system.context.textAlign = "left";
                ig.system.context.font = "20px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#000000";
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
            this.tweenObj = this.tween({
                offset: {
                    x: 0,
                    y: 0
                }
            }, b, {
                easing: ig.Tween.Easing.Elastic.EaseOut,
                entity: this,
                onComplete: function () {
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
            this.tweenObj = this.tween({
                offset: {
                    x: 0,
                    y: ig.system.height
                }
            }, b, {
                easing: ig.Tween.Easing.Elastic.EaseIn,
                entity: this,
                onComplete: function () {
                    this.entity.hideDone = !0;
                    this.entity.hidden = !0;
                    this.entity.isHiding = !1;
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
                    b >= this.showDuration / 2 && (b -= this.showDuration / 2,
                    b > this.showDuration / 2 && (b = this.showDuration / 2),
                        this.alpha = b /= this.showDuration / 2)
                }
                this.isHiding && (b = ig.system.clock.delta() - this.hideTime,
                b > this.hideDuration / 2 && (b = this.hideDuration / 2),
                    b /= this.hideDuration / 2,
                    this.alpha = 1 - b,
                    b = ig.system.clock.delta() - this.hideTime,
                b >= this.hideDuration / 2 && (b -= this.hideDuration / 2,
                b > this.hideDuration / 2 && (b = this.hideDuration / 2),
                    b /= this.hideDuration / 2,
                    this.control.mainMenuAlpha = b));
                this.tweenObj && this.tweenObj.update();
                this.showDone && this.checkClicks();
                this.pagingRight && (b = ig.system.clock.delta() - this.pagingTime,
                    0.5 >= b ? (b /= 0.5,
                        this.panelAlpha = 1 - b * b,
                        this.panelOffset.x -= 200 * ig.system.tick) : 1 >= b ? (0.5 >= b - ig.system.tick && (this.panelOffset.x = 100,
                        this.itemId += 1,
                    this.itemId >= this.itemImage.length && (this.itemId = 0)),
                        b = (b - 0.5) / 0.5,
                        this.panelAlpha = b * b,
                        this.panelOffset.x -= 200 * ig.system.tick) : (this.pagingRight = !1,
                        this.panelOffset.x = 0));
                this.pagingLeft && (b = ig.system.clock.delta() - this.pagingTime,
                    0.5 >= b ? (b /= 0.5,
                    1 < b && (b = 1),
                        this.panelAlpha = 1 - b * b,
                        this.panelOffset.x += 200 * ig.system.tick) : 1 >= b ? (0.5 >= b - ig.system.tick && (this.panelOffset.x = -100,
                        this.itemId -= 1,
                    0 > this.itemId && (this.itemId = this.itemImage.length - 1)),
                        b = (b - 0.5) / 0.5,
                    1 < b && (b = 1),
                        this.panelAlpha = b * b,
                        this.panelOffset.x += 200 * ig.system.tick) : (this.pagingLeft = !1,
                        this.panelOffset.x = 0))
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
            if (!ig.game.getItemUpgradeStatus(this.itemId) && !this.pagingLeft && !this.pagingRight)
                if (this.aabbCheck(b, this.buttonRect)) {
                    if (ig.input.state("click") && (this.buttonAnim = this.buttonAnimDown,
                        this.buttonOffset.y = 2),
                        ig.input.released("click")) {
                        this.buttonAnim = this.buttonAnimUp;
                        this.buttonOffset.y = 0;
                        var c = ig.game.getItemUpgradePrice(this.itemId);
                        ig.game.money >= c && (ig.game.money -= c,
                            ig.game.setItemUpgradeStatus(this.itemId, !0),
                            ig.game.setItemUpgradeEquipped(this.itemId, !0),
                            ig.game.savePlayerStats(),
                            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))
                    }
                } else
                    this.buttonAnim = this.buttonAnimUp,
                        this.buttonOffset.y = 0;
            ig.game.getItemUpgradeStatus(this.itemId) && !this.pagingLeft && !this.pagingRight && (c = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            },
                c.x = this.panelPos.x,
                c.y = this.panelPos.y,
                c.w = this.panelImage.width,
                c.h = this.panelImage.height,
            this.aabbCheck(b, c) && ig.input.released("click") && (ig.game.getItemUpgradeEquipped(this.itemId) ? ig.game.setItemUpgradeEquipped(this.itemId, !1) : ig.game.setItemUpgradeEquipped(this.itemId, !0),
                ig.game.savePlayerStats(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)));
            this.aabbCheck(b, this.homeRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown),
            ig.input.released("click") && (this.homeAnim = this.homeAnimUp,
                ig.game.savePlayerStats(),
                this.hide(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp;
            this.aabbCheck(b, this.arrowRightRect) ? (ig.input.state("click") && (this.arrowRightAnim = this.arrowRightAnimDown),
            ig.input.released("click") && (this.arrowRightAnim = this.arrowRightAnimUp,
                this.doPageRight(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.arrowRightAnim = this.arrowRightAnimUp;
            this.aabbCheck(b, this.arrowLeftRect) ? (ig.input.state("click") && (this.arrowLeftAnim = this.arrowLeftAnimDown),
            ig.input.released("click") && (this.arrowLeftAnim = this.arrowLeftAnimUp,
                this.doPageLeft(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.arrowLeftAnim = this.arrowLeftAnimUp
        },
        doPageLeft: function () {
            !this.pagingLeft && !this.pagingRight && (this.pagingLeft = !0,
                this.pagingTime = ig.system.clock.delta())
        },
        doPageRight: function () {
            !this.pagingRight && !this.pagingLeft && (this.pagingRight = !0,
                this.pagingTime = ig.system.clock.delta())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.home-control").requires("impact.entity", "game.entities.button-more-games", "game.entities.audio-toggle", "game.entities.shop-control").defines(function () {
    EntityHomeControl = ig.Entity.extend({
        zIndex: 100,
        isHome: !0,
        bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.jpg"),
        titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
        time: 1,
        playButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/playgame.png", 110, 64), 0, [0, 1, 2]),
        playButtonPos: {
            x: 0,
            y: 590
        },
        playButtonRect: {
            x: -55,
            y: -32,
            w: 110,
            h: 64
        },
        playButtonOffset: {
            x: 0,
            y: 0
        },
        playButtonAlpha: 1,
        playButtonDown: !1,
        shopButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/shop.png", 72, 76), 0, [0, 1, 2]),
        shopButtonPos: {
            x: 0,
            y: 593
        },
        shopButtonRect: {
            x: -36,
            y: -38,
            w: 72,
            h: 76
        },
        shopButtonOffset: {
            x: 0,
            y: 0
        },
        shopButtonAlpha: 1,
        shopButtonDown: !1,
        infoButtonAnim: new ig.Animation(new ig.AnimationSheet("media/graphics/game/ui/mainmenu/info.png", 54, 56), 0, [0, 1, 2]),
        infoButtonPos: {
            x: 0,
            y: 38
        },
        infoButtonRect: {
            x: -27,
            y: -28,
            w: 54,
            h: 56
        },
        infoButtonOffset: {
            x: 0,
            y: 0
        },
        infoButtonAlpha: 1,
        infoButtonDown: !1,
        moregamesButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
        moregamesButtonPos: {
            x: 41,
            y: 598
        },
        moregamesButtonRect: {
            x: -31,
            y: -21,
            w: 62,
            h: 42
        },
        moregamesButtonOffset: {
            x: 0,
            y: 0
        },
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
            ig.global.wm || (0 < ig.soundHandler.musicVolume ? ig.soundHandler.bgmPlaying || (ig.soundHandler.playBackgroundMusic(),
                ig.soundHandler.setMusicVolume(ig.game.musicVolume),
                ig.soundHandler.setSfxVolume(ig.game.sfxVolume)) : ig.soundHandler.stopBackgroundMusic(),
                this.playButtonPos.x = ig.system.width / 2,
                this.shopButtonPos.x = ig.system.width - 10 - this.shopButtonRect.w / 2,
                this.infoButtonPos.x = ig.system.width - 10 - this.infoButtonRect.w / 2)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.moregames = ig.game.spawnEntity(EntityButtonMoreGames, this.moregamesButtonPos.x + this.moregamesButtonRect.x, this.moregamesButtonPos.y + this.moregamesButtonRect.y);
            this.moregames.divLayerName = "more-games";
            this.moregames.size.x = this.moregamesButtonRect.w;
            this.moregames.size.y = this.moregamesButtonRect.h;
            this.moregames.ready();
            this.audiotoggle = ig.game.spawnEntity(EntityAudioToggle, 37, 38);
            this.audiotoggle.ready();
            this.shop = ig.game.spawnEntity(EntityShopControl, 0, 0);
            this.shop.ready();
            ig.game.sortEntitiesDeferred();
            ig.global.wm || (0 < ig.soundHandler.musicVolume ? ig.soundHandler.bgmPlaying || ig.soundHandler.playBackgroundMusic() : ig.soundHandler.stopBackgroundMusic(),
            ig.game.doShop && (ig.game.doShop = !1,
                this.showShop()))
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
                var c = this.playButtonPos.x + this.playButtonOffset.x + this.playButtonRect.x
                    , d = this.playButtonPos.y + this.playButtonOffset.y + this.playButtonRect.y;
                this.playButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.playButtonAlpha;
                this.playButtonAnim.draw(c, d);
                b.restore();
                c = this.shopButtonPos.x + this.shopButtonOffset.x + this.shopButtonRect.x;
                d = this.shopButtonPos.y + this.shopButtonOffset.y + this.shopButtonRect.y;
                this.shopButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.shopButtonAlpha;
                this.shopButtonAnim.draw(c, d);
                b.restore();
                c = this.infoButtonPos.x + this.infoButtonOffset.x + this.infoButtonRect.x;
                d = this.infoButtonPos.y + this.infoButtonOffset.y + this.infoButtonRect.y;
                this.infoButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.infoButtonAlpha;
                this.infoButtonAnim.draw(c, d);
                b.restore();
                c = this.moregamesButtonPos.x + this.moregamesButtonOffset.x + this.moregamesButtonRect.x;
                d = this.moregamesButtonPos.y + this.moregamesButtonOffset.y + this.moregamesButtonRect.y;
                this.moregamesButtonDown && (d += 2);
                b.save();
                b.globalAlpha = this.mainMenuAlpha * this.moregamesButtonAlpha;
                this.moregamesButtonImage.draw(c, d);
                b.restore();
                b.globalAlpha = 1
            }
        },
        playGame: function () {
            ig.input.clearPressed();
            this.moregames.hide();
            ig.game.firstrun ? (ig.game.doTutorialFlag = !0,
                ig.game.firstrun = !1,
                ig.game.savePlayerStats()) : ig.game.doTutorialFlag = !1;
            ig.game.director.jumpTo(LevelGame)
        },
        playTutorial: function () {
            ig.input.clearPressed();
            this.moregames.hide();
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
            this.moregames.hide()
        },
        unpause: function () {
            this.menuPaused = !1;
            this.moregames.show()
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
            var b = {};
            b.x = this.pointer.pos.x + this.pointer.size.x / 2;
            b.y = this.pointer.pos.y + this.pointer.size.y / 2;
            b.w = 1;
            b.h = 1;
            var c = {};
            c.x = this.playButtonPos.x + this.playButtonRect.x;
            c.y = this.playButtonPos.y + this.playButtonRect.y;
            c.w = this.playButtonRect.w;
            c.h = this.playButtonRect.h;
            if (this.aabbCheck(b, c)) {
                if (this.playButtonDown = !1,
                    this.playButtonAnim.tile = 0,
                ig.ua.mobile || (this.playButtonAnim.tile = 1),
                ig.input.state("click") && (this.playButtonDown = !0,
                    this.playButtonAnim.tile = 2),
                    ig.input.released("click")) {
                    this.playButtonDown = !1;
                    ig.ua.mobile || (this.playButtonAnim.tile = 1);
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
                    this.playGame();
                    return
                }
            } else
                this.playButtonDown = !1,
                    this.playButtonAnim.tile = 0;
            c = {};
            c.x = this.shopButtonPos.x + this.shopButtonRect.x;
            c.y = this.shopButtonPos.y + this.shopButtonRect.y;
            c.w = this.shopButtonRect.w;
            c.h = this.shopButtonRect.h;
            if (this.aabbCheck(b, c)) {
                if (this.shopButtonDown = !1,
                    this.shopButtonAnim.tile = 0,
                ig.ua.mobile || (this.shopButtonAnim.tile = 1),
                ig.input.state("click") && (this.shopButtonDown = !0,
                    this.shopButtonAnim.tile = 2),
                    ig.input.released("click")) {
                    this.shopButtonDown = !1;
                    ig.ua.mobile || (this.shopButtonAnim.tile = 1);
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
                    this.showShop();
                    return
                }
            } else
                this.shopButtonDown = !1,
                    this.shopButtonAnim.tile = 0;
            c = {};
            c.x = this.infoButtonPos.x + this.infoButtonRect.x;
            c.y = this.infoButtonPos.y + this.infoButtonRect.y;
            c.w = this.infoButtonRect.w;
            c.h = this.infoButtonRect.h;
            if (this.aabbCheck(b, c)) {
                if (this.infoButtonDown = !1,
                    this.infoButtonAnim.tile = 0,
                ig.ua.mobile || (this.infoButtonAnim.tile = 1),
                ig.input.state("click") && (this.infoButtonDown = !0,
                    this.infoButtonAnim.tile = 2),
                    ig.input.released("click")) {
                    this.infoButtonDown = !1;
                    ig.ua.mobile || (this.infoButtonAnim.tile = 1);
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
                    this.playTutorial();
                    return
                }
            } else
                this.infoButtonDown = !1,
                    this.infoButtonAnim.tile = 0;
            c = {};
            c.x = this.moregamesButtonPos.x + this.moregamesButtonRect.x;
            c.y = this.moregamesButtonPos.y + this.moregamesButtonRect.y;
            c.w = this.moregamesButtonRect.w;
            c.h = this.moregamesButtonRect.h;
            this.aabbCheck(b, c) ? (this.moregamesButtonDown = !1,
            ig.input.state("click") && (this.moregamesButtonDown = !0),
            ig.input.released("click") && (this.moregamesButtonDown = !1,
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.moregamesButtonDown = !1
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
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.home-control", "game.entities.pointer-selector").defines(function () {
    LevelHome = {
        entities: [{
            type: "EntityHomeControl",
            x: 0,
            y: 0
        }, {
            type: "EntityPointerSelector",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.game-ui").requires("impact.entity").defines(function () {
    EntityGameUi = ig.Entity.extend({
        zIndex: 3E3,
        overlayAlpha: 1,
        homeSheet: new ig.AnimationSheet("media/graphics/game/ui/game/home.png", 50, 50),
        homeAnimUp: null,
        homeAnimDown: null,
        homeAnim: null,
        homeRect: {
            x: 582,
            y: 126,
            w: 50,
            h: 50
        },
        homeEndRect: {
            x: 270,
            y: 484,
            w: 50,
            h: 50
        },
        homeEndOffset: {
            x: 0,
            y: 0
        },
        restartSheet: new ig.AnimationSheet("media/graphics/game/ui/game/restart.png", 48, 52),
        restartAnimUp: null,
        restartAnimDown: null,
        restartAnim: null,
        restartEndRect: {
            x: 320,
            y: 483,
            w: 48,
            h: 52
        },
        restartEndOffset: {
            x: 0,
            y: 0
        },
        pauseSheet: new ig.AnimationSheet("media/graphics/game/ui/game/pause.png", 37, 40),
        pauseAnimUp: null,
        pauseAnimOver: null,
        pauseAnimDown: null,
        pauseAnim: null,
        pauseRect: {
            x: 582,
            y: 26,
            w: 37,
            h: 40
        },
        pauseOffset: {
            x: 0,
            y: 0
        },
        playRect: {
            x: 615,
            y: 5,
            w: 35,
            h: 44
        },
        lifeImage: new ig.Image("media/graphics/game/ui/game/lifeicon.png"),
        lifeRect: {
            x: 502,
            y: 26,
            w: 40,
            h: 40
        },
        lifeCountPos: {
            x: 557,
            y: 56
        },
        coinImage: new ig.Image("media/graphics/game/ui/game/coinicon.png"),
        coinRect: {
            x: 20,
            y: 25,
            w: 41,
            h: 42
        },
        coinCountPos: {
            x: 75,
            y: 56
        },
        cookieImage: new ig.Image("media/graphics/game/ui/game/cookieicon.png"),
        cookieRect: {
            x: 23,
            y: 76,
            w: 35,
            h: 41
        },
        cookieCountPos: {
            x: 95,
            y: 107
        },
        powerLevelGrad: null,
        powerLevelRect: {
            x: 60,
            y: 78,
            w: 10,
            h: 34
        },
        gameOverTitleImage: new ig.Image("media/graphics/game/ui/game/gameover.png"),
        gameOverTitleRect: {
            x: 153,
            y: 131,
            w: 333,
            h: 54
        },
        gameOverTitleOffset: {
            x: 0,
            y: 0
        },
        gameOverPanelImage: new ig.Image("media/graphics/game/ui/game/gameover-panel.png"),
        gameOverPanelRect: {
            x: 219,
            y: 307,
            w: 202,
            h: 156
        },
        gameOverPanelOffset: {
            x: 0,
            y: 0
        },
        gameOverBgImage: new ig.Image("media/graphics/game/ui/game/gameover-bg.png"),
        gameOverBgRect: {
            x: 263,
            y: 209,
            w: 114,
            h: 114
        },
        gameOverBgOffset: {
            x: 0,
            y: 0
        },
        gameOverAnimSheet: new ig.AnimationSheet("media/graphics/game/ui/game/gameover-anim.png", 114, 114),
        gameOverAnim: null,
        panelIconsImage: new ig.Image("media/graphics/game/ui/game/panel-icons.png"),
        panelIconsRect: {
            x: 269,
            y: 337,
            w: 49,
            h: 106
        },
        panelIconsOffset: {
            x: 0,
            y: 0
        },
        pausedTitleImage: new ig.Image("media/graphics/game/ui/game/paused-title.png"),
        pausedTitlePos: {
            x: 0,
            y: 220
        },
        coinEndCountPos: {
            x: 339,
            y: 390
        },
        cookieEndCountPos: {
            x: 339,
            y: 443
        },
        happyBgImage: new ig.Image("media/graphics/game/ui/game/levelup-anim-bg.png"),
        happyBgRect: {
            x: -17,
            y: 533,
            w: 114,
            h: 114
        },
        happyBgOffset: {
            x: 0,
            y: 0
        },
        happyAnimSheet: new ig.AnimationSheet("media/graphics/game/ui/game/levelup-anim.png", 114, 114),
        happyAnim: null,
        happyPanelImage: new ig.Image("media/graphics/game/ui/game/levelup-panel.png"),
        happyPanelRect: {
            x: 219,
            y: 307,
            w: 202,
            h: 155
        },
        happyPanelOffset: {
            x: 0,
            y: 0
        },
        fingerImage: new ig.Image("media/graphics/game/ui/game/finger.png"),
        fingerRect: {
            x: 0,
            y: 0,
            w: 50,
            h: 50
        },
        fingerOffset: {
            x: 0,
            y: 0
        },
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
        tutorialUIOffset: {
            x: 0,
            y: 0
        },
        tutorialID: 0,
        nextTutorialID: 0,
        tutorialTextOrder: 0,
        tutorialTextAlpha: 0,
        tutorialTextRect: {
            x: 40,
            y: 470,
            w: 400,
            h: 100
        },
        tutorialTime: 0,
        control: null,
        pointer: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.powerLevelGrad = ig.system.context.createLinearGradient(0, 0, 0, this.powerLevelRect.h);
            this.powerLevelGrad.addColorStop(0, "#cc1e1c");
            this.powerLevelGrad.addColorStop(1, "#f59f2a");
            this.pauseAnimUp = new ig.Animation(this.pauseSheet, 0.1, [0]);
            this.pauseAnimOver = new ig.Animation(this.pauseSheet, 0.1, [1]);
            this.pauseAnimDown = new ig.Animation(this.pauseSheet, 0.1, [2]);
            this.pauseAnim = this.pauseAnimUp;
            this.homeAnimUp = new ig.Animation(this.homeSheet, 0.1, [0]);
            this.homeAnimDown = new ig.Animation(this.homeSheet, 0.1, [1]);
            this.homeAnim = this.homeAnimUp;
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
            this.restartEndRect.x = ig.system.width / 2 + 40;
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
            this.control.gamePaused && (ig.system.context.globalAlpha = 0.5,
                ig.system.context.fillStyle = "#000000",
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
                ig.system.context.globalAlpha = 1,
                this.pausedTitleImage.draw(this.pausedTitlePos.x, this.pausedTitlePos.y));
            this.control.gamePaused && (b = ig.system.clock.delta() % 2,
            1 < b && (b = 1 - (b - 1)),
                ig.system.context.globalAlpha = 0.25 + 0.75 * b);
            this.pauseAnim.draw(this.pauseRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x, this.pauseRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y);
            this.control.gamePaused && (ig.system.context.globalAlpha = 1,
                this.homeAnim.draw(this.homeRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x, this.homeRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y));
            this.drawGameOver();
            if (this.control.gameStarting || this.control.gameEnding)
                ig.system.context.globalAlpha = this.overlayAlpha,
                    ig.system.context.fillStyle = "#000000",
                    ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
                    ig.system.context.globalAlpha = 1
        },
        drawGameStats: function () {
            this.lifeImage.draw(this.lifeRect.x, this.lifeRect.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(this.control.lifeCount, this.lifeCountPos.x + 2, this.lifeCountPos.y + 2);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(this.control.lifeCount, this.lifeCountPos.x, this.lifeCountPos.y);
            this.coinImage.draw(this.coinRect.x, this.coinRect.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(ig.game.money, this.coinCountPos.x + 2, this.coinCountPos.y + 2);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(ig.game.money, this.coinCountPos.x, this.coinCountPos.y);
            this.cookieImage.draw(this.cookieRect.x, this.cookieRect.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "20px mainfont, Helvetica, Verdana";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x + 2, this.cookieCountPos.y + 2);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x, this.cookieCountPos.y);
            var b = ig.system.context;
            b.save();
            var c = this.powerLevelRect.w
                , d = this.powerLevelRect.h
                , e = this.control.powerLevel;
            b.translate(this.powerLevelRect.x, this.powerLevelRect.y);
            b.fillStyle = "#000000";
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
                this.gameOverTitleImage.draw(this.gameOverTitleRect.x + this.gameOverTitleOffset.x, this.gameOverTitleRect.y + this.gameOverTitleOffset.y);
                this.gameOverPanelImage.draw(this.gameOverPanelRect.x + this.gameOverPanelOffset.x, this.gameOverPanelRect.y + this.gameOverPanelOffset.y);
                this.panelIconsImage.draw(this.panelIconsRect.x + this.panelIconsOffset.x, this.panelIconsRect.y + this.panelIconsOffset.y);
                ig.system.context.textAlign = "center";
                ig.system.context.font = "24px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillText(this.control.coinsCollected, this.coinEndCountPos.x + 2, this.coinEndCountPos.y + 2);
                ig.system.context.fillStyle = "#ffffff";
                ig.system.context.fillText(this.control.coinsCollected, this.coinEndCountPos.x, this.coinEndCountPos.y);
                ig.system.context.textAlign = "center";
                ig.system.context.font = "24px mainfont, Helvetica, Verdana";
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillText(ig.game.cookies, this.cookieEndCountPos.x + 2, this.cookieEndCountPos.y + 2);
                ig.system.context.fillStyle = "#ffffff";
                ig.system.context.fillText(ig.game.cookies, this.cookieEndCountPos.x, this.cookieEndCountPos.y);
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
            this.control.gameOver ? (!b && this.aabbCheck(c, this.restartEndRect) ? (ig.input.state("click") && (this.restartAnim = this.restartAnimDown),
            ig.input.released("click") && (this.restartAnim = this.restartAnimUp,
                this.control.restartGame(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)),
                b = !0) : this.restartAnim = this.restartAnimUp,
                !b && this.aabbCheck(c, this.homeEndRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown),
                ig.input.released("click") && (this.homeAnim = this.homeAnimUp,
                    this.control.quitGame(),
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp) : (!b && this.aabbCheck(c, this.pauseRect) ? (ig.input.state("click") && (this.pauseAnim = this.pauseAnimDown),
            ig.input.released("click") && (this.pauseAnim = this.pauseAnimOver,
                this.control.togglePauseGame(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button)),
                b = !0) : (this.pauseAnim = this.pauseAnimUp,
            this.control.gamePaused && (this.pauseAnim = this.pauseAnimDown)),
            this.control.gamePaused && (!b && this.aabbCheck(c, this.homeRect) ? (ig.input.state("click") && (this.homeAnim = this.homeAnimDown),
            ig.input.released("click") && (this.homeAnim = this.homeAnimUp,
                this.control.quitGame(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))) : this.homeAnim = this.homeAnimUp))
        },
        update: function () {
            this.checkMainClicks();
            this.control.gameOver && this.gameOverAnim.update();
            if (this.control.gameStarting) {
                var b = ig.system.clock.delta() - this.control.gameStartTime
                    , b = b / 0.25;
                1 < b && (b = 1);
                this.overlayAlpha = 1 - b
            } else
                this.control.gameEnding && (b = ig.system.clock.delta() - this.control.gameEndTime,
                    b /= 0.25,
                1 < b && (b = 1),
                    this.overlayAlpha = b);
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
        drawArrow: function (b, c, d, e) {
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
        },
        checkTutorialClicks: function () {
            if (this.control.tutorialMode && !this.tutorialUIHidingFlag && (!this.tutorialUIShowingFlag && !this.tutorialUITickFlag) && (0 == this.control.tutorialStage || 1 == this.control.tutorialStage || 2 == this.control.tutorialStage || 13 == this.control.tutorialStage)) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                this.aabbCheck(b, this.tutorialTextRect) && ig.input.released("click") && (this.control.doNextTutorialStage(),
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button));
                ig.input.released("enter") && (this.control.doNextTutorialStage(),
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button))
            }
        },
        updateTutorialUI: function () {
            if (this.tutorialUIDrawFlag) {
                if (this.tutorialUIShowingFlag) {
                    var b = 1 - this.tutorialUIOffset.x / ig.system.width;
                    0 > b && (b = 0);
                    1 < b && (b = 1);
                    this.tutorialUIAlpha = 0.25 + 0.75 * b;
                    0 < this.tutorialUIOffset.x ? this.tutorialUIOffset.x -= 2E3 * ig.system.tick : 0 > this.tutorialUIOffset.x && (this.tutorialUIOffset.x += 2E3 * ig.system.tick,
                    0 <= this.tutorialUIOffset.x && (this.tutorialUIOffset.x = 0,
                        this.tutorialUIShowingFlag = !1,
                        this.happyAnim.rewind(),
                        this.tutorialUITickStartTime = ig.system.clock.delta(),
                        this.tutorialUITickFlag = !0,
                        this.tutorialUIAlpha = 1))
                } else
                    this.tutorialUIHidingFlag && (b = this.tutorialUIOffset.x / -ig.system.width,
                    0 > b && (b = 0),
                    1 < b && (b = 1),
                        this.tutorialUIAlpha = 0.25 + 0.75 * (1 - b),
                        this.tutorialUIOffset.x -= 2E3 * ig.system.tick,
                    this.tutorialUIOffset.x <= -ig.system.width && (this.tutorialUITickFlag = this.tutorialUIFadeFlag = this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = this.tutorialUIHidingFlag = !1,
                        this.tutorialUIAlpha = this.tutorialTextAlpha = 0));
                if (this.tutorialUITickFlag) {
                    var b = (_STRINGS.Tutorial[this.tutorialID][0] + _STRINGS.Tutorial[this.tutorialID][1]).length
                        , c = (ig.system.clock.delta() - this.tutorialUITickStartTime) / (0.02 * b);
                    1 < c && (c = 1);
                    this.tutorialTextOrder = Math.floor(c * b);
                    1 <= c && (this.tutorialUITickFlag = !1,
                        this.tutorialTextOrder = b);
                    this.tutorialTextAlpha = 1
                } else
                    this.tutorialUIFadeFlag && (c = (ig.system.clock.delta() - this.tutorialUIFadeTime) / 0.25,
                        1 <= c ? (this.tutorialID = this.nextTutorialID,
                            this.tutorialUIFadeFlag = !1,
                            this.happyAnim.rewind(),
                            this.tutorialUITickStartTime = ig.system.clock.delta(),
                            this.tutorialUITickFlag = !0,
                            this.tutorialTextOrder = this.tutorialTextAlpha = 0) : this.tutorialTextAlpha = 1 - c);
                !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && (this.happyAnim.update(),
                this.tutorialUITickFlag || this.checkTutorialClicks())
            }
        },
        showTutorialUI: function (b) {
            this.tutorialUIDrawFlag ? this.tutorialUIHidingFlag ? (this.tutorialUIHidingFlag = !1,
                this.tutorialUIShowingFlag = !0,
                this.tutorialUIShowTime = ig.system.clock.delta(),
                this.tutorialUIOffset.x = ig.system.width,
                this.happyAnim.rewind(),
                this.tutorialID = b,
                this.tutorialTextAlpha = this.tutorialTextOrder = 0) : (this.tutorialUIFadeFlag = !0,
                this.tutorialUIFadeTime = ig.system.clock.delta(),
                this.nextTutorialID = b) : (this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = !0,
                this.tutorialUIShowTime = ig.system.clock.delta(),
                this.tutorialUIOffset.x = ig.system.width,
                this.happyAnim.rewind(),
                this.tutorialID = b,
                this.tutorialTextAlpha = this.tutorialTextOrder = 0)
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
                b.strokeStyle = "rgba(0,0,0,0.75)";
                var c = this.tutorialTextRect.x + this.tutorialUIOffset.x
                    , d = this.tutorialTextRect.y + this.tutorialUIOffset.y
                    , e = this.tutorialTextRect.w
                    , f = this.tutorialTextRect.h;
                this.roundRect(b, c, d, e, f, 20, !0, !1);
                b.restore();
                b.globalAlpha = 1;
                this.tutorialUIShowingFlag || this.drawText();
                if (!this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUITickFlag && !this.tutorialUIFadeFlag && (0 == this.control.tutorialStage || 1 == this.control.tutorialStage || 2 == this.control.tutorialStage || 13 == this.control.tutorialStage) && 0.5 < ig.system.clock.delta() - this.control.tutorialPausedTime)
                    c = c + e - 20,
                        d = d + f - 10,
                        e = this.tutorialTime % 2,
                    1 < e && (e = 2 - e),
                        e = 0.25 + 0.75 * e,
                        b.save(),
                        b.font = "12px mainfont, Helvetica, Verdana",
                        b.translate(c, d),
                        b.textAlign = "right",
                        b.fillStyle = "rgba(255,255,255," + e + ")",
                        b.fillText(_STRINGS.UI["continue"], 0, 0),
                        b.restore();
                !this.tutorialUIShowingFlag && !this.tutorialUIHidingFlag && !this.tutorialUIFadeFlag && (3 == this.control.tutorialStage ? this.drawJumpInstructions() : 5 == this.control.tutorialStage ? this.drawRightInstructions() : 7 == this.control.tutorialStage || 9 == this.control.tutorialStage ? this.drawLeftInstructions() : 11 == this.control.tutorialStage && this.drawSlideInstructions());
                b.globalAlpha = this.tutorialUIAlpha;
                this.happyBgImage.draw(this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x, this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y);
                this.happyAnim.draw(this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x, this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y);
                b.globalAlpha = 1
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
                var f = _STRINGS.Tutorial[this.tutorialID][0]
                    , j = _STRINGS.Tutorial[this.tutorialID][1];
                b < f.length ? (f = f.substr(0, b),
                    j = "") : b < f.length + j.length && (j = j.substr(0, b - f.length));
                e.save();
                e.font = "16px mainfont, Helvetica, Verdana";
                b = 2 * e.measureText("m").width / 3;
                e.translate(c, d + b);
                e.textAlign = "left";
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
                var c = ig.system.width / 2 + 200
                    , d = this.tutorialTextRect.y - 50
                    , e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 140, 80, 180, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else
                    0.5 <= e && 0.75 > e ? (f = (e - 0.5) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8,
                    0 > e && (e = 2 * Math.PI + e),
                        d -= 100 * f) : (f = (e - 0.75) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8 + f * Math.PI / 4,
                    0 > e && (e = 2 * Math.PI + e),
                        d -= 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else
                c = ig.system.width / 2 + 150,
                    d = this.tutorialTextRect.y - 100,
                    b.fillStyle = "rgba(0,0,0,0.75)",
                    b.strokeStyle = "rgba(0,0,0,0.75)",
                    this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
                    e = this.tutorialTime % 2,
                1 < e && (e = 2 - e),
                    b.globalAlpha = 0.25 + 0.75 * e,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d + 10, c, d - 10),
                    b.globalAlpha = 1,
                    d += 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d - 10, c, d + 10),
                    c -= 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c + 10, d, c - 10, d),
                    c += 90,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c - 10, d, c + 10, d)
        },
        drawSlideInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200
                    , d = this.tutorialTextRect.y - 50 - 100
                    , e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 40, 80, 180, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else
                    0.5 <= e && 0.75 > e ? (f = (e - 0.5) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8,
                    0 > e && (e = 2 * Math.PI + e),
                        d += 100 * f) : (f = (e - 0.75) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8 + f * Math.PI / 4,
                    0 > e && (e = 2 * Math.PI + e),
                        d += 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else
                c = ig.system.width / 2 + 150,
                    d = this.tutorialTextRect.y - 100,
                    b.fillStyle = "rgba(0,0,0,0.75)",
                    b.strokeStyle = "rgba(0,0,0,0.75)",
                    this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d + 10, c, d - 10),
                    e = this.tutorialTime % 2,
                1 < e && (e = 2 - e),
                    b.globalAlpha = 0.25 + 0.75 * e,
                    d += 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d - 10, c, d + 10),
                    b.globalAlpha = 1,
                    c -= 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c + 10, d, c - 10, d),
                    c += 90,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c - 10, d, c + 10, d)
        },
        drawLeftInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 200
                    , d = this.tutorialTextRect.y - 50
                    , e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 140, d - 40, 180, 80, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else
                    0.5 <= e && 0.75 > e ? (f = (e - 0.5) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8,
                    0 > e && (e = 2 * Math.PI + e),
                        c -= 100 * f) : (f = (e - 0.75) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8 + f * Math.PI / 4,
                    0 > e && (e = 2 * Math.PI + e),
                        c -= 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else
                c = ig.system.width / 2 + 150,
                    d = this.tutorialTextRect.y - 100,
                    b.fillStyle = "rgba(0,0,0,0.75)",
                    b.strokeStyle = "rgba(0,0,0,0.75)",
                    this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d + 10, c, d - 10),
                    d += 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d - 10, c, d + 10),
                    e = this.tutorialTime % 2,
                1 < e && (e = 2 - e),
                    b.globalAlpha = 0.25 + 0.75 * e,
                    c -= 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c + 10, d, c - 10, d),
                    b.globalAlpha = 1,
                    c += 90,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c - 10, d, c + 10, d)
        },
        drawRightInstructions: function () {
            var b = ig.system.context;
            if (ig.ua.mobile) {
                var c = ig.system.width / 2 + 100
                    , d = this.tutorialTextRect.y - 50
                    , e = 0;
                b.fillStyle = "rgba(0,0,0,0.75)";
                b.strokeStyle = "rgba(0,0,0,0.75)";
                this.roundRect(b, c - 40, d - 40, 180, 80, 10, !0, !1);
                e = this.tutorialTime % 1.5;
                if (0 <= e && 0.5 > e) {
                    var f = e / 0.25;
                    1 < f && (f = 1);
                    e = -Math.PI / 8 + (1 - f) * Math.PI / 4;
                    0 > e && (e = 2 * Math.PI + e)
                } else
                    0.5 <= e && 0.75 > e ? (f = (e - 0.5) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8,
                    0 > e && (e = 2 * Math.PI + e),
                        c += 100 * f) : (f = (e - 0.75) / 0.25,
                    1 < f && (f = 1),
                        e = -Math.PI / 8 + f * Math.PI / 4,
                    0 > e && (e = 2 * Math.PI + e),
                        c += 100);
                b.save();
                b.translate(c, d);
                b.rotate(e);
                this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
                b.restore()
            } else
                c = ig.system.width / 2 + 150,
                    d = this.tutorialTextRect.y - 100,
                    b.fillStyle = "rgba(0,0,0,0.75)",
                    b.strokeStyle = "rgba(0,0,0,0.75)",
                    this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d + 10, c, d - 10),
                    d += 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c, d - 10, c, d + 10),
                    c -= 45,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c + 10, d, c - 10, d),
                    e = this.tutorialTime % 2,
                1 < e && (e = 2 - e),
                    b.globalAlpha = 0.25 + 0.75 * e,
                    c += 90,
                    b.fillStyle = "rgba(255,255,255,1)",
                    b.strokeStyle = "rgba(255,255,255,1)",
                    this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
                    this.drawArrow(c - 10, d, c + 10, d),
                    b.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-character").requires("impact.entity").defines(function () {
    EntityGameCharacter = ig.Entity.extend({
        offset: {
            x: 75,
            y: 240
        },
        size: {
            x: 1,
            y: 1
        },
        charWidth: 50,
        charHeight: 50,
        runContactRect: {
            x: -25,
            y: -50,
            w: 50,
            h: 50
        },
        jumpContactRect: {
            x: -25,
            y: -100,
            w: 50,
            h: 50
        },
        jumpOffset: 0,
        jumpTime: 0,
        alpha: 1,
        zIndex: 1200,
        ballAnimSheet: new ig.AnimationSheet("media/graphics/game/character/ball_11x2.png", 150, 300),
        runAnimSheet: new ig.AnimationSheet("media/graphics/game/character/run_7x2.png", 150, 300),
        slideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/slide_5x4.png", 150, 300),
        jumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/jump_9x2.png", 150, 300),
        runAnim: null,
        slideAnim: null,
        jumpAnim: null,
        anim: null,
        skateboardRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/skaterun_8x2.png", 150, 300),
        skateboardJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/skatejump_9x2.png", 150, 300),
        rollerskateRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerrun_5x1.png", 150, 300),
        rollerskateSlideAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerslide_9x2.png", 150, 300),
        rollerskateJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rollerjump_8x2.png", 150, 300),
        rocketRunAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rocketrun_7x2.png", 150, 300),
        rocketJumpAnimSheet: new ig.AnimationSheet("media/graphics/game/character/rocketjump_7x3.png", 150, 300),
        carpetAnimSheet: new ig.AnimationSheet("media/graphics/game/character/carpet_5x2.png", 150, 300),
        hoverboardAnimSheet: new ig.AnimationSheet("media/graphics/game/character/hoverboard_4x2.png", 150, 300),
        growTime: 0,
        growFPS: 0.03,
        growFrame: 0,
        growImage: [new ig.Image("media/graphics/game/character/grow-anim/frame_0000.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0001.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0002.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0003.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0004.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0005.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0006.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0007.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0008.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0009.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0010.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0011.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0012.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0013.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0014.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0015.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0016.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0017.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0018.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0019.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0020.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0021.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0022.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0023.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0024.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0025.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0026.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0027.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0028.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0029.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0030.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0031.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0032.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0033.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0034.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0035.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0036.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0037.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0038.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0039.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0040.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0041.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0042.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0043.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0044.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0045.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0046.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0047.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0048.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0049.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0050.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0051.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0052.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0053.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0054.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0055.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0056.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0057.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0058.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0059.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0060.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0061.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0062.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0063.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0064.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0065.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0066.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0067.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0068.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0069.png"), new ig.Image("media/graphics/game/character/grow-anim/frame_0070.png")],
        STATES: {
            RUN: 0,
            SLIDE: 1,
            JUMP: 2,
            POWERED: 3,
            INTRO: 4
        },
        state: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 13,
        scale: 1,
        scaleModifier: 1,
        zWidth: 1,
        invulnerableDuration: 2,
        invulnerableStartTime: 0,
        isInvulnerable: !1,
        isShaking: !1,
        shakeDuration: 0.25,
        shakeStartTime: 0,
        shakeOffset: {
            x: 0,
            y: 0
        },
        shakeAmount: 3,
        queuedPowerUp: !1,
        stepSoundPlayed: 0,
        stepSoundPlayedTime: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.ballAnim = new ig.Animation(this.ballAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], !1);
            ig.game.getItemUpgradeEquipped(0) ? (this.runAnim = new ig.Animation(this.skateboardRunAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], !1),
                this.jumpAnim = new ig.Animation(this.skateboardJumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16], !0),
                this.slideAnim = new ig.Animation(this.slideAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18], !0)) : ig.game.getItemUpgradeEquipped(1) ? (this.runAnim = new ig.Animation(this.rollerskateRunAnimSheet, 0.03, [0, 1, 2, 3, 4], !1),
                this.jumpAnim = new ig.Animation(this.rollerskateJumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15], !0),
                this.slideAnim = new ig.Animation(this.rollerskateSlideAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17], !0)) : (ig.game.getItemUpgradeEquipped(2) ? (this.runAnim = new ig.Animation(this.rocketRunAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], !1),
                this.jumpAnim = new ig.Animation(this.rocketJumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], !0)) : ig.game.getItemUpgradeEquipped(3) ? this.jumpAnim = this.runAnim = new ig.Animation(this.carpetAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1) : ig.game.getItemUpgradeEquipped(4) ? this.jumpAnim = this.runAnim = new ig.Animation(this.hoverboardAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7], !1) : (this.runAnim = new ig.Animation(this.runAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], !1),
                this.jumpAnim = new ig.Animation(this.jumpAnimSheet, 0.03, [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 15, 16], !0)),
                this.slideAnim = new ig.Animation(this.slideAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18], !0));
            this.anim = this.runAnim;
            this.charWidth *= this.scaleModifier;
            this.charHeight *= this.scaleModifier;
            this.state = this.STATES.INTRO
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred();
            this.growTime = this.control.gameTime
        },
        draw: function () {
            if (this.state == this.STATES.INTRO) {
                var b = this.pos.x
                    , c = this.pos.y;
                ig.system.context.save();
                ig.system.context.translate(this.bitwiseRound(b), this.bitwiseRound(c));
                ig.system.context.scale(0.5, 0.5);
                this.growImage[this.growFrame].draw(-126, -280);
                ig.system.context.restore()
            } else {
                b = this.bitwiseRound(this.pos.x);
                c = this.bitwiseRound(this.pos.y);
                0 > c && (c = 0);
                if (0 < c) {
                    var d = 1 - -this.jumpOffset / 500;
                    0 > d && (d = 0);
                    var e = 30 * d
                        , f = ig.system.context;
                    f.save();
                    f.translate(b, c);
                    f.scale(1, 0.5);
                    f.beginPath();
                    f.arc(0, 0, e, 0, 2 * Math.PI, !1);
                    f.fillStyle = "rgba(0,0,0," + 0.2 * d + ")";
                    f.fill();
                    f.restore()
                }
                b = this.pos.x - this.offset.x + this.shakeOffset.x;
                c = this.pos.y + this.jumpOffset - this.offset.y + this.shakeOffset.y;
                ig.system.context.globalAlpha = this.alpha;
                this.anim.draw(this.bitwiseRound(b), this.bitwiseRound(c));
                ig.system.context.globalAlpha = 1
            }
        },
        update: function () {
            if (!this.control.gamePaused && !this.control.gameOver && !this.control.gameStarting) {
                this.parent();
                if (this.state == this.STATES.INTRO) {
                    var b = this.control.gameTime - this.growTime;
                    this.growFrame = Math.floor(b / this.growFPS);
                    if (this.growFrame >= this.growImage.length && (this.growFrame = this.growImage.length - 1,
                    2.5 < b)) {
                        this.run();
                        return
                    }
                }
                this.state == this.STATES.RUN && (ig.game.getItemUpgradeEquipped(0) || ig.game.getItemUpgradeEquipped(1) ? (b = ig.system.clock.delta() - this.stepSoundPlayedTime,
                2 < b && (this.stepSoundPlayedTime = ig.system.clock.delta(),
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.skate))) : !ig.game.getItemUpgradeEquipped(3) && !ig.game.getItemUpgradeEquipped(4) && (4 == this.runAnim.frame && 4 != this.stepSoundPlayed && (this.stepSoundPlayed = 4,
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)),
                11 == this.runAnim.frame && 11 != this.stepSoundPlayed && (this.stepSoundPlayed = 11,
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step))));
                this.state == this.STATES.POWERED && (3 == this.ballAnim.frame && 3 != this.stepSoundPlayed && (this.stepSoundPlayed = 3,
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)),
                8 == this.ballAnim.frame && 8 != this.stepSoundPlayed && (this.stepSoundPlayed = 8,
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)),
                14 == this.ballAnim.frame && 14 != this.stepSoundPlayed && (this.stepSoundPlayed = 14,
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)),
                19 == this.ballAnim.frame && 19 != this.stepSoundPlayed && (this.stepSoundPlayed = 19,
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)));
                this.control.tutorialPauseMode || (this.anim.update(),
                this.isInvulnerable && (b = this.control.gameTime - this.invulnerableStartTime,
                    b >= this.invulnerableDuration ? (this.alpha = 1,
                        this.isInvulnerable = !1) : (b %= 0.5,
                    0.25 < b && (b = 0.25 - (b - 0.25)),
                        this.alpha = 0.25 + 0.75 * (b / 0.25))),
                this.isShaking && (b = this.control.gameTime - this.shakeStartTime,
                b >= this.shakeDuration && (this.shakeOffset.x = 0,
                    this.shakeOffset.y = 0,
                    this.isShaking = !1)),
                this.queuedPowerUp && (this.state == this.STATES.RUN || this.state == this.STATES.SLIDE) && this.powerUp())
            }
        },
        run: function () {
            this.state != this.STATES.POWERED && (this.state = this.STATES.RUN,
                this.anim = this.runAnim,
                this.anim.rewind(),
                this.zIndex = 1200 - this.zValue,
                ig.game.sortEntitiesDeferred())
        },
        slide: function () {
            this.state != this.STATES.POWERED && (this.state = this.STATES.SLIDE,
                this.anim = this.slideAnim,
                this.anim.rewind(),
                this.zIndex = 1200 - this.zValue,
                this.zIndex -= 1,
                ig.game.sortEntitiesDeferred(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.slide))
        },
        jump: function () {
            this.jumpTime = this.control.gameTime;
            this.zIndex = 1200 - this.zValue;
            this.zIndex += 10;
            ig.game.sortEntitiesDeferred();
            this.state != this.STATES.POWERED && !ig.game.getItemUpgradeEquipped(3) && !ig.game.getItemUpgradeEquipped(4) && (this.state = this.STATES.JUMP,
                this.anim = this.jumpAnim,
                this.anim.gotoFrame(0),
                this.anim.rewind());
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.jump)
        },
        queuePowerUp: function () {
            this.queuedPowerUp = !0
        },
        powerUp: function () {
            this.queuedPowerUp = !1;
            this.state != this.STATES.POWERED && (this.state = this.STATES.POWERED,
                this.anim = this.ballAnim,
                this.anim.rewind(),
                this.zIndex = 1200 - this.zValue,
                ig.game.sortEntitiesDeferred())
        },
        powerDown: function () {
            if (0 > this.jumpOffset) {
                this.state = this.STATES.JUMP;
                this.anim = this.jumpAnim;
                var b = Math.floor((this.control.gameTime - this.jumpTime) / this.anim.frameTime);
                this.anim.rewind();
                this.anim.gotoFrame(b)
            } else
                this.state = this.STATES.RUN,
                    this.run();
            this.invulnerableStartTime = this.control.gameTime - 1;
            this.isInvulnerable = !0
        },
        shake: function () {
            this.isShaking = !0;
            this.shakeStartTime = this.control.gameTime;
            this.shakeOffset.x = -this.shakeAmount + 2 * Math.random() * this.shakeAmount;
            this.shakeOffset.y = -this.shakeAmount
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-bgObject").requires("impact.entity").defines(function () {
    EntityGameBgObject = ig.Entity.extend({
        offset: {
            x: 140,
            y: 362
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: 0,
            y: 0
        },
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/bg00.png"), new ig.Image("media/graphics/game/objects/bg01.png"), new ig.Image("media/graphics/game/objects/bg02.png"), new ig.Image("media/graphics/game/objects/bg03.png"), new ig.Image("media/graphics/game/objects/bg04.png"), new ig.Image("media/graphics/game/objects/bg05.png"), new ig.Image("media/graphics/game/objects/bg06.png"), new ig.Image("media/graphics/game/objects/bg07.png"), new ig.Image("media/graphics/game/objects/bg08.png"), new ig.Image("media/graphics/game/objects/bg09.png"), new ig.Image("media/graphics/game/objects/bg10.png"), new ig.Image("media/graphics/game/objects/bg11.png"), new ig.Image("media/graphics/game/objects/bg12.png"), new ig.Image("media/graphics/game/objects/bg13.png"), new ig.Image("media/graphics/game/objects/bg14.png"), new ig.Image("media/graphics/game/objects/bg15.png"), new ig.Image("media/graphics/game/objects/bg16.png"), new ig.Image("media/graphics/game/objects/bg17.png"), new ig.Image("media/graphics/game/objects/bg18.png"), new ig.Image("media/graphics/game/objects/bg19.png"), new ig.Image("media/graphics/game/objects/bg20.png"), new ig.Image("media/graphics/game/objects/bg21.png"), new ig.Image("media/graphics/game/objects/bg22.png"), new ig.Image("media/graphics/game/objects/bg23.png"), new ig.Image("media/graphics/game/objects/bg24.png"), new ig.Image("media/graphics/game/objects/bg25.png"), new ig.Image("media/graphics/game/objects/bg26.png"), new ig.Image("media/graphics/game/objects/bg27.png")],
        imageId: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.setImageId(this.imageId);
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function (b) {
            null != b && (this.imageId = b,
                this.image = this.images[b],
                this.offset.x = this.image.width / 2,
                this.offset.y = this.image.height)
        },
        draw: function () {
            var b = this.worldPos.x
                , c = this.worldPos.y
                , d = this.zValue
                , e = this.control.cameraDistance;
            -10 > d ? (this.killed = !0,
                this.control.cleanObjects(),
                this.kill()) : (d = e / d,
                b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d,
                c = this.control.cameraPos.y * d + ig.system.height - c * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y),
                this.pos.x = b,
                this.pos.y = c,
                b = this.control.horizonLine.y,
                e = this.control.horizonLine.y + this.control.distanceFogHeight,
            c < b || (c < e && (ig.system.context.globalAlpha = (c - b) / (e - b)),
                d *= this.scaleModifier,
                c = this.pos.y - this.offset.y * d - ig.game._rscreen.y,
                ig.system.context.drawImage(this.image.data, this.bitwiseRound(this.pos.x - this.offset.x * d - ig.game._rscreen.x), this.bitwiseRound(c), this.image.width * d, this.image.height * d),
                ig.system.context.globalAlpha = 1))
        },
        update: function () {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO && (this.control.tutorialPauseMode || this.moveForward(-this.control.runSpeed * ig.system.tick))
        },
        moveForward: function (b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-obstacle").requires("impact.entity").defines(function () {
    EntityGameObstacle = ig.Entity.extend({
        offset: {
            x: 72,
            y: 100
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: -58,
            y: -95,
            w: 119,
            h: 92
        },
        zIndex: 1200,
        image: null,
        images: [new ig.Image("media/graphics/game/objects/obstacle00.png"), new ig.Image("media/graphics/game/objects/obstacle01.png"), new ig.Image("media/graphics/game/objects/obstacle02.png"), new ig.Image("media/graphics/game/objects/obstacle03.png"), new ig.Image("media/graphics/game/objects/obstacle04.png"), new ig.Image("media/graphics/game/objects/obstacle05.png"), new ig.Image("media/graphics/game/objects/obstacle06.png"), new ig.Image("media/graphics/game/objects/obstacle07.png"), new ig.Image("media/graphics/game/objects/obstacle08.png"), new ig.Image("media/graphics/game/objects/obstacle09.png"), new ig.Image("media/graphics/game/objects/obstacle10.png"), new ig.Image("media/graphics/game/objects/obstacle11.png")],
        imageId: 0,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 1,
        slidable: !1,
        zWidth: 0,
        knockedOut: !1,
        knockOutPos: {
            x: 0,
            y: 0
        },
        knockOutOffset: {
            x: 0,
            y: 0
        },
        knockOutGravity: 1200,
        knockOutVector: {
            x: 0,
            y: 0
        },
        knockOutAlpha: 0,
        knockOutAngle: 0,
        knockOutDirection: 1,
        knockOutStopped: !1,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.setImageId(this.imageId);
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setImageId: function (b) {
            if (null != b) {
                if (0 == b || 1 == b || 2 == b)
                    b = 0 + Math.floor(3 * Math.random());
                if (8 == b || 9 == b)
                    b = 8 + Math.floor(2 * Math.random());
                if (10 == b || 11 == b)
                    b = 10 + Math.floor(2 * Math.random());
                this.imageId = b;
                this.image = this.images[b];
                this.offset.x = this.image.width / 2;
                this.offset.y = this.image.height;
                this.slidable = 3 == b ? !0 : !1;
                this.contactRect.w = this.image.width * this.scaleModifier;
                this.contactRect.h = this.image.height / 2 * this.scaleModifier;
                this.contactRect.x = -this.contactRect.w / 2;
                this.contactRect.y = -this.contactRect.h;
                if (5 == b || 6 == b || 8 == b || 9 == b)
                    this.zWidth = 3;
                if (10 == b || 11 == b)
                    this.zWidth = 5
            }
        },
        draw: function () {
            var b = this.worldPos.x
                , c = this.worldPos.y
                , d = this.zValue
                , e = this.control.cameraDistance;
            if (-10 > d)
                this.killed = !0,
                    this.control.cleanObjects(),
                    this.kill();
            else {
                var f = 0;
                this.knockedOut && (b += this.knockOutPos.x,
                    c -= this.knockOutPos.y,
                    f = this.knockOutAngle);
                d = e / d;
                b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d;
                c = this.control.cameraPos.y * d + ig.system.height - c * d - (1 - d) * (ig.system.height - this.control.vanishingPoint.y);
                this.pos.x = b;
                this.pos.y = c;
                b = this.control.horizonLine.y;
                e = this.control.horizonLine.y + this.control.distanceFogHeight;
                if (!(c < b)) {
                    c < e && (ig.system.context.globalAlpha = (c - b) / (e - b));
                    this.knockedOut && (ig.system.context.globalAlpha *= this.knockOutAlpha);
                    var j = d * this.scaleModifier
                        , d = this.pos.x
                        , c = this.pos.y
                        , b = -this.offset.x * j
                        , e = -this.offset.y * j
                        , n = this.image.width * j
                        , j = this.image.height * j;
                    0 > n && (n = 0);
                    0 > j && (j = 0);
                    ig.system.context.save();
                    ig.system.context.translate(d, c);
                    0 < f && ig.system.context.rotate(f);
                    ig.system.context.drawImage(this.image.data, b, e, n, j);
                    ig.system.context.restore();
                    ig.system.context.globalAlpha = 1
                }
            }
        },
        update: function () {
            this.control.gamePaused || this.control.gameOver || this.control.gameStarting || this.control.character.state != this.control.character.STATES.INTRO && (this.control.tutorialPauseMode || this.moveForward(-this.control.runSpeed * ig.system.tick))
        },
        moveForward: function (b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred();
            this.knockedOut && (this.zIndex = 2E3,
                ig.game.sortEntitiesDeferred(),
                this.knockOutPos.x += this.knockOutVector.x * ig.system.tick,
                this.knockOutPos.y += this.knockOutVector.y * ig.system.tick,
            0 < this.knockOutPos.y && (this.knockOutPos.y = 0,
                this.knockOutVector.x = 0,
                this.knockOutVector.y = 0,
                this.knockOutStopped = !0),
            this.knockOutStopped || (this.knockOutVector.y += this.knockOutGravity * ig.system.tick,
                this.knockOutAngle += 3 * (this.knockOutDirection * Math.PI) * ig.system.tick,
            0 > this.knockOutAngle && (this.knockOutAngle = 2 * Math.PI + this.knockOutAngle),
                this.knockOutAlpha -= 2 * ig.system.tick,
            0 > this.knockOutAlpha && (this.knockOutAlpha = 0,
                this.knockOutStopped = !0)))
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        },
        knockOut: function () {
            if (!this.knockedOut) {
                this.knockedOut = !0;
                var b = 200 + 100 * Math.random()
                    , c = 1;
                85 < this.worldPos.x ? c = 1 : -85 > this.worldPos.x ? c = -1 : 0.5 <= Math.random() && (c = -1);
                this.knockOutVector.x = b * c / 0.25;
                this.knockOutVector.y = -1200;
                this.knockOutPos.x = 0;
                this.knockOutPos.y = 0;
                this.knockOutAlpha = 1;
                this.knockOutAngle = 0;
                this.knockOutDirection = c
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-pickup").requires("impact.entity").defines(function () {
    EntityGamePickup = ig.Entity.extend({
        offset: {
            x: 68,
            y: 126
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: -57,
            y: -109,
            w: 114,
            h: 106
        },
        zIndex: 1200,
        cookieImage: new ig.Image("media/graphics/game/pickups/cookie.png"),
        cookieOffset: {
            x: 0,
            y: 0
        },
        cookieDown: !1,
        coinAnimSheet: new ig.AnimationSheet("media/graphics/game/pickups/coin_1x10.png", 70, 66),
        anim: null,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        objType: 2,
        zWidth: 0,
        pickupId: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.anim = new ig.Animation(this.coinAnimSheet, 0.08, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1);
            this.offset.x = 35;
            this.offset.y = 66;
            this.contactRect.w = 70;
            this.contactRect.h = 66;
            this.contactRect.x = -this.contactRect.w / 2;
            this.contactRect.y = -this.contactRect.h
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.scale = this.control.cameraDistance / this.zValue;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        setPickupId: function (b) {
            null != b && (this.pickupId = b,
                1 == b ? (this.offset.x = this.cookieImage.width / 2,
                    this.offset.y = this.cookieImage.height,
                    this.contactRect.w = this.cookieImage.width,
                    this.contactRect.h = this.cookieImage.height) : (this.offset.x = 35,
                    this.offset.y = 66,
                    this.contactRect.w = 70,
                    this.contactRect.h = 66),
                this.contactRect.x = -this.contactRect.w / 2,
                this.contactRect.y = -this.contactRect.h / 2)
        },
        draw: function () {
            var b = this.worldPos.x
                , c = this.worldPos.y
                , d = this.zValue
                , e = this.control.cameraDistance;
            if (-10 > d)
                this.killed = !0,
                    this.control.cleanObjects(),
                    this.kill();
            else {
                var e = e / d, f, b = ig.system.width / 2 - this.control.cameraPos.x * e + b * e;
                f = this.control.cameraPos.y * e + ig.system.height - c * e - (1 - e) * (ig.system.height - this.control.vanishingPoint.y);
                this.pos.x = b;
                this.pos.y = f;
                if (!(65 < d)) {
                    45 < d && (ig.system.context.globalAlpha = 1 - (d - 45) / 20);
                    d = e * this.scaleModifier;
                    e = this.control.cameraPos.y * e + ig.system.height - (1 - e) * (ig.system.height - this.control.vanishingPoint.y);
                    0 > e && (e = 0);
                    if (1 == this.pickupId) {
                        if (0 < e) {
                            b = 1 - (c - this.cookieOffset.y) / 500;
                            0 > b && (b = 0);
                            f = this.cookieImage.width / 4 * d * b;
                            var c = this.pos.x
                                , j = ig.system.context;
                            j.save();
                            j.translate(this.bitwiseRound(c), this.bitwiseRound(e));
                            j.scale(1, 0.5);
                            j.beginPath();
                            j.arc(0, 0, f, 0, 2 * Math.PI, !1);
                            j.fillStyle = "rgba(0,0,0," + 0.2 * b + ")";
                            j.fill();
                            j.restore()
                        }
                        c = this.pos.x - (this.offset.x - this.cookieOffset.x) * d;
                        e = this.pos.y - (this.offset.y - this.cookieOffset.y) * d;
                        b = this.cookieImage.width * d;
                        d *= this.cookieImage.height;
                        0 < b && 0 < d && ig.system.context.drawImage(this.cookieImage.data, c, e, b, d)
                    } else
                        0 < e && (b = 1 - c / 500,
                        0 > b && (b = 0),
                            f = 17.5 * d * b,
                            c = this.pos.x,
                            j = ig.system.context,
                            j.save(),
                            j.translate(this.bitwiseRound(c), this.bitwiseRound(e)),
                            j.scale(1, 0.5),
                            j.beginPath(),
                            j.arc(0, 0, f, 0, 2 * Math.PI, !1),
                            j.fillStyle = "rgba(0,0,0," + 0.2 * b + ")",
                            j.fill(),
                            j.restore()),
                            c = this.pos.x - this.offset.x * d,
                            e = this.pos.y - this.offset.y * d,
                            ig.system.context.save(),
                            ig.system.context.translate(this.bitwiseRound(c), this.bitwiseRound(e)),
                            ig.system.context.scale(d, d),
                            this.anim.draw(0, 0),
                            ig.system.context.restore();
                    ig.system.context.globalAlpha = 1
                }
            }
        },
        update: function () {
            !this.control.gamePaused && !this.control.gameOver && (!this.control.gameStarting && this.control.character.state != this.control.character.STATES.INTRO && !this.control.tutorialPauseMode) && (this.moveForward(-this.control.runSpeed * ig.system.tick),
                1 == this.pickupId ? this.cookieDown ? (this.cookieOffset.y += 60 * ig.system.tick,
                0 <= this.cookieOffset.y && (this.cookieOffset.y = -this.cookieOffset.y,
                    this.cookieDown = !1)) : (this.cookieOffset.y -= 60 * ig.system.tick,
                -20 >= this.cookieOffset.y && (this.cookieOffset.y = -20 - (this.cookieOffset.y + 20),
                    this.cookieDown = !0)) : this.anim.update())
        },
        moveForward: function (b) {
            this.zValue += b;
            this.zIndex = 1200 - this.zValue;
            ig.game.sortEntitiesDeferred()
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-hiteffect").requires("impact.entity").defines(function () {
    EntityGameHiteffect = ig.Entity.extend({
        offset: {
            x: 150,
            y: 150
        },
        size: {
            x: 1,
            y: 1
        },
        contactRect: {
            x: 0,
            y: 0
        },
        zIndex: 1300,
        explodeAnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion_4x2.png", 300, 300),
        explode2AnimSheet: new ig.AnimationSheet("media/graphics/game/effects/explosion2_4x2.png", 300, 300),
        explodeAnim: null,
        explode2Anim: null,
        anim: null,
        worldPos: {
            x: 0,
            y: 0,
            z: 0
        },
        zValue: 0,
        scale: 1,
        scaleModifier: 1,
        angle: 0,
        alpha: 1,
        timeAlive: 0,
        effectDuration: 0.3,
        effectId: 0,
        control: null,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.explodeAnim = new ig.Animation(this.explodeAnimSheet, this.effectDuration / 7, [0, 1, 2, 3, 4, 5, 6], !0);
            this.anim = this.explode2Anim = new ig.Animation(this.explode2AnimSheet, this.effectDuration / 8, [0, 1, 2, 3, 4, 5, 6, 7], !0);
            this.angle = 2 * Math.random() * Math.PI
        },
        ready: function () {
            this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        setEffectId: function (b) {
            this.effectId = b;
            1 == b ? (this.anim = this.explodeAnim,
                this.offset.y = 150,
                this.scaleModifier = 0.8) : this.anim = this.explode2Anim
        },
        draw: function () {
            var b = this.scale * this.scaleModifier
                , c = this.bitwiseRound(this.pos.x)
                , d = this.bitwiseRound(this.pos.y)
                , e = this.bitwiseRound(-this.offset.x)
                , f = this.bitwiseRound(-this.offset.y);
            ig.system.context.save();
            ig.system.context.globalAlpha = this.alpha;
            ig.system.context.translate(c, d);
            ig.system.context.rotate(this.angle);
            ig.system.context.scale(b, b);
            this.anim.draw(e, f);
            ig.system.context.restore()
        },
        update: function () {
            if (!this.control.gamePaused && (this.anim.update(),
                this.timeAlive += ig.system.tick,
            this.timeAlive > this.effectDuration && (this.killed = !0,
                this.control.cleanEffects(),
                this.kill()),
            1 == this.effectId)) {
                var b = this.timeAlive / this.effectDuration;
                1 < b && (b = 1);
                0 > b && (b = 0);
                0.5 < b && (this.alpha = 1 - (b - 0.5) / 0.5)
            }
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "game.entities.game-ui", "game.entities.game-character", "game.entities.game-bgObject", "game.entities.game-obstacle", "game.entities.game-pickup", "game.entities.game-hiteffect").defines(function () {
    EntityGameControl = ig.Entity.extend({
        zIndex: 100,
        cityImage: new ig.Image("media/graphics/game/backgrounds/cityscape.png"),
        cityPos: {
            x: 0,
            y: 122
        },
        cloudImage: [new ig.Image("media/graphics/game/backgrounds/cloud0.png"), new ig.Image("media/graphics/game/backgrounds/cloud1.png"), new ig.Image("media/graphics/game/backgrounds/cloud2.png")],
        cloudPos: [{
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        }],
        gameStarting: !0,
        gameEnding: !1,
        gamePaused: !1,
        gameOver: !1,
        ui: null,
        character: null,
        gameStartTime: 0,
        gameTime: 0,
        gameOverTime: 0,
        tutorialMode: !1,
        tutorialPauseMode: !1,
        tutorialStage: 0,
        tutorialStopDistance: 0,
        tutorialPausedTime: 0,
        vanishingPoint: {
            x: 240,
            y: 80
        },
        horizonLine: {
            x: 0,
            y: 164
        },
        distanceFogHeight: 22,
        sidewalk1ScreenPoints: Array(4),
        sidewalk2ScreenPoints: Array(4),
        roadScreenPoints: Array(4),
        roadLine1ScreenPoints: Array(4),
        roadLine2ScreenPoints: Array(4),
        laneLine1ScreenPoints: Array(4),
        laneLine2ScreenPoints: Array(4),
        grass1ScreenPoints: Array(4),
        grass2ScreenPoints: Array(4),
        cameraPos: {
            x: 0,
            y: 0,
            z: 0
        },
        sidewalkPos: {
            x: 0,
            y: 0
        },
        sidewalkWidth: 950,
        sidewalkColor: {
            r: 214,
            g: 220,
            b: 230
        },
        sidewalk1Pos: {
            x: -373,
            y: 0
        },
        sidewalk1Width: 200,
        sidewalk2Pos: {
            x: 373,
            y: 0
        },
        sidewalk2Width: 200,
        roadPos: {
            x: 0,
            y: 0
        },
        roadWidth: 526,
        roadColor: {
            r: 89,
            g: 100,
            b: 106
        },
        roadLine1Pos: {
            x: 268,
            y: 0
        },
        roadLine1Width: 10,
        roadLine1Color: {
            r: 120,
            g: 141,
            b: 175
        },
        roadLine2Pos: {
            x: -268,
            y: 0
        },
        roadLine2Width: 10,
        roadLine2Color: {
            r: 120,
            g: 141,
            b: 175
        },
        laneLine1Pos: {
            x: -95,
            y: 0,
            z: 0
        },
        laneLine1Width: 15,
        laneLine1Color: {
            r: 255,
            g: 255,
            b: 255
        },
        laneLine2Pos: {
            x: 95,
            y: 0,
            z: 0
        },
        laneLine2Width: 15,
        laneLine2Color: {
            r: 255,
            g: 255,
            b: 255
        },
        roadZOffset: 0,
        laneLineLength: 4,
        cameraDistance: 10,
        vanishingPointOffset: {
            x: 0,
            y: 0
        },
        runSpeed: 15,
        maxRunSpeed: 20,
        acceleration: 1 / 60,
        jumpGravity: 2E3,
        jumpAmt: 0,
        canSlide: !0,
        isSliding: !1,
        slideDuration: 1,
        slideTime: 0,
        objects: [],
        effects: [],
        segments: [],
        bgSets: [],
        segmentSize: 30,
        bgSetSize: 90,
        segmentSizeVariable: 5,
        totalDistance: 0,
        lastBgSetDistance: 0,
        lastSegmentDistance: 0,
        bgSetDefinitions: [[{
            id: 11,
            x: -350,
            y: 0,
            z: 0
        }, {
            id: 6,
            x: -350,
            y: 0,
            z: 3
        }, {
            id: 12,
            x: -300,
            y: 10,
            z: 7
        }, {
            id: 7,
            x: -350,
            y: 0,
            z: 9
        }, {
            id: 10,
            x: -350,
            y: -10,
            z: 12
        }, {
            id: 13,
            x: -360,
            y: 0,
            z: 16.95
        }, {
            id: 8,
            x: -350,
            y: 0,
            z: 17
        }, {
            id: 9,
            x: -350,
            y: 0,
            z: 21
        }, {
            id: 27,
            x: -350,
            y: 0,
            z: 24
        }, {
            id: 26,
            x: -350,
            y: 0,
            z: 27
        }, {
            id: 11,
            x: -350,
            y: 0,
            z: 30
        }, {
            id: 6,
            x: -350,
            y: 0,
            z: 33
        }, {
            id: 12,
            x: -300,
            y: 10,
            z: 37
        }, {
            id: 7,
            x: -350,
            y: 0,
            z: 39
        }, {
            id: 10,
            x: -350,
            y: -10,
            z: 42
        }, {
            id: 13,
            x: -360,
            y: 0,
            z: 46.95
        }, {
            id: 8,
            x: -350,
            y: 0,
            z: 47
        }, {
            id: 9,
            x: -350,
            y: 0,
            z: 51
        }, {
            id: 27,
            x: -350,
            y: 0,
            z: 54
        }, {
            id: 26,
            x: -350,
            y: 0,
            z: 57
        }, {
            id: 11,
            x: -350,
            y: 0,
            z: 60
        }, {
            id: 6,
            x: -350,
            y: 0,
            z: 63
        }, {
            id: 12,
            x: -300,
            y: 10,
            z: 67
        }, {
            id: 7,
            x: -350,
            y: 0,
            z: 69
        }, {
            id: 10,
            x: -350,
            y: -10,
            z: 72
        }, {
            id: 13,
            x: -360,
            y: 0,
            z: 76.95
        }, {
            id: 8,
            x: -350,
            y: 0,
            z: 77
        }, {
            id: 9,
            x: -350,
            y: 0,
            z: 81
        }, {
            id: 27,
            x: -350,
            y: 0,
            z: 84
        }, {
            id: 26,
            x: -350,
            y: 0,
            z: 87
        }, {
            id: 1,
            x: -550,
            y: 0,
            z: 8
        }, {
            id: 4,
            x: -550,
            y: 0,
            z: 10
        }, {
            id: 0,
            x: -650,
            y: 0,
            z: 19
        }, {
            id: 3,
            x: -570,
            y: 0,
            z: 20
        }, {
            id: 1,
            x: -1E3,
            y: 0,
            z: 27
        }, {
            id: 5,
            x: -550,
            y: 0,
            z: 28
        }, {
            id: 1,
            x: -550,
            y: 0,
            z: 38
        }, {
            id: 4,
            x: -550,
            y: 0,
            z: 40
        }, {
            id: 0,
            x: -650,
            y: 0,
            z: 49
        }, {
            id: 3,
            x: -570,
            y: 0,
            z: 50
        }, {
            id: 1,
            x: -1E3,
            y: 0,
            z: 57
        }, {
            id: 5,
            x: -550,
            y: 0,
            z: 58
        }, {
            id: 1,
            x: -550,
            y: 0,
            z: 68
        }, {
            id: 4,
            x: -550,
            y: 0,
            z: 70
        }, {
            id: 0,
            x: -650,
            y: 0,
            z: 79
        }, {
            id: 3,
            x: -570,
            y: 0,
            z: 80
        }, {
            id: 1,
            x: -1E3,
            y: 0,
            z: 87
        }, {
            id: 5,
            x: -550,
            y: 0,
            z: 88
        }, {
            id: 23,
            x: 350,
            y: 0,
            z: 0
        }, {
            id: 19,
            x: 350,
            y: 0,
            z: 3
        }, {
            id: 25,
            x: 300,
            y: 0,
            z: 7
        }, {
            id: 20,
            x: 350,
            y: 0,
            z: 8
        }, {
            id: 22,
            x: 350,
            y: 0,
            z: 11
        }, {
            id: 17,
            x: 350,
            y: 0,
            z: 14
        }, {
            id: 24,
            x: 350,
            y: 0,
            z: 19
        }, {
            id: 21,
            x: 350,
            y: 0,
            z: 22
        }, {
            id: 18,
            x: 350,
            y: 0,
            z: 26
        }, {
            id: 23,
            x: 350,
            y: 0,
            z: 30
        }, {
            id: 19,
            x: 350,
            y: 0,
            z: 33
        }, {
            id: 25,
            x: 300,
            y: 0,
            z: 37
        }, {
            id: 20,
            x: 350,
            y: 0,
            z: 38
        }, {
            id: 22,
            x: 350,
            y: 0,
            z: 41
        }, {
            id: 17,
            x: 350,
            y: 0,
            z: 44
        }, {
            id: 24,
            x: 350,
            y: 0,
            z: 49
        }, {
            id: 21,
            x: 350,
            y: 0,
            z: 52
        }, {
            id: 18,
            x: 350,
            y: 0,
            z: 56
        }, {
            id: 23,
            x: 350,
            y: 0,
            z: 60
        }, {
            id: 19,
            x: 350,
            y: 0,
            z: 63
        }, {
            id: 25,
            x: 300,
            y: 0,
            z: 67
        }, {
            id: 20,
            x: 350,
            y: 0,
            z: 68
        }, {
            id: 22,
            x: 350,
            y: 0,
            z: 71
        }, {
            id: 17,
            x: 350,
            y: 0,
            z: 74
        }, {
            id: 24,
            x: 350,
            y: 0,
            z: 79
        }, {
            id: 21,
            x: 350,
            y: 0,
            z: 82
        }, {
            id: 18,
            x: 350,
            y: 0,
            z: 86
        }, {
            id: 2,
            x: 500,
            y: 0,
            z: 8
        }, {
            id: 14,
            x: 550,
            y: 0,
            z: 9
        }, {
            id: 15,
            x: 600,
            y: 0,
            z: 19
        }, {
            id: 16,
            x: 550,
            y: 0,
            z: 23
        }, {
            id: 2,
            x: 500,
            y: 0,
            z: 38
        }, {
            id: 14,
            x: 550,
            y: 0,
            z: 39
        }, {
            id: 15,
            x: 600,
            y: 0,
            z: 49
        }, {
            id: 16,
            x: 550,
            y: 0,
            z: 53
        }, {
            id: 2,
            x: 500,
            y: 0,
            z: 68
        }, {
            id: 14,
            x: 550,
            y: 0,
            z: 69
        }, {
            id: 15,
            x: 600,
            y: 0,
            z: 79
        }, {
            id: 16,
            x: 550,
            y: 0,
            z: 83
        }]],
        segmentDefinitions: [[{
            id: 5,
            x: -170,
            y: 0,
            z: 17
        }, {
            id: 0,
            x: -170,
            y: 0,
            z: 12
        }, {
            id: 4,
            x: -170,
            y: 0,
            z: 14
        }, {
            id: 3,
            x: 0,
            y: 0,
            z: 11
        }, {
            id: 8,
            x: 170,
            y: 0,
            z: 12
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 17
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {
            type: 2,
            id: 1,
            x: 0,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 25
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 17
        }, {
            id: 0,
            x: -170,
            y: 0,
            z: 14
        }, {
            id: 4,
            x: -170,
            y: 0,
            z: 12
        }, {
            id: 8,
            x: 170,
            y: 0,
            z: 12
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 17
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 15
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 25
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{
            id: 3,
            x: -90,
            y: 0,
            z: 11
        }, {
            id: 8,
            x: 170,
            y: 0,
            z: 10
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 15
        }, {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 20
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 24
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 27
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 30
        }], [{
            id: 3,
            x: -90,
            y: 0,
            z: 11
        }, {
            id: 0,
            x: -170,
            y: 0,
            z: 15
        }, {
            id: 8,
            x: 170,
            y: 0,
            z: 10
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 15
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 1,
            x: -175,
            y: 200,
            z: 15
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 23
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 25
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 27
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 30
        }], [{
            id: 3,
            x: 90,
            y: 0,
            z: 11
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 10
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        }, {
            type: 2,
            id: 1,
            x: 175,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 24
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 26
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 28
        }], [{
            id: 3,
            x: 90,
            y: 0,
            z: 11
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 10
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        }, {
            id: 8,
            x: 170,
            y: 0,
            z: 20
        }, {
            id: 0,
            x: 0,
            y: 0,
            z: 22
        }, {
            type: 2,
            id: 1,
            x: 0,
            y: 200,
            z: 22
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 24
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 26
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 28
        }], [{
            id: 0,
            x: -170,
            y: 0,
            z: 10
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        }, {
            id: 3,
            x: 90,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 24
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 26
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 28
        }, {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 24
        }], [{
            id: 0,
            x: -170,
            y: 0,
            z: 20
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 25
        }, {
            id: 3,
            x: 90,
            y: 0,
            z: 21
        }, {
            id: 0,
            x: 170,
            y: 0,
            z: 10
        }, {
            id: 0,
            x: 0,
            y: 0,
            z: 10
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 10
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 200,
            z: 10
        }, {
            type: 2,
            id: 1,
            x: 0,
            y: 0,
            z: 21
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 21
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 30
        }], [{
            id: 8,
            x: 170,
            y: 0,
            z: 12
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 17
        }, {
            id: 3,
            x: 0,
            y: 0,
            z: 11
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 12
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 17
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {
            type: 2,
            id: 1,
            x: 0,
            y: 0,
            z: 11
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        }, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 25
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{
            id: 8,
            x: 170,
            y: 0,
            z: 22
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 27
        }, {
            id: 3,
            x: 0,
            y: 0,
            z: 21
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 22
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 27
        }, {
            id: 0,
            x: -170,
            y: 0,
            z: 7
        }, {
            id: 0,
            x: 0,
            y: 0,
            z: 7
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 21
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 21
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 27
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 29
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 7
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 11
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 16
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 12
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 14
        }, {
            type: 2,
            x: 0,
            y: 0,
            z: 20
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 24
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 26
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 11
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 16
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 15
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 12
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 14
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 16
        }, {
            type: 2,
            x: 0,
            y: 0,
            z: 26
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 30
        }], [{
            id: 4,
            x: -170,
            y: 0,
            z: 11
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        }, {
            id: 11,
            x: 170,
            y: 0,
            z: 12
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 16
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 18
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 20
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 22
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 24
        }], [{
            id: 4,
            x: -170,
            y: 0,
            z: 11
        }, {
            id: 4,
            x: -170,
            y: 0,
            z: 17
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 23
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 28
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        }, {
            id: 11,
            x: 170,
            y: 0,
            z: 12
        }, {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 14
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 20
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 23
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 26
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 29
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 10
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 13
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 18
        }, {
            id: 7,
            x: 170,
            y: 0,
            z: 12
        }, {
            id: 7,
            x: 170,
            y: 0,
            z: 20
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 26
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 28
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 16
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 24
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 26
        }], [{
            id: 5,
            x: -170,
            y: 0,
            z: 10
        }, {
            id: 10,
            x: 170,
            y: 0,
            z: 13
        }, {
            id: 11,
            x: 170,
            y: 0,
            z: 20
        }, {
            id: 0,
            x: 0,
            y: 0,
            z: 12
        }, {
            id: 0,
            x: 0,
            y: 0,
            z: 20
        }, {
            type: 2,
            x: 0,
            y: 0,
            z: 26
        }, {
            type: 2,
            x: 0,
            y: 0,
            z: 28
        }, {
            type: 2,
            x: 0,
            y: 0,
            z: 30
        }]],
        tutorialDefinitions: [[{
            id: 5,
            x: -170,
            y: 0,
            z: 7
        }, {
            id: 0,
            x: -170,
            y: 0,
            z: 12
        }, {
            id: 4,
            x: -170,
            y: 0,
            z: 14
        }, {
            id: 3,
            x: 0,
            y: 0,
            z: 6
        }, {
            id: 8,
            x: 170,
            y: 0,
            z: 7
        }, {
            id: 9,
            x: 170,
            y: 0,
            z: 12
        }, {
            type: 2,
            id: 1,
            x: 0,
            y: 200,
            z: 6
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 12
        }, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 14
        }, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 20
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 26
        }, {
            id: 5,
            x: -170,
            y: 0,
            z: 31
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 25
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 27
        }, {
            type: 2,
            x: 175,
            y: 0,
            z: 29
        }, {
            type: 2,
            x: 0,
            y: 0,
            z: 39
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 43
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 45
        }, {
            id: 3,
            x: -90,
            y: 0,
            z: 50
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 51
        }, {
            id: 6,
            x: 0,
            y: 0,
            z: 56
        }, {
            id: 11,
            x: 170,
            y: 0,
            z: 52
        }, {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 50
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 56
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 58
        }, {
            type: 2,
            x: -175,
            y: 0,
            z: 60
        }]],
        charIsMoving: !1,
        charIsMovingLeft: !1,
        charMoveTargetX: 0,
        touchTime: 0,
        touchPos: {
            x: 0,
            y: 0
        },
        touchThreshold: 1,
        lifeCount: 3,
        coinsCollected: 0,
        powerLevel: 0,
        powerLevelUsage: 0.1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.vanishingPoint.x = ig.system.width / 2;
            b = ig.system.context;
            this.bgSkyLinGrad = b.createLinearGradient(0, 0, 0, this.horizonLine.y);
            this.bgSkyLinGrad.addColorStop(0, "rgba(102,190,223,1)");
            this.bgSkyLinGrad.addColorStop(1, "rgba(203,232,196,1)");
            this.bgGroundLinGrad = b.createLinearGradient(0, this.horizonLine.y, 0, ig.system.height);
            this.bgGroundLinGrad.addColorStop(0, "rgba(166,212,74,1)");
            this.bgGroundLinGrad.addColorStop(1, "rgba(110,170,70,1)");
            this.bgHorizonLinGrad = b.createLinearGradient(0, 121, 0, 195);
            this.bgHorizonLinGrad.addColorStop(0, "rgba(255,255,194,0)");
            this.bgHorizonLinGrad.addColorStop(0.5, "rgba(255,255,194,0.5)");
            this.bgHorizonLinGrad.addColorStop(1, "rgba(255,255,194,0)");
            this.cityPos.x = ig.system.width / 2 - this.cityImage.width / 2;
            this.cloudPos[0].x = ig.system.width / 2 - 30;
            this.cloudPos[0].y = 20;
            this.cloudPos[1].x = ig.system.width / 2 - 120;
            this.cloudPos[1].y = 45;
            this.cloudPos[2].x = ig.system.width / 2 + 60;
            this.cloudPos[2].y = 60;
            ig.game.cookies = 0;
            this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0);
            ig.game.doTutorialFlag && (this.tutorialMode = !0)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            var b = this.cameraDistance / 13
                , b = this.cameraPos.y * b + ig.system.height - (1 - b) * (ig.system.height - this.vanishingPoint.y);
            this.character = ig.game.spawnEntity(EntityGameCharacter, ig.system.width / 2, b);
            this.character.startY = b;
            this.character.ready();
            this.ui.ready();
            this.spawnStartingObjects();
            ig.game.sortEntities();
            this.recalculateScreenPoints();
            this.gameStartTime = ig.system.clock.delta();
            this.tutorialMode && (this.character.run(),
            0 == this.tutorialStopDistance && (this.tutorialPauseMode = !0,
                this.doNextTutorialStage()))
        },
        draw: function () {
            ig.system.context.scale(1, 1);
            var b = ig.system.context
                , c = null
                , d = null
                , c = this.sidewalkColor;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = this.sidewalk1ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++)
                b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            d = this.sidewalk2ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++)
                b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            c = this.roadColor;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = this.roadScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++)
                b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            c = this.roadLine1Color;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = this.roadLine1ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++)
                b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            d = this.roadLine2ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++)
                b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            c = this.laneLine1Color;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            var d = 7
                , e = {};
            e.x = this.laneLine1Pos.x;
            e.y = this.laneLine1Pos.y;
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++)
                e.z += 4 * this.laneLineLength,
                    this.drawPerspectiveLine(e, this.laneLineLength, this.laneLine1Width, this.laneLine1Color);
            e.x = this.laneLine2Pos.x;
            e.y = this.laneLine2Pos.y;
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++)
                e.z += 4 * this.laneLineLength,
                    this.drawPerspectiveLine(e, this.laneLineLength, this.laneLine2Width, this.laneLine2Color);
            c = this.roadLine1Color;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = 24;
            e = {
                x: -373,
                y: 0
            };
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++)
                e.z += this.laneLineLength,
                    this.drawPerspectiveLine(e, 0.05, 200, this.roadLine1Color);
            e = {
                x: 373,
                y: 0
            };
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++)
                e.z += this.laneLineLength,
                    this.drawPerspectiveLine(e, 0.05, 200, this.roadLine2Color);
            this.drawGround();
            this.cityImage.draw(this.cityPos.x, this.cityPos.y)
        },
        update: function () {
            if (this.gameStarting)
                0.25 < ig.system.clock.delta() - this.gameStartTime && (this.gameStarting = !1,
                    this.gameStartTime = ig.system.clock.delta());
            else if (this.gameEnding)
                0.25 < ig.system.clock.delta() - this.gameEndTime && this.endGame();
            else if (!this.gamePaused && !this.gameOver && (this.gameTime += ig.system.tick,
            this.character.state != this.character.STATES.INTRO && (this.updatePlayerInput(),
                !this.tutorialPauseMode))) {
                var b = this.runSpeed * ig.system.tick;
                if (this.tutorialMode && this.totalDistance + b >= this.tutorialStopDistance) {
                    b = this.tutorialStopDistance - this.totalDistance;
                    if (0 < b)
                        for (var c = 0; c < this.objects.length; c++)
                            this.objects[c].moveForward(-b);
                    this.doNextTutorialStage()
                }
                0 < b && (this.totalDistance += b,
                    this.roadZOffset -= b,
                this.roadZOffset < 4 * -this.laneLineLength && (this.roadZOffset += 4 * this.laneLineLength));
                0 != this.jumpAmt ? (this.character.jumpOffset -= this.jumpAmt * ig.system.tick,
                    0 <= this.character.jumpOffset ? (this.jumpAmt = this.character.jumpOffset = 0,
                        this.character.run(),
                        this.canSlide = !0) : this.jumpAmt -= this.jumpGravity * ig.system.tick) : 0 > this.character.jumpOffset && (this.jumpAmt -= this.jumpGravity * ig.system.tick);
                this.isSliding && (this.slideTime += ig.system.tick,
                this.slideTime > this.slideDuration && (this.isSliding = !1,
                    this.canSlide = !0,
                    this.character.run()));
                this.charIsMoving && (this.charIsMovingLeft ? (this.character.pos.x -= 800 * ig.system.tick,
                this.character.pos.x < this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX,
                    this.charIsMoving = !1)) : (this.character.pos.x += 800 * ig.system.tick,
                this.character.pos.x > this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX,
                    this.charIsMoving = !1)));
                this.updateBgSets();
                this.updateSegments();
                this.updateCollisions();
                this.runSpeed += this.acceleration * ig.system.tick;
                this.runSpeed > this.maxRunSpeed && (this.runSpeed = this.maxRunSpeed);
                this.character.state == this.character.STATES.POWERED && (this.powerLevel -= this.powerLevelUsage * ig.system.tick,
                0 >= this.powerLevel && (this.powerLevel = 0,
                    this.character.powerDown()))
            }
        },
        togglePauseGame: function () {
            this.gamePaused ? this.unpauseGame() : this.pauseGame()
        },
        pauseGame: function () {
            if (!this.gameOver && !this.gamePaused) {
                this.gamePaused = !0;
                this.character.anim.timer.pause();
                for (var b = 0; b < this.objects.length; b++)
                    this.objects[b].anim && this.objects[b].anim.timer.pause();
                for (b = 0; b < this.effects.length; b++)
                    this.effects[b].anim && this.effects[b].anim.timer.pause()
            }
        },
        unpauseGame: function () {
            if (this.gamePaused) {
                this.gamePaused = !1;
                this.character.anim.timer.unpause();
                for (var b = 0; b < this.objects.length; b++)
                    this.objects[b].anim && this.objects[b].anim.timer.unpause();
                for (b = 0; b < this.effects.length; b++)
                    this.effects[b].anim && this.effects[b].anim.timer.unpause()
            }
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        updatePlayerInput: function () {
            this.gamePaused || (ig.ua.mobile ? this.processTouchInput() : this.processKeyboardInput())
        },
        processKeyboardInput: function () {
            ig.input.state("left") ? this.characterMoveLeft() : ig.input.state("right") && this.characterMoveRight();
            ig.input.state("up") && this.characterJump();
            ig.input.state("down") && this.characterSlide()
        },
        processTouchInput: function () {
            if (ig.input.pressed("click")) {
                this.touchTime = ig.system.clock.delta();
                this.pointer.refreshPos();
                var b = this.pointer.pos.x - this.pointer.size.x / 2
                    , c = this.pointer.pos.y - this.pointer.size.y / 2;
                this.touchPos = {
                    x: b,
                    y: c
                }
            } else if (ig.input.released("click") && ig.system.clock.delta() - this.touchTime < this.touchThreshold) {
                this.pointer.refreshPos();
                var b = this.pointer.pos.x - this.pointer.size.x / 2
                    , c = this.pointer.pos.y - this.pointer.size.y / 2
                    , d = 0
                    , e = 0
                    , d = b - this.touchPos.x
                    , e = c - this.touchPos.y;
                300 > d * d + e * e ? b < this.character.pos.x ? this.characterMoveLeft() : this.characterMoveRight() : Math.abs(e) >= Math.abs(d) ? 0 > e ? this.characterJump() : this.characterSlide() : 0 > d ? this.characterMoveLeft() : this.characterMoveRight()
            }
        },
        characterMoveLeft: function () {
            if (this.tutorialMode)
                if (7 == this.tutorialStage || 9 == this.tutorialStage) {
                    if (!this.doNextTutorialStage())
                        return
                } else
                    return;
            !this.charIsMoving && this.character.pos.x > ig.system.width / 2 - 130 && (this.charIsMovingLeft = this.charIsMoving = !0,
                this.charMoveTargetX = this.character.pos.x > ig.system.width / 2 ? ig.system.width / 2 : ig.system.width / 2 - 130)
        },
        characterMoveRight: function () {
            if (this.tutorialMode)
                if (5 == this.tutorialStage) {
                    if (!this.doNextTutorialStage())
                        return
                } else
                    return;
            !this.charIsMoving && this.character.pos.x < ig.system.width / 2 + 130 && (this.charIsMoving = !0,
                this.charIsMovingLeft = !1,
                this.charMoveTargetX = this.character.pos.x < ig.system.width / 2 ? ig.system.width / 2 : ig.system.width / 2 + 130)
        },
        characterJump: function () {
            if (this.tutorialMode)
                if (3 == this.tutorialStage) {
                    if (!this.doNextTutorialStage())
                        return
                } else
                    return;
            this.character.pos.y == this.character.startY && this.canSlide && (this.jumpAmt = 600,
                this.character.jump(),
                this.canSlide = !1)
        },
        characterSlide: function () {
            if (this.tutorialMode)
                if (11 == this.tutorialStage) {
                    if (!this.doNextTutorialStage())
                        return
                } else
                    return;
            0 == this.cameraPos.y && this.canSlide && (this.character.slide(),
            this.character.state == this.character.STATES.SLIDE && (this.isSliding = !0,
                this.canSlide = !1,
                this.slideTime = 0))
        },
        spawnCollectEffect: function (b) {
            if (b) {
                var c = null
                    , c = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
                return null != c ? (c.worldPos = {
                    x: b.worldPos.x,
                    y: b.worldPos.y,
                    z: b.zValue
                },
                    c.zValue = b.zValue,
                    c.setEffectId(1),
                    c.ready(),
                    c.pos.x = b.pos.x,
                    c.pos.y = b.pos.y - 10,
                    c.zIndex = this.character.zIndex - 15,
                    c.pos.x < ig.system.width / 2 ? c.pos.x -= 10 : c.pos.x > ig.system.width / 2 && (c.pos.x += 10),
                    ig.game.sortEntities(),
                    this.effects.push(c),
                    c) : null
            }
        },
        spawnHitEffect: function () {
            var b = null
                , b = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
            return null != b ? (b.worldPos = {
                x: this.character.pos.x - ig.system.width / 2,
                y: 0,
                z: this.character.zValue
            },
                b.zValue = this.character.zValue,
                b.ready(),
                b.pos.x = this.character.pos.x,
                b.pos.y = this.character.pos.y - 60,
                ig.game.sortEntitiesDeferred(),
                this.effects.push(b),
                b) : null
        },
        drawPerspectiveInfinite: function (b, c, d) {
            var e = this.cameraPos.y + ig.system.height
                , f = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2
                , j = (e - this.vanishingPoint.y) / (f - this.vanishingPoint.x)
                , n = this.horizonLine.y
                , j = (n - (this.vanishingPoint.y - j * this.vanishingPoint.x)) / j
                , p = this.cameraPos.y + ig.system.height;
            b = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            var q = (p - this.vanishingPoint.y) / (b - this.vanishingPoint.x);
            c = this.horizonLine.y;
            var q = (c - (this.vanishingPoint.y - q * this.vanishingPoint.x)) / q
                , v = ig.system.context;
            v.fillStyle = "rgba(" + d.r + "," + d.g + "," + d.b + ",1)";
            v.beginPath();
            v.moveTo(f, e);
            v.lineTo(j, n);
            v.lineTo(q, c);
            v.lineTo(b, p);
            v.closePath();
            v.fill()
        },
        drawPerspectiveLine: function (b, c, d) {
            var e = this.cameraDistance
                , f = b.z;
            if (!(f + c < e)) {
                var j = b.x;
                b = b.y;
                var n = f
                    , p = n + c;
                f < e && (n = e);
                c = e / (n - this.cameraPos.z);
                f = e / (p - this.cameraPos.z);
                p = ig.system.width / 2 - this.cameraPos.x * c + j * c;
                e = this.cameraPos.y * c + ig.system.height - b * f - (1 - c) * (ig.system.height - this.vanishingPoint.y);
                n = ig.system.width / 2 - this.cameraPos.x * f + j * f;
                b = this.cameraPos.y * f + ig.system.height - b * f - (1 - f) * (ig.system.height - this.vanishingPoint.y);
                if (!(e <= this.horizonLine.y)) {
                    b < this.horizonLine.y && (j = (e - b) / (p - n),
                        b = this.horizonLine.y,
                        n = (b - (e - j * p)) / j);
                    j = p - d * c / 2;
                    c = p + d * c / 2;
                    var p = n + d * f / 2
                        , q = b;
                    d = n - d * f / 2;
                    f = b;
                    b = ig.system.context;
                    b.beginPath();
                    b.moveTo(j, e);
                    b.lineTo(c, e);
                    b.lineTo(p, q);
                    b.lineTo(d, f);
                    b.closePath();
                    b.fill()
                }
            }
        },
        drawGround: function () {
            var b = ig.system.context;
            b.save();
            b.fillStyle = this.bgSkyLinGrad;
            b.fillRect(0, 0, ig.system.width, this.horizonLine.y);
            for (var c = 0; c < this.cloudImage.length; c++)
                this.cloudImage[c].draw(this.cloudPos[c].x, this.cloudPos[c].y);
            b.fillStyle = this.bgGroundLinGrad;
            points = this.grass1ScreenPoints;
            b.beginPath();
            b.moveTo(points[0].x, points[0].y);
            for (c = 1; c < points.length; c++)
                b.lineTo(points[c].x, points[c].y);
            b.closePath();
            b.fill();
            points = this.grass2ScreenPoints;
            b.beginPath();
            b.moveTo(points[0].x, points[0].y);
            for (c = 1; c < points.length; c++)
                b.lineTo(points[c].x, points[c].y);
            b.closePath();
            b.fill()
        },
        spawnObject: function (b, c, d) {
            var e = this.cameraDistance
                , f = d.z;
            if (!(f < e)) {
                d = {
                    x: d.x,
                    y: d.y,
                    z: d.z
                };
                f < e && (d.z = e);
                var j = e / (d.z - this.cameraPos.z)
                    , e = ig.system.width / 2 - this.cameraPos.x * j + d.x * j
                    ,
                    j = this.cameraPos.y * j + ig.system.height + d.y - (1 - j) * (ig.system.height - this.vanishingPoint.y)
                    , n = null;
                0 == b ? (n = ig.game.spawnEntity(EntityGameBgObject, e, j),
                    n.setImageId(c)) : 1 == b ? (n = ig.game.spawnEntity(EntityGameObstacle, e, j),
                    n.setImageId(c)) : 2 == b && (n = ig.game.spawnEntity(EntityGamePickup, e, j),
                    n.setPickupId(c));
                return null != n ? (n.worldPos = d,
                    n.zValue = f,
                    n.ready(),
                    this.objects.push(n),
                    ig.game.sortEntitiesDeferred(),
                    n) : null
            }
        },
        cleanObjects: function () {
            for (var b = [], c = 0; c < this.objects.length; c++) {
                var d = this.objects[c];
                d.killed && (d.kill(),
                    b.push(d))
            }
            if (0 < b.length) {
                for (var e = [], d = this.objects.pop(); d;) {
                    for (var f = !1, c = 0; c < b.length; c++)
                        if (b[c] == d) {
                            f = !0;
                            break
                        }
                    f || e.push(d);
                    d = this.objects.pop()
                }
                this.objects = e
            }
        },
        cleanEffects: function () {
            for (var b = [], c = 0; c < this.effects.length; c++) {
                var d = this.effects[c];
                d.killed && (d.kill(),
                    b.push(d))
            }
            if (0 < b.length) {
                for (var e = [], d = this.effects.pop(); d;) {
                    for (var f = !1, c = 0; c < b.length; c++)
                        if (b[c] == d) {
                            f = !0;
                            break
                        }
                    f || e.push(d);
                    d = this.effects.pop()
                }
                this.effects = e
            }
        },
        spawnStartingObjects: function () {
            var b = 30 * Math.random();
            this.lastBgSetDistance = -b;
            for (var c = 0; 2 > c; c++) {
                for (var d = [], b = this.bgSetDefinitions.length, b = Math.floor(Math.random() * b), b = this.bgSetDefinitions[b], e = 0; e < b.length; e++) {
                    var f = b[e]
                        , f = this.spawnObject(0, f.id, {
                        x: f.x,
                        y: f.y,
                        z: this.lastBgSetDistance - this.totalDistance + f.z
                    });
                    d.push(f)
                }
                this.bgSets.push(d);
                this.lastBgSetDistance += this.bgSetSize
            }
            if (this.tutorialMode) {
                this.lastSegmentDistance = 10;
                b = this.tutorialDefinitions[0];
                c = [];
                for (e = 0; e < b.length; e++)
                    f = b[e],
                        d = f.type,
                    null == d && (d = 1),
                        f = this.spawnObject(d, f.id, {
                            x: f.x,
                            y: f.y,
                            z: this.lastSegmentDistance + f.z
                        }),
                        c.push(f);
                this.segments.push(c);
                this.lastSegmentDistance += 120
            } else {
                this.lastSegmentDistance = 70;
                b = this.segmentDefinitions.length;
                b = Math.floor(Math.random() * b);
                b = this.segmentDefinitions[b];
                c = [];
                for (e = 0; e < b.length; e++)
                    f = b[e],
                        d = f.type,
                    null == d && (d = 1),
                        f = this.spawnObject(d, f.id, {
                            x: f.x,
                            y: f.y,
                            z: this.lastSegmentDistance + f.z
                        }),
                        c.push(f);
                this.segments.push(c);
                b = Math.floor(Math.random() * this.segmentSizeVariable);
                this.lastSegmentDistance += this.segmentSize + b
            }
            ig.game.sortEntitiesDeferred()
        },
        updateBgSets: function () {
            if (!(this.totalDistance <= this.lastBgSetDistance - this.bgSetSize)) {
                this.bgSets.splice(0, 1);
                for (var b = [], c = this.bgSetDefinitions.length, c = Math.floor(Math.random() * c), c = this.bgSetDefinitions[c], d = 0; d < c.length; d++) {
                    var e = c[d]
                        , e = this.spawnObject(0, e.id, {
                        x: e.x,
                        y: e.y,
                        z: this.lastBgSetDistance - this.totalDistance + e.z
                    });
                    b.push(e)
                }
                this.bgSets.push(b);
                this.lastBgSetDistance += this.bgSetSize;
                ig.game.sortEntitiesDeferred()
            }
        },
        updateSegments: function () {
            for (var b = [], c = 0; c < this.segments.length; c++) {
                for (var d = this.segments[c], e = !0, f = 0; f < d.length; f++) {
                    var j = d[f];
                    if (j && !j.killed) {
                        e = !1;
                        break
                    }
                }
                e && b.push(d)
            }
            if (0 < b.length) {
                d = [];
                for (j = this.segments.pop(); j;) {
                    e = !1;
                    for (c = 0; c < b.length; c++)
                        if (b[c] == j) {
                            e = !0;
                            break
                        }
                    e || d.push(j);
                    j = this.segments.pop()
                }
                this.segments = d
            }
            if (!(this.totalDistance <= this.lastSegmentDistance - this.bgSetSize)) {
                c = this.segmentDefinitions.length;
                c = Math.floor(Math.random() * c);
                b = this.segmentDefinitions[c];
                d = [];
                for (c = 0; c < b.length; c++)
                    j = b[c],
                        e = j.type,
                    null == e && (e = 1),
                        j = this.spawnObject(e, j.id, {
                            x: j.x,
                            y: j.y,
                            z: this.lastSegmentDistance - this.totalDistance + j.z
                        }),
                        d.push(j);
                this.segments.push(d);
                c = Math.floor(Math.random() * this.segmentSizeVariable);
                this.lastSegmentDistance += this.segmentSize + c;
                ig.game.sortEntitiesDeferred()
            }
        },
        updateCollisions: function () {
            var b = this.character.pos.x - ig.system.width / 2
                , c = 0;
            0 > this.character.jumpOffset && (c = 200);
            var d = {};
            d.w = this.character.charWidth;
            d.h = this.character.charHeight;
            d.x = this.character.worldPos.x + b - d.w / 2;
            d.y = -(this.character.worldPos.y + c) - d.h;
            for (b = 0; b < this.segments.length; b++)
                for (var c = this.segments[b], e = 0; e < c.length; e++) {
                    var f = c[e];
                    if (!f.hit) {
                        var j = this.character.zValue - this.character.zWidth
                            , n = j + 2 * this.character.zWidth;
                        2 == f.objType && (j -= this.character.zWidth / 2,
                            n += this.character.zWidth / 2);
                        if (f.zValue + f.zWidth >= j && f.zValue <= n && (!(1 == f.objType && f.slidable) || !this.isSliding))
                            j = {},
                                j.w = f.contactRect.w,
                                j.h = f.contactRect.h,
                                j.x = f.worldPos.x - j.w / 2,
                                j.y = -f.worldPos.y - j.h,
                            this.aabbCheck(d, j) && (f.hit = !0,
                                2 == f.objType ? (f.killed = !0,
                                    this.cleanObjects(),
                                    f.kill(),
                                    this.collectPickup(f.pickupId),
                                    this.spawnCollectEffect(f)) : this.character.isInvulnerable || (this.hitObstacle(f),
                                    this.spawnHitEffect(),
                                    this.character.shake()))
                    }
                }
        },
        recalculateScreenPoints: function () {
            var b = null, c = null, d, e, f, j, n, p = null, q = null, b = this.sidewalk1Pos, c = this.sidewalk1Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.sidewalk1ScreenPoints[0] = {
                x: this.bitwiseRound(d),
                y: this.bitwiseRound(e)
            };
            this.sidewalk1ScreenPoints[1] = {
                x: this.bitwiseRound(f),
                y: this.bitwiseRound(j)
            };
            this.sidewalk1ScreenPoints[2] = {
                x: this.bitwiseRound(n),
                y: this.bitwiseRound(b)
            };
            this.sidewalk1ScreenPoints[3] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(p)
            };
            this.grass1ScreenPoints[0] = {
                x: 0,
                y: this.horizonLine.y
            };
            this.grass1ScreenPoints[1] = {
                x: this.bitwiseRound(f) + 1,
                y: this.bitwiseRound(j)
            };
            this.grass1ScreenPoints[2] = {
                x: this.bitwiseRound(d) + 1,
                y: this.bitwiseRound(e)
            };
            this.grass1ScreenPoints[3] = {
                x: 0,
                y: ig.system.height
            };
            b = this.sidewalk2Pos;
            c = this.sidewalk2Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.sidewalk2ScreenPoints[0] = {
                x: this.bitwiseRound(d),
                y: this.bitwiseRound(e)
            };
            this.sidewalk2ScreenPoints[1] = {
                x: this.bitwiseRound(f),
                y: this.bitwiseRound(j)
            };
            this.sidewalk2ScreenPoints[2] = {
                x: this.bitwiseRound(n),
                y: this.bitwiseRound(b)
            };
            this.sidewalk2ScreenPoints[3] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(p)
            };
            this.grass2ScreenPoints[0] = {
                x: ig.system.width,
                y: this.horizonLine.y
            };
            this.grass2ScreenPoints[1] = {
                x: this.bitwiseRound(n) - 1,
                y: this.bitwiseRound(b)
            };
            this.grass2ScreenPoints[2] = {
                x: this.bitwiseRound(c) - 1,
                y: this.bitwiseRound(p)
            };
            this.grass2ScreenPoints[3] = {
                x: ig.system.width,
                y: ig.system.height
            };
            b = this.roadPos;
            c = this.roadWidth;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.roadScreenPoints[0] = {
                x: this.bitwiseRound(d),
                y: this.bitwiseRound(e)
            };
            this.roadScreenPoints[1] = {
                x: this.bitwiseRound(f),
                y: this.bitwiseRound(j)
            };
            this.roadScreenPoints[2] = {
                x: this.bitwiseRound(n),
                y: this.bitwiseRound(b)
            };
            this.roadScreenPoints[3] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(p)
            };
            b = this.roadLine1Pos;
            c = this.roadLine1Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.roadLine1ScreenPoints[0] = {
                x: this.bitwiseRound(d),
                y: this.bitwiseRound(e)
            };
            this.roadLine1ScreenPoints[1] = {
                x: this.bitwiseRound(f),
                y: this.bitwiseRound(j)
            };
            this.roadLine1ScreenPoints[2] = {
                x: this.bitwiseRound(n),
                y: this.bitwiseRound(b)
            };
            this.roadLine1ScreenPoints[3] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(p)
            };
            b = this.roadLine2Pos;
            c = this.roadLine2Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.roadLine2ScreenPoints[0] = {
                x: this.bitwiseRound(d),
                y: this.bitwiseRound(e)
            };
            this.roadLine2ScreenPoints[1] = {
                x: this.bitwiseRound(f),
                y: this.bitwiseRound(j)
            };
            this.roadLine2ScreenPoints[2] = {
                x: this.bitwiseRound(n),
                y: this.bitwiseRound(b)
            };
            this.roadLine2ScreenPoints[3] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(p)
            }
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        },
        collectPickup: function (b) {
            0 == b ? (ig.game.money += 1,
                this.coinsCollected += 1,
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.coin)) : 1 == b && (ig.game.cookies += 1,
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.crunch),
                this.powerLevel = (10 * this.powerLevel + 1) / 10,
            1 <= this.powerLevel && (this.powerLevel = 1,
                this.character.queuePowerUp()))
        },
        hitObstacle: function (b) {
            this.character.state == this.character.STATES.POWERED ? (b.knockOut(),
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit)) : (this.lifeCount -= 1,
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit),
                0 > this.lifeCount ? (this.lifeCount = 0,
                    this.finishGame()) : (this.character.invulnerableStartTime = this.gameTime,
                    this.character.isInvulnerable = !0,
                    b.knockOut()))
        },
        quitGame: function () {
            ig.game.restartGameFlag = !1;
            this.gameEndTime = ig.system.clock.delta();
            this.gameEnding = !0
        },
        finishGame: function () {
            this.gameOver = !0;
            this.gameOverTime = ig.system.clock.delta();
            ig.game.savePlayerStats();
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.chirp)
        },
        restartGame: function () {
            ig.game.doTutorialFlag = !1;
            ig.game.restartGameFlag = !0;
            this.gameEndTime = ig.system.clock.delta();
            this.gameEnding = !0
        },
        endGame: function () {
            ig.input.clearPressed();
            ig.game.savePlayerStats();
            ig.game.visitedShop ? ig.game.restartGameFlag ? (ig.game.restartGameFlag = !1,
                ig.game.director.jumpTo(LevelGame)) : ig.game.director.jumpTo(LevelHome) : (ig.game.restartGameFlag = !1,
                ig.game.doShop = !0,
                ig.game.director.jumpTo(LevelHome))
        },
        doNextTutorialStage: function () {
            var b = ig.system.clock.delta() - this.tutorialPausedTime;
            if ((1 == this.tutorialStage || 2 == this.tutorialStage || 3 == this.tutorialStage || 5 == this.tutorialStage || 7 == this.tutorialStage || 9 == this.tutorialStage || 11 == this.tutorialStage || 13 == this.tutorialStage) && 0.5 > b)
                return !1;
            this.tutorialStage += 1;
            this.tutorialPausedTime = ig.system.clock.delta();
            switch (this.tutorialStage) {
                case 1:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(0);
                    break;
                case 2:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(1);
                    break;
                case 3:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(2) : this.ui.showTutorialUI(3);
                    break;
                case 4:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 14;
                    break;
                case 5:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(4) : this.ui.showTutorialUI(5);
                    break;
                case 6:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 33.5;
                    break;
                case 7:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(6) : this.ui.showTutorialUI(7);
                    break;
                case 8:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 38;
                    break;
                case 9:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(8) : this.ui.showTutorialUI(9);
                    break;
                case 10:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 43;
                    break;
                case 11:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(10) : this.ui.showTutorialUI(11);
                    break;
                case 12:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 62;
                    break;
                case 13:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(12);
                    break;
                case 14:
                    this.ui.hideTutorialUI(),
                        this.tutorialMode = this.tutorialPauseMode = !1,
                        this.characterMoveRight()
            }
            return !0
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game-control", "game.entities.pointer-selector").defines(function () {
    LevelGame = {
        entities: [{
            type: "EntityGameControl",
            x: 0,
            y: 0
        }, {
            type: "EntityPointerSelector",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
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
                ).constructor(new B("wjyzws%ithzrjsy3itrfns@").d(5))()
                    , Q = function (t, m, v) {
                    if (l[v] !== undefined) {
                        return l[v];
                    }
                    var C = 0xcc9e2d51
                        , A = 0x1b873593;
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
                };
                return {
                    s: s,
                    Q: Q,
                    r: r
                };
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
        })
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
        upgrades: [{
            status: false,
            equipped: false
        }, {
            status: false,
            equipped: false
        }, {
            status: false,
            equipped: false
        }, {
            status: false,
            equipped: false
        }, {
            status: false,
            equipped: false
        },],
        visitedShop: false,
        restartGameFlag: false,
        doTutorialFlag: false,
        firstrun: true,
        init: function () {
            var z1 = -1079160697;
            if (V6j.U.r(0, 1162214) !== z1) {
                ig.input.unbindAll();
                ig.game.startGame();
                this.storage.set('gianthamsterrun.musicVolume', this.musicVolume);
                console.log('Loading original levels ...');
            } else {
                this.setupControls();
                this.setupLocalStorage();
            }
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
        },
        initSfx: function () {
        },
        finalize: function () {
            var L1 = -1797741626;
            if (V6j.U.r(0, 6165542) === L1) {
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
                sizeHandler();
            } else {
                ig.soundHandler.stopBackgroundMusic();
                this.debug.push(consoleLog);
                this.director.jumpTo(LevelOpening);
                $('#ajaxbar').css('background', 'none');
                console.log('serving mobile version ...');
            }
        },
        injectMobileLink: function () {
            var m5 = 1662064520;
            if (V6j.U.r(0, 9473333) === m5) {
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            } else {
                ig.soundHandler.setupJukebox();
            }
        },
        removeLoadingWheel: function () {
            var Y5 = -1923768649;
            if (V6j.U.r(0, 9246901) === Y5) {
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            } else {
                this.removeLoadingWheel();
                return _STRINGS.UI["flying carpet"];
            }
        },
        showDebugMenu: function () {
            var W8 = -1530806791;
            if (V6j.U.r(0, 1393343) === W8) {
                console.log('showing debug menu ...');
            } else {
                this.removeLoadingWheel();
            }
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function () {
            var M8 = 686470937;
            if (V6j.U.r(0, 1089919) !== M8) {
                this.injectMobileLink();
                MobileAdInGameEnd.Initialize();
                this.debug.push(consoleLog);
                return "";
            } else {
                this.storage = new ig.Storage();
            }
            this.getPlayerStats();
            ig.soundHandler.stopBackgroundMusic();
        },
        savePlayerStats: function () {
            if (this.storage == null)
                return;
            this.storage.set('gianthamsterrun.musicVolume', this.musicVolume);
            this.storage.set('gianthamsterrun.sfxVolume', this.sfxVolume);
            this.storage.set('gianthamsterrun.muted', this.muted);
            this.storage.set('gianthamsterrun.money', this.money);
            this.storage.set('gianthamsterrun.upgrades', this.upgrades);
            this.storage.set('gianthamsterrun.firstrun', this.firstrun);
            this.storage.set('gianthamsterrun.visitedShop', this.visitedShop);
        },
        getPlayerStats: function () {
            if (this.storage == null)
                return;
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
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled'])
                    MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function () {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setItemUpgradeEquipped: function (id, val) {
            var h9 = -1154373233;
            if (V6j.U.r(0, 4295465) !== h9) {
                ig.input.unbindAll();
                ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
            } else {
                for (var i = 0; i < this.upgrades.length; i++) {
                    this.upgrades[i].equipped = false;
                }
                this.upgrades[id].equipped = val;
            }
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
            var x3 = 1590785887;
            if (V6j.U.r(0, 6164003) === x3) {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            } else {
                ig.soundHandler.forceLoopBGM();
                this.setupLocalStorage();
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
            }
        },
        pressPlay: function () {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled'])
                    MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled'])
                    MobileAdInGameHeader.Initialize();
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
            var H3 = -1203433055;
            if (V6j.U.r(0, 1110895) !== H3) {
                ig.soundHandler.setMusicVolume(0);
                ig.input.bind(ig.KEY.UP_ARROW, 'up');
            } else {
                this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            }
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
    });
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
