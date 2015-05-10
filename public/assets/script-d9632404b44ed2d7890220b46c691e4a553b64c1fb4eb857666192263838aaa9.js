/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document)throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
    return new n.fn.init(a, b)
  }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
    return b.toUpperCase()
  };
  n.fn = n.prototype = {
    jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
      return d.call(this)
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    }, pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    }, each: function (a, b) {
      return n.each(this, a, b)
    }, map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    }, slice: function () {
      return this.pushStack(d.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: f, sort: c.sort, splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a)
    }, noop: function () {
    }, isFunction: function (a) {
      return "function" === n.type(a)
    }, isArray: Array.isArray, isWindow: function (a) {
      return null != a && a === a.window
    }, isNumeric: function (a) {
      return !n.isArray(a) && a - parseFloat(a) >= 0
    }, isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }, isEmptyObject: function (a) {
      var b;
      for (b in a)return !1;
      return !0
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    }, camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r)
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b, c) {
      var d, e = 0, f = a.length, g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
        } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
      } else if (g) {
        for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
      } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
      return a
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "")
    }, makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    }, inArray: function (a, b, c) {
      return null == b ? -1 : g.call(b, a, c)
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
      return a.length = e, a
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    }, map: function (a, b, c) {
      var d, f = 0, g = a.length, h = s(a), i = [];
      if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    }, guid: 1, proxy: function (a, b) {
      var c, e, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
        return a.apply(b || this, e.concat(d.call(arguments)))
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
    }, now: Date.now, support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });
  function s(a) {
    var b = a.length, c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
      return a === b && (l = !0), 0
    }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
        return -1
      }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
      ID: new RegExp("^#(" + N + ")"),
      CLASS: new RegExp("^\\.(" + N + ")"),
      TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + P),
      PSEUDO: new RegExp("^" + Q),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + L + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
    };
    try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
    } catch (eb) {
      I = {
        apply: F.length ? function (a, b) {
          H.apply(a, J.call(b))
        } : function (a, b) {
          var c = a.length, d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }
    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
      if (1 !== (k = b.nodeType) && 9 !== k)return [];
      if (p && !e) {
        if (f = _.exec(a))if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode)return d;
            if (h.id === j)return d.push(h), d
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
        } else {
          if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
            while (l--)o[l] = s + qb(o[l]);
            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
          }
          if (x)try {
            return I.apply(d, w.querySelectorAll(x)), d
          } catch (y) {
          } finally {
            r || b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e)
    }

    function gb() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }

      return b
    }

    function hb(a) {
      return a[u] = !0, a
    }

    function ib(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function jb(a, b) {
      var c = a.split("|"), e = a.length;
      while (e--)d.attrHandle[c[e]] = b
    }

    function kb(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d)return d;
      if (c)while (c = c.nextSibling)if (c === b)return -1;
      return a ? 1 : -1
    }

    function lb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function nb(a) {
      return hb(function (b) {
        return b = +b, hb(function (c, d) {
          var e, f = a([], c.length, b), g = f.length;
          while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a
    }

    c = fb.support = {}, f = fb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fb.setDocument = function (a) {
      var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
      return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
        m()
      }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
        m()
      })), c.attributes = ib(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ib(function (a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
      }), c.getById = ib(function (a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if (typeof b.getElementById !== C && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
      } : function (a, b) {
        var c, d = [], e = 0, f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++])1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
      }), ib(function (a) {
        var b = e.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)while (b = b.parentNode)if (b === a)return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b)return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b)return l = !0, 0;
        var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
        if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
        if (f === g)return kb(a, b);
        c = a;
        while (c = c.parentNode)h.unshift(c);
        c = b;
        while (c = c.parentNode)i.unshift(c);
        while (h[d] === i[d])d++;
        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
      }, e) : n
    }, fb.matches = function (a, b) {
      return fb(a, null, null, b)
    }, fb.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
      } catch (e) {
      }
      return fb(b, n, null, [a]).length > 0
    }, fb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fb.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fb.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fb.uniqueSort = function (a) {
      var b, d = [], e = 0, f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])b === a[f] && (e = d.push(f));
        while (e--)a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fb.getText = function (a) {
      var b, c = "", d = 0, f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent)return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
        } else if (3 === f || 4 === f)return a.nodeValue
      } else while (b = a[d++])c += e(b);
      return c
    }, d = fb.selectors = {
      cacheLength: 50,
      createPseudo: hb,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
        }, PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(cb, db).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        }, CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
              return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
            })
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = fb.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                  k[a] = [w, n, m];
                  break
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        }, PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
            var d, f = e(a, b), g = f.length;
            while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: hb(function (a) {
          var b = [], c = [], d = h(a.replace(R, "$1"));
          return d[u] ? hb(function (a, b, c, e) {
            var f, g = d(a, null, e, []), h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop()
          }
        }), has: hb(function (a) {
          return function (b) {
            return fb(a, b).length > 0
          }
        }), contains: hb(function (a) {
          return function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }), lang: hb(function (a) {
          return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;
            do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }), target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        }, root: function (a) {
          return a === o
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled: function (a) {
          return a.disabled === !1
        }, disabled: function (a) {
          return a.disabled === !0
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
          return !0
        }, parent: function (a) {
          return !d.pseudos.empty(a)
        }, header: function (a) {
          return Z.test(a.nodeName)
        }, input: function (a) {
          return Y.test(a.nodeName)
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        }, text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: nb(function () {
          return [0]
        }), last: nb(function (a, b) {
          return [b - 1]
        }), eq: nb(function (a, b, c) {
          return [0 > c ? c + b : c]
        }), even: nb(function (a, b) {
          for (var c = 0; b > c; c += 2)a.push(c);
          return a
        }), odd: nb(function (a, b) {
          for (var c = 1; b > c; c += 2)a.push(c);
          return a
        }), lt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
          return a
        }), gt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
    for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
    function pb() {
    }

    pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k)return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));
        for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c)break
      }
      return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
    };
    function qb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
      return d
    }

    function rb(a, b, c) {
      var d = b.dir, e = c && "parentNode" === d, f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
        } else while (b = b[d])if (1 === b.nodeType || e) {
          if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
          if (i[d] = j, j[2] = a(b, c, g))return !0
        }
      }
    }

    function sb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)if (!a[e](b, c, d))return !1;
        return !0
      } : a[0]
    }

    function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
      return c
    }

    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ub(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
      })
    }

    function wb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
        return a === b
      }, h, !0), l = rb(function (a) {
        return K.call(b, a) > -1
      }, h, !0), m = [function (a, c, d) {
        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
      }]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
          return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
        }
        m.push(c)
      }
      return sb(m)
    }

    function xb(a, b) {
      var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
        var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;
            while (o = a[m++])if (o(l, g, h)) {
              i.push(l);
              break
            }
            k && (w = v)
          }
          c && ((l = !o && l) && p--, f && r.push(l))
        }
        if (p += q, c && q !== p) {
          m = 0;
          while (o = b[m++])o(r, s, g, h);
          if (f) {
            if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
            s = ub(s)
          }
          I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
        }
        return k && (w = v, j = t), r
      };
      return c ? hb(f) : f
    }

    return h = fb.compile = function (a, b) {
      var c, d = [], e = [], f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xb(e, d)), f.selector = a
      }
      return f
    }, i = fb.select = function (a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type])break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ib(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || jb("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ib(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || jb("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ib(function (a) {
      return null == a.getAttribute("disabled")
    }) || jb(L, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fb
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b))return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType)return n.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (w.test(b))return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c
    })
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function (a) {
      var b, c = this.length, d = [], e = this;
      if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
      }));
      for (b = 0; c > b; b++)n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    }, filter: function (a) {
      return this.pushStack(x(this, a || [], !1))
    }, not: function (a) {
      return this.pushStack(x(this, a || [], !0))
    }, is: function (a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
    }
  });
  var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
    var c, d;
    if (!a)return this;
    if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this
      }
      return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
  };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
  n.extend({
    dir: function (a, b, c) {
      var d = [], e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
        if (e && n(a).is(c))break;
        d.push(a)
      }
      return d
    }, sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), n.fn.extend({
    has: function (a) {
      var b = n(a, this), c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
      })
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);
        break
      }
      return this.pushStack(f.length > 1 ? n.unique(f) : f)
    }, index: function (a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }

  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    }, parents: function (a) {
      return n.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
      return n.dir(a, "parentNode", c)
    }, next: function (a) {
      return D(a, "nextSibling")
    }, prev: function (a) {
      return D(a, "previousSibling")
    }, nextAll: function (a) {
      return n.dir(a, "nextSibling")
    }, prevAll: function (a) {
      return n.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
      return n.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
      return n.dir(a, "previousSibling", c)
    }, siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
      return n.sibling(a.firstChild)
    }, contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes)
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var E = /\S+/g, F = {};

  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0
    }), b
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
        b = !1;
        break
      }
      d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
    }, k = {
      add: function () {
        if (h) {
          var c = h.length;
          !function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);
              "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
            })
          }(arguments), d ? f = h.length : b && (e = c, j(b))
        }
        return this
      }, remove: function () {
        return h && n.each(arguments, function (a, b) {
          var c;
          while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
        }), this
      }, has: function (a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
      }, empty: function () {
        return h = [], f = 0, this
      }, disable: function () {
        return h = i = b = void 0, this
      }, disabled: function () {
        return !h
      }, lock: function () {
        return i = void 0, b || k.disable(), this
      }, locked: function () {
        return !i
      }, fireWith: function (a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
      }, fire: function () {
        return k.fireWith(this, arguments), this
      }, fired: function () {
        return !!c
      }
    };
    return k
  }, n.extend({
    Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
        state: function () {
          return c
        }, always: function () {
          return e.done(arguments).fail(arguments), this
        }, then: function () {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
              })
            }), a = null
          }).promise()
        }, promise: function (a) {
          return null != a ? n.extend(a, d) : d
        }
      }, e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    }, when: function (a) {
      var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
        }
      }, i, j, k;
      if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0)
    }, ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
    }
  });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
  }

  n.ready.promise = function (b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
  }, n.ready.promise();
  var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0, i = a.length, j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c)n.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
        return j.call(n(a), c)
      })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  };
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };
  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    }), this.expando = n.expando + Math.random()
  }

  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function (a) {
      if (!K.accepts(a))return 0;
      var b = {}, c = a[this.expando];
      if (!c) {
        c = K.uid++;
        try {
          b[this.expando] = {value: c}, Object.defineProperties(a, b)
        } catch (d) {
          b[this.expando] = c, n.extend(a, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    }, set: function (a, b, c) {
      var d, e = this.key(a), f = this.cache[e];
      if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
      return f
    }, get: function (a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b]
    }, access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    }, remove: function (a, b) {
      var c, d, e, f = this.key(a), g = this.cache[f];
      if (void 0 === b)this.cache[f] = {}; else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
        while (c--)delete g[d[c]]
      }
    }, hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {})
    }, discard: function (a) {
      a[this.expando] && delete this.cache[a[this.expando]]
    }
  };
  var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
      } catch (e) {
      }
      M.set(a, b, c)
    } else c = void 0;
    return c
  }

  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a)
    }, data: function (a, b, c) {
      return M.access(a, b, c)
    }, removeData: function (a, b) {
      M.remove(a, b)
    }, _data: function (a, b, c) {
      return L.access(a, b, c)
    }, _removeData: function (a, b) {
      L.remove(a, b)
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          L.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        M.set(this, a)
      }) : J(this, function (b) {
        var c, d = n.camelCase(a);
        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c)return c;
          if (c = M.get(f, d), void 0 !== c)return c;
          if (c = P(f, d, void 0), void 0 !== c)return c
        } else this.each(function () {
          var c = M.get(this, d);
          M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    }, removeData: function (a) {
      return this.each(function () {
        M.remove(this, a)
      })
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function (a, b) {
      b = b || "fx";
      var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
        n.dequeue(a, b)
      };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return L.get(a, c) || L.access(a, c, {
          empty: n.Callbacks("once memory").add(function () {
            L.remove(a, [b + "queue", c])
          })
        })
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    }, dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a)
      })
    }, clearQueue: function (a) {
      return this.queue(a || "fx", [])
    }, promise: function (a, b) {
      var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
        --d || e.resolveWith(f, [f])
      };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
  }, T = /^(?:checkbox|radio)$/i;
  !function () {
    var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin"in a;
  var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
    return !0
  }

  function $() {
    return !1
  }

  function _() {
    try {
      return l.activeElement
    } catch (a) {
    }
  }

  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(E) || [""], j = b.length;
        while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
          while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
        } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
      }
    },
    trigger: function (b, c, d, e) {
      var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
        for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
        d.length && g.push({elem: i, handlers: d})
      }
      return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    fix: function (a) {
      if (a[n.expando])return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--)c = d[b], a[c] = f[c];
      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (a) {
          return n.nodeName(a.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b, bindType: b, handle: function (a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0)
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
      }, teardown: function () {
        var d = this.ownerDocument || this, e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
      }
    }
  }), n.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a)this.on(g, b, c, a[g], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
      return 1 === e && (f = d, d = function (a) {
        return n().off(a), f.apply(this, arguments)
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b)
      })
    }, one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1)
    }, off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a)this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b)
      })
    }, trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this)
      })
    }, triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
  function jb(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function kb(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function lb(a) {
    var b = gb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
  }

  function nb(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
      }
      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
    }
  }

  function ob(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }

  n.extend({
    clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
      if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
      return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
    }, buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
        while (j--)f = f.lastChild;
        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
      } else l.push(b.createTextNode(e));
      k.textContent = "", m = 0;
      while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
        j = 0;
        while (e = f[j++])fb.test(e.type || "") && c.push(e)
      }
      return k
    }, cleanData: function (a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e]
        }
        delete M.cache[c[M.expando]]
      }
    }
  }), n.fn.extend({
    text: function (a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);
          b.appendChild(a)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    }, remove: function (a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
      return this
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
      return this
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b)
      })
    }, html: function (a) {
      return J(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
        if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(ab, "<$1></$2>");
          try {
            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function (a) {
      return this.remove(a, !0)
    }, domManip: function (a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
        if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
      }
      return this
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var qb, rb = {};

  function sb(b, c) {
    var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return e.detach(), f
  }

  function tb(a) {
    var b = l, c = rb[a];
    return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
  }

  var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  };

  function xb(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function yb(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  !function () {
    var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
    if (f.style) {
      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
      function g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
      }

      a.getComputedStyle && n.extend(k, {
        pixelPosition: function () {
          return g(), b
        }, boxSizingReliable: function () {
          return null == c && g(), c
        }, reliableMarginRight: function () {
          var b, c = f.appendChild(l.createElement("div"));
          return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
        }
      })
    }
  }(), n.swap = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b)g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)a.style[f] = g[f];
    return e
  };
  var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

  function Fb(a, b) {
    if (b in a)return b;
    var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
    while (e--)if (b = Eb[e] + c, b in a)return b;
    return d
  }

  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Hb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g
  }

  function Ib(a, b, c) {
    var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xb(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": "cssFloat"},
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b), i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
          return Ib(a, b, d)
        }) : Ib(a, b, d) : void 0
      }, set: function (a, c, d) {
        var e = d && wb(a);
        return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
  }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
  }), n.fn.extend({
    css: function (a, b) {
      return J(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (n.isArray(b)) {
          for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    }, show: function () {
      return Jb(this, !0)
    }, hide: function () {
      return Jb(this)
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide()
      })
    }
  });
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e)
  }

  n.Tween = Kb, Kb.prototype = {
    constructor: Kb, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    }, cur: function () {
      var a = Kb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
    }, run: function (a) {
      var b, c = Kb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
    }
  }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      }, set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function (a) {
      return a
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, n.fx = Kb.prototype.init, n.fx.step = {};
  var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
    "*": [function (a, b) {
      var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
      if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;
        do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
      }
      return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]
  };

  function Sb() {
    return setTimeout(function () {
      Lb = void 0
    }), Lb = n.now()
  }

  function Tb(a, b) {
    var c, d = 0, e = {height: a};
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ub(a, b, c) {
    for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
  }

  function Vb(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
    }));
    for (d in b)if (e = b[d], Nb.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d])continue;
        p = !0
      }
      m[d] = q && q[d] || n.style(a, d)
    } else j = void 0;
    if (n.isEmptyObject(m))"inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
      q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide()
      }), l.done(function () {
        var b;
        L.remove(a, "fxshow");
        for (b in m)n.style(a, b, m[b])
      });
      for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function Wb(a, b) {
    var c, d, e, f, g;
    for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
      f = g.expand(f), delete a[d];
      for (c in f)c in a || (a[c] = f[c], b[c] = e)
    } else b[d] = e
  }

  function Xb(a, b, c) {
    var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
      delete i.elem
    }), i = function () {
      if (e)return !1;
      for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
    }, j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {specialEasing: {}}, c),
      originalProperties: b,
      originalOptions: c,
      startTime: Lb || Sb(),
      duration: c.duration,
      tweens: [],
      createTween: function (b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d
      },
      stop: function (b) {
        var c = 0, d = b ? j.tweens.length : 0;
        if (e)return this;
        for (e = !0; d > c; c++)j.tweens[c].run(1);
        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
      }
    }), k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
    return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  n.Animation = n.extend(Xb, {
    tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
    }, prefilter: function (a, b) {
      b ? Qb.unshift(a) : Qb.push(a)
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
    }, d
  }, n.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
        var b = Xb(this, n.extend({}, a), f);
        (e || L.get(this, "finish")) && b.stop(!0)
      };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && n.dequeue(this, a)
      })
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];
    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
    }
  }), n.each({
    slideDown: Tb("show"),
    slideUp: Tb("hide"),
    slideToggle: Tb("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), n.timers = [], n.fx.tick = function () {
    var a, b = 0, c = n.timers;
    for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    c.length || n.fx.stop(), Lb = void 0
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
  }, n.fx.interval = 13, n.fx.start = function () {
    Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
  }, n.fx.stop = function () {
    clearInterval(Mb), Mb = null
  }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);
      c.stop = function () {
        clearTimeout(d)
      }
    })
  }, function () {
    var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
    a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
  }();
  var Yb, Zb, $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
    }, removeAttr: function (a, b) {
      var c, d, e = 0, f = b && b.match(E);
      if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }, attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), Zb = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $b[b] || n.find.attr;
    $b[b] = function (a, b, d) {
      var e, f;
      return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
    }
  });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a]
      })
    }
  }), n.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks: {
      tabIndex: {
        get: function (a) {
          return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this
  });
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
      if (n.isFunction(a))return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className))
      });
      if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
        f = 0;
        while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
        g = n.trim(d), c.className !== g && (c.className = g)
      }
      return this
    }, removeClass: function (a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
      if (n.isFunction(a))return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className))
      });
      if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
        f = 0;
        while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
      }
      return this
    }, toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function () {
        if ("string" === c) {
          var b, d = 0, e = n(this), f = a.match(E) || [];
          while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
      })
    }, hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return !0;
      return !1
    }
  });
  var bc = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a))
        }
      }, select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
            if (b = n(c).val(), f)return b;
            g.push(b)
          }
          return g
        }, set: function (a, b) {
          var c, d, e = a.options, f = n.makeArray(b), g = e.length;
          while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function (a, b) {
      return this.off(a, null, b)
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var cc = n.now(), dc = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "")
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || "string" != typeof a)return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml")
    } catch (d) {
      b = void 0
    }
    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
  };
  var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
  try {
    fc = location.href
  } catch (qc) {
    fc = l.createElement("a"), fc.href = "", fc = fc.href
  }
  ec = mc.exec(fc.toLowerCase()) || [];
  function rc(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0, f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function sc(a, b, c, d) {
    var e = {}, f = a === oc;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function tc(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function uc(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)for (e in h)if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break
    }
    if (i[0]in c)f = i[0]; else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function vc(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break
      }
      if (g !== !0)if (g && a["throws"])b = g(b); else try {
        b = g(b)
      } catch (l) {
        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
      }
    }
    return {state: "success", data: b}
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: fc,
      type: "GET",
      isLocal: jc.test(ec[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": pc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (a, b) {
      return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
    },
    ajaxPrefilter: rc(nc),
    ajaxTransport: rc(oc),
    ajax: function (a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
        readyState: 0,
        getResponseHeader: function (a) {
          var b;
          if (2 === t) {
            if (!f) {
              f = {};
              while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
            }
            b = f[a.toLowerCase()]
          }
          return null == b ? null : b
        },
        getAllResponseHeaders: function () {
          return 2 === t ? e : null
        },
        setRequestHeader: function (a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this
        },
        overrideMimeType: function (a) {
          return t || (k.mimeType = a), this
        },
        statusCode: function (a) {
          var b;
          if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
          return this
        },
        abort: function (a) {
          var b = a || u;
          return c && c.abort(b), x(0, b), this
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
      i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
      for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
      u = "abort";
      for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
      if (c = sc(oc, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, c.send(r, x)
        } catch (w) {
          if (!(2 > t))throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
      }

      return v
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), n._evalUrl = function (a) {
    return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  }, n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild)a = a.firstElementChild;
        return a
      }).append(this)), this)
    }, wrapInner: function (a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b))
      } : function () {
        var b = n(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a)
  };
  var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

  function Bc(a, b, c, d) {
    var e;
    if (n.isArray(b))n.each(b, function (b, e) {
      c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
  }

  n.param = function (a, b) {
    var c, d = [], e = function (a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
    };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
      e(this.name, this.value)
    }); else for (c in a)Bc(c, a[c], b, e);
    return d.join("&").replace(wc, "+")
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {name: b.name, value: a.replace(yc, "\r\n")}
        }) : {name: b.name, value: c.replace(yc, "\r\n")}
      }).get()
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (a) {
    }
  };
  var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function () {
    for (var a in Dc)Dc[a]()
  }), k.cors = !!Fc && "withCredentials"in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
    var b;
    return k.cors || Fc && !a.crossDomain ? {
      send: function (c, d) {
        var e, f = a.xhr(), g = ++Cc;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c)f.setRequestHeader(e, c[e]);
        b = function (a) {
          return function () {
            b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
          }
        }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null)
        } catch (h) {
          if (b)throw h
        }
      }, abort: function () {
        b && b()
      }
    } : void 0
  }), n.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (d, e) {
          b = n("<script>").prop({async: !0, charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), l.head.appendChild(b[0])
        }, abort: function () {
          c && c()
        }
      }
    }
  });
  var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var a = Gc.pop() || n.expando + "_" + cc++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a)return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a), e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
  };
  var Ic = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a])
    }), this
  }, n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem
    }).length
  };
  var Jc = a.document.documentElement;

  function Kc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }

  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length)return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
      if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    }, position: function () {
      if (this[0]) {
        var a, b, c = this[0], d = {top: 0, left: 0};
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || Jc;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
        return a || Jc
      })
    }
  }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
    var d = "pageYOffset" === c;
    n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Kc(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
      }, b, e, arguments.length, null)
    }
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
      return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({Height: "height", Width: "width"}, function (a, b) {
    n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.size = function () {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n
  });
  var Lc = a.jQuery, Mc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
  }, typeof b === U && (a.jQuery = a.$ = n), n
});
;
/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function ($) {
  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    var cfg = {interval: 100, sensitivity: 6, timeout: 0};
    if (typeof handlerIn === "object") {
      cfg = $.extend(cfg, handlerIn)
    } else {
      if ($.isFunction(handlerOut)) {
        cfg = $.extend(cfg, {over: handlerIn, out: handlerOut, selector: selector})
      } else {
        cfg = $.extend(cfg, {over: handlerIn, out: handlerIn, selector: handlerOut})
      }
    }
    var cX, cY, pX, pY;
    var track = function (ev) {
      cX = ev.pageX;
      cY = ev.pageY
    };
    var compare = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      if (Math.sqrt((pX - cX) * (pX - cX) + (pY - cY) * (pY - cY)) < cfg.sensitivity) {
        $(ob).off("mousemove.hoverIntent", track);
        ob.hoverIntent_s = true;
        return cfg.over.apply(ob, [ev])
      } else {
        pX = cX;
        pY = cY;
        ob.hoverIntent_t = setTimeout(function () {
          compare(ev, ob)
        }, cfg.interval)
      }
    };
    var delay = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = false;
      return cfg.out.apply(ob, [ev])
    };
    var handleHover = function (e) {
      var ev = $.extend({}, e);
      var ob = this;
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
      }
      if (e.type === "mouseenter") {
        pX = ev.pageX;
        pY = ev.pageY;
        $(ob).on("mousemove.hoverIntent", track);
        if (!ob.hoverIntent_s) {
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob)
          }, cfg.interval)
        }
      } else {
        $(ob).off("mousemove.hoverIntent", track);
        if (ob.hoverIntent_s) {
          ob.hoverIntent_t = setTimeout(function () {
            delay(ev, ob)
          }, cfg.timeout)
        }
      }
    };
    return this.on({"mouseenter.hoverIntent": handleHover, "mouseleave.hoverIntent": handleHover}, cfg.selector)
  }
})(jQuery);
;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;

  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  var nonSpaceRe = /\S/;

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
      return Object_toString.call(object) === '[object Array]';
    };

  function isFunction(object) {
    return typeof object === 'function';
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function escapeTags(tags) {
    if (!isArray(tags) || tags.length !== 2) {
      throw new Error('Invalid tags: ' + tags);
    }

    return [
      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRegExp(tags[1]))
    ];
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    tags = tags || mustache.tags;
    template = template || '';

    if (typeof tags === 'string') {
      tags = tags.split(spaceRe);
    }

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(tagRes[0]);
      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) break;
      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === '{') {
        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = '&';
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error('Unclosed tag at ' + scanner.pos);
      }

      token = [type, value, start, scanner.pos];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection) {
          throw new Error('Unopened section "' + value + '" at ' + start);
        }
        if (openSection[1] !== value) {
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
        }
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        tagRes = escapeTags(tags = value.split(spaceRe));
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection) {
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    }

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      var string = match[0];
      this.tail = this.tail.substring(string.length);
      this.pos += string.length;
      return string;
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = "";
        break;
      case 0:
        match = "";
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = {'.': this.view};
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var value;
    if (name in this.cache) {
      value = this.cache[name];
    } else {
      var context = this;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;

          var names = name.split('.'), i = 0;
          while (value != null && i < names.length) {
            value = value[names[i++]];
          }
        } else {
          value = context.view[name];
        }

        if (value != null) break;

        context = context.parent;
      }

      this.cache[name] = value;
    }

    if (isFunction(value)) {
      value = value.call(this.view);
    }

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null) {
      tokens = cache[template] = parseTemplate(template, tags);
    }

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;

    function subRender(template) {
      return self.render(template, context, partials);
    }

    var token, value;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
          value = context.lookup(token[1]);
          if (!value) continue;

          if (isArray(value)) {
            for (var j = 0, jlen = value.length; j < jlen; ++j) {
              buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
            }
          } else if (typeof value === 'object' || typeof value === 'string') {
            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
          } else if (isFunction(value)) {
            if (typeof originalTemplate !== 'string') {
              throw new Error('Cannot use higher-order sections without the original template');
            }

            // Extract the portion of the original template that the section contains.
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

            if (value != null) buffer += value;
          } else {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate);
          }

          break;
        case '^':
          value = context.lookup(token[1]);

          // Use JavaScript's definition of falsy. Include empty arrays.
          // See https://github.com/janl/mustache.js/issues/186
          if (!value || (isArray(value) && value.length === 0)) {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate);
          }

          break;
        case '>':
          if (!partials) continue;
          value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
          if (value != null) buffer += this.renderTokens(this.parse(value), context, partials, value);
          break;
        case '&':
          value = context.lookup(token[1]);
          if (value != null) buffer += value;
          break;
        case 'name':
          value = context.lookup(token[1]);
          if (value != null) buffer += mustache.escape(value);
          break;
        case 'text':
          buffer += token[1];
          break;
      }
    }

    return buffer;
  };

  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = ["{{", "}}"];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
