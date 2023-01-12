!(function (D, u) {
    "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u(((D = D || self).window = D.window || {}));
})(this, function (e) {
    "use strict";
    function m(D) {
        (X = document), (F = window), (n = n || D || F.gsap) && ((d = n.utils.toArray), (r = n.core.context || function () { }), (i = 1));
    }
    function p() {
        return String.fromCharCode.apply(null, arguments);
    }
    function s(D) {
        return F.getComputedStyle(D);
    }
    function t(D) {
        return "absolute" === D.position || !0 === D.absolute;
    }
    function u(D, u) {
        for (var e, t = u.length; -1 < --t;) if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
    }
    function w(D, u) {
        void 0 === D && (D = "");
        var e = ~D.indexOf("++"),
            t = 1;
        return (
            e && (D = D.split("++").join("")),
            function () {
                return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">");
            }
        );
    }
    function x(D, u, e) {
        var t = D.nodeType;
        if (1 === t || 9 === t || 11 === t) for (D = D.firstChild; D; D = D.nextSibling) x(D, u, e);
        else (3 !== t && 4 !== t) || (D.nodeValue = D.nodeValue.split(u).join(e));
    }
    function y(D, u) {
        for (var e = u.length; -1 < --e;) D.push(u[e]);
    }
    function z(D, u, e) {
        for (var t; D && D !== u;) {
            if ((t = D._next || D.nextSibling)) return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent;
        }
    }
    function A(D) {
        var u,
            e,
            t = d(D.childNodes),
            F = t.length;
        for (u = 0; u < F; u++)
            (e = t[u])._isSplit
                ? A(e)
                : u && e.previousSibling && 3 === e.previousSibling.nodeType
                    ? ((e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue), D.removeChild(e))
                    : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e));
    }
    function B(D, u) {
        return parseFloat(u[D]) || 0;
    }
    function C(D, u, e, F, i, C, n) {
        var E,
            r,
            o,
            l,
            p,
            d,
            a,
            h,
            f,
            c,
            g,
            v,
            w = s(D),
            S = B("paddingLeft", w),
            _ = -999,
            b = B("borderBottomWidth", w) + B("borderTopWidth", w),
            m = B("borderLeftWidth", w) + B("borderRightWidth", w),
            T = B("paddingTop", w) + B("paddingBottom", w),
            N = B("paddingLeft", w) + B("paddingRight", w),
            L = B("fontSize", w) * (u.lineThreshold || 0.2),
            W = w.textAlign,
            O = [],
            H = [],
            k = [],
            V = u.wordDelimiter || " ",
            j = u.tag ? u.tag : u.span ? "span" : "div",
            M = u.type || u.split || "chars,words,lines",
            R = i && ~M.indexOf("lines") ? [] : null,
            P = ~M.indexOf("words"),
            q = ~M.indexOf("chars"),
            G = t(u),
            I = u.linesClass,
            J = ~(I || "").indexOf("++"),
            K = [],
            Q = "flex" === w.display,
            U = D.style.display;
        for (J && (I = I.split("++").join("")), Q && (D.style.display = "block"), o = (r = D.getElementsByTagName("*")).length, p = [], E = 0; E < o; E++) p[E] = r[E];
        if (R || G)
            for (E = 0; E < o; E++)
                ((d = (l = p[E]).parentNode === D) || G || (q && !P)) &&
                    ((v = l.offsetTop),
                        R && d && Math.abs(v - _) > L && ("BR" !== l.nodeName || 0 === E) && ((a = []), R.push(a), (_ = v)),
                        G && ((l._x = l.offsetLeft), (l._y = v), (l._w = l.offsetWidth), (l._h = l.offsetHeight)),
                        R &&
                        (((l._isSplit && d) || (!q && d) || (P && d) || (!P && l.parentNode.parentNode === D && !l.parentNode._isSplit)) && (a.push(l), (l._x -= S), z(l, D, V) && (l._wordEnd = !0)),
                            "BR" === l.nodeName && ((l.nextSibling && "BR" === l.nextSibling.nodeName) || 0 === E) && R.push([])));
        for (E = 0; E < o; E++)
            if (((d = (l = p[E]).parentNode === D), "BR" !== l.nodeName))
                if (
                    (G &&
                        ((f = l.style),
                            P || d || ((l._x += l.parentNode._x), (l._y += l.parentNode._y)),
                            (f.left = l._x + "px"),
                            (f.top = l._y + "px"),
                            (f.position = "absolute"),
                            (f.display = "block"),
                            (f.width = l._w + 1 + "px"),
                            (f.height = l._h + "px")),
                        !P && q)
                )
                    if (l._isSplit) for (l._next = r = l.nextSibling, l.parentNode.appendChild(l); r && 3 === r.nodeType && " " === r.textContent;) (l._next = r.nextSibling), l.parentNode.appendChild(r), (r = r.nextSibling);
                    else
                        l.parentNode._isSplit
                            ? ((l._parent = l.parentNode),
                                !l.previousSibling && l.firstChild && (l.firstChild._isFirst = !0),
                                l.nextSibling && " " === l.nextSibling.textContent && !l.nextSibling.nextSibling && K.push(l.nextSibling),
                                (l._next = l.nextSibling && l.nextSibling._isFirst ? null : l.nextSibling),
                                l.parentNode.removeChild(l),
                                p.splice(E--, 1),
                                o--)
                            : d ||
                            ((v = !l.nextSibling && z(l.parentNode, D, V)),
                                l.parentNode._parent && l.parentNode._parent.appendChild(l),
                                v && l.parentNode.appendChild(X.createTextNode(" ")),
                                "span" === j && (l.style.display = "inline"),
                                O.push(l));
                else l.parentNode._isSplit && !l._isSplit && "" !== l.innerHTML ? H.push(l) : q && !l._isSplit && ("span" === j && (l.style.display = "inline"), O.push(l));
            else R || G ? (l.parentNode && l.parentNode.removeChild(l), p.splice(E--, 1), o--) : P || D.appendChild(l);
        for (E = K.length; -1 < --E;) K[E].parentNode.removeChild(K[E]);
        if (R) {
            for (G && ((c = X.createElement(j)), D.appendChild(c), (g = c.offsetWidth + "px"), (v = c.offsetParent === D ? 0 : D.offsetLeft), D.removeChild(c)), f = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;)
                D.removeChild(D.firstChild);
            for (h = " " === V && (!G || (!P && !q)), E = 0; E < R.length; E++) {
                for (a = R[E], (c = X.createElement(j)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? E + 1 : "")), k.push(c), o = a.length, r = 0; r < o; r++)
                    "BR" !== a[r].nodeName &&
                        ((l = a[r]),
                            c.appendChild(l),
                            h && l._wordEnd && c.appendChild(X.createTextNode(" ")),
                            G && (0 === r && ((c.style.top = l._y + "px"), (c.style.left = S + v + "px")), (l.style.top = "0px"), v && (l.style.left = l._x - v + "px")));
                0 === o ? (c.innerHTML = "&nbsp;") : P || q || (A(c), x(c, String.fromCharCode(160), " ")), G && ((c.style.width = g), (c.style.height = l._h + "px")), D.appendChild(c);
            }
            D.style.cssText = f;
        }
        G && (n > D.clientHeight && ((D.style.height = n - T + "px"), D.clientHeight < n && (D.style.height = n + b + "px")), C > D.clientWidth && ((D.style.width = C - N + "px"), D.clientWidth < C && (D.style.width = C + m + "px"))),
            Q && (U ? (D.style.display = U) : D.style.removeProperty("display")),
            y(e, O),
            P && y(F, H),
            y(i, k);
    }
    function D(D, e, F, i) {
        var C,
            n,
            s,
            E,
            r,
            o,
            l,
            p,
            d = e.tag ? e.tag : e.span ? "span" : "div",
            a = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
            h = t(e),
            f = e.wordDelimiter || " ",
            B = " " !== f ? "" : h ? "&#173; " : " ",
            c = "</" + d + ">",
            A = 1,
            g = e.specialChars ? ("function" == typeof e.specialChars ? e.specialChars : u) : null,
            y = X.createElement("div"),
            v = D.parentNode;
        for (
            v.insertBefore(y, D),
            y.textContent = D.nodeValue,
            v.removeChild(D),
            l =
            -1 !==
            (C = (function getText(D) {
                var u = D.nodeType,
                    e = "";
                if (1 === u || 9 === u || 11 === u) {
                    if ("string" == typeof D.textContent) return D.textContent;
                    for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
                } else if (3 === u || 4 === u) return D.nodeValue;
                return e;
            })((D = y))).indexOf("<"),
            !1 !== e.reduceWhiteSpace && (C = C.replace(b, " ").replace(_, "")),
            l && (C = C.split("<").join("{{LT}}")),
            r = C.length,
            n = (" " === C.charAt(0) ? B : "") + F(),
            s = 0;
            s < r;
            s++
        )
            if (((o = C.charAt(s)), g && (p = g(C.substr(s), e.specialChars)))) (o = C.substr(s, p || 1)), (n += a && " " !== o ? i() + o + "</" + d + ">" : o), (s += p - 1);
            else if (o === f && C.charAt(s - 1) !== f && s) {
                for (n += A ? c : "", A = 0; C.charAt(s + 1) === f;) (n += B), s++;
                s === r - 1 ? (n += B) : ")" !== C.charAt(s + 1) && ((n += B + F()), (A = 1));
            } else
                "{" === o && "{{LT}}" === C.substr(s, 6)
                    ? ((n += a ? i() + "{{LT}}</" + d + ">" : "{{LT}}"), (s += 5))
                    : (55296 <= o.charCodeAt(0) && o.charCodeAt(0) <= 56319) || (65024 <= C.charCodeAt(s + 1) && C.charCodeAt(s + 1) <= 65039)
                        ? ((E = ((C.substr(s, 12).split(S) || [])[1] || "").length || 2), (n += a && " " !== o ? i() + C.substr(s, E) + "</" + d + ">" : C.substr(s, E)), (s += E - 1))
                        : (n += a && " " !== o ? i() + o + "</" + d + ">" : o);
        (D.outerHTML = n + (A ? c : "")), l && x(v, "{{LT}}", "<");
    }
    function E(u, e, F, i) {
        var C,
            n,
            r = d(u.childNodes),
            o = r.length,
            l = t(e);
        if (3 !== u.nodeType || 1 < o) {
            for (e.absolute = !1, C = 0; C < o; C++)
                ((n = r[C])._next = n._isFirst = n._parent = n._wordEnd = null),
                    (3 === n.nodeType && !/\S+/.test(n.nodeValue)) || (l && 3 !== n.nodeType && "inline" === s(n).display && ((n.style.display = "inline-block"), (n.style.position = "relative")), (n._isSplit = !0), E(n, e, F, i));
            return (e.absolute = l), void (u._isSplit = !0);
        }
        D(u, e, F, i);
    }
    var X,
        F,
        i,
        n,
        r,
        d,
        o,
        _ = /(?:\r|\n|\t\t)/g,
        b = /(?:\s\s+)/g,
        l = "SplitText",
        a = p(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        h = (function (D) {
            var u = "undefined" != typeof window,
                e = 0 === (u ? window.location.href : "").indexOf(p(102, 105, 108, 101, 58, 47, 47)) || -1 !== D.indexOf(p(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== D.indexOf(p(49, 50, 55, 46, 48, 32, 48, 46, 49)),
                t = [
                    a,
                    p(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
                    p(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103),
                    p(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
                    p(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
                    p(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101),
                    p(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
                    p(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
                    p(99, 100, 112, 110, 46, 105, 111),
                    p(112, 101, 110, 115, 46, 105, 111),
                    p(103, 97, 110, 110, 111, 110, 46, 116, 118),
                    p(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
                    p(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116),
                    p(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
                    p(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
                    p(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
                    p(112, 108, 110, 107, 114, 46, 99, 111),
                    p(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
                    p(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
                    p(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
                    p(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
                    p(99, 115, 98, 46, 97, 112, 112),
                    p(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
                    p(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
                    p(99, 111, 100, 105, 101, 114, 46, 105, 111),
                    p(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
                    p(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109),
                    p(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109),
                    p(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109),
                    p(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111),
                    p(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
                ],
                F = t.length;
            if (-1 !== D.indexOf(t[F])) return !0;
            return (
                e
            );
        }),
        f =
            (((o = SplitText.prototype).split = function split(D) {
                this.isSplit && this.revert(), (this.vars = D = D || this.vars), (this._originals.length = this.chars.length = this.words.length = this.lines.length = 0);
                for (var u, e, t, F = this.elements.length, i = D.tag ? D.tag : D.span ? "span" : "div", n = w(D.wordsClass, i), s = w(D.charsClass, i); -1 < --F;)
                    (t = this.elements[F]), (this._originals[F] = t.innerHTML), (u = t.clientHeight), (e = t.clientWidth), E(t, D, n, s), C(t, D, this.chars, this.words, this.lines, e, u);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), (this.isSplit = !0), this;
            }),
                (o.revert = function revert() {
                    var e = this._originals;
                    if (!e) throw "revert() call wasn't scoped properly.";
                    return (
                        this.elements.forEach(function (D, u) {
                            return (D.innerHTML = e[u]);
                        }),
                        (this.chars = []),
                        (this.words = []),
                        (this.lines = []),
                        (this.isSplit = !1),
                        this
                    );
                }),
                (SplitText.create = function create(D, u) {
                    return new SplitText(D, u);
                }),
                SplitText);
    function SplitText(D, u) {
        i || m(), (this.elements = d(D)), (this.chars = []), (this.words = []), (this.lines = []), (this._originals = []), (this.vars = u || {}), r(this), h && this.split(u);
    }
    (e.SplitText = f), (e.default = f);
});
