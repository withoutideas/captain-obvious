"use strict";

function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r)
}

function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r)
}

function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(r, e) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, e) : void 0
    }
}

function _arrayLikeToArray(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
    return n
}

function _iterableToArrayLimit(r, e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
        var t = [],
            n = !0,
            a = !1,
            o = void 0;
        try {
            for (var i, l = r[Symbol.iterator](); !(n = (i = l.next()).done) && (t.push(i.value), !e || t.length !== e); n = !0);
        } catch (r) {
            a = !0, o = r
        } finally {
            try {
                n || null == l.return || l.return()
            } finally {
                if (a) throw o
            }
        }
        return t
    }
}

function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r
}! function() {
    var r = document.querySelectorAll(".player");
    _toConsumableArray(r).forEach(function(r) {
        var a = r.querySelector(".player__audio");
        _toConsumableArray(r.querySelectorAll(".player__timecode")).forEach(function(r) {
            var e = r.innerText,
                t = function(r) {
                    var e = _slicedToArray(r.split(":").map(Number), 2);
                    return 60 * e[0] + e[1]
                }(r.innerText),
                n = document.createElement("button");
            n.type = "button", n.className = "player__timecode player__timecode--button", n.innerText = e, n.addEventListener("click", function() {
                a.currentTime = t, a.play()
            }), r.replaceWith(n)
        })
    })
}();