;
!function (a, b) {
  function c(a, b) {
    var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
  }

  function d() {
    var a = t.elements;
    return "string" == typeof a ? a.split(" ") : a
  }

  function e(a, b) {
    var c = t.elements;
    "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b)
  }

  function f(a) {
    var b = s[a[q]];
    return b || (b = {}, r++, a[q] = r, s[r] = b), b
  }

  function g(a, c, d) {
    if (c || (c = b), l)return c.createElement(a);
    d || (d = f(c));
    var e;
    return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
  }

  function h(a, c) {
    if (a || (a = b), l)return a.createDocumentFragment();
    c = c || f(a);
    for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)e.createElement(h[g]);
    return e
  }

  function i(a, b) {
    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
      return t.shivMethods ? g(c, a, b) : b.createElem(c)
    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) {
      return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
    }) + ");return n}")(t, b.frag)
  }

  function j(a) {
    a || (a = b);
    var d = f(a);
    return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a
  }

  var k, l, m = "3.7.2", n = a.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, q = "_html5shiv", r = 0, s = {};
  !function () {
    try {
      var a = b.createElement("a");
      a.innerHTML = "<xyz></xyz>", k = "hidden"in a, l = 1 == a.childNodes.length || function () {
        b.createElement("a");
        var a = b.createDocumentFragment();
        return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
      }()
    } catch (c) {
      k = !0, l = !0
    }
  }();
  var t = {
    elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
    version: m,
    shivCSS: n.shivCSS !== !1,
    supportsUnknownElements: l,
    shivMethods: n.shivMethods !== !1,
    type: "default",
    shivDocument: j,
    createElement: g,
    createDocumentFragment: h,
    addElements: e
  };
  a.html5 = t, j(b)
}(this, document);
;
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function (a) {
  "use strict";
  a.matchMedia = a.matchMedia || function (a) {
    var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
    return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f), function (a) {
      return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
        matches: b,
        media: a
      }
    }
  }(a.document)
}(this), function (a) {
  "use strict";
  function b() {
    u(!0)
  }

  var c = {};
  a.respond = c, c.update = function () {
  };
  var d = [], e = function () {
    var b = !1;
    try {
      b = new a.XMLHttpRequest
    } catch (c) {
      b = new a.ActiveXObject("Microsoft.XMLHTTP")
    }
    return function () {
      return b
    }
  }(), f = function (a, b) {
    var c = e();
    c && (c.open("GET", a, !0), c.onreadystatechange = function () {
      4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
    }, 4 !== c.readyState && c.send(null))
  };
  if (c.ajax = f, c.queue = d, c.regex = {
      media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
      keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
      urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
      findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
      only: /(only\s+)?([a-zA-Z]+)\s?/,
      minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
      maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
    }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
    var g, h, i, j = a.document, k = j.documentElement, l = [], m = [], n = [], o = {}, p = 30, q = j.getElementsByTagName("head")[0] || k, r = j.getElementsByTagName("base")[0], s = q.getElementsByTagName("link"), t = function () {
      var a, b = j.createElement("div"), c = j.body, d = k.style.fontSize, e = c && c.style.fontSize, f = !1;
      return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = j.createElement("body"), c.style.background = "none"), k.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && k.insertBefore(c, k.firstChild), a = b.offsetWidth, f ? k.removeChild(c) : c.removeChild(b), k.style.fontSize = d, e && (c.style.fontSize = e), a = i = parseFloat(a)
    }, u = function (b) {
      var c = "clientWidth", d = k[c], e = "CSS1Compat" === j.compatMode && d || j.body[c] || d, f = {}, o = s[s.length - 1], r = (new Date).getTime();
      if (b && g && p > r - g)return a.clearTimeout(h), h = a.setTimeout(u, p), void 0;
      g = r;
      for (var v in l)if (l.hasOwnProperty(v)) {
        var w = l[v], x = w.minw, y = w.maxw, z = null === x, A = null === y, B = "em";
        x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? i || t() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? i || t() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(m[w.rules]))
      }
      for (var C in n)n.hasOwnProperty(C) && n[C] && n[C].parentNode === q && q.removeChild(n[C]);
      n.length = 0;
      for (var D in f)if (f.hasOwnProperty(D)) {
        var E = j.createElement("style"), F = f[D].join("\n");
        E.type = "text/css", E.media = D, q.insertBefore(E, o.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(j.createTextNode(F)), n.push(E)
      }
    }, v = function (a, b, d) {
      var e = a.replace(c.regex.keyframes, "").match(c.regex.media), f = e && e.length || 0;
      b = b.substring(0, b.lastIndexOf("/"));
      var g = function (a) {
        return a.replace(c.regex.urls, "$1" + b + "$2$3")
      }, h = !f && d;
      b.length && (b += "/"), h && (f = 1);
      for (var i = 0; f > i; i++) {
        var j, k, n, o;
        h ? (j = d, m.push(g(a))) : (j = e[i].match(c.regex.findStyles) && RegExp.$1, m.push(RegExp.$2 && g(RegExp.$2))), n = j.split(","), o = n.length;
        for (var p = 0; o > p; p++)k = n[p], l.push({
          media: k.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
          rules: m.length - 1,
          hasquery: k.indexOf("(") > -1,
          minw: k.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
          maxw: k.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
        })
      }
      u()
    }, w = function () {
      if (d.length) {
        var b = d.shift();
        f(b.href, function (c) {
          v(c, b.href, b.media), o[b.href] = !0, a.setTimeout(function () {
            w()
          }, 0)
        })
      }
    }, x = function () {
      for (var b = 0; b < s.length; b++) {
        var c = s[b], e = c.href, f = c.media, g = c.rel && "stylesheet" === c.rel.toLowerCase();
        e && g && !o[e] && (c.styleSheet && c.styleSheet.rawCssText ? (v(c.styleSheet.rawCssText, e, f), o[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !r || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({
          href: e,
          media: f
        })))
      }
      w()
    };
    x(), c.update = x, c.getEmValue = t, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
  }
}(this);
;
;
window.Modernizr = function (a, b, c) {
  function x(a) {
    j.cssText = a
  }

  function y(a, b) {
    return x(prefixes.join(a + ";") + (b || ""))
  }

  function z(a, b) {
    return typeof a === b
  }

  function A(a, b) {
    return !!~("" + a).indexOf(b)
  }

  function B(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!A(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
    }
    return !1
  }

  function C(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
    }
    return !1
  }

  function D(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + n.join(d + " ") + d).split(" ");
    return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
  }

  var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = "Webkit Moz O ms", n = m.split(" "), o = m.toLowerCase().split(" "), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w;
  !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
    return v.call(a, b)
  } : w = function (a, b) {
    return b in a && z(a.constructor.prototype[b], "undefined")
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;
    if (typeof c != "function")throw new TypeError;
    var d = t.call(arguments, 1), e = function () {
      if (this instanceof e) {
        var a = function () {
        };
        a.prototype = c.prototype;
        var f = new a, g = c.apply(f, d.concat(t.call(arguments)));
        return Object(g) === g ? g : f
      }
      return c.apply(b, d.concat(t.call(arguments)))
    };
    return e
  }), p.cssanimations = function () {
    return D("animationName")
  };
  for (var E in p)w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
  return e.addTest = function (a, b) {
    if (typeof a == "object")for (var d in a)w(a, d) && e.addTest(d, a[d]); else {
      a = a.toLowerCase();
      if (e[a] !== c)return e;
      b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
    }
    return e
  }, x(""), i = k = null, function (a, b) {
    function l(a, b) {
      var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function m() {
      var a = s.elements;
      return typeof a == "string" ? a.split(" ") : a
    }

    function n(a) {
      var b = j[a[h]];
      return b || (b = {}, i++, a[h] = i, j[i] = b), b
    }

    function o(a, c, d) {
      c || (c = b);
      if (k)return c.createElement(a);
      d || (d = n(c));
      var g;
      return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
    }

    function p(a, c) {
      a || (a = b);
      if (k)return a.createDocumentFragment();
      c = c || n(a);
      var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
      for (; e < g; e++)d.createElement(f[e]);
      return d
    }

    function q(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return s.shivMethods ? o(c, a, b) : b.createElem(c)
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
      }) + ");return n}")(s, b.frag)
    }

    function r(a) {
      a || (a = b);
      var c = n(a);
      return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
    }

    var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
    (function () {
      try {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function () {
          b.createElement("a");
          var a = b.createDocumentFragment();
          return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
        }()
      } catch (c) {
        g = !0, k = !0
      }
    })();
    var s = {
      elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: c,
      shivCSS: d.shivCSS !== !1,
      supportsUnknownElements: k,
      shivMethods: d.shivMethods !== !1,
      type: "default",
      shivDocument: r,
      createElement: o,
      createDocumentFragment: p
    };
    a.html5 = s, r(b)
  }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
    return B([a])
  }, e.testAllProps = D, e.prefixed = function (a, b, c) {
    return b ? D(a, b, c) : D(a, "pfx")
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
  function d(a) {
    return "[object Function]" == o.call(a)
  }

  function e(a) {
    return "string" == typeof a
  }

  function f() {
  }

  function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a
  }

  function h() {
    var a = p.shift();
    q = 1, a ? a.t ? m(function () {
      ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
    }, 0) : (a(), h()) : q = 0
  }

  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && m(function () {
          t.removeChild(l)
        }, 50);
        for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
      }
    }

    var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
    1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r)
    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
  }

  function j(a, b, c, d, f) {
    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
  }

  function k() {
    var a = B;
    return a.loader = {load: j, i: 0}, a
  }

  var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
      return "[object Array]" == o.call(a)
    }, x = [], y = {}, z = {
    timeout: function (a, b) {
      return b.length && (a.timeout = b[0]), a
    }
  }, A, B;
  B = function (a) {
    function b(a) {
      var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f, g;
      for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
      for (f = 0; f < b; f++)c = x[f](c);
      return c
    }

    function g(a, e, f, g, h) {
      var i = b(a), j = i.autoCallback;
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
      })))
    }

    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a))c || (j = function () {
            var a = [].slice.call(arguments);
            k.apply(this, a), l()
          }), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
            var b = 0, c;
            for (c in a)a.hasOwnProperty(c) && b++;
            return b
          }(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
            var a = [].slice.call(arguments);
            k.apply(this, a), l()
          } : j[n] = function (a) {
            return function () {
              var b = [].slice.call(arguments);
              a && a.apply(this, b), l()
            }
          }(k[n])), g(a[n], j, b, n, h))
        } else!c && l()
      }

      var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
      c(h ? a.yep : a.nope, !!i), i && c(i)
    }

    var i, j, l = this.yepnope.loader;
    if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
  }, B.addPrefix = function (a, b) {
    z[a] = b
  }, B.addFilter = function (a) {
    x.push(a)
  }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
    b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
    k.src = a;
    for (o in d)k.setAttribute(o, d[o]);
    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
    }, m(function () {
      l || (l = 1, c(1))
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement("link"), j, c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";
    for (j in d)e.setAttribute(j, d[j]);
    g || (n.parentNode.insertBefore(e, n), m(c, 0))
  }
}(this, document), Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0))
};
;
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"), b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
    return !1
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1, d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0
    });
    var e = function () {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function (b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this), e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }

  var c = '[data-dismiss="alert"]', d = function (b) {
    a(b).on("click", c, this.close)
  };
  d.VERSION = "3.2.0", d.prototype.close = function (b) {
    function c() {
      f.detach().trigger("closed.bs.alert").remove()
    }

    var d = a(this), e = d.attr("data-target");
    e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }

  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.2.0", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
    var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function () {
      "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
    }, this), 0)
  }, c.prototype.toggle = function () {
    var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
    }
    a && this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }

  var c = function (b, c) {
    this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.2.0", c.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0}, c.prototype.keydown = function (a) {
    switch (a.which) {
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        return
    }
    a.preventDefault()
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.to = function (b) {
    var c = this, d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      c.to(b)
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function (b, c) {
    var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
    if (!e.length) {
      if (!this.options.wrap)return;
      e = this.$element.find(".item")[h]()
    }
    if (e.hasClass("active"))return this.sliding = !1;
    var j = e[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: g});
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(e)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: g});
      return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function () {
        e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this
  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (c) {
    var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  }), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
      !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }

  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
  };
  c.VERSION = "3.2.0", c.DEFAULTS = {toggle: !0}, c.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, c.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var c = a.Event("show.bs.collapse");
      if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        var d = this.$parent && this.$parent.find("> .panel > .in");
        if (d && d.length) {
          var e = d.data("bs.collapse");
          if (e && e.transitioning)return;
          b.call(d, "hide"), e || d.data("bs.collapse", null)
        }
        var f = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
        var g = function () {
          this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        };
        if (!a.support.transition)return g.call(this);
        var h = a.camelCase(["scroll", f].join("-"));
        this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
      }
    }
  }, c.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
        var d = function () {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
      }
    }
  }, c.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  };
  var d = a.fn.collapse;
  a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = d, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (c) {
    var d, e = a(this), f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), g = a(f), h = g.data("bs.collapse"), i = h ? "toggle" : e.data(), j = e.attr("data-parent"), k = j && a(j);
    h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    b && 3 === b.which || (a(e).remove(), a(f).each(function () {
      var d = c(a(this)), e = {relatedTarget: this};
      d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
    }))
  }

  function c(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function d(b) {
    return this.each(function () {
      var c = a(this), d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }

  var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
    a(b).on("click.bs.dropdown", this.toggle)
  };
  g.VERSION = "3.2.0", g.prototype.toggle = function (d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = c(e), g = f.hasClass("open");
      if (b(), !g) {
        "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
        var h = {relatedTarget: this};
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
        e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
      }
      return !1
    }
  }, g.prototype.keydown = function (b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);
      if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = c(d), g = e.hasClass("open");
        if (!g || g && 27 == b.keyCode)return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
        if (i.length) {
          var j = i.index(i.filter(":focus"));
          38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }

  var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.2.0", c.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function (b) {
    var c = this, d = a.Event("show.bs.modal", {relatedTarget: b});
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var d = a.support.transition && c.$element.hasClass("fade");
      c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
      var e = a.Event("shown.bs.modal", {relatedTarget: b});
      d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        c.$element.trigger("focus").trigger(e)
      }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
    }))
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function (b) {
    var c = this, d = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var e = a.support.transition && d;
      if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
          a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
        }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
      e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var f = function () {
        c.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
    } else b && b()
  }, c.prototype.checkScrollbar = function () {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "")
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
      (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }

  var c = function (a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.2.0", c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {selector: "body", padding: 0}
  }, c.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g)this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function () {
    var b = {}, c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show()
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide()
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var c = a.contains(document.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !c)return;
      var d = this, e = this.tip(), f = this.getUID(this.type);
      this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
      var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, h = /\s?auto?\s?/i, i = h.test(g);
      i && (g = g.replace(h, "") || "top"), e.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
      var j = this.getPosition(), k = e[0].offsetWidth, l = e[0].offsetHeight;
      if (i) {
        var m = g, n = this.$element.parent(), o = this.getPosition(n);
        g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
      }
      var p = this.getCalculatedOffset(g, j, k, l);
      this.applyPlacement(p, g);
      var q = function () {
        d.$element.trigger("shown.bs." + d.type), d.hoverState = null
      };
      a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
      using: function (a) {
        d.css({top: Math.round(a.top), left: Math.round(a.left)})
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth, j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j, m = k.left ? "left" : "top", n = k.left ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(l, d[0][n], m)
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
  }, c.prototype.setContent = function () {
    var a = this.tip(), b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function () {
    function b() {
      "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
    }

    var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
    return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function () {
    return this.getTitle()
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0], d = "BODY" == c.tagName;
    return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
      width: d ? a(window).width() : b.outerWidth(),
      height: d ? a(window).height() : b.outerHeight()
    }, d ? {top: 0, left: 0} : b.offset())
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {top: b.top + b.height, left: b.left + b.width / 2 - c / 2} : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {top: 0, left: 0};
    if (!this.$viewport)return e;
    var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f, k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function () {
    var a, b = this.$element, c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function (a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template)
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  }, c.prototype.enable = function () {
    this.enabled = !0
  }, c.prototype.disable = function () {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this
  }
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
      (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }

  var c = function (a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS
  }, c.prototype.setContent = function () {
    var a = this.tip(), b = this.getTitle(), c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function () {
    var a = this.$element, b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }, c.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this
  }
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    var e = a.proxy(this.process, this);
    this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }

  b.VERSION = "3.2.0", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function () {
    var b = "offset", c = 0;
    a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var d = this;
    this.$body.find(this.selector).map(function () {
      var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
    }).sort(function (a, b) {
      return a[0] - b[0]
    }).each(function () {
      d.offsets.push(this[0]), d.targets.push(this[1])
    })
  }, b.prototype.process = function () {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b <= e[0])return g != (a = f[0]) && this.activate(a);
    for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }

  var c = function (b) {
    this.element = a(b)
  };
  c.VERSION = "3.2.0", c.prototype.show = function () {
    var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {relatedTarget: e});
      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.closest("li"), c), this.activate(g, g.parent(), function () {
          b.trigger({type: "shown.bs.tab", relatedTarget: e})
        })
      }
    }
  }, c.prototype.activate = function (b, c, d) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
    }

    var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
    g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (c) {
    c.preventDefault(), b.call(a(this), "show")
  })
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }

  var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset)return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(), b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = a(document).height(), d = this.$target.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
      "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
      var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
      if (this.affixed !== i) {
        null != this.unpin && this.$element.css("top", "");
        var j = "affix" + (i ? "-" + i : ""), k = a.Event(j + ".bs.affix");
        this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({top: b - this.$element.height() - h}))
      }
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this), d = c.data();
      d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery);


