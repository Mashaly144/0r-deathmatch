var od = Object.defineProperty;
var ad = (e, t, n) =>
  t in e
    ? od(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var po = (e, t, n) => ad(e, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === 'childList')
        for (const s of l.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function Da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ua = { exports: {} },
  Li = {},
  Aa = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mr = Symbol.for('react.element'),
  ud = Symbol.for('react.portal'),
  cd = Symbol.for('react.fragment'),
  dd = Symbol.for('react.strict_mode'),
  fd = Symbol.for('react.profiler'),
  pd = Symbol.for('react.provider'),
  hd = Symbol.for('react.context'),
  gd = Symbol.for('react.forward_ref'),
  md = Symbol.for('react.suspense'),
  vd = Symbol.for('react.memo'),
  yd = Symbol.for('react.lazy'),
  ho = Symbol.iterator;
function xd(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ho && e[ho]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Va = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ba = Object.assign,
  Ha = {};
function Cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ha),
    (this.updater = n || Va);
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Wa() {}
Wa.prototype = Cn.prototype;
function vs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ha),
    (this.updater = n || Va);
}
var ys = (vs.prototype = new Wa());
ys.constructor = vs;
Ba(ys, Cn.prototype);
ys.isPureReactComponent = !0;
var go = Array.isArray,
  Ka = Object.prototype.hasOwnProperty,
  xs = { current: null },
  Qa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ga(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Ka.call(t, r) && !Qa.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), c = 0; c < o; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: mr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: xs.current,
  };
}
function wd(e, t) {
  return {
    $$typeof: mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ws(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === mr;
}
function kd(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mo = /\/+/g;
function Qi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? kd('' + e.key)
    : t.toString(36);
}
function Vr(e, t, n, r, i) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case mr:
          case ud:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + Qi(s, 0) : r),
      go(i)
        ? ((n = ''),
          e != null && (n = e.replace(mo, '$&/') + '/'),
          Vr(i, t, n, '', function (c) {
            return c;
          }))
        : i != null &&
          (ws(i) &&
            (i = wd(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(mo, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), go(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o];
      var a = r + Qi(l, o);
      s += Vr(l, t, n, a, i);
    }
  else if (((a = xd(e)), typeof a == 'function'))
    for (e = a.call(e), o = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Qi(l, o++)), (s += Vr(l, t, n, a, i));
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vr(e, r, '', '', function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function Sd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Br = { transition: null },
  Nd = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Br,
    ReactCurrentOwner: xs,
  };
function Ya() {
  throw Error('act(...) is not supported in production builds of React.');
}
z.Children = {
  map: jr,
  forEach: function (e, t, n) {
    jr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ws(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
z.Component = Cn;
z.Fragment = cd;
z.Profiler = fd;
z.PureComponent = vs;
z.StrictMode = dd;
z.Suspense = md;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nd;
z.act = Ya;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Ba({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = xs.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      Ka.call(t, a) &&
        !Qa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var c = 0; c < a; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: mr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: hd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pd, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Ga;
z.createFactory = function (e) {
  var t = Ga.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: gd, render: e };
};
z.isValidElement = ws;
z.lazy = function (e) {
  return { $$typeof: yd, _payload: { _status: -1, _result: e }, _init: Sd };
};
z.memo = function (e, t) {
  return { $$typeof: vd, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Br.transition;
  Br.transition = {};
  try {
    e();
  } finally {
    Br.transition = t;
  }
};
z.unstable_act = Ya;
z.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return fe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
z.useId = function () {
  return fe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return fe.current.useRef(e);
};
z.useState = function (e) {
  return fe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return fe.current.useTransition();
};
z.version = '18.3.1';
Aa.exports = z;
var T = Aa.exports;
const bt = Da(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = T,
  Cd = Symbol.for('react.element'),
  _d = Symbol.for('react.fragment'),
  Ed = Object.prototype.hasOwnProperty,
  Ld = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ed.call(t, r) && !Pd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Cd,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Ld.current,
  };
}
Li.Fragment = _d;
Li.jsx = Ja;
Li.jsxs = Ja;
Ua.exports = Li;
var u = Ua.exports,
  kl = {},
  Xa = { exports: {} },
  Ne = {},
  Za = { exports: {} },
  qa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, P) {
    var F = C.length;
    C.push(P);
    e: for (; 0 < F; ) {
      var U = (F - 1) >>> 1,
        X = C[U];
      if (0 < i(X, P)) (C[U] = P), (C[F] = X), (F = U);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0],
      F = C.pop();
    if (F !== P) {
      C[0] = F;
      e: for (var U = 0, X = C.length, Sr = X >>> 1; U < Sr; ) {
        var Pt = 2 * (U + 1) - 1,
          Ki = C[Pt],
          Ot = Pt + 1,
          Nr = C[Ot];
        if (0 > i(Ki, F))
          Ot < X && 0 > i(Nr, Ki)
            ? ((C[U] = Nr), (C[Ot] = F), (U = Ot))
            : ((C[U] = Ki), (C[Pt] = F), (U = Pt));
        else if (Ot < X && 0 > i(Nr, F)) (C[U] = Nr), (C[Ot] = F), (U = Ot);
        else break e;
      }
    }
    return P;
  }
  function i(C, P) {
    var F = C.sortIndex - P.sortIndex;
    return F !== 0 ? F : C.id - P.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var a = [],
    c = [],
    p = 1,
    h = null,
    d = 3,
    m = !1,
    x = !1,
    w = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(C) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= C)
        r(c), (P.sortIndex = P.expirationTime), t(a, P);
      else break;
      P = n(c);
    }
  }
  function y(C) {
    if (((w = !1), v(C), !x))
      if (n(a) !== null) (x = !0), rt(S);
      else {
        var P = n(c);
        P !== null && Gt(y, P.startTime - C);
      }
  }
  function S(C, P) {
    (x = !1), w && ((w = !1), g(E), (E = -1)), (m = !0);
    var F = d;
    try {
      for (
        v(P), h = n(a);
        h !== null && (!(h.expirationTime > P) || (C && !ee()));

      ) {
        var U = h.callback;
        if (typeof U == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var X = U(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof X == 'function' ? (h.callback = X) : h === n(a) && r(a),
            v(P);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Sr = !0;
      else {
        var Pt = n(c);
        Pt !== null && Gt(y, Pt.startTime - P), (Sr = !1);
      }
      return Sr;
    } finally {
      (h = null), (d = F), (m = !1);
    }
  }
  var j = !1,
    N = null,
    E = -1,
    V = 5,
    R = -1;
  function ee() {
    return !(e.unstable_now() - R < V);
  }
  function Qt() {
    if (N !== null) {
      var C = e.unstable_now();
      R = C;
      var P = !0;
      try {
        P = N(!0, C);
      } finally {
        P ? Et() : ((j = !1), (N = null));
      }
    } else j = !1;
  }
  var Et;
  if (typeof f == 'function')
    Et = function () {
      f(Qt);
    };
  else if (typeof MessageChannel < 'u') {
    var nt = new MessageChannel(),
      Lt = nt.port2;
    (nt.port1.onmessage = Qt),
      (Et = function () {
        Lt.postMessage(null);
      });
  } else
    Et = function () {
      L(Qt, 0);
    };
  function rt(C) {
    (N = C), j || ((j = !0), Et());
  }
  function Gt(C, P) {
    E = L(function () {
      C(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || m || ((x = !0), rt(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (V = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = d;
      }
      var F = d;
      d = P;
      try {
        return C();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var F = d;
      d = C;
      try {
        return P();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, F) {
      var U = e.unstable_now();
      switch (
        (typeof F == 'object' && F !== null
          ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? U + F : U))
          : (F = U),
        C)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = F + X),
        (C = {
          id: p++,
          callback: P,
          priorityLevel: C,
          startTime: F,
          expirationTime: X,
          sortIndex: -1,
        }),
        F > U
          ? ((C.sortIndex = F),
            t(c, C),
            n(a) === null &&
              C === n(c) &&
              (w ? (g(E), (E = -1)) : (w = !0), Gt(y, F - U)))
          : ((C.sortIndex = X), t(a, C), x || m || ((x = !0), rt(S))),
        C
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (C) {
      var P = d;
      return function () {
        var F = d;
        d = P;
        try {
          return C.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(qa);
Za.exports = qa;
var Od = Za.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = T,
  Se = Od;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var eu = new Set(),
  Zn = {};
function Wt(e, t) {
  yn(e, t), yn(e + 'Capture', t);
}
function yn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) eu.add(t[e]);
}
var Je = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Sl = Object.prototype.hasOwnProperty,
  Rd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vo = {},
  yo = {};
function zd(e) {
  return Sl.call(yo, e)
    ? !0
    : Sl.call(vo, e)
    ? !1
    : Rd.test(e)
    ? (yo[e] = !0)
    : ((vo[e] = !0), !1);
}
function Td(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Id(e, t, n, r) {
  if (t === null || typeof t > 'u' || Td(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var ie = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ks = /[\-:]([a-z])/g;
function Ss(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ks, Ss);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ks, Ss);
    ie[t] = new pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ks, Ss);
  ie[t] = new pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ns(e, t, n, r) {
  var i = ie.hasOwnProperty(t) ? ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Id(t, n, i, r) && (n = null),
    r || i === null
      ? zd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for('react.element'),
  qt = Symbol.for('react.portal'),
  en = Symbol.for('react.fragment'),
  js = Symbol.for('react.strict_mode'),
  Nl = Symbol.for('react.profiler'),
  tu = Symbol.for('react.provider'),
  nu = Symbol.for('react.context'),
  Cs = Symbol.for('react.forward_ref'),
  jl = Symbol.for('react.suspense'),
  Cl = Symbol.for('react.suspense_list'),
  _s = Symbol.for('react.memo'),
  lt = Symbol.for('react.lazy'),
  ru = Symbol.for('react.offscreen'),
  xo = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xo && e[xo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var W = Object.assign,
  Gi;
function Mn(e) {
  if (Gi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gi = (t && t[1]) || '';
    }
  return (
    `
` +
    Gi +
    e
  );
}
var Yi = !1;
function Ji(e, t) {
  if (!e || Yi) return '';
  Yi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var i = c.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          o = l.length - 1;
        1 <= s && 0 <= o && i[s] !== l[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (i[s] !== l[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || i[s] !== l[o])) {
                var a =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (Yi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Mn(e) : '';
}
function bd(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn('Lazy');
    case 13:
      return Mn('Suspense');
    case 19:
      return Mn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ji(e.type, !1)), e;
    case 11:
      return (e = Ji(e.type.render, !1)), e;
    case 1:
      return (e = Ji(e.type, !0)), e;
    default:
      return '';
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case en:
      return 'Fragment';
    case qt:
      return 'Portal';
    case Nl:
      return 'Profiler';
    case js:
      return 'StrictMode';
    case jl:
      return 'Suspense';
    case Cl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case nu:
        return (e.displayName || 'Context') + '.Consumer';
      case tu:
        return (e._context.displayName || 'Context') + '.Provider';
      case Cs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case _s:
        return (
          (t = e.displayName || null), t !== null ? t : _l(e.type) || 'Memo'
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return _l(e(t));
        } catch {}
    }
  return null;
}
function Md(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return _l(t);
    case 8:
      return t === js ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function iu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function $d(e) {
  var t = iu(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = '' + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = $d(e));
}
function lu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = iu(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ei(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function El(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wo(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function su(e, t) {
  (t = t.checked), t != null && Ns(e, 'checked', t, !1);
}
function Ll(e, t) {
  su(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Pl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Pl(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ko(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Pl(e, t, n) {
  (t !== 'number' || ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var $n = Array.isArray;
function fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function So(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function ou(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function No(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function au(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Fl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? au(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Er,
  uu = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement('div'),
          Er.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dd = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Vn).forEach(function (e) {
  Dd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]);
  });
});
function cu(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function du(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = cu(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ud = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Rl(e, t) {
  if (t) {
    if (Ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function zl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Tl = null;
function Es(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Il = null,
  pn = null,
  hn = null;
function jo(e) {
  if ((e = xr(e))) {
    if (typeof Il != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = zi(t)), Il(e.stateNode, e.type, t));
  }
}
function fu(e) {
  pn ? (hn ? hn.push(e) : (hn = [e])) : (pn = e);
}
function pu() {
  if (pn) {
    var e = pn,
      t = hn;
    if (((hn = pn = null), jo(e), t)) for (e = 0; e < t.length; e++) jo(t[e]);
  }
}
function hu(e, t) {
  return e(t);
}
function gu() {}
var Xi = !1;
function mu(e, t, n) {
  if (Xi) return e(t, n);
  Xi = !0;
  try {
    return hu(e, t, n);
  } finally {
    (Xi = !1), (pn !== null || hn !== null) && (gu(), pu());
  }
}
function er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var bl = !1;
if (Je)
  try {
    var Pn = {};
    Object.defineProperty(Pn, 'passive', {
      get: function () {
        bl = !0;
      },
    }),
      window.addEventListener('test', Pn, Pn),
      window.removeEventListener('test', Pn, Pn);
  } catch {
    bl = !1;
  }
function Ad(e, t, n, r, i, l, s, o, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Bn = !1,
  ti = null,
  ni = !1,
  Ml = null,
  Vd = {
    onError: function (e) {
      (Bn = !0), (ti = e);
    },
  };
function Bd(e, t, n, r, i, l, s, o, a) {
  (Bn = !1), (ti = null), Ad.apply(Vd, arguments);
}
function Hd(e, t, n, r, i, l, s, o, a) {
  if ((Bd.apply(this, arguments), Bn)) {
    if (Bn) {
      var c = ti;
      (Bn = !1), (ti = null);
    } else throw Error(k(198));
    ni || ((ni = !0), (Ml = c));
  }
}
function Kt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Co(e) {
  if (Kt(e) !== e) throw Error(k(188));
}
function Wd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Co(i), e;
        if (l === r) return Co(i), t;
        l = l.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, o = i.child; o; ) {
        if (o === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (o === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = l.child; o; ) {
          if (o === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (o === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function yu(e) {
  return (e = Wd(e)), e !== null ? xu(e) : null;
}
function xu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wu = Se.unstable_scheduleCallback,
  _o = Se.unstable_cancelCallback,
  Kd = Se.unstable_shouldYield,
  Qd = Se.unstable_requestPaint,
  Q = Se.unstable_now,
  Gd = Se.unstable_getCurrentPriorityLevel,
  Ls = Se.unstable_ImmediatePriority,
  ku = Se.unstable_UserBlockingPriority,
  ri = Se.unstable_NormalPriority,
  Yd = Se.unstable_LowPriority,
  Su = Se.unstable_IdlePriority,
  Pi = null,
  Ve = null;
function Jd(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == 'function')
    try {
      Ve.onCommitFiberRoot(Pi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : qd,
  Xd = Math.log,
  Zd = Math.LN2;
function qd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xd(e) / Zd) | 0)) | 0;
}
var Lr = 64,
  Pr = 4194304;
function Dn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~i;
    o !== 0 ? (r = Dn(o)) : ((l &= s), l !== 0 && (r = Dn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Dn(s)) : l !== 0 && (r = Dn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ef(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Ie(l),
      o = 1 << s,
      a = i[s];
    a === -1
      ? (!(o & n) || o & r) && (i[s] = ef(o, t))
      : a <= t && (e.expiredLanes |= o),
      (l &= ~o);
  }
}
function $l(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Nu() {
  var e = Lr;
  return (Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e;
}
function Zi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function nf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ie(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Ps(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var b = 0;
function ju(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Cu,
  Os,
  _u,
  Eu,
  Lu,
  Dl = !1,
  Or = [],
  ft = null,
  pt = null,
  ht = null,
  tr = new Map(),
  nr = new Map(),
  ot = [],
  rf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Eo(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ft = null;
      break;
    case 'dragenter':
    case 'dragleave':
      pt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ht = null;
      break;
    case 'pointerover':
    case 'pointerout':
      tr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      nr.delete(t.pointerId);
  }
}
function On(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = xr(t)), t !== null && Os(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function lf(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (ft = On(ft, e, t, n, r, i)), !0;
    case 'dragenter':
      return (pt = On(pt, e, t, n, r, i)), !0;
    case 'mouseover':
      return (ht = On(ht, e, t, n, r, i)), !0;
    case 'pointerover':
      var l = i.pointerId;
      return tr.set(l, On(tr.get(l) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (l = i.pointerId), nr.set(l, On(nr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Pu(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Kt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = vu(n)), t !== null)) {
          (e.blockedOn = t),
            Lu(e.priority, function () {
              _u(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Tl = r), n.target.dispatchEvent(r), (Tl = null);
    } else return (t = xr(n)), t !== null && Os(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lo(e, t, n) {
  Hr(e) && n.delete(t);
}
function sf() {
  (Dl = !1),
    ft !== null && Hr(ft) && (ft = null),
    pt !== null && Hr(pt) && (pt = null),
    ht !== null && Hr(ht) && (ht = null),
    tr.forEach(Lo),
    nr.forEach(Lo);
}
function Fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Dl ||
      ((Dl = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, sf)));
}
function rr(e) {
  function t(i) {
    return Fn(i, e);
  }
  if (0 < Or.length) {
    Fn(Or[0], e);
    for (var n = 1; n < Or.length; n++) {
      var r = Or[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Fn(ft, e),
      pt !== null && Fn(pt, e),
      ht !== null && Fn(ht, e),
      tr.forEach(t),
      nr.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    (r = ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    Pu(n), n.blockedOn === null && ot.shift();
}
var gn = et.ReactCurrentBatchConfig,
  li = !0;
function of(e, t, n, r) {
  var i = b,
    l = gn.transition;
  gn.transition = null;
  try {
    (b = 1), Fs(e, t, n, r);
  } finally {
    (b = i), (gn.transition = l);
  }
}
function af(e, t, n, r) {
  var i = b,
    l = gn.transition;
  gn.transition = null;
  try {
    (b = 4), Fs(e, t, n, r);
  } finally {
    (b = i), (gn.transition = l);
  }
}
function Fs(e, t, n, r) {
  if (li) {
    var i = Ul(e, t, n, r);
    if (i === null) al(e, t, r, si, n), Eo(e, r);
    else if (lf(i, e, t, n, r)) r.stopPropagation();
    else if ((Eo(e, r), t & 4 && -1 < rf.indexOf(e))) {
      for (; i !== null; ) {
        var l = xr(i);
        if (
          (l !== null && Cu(l),
          (l = Ul(e, t, n, r)),
          l === null && al(e, t, r, si, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else al(e, t, r, null, n);
  }
}
var si = null;
function Ul(e, t, n, r) {
  if (((si = null), (e = Es(r)), (e = zt(e)), e !== null))
    if (((t = Kt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = vu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (si = e), null;
}
function Ou(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Gd()) {
        case Ls:
          return 1;
        case ku:
          return 4;
        case ri:
        case Yd:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null,
  Rs = null,
  Wr = null;
function Fu() {
  if (Wr) return Wr;
  var e,
    t = Rs,
    n = t.length,
    r,
    i = 'value' in ut ? ut.value : ut.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Wr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Kr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fr() {
  return !0;
}
function Po() {
  return !1;
}
function je(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Fr
        : Po),
      (this.isPropagationStopped = Po),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fr));
      },
      persist: function () {},
      isPersistent: Fr,
    }),
    t
  );
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zs = je(_n),
  yr = W({}, _n, { view: 0, detail: 0 }),
  uf = je(yr),
  qi,
  el,
  Rn,
  Oi = W({}, yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ts,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Rn &&
            (Rn && e.type === 'mousemove'
              ? ((qi = e.screenX - Rn.screenX), (el = e.screenY - Rn.screenY))
              : (el = qi = 0),
            (Rn = e)),
          qi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : el;
    },
  }),
  Oo = je(Oi),
  cf = W({}, Oi, { dataTransfer: 0 }),
  df = je(cf),
  ff = W({}, yr, { relatedTarget: 0 }),
  tl = je(ff),
  pf = W({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hf = je(pf),
  gf = W({}, _n, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mf = je(gf),
  vf = W({}, _n, { data: 0 }),
  Fo = je(vf),
  yf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  xf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  wf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : !1;
}
function Ts() {
  return kf;
}
var Sf = W({}, yr, {
    key: function (e) {
      if (e.key) {
        var t = yf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Kr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? xf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ts,
    charCode: function (e) {
      return e.type === 'keypress' ? Kr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Kr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Nf = je(Sf),
  jf = W({}, Oi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ro = je(jf),
  Cf = W({}, yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ts,
  }),
  _f = je(Cf),
  Ef = W({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = je(Ef),
  Pf = W({}, Oi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Of = je(Pf),
  Ff = [9, 13, 27, 32],
  Is = Je && 'CompositionEvent' in window,
  Hn = null;
Je && 'documentMode' in document && (Hn = document.documentMode);
var Rf = Je && 'TextEvent' in window && !Hn,
  Ru = Je && (!Is || (Hn && 8 < Hn && 11 >= Hn)),
  zo = ' ',
  To = !1;
function zu(e, t) {
  switch (e) {
    case 'keyup':
      return Ff.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Tu(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var tn = !1;
function zf(e, t) {
  switch (e) {
    case 'compositionend':
      return Tu(t);
    case 'keypress':
      return t.which !== 32 ? null : ((To = !0), zo);
    case 'textInput':
      return (e = t.data), e === zo && To ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (tn)
    return e === 'compositionend' || (!Is && zu(e, t))
      ? ((e = Fu()), (Wr = Rs = ut = null), (tn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ru && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var If = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!If[e.type] : t === 'textarea';
}
function Iu(e, t, n, r) {
  fu(r),
    (t = oi(t, 'onChange')),
    0 < t.length &&
      ((n = new zs('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wn = null,
  ir = null;
function bf(e) {
  Ku(e, 0);
}
function Fi(e) {
  var t = ln(e);
  if (lu(t)) return e;
}
function Mf(e, t) {
  if (e === 'change') return t;
}
var bu = !1;
if (Je) {
  var nl;
  if (Je) {
    var rl = 'oninput' in document;
    if (!rl) {
      var bo = document.createElement('div');
      bo.setAttribute('oninput', 'return;'),
        (rl = typeof bo.oninput == 'function');
    }
    nl = rl;
  } else nl = !1;
  bu = nl && (!document.documentMode || 9 < document.documentMode);
}
function Mo() {
  Wn && (Wn.detachEvent('onpropertychange', Mu), (ir = Wn = null));
}
function Mu(e) {
  if (e.propertyName === 'value' && Fi(ir)) {
    var t = [];
    Iu(t, ir, e, Es(e)), mu(bf, t);
  }
}
function $f(e, t, n) {
  e === 'focusin'
    ? (Mo(), (Wn = t), (ir = n), Wn.attachEvent('onpropertychange', Mu))
    : e === 'focusout' && Mo();
}
function Df(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Fi(ir);
}
function Uf(e, t) {
  if (e === 'click') return Fi(t);
}
function Af(e, t) {
  if (e === 'input' || e === 'change') return Fi(t);
}
function Vf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : Vf;
function lr(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Sl.call(t, i) || !Me(e[i], t[i])) return !1;
  }
  return !0;
}
function $o(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Do(e, t) {
  var n = $o(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $o(n);
  }
}
function $u(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? $u(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Du() {
  for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ei(e.document);
  }
  return t;
}
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Bf(e) {
  var t = Du(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $u(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Do(n, l));
        var s = Do(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hf = Je && 'documentMode' in document && 11 >= document.documentMode,
  nn = null,
  Al = null,
  Kn = null,
  Vl = !1;
function Uo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vl ||
    nn == null ||
    nn !== ei(r) ||
    ((r = nn),
    'selectionStart' in r && bs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Kn && lr(Kn, r)) ||
      ((Kn = r),
      (r = oi(Al, 'onSelect')),
      0 < r.length &&
        ((t = new zs('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = nn))));
}
function Rr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var rn = {
    animationend: Rr('Animation', 'AnimationEnd'),
    animationiteration: Rr('Animation', 'AnimationIteration'),
    animationstart: Rr('Animation', 'AnimationStart'),
    transitionend: Rr('Transition', 'TransitionEnd'),
  },
  il = {},
  Uu = {};
Je &&
  ((Uu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete rn.animationend.animation,
    delete rn.animationiteration.animation,
    delete rn.animationstart.animation),
  'TransitionEvent' in window || delete rn.transitionend.transition);
function Ri(e) {
  if (il[e]) return il[e];
  if (!rn[e]) return e;
  var t = rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uu) return (il[e] = t[n]);
  return e;
}
var Au = Ri('animationend'),
  Vu = Ri('animationiteration'),
  Bu = Ri('animationstart'),
  Hu = Ri('transitionend'),
  Wu = new Map(),
  Ao =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Nt(e, t) {
  Wu.set(e, t), Wt(t, [e]);
}
for (var ll = 0; ll < Ao.length; ll++) {
  var sl = Ao[ll],
    Wf = sl.toLowerCase(),
    Kf = sl[0].toUpperCase() + sl.slice(1);
  Nt(Wf, 'on' + Kf);
}
Nt(Au, 'onAnimationEnd');
Nt(Vu, 'onAnimationIteration');
Nt(Bu, 'onAnimationStart');
Nt('dblclick', 'onDoubleClick');
Nt('focusin', 'onFocus');
Nt('focusout', 'onBlur');
Nt(Hu, 'onTransitionEnd');
yn('onMouseEnter', ['mouseout', 'mouseover']);
yn('onMouseLeave', ['mouseout', 'mouseover']);
yn('onPointerEnter', ['pointerout', 'pointerover']);
yn('onPointerLeave', ['pointerout', 'pointerover']);
Wt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Wt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Wt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Wt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Wt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Wt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Un =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Qf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Un));
function Vo(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Hd(r, t, void 0, e), (e.currentTarget = null);
}
function Ku(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            a = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), a !== l && i.isPropagationStopped())) break e;
          Vo(i, o, c), (l = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (a = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            a !== l && i.isPropagationStopped())
          )
            break e;
          Vo(i, o, c), (l = a);
        }
    }
  }
  if (ni) throw ((e = Ml), (ni = !1), (Ml = null), e);
}
function $(e, t) {
  var n = t[Ql];
  n === void 0 && (n = t[Ql] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Qu(t, e, 2, !1), n.add(r));
}
function ol(e, t, n) {
  var r = 0;
  t && (r |= 4), Qu(n, e, r, t);
}
var zr = '_reactListening' + Math.random().toString(36).slice(2);
function sr(e) {
  if (!e[zr]) {
    (e[zr] = !0),
      eu.forEach(function (n) {
        n !== 'selectionchange' && (Qf.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || ((t[zr] = !0), ol('selectionchange', !1, t));
  }
}
function Qu(e, t, n, r) {
  switch (Ou(t)) {
    case 1:
      var i = of;
      break;
    case 4:
      i = af;
      break;
    default:
      i = Fs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !bl ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function al(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = zt(o)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = l = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  mu(function () {
    var c = l,
      p = Es(n),
      h = [];
    e: {
      var d = Wu.get(e);
      if (d !== void 0) {
        var m = zs,
          x = e;
        switch (e) {
          case 'keypress':
            if (Kr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = Nf;
            break;
          case 'focusin':
            (x = 'focus'), (m = tl);
            break;
          case 'focusout':
            (x = 'blur'), (m = tl);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = tl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Oo;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = df;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = _f;
            break;
          case Au:
          case Vu:
          case Bu:
            m = hf;
            break;
          case Hu:
            m = Lf;
            break;
          case 'scroll':
            m = uf;
            break;
          case 'wheel':
            m = Of;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = mf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Ro;
        }
        var w = (t & 4) !== 0,
          L = !w && e === 'scroll',
          g = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var f = c, v; f !== null; ) {
          v = f;
          var y = v.stateNode;
          if (
            (v.tag === 5 &&
              y !== null &&
              ((v = y),
              g !== null && ((y = er(f, g)), y != null && w.push(or(f, y, v)))),
            L)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((d = new m(d, x, null, n, p)), h.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Tl &&
            (x = n.relatedTarget || n.fromElement) &&
            (zt(x) || x[Xe]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            p.window === p
              ? p
              : (d = p.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((x = n.relatedTarget || n.toElement),
              (m = c),
              (x = x ? zt(x) : null),
              x !== null &&
                ((L = Kt(x)), x !== L || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((m = null), (x = c)),
          m !== x)
        ) {
          if (
            ((w = Oo),
            (y = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Ro),
              (y = 'onPointerLeave'),
              (g = 'onPointerEnter'),
              (f = 'pointer')),
            (L = m == null ? d : ln(m)),
            (v = x == null ? d : ln(x)),
            (d = new w(y, f + 'leave', m, n, p)),
            (d.target = L),
            (d.relatedTarget = v),
            (y = null),
            zt(p) === c &&
              ((w = new w(g, f + 'enter', x, n, p)),
              (w.target = v),
              (w.relatedTarget = L),
              (y = w)),
            (L = y),
            m && x)
          )
            t: {
              for (w = m, g = x, f = 0, v = w; v; v = Yt(v)) f++;
              for (v = 0, y = g; y; y = Yt(y)) v++;
              for (; 0 < f - v; ) (w = Yt(w)), f--;
              for (; 0 < v - f; ) (g = Yt(g)), v--;
              for (; f--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                (w = Yt(w)), (g = Yt(g));
              }
              w = null;
            }
          else w = null;
          m !== null && Bo(h, d, m, w, !1),
            x !== null && L !== null && Bo(h, L, x, w, !0);
        }
      }
      e: {
        if (
          ((d = c ? ln(c) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var S = Mf;
        else if (Io(d))
          if (bu) S = Af;
          else {
            S = Df;
            var j = $f;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = Uf);
        if (S && (S = S(e, c))) {
          Iu(h, S, n, p);
          break e;
        }
        j && j(e, d, c),
          e === 'focusout' &&
            (j = d._wrapperState) &&
            j.controlled &&
            d.type === 'number' &&
            Pl(d, 'number', d.value);
      }
      switch (((j = c ? ln(c) : window), e)) {
        case 'focusin':
          (Io(j) || j.contentEditable === 'true') &&
            ((nn = j), (Al = c), (Kn = null));
          break;
        case 'focusout':
          Kn = Al = nn = null;
          break;
        case 'mousedown':
          Vl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Vl = !1), Uo(h, n, p);
          break;
        case 'selectionchange':
          if (Hf) break;
        case 'keydown':
        case 'keyup':
          Uo(h, n, p);
      }
      var N;
      if (Is)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart';
              break e;
            case 'compositionend':
              E = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              E = 'onCompositionUpdate';
              break e;
          }
          E = void 0;
        }
      else
        tn
          ? zu(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart');
      E &&
        (Ru &&
          n.locale !== 'ko' &&
          (tn || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && tn && (N = Fu())
            : ((ut = p),
              (Rs = 'value' in ut ? ut.value : ut.textContent),
              (tn = !0))),
        (j = oi(c, E)),
        0 < j.length &&
          ((E = new Fo(E, e, null, n, p)),
          h.push({ event: E, listeners: j }),
          N ? (E.data = N) : ((N = Tu(n)), N !== null && (E.data = N)))),
        (N = Rf ? zf(e, n) : Tf(e, n)) &&
          ((c = oi(c, 'onBeforeInput')),
          0 < c.length &&
            ((p = new Fo('onBeforeInput', 'beforeinput', null, n, p)),
            h.push({ event: p, listeners: c }),
            (p.data = N)));
    }
    Ku(h, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = er(e, n)),
      l != null && r.unshift(or(e, l, i)),
      (l = er(e, t)),
      l != null && r.push(or(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bo(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      c = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      i
        ? ((a = er(n, l)), a != null && s.unshift(or(n, a, o)))
        : i || ((a = er(n, l)), a != null && s.push(or(n, a, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gf = /\r\n?/g,
  Yf = /\u0000|\uFFFD/g;
function Ho(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Gf,
      `
`
    )
    .replace(Yf, '');
}
function Tr(e, t, n) {
  if (((t = Ho(t)), Ho(e) !== t && n)) throw Error(k(425));
}
function ai() {}
var Bl = null,
  Hl = null;
function Wl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Kl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Jf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Wo = typeof Promise == 'function' ? Promise : void 0,
  Xf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Wo < 'u'
      ? function (e) {
          return Wo.resolve(null).then(e).catch(Zf);
        }
      : Kl;
function Zf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ul(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), rr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  rr(t);
}
function gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ko(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var En = Math.random().toString(36).slice(2),
  Ue = '__reactFiber$' + En,
  ar = '__reactProps$' + En,
  Xe = '__reactContainer$' + En,
  Ql = '__reactEvents$' + En,
  qf = '__reactListeners$' + En,
  ep = '__reactHandles$' + En;
function zt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ko(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Ko(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xr(e) {
  return (
    (e = e[Ue] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function zi(e) {
  return e[ar] || null;
}
var Gl = [],
  sn = -1;
function jt(e) {
  return { current: e };
}
function D(e) {
  0 > sn || ((e.current = Gl[sn]), (Gl[sn] = null), sn--);
}
function M(e, t) {
  sn++, (Gl[sn] = e.current), (e.current = t);
}
var St = {},
  ae = jt(St),
  me = jt(!1),
  Ut = St;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function ui() {
  D(me), D(ae);
}
function Qo(e, t, n) {
  if (ae.current !== St) throw Error(k(168));
  M(ae, t), M(me, n);
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Md(e) || 'Unknown', i));
  return W({}, n, r);
}
function ci(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Ut = ae.current),
    M(ae, e),
    M(me, me.current),
    !0
  );
}
function Go(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Gu(e, t, Ut)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(me),
      D(ae),
      M(ae, e))
    : D(me),
    M(me, n);
}
var We = null,
  Ti = !1,
  cl = !1;
function Yu(e) {
  We === null ? (We = [e]) : We.push(e);
}
function tp(e) {
  (Ti = !0), Yu(e);
}
function Ct() {
  if (!cl && We !== null) {
    cl = !0;
    var e = 0,
      t = b;
    try {
      var n = We;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (Ti = !1);
    } catch (i) {
      throw (We !== null && (We = We.slice(e + 1)), wu(Ls, Ct), i);
    } finally {
      (b = t), (cl = !1);
    }
  }
  return null;
}
var on = [],
  an = 0,
  di = null,
  fi = 0,
  Ce = [],
  _e = 0,
  At = null,
  Ke = 1,
  Qe = '';
function Ft(e, t) {
  (on[an++] = fi), (on[an++] = di), (di = e), (fi = t);
}
function Ju(e, t, n) {
  (Ce[_e++] = Ke), (Ce[_e++] = Qe), (Ce[_e++] = At), (At = e);
  var r = Ke;
  e = Qe;
  var i = 32 - Ie(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ie(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ke = (1 << (32 - Ie(t) + i)) | (n << i) | r),
      (Qe = l + e);
  } else (Ke = (1 << l) | (n << i) | r), (Qe = e);
}
function Ms(e) {
  e.return !== null && (Ft(e, 1), Ju(e, 1, 0));
}
function $s(e) {
  for (; e === di; )
    (di = on[--an]), (on[an] = null), (fi = on[--an]), (on[an] = null);
  for (; e === At; )
    (At = Ce[--_e]),
      (Ce[_e] = null),
      (Qe = Ce[--_e]),
      (Ce[_e] = null),
      (Ke = Ce[--_e]),
      (Ce[_e] = null);
}
var ke = null,
  we = null,
  A = !1,
  Te = null;
function Xu(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (we = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = At !== null ? { id: Ke, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jl(e) {
  if (A) {
    var t = we;
    if (t) {
      var n = t;
      if (!Yo(e, t)) {
        if (Yl(e)) throw Error(k(418));
        t = gt(n.nextSibling);
        var r = ke;
        t && Yo(e, t)
          ? Xu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ke = e));
      }
    } else {
      if (Yl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (ke = e);
    }
  }
}
function Jo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Ir(e) {
  if (e !== ke) return !1;
  if (!A) return Jo(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Wl(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Yl(e)) throw (Zu(), Error(k(418)));
    for (; t; ) Xu(e, t), (t = gt(t.nextSibling));
  }
  if ((Jo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              we = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Zu() {
  for (var e = we; e; ) e = gt(e.nextSibling);
}
function wn() {
  (we = ke = null), (A = !1);
}
function Ds(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var np = et.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        l = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var o = i.refs;
            s === null ? delete o[l] : (o[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Xo(e) {
  var t = e._init;
  return t(e._payload);
}
function qu(e) {
  function t(g, f) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [f]), (g.flags |= 16)) : v.push(f);
    }
  }
  function n(g, f) {
    if (!e) return null;
    for (; f !== null; ) t(g, f), (f = f.sibling);
    return null;
  }
  function r(g, f) {
    for (g = new Map(); f !== null; )
      f.key !== null ? g.set(f.key, f) : g.set(f.index, f), (f = f.sibling);
    return g;
  }
  function i(g, f) {
    return (g = xt(g, f)), (g.index = 0), (g.sibling = null), g;
  }
  function l(g, f, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((g.flags |= 2), f) : v)
            : ((g.flags |= 2), f))
        : ((g.flags |= 1048576), f)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, f, v, y) {
    return f === null || f.tag !== 6
      ? ((f = vl(v, g.mode, y)), (f.return = g), f)
      : ((f = i(f, v)), (f.return = g), f);
  }
  function a(g, f, v, y) {
    var S = v.type;
    return S === en
      ? p(g, f, v.props.children, y, v.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === lt &&
            Xo(S) === f.type))
      ? ((y = i(f, v.props)), (y.ref = zn(g, f, v)), (y.return = g), y)
      : ((y = qr(v.type, v.key, v.props, null, g.mode, y)),
        (y.ref = zn(g, f, v)),
        (y.return = g),
        y);
  }
  function c(g, f, v, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = yl(v, g.mode, y)), (f.return = g), f)
      : ((f = i(f, v.children || [])), (f.return = g), f);
  }
  function p(g, f, v, y, S) {
    return f === null || f.tag !== 7
      ? ((f = $t(v, g.mode, y, S)), (f.return = g), f)
      : ((f = i(f, v)), (f.return = g), f);
  }
  function h(g, f, v) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = vl('' + f, g.mode, v)), (f.return = g), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Cr:
          return (
            (v = qr(f.type, f.key, f.props, null, g.mode, v)),
            (v.ref = zn(g, null, f)),
            (v.return = g),
            v
          );
        case qt:
          return (f = yl(f, g.mode, v)), (f.return = g), f;
        case lt:
          var y = f._init;
          return h(g, y(f._payload), v);
      }
      if ($n(f) || Ln(f))
        return (f = $t(f, g.mode, v, null)), (f.return = g), f;
      br(g, f);
    }
    return null;
  }
  function d(g, f, v, y) {
    var S = f !== null ? f.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return S !== null ? null : o(g, f, '' + v, y);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Cr:
          return v.key === S ? a(g, f, v, y) : null;
        case qt:
          return v.key === S ? c(g, f, v, y) : null;
        case lt:
          return (S = v._init), d(g, f, S(v._payload), y);
      }
      if ($n(v) || Ln(v)) return S !== null ? null : p(g, f, v, y, null);
      br(g, v);
    }
    return null;
  }
  function m(g, f, v, y, S) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (g = g.get(v) || null), o(f, g, '' + y, S);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Cr:
          return (g = g.get(y.key === null ? v : y.key) || null), a(f, g, y, S);
        case qt:
          return (g = g.get(y.key === null ? v : y.key) || null), c(f, g, y, S);
        case lt:
          var j = y._init;
          return m(g, f, v, j(y._payload), S);
      }
      if ($n(y) || Ln(y)) return (g = g.get(v) || null), p(f, g, y, S, null);
      br(f, y);
    }
    return null;
  }
  function x(g, f, v, y) {
    for (
      var S = null, j = null, N = f, E = (f = 0), V = null;
      N !== null && E < v.length;
      E++
    ) {
      N.index > E ? ((V = N), (N = null)) : (V = N.sibling);
      var R = d(g, N, v[E], y);
      if (R === null) {
        N === null && (N = V);
        break;
      }
      e && N && R.alternate === null && t(g, N),
        (f = l(R, f, E)),
        j === null ? (S = R) : (j.sibling = R),
        (j = R),
        (N = V);
    }
    if (E === v.length) return n(g, N), A && Ft(g, E), S;
    if (N === null) {
      for (; E < v.length; E++)
        (N = h(g, v[E], y)),
          N !== null &&
            ((f = l(N, f, E)), j === null ? (S = N) : (j.sibling = N), (j = N));
      return A && Ft(g, E), S;
    }
    for (N = r(g, N); E < v.length; E++)
      (V = m(N, g, E, v[E], y)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? E : V.key),
          (f = l(V, f, E)),
          j === null ? (S = V) : (j.sibling = V),
          (j = V));
    return (
      e &&
        N.forEach(function (ee) {
          return t(g, ee);
        }),
      A && Ft(g, E),
      S
    );
  }
  function w(g, f, v, y) {
    var S = Ln(v);
    if (typeof S != 'function') throw Error(k(150));
    if (((v = S.call(v)), v == null)) throw Error(k(151));
    for (
      var j = (S = null), N = f, E = (f = 0), V = null, R = v.next();
      N !== null && !R.done;
      E++, R = v.next()
    ) {
      N.index > E ? ((V = N), (N = null)) : (V = N.sibling);
      var ee = d(g, N, R.value, y);
      if (ee === null) {
        N === null && (N = V);
        break;
      }
      e && N && ee.alternate === null && t(g, N),
        (f = l(ee, f, E)),
        j === null ? (S = ee) : (j.sibling = ee),
        (j = ee),
        (N = V);
    }
    if (R.done) return n(g, N), A && Ft(g, E), S;
    if (N === null) {
      for (; !R.done; E++, R = v.next())
        (R = h(g, R.value, y)),
          R !== null &&
            ((f = l(R, f, E)), j === null ? (S = R) : (j.sibling = R), (j = R));
      return A && Ft(g, E), S;
    }
    for (N = r(g, N); !R.done; E++, R = v.next())
      (R = m(N, g, E, R.value, y)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? E : R.key),
          (f = l(R, f, E)),
          j === null ? (S = R) : (j.sibling = R),
          (j = R));
    return (
      e &&
        N.forEach(function (Qt) {
          return t(g, Qt);
        }),
      A && Ft(g, E),
      S
    );
  }
  function L(g, f, v, y) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === en &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Cr:
          e: {
            for (var S = v.key, j = f; j !== null; ) {
              if (j.key === S) {
                if (((S = v.type), S === en)) {
                  if (j.tag === 7) {
                    n(g, j.sibling),
                      (f = i(j, v.props.children)),
                      (f.return = g),
                      (g = f);
                    break e;
                  }
                } else if (
                  j.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === lt &&
                    Xo(S) === j.type)
                ) {
                  n(g, j.sibling),
                    (f = i(j, v.props)),
                    (f.ref = zn(g, j, v)),
                    (f.return = g),
                    (g = f);
                  break e;
                }
                n(g, j);
                break;
              } else t(g, j);
              j = j.sibling;
            }
            v.type === en
              ? ((f = $t(v.props.children, g.mode, y, v.key)),
                (f.return = g),
                (g = f))
              : ((y = qr(v.type, v.key, v.props, null, g.mode, y)),
                (y.ref = zn(g, f, v)),
                (y.return = g),
                (g = y));
          }
          return s(g);
        case qt:
          e: {
            for (j = v.key; f !== null; ) {
              if (f.key === j)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(g, f.sibling),
                    (f = i(f, v.children || [])),
                    (f.return = g),
                    (g = f);
                  break e;
                } else {
                  n(g, f);
                  break;
                }
              else t(g, f);
              f = f.sibling;
            }
            (f = yl(v, g.mode, y)), (f.return = g), (g = f);
          }
          return s(g);
        case lt:
          return (j = v._init), L(g, f, j(v._payload), y);
      }
      if ($n(v)) return x(g, f, v, y);
      if (Ln(v)) return w(g, f, v, y);
      br(g, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        f !== null && f.tag === 6
          ? (n(g, f.sibling), (f = i(f, v)), (f.return = g), (g = f))
          : (n(g, f), (f = vl(v, g.mode, y)), (f.return = g), (g = f)),
        s(g))
      : n(g, f);
  }
  return L;
}
var kn = qu(!0),
  ec = qu(!1),
  pi = jt(null),
  hi = null,
  un = null,
  Us = null;
function As() {
  Us = un = hi = null;
}
function Vs(e) {
  var t = pi.current;
  D(pi), (e._currentValue = t);
}
function Xl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mn(e, t) {
  (hi = e),
    (Us = un = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (Us !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), un === null)) {
      if (hi === null) throw Error(k(308));
      (un = e), (hi.dependencies = { lanes: 0, firstContext: e });
    } else un = un.next = e;
  return t;
}
var Tt = null;
function Bs(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function tc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Bs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function Hs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Bs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ps(e, n);
  }
}
function Zo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function gi(e, t, n, r) {
  var i = e.updateQueue;
  st = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      c = a.next;
    (a.next = null), s === null ? (l = c) : (s.next = c), (s = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (o = p.lastBaseUpdate),
      o !== s &&
        (o === null ? (p.firstBaseUpdate = c) : (o.next = c),
        (p.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var h = i.baseState;
    (s = 0), (p = c = a = null), (o = l);
    do {
      var d = o.lane,
        m = o.eventTime;
      if ((r & d) === d) {
        p !== null &&
          (p = p.next =
            {
              eventTime: m,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var x = e,
            w = o;
          switch (((d = t), (m = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == 'function')) {
                h = x.call(m, h, d);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (d = typeof x == 'function' ? x.call(m, h, d) : x),
                d == null)
              )
                break e;
              h = W({}, h, d);
              break e;
            case 2:
              st = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [o]) : d.push(o));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          p === null ? ((c = p = m), (a = h)) : (p = p.next = m),
          (s |= d);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (d = o),
          (o = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Bt |= s), (e.lanes = s), (e.memoizedState = h);
  }
}
function qo(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var wr = {},
  Be = jt(wr),
  ur = jt(wr),
  cr = jt(wr);
function It(e) {
  if (e === wr) throw Error(k(174));
  return e;
}
function Ws(e, t) {
  switch ((M(cr, t), M(ur, e), M(Be, wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  D(Be), M(Be, t);
}
function Sn() {
  D(Be), D(ur), D(cr);
}
function rc(e) {
  It(cr.current);
  var t = It(Be.current),
    n = Fl(t, e.type);
  t !== n && (M(ur, e), M(Be, n));
}
function Ks(e) {
  ur.current === e && (D(Be), D(ur));
}
var B = jt(0);
function mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var dl = [];
function Qs() {
  for (var e = 0; e < dl.length; e++)
    dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var Gr = et.ReactCurrentDispatcher,
  fl = et.ReactCurrentBatchConfig,
  Vt = 0,
  H = null,
  Y = null,
  Z = null,
  vi = !1,
  Qn = !1,
  dr = 0,
  rp = 0;
function le() {
  throw Error(k(321));
}
function Gs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Ys(e, t, n, r, i, l) {
  if (
    ((Vt = l),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gr.current = e === null || e.memoizedState === null ? op : ap),
    (e = n(r, i)),
    Qn)
  ) {
    l = 0;
    do {
      if (((Qn = !1), (dr = 0), 25 <= l)) throw Error(k(301));
      (l += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (Gr.current = up),
        (e = n(r, i));
    } while (Qn);
  }
  if (
    ((Gr.current = yi),
    (t = Y !== null && Y.next !== null),
    (Vt = 0),
    (Z = Y = H = null),
    (vi = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Js() {
  var e = dr !== 0;
  return (dr = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (H.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Oe() {
  if (Y === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? H.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(k(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (H.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function fr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function pl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = Y,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var o = (s = null),
      a = null,
      c = l;
    do {
      var p = c.lane;
      if ((Vt & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((o = a = h), (s = r)) : (a = a.next = h),
          (H.lanes |= p),
          (Bt |= p);
      }
      c = c.next;
    } while (c !== null && c !== l);
    a === null ? (s = r) : (a.next = o),
      Me(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (H.lanes |= l), (Bt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Me(l, t.memoizedState) || (ge = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function ic() {}
function lc(e, t) {
  var n = H,
    r = Oe(),
    i = t(),
    l = !Me(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ge = !0)),
    (r = r.queue),
    Xs(ac.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      pr(9, oc.bind(null, n, r, i, t), void 0, null),
      q === null)
    )
      throw Error(k(349));
    Vt & 30 || sc(n, t, i);
  }
  return i;
}
function sc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function oc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), uc(t) && cc(e);
}
function ac(e, t, n) {
  return n(function () {
    uc(t) && cc(e);
  });
}
function uc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function cc(e) {
  var t = Ze(e, 1);
  t !== null && be(t, e, 1, -1);
}
function ea(e) {
  var t = De();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sp.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dc() {
  return Oe().memoizedState;
}
function Yr(e, t, n, r) {
  var i = De();
  (H.flags |= e),
    (i.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ii(e, t, n, r) {
  var i = Oe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Y !== null) {
    var s = Y.memoizedState;
    if (((l = s.destroy), r !== null && Gs(r, s.deps))) {
      i.memoizedState = pr(t, n, l, r);
      return;
    }
  }
  (H.flags |= e), (i.memoizedState = pr(1 | t, n, l, r));
}
function ta(e, t) {
  return Yr(8390656, 8, e, t);
}
function Xs(e, t) {
  return Ii(2048, 8, e, t);
}
function fc(e, t) {
  return Ii(4, 2, e, t);
}
function pc(e, t) {
  return Ii(4, 4, e, t);
}
function hc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ii(4, 4, hc.bind(null, t, e), n)
  );
}
function Zs() {}
function mc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yc(e, t, n) {
  return Vt & 21
    ? (Me(n, t) || ((n = Nu()), (H.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function ip(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fl.transition;
  fl.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (fl.transition = r);
  }
}
function xc() {
  return Oe().memoizedState;
}
function lp(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wc(e))
  )
    kc(t, n);
  else if (((n = tc(e, t, n, r)), n !== null)) {
    var i = de();
    be(n, e, r, i), Sc(n, t, r);
  }
}
function sp(e, t, n) {
  var r = yt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wc(e)) kc(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          o = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), Me(o, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Bs(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = tc(e, t, i, r)),
      n !== null && ((i = de()), be(n, e, r, i), Sc(n, t, r));
  }
}
function wc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function kc(e, t) {
  Qn = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ps(e, n);
  }
}
var yi = {
    readContext: Pe,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: ta,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yr(4194308, 4, hc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lp.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ea,
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = ea(!1),
        t = e[0];
      return (e = ip.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        i = De();
      if (A) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(k(349));
        Vt & 30 || sc(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        ta(ac.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        pr(9, oc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = q.identifierPrefix;
      if (A) {
        var n = Qe,
          r = Ke;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = dr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = rp++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ap = {
    readContext: Pe,
    useCallback: mc,
    useContext: Pe,
    useEffect: Xs,
    useImperativeHandle: gc,
    useInsertionEffect: fc,
    useLayoutEffect: pc,
    useMemo: vc,
    useReducer: pl,
    useRef: dc,
    useState: function () {
      return pl(fr);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = Oe();
      return yc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(fr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: ic,
    useSyncExternalStore: lc,
    useId: xc,
    unstable_isNewReconciler: !1,
  },
  up = {
    readContext: Pe,
    useCallback: mc,
    useContext: Pe,
    useEffect: Xs,
    useImperativeHandle: gc,
    useInsertionEffect: fc,
    useLayoutEffect: pc,
    useMemo: vc,
    useReducer: hl,
    useRef: dc,
    useState: function () {
      return hl(fr);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = Oe();
      return Y === null ? (t.memoizedState = e) : yc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(fr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: ic,
    useSyncExternalStore: lc,
    useId: xc,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = yt(e),
      l = Ge(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = mt(e, l, i)),
      t !== null && (be(t, e, i, r), Qr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = yt(e),
      l = Ge(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = mt(e, l, i)),
      t !== null && (be(t, e, i, r), Qr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = yt(e),
      i = Ge(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = mt(e, i, r)),
      t !== null && (be(t, e, r, n), Qr(t, e, r));
  },
};
function na(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !lr(n, r) || !lr(i, l)
      : !0
  );
}
function Nc(e, t, n) {
  var r = !1,
    i = St,
    l = t.contextType;
  return (
    typeof l == 'object' && l !== null
      ? (l = Pe(l))
      : ((i = ve(t) ? Ut : ae.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? xn(e, i) : St)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ra(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bi.enqueueReplaceState(t, t.state, null);
}
function ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Hs(e);
  var l = t.contextType;
  typeof l == 'object' && l !== null
    ? (i.context = Pe(l))
    : ((l = ve(t) ? Ut : ae.current), (i.context = xn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (Zl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && bi.enqueueReplaceState(i, i.state, null),
      gi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += bd(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function es(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var cp = typeof WeakMap == 'function' ? WeakMap : Map;
function jc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wi || ((wi = !0), (cs = r)), es(e, t);
    }),
    n
  );
}
function Cc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        es(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        es(e, t),
          typeof r != 'function' &&
            (vt === null ? (vt = new Set([this])) : vt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = jp.bind(null, e, t, n)), t.then(e, e));
}
function la(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dp = et.ReactCurrentOwner,
  ge = !1;
function ce(e, t, n, r) {
  t.child = e === null ? ec(t, null, n, r) : kn(t, e.child, n, r);
}
function oa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    mn(t, i),
    (r = Ys(e, t, n, r, l, i)),
    (n = Js()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        qe(e, t, i))
      : (A && n && Ms(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function aa(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == 'function' &&
      !so(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), _c(e, t, l, r, i))
      : ((e = qr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : lr), n(s, r) && e.ref === t.ref)
    )
      return qe(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = xt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _c(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (lr(l, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), qe(e, t, i);
  }
  return ts(e, t, n, r, i);
}
function Ec(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(dn, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(dn, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        M(dn, xe),
        (xe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(dn, xe),
      (xe |= r);
  return ce(e, t, i, n), t.child;
}
function Lc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ts(e, t, n, r, i) {
  var l = ve(n) ? Ut : ae.current;
  return (
    (l = xn(t, l)),
    mn(t, i),
    (n = Ys(e, t, n, r, l, i)),
    (r = Js()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        qe(e, t, i))
      : (A && r && Ms(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function ua(e, t, n, r, i) {
  if (ve(n)) {
    var l = !0;
    ci(t);
  } else l = !1;
  if ((mn(t, i), t.stateNode === null))
    Jr(e, t), Nc(t, n, r), ql(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var a = s.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = Pe(c))
      : ((c = ve(n) ? Ut : ae.current), (c = xn(t, c)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((o !== r || a !== c) && ra(t, s, r, c)),
      (st = !1);
    var d = t.memoizedState;
    (s.state = d),
      gi(t, r, s, i),
      (a = t.memoizedState),
      o !== r || d !== a || me.current || st
        ? (typeof p == 'function' && (Zl(t, n, p, r), (a = t.memoizedState)),
          (o = st || na(t, n, o, r, d, a, c))
            ? (h ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = c),
          (r = o))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      nc(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Re(t.type, o)),
      (s.props = c),
      (h = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Pe(a))
        : ((a = ve(n) ? Ut : ae.current), (a = xn(t, a)));
    var m = n.getDerivedStateFromProps;
    (p =
      typeof m == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((o !== h || d !== a) && ra(t, s, r, a)),
      (st = !1),
      (d = t.memoizedState),
      (s.state = d),
      gi(t, r, s, i);
    var x = t.memoizedState;
    o !== h || d !== x || me.current || st
      ? (typeof m == 'function' && (Zl(t, n, m, r), (x = t.memoizedState)),
        (c = st || na(t, n, c, r, d, x, a) || !1)
          ? (p ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, x, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, x, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = a),
        (r = c))
      : (typeof s.componentDidUpdate != 'function' ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ns(e, t, n, r, l, i);
}
function ns(e, t, n, r, i, l) {
  Lc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Go(t, n, !1), qe(e, t, l);
  (r = t.stateNode), (dp.current = t);
  var o =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = kn(t, e.child, null, l)), (t.child = kn(t, null, o, l)))
      : ce(e, t, o, l),
    (t.memoizedState = r.state),
    i && Go(t, n, !0),
    t.child
  );
}
function Pc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qo(e, t.context, !1),
    Ws(e, t.containerInfo);
}
function ca(e, t, n, r, i) {
  return wn(), Ds(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oc(e, t, n) {
  var r = t.pendingProps,
    i = B.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    M(B, i & 1),
    e === null)
  )
    return (
      Jl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Di(s, r, 0, null)),
              (e = $t(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = is(n)),
              (t.memoizedState = rs),
              e)
            : qs(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return fp(e, t, s, r, o, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (o = i.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = xt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (l = xt(o, l)) : ((l = $t(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? is(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = rs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = xt(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qs(e, t) {
  return (
    (t = Di({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && Ds(r),
    kn(t, e.child, null, n),
    (e = qs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fp(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gl(Error(k(422)))), Mr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Di({ mode: 'visible', children: r.children }, i, 0, null)),
        (l = $t(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && kn(t, e.child, null, s),
        (t.child.memoizedState = is(s)),
        (t.memoizedState = rs),
        l);
  if (!(t.mode & 1)) return Mr(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (l = Error(k(419))), (r = gl(l, r, void 0)), Mr(e, t, s, r);
  }
  if (((o = (s & e.childLanes) !== 0), ge || o)) {
    if (((r = q), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), Ze(e, i), be(r, e, i, -1));
    }
    return lo(), (r = gl(Error(k(421)))), Mr(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (we = gt(i.nextSibling)),
      (ke = t),
      (A = !0),
      (Te = null),
      e !== null &&
        ((Ce[_e++] = Ke),
        (Ce[_e++] = Qe),
        (Ce[_e++] = At),
        (Ke = e.id),
        (Qe = e.overflow),
        (At = t)),
      (t = qs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function da(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xl(e.return, t, n);
}
function ml(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Fc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && da(e, n, t);
        else if (e.tag === 19) da(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && mi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ml(t, !1, i, n, l);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ml(t, !0, n, null, l);
        break;
      case 'together':
        ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Jr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function pp(e, t, n) {
  switch (t.tag) {
    case 3:
      Pc(t), wn();
      break;
    case 5:
      rc(t);
      break;
    case 1:
      ve(t.type) && ci(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      M(pi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Oc(e, t, n)
          : (M(B, B.current & 1),
            (e = qe(e, t, n)),
            e !== null ? e.sibling : null);
      M(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        M(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ec(e, t, n);
  }
  return qe(e, t, n);
}
var Rc, ls, zc, Tc;
Rc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ls = function () {};
zc = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), It(Be.current);
    var l = null;
    switch (n) {
      case 'input':
        (i = El(e, i)), (r = El(e, r)), (l = []);
        break;
      case 'select':
        (i = W({}, i, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (l = []);
        break;
      case 'textarea':
        (i = Ol(e, i)), (r = Ol(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ai);
    }
    Rl(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === 'style') {
          var o = i[c];
          for (s in o) o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Zn.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((o = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && a !== o && (a != null || o != null))
      )
        if (c === 'style')
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in a)
              a.hasOwnProperty(s) &&
                o[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (l || (l = []), l.push(c, n)), (n = a);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (l = l || []).push(c, a))
            : c === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (l = l || []).push(c, '' + a)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Zn.hasOwnProperty(c)
                ? (a != null && c === 'onScroll' && $('scroll', e),
                  l || o === a || (l = []))
                : (l = l || []).push(c, a));
    }
    n && (l = l || []).push('style', n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Tc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hp(e, t, n) {
  var r = t.pendingProps;
  switch (($s(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ve(t.type) && ui(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Sn(),
        D(me),
        D(ae),
        Qs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (ps(Te), (Te = null)))),
        ls(e, t),
        se(t),
        null
      );
    case 5:
      Ks(t);
      var i = It(cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zc(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return se(t), null;
        }
        if (((e = It(Be.current)), Ir(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ue] = t), (r[ar] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              $('cancel', r), $('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              $('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Un.length; i++) $(Un[i], r);
              break;
            case 'source':
              $('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              $('error', r), $('load', r);
              break;
            case 'details':
              $('toggle', r);
              break;
            case 'input':
              wo(r, l), $('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                $('invalid', r);
              break;
            case 'textarea':
              So(r, l), $('invalid', r);
          }
          Rl(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var o = l[s];
              s === 'children'
                ? typeof o == 'string'
                  ? r.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, o, e),
                    (i = ['children', o]))
                  : typeof o == 'number' &&
                    r.textContent !== '' + o &&
                    (l.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, o, e),
                    (i = ['children', '' + o]))
                : Zn.hasOwnProperty(s) &&
                  o != null &&
                  s === 'onScroll' &&
                  $('scroll', r);
            }
          switch (n) {
            case 'input':
              _r(r), ko(r, l, !0);
              break;
            case 'textarea':
              _r(r), No(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof l.onClick == 'function' && (r.onclick = ai);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = au(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ue] = t),
            (e[ar] = r),
            Rc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = zl(n, r)), n)) {
              case 'dialog':
                $('cancel', e), $('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                $('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Un.length; i++) $(Un[i], e);
                i = r;
                break;
              case 'source':
                $('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                $('error', e), $('load', e), (i = r);
                break;
              case 'details':
                $('toggle', e), (i = r);
                break;
              case 'input':
                wo(e, r), (i = El(e, r)), $('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = W({}, r, { value: void 0 })),
                  $('invalid', e);
                break;
              case 'textarea':
                So(e, r), (i = Ol(e, r)), $('invalid', e);
                break;
              default:
                i = r;
            }
            Rl(n, i), (o = i);
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var a = o[l];
                l === 'style'
                  ? du(e, a)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && uu(e, a))
                  : l === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && qn(e, a)
                    : typeof a == 'number' && qn(e, '' + a)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (Zn.hasOwnProperty(l)
                      ? a != null && l === 'onScroll' && $('scroll', e)
                      : a != null && Ns(e, l, a, s));
              }
            switch (n) {
              case 'input':
                _r(e), ko(e, r, !1);
                break;
              case 'textarea':
                _r(e), No(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + kt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? fn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = ai);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = It(cr.current)), It(Be.current), Ir(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (l = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (D(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && we !== null && t.mode & 1 && !(t.flags & 128))
          Zu(), wn(), (t.flags |= 98560), (l = !1);
        else if (((l = Ir(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(k(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(k(317));
            l[Ue] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (l = !1);
        } else Te !== null && (ps(Te), (Te = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : lo())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        Sn(), ls(e, t), e === null && sr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return Vs(t.type._context), se(t), null;
    case 17:
      return ve(t.type) && ui(), se(t), null;
    case 19:
      if ((D(B), (l = t.memoizedState), l === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Tn(l, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Tn(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Q() > jn &&
            ((t.flags |= 128), (r = !0), Tn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !s.alternate && !A)
            )
              return se(t), null;
          } else
            2 * Q() - l.renderingStartTime > jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Q()),
          (t.sibling = null),
          (n = B.current),
          M(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        io(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function gp(e, t) {
  switch (($s(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Sn(),
        D(me),
        D(ae),
        Qs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ks(t), null;
    case 13:
      if ((D(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D(B), null;
    case 4:
      return Sn(), null;
    case 10:
      return Vs(t.type._context), null;
    case 22:
    case 23:
      return io(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $r = !1,
  oe = !1,
  mp = typeof WeakSet == 'function' ? WeakSet : Set,
  _ = null;
function cn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function ss(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var fa = !1;
function vp(e, t) {
  if (((Bl = li), (e = Du()), bs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            o = -1,
            a = -1,
            c = 0,
            p = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              h !== n || (i !== 0 && h.nodeType !== 3) || (o = s + i),
                h !== l || (r !== 0 && h.nodeType !== 3) || (a = s + r),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (d = h), (h = m);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++c === i && (o = s),
                d === l && ++p === r && (a = s),
                (m = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = m;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hl = { focusedElem: e, selectionRange: n }, li = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    L = x.memoizedState,
                    g = t.stateNode,
                    f = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Re(t.type, w),
                      L
                    );
                  g.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (y) {
          K(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = fa), (fa = !1), x;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && ss(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Mi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ic(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[ar], delete t[Ql], delete t[qf], delete t[ep])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function as(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ai));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), (e = e.sibling);
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), (e = e.sibling);
}
var te = null,
  ze = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) Mc(e, t, n), (n = n.sibling);
}
function Mc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
    try {
      Ve.onCommitFiberUnmount(Pi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || cn(n, t);
    case 6:
      var r = te,
        i = ze;
      (te = null),
        it(e, t, n),
        (te = r),
        (ze = i),
        te !== null &&
          (ze
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (ze
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? ul(e.parentNode, n)
              : e.nodeType === 1 && ul(e, n),
            rr(e))
          : ul(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (i = ze),
        (te = n.stateNode.containerInfo),
        (ze = !0),
        it(e, t, n),
        (te = r),
        (ze = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && ss(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (cn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          K(n, t, o);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), it(e, t, n), (oe = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function ha(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mp()),
      t.forEach(function (r) {
        var i = _p.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (te = o.stateNode), (ze = !1);
              break e;
            case 3:
              (te = o.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (te = o.stateNode.containerInfo), (ze = !0);
              break e;
          }
          o = o.return;
        }
        if (te === null) throw Error(k(160));
        Mc(l, s, i), (te = null), (ze = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (c) {
        K(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $c(t, e), (t = t.sibling);
}
function $c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), $e(e), r & 4)) {
        try {
          Gn(3, e, e.return), Mi(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          Gn(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      Fe(t, e), $e(e), r & 512 && n !== null && cn(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        $e(e),
        r & 512 && n !== null && cn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qn(i, '');
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === 'input' && l.type === 'radio' && l.name != null && su(i, l),
              zl(o, s);
            var c = zl(o, l);
            for (s = 0; s < a.length; s += 2) {
              var p = a[s],
                h = a[s + 1];
              p === 'style'
                ? du(i, h)
                : p === 'dangerouslySetInnerHTML'
                ? uu(i, h)
                : p === 'children'
                ? qn(i, h)
                : Ns(i, p, h, c);
            }
            switch (o) {
              case 'input':
                Ll(i, l);
                break;
              case 'textarea':
                ou(i, l);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var m = l.value;
                m != null
                  ? fn(i, !!l.multiple, m, !1)
                  : d !== !!l.multiple &&
                    (l.defaultValue != null
                      ? fn(i, !!l.multiple, l.defaultValue, !0)
                      : fn(i, !!l.multiple, l.multiple ? [] : '', !1));
            }
            i[ar] = l;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          rr(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      Fe(t, e), $e(e);
      break;
    case 13:
      Fe(t, e),
        $e(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (no = Q())),
        r & 4 && ha(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (c = oe) || p), Fe(t, e), (oe = c)) : Fe(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (h = _ = p; _ !== null; ) {
              switch (((d = _), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, d, d.return);
                  break;
                case 1:
                  cn(d, d.return);
                  var x = d.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      K(r, n, w);
                    }
                  }
                  break;
                case 5:
                  cn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ma(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (_ = m)) : ma(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (i = h.stateNode),
                  c
                    ? ((l = i.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((o = h.stateNode),
                      (a = h.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (o.style.display = cu('display', s)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), $e(e), r & 4 && ha(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qn(i, ''), (r.flags &= -33));
          var l = pa(e);
          us(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = pa(e);
          as(e, o, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yp(e, t, n) {
  (_ = e), Dc(e);
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var i = _,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || $r;
      if (!s) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || oe;
        o = $r;
        var c = oe;
        if ((($r = s), (oe = a) && !c))
          for (_ = i; _ !== null; )
            (s = _),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? va(i)
                : a !== null
                ? ((a.return = s), (_ = a))
                : va(i);
        for (; l !== null; ) (_ = l), Dc(l), (l = l.sibling);
        (_ = i), ($r = o), (oe = c);
      }
      ga(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (_ = l)) : ga(e);
  }
}
function ga(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || Mi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && qo(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qo(t, s, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && rr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        oe || (t.flags & 512 && os(t));
      } catch (d) {
        K(t, t.return, d);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ma(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function va(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mi(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, i, a);
            }
          }
          var l = t.return;
          try {
            os(t);
          } catch (a) {
            K(t, l, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            os(t);
          } catch (a) {
            K(t, s, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (_ = o);
      break;
    }
    _ = t.return;
  }
}
var xp = Math.ceil,
  xi = et.ReactCurrentDispatcher,
  eo = et.ReactCurrentOwner,
  Le = et.ReactCurrentBatchConfig,
  I = 0,
  q = null,
  G = null,
  re = 0,
  xe = 0,
  dn = jt(0),
  J = 0,
  hr = null,
  Bt = 0,
  $i = 0,
  to = 0,
  Yn = null,
  he = null,
  no = 0,
  jn = 1 / 0,
  He = null,
  wi = !1,
  cs = null,
  vt = null,
  Dr = !1,
  ct = null,
  ki = 0,
  Jn = 0,
  ds = null,
  Xr = -1,
  Zr = 0;
function de() {
  return I & 6 ? Q() : Xr !== -1 ? Xr : (Xr = Q());
}
function yt(e) {
  return e.mode & 1
    ? I & 2 && re !== 0
      ? re & -re
      : np.transition !== null
      ? (Zr === 0 && (Zr = Nu()), Zr)
      : ((e = b),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ou(e.type))),
        e)
    : 1;
}
function be(e, t, n, r) {
  if (50 < Jn) throw ((Jn = 0), (ds = null), Error(k(185)));
  vr(e, n, r),
    (!(I & 2) || e !== q) &&
      (e === q && (!(I & 2) && ($i |= n), J === 4 && at(e, re)),
      ye(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((jn = Q() + 500), Ti && Ct()));
}
function ye(e, t) {
  var n = e.callbackNode;
  tf(e, t);
  var r = ii(e, e === q ? re : 0);
  if (r === 0)
    n !== null && _o(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _o(n), t === 1))
      e.tag === 0 ? tp(ya.bind(null, e)) : Yu(ya.bind(null, e)),
        Xf(function () {
          !(I & 6) && Ct();
        }),
        (n = null);
    else {
      switch (ju(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = ku;
          break;
        case 16:
          n = ri;
          break;
        case 536870912:
          n = Su;
          break;
        default:
          n = ri;
      }
      n = Qc(n, Uc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Uc(e, t) {
  if (((Xr = -1), (Zr = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = ii(e, e === q ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Si(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var l = Vc();
    (q !== e || re !== t) && ((He = null), (jn = Q() + 500), Mt(e, t));
    do
      try {
        Sp();
        break;
      } catch (o) {
        Ac(e, o);
      }
    while (!0);
    As(),
      (xi.current = l),
      (I = i),
      G !== null ? (t = 0) : ((q = null), (re = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = $l(e)), i !== 0 && ((r = i), (t = fs(e, i)))), t === 1)
    )
      throw ((n = hr), Mt(e, 0), at(e, r), ye(e, Q()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !wp(i) &&
          ((t = Si(e, r)),
          t === 2 && ((l = $l(e)), l !== 0 && ((r = l), (t = fs(e, l)))),
          t === 1))
      )
        throw ((n = hr), Mt(e, 0), at(e, r), ye(e, Q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Rt(e, he, He);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = no + 500 - Q()), 10 < t))
          ) {
            if (ii(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Kl(Rt.bind(null, e, he, He), t);
            break;
          }
          Rt(e, he, He);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ie(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Kl(Rt.bind(null, e, he, He), r);
            break;
          }
          Rt(e, he, He);
          break;
        case 5:
          Rt(e, he, He);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ye(e, Q()), e.callbackNode === n ? Uc.bind(null, e) : null;
}
function fs(e, t) {
  var n = Yn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = Si(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && ps(t)),
    e
  );
}
function ps(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function wp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Me(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function at(e, t) {
  for (
    t &= ~to,
      t &= ~$i,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ya(e) {
  if (I & 6) throw Error(k(327));
  vn();
  var t = ii(e, 0);
  if (!(t & 1)) return ye(e, Q()), null;
  var n = Si(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $l(e);
    r !== 0 && ((t = r), (n = fs(e, r)));
  }
  if (n === 1) throw ((n = hr), Mt(e, 0), at(e, t), ye(e, Q()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, he, He),
    ye(e, Q()),
    null
  );
}
function ro(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((jn = Q() + 500), Ti && Ct());
  }
}
function Ht(e) {
  ct !== null && ct.tag === 0 && !(I & 6) && vn();
  var t = I;
  I |= 1;
  var n = Le.transition,
    r = b;
  try {
    if (((Le.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (Le.transition = n), (I = t), !(I & 6) && Ct();
  }
}
function io() {
  (xe = dn.current), D(dn);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch (($s(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ui();
          break;
        case 3:
          Sn(), D(me), D(ae), Qs();
          break;
        case 5:
          Ks(r);
          break;
        case 4:
          Sn();
          break;
        case 13:
          D(B);
          break;
        case 19:
          D(B);
          break;
        case 10:
          Vs(r.type._context);
          break;
        case 22:
        case 23:
          io();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (G = e = xt(e.current, null)),
    (re = xe = t),
    (J = 0),
    (hr = null),
    (to = $i = Bt = 0),
    (he = Yn = null),
    Tt !== null)
  ) {
    for (t = 0; t < Tt.length; t++)
      if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Tt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = G;
    try {
      if ((As(), (Gr.current = yi), vi)) {
        for (var r = H.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((Vt = 0),
        (Z = Y = H = null),
        (Qn = !1),
        (dr = 0),
        (eo.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (hr = t), (G = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          o = n,
          a = t;
        if (
          ((t = re),
          (o.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var c = a,
            p = o,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = p.alternate;
            d
              ? ((p.updateQueue = d.updateQueue),
                (p.memoizedState = d.memoizedState),
                (p.lanes = d.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var m = la(s);
          if (m !== null) {
            (m.flags &= -257),
              sa(m, s, o, l, t),
              m.mode & 1 && ia(l, c, t),
              (t = m),
              (a = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ia(l, c, t), lo();
              break e;
            }
            a = Error(k(426));
          }
        } else if (A && o.mode & 1) {
          var L = la(s);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              sa(L, s, o, l, t),
              Ds(Nn(a, o));
            break e;
          }
        }
        (l = a = Nn(a, o)),
          J !== 4 && (J = 2),
          Yn === null ? (Yn = [l]) : Yn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var g = jc(l, a, t);
              Zo(l, g);
              break e;
            case 1:
              o = a;
              var f = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (vt === null || !vt.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = Cc(l, o, t);
                Zo(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Hc(n);
    } catch (S) {
      (t = S), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vc() {
  var e = xi.current;
  return (xi.current = yi), e === null ? yi : e;
}
function lo() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    q === null || (!(Bt & 268435455) && !($i & 268435455)) || at(q, re);
}
function Si(e, t) {
  var n = I;
  I |= 2;
  var r = Vc();
  (q !== e || re !== t) && ((He = null), Mt(e, t));
  do
    try {
      kp();
      break;
    } catch (i) {
      Ac(e, i);
    }
  while (!0);
  if ((As(), (I = n), (xi.current = r), G !== null)) throw Error(k(261));
  return (q = null), (re = 0), J;
}
function kp() {
  for (; G !== null; ) Bc(G);
}
function Sp() {
  for (; G !== null && !Kd(); ) Bc(G);
}
function Bc(e) {
  var t = Kc(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hc(e) : (G = t),
    (eo.current = null);
}
function Hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gp(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (G = null);
        return;
      }
    } else if (((n = hp(n, t, xe)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Rt(e, t, n) {
  var r = b,
    i = Le.transition;
  try {
    (Le.transition = null), (b = 1), Np(e, t, n, r);
  } finally {
    (Le.transition = i), (b = r);
  }
  return null;
}
function Np(e, t, n, r) {
  do vn();
  while (ct !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (nf(e, l),
    e === q && ((G = q = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Qc(ri, function () {
        return vn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Le.transition), (Le.transition = null);
    var s = b;
    b = 1;
    var o = I;
    (I |= 4),
      (eo.current = null),
      vp(e, n),
      $c(n, e),
      Bf(Hl),
      (li = !!Bl),
      (Hl = Bl = null),
      (e.current = n),
      yp(n),
      Qd(),
      (I = o),
      (b = s),
      (Le.transition = l);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (ct = e), (ki = i)),
    (l = e.pendingLanes),
    l === 0 && (vt = null),
    Jd(n.stateNode),
    ye(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (wi) throw ((wi = !1), (e = cs), (cs = null), e);
  return (
    ki & 1 && e.tag !== 0 && vn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ds ? Jn++ : ((Jn = 0), (ds = e))) : (Jn = 0),
    Ct(),
    null
  );
}
function vn() {
  if (ct !== null) {
    var e = ju(ki),
      t = Le.transition,
      n = b;
    try {
      if (((Le.transition = null), (b = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (ki = 0), I & 6)) throw Error(k(331));
        var i = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var l = _,
            s = l.child;
          if (_.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var c = o[a];
                for (_ = c; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, p, l);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (_ = h);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var d = p.sibling,
                        m = p.return;
                      if ((Ic(p), p === c)) {
                        _ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (_ = d);
                        break;
                      }
                      _ = m;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var L = w.sibling;
                    (w.sibling = null), (w = L);
                  } while (w !== null);
                }
              }
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (_ = s);
          else
            e: for (; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gn(9, l, l.return);
                }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (_ = g);
                break e;
              }
              _ = l.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          s = _;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (_ = v);
          else
            e: for (s = f; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, o);
                  }
                } catch (S) {
                  K(o, o.return, S);
                }
              if (o === s) {
                _ = null;
                break e;
              }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (_ = y);
                break e;
              }
              _ = o.return;
            }
        }
        if (
          ((I = i), Ct(), Ve && typeof Ve.onPostCommitFiberRoot == 'function')
        )
          try {
            Ve.onPostCommitFiberRoot(Pi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (Le.transition = t);
    }
  }
  return !1;
}
function xa(e, t, n) {
  (t = Nn(n, t)),
    (t = jc(e, t, 1)),
    (e = mt(e, t, 1)),
    (t = de()),
    e !== null && (vr(e, 1, t), ye(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (vt === null || !vt.has(r)))
        ) {
          (e = Nn(n, e)),
            (e = Cc(t, e, 1)),
            (t = mt(t, e, 1)),
            (e = de()),
            t !== null && (vr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > Q() - no)
        ? Mt(e, 0)
        : (to |= n)),
    ye(e, t);
}
function Wc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
      : (t = 1));
  var n = de();
  (e = Ze(e, t)), e !== null && (vr(e, t, n), ye(e, n));
}
function Cp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wc(e, n);
}
function _p(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Wc(e, n);
}
var Kc;
Kc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), pp(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), A && t.flags & 1048576 && Ju(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Jr(e, t), (e = t.pendingProps);
      var i = xn(t, ae.current);
      mn(t, n), (i = Ys(null, t, r, e, i, n));
      var l = Js();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((l = !0), ci(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Hs(t),
            (i.updater = bi),
            (t.stateNode = i),
            (i._reactInternals = t),
            ql(t, r, e, n),
            (t = ns(null, t, r, !0, l, n)))
          : ((t.tag = 0), A && l && Ms(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Jr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Lp(r)),
          (e = Re(r, e)),
          i)
        ) {
          case 0:
            t = ts(null, t, r, e, n);
            break e;
          case 1:
            t = ua(null, t, r, e, n);
            break e;
          case 11:
            t = oa(null, t, r, e, n);
            break e;
          case 14:
            t = aa(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        ts(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        ua(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          nc(e, t),
          gi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Nn(Error(k(423)), t)), (t = ca(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Nn(Error(k(424)), t)), (t = ca(e, t, r, n, i));
            break e;
          } else
            for (
              we = gt(t.stateNode.containerInfo.firstChild),
                ke = t,
                A = !0,
                Te = null,
                n = ec(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), r === i)) {
            t = qe(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rc(t),
        e === null && Jl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Wl(r, i) ? (s = null) : l !== null && Wl(r, l) && (t.flags |= 32),
        Lc(e, t),
        ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Jl(t), null;
    case 13:
      return Oc(e, t, n);
    case 4:
      return (
        Ws(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        oa(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          M(pi, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Me(l.value, s)) {
            if (l.children === i.children && !me.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies;
              if (o !== null) {
                s = l.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Ge(-1, n & -n)), (a.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (c.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Xl(l.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (o = s.alternate),
                  o !== null && (o.lanes |= n),
                  Xl(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (i = Pe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Re(r, t.pendingProps)),
        (i = Re(r.type, i)),
        aa(e, t, r, i, n)
      );
    case 15:
      return _c(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        Jr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), ci(t)) : (e = !1),
        mn(t, n),
        Nc(t, r, i),
        ql(t, r, i, n),
        ns(null, t, r, !0, e, n)
      );
    case 19:
      return Fc(e, t, n);
    case 22:
      return Ec(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Qc(e, t) {
  return wu(e, t);
}
function Ep(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Ep(e, t, n, r);
}
function so(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Lp(e) {
  if (typeof e == 'function') return so(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cs)) return 11;
    if (e === _s) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == 'function')) so(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case en:
        return $t(n.children, i, l, t);
      case js:
        (s = 8), (i |= 8);
        break;
      case Nl:
        return (
          (e = Ee(12, n, t, i | 2)), (e.elementType = Nl), (e.lanes = l), e
        );
      case jl:
        return (e = Ee(13, n, t, i)), (e.elementType = jl), (e.lanes = l), e;
      case Cl:
        return (e = Ee(19, n, t, i)), (e.elementType = Cl), (e.lanes = l), e;
      case ru:
        return Di(n, i, l, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case tu:
              s = 10;
              break e;
            case nu:
              s = 9;
              break e;
            case Cs:
              s = 11;
              break e;
            case _s:
              s = 14;
              break e;
            case lt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ee(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function $t(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function Di(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = ru),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function yl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zi(0)),
    (this.expirationTimes = Zi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function oo(e, t, n, r, i, l, s, o, a) {
  return (
    (e = new Pp(e, t, n, o, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ee(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hs(l),
    e
  );
}
function Op(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Gc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Kt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Gu(e, n, t);
  }
  return t;
}
function Yc(e, t, n, r, i, l, s, o, a) {
  return (
    (e = oo(n, r, !0, e, i, l, s, o, a)),
    (e.context = Gc(null)),
    (n = e.current),
    (r = de()),
    (i = yt(n)),
    (l = Ge(r, i)),
    (l.callback = t ?? null),
    mt(n, l, i),
    (e.current.lanes = i),
    vr(e, i, r),
    ye(e, r),
    e
  );
}
function Ui(e, t, n, r) {
  var i = t.current,
    l = de(),
    s = yt(i);
  return (
    (n = Gc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mt(i, t, s)),
    e !== null && (be(e, i, s, l), Qr(e, i, s)),
    s
  );
}
function Ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ao(e, t) {
  wa(e, t), (e = e.alternate) && wa(e, t);
}
var Jc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function uo(e) {
  this._internalRoot = e;
}
Ai.prototype.render = uo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ui(e, t, null, null);
};
Ai.prototype.unmount = uo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ht(function () {
      Ui(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function Ai(e) {
  this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    ot.splice(n, 0, e), n === 0 && Pu(e);
  }
};
function co(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ka() {}
function Fp(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var l = r;
      r = function () {
        var c = Ni(s);
        l.call(c);
      };
    }
    var s = Yc(t, r, e, 0, null, !1, !1, '', ka);
    return (
      (e._reactRootContainer = s),
      (e[Xe] = s.current),
      sr(e.nodeType === 8 ? e.parentNode : e),
      Ht(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var o = r;
    r = function () {
      var c = Ni(a);
      o.call(c);
    };
  }
  var a = oo(e, 0, !1, null, null, !1, !1, '', ka);
  return (
    (e._reactRootContainer = a),
    (e[Xe] = a.current),
    sr(e.nodeType === 8 ? e.parentNode : e),
    Ht(function () {
      Ui(t, a, n, r);
    }),
    a
  );
}
function Bi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == 'function') {
      var o = i;
      i = function () {
        var a = Ni(s);
        o.call(a);
      };
    }
    Ui(t, s, e, i);
  } else s = Fp(n, t, e, i, r);
  return Ni(s);
}
Cu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (Ps(t, n | 1), ye(t, Q()), !(I & 6) && ((jn = Q() + 500), Ct()));
      }
      break;
    case 13:
      Ht(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var i = de();
          be(r, e, 1, i);
        }
      }),
        ao(e, 1);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = de();
      be(t, e, 134217728, n);
    }
    ao(e, 134217728);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = de();
      be(n, e, t, r);
    }
    ao(e, t);
  }
};
Eu = function () {
  return b;
};
Lu = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
Il = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ll(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = zi(r);
            if (!i) throw Error(k(90));
            lu(r), Ll(r, i);
          }
        }
      }
      break;
    case 'textarea':
      ou(e, n);
      break;
    case 'select':
      (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
  }
};
hu = ro;
gu = Ht;
var Rp = { usingClientEntryPoint: !1, Events: [xr, ln, zi, fu, pu, ro] },
  In = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  zp = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber)
    try {
      (Pi = Ur.inject(zp)), (Ve = Ur);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!co(t)) throw Error(k(200));
  return Op(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!co(e)) throw Error(k(299));
  var n = !1,
    r = '',
    i = Jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = oo(e, 1, !1, null, null, n, !1, r, i)),
    (e[Xe] = t.current),
    sr(e.nodeType === 8 ? e.parentNode : e),
    new uo(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = yu(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Ht(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Vi(t)) throw Error(k(200));
  return Bi(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!co(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = '',
    s = Jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Yc(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[Xe] = t.current),
    sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ai(t);
};
Ne.render = function (e, t, n) {
  if (!Vi(t)) throw Error(k(200));
  return Bi(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Vi(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Ht(function () {
        Bi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = ro;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vi(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Bi(e, t, n, !1, r);
};
Ne.version = '18.3.1-next-f1338f8080-20240426';
function Xc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (e) {
      console.error(e);
    }
}
Xc(), (Xa.exports = Ne);
var Tp = Xa.exports,
  Sa = Tp;
(kl.createRoot = Sa.createRoot), (kl.hydrateRoot = Sa.hydrateRoot);
function Ip() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    Dt(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Na = {};
function hs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (Dt(t[0]) && Na[t[0]]) || (Dt(t[0]) && (Na[t[0]] = new Date()), Ip(...t));
}
const Zc = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off('initialized', n);
        }, 0),
          t();
      };
      e.on('initialized', n);
    }
  },
  ja = (e, t, n) => {
    e.loadNamespaces(t, Zc(e, n));
  },
  Ca = (e, t, n, r) => {
    Dt(n) && (n = [n]),
      n.forEach((i) => {
        e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
      }),
      e.loadLanguages(t, Zc(e, r));
  },
  bp = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
      i = t.options ? t.options.fallbackLng : !1,
      l = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const s = (o, a) => {
      const c = t.services.backendConnector.state[`${o}|${a}`];
      return c === -1 || c === 2;
    };
    return n.bindI18n &&
      n.bindI18n.indexOf('languageChanging') > -1 &&
      t.services.backendConnector.backend &&
      t.isLanguageChangingTo &&
      !s(t.isLanguageChangingTo, e)
      ? !1
      : !!(
          t.hasResourceBundle(r, e) ||
          !t.services.backendConnector.backend ||
          (t.options.resources && !t.options.partialBundledLanguages) ||
          (s(r, e) && (!i || s(l, e)))
        );
  },
  Mp = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length
      ? (hs('i18n.languages were undefined or empty', t.languages), !0)
      : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (i, l) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf('languageChanging') > -1 &&
              i.services.backendConnector.backend &&
              i.isLanguageChangingTo &&
              !l(i.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : bp(e, t, n);
  },
  Dt = (e) => typeof e == 'string',
  $p = (e) => typeof e == 'object' && e !== null,
  Dp =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Up = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  Ap = (e) => Up[e],
  Vp = (e) => e.replace(Dp, Ap);
let gs = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: Vp,
};
const Bp = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gs = { ...gs, ...e };
  },
  Hp = () => gs;
let qc;
const Wp = (e) => {
    qc = e;
  },
  Kp = () => qc,
  Qp = {
    type: '3rdParty',
    init(e) {
      Bp(e.options.react), Wp(e);
    },
  },
  Gp = T.createContext();
class Yp {
  constructor() {
    po(this, 'getUsedNamespaces', () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
}
const Jp = (e, t) => {
    const n = T.useRef();
    return (
      T.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  ed = (e, t, n, r) => e.getFixedT(t, n, r),
  Xp = (e, t, n, r) => T.useCallback(ed(e, t, n, r), [e, t, n, r]),
  tt = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = T.useContext(Gp) || {},
      l = n || r || Kp();
    if ((l && !l.reportNamespaces && (l.reportNamespaces = new Yp()), !l)) {
      hs(
        'You will need to pass in an i18next instance by using initReactI18next'
      );
      const y = (j, N) =>
          Dt(N)
            ? N
            : $p(N) && Dt(N.defaultValue)
            ? N.defaultValue
            : Array.isArray(j)
            ? j[j.length - 1]
            : j,
        S = [y, {}, !1];
      return (S.t = y), (S.i18n = {}), (S.ready = !1), S;
    }
    l.options.react &&
      l.options.react.wait !== void 0 &&
      hs(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const s = { ...Hp(), ...l.options.react, ...t },
      { useSuspense: o, keyPrefix: a } = s;
    let c = i || (l.options && l.options.defaultNS);
    (c = Dt(c) ? [c] : c || ['translation']),
      l.reportNamespaces.addUsedNamespaces &&
        l.reportNamespaces.addUsedNamespaces(c);
    const p =
        (l.isInitialized || l.initializedStoreOnce) &&
        c.every((y) => Mp(y, l, s)),
      h = Xp(l, t.lng || null, s.nsMode === 'fallback' ? c : c[0], a),
      d = () => h,
      m = () => ed(l, t.lng || null, s.nsMode === 'fallback' ? c : c[0], a),
      [x, w] = T.useState(d);
    let L = c.join();
    t.lng && (L = `${t.lng}${L}`);
    const g = Jp(L),
      f = T.useRef(!0);
    T.useEffect(() => {
      const { bindI18n: y, bindI18nStore: S } = s;
      (f.current = !0),
        !p &&
          !o &&
          (t.lng
            ? Ca(l, t.lng, c, () => {
                f.current && w(m);
              })
            : ja(l, c, () => {
                f.current && w(m);
              })),
        p && g && g !== L && f.current && w(m);
      const j = () => {
        f.current && w(m);
      };
      return (
        y && l && l.on(y, j),
        S && l && l.store.on(S, j),
        () => {
          (f.current = !1),
            y && l && y.split(' ').forEach((N) => l.off(N, j)),
            S && l && S.split(' ').forEach((N) => l.store.off(N, j));
        }
      );
    }, [l, L]),
      T.useEffect(() => {
        f.current && p && w(d);
      }, [l, a, p]);
    const v = [x, l, p];
    if (((v.t = x), (v.i18n = l), (v.ready = p), p || (!p && !o))) return v;
    throw new Promise((y) => {
      t.lng ? Ca(l, t.lng, c, () => y()) : ja(l, c, () => y());
    });
  },
  kr = () => !window.invokeNative,
  Zp = () => {},
  dt = (e) => {
    if (kr() || !e) return 'images/profiles/default.png';
    try {
      return new URL(e).href;
    } catch {
      return 'images/profiles/default.png';
    }
  },
  qp = (e, t = 1e3) => {};
qp([
  {
    action: 'ui:setupUI',
    data: {
      setLocale: {
        deathmatch_arena: 'DeathMatch Arena',
        desc_deathmatch_arena:
          'Join the thrill of intense deathmatch matches! Plan your strategy, work with your team, and dominate the arena.',
        main_statistics: 'Main Statistics',
        lobbies: 'Lobbies',
        create_lobby: 'Create Lobby',
        kd_rate: 'KD Rate',
        matches_played: 'Matches Played',
        kills_total: 'Kills Total',
        wins_total: 'Wins Total',
        deaths_total: 'Deaths Total',
        loses_total: 'Loses Total',
        lobby_leader: 'Lobby Leader',
        start_game: 'Start Game',
        leave_lobby: 'Leave Lobby',
        red_team: 'Red Team',
        blue_team: 'Blue Team',
        id: 'ID',
        kd: 'KD',
        lobby: 'Lobby',
        settings: 'Settings',
        current_map: 'Current Map',
        lobby_name: 'Name',
        playing_mode: 'Playing Mode',
        desc_blue_team:
          'The Blue Team stands united, ready for action in the deathmatch arena. Known for their camaraderie and determination, they bring a sense of unity to every match.',
        desc_red_team:
          'The Red Team is full of spirit and enthusiasm, always eager for a challenge. With their bold colors and competitive nature, they add excitement to every game.',
        leader: 'Leader',
        map: 'Map',
        time: 'Time',
        player: 'Player',
        management: 'Management',
        join: 'Join',
        no_lobby: 'No Active Lobby',
        minutes: 'min',
        started: 'Started',
        new_profile_photo: 'New Profile Photo',
        save: 'Save',
        only_url_error: 'Only Url !',
        playing_weapon: 'Playing Weapon',
      },
      setPlayableWeapons: [
        'weapon_assaultrifle',
        'weapon_pistol',
        'weapon_revolver',
        'weapon_pistol',
        'weapon_revolver',
        'weapon_pistol',
        'weapon_revolver',
        'weapon_pistol',
      ],
    },
  },
  {
    action: 'ui:setUserProfile',
    data: {
      source: 1,
      deaths: 1,
      kd_rate: 1.5,
      kills: 10,
      loses: 1,
      name: '0Resmon Dev',
      photo: void 0,
      played_matches: 88,
      wins: 20,
      lobby: { id: 1, team: 0 },
    },
  },
  {
    action: 'ui:setCurrentLobby',
    data: {
      started: !0,
      game_time: 10,
      mode: 5,
      finish_time: (new Date().getTime() + 10 * 60 * 1e3) / 1e3,
      members: [{ kd_rate: 1.2, name: '-a', source: 1, photo: void 0 }],
      score: { 0: 1, 1: 12 },
      id: 1,
      leader: { source: 1, name: '-a' },
      map: { image: '', name: 'a' },
      name: "-a's Room",
      weapon: 'weapon_assaultrifle',
    },
  },
]);
const Zt = (e, t) => {
  const n = T.useRef(Zp);
  T.useEffect(() => {
    n.current = t;
  }, [t]),
    T.useEffect(() => {
      const r = (i) => {
        const { action: l, data: s } = i.data;
        n.current && l === e && n.current(s);
      };
      return (
        window.addEventListener('message', r),
        () => window.removeEventListener('message', r)
      );
    }, [e]);
};
async function ne(e, t, n) {
  const r = {
    method: 'post',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(t),
  };
  if (kr() && n) return n;
  const i = window.GetParentResourceName
    ? window.GetParentResourceName()
    : 'none';
  return await (await fetch(`https://${i}/${e}`, r)).json();
}
const td = T.createContext({}),
  eh = ({ children: e }) => {
    const { i18n: t } = tt(),
      [n, r] = T.useState('profile'),
      [i, l] = T.useState({}),
      [s, o] = T.useState({}),
      [a, c] = T.useState([]);
    T.useEffect(() => {
      ne('nui:loadUI', !0, !0);
    }, []),
      Zt('ui:setupUI', (m) => {
        m.setLocale && t.addResourceBundle('en', 'translation', m.setLocale),
          m.setPlayableWeapons && c(m.setPlayableWeapons),
          ne('nui:onLoadUI', !0, !0);
      }),
      Zt('ui:setPage', r),
      Zt('ui:setUserProfile', l),
      Zt('ui:setCurrentLobby', o),
      Zt('ui:leaveCurrentLobby', () => {
        r('profile'), o({}), l((m) => ({ ...m, lobby: void 0 }));
      });
    const d = {
      page: n,
      setPage: r,
      userProfile: i,
      currentLobby: s,
      createNewLobby: async () => {
        if (s.id) return await ne('nui:leaveCurrentLobby', s.id, !0), o({}), !1;
        const m = await ne('nui:createLobby', !0, {
          state: !0,
          lobby: {
            id: 1,
            leader: { source: 1, name: 'Ali Koç', photo: void 0 },
            game_time: 10,
            map: { image: 'example.png', name: 'de_classic' },
            members: [
              {
                source: 1,
                name: 'Ali Koç',
                photo: void 0,
                team: 1,
                kd_rate: 1.23,
              },
            ],
            mode: 5,
            name: 'Lobby #1',
          },
        });
        return m.state ? (o(m.lobby), r('create-lobby'), !0) : !1;
      },
      setCurrentLobby: o,
      leaveLobby: async () =>
        s.id
          ? (await ne('nui:leaveCurrentLobby', s.id, !0),
            o({}),
            l((m) => ({ ...m, lobby: void 0 })),
            r('profile'),
            !0)
          : !1,
      playableWeapons: a,
    };
    return u.jsx(td.Provider, { value: d, children: e });
  },
  _t = () => T.useContext(td);
var nd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = '', s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        o && (l = i(l, r(o)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == 'string' || typeof l == 'number') return l;
      if (typeof l != 'object') return '';
      if (Array.isArray(l)) return n.apply(null, l);
      if (
        l.toString !== Object.prototype.toString &&
        !l.toString.toString().includes('[native code]')
      )
        return l.toString();
      var s = '';
      for (var o in l) t.call(l, o) && l[o] && (s = i(s, o));
      return s;
    }
    function i(l, s) {
      return s ? (l ? l + ' ' + s : l + s) : l;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(nd);
var th = nd.exports;
const Ye = Da(th);
var rd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  _a = bt.createContext && bt.createContext(rd),
  wt = function () {
    return (
      (wt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      wt.apply(this, arguments)
    );
  },
  nh = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function id(e) {
  return (
    e &&
    e.map(function (t, n) {
      return bt.createElement(t.tag, wt({ key: n }, t.attr), id(t.child));
    })
  );
}
function Hi(e) {
  return function (t) {
    return bt.createElement(rh, wt({ attr: wt({}, e.attr) }, t), id(e.child));
  };
}
function rh(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      l = e.title,
      s = nh(e, ['attr', 'size', 'title']),
      o = i || n.size || '1em',
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + ' ' : '') + e.className),
      bt.createElement(
        'svg',
        wt(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          s,
          {
            className: a,
            style: wt(wt({ color: e.color || n.color }, n.style), e.style),
            height: o,
            width: o,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        l && bt.createElement('title', null, l),
        e.children
      )
    );
  };
  return _a !== void 0
    ? bt.createElement(_a.Consumer, null, function (n) {
        return t(n);
      })
    : t(rd);
}
function An(e) {
  return Hi({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
      {
        tag: 'path',
        attr: { d: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' },
      },
    ],
  })(e);
}
const fo = ({ goHome: e }) => {
  const { t } = tt(),
    { setPage: n } = _t(),
    r = () => {
      e && n('profile');
    };
  return u.jsxs('div', {
    className: 'flex items-center gap-6',
    style: { height: 80 },
    children: [
      u.jsx('button', {
        onClick: r,
        className: Ye('p-2 bg-white/20 border-2 border-white/20 rounded-sm', {
          'cursor-default': !e,
        }),
        children: e
          ? u.jsx(An, { className: 'w-8 h-8' })
          : u.jsx('img', {
              src: 'images/icons/weapon_m4.svg',
              alt: 'weapon_m4',
            }),
      }),
      u.jsxs('div', {
        className: 'flex flex-col',
        children: [
          u.jsx('h1', {
            className: ' text-6xl uppercase',
            children: t('deathmatch_arena'),
          }),
          u.jsx('span', {
            className: 'ml-0.5 text-white/55 text-sm ',
            children: t('desc_deathmatch_arena'),
          }),
        ],
      }),
    ],
  });
};
function ih(e) {
  return Hi({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z',
        },
      },
    ],
  })(e);
}
const lh = ({ isOpen: e, onClose: t, onSave: n, error: r }) => {
    const { t: i } = tt(),
      [l, s] = T.useState(''),
      o = () => {
        n(l);
      };
    return u.jsx('div', {
      className: Ye(
        'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50',
        { hidden: !e }
      ),
      children: u.jsxs('div', {
        className:
          'relative bg-[#121212] p-6 rounded-lg shadow-lg w-96 border border-white/15',
        children: [
          u.jsx('h2', {
            className: 'text-xl font-bold mb-4 ',
            children: i('new_profile_photo'),
          }),
          u.jsx('input', {
            type: 'text',
            value: l,
            onChange: (a) => s(a.target.value),
            className:
              'w-full  p-2 border border-white/20 rounded-md mb-4 bg-transparent ring-0 outline-none',
            placeholder: 'url...',
          }),
          u.jsx('div', {
            className: 'flex justify-end',
            children: u.jsx('button', {
              onClick: o,
              className: 'px-4 py-2 text-white rounded hover:brightness-125',
              style: {
                border: '1px solid rgba(255, 241, 83, 0.25)',
                background:
                  'radial-gradient(50% 50% at 50% 50%, rgba(255, 241, 83, 0.25) 0%, rgba(153, 144, 50, 0.25) 100%)',
                boxShadow: '0px 0px 12.8px 0px rgba(255, 241, 83, 0.25) inset',
              },
              children: u.jsx('h1', {
                className: ' text-sm',
                children: i('save'),
              }),
            }),
          }),
          u.jsx('button', {
            onClick: t,
            className:
              'absolute top-2 right-2 opacity-50 hover:opacity-100 transition-opacity',
            children: u.jsx(ih, { className: 'w-6 h-6' }),
          }),
          r &&
            u.jsx('div', {
              className: 'absolute bottom-2 left-4',
              children: u.jsx('h1', {
                className: ' text-[#FF6153] text-sm',
                children: r,
              }),
            }),
        ],
      }),
    });
  },
  sh = () => {
    var d, m;
    const { t: e } = tt(),
      { userProfile: t, createNewLobby: n, setPage: r } = _t(),
      [i, l] = T.useState(!1),
      [s, o] = T.useState(!1),
      a = () => {
        l(!i);
      },
      c = n,
      p = () => {
        r('lobbies');
      },
      h = async (x) => {
        try {
          const w = new URL(x);
          return o(!1), a(), await ne('nui:updateProfilePhoto', w, !0), !0;
        } catch {
          return o(!0), !1;
        }
      };
    return u.jsxs('div', {
      className: 'relative w-full h-full',
      children: [
        u.jsxs('div', {
          className: 'relative w-full h-full px-16 py-32 flex flex-col gap-6',
          children: [
            u.jsx(fo, {}),
            u.jsxs('div', {
              className:
                'flex flex-col gap-4 mt-4 w-full lg:w-3/4 xl:w-2/3 2xl:w-3/5 3xl:w-1/2',
              children: [
                u.jsxs('div', {
                  className: 'grid grid-cols-7 items-center gap-5',
                  children: [
                    u.jsxs('div', {
                      className:
                        'relative w-full flex gap-5 border rounded p-4 col-span-3',
                      style: {
                        borderColor: 'rgba(255, 241, 83, 0.21)',
                        backgroundColor: 'rgba(22, 22, 22, .8)',
                      },
                      children: [
                        u.jsxs('div', {
                          className:
                            'relative min-w-20 w-20 min-h-20 h-20 rounded',
                          children: [
                            u.jsx('img', {
                              src: dt(t == null ? void 0 : t.photo),
                              alt: 'profile',
                              className: 'absolute inset-0 z-[1]',
                            }),
                            u.jsx('button', {
                              onClick: a,
                              className:
                                'absolute z-[2] -bottom-2 -right-2 w-5 h-5 border border-[#FFF153] rounded-sm flex items-center justify-center',
                              style: {
                                background:
                                  'radial-gradient(72.5% 72.5% at 50% 27.5%, #FFF153 0%, #999032 100%)',
                              },
                              children: u.jsx('img', {
                                src: 'images/icons/pen.svg',
                                alt: 'pen',
                              }),
                            }),
                            u.jsx('div', {
                              className:
                                'relative min-w-20 min-h-20 blur-lg z-0',
                              children: u.jsx('img', {
                                src: dt(t == null ? void 0 : t.photo),
                                alt: 'profile',
                              }),
                            }),
                          ],
                        }),
                        u.jsxs('div', {
                          className:
                            'flex flex-col w-full whitespace-nowrap overflow-hidden',
                          children: [
                            u.jsx('h1', {
                              className: ' overflow-hidden text-ellipsis',
                              children: t == null ? void 0 : t.name,
                            }),
                            u.jsx('div', {
                              className: 'relative mt-1',
                              style: { height: 1 },
                              children: u.jsx('div', {
                                className:
                                  'absolute left-0 bg-[#FFF153] w-3/4 inset-0',
                                style: {
                                  background:
                                    'linear-gradient(to right, #FFF153 0%, rgba(255, 255, 255, 0) 100%)',
                                },
                              }),
                            }),
                            u.jsxs('h1', {
                              className: 'mt-auto  text-sm',
                              children: [
                                e('kd_rate'),
                                ': ',
                                (d = t == null ? void 0 : t.kd_rate) == null
                                  ? void 0
                                  : d.toFixed(2),
                              ],
                            }),
                          ],
                        }),
                        u.jsx(u.Fragment, {
                          children: u.jsxs('svg', {
                            className:
                              'absolute left-0 top-1/2 -translate-y-1/2 z-0',
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '348',
                            height: '114',
                            viewBox: '0 0 348 114',
                            fill: 'none',
                            children: [
                              u.jsx('g', {
                                filter: 'url(#filter0_f_8_10)',
                                children: u.jsx('ellipse', {
                                  cx: '66',
                                  cy: '121',
                                  rx: '125',
                                  ry: '17',
                                  fill: '#FFF153',
                                }),
                              }),
                              u.jsx('defs', {
                                children: u.jsxs('filter', {
                                  id: 'filter0_f_8_10',
                                  x: '-215.2',
                                  y: '-52.2',
                                  width: '562.4',
                                  height: '346.4',
                                  filterUnits: 'userSpaceOnUse',
                                  colorInterpolationFilters: 'sRGB',
                                  children: [
                                    u.jsx('feFlood', {
                                      floodOpacity: '0',
                                      result: 'BackgroundImageFix',
                                    }),
                                    u.jsx('feBlend', {
                                      mode: 'normal',
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape',
                                    }),
                                    u.jsx('feGaussianBlur', {
                                      stdDeviation: '78.1',
                                      result: 'effect1_foregroundBlur_8_10',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    u.jsxs('button', {
                      onClick: p,
                      className:
                        'relative w-full h-full col-span-2 rounded overflow-hidden border border-white/15 transition hover:border-white/25',
                      style: {
                        background:
                          'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                      },
                      children: [
                        u.jsx('div', {
                          className:
                            'absolute z-10 bottom-3 left-1/2 -translate-x-1/2',
                          children: u.jsx('h1', {
                            className: 'text-base ',
                            children: e('lobbies'),
                          }),
                        }),
                        u.jsx('div', {
                          className: 'absolute inset-0 bg-cover bg-center',
                          style: {
                            backgroundImage:
                              'url(images/btn_profile_background.png)',
                          },
                        }),
                      ],
                    }),
                    u.jsxs('button', {
                      onClick: c,
                      className:
                        'relative w-full h-full col-span-2 rounded overflow-hidden border border-white/15 transition hover:border-white/25',
                      style: {
                        background:
                          'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                      },
                      children: [
                        u.jsx('div', {
                          className:
                            'absolute z-10 bottom-3 left-1/2 -translate-x-1/2',
                          children: u.jsx('h1', {
                            className: 'text-base ',
                            children: e('create_lobby'),
                          }),
                        }),
                        u.jsx('div', {
                          className: 'absolute inset-0 bg-cover bg-center',
                          style: {
                            backgroundImage:
                              'url(images/btn_create_lobby_background.png)',
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx('div', {
                  children: u.jsx('h1', {
                    className: ' text-xl uppercase tracking-wider',
                    children: e('main_statistics'),
                  }),
                }),
                u.jsxs('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    u.jsxs('div', {
                      className: 'flex gap-4',
                      children: [
                        u.jsxs('div', {
                          className:
                            'relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded',
                          style: {
                            background:
                              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                          },
                          children: [
                            u.jsx('div', {
                              className: 'w-1 h-9',
                              style: {
                                background: '#FFF153',
                                boxShadow:
                                  '0px 0px 9.6px 0px rgba(255, 241, 83, 0.55)',
                              },
                            }),
                            u.jsx('div', {
                              className: 'w-16 h-16',
                              children: u.jsx('img', {
                                className: 'w-full h-full',
                                src: 'images/icons/matches_played.svg',
                                alt: 'matches_played',
                              }),
                            }),
                            u.jsx('h1', {
                              className:
                                'text-xl  whitespace-pre-wrap break-words w-min',
                              children: e('matches_played'),
                            }),
                            u.jsx('div', {
                              className: 'ml-auto relative top-3 right-6',
                              children: u.jsx('h1', {
                                className: 'font-supercharge w-full ml-2',
                                style: {
                                  fontSize: 64,
                                  background:
                                    'linear-gradient(180deg, #FFF -23.07%, rgba(153, 153, 153, 0.05) 100%)',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                },
                                children: t.played_matches,
                              }),
                            }),
                          ],
                        }),
                        u.jsxs('div', {
                          className:
                            'relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded',
                          style: {
                            background:
                              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                          },
                          children: [
                            u.jsx('div', {
                              className: 'w-1 h-9',
                              style: {
                                background: '#FFFFFF',
                                boxShadow:
                                  '0px 0px 9.6px 0px rgba(255, 255, 255, 0.55)',
                              },
                            }),
                            u.jsx('div', {
                              className: 'w-16 h-16',
                              children: u.jsx('img', {
                                className: 'w-full h-full',
                                src: 'images/icons/kd_rate.svg',
                                alt: 'kd_rate',
                              }),
                            }),
                            u.jsx('h1', {
                              className:
                                'text-xl  whitespace-pre-wrap break-words w-min',
                              children: e('kd_rate'),
                            }),
                            u.jsx('div', {
                              className: 'ml-auto relative top-3 right-6',
                              children: u.jsx('h1', {
                                className: 'font-supercharge w-full ml-2',
                                style: {
                                  fontSize: 64,
                                  background:
                                    'linear-gradient(180deg, #FFF -13.07%, rgba(153, 153, 153, 0.05) 100%)',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                },
                                children:
                                  (m = t == null ? void 0 : t.kd_rate) == null
                                    ? void 0
                                    : m.toFixed(2),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs('div', {
                      className: 'flex gap-4',
                      children: [
                        u.jsxs('div', {
                          className:
                            'relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded',
                          style: {
                            background:
                              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                          },
                          children: [
                            u.jsx('div', {
                              className: 'w-1 h-9',
                              style: {
                                background: '#53FF95',
                                boxShadow:
                                  '0px 0px 9.6px 0px rgba(83, 255, 149, 0.55)',
                              },
                            }),
                            u.jsx('div', {
                              className: 'w-16 h-16',
                              children: u.jsx('img', {
                                className: 'w-full h-full',
                                src: 'images/icons/kills_total.svg',
                                alt: 'kills_total',
                              }),
                            }),
                            u.jsx('h1', {
                              className:
                                'text-xl  whitespace-pre-wrap break-words w-min',
                              children: e('kills_total'),
                            }),
                            u.jsx('div', {
                              className: 'ml-auto relative top-3 right-6',
                              children: u.jsx('h1', {
                                className: 'font-supercharge w-full ml-2',
                                style: {
                                  fontSize: 64,
                                  background:
                                    'linear-gradient(180deg, #FFF -13.07%, rgba(153, 153, 153, 0.05) 100%)',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                },
                                children: t.kills,
                              }),
                            }),
                          ],
                        }),
                        u.jsxs('div', {
                          className:
                            'relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded',
                          style: {
                            background:
                              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                          },
                          children: [
                            u.jsx('div', {
                              className: 'w-1 h-9',
                              style: {
                                background: '#FF53FC',
                                boxShadow:
                                  '0px 0px 9.6px 0px rgba(255, 83, 252, 0.55)',
                              },
                            }),
                            u.jsx('div', {
                              className: 'w-16 h-16',
                              children: u.jsx('img', {
                                className: 'w-full h-full',
                                src: 'images/icons/wins_total.svg',
                                alt: 'wins_total',
                              }),
                            }),
                            u.jsx('h1', {
                              className:
                                'text-xl  whitespace-pre-wrap break-words w-min',
                              children: e('wins_total'),
                            }),
                            u.jsx('div', {
                              className: 'ml-auto relative top-3 right-6',
                              children: u.jsx('h1', {
                                className: 'font-supercharge w-full ml-2',
                                style: {
                                  fontSize: 64,
                                  background:
                                    'linear-gradient(180deg, #FFF -13.07%, rgba(153, 153, 153, 0.05) 100%)',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                },
                                children: t.wins,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs('div', {
                      className: 'flex gap-4',
                      children: [
                        u.jsxs('div', {
                          className:
                            'relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded',
                          style: {
                            background:
                              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                          },
                          children: [
                            u.jsx('div', {
                              className: 'w-1 h-9',
                              style: {
                                background: '#7E53FF',
                                boxShadow:
                                  '0px 0px 9.6px 0px rgba(126, 83, 255, 0.55)',
                              },
                            }),
                            u.jsx('div', {
                              className: 'w-16 h-16',
                              children: u.jsx('img', {
                                className: 'w-full h-full',
                                src: 'images/icons/deaths_total.svg',
                                alt: 'deaths_total',
                              }),
                            }),
                            u.jsx('h1', {
                              className:
                                'text-xl  whitespace-pre-wrap break-words w-min',
                              children: e('deaths_total'),
                            }),
                            u.jsx('div', {
                              className: 'ml-auto relative top-3 right-6',
                              children: u.jsx('h1', {
                                className: 'font-supercharge w-full ml-2',
                                style: {
                                  fontSize: 64,
                                  background:
                                    'linear-gradient(180deg, #FFF -13.07%, rgba(153, 153, 153, 0.05) 100%)',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                },
                                children: t.deaths,
                              }),
                            }),
                          ],
                        }),
                        u.jsxs('div', {
                          className:
                            'relative w-full flex items-center gap-3 px-3 py-4 border border-white/15 rounded',
                          style: {
                            background:
                              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                          },
                          children: [
                            u.jsx('div', {
                              className: 'w-1 h-9',
                              style: {
                                background: '#FF8153',
                                boxShadow:
                                  '0px 0px 9.6px 0px rgba(255, 129, 83, 0.55)',
                              },
                            }),
                            u.jsx('div', {
                              className: 'w-16 h-16',
                              children: u.jsx('img', {
                                className: 'w-full h-full',
                                src: 'images/icons/loses_total.svg',
                                alt: 'loses_total',
                              }),
                            }),
                            u.jsx('h1', {
                              className:
                                'text-xl  whitespace-pre-wrap break-words w-min',
                              children: e('loses_total'),
                            }),
                            u.jsx('div', {
                              className: 'ml-auto relative top-3 right-6',
                              children: u.jsx('h1', {
                                className: 'font-supercharge w-full ml-2',
                                style: {
                                  fontSize: 64,
                                  background:
                                    'linear-gradient(180deg, #FFF -13.07%, rgba(153, 153, 153, 0.05) 100%)',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                },
                                children: t.loses,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsxs('div', {
          className: 'absolute inset-0 bg-cover bg-center -z-30',
          style: { backgroundImage: 'url(images/index_bg.png)' },
          children: [
            u.jsx('img', {
              width: 1024,
              className: 'absolute right-0 bottom-0 -z-10',
              src: 'images/right_banner.png',
              alt: 'r-banner',
            }),
            u.jsx('div', {
              className: 'absolute -z-20 top-0 right-0',
              style: {
                height: '100%',
                width: '520px',
                background:
                  'linear-gradient(180deg, rgba(102, 7, 7, 1) 0%, #000 100%)',
              },
            }),
            u.jsx('div', {
              className: 'absolute top-0 left-0 w-full h-16 bg-contain bg-left',
              style: {
                zIndex: -21,
                backgroundImage: 'url(images/top_banner.png)',
              },
            }),
            u.jsx('div', {
              className:
                'absolute bottom-0 left-0 w-full h-16 bg-contain bg-left',
              style: {
                zIndex: -21,
                backgroundImage: 'url(images/top_banner.png)',
              },
            }),
          ],
        }),
        u.jsx(lh, {
          isOpen: i,
          onClose: a,
          onSave: h,
          error: s ? e('only_url_error') : void 0,
        }),
      ],
    });
  },
  oh = () => {
    var h, d;
    const { t: e } = tt(),
      { currentLobby: t, userProfile: n, playableWeapons: r } = _t(),
      i = (m) => (kr() ? 'images/maps/example.png' : 'images/maps/' + m),
      l = async (m) => {
        var x;
        ((x = t.leader) == null ? void 0 : x.source) == n.source &&
          m != t.mode &&
          (await ne('nui:changeGameMode', m, !0));
      },
      s = async (m) => {
        var x;
        ((x = t.leader) == null ? void 0 : x.source) == n.source &&
          m != t.weapon &&
          (await ne('nui:changeGameWeapon', m, !0));
      },
      o = async (m) => {
        await ne('nui:changeGameTime', m, !0);
      },
      a = async (m) => {
        await ne('nui:changeGameMap', m, !0);
      },
      c = ({ mode: m, label: x }) => {
        var w;
        return u.jsx('button', {
          onClick: () => l(m),
          className: Ye('px-8 py-2.5', {
            'cursor-not-allowed':
              ((w = t.leader) == null ? void 0 : w.source) != n.source,
          }),
          style: {
            borderRadius: '4px',
            border:
              t.mode == m ? '1px solid rgba(255, 241, 83, 0.25)' : 'unset',
            background:
              t.mode == m
                ? 'radial-gradient(50% 50% at 50% 50%, rgba(255, 241, 83, 0.25) 0%, rgba(153, 144, 50, 0.25) 100%)'
                : 'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            boxShadow:
              t.mode == m
                ? '0px 0px 12.8px 0px rgba(255, 241, 83, 0.25) inset'
                : 'unset',
          },
          children: u.jsx('h1', { className: '', children: x }),
        });
      },
      p = ({ weapon: m }) => {
        var x;
        return u.jsx('button', {
          onClick: () => s(m),
          className: Ye('px-4 py-2.5', {
            'cursor-not-allowed':
              ((x = t.leader) == null ? void 0 : x.source) != n.source,
          }),
          style: {
            borderRadius: '4px',
            border:
              t.weapon == m ? '1px solid rgba(255, 241, 83, 0.25)' : 'unset',
            background:
              t.weapon == m
                ? 'radial-gradient(50% 50% at 50% 50%, rgba(255, 241, 83, 0.25) 0%, rgba(153, 144, 50, 0.25) 100%)'
                : 'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
            boxShadow:
              t.weapon == m
                ? '0px 0px 12.8px 0px rgba(255, 241, 83, 0.25) inset'
                : 'unset',
          },
          children: u.jsx('h1', {
            className: ' uppercase text-sm',
            children: m.startsWith('weapon_') ? m.replace('weapon_', '') : m,
          }),
        });
      };
    return u.jsxs('div', {
      className: 'flex flex-col gap-4 h-full w-full',
      children: [
        u.jsxs('div', {
          className: 'relative flex items-center gap-3 rounded p-4',
          style: {
            height: 66,
            background:
              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
          },
          children: [
            u.jsx('div', {
              className: 'rounded w-12 h-12 flex items-center justify-center',
              style: {
                background:
                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
              },
              children: u.jsx('img', {
                src: 'images/icons/gear.svg',
                alt: 'gear',
              }),
            }),
            u.jsxs('div', {
              className: 'overflow-hidden',
              children: [
                u.jsx('h1', {
                  className: ' text-xs text-white/55',
                  children: e('lobby'),
                }),
                u.jsx('h1', {
                  className: ' text-lg overflow-hidden text-ellipsis',
                  children: e('settings'),
                }),
              ],
            }),
          ],
        }),
        u.jsxs('div', {
          className: 'relative flex items-center gap-3 rounded px-4 py-3',
          style: {
            height: 66,
            background:
              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
          },
          children: [
            u.jsxs('div', {
              className: 'w-full flex items-center gap-3',
              children: [
                u.jsx('div', {
                  className:
                    'rounded w-12 h-12 flex items-center justify-center',
                  style: {
                    background:
                      'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                  },
                  children: u.jsx('img', {
                    src: 'images/icons/gear.svg',
                    alt: 'gear',
                  }),
                }),
                u.jsx('div', {
                  className: 'overflow-hidden',
                  children: u.jsx('h1', {
                    className: ' text-lg overflow-hidden text-ellipsis',
                    children: e('current_map'),
                  }),
                }),
              ],
            }),
            u.jsx('button', {
              onClick: () => a('next'),
              className:
                'rounded flex items-center justify-center bg-[#FFF153]/25 border-2 border-[#FFF153]/50',
              children: u.jsx(An, { className: 'w-9 h-9' }),
            }),
            u.jsx('div', {
              className:
                'ml-auto px-14 bg-black/20 flex items-center justify-center h-full rounded',
              children: u.jsx('h1', {
                className: ' text-sm whitespace-nowrap',
                children:
                  (h = t == null ? void 0 : t.map) == null ? void 0 : h.name,
              }),
            }),
            u.jsx('button', {
              onClick: () => a('prev'),
              className:
                'rounded flex items-center justify-center bg-[#FFF153]/25 border-2 border-[#FFF153]/50',
              children: u.jsx(An, { className: 'w-9 h-9 rotate-180' }),
            }),
          ],
        }),
        u.jsx('div', {
          className: 'p-2 rounded relative h-full',
          style: {
            background:
              'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
          },
          children: u.jsx('div', {
            className: 'w-full h-full rounded bg-[#121212] max-xl:h-80',
            style: {
              background: `url(${i(
                (d = t == null ? void 0 : t.map) == null ? void 0 : d.image
              )}) lightgray 50% / cover no-repeat`,
            },
          }),
        }),
        u.jsxs('div', {
          className: 'mt-auto flex flex-col gap-3 w-full',
          children: [
            u.jsxs('div', {
              className: 'flex items-center gap-3',
              children: [
                u.jsxs('div', {
                  className:
                    'relative flex items-center gap-3 rounded px-4 py-3 w-full',
                  style: {
                    height: 66,
                    background:
                      'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                  },
                  children: [
                    u.jsx('div', {
                      className:
                        'rounded w-12 h-12 min-w-12 flex items-center justify-center',
                      style: {
                        background:
                          'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                      },
                      children: u.jsx('img', {
                        src: 'images/icons/gear.svg',
                        alt: 'gear',
                      }),
                    }),
                    u.jsxs('div', {
                      className:
                        'overflow-hidden whitespace-nowrap min-w-min mr-2 max-2xl:hidden',
                      children: [
                        u.jsx('h1', {
                          className: ' text-xs text-white/55',
                          children: e('lobby'),
                        }),
                        u.jsx('h1', {
                          className: ' text-lg overflow-hidden text-ellipsis',
                          children: e('lobby_name'),
                        }),
                      ],
                    }),
                    u.jsx('div', {
                      className:
                        'w-full h-full ml-auto bg-black/20 flex items-center justify-center rounded select-none overflow-hidden px-4',
                      children: u.jsx('h1', {
                        className:
                          ' text-sm whitespace-nowrap overflow-hidden text-ellipsis',
                        children: t == null ? void 0 : t.name,
                      }),
                    }),
                  ],
                }),
                u.jsxs('div', {
                  className:
                    'relative flex items-center gap-3 rounded px-4 py-3',
                  style: {
                    height: 66,
                    background:
                      'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                  },
                  children: [
                    u.jsx('button', {
                      onClick: () => o('down'),
                      className:
                        'w-12 h-12 rounded flex items-center justify-center bg-[#FFF153]/25 border-2 border-[#FFF153]/50',
                      children: u.jsx(An, { className: 'w-full h-full' }),
                    }),
                    u.jsx('div', {
                      className:
                        'w-20 ml-auto bg-black/20 flex items-center justify-center h-full rounded',
                      children: u.jsxs('h1', {
                        className: ' text-sm whitespace-nowrap',
                        children: [t.game_time, ' : 00'],
                      }),
                    }),
                    u.jsx('button', {
                      onClick: () => o('up'),
                      className:
                        'w-12 h-12 rounded flex items-center justify-center bg-[#FFF153]/25 border-2 border-[#FFF153]/50',
                      children: u.jsx(An, {
                        className: 'w-full h-full rotate-180',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs('div', {
              className: 'relative flex items-center gap-3 rounded p-4 w-full',
              style: {
                height: 66,
                background:
                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
              },
              children: [
                u.jsx('div', {
                  className:
                    'rounded w-12 h-12 min-w-12 flex items-center justify-center',
                  style: {
                    background:
                      'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                  },
                  children: u.jsx('img', {
                    src: 'images/icons/gear.svg',
                    alt: 'gear',
                  }),
                }),
                u.jsxs('div', {
                  className: 'overflow-hidden whitespace-nowrap max-2xl:hidden',
                  children: [
                    u.jsx('h1', {
                      className: ' text-xs text-white/55',
                      children: e('lobby'),
                    }),
                    u.jsx('h1', {
                      className: ' text-lg overflow-hidden text-ellipsis',
                      children: e('playing_mode'),
                    }),
                  ],
                }),
                u.jsx('div', {
                  className: 'ml-auto flex items-center gap-2.5',
                  children: ['2x2', '3x3', '4x4', '5x5'].map((m) =>
                    u.jsx(
                      c,
                      {
                        label: m,
                        mode:
                          m == '2x2' ? 2 : m == '3x3' ? 3 : m == '4x4' ? 4 : 5,
                      },
                      m
                    )
                  ),
                }),
              ],
            }),
            u.jsxs('div', {
              className: 'relative flex items-center gap-3 rounded p-4',
              style: {
                height: 66,
                background:
                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
              },
              children: [
                u.jsx('div', {
                  className:
                    'rounded w-12 h-12 min-w-12 flex items-center justify-center',
                  style: {
                    background:
                      'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                  },
                  children: u.jsx('img', {
                    src: 'images/icons/gear.svg',
                    alt: 'gear',
                  }),
                }),
                u.jsxs('div', {
                  className: 'whitespace-nowrap max-2xl:hidden w-min',
                  children: [
                    u.jsx('h1', {
                      className: ' text-xs text-white/55',
                      children: e('lobby'),
                    }),
                    u.jsx('h1', {
                      className: ' text-lg overflow-hidden text-ellipsis',
                      children: e('playing_weapon'),
                    }),
                  ],
                }),
                u.jsx('div', {
                  className:
                    'ml-auto flex items-center gap-2.5 overflow-auto scrollbar-hide',
                  children: r.map((m, x) => u.jsx(p, { weapon: m }, x)),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function Ea(e) {
  return Hi({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z',
        },
      },
    ],
  })(e);
}
const ah = () => {
    var r, i, l, s;
    const { t: e } = tt(),
      { currentLobby: t } = _t(),
      n = async (o) => {
        await ne('nui:changeTeamInLobby', o, !0);
      };
    return u.jsxs('div', {
      className: 'flex flex-col',
      children: [
        u.jsxs('div', {
          className: 'flex flex-col gap-3',
          children: [
            u.jsxs('div', {
              className: 'flex items-center gap-1.5',
              children: [
                u.jsx('div', {
                  className: 'w-2 h-2 min-w-2 min-h-2',
                  style: {
                    background: '#FF6153',
                    boxShadow: '0px 0px 10.5px 0px #FF6153',
                  },
                }),
                u.jsx('h1', {
                  className: ' text-xl uppercase',
                  children: e('red_team'),
                }),
              ],
            }),
            ((r = t.members) == null ? void 0 : r.length) > 0 &&
              u.jsx('div', {
                className: 'grid grid-cols-5 gap-3',
                children:
                  (i = [
                    ...t.members.filter((o) => o.team === 1),
                    ...Array(5),
                  ].slice(0, t.mode)) == null
                    ? void 0
                    : i.map((o, a) => {
                        var c;
                        return u.jsx(
                          'div',
                          {
                            className:
                              'rounded p-3 flex flex-col items-center justify-center',
                            style: {
                              height: 180,
                              border: '0.5px solid rgba(255, 97, 83, .5)',
                              background:
                                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 97, 83, 0.10) 0%, rgba(255, 97, 83, 0.10) 100%)',
                            },
                            children:
                              o != null && o.name
                                ? u.jsxs(u.Fragment, {
                                    children: [
                                      u.jsxs('div', {
                                        className:
                                          'relative min-w-20 w-20 min-h-20 h-20 rounded',
                                        children: [
                                          u.jsx('img', {
                                            src: dt(
                                              o == null ? void 0 : o.photo
                                            ),
                                            alt: 'profile',
                                            className: 'absolute inset-0 z-[1]',
                                          }),
                                          u.jsx('div', {
                                            className:
                                              'relative min-w-20 min-h-20 blur-lg z-0',
                                            children: u.jsx('img', {
                                              src: dt(
                                                o == null ? void 0 : o.photo
                                              ),
                                              alt: 'profile',
                                            }),
                                          }),
                                        ],
                                      }),
                                      u.jsx('div', {
                                        className:
                                          'mt-3 w-full rounded-t p-1 text-center',
                                        style: {
                                          background:
                                            'radial-gradient(111.88% 52.36% at 50% 50%, rgba(255, 97, 83, 0.20) 0%, rgba(153, 58, 50, 0.20) 100%)',
                                        },
                                        children: u.jsx('h1', {
                                          className: ' text-sm text-[#FF6153]',
                                          children: o == null ? void 0 : o.name,
                                        }),
                                      }),
                                      u.jsxs('div', {
                                        className: 'w-full rounded-b flex ',
                                        children: [
                                          u.jsx('div', {
                                            className:
                                              'flex items-center justify-center bg-white/10 rounded-bl text-center py-0.5 px-2',
                                            children: u.jsxs('h1', {
                                              className:
                                                ' text-sm whitespace-nowrap overflow-hidden text-ellipsis',
                                              children: [
                                                e('id'),
                                                ' ',
                                                o.source,
                                              ],
                                            }),
                                          }),
                                          u.jsx('div', {
                                            className:
                                              'w-full flex items-center justify-center bg-white/10 rounded-br text-center py-0.5 px-2 overflow-hidden text-ellipsis',
                                            style: {
                                              background:
                                                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                                            },
                                            children: u.jsxs('h1', {
                                              className:
                                                ' text-sm whitespace-nowrap overflow-hidden',
                                              children: [
                                                e('kd'),
                                                ' ',
                                                (c =
                                                  o == null
                                                    ? void 0
                                                    : o.kd_rate) == null
                                                  ? void 0
                                                  : c.toFixed(2),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : u.jsx('button', {
                                    onClick: () => n(1),
                                    className:
                                      'w-full h-full flex items-center justify-center group',
                                    children: u.jsx(Ea, {
                                      className:
                                        'w-20 h-20 m-auto opacity-10 group-hover:opacity-50 transition',
                                    }),
                                  }),
                          },
                          a
                        );
                      }),
              }),
          ],
        }),
        u.jsxs('div', {
          className: 'w-full flex items-center justify-between gap-6 my-4',
          children: [
            u.jsx('div', {
              className: 'w-full h-[1px]',
              style: {
                background:
                  'linear-gradient(-90deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.00) 100%)',
              },
            }),
            u.jsxs('div', {
              className:
                'relative w-24 h-24 min-w-24 min-h-24 border rounded-full border-white/5 flex items-center justify-center',
              children: [
                u.jsx('div', {
                  className:
                    'absolute w-20 h-20 min-w-20 min-h-20 border rounded-full border-white/5',
                }),
                u.jsx('img', {
                  className: 'w-full h-full scale-150',
                  src: 'images/vs.png',
                  alt: 'vs',
                }),
              ],
            }),
            u.jsx('div', {
              className: 'w-full h-[1px]',
              style: {
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.00) 100%)',
              },
            }),
          ],
        }),
        u.jsxs('div', {
          className: 'flex flex-col gap-3',
          children: [
            u.jsxs('div', {
              className: 'flex items-center gap-1.5',
              children: [
                u.jsx('div', {
                  className: 'w-2 h-2 min-w-2 min-h-2',
                  style: {
                    background: '#53A3FF',
                    boxShadow: '0px 0px 10.5px 0px #53A3FF',
                  },
                }),
                u.jsx('h1', {
                  className: ' text-xl uppercase',
                  children: e('blue_team'),
                }),
              ],
            }),
            ((l = t.members) == null ? void 0 : l.length) > 0 &&
              u.jsx('div', {
                className: 'grid grid-cols-5 gap-3',
                children:
                  (s = [
                    ...t.members.filter((o) => o.team === 0),
                    ...Array(5),
                  ].slice(0, t.mode)) == null
                    ? void 0
                    : s.map((o, a) => {
                        var c;
                        return u.jsx(
                          'div',
                          {
                            className:
                              'rounded p-3 flex flex-col items-center justify-center',
                            style: {
                              height: 180,
                              border: '0.5px solid rgba(83, 163, 255, .5)',
                              background:
                                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(83, 163, 255, 0.10) 0%, rgba(83, 163, 255, 0.10) 100%)',
                            },
                            children:
                              o != null && o.name
                                ? u.jsxs(u.Fragment, {
                                    children: [
                                      u.jsxs('div', {
                                        className:
                                          'relative min-w-20 w-20 min-h-20 h-20 rounded',
                                        children: [
                                          u.jsx('img', {
                                            src: dt(
                                              o == null ? void 0 : o.photo
                                            ),
                                            alt: 'profile',
                                            className: 'absolute inset-0 z-[1]',
                                          }),
                                          u.jsx('div', {
                                            className:
                                              'relative min-w-20 min-h-20 blur-lg z-0',
                                            children: u.jsx('img', {
                                              src: dt(
                                                o == null ? void 0 : o.photo
                                              ),
                                              alt: 'profile',
                                            }),
                                          }),
                                        ],
                                      }),
                                      u.jsx('div', {
                                        className:
                                          'mt-3 w-full rounded-t p-1 text-center',
                                        style: {
                                          background:
                                            'radial-gradient(111.88% 52.36% at 50% 50%, rgba(83, 163, 255, 0.20) 0%, rgba(48, 101, 163, 0.20) 100%)',
                                        },
                                        children: u.jsx('h1', {
                                          className: ' text-sm text-[#53A3FF]',
                                          children: o == null ? void 0 : o.name,
                                        }),
                                      }),
                                      u.jsxs('div', {
                                        className: 'w-full rounded-b flex ',
                                        children: [
                                          u.jsx('div', {
                                            className:
                                              'flex items-center justify-center bg-white/10 rounded-bl text-center py-0.5 px-2',
                                            children: u.jsxs('h1', {
                                              className:
                                                ' text-sm whitespace-nowrap overflow-hidden text-ellipsis',
                                              children: [
                                                e('id'),
                                                ' ',
                                                o.source,
                                              ],
                                            }),
                                          }),
                                          u.jsx('div', {
                                            className:
                                              'w-full flex items-center justify-center bg-white/10 rounded-br text-center py-0.5 px-2 overflow-hidden text-ellipsis',
                                            style: {
                                              background:
                                                'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                                            },
                                            children: u.jsxs('h1', {
                                              className:
                                                ' text-sm whitespace-nowrap overflow-hidden',
                                              children: [
                                                e('kd'),
                                                ' ',
                                                (c =
                                                  o == null
                                                    ? void 0
                                                    : o.kd_rate) == null
                                                  ? void 0
                                                  : c.toFixed(2),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : u.jsx('button', {
                                    onClick: () => n(0),
                                    className:
                                      'w-full h-full flex items-center justify-center group',
                                    children: u.jsx(Ea, {
                                      className:
                                        'w-20 h-20 m-auto opacity-10 group-hover:opacity-50 transition',
                                    }),
                                  }),
                          },
                          a
                        );
                      }),
              }),
          ],
        }),
      ],
    });
  },
  uh = ({ state: e }) => {
    const { t } = tt(),
      n = async (r) => {
        const i = r == 'red' ? 1 : 0;
        await ne('nui:changeTeamInLobby', i, !0), e(!0);
      };
    return u.jsxs('div', {
      className: 'w-full h-full flex items-center justify-center bg-[#121212]',
      children: [
        u.jsxs('div', {
          className: 'relative w-full h-full flex items-center justify-center',
          children: [
            u.jsxs('button', {
              onClick: () => n('blue'),
              className: 'flex flex-col items-center justify-center z-10',
              children: [
                u.jsx('img', {
                  width: 720,
                  src: 'images/team_blue.png',
                  alt: 'team_blue',
                }),
                u.jsxs('div', {
                  className: 'w-min',
                  children: [
                    u.jsx('h1', {
                      className: 'uppercase  whitespace-nowrap',
                      style: { fontSize: 64 },
                      children: t('blue_team'),
                    }),
                    u.jsx('h1', {
                      className: 'text-center  text-sm text-white/55',
                      children: t('desc_blue_team'),
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(u.Fragment, {
              children: u.jsx('div', {
                className: 'absolute inset-0 -mr-[132px] bg-cover z-0',
                style: { backgroundImage: 'url(images/team_blue_bg.png)' },
              }),
            }),
          ],
        }),
        u.jsxs('div', {
          className: 'relative w-full h-full flex items-center justify-center',
          children: [
            u.jsxs('button', {
              onClick: () => n('red'),
              className: 'flex flex-col items-center justify-center z-10',
              children: [
                u.jsx('img', {
                  width: 720,
                  src: 'images/team_red.png',
                  alt: 'team_red',
                }),
                u.jsxs('div', {
                  className: 'w-min',
                  children: [
                    u.jsx('h1', {
                      className: 'uppercase  whitespace-nowrap',
                      style: { fontSize: 64 },
                      children: t('red_team'),
                    }),
                    u.jsx('h1', {
                      className: 'text-center  text-sm text-white/55',
                      children: t('desc_red_team'),
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(u.Fragment, {
              children: u.jsx('div', {
                className: 'absolute inset-0 -ml-[132px] bg-cover z-0',
                style: { backgroundImage: 'url(images/team_red_bg.png)' },
              }),
            }),
          ],
        }),
      ],
    });
  },
  ch = ({ message: e }) =>
    u.jsxs('div', {
      id: 'alert-2',
      className:
        'fixed right-2 top-32 flex items-center py-3 px-10 mb-4 rounded bg-gray-800 text-red-500 border border-white/10',
      role: 'alert',
      children: [
        u.jsx('svg', {
          className: 'flex-shrink-0 w-4 h-4',
          'aria-hidden': 'true',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'currentColor',
          viewBox: '0 0 20 20',
          children: u.jsx('path', {
            d: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z',
          }),
        }),
        u.jsx('div', { className: 'ms-2 text-sm ', children: e }),
      ],
    }),
  dh = () => {
    var p, h;
    const { t: e } = tt(),
      { currentLobby: t, leaveLobby: n, userProfile: r } = _t(),
      [i, l] = T.useState(
        ((p = t == null ? void 0 : t.leader) == null ? void 0 : p.source) !=
          r.source
      ),
      [s, o] = T.useState(void 0),
      a = async () => {
        const d = await ne('nui:startOwnLobby', !0, {
          state: !1,
          message: 'You can not start it alone !',
        });
        !d.state &&
          d.message &&
          (o(d.message), setTimeout(() => o(void 0), 4e3));
      },
      c = n;
    return u.jsxs('div', {
      className: 'relative w-full h-full',
      children: [
        s && u.jsx(ch, { message: s }),
        i
          ? u.jsxs('div', {
              className:
                'relative w-full h-full px-16 py-32 flex flex-col gap-6 overflow-auto',
              children: [
                u.jsx(fo, {}),
                u.jsxs('div', {
                  className:
                    'mt-4 flex max-xl:flex-col justify-between gap-40 xl:gap-20 max-xl:gap-10',
                  children: [
                    u.jsxs('div', {
                      className:
                        'w-full flex flex-col gap-3 2xl:w-1/2 max-xl:w-3/4 max-xl:mx-auto',
                      children: [
                        u.jsxs('div', {
                          className: 'grid grid-cols-7 items-center gap-5',
                          children: [
                            u.jsxs('div', {
                              className:
                                'relative flex items-center gap-3 rounded p-4 col-span-3',
                              style: {
                                height: 66,
                                background:
                                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                              },
                              children: [
                                u.jsx('div', {
                                  className:
                                    'rounded w-12 h-12 min-w-12 min-h-12 flex items-center justify-center',
                                  style: {
                                    background:
                                      'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                                  },
                                  children: u.jsx('img', {
                                    src: 'images/icons/lobby_leader.svg',
                                    alt: 'lobby_leader',
                                  }),
                                }),
                                u.jsxs('div', {
                                  className:
                                    'overflow-hidden whitespace-nowrap',
                                  children: [
                                    u.jsx('h1', {
                                      className: ' text-xs text-white/55',
                                      children: e('lobby_leader'),
                                    }),
                                    u.jsx('h1', {
                                      className:
                                        ' text-lg overflow-hidden text-ellipsis',
                                      children:
                                        (h = t == null ? void 0 : t.leader) ==
                                        null
                                          ? void 0
                                          : h.name,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsx('button', {
                              onClick: a,
                              className:
                                'relative flex items-center justify-center rounded p-4 col-span-2 border border-white/15 transition hover:border-white/25',
                              style: {
                                height: 66,
                                background:
                                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                              },
                              children: u.jsx('h1', {
                                className: '',
                                children: e('start_game'),
                              }),
                            }),
                            u.jsx('button', {
                              onClick: c,
                              className:
                                'relative flex items-center justify-center rounded p-4 col-span-2 border border-white/15 transition hover:border-white/25',
                              style: {
                                height: 66,
                                background:
                                  'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                              },
                              children: u.jsx('h1', {
                                className: '',
                                children: e('leave_lobby'),
                              }),
                            }),
                          ],
                        }),
                        u.jsx('div', {
                          className: 'mt-2',
                          children: u.jsx(ah, {}),
                        }),
                      ],
                    }),
                    u.jsx('hr', {
                      className: 'opacity-25 hidden max-xl:block',
                    }),
                    u.jsx('div', {
                      className: 'max-xl:w-1/2 max-xl:mx-auto max-w-[40%]',
                      children: u.jsx(oh, {}),
                    }),
                  ],
                }),
              ],
            })
          : u.jsx(uh, { state: l }),
        u.jsxs('div', {
          className: 'absolute inset-0 bg-cover bg-center -z-10 bg-[#121212]',
          style: { backgroundImage: 'url(images/index_bg.png)' },
          children: [
            u.jsx('div', {
              className: 'absolute top-0 left-0 w-full h-16 bg-contain bg-left',
              style: {
                zIndex: -21,
                backgroundImage: 'url(images/top_banner.png)',
              },
            }),
            u.jsx('div', {
              className:
                'absolute bottom-0 left-0 w-full h-16 bg-contain bg-left',
              style: {
                zIndex: -21,
                backgroundImage: 'url(images/top_banner.png)',
              },
            }),
          ],
        }),
      ],
    });
  };
function fh(e) {
  return Hi({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z',
        },
      },
    ],
  })(e);
}
const ph = () =>
    u.jsx('div', {
      className: 'm-auto',
      children: u.jsx(fh, { className: 'w-10 h-10 animate-spin' }),
    }),
  hh = () => {
    const { t: e } = tt(),
      { setPage: t } = _t(),
      [n, r] = T.useState(!1),
      [i, l] = T.useState([]);
    T.useEffect(() => {
      const o = () => {
        ne('nui:getActiveLobbies', !0, [
          {
            game_time: 5,
            id: 1,
            leader: { name: 'Ali Koç', source: 1, kd_rate: 1 },
            map: { name: 'de_default', image: 'example' },
            members: [{ name: 'Ali Koç', source: 1, team: 1, kd_rate: 1 }],
            mode: 2,
            name: 'Lobby #1',
            started: !0,
          },
          {
            game_time: 5,
            id: 1,
            leader: { name: 'Ali Koç', source: 1, kd_rate: 1 },
            map: { name: 'de_default', image: 'example' },
            members: [{ name: 'Ali Koç', source: 1, team: 1, kd_rate: 1 }],
            mode: 2,
            name: 'Lobby #1',
            started: !1,
          },
        ]).then((c) => {
          l(c), r(!0);
        });
      };
      o();
      const a = setInterval(() => {
        o();
      }, 5e3);
      return () => {
        clearInterval(a), l([]);
      };
    }, []);
    const s = async (o) => {
      if ((r(!1), await ne('nui:joinLobby', o, !0))) kr() || t('create-lobby');
      else {
        const c = await ne('nui:getActiveLobbies', !0, []);
        l(c);
      }
      r(!0);
    };
    return u.jsxs('div', {
      className: 'relative w-full h-full px-16 py-32 flex flex-col gap-6',
      children: [
        u.jsx(fo, { goHome: !0 }),
        u.jsxs('div', {
          className:
            'pb-20 w-full h-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 3xl:w-[45%] flex flex-col gap-3',
          children: [
            u.jsx('h1', {
              className: 'text-xl  uppercase',
              children: e('lobbies'),
            }),
            n
              ? u.jsxs('div', {
                  className: 'relative overflow-x-auto scrollbar-hide',
                  children: [
                    u.jsxs('table', {
                      className:
                        'w-full h-full text-sm text-left rtl:text-right',
                      children: [
                        u.jsx('thead', {
                          className: 'text-white/55',
                          children: u.jsxs('tr', {
                            children: [
                              u.jsx('th', {
                                scope: 'col',
                                className: 'px-6 py-2 bg-black/25 rounded-tl',
                                children: e('leader'),
                              }),
                              u.jsx('th', {
                                scope: 'col',
                                className: 'px-6 py-2 bg-black/25',
                                children: e('map'),
                              }),
                              u.jsx('th', {
                                scope: 'col',
                                className: 'px-6 py-2 bg-black/25',
                                children: e('time'),
                              }),
                              u.jsx('th', {
                                scope: 'col',
                                className: 'px-6 py-2 bg-black/25 text-center',
                                children: e('player'),
                              }),
                              u.jsx('th', {
                                scope: 'col',
                                className:
                                  'px-6 py-2 bg-black/25 rounded-tr text-right',
                                children: e('management'),
                              }),
                            ],
                          }),
                        }),
                        u.jsx('tbody', {
                          children: Object.values(i)
                            .sort(
                              (o, a) =>
                                (o.started ?? 1 / 0) - (a.started ?? 1 / 0)
                            )
                            .map((o, a) => {
                              var c, p;
                              return u.jsxs(
                                'tr',
                                {
                                  className: 'odd:bg-lobby-1 even:bg-lobby-2 ',
                                  children: [
                                    u.jsx('th', {
                                      scope: 'row',
                                      className:
                                        'px-6 py-4 font-medium whitespace-nowrap text-white',
                                      children:
                                        (c = o == null ? void 0 : o.leader) ==
                                        null
                                          ? void 0
                                          : c.name,
                                    }),
                                    u.jsx('td', {
                                      className: 'px-6 py-4',
                                      children:
                                        (p = o == null ? void 0 : o.map) == null
                                          ? void 0
                                          : p.name,
                                    }),
                                    u.jsxs('td', {
                                      className: 'px-6 py-4',
                                      children: [
                                        o.game_time,
                                        ' ',
                                        e('minutes'),
                                      ],
                                    }),
                                    u.jsxs('td', {
                                      className: 'px-6 py-4 text-center',
                                      children: [
                                        o.members.length,
                                        '/',
                                        o.mode * 2,
                                      ],
                                    }),
                                    u.jsx('td', {
                                      className: 'px-6 py-4 text-right',
                                      children: u.jsx('button', {
                                        onClick: () => !o.started && s(o.id),
                                        className: Ye('border rounded', {
                                          'cursor-not-allowed': o.started,
                                        }),
                                        style: {
                                          border: o.started
                                            ? '1px solid rgba(255, 97, 83, 0.25)'
                                            : '1px solid rgba(255, 241, 83, 0.25)',
                                          background: o.started
                                            ? 'radial-gradient(50% 50% at 50% 50%, rgba(255, 97, 83, 0.25) 0%, rgba(176, 55, 57, 0.25) 100%)'
                                            : 'radial-gradient(50% 50% at 50% 50%, rgba(255, 241, 83, 0.25) 0%, rgba(153, 144, 50, 0.25) 100%)',
                                          boxShadow: o.started
                                            ? '0px 0px 12.8px 0px rgba(255, 97, 83, 0.25) inset'
                                            : '0px 0px 12.8px 0px rgba(255, 241, 83, 0.25) inset',
                                        },
                                        children: u.jsx('h1', {
                                          className: 'text-sm  py-2 px-8',
                                          children: o.started
                                            ? e('started')
                                            : e('join'),
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                a
                              );
                            }),
                        }),
                      ],
                    }),
                    i.length == 0 &&
                      u.jsx('h1', {
                        className: 'my-8 text-center w-full text-3xl ',
                        children: e('no_lobby'),
                      }),
                  ],
                })
              : u.jsx('div', {
                  className: 'mt-8 mx-auto',
                  children: u.jsx(ph, {}),
                }),
          ],
        }),
        u.jsxs('div', {
          className: 'absolute inset-0 bg-cover bg-center -z-30',
          style: { backgroundImage: 'url(images/index_bg.png)' },
          children: [
            u.jsx('img', {
              width: 1024,
              className: 'absolute right-0 bottom-0 -z-10',
              src: 'images/right_banner.png',
              alt: 'r-banner',
            }),
            u.jsx('div', {
              className: 'absolute -z-20 top-0 right-0',
              style: {
                height: '100%',
                width: '520px',
                background:
                  'linear-gradient(180deg, rgba(102, 7, 7, 1) 0%, #000 100%)',
              },
            }),
            u.jsx('div', {
              className: 'absolute top-0 left-0 w-full h-16 bg-contain bg-left',
              style: {
                zIndex: -21,
                backgroundImage: 'url(images/top_banner.png)',
              },
            }),
            u.jsx('div', {
              className:
                'absolute bottom-0 left-0 w-full h-16 bg-contain bg-left',
              style: {
                zIndex: -21,
                backgroundImage: 'url(images/top_banner.png)',
              },
            }),
          ],
        }),
      ],
    });
  },
  gh = () => {
    var l, s;
    const { currentLobby: e } = _t(),
      [t, n] = T.useState(0);
    T.useEffect(() => {
      const o = setInterval(() => {
        if (!e.finish_time) return;
        const a = new Date().getTime(),
          c = e.finish_time * 1e3 - a;
        n(c >= 0 ? Math.floor(c / 1e3) : 0);
      }, 1e3);
      return () => clearInterval(o);
    }, [e.finish_time]);
    const r = Math.floor(t / 60),
      i = t % 60;
    return (
      e.started &&
      (e == null ? void 0 : e.members) &&
      e.score &&
      u.jsxs('div', {
        className: 'fixed flex left-1/2 -translate-x-1/2 space-x-1',
        children: [
          u.jsxs('div', {
            className: 'flex',
            children: [
              Array.from({
                length: e.mode - e.members.filter((o) => o.team == 1).length,
              }).map((o, a) =>
                u.jsx(
                  'div',
                  { className: Ye('w-14 h-14 border-2 invisible') },
                  a
                )
              ),
              (l = e == null ? void 0 : e.members) == null
                ? void 0
                : l
                    .filter((o) => o.team === 1)
                    .map((o, a) =>
                      u.jsx(
                        'div',
                        {
                          className: 'w-14 h-14',
                          children: u.jsx('img', {
                            className: Ye(
                              'border-2 border-[#FF6153] w-full h-full',
                              { 'border-l-0': a != 0 }
                            ),
                            src: dt(o.photo),
                            alt: 'profile_photo',
                          }),
                        },
                        a
                      )
                    ),
            ],
          }),
          u.jsxs('div', {
            className: 'flex flex-col justify-between',
            children: [
              u.jsx('div', {
                className:
                  'px-4 w-24 border-2 border-white/15 flex items-center justify-center',
                style: {
                  background:
                    'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                },
                children: u.jsxs('h1', {
                  className: ' whitespace-nowrap',
                  children: [
                    String(r).padStart(2, '0'),
                    ' : ',
                    String(i).padStart(2, '0'),
                  ],
                }),
              }),
              u.jsxs('div', {
                className: 'flex h-full',
                children: [
                  u.jsx('div', {
                    className:
                      'w-full border-2 border-t-0 border-r-0 border-white/15 flex items-center justify-center',
                    style: {
                      background:
                        'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                    },
                    children: u.jsx('h1', {
                      className: '',
                      children: e == null ? void 0 : e.score[1],
                    }),
                  }),
                  u.jsx('div', {
                    className:
                      'w-full border-2 border-t-0 border-white/15 flex items-center justify-center',
                    style: {
                      background:
                        'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
                    },
                    children: u.jsx('h1', {
                      className: '',
                      children: e == null ? void 0 : e.score[0],
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs('div', {
            className: 'flex',
            children: [
              (s = e == null ? void 0 : e.members) == null
                ? void 0
                : s
                    .filter((o) => o.team === 0)
                    .map((o, a) =>
                      u.jsx(
                        'div',
                        {
                          className: 'w-14 h-14',
                          children: u.jsx('img', {
                            className: Ye(
                              'border-2 border-[#53A3FF] w-full h-full',
                              { 'border-l-0': a != 0 }
                            ),
                            src: dt(o.photo),
                            alt: 'profile_photo',
                          }),
                        },
                        a
                      )
                    ),
              Array.from({
                length: e.mode - e.members.filter((o) => o.team == 0).length,
              }).map((o, a) =>
                u.jsx('div', { className: 'w-14 h-14 border-2 invisible' }, a)
              ),
            ],
          }),
        ],
      })
    );
  },
  mh = () => {
    const { page: e } = _t();
    return u.jsxs(u.Fragment, {
      children: [
        e == 'profile' && u.jsx(sh, {}),
        e == 'create-lobby' && u.jsx(dh, {}),
        e == 'lobbies' && u.jsx(hh, {}),
        e == 'in-game' && u.jsx(gh, {}),
      ],
    });
  },
  vh = T.createContext({}),
  yh = ({ children: e }) => {
    const [t, n] = T.useState(!1);
    T.useEffect(() => {
      if (!t) return;
      const i = (l) => {
        !kr() && ['Escape'].includes(l.code) && ne('nui:hideFrame', !0, !0);
      };
      return (
        window.addEventListener('keydown', i),
        () => window.removeEventListener('keydown', i)
      );
    }, [t]),
      Zt('ui:setVisible', n);
    const r = T.useMemo(() => ({ visible: t, setVisible: n }), [t]);
    return u.jsx(vh.Provider, {
      value: r,
      children: u.jsx('main', {
        style: { visibility: t ? 'visible' : 'hidden' },
        className: Ye('w-full h-screen'),
        children: e,
      }),
    });
  },
  O = (e) => typeof e == 'string',
  bn = () => {
    let e, t;
    const n = new Promise((r, i) => {
      (e = r), (t = i);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  La = (e) => (e == null ? '' : '' + e),
  xh = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  wh = /###/g,
  Pa = (e) => (e && e.indexOf('###') > -1 ? e.replace(wh, '.') : e),
  Oa = (e) => !e || O(e),
  Xn = (e, t, n) => {
    const r = O(t) ? t.split('.') : t;
    let i = 0;
    for (; i < r.length - 1; ) {
      if (Oa(e)) return {};
      const l = Pa(r[i]);
      !e[l] && n && (e[l] = new n()),
        Object.prototype.hasOwnProperty.call(e, l) ? (e = e[l]) : (e = {}),
        ++i;
    }
    return Oa(e) ? {} : { obj: e, k: Pa(r[i]) };
  },
  Fa = (e, t, n) => {
    const { obj: r, k: i } = Xn(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[i] = n;
      return;
    }
    let l = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      o = Xn(e, s, Object);
    for (; o.obj === void 0 && s.length; )
      (l = `${s[s.length - 1]}.${l}`),
        (s = s.slice(0, s.length - 1)),
        (o = Xn(e, s, Object)),
        o && o.obj && typeof o.obj[`${o.k}.${l}`] < 'u' && (o.obj = void 0);
    o.obj[`${o.k}.${l}`] = n;
  },
  kh = (e, t, n, r) => {
    const { obj: i, k: l } = Xn(e, t, Object);
    (i[l] = i[l] || []), i[l].push(n);
  },
  ji = (e, t) => {
    const { obj: n, k: r } = Xn(e, t);
    if (n) return n[r];
  },
  Sh = (e, t, n) => {
    const r = ji(e, n);
    return r !== void 0 ? r : ji(t, n);
  },
  ld = (e, t, n) => {
    for (const r in t)
      r !== '__proto__' &&
        r !== 'constructor' &&
        (r in e
          ? O(e[r]) ||
            e[r] instanceof String ||
            O(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : ld(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  Jt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var Nh = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const jh = (e) => (O(e) ? e.replace(/[&<>"'\/]/g, (t) => Nh[t]) : e);
class Ch {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const _h = [' ', ',', '?', '!', ';'],
  Eh = new Ch(20),
  Lh = (e, t, n) => {
    (t = t || ''), (n = n || '');
    const r = _h.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0) return !0;
    const i = Eh.getRegExp(
      `(${r.map((s) => (s === '?' ? '\\?' : s)).join('|')})`
    );
    let l = !i.test(e);
    if (!l) {
      const s = e.indexOf(n);
      s > 0 && !i.test(e.substring(0, s)) && (l = !0);
    }
    return l;
  },
  ms = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let i = e;
    for (let l = 0; l < r.length; ) {
      if (!i || typeof i != 'object') return;
      let s,
        o = '';
      for (let a = l; a < r.length; ++a)
        if ((a !== l && (o += n), (o += r[a]), (s = i[o]), s !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof s) > -1 &&
            a < r.length - 1
          )
            continue;
          l += a - l + 1;
          break;
        }
      i = s;
    }
    return i;
  },
  Ci = (e) => e && e.replace('_', '-'),
  Ph = {
    type: 'logger',
    log(e) {
      this.output('log', e);
    },
    warn(e) {
      this.output('warn', e);
    },
    error(e) {
      this.output('error', e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class _i {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || Ph),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (O(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new _i(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new _i(this.logger, t)
    );
  }
}
var Ae = new _i();
class Wi {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [o, a] = s;
        for (let c = 0; c < a; c++) o(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((s) => {
          let [o, a] = s;
          for (let c = 0; c < a; c++) o.apply(o, [t, ...r]);
        });
  }
}
class Ra extends Wi {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      s =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let o;
    t.indexOf('.') > -1
      ? (o = t.split('.'))
      : ((o = [t, n]),
        r &&
          (Array.isArray(r)
            ? o.push(...r)
            : O(r) && l
            ? o.push(...r.split(l))
            : o.push(r)));
    const a = ji(this.data, o);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf('.') > -1 &&
        ((t = o[0]), (n = o[1]), (r = o.slice(2).join('.'))),
      a || !s || !O(r)
        ? a
        : ms(this.data && this.data[t] && this.data[t][n], r, l)
    );
  }
  addResource(t, n, r, i) {
    let l =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let o = [t, n];
    r && (o = o.concat(s ? r.split(s) : r)),
      t.indexOf('.') > -1 && ((o = t.split('.')), (i = n), (n = o[1])),
      this.addNamespaces(n),
      Fa(this.data, o, i),
      l.silent || this.emit('added', t, n, r, i);
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const l in r)
      (O(r[l]) || Array.isArray(r[l])) &&
        this.addResource(t, n, l, r[l], { silent: !0 });
    i.silent || this.emit('added', t, n, r);
  }
  addResourceBundle(t, n, r, i, l) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      o = [t, n];
    t.indexOf('.') > -1 && ((o = t.split('.')), (i = r), (r = n), (n = o[1])),
      this.addNamespaces(n);
    let a = ji(this.data, o) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? ld(a, r, l) : (a = { ...a, ...r }),
      Fa(this.data, o, a),
      s.silent || this.emit('added', t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var sd = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((l) => {
        this.processors[l] && (t = this.processors[l].process(t, n, r, i));
      }),
      t
    );
  },
};
const za = {};
class Ei extends Wi {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      xh(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Ae.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ':');
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let l = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      o =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !Lh(t, r, i);
    if (s && !o) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: O(l) ? [l] : l };
      const c = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(c[0]) > -1)) &&
        (l = c.shift()),
        (t = c.join(i));
    }
    return { key: t, namespaces: O(l) ? [l] : l };
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      l =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: o } = this.extractFromKey(t[t.length - 1], n),
      a = o[o.length - 1],
      c = n.lng || this.language,
      p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === 'cimode') {
      if (p) {
        const y = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${a}${y}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: c,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${a}${y}${s}`;
      }
      return i
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: c,
            usedNS: a,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const h = this.resolve(t, n);
    let d = h && h.res;
    const m = (h && h.usedKey) || s,
      x = (h && h.exactUsedKey) || s,
      w = Object.prototype.toString.apply(d),
      L = ['[object Number]', '[object Function]', '[object RegExp]'],
      g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      f = !this.i18nFormat || this.i18nFormat.handleAsObject,
      v = !O(d) && typeof d != 'boolean' && typeof d != 'number';
    if (f && d && v && L.indexOf(w) < 0 && !(O(g) && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          );
        const y = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(m, d, { ...n, ns: o })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return i
          ? ((h.res = y), (h.usedParams = this.getUsedParamsDetails(n)), h)
          : y;
      }
      if (l) {
        const y = Array.isArray(d),
          S = y ? [] : {},
          j = y ? x : m;
        for (const N in d)
          if (Object.prototype.hasOwnProperty.call(d, N)) {
            const E = `${j}${l}${N}`;
            (S[N] = this.translate(E, { ...n, joinArrays: !1, ns: o })),
              S[N] === E && (S[N] = d[N]);
          }
        d = S;
      }
    } else if (f && O(g) && Array.isArray(d))
      (d = d.join(g)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let y = !1,
        S = !1;
      const j = n.count !== void 0 && !O(n.count),
        N = Ei.hasDefaultValue(n),
        E = j ? this.pluralResolver.getSuffix(c, n.count, n) : '',
        V =
          n.ordinal && j
            ? this.pluralResolver.getSuffix(c, n.count, { ordinal: !1 })
            : '',
        R =
          j &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        ee =
          (R && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${E}`] ||
          n[`defaultValue${V}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && N && ((y = !0), (d = ee)),
        this.isValidLookup(d) || ((S = !0), (d = s));
      const Et =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          S
            ? void 0
            : d,
        nt = N && ee !== d && this.options.updateMissing;
      if (S || y || nt) {
        if (
          (this.logger.log(
            nt ? 'updateKey' : 'missingKey',
            c,
            a,
            s,
            nt ? ee : d
          ),
          l)
        ) {
          const C = this.resolve(s, { ...n, keySeparator: !1 });
          C &&
            C.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let Lt = [];
        const rt = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && rt && rt[0])
          for (let C = 0; C < rt.length; C++) Lt.push(rt[C]);
        else
          this.options.saveMissingTo === 'all'
            ? (Lt = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Lt.push(n.lng || this.language);
        const Gt = (C, P, F) => {
          const U = N && F !== d ? F : Et;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(C, a, P, U, nt, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(C, a, P, U, nt, n),
            this.emit('missingKey', C, a, P, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && j
            ? Lt.forEach((C) => {
                const P = this.pluralResolver.getSuffixes(C, n);
                R &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  P.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  P.push(`${this.options.pluralSeparator}zero`),
                  P.forEach((F) => {
                    Gt([C], s + F, n[`defaultValue${F}`] || ee);
                  });
              })
            : Gt(Lt, s, ee));
      }
      (d = this.extendTranslation(d, t, n, h, r)),
        S &&
          d === s &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${a}:${s}`),
        (S || y) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s,
                y ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return i
      ? ((h.res = d), (h.usedParams = this.getUsedParamsDetails(n)), h)
      : d;
  }
  extendTranslation(t, n, r, i, l) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const c =
        O(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let p;
      if (c) {
        const d = t.match(this.interpolator.nestingRegexp);
        p = d && d.length;
      }
      let h = r.replace && !O(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (h = { ...this.options.interpolation.defaultVariables, ...h }),
        (t = this.interpolator.interpolate(
          t,
          h,
          r.lng || this.language || i.usedLng,
          r
        )),
        c)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          m = d && d.length;
        p < m && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        i &&
        i.res &&
        (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, m = new Array(d), x = 0;
                x < d;
                x++
              )
                m[x] = arguments[x];
              return l && l[0] === m[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...m, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const o = r.postProcess || this.options.postProcess,
      a = O(o) ? [o] : o;
    return (
      t != null &&
        a &&
        a.length &&
        r.applyPostProcessor !== !1 &&
        (t = sd.handle(
          a,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      l,
      s,
      o;
    return (
      O(t) && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const c = this.extractFromKey(a, n),
          p = c.key;
        i = p;
        let h = c.namespaces;
        this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && !O(n.count),
          m =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          x =
            n.context !== void 0 &&
            (O(n.context) || typeof n.context == 'number') &&
            n.context !== '',
          w = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        h.forEach((L) => {
          this.isValidLookup(r) ||
            ((o = L),
            !za[`${w[0]}-${L}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(o) &&
              ((za[`${w[0]}-${L}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${w.join(
                  ', '
                )}" won't get resolved as namespace "${o}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            w.forEach((g) => {
              if (this.isValidLookup(r)) return;
              s = g;
              const f = [p];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(f, p, g, L, n);
              else {
                let y;
                d && (y = this.pluralResolver.getSuffix(g, n.count, n));
                const S = `${this.options.pluralSeparator}zero`,
                  j = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (f.push(p + y),
                    n.ordinal &&
                      y.indexOf(j) === 0 &&
                      f.push(p + y.replace(j, this.options.pluralSeparator)),
                    m && f.push(p + S)),
                  x)
                ) {
                  const N = `${p}${this.options.contextSeparator}${n.context}`;
                  f.push(N),
                    d &&
                      (f.push(N + y),
                      n.ordinal &&
                        y.indexOf(j) === 0 &&
                        f.push(N + y.replace(j, this.options.pluralSeparator)),
                      m && f.push(N + S));
                }
              }
              let v;
              for (; (v = f.pop()); )
                this.isValidLookup(r) ||
                  ((l = v), (r = this.getResource(g, L, v, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: l, usedLng: s, usedNS: o }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && !O(t.replace);
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < 'u' && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const l of n) delete i[l];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue';
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const xl = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class Ta {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ae.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = Ci(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = Ci(t)), !t || t.indexOf('-') < 0)) return t;
    const n = t.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (O(t) && t.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let i = Intl.getCanonicalLocales(t)[0];
          if ((i && this.options.lowerCaseLng && (i = i.toLowerCase()), i))
            return i;
        } catch {}
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let r = t.split('-');
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = xl(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = xl(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = xl(r[2].toLowerCase()))),
        r.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((l) => {
            if (l === i) return l;
            if (
              !(l.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((l.indexOf('-') > 0 &&
                i.indexOf('-') < 0 &&
                l.substring(0, l.indexOf('-')) === i) ||
                (l.indexOf(i) === 0 && i.length > 1))
            )
              return l;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == 'function' && (t = t(n)),
      O(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      l = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? i.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      O(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            l(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            l(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            l(this.getLanguagePartFromCode(t)))
        : O(t) && l(this.formatLanguageCode(t)),
      r.forEach((s) => {
        i.indexOf(s) < 0 && l(this.formatLanguageCode(s));
      }),
      i
    );
  }
}
let Oh = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Fh = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const Rh = ['v1', 'v2', 'v3'],
  zh = ['v4'],
  Ia = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Th = () => {
    const e = {};
    return (
      Oh.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: Fh[t.fc] };
        });
      }),
      e
    );
  };
class Ih {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Ae.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        zh.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = Th()),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const r = Ci(t === 'dev' ? 'en' : t),
        i = n.ordinal ? 'ordinal' : 'cardinal',
        l = JSON.stringify({ cleanedCode: r, type: i });
      if (l in this.pluralRulesCache) return this.pluralRulesCache[l];
      let s;
      try {
        s = new Intl.PluralRules(r, { type: i });
      } catch {
        if (!t.match(/-|_/)) return;
        const a = this.languageUtils.getLanguagePartFromCode(t);
        s = this.getRule(a, n);
      }
      return (this.pluralRulesCache[l] = s), s;
    }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, l) => Ia[i] - Ia[l])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ''
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '');
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = 'plural') : i === 1 && (i = ''));
    const l = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === 'v1'
      ? i === 1
        ? ''
        : typeof i == 'number'
        ? `_plural_${i.toString()}`
        : l()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? l()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !Rh.includes(this.options.compatibilityJSON);
  }
}
const ba = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      l = Sh(e, t, n);
    return (
      !l && i && O(n) && ((l = ms(e, n, r)), l === void 0 && (l = ms(t, n, r))),
      l
    );
  },
  wl = (e) => e.replace(/\$/g, '$$$$');
class bh {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ae.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: l,
      prefixEscaped: s,
      suffix: o,
      suffixEscaped: a,
      formatSeparator: c,
      unescapeSuffix: p,
      unescapePrefix: h,
      nestingPrefix: d,
      nestingPrefixEscaped: m,
      nestingSuffix: x,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: L,
      maxReplaces: g,
      alwaysFormat: f,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : jh),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = l ? Jt(l) : s || '{{'),
      (this.suffix = o ? Jt(o) : a || '}}'),
      (this.formatSeparator = c || ','),
      (this.unescapePrefix = p ? '' : h || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : p || ''),
      (this.nestingPrefix = d ? Jt(d) : m || Jt('$t(')),
      (this.nestingSuffix = x ? Jt(x) : w || Jt(')')),
      (this.nestingOptionsSeparator = L || ','),
      (this.maxReplaces = g || 1e3),
      (this.alwaysFormat = f !== void 0 ? f : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g');
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, i) {
    let l, s, o;
    const a =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      c = (m) => {
        if (m.indexOf(this.formatSeparator) < 0) {
          const g = ba(
            n,
            a,
            m,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(g, void 0, r, { ...i, ...n, interpolationkey: m })
            : g;
        }
        const x = m.split(this.formatSeparator),
          w = x.shift().trim(),
          L = x.join(this.formatSeparator).trim();
        return this.format(
          ba(
            n,
            a,
            w,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          L,
          r,
          { ...i, ...n, interpolationkey: w }
        );
      };
    this.resetRegExp();
    const p =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      h =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (m) => wl(m) },
        {
          regex: this.regexp,
          safeValue: (m) => (this.escapeValue ? wl(this.escape(m)) : wl(m)),
        },
      ].forEach((m) => {
        for (o = 0; (l = m.regex.exec(t)); ) {
          const x = l[1].trim();
          if (((s = c(x)), s === void 0))
            if (typeof p == 'function') {
              const L = p(t, l, i);
              s = O(L) ? L : '';
            } else if (i && Object.prototype.hasOwnProperty.call(i, x)) s = '';
            else if (h) {
              s = l[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${x} for interpolating ${t}`
              ),
                (s = '');
          else !O(s) && !this.useRawValueToEscape && (s = La(s));
          const w = m.safeValue(s);
          if (
            ((t = t.replace(l[0], w)),
            h
              ? ((m.regex.lastIndex += s.length),
                (m.regex.lastIndex -= l[0].length))
              : (m.regex.lastIndex = 0),
            o++,
            o >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      l,
      s;
    const o = (a, c) => {
      const p = this.nestingOptionsSeparator;
      if (a.indexOf(p) < 0) return a;
      const h = a.split(new RegExp(`${p}[ ]*{`));
      let d = `{${h[1]}`;
      (a = h[0]), (d = this.interpolate(d, s));
      const m = d.match(/'/g),
        x = d.match(/"/g);
      ((m && m.length % 2 === 0 && !x) || x.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (s = JSON.parse(d)), c && (s = { ...c, ...s });
      } catch (w) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            w
          ),
          `${a}${p}${d}`
        );
      }
      return (
        s.defaultValue &&
          s.defaultValue.indexOf(this.prefix) > -1 &&
          delete s.defaultValue,
        a
      );
    };
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let a = [];
      (s = { ...r }),
        (s = s.replace && !O(s.replace) ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let c = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const p = i[1].split(this.formatSeparator).map((h) => h.trim());
        (i[1] = p.shift()), (a = p), (c = !0);
      }
      if (((l = n(o.call(this, i[1].trim(), s), s)), l && i[0] === t && !O(l)))
        return l;
      O(l) || (l = La(l)),
        l ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (l = '')),
        c &&
          (l = a.reduce(
            (p, h) =>
              this.format(p, h, r.lng, { ...r, interpolationkey: i[1].trim() }),
            l.trim()
          )),
        (t = t.replace(i[0], l)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const Mh = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf('(') > -1) {
      const r = e.split('(');
      t = r[0].toLowerCase().trim();
      const i = r[1].substring(0, r[1].length - 1);
      t === 'currency' && i.indexOf(':') < 0
        ? n.currency || (n.currency = i.trim())
        : t === 'relativetime' && i.indexOf(':') < 0
        ? n.range || (n.range = i.trim())
        : i.split(';').forEach((s) => {
            if (s) {
              const [o, ...a] = s.split(':'),
                c = a
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                p = o.trim();
              n[p] || (n[p] = c),
                c === 'false' && (n[p] = !1),
                c === 'true' && (n[p] = !0),
                isNaN(c) || (n[p] = parseInt(c, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  Xt = (e) => {
    const t = {};
    return (n, r, i) => {
      let l = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (l = { ...l, [i.interpolationkey]: void 0 });
      const s = r + JSON.stringify(l);
      let o = t[s];
      return o || ((o = e(Ci(r), i)), (t[s] = o)), o(n);
    };
  };
class $h {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ae.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Xt((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (l) => i.format(l);
        }),
        currency: Xt((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return (l) => i.format(l);
        }),
        datetime: Xt((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (l) => i.format(l);
        }),
        relativetime: Xt((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (l) => i.format(l, r.range || 'day');
        }),
        list: Xt((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (l) => i.format(l);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ',';
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Xt(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = n.split(this.formatSeparator);
    if (
      l.length > 1 &&
      l[0].indexOf('(') > 1 &&
      l[0].indexOf(')') < 0 &&
      l.find((o) => o.indexOf(')') > -1)
    ) {
      const o = l.findIndex((a) => a.indexOf(')') > -1);
      l[0] = [l[0], ...l.splice(1, o)].join(this.formatSeparator);
    }
    return l.reduce((o, a) => {
      const { formatName: c, formatOptions: p } = Mh(a);
      if (this.formats[c]) {
        let h = o;
        try {
          const d =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            m = d.locale || d.lng || i.locale || i.lng || r;
          h = this.formats[c](o, m, { ...p, ...i, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return h;
      } else this.logger.warn(`there was no format function for ${c}`);
      return o;
    }, t);
  }
}
const Dh = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Uh extends Wi {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = Ae.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const l = {},
      s = {},
      o = {},
      a = {};
    return (
      t.forEach((c) => {
        let p = !0;
        n.forEach((h) => {
          const d = `${c}|${h}`;
          !r.reload && this.store.hasResourceBundle(c, h)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? s[d] === void 0 && (s[d] = !0)
                : ((this.state[d] = 1),
                  (p = !1),
                  s[d] === void 0 && (s[d] = !0),
                  l[d] === void 0 && (l[d] = !0),
                  a[h] === void 0 && (a[h] = !0)));
        }),
          p || (o[c] = !0);
      }),
      (Object.keys(l).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(l),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(o),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split('|'),
      l = i[0],
      s = i[1];
    n && this.emit('failedLoading', l, s, n),
      !n &&
        r &&
        this.store.addResourceBundle(l, s, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const o = {};
    this.queue.forEach((a) => {
      kh(a.loaded, [l], s),
        Dh(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((c) => {
            o[c] || (o[c] = {});
            const p = a.loaded[c];
            p.length &&
              p.forEach((h) => {
                o[c][h] === void 0 && (o[c][h] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback());
    }),
      this.emit('loaded', o),
      (this.queue = this.queue.filter((a) => !a.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      l =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: l,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const o = (c, p) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const h = this.waitingReads.shift();
          this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
        }
        if (c && p && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, l * 2, s);
          }, l);
          return;
        }
        s(c, p);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const c = a(t, n);
        c && typeof c.then == 'function'
          ? c.then((p) => o(null, p)).catch(o)
          : o(null, c);
      } catch (c) {
        o(c);
      }
      return;
    }
    return a(t, n, o);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        i && i()
      );
    O(t) && (t = this.languageUtils.toResolveHierarchy(t)), O(n) && (n = [n]);
    const l = this.queueLoad(t, n, r, i);
    if (!l.toLoad.length) return l.pending.length || i(), null;
    l.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const r = t.split('|'),
      i = r[0],
      l = r[1];
    this.read(i, l, 'read', void 0, void 0, (s, o) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${l} for language ${i} failed`,
          s
        ),
        !s &&
          o &&
          this.logger.log(`${n}loaded namespace ${l} for language ${i}`, o),
        this.loaded(t, s, o);
    });
  }
  saveMissing(t, n, r, i, l) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      o =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const a = { ...s, isUpdate: l },
          c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let p;
            c.length === 5 ? (p = c(t, n, r, i, a)) : (p = c(t, n, r, i)),
              p && typeof p.then == 'function'
                ? p.then((h) => o(null, h)).catch(o)
                : o(null, p);
          } catch (p) {
            o(p);
          }
        else c(t, n, r, i, o, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
const Ma = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        O(e[1]) && (t.defaultValue = e[1]),
        O(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  $a = (e) => (
    O(e.ns) && (e.ns = [e.ns]),
    O(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    O(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Ar = () => {},
  Ah = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e));
    });
  };
class gr extends Wi {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = $a(t)),
      (this.services = {}),
      (this.logger = Ae),
      (this.modules = { external: [] }),
      Ah(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (O(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const i = Ma();
    (this.options = { ...i, ...this.options, ...$a(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const l = (p) => (p ? (typeof p == 'function' ? new p() : p) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Ae.init(l(this.modules.logger), this.options)
        : Ae.init(null, this.options);
      let p;
      this.modules.formatter
        ? (p = this.modules.formatter)
        : typeof Intl < 'u' && (p = $h);
      const h = new Ta(this.options);
      this.store = new Ra(this.options.resources, this.options);
      const d = this.services;
      (d.logger = Ae),
        (d.resourceStore = this.store),
        (d.languageUtils = h),
        (d.pluralResolver = new Ih(h, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        p &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((d.formatter = l(p)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new bh(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new Uh(
          l(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on('*', function (m) {
          for (
            var x = arguments.length, w = new Array(x > 1 ? x - 1 : 0), L = 1;
            L < x;
            L++
          )
            w[L - 1] = arguments[L];
          t.emit(m, ...w);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = l(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = l(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Ei(this.services, this.options)),
        this.translator.on('*', function (m) {
          for (
            var x = arguments.length, w = new Array(x > 1 ? x - 1 : 0), L = 1;
            L < x;
            L++
          )
            w[L - 1] = arguments[L];
          t.emit(m, ...w);
        }),
        this.modules.external.forEach((m) => {
          m.init && m.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ar),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const p = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      p.length > 0 && p[0] !== 'dev' && (this.options.lng = p[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((p) => {
        this[p] = function () {
          return t.store[p](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((p) => {
        this[p] = function () {
          return t.store[p](...arguments), t;
        };
      });
    const a = bn(),
      c = () => {
        const p = (h, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            a.resolve(d),
            r(h, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return p(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, p);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? c()
        : setTimeout(c, 0),
      a
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar;
    const i = O(t) ? t : this.language;
    if (
      (typeof t == 'function' && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const l = [],
        s = (o) => {
          if (!o || o === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(o).forEach((c) => {
            c !== 'cimode' && l.indexOf(c) < 0 && l.push(c);
          });
        };
      i
        ? s(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => s(a)),
        this.options.preload && this.options.preload.forEach((o) => s(o)),
        this.services.backendConnector.load(l, this.options.ns, (o) => {
          !o &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(o);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = bn();
    return (
      typeof t == 'function' && ((r = t), (t = void 0)),
      typeof n == 'function' && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Ar),
      this.services.backendConnector.reload(t, n, (l) => {
        i.resolve(), r(l);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && sd.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = bn();
    this.emit('languageChanging', t);
    const l = (a) => {
        (this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a);
      },
      s = (a, c) => {
        c
          ? (l(c),
            this.translator.changeLanguage(c),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', c),
            this.logger.log('languageChanged', c))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(a, function () {
              return r.t(...arguments);
            });
      },
      o = (a) => {
        !t && !a && this.services.languageDetector && (a = []);
        const c = O(a)
          ? a
          : this.services.languageUtils.getBestMatchFromCodes(a);
        c &&
          (this.language || l(c),
          this.translator.language || this.translator.changeLanguage(c),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(c)),
          this.loadResources(c, (p) => {
            s(p, c);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? o(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(o)
          : this.services.languageDetector.detect(o)
        : o(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const l = function (s, o) {
      let a;
      if (typeof o != 'object') {
        for (
          var c = arguments.length, p = new Array(c > 2 ? c - 2 : 0), h = 2;
          h < c;
          h++
        )
          p[h - 2] = arguments[h];
        a = i.options.overloadTranslationOptionHandler([s, o].concat(p));
      } else a = { ...o };
      (a.lng = a.lng || l.lng),
        (a.lngs = a.lngs || l.lngs),
        (a.ns = a.ns || l.ns),
        a.keyPrefix !== '' && (a.keyPrefix = a.keyPrefix || r || l.keyPrefix);
      const d = i.options.keySeparator || '.';
      let m;
      return (
        a.keyPrefix && Array.isArray(s)
          ? (m = s.map((x) => `${a.keyPrefix}${d}${x}`))
          : (m = a.keyPrefix ? `${a.keyPrefix}${d}${s}` : s),
        i.t(m, a)
      );
    };
    return O(t) ? (l.lng = t) : (l.lngs = t), (l.ns = n), (l.keyPrefix = r), l;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      l = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const s = (o, a) => {
      const c = this.services.backendConnector.state[`${o}|${a}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const o = n.precheck(this, s);
      if (o !== void 0) return o;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!i || s(l, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = bn();
    return this.options.ns
      ? (O(t) && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = bn();
    O(t) && (t = [t]);
    const i = this.options.preload || [],
      l = t.filter(
        (s) =>
          i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s)
      );
    return l.length
      ? ((this.options.preload = i.concat(l)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl';
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new Ta(Ma());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new gr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      l = new gr(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (l.logger = l.logger.clone(t)),
      ['store', 'services', 'language'].forEach((o) => {
        l[o] = this[o];
      }),
      (l.services = { ...this.services }),
      (l.services.utils = { hasLoadedNamespace: l.hasLoadedNamespace.bind(l) }),
      r &&
        ((l.store = new Ra(this.store.data, i)),
        (l.services.resourceStore = l.store)),
      (l.translator = new Ei(l.services, i)),
      l.translator.on('*', function (o) {
        for (
          var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), p = 1;
          p < a;
          p++
        )
          c[p - 1] = arguments[p];
        l.emit(o, ...c);
      }),
      l.init(i, n),
      (l.translator.options = i),
      (l.translator.backendConnector.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l),
      }),
      l
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ue = gr.createInstance();
ue.createInstance = gr.createInstance;
ue.createInstance;
ue.dir;
ue.init;
ue.loadResources;
ue.reloadResources;
ue.use;
ue.changeLanguage;
ue.getFixedT;
ue.t;
ue.exists;
ue.setDefaultNamespace;
ue.hasLoadedNamespace;
ue.loadNamespaces;
ue.loadLanguages;
ue.use(Qp).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: !1 },
});
kl.createRoot(document.getElementById('root')).render(
  u.jsx(eh, { children: u.jsx(yh, { children: u.jsx(mh, {}) }) })
);
