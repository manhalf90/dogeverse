(() => {
    "use strict";
    var e, v = {},
        g = {};

    function r(e) {
        var n = g[e];
        if (void 0 !== n) return n.exports;
        var t = g[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return v[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports
    }
    r.m = v, e = [], r.O = (n, t, f, i) => {
        if (!t) {
            var a = 1 / 0;
            for (o = 0; o < e.length; o++) {
                for (var [t, f, i] = e[o], l = !0, d = 0; d < t.length; d++)(!1 & i || a >= i) && Object.keys(r.O).every(b => r.O[b](t[d])) ? t.splice(d--, 1) : (l = !1, i < a && (a = i));
                if (l) {
                    e.splice(o--, 1);
                    var s = f();
                    void 0 !== s && (n = s)
                }
            }
            return n
        }
        i = i || 0;
        for (var o = e.length; o > 0 && e[o - 1][2] > i; o--) e[o] = e[o - 1];
        e[o] = [t, f, i]
    }, r.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return r.d(n, {
            a: n
        }), n
    }, (() => {
        var n, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__;
        r.t = function(t, f) {
            if (1 & f && (t = this(t)), 8 & f || "object" == typeof t && t && (4 & f && t.__esModule || 16 & f && "function" == typeof t.then)) return t;
            var i = Object.create(null);
            r.r(i);
            var o = {};
            n = n || [null, e({}), e([]), e(e)];
            for (var a = 2 & f && t;
                "object" == typeof a && !~n.indexOf(a); a = e(a)) Object.getOwnPropertyNames(a).forEach(l => o[l] = () => t[l]);
            return o.default = () => t, r.d(i, o), i
        }
    })(), r.d = (e, n) => {
        for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((n, t) => (r.f[t](e, n), n), [])), r.u = e => (592 === e ? "common" : e) + "." + {
        293: "f344efec5a6f3e36",
        301: "16a85ff8a8de0fff",
        404: "f58333cd36d247c9",
        509: "ce4c8464c799fa7a",
        592: "73caab7e728e9c99",
        794: "63d8fb72564c8738",
        959: "4b7eb426eaf8dace"
    }[e] + ".js", r.miniCssF = e => {}, r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = {},
            n = "app-dogeverse:";
        r.l = (t, f, i, o) => {
            if (e[t]) e[t].push(f);
            else {
                var a, l;
                if (void 0 !== i)
                    for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
                        var c = d[s];
                        if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == n + i) {
                            a = c;
                            break
                        }
                    }
                a || (l = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, r.nc && a.setAttribute("nonce", r.nc), a.setAttribute("data-webpack", n + i), a.src = r.tu(t)), e[t] = [f];
                var u = (_, b) => {
                        a.onerror = a.onload = null, clearTimeout(p);
                        var h = e[t];
                        if (delete e[t], a.parentNode && a.parentNode.removeChild(a), h && h.forEach(y => y(b)), _) return _(b)
                    },
                    p = setTimeout(u.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = u.bind(null, a.onerror), a.onload = u.bind(null, a.onload), l && document.head.appendChild(a)
            }
        }
    })(), r.r = e => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        r.tt = () => (void 0 === e && (e = {
            createScriptURL: n => n
        }, typeof trustedTypes < "u" && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e)
    })(), r.tu = e => r.tt().createScriptURL(e), r.p = "", (() => {
        var e = {
            666: 0
        };
        r.f.j = (f, i) => {
            var o = r.o(e, f) ? e[f] : void 0;
            if (0 !== o)
                if (o) i.push(o[2]);
                else if (666 != f) {
                var a = new Promise((c, u) => o = e[f] = [c, u]);
                i.push(o[2] = a);
                var l = r.p + r.u(f),
                    d = new Error;
                r.l(l, c => {
                    if (r.o(e, f) && (0 !== (o = e[f]) && (e[f] = void 0), o)) {
                        var u = c && ("load" === c.type ? "missing" : c.type),
                            p = c && c.target && c.target.src;
                        d.message = "Loading chunk " + f + " failed.\n(" + u + ": " + p + ")", d.name = "ChunkLoadError", d.type = u, d.request = p, o[1](d)
                    }
                }, "chunk-" + f, f)
            } else e[f] = 0
        }, r.O.j = f => 0 === e[f];
        var n = (f, i) => {
                var d, s, [o, a, l] = i,
                    c = 0;
                if (o.some(p => 0 !== e[p])) {
                    for (d in a) r.o(a, d) && (r.m[d] = a[d]);
                    if (l) var u = l(r)
                }
                for (f && f(i); c < o.length; c++) r.o(e, s = o[c]) && e[s] && e[s][0](), e[s] = 0;
                return r.O(u)
            },
            t = self.webpackChunkapp_dogeverse = self.webpackChunkapp_dogeverse || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
    })()
})();