/*! Backstretch - v2.0.4 - 2013-06-19
 * http://srobbin.com/jquery-plugins/backstretch/
 * Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function ($, window, p) {
  $.fn.backstretch = function (imagesArg, b) {
    (imagesArg === p || 0 === imagesArg.length) && $.error("No images were supplied for Backstretch");
    0 === $(window).scrollTop() && window.scrollTo(0, 0);
    return this.each(function () {
      var $this = $(this), g = $this.data("backstretch");
      if (g) {
        if ("string" == typeof imagesArg && "function" == typeof g[imagesArg]) {
          g[imagesArg](b);
          return
        }
        b = $.extend(g.options, b);
        g.destroy(!0)
      }
      g = new q(this, imagesArg, b);
      $this.data("backstretch", g)
    })
  };
  $.backstretch = function (c, b) {
    return $("body").backstretch(c, b).data("backstretch")
  };
  $.expr[":"].backstretch = function (c) {
    return $(c).data("backstretch") !== p
  };
  $.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5E3, fade: 0};
  var r = {
    left: 0,
    top: 0,
    overflow: "hidden",
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    zIndex: -999999
  }, s = {
    position: "absolute",
    display: "none",
    margin: 0,
    padding: 0,
    border: "none",
    width: "auto",
    height: "auto",
    maxHeight: "none",
    maxWidth: "none",
    zIndex: -999999
  }, q = function (c, b, e) {
    this.options = $.extend({}, $.fn.backstretch.defaults, e || {});
    this.images = $.isArray(b) ? b : [b];
    $.each(this.images, function () {
      $("<img />")[0].src = this
    });
    this.isBody = c === document.body;
    this.$container = $(c);
    this.$root = this.isBody ? l ? $(window) : $(document) : this.$container;
    c = this.$container.children(".backstretch").first();
    this.$wrap = c.length ? c : $('<div class="backstretch"></div>').css(r).appendTo(this.$container);
    this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
      position: "static" === c ? "relative" : c,
      zIndex: "auto" === b ? 0 : b,
      background: "none"
    }), this.$wrap.css({zIndex: -999998}));
    this.$wrap.css({position: this.isBody && l ? "fixed" : "absolute"});
    this.index = 0;
    this.show(this.index);
    $(window).on("resize.backstretch", $.proxy(this.resize, this)).on("orientationchange.backstretch", $.proxy(function () {
      this.isBody && 0 === window.pageYOffset && (window.scrollTo(0, 1), this.resize())
    }, this))
  };
  q.prototype = {
    resize: function () {
      try {
        var a = {
          left: 0,
          top: 0
        }, b = this.isBody ? this.$root.width() : this.$root.innerWidth(), e = b, g = this.isBody ? window.innerHeight ? window.innerHeight : this.$root.height() : this.$root.innerHeight(), j = e / this.$img.data("ratio"), f;
        j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px"));
        this.$wrap.css({width: b, height: g}).find("img:not(.deleteable)").css({width: e, height: j}).css(a)
      } catch (h) {
      }
      return this
    }, show: function (c) {
      if (!(Math.abs(c) > this.images.length - 1)) {
        var b = this, e = b.$wrap.find("img").addClass("deleteable"), d = {relatedTarget: b.$container[0]};
        b.$container.trigger($.Event("backstretch.before", d), [b, c]);
        this.index = c;
        clearInterval(b.interval);
        b.$img = $("<img />").css(s).bind("load", function (f) {
          var h = this.width || $(f.target).width();
          f = this.height || $(f.target).height();
          $(this).data("ratio", h / f);
          $(this).fadeIn(b.options.speed || b.options.fade, function () {
            e.remove();
            b.paused || b.cycle();
            $(["after", "show"]).each(function () {
              b.$container.trigger($.Event("backstretch." + this, d), [b, c])
            })
          });
          b.resize()
        }).appendTo(b.$wrap);
        b.$img.attr("src", b.images[c]);
        return b
      }
    }, next: function () {
      return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
    }, prev: function () {
      return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
    }, pause: function () {
      this.paused = !0;
      return this
    }, resume: function () {
      this.paused = !1;
      this.next();
      return this
    }, cycle: function () {
      1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval($.proxy(function () {
        this.paused || this.next()
      }, this), this.options.duration));
      return this
    }, destroy: function (c) {
      $(window).off("resize.backstretch orientationchange.backstretch");
      clearInterval(this.interval);
      c || this.$wrap.remove();
      this.$container.removeData("backstretch")
    }
  };
  var l, f = navigator.userAgent, m = navigator.platform, e = f.match(/AppleWebKit\/([0-9]+)/), e = !!e && e[1], h = f.match(/Fennec\/([0-9]+)/), h = !!h && h[1], n = f.match(/Opera Mobi\/([0-9]+)/), t = !!n && n[1], k = f.match(/MSIE ([0-9]+)/), k = !!k && k[1];
  l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || window.operamini && "[object OperaMini]" === {}.toString.call(window.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource"in window && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k)
})(jQuery, window);


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

(function (e) {
  "use strict";
  function t(e) {
    return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
  }

  function s(e, t) {
    var s = n(e, t) ? i : r;
    s(e, t)
  }

  var n, r, i;
  if ("classList"in document.documentElement) {
    n = function (e, t) {
      return e.classList.contains(t)
    };
    r = function (e, t) {
      e.classList.add(t)
    };
    i = function (e, t) {
      e.classList.remove(t)
    }
  } else {
    n = function (e, n) {
      return t(n).test(e.className)
    };
    r = function (e, t) {
      if (!n(e, t)) {
        e.className = e.className + " " + t
      }
    };
    i = function (e, n) {
      e.className = e.className.replace(t(n), " ")
    }
  }
  var o = {hasClass: n, addClass: r, removeClass: i, toggleClass: s, has: n, add: r, remove: i, toggle: s};
  if (typeof define === "function" && define.amd) {
    define(o)
  } else {
    e.classie = o
  }
})(window);


/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
  function e() {
  }

  function t(e, t) {
    for (var n = e.length; n--;)if (e[n].listener === t)return n;
    return -1
  }

  function n(e) {
    return function () {
      return this[e].apply(this, arguments)
    }
  }

  var i = e.prototype, r = this, o = r.EventEmitter;
  i.getListeners = function (e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i)i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function (e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function (e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function (e, n) {
    var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
    for (i in r)r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {listener: n, once: !1});
    return this
  }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
    return this.addListener(e, {listener: t, once: !0})
  }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
    return this.getListeners(e), this
  }, i.defineEvents = function (e) {
    for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
    return this
  }, i.removeListener = function (e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o)o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function (e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function (e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function (e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)for (i = n.length; i--;)o.call(this, t, n[i]); else for (i in t)t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, i.removeEvent = function (e) {
    var t, n = typeof e, i = this._getEvents();
    if ("string" === n)delete i[e]; else if ("object" === n)for (t in i)i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)if (s.hasOwnProperty(r))for (i = s[r].length; i--;)n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function (e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function () {
    return this._events || (this._events = {})
  }, e.noConflict = function () {
    return r.EventEmitter = o, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
  function t(t) {
    var n = e.event;
    return n.target = n.target || n.srcElement || t, n
  }

  var n = document.documentElement, i = function () {
  };
  n.addEventListener ? i = function (e, t, n) {
    e.addEventListener(t, n, !1)
  } : n.attachEvent && (i = function (e, n, i) {
    e[n + i] = i.handleEvent ? function () {
      var n = t(e);
      i.handleEvent.call(i, n)
    } : function () {
      var n = t(e);
      i.call(e, n)
    }, e.attachEvent("on" + n, e[n + i])
  });
  var r = function () {
  };
  n.removeEventListener ? r = function (e, t, n) {
    e.removeEventListener(t, n, !1)
  } : n.detachEvent && (r = function (e, t, n) {
    e.detachEvent("on" + t, e[t + n]);
    try {
      delete e[t + n]
    } catch (i) {
      e[t + n] = void 0
    }
  });
  var o = {bind: i, unbind: r};
  "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function (e, t) {
  "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
    return t(e, n, i)
  }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
  function i(e, t) {
    for (var n in t)e[n] = t[n];
    return e
  }

  function r(e) {
    return "[object Array]" === d.call(e)
  }

  function o(e) {
    var t = [];
    if (r(e))t = e; else if ("number" == typeof e.length)for (var n = 0, i = e.length; i > n; n++)t.push(e[n]); else t.push(e);
    return t
  }

  function s(e, t, n) {
    if (!(this instanceof s))return new s(e, t);
    "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
    var r = this;
    setTimeout(function () {
      r.check()
    })
  }

  function f(e) {
    this.img = e
  }

  function c(e) {
    this.src = e, v[e] = this
  }

  var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString;
  s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [];
    for (var e = 0, t = this.elements.length; t > e; e++) {
      var n = this.elements[e];
      "IMG" === n.nodeName && this.addImage(n);
      var i = n.nodeType;
      if (i && (1 === i || 9 === i || 11 === i))for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
        var f = r[o];
        this.addImage(f)
      }
    }
  }, s.prototype.addImage = function (e) {
    var t = new f(e);
    this.images.push(t)
  }, s.prototype.check = function () {
    function e(e, r) {
      return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
    }

    var t = this, n = 0, i = this.images.length;
    if (this.hasAnyBroken = !1, !i)return this.complete(), void 0;
    for (var r = 0; i > r; r++) {
      var o = this.images[r];
      o.on("confirm", e), o.check()
    }
  }, s.prototype.progress = function (e) {
    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
    var t = this;
    setTimeout(function () {
      t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
    })
  }, s.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = !0;
    var t = this;
    setTimeout(function () {
      if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
        var n = t.hasAnyBroken ? "reject" : "resolve";
        t.jqDeferred[n](t)
      }
    })
  }, a && (a.fn.imagesLoaded = function (e, t) {
    var n = new s(this, e, t);
    return n.jqDeferred.promise(a(this))
  }), f.prototype = new t, f.prototype.check = function () {
    var e = v[this.img.src] || new c(this.img.src);
    if (e.isConfirmed)return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
    if (this.img.complete && void 0 !== this.img.naturalWidth)return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
    var t = this;
    e.on("confirm", function (e, n) {
      return t.confirm(e.isLoaded, n), !0
    }), e.check()
  }, f.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("confirm", this, t)
  };
  var v = {};
  return c.prototype = new t, c.prototype.check = function () {
    if (!this.isChecked) {
      var e = new Image;
      n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
    }
  }, c.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, c.prototype.onload = function (e) {
    this.confirm(!0, "onload"), this.unbindProxyEvents(e)
  }, c.prototype.onerror = function (e) {
    this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
  }, c.prototype.confirm = function (e, t) {
    this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
  }, c.prototype.unbindProxyEvents = function (e) {
    n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
  }, s
});


/*!
 * owl carousel
 * MIT License
 */


