"use strict";
var _slicedToArray = function() {
    function b(d, f) {
        var g = [],
            k = !0,
            l = !1,
            m = void 0;
        try {
            for (var p, o = d[Symbol.iterator](); !(k = (p = o.next()).done) && (g.push(p.value), !(f && g.length === f)); k = !0);
        } catch (q) {
            l = !0, m = q
        } finally {
            try {
                !k && o["return"] && o["return"]()
            } finally {
                if (l) throw m
            }
        }
        return g
    }
    return function(d, f) {
        if (Array.isArray(d)) return d;
        if (Symbol.iterator in Object(d)) return b(d, f);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}();
(function() {
    function b(H, I, J, K, L) {
        var M = w[L.signBoard.type],
            N = M.padding,
            O = I + N.left + N.right,
            P = J + N.top + N.bottom;
        M.draw(H, O, P, K, L), H.shadowColor = "rgba(0, 0, 0, 0)", H.shadowBlur = 0, H.shadowOffsetX = 0, H.shadowOffsetY = 0;
        var Q = document.createElement("canvas"),
            R = document.createElement("canvas");
        Q.width = I, Q.height = J, R.width = I, R.height = J;
        var S = Q.getContext("2d"),
            T = R.getContext("2d");
        T.fillStyle = "#000", T.fillRect(0, 0, I, J), T.fillStyle = "#FFF", T.strokeStyle = "#FFF", z[L.signType](S, T, L);
        for (var U = S.getImageData(0, 0, I, J), V = T.getImageData(0, 0, I, J), W = U.data, X = V.data, Y = 0; Y < I * J; Y++) W[4 * Y + 3] = X[4 * Y];
        S.putImageData(U, 0, 0), H.drawImage(Q, N.left, N.top), L.signBoard.light && M.shadow(H, O, P, K, L)
    }
    var d = "'Mplus 1p', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'M+ 1p', sans-serif",
        f = "'Helvetica', 'Arial', sans-serif",
        g = "'Cabin', 'Open Sans', 'Lato', sans-serif",
        m = function() {
            return {
                signType: "jre-kanji",
                signBoard: {
                    type: "SE-6",
                    light: !0
                },
                numbering: !0,
                branchRight: !1,
                branchLeft: !1,
                black: "#1A1A1A",
                sta: {
                    name: {
                        kanji: "\u65B0\u5BBF",
                        english: "Shinjuku",
                        kana: "\u3057\u3093\u3058\u3085\u304F",
                        chinese: "\u65B0\u5BBF",
                        korean: "\uC2E0\uC8FC\uCFE0"
                    },
                    enableTlc: !0,
                    tlc: "SJK",
                    numberings: [{
                        text: "JY 17",
                        color: "#72C11D"
                    }]
                },
                rightStations: [{
                    name: {
                        kanji: "\u65B0\u5927\u4E45\u4FDD",
                        english: "Shin-\u014Ckubo"
                    },
                    lineColor: "#006400",
                    go: !1,
                    numberings: [{
                        text: "JY 16",
                        color: "#72C11D"
                    }]
                }, {
                    name: {
                        kanji: "",
                        english: ""
                    },
                    lineColor: "#006400",
                    go: !1,
                    numberings: []
                }],
                leftStations: [{
                    name: {
                        kanji: "\u4EE3\u3005\u6728",
                        english: "Yoyogi"
                    },
                    lineColor: "#006400",
                    go: !0,
                    numberings: [{
                        text: "JY 18",
                        color: "#72C11D"
                    }]
                }, {
                    name: {
                        kanji: "",
                        english: ""
                    },
                    lineColor: "#006400",
                    go: !1,
                    numberings: []
                }],
                cityNotations: [{
                    text: "\u5C71",
                    fill: !1
                }, {
                    text: "\u533A",
                    fill: !0
                }],
                routeColors: ["#80C241"]
            }
        };
    window.addEventListener("beforeunload", function(H) {
        return H.returnValue = "\u3053\u306E\u30DA\u30FC\u30B8\u304B\u3089\u96E2\u308C\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B"
    });
    var o = {
            stringify: function stringify(H) {
                function I(S) {
                    R += P(S.name.kanji), R += P(S.name.english), R += S.lineColor.slice(1), R += S.go ? "1" : "0", J && S.go && (R += Q(S.numberings))
                }
                var P = function(S) {
                        return S.length + ":" + S
                    },
                    Q = function(S) {
                        return S.length + ":" + S.map(function(T) {
                            return T.text + "," + T.color.slice(1) + ";"
                        }).join("")
                    },
                    R = "",
                    J = H.numbering,
                    K = H.branchRight,
                    L = H.branchLeft,
                    M = H.sta,
                    N = H.cityNotations,
                    O = H.routeColors;
                return R += H.signType + ",", R += H.signBoard.type + ",", R += H.signBoard.light ? "1" : "0", R += J ? "1" : "0", R += K ? "1" : "0", R += L ? "1" : "0", R += H.black.slice(1), R += P(M.name.kanji), R += P(M.name.english), R += P(M.name.kana), J && (R += P(M.name.chinese), R += P(M.name.korean), R += M.enableTlc ? "1" + M.tlc : "0", R += Q(M.numberings)), I(H.rightStations[0]), K && I(H.rightStations[1]), I(H.leftStations[0]), L && I(H.leftStations[1]), R += N.length + ":" + N.map(function(S) {
                    return S.text + (S.fill ? "1" : "0")
                }).join(""), R += O.length + ":" + O.map(function(S) {
                    return S.slice(1)
                }).join(""), R
            },
            parse: function parse(H) {
                function I(Z) {
                    Z.name.kanji = K(J), Z.name.english = K(J), Z.lineColor = "#" + H.substr(J, 6), J += 6;
                    var $ = !!(H[J++] - 0);
                    Z.go = $, Z.numberings = P && $ ? L(J) : []
                }
                var J = 0,
                    K = function(Z) {
                        var $ = H.indexOf(":", Z),
                            _ = H.slice(Z, $) - 0;
                        return J = $ + _ + 1, H.substr($ + 1, _)
                    },
                    L = function(Z) {
                        var $ = H.indexOf(":", Z),
                            _ = H.slice(Z, $) - 0,
                            aa = [];
                        J = $ + 1;
                        for (var ba = 0; ba < _; ba++) {
                            var ca = H.indexOf(";", J),
                                _str$slice$split = H.slice(J, ca).split(","),
                                _str$slice$split2 = _slicedToArray(_str$slice$split, 2),
                                da = _str$slice$split2[0],
                                ea = _str$slice$split2[1];
                            aa.push({
                                text: da,
                                color: "#" + ea
                            }), J = ca + 1
                        }
                        return aa
                    },
                    M = m(),
                    N = H.indexOf(",");
                M.signType = H.slice(0, N), J = N + 1;
                var O = H.indexOf(",", J);
                M.signBoard.type = H.slice(J, O), J = O + 1, M.signBoard.light = !!(H[J] - 0);
                var P = !!(H[++J] - 0);
                M.numbering = P;
                var Q = !!(H[++J] - 0);
                M.branchRight = Q;
                var R = !!(H[++J] - 0);
                if (M.branchLeft = R, M.black = "#" + H.substr(++J, 6), J += 6, M.sta.name.kanji = K(J), M.sta.name.english = K(J), M.sta.name.kana = K(J), P) {
                    M.sta.name.chinese = K(J), M.sta.name.korean = K(J);
                    var S = !!(H[J++] - 0);
                    M.sta.enableTlc = S, S ? (M.sta.tlc = H.substr(J, 3), J += 3) : M.sta.tlc = "", M.sta.numberings = L(J)
                } else M.sta.chinese = "", M.sta.korean = "", M.sta.enableTlc = !1, M.sta.tlc = "", M.sta.numberings = [];
                I(M.rightStations[0]), Q && I(M.rightStations[1]), I(M.leftStations[0]), R && I(M.leftStations[1]), M.cityNotations = [];
                var T = H.indexOf(":", J),
                    U = H.slice(J, T) - 0;
                J = T + 1;
                for (var V = 0; V < U; V++) M.cityNotations.push({
                    text: H[J],
                    fill: !!(H[J + 1] - 0)
                }), J += 2;
                M.routeColors = [];
                var W = H.indexOf(":", J),
                    X = H.slice(J, W) - 0;
                J = W + 1;
                for (var Y = 0; Y < X; Y++) M.routeColors.push("#" + H.substr(J, 6)), J += 6;
                return M
            }
        },
        p = function(H, I, J, K) {
            var M = J / K;
            return H / I > M ? {
                width: M * I,
                height: I
            } : {
                width: H,
                height: H / M
            }
        },
        q = function(H, I, J, K, L, M) {
            H.beginPath(), H.moveTo(I, J + M), H.arcTo(I, J, I + K - M, J, M), H.arcTo(I + K, J, I + K, J + L - M, M), H.arcTo(I + K, J + L, I + M, J + L, M), H.arcTo(I, J + L, I, J + M, M), H.closePath()
        },
        u = {
            draw: function draw(H, I, J, K, L) {
                H.fillStyle = "#333", H.fillRect(0, 0, I, J), H.beginPath(), H.moveTo(6, J), H.lineTo(6, 6), H.lineTo(I - 6, 6), H.lineTo(I - 6, J), H.lineWidth = 2, H.strokeStyle = "#1A1A1A", H.stroke(), H.beginPath(), H.moveTo(10, 6), H.lineTo(10, this.padding.top), H.lineWidth = 1, H.stroke(), H.beginPath(), H.moveTo(I - 10, 6), H.lineTo(I - 10, this.padding.top), H.stroke(), H.beginPath(), H.moveTo(6, this.padding.top), H.lineTo(I - 6, this.padding.top), H.stroke();
                var M = H.createLinearGradient(0, J, 0, J - 8);
                M.addColorStop(0, "rgba(0, 0, 0, 0.5)"), M.addColorStop(1, "rgba(0, 0, 0, 0)"), H.fillStyle = M, H.fillRect(7, J - 8, I - 14, 8), H.shadowColor = "#000", H.shadowBlur = 5, H.fillStyle = "#333", H.fillRect(10, J - this.padding.bottom, I - 20, 10), H.shadowColor = "rgba(0, 0, 0, 0)", H.shadowBlur = 0, H.fillStyle = L.signBoard.light ? "#F0F8FF" : "#EEE", H.fillRect(this.padding.left, this.padding.top, I - this.padding.left - this.padding.right, J - this.padding.top - this.padding.bottom)
            },
            shadow: function shadow(H, I, J) {
                var M = I - this.padding.left - this.padding.right,
                    N = J - this.padding.top - this.padding.bottom,
                    O = document.createElement("canvas"),
                    P = O.getContext("2d");
                O.width = M, O.height = N, P.fillStyle = "#FFF", P.fillRect(0, 0, M, N), P.shadowColor = "#000", P.shadowBlur = 40, P.shadowOffsetY = N, P.fillStyle = "rgba(0, 0, 0, 0.5)", P.fillRect(30, 30 - N, M - 60, N - 60), P.shadowBlur = 100, P.beginPath(), P.moveTo(100, 100 - N), P.lineTo(M - 100, 100 - N), P.lineTo(M - 200, -200), P.lineTo(200, -200), P.closePath(), P.fill();
                var Q = document.createElement("canvas"),
                    R = Q.getContext("2d");
                Q.width = M, Q.height = N, R.fillStyle = "#000", R.fillRect(0, 0, M, N);
                for (var S = P.getImageData(0, 0, M, N), T = R.getImageData(0, 0, M, N), U = S.data, V = T.data, W = 0; W < M * N; W++) V[4 * W + 3] = 0.2 * (U[4 * W] - 63);
                R.putImageData(T, 0, 0), H.drawImage(Q, this.padding.left, this.padding.top)
            }
        },
        w = {
            "SE-6": {
                padding: {
                    top: 80,
                    bottom: 30,
                    left: 35,
                    right: 35
                },
                width: 1830,
                height: 490,
                draw: u.draw,
                shadow: u.shadow
            },
            "SE-7": {
                padding: {
                    top: 80,
                    bottom: 30,
                    left: 35,
                    right: 35
                },
                width: 2410,
                height: 490,
                draw: u.draw,
                shadow: u.shadow
            },
            "SE-8": {
                padding: {
                    top: 80,
                    bottom: 30,
                    left: 40,
                    right: 40
                },
                width: 3620,
                height: 490,
                draw: u.draw,
                shadow: u.shadow
            }
        },
        z = {
            "jre-kanji": function jreKanji(H, I, J) {
                var _frames$data$signBoar = w[J.signBoard.type],
                    K = _frames$data$signBoar.width,
                    L = _frames$data$signBoar.height,
                    M = K / 2,
                    N = Math.floor(M),
                    O = Math.ceil(M),
                    P = L / 2 + 80,
                    Q = 100,
                    R = Math.ceil(Q),
                    S = P - Q / 2,
                    T = Math.floor(S),
                    U = P + Q / 2,
                    V = Math.min(620, M - Q);
                I.beginPath(), J.branchRight ? (I.moveTo(K - V, S), I.lineTo(K - V + 65, S - 65), J.rightStations[0].go ? (I.lineTo(K - 130, S - 65), I.lineTo(K - 50, S - 25), I.lineTo(K - 130, S + 12)) : (I.lineTo(K, S - 65), I.lineTo(K, S + 12)), I.lineTo(K - V + 100, S + 12), I.lineTo(K - V + 60, P), I.lineTo(K - V + 100, U - 12), J.rightStations[1].go ? (I.lineTo(K - 130, U - 12), I.lineTo(K - 50, U + 25), I.lineTo(K - 130, U + 65)) : (I.lineTo(K, U - 12), I.lineTo(K, U + 65)), I.lineTo(K - V + 65, U + 65), I.lineTo(K - V, U)) : J.rightStations[0].go ? (I.moveTo(K - 160, S), I.lineTo(K - 65, P), I.lineTo(K - 160, U)) : (I.moveTo(K, S), I.lineTo(K, U)), J.branchLeft ? (I.lineTo(V, U), I.lineTo(V - 65, U + 65), J.leftStations[1].go ? (I.lineTo(130, U + 65), I.lineTo(50, U + 25), I.lineTo(130, U - 12)) : (I.lineTo(0, U + 65), I.lineTo(0, U - 12)), I.lineTo(V - 100, U - 12), I.lineTo(V - 60, P), I.lineTo(V - 100, S + 12), J.leftStations[0].go ? (I.lineTo(130, S + 12), I.lineTo(50, S - 25), I.lineTo(130, S - 65)) : (I.lineTo(0, S + 12), I.lineTo(0, S - 65)), I.lineTo(V - 65, S - 65), I.lineTo(V, S)) : J.leftStations[0].go ? (I.lineTo(160, U), I.lineTo(65, P), I.lineTo(160, S)) : (I.lineTo(0, U), I.lineTo(0, S)), I.closePath(), I.fill(), J.branchRight ? (H.fillStyle = J.rightStations[0].lineColor, H.fillRect(N, T - 65, O, 65 + R / 2), H.fillStyle = J.rightStations[1].lineColor, H.fillRect(N, P, O, 65 + R / 2)) : (H.fillStyle = J.rightStations[0].lineColor, H.fillRect(N, T, O, R)), J.branchLeft ? (H.fillStyle = J.leftStations[0].lineColor, H.fillRect(0, T - 65, M, 65 + R / 2), H.fillStyle = J.leftStations[1].lineColor, H.fillRect(0, P, M, 65 + R / 2)) : (H.fillStyle = J.leftStations[0].lineColor, H.fillRect(0, T, M, R));
                for (var W = J.routeColors.length, X = Q / W, Z = 0; Z < W; Z++) H.fillStyle = J.routeColors[Z], H.fillRect(M - Q / 2, Z ? S + X * Z : T, Q, Math.ceil(X));
                var $ = function(ua) {
                        var va = ua.x,
                            wa = ua.y,
                            xa = ua.text,
                            ya = ua.weight,
                            za = ua.size,
                            Aa = ua.font,
                            Ba = ua.maxWidth,
                            Ca = ua.align;
                        I.textAlign = Ca || "center", I.font = (ya || "") + " " + za + "px " + Aa, I.fillText(xa, va, wa, Ba), H.fillStyle = J.black;
                        var Da = Math.min(Ba || Infinity, I.measureText(xa).width);
                        return H.fillRect({
                            left: va,
                            right: va - Da
                        } [Ca] || va - Da / 2, wa - za, Da, 1.22 * za), I.textAlign = "center", Math.min(Da, Ba || Infinity)
                    },
                    aa = function(ua, va) {
                        return ua.split("").join(va[ua.length - 2] || "")
                    },
                    ba = function(ua, va, wa, xa, ya, za) {
                        var Aa = 0.1 * wa,
                            Ba = wa - 2 * Aa,
                            Ca = xa.match(/[A-Z]+/g)[0],
                            Da = xa.match(/[0-9]{2,}/g)[0];
                        za ? (q(H, ua, va, wa, wa, Aa), H.fillStyle = ya, H.fill()) : (H.fillStyle = ya, H.fillRect(Math.floor(ua), Math.floor(va), Math.ceil(wa) + 1, Math.ceil(wa) + 1), q(I, ua, va, wa, wa, Aa), I.fill()), I.fillStyle = "#000", I.fillRect(ua + Aa, va + Aa, Ba, Ba), I.fillStyle = "#FFF", H.fillStyle = J.black, H.fillRect(Math.ceil(ua + Aa) + 2, Math.ceil(va + Aa) + 2, Math.floor(Ba) - 4, Math.floor(Ba) - 4), I.textAlign = "center", I.font = "bold " + 3 * Aa + "px " + g, I.fillText(Ca, ua + wa / 2, va + 4 * Aa, Ba * 0.9), I.font = "bold " + 4.4 * Aa + "px " + g, I.fillText(Da, ua + wa / 2, va + 8 * Aa, Ba * 0.9)
                    },
                    ca = $({
                        x: M,
                        y: S - 120,
                        text: aa(J.sta.name.kanji, ["\u3000", " "]),
                        weight: "800",
                        size: 150,
                        font: d
                    });
                $({
                    x: M,
                    y: S - 40,
                    text: J.sta.name.kana,
                    weight: "800",
                    size: 50,
                    font: d
                });
                var da = $({
                    x: M,
                    y: U + 80,
                    text: J.sta.name.english,
                    weight: "bold",
                    size: 65,
                    font: f
                });
                if (J.numbering) {
                    $({
                        x: M + ca / 2 + 65,
                        y: S - 195,
                        text: J.sta.name.chinese,
                        size: 50,
                        font: "'Noto Sans SC', sans-serif",
                        align: "left"
                    }), $({
                        x: M + ca / 2 + 65,
                        y: S - 120,
                        text: J.sta.name.korean,
                        size: 50,
                        font: "'Noto Sans KR', sans-serif",
                        align: "left"
                    });
                    var ea = J.sta.enableTlc,
                        fa = J.sta.numberings.length,
                        ga = Math.max(25, M - ca / 2 - 80 - 183.6 * fa),
                        ha = ga < V - 50 && J.branchLeft && ea ? 1.2 : 1.5;
                    if (ea) {
                        var ia = S - 250,
                            ja = (108 * fa + 8) * ha,
                            ka = 142 * ha;
                        H.fillStyle = J.black, H.fillRect(Math.floor(ga), Math.floor(ia), Math.ceil(ja) + 1, Math.ceil(ka) + 1), q(I, ga, ia, ja, ka, 18 * ha), I.fill(), I.font = "bold " + 32 * ha + "px " + g, I.fillStyle = "#000", I.fillText(J.sta.tlc, ga + ja / 2, ia + 30 * ha), I.fillStyle = "#FFF"
                    }
                    for (var la = 0; la < fa; la++) {
                        var ma = fa - la - 1,
                            na = J.sta.numberings[ma];
                        ba(ga + 8 * ha + 108 * ha * ma, S - (ea ? 250 - 34 * ha : 250), 100 * ha, na.text, na.color, ea)
                    }
                }
                var oa = function(ua, va, wa) {
                    for (var xa = "right" === wa, ya = xa ? function(Ia) {
                            return K - Ia
                        } : function(Ia) {
                            return Ia
                        }, za = 0, Aa = ua ? 2 : 1; za < Aa; za++) {
                        var Ba = va[za],
                            Ca = ya(ua ? 130 : Ba.go ? 200 : 80),
                            Da = Math.min(Math.abs(Ca - (xa ? M + da / 2 : M - da / 2)) - 20, ua ? Math.abs(Ca - (xa ? K - V + 100 : V - 100)) : Infinity);
                        I.fillStyle = "#000", I.textAlign = wa, I.textBaseline = "middle", I.font = "500 " + (ua ? 60 : Ba.go ? 80 : 70) + "px " + d, I.fillText(aa(Ba.name.kanji, [" "]), Ca, ua ? [S - 25, U + 25][za] : P, Da), I.fillStyle = "#FFF", I.textBaseline = "alphabetic", $({
                            x: Ca,
                            y: ua ? [S - 25, U + 25][za] + 80 : U + 70,
                            text: Ba.name.english,
                            size: ua ? 40 : 55,
                            font: f,
                            align: wa,
                            maxWidth: Da
                        });
                        for (var Ha, Ea = ua ? 50 : 80, Fa = 0, Ga = Ba.numberings.length; J.numbering && Ba.go && Fa < Ga; Fa++) Ha = Ba.numberings[Fa], ba(ya(ua ? 120 : 180) + 1.08 * Ea * Fa + (xa ? 0 : 1.08 * -Ea * Ga), ua ? [S - 25, U + 25][za] + 36 : U + 15, Ea, Ha.text, Ha.color)
                    }
                };
                oa(J.branchRight, J.rightStations, "right"), oa(J.branchLeft, J.leftStations, "left"), I.textAlign = "center", I.lineWidth = 4, I.textAlign = "center";
                for (var pa = 0, qa = J.cityNotations.length; pa < qa; pa++) {
                    var ra = J.cityNotations[qa - pa - 1],
                        sa = K - 160 - 100 * pa,
                        ta = S - (ra.fill ? 230 : 228);
                    H.fillStyle = J.black, H.fillRect(Math.floor(sa) - 3, Math.floor(ta) - 3, 86, 86), q(I, sa, ta, 80, 80, ra.fill ? 8 : 7), I[ra.fill ? "fill" : "stroke"](), I.fillStyle = ra.fill ? "#000" : "#FFF", I.font = "bold 70px " + d, I.fillText(ra.text, sa + 40, ta + 65, 75)
                }
            }
        },
        A = document.getElementById("canvas1"),
        B = A.getContext("2d"),
        C = document.getElementById("message"),
        D = function() {
            var H = this;
            return this.$el.checkValidity() ? void(C.classList.remove("show"), localStorage.setItem("lastSaved", LZString.compressToEncodedURIComponent(o.stringify(this))), setTimeout(function() {
                var I = H.signBoard,
                    L = w[I.type],
                    M = L.padding,
                    N = L.width + M.left + M.right,
                    O = L.height + M.top + M.bottom,
                    _contain = p(document.body.clientWidth, 0.5 * window.innerHeight, N, O),
                    J = _contain.width,
                    K = _contain.height,
                    P = Math.floor(J) * devicePixelRatio,
                    Q = Math.floor(K) * devicePixelRatio;
                A.width = P, A.height = Q, A.style.width = J + "px", A.style.height = K + "px";
                var R = P / N;
                B.scale(R, R), b(B, L.width, L.height, R, H)
            }, 0)) : void C.classList.add("show")
        },
        F = new Vue({
            el: "#vm",
            mounted: function mounted() {
                var J = this,
                    H = localStorage.getItem("lastSaved"),
                    I = void 0;
                location.search.match(/\?desig1=/) ? I = o.parse(LZString.decompressFromEncodedURIComponent(location.search.slice(8))) : H && (I = o.parse(LZString.decompressFromEncodedURIComponent(H))), I && Object.keys(I).forEach(function(K) {
                    return J[K] = I[K]
                }), this.update()
            },
            data: function data() {
                return Object.assign(m(), {
                    macrons: ["\u0100", "\u0112", "\u012A", "\u014C", "\u016A", "\u0101", "\u0113", "\u012B", "\u014D", "\u016B"],
                    fontLoad: {
                        japanese: !1,
                        chinese: !1,
                        korean: !1
                    },
                    shareURL: "",
                    blackList: [{
                        color: "#1A1A1A",
                        name: "\u9ED2"
                    }, {
                        color: "#333333",
                        name: "\u521D\u671F\u7070\u8272"
                    }],
                    cp1: "#000000",
                    cp2: "#FFFFFF",
                    numberingColorList: [{
                        color: "#F0862B",
                        name: "\u6771\u6D77\u9053\u7DDA"
                    }, {
                        color: "#1069B4",
                        name: "\u6A2A\u9808\u8CC0\u30FB\u7DCF\u6B66\u5FEB\u901F\u7DDA"
                    }, {
                        color: "#1DAED1",
                        name: "\u4EAC\u6D5C\u6771\u5317\u30FB\u6839\u5CB8\u7DDA"
                    }, {
                        color: "#B3CC36",
                        name: "\u5C71\u624B\u7DDA"
                    }, {
                        color: "#DD6935",
                        name: "\u4E2D\u592E\u7DDA\u5FEB\u901F\u30FB\u9752\u6885\u7DDA\u30FB\u4E94\u65E5\u5E02\u7DDA"
                    }, {
                        color: "#F2D01F",
                        name: "\u4E2D\u592E\u30FB\u7DCF\u6B66\u7DDA\u5404\u99C5\u505C\u8ECA"
                    }, {
                        color: "#F18E41",
                        name: "\u5B87\u90FD\u5BAE\u7DDA\u30FB\u9AD8\u5D0E\u7DDA"
                    }, {
                        color: "#14A676",
                        name: "\u57FC\u4EAC\u7DDA"
                    }, {
                        color: "#1DAF7E",
                        name: "\u5E38\u78D0\u7DDA\u5FEB\u901F"
                    }, {
                        color: "#868587",
                        name: "\u5E38\u78D0\u7DDA\u5404\u99C5\u505C\u8ECA"
                    }, {
                        color: "#D01827",
                        name: "\u4EAC\u8449\u7DDA"
                    }, {
                        color: "#DB2027",
                        name: "\u6E58\u5357\u65B0\u5BBF\u30E9\u30A4\u30F3"
                    }, {
                        color: "#B1CB39",
                        name: "\u6A2A\u6D5C\u7DDA"
                    }, {
                        color: "#F2D01F",
                        name: "\u5357\u6B66\u7DDA"
                    }, {
                        color: "#F2D01F",
                        name: "\u9DB4\u898B\u7DDA"
                    }, {
                        color: "#EB5A28",
                        name: "\u6B66\u8535\u91CE\u7DDA"
                    }],
                    routeColorList: [{
                        color: "#80C241",
                        name: "\u5C71\u624B\u7DDA"
                    }, {
                        color: "#00B48D",
                        name: "\u57FC\u4EAC\u7DDA\u30FB\u5DDD\u8D8A\u7DDA"
                    }, {
                        color: "#00B2E5",
                        name: "\u4EAC\u6D5C\u6771\u5317\u30FB\u6839\u5CB8\u7DDA"
                    }, {
                        color: "#F15A22",
                        name: "\u4E2D\u592E\u7DDA\u5FEB\u901F\u30FB\u9752\u6885\u7DDA\u30FB\u4E94\u65E5\u5E02\u7DDA"
                    }, {
                        color: "#FFD400",
                        name: "\u4E2D\u592E\u7DCF\u6B66\u7DDA\u5404\u99C5\u505C\u8ECA"
                    }, {
                        color: "#00B261",
                        name: "\u5E38\u78D0\u7DDA\u30FB\u6210\u7530\u7DDA"
                    }, {
                        color: "#C9242F",
                        name: "\u4EAC\u8449\u7DDA"
                    }, {
                        color: "#F15A22",
                        name: "\u6B66\u8535\u91CE\u7DDA"
                    }, {
                        color: "#FFD400",
                        name: "\u5357\u6B66\u7DDA"
                    }, {
                        color: "#FFD400",
                        name: "\u9DB4\u898B\u7DDA"
                    }, {
                        color: "#80C241",
                        name: "\u6A2A\u6D5C\u7DDA"
                    }, {
                        color: "#009793",
                        name: "\u76F8\u6A21\u7DDA"
                    }, {
                        color: "#A8A39D",
                        name: "\u516B\u9AD8\u7DDA\u30FB\u5DDD\u8D8A\u7DDA"
                    }, {
                        color: "#F68B1E",
                        name: "\u6771\u6D77\u9053\u7DDA\u30FB\u4F0A\u6771\u7DDA\u30FB\u5B87\u90FD\u5BAE\u7DDA\u30FB\u9AD8\u5D0E\u7DDA"
                    }, {
                        color: "#007AC0",
                        name: "\u6A2A\u9808\u8CC0\u30FB\u7DCF\u6B66\u5FEB\u901F\u7DDA"
                    }, {
                        color: "#007AC0",
                        name: "\u5E38\u78D0\u7DDA"
                    }, {
                        color: "#00B9F1",
                        name: "\u5185\u623F\u7DDA"
                    }, {
                        color: "#DB4028",
                        name: "\u5916\u623F\u7DDA"
                    }, {
                        color: "#FFC20D",
                        name: "\u7DCF\u6B66\u672C\u7DDA"
                    }, {
                        color: "#00B261",
                        name: "\u6210\u7530\u7DDA"
                    }, {
                        color: "#F15A22",
                        name: "\u6771\u91D1\u7DDA"
                    }, {
                        color: "#C56E2E",
                        name: "\u9E7F\u5CF6\u7DDA"
                    }, {
                        color: "#880022",
                        name: "\u65E5\u5149\u7DDA"
                    }, {
                        color: "#339966",
                        name: "\u70CF\u5C71\u7DDA"
                    }]
                })
            },
            computed: {
                enableBoardLight: function enableBoardLight() {
                    var H = this.signBoard.type;
                    return "SE" === H.substr(0, 2) || "B" === H[0]
                }
            },
            methods: {
                loadFont: function loadFont(H) {
                    var I = this;
                    WebFont.load({
                        custom: {
                            japanese: {
                                families: ["Mplus 1p:n5,n8"],
                                urls: ["https://fonts.googleapis.com/earlyaccess/mplus1p.css"]
                            },
                            chinese: {
                                families: ["Noto Sans SC:n4"],
                                urls: ["https://fonts.googleapis.com/earlyaccess/notosanssc.css"]
                            },
                            korean: {
                                families: ["Noto Sans KR:n4"],
                                urls: ["https://fonts.googleapis.com/earlyaccess/notosanskr.css"]
                            }
                        } [H],
                        loading: function loading() {
                            I.fontLoad[H] = !0
                        },
                        active: function active() {
                            I.update()
                        },
                        inactive: function inactive() {
                            I.fontLoad[H] = !1
                        }
                    })
                },
                changeBoardType: function changeBoardType() {
                    this.enableBoardLight || (this.signBoard.light = !1)
                },
                formatUppercase: function formatUppercase(H) {
                    return H.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(I) {
                        return String.fromCharCode(I.charCodeAt(0) - 65248)
                    }).toUpperCase()
                },
                reset: function reset() {
                    var I = this,
                        H = m();
                    Object.keys(H).forEach(function(J) {
                        return I[J] = H[J]
                    })
                },
                share_url: function share_url() {
                    this.$el.checkValidity() && (this.shareURL = location.protocol + "//" + location.host + location.pathname + "?desig1=" + LZString.compressToEncodedURIComponent(o.stringify(this)))
                },
                copy: function copy(H) {
                    document.addEventListener("copy", function(I) {
                        I.preventDefault(), I.clipboardData.setData("text/plain", H)
                    }, {
                        once: !0
                    }), document.execCommand("copy")
                },
                saveAsPNG: function E() {
                    var H = document.createElement("canvas"),
                        I = H.getContext("2d"),
                        J = w[this.signBoard.type],
                        K = J.padding;
                    H.width = J.width + K.left + K.right, H.height = J.height + K.top + K.bottom, b(I, J.width, J.height, 1, this);
                    var L = document.createElement("a");
                    L.download = "\u99C5\u540D\u6A19_" + this.sta.name.kanji + ".png", L.href = H.toDataURL(), L.dispatchEvent(new MouseEvent("click"))
                },
                update: D
            }
        });
    WebFont.load({
        google: {
            families: ["Open+Sans:700&text=0123456789MS", "Lato:700&text=ABDEFGHIJLNOPQRTUVWXYZ", "Cabin:700&text=CK"]
        },
        active: function active() {
            D.call(F)
        }
    });
    var G = 0;
    window.addEventListener("resize", function() {
        clearTimeout(G), G = setTimeout(function() {
            return D.call(F)
        }, 300)
    })
})();