"function" !== typeof Object.create && (Object.create = function (f) {
  function g() {
  }

  g.prototype = f;
  return new g
});
(function (f, g, k) {
  var l = {
    init: function (a, b) {
      this.$elem = f(b);
      this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
      this.userOptions = a;
      this.loadContent()
    }, loadContent: function () {
      function a(a) {
        var d, e = "";
        if ("function" === typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this, [a]); else {
          for (d in a.owl)a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          b.$elem.html(e)
        }
        b.logIn()
      }

      var b = this, e;
      "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath ?
        (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
    }, logIn: function () {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
      this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
      this.$elem.css({opacity: 0});
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars()
    }, setVars: function () {
      if (0 === this.$elem.children().length)return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup()
    }, onStartup: function () {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay &&
      (this.options.autoPlay = 5E3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
    }, eachMoveUpdate: function () {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction && this.options.afterAction.apply(this,
        [this.$elem])
    }, updateVars: function () {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
    }, reload: function () {
      var a = this;
      g.setTimeout(function () {
        a.updateVars()
      }, 0)
    }, watchVisibility: function () {
      var a = this;
      if (!1 === a.$elem.is(":visible"))a.$elem.css({opacity: 0}),
        g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible); else return !1;
      a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({opacity: 1}, 200), g.clearInterval(a.checkVisible))
      }, 500)
    }, wrapItems: function () {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block")
    },
    baseClass: function () {
      var a = this.$elem.hasClass(this.options.baseClass), b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme)
    }, updateItems: function () {
      var a, b;
      if (!1 === this.options.responsive)return !1;
      if (!0 === this.options.singleItem)return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)for (this.options.itemsCustom.sort(function (a, b) {
        return a[0] - b[0]
      }), b = 0; b < this.options.itemsCustom.length; b += 1)this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]); else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
      a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount &&
      !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
    }, response: function () {
      var a = this, b, e;
      if (!0 !== a.options.responsive)return !1;
      e = f(g).width();
      a.resizer = function () {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
          e = f(g).width();
          a.updateVars()
        }, a.options.responsiveRefreshRate))
      };
      f(g).resize(a.resizer)
    }, updatePosition: function () {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp()
    }, appendItemsSizes: function () {
      var a =
        this, b = 0, e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function (c) {
        var d = f(this);
        d.css({width: a.itemWidth}).data("owl-item", Number(c));
        if (0 === c % a.options.items || c === e)c > e || (b += 1);
        d.data("owl-roundPages", b)
      })
    }, appendWrapperSizes: function () {
      this.$owlWrapper.css({width: this.$owlItems.length * this.itemWidth * 2, left: 0});
      this.appendItemsSizes()
    }, calculateAll: function () {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max()
    }, calculateWidth: function () {
      this.itemWidth = Math.round(this.$elem.width() /
      this.options.items)
    }, max: function () {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
      return a
    }, min: function () {
      return 0
    }, loops: function () {
      var a = 0, b = 0, e, c;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1)b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
        c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
    }, buildControls: function () {
      if (!0 === this.options.navigation || !0 === this.options.pagination)this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons()
    }, buildButtons: function () {
      var a = this, b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev =
        f("<div/>", {"class": "owl-prev", html: a.options.navigationText[0] || ""});
      a.buttonNext = f("<div/>", {"class": "owl-next", html: a.options.navigationText[1] || ""});
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault()
      });
      b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();
        f(this).hasClass("owl-next") ? a.next() : a.prev()
      })
    }, buildPagination: function () {
      var a = this;
      a.paginationWrapper =
        f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();
        Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
      })
    }, updatePagination: function () {
      var a, b, e, c, d, g;
      if (!1 === this.options.pagination)return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - this.itemsAmount % this.options.items;
      for (c = 0; c < this.itemsAmount; c += 1)0 === c % this.options.items &&
      (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {"class": "owl-page"}), g = f("<span></span>", {
        text: !0 === this.options.paginationNumbers ? a : "",
        "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
      }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      this.checkPagination()
    }, checkPagination: function () {
      var a = this;
      if (!1 === a.options.pagination)return !1;
      a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") ===
        f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
      })
    }, checkNavigation: function () {
      if (!1 === this.options.navigation)return !1;
      !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
      this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
    }, updateControls: function () {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
    }, destroyControls: function () {
      this.owlControls && this.owlControls.remove()
    }, next: function (a) {
      if (this.isTransition)return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))if (!0 === this.options.rewindNav)this.currentItem = 0, a = "rewind"; else return this.currentItem = this.maximumItem, !1;
      this.goTo(this.currentItem, a)
    }, prev: function (a) {
      if (this.isTransition)return !1;
      this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
        this.options.items : 1);
      if (0 > this.currentItem)if (!0 === this.options.rewindNav)this.currentItem = this.maximumItem, a = "rewind"; else return this.currentItem = 0, !1;
      this.goTo(this.currentItem, a)
    }, goTo: function (a, b, e) {
      var c = this;
      if (c.isTransition)return !1;
      "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
      a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
      c.currentItem = c.owl.currentItem = a;
      if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d)return c.swapSpeed(0),
        !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
      a = c.positionsInArray[a];
      !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
        c.isCss3Finish = !0
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
          c.isCss3Finish = !0
        },
        c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
      c.afterGo()
    }, jumpTo: function (a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem =
        this.owl.currentItem = a;
      this.afterGo()
    }, afterGo: function () {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
    }, stop: function () {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval)
    },
    checkAp: function () {
      "stop" !== this.apStatus && this.play()
    }, play: function () {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay)return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function () {
        a.next(!0)
      }, a.options.autoPlay)
    }, swapSpeed: function (a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
    },
    addCssSpeed: function (a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease"
      }
    }, removeTransition: function () {
      return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
    }, doTranslate: function (a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" +
        a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)"
      }
    }, transition3d: function (a) {
      this.$owlWrapper.css(this.doTranslate(a))
    }, css2move: function (a) {
      this.$owlWrapper.css({left: a})
    }, css2slide: function (a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate({left: a}, {
        duration: b || e.options.slideSpeed, complete: function () {
          e.isCssFinish = !0
        }
      })
    }, checkBrowser: function () {
      var a = k.createElement("div");
      a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart"in g || g.navigator.msMaxTouchPoints
      }
    }, moveEvents: function () {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag)this.gestures(), this.disabledEvents()
    }, eventTypes: function () {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
        !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2]
    }, disabledEvents: function () {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault()
      });
      this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option")
      })
    },
    gestures: function () {
      function a(a) {
        if (void 0 !== a.touches)return {x: a.touches[0].pageX, y: a.touches[0].pageY};
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX)return {x: a.pageX, y: a.pageY};
          if (void 0 === a.pageX)return {x: a.clientX, y: a.clientY}
        }
      }

      function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
      }

      function e(b) {
        b = b.originalEvent || b || g.event;
        d.newPosX = a(b).x - h.offsetX;
        d.newPosY = a(b).y - h.offsetY;
        d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
        (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
        (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
        d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
        !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
      }

      function c(a) {
        a = a.originalEvent || a || g.event;
        var c;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
        d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
        0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
          a.stopImmediatePropagation();
          a.stopPropagation();
          a.preventDefault();
          f(a.target).off("click.disable")
        }),
          a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
        b("off")
      }

      var d = this, h = {
        offsetX: 0,
        offsetY: 0,
        baseElWidth: 0,
        relativePos: 0,
        position: null,
        minSwipe: null,
        maxSwipe: null,
        sliding: null,
        dargging: null,
        targetElement: null
      };
      d.isCssFinish = !0;
      d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;
        var e;
        if (3 === c.which)return !1;
        if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish)return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
          !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
          d.newPosX = 0;
          d.newRelativeX = 0;
          f(this).css(d.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(c).x - e.left;
          h.offsetY = a(c).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = c.target || c.srcElement
        }
      })
    }, getNewPosition: function () {
      var a = this.closestItem();
      a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
        a = 0);
      return a
    }, closestItem: function () {
      var a = this, b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray, e = a.newPosX, c = null;
      f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
          (c = b[d + 1], a.currentItem = d + 1))
      });
      return a.currentItem
    }, moveDirection: function () {
      var a;
      0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
      return a
    }, customEvents: function () {
      var a = this;
      a.$elem.on("owl.next", function () {
        a.next()
      });
      a.$elem.on("owl.prev", function () {
        a.prev()
      });
      a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play"
      });
      a.$elem.on("owl.stop", function () {
        a.stop();
        a.hoverStatus = "stop"
      });
      a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e)
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e)
      })
    }, stopOnHover: function () {
      var a = this;
      !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
        a.stop()
      }), a.$elem.on("mouseout", function () {
        "stop" !== a.hoverStatus && a.play()
      }))
    }, lazyLoad: function () {
      var a, b, e, c, d;
      if (!1 === this.options.lazyLoad)return !1;
      for (a = 0; a < this.itemsAmount; a += 1)b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
        b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
    }, lazyPreload: function (a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this,
          [d.$elem])
      }

      function c() {
        f += 1;
        d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
      }

      var d = this, f = 0, k;
      "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
      c()
    }, autoHeight: function () {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
          e.wrapperOuter.addClass("autoHeight")
        }, 0)
      }

      function b() {
        d += 1;
        e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
          100) : e.wrapperOuter.css("height", "")
      }

      var e = this, c = f(e.$owlItems[e.currentItem]).find("img"), d;
      void 0 !== c.get(0) ? (d = 0, b()) : a()
    }, completeImg: function (a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
    }, onVisibleItems: function () {
      var a;
      !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1)this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems
    }, transitionTypes: function (a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in"
    }, singleItemTransition: function () {
      var a = this, b = a.outClass, e = a.inClass, c = a.$owlItems.eq(a.currentItem), d = a.$owlItems.eq(a.prevItem), f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem], g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": g + "px", "-moz-perspective-origin": g +
        "px", "perspective-origin": g + "px"
      });
      d.css({
        position: "relative",
        left: f + "px"
      }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endPrev = !0;
        d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(d, b)
      });
      c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;
        c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(c, e)
      })
    }, clearTransStyle: function (a,
                                  b) {
      a.css({position: "", left: ""}).removeClass(b);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
    }, owlStatus: function () {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection
      }
    }, clearEvents: function () {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer)
    }, unWrap: function () {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
    }, destroy: function () {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData()
    }, reinit: function (a) {
      a = f.extend({}, this.userOptions,
        a);
      this.unWrap();
      this.init(a, this.$elem)
    }, addItem: function (a, b) {
      var e;
      if (!a)return !1;
      if (0 === this.$elem.children().length)return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
      this.setVars()
    }, removeItem: function (a) {
      if (0 === this.$elem.children().length)return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars()
    }
  };
  f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 ===
        f(this).data("owl-init"))return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b)
    })
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1E3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["prev", "next"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1
  }
})(jQuery, window, document);


/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function (a, b, c, d) {
  function e(b, c) {
    this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
  }

  var f = "stellar", g = {
    scrollProperty: "scroll",
    positionProperty: "position",
    horizontalScrolling: !0,
    verticalScrolling: !0,
    horizontalOffset: 0,
    verticalOffset: 0,
    responsive: !1,
    parallaxBackgrounds: !0,
    parallaxElements: !0,
    hideDistantElements: !0,
    hideElement: function (a) {
      a.hide()
    },
    showElement: function (a) {
      a.show()
    }
  }, h = {
    scroll: {
      getLeft: function (a) {
        return a.scrollLeft()
      }, setLeft: function (a, b) {
        a.scrollLeft(b)
      }, getTop: function (a) {
        return a.scrollTop()
      }, setTop: function (a, b) {
        a.scrollTop(b)
      }
    }, position: {
      getLeft: function (a) {
        return -1 * parseInt(a.css("left"), 10)
      }, getTop: function (a) {
        return -1 * parseInt(a.css("top"), 10)
      }
    }, margin: {
      getLeft: function (a) {
        return -1 * parseInt(a.css("margin-left"), 10)
      }, getTop: function (a) {
        return -1 * parseInt(a.css("margin-top"), 10)
      }
    }, transform: {
      getLeft: function (a) {
        var b = getComputedStyle(a[0])[k];
        return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
      }, getTop: function (a) {
        var b = getComputedStyle(a[0])[k];
        return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
      }
    }
  }, i = {
    position: {
      setLeft: function (a, b) {
        a.css("left", b)
      }, setTop: function (a, b) {
        a.css("top", b)
      }
    }, transform: {
      setPosition: function (a, b, c, d, e) {
        a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
      }
    }
  }, j = function () {
    var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, d = a("script")[0].style, e = "";
    for (b in d)if (c.test(b)) {
      e = b.match(c)[0];
      break
    }
    return "WebkitOpacity"in d && (e = "Webkit"), "KhtmlOpacity"in d && (e = "Khtml"), function (a) {
      return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
    }
  }(), k = j("transform"), l = a("<div />", {style: "background:#fff"}).css("background-position-x") !== d, m = l ? function (a, b, c) {
    a.css({"background-position-x": b, "background-position-y": c})
  } : function (a, b, c) {
    a.css("background-position", b + " " + c)
  }, n = l ? function (a) {
    return [a.css("background-position-x"), a.css("background-position-y")]
  } : function (a) {
    return a.css("background-position").split(" ")
  }, o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
      setTimeout(a, 1e3 / 60)
    };
  e.prototype = {
    init: function () {
      this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
    }, _defineElements: function () {
      this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
    }, _defineGetters: function () {
      var a = this, b = h[a.options.scrollProperty];
      this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement)
      }, this._getScrollTop = function () {
        return b.getTop(a.$scrollElement)
      }
    }, _defineSetters: function () {
      var b = this, c = h[b.options.scrollProperty], d = i[b.options.positionProperty], e = c.setLeft, f = c.setTop;
      this._setScrollLeft = "function" == typeof e ? function (a) {
        e(b.$scrollElement, a)
      } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
        f(b.$scrollElement, a)
      } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
        b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
      }
    }, _handleWindowLoadAndResize: function () {
      var c = this, d = a(b);
      c.options.responsive && d.bind("load." + this.name, function () {
        c.refresh()
      }), d.bind("resize." + this.name, function () {
        c._detectViewport(), c.options.responsive && c.refresh()
      })
    }, refresh: function (c) {
      var d = this, e = d._getScrollLeft(), f = d._getScrollTop();
      c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
        var a = d._getScrollLeft(), b = d._getScrollTop();
        d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
      }), this._setScrollLeft(e), this._setScrollTop(f)
    }, _detectViewport: function () {
      var a = this.$viewportElement.offset(), b = null !== a && a !== d;
      this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
    }, _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop()
      }
      if (this.particles !== d)for (var c = this.particles.length - 1; c >= 0; c--)this.particles[c].$element.data("stellar-elementIsActive", d);
      this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
        var c, e, f, g, h, i, j, k, l, m = a(this), n = 0, o = 0, p = 0, q = 0;
        if (m.data("stellar-elementIsActive")) {
          if (m.data("stellar-elementIsActive") !== this)return
        } else m.data("stellar-elementIsActive", this);
        b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
        }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
          $element: m,
          $offsetParent: j,
          isFixed: "fixed" === m.css("position"),
          horizontalOffset: c,
          verticalOffset: e,
          startingPositionLeft: f,
          startingPositionTop: g,
          startingOffsetLeft: k,
          startingOffsetTop: l,
          parentOffsetLeft: n,
          parentOffsetTop: o,
          stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
          width: m.outerWidth(!0),
          height: m.outerHeight(!0),
          isHidden: !1
        })
      })
    }, _findBackgrounds: function () {
      var b, c = this, e = this._getScrollLeft(), f = this._getScrollTop();
      this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
        var b, g, h, i, j, k, l, o = a(this), p = n(o), q = 0, r = 0, s = 0, t = 0;
        if (o.data("stellar-backgroundIsActive")) {
          if (o.data("stellar-backgroundIsActive") !== this)return
        } else o.data("stellar-backgroundIsActive", this);
        o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
        }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
          $element: o,
          $offsetParent: l,
          isFixed: "fixed" === o.css("background-attachment"),
          horizontalOffset: b,
          verticalOffset: g,
          startingValueLeft: p[0],
          startingValueTop: p[1],
          startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
          startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
          startingPositionLeft: o.position().left,
          startingPositionTop: o.position().top,
          startingOffsetLeft: j,
          startingOffsetTop: k,
          parentOffsetLeft: q,
          parentOffsetTop: r,
          stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
        })
      }))
    }, _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
    }, destroy: function () {
      this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
    }, _setOffsets: function () {
      var c = this, d = a(b);
      d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
        c.horizontalOffset = c.options.horizontalOffset()
      })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
        c.verticalOffset = c.options.verticalOffset()
      })) : this.verticalOffset = this.options.verticalOffset
    }, _repositionElements: function () {
      var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(), l = this._getScrollTop(), n = !0, o = !0;
      if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
        for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
        for (j = this.backgrounds.length - 1; j >= 0; j--)c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
      }
    }, _handleScrollEvent: function () {
      var a = this, b = !1, c = function () {
        a._repositionElements(), b = !1
      }, d = function () {
        b || (o(c), b = !0)
      };
      this.$scrollElement.bind("scroll." + this.name, d), d()
    }, _startAnimationLoop: function () {
      var a = this;
      this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements()
      }, this._animationLoop()
    }
  }, a.fn[f] = function (b) {
    var c = arguments;
    return b === d || "object" == typeof b ? this.each(function () {
      a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
    }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
      var d = a.data(this, "plugin_" + f);
      d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
    }) : void 0
  }, a[f] = function () {
    var c = a(b);
    return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
  }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


/*scroll reveal */
!function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.scrollReveal = e()
}(this, function () {
  return window.scrollReveal = function (t) {
    "use strict";
    function e(e) {
      this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = {}, 1 == this.options.init && this.init()
    }

    var i = 1, o = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
          t.setTimeout(e, 1e3 / 60)
        }
    }();
    return e.prototype = {
      defaults: {
        after: "0s",
        enter: "bottom",
        move: "24px",
        over: "0.66s",
        easing: "ease-in-out",
        opacity: 0,
        viewportFactor: .33,
        reset: !1,
        init: !0
      }, init: function () {
        this.scrolled = !1;
        var e = this;
        this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function (t) {
          var o = t.getAttribute("data-scroll-reveal-id");
          o || (o = i++, t.setAttribute("data-scroll-reveal-id", o)), e.styleBank[o] || (e.styleBank[o] = t.getAttribute("style")), e.update(t)
        });
        var r = function () {
          e.scrolled || (e.scrolled = !0, o(function () {
            e._scrollPage()
          }))
        }, n = function () {
          function t() {
            e._scrollPage(), e.resizeTimeout = null
          }

          e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200)
        };
        t.addEventListener("scroll", r, !1), t.addEventListener("resize", n, !1)
      }, _scrollPage: function () {
        var t = this;
        this.elems.forEach(function (e) {
          t.update(e)
        }), this.scrolled = !1
      }, parseLanguage: function (t) {
        function e(t) {
          var e = [], i = ["from", "the", "and", "then", "but", "with"];
          return t.forEach(function (t) {
            i.indexOf(t) > -1 || e.push(t)
          }), e
        }

        var i = t.getAttribute("data-scroll-reveal").split(/[, ]+/), o = {};
        return i = e(i), i.forEach(function (t, e) {
          switch (t) {
            case"enter":
              return void(o.enter = i[e + 1]);
            case"after":
              return void(o.after = i[e + 1]);
            case"wait":
              return void(o.after = i[e + 1]);
            case"move":
              return void(o.move = i[e + 1]);
            case"ease":
              return o.move = i[e + 1], void(o.ease = "ease");
            case"ease-in":
              return o.move = i[e + 1], void(o.easing = "ease-in");
            case"ease-in-out":
              return o.move = i[e + 1], void(o.easing = "ease-in-out");
            case"ease-out":
              return o.move = i[e + 1], void(o.easing = "ease-out");
            case"over":
              return void(o.over = i[e + 1]);
            default:
              return
          }
        }), o
      }, update: function (t) {
        var e = this.genCSS(t), i = this.styleBank[t.getAttribute("data-scroll-reveal-id")];
        return null != i ? i += ";" : i = "", t.getAttribute("data-scroll-reveal-initialized") || (t.setAttribute("style", i + e.initial), t.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(t, this.options.viewportFactor) ? t.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(t, this.options.viewportFactor) ? (t.setAttribute("style", i + e.target + e.transition), void(this.options.reset || setTimeout(function () {
          "" != i ? t.setAttribute("style", i) : t.removeAttribute("style"), t.setAttribute("data-scroll-reveal-complete", !0)
        }, e.totalDuration))) : void 0 : void(this.options.reset && t.setAttribute("style", i + e.initial + e.reset))
      }, genCSS: function (t) {
        var e, i, o = this.parseLanguage(t);
        o.enter ? (("top" == o.enter || "bottom" == o.enter) && (e = o.enter, i = "y"), ("left" == o.enter || "right" == o.enter) && (e = o.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, i = "x")), ("top" == e || "left" == e) && (o.move = o.move ? "-" + o.move : "-" + this.options.move);
        var r = o.move || this.options.move, n = o.over || this.options.over, s = o.after || this.options.after, a = o.easing || this.options.easing, l = o.opacity || this.options.opacity, u = "-webkit-transition: -webkit-transform " + n + " " + a + " " + s + ",  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " " + s + ", opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;", c = "-webkit-transition: -webkit-transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;", f = "-webkit-transform: translate" + i + "(" + r + ");transform: translate" + i + "(" + r + ");opacity: " + l + ";", p = "-webkit-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
        return {transition: u, initial: f, target: p, reset: c, totalDuration: 1e3 * (parseFloat(n) + parseFloat(s))}
      }, getViewportH: function () {
        var e = this.docElem.clientHeight, i = t.innerHeight;
        return i > e ? i : e
      }, getOffset: function (t) {
        var e = 0, i = 0;
        do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
        return {top: e, left: i}
      }, isElementInViewport: function (e, i) {
        var o = t.pageYOffset, r = o + this.getViewportH(), n = e.offsetHeight, s = this.getOffset(e).top, a = s + n, i = i || 0;
        return r >= s + n * i && a >= o || "fixed" == (e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null)).position
      }, extend: function (t, e) {
        for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
      }
    }, e
  }(window), scrollReveal
});

//*smooth scroll*

(function (e, t) {
  if (typeof define === "function" && define.amd) {
    define("smoothScroll", t(e))
  } else if (typeof exports === "object") {
    module.exports = t(e)
  } else {
    e.smoothScroll = t(e)
  }
})(this, function (e) {
  "use strict";
  var t = {};
  var n = !!document.querySelector && !!e.addEventListener;
  var r;
  var i = {
    speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: true, callbackBefore: function () {
    }, callbackAfter: function () {
    }
  };
  var s = function (e, t, n) {
    if (Object.prototype.toString.call(e) === "[object Object]") {
      for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          t.call(n, e[r], r, e)
        }
      }
    } else {
      for (var i = 0, s = e.length; i < s; i++) {
        t.call(n, e[i], i, e)
      }
    }
  };
  var o = function (e, t) {
    var n = {};
    s(e, function (t, r) {
      n[r] = e[r]
    });
    s(t, function (e, r) {
      n[r] = t[r]
    });
    return n
  };
  var u = function (e) {
    var t = String(e);
    var n = t.length;
    var r = -1;
    var i;
    var s = "";
    var o = t.charCodeAt(0);
    while (++r < n) {
      i = t.charCodeAt(r);
      if (i === 0) {
        throw new InvalidCharacterError("Invalid character: the input contains U+0000.")
      }
      if (i >= 1 && i <= 31 || i == 127 || r === 0 && i >= 48 && i <= 57 || r === 1 && i >= 48 && i <= 57 && o === 45) {
        s += "\\" + i.toString(16) + " ";
        continue
      }
      if (i >= 128 || i === 45 || i === 95 || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122) {
        s += t.charAt(r);
        continue
      }
      s += "\\" + t.charAt(r)
    }
    return s
  };
  var a = function (e, t) {
    var n;
    if (e === "easeInQuad")n = t * t;
    if (e === "easeOutQuad")n = t * (2 - t);
    if (e === "easeInOutQuad")n = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    if (e === "easeInCubic")n = t * t * t;
    if (e === "easeOutCubic")n = --t * t * t + 1;
    if (e === "easeInOutCubic")n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    if (e === "easeInQuart")n = t * t * t * t;
    if (e === "easeOutQuart")n = 1 - --t * t * t * t;
    if (e === "easeInOutQuart")n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    if (e === "easeInQuint")n = t * t * t * t * t;
    if (e === "easeOutQuint")n = 1 + --t * t * t * t * t;
    if (e === "easeInOutQuint")n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    return n || t
  };
  var f = function (e, t, n) {
    var r = 0;
    if (e.offsetParent) {
      do {
        r += e.offsetTop;
        e = e.offsetParent
      } while (e)
    }
    r = r - t - n;
    return r >= 0 ? r : 0
  };
  var l = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
  };
  var c = function (e) {
    return !e || !(typeof JSON === "object" && typeof JSON.parse === "function") ? {} : JSON.parse(e)
  };
  var h = function (e, t) {
    if (history.pushState && (t || t === "true")) {
      history.pushState({pos: e.id}, "", window.location.pathname + e)
    }
  };
  t.animateScroll = function (t, n, r, s) {
    var p = o(p || i, r || {});
    var d = c(t ? t.getAttribute("data-options") : null);
    p = o(p, d);
    n = "#" + u(n.substr(1));
    var v = document.querySelector("[data-scroll-header]");
    var m = v === null ? 0 : v.offsetHeight + v.offsetTop;
    var g = e.pageYOffset;
    var y = f(document.querySelector(n), m, parseInt(p.offset, 10));
    var b;
    var w = y - g;
    var E = l();
    var S = 0;
    var x, T;
    if (t && t.tagName.toLowerCase() === "a" && s) {
      s.preventDefault()
    }
    h(n, p.updateURL);
    var N = function (r, i, s) {
      var o = e.pageYOffset;
      if (r == i || o == i || e.innerHeight + o >= E) {
        clearInterval(s);
        p.callbackAfter(t, n)
      }
    };
    var C = function () {
      S += 16;
      x = S / parseInt(p.speed, 10);
      x = x > 1 ? 1 : x;
      T = g + w * a(p.easing, x);
      e.scrollTo(0, Math.floor(T));
      N(T, y, b)
    };
    var k = function () {
      p.callbackBefore(t, n);
      b = setInterval(C, 16)
    };
    if (e.pageYOffset === 0) {
      e.scrollTo(0, 0)
    }
    k()
  };
  t.init = function (e) {
    if (!n)return;
    r = o(i, e || {});
    var u = document.querySelectorAll("[data-scroll]");
    s(u, function (e) {
      e.addEventListener("click", t.animateScroll.bind(null, e, e.hash, r), false)
    })
  };
  return t
});

/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function (t) {
  function e() {
  }

  function i(t) {
    function i(e) {
      e.prototype.option || (e.prototype.option = function (e) {
        t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
      })
    }

    function n(e, i) {
      t.fn[e] = function (n) {
        if ("string" == typeof n) {
          for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
            var p = this[a], h = t.data(p, e);
            if (h)if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
              var f = h[n].apply(h, s);
              if (void 0 !== f)return f
            } else r("no such method '" + n + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
          }
          return this
        }
        return this.each(function () {
          var o = t.data(this, e);
          o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
        })
      }
    }

    if (t) {
      var r = "undefined" == typeof console ? e : function (t) {
        console.error(t)
      };
      return t.bridget = function (t, e) {
        i(e), n(t, e)
      }, t.bridget
    }
  }

  var o = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window), function (t) {
  function e(e) {
    var i = t.event;
    return i.target = i.target || i.srcElement || e, i
  }

  var i = document.documentElement, o = function () {
  };
  i.addEventListener ? o = function (t, e, i) {
    t.addEventListener(e, i, !1)
  } : i.attachEvent && (o = function (t, i, o) {
    t[i + o] = o.handleEvent ? function () {
      var i = e(t);
      o.handleEvent.call(o, i)
    } : function () {
      var i = e(t);
      o.call(t, i)
    }, t.attachEvent("on" + i, t[i + o])
  });
  var n = function () {
  };
  i.removeEventListener ? n = function (t, e, i) {
    t.removeEventListener(e, i, !1)
  } : i.detachEvent && (n = function (t, e, i) {
    t.detachEvent("on" + e, t[e + i]);
    try {
      delete t[e + i]
    } catch (o) {
      t[e + i] = void 0
    }
  });
  var r = {bind: o, unbind: n};
  "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function (t) {
  function e(t) {
    "function" == typeof t && (e.isReady ? t() : r.push(t))
  }

  function i(t) {
    var i = "readystatechange" === t.type && "complete" !== n.readyState;
    if (!e.isReady && !i) {
      e.isReady = !0;
      for (var o = 0, s = r.length; s > o; o++) {
        var a = r[o];
        a()
      }
    }
  }

  function o(o) {
    return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
  }

  var n = t.document, r = [];
  e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this), function () {
  function t() {
  }

  function e(t, e) {
    for (var i = t.length; i--;)if (t[i].listener === e)return i;
    return -1
  }

  function i(t) {
    return function () {
      return this[t].apply(this, arguments)
    }
  }

  var o = t.prototype, n = this, r = n.EventEmitter;
  o.getListeners = function (t) {
    var e, i, o = this._getEvents();
    if (t instanceof RegExp) {
      e = {};
      for (i in o)o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
    } else e = o[t] || (o[t] = []);
    return e
  }, o.flattenListeners = function (t) {
    var e, i = [];
    for (e = 0; t.length > e; e += 1)i.push(t[e].listener);
    return i
  }, o.getListenersAsObject = function (t) {
    var e, i = this.getListeners(t);
    return i instanceof Array && (e = {}, e[t] = i), e || i
  }, o.addListener = function (t, i) {
    var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
    for (o in n)n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
    return this
  }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
    return this.addListener(t, {listener: e, once: !0})
  }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
    return this.getListeners(t), this
  }, o.defineEvents = function (t) {
    for (var e = 0; t.length > e; e += 1)this.defineEvent(t[e]);
    return this
  }, o.removeListener = function (t, i) {
    var o, n, r = this.getListenersAsObject(t);
    for (n in r)r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
    return this
  }, o.off = i("removeListener"), o.addListeners = function (t, e) {
    return this.manipulateListeners(!1, t, e)
  }, o.removeListeners = function (t, e) {
    return this.manipulateListeners(!0, t, e)
  }, o.manipulateListeners = function (t, e, i) {
    var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
    if ("object" != typeof e || e instanceof RegExp)for (o = i.length; o--;)r.call(this, e, i[o]); else for (o in e)e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
    return this
  }, o.removeEvent = function (t) {
    var e, i = typeof t, o = this._getEvents();
    if ("string" === i)delete o[t]; else if (t instanceof RegExp)for (e in o)o.hasOwnProperty(e) && t.test(e) && delete o[e]; else delete this._events;
    return this
  }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
    var i, o, n, r, s = this.getListenersAsObject(t);
    for (n in s)if (s.hasOwnProperty(n))for (o = s[n].length; o--;)i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
    return this
  }, o.trigger = i("emitEvent"), o.emit = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e)
  }, o.setOnceReturnValue = function (t) {
    return this._onceReturnValue = t, this
  }, o._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, o._getEvents = function () {
    return this._events || (this._events = {})
  }, t.noConflict = function () {
    return n.EventEmitter = r, t
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return t
  }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function (t) {
  function e(t) {
    if (t) {
      if ("string" == typeof o[t])return t;
      t = t.charAt(0).toUpperCase() + t.slice(1);
      for (var e, n = 0, r = i.length; r > n; n++)if (e = i[n] + t, "string" == typeof o[e])return e
    }
  }

  var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
  "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
    return e
  }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
  function e(t) {
    var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function i() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0, i = s.length; i > e; e++) {
      var o = s[e];
      t[o] = 0
    }
    return t
  }

  function o(t) {
    function o(t) {
      if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
        var o = r(t);
        if ("none" === o.display)return i();
        var n = {};
        n.width = t.offsetWidth, n.height = t.offsetHeight;
        for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
          var d = s[f], l = o[d];
          l = a(t, l);
          var y = parseFloat(l);
          n[d] = isNaN(y) ? 0 : y
        }
        var m = n.paddingLeft + n.paddingRight, g = n.paddingTop + n.paddingBottom, v = n.marginLeft + n.marginRight, _ = n.marginTop + n.marginBottom, I = n.borderLeftWidth + n.borderRightWidth, L = n.borderTopWidth + n.borderBottomWidth, z = h && u, S = e(o.width);
        S !== !1 && (n.width = S + (z ? 0 : m + I));
        var b = e(o.height);
        return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
      }
    }

    function a(t, e) {
      if (n || -1 === e.indexOf("%"))return e;
      var i = t.style, o = i.left, r = t.runtimeStyle, s = r && r.left;
      return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
    }

    var u, p = t("boxSizing");
    return function () {
      if (p) {
        var t = document.createElement("div");
        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
        var i = document.body || document.documentElement;
        i.appendChild(t);
        var o = r(t);
        u = 200 === e(o.width), i.removeChild(t)
      }
    }(), o
  }

  var n = t.getComputedStyle, r = n ? function (t) {
    return n(t, null)
  } : function (t) {
    return t.currentStyle
  }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function (t, e) {
  function i(t, e) {
    return t[a](e)
  }

  function o(t) {
    if (!t.parentNode) {
      var e = document.createDocumentFragment();
      e.appendChild(t)
    }
  }

  function n(t, e) {
    o(t);
    for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)if (i[n] === t)return !0;
    return !1
  }

  function r(t, e) {
    return o(t), i(t, e)
  }

  var s, a = function () {
    if (e.matchesSelector)return "matchesSelector";
    for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
      var n = t[i], r = n + "MatchesSelector";
      if (e[r])return r
    }
  }();
  if (a) {
    var u = document.createElement("div"), p = i(u, "div");
    s = p ? i : r
  } else s = n;
  "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
    return s
  }) : window.matchesSelector = s
}(this, Element.prototype), function (t) {
  function e(t, e) {
    for (var i in e)t[i] = e[i];
    return t
  }

  function i(t) {
    for (var e in t)return !1;
    return e = null, !0
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase()
    })
  }

  function n(t, n, r) {
    function a(t, e) {
      t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), c = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "otransitionend",
      transition: "transitionend"
    }[u], d = ["transform", "transition", "transitionDuration", "transitionProperty"], l = function () {
      for (var t = {}, e = 0, i = d.length; i > e; e++) {
        var o = d[e], n = r(o);
        n && n !== o && (t[o] = n)
      }
      return t
    }();
    e(a.prototype, t.prototype), a.prototype._create = function () {
      this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, a.prototype.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, a.prototype.getSize = function () {
      this.size = n(this.element)
    }, a.prototype.css = function (t) {
      var e = this.element.style;
      for (var i in t) {
        var o = l[i] || i;
        e[o] = t[i]
      }
    }, a.prototype.getPosition = function () {
      var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
      n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
      var a = this.layout.size;
      n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
    }, a.prototype.layoutPosition = function () {
      var t = this.layout.size, e = this.layout.options, i = {};
      e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
    };
    var y = f ? function (t, e) {
      return "translate3d(" + t + "px, " + e + "px, 0)"
    } : function (t, e) {
      return "translate(" + t + "px, " + e + "px)"
    };
    a.prototype._transitionTo = function (t, e) {
      this.getPosition();
      var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y;
      if (this.setPosition(t, e), s && !this.isTransitioning)return this.layoutPosition(), void 0;
      var a = t - i, u = e - o, p = {}, h = this.layout.options;
      a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
        to: p,
        onTransitionEnd: {transform: this.layoutPosition},
        isCleaning: !0
      })
    }, a.prototype.goTo = function (t, e) {
      this.setPosition(t, e), this.layoutPosition()
    }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
      this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, a.prototype._nonTransition = function (t) {
      this.css(t.to), t.isCleaning && this._removeStyles(t.to);
      for (var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)
    }, a.prototype._transition = function (t) {
      if (!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t), void 0;
      var e = this._transn;
      for (var i in t.onTransitionEnd)e.onEnd[i] = t.onTransitionEnd[i];
      for (i in t.to)e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
      if (t.from) {
        this.css(t.from);
        var o = this.element.offsetHeight;
        o = null
      }
      this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var m = p && o(p) + ",opacity";
    a.prototype.enableTransition = function () {
      this.isTransitioning || (this.css({
        transitionProperty: m,
        transitionDuration: this.layout.options.transitionDuration
      }), this.element.addEventListener(c, this, !1))
    }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
      this.ontransitionend(t)
    }, a.prototype.onotransitionend = function (t) {
      this.ontransitionend(t)
    };
    var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    a.prototype.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn, o = g[t.propertyName] || t.propertyName;
        if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o]
        }
        this.emitEvent("transitionEnd", [this])
      }
    }, a.prototype.disableTransition = function () {
      this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
    }, a.prototype._removeStyles = function (t) {
      var e = {};
      for (var i in t)e[i] = "";
      this.css(e)
    };
    var v = {transitionProperty: "", transitionDuration: ""};
    return a.prototype.removeTransitionStyles = function () {
      this.css(v)
    }, a.prototype.removeElem = function () {
      this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
    }, a.prototype.remove = function () {
      if (!u || !parseFloat(this.layout.options.transitionDuration))return this.removeElem(), void 0;
      var t = this;
      this.on("transitionEnd", function () {
        return t.removeElem(), !0
      }), this.hide()
    }, a.prototype.reveal = function () {
      delete this.isHidden, this.css({display: ""});
      var t = this.layout.options;
      this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
    }, a.prototype.hide = function () {
      this.isHidden = !0, this.css({display: ""});
      var t = this.layout.options;
      this.transition({
        from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: {
          opacity: function () {
            this.isHidden && this.css({display: "none"})
          }
        }
      })
    }, a.prototype.destroy = function () {
      this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, a
  }

  var r = t.getComputedStyle, s = r ? function (t) {
    return r(t, null)
  } : function (t) {
    return t.currentStyle
  };
  "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function (t) {
  function e(t, e) {
    for (var i in e)t[i] = e[i];
    return t
  }

  function i(t) {
    return "[object Array]" === f.call(t)
  }

  function o(t) {
    var e = [];
    if (i(t))e = t; else if (t && "number" == typeof t.length)for (var o = 0, n = t.length; n > o; o++)e.push(t[o]); else e.push(t);
    return e
  }

  function n(t, e) {
    var i = d(e, t);
    -1 !== i && e.splice(i, 1)
  }

  function r(t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  }

  function s(i, s, f, d, l, y) {
    function m(t, i) {
      if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t))return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
      this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
      var o = ++g;
      this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var g = 0, v = {};
    return m.namespace = "outlayer", m.Item = y, m.defaults = {
      containerStyle: {position: "relative"},
      isInitLayout: !0,
      isOriginLeft: !0,
      isOriginTop: !0,
      isResizeBound: !0,
      isResizingContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
      visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, e(m.prototype, f.prototype), m.prototype.option = function (t) {
      e(this.options, t)
    }, m.prototype._create = function () {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, m.prototype.reloadItems = function () {
      this.items = this._itemize(this.element.children)
    }, m.prototype._itemize = function (t) {
      for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
        var s = e[n], a = new i(s, this);
        o.push(a)
      }
      return o
    }, m.prototype._filterFindItemElements = function (t) {
      t = o(t);
      for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
        var s = t[n];
        if (c(s))if (e) {
          l(s, e) && i.push(s);
          for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)i.push(a[u])
        } else i.push(s)
      }
      return i
    }, m.prototype.getItemElements = function () {
      for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e].element);
      return t
    }, m.prototype.layout = function () {
      this._resetLayout(), this._manageStamps();
      var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
      this.getSize()
    }, m.prototype.getSize = function () {
      this.size = d(this.element)
    }, m.prototype._getMeasurement = function (t, e) {
      var i, o = this.options[t];
      o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
    }, m.prototype.layoutItems = function (t, e) {
      t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, m.prototype._getItemsForLayout = function (t) {
      for (var e = [], i = 0, o = t.length; o > i; i++) {
        var n = t[i];
        n.isIgnored || e.push(n)
      }
      return e
    }, m.prototype._layoutItems = function (t, e) {
      function i() {
        o.emitEvent("layoutComplete", [o, t])
      }

      var o = this;
      if (!t || !t.length)return i(), void 0;
      this._itemsOn(t, "layout", i);
      for (var n = [], r = 0, s = t.length; s > r; r++) {
        var a = t[r], u = this._getItemLayoutPosition(a);
        u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
      }
      this._processLayoutQueue(n)
    }, m.prototype._getItemLayoutPosition = function () {
      return {x: 0, y: 0}
    }, m.prototype._processLayoutQueue = function (t) {
      for (var e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        this._positionItem(o.item, o.x, o.y, o.isInstant)
      }
    }, m.prototype._positionItem = function (t, e, i, o) {
      o ? t.goTo(e, i) : t.moveTo(e, i)
    }, m.prototype._postLayout = function () {
      this.resizeContainer()
    }, m.prototype.resizeContainer = function () {
      if (this.options.isResizingContainer) {
        var t = this._getContainerSize();
        t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
      }
    }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) {
      if (void 0 !== t) {
        var i = this.size;
        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
      }
    }, m.prototype._itemsOn = function (t, e, i) {
      function o() {
        return n++, n === r && i.call(s), !0
      }

      for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
        var p = t[a];
        p.on(e, o)
      }
    }, m.prototype.ignore = function (t) {
      var e = this.getItem(t);
      e && (e.isIgnored = !0)
    }, m.prototype.unignore = function (t) {
      var e = this.getItem(t);
      e && delete e.isIgnored
    }, m.prototype.stamp = function (t) {
      if (t = this._find(t)) {
        this.stamps = this.stamps.concat(t);
        for (var e = 0, i = t.length; i > e; e++) {
          var o = t[e];
          this.ignore(o)
        }
      }
    }, m.prototype.unstamp = function (t) {
      if (t = this._find(t))for (var e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        n(o, this.stamps), this.unignore(o)
      }
    }, m.prototype._find = function (t) {
      return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
    }, m.prototype._manageStamps = function () {
      if (this.stamps && this.stamps.length) {
        this._getBoundingRect();
        for (var t = 0, e = this.stamps.length; e > t; t++) {
          var i = this.stamps[t];
          this._manageStamp(i)
        }
      }
    }, m.prototype._getBoundingRect = function () {
      var t = this.element.getBoundingClientRect(), e = this.size;
      this._boundingRect = {
        left: t.left + e.paddingLeft + e.borderLeftWidth,
        top: t.top + e.paddingTop + e.borderTopWidth,
        right: t.right - (e.paddingRight + e.borderRightWidth),
        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
      }
    }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) {
      var e = t.getBoundingClientRect(), i = this._boundingRect, o = d(t), n = {
        left: e.left - i.left - o.marginLeft,
        top: e.top - i.top - o.marginTop,
        right: i.right - e.right - o.marginRight,
        bottom: i.bottom - e.bottom - o.marginBottom
      };
      return n
    }, m.prototype.handleEvent = function (t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, m.prototype.bindResize = function () {
      this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
    }, m.prototype.unbindResize = function () {
      this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
    }, m.prototype.onresize = function () {
      function t() {
        e.resize(), delete e.resizeTimeout
      }

      this.resizeTimeout && clearTimeout(this.resizeTimeout);
      var e = this;
      this.resizeTimeout = setTimeout(t, 100)
    }, m.prototype.resize = function () {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, m.prototype.needsResizeLayout = function () {
      var t = d(this.element), e = this.size && t;
      return e && t.innerWidth !== this.size.innerWidth
    }, m.prototype.addItems = function (t) {
      var e = this._itemize(t);
      return e.length && (this.items = this.items.concat(e)), e
    }, m.prototype.appended = function (t) {
      var e = this.addItems(t);
      e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, m.prototype.prepended = function (t) {
      var e = this._itemize(t);
      if (e.length) {
        var i = this.items.slice(0);
        this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
      }
    }, m.prototype.reveal = function (t) {
      var e = t && t.length;
      if (e)for (var i = 0; e > i; i++) {
        var o = t[i];
        o.reveal()
      }
    }, m.prototype.hide = function (t) {
      var e = t && t.length;
      if (e)for (var i = 0; e > i; i++) {
        var o = t[i];
        o.hide()
      }
    }, m.prototype.getItem = function (t) {
      for (var e = 0, i = this.items.length; i > e; e++) {
        var o = this.items[e];
        if (o.element === t)return o
      }
    }, m.prototype.getItems = function (t) {
      if (t && t.length) {
        for (var e = [], i = 0, o = t.length; o > i; i++) {
          var n = t[i], r = this.getItem(n);
          r && e.push(r)
        }
        return e
      }
    }, m.prototype.remove = function (t) {
      t = o(t);
      var e = this.getItems(t);
      if (e && e.length) {
        this._itemsOn(e, "remove", function () {
          this.emitEvent("removeComplete", [this, e])
        });
        for (var i = 0, r = e.length; r > i; i++) {
          var s = e[i];
          s.remove(), n(s, this.items)
        }
      }
    }, m.prototype.destroy = function () {
      var t = this.element.style;
      t.height = "", t.position = "", t.width = "";
      for (var e = 0, i = this.items.length; i > e; e++) {
        var o = this.items[e];
        o.destroy()
      }
      this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
    }, m.data = function (t) {
      var e = t && t.outlayerGUID;
      return e && v[e]
    }, m.create = function (t, i) {
      function o() {
        m.apply(this, arguments)
      }

      return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function () {
        y.apply(this, arguments)
      }, o.Item.prototype = new y, s(function () {
        for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
          var f, c = i[s], d = c.getAttribute(n);
          try {
            f = d && JSON.parse(d)
          } catch (l) {
            u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
            continue
          }
          var y = new o(c, f);
          p && p.data(c, t, y)
        }
      }), p && p.bridget && p.bridget(t, o), o
    }, m.Item = y, m
  }

  var a = t.document, u = t.console, p = t.jQuery, h = function () {
  }, f = Object.prototype.toString, c = "object" == typeof HTMLElement ? function (t) {
    return t instanceof HTMLElement
  } : function (t) {
    return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
  }, d = Array.prototype.indexOf ? function (t, e) {
    return t.indexOf(e)
  } : function (t, e) {
    for (var i = 0, o = t.length; o > i; i++)if (t[i] === e)return i;
    return -1
  };
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function (t) {
  function e(t) {
    function e() {
      t.Item.apply(this, arguments)
    }

    return e.prototype = new t.Item, e.prototype._create = function () {
      this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function () {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
        var t = this.layout.options.getSortData, e = this.layout._sorters;
        for (var i in t) {
          var o = e[i];
          this.sortData[i] = o(this.element, this)
        }
      }
    }, e
  }

  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function (t) {
  function e(t, e) {
    function i(t) {
      this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    return function () {
      function t(t) {
        return function () {
          return e.prototype[t].apply(this.isotope, arguments)
        }
      }

      for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
        var s = o[n];
        i.prototype[s] = t(s)
      }
    }(), i.prototype.needsVerticalResizeLayout = function () {
      var e = t(this.isotope.element), i = this.isotope.size && e;
      return i && e.innerHeight !== this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function () {
      this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function () {
      this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function () {
      this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function (t, e) {
      var i = t + e, o = "outer" + e;
      if (this._getMeasurement(i, o), !this[i]) {
        var n = this.getFirstItemSize();
        this[i] = n && n[o] || this.isotope.size["inner" + e]
      }
    }, i.prototype.getFirstItemSize = function () {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
    }, i.prototype.layout = function () {
      this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function () {
      this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
      function o() {
        i.apply(this, arguments)
      }

      return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
  }

  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function (t) {
  function e(t, e) {
    var o = t.create("masonry");
    return o.prototype._resetLayout = function () {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
      var t = this.cols;
      for (this.colYs = []; t--;)this.colYs.push(0);
      this.maxY = 0
    }, o.prototype.measureColumns = function () {
      if (this.getContainerWidth(), !this.columnWidth) {
        var t = this.items[0], i = t && t.element;
        this.columnWidth = i && e(i).outerWidth || this.containerWidth
      }
      this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
    }, o.prototype.getContainerWidth = function () {
      var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
      this.containerWidth = i && i.innerWidth
    }, o.prototype._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth);
      n = Math.min(n, this.cols);
      for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
        x: this.columnWidth * a,
        y: s
      }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)this.colYs[a + f] = p;
      return u
    }, o.prototype._getColGroup = function (t) {
      if (2 > t)return this.colYs;
      for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
        var n = this.colYs.slice(o, o + t);
        e[o] = Math.max.apply(Math, n)
      }
      return e
    }, o.prototype._manageStamp = function (t) {
      var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
      s = Math.max(0, s);
      var a = Math.floor(r / this.columnWidth);
      a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
      for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)this.colYs[p] = Math.max(u, this.colYs[p])
    }, o.prototype._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {height: this.maxY};
      return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, o.prototype._getContainerFitWidth = function () {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++;
      return (this.cols - t) * this.columnWidth - this.gutter
    }, o.prototype.needsResizeLayout = function () {
      var t = this.containerWidth;
      return this.getContainerWidth(), t !== this.containerWidth
    }, o
  }

  var i = Array.prototype.indexOf ? function (t, e) {
    return t.indexOf(e)
  } : function (t, e) {
    for (var i = 0, o = t.length; o > i; i++) {
      var n = t[i];
      if (n === e)return i
    }
    return -1
  };
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function (t) {
  function e(t, e) {
    for (var i in e)t[i] = e[i];
    return t
  }

  function i(t, i) {
    var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
    e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
    var a = o.prototype.measureColumns;
    o.prototype.measureColumns = function () {
      this.items = this.isotope.filteredItems, a.call(this)
    };
    var u = o.prototype._manageStamp;
    return o.prototype._manageStamp = function () {
      this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
    }, o
  }

  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function (t) {
  function e(t) {
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function () {
      this.x = 0, this.y = 0, this.maxY = 0
    }, e.prototype._getItemLayoutPosition = function (t) {
      t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
      var e = {x: this.x, y: this.y};
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
    }, e.prototype._getContainerSize = function () {
      return {height: this.maxY}
    }, e
  }

  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
  function e(t) {
    var e = t.create("vertical", {horizontalAlignment: 0});
    return e.prototype._resetLayout = function () {
      this.y = 0
    }, e.prototype._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
      return this.y += t.size.outerHeight, {x: e, y: i}
    }, e.prototype._getContainerSize = function () {
      return {height: this.y}
    }, e
  }

  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
  function e(t, e) {
    for (var i in e)t[i] = e[i];
    return t
  }

  function i(t) {
    return "[object Array]" === h.call(t)
  }

  function o(t) {
    var e = [];
    if (i(t))e = t; else if (t && "number" == typeof t.length)for (var o = 0, n = t.length; n > o; o++)e.push(t[o]); else e.push(t);
    return e
  }

  function n(t, e) {
    var i = f(e, t);
    -1 !== i && e.splice(i, 1)
  }

  function r(t, i, r, u, h) {
    function f(t, e) {
      return function (i, o) {
        for (var n = 0, r = t.length; r > n; n++) {
          var s = t[n], a = i.sortData[s], u = o.sortData[s];
          if (a > u || u > a) {
            var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
            return (a > u ? 1 : -1) * h
          }
        }
        return 0
      }
    }

    var c = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    c.Item = u, c.LayoutMode = h, c.prototype._create = function () {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var e in h.modes)this._initLayoutMode(e)
    }, c.prototype.reloadItems = function () {
      this.itemGUID = 0, t.prototype.reloadItems.call(this)
    }, c.prototype._itemize = function () {
      for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
        var n = e[i];
        n.id = this.itemGUID++
      }
      return this._updateItemsSortData(e), e
    }, c.prototype._initLayoutMode = function (t) {
      var i = h.modes[t], o = this.options[t] || {};
      this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
    }, c.prototype.layout = function () {
      return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
    }, c.prototype._layout = function () {
      var t = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, c.prototype.arrange = function (t) {
      this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
    }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function () {
      var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      return this._isInstant = t, t
    }, c.prototype._filter = function (t) {
      function e() {
        f.reveal(n), f.hide(r)
      }

      var i = this.options.filter;
      i = i || "*";
      for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
        var p = t[a];
        if (!p.isIgnored) {
          var h = s(p);
          h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
        }
      }
      var f = this;
      return this._isInstant ? this._noTransition(e) : e(), o
    }, c.prototype._getFilterTest = function (t) {
      return s && this.options.isJQueryFiltering ? function (e) {
        return s(e.element).is(t)
      } : "function" == typeof t ? function (e) {
        return t(e.element)
      } : function (e) {
        return r(e.element, t)
      }
    }, c.prototype.updateSortData = function (t) {
      this._getSorters(), t = o(t);
      var e = this.getItems(t);
      e = e.length ? e : this.items, this._updateItemsSortData(e)
    }, c.prototype._getSorters = function () {
      var t = this.options.getSortData;
      for (var e in t) {
        var i = t[e];
        this._sorters[e] = d(i)
      }
    }, c.prototype._updateItemsSortData = function (t) {
      for (var e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        o.updateSortData()
      }
    };
    var d = function () {
      function t(t) {
        if ("string" != typeof t)return t;
        var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), u = c.sortDataParsers[i[1]];
        return t = u ? function (t) {
          return t && u(s(t))
        } : function (t) {
          return t && s(t)
        }
      }

      function e(t, e) {
        var i;
        return i = t ? function (e) {
          return e.getAttribute(t)
        } : function (t) {
          var i = t.querySelector(e);
          return i && p(i)
        }
      }

      return t
    }();
    c.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10)
      }, parseFloat: function (t) {
        return parseFloat(t)
      }
    }, c.prototype._sort = function () {
      var t = this.options.sortBy;
      if (t) {
        var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending);
        this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
      }
    }, c.prototype._mode = function () {
      var t = this.options.layoutMode, e = this.modes[t];
      if (!e)throw Error("No layout mode: " + t);
      return e.options = this.options[t], e
    }, c.prototype._resetLayout = function () {
      t.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, c.prototype._getItemLayoutPosition = function (t) {
      return this._mode()._getItemLayoutPosition(t)
    }, c.prototype._manageStamp = function (t) {
      this._mode()._manageStamp(t)
    }, c.prototype._getContainerSize = function () {
      return this._mode()._getContainerSize()
    }, c.prototype.needsResizeLayout = function () {
      return this._mode().needsResizeLayout()
    }, c.prototype.appended = function (t) {
      var e = this.addItems(t);
      if (e.length) {
        var i = this._filterRevealAdded(e);
        this.filteredItems = this.filteredItems.concat(i)
      }
    }, c.prototype.prepended = function (t) {
      var e = this._itemize(t);
      if (e.length) {
        var i = this.items.slice(0);
        this.items = e.concat(i), this._resetLayout(), this._manageStamps();
        var o = this._filterRevealAdded(e);
        this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
      }
    }, c.prototype._filterRevealAdded = function (t) {
      var e = this._noTransition(function () {
        return this._filter(t)
      });
      return this.layoutItems(e, !0), this.reveal(e), t
    }, c.prototype.insert = function (t) {
      var e = this.addItems(t);
      if (e.length) {
        var i, o, n = e.length;
        for (i = 0; n > i; i++)o = e[i], this.element.appendChild(o.element);
        var r = this._filter(e);
        for (this._noTransition(function () {
          this.hide(r)
        }), i = 0; n > i; i++)e[i].isLayoutInstant = !0;
        for (this.arrange(), i = 0; n > i; i++)delete e[i].isLayoutInstant;
        this.reveal(r)
      }
    };
    var l = c.prototype.remove;
    return c.prototype.remove = function (t) {
      t = o(t);
      var e = this.getItems(t);
      if (l.call(this, t), e && e.length)for (var i = 0, r = e.length; r > i; i++) {
        var s = e[i];
        n(s, this.filteredItems)
      }
    }, c.prototype._noTransition = function (t) {
      var e = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var i = t.call(this);
      return this.options.transitionDuration = e, i
    }, c
  }

  var s = t.jQuery, a = String.prototype.trim ? function (t) {
    return t.trim()
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "")
  }, u = document.documentElement, p = u.textContent ? function (t) {
    return t.textContent
  } : function (t) {
    return t.innerText
  }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function (t, e) {
    return t.indexOf(e)
  } : function (t, e) {
    for (var i = 0, o = t.length; o > i; i++)if (t[i] === e)return i;
    return -1
  };
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);

/*global jQuery */
/*jshint browser:true */
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */

(function (e) {
  "use strict";
  e.fn.fitVids = function (t) {
    var n = {customSelector: null, ignore: null};
    if (!document.getElementById("fit-vids-style")) {
      var r = document.head || document.getElementsByTagName("head")[0];
      var i = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
      var s = document.createElement("div");
      s.innerHTML = '<p>x</p><style id="fit-vids-style">' + i + "</style>";
      r.appendChild(s.childNodes[1])
    }
    if (t) {
      e.extend(n, t)
    }
    return this.each(function () {
      var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
      if (n.customSelector) {
        t.push(n.customSelector)
      }
      var r = ".fitvidsignore";
      if (n.ignore) {
        r = r + ", " + n.ignore
      }
      var i = e(this).find(t.join(","));
      i = i.not("object object");
      i = i.not(r);
      i.each(function () {
        var t = e(this);
        if (t.parents(r).length > 0) {
          return
        }
        if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
          return
        }
        if (!t.css("height") && !t.css("width") && (isNaN(t.attr("height")) || isNaN(t.attr("width")))) {
          t.attr("height", 9);
          t.attr("width", 16)
        }
        var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(), i = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(), s = n / i;
        if (!t.attr("id")) {
          var o = "fitvid" + Math.floor(Math.random() * 999999);
          t.attr("id", o)
        }
        t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", s * 100 + "%");
        t.removeAttr("height").removeAttr("width")
      })
    })
  }
})(window.jQuery || window.Zepto);


// Generated by CoffeeScript 1.6.2
/*!
 jQuery Waypoints - v2.0.5
 Copyright (c) 2011-2014 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 */
(function () {
  var t = [].indexOf || function (t) {
      for (var e = 0, n = this.length; e < n; e++) {
        if (e in this && this[e] === t)return e
      }
      return -1
    }, e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t)
      })
    } else {
      return e(t.jQuery, t)
    }
  })(window, function (n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = {horizontal: {}, vertical: {}};
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {x: t.scrollLeft(), y: t.scrollTop()};
        this.waypoints = {horizontal: {}, vertical: {}};
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || a)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return e.didScroll = false
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle)
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return e.didResize = false
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle)
          }
        })
      }

      t.prototype.doScroll = function () {
        var t, e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up"}
        };
        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh")
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e)
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e)
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset
          });
          if (!o) {
            l.reverse()
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i])
            }
          })
        });
        return this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
      };
      t.prototype.refresh = function () {
        var t, e, r, i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element)
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100)
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward])
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward])
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward])
            }
          })
        })
      };
      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id]
        }
      };
      return t
    }();
    l = function () {
      function t(t, e, r) {
        var i, o;
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height()
            }
            return t - n(this).outerHeight()
          }
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i
      }

      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t)
        }
        if (this.options.triggerOnce) {
          return this.destroy()
        }
      };
      t.prototype.disable = function () {
        return this.enabled = false
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = true
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty()
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = t[w];
        if (!r) {
          return []
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t]
        })
      };
      return t
    }();
    d = {
      init: function (t, e) {
        var r;
        e = n.extend({}, n.fn[g].defaults, e);
        if ((r = e.handler) == null) {
          e.handler = t
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i)
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i)
          }
          return new l(t, r, e)
        });
        n[m]("refresh");
        return this
      }, disable: function () {
        return d._invoke.call(this, "disable")
      }, enable: function () {
        return d._invoke.call(this, "enable")
      }, destroy: function () {
        return d._invoke.call(this, "destroy")
      }, prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1])
          }
        })
      }, next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1])
          }
        })
      }, _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical"
        }
        if (e == null) {
          e = r
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t])
        });
        return this.pushStack(o)
      }, _invoke: function (t) {
        this.each(function () {
          var e;
          e = l.getWaypointsByElement(this);
          return n.each(e, function (e, n) {
            n[t]();
            return true
          })
        });
        return this
      }
    };
    n.fn[g] = function () {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (d[r]) {
        return d[r].apply(this, t)
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments)
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r])
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.")
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.")
      }
    };
    n.fn[g].defaults = {context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false};
    h = {
      refresh: function () {
        return n.each(c, function (t, e) {
          return e.refresh()
        })
      }, viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height()
      }, aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
        }
        if (!e) {
          return []
        }
        r = {horizontal: [], vertical: []};
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e)
          });
          i.sort(function (t, e) {
            return t.offset - e.offset
          });
          r[t] = n.map(i, function (t) {
            return t.element
          });
          return r[t] = n.unique(r[t])
        });
        return r
      }, above: function (t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y
        })
      }, below: function (t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y
        })
      }, left: function (t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x
        })
      }, right: function (t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x
        })
      }, enable: function () {
        return h._invoke("enable")
      }, disable: function () {
        return h._invoke("disable")
      }, destroy: function () {
        return h._invoke("destroy")
      }, extendFn: function (t, e) {
        return d[t] = e
      }, _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true
        })
      }, _filter: function (t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];
        if (!i) {
          return []
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e)
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset
        });
        return n.map(o, function (t) {
          return t.element
        })
      }
    };
    n[m] = function () {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (h[n]) {
        return h[n].apply(null, t)
      } else {
        return h.aggregate.call(null, n)
      }
    };
    n[m].settings = {resizeThrottle: 100, scrollThrottle: 30};
    return i.on("load.waypoints", function () {
      return n[m]("refresh")
    })
  })
}).call(this);


// counters function
(function (e) {
  e.fn.countTo = function (t) {
    t = e.extend({}, e.fn.countTo.defaults, t || {});
    var n = Math.ceil(t.speed / t.refreshInterval), r = (t.to - t.from) / n;
    return e(this).each(function () {
      function a() {
        o += r;
        s++;
        e(i).html(o.toFixed(t.decimals));
        if (typeof t.onUpdate == "function") {
          t.onUpdate.call(i, o)
        }
        if (s >= n) {
          clearInterval(u);
          o = t.to;
          if (typeof t.onComplete == "function") {
            t.onComplete.call(i, o)
          }
        }
      }

      var i = this, s = 0, o = t.from, u = setInterval(a, t.refreshInterval)
    })
  };
  e.fn.countTo.defaults = {
    from: 0,
    to: 100,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null
  }
})(jQuery);


/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
  function a() {
  }

  function b(a) {
    return f.retinaImageSuffix + a
  }

  function c(a, c) {
    if (this.path = a || "", "undefined" != typeof c && null !== c)this.at_2x_path = c, this.perform_check = !1; else {
      if (void 0 !== document.createElement) {
        var d = document.createElement("a");
        d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
      } else {
        var e = this.path.split("?");
        e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
      }
      this.perform_check = !0
    }
  }

  function d(a) {
    this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
    var b = this;
    this.path.check_2x_variant(function (a) {
      a && b.swap()
    })
  }

  var e = "undefined" == typeof exports ? window : exports, f = {
    retinaImageSuffix: "@2x",
    check_mime_type: !0,
    force_original_dimensions: !0
  };
  e.Retina = a, a.configure = function (a) {
    null === a && (a = {});
    for (var b in a)a.hasOwnProperty(b) && (f[b] = a[b])
  }, a.init = function (a) {
    null === a && (a = e);
    var b = a.onload || function () {
      };
    a.onload = function () {
      var a, c, e = document.getElementsByTagName("img"), f = [];
      for (a = 0; a < e.length; a += 1)c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
      b()
    }
  }, a.isRetina = function () {
    var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
  };
  var g = /\.\w+$/;
  e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () {
    return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
  }, c.prototype.check_2x_variant = function (a) {
    var b, d = this;
    return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () {
      if (4 !== b.readyState)return a(!1);
      if (b.status >= 200 && b.status <= 399) {
        if (f.check_mime_type) {
          var e = b.getResponseHeader("Content-Type");
          if (null === e || !e.match(/^image/i))return a(!1)
        }
        return c.confirmed_paths.push(d.at_2x_path), a(!0)
      }
      return a(!1)
    }, b.send(), void 0) : a(!0)
  }, e.RetinaImage = d, d.prototype.swap = function (a) {
    function b() {
      c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
    }

    "undefined" == typeof a && (a = this.path.at_2x_path);
    var c = this;
    b()
  }, a.isRetina() && a.init(e)
}();

/**
 * pathLoader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */

(function (e) {
  "use strict";
  function t(e) {
    this.el = e;
    this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength()
  }

  t.prototype._draw = function (e) {
    this.el.style.strokeDashoffset = this.el.getTotalLength() * (1 - e)
  };
  t.prototype.setProgress = function (e, t) {
    this._draw(e);
    if (t && typeof t === "function") {
      setTimeout(t, 200)
    }
  };
  t.prototype.setProgressFn = function (e) {
    if (typeof e === "function") {
      e(this)
    }
  };
  e.PathLoader = t
})(window);
;
$(document).ready(function () {

  "use strict";

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* Intro Height  */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  function introHeight() {
    var wh = $(window).height();
    $('#intro').css({height: wh});
  }

  introHeight();
  $(window).bind('resize', function () {
    //Update slider height on resize
    introHeight();
  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* contact form init  */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  $('#contactform').submit(function () {
    var action = $(this).attr('action');
    $("#result").slideUp(300, function () {
      $('#result').hide();
      $('#submit')
        .attr('disabled', 'disabled');
      $.post(action, {
          name: $('#name').val(),
          email: $('#email').val(),
          phone: $('#phone').val(),
          comments: $('#comments').val(),
        },
        function (data) {
          document.getElementById('result').innerHTML = data;
          $('#result').slideDown('slow');
          $('#submit').removeAttr('disabled');
          if (data.match('success') != null) $('#contactform').slideUp('slow');
        }
      );

    });

    return false;

  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* click switched with touch for mobile  */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


  $('.gallery-inner img').bind('touchstart', function () {
    $(this).addClass('.gallery-inner  .captionWrapper');
  });

  $('.gallery-inner  img').bind('touchend', function () {
    $(this).removeClass('.gallery-inner  .captionWrapper');
  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* Parallax init  */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(function () {
      $('.captionWrapper.valign').css({
        top: '120px'
      });

      $('.parallaxLetter').css({
        display: 'none'
      });
    });


  }
  else {
    $(window).stellar({
      responsive: true,
      horizontalOffset: 0,
      horizontalScrolling: false
    });
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* fitvids */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('body').fitVids();


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* Isotope */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  var $container = $('.gallery').imagesLoaded(function () {
    $container.isotope({
      // options
    });
  });


  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({filter: filterValue});
  });

  $container.isotope({
    filter: '*' // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
  });


  //    masonry 3 columns
  $(function () {
    var $container2 = $('.blogPostsWrapper');
    // initialize Masonry after all images have loaded
    $container2.imagesLoaded(function () {
      $container2.isotope({
        itemSelector: '.blogPost',
        masonry: {
          columnWidth: '.grid-sizer-blog-3'
        }
      });
    });
  });


  //    masonry 2 columns
  $(function () {
    var $container3 = $('.blogPostsWrapper2');
    // initialize Masonry after all images have loaded
    $container3.imagesLoaded(function () {
      $container3.isotope({
        itemSelector: '.blogPost2',
        masonry: {
          columnWidth: '.grid-sizer-blog-2'
        }
      });
    });
  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* overlay portfolio */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $("a.overlay-ajax").click(function () {
    var url = $(this).attr("href");
    $(".overlay-section").load(url + ' #transmitter');
    $('.overlay-close img').tooltip();
    return false;
  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* smoothscroll */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  smoothScroll.init({
    speed: 1000,
    offset: 70
  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* scrollreveal */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // some code..
  }
  else {
    if (scrollReveal.constructor === Function)
      window.scrollReveal = new scrollReveal();
  }


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* owl-carousels */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $("#owl-team").owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-4x'></i>",
      "<i class='fa fa-angle-right fa-4x'></i>"
    ]
  });


  $("#owl-clients").owlCarousel({
    items: 3,
    navigation: false,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1]
  });


  $("#owl-testimonials").owlCarousel({
    singleItem: true,
    autoPlay: true
  });


  $("#owl-item").owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x itemNav'></i>",
      "<i class='fa fa-angle-right fa-2x itemNav'></i>"
    ]
  });


  $("#owl-featured").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x featuredNav'></i>",
      "<i class='fa fa-angle-right fa-2x featuredNav'></i>"
    ]
  });

  $("#owl-blog-single").owlCarousel({
    singleItem: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x blogNav'></i>",
      "<i class='fa fa-angle-right fa-2x blogNav'></i>"
    ]
  });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* timers */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#text-separator-timers').waypoint(function () {
    "use strict";
    // first timer
    $('.timer1').countTo({

      from: 0, // the number you want to start
      to: 8679, // the number you want to reach
      speed: 4000,
      refreshInterval: 100

    });

    // second timer
    $('.timer2').countTo({

      from: 0,// the number you want to start
      to: 340,// the number you want to reach
      speed: 2500,
      refreshInterval: 50

    });


    // third timer
    $('.timer3').countTo({

      from: 0,// the number you want to start
      to: 100,// the number you want to reach
      speed: 2000,
      refreshInterval: 10
    });


    // fourth timer
    $('.timer4').countTo({

      from: 0,// the number you want to start
      to: 3456,// the number you want to reach
      speed: 4000,
      refreshInterval: 10,


    });


  }, {offset: 500});

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* shortcodes */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
  });

  $('#myTabPills a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

//
//    $('.collapse').collapse();


});
