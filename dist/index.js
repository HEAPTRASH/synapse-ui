var Yf = Object.defineProperty;
var gs = (t) => {
  throw TypeError(t);
};
var Qf = (t, e, r) => e in t ? Yf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var K = (t, e, r) => Qf(t, typeof e != "symbol" ? e + "" : e, r), bs = (t, e, r) => e.has(t) || gs("Cannot " + r);
var Ie = (t, e, r) => (bs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), vs = (t, e, r) => e.has(t) ? gs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), zn = (t, e, r, o) => (bs(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r);
import { jsx as u, jsxs as $, Fragment as ve } from "react/jsx-runtime";
import * as m from "react";
import { forwardRef as Ke, useEffect as le, useSyncExternalStore as Xf, useState as Q, useRef as pe, useCallback as Re, Children as Wa, useLayoutEffect as Ha, useId as oo, useContext as Ar, useMemo as Fe, createContext as no, createElement as Fn, memo as rr } from "react";
import * as Sr from "react-dom";
function M(...t) {
  return t.filter(Boolean).join(" ");
}
const Gc = {
  subtle: "su-chrome",
  default: "su-chrome",
  strong: "su-chrome-strong"
};
function fA({
  as: t = "div",
  strength: e = "default",
  className: r,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ u(t, { className: M(Gc[e], r), ...n, children: o });
}
function jf({
  as: t,
  variant: e = "regular",
  elevated: r = !1,
  dim: o = !1,
  radius: n = "md",
  chrome: a = "none",
  className: i,
  children: s,
  ...c
}, l) {
  const f = t ?? "div", d = e === "clear";
  return /* @__PURE__ */ $(
    f,
    {
      ref: l,
      type: f === "button" ? "button" : void 0,
      className: M(
        "relative isolate text-label rounded-none",
        "backdrop-blur-[var(--su-glass-blur)] backdrop-saturate-[var(--su-glass-saturate)]",
        r ? "bg-[var(--su-glass-bg-elevated)]" : "bg-[var(--su-glass-bg)]",
        "transparency-reduce:bg-[var(--su-glass-solid)] transparency-reduce:backdrop-filter-none",
        "contrast-more:bg-[var(--su-bg-secondary)] contrast-more:backdrop-filter-none contrast-more:border-b-label",
        d ? (
          // Translucency implies its own edge; in contrast mode it's gone, so draw one.
          "bg-[var(--su-glass-clear-bg)] transparency-reduce:bg-[var(--su-glass-clear-solid)] contrast-more:border contrast-more:border-label"
        ) : (
          // su-chrome already rings all 4 sides, so when chrome is on there's no
          // manual hairline to double up with.
          a === "none" && "border-b border-b-rule"
        ),
        a !== "none" && Gc[a],
        i
      ),
      ...c,
      children: [
        d && o ? /* @__PURE__ */ u(
          "span",
          {
            "aria-hidden": !0,
            className: "absolute inset-0 z-[-1] rounded-none bg-[var(--su-glass-clear-dim)] pointer-events-none transparency-reduce:hidden contrast-more:hidden"
          }
        ) : null,
        s
      ]
    }
  );
}
const pA = Ke(jf), Kf = {
  system: "bg-[var(--su-bg)] text-label",
  systemSecondary: "bg-[var(--su-bg-secondary)] text-label",
  systemTertiary: "bg-[var(--su-bg-tertiary)] text-label",
  grouped: "bg-[var(--su-bg-grouped)] text-label",
  groupedSecondary: "bg-[var(--su-bg-grouped-secondary)] text-label",
  groupedTertiary: "bg-[var(--su-bg-grouped-tertiary)] text-label",
  fill: "bg-fill text-label",
  fillSecondary: "bg-fill-secondary text-label",
  fillTertiary: "bg-fill-tertiary text-label",
  fillQuaternary: "bg-fill-quaternary text-label"
}, qf = {
  1: "border border-rule",
  2: "border border-rule-strong"
}, mA = Ke(function({
  as: e = "div",
  tone: r = "system",
  radius: o = "none",
  elevation: n = "none",
  className: a,
  children: i,
  ...s
}, c) {
  return /* @__PURE__ */ u(
    e,
    {
      ref: c,
      type: e === "button" ? "button" : void 0,
      className: M(
        "rounded-none",
        Kf[r],
        n !== "none" && qf[n],
        a
      ),
      ...s,
      children: i
    }
  );
});
var Jf = Object.defineProperty, Ga = (t, e) => Jf(t, "name", { value: e, configurable: !0 });
function sa(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
Ga(sa, "setRef");
function Yc(...t) {
  return (e) => {
    let r = !1;
    const o = t.map((n) => {
      const a = sa(n, e);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let n = 0; n < o.length; n++) {
          const a = o[n];
          typeof a == "function" ? a() : sa(t[n], null);
        }
      };
  };
}
Ga(Yc, "composeRefs");
function Y(...t) {
  return m.useCallback(Yc(...t), t);
}
Ga(Y, "useComposedRefs");
var Zf = Object.defineProperty, et = (t, e) => Zf(t, "name", { value: e, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  const e = m.forwardRef((r, o) => {
    let { children: n, ...a } = r, i = null, s = !1;
    const c = [];
    ca(n) && typeof _o == "function" && (n = _o(n._payload)), m.Children.forEach(n, (p) => {
      var h;
      if (Kc(p)) {
        s = !0;
        const b = p;
        let g = "child" in b.props ? b.props.child : b.props.children;
        ca(g) && typeof _o == "function" && (g = _o(g._payload)), i = rp(b, g), c.push((h = i == null ? void 0 : i.props) == null ? void 0 : h.children);
      } else
        c.push(p);
    }), i ? i = m.cloneElement(i, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !s && m.Children.count(n) === 1 && m.isValidElement(n) && (i = n)
    );
    const l = i ? jc(i) : void 0, f = Y(o, l);
    if (!i) {
      if (n || n === 0)
        throw new Error(
          s ? ap(t) : np(t)
        );
      return n;
    }
    const d = Xc(a, i.props ?? {});
    return i.type !== m.Fragment && (d.ref = o ? f : l), m.cloneElement(i, d);
  });
  return e.displayName = `${t}.Slot`, e;
}
et(Ze, "createSlot");
var ep = /* @__PURE__ */ Ze("Slot"), Qc = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ya(t) {
  const e = /* @__PURE__ */ et((r) => "child" in r ? r.children(r.child) : r.children, "Slottable");
  return e.displayName = `${t}.Slottable`, e.__radixId = Qc, e;
}
et(Ya, "createSlottable");
var tp = /* @__PURE__ */ Ya("Slottable"), rp = /* @__PURE__ */ et((t, e) => {
  if ("child" in t.props) {
    const r = t.props.child;
    return m.isValidElement(r) ? m.cloneElement(r, void 0, t.props.children(r.props.children)) : null;
  }
  return m.isValidElement(e) ? e : null;
}, "getSlottableElementFromSlottable");
function Xc(t, e) {
  const r = { ...e };
  for (const o in e) {
    const n = t[o], a = e[o];
    /^on[A-Z]/.test(o) ? n && a ? r[o] = (...s) => {
      const c = a(...s);
      return n(...s), c;
    } : n && (r[o] = n) : o === "style" ? r[o] = { ...n, ...a } : o === "className" && (r[o] = [n, a].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
et(Xc, "mergeProps");
function jc(t) {
  var o, n;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = (n = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : n.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
et(jc, "getElementRef");
function Kc(t) {
  return m.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Qc;
}
et(Kc, "isSlottable");
var op = Symbol.for("react.lazy");
function ca(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === op && "_payload" in t && qc(t._payload);
}
et(ca, "isLazyComponent");
function qc(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
et(qc, "isPromiseLike");
var np = /* @__PURE__ */ et((t) => `${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), ap = /* @__PURE__ */ et((t) => `${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), _o = m[" use ".trim().toString()];
const xs = 12, ip = 9, sp = 6, cp = 48;
function lp(t, e = !0) {
  le(() => {
    const r = t.current, o = r == null ? void 0 : r.querySelector("[data-su-px]");
    if (!r || !o) return;
    const n = () => o.replaceChildren();
    if (!e) {
      n();
      return;
    }
    const a = window.matchMedia("(hover: none)"), i = window.matchMedia("(prefers-reduced-motion: reduce)");
    let s = 0, c = 0;
    const l = () => {
      if (a.matches || i.matches) {
        s = 0, c = 0, n();
        return;
      }
      const { width: d, height: p } = r.getBoundingClientRect();
      if (!d || !p) return;
      const h = Math.max(xs, Math.ceil(d / cp)), b = Math.max(1, Math.round(d / h)), g = Math.max(1, Math.round(p / xs));
      if (b === s && g === c) return;
      s = b, c = g, o.style.gridTemplateColumns = `repeat(${b}, 1fr)`;
      const v = (b - 1) / 2, w = (g - 1) / 2, y = Math.max(v, w) || 1, x = [];
      for (let C = 0; C < g; C += 1)
        for (let E = 0; E < b; E += 1) {
          const k = Math.max(Math.abs(E - v), Math.abs(C - w)), S = document.createElement("i");
          S.style.setProperty("--ri", `${Math.round(k * ip)}ms`), S.style.setProperty("--ro", `${Math.round((y - k) * sp)}ms`), x.push(S);
        }
      o.replaceChildren(...x);
    }, f = new ResizeObserver(l);
    return f.observe(r), a.addEventListener("change", l), i.addEventListener("change", l), () => {
      f.disconnect(), a.removeEventListener("change", l), i.removeEventListener("change", l);
    };
  }, [t, e]);
}
const Kt = {
  stroke: 1.5,
  strokeLinejoin: "miter",
  strokeLinecap: "square"
}, Go = {
  sm: { box: "size-4", stroke: 1.875, strokeClass: "[&>svg]:[stroke-width:1.875]" },
  md: { box: "size-5", stroke: 1.5, strokeClass: "[&>svg]:[stroke-width:1.5]" },
  lg: { box: "size-6", stroke: 1.25, strokeClass: "[&>svg]:[stroke-width:1.25]" },
  inherit: { box: "size-[1em]", stroke: 1.5, strokeClass: "[&>svg]:[stroke-width:1.5]" }
};
function Jc(t, e) {
  const r = t ?? e["aria-label"] ?? e["aria-labelledby"];
  return {
    role: r ? "img" : void 0,
    "aria-label": t,
    "aria-hidden": r ? void 0 : !0
  };
}
const Zc = /(?:^|\s)!?(?:size|w|h|min-w|min-h|max-w|max-h)-/;
function Mt({ size: t = "md", className: e, children: r, label: o, ...n }) {
  const a = Zc.test(e ?? "");
  return /* @__PURE__ */ u(
    "span",
    {
      className: M(
        "inline-flex shrink-0 items-center justify-center [vertical-align:-0.125em]",
        // ponytail: CSS beats SVG presentation attributes, so a child that deliberately set a
        // different stroke must use a class or style to win. Fine for Tabler/inline glyphs.
        "[&>svg]:block [&>svg]:size-full [&>svg]:[stroke-linecap:square] [&>svg]:[stroke-linejoin:miter]",
        "contrast-more:[&>svg]:[stroke-width:2]",
        !a && Go[t].box,
        !a && Go[t].strokeClass,
        e
      ),
      ...Jc(o, n),
      ...n,
      children: r
    }
  );
}
function up({ size: t = "md", className: e, children: r, label: o, ...n }) {
  return /* @__PURE__ */ $(
    "svg",
    {
      className: M(
        "block shrink-0 contrast-more:[stroke-width:2]",
        Zc.test(e ?? "") ? void 0 : Go[t].box,
        e
      ),
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: Go[t].stroke,
      strokeLinecap: Kt.strokeLinecap,
      strokeLinejoin: Kt.strokeLinejoin,
      ...Jc(o, n),
      ...n,
      children: [
        o ? /* @__PURE__ */ u("title", { children: o }) : null,
        r
      ]
    }
  );
}
const ws = [
  "receiving",
  "onhand",
  "counted",
  "onhand",
  "allocated",
  "picking"
], ko = [0, 1, 2, 5, 8, 7, 6, 3], dp = [
  "onhand",
  "onhand",
  "allocated",
  "picking",
  "counted",
  "onhand",
  "receiving",
  "allocated"
], fp = {
  receiving: "bg-s-receiving",
  onhand: "bg-s-onhand",
  allocated: "bg-s-allocated",
  picking: "bg-s-picking",
  counted: "bg-s-counted"
}, pp = {
  sm: "grid-cols-[repeat(3,4px)] gap-px [&>span]:size-[4px]",
  md: "grid-cols-[repeat(3,6px)] gap-px [&>span]:size-[6px]",
  lg: "grid-cols-[repeat(3,8px)] gap-[2px] [&>span]:size-[8px]"
}, mp = "[transition:background-color_140ms_var(--su-ease-step)]", hp = "bg-rule contrast-more:bg-ink-3 forced-colors:bg-[Canvas] forced-colors:outline forced-colors:outline-1 forced-colors:outline-[GrayText]", gp = "bg-[color-mix(in_srgb,var(--su-on-action)_28%,transparent)] contrast-more:bg-[color-mix(in_srgb,var(--su-on-action)_45%,transparent)] forced-colors:bg-[Canvas] forced-colors:outline forced-colors:outline-1 forced-colors:outline-[GrayText]", bp = "contrast-more:bg-accent forced-colors:bg-[CanvasText]", vp = "bg-on-action forced-colors:bg-[CanvasText]";
let el = 0, Ln;
const Ur = /* @__PURE__ */ new Set(), pt = typeof window > "u" ? null : window.matchMedia("(prefers-reduced-motion: reduce)");
function Vn() {
  for (const t of Ur) t();
}
function xp(t) {
  return Ur.add(t), Ur.size === 1 && (Ln = window.setInterval(() => {
    document.hidden || (el += 1, Vn());
  }, 140), pt == null || pt.addEventListener("change", Vn)), () => {
    Ur.delete(t), Ur.size === 0 && (window.clearInterval(Ln), Ln = void 0, pt == null || pt.removeEventListener("change", Vn));
  };
}
const wp = () => pt != null && pt.matches ? -1 : el, yp = () => 0;
function Qa({
  size: t = "md",
  className: e,
  onAction: r = !1
}) {
  const o = Xf(xp, wp, yp), n = o < 0, a = n ? -1 : ko[o % ko.length], i = ws[Math.floor(Math.max(o, 0) / ko.length) % ws.length];
  return /* @__PURE__ */ u(
    "span",
    {
      dir: "ltr",
      className: M("inline-grid shrink-0 align-middle", pp[t], e),
      "aria-hidden": "true",
      children: Array.from({ length: 9 }, (s, c) => {
        const l = ko.indexOf(c), f = n ? l >= 0 : c === a, d = n ? dp[l] : i;
        return /* @__PURE__ */ u(
          "span",
          {
            className: M(
              mp,
              f ? r ? vp : M(fp[d], bp) : r ? gp : hp
            )
          },
          c
        );
      })
    }
  );
}
const Cp = {
  link: "text",
  text: "text",
  ghost: "ghost",
  dashed: "dashed",
  primary: "primary"
}, Ap = "group box-border inline-flex w-max max-w-full flex-[0_0_auto] rounded-none font-sans !font-medium tracking-normal whitespace-nowrap no-underline cursor-pointer aria-busy:cursor-wait transition-[background-color,color,border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] su-focus-ring aria-disabled:opacity-40 aria-disabled:cursor-not-allowed disabled:opacity-40 disabled:cursor-not-allowed forced-colors:[border:1px_solid_ButtonBorder]", Sp = {
  sm: "[--su-h:var(--su-control-sm)] [--su-px:12px] [--su-touch-px:18px] [--su-scan-slot:7px] [--su-slot-open:4.65]",
  md: "[--su-h:var(--su-control-md)] [--su-px:16px] [--su-touch-px:22px] [--su-scan-slot:8px] [--su-slot-open:4.7]",
  lg: "[--su-h:var(--su-button-height)] [--su-px:20px] [--su-touch-px:26px] [--su-scan-slot:10px] [--su-slot-open:4.9]"
}, Yo = "relative before:content-empty before:absolute", _p = {
  sm: Yo + " before:inset-x-0 before:-inset-y-[6px]",
  md: Yo + " before:inset-x-0 before:-inset-y-[4px]",
  lg: ""
}, kp = {
  sm: Yo + " before:-inset-[6px]",
  md: Yo + " before:-inset-[4px]",
  lg: ""
}, Xa = "relative h-[var(--su-h)] min-h-[var(--su-h)] items-center justify-center gap-su2", tl = "bg-[var(--su-btn-fill)] !text-on-action shadow-[inset_0_0_0_1px_var(--su-btn-edge)] [&:not([aria-disabled=true])]:active:bg-[var(--su-btn-fill-press)]", Rp = "relative items-stretch justify-start h-[var(--su-h)] min-h-[var(--su-h)] !p-0 gap-0 " + tl, Ep = Xa + " px-[var(--su-px)] " + tl, Pp = {
  base: "[--su-btn-fill:var(--su-action)] [--su-btn-fill-press:var(--su-action-press)] [--su-btn-edge:var(--su-action-edge)]",
  danger: "[--su-btn-fill:var(--su-danger)] [--su-btn-fill-press:color-mix(in_srgb,var(--su-danger)_82%,#000)] [--su-btn-edge:color-mix(in_srgb,var(--su-danger)_80%,#000)] [--su-beam:var(--su-on-action)]"
}, Ip = "relative z-1 inline-flex min-w-0 items-center gap-su2 px-[var(--su-px)] [@media(hover:none)]:px-[var(--su-touch-px)]", Tp = "relative z-1 grid place-items-center flex-[0_0_var(--su-h)] w-[var(--su-h)] overflow-hidden [@media(hover:none)]:hidden before:content-empty before:absolute before:inset-y-0 before:[inset-inline-start:0] before:w-px before:z-0 before:pointer-events-none before:bg-[color-mix(in_srgb,var(--su-on-action)_22%,transparent)]", Mp = "relative z-1 w-[var(--su-scan-slot)] h-[var(--su-scan-slot)] bg-on-action origin-center [forced-color-adjust:none] transition-transform duration-[var(--su-duration-base)] ease-[var(--su-ease-step)] [@media(hover:hover)]:group-hover:scale-[var(--su-slot-open)] [@media(hover:hover)]:group-hover:delay-[350ms] [@media(hover:hover)]:group-focus-visible:scale-[var(--su-slot-open)] [@media(hover:hover)]:group-focus-visible:delay-[350ms] group-active:bg-beam group-active:duration-[40ms] group-active:delay-0 motion-reduce:!delay-0", Dp = "absolute inset-0 z-2 grid place-items-center text-[var(--su-btn-fill)] opacity-0 transition-opacity duration-[var(--su-duration-base)] ease-[var(--su-ease-out)] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:delay-[400ms] [@media(hover:hover)]:group-focus-visible:opacity-100 [@media(hover:hover)]:group-focus-visible:delay-[400ms]", Np = "absolute inset-0 z-0 overflow-hidden pointer-events-none", Op = "absolute inset-y-0 [inset-inline-start:0] w-[2px] bg-beam opacity-0 shadow-[0_0_8px_1px_color-mix(in_srgb,var(--su-beam)_45%,transparent)] [transition-property:inset-inline-start,opacity] duration-[300ms] ease-[var(--su-ease-scan)] [@media(hover:hover)]:group-hover:[inset-inline-start:100%] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:duration-[var(--su-duration-scan)] [@media(hover:hover)]:group-focus-visible:[inset-inline-start:100%] [@media(hover:hover)]:group-focus-visible:opacity-100 [@media(hover:hover)]:group-focus-visible:duration-[var(--su-duration-scan)] motion-reduce:hidden", $p = Xa + " px-[var(--su-px)] !text-[var(--su-frame-fg)] [&:not([aria-disabled=true])]:hover:bg-[var(--su-frame-hover-bg)] [&:not([aria-disabled=true])]:focus-visible:bg-[var(--su-frame-hover-bg)] [&[data-state=open]:not([aria-disabled=true])]:bg-[var(--su-frame-hover-bg)] [&:not([aria-disabled=true])]:active:bg-[var(--su-frame-press-bg)] [@media(hover:none)]:bg-[var(--su-frame-hover-bg)]", Bp = {
  base: "[--su-frame-fg:var(--su-ink)] [--su-frame-hover-bg:var(--su-ink)] [--su-frame-hover-fg:var(--su-paper)] [--su-frame-press-bg:var(--su-action)] [--su-frame-press-fg:var(--su-on-action)] [--su-frame-ripple:var(--su-ink)]",
  danger: "[--su-frame-fg:var(--su-danger)] [--su-frame-hover-bg:var(--su-danger)] [--su-frame-hover-fg:var(--su-on-action)] [--su-frame-press-bg:color-mix(in_srgb,var(--su-danger)_82%,#000)] [--su-frame-press-fg:var(--su-on-action)] [--su-frame-ripple:var(--su-danger)]"
}, zp = "bg-canvas", Fp = "bg-transparent border-1 border-dashed border-rule-strong [&:not([aria-disabled=true])]:hover:border-ink-2 [@media(hover:none)]:!border-transparent", ys = "absolute inset-0 z-0 grid pointer-events-none [@media(hover:none)]:hidden [&>i]:bg-[var(--su-frame-ripple)] [&>i]:scale-0 [&>i]:origin-center [&>i]:transition-transform [&>i]:duration-150 [&>i]:ease-[var(--su-ease-out)] [&>i]:delay-[var(--ro,0ms)] group-hover:[&>i]:scale-100 group-hover:[&>i]:delay-[var(--ri,0ms)] group-focus-visible:[&>i]:scale-100 group-focus-visible:[&>i]:delay-[var(--ri,0ms)] group-active:[&>i]:scale-0 group-active:[&>i]:delay-0 motion-reduce:[&>i]:transition-none", Lp = "relative z-1 inline-flex min-w-0 items-center gap-su2 transition-colors duration-90 delay-[80ms] group-hover:text-[var(--su-frame-hover-fg)] group-focus-visible:text-[var(--su-frame-hover-fg)] [[data-state=open]:not([aria-disabled=true])>&]:text-[var(--su-frame-hover-fg)] group-active:text-[var(--su-frame-press-fg)] group-active:delay-0 [@media(hover:none)]:text-[var(--su-frame-hover-fg)] motion-reduce:transition-none motion-reduce:delay-0", Vp = Xa + " px-su4 bg-transparent contrast-more:[border:1px_solid_var(--su-rule)] [&:not([aria-disabled=true])]:active:bg-fill-secondary", Up = {
  base: "!text-ink-2 [&:not([aria-disabled=true])]:hover:!text-ink [&:not([aria-disabled=true])]:hover:bg-fill-tertiary",
  danger: "!text-danger [&:not([aria-disabled=true])]:hover:bg-[color-mix(in_srgb,var(--su-danger)_10%,transparent)]"
}, Wp = "relative items-center justify-center gap-su2 h-auto min-h-[var(--su-hit-target)] p-0 bg-transparent", Hp = "inline-block py-[2px] [background:linear-gradient(currentColor_0_0)_0_100%_/_100%_1px_no-repeat]", Gp = "inline-block py-[2px] [background:linear-gradient(currentColor_0_0)_0_100%_/_0_1px_no-repeat] [transition-property:background-size] duration-[var(--su-duration-scan)] ease-[var(--su-ease-out)] [@media(hover:hover)]:group-hover:[background-size:100%_1px] [@media(hover:hover)]:group-focus-visible:[background-size:100%_1px] motion-reduce:transition-none", Yp = "block min-w-0 truncate", Qp = "transition-transform duration-[var(--su-duration-base)] ease-[var(--su-ease-out)] [@media(hover:hover)]:group-hover:translate-x-1 rtl:-scale-x-100 rtl:[@media(hover:hover)]:group-hover:-translate-x-1 motion-reduce:transition-none";
function Cs({ className: t }) {
  return /* @__PURE__ */ u(
    "svg",
    {
      viewBox: "0 0 14 14",
      "aria-hidden": "true",
      className: M("block w-[1em] h-[1em]", t),
      children: /* @__PURE__ */ u(
        "path",
        {
          d: "M1 7h11M8 3l4 4-4 4",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "square",
          strokeLinejoin: "miter"
        }
      )
    }
  );
}
const Be = Ke(function({
  variant: e,
  type: r,
  size: o = "lg",
  block: n = !1,
  asChild: a = !1,
  danger: i = !1,
  loading: s = !1,
  icon: c,
  iconPlacement: l = "start",
  arrow: f = !1,
  hideEndCell: d = !1,
  href: p,
  target: h,
  rel: b,
  htmlType: g,
  className: v,
  children: w,
  disabled: y,
  onClick: x,
  ...C
}, E) {
  const k = e ?? Cp[r] ?? "default", S = g ?? (r === "submit" || r === "reset" || r === "button" ? r : "button"), A = !!s, _ = typeof s == "object" && s ? s.delay ?? 0 : 0, R = typeof s == "object" && s ? s.icon : void 0, [P, I] = Q(!1);
  le(() => {
    if (!_ || !A) {
      I(!1);
      return;
    }
    const Z = window.setTimeout(() => I(!0), _);
    return () => window.clearTimeout(Z);
  }, [_, A]);
  const T = _ ? P : A, D = !!y || T, z = pe(null), O = Re(
    (Z) => {
      z.current = Z, typeof E == "function" ? E(Z) : E && (E.current = Z);
    },
    [E]
  );
  lp(z, k === "default" || k === "dashed");
  const B = i ? "danger" : "base", V = w != null && w !== !1, L = !V && (c != null || T), ee = k === "text" ? "text-body !leading-normal" : o === "sm" ? "text-caption-1 !leading-none" : "text-control !leading-none", X = T ? R ?? /* @__PURE__ */ u(Qa, { size: "sm", onAction: k === "primary" }) : null, j = X ?? (l === "start" ? c : null), oe = !X && l === "end" ? c : null, H = (Z) => [
    j ? /* @__PURE__ */ u(Mt, { size: "inherit", children: j }, "lead") : null,
    a ? /* @__PURE__ */ u(tp, { children: w }, "label") : V ? /* @__PURE__ */ u("span", { className: M(Yp, Z), children: w }, "label") : null,
    oe ? /* @__PURE__ */ u(Mt, { size: "inherit", children: oe }, "trail") : null
  ];
  let U, te;
  if (k === "primary")
    U = M(
      a ? Ep : Rp,
      Pp[B],
      n && "!w-full max-w-none",
      L && (a ? "!w-[var(--su-h)] !px-0" : "!w-[var(--su-h)]")
    ), te = a ? H() : /* @__PURE__ */ $(ve, { children: [
      /* @__PURE__ */ u(
        "span",
        {
          className: M(
            Ip,
            (n || L || d) && "flex-1 justify-center",
            L && "!px-0"
          ),
          children: H()
        }
      ),
      L || d ? null : /* @__PURE__ */ $("span", { className: Tp, "aria-hidden": "true", children: [
        /* @__PURE__ */ u("span", { className: Mp }),
        /* @__PURE__ */ u("span", { className: Dp, children: /* @__PURE__ */ u(Cs, { className: "rtl:-scale-x-100" }) })
      ] }),
      /* @__PURE__ */ u("span", { className: Np, "aria-hidden": "true", children: /* @__PURE__ */ u("span", { className: Op }) })
    ] });
  else if (k === "ghost" || k === "text") {
    const Z = k === "text";
    U = M(
      Z ? Wp : Vp,
      Z ? i ? "!text-danger" : "!text-accent" : Up[B],
      n && "!w-full max-w-none",
      !Z && L && "!w-[var(--su-h)] !px-0",
      // No label span under asChild — the rest-state underline moves to the root.
      a && Z && !f && "[background:linear-gradient(currentColor_0_0)_0_100%_/_100%_1px_no-repeat]"
    ), te = [
      ...H(Z ? f ? Gp : Hp : void 0),
      f && !T ? /* @__PURE__ */ u(Mt, { size: "inherit", className: Qp, children: /* @__PURE__ */ u(Cs, {}) }, "arrow") : null
    ];
  } else
    U = M(
      $p,
      Bp[B],
      k === "dashed" ? Fp : zp,
      n && "!w-full max-w-none",
      L && "!w-[var(--su-h)] !px-0",
      // asChild has no label span to invert, so the root carries the hover ink.
      a && "[&:not([aria-disabled=true])]:hover:!text-[var(--su-frame-hover-fg)] [&[data-state=open]:not([aria-disabled=true])]:!text-[var(--su-frame-hover-fg)] [&:not([aria-disabled=true])]:active:!text-[var(--su-frame-press-fg)]"
    ), te = a ? [
      /* @__PURE__ */ u("span", { className: ys, "data-su-px": !0, "aria-hidden": "true" }, "px"),
      ...H()
    ] : /* @__PURE__ */ $(ve, { children: [
      /* @__PURE__ */ u("span", { className: ys, "data-su-px": !0, "aria-hidden": "true" }),
      /* @__PURE__ */ u("span", { className: Lp, children: H() })
    ] });
  const G = a ? ep : p ? "a" : "button", J = {
    ...C,
    ref: O,
    className: M(
      Ap,
      ee,
      Sp[o],
      (L ? kp : _p)[o],
      U,
      v
    ),
    "aria-busy": T || void 0,
    "aria-disabled": y || void 0,
    onClick: (Z) => {
      if (D) {
        Z.preventDefault(), Z.stopPropagation();
        return;
      }
      x == null || x(Z);
    }
  };
  return T && !V && !C["aria-label"] && !C["aria-labelledby"] && (J["aria-label"] = "Loading"), p ? (y || (J.href = p), J.target = h, J.rel = b ?? (h === "_blank" ? "noopener noreferrer" : void 0), y && (J.role = "link", J.tabIndex = -1)) : a || (J.type = S, J.disabled = !!y), /* @__PURE__ */ u(G, { ...J, children: te });
}), Xp = {
  // Brand Heading role: clamp(32px, 3.6vw, 48px) / 500 / 1.06 / -0.02em.
  largeTitle: "text-[length:clamp(var(--su-text-title-1),3.6vw,var(--su-text-large-title))] font-medium leading-[var(--su-leading-snug)] tracking-[var(--su-tracking-tight)] text-balance",
  // `text-*` carries the scale's own leading and tracking (see uno.config fontSize).
  title1: "text-title-1 font-medium text-balance",
  // Brand Subhead role: 22px / 500 / 1.25 / -0.01em.
  title2: "text-title-2 font-medium text-balance",
  title3: "text-title-3 font-medium tracking-[-0.01em] text-balance",
  // Emphasized body, not a section heading — hence weight 600 and a <p> default.
  headline: "text-[length:var(--su-text-headline)] font-semibold leading-[var(--su-leading-normal)]",
  // Brand Lede role: 19px / 400 / 1.55. Pairs with tone="secondary" measure="lede".
  lede: "text-[length:var(--su-text-title-3)] font-normal leading-[1.55]",
  body: "text-body font-normal",
  // 15px at the body's 1.6, not the scale's 1.5 — Callout is running copy here.
  callout: "text-[length:var(--su-text-callout)] leading-[var(--su-leading-relaxed)]",
  subhead: "text-subhead",
  footnote: "text-footnote",
  caption1: "text-caption-1",
  // Legacy 11px sans — prefer variant="label" for 11px chrome.
  caption2: "text-caption-2",
  label: "su-label [font-variant-numeric:tabular-nums]",
  code: "text-[0.88em] [font-stretch:87.5%] [font-variant-numeric:tabular-nums]"
}, jp = {
  label: !0,
  code: !0
}, Kp = {
  primary: "text-label",
  secondary: "text-label-secondary",
  // tertiary/quaternary fail WCAG text contrast; lift them for prefers-contrast users.
  tertiary: "text-label-tertiary contrast-more:text-label-secondary",
  quaternary: "text-label-quaternary contrast-more:text-label-secondary",
  // Raw status fills fail 4.5:1 as text. danger-text is themed; success/warning have no
  // text-grade token (the -strong fills are ~3:1 on dark paper), so pull them toward ink.
  danger: "text-danger-text",
  success: "text-[color-mix(in_srgb,var(--su-success)_50%,var(--su-label))]",
  warning: "text-[color-mix(in_srgb,var(--su-warning)_50%,var(--su-label))]"
}, qp = {
  largeTitle: "h1",
  title1: "h2",
  title2: "h2",
  title3: "h3",
  headline: "p",
  lede: "p",
  body: "p",
  callout: "p",
  subhead: "p",
  footnote: "p",
  caption1: "span",
  caption2: "span",
  label: "span",
  code: "code"
}, ja = Ke(
  function({
    variant: e = "body",
    tone: r = "primary",
    as: o,
    strong: n = !1,
    lines: a,
    measure: i,
    className: s,
    children: c,
    style: l,
    ...f
  }, d) {
    const p = o ?? qp[e] ?? "p", h = n && p === "span" ? "strong" : p, b = a !== void 0 && a > 1;
    return /* @__PURE__ */ u(
      h,
      {
        ref: d,
        className: M(
          "m-0 [overflow-wrap:anywhere]",
          jp[e] ? "font-mono" : "font-sans",
          Xp[e],
          Kp[r],
          n && "font-semibold",
          i && (i === "lede" ? "max-w-[44ch]" : "max-w-[62ch]"),
          a === 1 && "truncate",
          b && "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:var(--su-lines)]",
          s
        ),
        style: b ? { ...l, "--su-lines": a } : l,
        ...f,
        title: f.title ?? (a !== void 0 && typeof c == "string" ? c : void 0),
        children: c
      }
    );
  }
), hA = ({
  level: t = 1,
  as: e,
  ...r
}) => /* @__PURE__ */ u(ja, { variant: t === 1 ? "title1" : t === 2 ? "title2" : t === 3 ? "title3" : "headline", as: e ?? `h${t}`, ...r }), gA = (t) => /* @__PURE__ */ u(ja, { variant: "body", as: "span", ...t }), bA = (t) => /* @__PURE__ */ u(ja, { variant: "body", as: "p", ...t }), Un = "bottom-[max(var(--su-space-5),env(safe-area-inset-bottom,0px))]", Jp = {
  "bottom-right": `end-su5 ${Un}`,
  "bottom-left": `start-su5 ${Un}`,
  "bottom-center": `left-1/2 -translate-x-1/2 ${Un}`
}, vA = Ke(
  function({ placement: e = "bottom-right", icon: r, className: o, children: n, tooltip: a, ...i }, s) {
    return /* @__PURE__ */ u(
      Be,
      {
        ref: s,
        variant: "primary",
        icon: r,
        "aria-label": n == null || n === !1 ? a : void 0,
        title: a,
        className: M(
          // `!` — Button's own `scanClass`/`boxClass` set `relative`, and UnoCSS
          // decides which of two equal-specificity utilities wins by sheet order.
          // Button's `labelTextClass` already truncates, so no override here.
          "!fixed z-[var(--su-z-sticky)] max-w-[calc(100vw_-_2_*_var(--su-space-5))]",
          "animate-su-rise-in motion-reduce:animate-none",
          // Forced-colors drops the action fill; keep an edge so the FAB stays
          // distinguishable from whatever content it floats over.
          "forced-colors:border forced-colors:border-[ButtonBorder]",
          Jp[e],
          o
        ),
        ...i,
        children: n
      }
    );
  }
);
var Zp = Object.defineProperty, em = (t, e) => Zp(t, "name", { value: e, configurable: !0 }), tm = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], W = tm.reduce((t, e) => {
  const r = /* @__PURE__ */ Ze(`Primitive.${e}`), o = m.forwardRef((n, a) => {
    const { asChild: i, ...s } = n, c = i ? r : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u(c, { ...s, ref: a });
  });
  return o.displayName = `Primitive.${e}`, { ...t, [e]: o };
}, {});
function en(t, e) {
  t && Sr.flushSync(() => t.dispatchEvent(e));
}
em(en, "dispatchDiscreteCustomEvent");
var rm = Object.defineProperty, rl = (t, e) => rm(t, "name", { value: e, configurable: !0 }), As = "horizontal", om = ["horizontal", "vertical"], nm = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ rl(function(e, r) {
    const { decorative: o, orientation: n = As, ...a } = e, i = ol(n) ? n : As, c = o ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
    return /* @__PURE__ */ u(
      W.div,
      {
        "data-orientation": i,
        ...c,
        ...a,
        ref: r
      }
    );
  }, "Separator")
);
function ol(t) {
  return om.includes(t);
}
rl(ol, "isValidOrientation");
var am = nm;
const Ss = {
  none: "",
  compact: "my-su2",
  default: "my-su6"
}, im = {
  none: "",
  compact: "mx-su1",
  default: "mx-su2"
};
function xA({
  orientation: t = "horizontal",
  decorative: e = !0,
  strength: r = "hairline",
  spacing: o = "default",
  labelPlacement: n = "center",
  children: a,
  className: i,
  asChild: s,
  ...c
}) {
  const l = M(
    "shrink-0 forced-colors:bg-[CanvasText]",
    r === "strong" ? "bg-rule-strong" : "bg-separator"
  );
  return a != null && a !== !1 && t === "horizontal" ? /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "flex items-center gap-su3",
        Ss[o],
        i
      ),
      ...c,
      children: [
        /* @__PURE__ */ u(
          "span",
          {
            "aria-hidden": !0,
            className: M(
              l,
              "h-px",
              n === "start" ? "w-[var(--su-space-2)]" : "flex-1"
            )
          }
        ),
        /* @__PURE__ */ u("span", { className: "su-label text-ink-2 whitespace-nowrap", children: a }),
        /* @__PURE__ */ u(
          "span",
          {
            "aria-hidden": !0,
            className: M(l, "h-px", n === "end" ? "w-[var(--su-space-2)]" : "flex-1")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ u(
    am,
    {
      asChild: s,
      decorative: e,
      orientation: t,
      className: M(
        l,
        t === "vertical" ? M(
          "w-px self-stretch inline-block align-middle min-h-[0.9em]",
          im[o]
        ) : M("h-px w-full", Ss[o]),
        i
      ),
      ...c
    }
  );
}
const sm = /* @__PURE__ */ new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16]), jt = (t) => sm.has(t) ? `var(--su-space-${t}, ${t * 4}px)` : `${t}px`, nl = { small: 2, middle: 3, large: 4 }, al = {
  0: "gap-0",
  1: "gap-su1",
  2: "gap-su2",
  3: "gap-su3",
  4: "gap-su4",
  5: "gap-su5",
  6: "gap-su6",
  7: "gap-[var(--su-space-7)]",
  8: "gap-su8",
  9: "gap-[var(--su-space-9)]",
  10: "gap-[var(--su-space-10)]",
  12: "gap-[var(--su-space-12)]",
  16: "gap-[var(--su-space-16)]"
}, Qo = {
  start: "items-start",
  "flex-start": "items-start",
  center: "items-center",
  end: "items-end",
  "flex-end": "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch"
}, _s = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse"
}, ks = {
  start: "justify-start",
  "flex-start": "justify-start",
  center: "justify-center",
  end: "justify-end",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly"
}, Rs = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  "wrap-reverse": "flex-wrap-reverse"
}, wA = Ke(function({
  direction: e,
  vertical: r,
  align: o,
  justify: n,
  wrap: a,
  gap: i,
  inline: s = !1,
  as: c,
  className: l,
  style: f,
  children: d,
  ...p
}, h) {
  const b = c ?? "div", g = e ?? (r ? "column" : void 0), v = a === !0 ? "wrap" : a === !1 ? "nowrap" : a, w = typeof i == "number" ? Math.max(0, i) : typeof i == "string" ? nl[i] : void 0, y = w === void 0 ? void 0 : al[w];
  return /* @__PURE__ */ u(
    b,
    {
      ref: h,
      className: M(
        s ? "inline-flex" : "flex",
        g && _s[g],
        o && Qo[o],
        n && ks[n],
        v && Rs[v],
        y,
        l
      ),
      style: {
        flexDirection: g && !_s[g] ? g : void 0,
        alignItems: o && !Qo[o] ? o : void 0,
        justifyContent: n && !ks[n] ? n : void 0,
        flexWrap: v && !Rs[v] ? v : void 0,
        gap: y ? void 0 : w !== void 0 ? jt(w) : typeof i == "string" ? i : void 0,
        // style wins over the props above, matching Space/Grid.
        ...f
      },
      ...p,
      children: d
    }
  );
}), cm = 24, Wn = (t) => typeof t == "number" ? jt(t) : t;
function lm({ gutter: t = 0, className: e, style: r, ...o }) {
  const [n, a] = Array.isArray(t) ? t : [t, t];
  return /* @__PURE__ */ u(
    "div",
    {
      className: M("flex flex-wrap", e),
      style: {
        // Always written — even "0px" — so a nested Row resets the
        // inherited gutter instead of doubling it.
        "--su-grid-pad-x": n ? `calc(${Wn(n)} / 2)` : "0px",
        marginInline: n ? `calc(${Wn(n)} / -2)` : void 0,
        // Vertical gutter is row-gap, not padding: it applies only BETWEEN
        // wrapped lines, so the Row is never taller than its content.
        rowGap: a ? Wn(a) : void 0,
        ...r
      },
      ...o
    }
  );
}
function um({
  span: t = cm,
  offset: e = 0,
  className: r,
  style: o,
  ...n
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "box-border min-w-0 grow-0 shrink-0 px-[var(--su-grid-pad-x,0)]",
        "basis-[calc(var(--su-col-span)/24*100%)] max-w-[calc(var(--su-col-span)/24*100%)]",
        e > 0 && "ms-[calc(var(--su-col-offset)/24*100%)]",
        t === 0 && "hidden",
        r
      ),
      style: {
        "--su-col-span": t,
        "--su-col-offset": e || void 0,
        ...o
      },
      ...n
    }
  );
}
const yA = { Row: lm, Col: um }, il = "shrink-0 px-su4 py-su3";
function tn({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "flex flex-col has-[>aside]:flex-row flex-auto min-h-full bg-paper",
        t
      ),
      ...e
    }
  );
}
function dm({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    "header",
    {
      className: M(
        il,
        "flex items-center min-h-[var(--su-nav-height)] bg-paper border-b border-b-rule",
        t
      ),
      ...e
    }
  );
}
function fm({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    "aside",
    {
      className: M(
        "shrink-0 w-[min(240px,45vw)] bg-paper border-e border-e-rule",
        t
      ),
      ...e
    }
  );
}
function pm({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    "main",
    {
      className: M("flex-1 min-w-0 min-h-0 p-su4 md:p-su6", t),
      ...e
    }
  );
}
function mm({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    "footer",
    {
      className: M(
        il,
        "border-t border-t-rule text-label-secondary text-footnote",
        t
      ),
      ...e
    }
  );
}
tn.Header = dm;
tn.Sider = fm;
tn.Content = pm;
tn.Footer = mm;
const Es = (t) => typeof t == "number" ? t : nl[t] ?? t, Hn = (t) => typeof t == "number" ? jt(t) : t, CA = Ke(function({
  size: e = "middle",
  direction: r = "horizontal",
  orientation: o,
  vertical: n,
  align: a,
  wrap: i = !1,
  separator: s,
  block: c = !1,
  className: l,
  children: f,
  style: d,
  ...p
}, h) {
  const b = n ?? (o ?? r) === "vertical", [g, v] = Array.isArray(e) ? e : [e, e], w = Es(g), y = Es(v), x = w === y, C = x && typeof w == "number" ? al[w] : void 0;
  return /* @__PURE__ */ u(
    "div",
    {
      ref: h,
      className: M(
        c ? "flex w-full" : "inline-flex",
        b && "flex-col",
        a ? Qo[a] : b ? "items-start" : "items-center",
        i && !b && "flex-wrap",
        C,
        l
      ),
      style: {
        gap: C || !x ? void 0 : Hn(w),
        columnGap: x ? void 0 : Hn(w),
        rowGap: x ? void 0 : Hn(y),
        alignItems: a && !Qo[a] ? a : void 0,
        // style wins over the props above, matching Flex/Grid.
        ...d
      },
      ...p,
      children: s == null ? f : Wa.toArray(f).flatMap(
        (E, k) => k === 0 ? [E] : [
          // `contents` keeps the separator itself the flex item, so a
          // `<Divider orientation="vertical">` still self-stretches.
          /* @__PURE__ */ u("span", { "aria-hidden": "true", className: "contents", children: s }, `sep-${k}`),
          E
        ]
      )
    }
  );
}), hm = (t) => typeof t == "number" ? `${t}px` : t, AA = Ke(function({ columns: e = 3, minColumnWidth: r, gap: o = 3, className: n, itemClassName: a, style: i, children: s, ...c }, l) {
  const f = pe(null), d = Math.max(1, Math.trunc(e) || 1), [p, h] = Array.isArray(o) ? o : [o, o], b = Wa.toArray(s);
  return Ha(() => {
    const g = f.current;
    if (!g) return;
    const v = () => {
      const x = parseFloat(getComputedStyle(g).getPropertyValue("--su-masonry-rg")) || 0, C = [...g.children], E = C.map((k) => Math.max(1, k.offsetHeight + Math.round(x)));
      C.forEach((k, S) => {
        k.style.gridRowEnd = `span ${E[S]}`;
      });
    };
    v();
    let w = g.getBoundingClientRect().width;
    const y = new ResizeObserver((x) => {
      for (const C of x)
        if (C.target === g) {
          if (C.contentRect.width === w) return;
          w = C.contentRect.width;
        }
      v();
    });
    y.observe(g);
    for (const x of g.children) y.observe(x);
    return () => y.disconnect();
  }, [b.length, d, p, h, r]), /* @__PURE__ */ u(
    "div",
    {
      ...c,
      ref: (g) => {
        f.current = g, typeof l == "function" ? l(g) : l && (l.current = g);
      },
      className: M(
        // 0px rows + 1px row-gap: span from measured height packs under neighbour.
        "grid w-full items-start !auto-rows-[0px] !gap-y-px",
        n
      ),
      style: {
        ...i,
        gridTemplateColumns: r ? `repeat(auto-fill, minmax(max(${hm(r)}, calc((100% - ${d - 1} * ${jt(p)}) / ${d})), 1fr))` : `repeat(${d}, minmax(0, 1fr))`,
        columnGap: jt(p),
        "--su-masonry-rg": jt(h),
        // Every item's span includes a trailing gap, so the grid ends one gap
        // below its last item. Pull that phantom row back off.
        marginBottom: b.length ? `calc(${jt(h)} * -1)` : void 0
      },
      children: b.map((g, v) => /* @__PURE__ */ u("div", { className: M("min-w-0", a), children: g }, g.key ?? v))
    }
  );
}), Ps = "overflow-auto bg-paper";
function SA({
  direction: t = "horizontal",
  defaultSize: e = 50,
  size: r,
  onSizeChange: o,
  min: n = 20,
  max: a = 80,
  first: i,
  second: s,
  separatorLabel: c = "Resize panes",
  className: l,
  ref: f,
  ...d
}) {
  const p = (A) => Math.min(a, Math.max(n, A)), [h, b] = Q(() => p(e)), g = pe(null), v = pe(0), w = pe(0), y = oo(), x = t === "horizontal", C = n < a, E = p(r ?? h), k = (A) => {
    const _ = p(A);
    r === void 0 && b(_), o == null || o(_);
  }, S = () => x && !!g.current && getComputedStyle(g.current).direction === "rtl";
  return /* @__PURE__ */ $(
    "div",
    {
      ref: (A) => {
        g.current = A, typeof f == "function" ? f(A) : f && (f.current = A);
      },
      className: M(
        "flex w-full h-full su-hairline rounded-none bg-paper",
        x ? "flex-row" : "flex-col",
        l
      ),
      ...d,
      children: [
        /* @__PURE__ */ u(
          "div",
          {
            id: y,
            className: Ps,
            style: x ? { width: `${E}%` } : { height: `${E}%` },
            children: i
          }
        ),
        /* @__PURE__ */ u(
          "div",
          {
            className: M(
              // 8px of layout, 44px of hit area via the `after:` overlay.
              // ponytail: the overlay eats pointer events 18px into each pane (a pane
              // scrollbar hugging the divider included); gate it behind
              // `[@media(pointer:coarse)]:` if that ever bites on desktop.
              "relative z-1 shrink-0 flex items-center justify-center touch-none",
              "su-focus-ring",
              "before:content-[''] before:absolute before:bg-rule-strong before:[transition:background-color_var(--su-duration-fast)_var(--su-ease-out),width_var(--su-duration-fast)_var(--su-ease-out),height_var(--su-duration-fast)_var(--su-ease-out)] motion-reduce:before:transition-none",
              "after:content-[''] after:absolute",
              x ? "w-[var(--su-space-2)] min-w-[var(--su-space-2)] before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 after:top-0 after:bottom-0 after:left-[-18px] after:right-[-18px]" : "h-[var(--su-space-2)] min-h-[var(--su-space-2)] before:left-0 before:right-0 before:top-1/2 before:h-px before:-translate-y-1/2 after:left-0 after:right-0 after:top-[-18px] after:bottom-[-18px]",
              C ? M(
                x ? "cursor-col-resize" : "cursor-row-resize",
                "hover:before:bg-accent focus-visible:before:bg-accent active:before:bg-[var(--su-accent-active)]",
                x ? "hover:before:w-[2px] focus-visible:before:w-[2px] active:before:w-[2px]" : "hover:before:h-[2px] focus-visible:before:h-[2px] active:before:h-[2px]"
              ) : "cursor-default"
            ),
            role: "separator",
            tabIndex: C ? 0 : void 0,
            "aria-label": c,
            "aria-controls": y,
            "aria-disabled": C ? void 0 : !0,
            "aria-orientation": x ? "vertical" : "horizontal",
            "aria-valuemin": n,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(E),
            "aria-valuetext": `${Math.round(E)}%`,
            onPointerDown: (A) => {
              !C || A.pointerType === "mouse" && A.button !== 0 || (A.preventDefault(), A.currentTarget.focus(), A.currentTarget.setPointerCapture(A.pointerId), v.current = x ? A.clientX : A.clientY, w.current = E);
            },
            onPointerMove: (A) => {
              if (!A.currentTarget.hasPointerCapture(A.pointerId) || !g.current)
                return;
              const _ = g.current.getBoundingClientRect(), R = x ? _.width : _.height;
              if (!R) return;
              const P = ((x ? A.clientX : A.clientY) - v.current) * (S() ? -1 : 1);
              k(w.current + P / R * 100);
            },
            onPointerUp: (A) => {
              A.currentTarget.hasPointerCapture(A.pointerId) && A.currentTarget.releasePointerCapture(A.pointerId);
            },
            onDoubleClick: () => C && k(e),
            onKeyDown: (A) => {
              if (!C) return;
              const _ = S(), R = x ? _ ? "ArrowRight" : "ArrowLeft" : "ArrowUp", P = x ? _ ? "ArrowLeft" : "ArrowRight" : "ArrowDown";
              if (![R, P, "Home", "End", "PageUp", "PageDown"].includes(A.key)) return;
              A.preventDefault();
              const T = A.key === "PageUp" || A.key === "PageDown" ? 10 : 2, D = A.key === P || A.key === "PageDown";
              k(
                A.key === "Home" ? n : A.key === "End" ? a : E + (D ? T : -T)
              );
            },
            children: /* @__PURE__ */ u(
              "span",
              {
                "aria-hidden": !0,
                className: M(
                  "relative bg-label-tertiary",
                  x ? "w-[2px] h-[16px]" : "h-[2px] w-[16px]"
                )
              }
            )
          }
        ),
        /* @__PURE__ */ u("div", { className: M(Ps, "flex-1"), children: s })
      ]
    }
  );
}
function gm(t) {
  const e = t.lastIndexOf("#");
  return e >= 0 ? t.slice(e + 1) : t;
}
const bm = "flex flex-col m-0 p-0 list-none border-s border-s-solid border-s-rule", vm = "flex items-center min-h-[var(--su-hit-target)] -ms-px py-su2 px-su3 border-s-2 border-s-solid text-footnote font-medium break-words no-underline su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:no-underline", xm = "border-s-transparent text-label-secondary [@media(hover:hover)]:hover:text-label", wm = "border-s-accent text-accent [@media(hover:hover)]:hover:text-[var(--su-accent-hover)] contrast-more:font-semibold";
function _A({
  items: t,
  offset: e = 80,
  getContainer: r,
  onChange: o,
  className: n,
  ...a
}) {
  const i = t.map((g) => gm(g.href)), [s, c] = Q(() => i[0] ?? ""), l = i.includes(s) ? s : i[0] ?? "", f = pe(r);
  f.current = r;
  const d = pe(0), p = i.join("|");
  le(() => {
    var E;
    const g = p.split("|"), v = ((E = f.current) == null ? void 0 : E.call(f)) ?? null, w = v ?? window;
    let y = 0;
    const x = () => {
      if (y = 0, Date.now() < d.current) return;
      const k = g.map((R) => document.getElementById(R)).filter((R) => R !== null), S = v ? v.getBoundingClientRect().top : 0, A = k.map((R) => ({ el: R, top: R.getBoundingClientRect().top - S })).filter((R) => R.top <= e + 1).sort((R, P) => R.top - P.top).pop(), _ = (A == null ? void 0 : A.el) ?? k[0];
      _ && c(_.id);
    }, C = () => {
      y || (y = requestAnimationFrame(x));
    };
    return x(), w.addEventListener("scroll", C, { passive: !0 }), window.addEventListener("resize", C, { passive: !0 }), () => {
      y && cancelAnimationFrame(y), w.removeEventListener("scroll", C), window.removeEventListener("resize", C);
    };
  }, [p, e]);
  const h = pe(l);
  if (le(() => {
    h.current !== l && (h.current = l, o == null || o(`#${l}`));
  }, [l, o]), t.length === 0) return null;
  const b = (g, v) => {
    var k;
    if (g.defaultPrevented || g.button !== 0 || g.metaKey || g.ctrlKey || g.shiftKey || g.altKey)
      return;
    const w = document.getElementById(v);
    if (!w) return;
    g.preventDefault(), c(v);
    const y = ((k = f.current) == null ? void 0 : k.call(f)) ?? null, x = w.getBoundingClientRect().top, C = y ? x - y.getBoundingClientRect().top + y.scrollTop - e : x + window.scrollY - e, E = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    d.current = Date.now() + (E ? 700 : 0), (y ?? window).scrollTo({ top: C, behavior: E ? "smooth" : "auto" }), history.replaceState(null, "", `#${v}`), w.setAttribute("tabindex", "-1"), w.focus({ preventScroll: !0 }), w.addEventListener(
      "blur",
      () => w.removeAttribute("tabindex"),
      { once: !0 }
    );
  };
  return /* @__PURE__ */ u(
    "nav",
    {
      className: M("font-sans", n),
      "aria-label": "Page sections",
      ...a,
      children: /* @__PURE__ */ u("ul", { className: bm, children: t.map((g, v) => {
        const w = i[v], y = l === w;
        return /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
          "a",
          {
            href: `#${w}`,
            className: M(
              vm,
              // Picked, not overridden: two same-property utilities would
              // race on source order in the generated CSS.
              y ? wm : xm
            ),
            "aria-current": y ? "location" : void 0,
            title: g.title,
            onClick: (x) => b(x, w),
            children: g.title
          }
        ) }, `${w}-${v}`);
      }) })
    }
  );
}
const ym = "block max-w-[24ch] overflow-hidden text-ellipsis whitespace-nowrap", Cm = M(
  "inline-flex items-center gap-su2 min-w-0",
  "[&_a]:block [&_a]:max-w-[24ch] [&_a]:overflow-hidden [&_a]:text-ellipsis [&_a]:whitespace-nowrap [&_a]:text-label-secondary [&_a]:no-underline [&_a]:leading-[20px] [&_a]:py-[12px] [&_a]:-my-[12px] [&_a]:transition-colors [&_a]:duration-[var(--su-duration-fast)] [&_a]:ease-[var(--su-ease-out)]",
  "[&_a:hover]:text-label [&_a:hover]:underline [&_a:hover]:decoration-1 [&_a:hover]:underline-offset-[3px]",
  "[&_a:active]:text-accent",
  "[&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-accent [&_a:focus-visible]:outline-offset-[var(--su-focus-ring-offset)]",
  // Current page keeps the weight + ink step even when it is a real link.
  "[&_a[aria-current]]:(text-label font-medium)"
);
function kA({
  items: t,
  separator: e = "/",
  className: r,
  ...o
}) {
  return t.length === 0 ? null : /* @__PURE__ */ u(
    "nav",
    {
      className: M("font-sans text-footnote", r),
      "aria-label": "Breadcrumb",
      ...o,
      children: /* @__PURE__ */ u("ol", { role: "list", className: "flex flex-wrap items-center gap-su2 m-0 p-0 list-none", children: t.map((n, a) => {
        const i = a === t.length - 1, s = typeof n.label == "string" ? n.label : void 0;
        return /* @__PURE__ */ $("li", { className: Cm, children: [
          a > 0 && /* @__PURE__ */ u(
            "span",
            {
              className: "inline-block select-none text-label-secondary contrast-more:text-label rtl:-scale-x-100",
              "aria-hidden": "true",
              children: e
            }
          ),
          n.href ? /* @__PURE__ */ u(
            "a",
            {
              href: n.href,
              onClick: n.onClick,
              title: s,
              "aria-current": i ? "page" : void 0,
              children: n.label
            }
          ) : /* @__PURE__ */ u(
            "span",
            {
              className: M(
                ym,
                i ? "text-label font-medium" : "text-label-secondary"
              ),
              title: s,
              "aria-current": i ? "page" : void 0,
              children: n.label
            }
          )
        ] }, n.key ?? a);
      }) })
    }
  );
}
var Am = Object.defineProperty, _r = (t, e) => Am(t, "name", { value: e, configurable: !0 }), sl = !!(typeof window < "u" && window.document && window.document.createElement);
function F(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return /* @__PURE__ */ _r(function(n) {
    if (t == null || t(n), r === !1 || !n || !n.defaultPrevented)
      return e == null ? void 0 : e(n);
  }, "handleEvent");
}
_r(F, "composeEventHandlers");
function Sm(t) {
  var e;
  if (!sl)
    throw new Error("Cannot access window outside of the DOM");
  return ((e = t == null ? void 0 : t.ownerDocument) == null ? void 0 : e.defaultView) ?? window;
}
_r(Sm, "getOwnerWindow");
function la(t) {
  if (!sl)
    throw new Error("Cannot access document outside of the DOM");
  return (t == null ? void 0 : t.ownerDocument) ?? document;
}
_r(la, "getOwnerDocument");
function cl(t, e = !1) {
  const { activeElement: r } = la(t);
  if (!(r != null && r.nodeName))
    return null;
  if (ll(r) && r.contentDocument)
    return cl(r.contentDocument.body, e);
  if (e) {
    const o = r.getAttribute("aria-activedescendant");
    if (o) {
      const n = la(r).getElementById(o);
      if (n)
        return n;
    }
  }
  return r;
}
_r(cl, "getActiveElement");
function ll(t) {
  return t.tagName === "IFRAME";
}
_r(ll, "isFrame");
var _m = Object.defineProperty, je = (t, e) => _m(t, "name", { value: e, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function km(t, e) {
  const r = m.createContext(e);
  r.displayName = t + "Context";
  const o = /* @__PURE__ */ je((a) => {
    const { children: i, ...s } = a, c = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ u(r.Provider, { value: c, children: i });
  }, "Provider");
  o.displayName = t + "Provider";
  function n(a, i = {}) {
    const { optional: s = !1 } = i, c = m.useContext(r);
    if (c) return c;
    if (e !== void 0) return e;
    if (!s)
      throw new Error(`\`${a}\` must be used within \`${t}\``);
  }
  return je(n, "useContext"), [o, n];
}
je(km, "createContext");
// @__NO_SIDE_EFFECTS__
function ge(t, e = []) {
  let r = [];
  function o(a, i) {
    const s = m.createContext(i);
    s.displayName = a + "Context";
    const c = r.length;
    r = [...r, i];
    const l = /* @__PURE__ */ je((d) => {
      var w;
      const { scope: p, children: h, ...b } = d, g = ((w = p == null ? void 0 : p[t]) == null ? void 0 : w[c]) || s, v = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ u(g.Provider, { value: v, children: h });
    }, "Provider");
    l.displayName = a + "Provider";
    function f(d, p, h = {}) {
      var w;
      const { optional: b = !1 } = h, g = ((w = p == null ? void 0 : p[t]) == null ? void 0 : w[c]) || s, v = m.useContext(g);
      if (v) return v;
      if (i !== void 0) return i;
      if (!b)
        throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return je(f, "useContext"), [l, f];
  }
  je(o, "createContext");
  const n = /* @__PURE__ */ je(() => {
    const a = r.map((i) => m.createContext(i));
    return /* @__PURE__ */ je(function(s) {
      const c = (s == null ? void 0 : s[t]) || a;
      return m.useMemo(
        () => ({ [`__scope${t}`]: { ...s, [t]: c } }),
        [s, c]
      );
    }, "useScope");
  }, "createScope");
  return n.scopeName = t, [o, ul(n, ...e)];
}
je(ge, "createContextScope");
function ul(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = /* @__PURE__ */ je(() => {
    const o = t.map((n) => ({
      useScope: n(),
      scopeName: n.scopeName
    }));
    return /* @__PURE__ */ je(function(a) {
      const i = o.reduce((s, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return { ...s, ...d };
      }, {});
      return m.useMemo(() => ({ [`__scope${e.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return r.scopeName = e.scopeName, r;
}
je(ul, "composeContextScopes");
var de = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Rm = Object.defineProperty, Em = (t, e) => Rm(t, "name", { value: e, configurable: !0 }), Is = m[" useEffectEvent ".trim().toString()], Ts = m[" useInsertionEffect ".trim().toString()];
function dl(t) {
  if (typeof Is == "function")
    return Is(t);
  const e = m.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Ts == "function" ? Ts(() => {
    e.current = t;
  }) : de(() => {
    e.current = t;
  }), m.useMemo(() => ((...r) => {
    var o;
    return (o = e.current) == null ? void 0 : o.call(e, ...r);
  }), []);
}
Em(dl, "useEffectEvent");
var Pm = Object.defineProperty, ao = (t, e) => Pm(t, "name", { value: e, configurable: !0 }), Im = m[" useInsertionEffect ".trim().toString()] || de;
function xe({
  prop: t,
  defaultProp: e,
  onChange: r = /* @__PURE__ */ ao(() => {
  }, "onChange"),
  caller: o
}) {
  const [n, a, i] = fl({
    defaultProp: e,
    onChange: r
  }), s = t !== void 0, c = s ? t : n, l = m.useCallback(
    (f) => {
      var d;
      if (s) {
        const p = pl(f) ? f(t) : f;
        p !== t && ((d = i.current) == null || d.call(i, p));
      } else
        a(f);
    },
    [s, t, a, i]
  );
  return [c, l];
}
ao(xe, "useControllableState");
function fl({
  defaultProp: t,
  onChange: e
}) {
  const [r, o] = m.useState(t), n = m.useRef(r), a = m.useRef(e);
  return Im(() => {
    a.current = e;
  }, [e]), m.useEffect(() => {
    var i;
    n.current !== r && ((i = a.current) == null || i.call(a, r), n.current = r);
  }, [r, n]), [r, o, a];
}
ao(fl, "useUncontrolledState");
function pl(t) {
  return typeof t == "function";
}
ao(pl, "isFunction");
var Ms = Symbol("RADIX:SYNC_STATE");
function Tm(t, e, r, o) {
  const { prop: n, defaultProp: a, onChange: i, caller: s } = e, c = n !== void 0, l = dl(i), f = [{ ...r, state: a }];
  o && f.push(o);
  const [d, p] = m.useReducer(
    (v, w) => {
      if (w.type === Ms)
        return { ...v, state: w.state };
      const y = t(v, w);
      return c && !Object.is(y.state, v.state) && l(y.state), y;
    },
    ...f
  ), h = d.state, b = m.useRef(h);
  m.useEffect(() => {
    b.current !== h && (b.current = h, c || l(h));
  }, [h, b, c]);
  const g = m.useMemo(() => n !== void 0 ? { ...d, state: n } : d, [d, n]);
  return m.useEffect(() => {
    c && !Object.is(n, d.state) && p({ type: Ms, state: n });
  }, [n, d.state, c]), [g, p];
}
ao(Tm, "useControllableStateReducer");
var Mm = Object.defineProperty, _e = (t, e) => Mm(t, "name", { value: e, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function or(t) {
  const e = t + "CollectionProvider", [r, o] = /* @__PURE__ */ ge(e), [n, a] = r(
    e,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ _e((g) => {
    const { scope: v, children: w } = g, y = m.useRef(null), x = m.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u(n, { scope: v, itemMap: x, collectionRef: y, children: w });
  }, "CollectionProvider");
  i.displayName = e;
  const s = t + "CollectionSlot", c = /* @__PURE__ */ Ze(s), l = m.forwardRef(
    (g, v) => {
      const { scope: w, children: y } = g, x = a(s, w), C = Y(v, x.collectionRef);
      return /* @__PURE__ */ u(c, { ref: C, children: y });
    }
  );
  l.displayName = s;
  const f = t + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Ze(f), h = m.forwardRef(
    (g, v) => {
      const { scope: w, children: y, ...x } = g, C = m.useRef(null), E = Y(v, C), k = a(f, w);
      return m.useEffect(() => (k.itemMap.set(C, { ref: C, ...x }), () => void k.itemMap.delete(C))), /* @__PURE__ */ u(p, { [d]: "", ref: E, children: y });
    }
  );
  h.displayName = f;
  function b(g) {
    const v = a(t + "CollectionConsumer", g);
    return m.useCallback(() => {
      const y = v.collectionRef.current;
      if (!y) return [];
      const x = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(v.itemMap.values()).sort(
        (k, S) => x.indexOf(k.ref.current) - x.indexOf(S.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return _e(b, "useCollection"), [
    { Provider: i, Slot: l, ItemSlot: h },
    b,
    o
  ];
}
_e(or, "createCollection");
var Ds = /* @__PURE__ */ new WeakMap(), ye, Ye, Gn = (Ye = class extends Map {
  constructor(r) {
    super(r);
    vs(this, ye);
    zn(this, ye, [...super.keys()]), Ds.set(this, !0);
  }
  set(r, o) {
    return Ds.get(this) && (this.has(r) ? Ie(this, ye)[Ie(this, ye).indexOf(r)] = r : Ie(this, ye).push(r)), super.set(r, o), this;
  }
  insert(r, o, n) {
    const a = this.has(o), i = Ie(this, ye).length, s = Ka(r);
    let c = s >= 0 ? s : i + s;
    const l = c < 0 || c >= i ? -1 : c;
    if (l === this.size || a && l === this.size - 1 || l === -1)
      return this.set(o, n), this;
    const f = this.size + (a ? 0 : 1);
    s < 0 && c++;
    const d = [...Ie(this, ye)];
    let p, h = !1;
    for (let b = c; b < f; b++)
      if (c === b) {
        let g = d[b];
        d[b] === o && (g = d[b + 1]), a && this.delete(o), p = this.get(g), this.set(o, n);
      } else {
        !h && d[b - 1] === o && (h = !0);
        const g = d[h ? b : b - 1], v = p;
        p = this.get(g), this.delete(g), this.set(g, v);
      }
    return this;
  }
  with(r, o, n) {
    const a = new Ye(this);
    return a.insert(r, o, n), a;
  }
  before(r) {
    const o = Ie(this, ye).indexOf(r) - 1;
    if (!(o < 0))
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(r, o, n) {
    const a = Ie(this, ye).indexOf(r);
    return a === -1 ? this : this.insert(a, o, n);
  }
  after(r) {
    let o = Ie(this, ye).indexOf(r);
    if (o = o === -1 || o === this.size - 1 ? -1 : o + 1, o !== -1)
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(r, o, n) {
    const a = Ie(this, ye).indexOf(r);
    return a === -1 ? this : this.insert(a + 1, o, n);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return zn(this, ye, []), super.clear();
  }
  delete(r) {
    const o = super.delete(r);
    return o && Ie(this, ye).splice(Ie(this, ye).indexOf(r), 1), o;
  }
  deleteAt(r) {
    const o = this.keyAt(r);
    return o !== void 0 ? this.delete(o) : !1;
  }
  at(r) {
    const o = Fo(Ie(this, ye), r);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(r) {
    const o = Fo(Ie(this, ye), r);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(r) {
    return Ie(this, ye).indexOf(r);
  }
  keyAt(r) {
    return Fo(Ie(this, ye), r);
  }
  from(r, o) {
    const n = this.indexOf(r);
    if (n === -1)
      return;
    let a = n + o;
    return a < 0 && (a = 0), a >= this.size && (a = this.size - 1), this.at(a);
  }
  keyFrom(r, o) {
    const n = this.indexOf(r);
    if (n === -1)
      return;
    let a = n + o;
    return a < 0 && (a = 0), a >= this.size && (a = this.size - 1), this.keyAt(a);
  }
  find(r, o) {
    let n = 0;
    for (const a of this) {
      if (Reflect.apply(r, o, [a, n, this]))
        return a;
      n++;
    }
  }
  findIndex(r, o) {
    let n = 0;
    for (const a of this) {
      if (Reflect.apply(r, o, [a, n, this]))
        return n;
      n++;
    }
    return -1;
  }
  filter(r, o) {
    const n = [];
    let a = 0;
    for (const i of this)
      Reflect.apply(r, o, [i, a, this]) && n.push(i), a++;
    return new Ye(n);
  }
  map(r, o) {
    const n = [];
    let a = 0;
    for (const i of this)
      n.push([i[0], Reflect.apply(r, o, [i, a, this])]), a++;
    return new Ye(n);
  }
  reduce(...r) {
    const [o, n] = r;
    let a = 0, i = n ?? this.at(0);
    for (const s of this)
      a === 0 && r.length === 1 ? i = s : i = Reflect.apply(o, this, [i, s, a, this]), a++;
    return i;
  }
  reduceRight(...r) {
    const [o, n] = r;
    let a = n ?? this.at(-1);
    for (let i = this.size - 1; i >= 0; i--) {
      const s = this.at(i);
      i === this.size - 1 && r.length === 1 ? a = s : a = Reflect.apply(o, this, [a, s, i, this]);
    }
    return a;
  }
  toSorted(r) {
    const o = [...this.entries()].sort(r);
    return new Ye(o);
  }
  toReversed() {
    const r = new Ye();
    for (let o = this.size - 1; o >= 0; o--) {
      const n = this.keyAt(o), a = this.get(n);
      r.set(n, a);
    }
    return r;
  }
  toSpliced(...r) {
    const o = [...this.entries()];
    return o.splice(...r), new Ye(o);
  }
  slice(r, o) {
    const n = new Ye();
    let a = this.size - 1;
    if (r === void 0)
      return n;
    r < 0 && (r = r + this.size), o !== void 0 && o > 0 && (a = o - 1);
    for (let i = r; i <= a; i++) {
      const s = this.keyAt(i), c = this.get(s);
      n.set(s, c);
    }
    return n;
  }
  every(r, o) {
    let n = 0;
    for (const a of this) {
      if (!Reflect.apply(r, o, [a, n, this]))
        return !1;
      n++;
    }
    return !0;
  }
  some(r, o) {
    let n = 0;
    for (const a of this) {
      if (Reflect.apply(r, o, [a, n, this]))
        return !0;
      n++;
    }
    return !1;
  }
}, ye = new WeakMap(), _e(Ye, "OrderedDict"), Ye);
function Fo(t, e) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(t, e);
  const r = ml(t, e);
  return r === -1 ? void 0 : t[r];
}
_e(Fo, "at");
function ml(t, e) {
  const r = t.length, o = Ka(e), n = o >= 0 ? o : r + o;
  return n < 0 || n >= r ? -1 : n;
}
_e(ml, "toSafeIndex");
function Ka(t) {
  return t !== t || t === 0 ? 0 : Math.trunc(t);
}
_e(Ka, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Dm(t) {
  const e = t + "CollectionProvider", [r, o] = /* @__PURE__ */ ge(e), [n, a] = r(
    e,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Gn(),
      setItemMap: /* @__PURE__ */ _e(() => {
      }, "setItemMap")
    }
  ), i = /* @__PURE__ */ _e(({ state: x, ...C }) => x ? /* @__PURE__ */ u(c, { ...C, state: x }) : /* @__PURE__ */ u(s, { ...C }), "CollectionProvider");
  i.displayName = e;
  const s = /* @__PURE__ */ _e((x) => {
    const C = v();
    return /* @__PURE__ */ u(c, { ...x, state: C });
  }, "CollectionInit");
  s.displayName = e + "Init";
  const c = /* @__PURE__ */ _e((x) => {
    const { scope: C, children: E, state: k } = x, S = m.useRef(null), [A, _] = m.useState(
      null
    ), R = Y(S, _), [P, I] = k;
    return m.useEffect(() => {
      if (!A) return;
      const T = bl(() => {
      });
      return T.observe(A, {
        childList: !0,
        subtree: !0
      }), () => {
        T.disconnect();
      };
    }, [A]), /* @__PURE__ */ u(
      n,
      {
        scope: C,
        itemMap: P,
        setItemMap: I,
        collectionRef: R,
        collectionRefObject: S,
        collectionElement: A,
        children: E
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = e + "Impl";
  const l = t + "CollectionSlot", f = /* @__PURE__ */ Ze(l), d = m.forwardRef(
    (x, C) => {
      const { scope: E, children: k } = x, S = a(l, E), A = Y(C, S.collectionRef);
      return /* @__PURE__ */ u(f, { ref: A, children: k });
    }
  );
  d.displayName = l;
  const p = t + "CollectionItemSlot", h = "data-radix-collection-item", b = /* @__PURE__ */ Ze(p), g = m.forwardRef(
    (x, C) => {
      const { scope: E, children: k, ...S } = x, A = m.useRef(null), [_, R] = m.useState(null), P = Y(C, A, R), I = a(p, E), { setItemMap: T } = I, D = m.useRef(S);
      hl(D.current, S) || (D.current = S);
      const z = D.current;
      return m.useEffect(() => {
        const O = z;
        return T((N) => _ ? N.has(_) ? N.set(_, { ...O, element: _ }).toSorted(ua) : (N.set(_, { ...O, element: _ }), N.toSorted(ua)) : N), () => {
          T((N) => !_ || !N.has(_) ? N : (N.delete(_), new Gn(N)));
        };
      }, [_, z, T]), /* @__PURE__ */ u(b, { [h]: "", ref: P, children: k });
    }
  );
  g.displayName = p;
  function v() {
    return m.useState(new Gn());
  }
  _e(v, "useInitCollection");
  function w(x) {
    const { itemMap: C } = a(t + "CollectionConsumer", x);
    return C;
  }
  return _e(w, "useCollection"), [
    { Provider: i, Slot: d, ItemSlot: g },
    {
      createCollectionScope: o,
      useCollection: w,
      useInitCollection: v
    }
  ];
}
_e(Dm, "createCollection");
function hl(t, e) {
  if (t === e) return !0;
  if (typeof t != "object" || typeof e != "object" || t == null || e == null) return !1;
  const r = Object.keys(t), o = Object.keys(e);
  if (r.length !== o.length) return !1;
  for (const n of r)
    if (!Object.prototype.hasOwnProperty.call(e, n) || t[n] !== e[n]) return !1;
  return !0;
}
_e(hl, "shallowEqual");
function gl(t, e) {
  return !!(e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING);
}
_e(gl, "isElementPreceding");
function ua(t, e) {
  return !t[1].element || !e[1].element ? 0 : gl(t[1].element, e[1].element) ? -1 : 1;
}
_e(ua, "sortByDocumentPosition");
function bl(t) {
  return new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList") {
        t();
        return;
      }
  });
}
_e(bl, "getChildListObserver");
var Nm = Object.defineProperty, vl = (t, e) => Nm(t, "name", { value: e, configurable: !0 }), xl = m.createContext(void 0), Om = /* @__PURE__ */ vl((t) => {
  const { dir: e, children: r } = t;
  return /* @__PURE__ */ u(xl.Provider, { value: e, children: r });
}, "DirectionProvider");
function ct(t) {
  const e = m.useContext(xl);
  return t || e || "ltr";
}
vl(ct, "useDirection");
var $m = Object.defineProperty, Bm = (t, e) => $m(t, "name", { value: e, configurable: !0 });
function fe(t) {
  const e = m.useRef(t);
  return m.useEffect(() => {
    e.current = t;
  }), m.useMemo(() => ((...r) => {
    var o;
    return (o = e.current) == null ? void 0 : o.call(e, ...r);
  }), []);
}
Bm(fe, "useCallbackRef");
var zm = Object.defineProperty, Se = (t, e) => zm(t, "name", { value: e, configurable: !0 }), da = "dismissableLayer.update", Fm = "dismissableLayer.pointerDownOutside", Lm = "dismissableLayer.focusOutside", Ns, qa = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), kr = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(e, r) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: n = !1,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      onFocusOutside: s,
      onInteractOutside: c,
      onDismiss: l,
      ...f
    } = e, d = m.useContext(qa), [p, h] = m.useState(null), b = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = m.useState({}), v = Y(r, h), w = Array.from(d.layers), [y] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), x = y ? w.indexOf(y) : -1, C = p ? w.indexOf(p) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= x, S = m.useRef(!1), A = yl(
      (I) => {
        i == null || i(I), c == null || c(I), I.defaultPrevented || l == null || l();
      },
      {
        ownerDocument: b,
        deferPointerDownOutside: n,
        isDeferredPointerDownOutsideRef: S,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: m.useCallback(
          (I) => {
            if (!(I instanceof Node))
              return !1;
            const T = [...d.branches].some(
              (D) => D.contains(I)
            );
            return k && !T;
          },
          [d.branches, k]
        )
      }
    ), _ = Cl((I) => {
      if (n && S.current)
        return;
      const T = I.target;
      [...d.branches].some((z) => z.contains(T)) || (s == null || s(I), c == null || c(I), I.defaultPrevented || l == null || l());
    }, b), R = p ? C === w.length - 1 : !1, P = fe((I) => {
      I.key === "Escape" && (a == null || a(I), !I.defaultPrevented && l && (I.preventDefault(), l()));
    });
    return m.useEffect(() => {
      if (R)
        return b.addEventListener("keydown", P, { capture: !0 }), () => b.removeEventListener("keydown", P, { capture: !0 });
    }, [b, R, P]), m.useEffect(() => {
      if (p)
        return o && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ns = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), fa(), () => {
          o && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (b.body.style.pointerEvents = Ns));
        };
    }, [p, b, o, d]), m.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), fa());
    }, [p, d]), m.useEffect(() => {
      const I = /* @__PURE__ */ Se(() => g({}), "handleUpdate");
      return document.addEventListener(da, I), () => document.removeEventListener(da, I);
    }, []), /* @__PURE__ */ u(
      W.div,
      {
        ...f,
        ref: v,
        style: {
          pointerEvents: E ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          A.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), Vm = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Se(function(e, r) {
  const o = m.useContext(qa), n = m.useRef(null), a = Y(r, n);
  return m.useEffect(() => {
    const i = n.current;
    if (i)
      return o.branches.add(i), () => {
        o.branches.delete(i);
      };
  }, [o.branches]), /* @__PURE__ */ u(W.div, { ...e, ref: a });
}, "DismissableLayerBranch"));
function wl() {
  const t = m.useContext(qa), [e, r] = m.useState(null);
  return m.useEffect(() => {
    if (e)
      return t.dismissableSurfaces.add(e), () => {
        t.dismissableSurfaces.delete(e);
      };
  }, [e, t.dismissableSurfaces]), r;
}
Se(wl, "useDismissableLayerSurface");
var Um = /* @__PURE__ */ Se(() => !0, "IS_TRUE");
function yl(t, e) {
  const {
    ownerDocument: r = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: n,
    dismissableSurfaces: a,
    shouldHandlePointerDownOutside: i = Um
  } = e, s = fe(t), c = m.useRef(!1), l = m.useRef(!1), f = m.useRef(/* @__PURE__ */ new Map()), d = m.useRef(() => {
  });
  return m.useEffect(() => {
    function p() {
      l.current = !1, n.current = !1, f.current.clear();
    }
    Se(p, "resetOutsideInteraction");
    function h() {
      return Array.from(f.current.values()).some(Boolean);
    }
    Se(h, "isOutsideInteractionIntercepted");
    function b(x) {
      if (!l.current)
        return;
      const C = x.target;
      C instanceof Node && [...a].some((k) => k.contains(C)) || f.current.set(x.type, !0), x.type === "click" && window.setTimeout(() => {
        l.current && d.current();
      }, 0);
    }
    Se(b, "handleInteractionCapture");
    function g(x) {
      l.current && f.current.set(x.type, !1);
    }
    Se(g, "handleInteractionBubble");
    const v = /* @__PURE__ */ Se((x) => {
      if (x.target && !c.current) {
        let C = function() {
          r.removeEventListener("click", d.current);
          const k = h();
          p(), k || Ja(
            Fm,
            s,
            E,
            { discrete: !0 }
          );
        };
        if (Se(C, "handleAndDispatchPointerDownOutsideEvent"), !i(x.target)) {
          r.removeEventListener("click", d.current), p(), c.current = !1;
          return;
        }
        const E = { originalEvent: x };
        l.current = !0, n.current = o && x.button === 0, f.current.clear(), !o || x.button !== 0 ? C() : (r.removeEventListener("click", d.current), d.current = C, r.addEventListener("click", d.current, { once: !0 }));
      } else
        r.removeEventListener("click", d.current), p();
      c.current = !1;
    }, "handlePointerDown"), w = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const x of w)
      r.addEventListener(x, b, !0), r.addEventListener(x, g);
    const y = window.setTimeout(() => {
      r.addEventListener("pointerdown", v);
    }, 0);
    return () => {
      window.clearTimeout(y), r.removeEventListener("pointerdown", v), r.removeEventListener("click", d.current);
      for (const x of w)
        r.removeEventListener(x, b, !0), r.removeEventListener(x, g);
    };
  }, [
    r,
    s,
    o,
    n,
    a,
    i
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Se(() => c.current = !0, "onPointerDownCapture")
  };
}
Se(yl, "usePointerDownOutside");
function Cl(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = fe(t), o = m.useRef(!1);
  return m.useEffect(() => {
    const n = /* @__PURE__ */ Se((a) => {
      a.target && !o.current && Ja(Lm, r, { originalEvent: a }, {
        discrete: !1
      });
    }, "handleFocus");
    return e.addEventListener("focusin", n), () => e.removeEventListener("focusin", n);
  }, [e, r]), {
    onFocusCapture: /* @__PURE__ */ Se(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Se(() => o.current = !1, "onBlurCapture")
  };
}
Se(Cl, "useFocusOutside");
function fa() {
  const t = new CustomEvent(da);
  document.dispatchEvent(t);
}
Se(fa, "dispatchUpdate");
function Ja(t, e, r, { discrete: o }) {
  const n = r.originalEvent.target, a = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  e && n.addEventListener(t, e, { once: !0 }), o ? en(n, a) : n.dispatchEvent(a);
}
Se(Ja, "handleAndDispatchCustomEvent");
var Wm = kr, Hm = Vm, Gm = Object.defineProperty, Za = (t, e) => Gm(t, "name", { value: e, configurable: !0 }), Ro = 0, ot = null;
function Ym(t) {
  return Rr(), t.children;
}
Za(Ym, "FocusGuards");
function Rr() {
  m.useEffect(() => {
    ot || (ot = { start: pa(), end: pa() });
    const { start: t, end: e } = ot;
    return document.body.firstElementChild !== t && document.body.insertAdjacentElement("afterbegin", t), document.body.lastElementChild !== e && document.body.insertAdjacentElement("beforeend", e), Ro++, () => {
      Ro === 1 && (ot == null || ot.start.remove(), ot == null || ot.end.remove(), ot = null), Ro = Math.max(0, Ro - 1);
    };
  }, []);
}
Za(Rr, "useFocusGuards");
function pa() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
Za(pa, "createFocusGuard");
var Qm = Object.defineProperty, ze = (t, e) => Qm(t, "name", { value: e, configurable: !0 }), Yn = "focusScope.autoFocusOnMount", Qn = "focusScope.autoFocusOnUnmount", Os = { bubbles: !1, cancelable: !0 }, rn = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ze(function(e, r) {
    const {
      loop: o = !1,
      trapped: n = !1,
      onMountAutoFocus: a,
      onUnmountAutoFocus: i,
      ...s
    } = e, [c, l] = m.useState(null), f = fe(a), d = fe(i), p = m.useRef(null), h = Y(r, l), b = m.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    m.useEffect(() => {
      if (n) {
        let v = function(C) {
          if (b.paused || !c) return;
          const E = C.target;
          c.contains(E) ? p.current = E : ft(p.current, { select: !0 });
        }, w = function(C) {
          if (b.paused || !c) return;
          const E = C.relatedTarget;
          E !== null && (c.contains(E) || ft(p.current, { select: !0 }));
        }, y = function(C) {
          if (document.activeElement === document.body)
            for (const k of C)
              k.removedNodes.length > 0 && ft(c);
        };
        ze(v, "handleFocusIn"), ze(w, "handleFocusOut"), ze(y, "handleMutations"), document.addEventListener("focusin", v), document.addEventListener("focusout", w);
        const x = new MutationObserver(y);
        return c && x.observe(c, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", v), document.removeEventListener("focusout", w), x.disconnect();
        };
      }
    }, [n, c, b.paused]), m.useEffect(() => {
      if (c) {
        $s.add(b);
        const v = document.activeElement;
        if (!c.contains(v)) {
          const y = new CustomEvent(Yn, Os);
          c.addEventListener(Yn, f), c.dispatchEvent(y), y.defaultPrevented || (Al(El(ei(c)), { select: !0 }), document.activeElement === v && ft(c));
        }
        return () => {
          c.removeEventListener(Yn, f), setTimeout(() => {
            const y = new CustomEvent(Qn, Os);
            c.addEventListener(Qn, d), c.dispatchEvent(y), y.defaultPrevented || ft(v ?? document.body, { select: !0 }), c.removeEventListener(Qn, d), $s.remove(b);
          }, 0);
        };
      }
    }, [c, f, d, b]);
    const g = m.useCallback(
      (v) => {
        if (!o && !n || b.paused) return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
        if (w && y) {
          const x = v.currentTarget, [C, E] = Sl(x);
          C && E ? !v.shiftKey && y === E ? (v.preventDefault(), o && ft(C, { select: !0 })) : v.shiftKey && y === C && (v.preventDefault(), o && ft(E, { select: !0 })) : y === x && v.preventDefault();
        }
      },
      [o, n, b.paused]
    );
    return /* @__PURE__ */ u(W.div, { tabIndex: -1, ...s, ref: h, onKeyDown: g });
  }, "FocusScope")
);
function Al(t, { select: e = !1 } = {}) {
  const r = document.activeElement;
  for (const o of t)
    if (ft(o, { select: e }), document.activeElement !== r) return;
}
ze(Al, "focusFirst");
function Sl(t) {
  const e = ei(t), r = ma(e, t), o = ma(e.reverse(), t);
  return [r, o];
}
ze(Sl, "getTabbableEdges");
function ei(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ ze((o) => {
      const n = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || n ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
ze(ei, "getTabbableCandidates");
function ma(t, e) {
  const r = typeof e.checkVisibility == "function" && e.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of t)
    if (!(r ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : _l(o, { upTo: e })))
      return o;
}
ze(ma, "findVisible");
function _l(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
ze(_l, "isHidden");
function kl(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
ze(kl, "isSelectableInput");
function ft(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== r && kl(t) && e && t.select();
  }
}
ze(ft, "focus");
var $s = Rl();
function Rl() {
  let t = [];
  return {
    add(e) {
      const r = t[0];
      e !== r && (r == null || r.pause()), t = ha(t, e), t.unshift(e);
    },
    remove(e) {
      var r;
      t = ha(t, e), (r = t[0]) == null || r.resume();
    }
  };
}
ze(Rl, "createFocusScopesStack");
function ha(t, e) {
  const r = [...t], o = r.indexOf(e);
  return o !== -1 && r.splice(o, 1), r;
}
ze(ha, "arrayRemove");
function El(t) {
  return t.filter((e) => e.tagName !== "A");
}
ze(El, "removeLinks");
var Xm = Object.defineProperty, jm = (t, e) => Xm(t, "name", { value: e, configurable: !0 }), Km = m[" useId ".trim().toString()] || (() => {
}), qm = 0;
function Oe(t) {
  const [e, r] = m.useState(Km());
  return de(() => {
    t || r((o) => o ?? String(qm++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
jm(Oe, "useId");
const Jm = ["top", "right", "bottom", "left"], Nt = Math.min, ht = Math.max, Xo = Math.round, Eo = Math.floor, gt = (t) => ({
  x: t,
  y: t
}), Zm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pl(t, e, r) {
  return ht(t, Nt(e, r));
}
function vt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ot(t) {
  return t.split("-")[0];
}
function Er(t) {
  return t.split("-")[1];
}
function ti(t) {
  return t === "x" ? "y" : "x";
}
function ri(t) {
  return t === "y" ? "height" : "width";
}
function at(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function oi(t) {
  return ti(at(t));
}
function eh(t, e, r) {
  r === void 0 && (r = !1);
  const o = Er(t), n = oi(t), a = ri(n);
  let i = n === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (i = jo(i)), [i, jo(i)];
}
function th(t) {
  const e = jo(t);
  return [ga(t), e, ga(e)];
}
function ga(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Bs = ["left", "right"], zs = ["right", "left"], rh = ["top", "bottom"], oh = ["bottom", "top"];
function nh(t, e, r) {
  switch (t) {
    case "top":
    case "bottom":
      return r ? e ? zs : Bs : e ? Bs : zs;
    case "left":
    case "right":
      return e ? rh : oh;
    default:
      return [];
  }
}
function ah(t, e, r, o) {
  const n = Er(t);
  let a = nh(Ot(t), r === "start", o);
  return n && (a = a.map((i) => i + "-" + n), e && (a = a.concat(a.map(ga)))), a;
}
function jo(t) {
  const e = Ot(t);
  return Zm[e] + t.slice(e.length);
}
function ih(t) {
  var e, r, o, n;
  return {
    top: (e = t.top) != null ? e : 0,
    right: (r = t.right) != null ? r : 0,
    bottom: (o = t.bottom) != null ? o : 0,
    left: (n = t.left) != null ? n : 0
  };
}
function Il(t) {
  return typeof t != "number" ? ih(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ko(t) {
  const {
    x: e,
    y: r,
    width: o,
    height: n
  } = t;
  return {
    width: o,
    height: n,
    top: r,
    left: e,
    right: e + o,
    bottom: r + n,
    x: e,
    y: r
  };
}
function Fs(t, e, r) {
  let {
    reference: o,
    floating: n
  } = t;
  const a = at(e), i = oi(e), s = ri(i), c = Ot(e), l = a === "y", f = o.x + o.width / 2 - n.width / 2, d = o.y + o.height / 2 - n.height / 2, p = o[s] / 2 - n[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: f,
        y: o.y - n.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      h = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: o.x - n.width,
        y: d
      };
      break;
    default:
      h = {
        x: o.x,
        y: o.y
      };
  }
  const b = Er(e);
  return b && (h[i] += p * (b === "end" ? 1 : -1) * (r && l ? -1 : 1)), h;
}
async function sh(t, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: o,
    y: n,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = vt(e, t), b = Il(h), v = s[p ? d === "floating" ? "reference" : "floating" : d], w = Ko(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(v))) == null || r ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), y = d === "floating" ? {
    x: o,
    y: n,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(x)) && await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  }, E = Ko(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (w.top - E.top + b.top) / C.y,
    bottom: (E.bottom - w.bottom + b.bottom) / C.y,
    left: (w.left - E.left + b.left) / C.x,
    right: (E.right - w.right + b.right) / C.x
  };
}
const ch = 50, lh = async (t, e, r) => {
  const {
    placement: o = "bottom",
    strategy: n = "absolute",
    middleware: a = [],
    platform: i
  } = r, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: sh
  }, c = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let l = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: n
  }), {
    x: f,
    y: d
  } = Fs(l, o, c), p = o, h = 0;
  const b = {};
  for (let g = 0; g < a.length; g++) {
    const v = a[g];
    if (!v)
      continue;
    const {
      name: w,
      fn: y
    } = v, {
      x,
      y: C,
      data: E,
      reset: k
    } = await y({
      x: f,
      y: d,
      initialPlacement: o,
      placement: p,
      strategy: n,
      middlewareData: b,
      rects: l,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = x ?? f, d = C ?? d, b[w] = {
      ...b[w],
      ...E
    }, k && h < ch && (h++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (l = k.rects === !0 ? await i.getElementRects({
      reference: t,
      floating: e,
      strategy: n
    }) : k.rects), {
      x: f,
      y: d
    } = Fs(l, p, c)), g = -1);
  }
  return {
    x: f,
    y: d,
    placement: p,
    strategy: n,
    middlewareData: b
  };
}, uh = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: r,
      y: o,
      placement: n,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = e, {
      element: l,
      padding: f = 0
    } = vt(t, e) || {};
    if (l == null)
      return {};
    const d = Il(f), p = {
      x: r,
      y: o
    }, h = oi(n), b = ri(h), g = await i.getDimensions(l), v = h === "y", w = v ? "top" : "left", y = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", C = a.reference[b] + a.reference[h] - p[h] - a.floating[b], E = p[h] - a.reference[h], k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let S = k ? k[x] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(k))) && (S = s.floating[x] || a.floating[b]);
    const A = C / 2 - E / 2, _ = S / 2 - g[b] / 2 - 1, R = Nt(d[w], _), P = Nt(d[y], _), I = S - g[b] - P, T = S / 2 - g[b] / 2 + A, D = Pl(R, T, I), z = !c.arrow && Er(n) != null && T !== D && a.reference[b] / 2 - (T < R ? R : P) - g[b] / 2 < 0, O = z ? T < R ? T - R : T - I : 0;
    return {
      [h]: p[h] + O,
      data: {
        [h]: D,
        centerOffset: T - D - O,
        ...z && {
          alignmentOffset: O
        }
      },
      reset: z
    };
  }
}), dh = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var r, o;
      const {
        placement: n,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = e, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: g = !0,
        ...v
      } = vt(t, e);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const w = Ot(n), y = at(s), x = Ot(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = p || (x || !g ? [jo(s)] : th(s)), k = b !== "none";
      !p && k && E.push(...ah(s, g, b, C));
      const S = [s, ...E], A = await c.detectOverflow(e, v), _ = [];
      let R = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (f && _.push(A[w]), d) {
        const D = eh(n, i, C);
        _.push(A[D[0]], A[D[1]]);
      }
      if (R = [...R, {
        placement: n,
        overflows: _
      }], !_.every((D) => D <= 0)) {
        var P, I;
        const D = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1, z = S[D];
        if (z && (!(d === "alignment" ? y !== at(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((B) => at(B.placement) === y ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: R
            },
            reset: {
              placement: z
            }
          };
        let O = (I = R.filter((N) => N.overflows[0] <= 0).sort((N, B) => N.overflows[1] - B.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!O)
          switch (h) {
            case "bestFit": {
              var T;
              const N = (T = R.filter((B) => {
                if (k) {
                  const V = at(B.placement);
                  return V === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((V) => V > 0).reduce((V, L) => V + L, 0)]).sort((B, V) => B[1] - V[1])[0]) == null ? void 0 : T[0];
              N && (O = N);
              break;
            }
            case "initialPlacement":
              O = s;
              break;
          }
        if (n !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Ls(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Vs(t) {
  return Jm.some((e) => t[e] >= 0);
}
const fh = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: r,
        platform: o
      } = e, {
        strategy: n = "referenceHidden",
        ...a
      } = vt(t, e);
      switch (n) {
        case "referenceHidden": {
          const i = await o.detectOverflow(e, {
            ...a,
            elementContext: "reference"
          }), s = Ls(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Vs(s)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(e, {
            ...a,
            altBoundary: !0
          }), s = Ls(i, r.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Vs(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Tl = /* @__PURE__ */ new Set(["left", "top"]);
async function ph(t, e) {
  const {
    placement: r,
    platform: o,
    elements: n
  } = t, a = await (o.isRTL == null ? void 0 : o.isRTL(n.floating)), i = Ot(r), s = Er(r), c = at(r) === "y", l = Tl.has(i) ? -1 : 1, f = a && c ? -1 : 1, d = vt(e, t);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: b
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof b == "number" && (h = s === "end" ? b * -1 : b), c ? {
    x: h * f,
    y: p * l
  } : {
    x: p * l,
    y: h * f
  };
}
const mh = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var r, o;
      const {
        x: n,
        y: a,
        placement: i,
        middlewareData: s
      } = e, c = await ph(e, t);
      return i === ((r = s.offset) == null ? void 0 : r.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: n + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, hh = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: o,
        placement: n,
        platform: a
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x,
              y: C
            } = y;
            return {
              x,
              y: C
            };
          }
        },
        ...l
      } = vt(t, e), f = {
        x: r,
        y: o
      }, d = await a.detectOverflow(e, l), p = at(n), h = ti(p);
      let b = f[h], g = f[p];
      const v = (y, x) => Pl(x + d[y === "y" ? "top" : "left"], x, x - d[y === "y" ? "bottom" : "right"]);
      i && (b = v(h, b)), s && (g = v(p, g));
      const w = c.fn({
        ...e,
        [h]: b,
        [p]: g
      });
      return {
        ...w,
        data: {
          x: w.x - r,
          y: w.y - o,
          enabled: {
            [h]: i,
            [p]: s
          }
        }
      };
    }
  };
}, gh = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      var r, o;
      const {
        x: n,
        y: a,
        placement: i,
        rects: s,
        middlewareData: c
      } = e, {
        offset: l = 0,
        mainAxis: f = !0,
        crossAxis: d = !0
      } = vt(t, e), p = {
        x: n,
        y: a
      }, h = at(i), b = ti(h);
      let g = p[b], v = p[h];
      const w = vt(l, e), y = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: (r = w.mainAxis) != null ? r : 0,
        crossAxis: (o = w.crossAxis) != null ? o : 0
      };
      if (f) {
        const E = b === "y" ? "height" : "width", k = s.reference[b] - s.floating[E] + y.mainAxis, S = s.reference[b] + s.reference[E] - y.mainAxis;
        g < k ? g = k : g > S && (g = S);
      }
      if (d) {
        var x, C;
        const E = b === "y" ? "width" : "height", k = Tl.has(Ot(i)), S = s.reference[h] - s.floating[E] + (k && ((x = c.offset) == null ? void 0 : x[h]) || 0) + (k ? 0 : y.crossAxis), A = s.reference[h] + s.reference[E] + (k ? 0 : ((C = c.offset) == null ? void 0 : C[h]) || 0) - (k ? y.crossAxis : 0);
        v < S ? v = S : v > A && (v = A);
      }
      return {
        [b]: g,
        [h]: v
      };
    }
  };
}, bh = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: r,
        rects: o,
        platform: n,
        elements: a
      } = e, {
        apply: i = () => {
        },
        ...s
      } = vt(t, e), c = await n.detectOverflow(e, s), l = Ot(r), f = Er(r), d = at(r) === "y", {
        width: p,
        height: h
      } = o.floating;
      let b, g;
      l === "top" || l === "bottom" ? (b = l, g = f === (await (n.isRTL == null ? void 0 : n.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = l, b = f === "end" ? "top" : "bottom");
      const v = h - c.top - c.bottom, w = p - c.left - c.right, y = Nt(h - c[b], v), x = Nt(p - c[g], w), C = e.middlewareData.shift, E = !C;
      let k = y, S = x;
      C != null && C.enabled.x && (S = w), C != null && C.enabled.y && (k = v), E && !f && (d ? S = p - 2 * ht(c.left, c.right) : k = h - 2 * ht(c.top, c.bottom)), await i({
        ...e,
        availableWidth: S,
        availableHeight: k
      });
      const A = await n.getDimensions(a.floating);
      return p !== A.width || h !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function on() {
  return typeof window < "u";
}
function Pr(t) {
  return Ml(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function He(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Ct(t) {
  var e;
  return (e = (Ml(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ml(t) {
  return on() ? t instanceof Node || t instanceof He(t).Node : !1;
}
function it(t) {
  return on() ? t instanceof Element || t instanceof He(t).Element : !1;
}
function zt(t) {
  return on() ? t instanceof HTMLElement || t instanceof He(t).HTMLElement : !1;
}
function Us(t) {
  return !on() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof He(t).ShadowRoot;
}
function nn(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: o,
    display: n
  } = st(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + r) && n !== "inline" && n !== "contents";
}
function vh(t) {
  return /^(table|td|th)$/.test(Pr(t));
}
function an(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const xh = /transform|translate|scale|rotate|perspective|filter/, wh = /paint|layout|strict|content/, Qt = (t) => !!t && t !== "none";
let Xn;
function ni(t) {
  const e = it(t) ? st(t) : t;
  return Qt(e.transform) || Qt(e.translate) || Qt(e.scale) || Qt(e.rotate) || Qt(e.perspective) || !ai() && (Qt(e.backdropFilter) || Qt(e.filter)) || xh.test(e.willChange || "") || wh.test(e.contain || "");
}
function yh(t) {
  let e = qt(t);
  for (; zt(e) && !Yr(e); ) {
    if (ni(e))
      return e;
    if (an(e))
      return null;
    e = qt(e);
  }
  return null;
}
function ai() {
  return Xn == null && (Xn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Xn;
}
function Yr(t) {
  return /^(html|body|#document)$/.test(Pr(t));
}
function st(t) {
  return He(t).getComputedStyle(t);
}
function sn(t) {
  return it(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function qt(t) {
  if (Pr(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Us(t) && t.host || // Fallback.
    Ct(t)
  );
  return Us(e) ? e.host : e;
}
function Dl(t) {
  const e = qt(t);
  return Yr(e) ? (t.ownerDocument || t).body : zt(e) && nn(e) ? e : Dl(e);
}
function Qr(t, e, r) {
  var o;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const n = Dl(t), a = n === ((o = t.ownerDocument) == null ? void 0 : o.body), i = He(n);
  if (a) {
    const s = ba(i);
    return e.concat(i, i.visualViewport || [], nn(n) ? n : [], s && r ? Qr(s) : []);
  } else
    return e.concat(n, Qr(n, [], r));
}
function ba(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Nl(t) {
  const e = st(t);
  let r = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const n = zt(t), a = n ? t.offsetWidth : r, i = n ? t.offsetHeight : o, s = Xo(r) !== a || Xo(o) !== i;
  return s && (r = a, o = i), {
    width: r,
    height: o,
    $: s
  };
}
function ii(t) {
  return it(t) ? t : t.contextElement;
}
function br(t) {
  const e = ii(t);
  if (!zt(e))
    return gt(1);
  const r = e.getBoundingClientRect(), {
    width: o,
    height: n,
    $: a
  } = Nl(e);
  let i = (a ? Xo(r.width) : r.width) / o, s = (a ? Xo(r.height) : r.height) / n;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Ch = /* @__PURE__ */ gt(0);
function Ol(t) {
  const e = He(t);
  return !ai() || !e.visualViewport ? Ch : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ah(t, e, r) {
  return e === void 0 && (e = !1), !!r && e && r === He(t);
}
function Jt(t, e, r, o) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const n = t.getBoundingClientRect(), a = ii(t);
  let i = gt(1);
  e && (o ? it(o) && (i = br(o)) : i = br(t));
  const s = Ah(a, r, o) ? Ol(a) : gt(0);
  let c = (n.left + s.x) / i.x, l = (n.top + s.y) / i.y, f = n.width / i.x, d = n.height / i.y;
  if (a && o) {
    const p = He(a), h = it(o) ? He(o) : o;
    let b = p, g = ba(b);
    for (; g && h !== b; ) {
      const v = br(g), w = g.getBoundingClientRect(), y = st(g), x = w.left + (g.clientLeft + parseFloat(y.paddingLeft)) * v.x, C = w.top + (g.clientTop + parseFloat(y.paddingTop)) * v.y;
      c *= v.x, l *= v.y, f *= v.x, d *= v.y, c += x, l += C, b = He(g), g = ba(b);
    }
  }
  return Ko({
    width: f,
    height: d,
    x: c,
    y: l
  });
}
function cn(t, e) {
  const r = sn(t).scrollLeft;
  return e ? e.left + r : Jt(Ct(t)).left + r;
}
function $l(t, e) {
  const r = t.getBoundingClientRect(), o = r.left + e.scrollLeft - cn(t, r), n = r.top + e.scrollTop;
  return {
    x: o,
    y: n
  };
}
function Sh(t) {
  let {
    elements: e,
    rect: r,
    offsetParent: o,
    strategy: n
  } = t;
  const a = n === "fixed", i = Ct(o), s = e ? an(e.floating) : !1;
  if (o === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = gt(1);
  const f = gt(0), d = zt(o);
  if ((d || !a) && ((Pr(o) !== "body" || nn(i)) && (c = sn(o)), d)) {
    const h = Jt(o);
    l = br(o), f.x = h.x + o.clientLeft, f.y = h.y + o.clientTop;
  }
  const p = i && !d && !a ? $l(i, c) : gt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + f.x + p.x,
    y: r.y * l.y - c.scrollTop * l.y + f.y + p.y
  };
}
function _h(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function kh(t) {
  const e = sn(t), r = t.ownerDocument.body, o = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), n = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -e.scrollLeft + cn(t);
  const i = -e.scrollTop;
  return st(r).direction === "rtl" && (a += ht(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: n,
    x: a,
    y: i
  };
}
const Rh = 25;
function Eh(t, e, r) {
  r === void 0 && (r = "viewport");
  const o = r === "layoutViewport", n = He(t), a = Ct(t), i = n.visualViewport;
  let s = a.clientWidth, c = a.clientHeight, l = 0, f = 0;
  if (i) {
    const p = !ai() || e === "fixed";
    o ? p || (l = -i.offsetLeft, f = -i.offsetTop) : (s = i.width, c = i.height, p && (l = i.offsetLeft, f = i.offsetTop));
  }
  if (cn(a) <= 0) {
    const p = a.ownerDocument, h = p.body, b = getComputedStyle(h), g = p.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, v = Math.abs(a.clientWidth - h.clientWidth - g), w = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? v / 2 : v;
    w <= Rh && (s -= w);
  }
  return {
    width: s,
    height: c,
    x: l,
    y: f
  };
}
function Ph(t, e) {
  const r = Jt(t, !0, e === "fixed"), o = r.top + t.clientTop, n = r.left + t.clientLeft, a = br(t), i = t.clientWidth * a.x, s = t.clientHeight * a.y, c = n * a.x, l = o * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Ws(t, e, r) {
  let o;
  if (e === "viewport" || e === "layoutViewport")
    o = Eh(t, r, e);
  else if (e === "document")
    o = kh(Ct(t));
  else if (it(e))
    o = Ph(e, r);
  else {
    const n = Ol(t);
    o = {
      x: e.x - n.x,
      y: e.y - n.y,
      width: e.width,
      height: e.height
    };
  }
  return Ko(o);
}
function Ih(t, e) {
  const r = e.get(t);
  if (r)
    return r;
  let o = Qr(t, [], !1).filter((s) => it(s) && Pr(s) !== "body"), n = null;
  const a = st(t).position === "fixed";
  let i = a ? qt(t) : t;
  for (; it(i) && !Yr(i); ) {
    const s = st(i), c = ni(i), l = n ? n.position : a ? "fixed" : "";
    !c && (l === "fixed" || l === "absolute" && s.position === "static") ? o = o.filter((d) => d !== i) : n = s, i = qt(i);
  }
  return e.set(t, o), o;
}
function Th(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: o,
    strategy: n
  } = t;
  const i = [...r === "clippingAncestors" ? an(e) ? [] : Ih(e, this._c) : [].concat(r), o], s = Ws(e, i[0], n);
  let c = s.top, l = s.right, f = s.bottom, d = s.left;
  for (let p = 1; p < i.length; p++) {
    const h = Ws(e, i[p], n);
    c = ht(h.top, c), l = Nt(h.right, l), f = Nt(h.bottom, f), d = ht(h.left, d);
  }
  return {
    width: l - d,
    height: f - c,
    x: d,
    y: c
  };
}
function Mh(t) {
  const {
    width: e,
    height: r
  } = Nl(t);
  return {
    width: e,
    height: r
  };
}
function Dh(t, e, r) {
  const o = zt(e), n = Ct(e), a = r === "fixed", i = Jt(t, !0, a, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = gt(0);
  if ((o || !a) && ((Pr(e) !== "body" || nn(n)) && (s = sn(e)), o)) {
    const p = Jt(e, !0, a, e);
    c.x = p.x + e.clientLeft, c.y = p.y + e.clientTop;
  }
  !o && n && (c.x = cn(n));
  const l = n && !o && !a ? $l(n, s) : gt(0), f = i.left + s.scrollLeft - c.x - l.x, d = i.top + s.scrollTop - c.y - l.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function jn(t) {
  return st(t).position === "static";
}
function Hs(t, e) {
  if (!zt(t) || st(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let r = t.offsetParent;
  return Ct(t) === r && (r = r.ownerDocument.body), r;
}
function Bl(t, e) {
  const r = He(t);
  if (an(t))
    return r;
  if (!zt(t)) {
    let n = qt(t);
    for (; n && !Yr(n); ) {
      if (it(n) && !jn(n))
        return n;
      n = qt(n);
    }
    return r;
  }
  let o = Hs(t, e);
  for (; o && vh(o) && jn(o); )
    o = Hs(o, e);
  return o && Yr(o) && jn(o) && !ni(o) ? r : o || yh(t) || r;
}
const Nh = async function(t) {
  const e = this.getOffsetParent || Bl, r = this.getDimensions, o = await r(t.floating);
  return {
    reference: Dh(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Oh(t) {
  return st(t).direction === "rtl";
}
const $h = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sh,
  getDocumentElement: Ct,
  getClippingRect: Th,
  getOffsetParent: Bl,
  getElementRects: Nh,
  getClientRects: _h,
  getDimensions: Mh,
  getScale: br,
  isElement: it,
  isRTL: Oh
};
function zl(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Bh(t, e, r) {
  let o = null, n;
  const a = Ct(t);
  function i() {
    var f;
    clearTimeout(n), (f = o) == null || f.disconnect(), o = null;
  }
  function s(f, d) {
    f === void 0 && (f = !1), d === void 0 && (d = 1), i();
    const p = t.getBoundingClientRect(), {
      left: h,
      top: b,
      width: g,
      height: v
    } = p;
    if (f || e(), !g || !v)
      return;
    const w = Eo(b), y = Eo(a.clientWidth - (h + g)), x = Eo(a.clientHeight - (b + v)), C = Eo(h), k = {
      rootMargin: -w + "px " + -y + "px " + -x + "px " + -C + "px",
      threshold: ht(0, Nt(1, d)) || 1
    };
    let S = !0;
    function A(_) {
      const R = _[0].intersectionRatio;
      if (!zl(p, t.getBoundingClientRect()))
        return s();
      if (R !== d) {
        if (!S)
          return s();
        R ? s(!1, R) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
    }
    try {
      o = new IntersectionObserver(A, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(A, k);
    }
    o.observe(t);
  }
  const c = He(t), l = () => s(r);
  return c.addEventListener("resize", l), s(!0), () => {
    c.removeEventListener("resize", l), i();
  };
}
function zh(t, e, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, l = ii(t), f = n || a ? [...l ? Qr(l) : [], ...e ? Qr(e) : []] : [];
  f.forEach((w) => {
    n && w.addEventListener("scroll", r), a && w.addEventListener("resize", r);
  });
  const d = l && s ? Bh(l, r, a) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === l && h && e && (h.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(e);
    })), r();
  }), l && !c && h.observe(l), e && h.observe(e));
  let b, g = c ? Jt(t) : null;
  c && v();
  function v() {
    const w = Jt(t);
    g && !zl(g, w) && r(), g = w, b = requestAnimationFrame(v);
  }
  return r(), () => {
    var w;
    f.forEach((y) => {
      n && y.removeEventListener("scroll", r), a && y.removeEventListener("resize", r);
    }), d == null || d(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(b);
  };
}
const Fh = mh, Lh = hh, Vh = dh, Uh = bh, Wh = fh, Gs = uh, Hh = gh, Gh = (t, e, r) => {
  const o = /* @__PURE__ */ new Map(), n = r ?? {}, a = {
    ...$h,
    ...n.platform,
    _c: o
  };
  return lh(t, e, {
    ...n,
    platform: a
  });
};
var Yh = typeof document < "u", Qh = function() {
}, Lo = Yh ? Ha : Qh;
function qo(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let r, o, n;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (r = t.length, r !== e.length) return !1;
      for (o = r; o-- !== 0; )
        if (!qo(t[o], e[o]))
          return !1;
      return !0;
    }
    if (n = Object.keys(t), r = n.length, r !== Object.keys(e).length)
      return !1;
    for (o = r; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, n[o]))
        return !1;
    for (o = r; o-- !== 0; ) {
      const a = n[o];
      if (!(a === "_owner" && t.$$typeof) && !qo(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Fl(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ys(t, e) {
  const r = Fl(t);
  return Math.round(e * r) / r;
}
function Kn(t) {
  const e = m.useRef(t);
  return Lo(() => {
    e.current = t;
  }), e;
}
function Xh(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: n,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = t, [f, d] = m.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = m.useState(o);
  qo(p, o) || h(o);
  const [b, g] = m.useState(null), [v, w] = m.useState(null), y = m.useCallback((B) => {
    B !== k.current && (k.current = B, g(B));
  }, []), x = m.useCallback((B) => {
    B !== S.current && (S.current = B, w(B));
  }, []), C = a || b, E = i || v, k = m.useRef(null), S = m.useRef(null), A = m.useRef(f), _ = c != null, R = Kn(c), P = Kn(n), I = Kn(l), T = m.useCallback(() => {
    if (!k.current || !S.current)
      return;
    const B = {
      placement: e,
      strategy: r,
      middleware: p
    };
    P.current && (B.platform = P.current), Gh(k.current, S.current, B).then((V) => {
      const L = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      D.current && !qo(A.current, L) && (A.current = L, Sr.flushSync(() => {
        d(L);
      }));
    });
  }, [p, e, r, P, I]);
  Lo(() => {
    l === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [l]);
  const D = m.useRef(!1);
  Lo(() => (D.current = !0, () => {
    D.current = !1;
  }), []), Lo(() => {
    if (C && (k.current = C), E && (S.current = E), C && E) {
      if (R.current)
        return R.current(C, E, T);
      T();
    }
  }, [C, E, T, R, _]);
  const z = m.useMemo(() => ({
    reference: k,
    floating: S,
    setReference: y,
    setFloating: x
  }), [y, x]), O = m.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), N = m.useMemo(() => {
    const B = {
      position: r,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return B;
    const V = Ys(O.floating, f.x), L = Ys(O.floating, f.y);
    return s ? {
      ...B,
      transform: "translate(" + V + "px, " + L + "px)",
      ...Fl(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: V,
      top: L
    };
  }, [r, s, O.floating, f.x, f.y]);
  return m.useMemo(() => ({
    ...f,
    update: T,
    refs: z,
    elements: O,
    floatingStyles: N
  }), [f, T, z, O, N]);
}
const jh = (t) => {
  function e(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(r) {
      const {
        element: o,
        padding: n
      } = typeof t == "function" ? t(r) : t;
      return o && e(o) ? o.current != null ? Gs({
        element: o.current,
        padding: n
      }).fn(r) : {} : o ? Gs({
        element: o,
        padding: n
      }).fn(r) : {};
    }
  };
}, Kh = (t, e) => {
  const r = Fh(t);
  return {
    name: r.name,
    fn: r.fn,
    options: [t, e]
  };
}, qh = (t, e) => {
  const r = Lh(t);
  return {
    name: r.name,
    fn: r.fn,
    options: [t, e]
  };
}, Jh = (t, e) => ({
  fn: Hh(t).fn,
  options: [t, e]
}), Zh = (t, e) => {
  const r = Vh(t);
  return {
    name: r.name,
    fn: r.fn,
    options: [t, e]
  };
}, eg = (t, e) => {
  const r = Uh(t);
  return {
    name: r.name,
    fn: r.fn,
    options: [t, e]
  };
}, tg = (t, e) => {
  const r = Wh(t);
  return {
    name: r.name,
    fn: r.fn,
    options: [t, e]
  };
}, rg = (t, e) => {
  const r = jh(t);
  return {
    name: r.name,
    fn: r.fn,
    options: [t, e]
  };
};
var og = Object.defineProperty, ng = (t, e) => og(t, "name", { value: e, configurable: !0 });
function Ir(t) {
  const [e, r] = m.useState(void 0);
  return de(() => {
    if (t) {
      r({ width: t.offsetWidth, height: t.offsetHeight });
      const o = new ResizeObserver((n) => {
        if (!Array.isArray(n) || !n.length)
          return;
        const a = n[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = t.offsetWidth, s = t.offsetHeight;
        r({ width: i, height: s });
      });
      return o.observe(t, { box: "border-box" }), () => o.unobserve(t);
    } else
      r(void 0);
  }, [t]), e;
}
ng(Ir, "useSize");
var ag = Object.defineProperty, Dt = (t, e) => ag(t, "name", { value: e, configurable: !0 }), Ll = "Popper", [Vl, Ft] = /* @__PURE__ */ ge(Ll), [ig, Ul] = Vl(Ll), sg = /* @__PURE__ */ Dt((t) => {
  const { __scopePopper: e, children: r } = t, [o, n] = m.useState(null), [a, i] = m.useState(void 0);
  return /* @__PURE__ */ u(
    ig,
    {
      scope: e,
      anchor: o,
      onAnchorChange: n,
      placementState: a,
      setPlacementState: i,
      children: r
    }
  );
}, "Popper"), cg = "PopperAnchor", lg = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Dt(function(e, r) {
    const { __scopePopper: o, virtualRef: n, ...a } = e, i = Ul(cg, o), s = m.useRef(null), c = i.onAnchorChange, l = m.useCallback(
      (g) => {
        s.current = g, g && c(g);
      },
      [c]
    ), f = Y(r, l), d = m.useRef(null);
    m.useEffect(() => {
      if (!n)
        return;
      const g = d.current;
      d.current = n.current, g !== d.current && c(d.current);
    });
    const p = i.placementState && ln(i.placementState), h = p == null ? void 0 : p[0], b = p == null ? void 0 : p[1];
    return n ? null : /* @__PURE__ */ u(
      W.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": b,
        ...a,
        ref: f
      }
    );
  }, "PopperAnchor")
), Wl = "PopperContent", [ug, RA] = Vl(Wl), dg = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Dt(function(e, r) {
    var J, Z, q, re, ne, Pe, Ue;
    const {
      __scopePopper: o,
      side: n = "bottom",
      sideOffset: a = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: g,
      ...v
    } = e, w = Ul(Wl, o), [y, x] = m.useState(null), C = Y(r, x), [E, k] = m.useState(null), S = Ir(E), A = (S == null ? void 0 : S.width) ?? 0, _ = (S == null ? void 0 : S.height) ?? 0, R = n + (i !== "center" ? "-" + i : ""), P = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, I = Array.isArray(f) ? f : [f], T = I.length > 0, D = {
      padding: P,
      boundary: I.filter(Hl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: z, floatingStyles: O, placement: N, isPositioned: B, middlewareData: V } = Xh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: /* @__PURE__ */ Dt((...We) => zh(...We, {
        animationFrame: b === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Kh({ mainAxis: a + _, alignmentAxis: s }),
        l && qh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Jh() : void 0,
          ...D
        }),
        l && Zh({ ...D }),
        eg({
          ...D,
          apply: /* @__PURE__ */ Dt(({ elements: We, rects: dt, availableWidth: Et, availableHeight: So }) => {
            const { width: ur, height: dr } = dt.reference, Yt = We.floating.style;
            Yt.setProperty("--radix-popper-available-width", `${Et}px`), Yt.setProperty("--radix-popper-available-height", `${So}px`), Yt.setProperty("--radix-popper-anchor-width", `${ur}px`), Yt.setProperty("--radix-popper-anchor-height", `${dr}px`);
          }, "apply")
        }),
        E && rg({ element: E, padding: c }),
        fg({ arrowWidth: A, arrowHeight: _ }),
        h && tg({
          strategy: "referenceHidden",
          ...D,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: T ? D.boundary : void 0
        })
      ]
    }), L = w.setPlacementState;
    de(() => (L(N), () => {
      L(void 0);
    }), [N, L]);
    const [ee, X] = ln(N), j = fe(g);
    de(() => {
      B && (j == null || j());
    }, [B, j]);
    const oe = (J = V.arrow) == null ? void 0 : J.x, H = (Z = V.arrow) == null ? void 0 : Z.y, U = ((q = V.arrow) == null ? void 0 : q.centerOffset) !== 0, [te, G] = m.useState();
    return de(() => {
      y && G(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ u(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...O,
          transform: B ? O.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: te,
          "--radix-popper-transform-origin": [
            (re = V.transformOrigin) == null ? void 0 : re.x,
            (ne = V.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Pe = V.hide) == null ? void 0 : Pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u(
          ug,
          {
            scope: o,
            placedSide: ee,
            placedAlign: X,
            onArrowChange: k,
            arrowX: oe,
            arrowY: H,
            shouldHideArrow: U,
            children: /* @__PURE__ */ u(
              W.div,
              {
                "data-side": ee,
                "data-align": X,
                ...v,
                ref: C,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: B ? (Ue = v.style) == null ? void 0 : Ue.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function Hl(t) {
  return t !== null;
}
Dt(Hl, "isNotNull");
var fg = /* @__PURE__ */ Dt((t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var v, w, y;
    const { placement: r, rects: o, middlewareData: n } = e, i = ((v = n.arrow) == null ? void 0 : v.centerOffset) !== 0, s = i ? 0 : t.arrowWidth, c = i ? 0 : t.arrowHeight, [l, f] = ln(r), d = { start: "0%", center: "50%", end: "100%" }[f], p = (((w = n.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, h = (((y = n.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let b = "", g = "";
    return l === "bottom" ? (b = i ? d : `${p}px`, g = `${-c}px`) : l === "top" ? (b = i ? d : `${p}px`, g = `${o.floating.height + c}px`) : l === "right" ? (b = `${-c}px`, g = i ? d : `${h}px`) : l === "left" && (b = `${o.floating.width + c}px`, g = i ? d : `${h}px`), { data: { x: b, y: g } };
  }
}), "transformOrigin");
function ln(t) {
  const [e, r = "center"] = t.split("-");
  return [e, r];
}
Dt(ln, "getSideAndAlignFromPlacement");
var io = sg, un = lg, dn = dg, pg = Object.defineProperty, mg = (t, e) => pg(t, "name", { value: e, configurable: !0 }), Tr = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ mg(function(e, r) {
    var c;
    const { container: o, ...n } = e, [a, i] = m.useState(!1);
    de(() => i(!0), []);
    const s = o || a && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
    return s ? Sr.createPortal(/* @__PURE__ */ u(W.div, { ...n, ref: r }), s) : null;
  }, "Portal")
), hg = Object.defineProperty, xt = (t, e) => hg(t, "name", { value: e, configurable: !0 });
function Gl(t, e) {
  return m.useReducer((r, o) => e[r][o] ?? r, t);
}
xt(Gl, "useStateMachine");
var we = /* @__PURE__ */ xt((t) => {
  const { present: e, children: r } = t, o = Yl(e), n = typeof r == "function" ? r({ present: o.isPresent }) : m.Children.only(r), a = Ql(o.ref, Xl(n));
  return typeof r == "function" || o.isPresent ? m.cloneElement(n, { ref: a }) : null;
}, "Presence");
function Yl(t) {
  const [e, r] = m.useState(), o = m.useRef(null), n = m.useRef(t), a = m.useRef("none"), i = m.useRef(void 0), s = t ? "mounted" : "unmounted", [c, l] = Gl(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    c === "mounted" ? (a.current = i.current ?? hr(o.current), i.current = void 0) : a.current = "none";
  }, [c]), de(() => {
    const f = o.current, d = n.current;
    if (d !== t) {
      const h = a.current, b = hr(f);
      t ? (i.current = b, l("MOUNT")) : b === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), n.current = t;
    }
  }, [t, l]), de(() => {
    if (e) {
      let f;
      const d = e.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ xt((b) => {
        const v = hr(o.current).includes(CSS.escape(b.animationName));
        if (b.target === e && v && (l("ANIMATION_END"), !n.current)) {
          const w = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", f = d.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ xt((b) => {
        b.target === e && (a.current = hr(o.current));
      }, "handleAnimationStart");
      return e.addEventListener("animationstart", h), e.addEventListener("animationcancel", p), e.addEventListener("animationend", p), () => {
        d.clearTimeout(f), e.removeEventListener("animationstart", h), e.removeEventListener("animationcancel", p), e.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [e, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: m.useCallback((f) => {
      if (f) {
        const d = getComputedStyle(f);
        o.current = d, i.current = hr(d);
      } else
        o.current = null;
      r(f);
    }, [])
  };
}
xt(Yl, "usePresence");
function va(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
xt(va, "setRef");
function Ql(...t) {
  const e = m.useRef(t);
  return e.current = t, m.useCallback((r) => {
    const o = e.current;
    let n = !1;
    const a = o.map((i) => {
      const s = va(i, r);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let i = 0; i < a.length; i++) {
          const s = a[i];
          typeof s == "function" ? s() : va(o[i], null);
        }
      };
  }, []);
}
xt(Ql, "useStableComposedRefs");
function hr(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
xt(hr, "getAnimationName");
function Xl(t) {
  var o, n;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = (n = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : n.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
xt(Xl, "getElementRef");
var gg = Object.defineProperty, si = (t, e) => gg(t, "name", { value: e, configurable: !0 }), qn = !1;
function jl() {
  const [t, e] = m.useState(qn);
  return m.useEffect(() => {
    qn || (qn = !0, e(!0));
  }, []), t;
}
si(jl, "useIsHydrated");
var Kl = m[" useSyncExternalStore ".trim().toString()];
function ql() {
  return () => {
  };
}
si(ql, "subscribe");
function Jl() {
  return Kl(
    ql,
    () => !0,
    () => !1
  );
}
si(Jl, "useIsHydratedModern");
var bg = typeof Kl == "function" ? Jl : jl, vg = Object.defineProperty, nr = (t, e) => vg(t, "name", { value: e, configurable: !0 }), Jn = "rovingFocusGroup.onEntryFocus", xg = { bubbles: !1, cancelable: !0 }, fn = "RovingFocusGroup", [xa, Zl, wg] = /* @__PURE__ */ or(fn), [yg, Lt] = /* @__PURE__ */ ge(
  fn,
  [wg]
), [Cg, Ag] = yg(fn), Sg = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nr(function(e, r) {
    return /* @__PURE__ */ u(xa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u(xa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u(_g, { ...e, ref: r }) }) });
  }, "RovingFocusGroup")
), _g = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ nr(function(e, r) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: n,
    loop: a = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: f,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = e, h = m.useRef(null), b = Y(r, h), g = ct(i), [v, w] = xe({
    prop: s,
    defaultProp: c ?? null,
    onChange: l,
    caller: fn
  }), [y, x] = m.useState(!1), C = fe(f), E = Zl(o), k = m.useRef(!1), [S, A] = m.useState(0);
  return m.useEffect(() => {
    const _ = h.current;
    if (_)
      return _.addEventListener(Jn, C), () => _.removeEventListener(Jn, C);
  }, [C]), /* @__PURE__ */ u(
    Cg,
    {
      scope: o,
      orientation: n,
      dir: g,
      loop: a,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (_) => w(_),
        [w]
      ),
      onItemShiftTab: m.useCallback(() => x(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => A((_) => _ + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => A((_) => _ - 1),
        []
      ),
      children: /* @__PURE__ */ u(
        W.div,
        {
          tabIndex: y || S === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: F(e.onFocus, (_) => {
            const R = !k.current;
            if (_.target === _.currentTarget && R && !y) {
              const P = new CustomEvent(Jn, xg);
              if (_.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const I = E().filter((N) => N.focusable), T = I.find((N) => N.active), D = I.find((N) => N.id === v), O = [T, D, ...I].filter(
                  Boolean
                ).map((N) => N.ref.current);
                ci(O, d);
              }
            }
            k.current = !1;
          }),
          onBlur: F(e.onBlur, () => x(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), kg = "RovingFocusGroupItem", Rg = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nr(function(e, r) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: n = !0,
      active: a = !1,
      tabStopId: i,
      children: s,
      ...c
    } = e, l = Oe(), f = i || l, d = Ag(kg, o), p = d.currentTabStopId === f, h = Zl(o), { onFocusableItemAdd: b, onFocusableItemRemove: g, currentTabStopId: v } = d, w = bg();
    return de(() => {
      if (!(!w || !n))
        return b(), () => g();
    }, [w, n, b, g]), m.useEffect(() => {
      if (!(w || !n))
        return b(), () => g();
    }, [w, n, b, g]), /* @__PURE__ */ u(
      xa.ItemSlot,
      {
        scope: o,
        id: f,
        focusable: n,
        active: a,
        children: /* @__PURE__ */ u(
          W.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...c,
            ref: r,
            onMouseDown: F(e.onMouseDown, (y) => {
              n ? d.onItemFocus(f) : y.preventDefault();
            }),
            onFocus: F(e.onFocus, () => d.onItemFocus(f)),
            onKeyDown: F(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const x = tu(y, d.orientation, d.dir);
              if (x !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let E = h().filter((k) => k.focusable).map((k) => k.ref.current);
                if (x === "last") E.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && E.reverse();
                  const k = E.indexOf(y.currentTarget);
                  E = d.loop ? ru(E, k + 1) : E.slice(k + 1);
                }
                setTimeout(() => ci(E));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: p, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Eg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function eu(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
nr(eu, "getDirectionAwareKey");
function tu(t, e, r) {
  const o = eu(t.key, r);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Eg[o];
}
nr(tu, "getFocusIntent");
function ci(t, e = !1) {
  const r = document.activeElement;
  for (const o of t)
    if (o === r || (o.focus({ preventScroll: e }), document.activeElement !== r)) return;
}
nr(ci, "focusFirst");
function ru(t, e) {
  return t.map((r, o) => t[(e + o) % t.length]);
}
nr(ru, "wrapArray");
var pn = Sg, mn = Rg, Pg = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, fr = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Io = {}, Zn = 0, ou = function(t) {
  return t && (t.host || ou(t.parentNode));
}, Ig = function(t, e) {
  return e.map(function(r) {
    if (t.contains(r))
      return r;
    var o = ou(r);
    return o && t.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Tg = function(t, e, r, o) {
  var n = Ig(e, Array.isArray(t) ? t : [t]);
  Io[r] || (Io[r] = /* @__PURE__ */ new WeakMap());
  var a = Io[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(n), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  n.forEach(l);
  var f = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        f(p);
      else
        try {
          var h = p.getAttribute(o), b = h !== null && h !== "false", g = (fr.get(p) || 0) + 1, v = (a.get(p) || 0) + 1;
          fr.set(p, g), a.set(p, v), i.push(p), g === 1 && b && Po.set(p, !0), v === 1 && p.setAttribute(r, "true"), b || p.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return f(e), s.clear(), Zn++, function() {
    i.forEach(function(d) {
      var p = fr.get(d) - 1, h = a.get(d) - 1;
      fr.set(d, p), a.set(d, h), p || (Po.has(d) || d.removeAttribute(o), Po.delete(d)), h || d.removeAttribute(r);
    }), Zn--, Zn || (fr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Io = {});
  };
}, hn = function(t, e, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(t) ? t : [t]), n = Pg(t);
  return n ? (o.push.apply(o, Array.from(n.querySelectorAll("[aria-live], script"))), Tg(o, n, r, "aria-hidden")) : function() {
    return null;
  };
}, nt = function() {
  return nt = Object.assign || function(e) {
    for (var r, o = 1, n = arguments.length; o < n; o++) {
      r = arguments[o];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, nt.apply(this, arguments);
};
function nu(t, e) {
  var r = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++)
      e.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (r[o[n]] = t[o[n]]);
  return r;
}
function Mg(t, e, r) {
  if (r || arguments.length === 2) for (var o = 0, n = e.length, a; o < n; o++)
    (a || !(o in e)) && (a || (a = Array.prototype.slice.call(e, 0, o)), a[o] = e[o]);
  return t.concat(a || Array.prototype.slice.call(e));
}
var Vo = "right-scroll-bar-position", Uo = "width-before-scroll-bar", Dg = "with-scroll-bars-hidden", Ng = "--removed-body-scroll-bar-size";
function ea(t, e) {
  return typeof t == "function" ? t(e) : t && (t.current = e), t;
}
function Og(t, e) {
  var r = Q(function() {
    return {
      // value
      value: t,
      // last callback
      callback: e,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(o) {
          var n = r.value;
          n !== o && (r.value = o, r.callback(o, n));
        }
      }
    };
  })[0];
  return r.callback = e, r.facade;
}
var $g = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Qs = /* @__PURE__ */ new WeakMap();
function Bg(t, e) {
  var r = Og(null, function(o) {
    return t.forEach(function(n) {
      return ea(n, o);
    });
  });
  return $g(function() {
    var o = Qs.get(r);
    if (o) {
      var n = new Set(o), a = new Set(t), i = r.current;
      n.forEach(function(s) {
        a.has(s) || ea(s, null);
      }), a.forEach(function(s) {
        n.has(s) || ea(s, i);
      });
    }
    Qs.set(r, t);
  }, [t]), r;
}
function zg(t) {
  return t;
}
function Fg(t, e) {
  e === void 0 && (e = zg);
  var r = [], o = !1, n = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : t;
    },
    useMedium: function(a) {
      var i = e(a, o);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var c = function() {
        var f = i;
        i = [], f.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(f) {
          i.push(f), l();
        },
        filter: function(f) {
          return i = i.filter(f), r;
        }
      };
    }
  };
  return n;
}
function Lg(t) {
  t === void 0 && (t = {});
  var e = Fg(null);
  return e.options = nt({ async: !0, ssr: !1 }, t), e;
}
var au = function(t) {
  var e = t.sideCar, r = nu(t, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = e.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return m.createElement(o, nt({}, r));
};
au.isSideCarExport = !0;
function Vg(t, e) {
  return t.useMedium(e), au;
}
var iu = Lg(), ta = function() {
}, gn = m.forwardRef(function(t, e) {
  var r = m.useRef(null), o = m.useState({
    onScrollCapture: ta,
    onWheelCapture: ta,
    onTouchMoveCapture: ta
  }), n = o[0], a = o[1], i = t.forwardProps, s = t.children, c = t.className, l = t.removeScrollBar, f = t.enabled, d = t.shards, p = t.sideCar, h = t.noRelative, b = t.noIsolation, g = t.inert, v = t.allowPinchZoom, w = t.as, y = w === void 0 ? "div" : w, x = t.gapMode, C = nu(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, k = Bg([r, e]), S = nt(nt({}, C), n);
  return m.createElement(
    m.Fragment,
    null,
    f && m.createElement(E, { sideCar: iu, removeScrollBar: l, shards: d, noRelative: h, noIsolation: b, inert: g, setCallbacks: a, allowPinchZoom: !!v, lockRef: r, gapMode: x }),
    i ? m.cloneElement(m.Children.only(s), nt(nt({}, S), { ref: k })) : m.createElement(y, nt({}, S, { className: c, ref: k }), s)
  );
});
gn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
gn.classNames = {
  fullWidth: Uo,
  zeroRight: Vo
};
var Ug = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wg() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = Ug();
  return e && t.setAttribute("nonce", e), t;
}
function Hg(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function Gg(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var Yg = function() {
  var t = 0, e = null;
  return {
    add: function(r) {
      t == 0 && (e = Wg()) && (Hg(e, r), Gg(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, Qg = function() {
  var t = Yg();
  return function(e, r) {
    m.useEffect(function() {
      return t.add(e), function() {
        t.remove();
      };
    }, [e && r]);
  };
}, su = function() {
  var t = Qg(), e = function(r) {
    var o = r.styles, n = r.dynamic;
    return t(o, n), null;
  };
  return e;
}, Xg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ra = function(t) {
  return parseInt(t || "", 10) || 0;
}, jg = function(t) {
  var e = window.getComputedStyle(document.body), r = e[t === "padding" ? "paddingLeft" : "marginLeft"], o = e[t === "padding" ? "paddingTop" : "marginTop"], n = e[t === "padding" ? "paddingRight" : "marginRight"];
  return [ra(r), ra(o), ra(n)];
}, Kg = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return Xg;
  var e = jg(t), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, o - r + e[2] - e[0])
  };
}, qg = su(), vr = "data-scroll-locked", Jg = function(t, e, r, o) {
  var n = t.left, a = t.top, i = t.right, s = t.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Dg, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body[`).concat(vr, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(o, ";"),
    r === "margin" && `
    padding-left: `.concat(n, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vo, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(Uo, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(Vo, " .").concat(Vo, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Uo, " .").concat(Uo, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(vr, `] {
    `).concat(Ng, ": ").concat(s, `px;
  }
`);
}, Xs = function() {
  var t = parseInt(document.body.getAttribute(vr) || "0", 10);
  return isFinite(t) ? t : 0;
}, Zg = function() {
  m.useEffect(function() {
    return document.body.setAttribute(vr, (Xs() + 1).toString()), function() {
      var t = Xs() - 1;
      t <= 0 ? document.body.removeAttribute(vr) : document.body.setAttribute(vr, t.toString());
    };
  }, []);
}, eb = function(t) {
  var e = t.noRelative, r = t.noImportant, o = t.gapMode, n = o === void 0 ? "margin" : o;
  Zg();
  var a = m.useMemo(function() {
    return Kg(n);
  }, [n]);
  return m.createElement(qg, { styles: Jg(a, !e, n, r ? "" : "!important") });
}, wa = !1;
if (typeof window < "u")
  try {
    var To = Object.defineProperty({}, "passive", {
      get: function() {
        return wa = !0, !0;
      }
    });
    window.addEventListener("test", To, To), window.removeEventListener("test", To, To);
  } catch {
    wa = !1;
  }
var pr = wa ? { passive: !1 } : !1, tb = function(t) {
  return t.tagName === "TEXTAREA";
}, cu = function(t, e) {
  if (!(t instanceof Element))
    return !1;
  var r = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    r[e] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !tb(t) && r[e] === "visible")
  );
}, rb = function(t) {
  return cu(t, "overflowY");
}, ob = function(t) {
  return cu(t, "overflowX");
}, js = function(t, e) {
  var r = e.ownerDocument, o = e;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var n = lu(t, o);
    if (n) {
      var a = uu(t, o), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, nb = function(t) {
  var e = t.scrollTop, r = t.scrollHeight, o = t.clientHeight;
  return [
    e,
    r,
    o
  ];
}, ab = function(t) {
  var e = t.scrollLeft, r = t.scrollWidth, o = t.clientWidth;
  return [
    e,
    r,
    o
  ];
}, lu = function(t, e) {
  return t === "v" ? rb(e) : ob(e);
}, uu = function(t, e) {
  return t === "v" ? nb(e) : ab(e);
}, ib = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, sb = function(t, e, r, o, n) {
  var a = ib(t, window.getComputedStyle(e).direction), i = a * o, s = r.target, c = e.contains(s), l = !1, f = i > 0, d = 0, p = 0;
  do {
    if (!s)
      break;
    var h = uu(t, s), b = h[0], g = h[1], v = h[2], w = g - v - a * b;
    (b || w) && lu(t, s) && (d += w, p += b);
    var y = s.parentNode;
    s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (e.contains(s) || e === s)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(p) < 1) && (l = !0), l;
}, Mo = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, Ks = function(t) {
  return [t.deltaX, t.deltaY];
}, qs = function(t) {
  return t && "current" in t ? t.current : t;
}, cb = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, lb = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, ub = 0, mr = [];
function db(t) {
  var e = m.useRef([]), r = m.useRef([0, 0]), o = m.useRef(), n = m.useState(ub++)[0], a = m.useState(su)[0], i = m.useRef(t);
  m.useEffect(function() {
    i.current = t;
  }, [t]), m.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(n));
      var g = Mg([t.lockRef.current], (t.shards || []).map(qs), !0).filter(Boolean);
      return g.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(n));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(n)), g.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(n));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var s = m.useCallback(function(g, v) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = Mo(g), y = r.current, x = "deltaX" in g ? g.deltaX : y[0] - w[0], C = "deltaY" in g ? g.deltaY : y[1] - w[1], E, k = g.target, S = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && S === "h" && k.type === "range")
      return !1;
    var A = window.getSelection(), _ = A && A.anchorNode, R = _ ? _ === k || _.contains(k) : !1;
    if (R)
      return !1;
    var P = js(S, k);
    if (!P)
      return !0;
    if (P ? E = S : (E = S === "v" ? "h" : "v", P = js(S, k)), !P)
      return !1;
    if (!o.current && "changedTouches" in g && (x || C) && (o.current = E), !E)
      return !0;
    var I = o.current || E;
    return sb(I, v, g, I === "h" ? x : C);
  }, []), c = m.useCallback(function(g) {
    var v = g;
    if (!(!mr.length || mr[mr.length - 1] !== a)) {
      var w = "deltaY" in v ? Ks(v) : Mo(v), y = e.current.filter(function(E) {
        return E.name === v.type && (E.target === v.target || v.target === E.shadowParent) && cb(E.delta, w);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var x = (i.current.shards || []).map(qs).filter(Boolean).filter(function(E) {
          return E.contains(v.target);
        }), C = x.length > 0 ? s(v, x[0]) : !i.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = m.useCallback(function(g, v, w, y) {
    var x = { name: g, delta: v, target: w, should: y, shadowParent: fb(w) };
    e.current.push(x), setTimeout(function() {
      e.current = e.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = m.useCallback(function(g) {
    r.current = Mo(g), o.current = void 0;
  }, []), d = m.useCallback(function(g) {
    l(g.type, Ks(g), g.target, s(g, t.lockRef.current));
  }, []), p = m.useCallback(function(g) {
    l(g.type, Mo(g), g.target, s(g, t.lockRef.current));
  }, []);
  m.useEffect(function() {
    return mr.push(a), t.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, pr), document.addEventListener("touchmove", c, pr), document.addEventListener("touchstart", f, pr), function() {
      mr = mr.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", c, pr), document.removeEventListener("touchmove", c, pr), document.removeEventListener("touchstart", f, pr);
    };
  }, []);
  var h = t.removeScrollBar, b = t.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(a, { styles: lb(n) }) : null,
    h ? m.createElement(eb, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
}
function fb(t) {
  for (var e = null; t !== null; )
    t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
  return e;
}
const pb = Vg(iu, db);
var so = m.forwardRef(function(t, e) {
  return m.createElement(gn, nt({}, t, { ref: e, sideCar: pb }));
});
so.classNames = gn.classNames;
var mb = Object.defineProperty, ie = (t, e) => mb(t, "name", { value: e, configurable: !0 }), ya = ["Enter", " "], hb = ["ArrowDown", "PageUp", "Home"], du = ["ArrowUp", "PageDown", "End"], gb = [...hb, ...du], bb = {
  ltr: [...ya, "ArrowRight"],
  rtl: [...ya, "ArrowLeft"]
}, vb = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, bn = "Menu", [Xr, xb, wb] = /* @__PURE__ */ or(bn), [ar, fu] = /* @__PURE__ */ ge(bn, [
  wb,
  Ft,
  Lt
]), vn = Ft(), pu = Lt(), [mu, Vt] = ar(bn), [yb, co] = ar(bn), Cb = /* @__PURE__ */ ie((t) => {
  const { __scopeMenu: e, open: r = !1, children: o, dir: n, onOpenChange: a, modal: i = !0 } = t, s = vn(e), [c, l] = m.useState(null), f = m.useRef(!1), d = fe(a), p = ct(n);
  return m.useEffect(() => {
    const h = /* @__PURE__ */ ie(() => {
      f.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, "handleKeyDown"), b = /* @__PURE__ */ ie(() => f.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), m.useEffect(() => {
    if (!r)
      return;
    const h = /* @__PURE__ */ ie(() => d(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [r, d]), /* @__PURE__ */ u(io, { ...s, children: /* @__PURE__ */ u(
    mu,
    {
      scope: e,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u(
        yb,
        {
          scope: e,
          onClose: m.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: i,
          children: o
        }
      )
    }
  ) });
}, "Menu"), hu = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { __scopeMenu: o, ...n } = e, a = vn(o);
    return /* @__PURE__ */ u(un, { ...a, ...n, ref: r });
  }, "MenuAnchor")
), gu = "MenuPortal", [Ab, bu] = ar(gu, {
  forceMount: void 0
}), Sb = /* @__PURE__ */ ie((t) => {
  const { __scopeMenu: e, forceMount: r, children: o, container: n } = t, a = Vt(gu, e);
  return /* @__PURE__ */ u(Ab, { scope: e, forceMount: r, children: /* @__PURE__ */ u(we, { present: r || a.open, children: /* @__PURE__ */ u(Tr, { asChild: !0, container: n, children: o }) }) });
}, "MenuPortal"), Je = "MenuContent", [_b, li] = ar(Je), kb = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const o = bu(Je, e.__scopeMenu), { forceMount: n = o.forceMount, ...a } = e, i = Vt(Je, e.__scopeMenu), s = co(Je, e.__scopeMenu);
    return /* @__PURE__ */ u(Xr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(we, { present: n || i.open, children: /* @__PURE__ */ u(Xr.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ u(Rb, { ...a, ref: r }) : /* @__PURE__ */ u(Eb, { ...a, ref: r }) }) }) });
  }, "MenuContent")
), Rb = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(e, r) {
    const o = Vt(Je, e.__scopeMenu), n = m.useRef(null), a = Y(r, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return hn(i);
    }, []), /* @__PURE__ */ u(
      ui,
      {
        ...e,
        ref: a,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        disableOutsideScroll: !0,
        onFocusOutside: F(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => o.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), Eb = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ie(function(e, r) {
  const o = Vt(Je, e.__scopeMenu);
  return /* @__PURE__ */ u(
    ui,
    {
      ...e,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Pb = /* @__PURE__ */ Ze("MenuContent.ScrollLock"), ui = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(e, r) {
    const {
      __scopeMenu: o,
      loop: n = !1,
      trapFocus: a,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: f,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: h,
      onDismiss: b,
      disableOutsideScroll: g,
      ...v
    } = e, w = Vt(Je, o), y = co(Je, o), x = vn(o), C = pu(o), E = xb(o), [k, S] = m.useState(null), A = m.useRef(null), _ = Y(r, A, w.onContentChange), R = m.useRef(0), P = m.useRef(""), I = m.useRef(0), T = m.useRef(null), D = m.useRef("right"), z = m.useRef(0), O = g ? so : m.Fragment, N = g ? { as: Pb, allowPinchZoom: !0 } : void 0, B = /* @__PURE__ */ ie((L) => {
      var G, J;
      const ee = P.current + L, X = E().filter((Z) => !Z.disabled), j = document.activeElement, oe = (G = X.find((Z) => Z.ref.current === j)) == null ? void 0 : G.textValue, H = X.map((Z) => Z.textValue), U = ku(H, ee, oe), te = (J = X.find((Z) => Z.textValue === U)) == null ? void 0 : J.ref.current;
      (/* @__PURE__ */ ie((function Z(q) {
        P.current = q, window.clearTimeout(R.current), q !== "" && (R.current = window.setTimeout(() => Z(""), 1e3));
      }), "updateSearch"))(ee), te && setTimeout(() => te.focus());
    }, "handleTypeaheadSearch");
    m.useEffect(() => () => window.clearTimeout(R.current), []), Rr();
    const V = m.useCallback((L) => {
      var X, j;
      return D.current === ((X = T.current) == null ? void 0 : X.side) && Eu(L, (j = T.current) == null ? void 0 : j.area);
    }, []);
    return /* @__PURE__ */ u(
      _b,
      {
        scope: o,
        searchRef: P,
        onItemEnter: m.useCallback(
          (L) => {
            V(L) && L.preventDefault();
          },
          [V]
        ),
        onItemLeave: m.useCallback(
          (L) => {
            var ee;
            V(L) || ((ee = A.current) == null || ee.focus(), S(null));
          },
          [V]
        ),
        onTriggerLeave: m.useCallback(
          (L) => {
            V(L) && L.preventDefault();
          },
          [V]
        ),
        pointerGraceTimerRef: I,
        onPointerGraceIntentChange: m.useCallback((L) => {
          T.current = L;
        }, []),
        children: /* @__PURE__ */ u(O, { ...N, children: /* @__PURE__ */ u(
          rn,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: F(i, (L) => {
              var ee;
              L.preventDefault(), (ee = A.current) == null || ee.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ u(
              kr,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: f,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: b,
                children: /* @__PURE__ */ u(
                  pn,
                  {
                    asChild: !0,
                    ...C,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: k,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: F(l, (L) => {
                      y.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u(
                      dn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": fi(w.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...x,
                        ...v,
                        ref: _,
                        style: { outline: "none", ...v.style },
                        onKeyDown: F(v.onKeyDown, (L) => {
                          const X = L.target.closest("[data-radix-menu-content]") === L.currentTarget, j = L.ctrlKey || L.altKey || L.metaKey, oe = L.key.length === 1;
                          X && (L.key === "Tab" && L.preventDefault(), !j && oe && B(L.key));
                          const H = A.current;
                          if (L.target !== H || !gb.includes(L.key)) return;
                          L.preventDefault();
                          const te = E().filter((G) => !G.disabled).map((G) => G.ref.current);
                          du.includes(L.key) && te.reverse(), Su(te);
                        }),
                        onBlur: F(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(R.current), P.current = "");
                        }),
                        onPointerMove: F(
                          e.onPointerMove,
                          wr((L) => {
                            const ee = L.target, X = z.current !== L.clientX;
                            if (L.currentTarget.contains(ee) && X) {
                              const j = L.clientX > z.current ? "right" : "left";
                              D.current = j, z.current = L.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "MenuContentImpl")
), vu = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { __scopeMenu: o, ...n } = e;
    return /* @__PURE__ */ u(W.div, { role: "group", ...n, ref: r });
  }, "MenuGroup")
), Ib = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { __scopeMenu: o, ...n } = e;
    return /* @__PURE__ */ u(W.div, { ...n, ref: r });
  }, "MenuLabel")
), Ca = "MenuItem", Js = "menu.itemSelect", di = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(e, r) {
    const { disabled: o = !1, onSelect: n, ...a } = e, i = m.useRef(null), s = co(Ca, e.__scopeMenu), c = li(Ca, e.__scopeMenu), l = Y(r, i), f = m.useRef(!1), d = /* @__PURE__ */ ie(() => {
      const p = i.current;
      if (!o && p) {
        const h = new CustomEvent(Js, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Js, (b) => n == null ? void 0 : n(b), { once: !0 }), en(p, h), h.defaultPrevented ? f.current = !1 : s.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ u(
      xu,
      {
        ...a,
        ref: l,
        disabled: o,
        onClick: F(e.onClick, d),
        onPointerDown: (p) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, p), f.current = !0;
        },
        onPointerUp: F(e.onPointerUp, (p) => {
          var h;
          f.current || (h = p.currentTarget) == null || h.click();
        }),
        onKeyDown: F(e.onKeyDown, (p) => {
          o || p.target !== p.currentTarget || c.searchRef.current !== "" && p.key === " " || ya.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }, "MenuItem")
), xu = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { __scopeMenu: o, disabled: n = !1, textValue: a, ...i } = e, s = li(Ca, o), c = pu(o), l = m.useRef(null), f = Y(r, l), [d, p] = m.useState(!1), [h, b] = m.useState("");
    return m.useEffect(() => {
      const g = l.current;
      g && b((g.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ u(
      Xr.ItemSlot,
      {
        scope: o,
        disabled: n,
        textValue: a ?? h,
        children: /* @__PURE__ */ u(mn, { asChild: !0, ...c, focusable: !n, children: /* @__PURE__ */ u(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: F(
              e.onPointerMove,
              wr((g) => {
                n ? s.onItemLeave(g) : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: F(
              e.onPointerLeave,
              wr((g) => s.onItemLeave(g))
            ),
            onFocus: F(e.onFocus, () => p(!0)),
            onBlur: F(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), Tb = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(e, r) {
    const { checked: o = !1, onCheckedChange: n, ...a } = e;
    return /* @__PURE__ */ u(yu, { scope: e.__scopeMenu, checked: o, children: /* @__PURE__ */ u(
      di,
      {
        role: "menuitemcheckbox",
        "aria-checked": jr(o) ? "mixed" : o,
        ...a,
        ref: r,
        "data-state": xn(o),
        onSelect: F(
          a.onSelect,
          () => n == null ? void 0 : n(jr(o) ? !0 : !o),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), Mb = "MenuRadioGroup", [Db, Nb] = ar(
  Mb,
  { value: void 0, onValueChange: /* @__PURE__ */ ie(() => {
  }, "onValueChange") }
), Ob = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { value: o, onValueChange: n, ...a } = e, i = fe(n);
    return /* @__PURE__ */ u(Db, { scope: e.__scopeMenu, value: o, onValueChange: i, children: /* @__PURE__ */ u(vu, { ...a, ref: r }) });
  }, "MenuRadioGroup")
), $b = "MenuRadioItem", Bb = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { value: o, ...n } = e, a = Nb($b, e.__scopeMenu), i = o === a.value;
    return /* @__PURE__ */ u(yu, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ u(
      di,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...n,
        ref: r,
        "data-state": xn(i),
        onSelect: F(
          n.onSelect,
          () => {
            var s;
            return (s = a.onValueChange) == null ? void 0 : s.call(a, o);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), wu = "MenuItemIndicator", [yu, zb] = ar(
  wu,
  { checked: !1 }
), Fb = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(e, r) {
    const { __scopeMenu: o, forceMount: n, ...a } = e, i = zb(wu, o);
    return /* @__PURE__ */ u(
      we,
      {
        present: n || jr(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ u(
          W.span,
          {
            ...a,
            ref: r,
            "data-state": xn(i.checked)
          }
        )
      }
    );
  }, "MenuItemIndicator")
), Lb = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const { __scopeMenu: o, ...n } = e;
    return /* @__PURE__ */ u(
      W.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: r
      }
    );
  }, "MenuSeparator")
), Cu = "MenuSub", [Vb, Au] = ar(Cu), Ub = /* @__PURE__ */ ie((t) => {
  const { __scopeMenu: e, children: r, open: o = !1, onOpenChange: n } = t, a = Vt(Cu, e), i = vn(e), [s, c] = m.useState(null), [l, f] = m.useState(null), d = fe(n);
  return m.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ u(io, { ...i, children: /* @__PURE__ */ u(
    mu,
    {
      scope: e,
      open: o,
      onOpenChange: d,
      content: l,
      onContentChange: f,
      children: /* @__PURE__ */ u(
        Vb,
        {
          scope: e,
          contentId: Oe(),
          triggerId: Oe(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
}, "MenuSub"), Do = "MenuSubTrigger", Wb = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const o = Vt(Do, e.__scopeMenu), n = co(Do, e.__scopeMenu), a = Au(Do, e.__scopeMenu), i = li(Do, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = i, f = { __scopeMenu: e.__scopeMenu }, d = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    m.useEffect(() => d, [d]), m.useEffect(() => {
      const h = c.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [c, l]);
    const p = Y(r, a.onTriggerChange);
    return /* @__PURE__ */ u(hu, { asChild: !0, ...f, children: /* @__PURE__ */ u(
      xu,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? a.contentId : void 0,
        "data-state": fi(o.open),
        ...e,
        ref: p,
        onClick: (h) => {
          var b;
          (b = e.onClick) == null || b.call(e, h), !(e.disabled || h.defaultPrevented) && (h.currentTarget.focus(), o.open || o.onOpenChange(!0));
        },
        onPointerMove: F(
          e.onPointerMove,
          wr((h) => {
            i.onItemEnter(h), !h.defaultPrevented && !e.disabled && !o.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              o.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: F(
          e.onPointerLeave,
          wr((h) => {
            var g, v;
            d();
            const b = (g = o.content) == null ? void 0 : g.getBoundingClientRect();
            if (b) {
              const w = (v = o.content) == null ? void 0 : v.dataset.side, y = w === "right", x = y ? -5 : 5, C = b[y ? "left" : "right"], E = b[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + x, y: h.clientY },
                  { x: C, y: b.top },
                  { x: E, y: b.top },
                  { x: E, y: b.bottom },
                  { x: C, y: b.bottom }
                ],
                side: w
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(h), h.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: F(e.onKeyDown, (h) => {
          var g;
          e.disabled || h.target !== h.currentTarget || i.searchRef.current !== "" && h.key === " " || bb[n.dir].includes(h.key) && (o.onOpenChange(!0), (g = o.content) == null || g.focus(), h.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), Hb = "MenuSubContent", Gb = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ie(function(e, r) {
    const o = bu(Je, e.__scopeMenu), { forceMount: n = o.forceMount, align: a = "start", ...i } = e, s = Vt(Je, e.__scopeMenu), c = co(Je, e.__scopeMenu), l = Au(Hb, e.__scopeMenu), f = m.useRef(null), d = Y(r, f);
    return /* @__PURE__ */ u(Xr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(we, { present: n || s.open, children: /* @__PURE__ */ u(Xr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(
      ui,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...i,
        ref: d,
        align: a,
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          var h;
          c.isUsingKeyboardRef.current && ((h = f.current) == null || h.focus()), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: F(e.onFocusOutside, (p) => {
          p.target !== l.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: F(e.onEscapeKeyDown, (p) => {
          c.onClose(), p.preventDefault();
        }),
        onKeyDown: F(e.onKeyDown, (p) => {
          var g;
          const h = p.currentTarget.contains(p.target), b = vb[c.dir].includes(p.key);
          h && b && (s.onOpenChange(!1), (g = l.trigger) == null || g.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function fi(t) {
  return t ? "open" : "closed";
}
ie(fi, "getOpenState");
function jr(t) {
  return t === "indeterminate";
}
ie(jr, "isIndeterminate");
function xn(t) {
  return jr(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
ie(xn, "getCheckedState");
function Su(t) {
  const e = document.activeElement;
  for (const r of t)
    if (r === e || (r.focus(), document.activeElement !== e)) return;
}
ie(Su, "focusFirst");
function _u(t, e) {
  return t.map((r, o) => t[(e + o) % t.length]);
}
ie(_u, "wrapArray");
function ku(t, e, r) {
  const n = e.length > 1 && Array.from(e).every((l) => l === e[0]) ? e[0] : e, a = r ? t.indexOf(r) : -1;
  let i = _u(t, Math.max(a, 0));
  n.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(n.toLowerCase())
  );
  return c !== r ? c : void 0;
}
ie(ku, "getNextMatch");
function Ru(t, e) {
  const { x: r, y: o } = t;
  let n = !1;
  for (let a = 0, i = e.length - 1; a < e.length; i = a++) {
    const s = e[a], c = e[i], l = s.x, f = s.y, d = c.x, p = c.y;
    f > o != p > o && r < (d - l) * (o - f) / (p - f) + l && (n = !n);
  }
  return n;
}
ie(Ru, "isPointInPolygon");
function Eu(t, e) {
  if (!e) return !1;
  const r = { x: t.clientX, y: t.clientY };
  return Ru(r, e);
}
ie(Eu, "isPointerInGraceArea");
function wr(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
ie(wr, "whenMouse");
var Yb = Cb, Qb = hu, Xb = Sb, jb = kb, Kb = vu, qb = Ib, Jb = di, Zb = Tb, e0 = Ob, t0 = Bb, r0 = Fb, o0 = Lb, n0 = Ub, a0 = Wb, i0 = Gb, s0 = Object.defineProperty, Le = (t, e) => s0(t, "name", { value: e, configurable: !0 }), pi = "DropdownMenu", [c0, EA] = /* @__PURE__ */ ge(
  pi,
  [fu]
), Ve = fu(), [l0, Pu] = c0(pi), u0 = /* @__PURE__ */ Le((t) => {
  const {
    __scopeDropdownMenu: e,
    children: r,
    dir: o,
    open: n,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = t, c = Ve(e), l = m.useRef(null), [f, d] = xe({
    prop: n,
    defaultProp: a ?? !1,
    onChange: i,
    caller: pi
  });
  return /* @__PURE__ */ u(
    l0,
    {
      scope: e,
      triggerId: Oe(),
      triggerRef: l,
      contentId: Oe(),
      open: f,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ u(Yb, { ...c, open: f, onOpenChange: d, dir: o, modal: s, children: r })
    }
  );
}, "DropdownMenu"), d0 = "DropdownMenuTrigger", f0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(e, r) {
    const { __scopeDropdownMenu: o, disabled: n = !1, ...a } = e, i = Pu(d0, o), s = Ve(o), c = Y(r, i.triggerRef);
    return /* @__PURE__ */ u(Qb, { asChild: !0, ...s, children: /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...a,
        ref: c,
        onPointerDown: F(e.onPointerDown, (l) => {
          !n && l.button === 0 && l.ctrlKey === !1 && (i.onOpenToggle(), i.open || l.preventDefault());
        }),
        onKeyDown: F(e.onKeyDown, (l) => {
          n || (["Enter", " "].includes(l.key) && i.onOpenToggle(), l.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), p0 = /* @__PURE__ */ Le((t) => {
  const { __scopeDropdownMenu: e, ...r } = t, o = Ve(e);
  return /* @__PURE__ */ u(Xb, { ...o, ...r });
}, "DropdownMenuPortal"), m0 = "DropdownMenuContent", h0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(e, r) {
    const { __scopeDropdownMenu: o, ...n } = e, a = Pu(m0, o), i = Ve(o), s = m.useRef(!1);
    return /* @__PURE__ */ u(
      jb,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...i,
        ...n,
        ref: r,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (c) => {
          var l;
          s.current || (l = a.triggerRef.current) == null || l.focus(), s.current = !1, c.preventDefault();
        }),
        onInteractOutside: F(e.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, f = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || f;
          (!a.modal || d) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), g0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(e, r) {
    const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
    return /* @__PURE__ */ u(Kb, { ...a, ...n, ref: r });
  }, "DropdownMenuGroup")
), b0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(e, r) {
    const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
    return /* @__PURE__ */ u(qb, { ...a, ...n, ref: r });
  }, "DropdownMenuLabel")
), v0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(e, r) {
    const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
    return /* @__PURE__ */ u(Jb, { ...a, ...n, ref: r });
  }, "DropdownMenuItem")
), x0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(Zb, { ...a, ...n, ref: r });
}, "DropdownMenuCheckboxItem")), w0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(e0, { ...a, ...n, ref: r });
}, "DropdownMenuRadioGroup")), y0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(t0, { ...a, ...n, ref: r });
}, "DropdownMenuRadioItem")), C0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(r0, { ...a, ...n, ref: r });
}, "DropdownMenuItemIndicator")), A0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(o0, { ...a, ...n, ref: r });
}, "DropdownMenuSeparator")), S0 = /* @__PURE__ */ Le((t) => {
  const { __scopeDropdownMenu: e, children: r, open: o, onOpenChange: n, defaultOpen: a } = t, i = Ve(e), [s, c] = xe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: n,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ u(n0, { ...i, open: s, onOpenChange: c, children: r });
}, "DropdownMenuSub"), _0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(a0, { ...a, ...n, ref: r });
}, "DropdownMenuSubTrigger")), k0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Le(function(e, r) {
  const { __scopeDropdownMenu: o, ...n } = e, a = Ve(o);
  return /* @__PURE__ */ u(
    i0,
    {
      ...a,
      ...n,
      ref: r,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "DropdownMenuSubContent")), R0 = u0, Zs = f0, Iu = p0, E0 = h0, P0 = g0, I0 = b0, T0 = v0, M0 = x0, D0 = w0, N0 = y0, Tu = C0, O0 = A0, $0 = S0, B0 = _0, z0 = k0;
const Wo = no(null), Mu = {}, F0 = {
  theme: "light",
  tokens: Mu,
  locale: "en-US",
  direction: "ltr"
}, L0 = (t) => Object.fromEntries(
  Object.entries(t).map(([e, r]) => [
    e.startsWith("--") ? e : `--su-${e}`,
    r
  ])
);
function V0({
  children: t,
  theme: e,
  locale: r,
  direction: o,
  tokens: n = Mu,
  target: a,
  className: i,
  style: s
}) {
  const c = Ar(Wo), l = pe(null), f = e ?? (c == null ? void 0 : c.theme) ?? "light", d = r ?? (c == null ? void 0 : c.locale) ?? "en-US", p = o ?? (c == null ? void 0 : c.direction) ?? "ltr", h = Fe(() => L0(n), [n]), b = Fe(
    () => ({
      theme: f,
      locale: d,
      direction: p,
      tokens: { ...c == null ? void 0 : c.tokens, ...h }
    }),
    [f, d, p, h, c]
  );
  return Ha(() => {
    const g = a ?? (c ? l.current : document.documentElement);
    if (!g) return;
    const v = ["data-theme", "lang", "dir"].map(
      (y) => [y, g.getAttribute(y)]
    );
    g.setAttribute("data-theme", f), g.setAttribute("lang", d), g.setAttribute("dir", p);
    const w = [];
    for (const [y, x] of Object.entries(h))
      w.push([y, g.style.getPropertyValue(y)]), g.style.setProperty(y, x);
    return () => {
      for (const [y, x] of v)
        x === null ? g.removeAttribute(y) : g.setAttribute(y, x);
      for (const [y, x] of w)
        x ? g.style.setProperty(y, x) : g.style.removeProperty(y);
    };
  }, [f, d, p, h, a, !!c]), !c && !i && !s ? /* @__PURE__ */ u(Wo.Provider, { value: b, children: t }) : /* @__PURE__ */ u(Wo.Provider, { value: b, children: /* @__PURE__ */ u(Om, { dir: p, children: /* @__PURE__ */ u(
    "div",
    {
      ref: l,
      className: i,
      style: { ...h, ...s },
      "data-theme": f,
      lang: d,
      dir: p,
      "data-su-config": "",
      children: t
    }
  ) }) });
}
function Mr() {
  return Ar(Wo) ?? F0;
}
function PA(t) {
  const { direction: e } = Mr();
  return /* @__PURE__ */ u(R0, { dir: e, ...t });
}
const ec = "data-[state=open]:shadow-[inset_0_0_0_2px_var(--su-accent)]";
function IA({
  className: t,
  asChild: e,
  children: r,
  variant: o,
  size: n,
  icon: a,
  iconPlacement: i,
  ...s
}) {
  return e ? /* @__PURE__ */ u(
    Zs,
    {
      asChild: !0,
      className: M(ec, t),
      ...s,
      children: r
    }
  ) : /* @__PURE__ */ u(Zs, { asChild: !0, children: /* @__PURE__ */ u(
    Be,
    {
      variant: o,
      size: n,
      icon: a,
      iconPlacement: i,
      className: M(ec, t),
      ...s,
      children: r
    }
  ) });
}
const Du = "su-popover min-w-[max(180px,var(--radix-dropdown-menu-trigger-width,0px))] max-w-[min(calc(100vw-var(--su-space-4)),320px)] max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-y-auto overscroll-contain origin-[var(--radix-dropdown-menu-content-transform-origin)] animate-su-pop-in animate-duration-[var(--su-duration-base)] data-[state=closed]:animate-reverse data-[state=closed]:animate-duration-[var(--su-duration-fast)] motion-reduce:animate-none";
function TA({
  className: t,
  sideOffset: e = 8,
  align: r = "start",
  collisionPadding: o = 8,
  container: n,
  forceMount: a,
  ...i
}) {
  return /* @__PURE__ */ u(Iu, { container: n, forceMount: a, children: /* @__PURE__ */ u(
    E0,
    {
      sideOffset: e,
      align: r,
      collisionPadding: o,
      forceMount: a,
      className: M(Du, t),
      ...i
    }
  ) });
}
const wn = "flex items-center gap-su2 min-h-[var(--su-control-md)] [@media(hover:none)]:min-h-[var(--su-hit-target)] px-su3 py-su1 rounded-none text-label text-subhead outline-none cursor-default select-none transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] data-[highlighted]:bg-ink data-[highlighted]:text-paper contrast-more:data-[highlighted]:bg-label contrast-more:data-[highlighted]:text-paper data-[disabled]:text-label-tertiary data-[disabled]:cursor-not-allowed", U0 = "text-danger-text data-[highlighted]:!bg-danger-strong data-[highlighted]:!text-on-action";
function MA({ className: t, danger: e, ...r }) {
  return /* @__PURE__ */ u(
    T0,
    {
      className: M(wn, e && U0, t),
      ...r
    }
  );
}
function DA({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    O0,
    {
      className: M("h-px my-su1 -mx-su1 su-rule", t),
      ...e
    }
  );
}
function NA({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    I0,
    {
      className: M(
        "su-label pt-su2 px-su3 pb-su1 text-label-secondary",
        t
      ),
      ...e
    }
  );
}
function OA(t) {
  return /* @__PURE__ */ u(P0, { ...t });
}
function $A(t) {
  return /* @__PURE__ */ u($0, { ...t });
}
function BA({
  className: t,
  children: e,
  ...r
}) {
  return /* @__PURE__ */ $(
    B0,
    {
      className: M(
        wn,
        "data-[state=open]:bg-fill-secondary data-[state=open]:text-label",
        t
      ),
      ...r,
      children: [
        e,
        /* @__PURE__ */ u(
          "svg",
          {
            className: "ms-auto shrink-0 rtl:-scale-x-100",
            viewBox: "0 0 12 12",
            width: "12",
            height: "12",
            "aria-hidden": "true",
            children: /* @__PURE__ */ u(
              "path",
              {
                d: "M4.75 3 7.75 6l-3 3",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "square"
              }
            )
          }
        )
      ]
    }
  );
}
function zA({
  className: t,
  sideOffset: e = 4,
  ...r
}) {
  return /* @__PURE__ */ u(Iu, { children: /* @__PURE__ */ u(
    z0,
    {
      sideOffset: e,
      className: M(Du, t),
      ...r
    }
  ) });
}
const Nu = "absolute start-su2 top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-accent", Ou = "relative ps-su6";
function FA({
  className: t,
  children: e,
  ...r
}) {
  return /* @__PURE__ */ $(
    M0,
    {
      className: M(wn, Ou, t),
      ...r,
      children: [
        /* @__PURE__ */ u(Tu, { className: Nu }),
        e
      ]
    }
  );
}
function LA(t) {
  return /* @__PURE__ */ u(D0, { ...t });
}
function VA({
  className: t,
  children: e,
  ...r
}) {
  return /* @__PURE__ */ $(
    N0,
    {
      className: M(wn, Ou, t),
      ...r,
      children: [
        /* @__PURE__ */ u(Tu, { className: Nu }),
        e
      ]
    }
  );
}
var W0 = Object.defineProperty, lo = (t, e) => W0(t, "name", { value: e, configurable: !0 }), mi = "Collapsible", [H0, $u] = /* @__PURE__ */ ge(mi), [G0, hi] = H0(mi), Y0 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ lo(function(e, r) {
    const {
      __scopeCollapsible: o,
      open: n,
      defaultOpen: a,
      disabled: i,
      onOpenChange: s,
      ...c
    } = e, [l, f] = xe({
      prop: n,
      defaultProp: a ?? !1,
      onChange: s,
      caller: mi
    });
    return /* @__PURE__ */ u(
      G0,
      {
        scope: o,
        disabled: i,
        contentId: Oe(),
        open: l,
        onOpenToggle: m.useCallback(() => f((d) => !d), [f]),
        children: /* @__PURE__ */ u(
          W.div,
          {
            "data-state": yn(l),
            "data-disabled": i ? "" : void 0,
            ...c,
            ref: r
          }
        )
      }
    );
  }, "Collapsible")
), Q0 = "CollapsibleTrigger", X0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ lo(function(e, r) {
    const { __scopeCollapsible: o, ...n } = e, a = hi(Q0, o);
    return /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        "aria-controls": a.open ? a.contentId : void 0,
        "aria-expanded": a.open || !1,
        "data-state": yn(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...n,
        ref: r,
        onClick: F(e.onClick, a.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
), Bu = "CollapsibleContent", j0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ lo(function(e, r) {
    const { forceMount: o, ...n } = e, a = hi(Bu, e.__scopeCollapsible);
    return /* @__PURE__ */ u(we, { present: o || a.open, children: ({ present: i }) => /* @__PURE__ */ u(K0, { ...n, ref: r, present: i }) });
  }, "CollapsibleContent")
), K0 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ lo(function(e, r) {
  const { __scopeCollapsible: o, present: n, children: a, ...i } = e, s = hi(Bu, o), [c, l] = m.useState(n), f = m.useRef(null), d = Y(r, f), p = m.useRef(0), h = p.current, b = m.useRef(0), g = b.current, v = s.open || c, w = m.useRef(v), y = m.useRef(void 0);
  return m.useEffect(() => {
    const x = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), de(() => {
    const x = f.current;
    if (x) {
      y.current = y.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const C = x.getBoundingClientRect();
      p.current = C.height, b.current = C.width, w.current || (x.style.transitionDuration = y.current.transitionDuration, x.style.animationName = y.current.animationName), l(n);
    }
  }, [s.open, n]), /* @__PURE__ */ u(
    W.div,
    {
      "data-state": yn(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: v && a
    }
  );
}, "CollapsibleContentImpl"));
function yn(t) {
  return t ? "open" : "closed";
}
lo(yn, "getState");
var zu = Y0, Fu = X0, Lu = j0;
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var q0 = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = (t, e, r, o) => {
  const n = Ke(
    ({ color: a = "currentColor", size: i = 24, stroke: s = 2, title: c, className: l, children: f, ...d }, p) => Fn(
      "svg",
      {
        ref: p,
        ...q0[t],
        width: i,
        height: i,
        className: ["tabler-icon", `tabler-icon-${e}`, l].join(" "),
        strokeWidth: s,
        stroke: a,
        ...d
      },
      [
        c && Fn("title", { key: "svg-title" }, c),
        ...o.map(([h, b]) => Fn(h, b)),
        ...Array.isArray(f) ? f : [f]
      ]
    )
  );
  return n.displayName = `${r}`, n;
};
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Z0 = Ut("outline", "alert-triangle", "AlertTriangle", J0);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], tv = Ut("outline", "check", "Check", ev);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rv = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ov = Ut("outline", "chevron-down", "ChevronDown", rv);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], av = Ut("outline", "circle-check", "CircleCheck", nv);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iv = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M10 10l4 4m0 -4l-4 4", key: "svg-1" }]], sv = Ut("outline", "circle-x", "CircleX", iv);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cv = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 9h.01", key: "svg-1" }], ["path", { d: "M11 12h1v4h1", key: "svg-2" }]], lv = Ut("outline", "info-circle", "InfoCircle", cv);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uv = [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]], dv = Ut("outline", "upload", "Upload", uv);
/**
 * @license @tabler/icons-react v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fv = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Cn = Ut("outline", "x", "X", fv), pv = "group relative flex items-center gap-su3 w-full min-h-[var(--su-hit-target)] ps-[calc(var(--su-space-3)+var(--su-menu-depth)*var(--su-space-6))] pe-su3 text-subhead text-start no-underline transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] disabled:opacity-45 disabled:cursor-not-allowed";
function Vu(t) {
  return M(
    pv,
    t.selected ? "bg-accent-soft before:absolute before:inset-y-0 before:start-0 before:w-[2px] before:bg-accent before:content-[''] contrast-more:underline contrast-more:underline-offset-4" : "bg-transparent hover:not-disabled:bg-fill-quaternary active:not-disabled:bg-fill-tertiary [@media(hover:none)]:active:not-disabled:bg-fill-secondary",
    t.selected ? "text-accent font-medium" : t.danger ? "text-danger-text" : t.trail ? "text-accent" : "text-label-secondary hover:not-disabled:text-label"
  );
}
const mv = "su-label block text-label-secondary ps-[calc(var(--su-space-3)+var(--su-menu-depth)*var(--su-space-6))] pe-su3 pt-su3 pb-su1";
function Uu(t, e) {
  return e ? t.some(
    (r) => r.key === e || Uu(r.children ?? [], e)
  ) : !1;
}
function Aa(t) {
  return /* @__PURE__ */ $(ve, { children: [
    t.icon && /* @__PURE__ */ u(Mt, { size: "sm", className: "shrink-0", children: t.icon }),
    /* @__PURE__ */ u("span", { className: "flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap", children: t.label })
  ] });
}
function Sa(t) {
  return t.title ?? (typeof t.label == "string" ? t.label : void 0);
}
function hv({
  item: t,
  selectedKey: e,
  depth: r,
  onSelect: o
}) {
  const n = Uu(t.children ?? [], e) && !t.disabled, [a, i] = Q(n);
  return le(() => {
    n && i(!0);
  }, [n]), /* @__PURE__ */ $(zu, { open: a, onOpenChange: i, disabled: t.disabled, children: [
    /* @__PURE__ */ $(
      Fu,
      {
        className: Vu({ trail: n && !a }),
        title: Sa(t),
        children: [
          Aa(t),
          /* @__PURE__ */ u(
            Mt,
            {
              size: "sm",
              className: "shrink-0 text-label-tertiary transition-transform duration-[var(--su-duration-normal)] ease-[var(--su-ease-out)] group-data-[state=open]:rotate-180",
              children: /* @__PURE__ */ u(ov, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u(Lu, { className: "overflow-hidden data-[state=open]:animate-su-collapse-down data-[state=closed]:animate-su-collapse-up motion-reduce:animate-none", children: /* @__PURE__ */ u(
      gi,
      {
        items: t.children ?? [],
        selectedKey: e,
        depth: r + 1,
        onSelect: o
      }
    ) })
  ] });
}
function gi({ items: t, selectedKey: e, depth: r, onSelect: o, className: n }) {
  const a = { "--su-menu-depth": r };
  return /* @__PURE__ */ u("ul", { className: M("flex flex-col m-0 p-0 list-none", n), style: a, children: t.map((i) => {
    var l, f;
    if (i.type === "divider")
      return /* @__PURE__ */ u(
        "li",
        {
          role: "separator",
          className: "h-px my-su1 su-rule"
        },
        i.key
      );
    if (i.type === "group")
      return /* @__PURE__ */ $("li", { children: [
        /* @__PURE__ */ u("span", { className: mv, children: i.label }),
        (l = i.children) != null && l.length ? /* @__PURE__ */ u(
          gi,
          {
            items: i.children,
            selectedKey: e,
            depth: r,
            onSelect: o
          }
        ) : null
      ] }, i.key);
    if ((f = i.children) != null && f.length)
      return /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
        hv,
        {
          item: i,
          selectedKey: e,
          depth: r,
          onSelect: o
        }
      ) }, i.key);
    const s = e === i.key, c = Vu({ selected: s, danger: i.danger });
    return /* @__PURE__ */ u("li", { children: i.href && !i.disabled ? /* @__PURE__ */ u(
      "a",
      {
        href: i.href,
        className: c,
        title: Sa(i),
        "aria-current": s ? "page" : void 0,
        onClick: (d) => o == null ? void 0 : o(i.key, d),
        children: Aa(i)
      }
    ) : /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        disabled: i.disabled,
        className: c,
        title: Sa(i),
        "aria-current": s ? "true" : void 0,
        onClick: (d) => o == null ? void 0 : o(i.key, d),
        children: Aa(i)
      }
    ) }, i.key);
  }) });
}
function UA({ items: t, selectedKey: e, onSelect: r, className: o, ...n }) {
  return t.length ? /* @__PURE__ */ u(
    "nav",
    {
      className: M(
        "border border-solid border-rule-strong bg-paper text-ink font-sans",
        o
      ),
      "aria-label": "Menu",
      ...n,
      children: /* @__PURE__ */ u(
        gi,
        {
          items: t,
          selectedKey: e,
          depth: 0,
          onSelect: r,
          className: "p-su2"
        }
      )
    }
  ) : null;
}
function No(t, e) {
  return Array.from({ length: Math.max(0, e - t + 1) }, (r, o) => t + o);
}
function gv(t, e, r) {
  if (e <= 1) return e === 1 ? [1] : [];
  const o = 2 * r + 5;
  if (e <= o) return No(1, e);
  const n = 2 * r + 3;
  return t <= r + 3 ? [...No(1, n), "ellipsis", e] : t >= e - (r + 2) ? [1, "ellipsis", ...No(e - n + 1, e)] : [1, "ellipsis", ...No(t - r, t + r), "ellipsis", e];
}
const Wu = "su-hit-44 inline-flex items-center justify-center h-[var(--su-control-sm)] min-w-[var(--su-control-sm)] px-su1 select-none font-mono text-caption-1 tabular-nums", tc = M(
  Wu,
  "m-0 cursor-pointer",
  "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
  "su-focus-ring",
  "[&[aria-disabled='true']]:(text-label-quaternary cursor-not-allowed pointer-events-none)"
), rc = "bg-transparent text-label-secondary hover:bg-fill-tertiary hover:text-label contrast-more:shadow-[0_0_0_1px_var(--su-label)]", bv = "bg-ink text-paper contrast-more:shadow-[0_0_0_2px_var(--su-label)]";
function vv({ back: t }) {
  return /* @__PURE__ */ u(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true",
      focusable: "false",
      className: "rtl:rotate-180",
      children: /* @__PURE__ */ u("path", { d: t ? "M9 3L5 7l4 4" : "M5 3l4 4-4 4" })
    }
  );
}
function WA({
  current: t,
  total: e,
  totalPages: r,
  pageSize: o,
  onChange: n,
  siblingCount: a = 1,
  disabled: i,
  hideOnSinglePage: s,
  className: c,
  ...l
}) {
  const f = o ? Math.ceil((e ?? 0) / o) : r ?? e ?? 1, d = Math.max(0, Math.trunc(f) || 0), p = Math.min(Math.max(1, Math.trunc(t) || 1), Math.max(1, d)), h = gv(p, d, a);
  if (h.length === 0 || s && d <= 1) return null;
  const b = p > 1, g = p < d, v = (x) => {
    i || x < 1 || x > d || x === p || n == null || n(x, o);
  }, w = (x) => {
    const C = x.currentTarget.closest("[dir='rtl']") !== null, E = C ? "ArrowRight" : "ArrowLeft", k = C ? "ArrowLeft" : "ArrowRight", A = {
      [E]: p - 1,
      [k]: p + 1,
      ArrowUp: p - 1,
      ArrowDown: p + 1,
      Home: 1,
      End: d
    }[x.key];
    A !== void 0 && (x.preventDefault(), v(A));
  }, y = (x) => {
    const C = x === "prev" ? b : g;
    return /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: M(tc, rc),
        "aria-disabled": !C || i || void 0,
        "aria-label": x === "prev" ? "Previous page" : "Next page",
        title: x === "prev" ? "Previous page" : "Next page",
        onClick: () => v(x === "prev" ? p - 1 : p + 1),
        children: /* @__PURE__ */ u(vv, { back: x === "prev" })
      }
    ) });
  };
  return /* @__PURE__ */ $(
    "nav",
    {
      className: M(
        "inline-flex flex-wrap items-center justify-center max-w-full",
        i && "opacity-40 pointer-events-none",
        c
      ),
      "aria-label": "Pagination",
      "aria-busy": i || void 0,
      onKeyDown: w,
      ...l,
      children: [
        /* @__PURE__ */ $("ul", { role: "list", className: "flex flex-wrap items-center justify-center gap-su3 m-0 p-0 list-none", children: [
          y("prev"),
          h.map(
            (x, C) => x === "ellipsis" ? /* @__PURE__ */ u("li", { children: /* @__PURE__ */ $("span", { className: M(Wu, "text-label-secondary [&::after]:hidden"), children: [
              /* @__PURE__ */ u("span", { "aria-hidden": "true", children: "…" }),
              /* @__PURE__ */ u("span", { className: "sr-only", children: "More pages" })
            ] }) }, C === 1 ? "ellipsis-start" : "ellipsis-end") : /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(
              "button",
              {
                type: "button",
                className: M(tc, x === p ? bv : rc),
                "aria-label": `Page ${x}`,
                "aria-current": x === p ? "page" : void 0,
                "aria-disabled": i || void 0,
                onClick: () => v(x),
                children: x
              }
            ) }, x)
          ),
          y("next")
        ] }),
        /* @__PURE__ */ u("span", { className: "sr-only", "aria-live": "polite", children: `Page ${p} of ${d}` })
      ]
    }
  );
}
const Hu = "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none", xv = {
  wait: "text-ink-2 shadow-[inset_0_0_0_1px_var(--su-rule-strong)]",
  process: "bg-action text-on-action shadow-[inset_0_0_0_1px_var(--su-action-edge)]",
  finish: "bg-ink text-paper",
  error: "bg-danger-strong text-on-action"
}, wv = M(
  "inline-flex items-center justify-center shrink-0 size-[var(--su-control-sm)]",
  // Brand: indices are Martian Mono at the label spec, tabular so 1 and 8 align.
  "su-label tabular-nums",
  Hu
), yv = {
  wait: "not started",
  process: "current",
  finish: "completed",
  error: "error"
};
function HA({
  current: t = 0,
  items: e,
  direction: r = "horizontal",
  status: o = "process",
  className: n,
  ...a
}) {
  if (e.length === 0) return null;
  const i = r !== "vertical", s = Math.trunc(t);
  return /* @__PURE__ */ u(
    "nav",
    {
      className: M("w-full font-sans", n),
      "aria-label": "Progress",
      ...a,
      children: /* @__PURE__ */ u(
        "ol",
        {
          role: "list",
          className: M(
            "flex flex-col items-stretch w-full m-0 p-0 list-none",
            i && "min-[533px]:flex-row min-[533px]:items-start min-[533px]:gap-su3"
          ),
          children: e.map((c, l) => {
            const f = c.status ?? (l < s ? "finish" : l > s ? "wait" : o), d = l === e.length - 1;
            return /* @__PURE__ */ $(
              "li",
              {
                className: M(
                  "relative flex items-start gap-su3 min-w-0",
                  i && (d ? "min-[533px]:flex-[0_1_auto]" : "min-[533px]:flex-[1_1_auto]")
                ),
                "data-status": f,
                "aria-current": l === s ? "step" : void 0,
                children: [
                  /* @__PURE__ */ u(
                    "span",
                    {
                      className: M(wv, xv[f]),
                      "aria-hidden": "true",
                      children: c.icon ?? (f === "finish" ? /* @__PURE__ */ u(Mt, { size: "sm", children: /* @__PURE__ */ u(tv, {}) }) : f === "error" ? /* @__PURE__ */ u(Mt, { size: "sm", children: /* @__PURE__ */ u(Cn, {}) }) : l + 1)
                    }
                  ),
                  /* @__PURE__ */ $(
                    "div",
                    {
                      className: M(
                        // Optical centring against the line box the title actually renders.
                        "grow min-w-0 pt-[calc((var(--su-control-sm)-var(--su-text-subhead)*var(--su-leading-normal))/2)]",
                        i && "min-[533px]:grow-0",
                        !d && "pb-su6",
                        !d && i && "min-[533px]:pb-0"
                      ),
                      children: [
                        /* @__PURE__ */ u("span", { className: "sr-only", children: `Step ${l + 1} of ${e.length}, ${yv[f]}: ` }),
                        /* @__PURE__ */ u(
                          "span",
                          {
                            className: M(
                              "block text-subhead font-medium leading-[var(--su-leading-normal)] break-words",
                              f === "wait" ? "text-ink-2" : "text-ink"
                            ),
                            children: c.title
                          }
                        ),
                        c.description ? /* @__PURE__ */ u("span", { className: "block mt-su1 text-ink-2 text-footnote leading-[var(--su-leading-normal)] break-words", children: c.description }) : null
                      ]
                    }
                  ),
                  d ? null : /* @__PURE__ */ u(
                    "span",
                    {
                      className: M(
                        "absolute [inset-inline-start:calc((var(--su-control-sm)-1px)/2)] top-[calc(var(--su-control-sm)+var(--su-space-1))] bottom-0 w-px",
                        i && "min-[533px]:static min-[533px]:h-px min-[533px]:w-auto min-[533px]:flex-[1_1_0%] min-[533px]:self-start min-[533px]:min-w-[var(--su-space-4)] min-[533px]:mt-[calc((var(--su-control-sm)-1px)/2)]",
                        f === "finish" ? "bg-ink" : "bg-rule-strong",
                        Hu
                      ),
                      "aria-hidden": "true"
                    }
                  )
                ]
              },
              c.key ?? l
            );
          })
        }
      )
    }
  );
}
var Cv = Object.defineProperty, Dr = (t, e) => Cv(t, "name", { value: e, configurable: !0 }), bi = "Tabs", [Av, GA] = /* @__PURE__ */ ge(bi, [
  Lt
]), Gu = Lt(), [Sv, vi] = Av(bi), _v = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Dr(function(e, r) {
    const {
      __scopeTabs: o,
      value: n,
      onValueChange: a,
      defaultValue: i,
      orientation: s = "horizontal",
      dir: c,
      activationMode: l = "automatic",
      ...f
    } = e, d = ct(c), [p, h] = xe({
      prop: n,
      onChange: a,
      defaultProp: i ?? "",
      caller: bi
    });
    return /* @__PURE__ */ u(
      Sv,
      {
        scope: o,
        baseId: Oe(),
        value: p,
        onValueChange: h,
        orientation: s,
        dir: d,
        activationMode: l,
        children: /* @__PURE__ */ u(
          W.div,
          {
            dir: d,
            "data-orientation": s,
            ...f,
            ref: r
          }
        )
      }
    );
  }, "Tabs")
), kv = "TabsList", Rv = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Dr(function(e, r) {
    const { __scopeTabs: o, loop: n = !0, ...a } = e, i = vi(kv, o), s = Gu(o);
    return /* @__PURE__ */ u(
      pn,
      {
        asChild: !0,
        ...s,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ u(
          W.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...a,
            ref: r
          }
        )
      }
    );
  }, "TabsList")
), Ev = "TabsTrigger", Pv = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Dr(function(e, r) {
    const { __scopeTabs: o, value: n, disabled: a = !1, ...i } = e, s = vi(Ev, o), c = Gu(o), l = xi(s.baseId, n), f = wi(s.baseId, n), d = n === s.value;
    return /* @__PURE__ */ u(
      mn,
      {
        asChild: !0,
        ...c,
        focusable: !a,
        active: d,
        children: /* @__PURE__ */ u(
          W.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": f,
            "data-state": d ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: l,
            ...i,
            ref: r,
            onMouseDown: F(e.onMouseDown, (p) => {
              !a && p.button === 0 && p.ctrlKey === !1 ? s.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: F(e.onKeyDown, (p) => {
              a || p.target !== p.currentTarget || [" ", "Enter"].includes(p.key) && s.onValueChange(n);
            }),
            onFocus: F(e.onFocus, () => {
              const p = s.activationMode !== "manual";
              !d && !a && p && s.onValueChange(n);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), Iv = "TabsContent", Tv = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Dr(function(e, r) {
    const { __scopeTabs: o, value: n, forceMount: a, children: i, ...s } = e, c = vi(Iv, o), l = xi(c.baseId, n), f = wi(c.baseId, n), d = n === c.value, p = m.useRef(d);
    return m.useEffect(() => {
      const h = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u(we, { present: a || d, children: ({ present: h }) => /* @__PURE__ */ u(
      W.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !h,
        id: f,
        tabIndex: 0,
        ...s,
        ref: r,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: h && i
      }
    ) });
  }, "TabsContent")
);
function xi(t, e) {
  return `${t}-trigger-${e}`;
}
Dr(xi, "makeTriggerId");
function wi(t, e) {
  return `${t}-content-${e}`;
}
Dr(wi, "makeContentId");
var Mv = _v, Dv = Rv, Nv = Pv, Ov = Tv;
function YA({ className: t, dir: e, ...r }) {
  const { direction: o } = Mr();
  return /* @__PURE__ */ u(
    Mv,
    {
      dir: e ?? o,
      className: M(
        "font-sans data-[orientation=vertical]:flex data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-su4",
        t
      ),
      ...r
    }
  );
}
const $v = "min-w-0 flex-1 overflow-x-auto py-[5px] -my-[5px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
function QA({ className: t, extra: e, ...r }) {
  return /* @__PURE__ */ $("div", { className: "flex max-w-full items-stretch", children: [
    /* @__PURE__ */ u("div", { className: $v, children: /* @__PURE__ */ u(
      Dv,
      {
        className: M(
          "flex w-max min-w-full gap-su4 border-b border-b-solid border-b-rule",
          "data-[orientation=vertical]:w-auto data-[orientation=vertical]:min-w-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r data-[orientation=vertical]:border-r-solid data-[orientation=vertical]:border-r-rule",
          t
        ),
        ...r
      }
    ) }),
    e ? /* @__PURE__ */ u("div", { className: "shrink-0 self-center ps-su4", children: e }) : null
  ] });
}
function XA({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    Nv,
    {
      className: M(
        "relative inline-flex shrink-0 items-center justify-center gap-su2 whitespace-nowrap min-h-[var(--su-hit-target)] min-w-[var(--su-hit-target)] px-su2 [appearance:none] rounded-none bg-transparent text-label-secondary font-sans text-subhead font-medium cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
        "[@media(hover:hover)]:hover:text-label",
        "disabled:text-label-tertiary disabled:cursor-not-allowed",
        "data-[state=active]:text-label",
        // Indicator is always present so it can draw in instead of popping.
        "after:content-[''] after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[2px] after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-[var(--su-duration-base)] after:ease-[var(--su-ease-out)]",
        "data-[state=active]:after:scale-x-100",
        "contrast-more:data-[state=active]:after:h-[3px]",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
        "data-[orientation=vertical]:after:inset-y-0 data-[orientation=vertical]:after:inset-x-auto data-[orientation=vertical]:after:right-[-1px] data-[orientation=vertical]:after:w-[2px] data-[orientation=vertical]:after:h-auto",
        t
      ),
      ...e
    }
  );
}
function jA({ className: t, ...e }) {
  return /* @__PURE__ */ u(
    Ov,
    {
      className: M(
        "mt-su4 su-focus-ring text-label text-body",
        "data-[state=active]:animate-su-fade-in motion-reduce:animate-none",
        "data-[orientation=vertical]:mt-0 data-[orientation=vertical]:flex-1 data-[orientation=vertical]:min-w-0",
        t
      ),
      ...e
    }
  );
}
function Yu(t, e, r = !0) {
  le(() => {
    if (!r) return;
    const o = (n) => {
      t.current && !t.current.contains(n.target) && e();
    };
    return document.addEventListener("pointerdown", o), () => document.removeEventListener("pointerdown", o);
  }, [t, e, r]);
}
var Bv = Object.defineProperty, zv = (t, e) => Bv(t, "name", { value: e, configurable: !0 }), Fv = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ zv(function(e, r) {
    return /* @__PURE__ */ u(
      W.label,
      {
        ...e,
        ref: r,
        onMouseDown: (o) => {
          var a;
          o.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, o), !o.defaultPrevented && o.detail > 1 && o.preventDefault());
        }
      }
    );
  }, "Label")
), Lv = Fv;
const Qu = no({ layout: "vertical" }), Xu = no(null);
function At() {
  return Ar(Qu);
}
function Ee() {
  return Ar(Xu);
}
function tt(t, e) {
  const r = At();
  return {
    size: t ?? r.size ?? "lg",
    disabled: e ?? r.disabled
  };
}
const _a = "block mb-su1 su-label text-ink-2", Vv = {
  sm: "min-h-[var(--su-control-sm)]",
  md: "min-h-[var(--su-control-md)]",
  lg: "min-h-[var(--su-control-lg)]"
};
function KA({
  layout: t = "vertical",
  disabled: e,
  size: r = "lg",
  labelWidth: o,
  className: n,
  style: a,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ u(Qu.Provider, { value: { layout: t, disabled: e, size: r }, children: /* @__PURE__ */ u(
    "form",
    {
      className: M(
        "flex flex-col",
        t === "horizontal" ? "gap-su3" : "gap-su4",
        n
      ),
      style: o != null ? {
        ...a,
        "--su-form-label-width": typeof o == "number" ? `${o}px` : o
      } : a,
      ...s,
      children: i
    }
  ) });
}
function oc({ className: t, children: e, ...r }) {
  const o = Ee();
  return /* @__PURE__ */ $(
    Lv,
    {
      htmlFor: o == null ? void 0 : o.id,
      id: o == null ? void 0 : o.labelId,
      className: M(_a, t),
      ...r,
      children: [
        e,
        (o == null ? void 0 : o.required) && /* @__PURE__ */ u("span", { className: "text-danger-text ml-[2px]", "aria-hidden": "true", children: "*" })
      ]
    }
  );
}
function qA({
  label: t,
  required: e,
  help: r,
  error: o,
  className: n,
  children: a
}) {
  const { layout: i, size: s = "lg" } = At(), c = oo(), l = i === "horizontal";
  return /* @__PURE__ */ u(
    Xu.Provider,
    {
      value: {
        id: c,
        required: e,
        error: o,
        descriptionId: o || r ? `${c}-description` : void 0,
        labelId: t != null ? `${c}-label` : void 0
      },
      children: /* @__PURE__ */ $(
        "div",
        {
          className: M(
            // the wrapper gap is the single source of the label/field gap inside an
            // item; the label's own bottom margin (for standalone use) is zeroed.
            "flex [&>label]:mb-0",
            l ? "flex-row items-start gap-su4" : "flex-col gap-su2",
            n
          ),
          children: [
            l ? (
              // always rendered, even unlabelled, so rows stay aligned in a mixed form
              /* @__PURE__ */ u(
                "div",
                {
                  className: M(
                    "flex items-center flex-[0_0_var(--su-form-label-width,120px)] [&>label]:mb-0",
                    Vv[s]
                  ),
                  children: t != null && /* @__PURE__ */ u(oc, { children: t })
                }
              )
            ) : t != null && /* @__PURE__ */ u(oc, { children: t }),
            /* @__PURE__ */ $("div", { className: l ? "flex-1 min-w-0" : void 0, children: [
              a,
              o ? /* @__PURE__ */ u(
                "div",
                {
                  id: `${c}-description`,
                  className: "text-caption-1 text-danger-text",
                  role: "alert",
                  children: o
                }
              ) : r && /* @__PURE__ */ u(
                "div",
                {
                  id: `${c}-description`,
                  className: "text-caption-1 text-label-tertiary",
                  children: r
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const uo = "w-full min-h-[var(--su-control-lg)] px-su3 border border-solid border-rule rounded-none bg-paper text-label font-sans text-body su-focus-ring transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:border-accent aria-invalid:border-danger placeholder:text-ink-3", Nr = {
  sm: "min-h-[var(--su-control-sm)] text-footnote",
  md: "min-h-[var(--su-control-md)]",
  lg: void 0
}, yi = "[&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 disabled:cursor-not-allowed", nc = "absolute flex items-center text-label-tertiary pointer-events-none [&_*]:pointer-events-auto";
function Uv({
  size: t,
  prefix: e,
  suffix: r,
  fullWidth: o = !0,
  allowClear: n,
  disabled: a,
  className: i,
  id: s,
  ref: c,
  onChange: l,
  "aria-describedby": f,
  "aria-invalid": d,
  ...p
}) {
  const h = Ee(), { size: b, disabled: g } = tt(t, a), v = pe(null), [w, y] = Q(() => String(p.defaultValue ?? "") !== ""), x = n === !0 && !g && (p.value != null ? String(p.value) !== "" : w), C = (k) => {
    v.current = k, typeof c == "function" ? c(k) : c && (c.current = k);
  }, E = () => {
    var S, A;
    const k = v.current;
    k && ((A = (S = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : S.set) == null || A.call(k, ""), k.dispatchEvent(new Event("input", { bubbles: !0 })), k.focus());
  };
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "relative flex items-center",
        o && "w-full",
        g && "opacity-45 cursor-not-allowed"
      ),
      children: [
        e && /* @__PURE__ */ u("span", { className: M(nc, "start-[var(--su-space-3)]"), children: e }),
        /* @__PURE__ */ u(
          "input",
          {
            id: s ?? (h == null ? void 0 : h.id),
            disabled: g,
            className: M(
              uo,
              Nr[b],
              e != null && "ps-su8",
              x ? "pe-11" : r != null && "pe-su8",
              i
            ),
            required: h == null ? void 0 : h.required,
            ...p,
            ref: C,
            onChange: n ? (k) => {
              y(k.target.value !== ""), l == null || l(k);
            } : l,
            "aria-describedby": f ?? (h == null ? void 0 : h.descriptionId),
            "aria-invalid": d ?? (h != null && h.error ? !0 : void 0)
          }
        ),
        x ? /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            "aria-label": "Clear",
            onClick: E,
            className: "absolute end-0 inset-y-0 flex items-center justify-center w-11 p-0 before:absolute before:content-[''] before:start-0 before:end-0 before:top-1/2 before:-translate-y-1/2 before:h-[var(--su-hit-target)] border-none bg-transparent font-sans text-body leading-none text-label-tertiary cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:text-ink",
            children: "×"
          }
        ) : r && /* @__PURE__ */ u("span", { className: M(nc, "end-[var(--su-space-3)]"), children: r })
      ]
    }
  );
}
function Wv(t, e) {
  return e.label.toLowerCase().includes(t.toLowerCase());
}
const ju = "absolute top-full left-0 right-0 z-[var(--su-z-dropdown)] overflow-y-auto overscroll-contain max-h-[min(var(--su-dropdown-max-h),50vh)] mt-su1 p-su1 border border-solid border-rule-strong contrast-more:border-2 rounded-none bg-paper shadow-none animate-su-dropdown-in motion-reduce:animate-none", ka = "px-su3 py-su3 su-label text-ink-2 text-start", Ku = "flex items-center w-full min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none bg-transparent text-ink text-body text-start [overflow-wrap:anywhere] cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-secondary data-[active]:bg-fill-secondary data-[active]:shadow-[inset_2px_0_0_var(--su-accent)] contrast-more:data-[active]:bg-accent contrast-more:data-[active]:text-on-action data-[disabled]:text-ink-3 data-[disabled]:opacity-45 data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed", qu = "No matches";
function JA({
  value: t,
  defaultValue: e = "",
  placeholder: r,
  disabled: o,
  size: n,
  options: a = [],
  filterOption: i = Wv,
  className: s,
  id: c,
  name: l,
  allowClear: f,
  loading: d,
  notFoundContent: p,
  "aria-label": h,
  "aria-labelledby": b,
  onChange: g,
  onSelect: v,
  onClear: w,
  onFocus: y,
  onBlur: x
}) {
  var H;
  const C = oo(), [E, k] = Q(e), [S, A] = Q(!1), [_, R] = Q(0), P = pe(null), I = pe(!0), T = t !== void 0, D = T ? t : E, z = D && I.current ? a.filter((U) => i(D, U)) : a, O = (U, te) => {
    const G = z.length;
    if (!G) return 0;
    let J = U;
    for (let Z = 0; Z < G; Z++)
      if (J = (J + te + G) % G, !z[J].disabled) return J;
    return Math.max(U, 0);
  }, N = Math.max(0, Math.min(_, z.length - 1)), B = (H = z[N]) != null && H.disabled ? O(N, 1) : N, V = z[B], L = (U) => {
    T || k(U), g == null || g(U);
  }, ee = (U) => {
    U.disabled || (I.current = !1, L(U.label), v == null || v(U.value, U), R(0), A(!1));
  };
  Yu(P, () => A(!1), S);
  const X = (U) => {
    if (!S) {
      (U.key === "ArrowDown" || U.key === "ArrowUp") && (U.preventDefault(), A(!0));
      return;
    }
    U.key === "ArrowDown" ? (U.preventDefault(), R(O(B, 1))) : U.key === "ArrowUp" ? (U.preventDefault(), R(O(B, -1))) : U.key === "Enter" ? (U.preventDefault(), V && !V.disabled ? ee(V) : A(!1)) : U.key === "Escape" && (U.preventDefault(), U.stopPropagation(), A(!1));
  }, j = !!(f && D && !o), oe = S && (d || z.length > 0 || a.length > 0);
  return /* @__PURE__ */ $("div", { ref: P, className: M("relative w-full", s), children: [
    /* @__PURE__ */ u(
      Uv,
      {
        id: c,
        name: l,
        role: "combobox",
        "aria-label": h,
        "aria-labelledby": b,
        "aria-expanded": S,
        "aria-controls": oe ? C : void 0,
        "aria-autocomplete": "list",
        "aria-activedescendant": oe && V ? `${C}-${B}` : void 0,
        className: M(j && "pr-[var(--su-hit-target)]"),
        value: D,
        placeholder: r,
        disabled: o,
        size: n,
        onChange: (U) => {
          I.current = !0, L(U.target.value), A(!0), R(0);
        },
        onFocus: (U) => {
          A(!0), y == null || y(U);
        },
        onClick: () => A(!0),
        onBlur: (U) => {
          var te;
          (te = P.current) != null && te.contains(U.relatedTarget) || A(!1), x == null || x(U);
        },
        onKeyDown: X,
        autoComplete: "off"
      }
    ),
    j && /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        "aria-label": "Clear",
        className: "absolute top-0 right-0 grid place-items-center h-full w-[var(--su-hit-target)] rounded-none bg-transparent text-ink-2 text-footnote cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:text-ink",
        onMouseDown: (U) => U.preventDefault(),
        onClick: () => {
          I.current = !0, L(""), w == null || w(), R(0), A(!0);
        },
        children: "✕"
      }
    ),
    /* @__PURE__ */ u(
      "span",
      {
        "aria-live": "polite",
        className: "absolute w-px h-px overflow-hidden [clip-path:inset(50%)]",
        children: S && !d ? `${z.length} suggestions` : ""
      }
    ),
    oe && /* @__PURE__ */ u(
      "div",
      {
        id: C,
        className: ju,
        role: "listbox",
        "aria-label": "Suggestions",
        "aria-busy": d || void 0,
        children: d ? /* @__PURE__ */ u("div", { className: ka, children: "Searching…" }) : z.length === 0 ? /* @__PURE__ */ u("div", { className: ka, children: p ?? qu }) : z.map((U, te) => /* @__PURE__ */ u(
          "button",
          {
            id: `${C}-${te}`,
            ref: te === B ? (G) => void (G == null ? void 0 : G.scrollIntoView({ block: "nearest" })) : void 0,
            tabIndex: -1,
            type: "button",
            role: "option",
            "aria-selected": U.label === D,
            "data-active": te === B || void 0,
            "aria-disabled": U.disabled || void 0,
            "data-disabled": U.disabled || void 0,
            className: Ku,
            onMouseDown: (G) => G.preventDefault(),
            onClick: () => ee(U),
            children: U.label
          },
          U.value
        ))
      }
    )
  ] });
}
var Hv = Object.defineProperty, Wt = (t, e) => Hv(t, "name", { value: e, configurable: !0 }), Ci = "Popover", [Ju, ZA] = /* @__PURE__ */ ge(Ci, [
  Ft
]), Ai = Ft(), [Gv, Or] = Ju(Ci), Yv = /* @__PURE__ */ Wt((t) => {
  const {
    __scopePopover: e,
    children: r,
    open: o,
    defaultOpen: n,
    onOpenChange: a,
    modal: i = !1
  } = t, s = Ai(e), c = m.useRef(null), [l, f] = m.useState(!1), [d, p] = xe({
    prop: o,
    defaultProp: n ?? !1,
    onChange: a,
    caller: Ci
  });
  return /* @__PURE__ */ u(io, { ...s, children: /* @__PURE__ */ u(
    Gv,
    {
      scope: e,
      contentId: Oe(),
      triggerRef: c,
      open: d,
      onOpenChange: p,
      onOpenToggle: m.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: m.useCallback(() => f(!0), []),
      onCustomAnchorRemove: m.useCallback(() => f(!1), []),
      modal: i,
      children: r
    }
  ) });
}, "Popover"), Qv = "PopoverTrigger", Xv = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Wt(function(e, r) {
    const { __scopePopover: o, ...n } = e, a = Or(Qv, o), i = Ai(o), s = Y(r, a.triggerRef), c = /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": Si(a.open),
        ...n,
        ref: s,
        onClick: F(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? c : /* @__PURE__ */ u(un, { asChild: !0, ...i, children: c });
  }, "PopoverTrigger")
), Zu = "PopoverPortal", [jv, Kv] = Ju(Zu, {
  forceMount: void 0
}), qv = /* @__PURE__ */ Wt((t) => {
  const { __scopePopover: e, forceMount: r, children: o, container: n } = t, a = Or(Zu, e);
  return /* @__PURE__ */ u(jv, { scope: e, forceMount: r, children: /* @__PURE__ */ u(we, { present: r || a.open, children: /* @__PURE__ */ u(Tr, { asChild: !0, container: n, children: o }) }) });
}, "PopoverPortal"), Kr = "PopoverContent", Jv = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wt(function(e, r) {
    const o = Kv(Kr, e.__scopePopover), { forceMount: n = o.forceMount, ...a } = e, i = Or(Kr, e.__scopePopover);
    return /* @__PURE__ */ u(we, { present: n || i.open, children: i.modal ? /* @__PURE__ */ u(ex, { ...a, ref: r }) : /* @__PURE__ */ u(tx, { ...a, ref: r }) });
  }, "PopoverContent")
), Zv = /* @__PURE__ */ Ze("PopoverContent.RemoveScroll"), ex = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wt(function(e, r) {
    const o = Or(Kr, e.__scopePopover), n = m.useRef(null), a = Y(r, n), i = m.useRef(!1);
    return m.useEffect(() => {
      const s = n.current;
      if (s) return hn(s);
    }, []), /* @__PURE__ */ u(so, { as: Zv, allowPinchZoom: !0, children: /* @__PURE__ */ u(
      ed,
      {
        ...e,
        ref: a,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), i.current || (c = o.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: F(
          e.onPointerDownOutside,
          (s) => {
            const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || l;
            i.current = f;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: F(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "PopoverContentModal")
), tx = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wt(function(e, r) {
    const o = Or(Kr, e.__scopePopover), n = m.useRef(!1), a = m.useRef(!1);
    return /* @__PURE__ */ u(
      ed,
      {
        ...e,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, c;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (n.current || (c = o.triggerRef.current) == null || c.focus(), i.preventDefault()), n.current = !1, a.current = !1;
        },
        onInteractOutside: (i) => {
          var l, f;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const s = i.target;
          ((f = o.triggerRef.current) == null ? void 0 : f.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && a.current && i.preventDefault();
        }
      }
    );
  }, "PopoverContentNonModal")
), ed = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wt(function(e, r) {
    const {
      __scopePopover: o,
      trapFocus: n,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      onFocusOutside: f,
      onInteractOutside: d,
      ...p
    } = e, h = Or(Kr, o), b = Ai(o);
    return Rr(), /* @__PURE__ */ u(
      rn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: a,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ u(
          kr,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: c,
            onPointerDownOutside: l,
            onFocusOutside: f,
            onDismiss: () => h.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ u(
              dn,
              {
                "data-state": Si(h.open),
                role: "dialog",
                id: h.contentId,
                ...b,
                ...p,
                ref: r,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }, "PopoverContentImpl")
);
function Si(t) {
  return t ? "open" : "closed";
}
Wt(Si, "getState");
var _i = Yv, ki = Xv, Ri = qv, Ei = Jv, rx = Object.defineProperty, ox = (t, e) => rx(t, "name", { value: e, configurable: !0 });
function yr(t, [e, r]) {
  return Math.min(r, Math.max(e, t));
}
ox(yr, "clamp");
var nx = Object.defineProperty, ax = (t, e) => nx(t, "name", { value: e, configurable: !0 });
function Pi(t) {
  const e = m.useRef({ value: t, previous: t });
  return m.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t]);
}
ax(Pi, "usePrevious");
var ix = Object.defineProperty, sx = (t, e) => ix(t, "name", { value: e, configurable: !0 }), td = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ii = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ sx(function(e, r) {
    return /* @__PURE__ */ u(
      W.span,
      {
        ...e,
        ref: r,
        style: { ...td, ...e.style }
      }
    );
  }, "VisuallyHidden")
), rd = Ii, cx = Object.defineProperty, se = (t, e) => cx(t, "name", { value: e, configurable: !0 }), lx = [" ", "Enter", "ArrowUp", "ArrowDown"], ux = [" ", "Enter"], Cr = "Select", [An, Sn, dx] = /* @__PURE__ */ or(Cr), [ir, eS] = /* @__PURE__ */ ge(Cr, [
  dx,
  Ft
]), Ti = Ft(), [fx, Ht] = ir(Cr), [px, mx] = ir(Cr);
function od(t) {
  const {
    __scopeSelect: e,
    children: r,
    open: o,
    defaultOpen: n,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: f,
    autoComplete: d,
    disabled: p,
    required: h,
    form: b,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: g
  } = t, v = Ti(e), [w, y] = m.useState(null), [x, C] = m.useState(null), [E, k] = m.useState(!1), S = ct(l), [A, _] = xe({
    prop: o,
    defaultProp: n ?? !1,
    onChange: a,
    caller: Cr
  }), [R, P] = xe({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: Cr
  }), I = m.useRef(null), T = m.useRef(R);
  m.useEffect(() => {
    const X = b ? w == null ? void 0 : w.ownerDocument.getElementById(b) : w == null ? void 0 : w.form;
    if (X instanceof HTMLFormElement) {
      const j = /* @__PURE__ */ se(() => P(T.current), "reset");
      return X.addEventListener("reset", j), () => X.removeEventListener("reset", j);
    }
  }, [b, w, P]);
  const D = w ? !!b || !!w.closest("form") : !0, [z, O] = m.useState(/* @__PURE__ */ new Set()), N = Oe(), B = Array.from(z).map((X) => X.props.value).join(";"), V = m.useCallback((X) => {
    O((j) => new Set(j).add(X));
  }, []), L = m.useCallback((X) => {
    O((j) => {
      const oe = new Set(j);
      return oe.delete(X), oe;
    });
  }, []), ee = {
    required: h,
    trigger: w,
    onTriggerChange: y,
    valueNode: x,
    onValueNodeChange: C,
    valueNodeHasChildren: E,
    onValueNodeHasChildrenChange: k,
    contentId: N,
    value: R,
    onValueChange: P,
    open: A,
    onOpenChange: _,
    dir: S,
    triggerPointerDownPosRef: I,
    disabled: p,
    name: f,
    autoComplete: d,
    form: b,
    nativeOptions: z,
    nativeSelectKey: B,
    isFormControl: D
  };
  return /* @__PURE__ */ u(io, { ...v, children: /* @__PURE__ */ u(fx, { scope: e, ...ee, children: /* @__PURE__ */ u(An.Provider, { scope: e, children: /* @__PURE__ */ u(
    px,
    {
      scope: e,
      onNativeOptionAdd: V,
      onNativeOptionRemove: L,
      children: sd(g) ? g(ee) : r
    }
  ) }) }) });
}
se(od, "SelectProvider");
var hx = /* @__PURE__ */ se((t) => {
  const { __scopeSelect: e, children: r, ...o } = t;
  return /* @__PURE__ */ u(
    od,
    {
      __scopeSelect: e,
      ...o,
      internal_do_not_use_render: ({ isFormControl: n }) => /* @__PURE__ */ $(ve, { children: [
        r,
        n ? /* @__PURE__ */ u(
          Vx,
          {
            __scopeSelect: e
          }
        ) : null
      ] })
    }
  );
}, "Select"), gx = "SelectTrigger", bx = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o, disabled: n = !1, ...a } = e, i = Ti(o), s = Ht(gx, o), c = s.disabled || n, l = Y(r, s.onTriggerChange), f = Sn(o), d = m.useRef("touch"), [p, h, b] = Di((v) => {
      const w = f().filter((C) => !C.disabled), y = w.find((C) => C.value === s.value), x = Ni(w, v, y);
      x !== void 0 && s.onValueChange(x.value);
    }), g = /* @__PURE__ */ se((v) => {
      c || (s.onOpenChange(!0), b()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ u(un, { asChild: !0, ...i, children: /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": fo(s.value) ? "" : void 0,
        ...a,
        ref: l,
        onClick: F(a.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && g(v);
        }),
        onPointerDown: F(a.onPointerDown, (v) => {
          d.current = v.pointerType;
          const w = v.target;
          w.hasPointerCapture(v.pointerId) && w.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: F(a.onKeyDown, (v) => {
          const w = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && h(v.key), !(w && v.key === " ") && lx.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), vx = "SelectValue", xx = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o, className: n, style: a, children: i, placeholder: s = "", ...c } = e, l = Ht(vx, o), { onValueNodeHasChildrenChange: f } = l, d = i !== void 0, p = Y(r, l.onValueNodeChange);
    de(() => {
      f(d);
    }, [f, d]);
    const h = fo(l.value);
    return /* @__PURE__ */ u(
      W.span,
      {
        ...c,
        asChild: h ? !1 : c.asChild,
        ref: p,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ u(m.Fragment, { children: h ? s : i }, h ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), wx = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o, children: n, ...a } = e;
    return /* @__PURE__ */ u(W.span, { "aria-hidden": !0, ...a, ref: r, children: n || "▼" });
  }, "SelectIcon")
), yx = "SelectPortal", [Cx, Ax] = ir(yx, {
  forceMount: void 0
}), Sx = /* @__PURE__ */ se((t) => {
  const { __scopeSelect: e, forceMount: r, ...o } = t;
  return /* @__PURE__ */ u(Cx, { scope: t.__scopeSelect, forceMount: r, children: /* @__PURE__ */ u(Tr, { asChild: !0, ...o }) });
}, "SelectPortal"), Zt = "SelectContent", _x = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const o = Ax(Zt, e.__scopeSelect), { forceMount: n = o.forceMount, ...a } = e, i = Ht(Zt, e.__scopeSelect), [s, c] = m.useState();
    return de(() => {
      c(new DocumentFragment());
    }, []), /* @__PURE__ */ u(we, { present: n || i.open, children: ({ present: l }) => l ? /* @__PURE__ */ u(Ex, { ...a, ref: r }) : /* @__PURE__ */ u(kx, { ...a, fragment: s }) });
  }, "SelectContent")
), kx = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ se(function(e, r) {
  const { __scopeSelect: o, children: n, fragment: a } = e;
  return a ? Sr.createPortal(
    /* @__PURE__ */ u(nd, { scope: o, children: /* @__PURE__ */ u(An.Slot, { scope: o, children: /* @__PURE__ */ u("div", { ref: r, children: n }) }) }),
    a
  ) : null;
}, "SelectContentFragment")), qe = 10, [nd, sr] = ir(Zt), Rx = /* @__PURE__ */ Ze("SelectContent.RemoveScroll"), Ex = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o } = e, {
      position: n = "item-aligned",
      onCloseAutoFocus: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: c,
      sideOffset: l,
      align: f,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: w,
      //
      ...y
    } = e, x = Ht(Zt, o), [C, E] = m.useState(null), [k, S] = m.useState(null), A = Y(r, E), [_, R] = m.useState(null), [P, I] = m.useState(
      null
    ), T = Sn(o), [D, z] = m.useState(!1), O = m.useRef(!1);
    m.useEffect(() => {
      if (C) return hn(C);
    }, [C]), Rr();
    const N = m.useCallback(
      (G) => {
        const [J, ...Z] = T().map((ne) => ne.ref.current), [q] = Z.slice(-1), re = document.activeElement;
        for (const ne of G)
          if (ne === re || (ne == null || ne.scrollIntoView({ block: "nearest" }), ne === J && k && (k.scrollTop = 0), ne === q && k && (k.scrollTop = k.scrollHeight), ne == null || ne.focus(), document.activeElement !== re)) return;
      },
      [T, k]
    ), B = m.useCallback(
      () => N([_, C]),
      [N, _, C]
    );
    m.useEffect(() => {
      D && B();
    }, [D, B]);
    const { onOpenChange: V, triggerPointerDownPosRef: L } = x;
    m.useEffect(() => {
      if (C) {
        let G = { x: 0, y: 0 };
        const J = /* @__PURE__ */ se((q) => {
          var re, ne;
          G = {
            x: Math.abs(Math.round(q.pageX) - (((re = L.current) == null ? void 0 : re.x) ?? 0)),
            y: Math.abs(Math.round(q.pageY) - (((ne = L.current) == null ? void 0 : ne.y) ?? 0))
          };
        }, "handlePointerMove"), Z = /* @__PURE__ */ se((q) => {
          G.x <= 10 && G.y <= 10 ? q.preventDefault() : q.composedPath().includes(C) || V(!1), document.removeEventListener("pointermove", J), L.current = null;
        }, "handlePointerUp");
        return L.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [C, V, L]), m.useEffect(() => {
      const G = /* @__PURE__ */ se(() => V(!1), "close");
      return window.addEventListener("blur", G), window.addEventListener("resize", G), () => {
        window.removeEventListener("blur", G), window.removeEventListener("resize", G);
      };
    }, [V]);
    const [ee, X] = Di((G) => {
      const J = T().filter((re) => !re.disabled), Z = J.find((re) => re.ref.current === document.activeElement), q = Ni(J, G, Z);
      q && setTimeout(() => {
        var re;
        return (re = q.ref.current) == null ? void 0 : re.focus();
      });
    }), j = m.useCallback(
      (G, J, Z) => {
        const q = !O.current && !Z;
        (x.value !== void 0 && x.value === J || q) && (R(G), q && (O.current = !0));
      },
      [x.value]
    ), oe = m.useCallback(() => C == null ? void 0 : C.focus(), [C]), H = m.useCallback(
      (G, J, Z) => {
        const q = !O.current && !Z;
        (x.value !== void 0 && x.value === J || q) && I(G);
      },
      [x.value]
    ), U = n === "popper" ? ac : Px, te = U === ac ? {
      side: c,
      sideOffset: l,
      align: f,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: w
    } : {};
    return /* @__PURE__ */ u(
      nd,
      {
        scope: o,
        content: C,
        viewport: k,
        onViewportChange: S,
        itemRefCallback: j,
        selectedItem: _,
        onItemLeave: oe,
        itemTextRefCallback: H,
        focusSelectedItem: B,
        selectedItemText: P,
        position: n,
        isPositioned: D,
        searchRef: ee,
        children: /* @__PURE__ */ u(so, { as: Rx, allowPinchZoom: !0, children: /* @__PURE__ */ u(
          rn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (G) => {
              G.preventDefault();
            },
            onUnmountAutoFocus: F(a, (G) => {
              var J;
              (J = x.trigger) == null || J.focus({ preventScroll: !0 }), G.preventDefault();
            }),
            children: /* @__PURE__ */ u(
              kr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (G) => G.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ u(
                  U,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (G) => G.preventDefault(),
                    ...y,
                    ...te,
                    onPlaced: () => z(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: F(y.onKeyDown, (G) => {
                      const J = G.ctrlKey || G.altKey || G.metaKey;
                      if (G.key === "Tab" && G.preventDefault(), !J && G.key.length === 1 && X(G.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(G.key)) {
                        let q = T().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(G.key) && (q = q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(G.key)) {
                          const re = G.target, ne = q.indexOf(re);
                          q = q.slice(ne + 1);
                        }
                        setTimeout(() => N(q)), G.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
), Px = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ se(function(e, r) {
  const { __scopeSelect: o, onPlaced: n, ...a } = e, i = Ht(Zt, o), s = sr(Zt, o), [c, l] = m.useState(null), [f, d] = m.useState(null), p = Y(r, d), h = Sn(o), b = m.useRef(!1), g = m.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: y, focusSelectedItem: x } = s, C = m.useCallback(() => {
    if (i.trigger && i.valueNode && c && f && v && w && y) {
      const A = i.trigger.getBoundingClientRect(), _ = f.getBoundingClientRect(), R = i.valueNode.getBoundingClientRect(), P = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = P.left - _.left, ne = R.left - re, Pe = A.left - ne, Ue = A.width + Pe, We = Math.max(Ue, _.width), dt = window.innerWidth - qe, Et = yr(ne, [
          qe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(qe, dt - We)
        ]);
        c.style.minWidth = Ue + "px", c.style.left = Et + "px";
      } else {
        const re = _.right - P.right, ne = window.innerWidth - R.right - re, Pe = window.innerWidth - A.right - ne, Ue = A.width + Pe, We = Math.max(Ue, _.width), dt = window.innerWidth - qe, Et = yr(ne, [
          qe,
          Math.max(qe, dt - We)
        ]);
        c.style.minWidth = Ue + "px", c.style.right = Et + "px";
      }
      const I = h(), T = window.innerHeight - qe * 2, D = v.scrollHeight, z = window.getComputedStyle(f), O = parseInt(z.borderTopWidth, 10), N = parseInt(z.paddingTop, 10), B = parseInt(z.borderBottomWidth, 10), V = parseInt(z.paddingBottom, 10), L = O + N + D + V + B, ee = Math.min(w.offsetHeight * 5, L), X = window.getComputedStyle(v), j = parseInt(X.paddingTop, 10), oe = parseInt(X.paddingBottom, 10), H = A.top + A.height / 2 - qe, U = T - H, te = w.offsetHeight / 2, G = w.offsetTop + te, J = O + N + G, Z = L - J;
      if (J <= H) {
        const re = I.length > 0 && w === I[I.length - 1].ref.current;
        c.style.bottom = "0px";
        const ne = f.clientHeight - v.offsetTop - v.offsetHeight, Pe = Math.max(
          U,
          te + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? oe : 0) + ne + B
        ), Ue = J + Pe;
        c.style.height = Ue + "px";
      } else {
        const re = I.length > 0 && w === I[0].ref.current;
        c.style.top = "0px";
        const Pe = Math.max(
          H,
          O + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? j : 0) + te
        ) + Z;
        c.style.height = Pe + "px", v.scrollTop = J - H + v.offsetTop;
      }
      c.style.margin = `${qe}px 0`, c.style.minHeight = ee + "px", c.style.maxHeight = T + "px", n == null || n(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    c,
    f,
    v,
    w,
    y,
    i.dir,
    n
  ]);
  de(() => C(), [C]);
  const [E, k] = m.useState();
  de(() => {
    f && k(window.getComputedStyle(f).zIndex);
  }, [f]);
  const S = m.useCallback(
    (A) => {
      A && g.current === !0 && (C(), x == null || x(), g.current = !1);
    },
    [C, x]
  );
  return /* @__PURE__ */ u(
    Ix,
    {
      scope: o,
      contentWrapper: c,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ u(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ u(
            W.div,
            {
              ...a,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...a.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), ac = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ se(function(e, r) {
  const {
    __scopeSelect: o,
    align: n = "start",
    collisionPadding: a = qe,
    ...i
  } = e, s = Ti(o);
  return /* @__PURE__ */ u(
    dn,
    {
      ...s,
      ...i,
      ref: r,
      align: n,
      collisionPadding: a,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [Ix, Mi] = ir(Zt, {}), ic = "SelectViewport", Tx = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o, nonce: n, ...a } = e, i = sr(ic, o), s = Mi(ic, o), c = Y(r, i.onViewportChange), l = m.useRef(0);
    return /* @__PURE__ */ $(ve, { children: [
      /* @__PURE__ */ u(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ u(An.Slot, { scope: o, children: /* @__PURE__ */ u(
        W.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...a,
          ref: c,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...a.style
          },
          onScroll: F(a.onScroll, (f) => {
            const d = f.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && p) {
              const b = Math.abs(l.current - d.scrollTop);
              if (b > 0) {
                const g = window.innerHeight - qe * 2, v = parseFloat(p.style.minHeight), w = parseFloat(p.style.height), y = Math.max(v, w);
                if (y < g) {
                  const x = y + b, C = Math.min(g, x), E = x - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), Mx = "SelectGroup", [tS, rS] = ir(Mx), Ra = "SelectItem", [Dx, ad] = ir(Ra), Nx = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const {
      __scopeSelect: o,
      value: n,
      disabled: a = !1,
      textValue: i,
      ...s
    } = e, c = Ht(Ra, o), l = sr(Ra, o), f = c.value === n, [d, p] = m.useState(i ?? ""), [h, b] = m.useState(!1), g = fe(
      (C) => {
        var E;
        return (E = l.itemRefCallback) == null ? void 0 : E.call(l, C, n, a);
      }
    ), v = Y(r, g), w = Oe(), y = m.useRef("touch"), x = /* @__PURE__ */ se(() => {
      a || (c.onValueChange(n), c.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ u(
      Dx,
      {
        scope: o,
        value: n,
        disabled: a,
        textId: w,
        isSelected: f,
        onItemTextChange: m.useCallback((C) => {
          p((E) => E || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u(
          An.ItemSlot,
          {
            scope: o,
            value: n,
            disabled: a,
            textValue: d,
            children: /* @__PURE__ */ u(
              W.div,
              {
                role: "option",
                "aria-labelledby": w,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": f && h,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: F(s.onFocus, () => b(!0)),
                onBlur: F(s.onBlur, () => b(!1)),
                onClick: F(s.onClick, () => {
                  y.current !== "mouse" && x();
                }),
                onPointerUp: F(s.onPointerUp, () => {
                  y.current === "mouse" && x();
                }),
                onPointerDown: F(s.onPointerDown, (C) => {
                  y.current = C.pointerType;
                }),
                onPointerMove: F(s.onPointerMove, (C) => {
                  var E;
                  y.current = C.pointerType, a ? (E = l.onItemLeave) == null || E.call(l) : y.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: F(s.onPointerLeave, (C) => {
                  var E;
                  C.currentTarget === document.activeElement && ((E = l.onItemLeave) == null || E.call(l));
                }),
                onKeyDown: F(s.onKeyDown, (C) => {
                  var k;
                  a || C.target !== C.currentTarget || ((k = l.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (ux.includes(C.key) && x(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), Oo = "SelectItemText", Ox = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o, className: n, style: a, ...i } = e, s = Ht(Oo, o), c = sr(Oo, o), l = ad(Oo, o), f = mx(Oo, o), [d, p] = m.useState(null), h = fe(
      (x) => {
        var C;
        return (C = c.itemTextRefCallback) == null ? void 0 : C.call(c, x, l.value, l.disabled);
      }
    ), b = Y(
      r,
      p,
      l.onItemTextChange,
      h
    ), g = d == null ? void 0 : d.textContent, v = m.useMemo(
      () => /* @__PURE__ */ u("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: w, onNativeOptionRemove: y } = f;
    return de(() => (w(v), () => y(v)), [w, y, v]), /* @__PURE__ */ $(ve, { children: [
      /* @__PURE__ */ u(W.span, { id: l.textId, ...i, ref: b }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren && !fo(s.value) ? Sr.createPortal(i.children, s.valueNode) : null
    ] });
  }, "SelectItemText")
), $x = "SelectItemIndicator", Bx = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ se(function(e, r) {
    const { __scopeSelect: o, ...n } = e;
    return ad($x, o).isSelected ? /* @__PURE__ */ u(W.span, { "aria-hidden": !0, ...n, ref: r }) : null;
  }, "SelectItemIndicator")
), sc = "SelectScrollUpButton", zx = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ se(function(e, r) {
  const o = sr(sc, e.__scopeSelect), n = Mi(sc, e.__scopeSelect), [a, i] = m.useState(!1), s = Y(r, n.onScrollButtonChange);
  return de(() => {
    if (o.viewport && o.isPositioned) {
      let c = function() {
        const f = l.scrollTop > 0;
        i(f);
      };
      se(c, "handleScroll");
      const l = o.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [o.viewport, o.isPositioned]), a ? /* @__PURE__ */ u(
    id,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = o;
        c && l && (c.scrollTop = c.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), cc = "SelectScrollDownButton", Fx = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ se(function(e, r) {
  const o = sr(cc, e.__scopeSelect), n = Mi(cc, e.__scopeSelect), [a, i] = m.useState(!1), s = Y(r, n.onScrollButtonChange);
  return de(() => {
    if (o.viewport && o.isPositioned) {
      let c = function() {
        const f = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < f;
        i(d);
      };
      se(c, "handleScroll");
      const l = o.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [o.viewport, o.isPositioned]), a ? /* @__PURE__ */ u(
    id,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = o;
        c && l && (c.scrollTop = c.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), id = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ se(function(e, r) {
  const { __scopeSelect: o, onAutoScroll: n, ...a } = e, i = sr("SelectScrollButton", o), s = m.useRef(null), c = Sn(o), l = m.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), de(() => {
    var d;
    const f = c().find((p) => p.ref.current === document.activeElement);
    (d = f == null ? void 0 : f.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ u(
    W.div,
    {
      "aria-hidden": !0,
      ...a,
      ref: r,
      style: { flexShrink: 0, ...a.style },
      onPointerDown: F(a.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(n, 50));
      }),
      onPointerMove: F(a.onPointerMove, () => {
        var f;
        (f = i.onItemLeave) == null || f.call(i), s.current === null && (s.current = window.setInterval(n, 50));
      }),
      onPointerLeave: F(a.onPointerLeave, () => {
        l();
      })
    }
  );
}, "SelectScrollButtonImpl")), Lx = "SelectBubbleInput", Vx = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ se(function({ __scopeSelect: e, ...r }, o) {
    const n = Ht(Lx, e), { value: a, onValueChange: i, required: s, disabled: c, name: l, autoComplete: f, form: d } = n, { nativeOptions: p, nativeSelectKey: h } = n, b = m.useRef(null), g = Y(o, b), v = a ?? "", w = Pi(v), y = Array.from(p).some(
      (x) => (x.props.value ?? "") === ""
    );
    return m.useEffect(() => {
      const x = b.current;
      if (!x) return;
      const C = window.HTMLSelectElement.prototype, k = Object.getOwnPropertyDescriptor(
        C,
        "value"
      ).set;
      if (w !== v && k) {
        const S = new Event("change", { bubbles: !0 });
        k.call(x, v), x.dispatchEvent(S);
      }
    }, [w, v]), /* @__PURE__ */ $(
      W.select,
      {
        "aria-hidden": !0,
        required: s,
        tabIndex: -1,
        name: l,
        autoComplete: f,
        disabled: c,
        form: d,
        onChange: (x) => i(x.target.value),
        ...r,
        style: { ...td, ...r.style },
        ref: g,
        defaultValue: v,
        children: [
          fo(a) && !y ? /* @__PURE__ */ u("option", { value: "" }) : null,
          Array.from(p)
        ]
      },
      h
    );
  }, "SelectBubbleInput")
);
function sd(t) {
  return typeof t == "function";
}
se(sd, "isFunction");
function fo(t) {
  return t === "" || t === void 0;
}
se(fo, "shouldShowPlaceholder");
function Di(t) {
  const e = fe(t), r = m.useRef(""), o = m.useRef(0), n = m.useCallback(
    (i) => {
      const s = r.current + i;
      e(s), (/* @__PURE__ */ se((function c(l) {
        r.current = l, window.clearTimeout(o.current), l !== "" && (o.current = window.setTimeout(() => c(""), 1e3));
      }), "updateSearch"))(s);
    },
    [e]
  ), a = m.useCallback(() => {
    r.current = "", window.clearTimeout(o.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(o.current), []), [r, n, a];
}
se(Di, "useTypeaheadSearch");
function Ni(t, e, r) {
  const n = e.length > 1 && Array.from(e).every((l) => l === e[0]) ? e[0] : e, a = r ? t.indexOf(r) : -1;
  let i = cd(t, Math.max(a, 0));
  n.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(n.toLowerCase())
  );
  return c !== r ? c : void 0;
}
se(Ni, "findNextItem");
function cd(t, e) {
  return t.map((r, o) => t[(e + o) % t.length]);
}
se(cd, "wrapArray");
const Oi = "inline-flex items-center justify-between gap-su2 w-full min-w-0 min-h-[var(--su-control-lg)] px-su3 border border-solid border-rule rounded-none bg-paper text-label font-sans text-body text-start cursor-pointer su-focus-ring transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:border-accent focus-visible:shadow-none data-[state=open]:border-accent aria-invalid:border-danger disabled:opacity-45 disabled:cursor-not-allowed", lc = "flex items-center justify-center h-[var(--su-space-6)] bg-paper text-label-secondary text-[12px] cursor-default";
function oS({
  value: t,
  defaultValue: e,
  placeholder: r = "Select…",
  disabled: o,
  size: n,
  options: a = [],
  className: i,
  children: s,
  onValueChange: c
}) {
  const l = Ee(), { size: f, disabled: d } = tt(n, o);
  return /* @__PURE__ */ $(
    hx,
    {
      value: t,
      defaultValue: e,
      disabled: d,
      onValueChange: c,
      children: [
        /* @__PURE__ */ $(
          bx,
          {
            id: l == null ? void 0 : l.id,
            className: M(Oi, Nr[f], i),
            "aria-describedby": l == null ? void 0 : l.descriptionId,
            "aria-invalid": l != null && l.error ? !0 : void 0,
            children: [
              /* @__PURE__ */ u("span", { className: "min-w-0 truncate", children: /* @__PURE__ */ u(
                xx,
                {
                  placeholder: /* @__PURE__ */ u("span", { className: "text-label-tertiary", children: r })
                }
              ) }),
              /* @__PURE__ */ u(
                wx,
                {
                  className: "shrink-0 text-label-secondary text-[12px]",
                  "aria-hidden": "true",
                  children: "▾"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u(Sx, { children: /* @__PURE__ */ $(
          _x,
          {
            className: "su-popover overflow-hidden min-w-[var(--radix-select-trigger-width)] max-h-[var(--su-dropdown-max-h)] p-0",
            position: "popper",
            sideOffset: 4,
            children: [
              /* @__PURE__ */ u(zx, { className: lc, "aria-hidden": "true", children: "▴" }),
              /* @__PURE__ */ u(Tx, { className: "p-su1", children: s ?? (a.length === 0 ? (
                // A blank bordered popover reads as broken; say it's empty on purpose.
                /* @__PURE__ */ u("div", { className: "px-su3 py-su3 su-label text-ink-2 text-start", children: "No options" })
              ) : a.map((p) => /* @__PURE__ */ $(
                Nx,
                {
                  value: p.value,
                  disabled: p.disabled,
                  className: "flex items-center gap-su2 min-w-0 min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none text-body text-label cursor-pointer su-focus-ring data-[highlighted]:bg-fill-secondary data-[highlighted]:text-label data-[highlighted]:[&_[data-indicator]]:text-accent contrast-more:data-[highlighted]:bg-accent contrast-more:data-[highlighted]:text-on-action data-[disabled]:opacity-45 data-[disabled]:pointer-events-none",
                  children: [
                    /* @__PURE__ */ u(
                      Bx,
                      {
                        "data-indicator": !0,
                        className: "shrink-0 w-[14px] text-accent",
                        children: "✓"
                      }
                    ),
                    /* @__PURE__ */ u(Ox, { className: "truncate", children: p.label })
                  ]
                },
                p.value
              ))) }),
              /* @__PURE__ */ u(Fx, { className: lc, "aria-hidden": "true", children: "▾" })
            ]
          }
        ) })
      ]
    }
  );
}
function uc(t, e) {
  var a;
  const r = [t], o = [];
  let n = t;
  for (const i of e) {
    const s = n.find((c) => c.value === i);
    if (!s) break;
    o.push(s.label), (a = s.children) != null && a.length && (n = s.children, r.push(n));
  }
  return { columns: r, labels: o };
}
function Vr(t, e = 0) {
  const r = t == null ? void 0 : t.querySelectorAll("button:not(:disabled)");
  r != null && r.length && r[Math.max(0, Math.min(e, r.length - 1))].focus();
}
function nS({
  value: t,
  defaultValue: e = [],
  placeholder: r = "Select…",
  disabled: o,
  options: n = [],
  notFoundContent: a = "No options",
  className: i,
  onChange: s
}) {
  const c = Ee(), { disabled: l } = tt(void 0, o), [f, d] = Q(e), [p, h] = Q(!1), [b, g] = Q(null), v = pe(null), w = t !== void 0, y = w ? t : f, { columns: x, labels: C } = Fe(() => uc(n, y), [n, y]), E = C.length > 0 ? C.join(" / ") : null, k = Re(
    (_) => {
      const { labels: R } = uc(n, _);
      w || d(_), s == null || s(_, R);
    },
    [w, s, n]
  ), S = (_, R) => {
    var I;
    if (R.disabled) return;
    const P = y.slice(0, _);
    P[_] = R.value, k(P), (I = R.children) != null && I.length || h(!1);
  };
  le(() => {
    var _;
    b !== null && (Vr((_ = v.current) == null ? void 0 : _.children[b]), g(null));
  }, [b, x]);
  const A = (_) => {
    var I;
    const R = document.activeElement, P = R == null ? void 0 : R.closest("[data-column]");
    if (P)
      if (_.key === "ArrowDown" || _.key === "ArrowUp") {
        _.preventDefault();
        const D = [...P.querySelectorAll("button:not(:disabled)")].indexOf(R);
        Vr(P, D + (_.key === "ArrowDown" ? 1 : -1));
      } else if (_.key === "ArrowRight") {
        _.preventDefault();
        const T = Number(P.getAttribute("data-column")), D = (I = x[T]) == null ? void 0 : I[Number(R == null ? void 0 : R.dataset.index)];
        P.nextElementSibling && y[T] === (D == null ? void 0 : D.value) ? Vr(P.nextElementSibling) : D && (R != null && R.dataset.branch) && (S(T, D), g(T + 1));
      } else _.key === "ArrowLeft" && (_.preventDefault(), Vr(P.previousElementSibling));
  };
  return /* @__PURE__ */ $(_i, { open: p, onOpenChange: h, children: [
    /* @__PURE__ */ u(ki, { asChild: !0, children: /* @__PURE__ */ $(
      "button",
      {
        type: "button",
        id: c == null ? void 0 : c.id,
        disabled: l,
        className: M(Oi, i),
        "aria-haspopup": "listbox",
        "aria-describedby": c == null ? void 0 : c.descriptionId,
        "aria-invalid": c != null && c.error ? !0 : void 0,
        title: E ?? void 0,
        children: [
          /* @__PURE__ */ u("span", { className: M("min-w-0 truncate", !E && "text-label-tertiary"), children: E ?? r }),
          /* @__PURE__ */ u("span", { className: "shrink-0 text-label-secondary text-[12px]", "aria-hidden": "true", children: "▾" })
        ]
      }
    ) }),
    /* @__PURE__ */ u(Ri, { children: /* @__PURE__ */ u(
      Ei,
      {
        ref: v,
        role: "listbox",
        align: "start",
        sideOffset: 4,
        collisionPadding: 8,
        className: "su-popover flex max-w-[calc(100vw-var(--su-space-4))] overflow-x-auto border-rule-strong p-0",
        onKeyDown: A,
        onOpenAutoFocus: (_) => {
          var R;
          _.preventDefault(), Vr((R = v.current) == null ? void 0 : R.children[0]);
        },
        children: x.map((_, R) => /* @__PURE__ */ u(
          "div",
          {
            "data-column": R,
            className: "min-w-[140px] max-h-[var(--su-dropdown-max-h)] overflow-y-auto p-su1 border-e border-solid border-rule last:border-e-0",
            children: _.length === 0 ? /* @__PURE__ */ u("div", { className: "p-su3 text-footnote text-ink-2 text-center", children: a }) : _.map((P, I) => {
              var z;
              const T = y[R] === P.value, D = !!((z = P.children) != null && z.length);
              return /* @__PURE__ */ $(
                "button",
                {
                  type: "button",
                  role: "option",
                  tabIndex: -1,
                  "data-index": I,
                  "data-branch": D ? "true" : void 0,
                  "aria-selected": T,
                  disabled: P.disabled,
                  className: M(
                    "flex items-center justify-between gap-su2 w-full min-h-[var(--su-hit-target)] [@media(hover:none)]:min-h-[var(--su-control-lg)] px-su3 py-su2 rounded-none bg-transparent text-ink text-body text-start cursor-pointer su-focus-ring hover:bg-fill-secondary",
                    T && "bg-fill-secondary shadow-[inset_2px_0_0_var(--su-accent)]",
                    T && "contrast-more:bg-accent contrast-more:text-on-action",
                    P.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  onClick: () => S(R, P),
                  children: [
                    /* @__PURE__ */ u("span", { className: "min-w-0 truncate", children: P.label }),
                    D ? /* @__PURE__ */ u("span", { className: "text-ink-2 text-caption-1", "aria-hidden": "true", children: "›" }) : null
                  ]
                },
                P.value
              );
            })
          },
          R
        ))
      }
    ) })
  ] });
}
var Ux = Object.defineProperty, wt = (t, e) => Ux(t, "name", { value: e, configurable: !0 }), $i = "Checkbox", [Wx, aS] = /* @__PURE__ */ ge($i), [Hx, Bi] = Wx($i);
function ld(t) {
  const {
    __scopeCheckbox: e,
    checked: r,
    children: o,
    defaultChecked: n,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: c,
    required: l,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = t, [p, h] = xe({
    prop: r,
    defaultProp: n ?? !1,
    onChange: c,
    caller: $i
  }), [b, g] = m.useState(null), [v, w] = m.useState(null), y = m.useRef(!1), [x, C] = m.useReducer(
    (S) => S + 1,
    0
  ), E = b ? !!i || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: p,
    disabled: a,
    setChecked: h,
    control: b,
    setControl: g,
    name: s,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: y,
    userInteractionCount: x,
    onUserInteraction: C,
    required: l,
    defaultChecked: bt(n) ? !1 : n,
    isFormControl: E,
    bubbleInput: v,
    setBubbleInput: w
  };
  return /* @__PURE__ */ u(
    Hx,
    {
      scope: e,
      ...k,
      children: ud(d) ? d(k) : o
    }
  );
}
wt(ld, "CheckboxProvider");
var Gx = "CheckboxTrigger", Yx = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ wt(function({ __scopeCheckbox: e, onKeyDown: r, onClick: o, ...n }, a) {
    const {
      control: i,
      value: s,
      disabled: c,
      checked: l,
      required: f,
      setControl: d,
      setChecked: p,
      hasConsumerStoppedPropagationRef: h,
      onUserInteraction: b,
      isFormControl: g,
      bubbleInput: v
    } = Bi(Gx, e), w = Y(a, d), y = m.useRef(l);
    return m.useEffect(() => {
      const x = i == null ? void 0 : i.form;
      if (x) {
        const C = /* @__PURE__ */ wt(() => p(y.current), "reset");
        return x.addEventListener("reset", C), () => x.removeEventListener("reset", C);
      }
    }, [i, p]), /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": bt(l) ? "mixed" : l,
        "aria-required": f,
        "data-state": zi(l),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: s,
        ...n,
        ref: w,
        onKeyDown: F(r, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: F(o, (x) => {
          b(), p((C) => bt(C) ? !0 : !C), v && g && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Qx = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(e, r) {
    const {
      __scopeCheckbox: o,
      name: n,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: c,
      value: l,
      onCheckedChange: f,
      form: d,
      ...p
    } = e;
    return /* @__PURE__ */ u(
      ld,
      {
        __scopeCheckbox: o,
        checked: a,
        defaultChecked: i,
        disabled: c,
        required: s,
        onCheckedChange: f,
        name: n,
        form: d,
        value: l,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ $(ve, { children: [
          /* @__PURE__ */ u(
            Yx,
            {
              ...p,
              ref: r,
              __scopeCheckbox: o
            }
          ),
          h && /* @__PURE__ */ u(
            qx,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), Xx = "CheckboxIndicator", jx = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(e, r) {
    const { __scopeCheckbox: o, forceMount: n, ...a } = e, i = Bi(Xx, o);
    return /* @__PURE__ */ u(
      we,
      {
        present: n || bt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ u(
          W.span,
          {
            "data-state": zi(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...a,
            ref: r,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), Kx = "CheckboxBubbleInput", qx = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function({ __scopeCheckbox: e, onClick: r, ...o }, n) {
    const {
      control: a,
      hasConsumerStoppedPropagationRef: i,
      userInteractionCount: s,
      checked: c,
      defaultChecked: l,
      required: f,
      disabled: d,
      name: p,
      value: h,
      form: b,
      bubbleInput: g,
      setBubbleInput: v
    } = Bi(Kx, e), w = Y(n, v), y = Ir(a), x = m.useRef(!1), C = m.useRef(c), E = m.useRef(s);
    m.useEffect(() => {
      const S = g;
      if (!S) return;
      const A = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        A,
        "checked"
      ).set, P = s !== E.current;
      E.current = s;
      const I = C.current !== c;
      C.current = c;
      const T = !(P && i.current);
      if (I && R) {
        x.current = !P;
        const D = new Event("click", { bubbles: T });
        S.indeterminate = bt(c), R.call(S, bt(c) ? !1 : c), S.dispatchEvent(D), x.current = !1;
      }
    }, [g, c, i, s]);
    const k = m.useRef(bt(c) ? !1 : c);
    return /* @__PURE__ */ u(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? k.current,
        required: f,
        disabled: d,
        name: p,
        value: h,
        form: b,
        ...o,
        tabIndex: -1,
        ref: w,
        onClick: F(r, (S) => {
          x.current && S.stopPropagation();
        }),
        style: {
          ...o.style,
          ...y,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "CheckboxBubbleInput")
);
function ud(t) {
  return typeof t == "function";
}
wt(ud, "isFunction");
function bt(t) {
  return t === "indeterminate";
}
wt(bt, "isIndeterminate");
function zi(t) {
  return bt(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
wt(zi, "getState");
const Jx = [
  "flex items-center justify-center size-[22px] rounded-none bg-transparent text-on-action cursor-pointer",
  // ink-3 (not gray-3) so the unchecked box clears WCAG 1.4.11 3:1 against paper, as Switch's track does.
  "border-[1.5px] border-solid border-ink-3 contrast-more:border-[var(--su-label)]",
  "transition-[background-color,border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "hover:border-[var(--su-label)] data-[state=unchecked]:hover:bg-[var(--su-gray-4)]",
  "data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=indeterminate]:bg-accent data-[state=indeterminate]:border-accent",
  "data-[state=checked]:hover:bg-[var(--su-accent-hover)] data-[state=indeterminate]:hover:bg-[var(--su-accent-hover)]",
  "su-focus-ring"
].join(" ");
function iS({
  checked: t,
  defaultChecked: e,
  disabled: r,
  required: o,
  name: n,
  value: a = "on",
  id: i,
  className: s,
  children: c,
  onCheckedChange: l,
  "aria-label": f,
  "aria-labelledby": d
}) {
  const p = At(), h = Ee(), b = r ?? p.disabled;
  return /* @__PURE__ */ $(
    "label",
    {
      className: M(
        "inline-flex items-center gap-su2 min-h-[var(--su-hit-target)] cursor-pointer",
        b && "opacity-45 cursor-not-allowed",
        s
      ),
      children: [
        /* @__PURE__ */ u(
          Qx,
          {
            id: i ?? (h == null ? void 0 : h.id),
            "aria-label": c ? void 0 : f,
            "aria-labelledby": c ? void 0 : d,
            checked: t,
            defaultChecked: e,
            disabled: b,
            required: o ?? (h == null ? void 0 : h.required),
            name: n,
            value: a,
            className: Jx,
            onCheckedChange: (g) => l == null ? void 0 : l(g === !0, g),
            "aria-describedby": h == null ? void 0 : h.descriptionId,
            "aria-invalid": h != null && h.error ? !0 : void 0,
            children: /* @__PURE__ */ u(jx, { className: "size-3", children: /* @__PURE__ */ $(
              "svg",
              {
                viewBox: "0 0 12 12",
                fill: "none",
                "aria-hidden": "true",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ u("path", { d: "M2.5 6L5 8.5L9.5 3.5", className: "[[data-state=indeterminate]_&]:hidden" }),
                  /* @__PURE__ */ u("path", { d: "M2.5 6H9.5", className: "hidden [[data-state=indeterminate]_&]:block" })
                ]
              }
            ) })
          }
        ),
        c && /* @__PURE__ */ u("span", { className: "text-body text-label select-none", children: c })
      ]
    }
  );
}
const Zx = {
  sm: "size-[var(--su-control-sm)]",
  md: "size-[var(--su-control-md)]",
  lg: "size-[var(--su-control-lg)]"
}, e1 = (t) => /^#[0-9a-fA-F]{6}$/.test(t) ? t : "#000000";
function sS({
  value: t,
  defaultValue: e = "#1D4ED8",
  size: r,
  disabled: o,
  showText: n = !0,
  className: a,
  onChange: i,
  id: s,
  ...c
}) {
  const l = Ee(), { size: f, disabled: d } = tt(r, o), [p, h] = Q(e), b = t !== void 0, g = e1(b ? t : p), v = Re(
    (w) => {
      b || h(w), i == null || i(w);
    },
    [b, i]
  );
  return /* @__PURE__ */ $("div", { className: M("inline-flex items-center gap-su3", a), children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: M(
          "relative border border-solid border-separator rounded-none overflow-hidden cursor-pointer",
          "transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
          "hover:border-rule-strong [@media(hover:none)]:hover:border-separator",
          // outline-solid is required: outline-2 only sets the width, style stays `none`
          "focus-within:outline-solid focus-within:outline-2 focus-within:outline-accent focus-within:outline-offset-[var(--su-focus-ring-offset)]",
          Zx[f],
          d && "opacity-45 cursor-not-allowed hover:border-separator"
        ),
        style: { backgroundColor: g },
        children: /* @__PURE__ */ u(
          "input",
          {
            type: "color",
            id: s ?? (l == null ? void 0 : l.id),
            value: g,
            disabled: d,
            className: "absolute inset-0 size-full appearance-none p-0 border-none bg-transparent outline-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-moz-color-swatch]:border-none",
            onChange: (w) => v(w.target.value),
            ...c,
            "aria-describedby": l == null ? void 0 : l.descriptionId,
            "aria-invalid": l != null && l.error ? !0 : void 0
          }
        )
      }
    ),
    n && /* @__PURE__ */ u("span", { className: "font-mono text-footnote text-label-secondary", children: g.toUpperCase() })
  ] });
}
const dd = "opacity-45 cursor-not-allowed";
function t1({
  value: t,
  defaultValue: e,
  min: r,
  max: o,
  disabled: n,
  size: a,
  className: i,
  onChange: s
}) {
  const c = Ee(), { size: l, disabled: f } = tt(a, n), [d, p] = Q(e ?? ""), h = t !== void 0, b = h ? t : d, g = Re(
    (w) => {
      h || p(w), s == null || s(w);
    },
    [h, s]
  ), v = (w) => {
    g(w.target.value);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "inline-flex w-full max-w-[220px]",
        f && dd,
        i
      ),
      children: /* @__PURE__ */ u(
        "input",
        {
          type: "date",
          id: c == null ? void 0 : c.id,
          value: b,
          min: r,
          max: o,
          disabled: f,
          onChange: v,
          className: M(uo, yi, Nr[l]),
          required: c == null ? void 0 : c.required,
          "aria-describedby": c == null ? void 0 : c.descriptionId,
          "aria-invalid": c != null && c.error ? !0 : void 0
        }
      )
    }
  );
}
function r1({
  value: t,
  defaultValue: e = ["", ""],
  onChange: r,
  presets: o = [],
  startLabel: n = "Start date",
  endLabel: a = "End date",
  disabled: i,
  min: s,
  max: c,
  size: l,
  className: f
}) {
  const d = Ee(), { size: p, disabled: h } = tt(l, i), [b, g] = Q(e), v = t !== void 0, w = v ? t : b, y = Re(
    (E) => {
      v || g(E), r == null || r(E);
    },
    [v, r]
  ), x = M(uo, yi, Nr[p]), C = M(
    "flex flex-col min-w-0 flex-[1_1_160px] max-w-[220px]",
    h && dd
  );
  return /* @__PURE__ */ $("div", { className: M("flex flex-col gap-su3 w-full", f), children: [
    /* @__PURE__ */ $("div", { className: "flex flex-wrap gap-su3", children: [
      /* @__PURE__ */ $("label", { className: C, children: [
        n && /* @__PURE__ */ u("span", { className: _a, children: n }),
        /* @__PURE__ */ u(
          "input",
          {
            type: "date",
            id: d == null ? void 0 : d.id,
            className: x,
            value: w[0],
            min: s,
            max: w[1] || c,
            disabled: h,
            required: d == null ? void 0 : d.required,
            "aria-describedby": d == null ? void 0 : d.descriptionId,
            "aria-invalid": d != null && d.error ? !0 : void 0,
            onChange: (E) => y([E.target.value, w[1]])
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: C, children: [
        a && /* @__PURE__ */ u("span", { className: _a, children: a }),
        /* @__PURE__ */ u(
          "input",
          {
            type: "date",
            className: x,
            value: w[1],
            min: w[0] || s,
            max: c,
            disabled: h,
            required: d == null ? void 0 : d.required,
            "aria-describedby": d == null ? void 0 : d.descriptionId,
            "aria-invalid": d != null && d.error ? !0 : void 0,
            onChange: (E) => y([w[0], E.target.value])
          }
        )
      ] })
    ] }),
    o.length > 0 && /* @__PURE__ */ u("div", { className: "flex flex-wrap gap-su2", children: o.map((E) => /* @__PURE__ */ u(
      Be,
      {
        variant: "default",
        size: "sm",
        disabled: h,
        onClick: () => y(E.value),
        children: E.label
      },
      E.label
    )) })
  ] });
}
t1.RangePicker = r1;
function o1(t, e, r) {
  let o = t;
  return e != null && o < e && (o = e), r != null && o > r && (o = r), o;
}
function n1(t) {
  const [e, r] = String(t).toLowerCase().split("e"), o = (e.split(".")[1] ?? "").length;
  return Math.min(100, Math.max(0, o - Number(r ?? 0)));
}
function oa(t, e, r, o) {
  return Number(o1(t, e, r).toFixed(n1(o)));
}
const dc = (
  // 44px floor, never below the hit target, whatever `size` the input uses (same
  // tradeoff Segmented makes). Inset ring: the segment is fused to its neighbours.
  "inline-flex items-center justify-center min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] px-[var(--su-space-2)] py-0 border border-solid border-rule rounded-none bg-canvas text-ink text-body cursor-pointer transition-[background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none hover:not-disabled:bg-fill focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[calc(var(--su-focus-ring-offset)*-1)] disabled:opacity-45 disabled:cursor-not-allowed"
);
function cS({
  value: t,
  defaultValue: e,
  min: r,
  max: o,
  step: n = 1,
  disabled: a,
  size: i,
  className: s,
  onChange: c,
  id: l,
  onBlur: f,
  onKeyDown: d,
  ...p
}) {
  const h = Ee(), { size: b, disabled: g } = tt(i, a), [v, w] = Q(e), [y, x] = Q(null), C = t !== void 0, E = C ? t : v, k = Re(
    (R) => {
      C || w(R), c == null || c(R);
    },
    [C, c]
  ), S = (R) => {
    const P = R.target.value;
    if (x(P), P === "" || P === "-") {
      k(void 0);
      return;
    }
    const I = Number(P);
    Number.isNaN(I) || k(I);
  }, A = () => {
    if (x(null), E != null) {
      const R = oa(E, r, o, n);
      R !== E && k(R);
    }
  }, _ = (R) => {
    x(null), k(oa((E ?? r ?? 0) + R, r, o, n));
  };
  return /* @__PURE__ */ $("div", { className: M("inline-flex items-stretch w-full max-w-[200px]", s), children: [
    /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: dc,
        disabled: g || r != null && (E ?? r) <= r,
        onClick: () => _(-n),
        "aria-label": "Decrease",
        children: "−"
      }
    ),
    /* @__PURE__ */ u(
      "input",
      {
        type: "number",
        id: l ?? (h == null ? void 0 : h.id),
        disabled: g,
        value: y ?? E ?? "",
        min: r,
        max: o,
        step: n,
        onChange: S,
        onBlur: (R) => {
          A(), f == null || f(R);
        },
        onKeyDown: (R) => {
          R.key === "Enter" && (E != null && oa(E, r, o, n) !== E && R.preventDefault(), A()), d == null || d(R);
        },
        className: M(
          uo,
          Nr[b],
          "flex-1 min-w-0 text-center rounded-none border-l-0 border-r-0",
          // Contained ring: the segment is fused to the steppers, so the standard
          // 3px offset would bleed over them.
          "focus:outline-offset-[calc(var(--su-focus-ring-offset)*-1)]",
          "disabled:opacity-45 disabled:cursor-not-allowed",
          // Native chevrons are a rounded second stepper next to ours.
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0"
        ),
        required: h == null ? void 0 : h.required,
        ...p,
        "aria-describedby": h == null ? void 0 : h.descriptionId,
        "aria-invalid": h != null && h.error ? !0 : void 0
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: dc,
        disabled: g || o != null && (E ?? o) >= o,
        onClick: () => _(n),
        "aria-label": "Increase",
        children: "+"
      }
    )
  ] });
}
function a1(t, e, r) {
  const o = t.slice(0, e), n = o.lastIndexOf(r);
  if (n === -1) return null;
  const a = o.slice(n + r.length);
  return /\s/.test(a) ? null : a;
}
const i1 = {
  sm: "min-h-[72px] text-[length:var(--su-text-footnote)]",
  md: "min-h-[80px]",
  lg: void 0
};
function lS({
  value: t,
  defaultValue: e = "",
  placeholder: r,
  prefix: o = "@",
  disabled: n,
  size: a,
  options: i = [],
  className: s,
  onChange: c,
  onSelect: l
}) {
  var oe;
  const f = Ee(), { size: d, disabled: p } = tt(a, n), h = oo(), [b, g] = Q(e), [v, w] = Q(!1), [y, x] = Q(null), [C, E] = Q(0), [k, S] = Q(0), A = pe(null), _ = pe(null), R = t !== void 0, P = R ? t : b, I = Fe(() => {
    if (y == null) return [];
    const H = y.toLowerCase();
    return i.filter((U) => U.label.toLowerCase().includes(H));
  }, [y, i]), T = (H, U) => {
    const te = I.length;
    if (!te) return 0;
    let G = H;
    for (let J = 0; J < te; J++)
      if (G = (G + U + te) % te, !I[G].disabled) return G;
    return Math.max(H, 0);
  }, D = Math.max(0, Math.min(C, I.length - 1)), z = (oe = I[D]) != null && oe.disabled ? T(D, 1) : D, O = I[z], N = Re(
    (H) => {
      R || g(H), c == null || c(H);
    },
    [R, c]
  ), B = () => {
    w(!1), x(null);
  };
  Yu(A, B, v);
  const V = (H, U) => {
    const te = a1(H, U, o);
    x(te), w(te != null), E(0);
  }, L = (H) => {
    const U = H.target.value, te = H.target.selectionStart ?? U.length;
    N(U), S(te), V(U, te);
  }, ee = (H) => {
    const U = _.current;
    if (!U || y == null || H.disabled) return;
    const te = P.slice(0, k), G = P.slice(k), J = te.lastIndexOf(o), Z = `${P.slice(0, J)}${o}${H.label} ${G}`;
    N(Z), l == null || l(H), B(), requestAnimationFrame(() => {
      const q = J + o.length + H.label.length + 1;
      U.focus(), U.setSelectionRange(q, q);
    });
  }, X = (H) => {
    if (!(!v || I.length === 0))
      if (H.key === "ArrowDown")
        H.preventDefault(), E(T(z, 1));
      else if (H.key === "ArrowUp")
        H.preventDefault(), E(T(z, -1));
      else if (H.key === "Enter" || H.key === "Tab") {
        if (!O) return;
        H.preventDefault(), ee(O);
      } else H.key === "Escape" && (H.preventDefault(), H.stopPropagation(), B());
  }, j = (H) => {
    var U;
    (U = A.current) != null && U.contains(H.relatedTarget) || B();
  };
  return /* @__PURE__ */ $("div", { ref: A, className: M("relative w-full", s), children: [
    /* @__PURE__ */ u(
      "textarea",
      {
        ref: _,
        id: f == null ? void 0 : f.id,
        value: P,
        placeholder: r,
        disabled: p,
        role: "combobox",
        "aria-expanded": v,
        "aria-controls": v ? h : void 0,
        "aria-autocomplete": "list",
        "aria-activedescendant": v && O ? `${h}-${z}` : void 0,
        onChange: L,
        onKeyDown: X,
        onBlur: j,
        onClick: (H) => {
          const U = H.currentTarget.selectionStart ?? P.length;
          S(U), V(P, U);
        },
        className: M(
          "su-frame su-focus-ring w-full min-h-[88px] p-su3 font-sans text-body resize-y transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] placeholder:text-ink-3 focus-visible:border-accent focus-visible:shadow-none aria-invalid:border-danger disabled:opacity-45 disabled:cursor-not-allowed",
          i1[d]
        ),
        required: f == null ? void 0 : f.required,
        "aria-describedby": f == null ? void 0 : f.descriptionId,
        "aria-invalid": f != null && f.error ? !0 : void 0
      }
    ),
    v && /* @__PURE__ */ u("div", { id: h, className: ju, role: "listbox", "aria-label": "Mentions", children: I.length === 0 ? /* @__PURE__ */ u("div", { className: ka, children: qu }) : I.map((H, U) => /* @__PURE__ */ u(
      "button",
      {
        id: `${h}-${U}`,
        ref: U === z ? (te) => void (te == null ? void 0 : te.scrollIntoView({ block: "nearest" })) : void 0,
        tabIndex: -1,
        type: "button",
        role: "option",
        "aria-selected": U === z,
        "data-active": U === z || void 0,
        "aria-disabled": H.disabled || void 0,
        "data-disabled": H.disabled || void 0,
        className: Ku,
        onMouseDown: (te) => te.preventDefault(),
        onClick: () => ee(H),
        children: H.label
      },
      H.value
    )) })
  ] });
}
var s1 = Object.defineProperty, $e = (t, e) => s1(t, "name", { value: e, configurable: !0 }), fd = "Radio", [c1, pd] = /* @__PURE__ */ ge(fd), [l1, _n] = c1(fd);
function md(t) {
  const {
    __scopeRadio: e,
    checked: r = !1,
    children: o,
    disabled: n,
    form: a,
    name: i,
    onCheck: s,
    required: c,
    value: l = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = t, [d, p] = m.useState(null), [h, b] = m.useState(null), g = m.useRef(!1), [v, w] = m.useReducer(
    (C) => C + 1,
    0
  ), y = d ? !!a || !!d.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: r,
    disabled: n,
    required: c,
    name: i,
    form: a,
    value: l,
    control: d,
    setControl: p,
    hasConsumerStoppedPropagationRef: g,
    userInteractionCount: v,
    onUserInteraction: w,
    isFormControl: y,
    bubbleInput: h,
    setBubbleInput: b,
    onCheck: /* @__PURE__ */ $e(() => s == null ? void 0 : s(), "onCheck")
  };
  return /* @__PURE__ */ u(l1, { scope: e, ...x, children: hd(f) ? f(x) : o });
}
$e(md, "RadioProvider");
var u1 = "RadioTrigger", d1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $e(function({ __scopeRadio: e, onClick: r, ...o }, n) {
    const {
      checked: a,
      disabled: i,
      value: s,
      setControl: c,
      onCheck: l,
      hasConsumerStoppedPropagationRef: f,
      onUserInteraction: d,
      isFormControl: p,
      bubbleInput: h
    } = _n(u1, e), b = Y(n, c);
    return /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": a,
        "data-state": Fi(a),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...o,
        ref: b,
        onClick: F(r, (g) => {
          a || (d(), l()), h && p && (f.current = g.isPropagationStopped(), f.current || g.stopPropagation());
        })
      }
    );
  }, "RadioTrigger")
), f1 = "RadioIndicator", p1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $e(function(e, r) {
    const { __scopeRadio: o, forceMount: n, ...a } = e, i = _n(f1, o);
    return /* @__PURE__ */ u(we, { present: n || i.checked, children: /* @__PURE__ */ u(
      W.span,
      {
        "data-state": Fi(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...a,
        ref: r
      }
    ) });
  }, "RadioIndicator")
), m1 = "RadioBubbleInput", h1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $e(function({ __scopeRadio: e, onClick: r, ...o }, n) {
    const {
      control: a,
      checked: i,
      required: s,
      disabled: c,
      name: l,
      value: f,
      form: d,
      bubbleInput: p,
      setBubbleInput: h,
      hasConsumerStoppedPropagationRef: b,
      userInteractionCount: g
    } = _n(m1, e), v = Y(n, h), w = Ir(a), y = m.useRef(!1), x = m.useRef(i), C = m.useRef(g);
    m.useEffect(() => {
      const k = p;
      if (!k) return;
      const S = window.HTMLInputElement.prototype, _ = Object.getOwnPropertyDescriptor(
        S,
        "checked"
      ).set, R = g !== C.current;
      C.current = g;
      const P = x.current !== i;
      x.current = i;
      const I = !(R && b.current);
      if (P && _) {
        y.current = !R;
        const T = new Event("click", { bubbles: I });
        _.call(k, i), k.dispatchEvent(T), y.current = !1;
      }
    }, [p, i, b, g]);
    const E = m.useRef(i);
    return /* @__PURE__ */ u(
      W.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: E.current,
        required: s,
        disabled: c,
        name: l,
        value: f,
        form: d,
        ...o,
        tabIndex: -1,
        ref: v,
        onClick: F(r, (k) => {
          y.current && k.stopPropagation();
        }),
        style: {
          ...o.style,
          ...w,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "RadioBubbleInput")
);
function hd(t) {
  return typeof t == "function";
}
$e(hd, "isFunction");
function Fi(t) {
  return t ? "checked" : "unchecked";
}
$e(Fi, "getState");
var g1 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Li = "RadioGroup", [b1, uS] = /* @__PURE__ */ ge(Li, [
  Lt,
  pd
]), gd = Lt(), kn = pd(), [v1, x1] = b1(Li), w1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $e(function(e, r) {
    const {
      __scopeRadioGroup: o,
      name: n,
      form: a,
      defaultValue: i,
      value: s,
      required: c = !1,
      disabled: l = !1,
      orientation: f,
      dir: d,
      loop: p = !0,
      onValueChange: h,
      ...b
    } = e, g = gd(o), v = ct(d), [w, y] = xe({
      prop: s,
      defaultProp: i ?? null,
      onChange: h,
      caller: Li
    }), [x, C] = m.useState(null), E = Y(r, C), k = m.useRef(w);
    return m.useEffect(() => {
      const S = a ? x == null ? void 0 : x.ownerDocument.getElementById(a) : x == null ? void 0 : x.closest("form");
      if (S instanceof HTMLFormElement) {
        const A = /* @__PURE__ */ $e(() => y(k.current), "reset");
        return S.addEventListener("reset", A), () => S.removeEventListener("reset", A);
      }
    }, [x, a, y]), /* @__PURE__ */ u(
      v1,
      {
        scope: o,
        name: n,
        form: a,
        required: c,
        disabled: l,
        value: w,
        onValueChange: y,
        children: /* @__PURE__ */ u(
          pn,
          {
            asChild: !0,
            ...g,
            orientation: f,
            dir: v,
            loop: p,
            children: /* @__PURE__ */ u(
              W.div,
              {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": f,
                "data-disabled": l ? "" : void 0,
                dir: v,
                ...b,
                ref: E
              }
            )
          }
        )
      }
    );
  }, "RadioGroup")
), y1 = "RadioGroupItemProvider", C1 = "RadioGroupItemTrigger";
function bd(t) {
  const {
    __scopeRadioGroup: e,
    value: r,
    disabled: o,
    children: n,
    // @ts-expect-error
    internal_do_not_use_render: a
  } = t, i = x1(y1, e), s = kn(e), c = i.disabled || o;
  return /* @__PURE__ */ u(
    md,
    {
      ...s,
      checked: i.value === r,
      disabled: c,
      required: i.required,
      name: i.name,
      form: i.form,
      value: r,
      onCheck: () => i.onValueChange(r),
      internal_do_not_use_render: a,
      children: n
    }
  );
}
$e(bd, "RadioGroupItemProvider");
var A1 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ $e(function(e, r) {
  const { __scopeRadioGroup: o, ...n } = e, a = gd(o), i = kn(o), { checked: s, disabled: c } = _n(C1, i.__scopeRadio), l = m.useRef(null), f = Y(r, l), d = m.useRef(!1);
  return m.useEffect(() => {
    const p = /* @__PURE__ */ $e((b) => {
      g1.includes(b.key) && (d.current = !0);
    }, "handleKeyDown"), h = /* @__PURE__ */ $e(() => d.current = !1, "handleKeyUp");
    return document.addEventListener("keydown", p), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ u(
    mn,
    {
      asChild: !0,
      ...a,
      focusable: !c,
      active: s,
      children: /* @__PURE__ */ u(
        d1,
        {
          ...i,
          ...n,
          ref: f,
          onKeyDown: F(n.onKeyDown, (p) => {
            p.key === "Enter" && p.preventDefault();
          }),
          onFocus: F(n.onFocus, () => {
            var p;
            d.current && ((p = l.current) == null || p.click());
          })
        }
      )
    }
  );
}, "RadioGroupItemTrigger")), S1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $e(function(e, r) {
    const { __scopeRadioGroup: o, value: n, disabled: a, ...i } = e;
    return /* @__PURE__ */ u(
      bd,
      {
        __scopeRadioGroup: o,
        value: n,
        disabled: a,
        internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ $(ve, { children: [
          /* @__PURE__ */ u(
            A1,
            {
              ...i,
              ref: r,
              __scopeRadioGroup: o
            }
          ),
          s && /* @__PURE__ */ u(
            _1,
            {
              __scopeRadioGroup: o
            }
          )
        ] })
      }
    );
  }, "RadioGroupItem")
), _1 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ $e(function(e, r) {
  const { __scopeRadioGroup: o, ...n } = e, a = kn(o);
  return /* @__PURE__ */ u(h1, { ...a, ...n, ref: r });
}, "RadioGroupItemBubbleInput")), k1 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $e(function(e, r) {
    const { __scopeRadioGroup: o, ...n } = e, a = kn(o);
    return /* @__PURE__ */ u(p1, { ...a, ...n, ref: r });
  }, "RadioGroupIndicator")
);
function dS({
  value: t,
  defaultValue: e,
  disabled: r,
  name: o,
  direction: n = "vertical",
  options: a,
  className: i,
  children: s,
  onValueChange: c
}) {
  const l = At(), f = Ee(), d = r ?? l.disabled;
  return /* @__PURE__ */ u(
    w1,
    {
      id: f == null ? void 0 : f.id,
      value: t,
      defaultValue: e,
      disabled: d,
      name: o,
      className: M(
        "flex",
        n === "horizontal" ? "flex-row flex-wrap gap-su4" : "flex-col gap-su2",
        i
      ),
      onValueChange: c,
      "aria-describedby": f == null ? void 0 : f.descriptionId,
      "aria-invalid": f != null && f.error ? !0 : void 0,
      children: a ? a.map((p) => /* @__PURE__ */ u(E1, { value: p.value, disabled: p.disabled, children: p.label }, p.value)) : s
    }
  );
}
const R1 = [
  "flex items-center justify-center size-5 rounded-none bg-transparent cursor-pointer",
  // ink-3 (not gray-3) so the unchecked ring clears WCAG 1.4.11 3:1 against paper, as Switch's track does.
  "border-[1.5px] border-solid border-ink-3 contrast-more:border-[var(--su-label)]",
  "transition-[border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "hover:border-[var(--su-label)] data-[state=checked]:border-accent data-[state=checked]:hover:border-accent",
  "su-focus-ring",
  "disabled:cursor-not-allowed"
].join(" ");
function E1({ value: t, disabled: e, className: r, children: o }) {
  const n = At();
  return /* @__PURE__ */ $(
    "label",
    {
      className: M(
        "inline-flex items-center gap-su2 min-h-[var(--su-hit-target)] cursor-pointer",
        "[&:has(button:disabled)]:opacity-45 [&:has(button:disabled)]:cursor-not-allowed",
        r
      ),
      children: [
        /* @__PURE__ */ u(S1, { value: t, disabled: e ?? n.disabled, className: R1, children: /* @__PURE__ */ u(k1, { className: "block size-2 rounded-full bg-accent" }) }),
        o && /* @__PURE__ */ u("span", { className: "text-body text-label select-none", children: o })
      ]
    }
  );
}
const P1 = [
  "inline-flex items-center justify-center size-[var(--su-hit-target)] p-0 bg-transparent cursor-pointer",
  "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "su-focus-ring"
].join(" ");
function fS({
  value: t,
  defaultValue: e = 0,
  count: r = 5,
  allowClear: o = !0,
  disabled: n,
  className: a,
  onChange: i,
  "aria-label": s = "Rating"
}) {
  const c = At(), l = Ee(), f = n ?? c.disabled, [d, p] = Q(e), [h, b] = Q(null), g = t !== void 0, v = g ? t : d, w = h ?? v;
  return (
    // Not role="slider": a slider must be focusable and own its arrow keys, and
    // must not contain interactive descendants. The stars are real buttons, so
    // this is a labelled group of them.
    // ponytail: no allowHalf / custom character / arrow-key roving focus — add
    // them as additive props when a real rating flow asks for them.
    /* @__PURE__ */ $(
      "div",
      {
        id: l == null ? void 0 : l.id,
        className: M("inline-flex items-center", a),
        role: "group",
        "aria-label": s,
        "aria-describedby": l == null ? void 0 : l.descriptionId,
        "aria-invalid": l != null && l.error ? !0 : void 0,
        onMouseLeave: () => b(null),
        children: [
          Array.from({ length: r }, (y, x) => {
            const C = x + 1;
            return /* @__PURE__ */ u(
              "button",
              {
                type: "button",
                disabled: f,
                className: M(
                  P1,
                  C <= w ? "text-ink" : "text-[var(--su-gray-4)] contrast-more:text-[var(--su-label)]",
                  f && "opacity-45 cursor-not-allowed"
                ),
                "aria-label": `${C} star${C > 1 ? "s" : ""}`,
                "aria-pressed": C === v,
                onMouseEnter: () => !f && b(C),
                onFocus: () => !f && b(C),
                onBlur: () => b(null),
                onClick: () => {
                  if (f) return;
                  const E = o && v === C ? 0 : C;
                  g || p(E), i == null || i(E);
                },
                children: /* @__PURE__ */ u("svg", { viewBox: "0 0 24 24", className: "size-[22px]", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ u("path", { d: "M12 2.5 15.09 8.76 22 9.77l-5 4.87 1.18 6.86L12 18.26l-6.18 3.24L7 14.64l-5-4.87 6.91-1.01z" }) })
              },
              C
            );
          }),
          w > 0 && /* @__PURE__ */ $("span", { className: "ml-su1 text-footnote text-label-secondary", children: [
            w,
            "/",
            r
          ] })
        ]
      }
    )
  );
}
var I1 = Object.defineProperty, ce = (t, e) => I1(t, "name", { value: e, configurable: !0 }), vd = ["PageUp", "PageDown"], xd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], wd = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, po = "Slider", [Ea, T1, M1] = /* @__PURE__ */ or(po), [Vi, pS] = /* @__PURE__ */ ge(po, [
  M1
]), [D1, mo] = Vi(po), N1 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ce(function(e, r) {
    const {
      name: o,
      min: n = 0,
      max: a = 100,
      step: i = 1,
      orientation: s = "horizontal",
      disabled: c = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: f = [n],
      value: d,
      onValueChange: p = /* @__PURE__ */ ce(() => {
      }, "onValueChange"),
      onValueCommit: h = /* @__PURE__ */ ce(() => {
      }, "onValueCommit"),
      inverted: b = !1,
      form: g,
      ...v
    } = e, w = m.useRef(/* @__PURE__ */ new Set()), y = m.useRef(0), x = m.useRef(!1), E = s === "horizontal" ? O1 : $1, [k, S] = m.useState(null), A = Y(r, S), [_ = [], R] = xe({
      prop: d,
      defaultProp: f,
      onChange: /* @__PURE__ */ ce((N) => {
        var V;
        (V = [...w.current][y.current]) == null || V.focus({
          preventScroll: !0,
          focusVisible: x.current
        }), x.current = !1, p(N);
      }, "onChange")
    }), P = m.useRef(_), I = m.useRef(_);
    m.useEffect(() => {
      const N = g ? k == null ? void 0 : k.ownerDocument.getElementById(g) : k == null ? void 0 : k.closest("form");
      if (N instanceof HTMLFormElement) {
        const B = /* @__PURE__ */ ce(() => R(I.current), "reset");
        return N.addEventListener("reset", B), () => N.removeEventListener("reset", B);
      }
    }, [k, g, R]);
    function T(N) {
      const B = Ed(_, N);
      O(N, B);
    }
    ce(T, "handleSlideStart");
    function D(N) {
      O(N, y.current);
    }
    ce(D, "handleSlideMove");
    function z() {
      String(_) !== String(P.current) && h(_);
    }
    ce(z, "handleSlideEnd");
    function O(N, B, { commit: V } = { commit: !1 }) {
      const L = Wi(i), ee = Gr(Math.round((N - n) / i) * i + n, L), X = yr(ee, [n, a]);
      R((j = []) => {
        const oe = kd(j, X, B);
        if (Td(oe, l * i)) {
          y.current = oe.indexOf(X);
          const H = String(oe) !== String(j);
          return H && V && h(oe), H ? oe : j;
        } else
          return j;
      });
    }
    return ce(O, "updateValues"), /* @__PURE__ */ u(
      D1,
      {
        scope: e.__scopeSlider,
        name: o,
        disabled: c,
        min: n,
        max: a,
        valueIndexToChangeRef: y,
        thumbs: w.current,
        values: _,
        orientation: s,
        form: g,
        children: /* @__PURE__ */ u(Ea.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ u(Ea.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ u(
          E,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...v,
            ref: A,
            onPointerDown: F(v.onPointerDown, () => {
              c || (P.current = _, x.current = !1);
            }),
            min: n,
            max: a,
            inverted: b,
            onSlideStart: c ? void 0 : T,
            onSlideMove: c ? void 0 : D,
            onSlideEnd: c ? void 0 : z,
            onHomeKeyDown: () => {
              c || (x.current = !0, O(n, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              c || (x.current = !0, O(a, _.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: N, direction: B }) => {
              if (!c) {
                x.current = !0;
                const ee = vd.includes(N.key) || N.shiftKey && xd.includes(N.key) ? 10 : 1, X = y.current, j = _[X], oe = Md(j, {
                  min: n,
                  step: i,
                  direction: B,
                  multiplier: ee
                });
                O(oe, X, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }, "Slider")
), [yd, Cd] = Vi(po, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), O1 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ce(function(e, r) {
    const {
      min: o,
      max: n,
      dir: a,
      inverted: i,
      onSlideStart: s,
      onSlideMove: c,
      onSlideEnd: l,
      onStepKeyDown: f,
      ...d
    } = e, [p, h] = m.useState(null), b = Y(r, h), g = m.useRef(void 0), v = ct(a), w = v === "ltr", y = w && !i || !w && i;
    function x(C) {
      const E = g.current || p.getBoundingClientRect(), k = [0, E.width], A = Rn(k, y ? [o, n] : [n, o]);
      return g.current = E, A(C - E.left);
    }
    return ce(x, "getValueFromPointer"), /* @__PURE__ */ u(
      yd,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ u(
          Ad,
          {
            dir: v,
            "data-orientation": "horizontal",
            ...d,
            ref: b,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (C) => {
              const E = x(C.clientX);
              s == null || s(E);
            },
            onSlideMove: (C) => {
              const E = x(C.clientX);
              c == null || c(E);
            },
            onSlideEnd: () => {
              g.current = void 0, l == null || l();
            },
            onStepKeyDown: (C) => {
              const k = wd[y ? "from-left" : "from-right"].includes(C.key);
              f == null || f({ event: C, direction: k ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderHorizontal")
), $1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ce(function(e, r) {
    const {
      min: o,
      max: n,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...f
    } = e, d = m.useRef(null), p = Y(r, d), h = m.useRef(void 0), b = !a;
    function g(v) {
      const w = h.current || d.current.getBoundingClientRect(), y = [0, w.height], C = Rn(y, b ? [n, o] : [o, n]);
      return h.current = w, C(v - w.top);
    }
    return ce(g, "getValueFromPointer"), /* @__PURE__ */ u(
      yd,
      {
        scope: e.__scopeSlider,
        startEdge: b ? "bottom" : "top",
        endEdge: b ? "top" : "bottom",
        size: "height",
        direction: b ? 1 : -1,
        children: /* @__PURE__ */ u(
          Ad,
          {
            "data-orientation": "vertical",
            ...f,
            ref: p,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const w = g(v.clientY);
              i == null || i(w);
            },
            onSlideMove: (v) => {
              const w = g(v.clientY);
              s == null || s(w);
            },
            onSlideEnd: () => {
              h.current = void 0, c == null || c();
            },
            onStepKeyDown: (v) => {
              const y = wd[b ? "from-bottom" : "from-top"].includes(v.key);
              l == null || l({ event: v, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderVertical")
), Ad = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ce(function(e, r) {
    const {
      __scopeSlider: o,
      onSlideStart: n,
      onSlideMove: a,
      onSlideEnd: i,
      onHomeKeyDown: s,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...f
    } = e, d = mo(po, o);
    return /* @__PURE__ */ u(
      W.span,
      {
        ...f,
        ref: r,
        onKeyDown: F(e.onKeyDown, (p) => {
          p.key === "Home" ? (s(p), p.preventDefault()) : p.key === "End" ? (c(p), p.preventDefault()) : vd.concat(xd).includes(p.key) && (l(p), p.preventDefault());
        }),
        onPointerDown: F(e.onPointerDown, (p) => {
          const h = p.target;
          h.setPointerCapture(p.pointerId), p.preventDefault(), d.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : n(p);
        }),
        onPointerMove: F(e.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && a(p);
        }),
        onPointerUp: F(e.onPointerUp, (p) => {
          const h = p.target;
          h.hasPointerCapture(p.pointerId) && (h.releasePointerCapture(p.pointerId), i(p));
        })
      }
    );
  }, "SliderImpl")
), B1 = "SliderTrack", z1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ce(function(e, r) {
    const { __scopeSlider: o, ...n } = e, a = mo(B1, o);
    return /* @__PURE__ */ u(
      W.span,
      {
        "data-disabled": a.disabled ? "" : void 0,
        "data-orientation": a.orientation,
        ...n,
        ref: r
      }
    );
  }, "SliderTrack")
), fc = "SliderRange", F1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ce(function(e, r) {
    const { __scopeSlider: o, ...n } = e, a = mo(fc, o), i = Cd(fc, o), s = m.useRef(null), c = Y(r, s), l = a.values.length, f = a.values.map(
      (h) => Ui(h, a.min, a.max)
    ), d = l > 1 ? Math.min(...f) : 0, p = 100 - Math.max(...f);
    return /* @__PURE__ */ u(
      W.span,
      {
        "data-orientation": a.orientation,
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: c,
        style: {
          ...e.style,
          [i.startEdge]: d + "%",
          [i.endEdge]: p + "%"
        }
      }
    );
  }, "SliderRange")
), L1 = "SliderThumb", [V1, Sd] = Vi(L1), U1 = "SliderThumbProvider";
function _d(t) {
  const {
    __scopeSlider: e,
    name: r,
    children: o,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: n
  } = t, a = mo(U1, e), i = T1(e), [s, c] = m.useState(null), l = m.useMemo(
    () => s ? i().findIndex((v) => v.ref.current === s) : -1,
    [i, s]
  ), f = Ir(s), d = s ? !!a.form || !!s.closest("form") : !0, p = a.values[l], h = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), b = p === void 0 ? 0 : Ui(p, a.min, a.max);
  m.useEffect(() => {
    if (s)
      return a.thumbs.add(s), () => {
        a.thumbs.delete(s);
      };
  }, [s, a.thumbs]);
  const g = {
    value: p,
    name: h,
    form: a.form,
    isFormControl: d,
    index: l,
    thumb: s,
    onThumbChange: c,
    percent: b,
    size: f
  };
  return /* @__PURE__ */ u(V1, { scope: e, ...g, children: Dd(n) ? n(g) : o });
}
ce(_d, "SliderThumbProvider");
var na = "SliderThumbTrigger", W1 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ce(function(e, r) {
    const { __scopeSlider: o, ...n } = e, a = mo(na, o), i = Cd(na, o), { index: s, value: c, percent: l, size: f, onThumbChange: d } = Sd(
      na,
      o
    ), p = Y(r, d), h = Rd(s, a.values.length), b = f == null ? void 0 : f[i.size], g = b ? Pd(b, l, i.direction) : 0;
    return /* @__PURE__ */ u(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [i.startEdge]: `calc(${l}% + ${g}px)`
        },
        children: /* @__PURE__ */ u(Ea.ItemSlot, { scope: o, children: /* @__PURE__ */ u(
          W.span,
          {
            role: "slider",
            "aria-label": e["aria-label"] || h,
            "aria-valuemin": a.min,
            "aria-valuenow": c,
            "aria-valuemax": a.max,
            "aria-orientation": a.orientation,
            "data-orientation": a.orientation,
            "data-disabled": a.disabled ? "" : void 0,
            tabIndex: a.disabled ? void 0 : 0,
            ...n,
            ref: p,
            style: c === void 0 ? { display: "none" } : e.style,
            onFocus: F(e.onFocus, () => {
              a.valueIndexToChangeRef.current = s;
            })
          }
        ) })
      }
    );
  }, "SliderThumbTrigger")
), H1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ce(function(e, r) {
    const { __scopeSlider: o, name: n, ...a } = e;
    return /* @__PURE__ */ u(
      _d,
      {
        __scopeSlider: o,
        name: n,
        internal_do_not_use_render: ({ index: i, isFormControl: s }) => /* @__PURE__ */ $(ve, { children: [
          /* @__PURE__ */ u(
            W1,
            {
              ...a,
              ref: r,
              __scopeSlider: o
            }
          ),
          s ? /* @__PURE__ */ u(
            Y1,
            {
              __scopeSlider: o
            },
            i
          ) : null
        ] })
      }
    );
  }, "SliderThumb")
), G1 = "SliderBubbleInput", Y1 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ce(function({ __scopeSlider: e, ...r }, o) {
    const { value: n, name: a, form: i } = Sd(G1, e), s = m.useRef(null), c = Y(s, o), l = Pi(n);
    return m.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(d, "value").set;
      if (l !== n && h) {
        const b = new Event("input", { bubbles: !0 });
        h.call(f, n), f.dispatchEvent(b);
      }
    }, [l, n]), /* @__PURE__ */ u(
      W.input,
      {
        style: { display: "none" },
        name: a,
        form: i,
        ...r,
        ref: c,
        defaultValue: n
      }
    );
  }, "SliderBubbleInput")
);
function kd(t = [], e, r) {
  const o = [...t];
  return o[r] = e, o.sort((n, a) => n - a);
}
ce(kd, "getNextSortedValues");
function Ui(t, e, r) {
  const a = 100 / (r - e) * (t - e);
  return yr(a, [0, 100]);
}
ce(Ui, "convertValueToPercentage");
function Rd(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
ce(Rd, "getLabel");
function Ed(t, e) {
  if (t.length === 1) return 0;
  const r = t.map((n) => Math.abs(n - e)), o = Math.min(...r);
  return r.indexOf(o);
}
ce(Ed, "getClosestValueIndex");
function Pd(t, e, r) {
  const o = t / 2, a = Rn([0, 50], [0, o]);
  return (o - a(e) * r) * r;
}
ce(Pd, "getThumbInBoundsOffset");
function Id(t) {
  return t.slice(0, -1).map((e, r) => t[r + 1] - e);
}
ce(Id, "getStepsBetweenValues");
function Td(t, e) {
  if (e > 0) {
    const r = Id(t);
    return Math.min(...r) >= e;
  }
  return !0;
}
ce(Td, "hasMinStepsBetweenValues");
function Rn(t, e) {
  return (r) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const o = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + o * (r - t[0]);
  };
}
ce(Rn, "linearScale");
function Wi(t) {
  if (!Number.isFinite(t)) return 0;
  const e = t.toString();
  if (e.includes("e")) {
    const [o, n] = e.split("e"), a = o.split(".")[1] || "", i = Number(n);
    return Math.max(0, a.length - i);
  }
  const r = e.split(".")[1];
  return r ? r.length : 0;
}
ce(Wi, "getDecimalCount");
function Gr(t, e) {
  const r = Math.pow(10, e);
  return Math.round(t * r) / r;
}
ce(Gr, "roundValue");
function Md(t, {
  min: e,
  step: r,
  direction: o,
  multiplier: n
}) {
  const a = Wi(r), i = (t - e) / r, s = Math.round(i), c = Gr(s * r + e, a) === Gr(t, a);
  let l;
  return c ? l = s + n * o : o > 0 ? l = Math.ceil(i) : l = Math.floor(i), Gr(l * r + e, a);
}
ce(Md, "getNextStepValue");
function Dd(t) {
  return typeof t == "function";
}
ce(Dd, "isFunction");
function mS({
  value: t,
  defaultValue: e = [0],
  min: r = 0,
  max: o = 100,
  step: n = 1,
  orientation: a = "horizontal",
  disabled: i,
  className: s,
  onValueChange: c,
  onValueCommit: l,
  "aria-label": f = "Value"
}) {
  const d = At(), p = Ee(), h = i ?? d.disabled, b = t ?? e;
  return /* @__PURE__ */ $(
    N1,
    {
      id: p == null ? void 0 : p.id,
      value: t,
      defaultValue: e,
      min: r,
      max: o,
      step: n,
      orientation: a,
      disabled: h,
      className: M(
        "relative flex items-center w-full min-h-[var(--su-hit-target)] touch-none select-none",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-auto data-[orientation=vertical]:h-40 data-[orientation=vertical]:min-w-[var(--su-hit-target)]",
        h && "opacity-45 pointer-events-none",
        s
      ),
      onValueChange: c,
      onValueCommit: l,
      "aria-describedby": p == null ? void 0 : p.descriptionId,
      "aria-invalid": p != null && p.error ? !0 : void 0,
      children: [
        /* @__PURE__ */ u(z1, { className: "relative flex-1 h-0.5 rounded-none bg-rule data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-0.5", children: /* @__PURE__ */ u(F1, { className: "absolute h-full rounded-none bg-action data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-full" }) }),
        b.map((g, v) => /* @__PURE__ */ u(
          H1,
          {
            className: "block size-4 border border-solid border-rule-strong rounded-none bg-paper shadow-none cursor-grab transition-[border-color,background-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none hover:border-accent active:cursor-grabbing active:border-action-press active:bg-accent-soft su-focus-ring",
            "aria-label": b.length > 1 ? `${f} ${v + 1}` : f
          },
          v
        ))
      ]
    }
  );
}
var Q1 = Object.defineProperty, $t = (t, e) => Q1(t, "name", { value: e, configurable: !0 }), Hi = "Switch", [X1, hS] = /* @__PURE__ */ ge(Hi), [j1, Gi] = X1(Hi);
function Nd(t) {
  const {
    __scopeSwitch: e,
    checked: r,
    children: o,
    defaultChecked: n,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: c,
    required: l,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = t, [p, h] = xe({
    prop: r,
    defaultProp: n ?? !1,
    onChange: c,
    caller: Hi
  }), [b, g] = m.useState(null), [v, w] = m.useState(null), y = m.useRef(!1), [x, C] = m.useReducer(
    (S) => S + 1,
    0
  ), E = b ? !!i || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: p,
    setChecked: h,
    disabled: a,
    control: b,
    setControl: g,
    name: s,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: y,
    userInteractionCount: x,
    onUserInteraction: C,
    required: l,
    defaultChecked: n,
    isFormControl: E,
    bubbleInput: v,
    setBubbleInput: w
  };
  return /* @__PURE__ */ u(j1, { scope: e, ...k, children: Od(d) ? d(k) : o });
}
$t(Nd, "SwitchProvider");
var K1 = "SwitchTrigger", q1 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $t(function({ __scopeSwitch: e, onClick: r, ...o }, n) {
    const {
      control: a,
      form: i,
      value: s,
      disabled: c,
      checked: l,
      required: f,
      setControl: d,
      setChecked: p,
      hasConsumerStoppedPropagationRef: h,
      onUserInteraction: b,
      isFormControl: g,
      bubbleInput: v
    } = Gi(K1, e), w = Y(n, d), y = m.useRef(l);
    return m.useEffect(() => {
      const x = i ? a == null ? void 0 : a.ownerDocument.getElementById(i) : a == null ? void 0 : a.form;
      if (x instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ $t(() => p(y.current), "reset");
        return x.addEventListener("reset", C), () => x.removeEventListener("reset", C);
      }
    }, [a, i, p]), /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": f,
        "data-state": Yi(l),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: s,
        ...o,
        ref: w,
        onClick: F(r, (x) => {
          b(), p((C) => !C), v && g && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), J1 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $t(function(e, r) {
    const {
      __scopeSwitch: o,
      name: n,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: c,
      value: l,
      onCheckedChange: f,
      form: d,
      ...p
    } = e;
    return /* @__PURE__ */ u(
      Nd,
      {
        __scopeSwitch: o,
        checked: a,
        defaultChecked: i,
        disabled: c,
        required: s,
        onCheckedChange: f,
        name: n,
        form: d,
        value: l,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ $(ve, { children: [
          /* @__PURE__ */ u(
            q1,
            {
              ...p,
              ref: r,
              __scopeSwitch: o
            }
          ),
          h && /* @__PURE__ */ u(
            rw,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), Z1 = "SwitchThumb", ew = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ $t(function(e, r) {
    const { __scopeSwitch: o, ...n } = e, a = Gi(Z1, o);
    return /* @__PURE__ */ u(
      W.span,
      {
        "data-state": Yi(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: r
      }
    );
  }, "SwitchThumb")
), tw = "SwitchBubbleInput", rw = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $t(function({ __scopeSwitch: e, onClick: r, ...o }, n) {
    const {
      control: a,
      hasConsumerStoppedPropagationRef: i,
      userInteractionCount: s,
      checked: c,
      defaultChecked: l,
      required: f,
      disabled: d,
      name: p,
      value: h,
      form: b,
      bubbleInput: g,
      setBubbleInput: v
    } = Gi(tw, e), w = Y(n, v), y = Ir(a), x = m.useRef(!1), C = m.useRef(c), E = m.useRef(s);
    m.useEffect(() => {
      const S = g;
      if (!S) return;
      const A = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        A,
        "checked"
      ).set, P = s !== E.current;
      E.current = s;
      const I = C.current !== c;
      C.current = c;
      const T = !(P && i.current);
      if (I && R) {
        x.current = !P;
        const D = new Event("click", { bubbles: T });
        R.call(S, c), S.dispatchEvent(D), x.current = !1;
      }
    }, [g, c, i, s]);
    const k = m.useRef(c);
    return /* @__PURE__ */ u(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? k.current,
        required: f,
        disabled: d,
        name: p,
        value: h,
        form: b,
        ...o,
        tabIndex: -1,
        ref: w,
        onClick: F(r, (S) => {
          x.current && S.stopPropagation();
        }),
        style: {
          ...o.style,
          ...y,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "SwitchBubbleInput")
);
function Od(t) {
  return typeof t == "function";
}
$t(Od, "isFunction");
function Yi(t) {
  return t ? "checked" : "unchecked";
}
$t(Yi, "getState");
const ow = [
  "relative flex items-center w-[51px] h-[31px] p-0 rounded-none cursor-pointer",
  "border-[1.5px] border-solid border-ink-3 bg-[var(--su-gray-4)] contrast-more:border-[var(--su-label)]",
  "transition-[background-color,border-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "data-[state=checked]:bg-action data-[state=checked]:border-action",
  "disabled:cursor-not-allowed",
  "su-focus-ring"
].join(" "), nw = [
  "flex items-center justify-center size-[24px] rounded-none bg-on-action shadow-none",
  "border border-solid border-ink-3 data-[state=checked]:border-transparent",
  "transition-transform duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] will-change-transform",
  "translate-x-[2px] data-[state=checked]:translate-x-[22px]",
  // physical translates, mirrored under [dir=rtl] so the thumb travels toward the trailing edge
  "rtl:-translate-x-[2px] rtl:data-[state=checked]:-translate-x-[22px]"
].join(" ");
function gS({
  checked: t,
  defaultChecked: e,
  disabled: r,
  loading: o,
  required: n,
  name: a,
  value: i,
  id: s,
  className: c,
  children: l,
  onCheckedChange: f,
  "aria-label": d,
  "aria-labelledby": p
}) {
  const h = At(), b = Ee(), g = r ?? h.disabled;
  return /* @__PURE__ */ $(
    "label",
    {
      className: M(
        "inline-flex items-center gap-su2 min-h-[var(--su-hit-target)] cursor-pointer",
        g && "opacity-45 cursor-not-allowed",
        o && "cursor-wait",
        c
      ),
      children: [
        /* @__PURE__ */ u(
          J1,
          {
            id: s ?? (b == null ? void 0 : b.id),
            "aria-label": l ? void 0 : d,
            "aria-labelledby": l ? void 0 : p,
            checked: t,
            defaultChecked: e,
            disabled: g,
            required: n ?? (b == null ? void 0 : b.required),
            name: a,
            value: i,
            className: M(ow, o && "cursor-wait"),
            onClick: (v) => {
              o && (v.preventDefault(), v.stopPropagation());
            },
            onCheckedChange: (v) => {
              o || f == null || f(v);
            },
            "aria-describedby": b == null ? void 0 : b.descriptionId,
            "aria-invalid": b != null && b.error ? !0 : void 0,
            "aria-busy": o || void 0,
            children: /* @__PURE__ */ u(ew, { className: nw, children: o ? /* @__PURE__ */ u(Qa, { size: "sm" }) : null })
          }
        ),
        l && /* @__PURE__ */ u("span", { className: "text-body text-label select-none", children: l })
      ]
    }
  );
}
function bS({
  value: t,
  defaultValue: e,
  min: r,
  max: o,
  step: n,
  disabled: a,
  size: i,
  className: s,
  onChange: c,
  id: l,
  name: f,
  "aria-label": d,
  "aria-labelledby": p
}) {
  const h = Ee(), { size: b, disabled: g } = tt(i, a), [v, w] = Q(e ?? ""), y = t !== void 0, x = y ? t : v, C = Re(
    (k) => {
      y || w(k), c == null || c(k);
    },
    [y, c]
  ), E = (k) => {
    C(k.target.value);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "inline-flex w-full max-w-[180px]",
        g && "opacity-45 cursor-not-allowed",
        s
      ),
      children: /* @__PURE__ */ u(
        "input",
        {
          type: "time",
          id: l ?? (h == null ? void 0 : h.id),
          name: f,
          value: x,
          min: r,
          max: o,
          step: n,
          disabled: g,
          onChange: E,
          className: M(uo, yi, Nr[b]),
          required: h == null ? void 0 : h.required,
          "aria-label": d,
          "aria-labelledby": p,
          "aria-describedby": h == null ? void 0 : h.descriptionId,
          "aria-invalid": h != null && h.error ? !0 : void 0
        }
      )
    }
  );
}
const pc = "min-w-[var(--su-hit-target)] min-h-[var(--su-control-lg)] px-[var(--su-space-2)] py-0 border border-solid border-rule-strong rounded-none bg-canvas text-label text-body cursor-pointer transition-[background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] rtl:rotate-180 hover:not-disabled:bg-fill su-focus-ring disabled:opacity-45 disabled:cursor-not-allowed", aw = "flex-1 min-w-0 flex flex-col border border-solid border-rule border-t-rule-strong rounded-none bg-paper overflow-hidden", iw = "flex items-center justify-between gap-su2 px-[var(--su-space-3)] py-[var(--su-space-2)] border-b border-solid border-rule bg-canvas su-label text-ink-2", sw = "flex items-center gap-su2 p-su2 rounded-none text-body text-label cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-secondary su-focus-ring [&_>span]:min-w-0 [&_>span]:overflow-hidden [&_>span]:whitespace-nowrap [&_>span]:text-ellipsis";
function vS({
  dataSource: t = [],
  targetKeys: e,
  defaultTargetKeys: r = [],
  disabled: o,
  titles: n = ["Source", "Target"],
  className: a,
  onChange: i
}) {
  const s = At(), c = Ee(), l = o ?? s.disabled, [f, d] = Q(r), [p, h] = Q([]), [b, g] = Q([]), [v, w] = Q({ source: 0, target: 0 }), y = e !== void 0, x = y ? e : f, C = Re(
    (I) => {
      y || d(I), i == null || i(I);
    },
    [y, i]
  ), E = Fe(
    () => t.filter((I) => !x.includes(I.value)),
    [t, x]
  ), k = Fe(
    () => t.filter((I) => x.includes(I.value)),
    [t, x]
  ), S = (I, T, D) => {
    if (l || D) return;
    (T === "source" ? h : g)(
      (O) => O.includes(I) ? O.filter((N) => N !== I) : [...O, I]
    );
  }, A = (I = p) => {
    l || I.length === 0 || (C([...x, ...I.filter((T) => !x.includes(T))]), h([]));
  }, _ = (I = b) => {
    l || I.length === 0 || (C(x.filter((T) => !I.includes(T))), g([]));
  }, R = (I, T) => {
    var N;
    const D = Array.from(
      I.currentTarget.querySelectorAll('[role="option"]')
    );
    if (D.length === 0) return;
    const z = D.indexOf(document.activeElement);
    let O;
    if (I.key === "ArrowDown") O = Math.min(z + 1, D.length - 1);
    else if (I.key === "ArrowUp") O = Math.max(z - 1, 0);
    else if (I.key === "Home") O = 0;
    else if (I.key === "End") O = D.length - 1;
    else return;
    I.preventDefault(), w((B) => ({ ...B, [T]: O })), (N = D[O]) == null || N.focus();
  }, P = (I, T, D, z) => {
    const O = T.findIndex((B) => !B.disabled), N = !l && T[v[z]] && !T[v[z]].disabled ? v[z] : O;
    return /* @__PURE__ */ $("div", { className: aw, children: [
      /* @__PURE__ */ $("div", { className: iw, children: [
        /* @__PURE__ */ u("span", { className: "truncate", children: I }),
        /* @__PURE__ */ $("span", { className: "hidden sm:inline text-footnote text-label-secondary tabular-nums normal-case tracking-normal font-sans", children: [
          D.length,
          "/",
          T.length
        ] })
      ] }),
      /* @__PURE__ */ u(
        "div",
        {
          className: "flex-1 overflow-auto max-h-[240px] p-su1",
          role: "listbox",
          "aria-label": I,
          "aria-multiselectable": "true",
          "aria-describedby": c == null ? void 0 : c.descriptionId,
          "aria-invalid": c != null && c.error ? !0 : void 0,
          onKeyDown: (B) => R(B, z),
          children: T.length === 0 ? /* @__PURE__ */ u("div", { className: "p-su3 text-footnote text-ink-2 text-center", children: "No items" }) : T.map((B, V) => {
            const L = D.includes(B.value), ee = l || B.disabled;
            return /* @__PURE__ */ u(
              "div",
              {
                role: "option",
                tabIndex: !ee && V === N ? 0 : -1,
                "aria-disabled": ee,
                "aria-selected": L,
                onKeyDown: (X) => {
                  (X.key === " " || X.key === "Enter") && (X.preventDefault(), S(B.value, z, B.disabled));
                },
                className: M(
                  sw,
                  L && "bg-accent-soft",
                  // root already dims when the whole control is disabled
                  B.disabled && "opacity-45",
                  ee && "cursor-not-allowed"
                ),
                onClick: () => S(B.value, z, B.disabled),
                onDoubleClick: () => {
                  ee || (z === "source" ? A([B.value]) : _([B.value]));
                },
                children: /* @__PURE__ */ u("span", { children: B.label })
              },
              B.value
            );
          })
        }
      )
    ] });
  };
  return /* @__PURE__ */ $(
    "div",
    {
      id: c == null ? void 0 : c.id,
      className: M(
        "flex items-stretch w-full gap-su3",
        l && "opacity-45",
        a
      ),
      role: "group",
      children: [
        P(n[0], E, p, "source"),
        /* @__PURE__ */ $("div", { className: "flex flex-col justify-center gap-su2", children: [
          /* @__PURE__ */ u(
            "button",
            {
              type: "button",
              className: pc,
              disabled: l || p.length === 0,
              onClick: () => A(),
              "aria-label": "Move to target",
              children: "›"
            }
          ),
          /* @__PURE__ */ u(
            "button",
            {
              type: "button",
              className: pc,
              disabled: l || b.length === 0,
              onClick: () => _(),
              "aria-label": "Move to source",
              children: "‹"
            }
          )
        ] }),
        P(n[1], k, b, "target")
      ]
    }
  );
}
function Pa(t, e) {
  for (const r of t) {
    if (r.key === e) return r.title;
    if (r.children) {
      const o = Pa(r.children, e);
      if (o) return o;
    }
  }
  return null;
}
const cw = "inline-flex items-center justify-center shrink-0 self-stretch w-11 p-0 bg-transparent text-label-secondary text-caption-1 leading-none cursor-pointer su-focus-ring disabled:cursor-not-allowed";
function $d({
  node: t,
  depth: e,
  expanded: r,
  selected: o,
  multiple: n,
  disabled: a,
  onToggleExpand: i,
  onSelect: s
}) {
  var p;
  const c = !!((p = t.children) != null && p.length), l = r.has(t.key), f = n ? Array.isArray(o) && o.includes(t.key) : o === t.key, d = a || t.disabled;
  return /* @__PURE__ */ $(ve, { children: [
    /* @__PURE__ */ $(
      "div",
      {
        role: "treeitem",
        "aria-level": e + 1,
        "aria-selected": f,
        "aria-expanded": c ? l : void 0,
        className: M(
          "flex items-center gap-su1 w-full min-w-0 min-h-[var(--su-hit-target)] pe-su2 py-0 rounded-none hover:bg-fill-secondary",
          f && "bg-fill-secondary shadow-[inset_2px_0_0_var(--su-accent)]",
          d && "opacity-45"
        ),
        style: { paddingInlineStart: `calc(var(--su-space-2) + ${e * 12}px)` },
        children: [
          c ? /* @__PURE__ */ u(
            "button",
            {
              type: "button",
              className: cw,
              "aria-label": l ? "Collapse" : "Expand",
              "aria-expanded": l,
              disabled: d,
              onClick: () => i(t.key),
              children: l ? "▾" : "▸"
            }
          ) : /* @__PURE__ */ u("span", { className: "shrink-0 w-11", "aria-hidden": "true" }),
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              disabled: d,
              className: "flex items-center gap-su2 flex-1 self-stretch min-w-0 p-0 bg-transparent text-label text-body text-start cursor-pointer su-focus-ring disabled:cursor-not-allowed",
              onClick: () => s(t.key),
              children: [
                n && /* @__PURE__ */ u("span", { className: "shrink-0 w-[14px] text-accent", "aria-hidden": "true", children: f ? "✓" : "" }),
                /* @__PURE__ */ u("span", { className: "min-w-0 truncate", children: t.title })
              ]
            }
          )
        ]
      }
    ),
    c && l && /* @__PURE__ */ u("div", { role: "group", children: t.children.map((h) => /* @__PURE__ */ u(
      $d,
      {
        node: h,
        depth: e + 1,
        expanded: r,
        selected: o,
        multiple: n,
        disabled: a,
        onToggleExpand: i,
        onSelect: s
      },
      h.key
    )) })
  ] });
}
function xS(t) {
  const {
    value: e,
    defaultValue: r,
    placeholder: o = "Select…",
    disabled: n,
    treeData: a = [],
    multiple: i = !1,
    className: s,
    onChange: c
  } = t, l = Ee(), { disabled: f } = tt(void 0, n), [d, p] = Q(r), [h, b] = Q(!1), [g, v] = Q(/* @__PURE__ */ new Set()), w = e !== void 0, y = w ? e : d, x = Fe(() => i && Array.isArray(y) ? y.length === 0 ? null : y.map((A) => Pa(a, A) ?? A).join(", ") : typeof y == "string" ? Pa(a, y) ?? y : null, [y, a, i]), C = Re(
    (A) => {
      w || p(A), c == null || c(A);
    },
    [w, i, c]
  ), E = (A) => {
    if (i) {
      const _ = Array.isArray(y) ? y : [], R = _.includes(A) ? _.filter((P) => P !== A) : [..._, A];
      C(R);
    } else
      C(A), b(!1);
  }, k = (A) => {
    v((_) => {
      const R = new Set(_);
      return R.has(A) ? R.delete(A) : R.add(A), R;
    });
  }, S = /* @__PURE__ */ $(
    "button",
    {
      type: "button",
      id: l == null ? void 0 : l.id,
      disabled: f,
      className: M(Oi, s),
      "aria-haspopup": "tree",
      "aria-describedby": l == null ? void 0 : l.descriptionId,
      "aria-invalid": l != null && l.error ? !0 : void 0,
      title: x ?? void 0,
      children: [
        /* @__PURE__ */ u("span", { className: M("flex-1 min-w-0 truncate", x ? void 0 : "text-label-tertiary"), children: x ?? o }),
        /* @__PURE__ */ u("span", { className: "shrink-0 text-label-secondary text-[12px]", "aria-hidden": "true", children: "▾" })
      ]
    }
  );
  return /* @__PURE__ */ $(_i, { open: h, onOpenChange: b, children: [
    /* @__PURE__ */ u(ki, { asChild: !0, children: S }),
    /* @__PURE__ */ u(Ri, { children: /* @__PURE__ */ u(
      Ei,
      {
        role: "tree",
        align: "start",
        sideOffset: 4,
        collisionPadding: 8,
        className: "su-popover overflow-auto w-[var(--radix-popover-trigger-width)] max-h-[var(--su-dropdown-max-h)]",
        children: a.length === 0 ? /* @__PURE__ */ u("p", { className: "m-0 px-su3 py-su3 su-label text-ink-2 text-start", children: "No options" }) : a.map((A) => /* @__PURE__ */ u(
          $d,
          {
            node: A,
            depth: 0,
            expanded: g,
            selected: y,
            multiple: i,
            disabled: f,
            onToggleExpand: k,
            onSelect: E
          },
          A.key
        ))
      }
    ) })
  ] });
}
let mc = 0;
function lw(t) {
  return mc += 1, {
    uid: `upload-${mc}`,
    name: t.name,
    size: t.size,
    file: t
  };
}
function uw(t, e) {
  return e.split(",").map((r) => r.trim().toLowerCase()).filter(Boolean).some(
    (r) => r.startsWith(".") ? t.name.toLowerCase().endsWith(r) : r.endsWith("/*") ? t.type.toLowerCase().startsWith(r.slice(0, -1)) : t.type.toLowerCase() === r
  );
}
const dw = ["B", "KB", "MB", "GB", "TB"];
function fw(t) {
  const e = t > 0 ? Math.min(Math.floor(Math.log(t) / Math.log(1024)), 4) : 0;
  return `${Number((t / 1024 ** e).toFixed(e === 0 ? 0 : 1))} ${dw[e]}`;
}
function wS({
  accept: t,
  multiple: e = !1,
  disabled: r,
  maxCount: o,
  className: n,
  children: a,
  "aria-label": i,
  "aria-labelledby": s,
  fileList: c,
  onChange: l,
  beforeUpload: f,
  onRemove: d
}) {
  const p = Ee(), { disabled: h } = tt(void 0, r), b = pe(null), [g, v] = Q([]), w = c ?? g, [y, x] = Q(!1), C = Re(
    (I) => {
      v(I), l == null || l(I);
    },
    [l]
  ), E = async (I) => {
    const T = Array.from(I).filter(
      (O) => !t || uw(O, t)
    ), D = [];
    for (const O of T)
      f && !await f(O) || D.push(lw(O));
    if (D.length === 0) return;
    const z = e ? [...w, ...D].slice(0, o ?? 1 / 0) : D.slice(0, 1);
    C(z);
  }, k = (I) => {
    I.target.files && (E(I.target.files), I.target.value = "");
  }, S = (I) => {
    I.preventDefault(), x(!1), !h && I.dataTransfer.files.length > 0 && E(I.dataTransfer.files);
  }, A = (I) => {
    (d == null ? void 0 : d(I)) !== !1 && C(w.filter((T) => T.uid !== I.uid));
  }, _ = "Click or drag files to upload", R = s ?? (i || p == null ? void 0 : p.labelId), P = R ? void 0 : i ?? (typeof a == "string" ? a : _);
  return /* @__PURE__ */ $("div", { className: M("w-full", n), children: [
    /* @__PURE__ */ $(
      "div",
      {
        role: "button",
        tabIndex: h ? -1 : 0,
        "aria-label": P,
        "aria-labelledby": R,
        className: M(
          "su-focus-ring flex flex-col items-center justify-center gap-su2 min-h-[120px] p-su4 border-[1.5px] border-dashed border-rule-strong rounded-none bg-canvas text-label-secondary text-footnote text-center cursor-pointer transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:border-accent",
          !h && "hover:border-accent hover:bg-accent-soft",
          y && "border-accent bg-accent-soft",
          h && "opacity-45 cursor-not-allowed"
        ),
        onClick: () => {
          var I;
          return !h && ((I = b.current) == null ? void 0 : I.click());
        },
        onKeyDown: (I) => {
          var T;
          (I.key === "Enter" || I.key === " ") && !h && (I.preventDefault(), (T = b.current) == null || T.click());
        },
        onDragOver: (I) => {
          I.preventDefault(), h || x(!0);
        },
        onDragLeave: () => x(!1),
        onDrop: S,
        "aria-describedby": p == null ? void 0 : p.descriptionId,
        "aria-invalid": p != null && p.error ? !0 : void 0,
        children: [
          /* @__PURE__ */ u(
            "input",
            {
              ref: b,
              id: p == null ? void 0 : p.id,
              type: "file",
              accept: t,
              multiple: e,
              disabled: h,
              className: "hidden",
              onChange: k,
              "aria-hidden": "true",
              tabIndex: -1
            }
          ),
          a ?? /* @__PURE__ */ $(ve, { children: [
            /* @__PURE__ */ u(Mt, { size: "lg", className: "text-accent", children: /* @__PURE__ */ u(dv, { ...Kt }) }),
            /* @__PURE__ */ u("span", { children: _ })
          ] })
        ]
      }
    ),
    w.length > 0 && /* @__PURE__ */ u("ul", { className: "flex flex-col gap-su2 mt-su3 list-none m-0 p-0", children: w.map((I) => /* @__PURE__ */ $(
      "li",
      {
        className: "su-hairline flex items-center justify-between gap-su3 pl-su3 rounded-none bg-paper text-footnote text-label",
        children: [
          /* @__PURE__ */ $("span", { className: "flex min-w-0 items-baseline gap-su2", children: [
            /* @__PURE__ */ u("span", { className: "truncate", children: I.name }),
            /* @__PURE__ */ u("span", { className: "shrink-0 font-mono text-label-tertiary text-caption-2", children: fw(I.size) })
          ] }),
          /* @__PURE__ */ u(
            "button",
            {
              type: "button",
              className: "su-focus-ring shrink-0 min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] px-su2 rounded-none bg-transparent text-danger-text text-footnote cursor-pointer transition-[background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:not-disabled:bg-fill disabled:opacity-45 disabled:cursor-not-allowed",
              disabled: h,
              onClick: () => A(I),
              children: "Remove"
            }
          )
        ]
      },
      I.uid
    )) })
  ] });
}
var pw = Object.defineProperty, yt = (t, e) => pw(t, "name", { value: e, configurable: !0 }), Bd = "Avatar", [mw, yS] = /* @__PURE__ */ ge(Bd), hw = [
  0,
  () => {
  }
], [gw, zd] = mw(Bd), bw = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(e, r) {
    const { __scopeAvatar: o, ...n } = e, [a, i] = m.useState("idle"), [s, c] = Ld();
    return /* @__PURE__ */ u(
      gw,
      {
        scope: o,
        imageLoadingStatus: a,
        setImageLoadingStatus: i,
        imageCount: s,
        setImageCount: c,
        children: /* @__PURE__ */ u(W.span, { ...n, ref: r })
      }
    );
  }, "Avatar")
), vw = "AvatarImage", xw = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ yt(function(e, r) {
    const { __scopeAvatar: o, src: n, onLoadingStatusChange: a, ...i } = e, s = zd(vw, o);
    s.setImageCount;
    const c = Fd(n, {
      referrerPolicy: i.referrerPolicy,
      crossOrigin: i.crossOrigin,
      loadingStatus: s.imageLoadingStatus,
      setLoadingStatus: s.setImageLoadingStatus
    }), l = fe((d) => {
      a == null || a(d);
    }), f = m.useRef(c);
    return de(() => {
      const d = f.current;
      f.current = c, c !== d && l(c);
    }, [c, l]), c === "loaded" ? /* @__PURE__ */ u(W.img, { ...i, ref: r, src: n }) : null;
  }, "AvatarImage")
), ww = "AvatarFallback", yw = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ yt(function(e, r) {
    const { __scopeAvatar: o, delayMs: n, ...a } = e, i = zd(ww, o), [s, c] = m.useState(n === void 0);
    return m.useEffect(() => {
      if (n !== void 0) {
        const l = window.setTimeout(() => c(!0), n);
        return () => window.clearTimeout(l);
      }
    }, [n]), s && i.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u(W.span, { ...a, ref: r }) : null;
  }, "AvatarFallback")
);
function Fd(t, {
  loadingStatus: e,
  setLoadingStatus: r,
  referrerPolicy: o,
  crossOrigin: n
}) {
  return de(() => {
    if (!t) {
      r("error");
      return;
    }
    const a = new window.Image(), i = /* @__PURE__ */ yt((c) => {
      const l = c.currentTarget;
      r(Ia(l));
    }, "handleLoad"), s = /* @__PURE__ */ yt(() => r("error"), "handleError");
    return a.addEventListener("load", i), a.addEventListener("error", s), o && (a.referrerPolicy = o), a.crossOrigin = n ?? null, a.src = t, r(Ia(a)), () => {
      a.removeEventListener("load", i), a.removeEventListener("error", s), r("idle");
    };
  }, [t, n, o, r]), e;
}
yt(Fd, "useImageLoadingStatus");
function Ia(t) {
  return t.complete ? t.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
yt(Ia, "getImageLoadingStatus");
function Ld() {
  return hw;
}
yt(Ld, "useImageCount");
function Cw(t) {
}
yt(Cw, "useUpdateImageCount");
const Aw = {
  sm: "size-[28px] text-caption-1",
  md: "size-9 text-footnote",
  lg: "size-12 text-subhead"
}, CS = Ke(function({ src: e, alt: r, fallback: o, size: n = "md", className: a, children: i, ...s }, c) {
  return /* @__PURE__ */ $(
    bw,
    {
      ref: c,
      className: M(
        "inline-flex items-center justify-center overflow-hidden rounded-none bg-fill-secondary text-label-secondary font-semibold shrink-0",
        Aw[n],
        a
      ),
      ...s,
      children: [
        e ? /* @__PURE__ */ u(
          xw,
          {
            className: "size-full object-cover",
            src: e,
            alt: r ?? ""
          }
        ) : null,
        /* @__PURE__ */ u(
          yw,
          {
            className: "flex items-center justify-center size-full",
            delayMs: 200,
            children: o ?? i ?? "?"
          }
        )
      ]
    }
  );
}), Sw = {
  default: "bg-ink text-paper",
  success: "bg-[color-mix(in_srgb,var(--su-success)_45%,black)] text-on-action",
  warning: "bg-[color-mix(in_srgb,var(--su-warning)_45%,black)] text-on-action",
  danger: "bg-[color-mix(in_srgb,var(--su-danger)_45%,black)] text-on-action"
}, _w = {
  default: "bg-ink",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger"
}, kw = "inline-flex items-center justify-center min-w-[18px] h-[18px] px-[5px] font-mono text-[11px] leading-none font-semibold tracking-[var(--su-tracking-label)]";
function AS({
  count: t,
  dot: e = !1,
  max: r = 99,
  showZero: o = !1,
  variant: n = "default",
  className: a,
  children: i,
  title: s,
  ...c
}) {
  const l = e || t !== void 0 && (o || t > 0), f = t !== void 0 && t > r ? `${r}+` : t, d = l ? /* @__PURE__ */ u(
    "span",
    {
      className: M(
        kw,
        e ? M("min-w-2 w-2 h-2 p-0", _w[n]) : Sw[n],
        i ? "absolute top-0 right-0 translate-x-[40%] -translate-y-[40%]" : void 0
      ),
      "aria-hidden": e,
      title: e ? void 0 : s ?? (f === void 0 ? void 0 : String(f)),
      children: !e && f
    }
  ) : null;
  return i ? /* @__PURE__ */ $("span", { className: M("relative inline-flex", a), ...c, children: [
    i,
    d
  ] }) : /* @__PURE__ */ u("span", { className: M("inline-flex", a), ...c, children: d });
}
var Rw = Object.defineProperty, Ew = (t, e) => Rw(t, "name", { value: e, configurable: !0 }), Pw = "Toggle", Iw = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Ew(function(e, r) {
    const { pressed: o, defaultPressed: n, onPressedChange: a, ...i } = e, [s, c] = xe({
      prop: o,
      onChange: a,
      defaultProp: n ?? !1,
      caller: Pw
    });
    return /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        "aria-pressed": s,
        "data-state": s ? "on" : "off",
        "data-disabled": e.disabled ? "" : void 0,
        ...i,
        ref: r,
        onClick: F(e.onClick, () => {
          e.disabled || c(!s);
        })
      }
    );
  }, "Toggle")
), Tw = Object.defineProperty, Bt = (t, e) => Tw(t, "name", { value: e, configurable: !0 }), $r = "ToggleGroup", [Vd, SS] = /* @__PURE__ */ ge($r, [
  Lt
]), Ud = Lt(), Mw = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Bt(function(e, r) {
  const { type: o, ...n } = e;
  if (o === "single")
    return /* @__PURE__ */ u(Dw, { role: "radiogroup", ...n, ref: r });
  if (o === "multiple")
    return /* @__PURE__ */ u(Nw, { role: "toolbar", ...n, ref: r });
  throw new Error(`Missing prop \`type\` expected on \`${$r}\``);
}, "ToggleGroup")), [Wd, Hd] = Vd($r), Dw = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Bt(function(e, r) {
  const {
    value: o,
    defaultValue: n,
    onValueChange: a = /* @__PURE__ */ Bt(() => {
    }, "onValueChange"),
    ...i
  } = e, [s, c] = xe({
    prop: o,
    defaultProp: n ?? "",
    onChange: a,
    caller: $r
  });
  return /* @__PURE__ */ u(
    Wd,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: m.useMemo(() => s ? [s] : [], [s]),
      onItemActivate: c,
      onItemDeactivate: m.useCallback(() => c(""), [c]),
      children: /* @__PURE__ */ u(Gd, { ...i, ref: r })
    }
  );
}, "ToggleGroupImplSingle")), Nw = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Bt(function(e, r) {
  const {
    value: o,
    defaultValue: n,
    onValueChange: a = /* @__PURE__ */ Bt(() => {
    }, "onValueChange"),
    ...i
  } = e, [s, c] = xe({
    prop: o,
    defaultProp: n ?? [],
    onChange: a,
    caller: $r
  }), l = m.useCallback(
    (d) => c((p = []) => [...p, d]),
    [c]
  ), f = m.useCallback(
    (d) => c((p = []) => p.filter((h) => h !== d)),
    [c]
  );
  return /* @__PURE__ */ u(
    Wd,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: l,
      onItemDeactivate: f,
      children: /* @__PURE__ */ u(Gd, { ...i, ref: r })
    }
  );
}, "ToggleGroupImplMultiple")), [Ow, $w] = Vd($r), Gd = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Bt(function(e, r) {
    const {
      __scopeToggleGroup: o,
      disabled: n = !1,
      rovingFocus: a = !0,
      orientation: i,
      dir: s,
      loop: c = !0,
      ...l
    } = e, f = Ud(o), d = ct(s), p = { dir: d, ...l };
    return /* @__PURE__ */ u(Ow, { scope: o, rovingFocus: a, disabled: n, children: a ? /* @__PURE__ */ u(
      pn,
      {
        asChild: !0,
        ...f,
        orientation: i,
        dir: d,
        loop: c,
        children: /* @__PURE__ */ u(W.div, { ...p, ref: r })
      }
    ) : /* @__PURE__ */ u(W.div, { ...p, ref: r }) });
  }, "ToggleGroupImpl")
), Ta = "ToggleGroupItem", Bw = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Bt(function(e, r) {
    const o = Hd(Ta, e.__scopeToggleGroup), n = $w(Ta, e.__scopeToggleGroup), a = Ud(e.__scopeToggleGroup), i = o.value.includes(e.value), s = n.disabled || e.disabled, c = { ...e, pressed: i, disabled: s }, l = m.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ u(
      mn,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: i,
        ref: l,
        children: /* @__PURE__ */ u(hc, { ...c, ref: r })
      }
    ) : /* @__PURE__ */ u(hc, { ...c, ref: r });
  }, "ToggleGroupItem")
), hc = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Bt(function(e, r) {
    const { __scopeToggleGroup: o, value: n, ...a } = e, i = Hd(Ta, o), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, c = i.type === "single" ? s : void 0;
    return /* @__PURE__ */ u(
      Iw,
      {
        ...c,
        ...a,
        ref: r,
        onPressedChange: (l) => {
          l ? i.onItemActivate(n) : i.onItemDeactivate(n);
        }
      }
    );
  }, "ToggleGroupItemImpl")
);
function zw({
  options: t,
  block: e = !1,
  className: r,
  value: o,
  defaultValue: n,
  onValueChange: a,
  ...i
}) {
  const [s, c] = Q(n);
  return /* @__PURE__ */ u(
    Mw,
    {
      type: "single",
      value: o ?? s ?? "",
      onValueChange: (f) => {
        f && (o === void 0 && c(f), a == null || a(f));
      },
      className: M(
        "inline-flex p-0 gap-0 border border-solid border-rule-strong rounded-none bg-canvas",
        e && "flex w-full",
        r
      ),
      ...i,
      children: t.map((f) => /* @__PURE__ */ u(
        Bw,
        {
          value: f.value,
          disabled: f.disabled,
          className: M(
            "flex-1 min-h-[var(--su-hit-target)] px-su3 rounded-none bg-transparent text-label-secondary font-sans text-footnote font-medium cursor-pointer",
            "transition-[background,color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
            "not-first:border-s not-first:border-s-solid not-first:border-s-rule",
            "su-focus-ring",
            "data-[state=off]:not-disabled:hover:bg-fill-quaternary data-[state=off]:not-disabled:hover:text-label",
            "data-[state=on]:bg-ink data-[state=on]:text-paper",
            "disabled:opacity-45 disabled:cursor-not-allowed"
          ),
          children: f.label
        },
        f.value
      ))
    }
  );
}
function gc({ back: t }) {
  return /* @__PURE__ */ u(up, { size: "sm", children: /* @__PURE__ */ u("path", { d: t ? "M15 4 7 12l8 8" : "M9 4l8 8-8 8" }) });
}
function bc(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function $o(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
}
function vc(t, e, r) {
  return new Date(t, e, Math.min(r, new Date(t, e + 1, 0).getDate()));
}
function Fw(t) {
  var e, r;
  try {
    const o = new Intl.Locale(t), n = (r = ((e = o.getWeekInfo) == null ? void 0 : e.call(o)) ?? o.weekInfo) == null ? void 0 : r.firstDay;
    return n ? n % 7 : 0;
  } catch {
    return 0;
  }
}
const xc = "inline-flex items-center justify-center min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] rounded-none bg-transparent text-label-secondary cursor-pointer transition-[background,color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-quaternary hover:text-label su-focus-ring", Lw = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -7,
  ArrowDown: 7
};
function _S({
  value: t,
  fullscreen: e = !1,
  dateRender: r,
  disabledDate: o,
  defaultValue: n,
  onChange: a,
  className: i,
  ...s
}) {
  const { locale: c } = Mr(), l = Fw(c), f = Array.from(
    { length: 7 },
    (T, D) => new Intl.DateTimeFormat(c, { weekday: "short" }).format(
      // 4 Jan 2026 is a Sunday; the weekday cycles every 7 days.
      new Date(2026, 0, 4 + l + D)
    )
  ), [d, p] = Q(() => n ?? /* @__PURE__ */ new Date()), h = t ?? d, [b, g] = Q("month"), [v, w] = Q(
    () => new Date(h.getFullYear(), h.getMonth(), 1)
  ), y = t == null ? void 0 : t.getFullYear(), x = t == null ? void 0 : t.getMonth();
  le(() => {
    y !== void 0 && x !== void 0 && w(new Date(y, x, 1));
  }, [y, x]);
  const C = Fe(() => {
    const T = new Date(v.getFullYear(), v.getMonth(), 1), D = new Date(v.getFullYear(), v.getMonth() + 1, 0), z = [];
    for (let O = 0; O < (T.getDay() - l + 7) % 7; O++) z.push(null);
    for (let O = 1; O <= D.getDate(); O++)
      z.push(new Date(v.getFullYear(), v.getMonth(), O));
    return z;
  }, [v, l]), E = pe(null), [k, S] = Q(null), A = k && $o(k, v) ? k.getDate() : $o(h, v) ? h.getDate() : $o(/* @__PURE__ */ new Date(), v) ? (/* @__PURE__ */ new Date()).getDate() : 1;
  le(() => {
    var T, D;
    k && ((D = (T = E.current) == null ? void 0 : T.querySelector(`[data-day="${k.getDate()}"]`)) == null || D.focus());
  }, [k]);
  const _ = (T) => {
    o != null && o(T) || (t || p(T), a == null || a(T));
  }, R = (T) => {
    w((D) => new Date(D.getFullYear(), D.getMonth() + T, 1));
  }, P = (T, D) => {
    const [z, O, N] = [D.getFullYear(), D.getMonth(), D.getDate()], B = Lw[T.key];
    let V = null;
    B !== void 0 ? V = new Date(z, O, N + B) : T.key === "Home" ? V = new Date(z, O, N - (D.getDay() - l + 7) % 7) : T.key === "End" ? V = new Date(z, O, N + 6 - (D.getDay() - l + 7) % 7) : T.key === "PageUp" ? V = vc(z, O - (T.shiftKey ? 12 : 1), N) : T.key === "PageDown" && (V = vc(z, O + (T.shiftKey ? 12 : 1), N)), V && (T.preventDefault(), S(V), $o(V, v) || w(new Date(V.getFullYear(), V.getMonth(), 1)));
  }, I = v.toLocaleDateString(c, {
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "w-[280px] p-su3 rounded-none bg-paper border-t border-solid border-rule-strong",
        e && "w-full p-su4",
        i
      ),
      ...s,
      children: [
        /* @__PURE__ */ $("div", { className: "flex flex-wrap items-center justify-between gap-su2 mb-su3", children: [
          /* @__PURE__ */ u(
            "span",
            {
              className: M(
                "font-semibold text-label tabular-nums",
                e ? "text-title-3" : "text-subhead"
              ),
              children: b === "year" ? v.getFullYear() : I
            }
          ),
          /* @__PURE__ */ $("div", { className: "flex items-center gap-su2 ms-auto", children: [
            e && /* @__PURE__ */ u(
              zw,
              {
                value: b,
                onValueChange: (T) => g(T),
                options: [
                  { value: "month", label: "Month" },
                  { value: "year", label: "Year" }
                ]
              }
            ),
            /* @__PURE__ */ $("div", { className: "inline-flex items-center", children: [
              /* @__PURE__ */ u(
                "button",
                {
                  type: "button",
                  className: xc,
                  onClick: () => R(b === "year" ? -12 : -1),
                  "aria-label": b === "year" ? "Previous year" : "Previous month",
                  children: /* @__PURE__ */ u(gc, { back: !0 })
                }
              ),
              /* @__PURE__ */ u(
                "button",
                {
                  type: "button",
                  className: xc,
                  onClick: () => R(b === "year" ? 12 : 1),
                  "aria-label": b === "year" ? "Next year" : "Next month",
                  children: /* @__PURE__ */ u(gc, {})
                }
              )
            ] })
          ] })
        ] }),
        b === "year" ? /* @__PURE__ */ u("div", { className: "grid grid-cols-3 gap-su2", children: Array.from({ length: 12 }, (T, D) => /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            "aria-current": D === v.getMonth() ? "true" : void 0,
            className: M(
              "min-h-[72px] border border-solid border-rule rounded-none bg-canvas text-label text-subhead cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:bg-fill-tertiary su-focus-ring",
              D === v.getMonth() && "bg-accent-soft text-accent font-semibold"
            ),
            onClick: () => {
              w(new Date(v.getFullYear(), D, 1)), g("month");
            },
            children: new Intl.DateTimeFormat(c, { month: "long" }).format(
              new Date(v.getFullYear(), D, 1)
            )
          },
          D
        )) }) : /* @__PURE__ */ $(ve, { children: [
          /* @__PURE__ */ u(
            "div",
            {
              className: M(
                "grid grid-cols-7",
                e ? "gap-0" : "gap-su1"
              ),
              children: f.map((T) => /* @__PURE__ */ u(
                "span",
                {
                  className: M(
                    "font-semibold text-label-tertiary text-caption-1",
                    e ? "px-su2 pb-su2 text-start" : "pb-su1 text-center"
                  ),
                  children: T
                },
                T
              ))
            }
          ),
          /* @__PURE__ */ u(
            "div",
            {
              ref: E,
              className: M(
                "grid grid-cols-7",
                e ? "gap-0" : "gap-su1"
              ),
              children: C.map((T, D) => {
                if (!T)
                  return /* @__PURE__ */ u(
                    "span",
                    {
                      className: M(
                        e ? "aspect-auto min-h-[92px] max-md:min-h-14 border-t border-solid border-rule" : r ? "min-h-13" : "aspect-square"
                      )
                    },
                    `empty-${D}`
                  );
                const z = bc(T, h), O = (o == null ? void 0 : o(T)) ?? !1;
                return /* @__PURE__ */ $(
                  "button",
                  {
                    type: "button",
                    "data-day": T.getDate(),
                    tabIndex: T.getDate() === A ? 0 : -1,
                    className: M(
                      // Alignment and padding live only in the branches: `cn()` is a plain join, so a
                      // base `place-items-center` would beat the fullscreen `place-items-start`.
                      "group grid rounded-none bg-transparent text-footnote cursor-pointer su-focus-ring",
                      e ? "aspect-auto min-h-[92px] max-md:min-h-14 border-t border-solid border-rule place-items-start content-start gap-su1 p-su2 max-md:p-su1 text-start" : r ? "place-items-center min-h-13 content-center gap-su1 px-0 py-su1" : "place-items-center p-0 aspect-square",
                      e && z && "bg-accent-soft",
                      e && !z && !O && "hover:bg-fill-quaternary",
                      O ? "text-label-tertiary cursor-not-allowed" : "text-label"
                    ),
                    "aria-label": T.toLocaleDateString(c, {
                      dateStyle: "full"
                    }),
                    "aria-pressed": z,
                    "aria-disabled": O || void 0,
                    onClick: () => _(T),
                    onKeyDown: (N) => P(N, T),
                    children: [
                      /* @__PURE__ */ u(
                        "span",
                        {
                          className: M(
                            "grid place-items-center h-[var(--su-control-xs)] rounded-none tabular-nums transition-[background,color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
                            e ? "min-w-0 px-su2" : "min-w-[var(--su-control-xs)] px-su1",
                            z ? "bg-accent text-on-action font-semibold group-hover:bg-[var(--su-accent-hover)]" : M(
                              !O && bc(T, /* @__PURE__ */ new Date()) && "text-accent font-semibold",
                              !e && !O && "group-hover:bg-fill-quaternary"
                            )
                          ),
                          children: T.getDate()
                        }
                      ),
                      r && /* @__PURE__ */ u(
                        "span",
                        {
                          className: M(
                            "block max-w-full overflow-hidden text-label-secondary text-caption-2 text-ellipsis whitespace-nowrap",
                            e && "ps-su2"
                          ),
                          children: r(T)
                        }
                      )
                    ]
                  },
                  T.toISOString()
                );
              })
            }
          )
        ] })
      ]
    }
  );
}
const Vw = {
  free: "bg-s-free",
  receiving: "bg-s-receiving",
  onhand: "bg-s-onhand",
  allocated: "bg-s-allocated",
  picking: "bg-s-picking",
  counted: "bg-s-counted"
};
function kS({
  code: t,
  title: e,
  extra: r,
  state: o,
  bordered: n = !1,
  interactive: a = !1,
  className: i,
  children: s,
  ...c
}) {
  const l = t != null || e != null || r != null || o != null;
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "rounded-none",
        n ? "bg-canvas border border-solid border-rule" : "relative bg-transparent border-t border-solid border-rule-strong",
        a && !n && "group",
        i
      ),
      ...c,
      children: [
        a && !n ? /* @__PURE__ */ u(
          "span",
          {
            "aria-hidden": !0,
            className: "pointer-events-none absolute -top-px left-0 right-full h-0.5 bg-accent transition-[right] duration-[var(--su-duration-base)] ease-[var(--su-ease-out)] motion-reduce:transition-none [@media(hover:hover)]:group-hover:right-0 [@media(hover:hover)]:group-focus-within:right-0 [@media(hover:none)]:hidden"
          }
        ) : null,
        l ? /* @__PURE__ */ $("div", { className: "flex items-start justify-between gap-su3 pt-su4", children: [
          /* @__PURE__ */ $("div", { className: "flex flex-col gap-su2 min-w-0", children: [
            t != null || o != null ? /* @__PURE__ */ $("div", { className: "flex items-center gap-su2", children: [
              t != null ? /* @__PURE__ */ u("span", { className: "su-label text-ink-2", children: t }) : null,
              o != null ? /* @__PURE__ */ u(
                "span",
                {
                  className: M("block size-2.5 shrink-0", Vw[o]),
                  "aria-hidden": "true"
                }
              ) : null
            ] }) : null,
            e != null ? /* @__PURE__ */ u("div", { className: "font-sans text-title-2 font-medium tracking-[-0.01em] text-label text-balance", children: e }) : null
          ] }),
          r != null ? /* @__PURE__ */ u("div", { className: "text-footnote text-label-secondary shrink-0", children: r }) : null
        ] }) : null,
        /* @__PURE__ */ u("div", { className: M(n ? "p-su4" : "py-su4"), children: s })
      ]
    }
  );
}
const wc = "inline-flex shrink-0 items-center justify-center min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] border border-solid border-rule-strong rounded-none bg-paper text-label cursor-pointer transition-[background-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none hover:not-disabled:bg-fill-secondary active:not-disabled:bg-fill su-focus-ring disabled:opacity-45 disabled:cursor-not-allowed";
function Uw({ className: t, children: e, ...r }) {
  const o = pe(null), [n, a] = Q({ atStart: !0, atEnd: !0 }), i = Re(() => {
    const c = o.current;
    if (!c) return;
    const l = Math.abs(c.scrollLeft);
    a({
      atStart: l <= 1,
      atEnd: l + c.clientWidth >= c.scrollWidth - 1
    });
  }, []);
  le(() => {
    const c = o.current;
    if (!c) return;
    i(), c.addEventListener("scroll", i, { passive: !0 });
    const l = new ResizeObserver(i);
    return l.observe(c), () => {
      c.removeEventListener("scroll", i), l.disconnect();
    };
  }, [i]);
  const s = (c) => {
    const l = o.current;
    if (!l) return;
    const f = getComputedStyle(l).direction === "rtl" ? -1 : 1;
    l.scrollBy({ left: c * f * l.clientWidth * 0.85, behavior: "smooth" });
  };
  return /* @__PURE__ */ $(
    "div",
    {
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": "Carousel",
      className: M("relative flex items-center gap-su2", t),
      ...r,
      children: [
        /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: wc,
            onClick: () => s(-1),
            disabled: n.atStart,
            "aria-label": "Previous",
            children: "‹"
          }
        ),
        /* @__PURE__ */ u(
          "div",
          {
            ref: o,
            tabIndex: 0,
            className: "flex gap-su3 overflow-x-auto snap-x snap-mandatory flex-1 py-su1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden su-focus-ring",
            children: e
          }
        ),
        /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: wc,
            onClick: () => s(1),
            disabled: n.atEnd,
            "aria-label": "Next",
            children: "›"
          }
        )
      ]
    }
  );
}
function Ww({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      className: M(
        // 85% basis leaves the next slide peeking; Carousel's scroll() uses the same ratio.
        "flex-[0_0_85%] snap-start rounded-none border border-solid border-rule border-t-rule-strong bg-paper",
        t
      ),
      ...r,
      children: e
    }
  );
}
Uw.Item = Ww;
var Hw = Object.defineProperty, Qe = (t, e) => Hw(t, "name", { value: e, configurable: !0 }), lt = "Accordion", Gw = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Qi, Yw, Qw] = /* @__PURE__ */ or(lt), [En, RS] = /* @__PURE__ */ ge(lt, [
  Qw,
  $u
]), Xi = $u(), Xw = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(e, r) {
    const { type: o, ...n } = e, a = n, i = n;
    return /* @__PURE__ */ u(Qi.Provider, { scope: e.__scopeAccordion, children: o === "multiple" ? /* @__PURE__ */ u(Jw, { ...i, ref: r }) : /* @__PURE__ */ u(qw, { ...a, ref: r }) });
  }, "Accordion")
), [Yd, jw] = En(lt), [Qd, Kw] = En(
  lt,
  { collapsible: !1 }
), qw = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(e, r) {
    const {
      value: o,
      defaultValue: n,
      onValueChange: a = /* @__PURE__ */ Qe(() => {
      }, "onValueChange"),
      collapsible: i = !1,
      ...s
    } = e, [c, l] = xe({
      prop: o,
      defaultProp: n ?? "",
      onChange: a,
      caller: lt
    });
    return /* @__PURE__ */ u(
      Yd,
      {
        scope: e.__scopeAccordion,
        value: m.useMemo(() => c ? [c] : [], [c]),
        onItemOpen: l,
        onItemClose: m.useCallback(() => i && l(""), [i, l]),
        children: /* @__PURE__ */ u(Qd, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ u(Xd, { ...s, ref: r }) })
      }
    );
  }, "AccordionImplSingle")
), Jw = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Qe(function(e, r) {
  const {
    value: o,
    defaultValue: n,
    onValueChange: a = /* @__PURE__ */ Qe(() => {
    }, "onValueChange"),
    ...i
  } = e, [s, c] = xe({
    prop: o,
    defaultProp: n ?? [],
    onChange: a,
    caller: lt
  }), l = m.useCallback(
    (d) => c((p = []) => [...p, d]),
    [c]
  ), f = m.useCallback(
    (d) => c((p = []) => p.filter((h) => h !== d)),
    [c]
  );
  return /* @__PURE__ */ u(
    Yd,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: f,
      children: /* @__PURE__ */ u(Qd, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u(Xd, { ...i, ref: r }) })
    }
  );
}, "AccordionImplMultiple")), [Zw, Pn] = En(lt), Xd = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Qe(function(e, r) {
    const { __scopeAccordion: o, disabled: n, dir: a, orientation: i = "vertical", ...s } = e, c = m.useRef(null), l = Y(c, r), f = Yw(o), p = ct(a) === "ltr", h = F(e.onKeyDown, (b) => {
      var _;
      if (!Gw.includes(b.key)) return;
      const g = b.target, v = f().filter((R) => {
        var P;
        return !((P = R.ref.current) != null && P.disabled);
      }), w = v.findIndex((R) => R.ref.current === g), y = v.length;
      if (w === -1) return;
      b.preventDefault();
      let x = w;
      const C = 0, E = y - 1, k = /* @__PURE__ */ Qe(() => {
        x = w + 1, x > E && (x = C);
      }, "moveNext"), S = /* @__PURE__ */ Qe(() => {
        x = w - 1, x < C && (x = E);
      }, "movePrev");
      switch (b.key) {
        case "Home":
          x = C;
          break;
        case "End":
          x = E;
          break;
        case "ArrowRight":
          i === "horizontal" && (p ? k() : S());
          break;
        case "ArrowDown":
          i === "vertical" && k();
          break;
        case "ArrowLeft":
          i === "horizontal" && (p ? S() : k());
          break;
        case "ArrowUp":
          i === "vertical" && S();
          break;
      }
      const A = x % y;
      (_ = v[A].ref.current) == null || _.focus();
    });
    return /* @__PURE__ */ u(
      Zw,
      {
        scope: o,
        disabled: n,
        direction: a,
        orientation: i,
        children: /* @__PURE__ */ u(Qi.Slot, { scope: o, children: /* @__PURE__ */ u(
          W.div,
          {
            ...s,
            "data-orientation": i,
            ref: l,
            onKeyDown: n ? void 0 : h
          }
        ) })
      }
    );
  }, "AccordionImpl")
), Ma = "AccordionItem", [e2, ji] = En(Ma), t2 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Qe(function(e, r) {
    const { __scopeAccordion: o, value: n, ...a } = e, i = Pn(Ma, o), s = jw(Ma, o), c = Xi(o), l = Oe(), f = n && s.value.includes(n) || !1, d = i.disabled || e.disabled;
    return /* @__PURE__ */ u(
      e2,
      {
        scope: o,
        open: f,
        disabled: d,
        triggerId: l,
        children: /* @__PURE__ */ u(
          zu,
          {
            "data-orientation": i.orientation,
            "data-state": Ki(f),
            ...c,
            ...a,
            ref: r,
            disabled: d,
            open: f,
            onOpenChange: (p) => {
              p ? s.onItemOpen(n) : s.onItemClose(n);
            }
          }
        )
      }
    );
  }, "AccordionItem")
), r2 = "AccordionHeader", o2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(e, r) {
    const { __scopeAccordion: o, ...n } = e, a = Pn(lt, o), i = ji(r2, o);
    return /* @__PURE__ */ u(
      W.h3,
      {
        "data-orientation": a.orientation,
        "data-state": Ki(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...n,
        ref: r
      }
    );
  }, "AccordionHeader")
), yc = "AccordionTrigger", n2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(e, r) {
    const { __scopeAccordion: o, ...n } = e, a = Pn(lt, o), i = ji(yc, o), s = Kw(yc, o), c = Xi(o);
    return /* @__PURE__ */ u(Qi.ItemSlot, { scope: o, children: /* @__PURE__ */ u(
      Fu,
      {
        "aria-disabled": i.open && !s.collapsible || void 0,
        "data-orientation": a.orientation,
        id: i.triggerId,
        ...c,
        ...n,
        ref: r
      }
    ) });
  }, "AccordionTrigger")
), a2 = "AccordionContent", i2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(e, r) {
    const { __scopeAccordion: o, ...n } = e, a = Pn(lt, o), i = ji(a2, o), s = Xi(o);
    return /* @__PURE__ */ u(
      Lu,
      {
        role: "region",
        "aria-labelledby": i.triggerId,
        "data-orientation": a.orientation,
        ...s,
        ...n,
        ref: r,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }, "AccordionContent")
);
function Ki(t) {
  return t ? "open" : "closed";
}
Qe(Ki, "getState");
var Cc = Xw, s2 = t2, c2 = o2, l2 = n2, u2 = i2;
function Ac(t) {
  return t.map((e) => /* @__PURE__ */ $(
    s2,
    {
      value: e.key,
      className: "border-b border-rule last:border-b-0",
      disabled: e.disabled,
      children: [
        /* @__PURE__ */ $(
          c2,
          {
            className: M(
              "m-0 flex w-full items-center hover:bg-canvas",
              "data-[disabled]:opacity-45 data-[disabled]:hover:bg-transparent",
              e.extra != null && "pr-su4"
            ),
            children: [
              /* @__PURE__ */ u(
                l2,
                {
                  className: M(
                    "flex flex-1 min-w-0 items-center justify-between gap-su3 py-su3 pl-su4 bg-transparent text-label font-sans text-body font-normal text-left cursor-pointer",
                    e.extra != null ? "pr-su3" : "pr-su4",
                    "disabled:cursor-not-allowed",
                    // z-10 so the ring paints over the neighbouring row's hairline
                    "su-focus-ring focus-visible:relative focus-visible:z-10",
                    "after:content-['›'] after:shrink-0 after:w-[1em] after:text-center after:text-label-tertiary after:text-[18px] after:leading-none",
                    "after:transition-transform after:duration-[var(--su-duration-fast)] after:ease-[var(--su-ease-out)]",
                    "data-[state=open]:after:rotate-90"
                  ),
                  children: /* @__PURE__ */ u("span", { className: "flex-1 min-w-0", children: e.label })
                }
              ),
              e.extra != null ? /* @__PURE__ */ u("span", { className: "shrink-0 text-footnote text-label-secondary", children: e.extra }) : null
            ]
          }
        ),
        /* @__PURE__ */ u(
          u2,
          {
            className: M(
              "overflow-hidden data-[state=open]:animate-su-slide-down data-[state=closed]:animate-su-slide-up",
              "motion-reduce:data-[state]:animate-none"
            ),
            children: /* @__PURE__ */ u("div", { className: "px-su4 pb-su4 text-label-secondary text-subhead leading-[var(--su-leading-relaxed)]", children: e.children })
          }
        )
      ]
    },
    e.key
  ));
}
function ES(t) {
  const { items: e, className: r } = t, o = M(
    // no overflow-hidden here: it would clip the trigger's focus ring; the
    // height animation is already clipped by Accordion.Content itself.
    "bg-paper border-t border-rule-strong",
    r
  );
  if (t.type === "multiple") {
    const { defaultValue: c, value: l, onValueChange: f } = t;
    return /* @__PURE__ */ u(
      Cc,
      {
        type: "multiple",
        className: o,
        defaultValue: c,
        value: l,
        onValueChange: f,
        children: Ac(e)
      }
    );
  }
  const { collapsible: n = !0, defaultValue: a, value: i, onValueChange: s } = t;
  return /* @__PURE__ */ u(
    Cc,
    {
      type: "single",
      collapsible: n,
      className: o,
      defaultValue: a,
      value: i,
      onValueChange: s,
      children: Ac(e)
    }
  );
}
function PS({
  title: t,
  extra: e,
  items: r,
  column: o = 2,
  bordered: n = !1,
  className: a,
  ...i
}) {
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "rounded-none bg-paper border-t border-solid border-rule-strong",
        n && "border border-solid border-rule border-t-rule-strong",
        a
      ),
      children: [
        t != null || e != null ? /* @__PURE__ */ $("div", { className: "flex items-center justify-between gap-su3 py-su3 px-su4 border-b border-solid border-rule", children: [
          /* @__PURE__ */ u("div", { className: "text-headline font-semibold min-w-0", children: t }),
          e != null ? /* @__PURE__ */ u("div", { className: "text-footnote text-label-secondary shrink-0", children: e }) : null
        ] }) : null,
        /* @__PURE__ */ u(
          "dl",
          {
            className: "grid gap-0 m-0 p-0 max-sm:![grid-template-columns:minmax(0,1fr)]",
            style: { gridTemplateColumns: `repeat(${o}, minmax(0, 1fr))` },
            ...i,
            children: r.map((s, c) => /* @__PURE__ */ $(
              "div",
              {
                className: "grid grid-cols-[120px_minmax(0,1fr)] gap-su3 py-su3 px-su4 border-b border-solid border-rule last:border-b-0 max-sm:grid-cols-1 max-sm:gap-su1 max-sm:![grid-column:auto]",
                style: s.span ? { gridColumn: `span ${s.span}` } : void 0,
                children: [
                  /* @__PURE__ */ u("dt", { className: "m-0 text-footnote text-label-secondary", children: s.label }),
                  /* @__PURE__ */ u("dd", { className: "m-0 text-body text-label tabular-nums", children: s.value ?? "—" })
                ]
              },
              c
            ))
          }
        )
      ]
    }
  );
}
function IS({
  image: t,
  description: e = "No data",
  className: r,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "flex flex-col items-center justify-center text-center py-su8 px-su4",
        r
      ),
      ...n,
      children: [
        /* @__PURE__ */ u("div", { className: "mb-su3 text-label-tertiary", "aria-hidden": "true", children: t ?? /* @__PURE__ */ u("span", { className: "inline-flex items-center justify-center size-16 rounded-none bg-fill-quaternary text-title-2", children: "∅" }) }),
        /* @__PURE__ */ u("p", { className: "m-0 text-subhead text-label-secondary", children: e }),
        o ? /* @__PURE__ */ u("div", { className: "mt-su4", children: o }) : null
      ]
    }
  );
}
var d2 = Object.defineProperty, Xe = (t, e) => d2(t, "name", { value: e, configurable: !0 }), qi = "Dialog", [jd, Kd] = /* @__PURE__ */ ge(qi), [f2, rt] = jd(qi), ho = /* @__PURE__ */ Xe((t) => {
  const {
    __scopeDialog: e,
    children: r,
    open: o,
    defaultOpen: n,
    onOpenChange: a,
    modal: i = !0
  } = t, s = m.useRef(null), c = m.useRef(null), [l, f] = xe({
    prop: o,
    defaultProp: n ?? !1,
    onChange: a,
    caller: qi
  }), [d, p] = m.useState(0), [h, b] = m.useState(0);
  return /* @__PURE__ */ u(
    f2,
    {
      scope: e,
      triggerRef: s,
      contentRef: c,
      contentId: Oe(),
      titleId: Oe(),
      descriptionId: Oe(),
      titlePresent: d > 0,
      descriptionPresent: h > 0,
      setTitleCount: p,
      setDescriptionCount: b,
      open: l,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((g) => !g), [f]),
      modal: i,
      children: r
    }
  );
}, "Dialog"), p2 = "DialogTrigger", In = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Xe(function(e, r) {
    const { __scopeDialog: o, ...n } = e, a = rt(p2, o), i = Y(r, a.triggerRef);
    return /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": Mn(a.open),
        ...n,
        ref: i,
        onClick: F(e.onClick, a.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), qd = "DialogPortal", [m2, Jd] = jd(qd, {
  forceMount: void 0
}), go = /* @__PURE__ */ Xe((t) => {
  const { __scopeDialog: e, forceMount: r, children: o, container: n } = t, a = rt(qd, e);
  return /* @__PURE__ */ u(m2, { scope: e, forceMount: r, children: m.Children.map(o, (i) => /* @__PURE__ */ u(we, { present: r || a.open, children: /* @__PURE__ */ u(Tr, { asChild: !0, container: n, children: i }) })) });
}, "DialogPortal"), Da = "DialogOverlay", bo = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Xe(function(e, r) {
    const o = Jd(Da, e.__scopeDialog), { forceMount: n = o.forceMount, ...a } = e, i = rt(Da, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ u(we, { present: n || i.open, children: /* @__PURE__ */ u(g2, { ...a, ref: r }) }) : null;
  }, "DialogOverlay")
), h2 = /* @__PURE__ */ Ze("DialogOverlay.RemoveScroll"), g2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(e, r) {
    const { __scopeDialog: o, ...n } = e, a = rt(Da, o), i = wl(), s = Y(r, i);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u(so, { as: h2, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ u(
        W.div,
        {
          "data-state": Mn(a.open),
          ...n,
          ref: s,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), qr = "DialogContent", vo = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Xe(function(e, r) {
    const o = Jd(qr, e.__scopeDialog), { forceMount: n = o.forceMount, ...a } = e, i = rt(qr, e.__scopeDialog);
    return /* @__PURE__ */ u(we, { present: n || i.open, children: i.modal ? /* @__PURE__ */ u(b2, { ...a, ref: r }) : /* @__PURE__ */ u(v2, { ...a, ref: r }) });
  }, "DialogContent")
), b2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(e, r) {
    const o = rt(qr, e.__scopeDialog), n = m.useRef(null), a = Y(r, o.contentRef, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return hn(i);
    }, []), /* @__PURE__ */ u(
      Zd,
      {
        ...e,
        ref: a,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = o.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || c) && i.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), v2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(e, r) {
    const o = rt(qr, e.__scopeDialog), n = m.useRef(!1), a = m.useRef(!1);
    return /* @__PURE__ */ u(
      Zd,
      {
        ...e,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, c;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (n.current || (c = o.triggerRef.current) == null || c.focus(), i.preventDefault()), n.current = !1, a.current = !1;
        },
        onInteractOutside: (i) => {
          var l, f;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const s = i.target;
          ((f = o.triggerRef.current) == null ? void 0 : f.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && a.current && i.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), Zd = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(e, r) {
    const { __scopeDialog: o, trapFocus: n, onOpenAutoFocus: a, onCloseAutoFocus: i, ...s } = e, c = rt(qr, o);
    return Rr(), /* @__PURE__ */ u(ve, { children: /* @__PURE__ */ u(
      rn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: a,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ u(
          kr,
          {
            role: "dialog",
            id: c.contentId,
            "aria-describedby": c.descriptionPresent ? c.descriptionId : void 0,
            "aria-labelledby": c.titlePresent ? c.titleId : void 0,
            "data-state": Mn(c.open),
            ...s,
            ref: r,
            deferPointerDownOutside: !0,
            onDismiss: () => c.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), x2 = "DialogTitle", er = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Xe(function(e, r) {
    const { __scopeDialog: o, ...n } = e, a = rt(x2, o), { setTitleCount: i } = a;
    return de(() => (i((s) => s + 1), () => i((s) => s - 1)), [i]), /* @__PURE__ */ u(W.h2, { id: a.titleId, ...n, ref: r });
  }, "DialogTitle")
), w2 = "DialogDescription", Tn = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(e, r) {
    const { __scopeDialog: o, ...n } = e, a = rt(w2, o), { setDescriptionCount: i } = a;
    return de(() => (i((s) => s + 1), () => i((s) => s - 1)), [i]), /* @__PURE__ */ u(W.p, { id: a.descriptionId, ...n, ref: r });
  }, "DialogDescription")
), y2 = "DialogClose", tr = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Xe(function(e, r) {
    const { __scopeDialog: o, ...n } = e, a = rt(y2, o);
    return /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        ...n,
        ref: r,
        onClick: F(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function Mn(t) {
  return t ? "open" : "closed";
}
Xe(Mn, "getState");
function TS({
  src: t,
  alt: e = "",
  fallback: r,
  width: o,
  height: n,
  preview: a = !1,
  className: i,
  onError: s,
  ...c
}) {
  const [l, f] = Q();
  if (!t || l === t) {
    const p = (typeof r == "string" ? r : e) || "Image unavailable";
    return /* @__PURE__ */ u(
      "span",
      {
        className: M(
          "inline-flex items-center justify-center min-w-12 min-h-12 rounded-none border border-solid border-rule bg-canvas text-label-secondary font-medium",
          i
        ),
        style: { width: o, height: n },
        role: "img",
        "aria-label": p,
        children: r ?? (e ? e.slice(0, 1).toUpperCase() : p)
      }
    );
  }
  const d = /* @__PURE__ */ u(
    "img",
    {
      src: t,
      alt: e,
      width: o,
      height: n,
      className: M("block max-w-full object-cover rounded-none", i),
      onError: (p) => {
        f(t), s == null || s(p);
      },
      ...c
    }
  );
  return a ? /* @__PURE__ */ $(ho, { children: [
    /* @__PURE__ */ u(In, { asChild: !0, children: /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: M(
          "p-0 bg-transparent cursor-zoom-in",
          "transition-opacity duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
          "[@media(hover:hover)]:hover:opacity-80",
          "su-focus-ring"
        ),
        "aria-label": `Preview ${e || "image"}`,
        children: d
      }
    ) }),
    /* @__PURE__ */ $(go, { children: [
      /* @__PURE__ */ u(bo, { className: "su-overlay-strong" }),
      /* @__PURE__ */ $(
        vo,
        {
          className: "fixed inset-[5vh_5vw] z-[var(--su-z-modal)] flex flex-col items-center justify-center gap-su4 animate-su-pop-in motion-reduce:animate-none",
          "aria-describedby": void 0,
          children: [
            /* @__PURE__ */ u(er, { className: "text-white text-body", children: e || "Image preview" }),
            /* @__PURE__ */ u(
              "img",
              {
                src: t,
                alt: e,
                className: "max-w-full max-h-[75vh] object-contain"
              }
            ),
            /* @__PURE__ */ u(tr, { asChild: !0, children: /* @__PURE__ */ u(Be, { variant: "default", children: "Close preview" }) })
          ]
        }
      )
    ] })
  ] }) : d;
}
function C2({
  title: t,
  description: e,
  extra: r,
  avatar: o,
  interactive: n = !1,
  className: a,
  children: i,
  onClick: s,
  onKeyDown: c,
  ...l
}) {
  const f = n && s != null;
  return /* @__PURE__ */ $(
    "li",
    {
      className: M(
        "flex items-start gap-su3 py-su3 px-su4",
        n && "min-h-[var(--su-hit-target)] cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none [@media(hover:hover)]:hover:bg-fill-quaternary su-focus-ring focus-visible:relative focus-visible:z-10",
        a
      ),
      onClick: s,
      onKeyDown: f ? (d) => {
        c == null || c(d), !d.defaultPrevented && (d.key === "Enter" || d.key === " ") && (d.preventDefault(), d.currentTarget.click());
      } : c,
      ...f ? { role: "button", tabIndex: 0 } : null,
      ...l,
      children: [
        o ? /* @__PURE__ */ u("div", { className: "shrink-0", children: o }) : null,
        /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
          t ? /* @__PURE__ */ u("div", { className: "text-body font-medium text-label", children: t }) : null,
          e ? /* @__PURE__ */ u("div", { className: "mt-su1 text-footnote text-label-secondary", children: e }) : null,
          i
        ] }),
        r ? /* @__PURE__ */ u("div", { className: "shrink-0 text-label-secondary text-footnote", children: r }) : null
      ]
    }
  );
}
function A2({ bordered: t = !1, split: e = !0, className: r, children: o, ...n }) {
  return /* @__PURE__ */ u(
    "ul",
    {
      role: "list",
      className: M(
        "m-0 p-0 list-none rounded-none bg-paper border-solid",
        t ? "border border-rule border-t-rule-strong" : "border-t border-rule-strong",
        e && "[&>li+li]:border-t [&>li+li]:border-solid [&>li+li]:border-rule",
        r
      ),
      ...n,
      children: o
    }
  );
}
A2.Item = C2;
var S2 = Object.defineProperty, ae = (t, e) => S2(t, "name", { value: e, configurable: !0 });
function ef(t, e) {
  return m.useReducer((r, o) => e[r][o] ?? r, t);
}
ae(ef, "useStateMachine");
var tf = "ScrollArea", [rf, MS] = /* @__PURE__ */ ge(tf), [_2, ut] = rf(tf), k2 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ae(function(e, r) {
    const {
      __scopeScrollArea: o,
      type: n = "hover",
      dir: a,
      scrollHideDelay: i = 600,
      ...s
    } = e, [c, l] = m.useState(null), [f, d] = m.useState(null), [p, h] = m.useState(null), [b, g] = m.useState(null), [v, w] = m.useState(null), [y, x] = m.useState(0), [C, E] = m.useState(0), [k, S] = m.useState(!1), [A, _] = m.useState(!1), R = Y(r, l), P = ct(a);
    return /* @__PURE__ */ u(
      _2,
      {
        scope: o,
        type: n,
        dir: P,
        scrollHideDelay: i,
        scrollArea: c,
        viewport: f,
        onViewportChange: d,
        content: p,
        onContentChange: h,
        scrollbarX: b,
        onScrollbarXChange: g,
        scrollbarXEnabled: k,
        onScrollbarXEnabledChange: S,
        scrollbarY: v,
        onScrollbarYChange: w,
        scrollbarYEnabled: A,
        onScrollbarYEnabledChange: _,
        onCornerWidthChange: x,
        onCornerHeightChange: E,
        children: /* @__PURE__ */ u(
          W.div,
          {
            dir: P,
            ...s,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": C + "px",
              ...e.style
            }
          }
        )
      }
    );
  }, "ScrollArea")
), R2 = "ScrollAreaViewport", E2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ae(function(e, r) {
    const { __scopeScrollArea: o, children: n, nonce: a, ...i } = e, s = ut(R2, o), c = m.useRef(null), l = Y(r, c, s.onViewportChange);
    return /* @__PURE__ */ $(ve, { children: [
      /* @__PURE__ */ u(P2, { nonce: a }),
      /* @__PURE__ */ u(
        W.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ u("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }, "ScrollAreaViewport")
), P2 = /* @__PURE__ */ m.memo(
  /* @__PURE__ */ ae(function({ nonce: e }) {
    return /* @__PURE__ */ u(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
        },
        nonce: e
      }
    );
  }, "ScrollAreaViewportStyle"),
  (t, e) => t.nonce === e.nonce
), St = "ScrollAreaScrollbar", I2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ae(function(e, r) {
    const { forceMount: o, ...n } = e, a = ut(St, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = a, c = e.orientation === "horizontal";
    return m.useEffect(() => (c ? i(!0) : s(!0), () => {
      c ? i(!1) : s(!1);
    }), [c, i, s]), a.type === "hover" ? /* @__PURE__ */ u(T2, { ...n, ref: r, forceMount: o }) : a.type === "scroll" ? /* @__PURE__ */ u(M2, { ...n, ref: r, forceMount: o }) : a.type === "auto" ? /* @__PURE__ */ u(of, { ...n, ref: r, forceMount: o }) : a.type === "always" ? /* @__PURE__ */ u(Ji, { ...n, ref: r, "data-state": "visible" }) : null;
  }, "ScrollAreaScrollbar")
), T2 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const { forceMount: o, ...n } = e, a = ut(St, e.__scopeScrollArea), [i, s] = m.useState(!1);
  return m.useEffect(() => {
    const c = a.scrollArea;
    let l = 0;
    if (c) {
      const f = /* @__PURE__ */ ae(() => {
        window.clearTimeout(l), s(!0);
      }, "handlePointerEnter"), d = /* @__PURE__ */ ae(() => {
        l = window.setTimeout(() => s(!1), a.scrollHideDelay);
      }, "handlePointerLeave");
      return c.addEventListener("pointerenter", f), c.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), c.removeEventListener("pointerenter", f), c.removeEventListener("pointerleave", d);
      };
    }
  }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ u(we, { present: o || i, children: /* @__PURE__ */ u(
    of,
    {
      "data-state": i ? "visible" : "hidden",
      ...n,
      ref: r
    }
  ) });
}, "ScrollAreaScrollbarHover")), M2 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const { forceMount: o, ...n } = e, a = ut(St, e.__scopeScrollArea), i = e.orientation === "horizontal", s = wo(() => l("SCROLL_END"), 100), [c, l] = ef("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return m.useEffect(() => {
    if (c === "idle") {
      const f = window.setTimeout(() => l("HIDE"), a.scrollHideDelay);
      return () => window.clearTimeout(f);
    }
  }, [c, a.scrollHideDelay, l]), m.useEffect(() => {
    const f = a.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (f) {
      let p = f[d];
      const h = /* @__PURE__ */ ae(() => {
        const b = f[d];
        p !== b && (l("SCROLL"), s()), p = b;
      }, "handleScroll");
      return f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
    }
  }, [a.viewport, i, l, s]), /* @__PURE__ */ u(we, { present: o || c !== "hidden", children: /* @__PURE__ */ u(
    Ji,
    {
      "data-state": c === "hidden" ? "hidden" : "visible",
      ...n,
      ref: r,
      onPointerEnter: F(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: F(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}, "ScrollAreaScrollbarScroll")), of = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const o = ut(St, e.__scopeScrollArea), { forceMount: n, ...a } = e, [i, s] = m.useState(!1), c = e.orientation === "horizontal", l = wo(() => {
    if (o.viewport) {
      const f = o.viewport.offsetWidth < o.viewport.scrollWidth, d = o.viewport.offsetHeight < o.viewport.scrollHeight;
      s(c ? f : d);
    }
  }, 10);
  return Zr(o.viewport, l), Zr(o.content, l), /* @__PURE__ */ u(we, { present: n || i, children: /* @__PURE__ */ u(
    Ji,
    {
      "data-state": i ? "visible" : "hidden",
      ...a,
      ref: r
    }
  ) });
}, "ScrollAreaScrollbarAuto")), Ji = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const { orientation: o = "vertical", ...n } = e, a = ut(St, e.__scopeScrollArea), i = m.useRef(null), s = m.useRef(0), [c, l] = m.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), f = Zi(c.viewport, c.content), d = {
    ...n,
    sizes: c,
    onSizesChange: l,
    hasThumb: f > 0 && f < 1,
    onThumbChange: /* @__PURE__ */ ae((h) => i.current = h, "onThumbChange"),
    onThumbPointerUp: /* @__PURE__ */ ae(() => s.current = 0, "onThumbPointerUp"),
    onThumbPointerDown: /* @__PURE__ */ ae((h) => s.current = h, "onThumbPointerDown")
  };
  function p(h, b) {
    return sf(h, s.current, c, b);
  }
  return ae(p, "getScrollPosition"), o === "horizontal" ? /* @__PURE__ */ u(
    D2,
    {
      ...d,
      ref: r,
      onThumbPositionChange: () => {
        if (a.viewport && i.current) {
          const h = a.viewport.scrollLeft, b = Oa(h, c, a.dir);
          i.current.style.transform = `translate3d(${b}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        a.viewport && (a.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        a.viewport && (a.viewport.scrollLeft = p(h, a.dir));
      }
    }
  ) : o === "vertical" ? /* @__PURE__ */ u(
    N2,
    {
      ...d,
      ref: r,
      onThumbPositionChange: () => {
        if (a.viewport && i.current) {
          const h = a.viewport.scrollTop, b = Oa(h, c);
          i.current.style.transform = `translate3d(0, ${b}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        a.viewport && (a.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        a.viewport && (a.viewport.scrollTop = p(h));
      }
    }
  ) : null;
}, "ScrollAreaScrollbarVisible")), D2 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const { sizes: o, onSizesChange: n, ...a } = e, i = ut(St, e.__scopeScrollArea), [s, c] = m.useState(), l = m.useRef(null), f = Y(r, l, i.onScrollbarXChange);
  return m.useEffect(() => {
    l.current && c(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u(
    af,
    {
      "data-orientation": "horizontal",
      ...a,
      ref: f,
      sizes: o,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": xo(o) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (i.viewport) {
          const h = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(h), ts(h, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && n({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Jr(s.paddingLeft),
            paddingEnd: Jr(s.paddingRight)
          }
        });
      }
    }
  );
}, "ScrollAreaScrollbarX")), N2 = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const { sizes: o, onSizesChange: n, ...a } = e, i = ut(St, e.__scopeScrollArea), [s, c] = m.useState(), l = m.useRef(null), f = Y(r, l, i.onScrollbarYChange);
  return m.useEffect(() => {
    l.current && c(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u(
    af,
    {
      "data-orientation": "vertical",
      ...a,
      ref: f,
      sizes: o,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": xo(o) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (i.viewport) {
          const h = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), ts(h, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && n({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Jr(s.paddingTop),
            paddingEnd: Jr(s.paddingBottom)
          }
        });
      }
    }
  );
}, "ScrollAreaScrollbarY")), [O2, nf] = rf(St), af = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ae(function(e, r) {
  const {
    __scopeScrollArea: o,
    sizes: n,
    hasThumb: a,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: c,
    onThumbPositionChange: l,
    onDragScroll: f,
    onWheelScroll: d,
    onResize: p,
    ...h
  } = e, b = ut(St, o), [g, v] = m.useState(null), w = Y(r, v), y = m.useRef(null), x = m.useRef(""), C = b.viewport, E = n.content - n.viewport, k = fe(d), S = fe(l), A = wo(p, 10);
  function _(R) {
    if (y.current) {
      const P = R.clientX - y.current.left, I = R.clientY - y.current.top;
      f({ x: P, y: I });
    }
  }
  return ae(_, "handleDragScroll"), m.useEffect(() => {
    const R = /* @__PURE__ */ ae((P) => {
      const I = P.target;
      (g == null ? void 0 : g.contains(I)) && k(P, E);
    }, "handleWheel");
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [C, g, E, k]), m.useEffect(S, [n, S]), Zr(g, A), Zr(b.content, A), /* @__PURE__ */ u(
    O2,
    {
      scope: o,
      scrollbar: g,
      hasThumb: a,
      onThumbChange: fe(i),
      onThumbPointerUp: fe(s),
      onThumbPositionChange: S,
      onThumbPointerDown: fe(c),
      children: /* @__PURE__ */ u(
        W.div,
        {
          ...h,
          ref: w,
          style: { position: "absolute", ...h.style },
          onPointerDown: F(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = g.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), _(R));
          }),
          onPointerMove: F(e.onPointerMove, _),
          onPointerUp: F(e.onPointerUp, (R) => {
            const P = R.target;
            P.hasPointerCapture(R.pointerId) && P.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = x.current, b.viewport && (b.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}, "ScrollAreaScrollbarImpl")), Na = "ScrollAreaThumb", $2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ae(function(e, r) {
    const { forceMount: o, ...n } = e, a = nf(Na, e.__scopeScrollArea);
    return /* @__PURE__ */ u(we, { present: o || a.hasThumb, children: /* @__PURE__ */ u(B2, { ref: r, ...n }) });
  }, "ScrollAreaThumb")
), B2 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ae(function(e, r) {
    const { __scopeScrollArea: o, style: n, ...a } = e, i = ut(Na, o), s = nf(Na, o), { onThumbPositionChange: c } = s, l = Y(r, s.onThumbChange), f = m.useRef(void 0), d = wo(() => {
      f.current && (f.current(), f.current = void 0);
    }, 100);
    return m.useEffect(() => {
      const p = i.viewport;
      if (p) {
        const h = /* @__PURE__ */ ae(() => {
          if (d(), !f.current) {
            const b = z2(p, c);
            f.current = b, c();
          }
        }, "handleScroll");
        return c(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
      }
    }, [i.viewport, d, c]), /* @__PURE__ */ u(
      W.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...a,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: F(e.onPointerDownCapture, (p) => {
          const b = p.target.getBoundingClientRect(), g = p.clientX - b.left, v = p.clientY - b.top;
          s.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: F(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }, "ScrollAreaThumbImpl")
);
function Jr(t) {
  return t ? parseInt(t, 10) : 0;
}
ae(Jr, "toInt");
function Zi(t, e) {
  const r = t / e;
  return isNaN(r) ? 0 : r;
}
ae(Zi, "getThumbRatio");
function xo(t) {
  const e = Zi(t.viewport, t.content), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = (t.scrollbar.size - r) * e;
  return Math.max(o, 18);
}
ae(xo, "getThumbSize");
function sf(t, e, r, o = "ltr") {
  const n = xo(r), a = n / 2, i = e || a, s = n - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, f = r.content - r.viewport, d = o === "ltr" ? [0, f] : [f * -1, 0];
  return es([c, l], d)(t);
}
ae(sf, "getScrollPositionFromPointer");
function Oa(t, e, r = "ltr") {
  const o = xo(e), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - n, i = e.content - e.viewport, s = a - o, c = r === "ltr" ? [0, i] : [i * -1, 0], l = yr(t, c);
  return es([0, i], [0, s])(l);
}
ae(Oa, "getThumbOffsetFromScroll");
function es(t, e) {
  return (r) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const o = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + o * (r - t[0]);
  };
}
ae(es, "linearScale");
function ts(t, e) {
  return t > 0 && t < e;
}
ae(ts, "isScrollingWithinScrollbarBounds");
var z2 = /* @__PURE__ */ ae((t, e = () => {
}) => {
  let r = { left: t.scrollLeft, top: t.scrollTop }, o = 0;
  return (/* @__PURE__ */ ae((function n() {
    const a = { left: t.scrollLeft, top: t.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && e(), r = a, o = window.requestAnimationFrame(n);
  }), "loop"))(), () => window.cancelAnimationFrame(o);
}, "addUnlinkedScrollListener");
function wo(t, e) {
  const r = fe(t), o = m.useRef(0);
  return m.useEffect(() => () => window.clearTimeout(o.current), []), m.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(r, e);
  }, [r, e]);
}
ae(wo, "useDebounceCallback");
function Zr(t, e) {
  const r = fe(e);
  de(() => {
    let o = 0;
    if (t) {
      const n = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(r);
      });
      return n.observe(t), () => {
        window.cancelAnimationFrame(o), n.unobserve(t);
      };
    }
  }, [t, r]);
}
ae(Zr, "useResizeObserver");
var F2 = k2, L2 = E2, V2 = I2, U2 = $2;
const W2 = "[&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-2 [&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-solid [&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-accent [&:has([data-radix-scroll-area-viewport]:focus-visible)]:outline-offset-[var(--su-focus-ring-offset)]";
function H2({
  height: t = 240,
  itemHeight: e = 48,
  overscan: r = 4,
  virtual: o = !0,
  className: n,
  children: a,
  style: i,
  ...s
}) {
  const c = pe(null), [l, f] = Q(0), [d, p] = Q(
    typeof t == "number" ? t : 240
  );
  le(() => {
    if (!c.current) return;
    const w = new ResizeObserver(
      ([y]) => p(y.contentRect.height)
    );
    return w.observe(c.current), () => w.disconnect();
  }, []);
  const h = Wa.toArray(a), b = Math.max(1, e), g = Math.max(
    0,
    Math.min(h.length - 1, Math.floor(l / b) - r)
  ), v = Math.min(
    h.length,
    g + Math.ceil(d / b) + r * 2
  );
  return /* @__PURE__ */ $(
    F2,
    {
      className: M(
        "rounded-none bg-paper border border-solid border-rule border-t-rule-strong overflow-hidden",
        W2,
        n
      ),
      style: { height: t, ...i },
      ...s,
      children: [
        /* @__PURE__ */ u(
          L2,
          {
            ref: c,
            tabIndex: 0,
            className: "size-full",
            onScroll: (w) => f(w.currentTarget.scrollTop),
            children: o ? /* @__PURE__ */ u(
              "div",
              {
                role: "list",
                style: { height: h.length * b, position: "relative" },
                children: /* @__PURE__ */ u(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: g * b,
                      width: "100%"
                    },
                    children: h.slice(g, v).map((w, y) => /* @__PURE__ */ u(
                      "div",
                      {
                        role: "listitem",
                        "aria-setsize": h.length,
                        "aria-posinset": g + y + 1,
                        className: M(
                          "overflow-hidden",
                          g + y > 0 && "border-t border-solid border-rule"
                        ),
                        style: { height: b },
                        children: w
                      },
                      g + y
                    ))
                  }
                )
              }
            ) : /* @__PURE__ */ u("div", { role: "list", children: h.map((w, y) => /* @__PURE__ */ u(
              "div",
              {
                role: "listitem",
                "aria-setsize": h.length,
                "aria-posinset": y + 1,
                className: M(y > 0 && "border-t border-solid border-rule"),
                children: w
              },
              y
            )) })
          }
        ),
        /* @__PURE__ */ u(
          V2,
          {
            className: "flex w-2 p-0.5 touch-none",
            orientation: "vertical",
            children: /* @__PURE__ */ u(U2, { className: "flex-1 rounded-none bg-fill" })
          }
        )
      ]
    }
  );
}
function G2({
  title: t,
  description: e,
  avatar: r,
  extra: o,
  className: n,
  children: a,
  ...i
}) {
  const s = t || e || r || o;
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "py-su3 px-su4 text-body text-label not-first:border-t not-first:border-solid not-first:border-rule",
        s ? "flex items-start gap-su3" : "truncate",
        n
      ),
      ...i,
      children: s ? /* @__PURE__ */ $(ve, { children: [
        r ? /* @__PURE__ */ u("div", { className: "shrink-0", children: r }) : null,
        /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
          t ? /* @__PURE__ */ u("div", { className: "font-medium truncate", children: t }) : null,
          e ? /* @__PURE__ */ u("div", { className: "mt-su1 text-footnote text-label-secondary truncate", children: e }) : null,
          a
        ] }),
        o ? /* @__PURE__ */ u("div", { className: "shrink-0 text-label-tertiary text-footnote", children: o }) : null
      ] }) : a
    }
  );
}
H2.Item = G2;
function DS({
  trigger: t,
  content: e,
  side: r = "bottom",
  align: o = "center",
  contentClassName: n,
  container: a,
  ...i
}) {
  return /* @__PURE__ */ $(_i, { ...i, children: [
    /* @__PURE__ */ u(ki, { asChild: !0, children: t }),
    /* @__PURE__ */ u(Ri, { container: a, children: /* @__PURE__ */ u(
      Ei,
      {
        side: r,
        align: o,
        sideOffset: 8,
        className: M(
          "z-[var(--su-z-dropdown)] p-su3 border border-solid border-rule-strong rounded-none bg-paper text-label text-subhead su-focus-ring animate-su-pop-in motion-reduce:animate-none",
          n
        ),
        children: /* @__PURE__ */ u("div", { className: "max-h-[calc(var(--radix-popover-content-available-height)-2*var(--su-space-3))] overflow-y-auto", children: e })
      }
    ) })
  ] });
}
const Br = function(t, e) {
  let n = t;
  const a = Wr[e];
  let i = null, s = 0, c = null;
  const l = [], f = {}, d = function(S, A) {
    s = n * 4 + 17, i = (function(_) {
      const R = new Array(_);
      for (let P = 0; P < _; P += 1) {
        R[P] = new Array(_);
        for (let I = 0; I < _; I += 1)
          R[P][I] = null;
      }
      return R;
    })(s), p(0, 0), p(s - 7, 0), p(0, s - 7), g(), b(), w(S, A), n >= 7 && v(S), c == null && (c = C(n, a, l)), y(c, A);
  }, p = function(S, A) {
    for (let _ = -1; _ <= 7; _ += 1)
      if (!(S + _ <= -1 || s <= S + _))
        for (let R = -1; R <= 7; R += 1)
          A + R <= -1 || s <= A + R || (0 <= _ && _ <= 6 && (R == 0 || R == 6) || 0 <= R && R <= 6 && (_ == 0 || _ == 6) || 2 <= _ && _ <= 4 && 2 <= R && R <= 4 ? i[S + _][A + R] = !0 : i[S + _][A + R] = !1);
  }, h = function() {
    let S = 0, A = 0;
    for (let _ = 0; _ < 8; _ += 1) {
      d(!0, _);
      const R = It.getLostPoint(f);
      (_ == 0 || S > R) && (S = R, A = _);
    }
    return A;
  }, b = function() {
    for (let S = 8; S < s - 8; S += 1)
      i[S][6] == null && (i[S][6] = S % 2 == 0);
    for (let S = 8; S < s - 8; S += 1)
      i[6][S] == null && (i[6][S] = S % 2 == 0);
  }, g = function() {
    const S = It.getPatternPosition(n);
    for (let A = 0; A < S.length; A += 1)
      for (let _ = 0; _ < S.length; _ += 1) {
        const R = S[A], P = S[_];
        if (i[R][P] == null)
          for (let I = -2; I <= 2; I += 1)
            for (let T = -2; T <= 2; T += 1)
              I == -2 || I == 2 || T == -2 || T == 2 || I == 0 && T == 0 ? i[R + I][P + T] = !0 : i[R + I][P + T] = !1;
      }
  }, v = function(S) {
    const A = It.getBCHTypeNumber(n);
    for (let _ = 0; _ < 18; _ += 1) {
      const R = !S && (A >> _ & 1) == 1;
      i[Math.floor(_ / 3)][_ % 3 + s - 8 - 3] = R;
    }
    for (let _ = 0; _ < 18; _ += 1) {
      const R = !S && (A >> _ & 1) == 1;
      i[_ % 3 + s - 8 - 3][Math.floor(_ / 3)] = R;
    }
  }, w = function(S, A) {
    const _ = a << 3 | A, R = It.getBCHTypeInfo(_);
    for (let P = 0; P < 15; P += 1) {
      const I = !S && (R >> P & 1) == 1;
      P < 6 ? i[P][8] = I : P < 8 ? i[P + 1][8] = I : i[s - 15 + P][8] = I;
    }
    for (let P = 0; P < 15; P += 1) {
      const I = !S && (R >> P & 1) == 1;
      P < 8 ? i[8][s - P - 1] = I : P < 9 ? i[8][15 - P - 1 + 1] = I : i[8][15 - P - 1] = I;
    }
    i[s - 8][8] = !S;
  }, y = function(S, A) {
    let _ = -1, R = s - 1, P = 7, I = 0;
    const T = It.getMaskFunction(A);
    for (let D = s - 1; D > 0; D -= 2)
      for (D == 6 && (D -= 1); ; ) {
        for (let z = 0; z < 2; z += 1)
          if (i[R][D - z] == null) {
            let O = !1;
            I < S.length && (O = (S[I] >>> P & 1) == 1), T(R, D - z) && (O = !O), i[R][D - z] = O, P -= 1, P == -1 && (I += 1, P = 7);
          }
        if (R += _, R < 0 || s <= R) {
          R -= _, _ = -_;
          break;
        }
      }
  }, x = function(S, A) {
    let _ = 0, R = 0, P = 0;
    const I = new Array(A.length), T = new Array(A.length);
    for (let N = 0; N < A.length; N += 1) {
      const B = A[N].dataCount, V = A[N].totalCount - B;
      R = Math.max(R, B), P = Math.max(P, V), I[N] = new Array(B);
      for (let j = 0; j < I[N].length; j += 1)
        I[N][j] = 255 & S.getBuffer()[j + _];
      _ += B;
      const L = It.getErrorCorrectPolynomial(V), X = eo(I[N], L.getLength() - 1).mod(L);
      T[N] = new Array(L.getLength() - 1);
      for (let j = 0; j < T[N].length; j += 1) {
        const oe = j + X.getLength() - T[N].length;
        T[N][j] = oe >= 0 ? X.getAt(oe) : 0;
      }
    }
    let D = 0;
    for (let N = 0; N < A.length; N += 1)
      D += A[N].totalCount;
    const z = new Array(D);
    let O = 0;
    for (let N = 0; N < R; N += 1)
      for (let B = 0; B < A.length; B += 1)
        N < I[B].length && (z[O] = I[B][N], O += 1);
    for (let N = 0; N < P; N += 1)
      for (let B = 0; B < A.length; B += 1)
        N < T[B].length && (z[O] = T[B][N], O += 1);
    return z;
  }, C = function(S, A, _) {
    const R = Sc.getRSBlocks(S, A), P = _c();
    for (let T = 0; T < _.length; T += 1) {
      const D = _[T];
      P.put(D.getMode(), 4), P.put(D.getLength(), It.getLengthInBits(D.getMode(), S)), D.write(P);
    }
    let I = 0;
    for (let T = 0; T < R.length; T += 1)
      I += R[T].dataCount;
    if (P.getLengthInBits() > I * 8)
      throw "code length overflow. (" + P.getLengthInBits() + ">" + I * 8 + ")";
    for (P.getLengthInBits() + 4 <= I * 8 && P.put(0, 4); P.getLengthInBits() % 8 != 0; )
      P.putBit(!1);
    for (; !(P.getLengthInBits() >= I * 8 || (P.put(236, 8), P.getLengthInBits() >= I * 8)); )
      P.put(17, 8);
    return x(P, R);
  };
  f.addData = function(S, A) {
    A = A || "Byte";
    let _ = null;
    switch (A) {
      case "Numeric":
        _ = Y2(S);
        break;
      case "Alphanumeric":
        _ = Q2(S);
        break;
      case "Byte":
        _ = X2(S);
        break;
      case "Kanji":
        _ = j2(S);
        break;
      default:
        throw "mode:" + A;
    }
    l.push(_), c = null;
  }, f.isDark = function(S, A) {
    if (S < 0 || s <= S || A < 0 || s <= A)
      throw S + "," + A;
    return i[S][A];
  }, f.getModuleCount = function() {
    return s;
  }, f.make = function() {
    if (n < 1) {
      let S = 1;
      for (; S < 40; S++) {
        const A = Sc.getRSBlocks(S, a), _ = _c();
        for (let P = 0; P < l.length; P++) {
          const I = l[P];
          _.put(I.getMode(), 4), _.put(I.getLength(), It.getLengthInBits(I.getMode(), S)), I.write(_);
        }
        let R = 0;
        for (let P = 0; P < A.length; P++)
          R += A[P].dataCount;
        if (_.getLengthInBits() <= R * 8)
          break;
      }
      n = S;
    }
    d(!1, h());
  }, f.createTableTag = function(S, A) {
    S = S || 2, A = typeof A > "u" ? S * 4 : A;
    let _ = "";
    _ += '<table style="', _ += " border-width: 0px; border-style: none;", _ += " border-collapse: collapse;", _ += " padding: 0px; margin: " + A + "px;", _ += '">', _ += "<tbody>";
    for (let R = 0; R < f.getModuleCount(); R += 1) {
      _ += "<tr>";
      for (let P = 0; P < f.getModuleCount(); P += 1)
        _ += '<td style="', _ += " border-width: 0px; border-style: none;", _ += " border-collapse: collapse;", _ += " padding: 0px; margin: 0px;", _ += " width: " + S + "px;", _ += " height: " + S + "px;", _ += " background-color: ", _ += f.isDark(R, P) ? "#000000" : "#ffffff", _ += ";", _ += '"/>';
      _ += "</tr>";
    }
    return _ += "</tbody>", _ += "</table>", _;
  }, f.createSvgTag = function(S, A, _, R) {
    let P = {};
    typeof arguments[0] == "object" && (P = arguments[0], S = P.cellSize, A = P.margin, _ = P.alt, R = P.title), S = S || 2, A = typeof A > "u" ? S * 4 : A, _ = typeof _ == "string" ? { text: _ } : _ || {}, _.text = _.text || null, _.id = _.text ? _.id || "qrcode-description" : null, R = typeof R == "string" ? { text: R } : R || {}, R.text = R.text || null, R.id = R.text ? R.id || "qrcode-title" : null;
    const I = f.getModuleCount() * S + A * 2;
    let T, D, z, O, N = "", B;
    for (B = "l" + S + ",0 0," + S + " -" + S + ",0 0,-" + S + "z ", N += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', N += P.scalable ? "" : ' width="' + I + 'px" height="' + I + 'px"', N += ' viewBox="0 0 ' + I + " " + I + '" ', N += ' preserveAspectRatio="xMinYMin meet"', N += R.text || _.text ? ' role="img" aria-labelledby="' + E([R.id, _.id].join(" ").trim()) + '"' : "", N += ">", N += R.text ? '<title id="' + E(R.id) + '">' + E(R.text) + "</title>" : "", N += _.text ? '<description id="' + E(_.id) + '">' + E(_.text) + "</description>" : "", N += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', N += '<path d="', z = 0; z < f.getModuleCount(); z += 1)
      for (O = z * S + A, T = 0; T < f.getModuleCount(); T += 1)
        f.isDark(z, T) && (D = T * S + A, N += "M" + D + "," + O + B);
    return N += '" stroke="transparent" fill="black"/>', N += "</svg>", N;
  }, f.createDataURL = function(S, A) {
    S = S || 2, A = typeof A > "u" ? S * 4 : A;
    const _ = f.getModuleCount() * S + A * 2, R = A, P = _ - A;
    return Z2(_, _, function(I, T) {
      if (R <= I && I < P && R <= T && T < P) {
        const D = Math.floor((I - R) / S), z = Math.floor((T - R) / S);
        return f.isDark(z, D) ? 0 : 1;
      } else
        return 1;
    });
  }, f.createImgTag = function(S, A, _) {
    S = S || 2, A = typeof A > "u" ? S * 4 : A;
    const R = f.getModuleCount() * S + A * 2;
    let P = "";
    return P += "<img", P += ' src="', P += f.createDataURL(S, A), P += '"', P += ' width="', P += R, P += '"', P += ' height="', P += R, P += '"', _ && (P += ' alt="', P += E(_), P += '"'), P += "/>", P;
  };
  const E = function(S) {
    let A = "";
    for (let _ = 0; _ < S.length; _ += 1) {
      const R = S.charAt(_);
      switch (R) {
        case "<":
          A += "&lt;";
          break;
        case ">":
          A += "&gt;";
          break;
        case "&":
          A += "&amp;";
          break;
        case '"':
          A += "&quot;";
          break;
        default:
          A += R;
          break;
      }
    }
    return A;
  }, k = function(S) {
    S = typeof S > "u" ? 2 : S;
    const _ = f.getModuleCount() * 1 + S * 2, R = S, P = _ - S;
    let I, T, D, z, O;
    const N = {
      "██": "█",
      "█ ": "▀",
      " █": "▄",
      "  ": " "
    }, B = {
      "██": "▀",
      "█ ": "▀",
      " █": " ",
      "  ": " "
    };
    let V = "";
    for (I = 0; I < _; I += 2) {
      for (D = Math.floor((I - R) / 1), z = Math.floor((I + 1 - R) / 1), T = 0; T < _; T += 1)
        O = "█", R <= T && T < P && R <= I && I < P && f.isDark(D, Math.floor((T - R) / 1)) && (O = " "), R <= T && T < P && R <= I + 1 && I + 1 < P && f.isDark(z, Math.floor((T - R) / 1)) ? O += " " : O += "█", V += S < 1 && I + 1 >= P ? B[O] : N[O];
      V += `
`;
    }
    return _ % 2 && S > 0 ? V.substring(0, V.length - _ - 1) + Array(_ + 1).join("▀") : V.substring(0, V.length - 1);
  };
  return f.createASCII = function(S, A) {
    if (S = S || 1, S < 2)
      return k(A);
    S -= 1, A = typeof A > "u" ? S * 2 : A;
    const _ = f.getModuleCount() * S + A * 2, R = A, P = _ - A;
    let I, T, D, z;
    const O = Array(S + 1).join("██"), N = Array(S + 1).join("  ");
    let B = "", V = "";
    for (I = 0; I < _; I += 1) {
      for (D = Math.floor((I - R) / S), V = "", T = 0; T < _; T += 1)
        z = 1, R <= T && T < P && R <= I && I < P && f.isDark(D, Math.floor((T - R) / S)) && (z = 0), V += z ? O : N;
      for (D = 0; D < S; D += 1)
        B += V + `
`;
    }
    return B.substring(0, B.length - 1);
  }, f.renderTo2dContext = function(S, A) {
    A = A || 2;
    const _ = f.getModuleCount();
    for (let R = 0; R < _; R++)
      for (let P = 0; P < _; P++)
        S.fillStyle = f.isDark(R, P) ? "black" : "white", S.fillRect(P * A, R * A, A, A);
  }, f;
};
Br.stringToBytes = function(t) {
  const e = [];
  for (let r = 0; r < t.length; r += 1) {
    const o = t.charCodeAt(r);
    e.push(o & 255);
  }
  return e;
};
Br.createStringToBytes = function(t, e) {
  const r = (function() {
    const n = q2(t), a = function() {
      const c = n.read();
      if (c == -1) throw "eof";
      return c;
    };
    let i = 0;
    const s = {};
    for (; ; ) {
      const c = n.read();
      if (c == -1) break;
      const l = a(), f = a(), d = a(), p = String.fromCharCode(c << 8 | l), h = f << 8 | d;
      s[p] = h, i += 1;
    }
    if (i != e)
      throw i + " != " + e;
    return s;
  })(), o = 63;
  return function(n) {
    const a = [];
    for (let i = 0; i < n.length; i += 1) {
      const s = n.charCodeAt(i);
      if (s < 128)
        a.push(s);
      else {
        const c = r[n.charAt(i)];
        typeof c == "number" ? (c & 255) == c ? a.push(c) : (a.push(c >>> 8), a.push(c & 255)) : a.push(o);
      }
    }
    return a;
  };
};
const Ne = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, Wr = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, Pt = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, It = (function() {
  const t = [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ], e = 1335, r = 7973, o = 21522, n = {}, a = function(i) {
    let s = 0;
    for (; i != 0; )
      s += 1, i >>>= 1;
    return s;
  };
  return n.getBCHTypeInfo = function(i) {
    let s = i << 10;
    for (; a(s) - a(e) >= 0; )
      s ^= e << a(s) - a(e);
    return (i << 10 | s) ^ o;
  }, n.getBCHTypeNumber = function(i) {
    let s = i << 12;
    for (; a(s) - a(r) >= 0; )
      s ^= r << a(s) - a(r);
    return i << 12 | s;
  }, n.getPatternPosition = function(i) {
    return t[i - 1];
  }, n.getMaskFunction = function(i) {
    switch (i) {
      case Pt.PATTERN000:
        return function(s, c) {
          return (s + c) % 2 == 0;
        };
      case Pt.PATTERN001:
        return function(s, c) {
          return s % 2 == 0;
        };
      case Pt.PATTERN010:
        return function(s, c) {
          return c % 3 == 0;
        };
      case Pt.PATTERN011:
        return function(s, c) {
          return (s + c) % 3 == 0;
        };
      case Pt.PATTERN100:
        return function(s, c) {
          return (Math.floor(s / 2) + Math.floor(c / 3)) % 2 == 0;
        };
      case Pt.PATTERN101:
        return function(s, c) {
          return s * c % 2 + s * c % 3 == 0;
        };
      case Pt.PATTERN110:
        return function(s, c) {
          return (s * c % 2 + s * c % 3) % 2 == 0;
        };
      case Pt.PATTERN111:
        return function(s, c) {
          return (s * c % 3 + (s + c) % 2) % 2 == 0;
        };
      default:
        throw "bad maskPattern:" + i;
    }
  }, n.getErrorCorrectPolynomial = function(i) {
    let s = eo([1], 0);
    for (let c = 0; c < i; c += 1)
      s = s.multiply(eo([1, Tt.gexp(c)], 0));
    return s;
  }, n.getLengthInBits = function(i, s) {
    if (1 <= s && s < 10)
      switch (i) {
        case Ne.MODE_NUMBER:
          return 10;
        case Ne.MODE_ALPHA_NUM:
          return 9;
        case Ne.MODE_8BIT_BYTE:
          return 8;
        case Ne.MODE_KANJI:
          return 8;
        default:
          throw "mode:" + i;
      }
    else if (s < 27)
      switch (i) {
        case Ne.MODE_NUMBER:
          return 12;
        case Ne.MODE_ALPHA_NUM:
          return 11;
        case Ne.MODE_8BIT_BYTE:
          return 16;
        case Ne.MODE_KANJI:
          return 10;
        default:
          throw "mode:" + i;
      }
    else if (s < 41)
      switch (i) {
        case Ne.MODE_NUMBER:
          return 14;
        case Ne.MODE_ALPHA_NUM:
          return 13;
        case Ne.MODE_8BIT_BYTE:
          return 16;
        case Ne.MODE_KANJI:
          return 12;
        default:
          throw "mode:" + i;
      }
    else
      throw "type:" + s;
  }, n.getLostPoint = function(i) {
    const s = i.getModuleCount();
    let c = 0;
    for (let d = 0; d < s; d += 1)
      for (let p = 0; p < s; p += 1) {
        let h = 0;
        const b = i.isDark(d, p);
        for (let g = -1; g <= 1; g += 1)
          if (!(d + g < 0 || s <= d + g))
            for (let v = -1; v <= 1; v += 1)
              p + v < 0 || s <= p + v || g == 0 && v == 0 || b == i.isDark(d + g, p + v) && (h += 1);
        h > 5 && (c += 3 + h - 5);
      }
    for (let d = 0; d < s - 1; d += 1)
      for (let p = 0; p < s - 1; p += 1) {
        let h = 0;
        i.isDark(d, p) && (h += 1), i.isDark(d + 1, p) && (h += 1), i.isDark(d, p + 1) && (h += 1), i.isDark(d + 1, p + 1) && (h += 1), (h == 0 || h == 4) && (c += 3);
      }
    for (let d = 0; d < s; d += 1)
      for (let p = 0; p < s - 6; p += 1)
        i.isDark(d, p) && !i.isDark(d, p + 1) && i.isDark(d, p + 2) && i.isDark(d, p + 3) && i.isDark(d, p + 4) && !i.isDark(d, p + 5) && i.isDark(d, p + 6) && (c += 40);
    for (let d = 0; d < s; d += 1)
      for (let p = 0; p < s - 6; p += 1)
        i.isDark(p, d) && !i.isDark(p + 1, d) && i.isDark(p + 2, d) && i.isDark(p + 3, d) && i.isDark(p + 4, d) && !i.isDark(p + 5, d) && i.isDark(p + 6, d) && (c += 40);
    let l = 0;
    for (let d = 0; d < s; d += 1)
      for (let p = 0; p < s; p += 1)
        i.isDark(p, d) && (l += 1);
    const f = Math.abs(100 * l / s / s - 50) / 5;
    return c += f * 10, c;
  }, n;
})(), Tt = (function() {
  const t = new Array(256), e = new Array(256);
  for (let o = 0; o < 8; o += 1)
    t[o] = 1 << o;
  for (let o = 8; o < 256; o += 1)
    t[o] = t[o - 4] ^ t[o - 5] ^ t[o - 6] ^ t[o - 8];
  for (let o = 0; o < 255; o += 1)
    e[t[o]] = o;
  const r = {};
  return r.glog = function(o) {
    if (o < 1)
      throw "glog(" + o + ")";
    return e[o];
  }, r.gexp = function(o) {
    for (; o < 0; )
      o += 255;
    for (; o >= 256; )
      o -= 255;
    return t[o];
  }, r;
})(), eo = function(t, e) {
  if (typeof t.length > "u")
    throw t.length + "/" + e;
  const r = (function() {
    let n = 0;
    for (; n < t.length && t[n] == 0; )
      n += 1;
    const a = new Array(t.length - n + e);
    for (let i = 0; i < t.length - n; i += 1)
      a[i] = t[i + n];
    return a;
  })(), o = {};
  return o.getAt = function(n) {
    return r[n];
  }, o.getLength = function() {
    return r.length;
  }, o.multiply = function(n) {
    const a = new Array(o.getLength() + n.getLength() - 1);
    for (let i = 0; i < o.getLength(); i += 1)
      for (let s = 0; s < n.getLength(); s += 1)
        a[i + s] ^= Tt.gexp(Tt.glog(o.getAt(i)) + Tt.glog(n.getAt(s)));
    return eo(a, 0);
  }, o.mod = function(n) {
    if (o.getLength() - n.getLength() < 0)
      return o;
    const a = Tt.glog(o.getAt(0)) - Tt.glog(n.getAt(0)), i = new Array(o.getLength());
    for (let s = 0; s < o.getLength(); s += 1)
      i[s] = o.getAt(s);
    for (let s = 0; s < n.getLength(); s += 1)
      i[s] ^= Tt.gexp(Tt.glog(n.getAt(s)) + a);
    return eo(i, 0).mod(n);
  }, o;
}, Sc = (function() {
  const t = [
    // L
    // M
    // Q
    // H
    // 1
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    // 4
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    // 7
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    // 10
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12, 7, 37, 13],
    // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ], e = function(n, a) {
    const i = {};
    return i.totalCount = n, i.dataCount = a, i;
  }, r = {}, o = function(n, a) {
    switch (a) {
      case Wr.L:
        return t[(n - 1) * 4 + 0];
      case Wr.M:
        return t[(n - 1) * 4 + 1];
      case Wr.Q:
        return t[(n - 1) * 4 + 2];
      case Wr.H:
        return t[(n - 1) * 4 + 3];
      default:
        return;
    }
  };
  return r.getRSBlocks = function(n, a) {
    const i = o(n, a);
    if (typeof i > "u")
      throw "bad rs block @ typeNumber:" + n + "/errorCorrectionLevel:" + a;
    const s = i.length / 3, c = [];
    for (let l = 0; l < s; l += 1) {
      const f = i[l * 3 + 0], d = i[l * 3 + 1], p = i[l * 3 + 2];
      for (let h = 0; h < f; h += 1)
        c.push(e(d, p));
    }
    return c;
  }, r;
})(), _c = function() {
  const t = [];
  let e = 0;
  const r = {};
  return r.getBuffer = function() {
    return t;
  }, r.getAt = function(o) {
    const n = Math.floor(o / 8);
    return (t[n] >>> 7 - o % 8 & 1) == 1;
  }, r.put = function(o, n) {
    for (let a = 0; a < n; a += 1)
      r.putBit((o >>> n - a - 1 & 1) == 1);
  }, r.getLengthInBits = function() {
    return e;
  }, r.putBit = function(o) {
    const n = Math.floor(e / 8);
    t.length <= n && t.push(0), o && (t[n] |= 128 >>> e % 8), e += 1;
  }, r;
}, Y2 = function(t) {
  const e = Ne.MODE_NUMBER, r = t, o = {};
  o.getMode = function() {
    return e;
  }, o.getLength = function(i) {
    return r.length;
  }, o.write = function(i) {
    const s = r;
    let c = 0;
    for (; c + 2 < s.length; )
      i.put(n(s.substring(c, c + 3)), 10), c += 3;
    c < s.length && (s.length - c == 1 ? i.put(n(s.substring(c, c + 1)), 4) : s.length - c == 2 && i.put(n(s.substring(c, c + 2)), 7));
  };
  const n = function(i) {
    let s = 0;
    for (let c = 0; c < i.length; c += 1)
      s = s * 10 + a(i.charAt(c));
    return s;
  }, a = function(i) {
    if ("0" <= i && i <= "9")
      return i.charCodeAt(0) - 48;
    throw "illegal char :" + i;
  };
  return o;
}, Q2 = function(t) {
  const e = Ne.MODE_ALPHA_NUM, r = t, o = {};
  o.getMode = function() {
    return e;
  }, o.getLength = function(a) {
    return r.length;
  }, o.write = function(a) {
    const i = r;
    let s = 0;
    for (; s + 1 < i.length; )
      a.put(
        n(i.charAt(s)) * 45 + n(i.charAt(s + 1)),
        11
      ), s += 2;
    s < i.length && a.put(n(i.charAt(s)), 6);
  };
  const n = function(a) {
    if ("0" <= a && a <= "9")
      return a.charCodeAt(0) - 48;
    if ("A" <= a && a <= "Z")
      return a.charCodeAt(0) - 65 + 10;
    switch (a) {
      case " ":
        return 36;
      case "$":
        return 37;
      case "%":
        return 38;
      case "*":
        return 39;
      case "+":
        return 40;
      case "-":
        return 41;
      case ".":
        return 42;
      case "/":
        return 43;
      case ":":
        return 44;
      default:
        throw "illegal char :" + a;
    }
  };
  return o;
}, X2 = function(t) {
  const e = Ne.MODE_8BIT_BYTE, r = Br.stringToBytes(t), o = {};
  return o.getMode = function() {
    return e;
  }, o.getLength = function(n) {
    return r.length;
  }, o.write = function(n) {
    for (let a = 0; a < r.length; a += 1)
      n.put(r[a], 8);
  }, o;
}, j2 = function(t) {
  const e = Ne.MODE_KANJI, r = Br.stringToBytes;
  (function(a, i) {
    const s = r(a);
    if (s.length != 2 || (s[0] << 8 | s[1]) != i)
      throw "sjis not supported.";
  })("友", 38726);
  const o = r(t), n = {};
  return n.getMode = function() {
    return e;
  }, n.getLength = function(a) {
    return ~~(o.length / 2);
  }, n.write = function(a) {
    const i = o;
    let s = 0;
    for (; s + 1 < i.length; ) {
      let c = (255 & i[s]) << 8 | 255 & i[s + 1];
      if (33088 <= c && c <= 40956)
        c -= 33088;
      else if (57408 <= c && c <= 60351)
        c -= 49472;
      else
        throw "illegal char at " + (s + 1) + "/" + c;
      c = (c >>> 8 & 255) * 192 + (c & 255), a.put(c, 13), s += 2;
    }
    if (s < i.length)
      throw "illegal char at " + (s + 1);
  }, n;
}, cf = function() {
  const t = [], e = {};
  return e.writeByte = function(r) {
    t.push(r & 255);
  }, e.writeShort = function(r) {
    e.writeByte(r), e.writeByte(r >>> 8);
  }, e.writeBytes = function(r, o, n) {
    o = o || 0, n = n || r.length;
    for (let a = 0; a < n; a += 1)
      e.writeByte(r[a + o]);
  }, e.writeString = function(r) {
    for (let o = 0; o < r.length; o += 1)
      e.writeByte(r.charCodeAt(o));
  }, e.toByteArray = function() {
    return t;
  }, e.toString = function() {
    let r = "";
    r += "[";
    for (let o = 0; o < t.length; o += 1)
      o > 0 && (r += ","), r += t[o];
    return r += "]", r;
  }, e;
}, K2 = function() {
  let t = 0, e = 0, r = 0, o = "";
  const n = {}, a = function(s) {
    o += String.fromCharCode(i(s & 63));
  }, i = function(s) {
    if (s < 0)
      throw "n:" + s;
    if (s < 26)
      return 65 + s;
    if (s < 52)
      return 97 + (s - 26);
    if (s < 62)
      return 48 + (s - 52);
    if (s == 62)
      return 43;
    if (s == 63)
      return 47;
    throw "n:" + s;
  };
  return n.writeByte = function(s) {
    for (t = t << 8 | s & 255, e += 8, r += 1; e >= 6; )
      a(t >>> e - 6), e -= 6;
  }, n.flush = function() {
    if (e > 0 && (a(t << 6 - e), t = 0, e = 0), r % 3 != 0) {
      const s = 3 - r % 3;
      for (let c = 0; c < s; c += 1)
        o += "=";
    }
  }, n.toString = function() {
    return o;
  }, n;
}, q2 = function(t) {
  const e = t;
  let r = 0, o = 0, n = 0;
  const a = {};
  a.read = function() {
    for (; n < 8; ) {
      if (r >= e.length) {
        if (n == 0)
          return -1;
        throw "unexpected end of file./" + n;
      }
      const c = e.charAt(r);
      if (r += 1, c == "=")
        return n = 0, -1;
      if (c.match(/^\s$/))
        continue;
      o = o << 6 | i(c.charCodeAt(0)), n += 6;
    }
    const s = o >>> n - 8 & 255;
    return n -= 8, s;
  };
  const i = function(s) {
    if (65 <= s && s <= 90)
      return s - 65;
    if (97 <= s && s <= 122)
      return s - 97 + 26;
    if (48 <= s && s <= 57)
      return s - 48 + 52;
    if (s == 43)
      return 62;
    if (s == 47)
      return 63;
    throw "c:" + s;
  };
  return a;
}, J2 = function(t, e) {
  const r = t, o = e, n = new Array(t * e), a = {};
  a.setPixel = function(l, f, d) {
    n[f * r + l] = d;
  }, a.write = function(l) {
    l.writeString("GIF87a"), l.writeShort(r), l.writeShort(o), l.writeByte(128), l.writeByte(0), l.writeByte(0), l.writeByte(0), l.writeByte(0), l.writeByte(0), l.writeByte(255), l.writeByte(255), l.writeByte(255), l.writeString(","), l.writeShort(0), l.writeShort(0), l.writeShort(r), l.writeShort(o), l.writeByte(0);
    const f = 2, d = s(f);
    l.writeByte(f);
    let p = 0;
    for (; d.length - p > 255; )
      l.writeByte(255), l.writeBytes(d, p, 255), p += 255;
    l.writeByte(d.length - p), l.writeBytes(d, p, d.length - p), l.writeByte(0), l.writeString(";");
  };
  const i = function(l) {
    const f = l;
    let d = 0, p = 0;
    const h = {};
    return h.write = function(b, g) {
      if (b >>> g)
        throw "length over";
      for (; d + g >= 8; )
        f.writeByte(255 & (b << d | p)), g -= 8 - d, b >>>= 8 - d, p = 0, d = 0;
      p = b << d | p, d = d + g;
    }, h.flush = function() {
      d > 0 && f.writeByte(p);
    }, h;
  }, s = function(l) {
    const f = 1 << l, d = (1 << l) + 1;
    let p = l + 1;
    const h = c();
    for (let y = 0; y < f; y += 1)
      h.add(String.fromCharCode(y));
    h.add(String.fromCharCode(f)), h.add(String.fromCharCode(d));
    const b = cf(), g = i(b);
    g.write(f, p);
    let v = 0, w = String.fromCharCode(n[v]);
    for (v += 1; v < n.length; ) {
      const y = String.fromCharCode(n[v]);
      v += 1, h.contains(w + y) ? w = w + y : (g.write(h.indexOf(w), p), h.size() < 4095 && (h.size() == 1 << p && (p += 1), h.add(w + y)), w = y);
    }
    return g.write(h.indexOf(w), p), g.write(d, p), g.flush(), b.toByteArray();
  }, c = function() {
    const l = {};
    let f = 0;
    const d = {};
    return d.add = function(p) {
      if (d.contains(p))
        throw "dup key:" + p;
      l[p] = f, f += 1;
    }, d.size = function() {
      return f;
    }, d.indexOf = function(p) {
      return l[p];
    }, d.contains = function(p) {
      return typeof l[p] < "u";
    }, d;
  };
  return a;
}, Z2 = function(t, e, r) {
  const o = J2(t, e);
  for (let s = 0; s < e; s += 1)
    for (let c = 0; c < t; c += 1)
      o.setPixel(c, s, r(c, s));
  const n = cf();
  o.write(n);
  const a = K2(), i = n.toByteArray();
  for (let s = 0; s < i.length; s += 1)
    a.writeByte(i[s]);
  return a.flush(), "data:image/gif;base64," + a;
};
Br.stringToBytes;
function NS({
  value: t,
  size: e = 160,
  // The code itself stays dark-on-light in both appearances for scan reliability;
  // only its frame follows the theme (bg-paper / border-rule). Values are the
  // light-appearance --su-ink / --su-paper; override via fg/bg.
  fg: r = "#1d1d1f",
  bg: o = "#ffffff",
  className: n,
  style: a,
  ...i
}) {
  const s = Fe(() => {
    try {
      const f = Br(0, "M");
      f.addData(Array.from(new TextEncoder().encode(t), (h) => String.fromCharCode(h)).join(""), "Byte"), f.make();
      const d = f.getModuleCount(), p = [];
      for (let h = 0; h < d; h++)
        for (let b = 0; b < d; b++)
          f.isDark(h, b) && p.push(`M${b + 4},${h + 4}h1v1h-1z`);
      return { modules: d + 8, path: p.join("") };
    } catch {
      return null;
    }
  }, [t]);
  if (!s)
    return /* @__PURE__ */ u(
      "div",
      {
        className: M(
          "inline-flex items-center justify-center border border-solid border-rule bg-paper p-su2 text-center font-mono text-footnote text-label-secondary",
          n
        ),
        style: { width: e, height: e, ...a },
        role: "img",
        "aria-label": "QR code unavailable: value too long to encode",
        ...i,
        children: "Value too long to encode"
      }
    );
  const { modules: c, path: l } = s;
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "inline-flex rounded-none overflow-hidden border border-solid border-rule bg-paper",
        n
      ),
      style: { width: e, height: e, ...a },
      ...i,
      children: /* @__PURE__ */ $(
        "svg",
        {
          width: e,
          height: e,
          viewBox: `0 0 ${c} ${c}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": `QR code for ${t}`,
          children: [
            /* @__PURE__ */ u("rect", { width: c, height: c, fill: o }),
            /* @__PURE__ */ u("path", { d: l, fill: r })
          ]
        }
      )
    }
  );
}
const kc = "text-subhead text-label-secondary shrink-0";
function OS({
  title: t,
  value: e,
  prefix: r,
  suffix: o,
  description: n,
  className: a,
  ...i
}) {
  return /* @__PURE__ */ $("div", { className: M("flex flex-col gap-su1", a), ...i, children: [
    t ? /* @__PURE__ */ u("div", { className: "text-footnote text-label-secondary", children: t }) : null,
    /* @__PURE__ */ $("div", { className: "flex items-baseline gap-su1 min-w-0", children: [
      r ? /* @__PURE__ */ u("span", { className: kc, children: r }) : null,
      /* @__PURE__ */ u("span", { className: "min-w-0 break-words text-title-2 leading-[var(--su-leading-tight)] font-semibold text-label tabular-nums", children: e }),
      o ? /* @__PURE__ */ u("span", { className: kc, children: o }) : null
    ] }),
    n ? /* @__PURE__ */ u("div", { className: "text-caption-1 text-label-tertiary", children: n }) : null
  ] });
}
const lf = "py-su3 px-su4 text-start border-b border-solid border-rule";
function yo({ striped: t = !1, bordered: e = !1, className: r, children: o, ...n }) {
  return /* @__PURE__ */ u("div", { className: "overflow-x-auto rounded-none bg-paper border-t border-solid border-rule-strong", children: /* @__PURE__ */ u(
    "table",
    {
      className: M(
        "w-full border-collapse text-subhead",
        "[&_tbody_tr]:transition-colors [&_tbody_tr]:duration-[var(--su-duration-fast)] [&_tbody_tr]:ease-[var(--su-ease-out)]",
        "[@media(hover:hover)]:[&_tbody_tr:hover]:bg-fill-tertiary",
        e && "border border-solid border-rule border-t-rule-strong",
        t && "[&_tbody_tr:nth-child(even)]:bg-canvas",
        r
      ),
      ...n,
      children: o
    }
  ) });
}
function ey({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u("thead", { className: M("bg-canvas", t), ...r, children: e });
}
function ty({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u("tbody", { className: t, ...r, children: e });
}
function ry({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u("tr", { className: M("[&:last-child_td]:border-b-0", t), ...r, children: e });
}
function oy({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u(
    "th",
    {
      className: M(
        lf,
        "su-label whitespace-nowrap text-label-secondary",
        t
      ),
      ...r,
      children: e
    }
  );
}
function ny({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u("td", { className: M(lf, "text-label", t), ...r, children: e });
}
yo.Head = ey;
yo.Body = ty;
yo.Row = ry;
yo.Th = oy;
yo.Td = ny;
const ay = {
  default: void 0,
  accent: "bg-accent-soft text-accent",
  success: "bg-[color-mix(in_srgb,var(--su-success)_15%,transparent)] text-success",
  warning: "bg-[color-mix(in_srgb,var(--su-warning)_15%,transparent)] text-warning",
  danger: "bg-[color-mix(in_srgb,var(--su-danger)_15%,transparent)] text-danger"
};
function $S({
  color: t = "default",
  closable: e = !1,
  onClose: r,
  className: o,
  children: n,
  ...a
}) {
  return /* @__PURE__ */ $(
    "span",
    {
      className: M(
        "inline-flex items-center gap-su1 px-su2 rounded-none text-caption-1 font-medium bg-canvas text-label",
        // A closable tag grows to the 44px hit target instead of letting the
        // close button's invisible box spill over neighbouring tags.
        e ? "py-0 pr-0 min-h-[var(--su-hit-target)]" : "py-su1",
        ay[t],
        o
      ),
      ...a,
      children: [
        n,
        e ? /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: "inline-flex items-center justify-center shrink-0 self-stretch p-0 min-w-[var(--su-hit-target)] bg-transparent text-inherit text-[14px] leading-none cursor-pointer su-focus-ring",
            onClick: r,
            "aria-label": typeof n == "string" ? `Remove ${n}` : "Remove tag",
            children: /* @__PURE__ */ u("span", { "aria-hidden": "true", children: "×" })
          }
        ) : null
      ]
    }
  );
}
const iy = {
  default: "bg-label-tertiary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger"
};
function BS({ items: t, pending: e, className: r, ...o }) {
  return /* @__PURE__ */ $("ol", { className: M("m-0 p-0 list-none", r), ...o, children: [
    t.map((n, a) => /* @__PURE__ */ $(
      "li",
      {
        className: "relative flex gap-su3 pb-su4 not-last:before:content-[''] not-last:before:absolute not-last:before:start-[5px] not-last:before:top-[14px] not-last:before:bottom-0 not-last:before:w-0.5 not-last:before:bg-separator",
        children: [
          /* @__PURE__ */ u(
            "div",
            {
              "aria-hidden": "true",
              className: M(
                "z-[1] shrink-0 size-3 mt-1 rounded-none",
                iy[n.color ?? "default"]
              ),
              children: n.dot
            }
          ),
          /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
            n.title ? /* @__PURE__ */ u("div", { className: "text-body font-medium text-label", children: n.title }) : null,
            n.description ? /* @__PURE__ */ u("div", { className: "mt-su1 text-footnote text-label-secondary", children: n.description }) : null
          ] })
        ]
      },
      a
    )),
    e ? /* @__PURE__ */ $("li", { className: "relative flex gap-su3 pb-su4", children: [
      /* @__PURE__ */ u(
        "div",
        {
          "aria-hidden": "true",
          className: "z-[1] shrink-0 size-3 mt-1 rounded-none bg-transparent border-2 border-dashed border-separator"
        }
      ),
      /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: e })
    ] }) : null
  ] });
}
var sy = Object.defineProperty, ke = (t, e) => sy(t, "name", { value: e, configurable: !0 }), [rs, zS] = /* @__PURE__ */ ge("Tooltip", [
  Ft
]), os = Ft(), cy = "TooltipProvider", ly = 700, $a = "tooltip.open", [uy, ns] = rs(cy), dy = /* @__PURE__ */ ke((t) => {
  const {
    __scopeTooltip: e,
    delayDuration: r = ly,
    skipDelayDuration: o = 300,
    disableHoverableContent: n = !1,
    children: a
  } = t, i = m.useRef(!0), s = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u(
    uy,
    {
      scope: e,
      isOpenDelayedRef: i,
      delayDuration: r,
      onOpen: m.useCallback(() => {
        o <= 0 || (window.clearTimeout(c.current), i.current = !1);
      }, [o]),
      onClose: m.useCallback(() => {
        o <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          o
        ));
      }, [o]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: m.useCallback((l) => {
        s.current = l;
      }, []),
      disableHoverableContent: n,
      children: a
    }
  );
}, "TooltipProvider"), Ba = "Tooltip", [fy, Co] = rs(Ba), py = /* @__PURE__ */ ke((t) => {
  const {
    __scopeTooltip: e,
    children: r,
    open: o,
    defaultOpen: n,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = t, c = ns(Ba, t.__scopeTooltip), l = os(e), [f, d] = m.useState(null), [p, h] = m.useState(void 0), b = Oe(), g = m.useRef(0), v = i ?? c.disableHoverableContent, w = s ?? c.delayDuration, y = m.useRef(!1), [x, C] = xe({
    prop: o,
    defaultProp: n ?? !1,
    onChange: /* @__PURE__ */ ke((R) => {
      R ? (c.onOpen(), document.dispatchEvent(new CustomEvent($a))) : c.onClose(), a == null || a(R);
    }, "onChange"),
    caller: Ba
  }), E = m.useMemo(() => x ? y.current ? "delayed-open" : "instant-open" : "closed", [x]), k = m.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y.current = !1, C(!0);
  }, [C]), S = m.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, C(!1);
  }, [C]), A = m.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      y.current = !0, C(!0), g.current = 0;
    }, w);
  }, [w, C]);
  return m.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ u(io, { ...l, children: /* @__PURE__ */ u(
    fy,
    {
      scope: e,
      contentId: p ?? b,
      setContentId: h,
      open: x,
      stateAttribute: E,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? A() : k();
      }, [c.isOpenDelayedRef, A, k]),
      onTriggerLeave: m.useCallback(() => {
        v ? S() : (window.clearTimeout(g.current), g.current = 0);
      }, [S, v]),
      onOpen: k,
      onClose: S,
      disableHoverableContent: v,
      children: r
    }
  ) });
}, "Tooltip"), Rc = "TooltipTrigger", my = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ke(function(e, r) {
    const { __scopeTooltip: o, ...n } = e, a = Co(Rc, o), i = ns(Rc, o), s = os(o), c = m.useRef(null), l = Y(r, c, a.onTriggerChange), f = m.useRef(!1), d = m.useRef(!1), p = m.useCallback(() => f.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ u(un, { asChild: !0, ...s, children: /* @__PURE__ */ u(
      W.button,
      {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: F(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (a.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: F(e.onPointerLeave, () => {
          a.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: F(e.onPointerDown, () => {
          a.open && a.onClose(), f.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: F(e.onFocus, () => {
          f.current || a.onOpen();
        }),
        onBlur: F(e.onBlur, a.onClose),
        onClick: F(e.onClick, a.onClose)
      }
    ) });
  }, "TooltipTrigger")
), uf = "TooltipPortal", [hy, gy] = rs(uf, {
  forceMount: void 0
}), by = /* @__PURE__ */ ke((t) => {
  const { __scopeTooltip: e, forceMount: r, children: o, container: n } = t, a = Co(uf, e);
  return /* @__PURE__ */ u(hy, { scope: e, forceMount: r, children: /* @__PURE__ */ u(we, { present: r || a.open, children: /* @__PURE__ */ u(Tr, { asChild: !0, container: n, children: o }) }) });
}, "TooltipPortal"), to = "TooltipContent", vy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ke(function(e, r) {
    const o = gy(to, e.__scopeTooltip), { forceMount: n = o.forceMount, side: a = "top", ...i } = e, s = Co(to, e.__scopeTooltip);
    return /* @__PURE__ */ u(we, { present: n || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ u(df, { side: a, ...i, ref: r }) : /* @__PURE__ */ u(xy, { side: a, ...i, ref: r }) });
  }, "TooltipContent")
), xy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ke(function(e, r) {
  const o = Co(to, e.__scopeTooltip), n = ns(to, e.__scopeTooltip), a = m.useRef(null), i = Y(r, a), [s, c] = m.useState(null), { trigger: l, onClose: f } = o, d = a.current, { onPointerInTransitChange: p } = n, h = m.useCallback(() => {
    c(null), p(!1);
  }, [p]), b = m.useCallback(
    (g, v) => {
      const w = g.currentTarget, y = { x: g.clientX, y: g.clientY }, x = ff(y, w.getBoundingClientRect()), C = pf(y, x), E = mf(v.getBoundingClientRect()), k = gf([...C, ...E]);
      c(k), p(!0);
    },
    [p]
  );
  return m.useEffect(() => () => h(), [h]), m.useEffect(() => {
    if (l && d) {
      const g = /* @__PURE__ */ ke((w) => b(w, d), "handleTriggerLeave"), v = /* @__PURE__ */ ke((w) => b(w, l), "handleContentLeave");
      return l.addEventListener("pointerleave", g), d.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", g), d.removeEventListener("pointerleave", v);
      };
    }
  }, [l, d, b, h]), m.useEffect(() => {
    if (s) {
      const g = /* @__PURE__ */ ke((v) => {
        const w = v.target, y = { x: v.clientX, y: v.clientY }, x = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)), C = !hf(y, s);
        x ? h() : C && (h(), f());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, d, s, f, h]), /* @__PURE__ */ u(df, { ...e, ref: i });
}, "TooltipContentHoverable")), wy = /* @__PURE__ */ Ya("TooltipContent"), df = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ke(function(e, r) {
    const {
      __scopeTooltip: o,
      children: n,
      "aria-label": a,
      id: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      ...l
    } = e, f = Co(to, o), d = os(o), { onClose: p } = f;
    m.useEffect(() => (document.addEventListener($a, p), () => document.removeEventListener($a, p)), [p]), m.useEffect(() => {
      if (f.trigger) {
        const b = /* @__PURE__ */ ke((g) => {
          g.target instanceof Node && g.target.contains(f.trigger) && p();
        }, "handleScroll");
        return window.addEventListener("scroll", b, { capture: !0 }), () => window.removeEventListener("scroll", b, { capture: !0 });
      }
    }, [f.trigger, p]);
    const { setContentId: h } = f;
    return de(() => (h(i), () => {
      h(void 0);
    }), [i, h]), /* @__PURE__ */ u(
      kr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: c,
        onFocusOutside: (b) => b.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ $(
          dn,
          {
            "data-state": f.stateAttribute,
            role: a ? void 0 : "tooltip",
            id: a ? void 0 : f.contentId,
            ...d,
            ...l,
            ref: r,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u(wy, { children: n }),
              a ? /* @__PURE__ */ u(rd, { id: f.contentId, role: "tooltip", children: a }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
);
function ff(t, e) {
  const r = Math.abs(e.top - t.y), o = Math.abs(e.bottom - t.y), n = Math.abs(e.right - t.x), a = Math.abs(e.left - t.x);
  switch (Math.min(r, o, n, a)) {
    case a:
      return "left";
    case n:
      return "right";
    case r:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
ke(ff, "getExitSideFromRect");
function pf(t, e, r = 5) {
  const o = [];
  switch (e) {
    case "top":
      o.push(
        { x: t.x - r, y: t.y + r },
        { x: t.x + r, y: t.y + r }
      );
      break;
    case "bottom":
      o.push(
        { x: t.x - r, y: t.y - r },
        { x: t.x + r, y: t.y - r }
      );
      break;
    case "left":
      o.push(
        { x: t.x + r, y: t.y - r },
        { x: t.x + r, y: t.y + r }
      );
      break;
    case "right":
      o.push(
        { x: t.x - r, y: t.y - r },
        { x: t.x - r, y: t.y + r }
      );
      break;
  }
  return o;
}
ke(pf, "getPaddedExitPoints");
function mf(t) {
  const { top: e, right: r, bottom: o, left: n } = t;
  return [
    { x: n, y: e },
    { x: r, y: e },
    { x: r, y: o },
    { x: n, y: o }
  ];
}
ke(mf, "getPointsFromRect");
function hf(t, e) {
  const { x: r, y: o } = t;
  let n = !1;
  for (let a = 0, i = e.length - 1; a < e.length; i = a++) {
    const s = e[a], c = e[i], l = s.x, f = s.y, d = c.x, p = c.y;
    f > o != p > o && r < (d - l) * (o - f) / (p - f) + l && (n = !n);
  }
  return n;
}
ke(hf, "isPointInPolygon");
function gf(t) {
  const e = t.slice();
  return e.sort((r, o) => r.x < o.x ? -1 : r.x > o.x ? 1 : r.y < o.y ? -1 : r.y > o.y ? 1 : 0), bf(e);
}
ke(gf, "getHull");
function bf(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    for (; e.length >= 2; ) {
      const a = e[e.length - 1], i = e[e.length - 2];
      if ((a.x - i.x) * (n.y - i.y) >= (a.y - i.y) * (n.x - i.x)) e.pop();
      else break;
    }
    e.push(n);
  }
  e.pop();
  const r = [];
  for (let o = t.length - 1; o >= 0; o--) {
    const n = t[o];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], i = r[r.length - 2];
      if ((a.x - i.x) * (n.y - i.y) >= (a.y - i.y) * (n.x - i.x)) r.pop();
      else break;
    }
    r.push(n);
  }
  return r.pop(), e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r);
}
ke(bf, "getHullPresorted");
var yy = dy, Cy = py, Ay = my, Sy = by, _y = vy;
function vf({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ u(yy, { delayDuration: 200, ...e, children: t });
}
function ky({
  content: t,
  side: e = "top",
  align: r = "center",
  children: o,
  ...n
}) {
  return t == null || t === "" ? /* @__PURE__ */ u(ve, { children: o }) : /* @__PURE__ */ $(Cy, { ...n, children: [
    /* @__PURE__ */ u(Ay, { asChild: !0, children: o }),
    /* @__PURE__ */ u(Sy, { children: /* @__PURE__ */ u(
      _y,
      {
        side: e,
        align: r,
        sideOffset: 8,
        className: "z-[var(--su-z-dropdown)] max-w-60 py-su2 px-su3 border border-solid border-rule-strong rounded-none bg-paper text-label text-caption-1 leading-[var(--su-leading-snug)] animate-su-tip-in motion-reduce:animate-none",
        children: t
      }
    ) })
  ] });
}
ky.Provider = vf;
function FS({
  open: t = !1,
  steps: e,
  current: r,
  defaultCurrent: o = 0,
  onChange: n,
  onClose: a
}) {
  const [i, s] = Q(o), [c, l] = Q(null), f = r ?? i, d = e[f];
  le(() => {
    t && r === void 0 && s(o);
  }, [t, r, o]), le(() => {
    if (!t || !d) return;
    const b = document.querySelector(d.target);
    b == null || b.scrollIntoView({ block: "center", behavior: "instant" });
    const g = () => l((b == null ? void 0 : b.getBoundingClientRect()) ?? null);
    return g(), window.addEventListener("resize", g), window.addEventListener("scroll", g, !0), () => {
      window.removeEventListener("resize", g), window.removeEventListener("scroll", g, !0);
    };
  }, [t, d == null ? void 0 : d.target]);
  const p = (b) => {
    b < 0 || b > e.length - 1 || (r === void 0 && s(b), n == null || n(b));
  }, h = (b) => {
    if (b.key === "ArrowRight") p(f + 1);
    else if (b.key === "ArrowLeft") p(f - 1);
    else return;
    b.preventDefault();
  };
  return /* @__PURE__ */ u(
    ho,
    {
      open: t && !!d,
      onOpenChange: (b) => {
        b || a == null || a();
      },
      children: /* @__PURE__ */ $(go, { children: [
        /* @__PURE__ */ u(bo, { className: "fixed inset-0 z-[var(--su-z-max)] animate-su-fade-in motion-reduce:animate-none", children: c ? /* @__PURE__ */ u(
          "div",
          {
            className: "fixed rounded-none pointer-events-none shadow-[0_0_0_9999px_rgba(10,12,18,0.45)]",
            style: {
              top: c.top - 4,
              left: c.left - 4,
              width: c.width + 8,
              height: c.height + 8
            }
          }
        ) : /* @__PURE__ */ u("div", { className: "absolute inset-0 bg-[rgba(10,12,18,0.45)]" }) }),
        /* @__PURE__ */ $(
          vo,
          {
            onKeyDown: h,
            className: "fixed bottom-su8 left-1/2 z-[var(--su-z-max)] -translate-x-1/2 w-[min(360px,calc(100%-var(--su-space-8)))] max-h-[70vh] overflow-y-auto p-su4 rounded-none border border-solid border-rule-strong bg-paper animate-su-rise-in motion-reduce:animate-none",
            children: [
              /* @__PURE__ */ u(er, { className: "text-headline font-semibold text-label", children: (d == null ? void 0 : d.title) ?? "Take a tour" }),
              /* @__PURE__ */ u(Tn, { className: "mt-su2 text-subhead text-label-secondary", children: d == null ? void 0 : d.description }),
              /* @__PURE__ */ $("div", { className: "flex items-center justify-between flex-wrap gap-su2 mt-su4", children: [
                /* @__PURE__ */ $("span", { className: "text-caption-1 text-label-tertiary", children: [
                  f + 1,
                  " / ",
                  e.length
                ] }),
                /* @__PURE__ */ $("div", { className: "flex gap-su2", children: [
                  /* @__PURE__ */ u(tr, { asChild: !0, children: /* @__PURE__ */ u(Be, { size: "sm", children: "Close" }) }),
                  f > 0 && /* @__PURE__ */ u(Be, { size: "sm", onClick: () => p(f - 1), children: "Back" }),
                  f < e.length - 1 ? /* @__PURE__ */ u(Be, { variant: "primary", size: "sm", hideEndCell: !0, onClick: () => p(f + 1), children: "Next" }) : /* @__PURE__ */ u(tr, { asChild: !0, children: /* @__PURE__ */ u(Be, { variant: "primary", size: "sm", hideEndCell: !0, children: "Done" }) })
                ] })
              ] })
            ]
          }
        )
      ] })
    }
  );
}
const Ry = "flex items-center gap-su2 w-full min-h-[var(--su-hit-target)] pe-su3 ps-[calc(var(--su-space-2)+var(--su-tree-depth,0)*var(--su-space-4))] text-subhead text-start cursor-pointer transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] su-focus-ring disabled:opacity-45 disabled:cursor-not-allowed";
function xf({
  node: t,
  depth: e,
  expanded: r,
  selected: o,
  focusKey: n,
  toggle: a,
  select: i
}) {
  var f;
  const s = !!((f = t.children) != null && f.length), c = r.has(t.key), l = o.has(t.key);
  return /* @__PURE__ */ $("div", { className: "block", role: "none", children: [
    /* @__PURE__ */ $(
      "button",
      {
        type: "button",
        role: "treeitem",
        "data-key": t.key,
        "aria-level": e + 1,
        "aria-selected": l,
        "aria-expanded": s ? c : void 0,
        tabIndex: t.key === n ? 0 : -1,
        className: M(
          Ry,
          l ? "bg-fill-secondary text-label font-medium" : "bg-transparent text-label enabled:hover:bg-fill-quaternary enabled:active:bg-fill-tertiary"
        ),
        style: { "--su-tree-depth": e },
        disabled: t.disabled,
        onClick: () => i(t.key),
        children: [
          s ? /* @__PURE__ */ u(
            "span",
            {
              "aria-hidden": !0,
              className: M(
                // The ::before stretches the twisty's tap area to the full row height
                // (32×44) without moving the glyph or the label.
                "relative shrink-0 w-4 before:absolute before:-inset-y-su3 before:-inset-x-su2 before:content-['']",
                "text-label-tertiary transition-transform duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
                c && "rotate-90"
              ),
              onClick: (d) => {
                d.stopPropagation(), a(t.key);
              },
              children: "›"
            }
          ) : /* @__PURE__ */ u("span", { className: "shrink-0 w-4", "aria-hidden": !0 }),
          /* @__PURE__ */ u("span", { className: "flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap", children: t.title })
        ]
      }
    ),
    s && c ? /* @__PURE__ */ u("div", { role: "group", children: t.children.map((d) => /* @__PURE__ */ u(
      xf,
      {
        node: d,
        depth: e + 1,
        expanded: r,
        selected: o,
        focusKey: n,
        toggle: a,
        select: i
      },
      d.key
    )) }) : null
  ] });
}
function LS({
  treeData: t,
  defaultExpandedKeys: e = [],
  selectedKeys: r,
  defaultSelectedKeys: o = [],
  className: n,
  onSelect: a,
  ...i
}) {
  const s = pe(null), [c, l] = Q(() => new Set(e)), [f, d] = Q(() => new Set(o)), [p, h] = Q(), b = r ? new Set(r) : f, g = [], v = (k) => {
    var S;
    for (const A of k)
      A.disabled || g.push(A.key), (S = A.children) != null && S.length && c.has(A.key) && v(A.children);
  };
  v(t);
  const w = p && g.includes(p) ? p : g[0], y = (k) => {
    l((S) => {
      const A = new Set(S);
      return A.delete(k) || A.add(k), A;
    });
  }, x = (k) => {
    h(k), r || d(/* @__PURE__ */ new Set([k])), a == null || a(k);
  }, C = () => {
    var k;
    return Array.from(
      ((k = s.current) == null ? void 0 : k.querySelectorAll('[role="treeitem"]:not([disabled])')) ?? []
    );
  }, E = (k) => {
    const S = C(), A = S.indexOf(document.activeElement);
    if (A < 0) return;
    const _ = S[A], R = _.dataset.key, P = Number(_.getAttribute("aria-level")), I = _.getAttribute("aria-expanded");
    let T;
    switch (k.key) {
      case "ArrowDown":
        T = S[A + 1];
        break;
      case "ArrowUp":
        T = S[A - 1];
        break;
      case "Home":
        T = S[0];
        break;
      case "End":
        T = S[S.length - 1];
        break;
      case "ArrowRight":
        I === "false" ? y(R) : I === "true" && (T = S[A + 1]);
        break;
      case "ArrowLeft":
        I === "true" ? y(R) : T = S.slice(0, A).reverse().find((D) => Number(D.getAttribute("aria-level")) < P);
        break;
      default:
        return;
    }
    k.preventDefault(), T && (h(T.dataset.key), T.focus());
  };
  return /* @__PURE__ */ u(
    "div",
    {
      ref: s,
      className: M(
        "rounded-none bg-paper border-t border-solid border-rule-strong py-su2",
        n
      ),
      role: "tree",
      onKeyDown: E,
      onFocus: (k) => {
        var A;
        const S = (A = k.target.dataset) == null ? void 0 : A.key;
        S && h(S);
      },
      ...i,
      children: t.map((k) => /* @__PURE__ */ u(
        xf,
        {
          node: k,
          depth: 0,
          expanded: c,
          selected: b,
          focusKey: w,
          toggle: y,
          select: x
        },
        k.key
      ))
    }
  );
}
const as = {
  info: "border-l-[3px] border-l-info",
  success: "border-l-[3px] border-l-success",
  warning: "border-l-[3px] border-l-warning",
  error: "border-l-[3px] border-l-danger"
}, wf = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-danger"
}, yf = "shrink-0 grid place-items-center size-[var(--su-hit-target)] min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] border-0 rounded-none bg-transparent text-label-secondary hover:text-label su-focus-ring transition-colors duration-[var(--su-duration-fast)] text-[16px] cursor-pointer", Ey = {
  info: lv,
  success: av,
  warning: Z0,
  error: sv
};
function VS({
  type: t = "info",
  title: e,
  closable: r = !1,
  onClose: o,
  showIcon: n = !1,
  icon: a,
  className: i,
  children: s,
  ...c
}) {
  const l = wf[t], f = Ey[t], d = a ?? (n ? /* @__PURE__ */ u(f, { size: 18, ...Kt }) : null);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "alert",
      className: M(
        "w-full flex items-start gap-su3 py-su3 px-su4 rounded-none border border-solid border-rule bg-paper",
        as[t],
        i
      ),
      ...c,
      children: [
        d ? /* @__PURE__ */ u("span", { "aria-hidden": !0, className: M("shrink-0 mt-[2px] leading-none", l), children: d }) : null,
        /* @__PURE__ */ $("div", { className: "flex-1 min-w-0 break-words", children: [
          e ? /* @__PURE__ */ u("div", { className: "text-subhead font-semibold text-label", children: e }) : null,
          s ? /* @__PURE__ */ u("div", { className: "mt-su1 text-footnote text-label-secondary leading-[var(--su-leading-normal)]", children: s }) : null
        ] }),
        r ? /* @__PURE__ */ u(
          Be,
          {
            variant: "ghost",
            size: "sm",
            className: "shrink-0 min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] p-0 -my-su2 text-ink-2 enabled:hover:text-ink enabled:hover:bg-fill-tertiary",
            onClick: o,
            "aria-label": "Close alert",
            children: /* @__PURE__ */ u(Cn, { size: 16, ...Kt })
          }
        ) : null
      ]
    }
  );
}
function US({
  title: t,
  description: e,
  placement: r = "right",
  width: o = 320,
  footer: n,
  children: a,
  trigger: i,
  ...s
}) {
  return /* @__PURE__ */ $(ho, { ...s, children: [
    i ? /* @__PURE__ */ u(In, { asChild: !0, children: i }) : null,
    /* @__PURE__ */ $(go, { children: [
      /* @__PURE__ */ u(bo, { className: "su-overlay" }),
      /* @__PURE__ */ $(
        vo,
        {
          className: M(
            "fixed top-0 bottom-0 z-[var(--su-z-modal)] max-w-[calc(100vw-var(--su-space-8))] flex flex-col rounded-none bg-paper shadow-none motion-reduce:animate-none",
            r === "left" ? "left-0 border-r border-solid border-rule-strong animate-su-slide-in-left" : "right-0 border-l border-solid border-rule-strong animate-su-slide-in"
          ),
          style: { width: o },
          ...e ? {} : { "aria-describedby": void 0 },
          children: [
            /* @__PURE__ */ $(
              "div",
              {
                className: M(
                  "flex items-start gap-su3 p-su4",
                  t ? "border-b border-solid border-rule" : void 0
                ),
                children: [
                  t ? /* @__PURE__ */ u(er, { className: "flex-1 min-w-0 m-0 pt-[6px] font-sans text-headline font-semibold text-ink text-start leading-[var(--su-leading-snug)]", children: t }) : /* @__PURE__ */ u(er, { className: "sr-only", children: "Drawer" }),
                  /* @__PURE__ */ u(tr, { asChild: !0, children: /* @__PURE__ */ u(
                    Be,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "shrink-0 ms-auto min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] p-0 text-ink-2 enabled:hover:text-ink enabled:hover:bg-fill-tertiary",
                      "aria-label": "Close drawer",
                      children: /* @__PURE__ */ u(Cn, { size: 16, ...Kt })
                    }
                  ) })
                ]
              }
            ),
            e ? /* @__PURE__ */ u(Tn, { className: "sr-only", children: e }) : null,
            /* @__PURE__ */ u("div", { className: "flex-1 overflow-auto p-su4 [&>:first-child]:mt-0 [&>:last-child]:mb-0", children: a }),
            n ? /* @__PURE__ */ u("div", { className: "flex justify-end flex-wrap gap-su2 py-su3 px-su4 pb-su4 border-t border-solid border-rule", children: n }) : null
          ]
        }
      )
    ] })
  ] });
}
var Py = Object.defineProperty, me = (t, e) => Py(t, "name", { value: e, configurable: !0 }), Cf = "ToastProvider", [is, Af, Iy] = /* @__PURE__ */ or("Toast"), [Sf, WS] = /* @__PURE__ */ ge("Toast", [Iy]), [Ty, Dn] = Sf(Cf), My = /* @__PURE__ */ me((t) => {
  const {
    __scopeToast: e,
    label: r = "Notification",
    duration: o = 5e3,
    swipeDirection: n = "right",
    swipeThreshold: a = 50,
    announcerContainer: i,
    children: s
  } = t, [c, l] = m.useState(null), [f, d] = m.useState(0), p = m.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Cf}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u(is.Provider, { scope: e, children: /* @__PURE__ */ u(
    Ty,
    {
      scope: e,
      label: r,
      duration: o,
      swipeDirection: n,
      swipeThreshold: a,
      toastCount: f,
      viewport: c,
      onViewportChange: l,
      onToastAdd: m.useCallback(() => d((h) => h + 1), []),
      onToastRemove: m.useCallback(() => d((h) => h - 1), []),
      isClosePausedRef: p,
      announcerContainer: i,
      children: s
    }
  ) });
}, "ToastProvider"), Dy = "ToastViewport", Ny = ["F8"], za = "toast.viewportPause", Fa = "toast.viewportResume", Oy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(e, r) {
    const {
      __scopeToast: o,
      hotkey: n = Ny,
      label: a = "Notifications ({hotkey})",
      ...i
    } = e, s = Dn(Dy, o), c = Af(o), l = m.useRef(null), f = m.useRef(null), d = m.useRef(null), p = m.useRef(null), h = Y(r, p, s.onViewportChange), b = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = s.toastCount > 0;
    m.useEffect(() => {
      const w = /* @__PURE__ */ me((y) => {
        var C;
        n.length !== 0 && n.every((E) => y[E] || y.code === E) && ((C = p.current) == null || C.focus());
      }, "handleKeyDown");
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
    }, [n]), m.useEffect(() => {
      const w = l.current, y = p.current;
      if (g && w && y) {
        const x = /* @__PURE__ */ me(() => {
          if (!s.isClosePausedRef.current) {
            const S = new CustomEvent(za);
            y.dispatchEvent(S), s.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ me(() => {
          if (s.isClosePausedRef.current) {
            const S = new CustomEvent(Fa);
            y.dispatchEvent(S), s.isClosePausedRef.current = !1;
          }
        }, "handleResume"), E = /* @__PURE__ */ me((S) => {
          !w.contains(S.relatedTarget) && C();
        }, "handleFocusOutResume"), k = /* @__PURE__ */ me(() => {
          w.contains(document.activeElement) || C();
        }, "handlePointerLeaveResume");
        return w.addEventListener("focusin", x), w.addEventListener("focusout", E), w.addEventListener("pointermove", x), w.addEventListener("pointerleave", k), window.addEventListener("blur", x), window.addEventListener("focus", C), () => {
          w.removeEventListener("focusin", x), w.removeEventListener("focusout", E), w.removeEventListener("pointermove", x), w.removeEventListener("pointerleave", k), window.removeEventListener("blur", x), window.removeEventListener("focus", C);
        };
      }
    }, [g, s.isClosePausedRef]);
    const v = m.useCallback(
      ({ tabbingDirection: w }) => {
        const x = c().map((C) => {
          const E = C.ref.current, k = [E, ...Rf(E)];
          return w === "forwards" ? k : k.reverse();
        });
        return (w === "forwards" ? x.reverse() : x).flat();
      },
      [c]
    );
    return m.useEffect(() => {
      const w = p.current;
      if (w) {
        const y = /* @__PURE__ */ me((x) => {
          var k, S, A;
          const C = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !C) {
            const _ = document.activeElement, R = x.shiftKey;
            if (x.target === w && R) {
              (k = f.current) == null || k.focus();
              return;
            }
            const T = v({ tabbingDirection: R ? "backwards" : "forwards" }), D = T.findIndex((z) => z === _);
            Ho(T.slice(D + 1)) ? x.preventDefault() : R ? (S = f.current) == null || S.focus() : (A = d.current) == null || A.focus();
          }
        }, "handleKeyDown");
        return w.addEventListener("keydown", y), () => w.removeEventListener("keydown", y);
      }
    }, [c, v]), /* @__PURE__ */ $(
      Hm,
      {
        ref: l,
        role: "region",
        "aria-label": a.replace("{hotkey}", b),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ u(
            Ec,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const w = v({
                  tabbingDirection: "forwards"
                });
                Ho(w);
              }
            }
          ),
          /* @__PURE__ */ u(is.Slot, { scope: o, children: /* @__PURE__ */ u(W.ol, { tabIndex: -1, ...i, ref: h }) }),
          g && /* @__PURE__ */ u(
            Ec,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = v({
                  tabbingDirection: "backwards"
                });
                Ho(w);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), $y = "ToastFocusProxy", Ec = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(e, r) {
    const { __scopeToast: o, onFocusFromOutsideViewport: n, ...a } = e, i = Dn($y, o);
    return /* @__PURE__ */ u(
      Ii,
      {
        tabIndex: 0,
        ...a,
        ref: r,
        style: { position: "fixed" },
        onFocus: (s) => {
          var f;
          const c = s.relatedTarget;
          !((f = i.viewport) != null && f.contains(c)) && n();
        }
      }
    );
  }, "ToastFocusProxy")
), Nn = "Toast", By = "toast.swipeStart", zy = "toast.swipeMove", Fy = "toast.swipeCancel", Ly = "toast.swipeEnd", Vy = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(e, r) {
    const { forceMount: o, open: n, defaultOpen: a, onOpenChange: i, ...s } = e, [c, l] = xe({
      prop: n,
      defaultProp: a ?? !0,
      onChange: i,
      caller: Nn
    });
    return /* @__PURE__ */ u(we, { present: o || c, children: /* @__PURE__ */ u(
      Hy,
      {
        open: c,
        ...s,
        ref: r,
        onClose: () => l(!1),
        onPause: fe(e.onPause),
        onResume: fe(e.onResume),
        onSwipeStart: F(e.onSwipeStart, (f) => {
          f.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: F(e.onSwipeMove, (f) => {
          const { x: d, y: p } = f.detail.delta;
          f.currentTarget.setAttribute("data-swipe", "move"), f.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), f.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: F(e.onSwipeCancel, (f) => {
          f.currentTarget.setAttribute("data-swipe", "cancel"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: F(e.onSwipeEnd, (f) => {
          const { x: d, y: p } = f.detail.delta;
          f.currentTarget.setAttribute("data-swipe", "end"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), f.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), f.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), l(!1);
        })
      }
    ) });
  }, "Toast")
), [Uy, Wy] = Sf(Nn, {
  onClose() {
  }
}), Hy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(e, r) {
    const {
      __scopeToast: o,
      type: n = "foreground",
      duration: a,
      open: i,
      onClose: s,
      onEscapeKeyDown: c,
      onPause: l,
      onResume: f,
      onSwipeStart: d,
      onSwipeMove: p,
      onSwipeCancel: h,
      onSwipeEnd: b,
      ...g
    } = e, v = Dn(Nn, o), w = Af(o), [y, x] = m.useState(null), C = Y(r, x), E = m.useRef(null), k = m.useRef(null), S = a || v.duration, A = m.useRef(0), _ = m.useRef(S), R = m.useRef(0), { onToastAdd: P, onToastRemove: I } = v, T = fe(() => {
      var N;
      (y == null ? void 0 : y.contains(document.activeElement)) && ((N = v.viewport) == null || N.focus()), s();
    }), D = m.useCallback(
      (O) => {
        !O || O === 1 / 0 || (window.clearTimeout(R.current), A.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(T, O));
      },
      [T]
    );
    m.useEffect(() => {
      const O = v.viewport;
      if (O) {
        const N = /* @__PURE__ */ me(() => {
          D(_.current), f == null || f();
        }, "handleResume"), B = /* @__PURE__ */ me(() => {
          const V = (/* @__PURE__ */ new Date()).getTime() - A.current;
          _.current = _.current - V, window.clearTimeout(R.current), l == null || l();
        }, "handlePause");
        return O.addEventListener(za, B), O.addEventListener(Fa, N), () => {
          O.removeEventListener(za, B), O.removeEventListener(Fa, N);
        };
      }
    }, [v.viewport, S, l, f, D]), m.useEffect(() => {
      i && !v.isClosePausedRef.current && D(S);
    }, [i, S, v.isClosePausedRef, D]), m.useEffect(() => () => {
      window.clearTimeout(R.current);
    }, []), m.useEffect(() => (P(), () => I()), [P, I]);
    const z = m.useMemo(() => y ? ss(y) : null, [y]);
    return v.viewport ? /* @__PURE__ */ $(ve, { children: [
      z && /* @__PURE__ */ u(
        Gy,
        {
          __scopeToast: o,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          children: z
        }
      ),
      /* @__PURE__ */ u(Uy, { scope: o, onClose: T, children: Sr.createPortal(
        /* @__PURE__ */ u(is.ItemSlot, { scope: o, children: /* @__PURE__ */ u(
          Wm,
          {
            asChild: !0,
            onEscapeKeyDown: F(c, (O) => {
              w().some(
                (B) => {
                  var V;
                  return (V = B.ref.current) == null ? void 0 : V.contains(O.target);
                }
              ) || T();
            }),
            children: /* @__PURE__ */ u(
              W.li,
              {
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...g,
                ref: C,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: F(e.onKeyDown, (O) => {
                  O.key === "Escape" && (c == null || c(O.nativeEvent), O.nativeEvent.defaultPrevented || T());
                }),
                onPointerDown: F(e.onPointerDown, (O) => {
                  O.button === 0 && (E.current = { x: O.clientX, y: O.clientY });
                }),
                onPointerMove: F(e.onPointerMove, (O) => {
                  if (!E.current) return;
                  const N = O.clientX - E.current.x, B = O.clientY - E.current.y, V = !!k.current, L = ["left", "right"].includes(v.swipeDirection), ee = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, X = L ? ee(0, N) : 0, j = L ? 0 : ee(0, B), oe = O.pointerType === "touch" ? 10 : 2, H = { x: X, y: j }, U = { originalEvent: O, delta: H };
                  V ? (k.current = H, Hr(zy, p, U, {
                    discrete: !1
                  })) : Pc(H, v.swipeDirection, oe) ? (k.current = H, Hr(By, d, U, {
                    discrete: !1
                  }), O.target.setPointerCapture(O.pointerId)) : (Math.abs(N) > oe || Math.abs(B) > oe) && (E.current = null);
                }),
                onPointerUp: F(e.onPointerUp, (O) => {
                  const N = k.current, B = O.target;
                  if (B.hasPointerCapture(O.pointerId) && B.releasePointerCapture(O.pointerId), k.current = null, E.current = null, N) {
                    const V = O.currentTarget, L = { originalEvent: O, delta: N };
                    Pc(N, v.swipeDirection, v.swipeThreshold) ? Hr(Ly, b, L, {
                      discrete: !0
                    }) : Hr(
                      Fy,
                      h,
                      L,
                      {
                        discrete: !0
                      }
                    ), V.addEventListener("click", (ee) => ee.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }, "ToastImpl")
), Gy = /* @__PURE__ */ me((t) => {
  const { __scopeToast: e, children: r, ...o } = t, n = Dn(Nn, e), [a, i] = m.useState(!1), [s, c] = m.useState(!1);
  return _f(() => i(!0)), m.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ u(Tr, { asChild: !0, container: n.announcerContainer || void 0, children: /* @__PURE__ */ u(Ii, { ...o, children: a && /* @__PURE__ */ $(ve, { children: [
    n.label,
    " ",
    r
  ] }) }) });
}, "ToastAnnounce"), Yy = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(e, r) {
    const { __scopeToast: o, ...n } = e;
    return /* @__PURE__ */ u(W.div, { ...n, ref: r });
  }, "ToastDescription")
), Qy = "ToastClose", Xy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(e, r) {
    const { __scopeToast: o, ...n } = e, a = Wy(Qy, o);
    return /* @__PURE__ */ u(jy, { asChild: !0, children: /* @__PURE__ */ u(
      W.button,
      {
        type: "button",
        ...n,
        ref: r,
        onClick: F(e.onClick, a.onClose)
      }
    ) });
  }, "ToastClose")
), jy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ me(function(e, r) {
  const { __scopeToast: o, altText: n, ...a } = e;
  return /* @__PURE__ */ u(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...a,
      ref: r
    }
  );
}, "ToastAnnounceExclude"));
function ss(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && e.push(o.textContent), kf(o)) {
      const n = o.ariaHidden || o.hidden || o.style.display === "none", a = o.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (a) {
          const i = o.dataset.radixToastAnnounceAlt;
          i && e.push(i);
        } else
          e.push(...ss(o));
    }
  }), e;
}
me(ss, "getAnnounceTextContent");
function Hr(t, e, r, { discrete: o }) {
  const n = r.originalEvent.currentTarget, a = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: r });
  e && n.addEventListener(t, e, { once: !0 }), o ? en(n, a) : n.dispatchEvent(a);
}
me(Hr, "handleAndDispatchCustomEvent");
var Pc = /* @__PURE__ */ me((t, e, r = 0) => {
  const o = Math.abs(t.x), n = Math.abs(t.y), a = o > n;
  return e === "left" || e === "right" ? a && o > r : !a && n > r;
}, "isDeltaInDirection");
function _f(t = () => {
}) {
  const e = fe(t);
  de(() => {
    let r = 0, o = 0;
    return r = window.requestAnimationFrame(() => o = window.requestAnimationFrame(e)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(o);
    };
  }, [e]);
}
me(_f, "useNextFrame");
function kf(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
me(kf, "isHTMLElement");
function Rf(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ me((o) => {
      const n = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || n ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
me(Rf, "getTabbableCandidates");
function Ho(t) {
  const e = document.activeElement;
  return t.some((r) => r === e ? !0 : (r.focus(), document.activeElement !== e));
}
me(Ho, "focusFirst");
var Ef = My, Pf = Oy, If = Vy, Ky = Yy, qy = Xy;
const Tf = no(null);
let Jy = 0;
function Zy({ children: t }) {
  const [e, r] = Q([]), { direction: o } = Mr(), n = Re((i) => {
    const s = `msg-${++Jy}`;
    r((c) => [...c, { ...i, id: s }]);
  }, []), a = Fe(
    () => ({
      open: n,
      success: (i) => n({ content: i, type: "success" }),
      error: (i) => n({ content: i, type: "error" }),
      info: (i) => n({ content: i, type: "info" }),
      warning: (i) => n({ content: i, type: "warning" })
    }),
    [n]
  );
  return le(() => (mt._api = a, () => {
    mt._api === a && (mt._api = null);
  }), [a]), /* @__PURE__ */ u(Tf.Provider, { value: a, children: /* @__PURE__ */ $(Ef, { swipeDirection: o === "rtl" ? "left" : "right", children: [
    t,
    e.map((i) => /* @__PURE__ */ $(
      If,
      {
        className: M(
          "flex items-center gap-su3 py-su3 px-su4 rounded-none bg-paper shadow-none border border-solid border-rule border-t-rule-strong",
          "data-[state=open]:animate-su-rise-in motion-reduce:animate-none",
          "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-[var(--su-duration-fast)] data-[swipe=cancel]:ease-[var(--su-ease-out)]",
          as[i.type ?? "info"]
        ),
        duration: i.duration === 0 ? 1 / 0 : i.duration ?? 3e3,
        onOpenChange: (s) => {
          s || r((c) => c.filter((l) => l.id !== i.id));
        },
        children: [
          i.icon ? /* @__PURE__ */ u("div", { className: "shrink-0 text-label-secondary", children: i.icon }) : null,
          /* @__PURE__ */ u(Ky, { className: "flex-1 text-subhead text-label", children: i.content }),
          /* @__PURE__ */ u(
            qy,
            {
              className: yf,
              "aria-label": "Dismiss",
              children: "×"
            }
          )
        ]
      },
      i.id
    )),
    /* @__PURE__ */ u(Pf, { className: "fixed top-su4 left-1/2 -translate-x-1/2 z-[var(--su-z-toast)] flex flex-col gap-su2 w-[min(420px,calc(100vw-var(--su-space-8)))] outline-none" })
  ] }) });
}
function e5() {
  const t = Ar(Tf);
  if (!t) throw new Error("useMessage must be used within MessageProvider");
  return t;
}
const mt = {
  _api: null,
  useBind(t) {
    mt._api = t;
  },
  open(t) {
    var e;
    (e = mt._api) == null || e.open(t);
  },
  success(t) {
    var e;
    (e = mt._api) == null || e.success(t);
  },
  error(t) {
    var e;
    (e = mt._api) == null || e.error(t);
  },
  info(t) {
    var e;
    (e = mt._api) == null || e.info(t);
  },
  warning(t) {
    var e;
    (e = mt._api) == null || e.warning(t);
  }
};
function t5({
  title: t,
  description: e,
  showDescription: r = !1,
  footer: o,
  width: n,
  children: a,
  trigger: i,
  closable: s = !0,
  onEscapeKeyDown: c,
  onPointerDownOutside: l,
  onInteractOutside: f,
  onOpenAutoFocus: d,
  onCloseAutoFocus: p,
  ...h
}) {
  return /* @__PURE__ */ $(ho, { ...h, children: [
    i ? /* @__PURE__ */ u(In, { asChild: !0, children: i }) : null,
    /* @__PURE__ */ $(go, { children: [
      /* @__PURE__ */ u(bo, { className: "su-overlay" }),
      /* @__PURE__ */ $(
        vo,
        {
          className: "fixed inset-0 z-[var(--su-z-modal)] m-auto w-[min(420px,calc(100vw-var(--su-space-8)))] max-w-[calc(100vw-var(--su-space-8))] max-h-[calc(100vh-var(--su-space-8))] h-fit flex flex-col border border-solid border-rule-strong rounded-none bg-paper shadow-none animate-su-rise-in motion-reduce:animate-none",
          style: n !== void 0 ? { width: n } : void 0,
          onEscapeKeyDown: c,
          onPointerDownOutside: l,
          onInteractOutside: f,
          onOpenAutoFocus: d,
          onCloseAutoFocus: p,
          ...e ? {} : { "aria-describedby": void 0 },
          children: [
            /* @__PURE__ */ $("div", { className: "flex items-start justify-end gap-su3 pt-su4 px-su4 pb-0", children: [
              t ? /* @__PURE__ */ u(er, { className: "flex-1 min-w-0 m-0 pt-[6px] pb-0 font-sans text-title-3 font-semibold tracking-[var(--su-tracking-tight)] text-ink text-start leading-[var(--su-leading-snug)]", children: t }) : /* @__PURE__ */ u(er, { className: "sr-only", children: "Dialog" }),
              s ? /* @__PURE__ */ u(tr, { asChild: !0, children: /* @__PURE__ */ u(
                Be,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "shrink-0 min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] p-0 text-ink-2 enabled:hover:text-ink enabled:hover:bg-fill-tertiary",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ u(Cn, { size: 16, ...Kt })
                }
              ) }) : null
            ] }),
            e ? /* @__PURE__ */ u(
              Tn,
              {
                className: r ? "m-0 px-su4 text-ink-2 text-body" : "sr-only",
                children: e
              }
            ) : null,
            /* @__PURE__ */ u("div", { className: "py-su3 px-su4 pb-su4 overflow-auto text-ink-2 text-body text-start [&>:first-child]:mt-0 [&>:last-child]:mb-0", children: a }),
            o ? /* @__PURE__ */ u("div", { className: "flex justify-end flex-wrap gap-su2 py-su3 px-su4 pb-su4 border-t border-solid border-rule", children: o }) : null
          ]
        }
      )
    ] })
  ] });
}
const r5 = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "✕"
};
function Mf({
  type: t = "info",
  title: e,
  description: r,
  icon: o,
  action: n,
  onClose: a,
  className: i,
  children: s,
  ...c
}) {
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "flex gap-su3 p-su4 rounded-none bg-paper shadow-none border border-solid border-rule border-t-rule-strong",
        as[t],
        i
      ),
      role: t === "error" ? "alert" : "status",
      ...c,
      children: [
        /* @__PURE__ */ u("div", { className: M("shrink-0", wf[t]), "aria-hidden": o ? void 0 : !0, children: o ?? r5[t] }),
        /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
          e ? /* @__PURE__ */ u("div", { className: "text-subhead font-semibold text-label", children: e }) : null,
          r || s ? /* @__PURE__ */ u("div", { className: "mt-su1 text-footnote text-label-secondary", children: r ?? s }) : null,
          n ? /* @__PURE__ */ u("div", { className: "mt-su2", children: n }) : null
        ] }),
        a ? /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: yf,
            onClick: a,
            "aria-label": "Dismiss notification",
            children: "×"
          }
        ) : null
      ]
    }
  );
}
function o5({ className: t, children: e, ...r }) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "fixed top-su4 right-su4 z-[var(--su-z-toast)] flex flex-col gap-su3 w-[min(360px,calc(100vw-var(--su-space-8)))]",
        t
      ),
      ...r,
      children: e
    }
  );
}
Mf.Stack = o5;
var n5 = Object.defineProperty, _t = (t, e) => n5(t, "name", { value: e, configurable: !0 }), a5 = "AlertDialog", [i5, HS] = /* @__PURE__ */ ge(a5, [
  Kd
]), kt = Kd(), s5 = /* @__PURE__ */ _t((t) => {
  const { __scopeAlertDialog: e, ...r } = t, o = kt(e);
  return /* @__PURE__ */ u(ho, { ...o, ...r, modal: !0 });
}, "AlertDialog"), c5 = m.forwardRef(
  /* @__PURE__ */ _t(function(e, r) {
    const { __scopeAlertDialog: o, ...n } = e, a = kt(o);
    return /* @__PURE__ */ u(In, { ...a, ...n, ref: r });
  }, "AlertDialogTrigger")
), l5 = /* @__PURE__ */ _t((t) => {
  const { __scopeAlertDialog: e, ...r } = t, o = kt(e);
  return /* @__PURE__ */ u(go, { ...o, ...r });
}, "AlertDialogPortal"), u5 = m.forwardRef(
  /* @__PURE__ */ _t(function(e, r) {
    const { __scopeAlertDialog: o, ...n } = e, a = kt(o);
    return /* @__PURE__ */ u(bo, { ...a, ...n, ref: r });
  }, "AlertDialogOverlay")
), d5 = "AlertDialogContent", [f5, p5] = i5(d5), m5 = m.forwardRef(
  /* @__PURE__ */ _t(function(e, r) {
    const { __scopeAlertDialog: o, children: n, ...a } = e, i = kt(o), s = m.useRef(null), c = Y(r, s), l = m.useRef(null);
    return /* @__PURE__ */ u(f5, { scope: o, cancelRef: l, children: /* @__PURE__ */ u(
      vo,
      {
        role: "alertdialog",
        ...i,
        ...a,
        ref: c,
        onOpenAutoFocus: F(a.onOpenAutoFocus, (f) => {
          var d;
          f.preventDefault(), (d = l.current) == null || d.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (f) => f.preventDefault(),
        onInteractOutside: (f) => f.preventDefault(),
        children: n
      }
    ) });
  }, "AlertDialogContent")
), h5 = m.forwardRef(
  /* @__PURE__ */ _t(function(e, r) {
    const { __scopeAlertDialog: o, ...n } = e, a = kt(o);
    return /* @__PURE__ */ u(er, { ...a, ...n, ref: r });
  }, "AlertDialogTitle")
), g5 = m.forwardRef(/* @__PURE__ */ _t(function(e, r) {
  const { __scopeAlertDialog: o, ...n } = e, a = kt(o);
  return /* @__PURE__ */ u(Tn, { ...a, ...n, ref: r });
}, "AlertDialogDescription"));
m.forwardRef(
  /* @__PURE__ */ _t(function(e, r) {
    const { __scopeAlertDialog: o, ...n } = e, a = kt(o);
    return /* @__PURE__ */ u(tr, { ...a, ...n, ref: r });
  }, "AlertDialogAction")
);
var b5 = "AlertDialogCancel", v5 = m.forwardRef(
  /* @__PURE__ */ _t(function(e, r) {
    const { __scopeAlertDialog: o, ...n } = e, { cancelRef: a } = p5(b5, o), i = kt(o), s = Y(r, a);
    return /* @__PURE__ */ u(tr, { ...i, ...n, ref: s });
  }, "AlertDialogCancel")
), x5 = s5, w5 = c5, y5 = l5, C5 = u5, A5 = m5, S5 = v5, _5 = h5, Ic = g5;
const Df = "flex-1 min-w-0 overflow-hidden !rounded-none min-h-[48px] focus-visible:!outline-offset-[-3px]", k5 = Df + " [&>span:nth-child(2)]:hidden [&>span:first-child]:flex-1 [&>span:first-child]:justify-center";
function GS({
  title: t = "Are you sure?",
  description: e,
  okText: r = "OK",
  cancelText: o = "Cancel",
  onConfirm: n,
  onCancel: a,
  disabled: i,
  okDanger: s,
  danger: c,
  children: l,
  open: f,
  defaultOpen: d,
  onOpenChange: p,
  ...h
}) {
  const b = s ?? c ?? !1, [g, v] = Q(d ?? !1), [w, y] = Q(!1), x = f ?? g, C = (k) => {
    f === void 0 && v(k), p == null || p(k);
  }, E = () => {
    const k = n == null ? void 0 : n();
    if (!k || typeof k.then != "function") {
      C(!1);
      return;
    }
    y(!0), Promise.resolve(k).then(
      () => C(!1),
      () => {
      }
      // rejection: stay open, caller surfaces the error
    ).finally(() => y(!1));
  };
  return /* @__PURE__ */ $(
    x5,
    {
      ...h,
      open: i ? !1 : x,
      onOpenChange: C,
      children: [
        /* @__PURE__ */ u(w5, { asChild: !0, disabled: i, children: l }),
        /* @__PURE__ */ $(y5, { children: [
          /* @__PURE__ */ u(C5, { className: "su-overlay" }),
          /* @__PURE__ */ $(
            A5,
            {
              onEscapeKeyDown: (k) => {
                w && k.preventDefault();
              },
              className: "fixed inset-0 z-[var(--su-z-modal)] m-auto w-[min(280px,calc(100vw-var(--su-space-8)))] h-fit flex flex-col overflow-hidden border border-solid border-rule-strong rounded-none bg-paper shadow-none animate-su-pop-in motion-reduce:animate-none",
              children: [
                /* @__PURE__ */ u(_5, { className: "pt-su5 px-su5 pb-0 font-sans text-title-3 font-semibold tracking-[var(--su-tracking-tight)] text-ink text-center", children: t }),
                e ? /* @__PURE__ */ u(Ic, { className: "m-0 pt-su3 px-su5 pb-su4 text-body text-ink-2 text-center", children: e }) : /* @__PURE__ */ u(rd, { asChild: !0, children: /* @__PURE__ */ u(Ic, { children: t }) }),
                /* @__PURE__ */ $("div", { className: "flex justify-stretch", children: [
                  /* @__PURE__ */ u(S5, { asChild: !0, children: /* @__PURE__ */ u(
                    Be,
                    {
                      variant: "ghost",
                      size: "sm",
                      disabled: w,
                      onClick: a,
                      className: Df + " [border-inline-end:0.5px_solid_var(--su-separator)]",
                      children: o
                    }
                  ) }),
                  /* @__PURE__ */ u(
                    Be,
                    {
                      variant: "primary",
                      size: "sm",
                      className: k5,
                      danger: b,
                      loading: w,
                      onClick: E,
                      children: r
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
var R5 = Object.defineProperty, Rt = (t, e) => R5(t, "name", { value: e, configurable: !0 }), Nf = "Progress", cs = 100, [E5, YS] = /* @__PURE__ */ ge(Nf), [P5, I5] = E5(Nf), T5 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Rt(function(e, r) {
    const {
      __scopeProgress: o,
      value: n = null,
      max: a,
      getValueLabel: i = Of,
      ...s
    } = e;
    (a || a === 0) && !La(a) && console.error($f(`${a}`, "Progress"));
    const c = La(a) ? a : cs;
    n !== null && !Va(n, c) && console.error(Bf(`${n}`, "Progress"));
    const l = Va(n, c) ? n : null, f = ro(l) ? i(l, c) : void 0;
    return /* @__PURE__ */ u(P5, { scope: o, value: l, max: c, children: /* @__PURE__ */ u(
      W.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": ro(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ls(l, c),
        "data-value": l ?? void 0,
        "data-max": c,
        ...s,
        ref: r
      }
    ) });
  }, "Progress")
), M5 = "ProgressIndicator", D5 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Rt(function(e, r) {
    const { __scopeProgress: o, ...n } = e, a = I5(M5, o);
    return /* @__PURE__ */ u(
      W.div,
      {
        "data-state": ls(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: r
      }
    );
  }, "ProgressIndicator")
);
function Of(t, e) {
  return `${Math.round(t / e * 100)}%`;
}
Rt(Of, "defaultGetValueLabel");
function ls(t, e) {
  return t == null ? "indeterminate" : t === e ? "complete" : "loading";
}
Rt(ls, "getProgressState");
function ro(t) {
  return typeof t == "number";
}
Rt(ro, "isNumber");
function La(t) {
  return ro(t) && !isNaN(t) && t > 0;
}
Rt(La, "isValidMaxNumber");
function Va(t, e) {
  return ro(t) && !isNaN(t) && t <= e && t >= 0;
}
Rt(Va, "isValidValueNumber");
function $f(t, e) {
  return `Invalid prop \`max\` of value \`${t}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${cs}\`.`;
}
Rt($f, "getInvalidMaxError");
function Bf(t, e) {
  return `Invalid prop \`value\` of value \`${t}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${cs} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
Rt(Bf, "getInvalidValueError");
var Tc = T5, N5 = D5;
const O5 = {
  normal: "var(--su-accent)",
  success: "var(--su-success)",
  error: "var(--su-danger)"
}, $5 = {
  normal: "bg-accent",
  success: "bg-success",
  error: "bg-danger"
}, Mc = "text-footnote text-label-secondary tabular-nums";
function QS({
  type: t = "line",
  size: e,
  value: r = 0,
  max: o = 100,
  showInfo: n = !1,
  status: a = "normal",
  className: i,
  ...s
}) {
  const c = o > 0 ? o : 100, l = r == null, f = l ? null : Math.min(c, Math.max(0, r)), d = f == null ? 0 : f / c * 100;
  if (t === "circle") {
    const p = e ?? 100;
    return /* @__PURE__ */ $(
      Tc,
      {
        className: M("relative", i),
        value: f,
        max: c,
        style: { width: p, height: p },
        ...s,
        children: [
          /* @__PURE__ */ $("svg", { viewBox: "0 0 100 100", width: p, height: p, "aria-hidden": "true", children: [
            /* @__PURE__ */ u(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: "44",
                fill: "none",
                stroke: "var(--su-fill-secondary)",
                strokeWidth: "6"
              }
            ),
            /* @__PURE__ */ u(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: "44",
                fill: "none",
                stroke: O5[a],
                strokeWidth: "6",
                strokeLinecap: "square",
                pathLength: "100",
                strokeDasharray: l ? "25 75" : "100",
                strokeDashoffset: l ? 0 : 100 - d,
                transform: "rotate(-90 50 50)",
                className: l ? "origin-center animate-spin motion-reduce:animate-none" : void 0
              }
            )
          ] }),
          n && !l && /* @__PURE__ */ $(
            "span",
            {
              "aria-hidden": "true",
              className: M("absolute inset-0 grid place-items-center", Mc),
              children: [
                Math.round(d),
                "%"
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ $("div", { className: M("flex w-full items-center gap-su3", i), children: [
    /* @__PURE__ */ u(
      Tc,
      {
        className: "flex-1 overflow-hidden rounded-none bg-fill-secondary",
        value: f,
        max: c,
        style: { height: e ?? 6 },
        ...s,
        children: l ? /* @__PURE__ */ u("div", { className: "h-full w-full su-skeleton-active" }) : /* @__PURE__ */ u(
          N5,
          {
            className: M(
              "h-full rounded-none transition-[width] duration-[var(--su-duration-normal)] ease-[var(--su-ease-out)]",
              $5[a]
            ),
            style: { width: `${d}%`, transform: "none" }
          }
        )
      }
    ),
    n && !l ? /* @__PURE__ */ $("span", { "aria-hidden": "true", className: M("min-w-[36px] text-right", Mc), children: [
      Math.round(d),
      "%"
    ] }) : null
  ] });
}
const B5 = {
  success: "✓",
  error: "✕",
  info: "i",
  warning: "!",
  404: "404",
  403: "403",
  500: "500"
}, z5 = {
  success: "bg-[color-mix(in_srgb,var(--su-success)_15%,transparent)] text-success",
  error: "bg-[color-mix(in_srgb,var(--su-danger)_15%,transparent)] text-danger",
  info: "bg-[color-mix(in_srgb,var(--su-info)_15%,transparent)] text-info",
  warning: "bg-[color-mix(in_srgb,var(--su-warning)_15%,transparent)] text-warning",
  404: "bg-fill-secondary text-label-secondary",
  403: "bg-fill-secondary text-label-secondary",
  500: "bg-fill-secondary text-label-secondary"
};
function XS({
  status: t = "info",
  title: e,
  subTitle: r,
  extra: o,
  icon: n,
  children: a,
  className: i,
  ...s
}) {
  return /* @__PURE__ */ $(
    "div",
    {
      className: M(
        "flex flex-col items-center text-center py-su8 px-su4",
        i
      ),
      ...s,
      children: [
        /* @__PURE__ */ u(
          "div",
          {
            "aria-hidden": "true",
            className: M(
              "inline-flex items-center justify-center size-[72px] rounded-none text-title-2 font-semibold",
              /^\d/.test(t) && "font-mono tabular-nums",
              z5[t]
            ),
            children: n ?? B5[t]
          }
        ),
        e ? /* @__PURE__ */ u("div", { className: "mt-su4 text-title-3 font-semibold text-label max-w-full [overflow-wrap:anywhere]", children: e }) : null,
        r ? /* @__PURE__ */ u("div", { className: "mt-su2 max-w-[480px] text-subhead text-label-secondary [overflow-wrap:anywhere]", children: r }) : null,
        o ? /* @__PURE__ */ u("div", { className: "mt-su5", children: o }) : null,
        a ? /* @__PURE__ */ u("div", { className: "mt-su4 w-full", children: a }) : null
      ]
    }
  );
}
function jS({
  active: t = !0,
  width: e,
  height: r = 16,
  circle: o = !1,
  rows: n,
  loading: a,
  children: i,
  className: s,
  style: c,
  ...l
}) {
  if (a === !1) return /* @__PURE__ */ u(ve, { children: i });
  const f = M(
    "rounded-none bg-fill-secondary",
    t && "su-skeleton-active"
  ), d = /* @__PURE__ */ u("span", { className: "sr-only", children: "Loading" });
  return n && n > 1 ? /* @__PURE__ */ $(
    "div",
    {
      className: M("w-full flex flex-col gap-su2", s),
      style: c,
      role: "status",
      "aria-busy": "true",
      ...l,
      children: [
        d,
        Array.from({ length: n }).map((p, h) => /* @__PURE__ */ u(
          "div",
          {
            "aria-hidden": "true",
            className: f,
            style: { width: h === n - 1 ? "70%" : "100%", height: r }
          },
          h
        ))
      ]
    }
  ) : /* @__PURE__ */ u(
    "div",
    {
      className: M(f, s),
      style: { width: o ? r : e, height: r, ...c },
      role: "status",
      "aria-busy": "true",
      ...l,
      children: d
    }
  );
}
function KS({
  spinning: t = !0,
  tip: e,
  size: r = "md",
  delay: o,
  className: n,
  children: a,
  ...i
}) {
  const [s, c] = Q(!o);
  le(() => {
    if (!o) {
      c(!0);
      return;
    }
    if (!t) {
      c(!1);
      return;
    }
    const d = setTimeout(() => c(!0), o);
    return () => clearTimeout(d);
  }, [t, o]);
  const l = t && s, f = /* @__PURE__ */ $(ve, { children: [
    /* @__PURE__ */ u(Qa, { size: r }),
    e ? /* @__PURE__ */ u("span", { className: "su-label text-ink-2", children: e }) : /* @__PURE__ */ u("span", { className: "sr-only", children: "Loading" })
  ] });
  return a ? /* @__PURE__ */ $(
    "div",
    {
      className: M("relative", n),
      "aria-busy": l || void 0,
      ...i,
      children: [
        /* @__PURE__ */ u("div", { inert: l || void 0, children: a }),
        l ? /* @__PURE__ */ u(
          "div",
          {
            className: "absolute inset-0 z-[1] flex flex-col items-center justify-center gap-su3 bg-paper",
            role: "status",
            "aria-live": "polite",
            children: f
          }
        ) : null
      ]
    }
  ) : /* @__PURE__ */ u(
    "div",
    {
      className: M(
        "inline-flex flex-col items-center justify-center gap-su3 min-h-[var(--su-hit-target)]",
        n
      ),
      role: "status",
      "aria-live": "polite",
      "aria-busy": l || void 0,
      ...i,
      children: l ? f : null
    }
  );
}
const Dc = 13, aa = 18, Nc = 16, F5 = (t) => t.replace(/[<>&']/g, (e) => `&#${e.charCodeAt(0)};`);
function qS({
  content: t = "Watermark",
  gap: e = [120, 120],
  rotate: r = -22,
  offset: o,
  className: n,
  children: a,
  style: i,
  ...s
}) {
  const c = Array.isArray(t) ? t : [t], l = c.map(F5), d = c.reduce((A, _) => Math.max(A, _.length), 0) * Dc * 0.72, p = l.length * aa, h = r * Math.PI / 180, b = Math.abs(Math.cos(h)), g = Math.abs(Math.sin(h)), v = Math.ceil(
    Math.max(e[0], 1, d * b + p * g + Nc)
  ), w = Math.ceil(
    Math.max(e[1], 1, d * g + p * b + Nc)
  ), y = -((l.length - 1) * aa) / 2, x = l.map(
    (A, _) => `<tspan x='50%' dy='${_ === 0 ? y : aa}'>${A}</tspan>`
  ).join(""), C = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${v}' height='${w}'><text x='50%' y='50%' fill='black' font-size='${Dc}' letter-spacing='0.04em' font-family='Martian Mono, ui-monospace, monospace' transform='rotate(${r} ${v / 2} ${w / 2})' text-anchor='middle' dominant-baseline='middle'>${x}</text></svg>`
  )}")`, [E, k] = o ?? [e[0] / 2, e[1] / 2], S = {
    WebkitMaskImage: C,
    maskImage: C,
    WebkitMaskRepeat: "repeat",
    maskRepeat: "repeat",
    WebkitMaskPosition: `${E}px ${k}px`,
    maskPosition: `${E}px ${k}px`,
    backgroundColor: "var(--su-ink)",
    opacity: 0.08,
    pointerEvents: "none"
  };
  return /* @__PURE__ */ $("div", { className: M("relative", n), style: i, ...s, children: [
    /* @__PURE__ */ u("div", { className: "absolute inset-0", style: S, "aria-hidden": "true" }),
    /* @__PURE__ */ u("div", { className: "relative", children: a })
  ] });
}
function JS({
  offsetTop: t,
  offsetBottom: e,
  className: r,
  children: o,
  style: n,
  ...a
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: M("sticky z-[var(--su-z-sticky)]", r),
      style: {
        top: e === void 0 ? t ?? 0 : t,
        bottom: e,
        ...n
      },
      ...a,
      children: o
    }
  );
}
const zf = no(null);
let L5 = 0;
function V5({ children: t }) {
  const e = e5(), [r, o] = Q([]), [n, a] = Q({ open: !1 }), i = Re(
    (p) => o((h) => h.filter((b) => b.key !== p)),
    []
  ), s = Fe(
    () => ({
      open: (p) => o((h) => [...h, { ...p, key: ++L5 }]),
      destroy: () => o([])
    }),
    []
  ), c = Re(() => a({ open: !1 }), []), l = Re(() => {
    var p;
    (p = n.onCancel) == null || p.call(n), c();
  }, [n, c]), f = Fe(
    () => ({
      confirm: (p) => a({ ...p, open: !0, kind: "confirm" }),
      info: (p) => a({ ...p, open: !0, kind: "info" }),
      destroy: c
    }),
    [c]
  ), d = Fe(
    () => ({
      message: e,
      notification: s,
      modal: f
    }),
    [e, s, f]
  );
  return /* @__PURE__ */ $(zf.Provider, { value: d, children: [
    /* @__PURE__ */ $(Ef, { swipeDirection: "right", children: [
      t,
      r.map(({ key: p, duration: h, type: b, onClose: g, ...v }) => /* @__PURE__ */ u(
        If,
        {
          type: b === "error" ? "foreground" : "background",
          duration: h === 0 ? 1 / 0 : h ?? 4500,
          onOpenChange: (w) => {
            w || (g == null || g(), i(p));
          },
          children: /* @__PURE__ */ u(
            Mf,
            {
              ...v,
              type: b,
              role: "none",
              onClose: () => {
                g == null || g(), i(p);
              }
            }
          )
        },
        p
      )),
      /* @__PURE__ */ u(Pf, { className: "fixed top-su4 right-su4 z-[var(--su-z-toast)] m-0 p-0 list-none flex flex-col gap-su3 w-[min(360px,calc(100vw-var(--su-space-8)))] outline-none" })
    ] }),
    /* @__PURE__ */ u(
      t5,
      {
        open: n.open,
        onOpenChange: (p) => !p && l(),
        title: n.title,
        footer: /* @__PURE__ */ $(ve, { children: [
          n.kind === "confirm" ? /* @__PURE__ */ u(Be, { onClick: l, children: n.cancelText ?? "Cancel" }) : null,
          /* @__PURE__ */ u(
            Be,
            {
              variant: "primary",
              danger: n.danger,
              onClick: () => {
                var p;
                (p = n.onOk) == null || p.call(n), c();
              },
              children: n.okText ?? "OK"
            }
          )
        ] }),
        children: n.content
      }
    )
  ] });
}
function ZS({ children: t, ...e }) {
  return /* @__PURE__ */ u(V0, { ...e, children: /* @__PURE__ */ u(vf, { children: /* @__PURE__ */ u(Zy, { children: /* @__PURE__ */ u(V5, { children: t }) }) }) });
}
function e_() {
  const t = Ar(zf);
  if (!t) throw new Error("useApp must be used within App");
  return t;
}
const U5 = {
  sm: {
    borderRadius: 32,
    borderWidth: 1,
    width: 70,
    height: 36
  },
  md: {
    borderRadius: 16,
    borderWidth: 1
  },
  line: {
    borderRadius: 16,
    borderWidth: 1
  },
  "pulse-outside": {
    borderRadius: 16,
    borderWidth: 1
  },
  "pulse-inner": {
    borderRadius: 16,
    borderWidth: 1
  }
}, W5 = {
  sm: {
    dark: {
      strokeOpacity: 0.46,
      innerOpacity: 0.24,
      bloomOpacity: 0.38,
      innerShadow: "rgba(255, 255, 255, 0.3)",
      saturation: 1.2
    },
    light: {
      strokeOpacity: 0.12,
      innerOpacity: 0.3,
      bloomOpacity: 0.16,
      innerShadow: "rgba(0, 0, 0, 0.14)",
      saturation: 1.8
    }
  },
  md: {
    dark: {
      strokeOpacity: 0.26,
      innerOpacity: 0.42,
      bloomOpacity: 0.24,
      innerShadow: "rgba(255, 255, 255, 0.27)",
      saturation: 1.2
    },
    light: {
      strokeOpacity: 0.12,
      innerOpacity: 0.26,
      bloomOpacity: 0.34,
      innerShadow: "rgba(0, 0, 0, 0.14)",
      saturation: 1.5
    }
  },
  line: {
    dark: {
      strokeOpacity: 1.14,
      innerOpacity: 0.7,
      bloomOpacity: 0.8,
      innerShadow: "rgba(255, 255, 255, 0.1)",
      saturation: 1.2
    },
    light: {
      strokeOpacity: 0.16,
      innerOpacity: 0.32,
      bloomOpacity: 0.3,
      innerShadow: "rgba(0, 0, 0, 0.14)",
      saturation: 1.95
    }
  },
  // Pulse Outside — outward-blooming breathe (ported from v5 "Breathe Outside Uncropped" / c6)
  "pulse-outside": {
    dark: {
      strokeOpacity: 0.94,
      innerOpacity: 0.34,
      bloomOpacity: 0.3,
      innerShadow: "transparent",
      saturation: 1.2,
      brightness: 1.9,
      // v5 Card 5 frames the card with a single 1px hairline (its box-shadow at
      // 0.3). Wrapped components here already supply their own ~equivalent 1px
      // border, so the beam must NOT add a second hairline on top or the edge
      // reads brighter than v5. Kept at 0 to match v5's single-hairline look.
      hairlineOpacity: 0
    },
    light: {
      strokeOpacity: 1.96,
      innerOpacity: 1.04,
      bloomOpacity: 0.42,
      innerShadow: "transparent",
      saturation: 0.6,
      brightness: 1.7,
      hairlineOpacity: 0
    }
  },
  // Pulse Inner — contained breathe (ported from v5 "Breathe" / c4)
  "pulse-inner": {
    dark: {
      strokeOpacity: 1.54,
      innerOpacity: 0.44,
      bloomOpacity: 0.66,
      innerShadow: "transparent",
      saturation: 1.2,
      brightness: 0.75
    },
    light: {
      strokeOpacity: 0.32,
      innerOpacity: 0.4,
      bloomOpacity: 0.8,
      innerShadow: "transparent",
      saturation: 0.75,
      brightness: 1.3
    }
  }
}, cr = {
  colorful: {
    border: [
      { color: "rgb(255, 50, 100)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(40, 140, 255)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(50, 200, 80)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(30, 185, 170)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(100, 70, 255)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(40, 140, 255)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(255, 120, 40)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(240, 50, 180)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(180, 40, 240)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(255, 60, 80)", secondary: "rgba(40, 190, 180, 0.98)" },
    spikeLt: { primary: "rgb(200, 30, 60)", secondary: "rgb(20, 150, 140)" }
  },
  mono: {
    border: [
      { color: "rgb(180, 180, 180)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(140, 140, 140)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(160, 160, 160)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(130, 130, 130)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(170, 170, 170)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(150, 150, 150)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(190, 190, 190)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(145, 145, 145)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(165, 165, 165)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(200, 200, 200)", secondary: "rgb(170, 170, 170)" },
    spikeLt: { primary: "rgb(80, 80, 80)", secondary: "rgb(120, 120, 120)" }
  },
  ocean: {
    border: [
      { color: "rgb(29, 78, 216)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(94, 234, 212)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(29, 78, 216)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(94, 234, 212)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(59, 130, 246)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(94, 234, 212)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(29, 78, 216)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(94, 234, 212)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(23, 66, 159)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(94, 234, 212)", secondary: "rgba(29, 78, 216, 0.98)" },
    spikeLt: { primary: "rgb(29, 78, 216)", secondary: "rgb(94, 234, 212)" }
  },
  sunset: {
    border: [
      { color: "rgb(255, 80, 50)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(255, 160, 40)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(255, 120, 60)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(255, 200, 50)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(255, 100, 80)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(255, 180, 60)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(255, 60, 60)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(255, 140, 50)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(255, 90, 70)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(255, 140, 80)", secondary: "rgba(255, 100, 60, 0.98)" },
    spikeLt: { primary: "rgb(200, 80, 40)", secondary: "rgb(220, 120, 30)" }
  }
}, Ff = {
  colorful: {
    border: [
      { color: "rgb(50, 200, 80)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(30, 185, 170)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(255, 120, 40)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(100, 70, 255)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(240, 50, 180)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(180, 40, 240)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(40, 140, 255)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(255, 50, 100)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(50, 200, 80, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(30, 185, 170, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(255, 120, 40, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(100, 70, 255, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(240, 50, 180, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(180, 40, 240, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(40, 140, 255, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(255, 50, 100, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  mono: {
    border: [
      { color: "rgb(160, 160, 160)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(140, 140, 140)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(180, 180, 180)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(150, 150, 150)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(170, 170, 170)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(155, 155, 155)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(145, 145, 145)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(165, 165, 165)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(160, 160, 160, 0.25)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(140, 140, 140, 0.22)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(180, 180, 180, 0.17)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(150, 150, 150, 0.17)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(170, 170, 170, 0.15)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(155, 155, 155, 0.20)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(145, 145, 145, 0.15)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(165, 165, 165, 0.15)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  ocean: {
    border: [
      { color: "rgb(94, 234, 212)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(29, 78, 216)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(94, 234, 212)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(29, 78, 216)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(94, 234, 212)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(59, 130, 246)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(29, 78, 216)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(94, 234, 212)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(94, 234, 212, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(29, 78, 216, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(29, 78, 216, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(59, 130, 246, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(23, 66, 159, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(29, 78, 216, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(29, 78, 216, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(29, 78, 216, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  sunset: {
    border: [
      { color: "rgb(255, 180, 50)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(255, 150, 40)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(255, 80, 60)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(255, 100, 80)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(255, 60, 80)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(255, 120, 60)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(255, 200, 50)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(255, 90, 70)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(255, 180, 50, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(255, 150, 40, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(255, 80, 60, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(255, 100, 80, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(255, 60, 80, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(255, 120, 60, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(255, 200, 50, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(255, 90, 70, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  }
};
function H5(t) {
  return Ff[t].border.map((e) => `radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `);
}
function G5(t) {
  return Ff[t].inner.map((e) => `radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `);
}
function Y5(t) {
  return cr[t].border.map((e) => `radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `);
}
function Q5(t) {
  const e = cr[t], r = t === "mono" ? 0.225 : 0.45;
  return e.border.map((o) => {
    const n = o.color.replace("rgb(", "rgba(").replace(")", `, ${r})`);
    return `radial-gradient(ellipse ${o.size.split(" ").map((a) => {
      const i = parseInt(a);
      return `${Math.round(i * 0.9)}px`;
    }).join(" ")} at ${o.pos}, ${n}, transparent)`;
  }).join(`,
    `);
}
function X5(t, e) {
  const r = cr[t];
  return e ? r.spike : r.spikeLt;
}
const j5 = {
  colorful: {
    dark: [
      { color: "rgb(255, 50, 100)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(40, 180, 220)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(50, 200, 80)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(180, 40, 240)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(255, 160, 30)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(100, 70, 255)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(40, 140, 255)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(240, 50, 180)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(30, 185, 170)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(255, 50, 100)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(40, 140, 255)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(50, 200, 80)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(180, 40, 240)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(30, 185, 170)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(100, 70, 255)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(40, 140, 255)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(255, 120, 40)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(240, 50, 180)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  mono: {
    dark: [
      { color: "rgb(200, 200, 200)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(170, 170, 170)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(155, 155, 155)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(185, 185, 185)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(165, 165, 165)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(180, 180, 180)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(160, 160, 160)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(175, 175, 175)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(190, 190, 190)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(100, 100, 100)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(80, 80, 80)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(90, 90, 90)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(70, 70, 70)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(85, 85, 85)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(95, 95, 95)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(75, 75, 75)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(105, 105, 105)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(65, 65, 65)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  ocean: {
    dark: [
      { color: "rgb(29, 78, 216)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(94, 234, 212)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(29, 78, 216)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(23, 66, 159)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(94, 234, 212)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(59, 130, 246)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(94, 234, 212)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(29, 78, 216)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(23, 66, 159)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(29, 78, 216)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(29, 78, 216)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(59, 130, 246)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(23, 66, 159)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(59, 130, 246)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(23, 66, 159)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(59, 130, 246)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(23, 66, 159)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(29, 78, 216)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  sunset: {
    dark: [
      { color: "rgb(255, 100, 60)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(255, 180, 50)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(255, 140, 70)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(255, 80, 80)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(255, 200, 60)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(255, 120, 50)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(255, 160, 80)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(255, 90, 60)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(255, 70, 70)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(220, 80, 40)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(230, 150, 30)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(210, 110, 50)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(200, 60, 60)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(220, 170, 40)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(210, 100, 30)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(230, 130, 60)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(190, 70, 50)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(180, 50, 50)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  }
};
function K5(t, e, r) {
  return j5[t][e ? "dark" : "light"].map((o) => {
    const n = o.offsetX === 0 ? "" : o.offsetX > 0 ? ` + ${o.offsetX}px` : ` - ${Math.abs(o.offsetX)}px`, a = o.offsetY === 0 ? "" : o.offsetY > 0 ? ` + ${o.offsetY}px` : ` - ${Math.abs(o.offsetY)}px`;
    return `radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${r})) calc(${o.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${n}) calc(100%${a}), ${o.color}, transparent)`;
  }).join(`,
       `);
}
const q5 = {
  colorful: [
    { color: "rgba(255, 50, 100, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(40, 180, 220, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(50, 200, 80, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(180, 40, 240, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(255, 160, 30, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(100, 70, 255, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(40, 140, 255, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(240, 50, 180, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(30, 185, 170, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  mono: [
    { color: "rgba(200, 200, 200, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(170, 170, 170, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(155, 155, 155, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(185, 185, 185, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(165, 165, 165, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(180, 180, 180, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(160, 160, 160, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(175, 175, 175, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(190, 190, 190, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  ocean: [
    { color: "rgba(29, 78, 216, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(94, 234, 212, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(29, 78, 216, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(23, 66, 159, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(94, 234, 212, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(59, 130, 246, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(94, 234, 212, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(29, 78, 216, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(23, 66, 159, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  sunset: [
    { color: "rgba(255, 100, 60, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(255, 180, 50, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(255, 140, 70, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(255, 80, 80, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(255, 200, 60, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(255, 120, 50, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(255, 160, 80, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(255, 90, 60, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(255, 70, 70, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ]
};
function J5(t, e) {
  return q5[t].map((r) => {
    const o = r.offsetX === 0 ? "" : r.offsetX > 0 ? ` + ${r.offsetX}px` : ` - ${Math.abs(r.offsetX)}px`, n = r.offsetY === 0 ? "" : ` - ${Math.abs(r.offsetY)}px`;
    return `radial-gradient(ellipse calc(${r.sizeW}px * var(--beam-w-${e})) calc(${r.sizeH}px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%${o}) calc(100%${n}), ${r.color}, transparent)`;
  }).join(`,
    `);
}
const Z5 = {
  colorful: {
    dark: {
      spikes: [
        { color1: "rgb(100, 70, 255)", color2: "rgba(100, 70, 255, 1)" },
        // 36%
        { color1: "rgba(255, 170, 40, 0.59)", color2: "rgba(255, 170, 40, 0.29)" },
        // 50%
        { color1: "rgb(50, 200, 100)", color2: "rgba(50, 200, 100, 1)" },
        // 64%
        { color1: "rgba(200, 50, 240, 0.91)", color2: "rgba(200, 50, 240, 0.45)" },
        // 78%
        { color1: "rgb(40, 140, 255)", color2: "rgba(40, 140, 255, 1)" }
        // 92%
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(80, 50, 200)", color2: "rgba(80, 50, 200, 0.8)" },
        // 36%
        { color1: "rgba(210, 130, 0, 0.7)", color2: "rgba(210, 130, 0, 0.46)" },
        // 50%
        { color1: "rgb(30, 160, 70)", color2: "rgba(30, 160, 70, 0.82)" },
        // 64%
        { color1: "rgb(160, 30, 190)", color2: "rgba(160, 30, 190, 0.7)" },
        // 78%
        { color1: "rgb(30, 100, 200)", color2: "rgba(30, 100, 200, 0.78)" }
        // 92%
      ]
    }
  },
  mono: {
    dark: {
      spikes: [
        { color1: "rgb(200, 200, 200)", color2: "rgba(200, 200, 200, 1)" },
        { color1: "rgba(180, 180, 180, 0.59)", color2: "rgba(180, 180, 180, 0.29)" },
        { color1: "rgb(190, 190, 190)", color2: "rgba(190, 190, 190, 1)" },
        { color1: "rgba(170, 170, 170, 0.91)", color2: "rgba(170, 170, 170, 0.45)" },
        { color1: "rgb(185, 185, 185)", color2: "rgba(185, 185, 185, 1)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(80, 80, 80)", color2: "rgba(80, 80, 80, 0.8)" },
        { color1: "rgba(100, 100, 100, 0.7)", color2: "rgba(100, 100, 100, 0.46)" },
        { color1: "rgb(70, 70, 70)", color2: "rgba(70, 70, 70, 0.82)" },
        { color1: "rgb(90, 90, 90)", color2: "rgba(90, 90, 90, 0.7)" },
        { color1: "rgb(85, 85, 85)", color2: "rgba(85, 85, 85, 0.78)" }
      ]
    }
  },
  ocean: {
    dark: {
      spikes: [
        { color1: "rgb(29, 78, 216)", color2: "rgb(29, 78, 216)" },
        { color1: "rgba(94, 234, 212, 0.59)", color2: "rgba(94, 234, 212, 0.29)" },
        { color1: "rgb(29, 78, 216)", color2: "rgb(29, 78, 216)" },
        { color1: "rgba(29, 78, 216, 0.91)", color2: "rgba(29, 78, 216, 0.45)" },
        { color1: "rgb(94, 234, 212)", color2: "rgb(94, 234, 212)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(23, 66, 159)", color2: "rgba(29, 78, 216, 0.8)" },
        { color1: "rgba(29, 78, 216, 0.7)", color2: "rgba(59, 130, 246, 0.46)" },
        { color1: "rgb(29, 78, 216)", color2: "rgba(59, 130, 246, 0.82)" },
        { color1: "rgb(29, 78, 216)", color2: "rgba(59, 130, 246, 0.7)" },
        { color1: "rgb(23, 66, 159)", color2: "rgba(29, 78, 216, 0.78)" }
      ]
    }
  },
  sunset: {
    dark: {
      spikes: [
        { color1: "rgb(255, 100, 80)", color2: "rgb(255, 100, 80)" },
        { color1: "rgba(255, 150, 80, 0.59)", color2: "rgba(255, 150, 80, 0.29)" },
        { color1: "rgb(255, 80, 60)", color2: "rgb(255, 80, 60)" },
        { color1: "rgba(255, 120, 50, 0.91)", color2: "rgba(255, 120, 50, 0.45)" },
        { color1: "rgb(255, 140, 70)", color2: "rgb(255, 140, 70)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(200, 60, 30)", color2: "rgba(200, 60, 30, 0.8)" },
        { color1: "rgba(220, 100, 20, 0.7)", color2: "rgba(220, 100, 20, 0.46)" },
        { color1: "rgb(180, 40, 20)", color2: "rgba(180, 40, 20, 0.82)" },
        { color1: "rgb(210, 80, 10)", color2: "rgba(210, 80, 10, 0.7)" },
        { color1: "rgb(190, 70, 30)", color2: "rgba(190, 70, 30, 0.78)" }
      ]
    }
  }
};
function Bo(t, e) {
  const r = t.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);
  if (r) return `rgba(${r[1]}, ${r[2]}, ${r[3]}, ${e})`;
  const o = t.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  return o ? `rgba(${o[1]}, ${o[2]}, ${o[3]}, ${e})` : t;
}
function Xt(t, e) {
  const r = t.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  if (r) return `rgba(${r[1]}, ${r[2]}, ${r[3]}, ${(parseFloat(r[4]) * e).toFixed(2)})`;
  const o = t.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  return o ? `rgba(${o[1]}, ${o[2]}, ${o[3]}, ${e.toFixed(2)})` : t;
}
function eC(t, e, r) {
  const o = X5(t, e), n = Z5[t][e ? "dark" : "light"], a = t === "mono", i = a ? 0.14 : 1, s = a ? Xt(o.primary, 0.14) : o.primary, c = a ? Xt(o.primary, 0.09) : o.primary, l = a ? Xt(o.secondary, 0.12) : o.secondary, f = a ? Bo(o.secondary, 0.06) : Bo(o.secondary, 0.49), d = n.spikes.map(
    (P) => a ? { color1: Xt(P.color1, i), color2: Xt(P.color2, i * 0.7) } : P
  ), p = a ? "12px" : "0.8px", h = a ? "14px" : "2px", b = a ? "12px" : "1.2px", g = a ? "10px" : "0.6px", v = a ? "42px" : "92px", w = a ? "38px" : "72px", y = a ? "40px" : "85px", x = a ? "32px" : "60px", C = a ? "12px" : "1px", E = a ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)", k = a ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.9)", S = a ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.5)", A = a ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)", _ = a ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.12)", R = a ? "rgba(255, 255, 255, 0.015)" : "rgba(255, 255, 255, 0.03)";
  if (e)
    return `radial-gradient(ellipse calc(${p} * var(--beam-spike-${r})) calc(${v} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${s}, ${c} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${l}, ${f} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r}))) calc(${w} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${d[0].color1}, ${d[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${d[1].color1}, ${d[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${b} * (2 - var(--beam-spike2-${r}))) calc(${y} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${d[2].color1}, ${d[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${d[3].color1}, ${d[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${g} * (2 - var(--beam-spike-${r}))) calc(${x} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${d[4].color1}, ${d[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), ${E} 0%, ${k} 20%, ${S} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, ${A} 0%, ${_} 25%, ${R} 55%, transparent 80%)`;
  {
    const P = a ? Xt(o.primary, 0.11) : Bo(o.primary, 0.85), I = a ? Xt(o.secondary, 0.09) : Bo(o.secondary, 0.7);
    return `radial-gradient(ellipse calc(${p} * var(--beam-spike-${r})) calc(${v} * var(--beam-h-${r})) at 8% calc(100% - 2px), ${s}, ${P} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${l}, ${I} 50%, transparent 95%),
       radial-gradient(ellipse calc(${h} * (2 - var(--beam-spike-${r}))) calc(${w} * var(--beam-h-${r})) at 36% calc(100% - 3px), ${d[0].color1}, ${d[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${d[1].color1}, ${d[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${b} * (2 - var(--beam-spike2-${r}))) calc(${y} * var(--beam-h-${r})) at 64% calc(100% - 4px), ${d[2].color1}, ${d[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${d[3].color1}, ${d[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${C} * (2 - var(--beam-spike-${r}))) calc(${x} * var(--beam-h-${r})) at 92% calc(100% - 3px), ${d[4].color1}, ${d[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`;
  }
}
const Lf = [
  { region: 1, quad: "tl" },
  { region: 2, quad: "tl" },
  { region: 3, quad: "bl" },
  { region: 1, quad: "bl" },
  { region: 2, quad: "br" },
  { region: 3, quad: "br" },
  { region: 1, quad: "tr" },
  { region: 2, quad: "tr" },
  { region: 3, quad: "tr" }
], tC = [
  [65, 35],
  [55, 30],
  [35, 65],
  [15, 30],
  [173, 28],
  [80, 22],
  [69, 28],
  [22, 38],
  [47, 44]
], rC = [
  { ci: 0, region: 1, quad: "tl", w: 84, h: 48 },
  { ci: 1, region: 2, quad: "tl", w: 72, h: 42 },
  { ci: 2, region: 3, quad: "bl", w: 48, h: 84 },
  { ci: 4, region: 2, quad: "br", w: 216, h: 38 },
  { ci: 5, region: 3, quad: "br", w: 102, h: 31 },
  { ci: 6, region: 1, quad: "tr", w: 89, h: 38 },
  { ci: 8, region: 3, quad: "tr", w: 62, h: 58 }
], Oc = [
  { ci: 0, region: 1, quad: "tl", w: 80, h: 19, x: "27%", y: "0%" },
  { ci: 6, region: 2, quad: "tr", w: 74, h: 11, x: "73%", y: "-1%" },
  { ci: 7, region: 3, quad: "tr", w: 15, h: 44, x: "100%", y: "33%" },
  { ci: 8, region: 1, quad: "br", w: 19, h: 38, x: "101%", y: "72%" },
  { ci: 4, region: 2, quad: "br", w: 84, h: 13, x: "67%", y: "100%" },
  { ci: 1, region: 3, quad: "bl", w: 60, h: 21, x: "24%", y: "101%" },
  { ci: 2, region: 1, quad: "bl", w: 17, h: 40, x: "0%", y: "60%" },
  { ci: 3, region: 2, quad: "tl", w: 13, h: 32, x: "-1%", y: "28%" }
], oC = [
  { ci: 0, region: 1, quad: "tl", w: 110, h: 30, x: "27%", y: "3%" },
  { ci: 6, region: 2, quad: "tr", w: 100, h: 20, x: "73%", y: "1%" },
  { ci: 7, region: 3, quad: "tr", w: 26, h: 62, x: "100%", y: "33%" },
  { ci: 8, region: 1, quad: "br", w: 30, h: 56, x: "101%", y: "72%" },
  { ci: 4, region: 2, quad: "br", w: 120, h: 22, x: "67%", y: "99%" },
  { ci: 1, region: 3, quad: "bl", w: 88, h: 32, x: "24%", y: "99%" },
  { ci: 2, region: 1, quad: "bl", w: 28, h: 58, x: "0%", y: "60%" }
];
function nC(t, e, r) {
  const o = t.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return `rgba(${o ? `${o[1]}, ${o[2]}, ${o[3]}` : "255, 255, 255"}, var(--bop-${e}-${r}))`;
}
function us(t, e, r, o, n, a, i, s) {
  return `radial-gradient(ellipse calc(${e}px * var(--bw${o}-${s}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r}px * var(--bh${o}-${s}) * var(--bgh-${s}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${a} + var(--bx${o}-${s})) calc(${i} + var(--by${o}-${s})), ${nC(t, n, s)}, transparent)`;
}
function aC(t, e) {
  return cr[t].border.map((r, o) => {
    const { region: n, quad: a } = Lf[o], [i, s] = r.pos.split(" "), [c, l] = r.size.split(" ").map(parseFloat);
    return us(r.color, c, l, n, a, i, s, e);
  }).join(`,
    `);
}
function iC(t, e, r) {
  const o = cr[t].border.map((s, c) => {
    const { region: l, quad: f } = Lf[c], [d, p] = s.pos.split(" "), [h, b] = tC[c];
    return us(s.color, h, b, l, f, d, p, e);
  }), n = r ? "255, 255, 255" : "0, 0, 0", a = r ? 0.18 : 0.08, i = [
    ["0%", "0%", "tl"],
    ["100%", "0%", "tr"],
    ["0%", "100%", "bl"],
    ["100%", "100%", "br"]
  ].map(
    ([s, c, l]) => `radial-gradient(ellipse 60px 60px at ${s} ${c}, rgba(${n}, calc(${a} * var(--bop-${l}-${e}))), transparent 70%)`
  );
  return [...o, ...i].join(`,
    `);
}
function $c(t, e, r) {
  const o = cr[e].border;
  return t.map((n) => {
    const a = o[n.ci], [i, s] = a.pos.split(" ");
    return us(a.color, n.w, n.h, n.region, n.quad, n.x ?? i, n.y ?? s, r);
  }).join(`,
    `);
}
function Vf(t, e, r) {
  const o = cr[e].border, n = +r.toFixed(3);
  return t.map((a) => {
    const i = o[a.ci], [s, c] = i.pos.split(" "), l = a.x ?? s, f = a.y ?? c, d = i.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/), p = d ? `${d[1]}, ${d[2]}, ${d[3]}` : "255, 255, 255";
    return `radial-gradient(ellipse calc(${a.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${a.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${l} ${f}, rgba(${p}, ${n}), transparent)`;
  }).join(`,
    `);
}
function Ao(t) {
  return `
[data-beam="${t}"][data-paused],
[data-beam="${t}"][data-paused]::after,
[data-beam="${t}"][data-paused]::before,
[data-beam="${t}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`;
}
function Uf(t) {
  const e = ["bw1", "bh1", "bw2", "bh2", "bw3", "bh3", "bgh", "bop-tl", "bop-tr", "bop-bl", "bop-br"], r = ["bx1", "by1", "bx2", "by2", "bx3", "by3"], o = e.map(
    (a) => `@property --${a}-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`
  ).join(`

`), n = r.map(
    (a) => `@property --${a}-${t} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`
  ).join(`

`);
  return `${o}

${n}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`;
}
function ds(t, e, r) {
  const o = e === "dark", n = r / 2.3;
  return t === "pulse-inner" ? {
    sp: 0.28,
    dr: o ? 33 : 40,
    op: o ? 0.48 : 0.45,
    gh: o ? 0.34 : 0.22,
    bs: (o ? 1.9 : 2.6) * n,
    ss: (o ? 2.6 : 4.6) * n,
    ghs: (o ? 2.4 : 5.5) * n,
    // Full hue revolution period (seconds) — colors continuously cycle.
    huePeriod: 16
  } : {
    sp: o ? 0.28 : 0.36,
    dr: o ? 14 : 19,
    op: o ? 0.46 : 0,
    gh: o ? 0.16 : 0.58,
    bs: (o ? 2.3 : 3.7) * n,
    ss: (o ? 6.4 : 4.6) * n,
    ghs: (o ? 2.4 : 3.8) * n,
    // Full hue revolution period (seconds) — colors continuously cycle.
    huePeriod: 14
  };
}
function sC(t, e) {
  const { sp: r, dr: o, op: n, gh: a, bs: i, ss: s, ghs: c } = e;
  return [
    { prop: `--bw1-${t}`, a: 1 - r, b: 1 + r * 1.1, period: s * 0.9, delay: 0, unit: "" },
    { prop: `--bh1-${t}`, a: 1 + r * 0.9, b: 1 - r * 0.85, period: s * 1.26, delay: 0, unit: "" },
    { prop: `--bx1-${t}`, a: -o, b: o * 0.9, period: i * 1.6, delay: 0, unit: "px" },
    { prop: `--by1-${t}`, a: o * 0.55, b: -o * 0.7, period: i * 1.6, delay: 0, unit: "px" },
    { prop: `--bw2-${t}`, a: 1 + r, b: 1 - r * 0.85, period: s * 1.1, delay: 0, unit: "" },
    { prop: `--bh2-${t}`, a: 1 - r * 0.8, b: 1 + r * 1.05, period: s * 0.81, delay: 0, unit: "" },
    { prop: `--bx2-${t}`, a: o * 0.8, b: -o * 0.9, period: i * 1.88, delay: 0, unit: "px" },
    { prop: `--by2-${t}`, a: -o, b: o * 0.65, period: i * 1.88, delay: 0, unit: "px" },
    { prop: `--bw3-${t}`, a: 1 - r * 0.6, b: 1 + r * 1.15, period: s * 0.98, delay: 0, unit: "" },
    { prop: `--bh3-${t}`, a: 1 + r * 0.75, b: 1 - r, period: s * 1.4, delay: 0, unit: "" },
    { prop: `--bx3-${t}`, a: -o * 0.6, b: o, period: i * 1.45, delay: 0, unit: "px" },
    { prop: `--by3-${t}`, a: -o * 0.85, b: o * 0.45, period: i * 1.45, delay: 0, unit: "px" },
    { prop: `--bgh-${t}`, a: 1 - a, b: 1 + a, period: c, delay: 0, unit: "" },
    { prop: `--bop-tl-${t}`, a: 1 - n, b: 1, period: i, delay: 0, unit: "" },
    { prop: `--bop-tr-${t}`, a: 1 - n, b: 1, period: i * 1.32, delay: i * 0.28, unit: "" },
    { prop: `--bop-bl-${t}`, a: 1 - n, b: 1, period: i * 0.84, delay: i * 0.55, unit: "" },
    { prop: `--bop-br-${t}`, a: 1 - n, b: 1, period: i * 1.58, delay: i * 0.83, unit: "" }
  ];
}
function cC(t, e, r, o, n, a) {
  if (t !== "pulse-inner" && t !== "pulse-outside") return null;
  const i = ds(t, e, r);
  return {
    oscillators: sC(a, i),
    // Pulse colors continuously rotate a full hue circle so the palette is never
    // pinned to fixed edges (no more "always red top-right / green left").
    hue: n ? null : { prop: `--beam-hue-${a}`, range: 360, period: i.huePeriod, continuous: !0 }
  };
}
function Jo(t, e, r) {
  return `  animation: ${e}-${t} ${r}s ease forwards;`;
}
function lC(t) {
  const { size: e } = t;
  return e === "line" ? mC(t) : e === "sm" ? uC(t) : e === "pulse-inner" ? fC(t) : e === "pulse-outside" ? pC(t) : dC(t);
}
function uC(t) {
  const {
    id: e,
    borderRadius: r,
    borderWidth: o,
    duration: n,
    strokeOpacity: a,
    innerOpacity: i,
    bloomOpacity: s,
    innerShadow: c,
    colorVariant: l,
    staticColors: f,
    brightness: d,
    saturation: p,
    hueRange: h,
    theme: b
  } = t, g = Math.max(0, r - o), v = l === "mono" ? 0.5 : 1, w = a * v, y = i * v, x = s * v, C = f ? "" : `animation: beam-hue-shift-${e} 12s ease-in-out infinite;`, E = f ? "" : `
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
}`, k = b === "dark", S = k ? `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )` : `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`, A = H5(l), _ = G5(l), R = k ? `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )` : `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`, P = `conic-gradient(
    from var(--beam-angle-${e}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;
  return `
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${n}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${n}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${g}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${S},${A};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * ${w.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${_};
  box-shadow: inset 0 0 5px 1px ${c};
  -webkit-mask-image: ${P};
  -webkit-mask-composite: source-over;
  mask-image: ${P};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${y.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${g}px;
  clip-path: inset(0 round ${r}px);
  background: ${R};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(8px) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${x.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${E}
${Ao(e)}
`;
}
function dC(t) {
  const {
    id: e,
    borderRadius: r,
    borderWidth: o,
    duration: n,
    strokeOpacity: a,
    innerOpacity: i,
    bloomOpacity: s,
    innerShadow: c,
    colorVariant: l,
    staticColors: f,
    brightness: d,
    saturation: p,
    hueRange: h,
    theme: b
  } = t, g = Math.max(0, r - o), v = l === "mono" ? 0.5 : 1, w = a * v, y = i * v, x = s * v, C = f ? "" : `animation: beam-hue-shift-${e} 12s ease-in-out infinite;`, E = f ? "" : `
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
}`, k = b === "dark", S = k ? `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )` : `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`, A = Y5(l), _ = Q5(l), R = k ? `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )` : `conic-gradient(
        from var(--beam-angle-${e}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;
  return `
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${n}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${n}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${g}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${S},${A};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * ${w.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${_};
  box-shadow: inset 0 0 9px 1px ${c};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${y.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${C}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${g}px;
  clip-path: inset(0 round ${r}px);
  background: ${R};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(8px) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${x.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${E}
${Ao(e)}
`;
}
function fC(t) {
  const {
    id: e,
    borderRadius: r,
    borderWidth: o,
    duration: n,
    strokeOpacity: a,
    innerOpacity: i,
    bloomOpacity: s,
    colorVariant: c,
    staticColors: l,
    brightness: f,
    saturation: d,
    hueRange: p,
    theme: h
  } = t, b = h === "dark", g = c === "mono" ? 0.5 : 1, v = (a * g).toFixed(2), w = (i * g).toFixed(2), y = (s * g).toFixed(2), { op: x } = ds("pulse-inner", h, n), C = 8, E = f.toFixed(2), k = d.toFixed(2), S = l ? `filter: brightness(${E}) saturate(${k});` : `filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${E}) saturate(${k});`, A = l ? `filter: blur(${C}px) brightness(${E}) saturate(${k});` : `filter: blur(${C}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${E}) saturate(${k});`, _ = aC(c, e), R = iC(c, e, b), P = Vf(rC, c, 1 - x * 0.5);
  return `
${Uf(e)}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${e}"][data-active] {
${Jo(e, "beam-fade-in", 0.6)}
}

[data-beam="${e}"][data-fading] {
${Jo(e, "beam-fade-out", 0.5)}
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${_};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${v} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${S}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${R};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${w} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${S}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${P};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${y} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${A}
}

@keyframes beam-fade-in-${e} { to { --beam-opacity-${e}: 1; } }
@keyframes beam-fade-out-${e} { from { --beam-opacity-${e}: 1; } to { --beam-opacity-${e}: 0; } }
${Ao(e)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${e}"][data-active],
  [data-beam="${e}"][data-fading],
  [data-beam="${e}"][data-active]::after,
  [data-beam="${e}"][data-fading]::after,
  [data-beam="${e}"][data-active]::before,
  [data-beam="${e}"][data-fading]::before,
  [data-beam="${e}"][data-active] [data-beam-bloom],
  [data-beam="${e}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`;
}
function pC(t) {
  const {
    id: e,
    borderRadius: r,
    duration: o,
    strokeOpacity: n,
    innerOpacity: a,
    bloomOpacity: i,
    colorVariant: s,
    staticColors: c,
    brightness: l,
    saturation: f,
    hueRange: d,
    theme: p,
    hairlineOpacity: h = 0
  } = t, b = p === "dark", g = s === "mono" ? 0.5 : 1, v = (n * g).toFixed(2), w = (a * g).toFixed(2), y = (i * g).toFixed(2), x = b ? "70, 70, 70" : "0, 0, 0", C = h.toFixed(2), E = `linear-gradient(rgba(${x}, ${C}), rgba(${x}, ${C}))`, { op: k } = ds("pulse-outside", p, o), S = 0.95, A = 0.9, _ = b ? 3 : 6, R = b ? 22.5 : 15, P = l.toFixed(2), I = f.toFixed(2), T = c ? `filter: brightness(${P}) saturate(${I});` : `filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${P}) saturate(${I});`, D = `brightness(var(--beam-glow-brightness, ${P})) saturate(var(--beam-glow-saturate, ${I}))`, z = c ? `filter: blur(var(--beam-core-blur, ${_}px)) ${D};` : `filter: blur(var(--beam-core-blur, ${_}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) ${D};`, O = c ? `filter: blur(var(--beam-bloom-blur, ${R}px)) ${D};` : `filter: blur(var(--beam-bloom-blur, ${R}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) ${D};`, N = $c(Oc, s, e), B = $c(Oc, s, e), V = Vf(oC, s, 1 - k * 0.5), L = h > 0 ? `${N},
    ${E}` : N;
  return `
${Uf(e)}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${e}"][data-active] {
${Jo(e, "beam-fade-in", 0.6)}
}

[data-beam="${e}"][data-fading] {
${Jo(e, "beam-fade-out", 0.5)}
}
${h > 0 ? `
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${e}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${E};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
` : ""}
[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  padding: 1px;
  clip-path: inset(0 round ${r}px);
  background: ${L};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${v} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${T}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${r + 10}px;
  background: ${B};
  transform: scale(${S}, ${A});
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${w} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${z}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${r + 30}px;
  background: ${V};
  transform: scale(${S}, ${A});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${y} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${O}
}

@keyframes beam-fade-in-${e} { to { --beam-opacity-${e}: 1; } }
@keyframes beam-fade-out-${e} { from { --beam-opacity-${e}: 1; } to { --beam-opacity-${e}: 0; } }
${Ao(e)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${e}"][data-active],
  [data-beam="${e}"][data-fading],
  [data-beam="${e}"][data-active]::after,
  [data-beam="${e}"][data-fading]::after,
  [data-beam="${e}"][data-active]::before,
  [data-beam="${e}"][data-fading]::before,
  [data-beam="${e}"][data-active] [data-beam-bloom],
  [data-beam="${e}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`;
}
function mC(t) {
  const {
    id: e,
    borderRadius: r,
    borderWidth: o,
    duration: n,
    strokeOpacity: a,
    innerOpacity: i,
    bloomOpacity: s,
    innerShadow: c,
    colorVariant: l,
    staticColors: f,
    brightness: d,
    saturation: p,
    hueRange: h,
    theme: b
  } = t, g = Math.max(0, r - o), v = b === "dark", w = a, y = i, x = s, C = f ? "" : `animation: beam-hue-shift-${e} 12s ease-in-out infinite;`, E = f ? "" : `animation: beam-hue-shift-bloom-${e} 8s ease-in-out infinite;`, k = f ? "" : `
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${e} {
  0% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h + 10}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${h + 10}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${h + 10}deg)) brightness(${d.toFixed(2)}) saturate(${p.toFixed(2)}); }
}`, S = v ? `radial-gradient(
        ellipse calc(24px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )` : `radial-gradient(
        ellipse calc(35px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`, A = K5(l, v, e), _ = J5(l, e), R = eC(l, v, e), P = l === "mono" ? "filter: blur(6px);" : "";
  return `
@property --beam-x-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-travel-${e} ${n}s linear infinite,
    beam-edge-fade-${e} ${n}s linear infinite,
    beam-breathe-${e} ${(n * 1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(n * 1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(n * 1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-travel-${e} ${n}s linear infinite,
    beam-edge-fade-${e} ${n}s linear infinite,
    beam-breathe-${e} ${(n * 1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(n * 1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(n * 1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${g}px;
  padding: ${o}px;
  clip-path: inset(0 round ${r}px);
  background: ${S}, ${A};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${w.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${_};
  box-shadow: inset 0 0 9px 1px ${c};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${y.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${C}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${g}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${R};
  ${P}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${x.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${E}
}

@keyframes beam-travel-${e} {
  0%   { --beam-x-${e}: 0.06;  --beam-w-${e}: 0.5; }
  10%  { --beam-x-${e}: 0.15;  --beam-w-${e}: 0.8; }
  20%  { --beam-x-${e}: 0.25;  --beam-w-${e}: 1.1; }
  30%  { --beam-x-${e}: 0.35;  --beam-w-${e}: 1.3; }
  40%  { --beam-x-${e}: 0.44;  --beam-w-${e}: 1.45; }
  50%  { --beam-x-${e}: 0.5;   --beam-w-${e}: 1.5; }
  60%  { --beam-x-${e}: 0.56;  --beam-w-${e}: 1.45; }
  70%  { --beam-x-${e}: 0.65;  --beam-w-${e}: 1.3; }
  80%  { --beam-x-${e}: 0.75;  --beam-w-${e}: 1.1; }
  90%  { --beam-x-${e}: 0.85;  --beam-w-${e}: 0.8; }
  100% { --beam-x-${e}: 0.94;  --beam-w-${e}: 0.5; }
}

@keyframes beam-edge-fade-${e} {
  0%    { --beam-edge-${e}: 0; }
  12.5% { --beam-edge-${e}: 0; }
  32.5% { --beam-edge-${e}: 1; }
  67.5% { --beam-edge-${e}: 1; }
  87.5% { --beam-edge-${e}: 0; }
  100%  { --beam-edge-${e}: 0; }
}

@keyframes beam-breathe-${e} {
  0%, 100% { --beam-h-${e}: 0.8; }
  25%      { --beam-h-${e}: 1.25; }
  55%      { --beam-h-${e}: 0.85; }
  80%      { --beam-h-${e}: 1.3; }
}

@keyframes beam-spike-${e} {
  0%   { --beam-spike-${e}: 0.8; }
  25%  { --beam-spike-${e}: 1.3; }
  50%  { --beam-spike-${e}: 0.9; }
  75%  { --beam-spike-${e}: 1.4; }
  100% { --beam-spike-${e}: 0.8; }
}

@keyframes beam-spike2-${e} {
  0%   { --beam-spike2-${e}: 1.2; }
  25%  { --beam-spike2-${e}: 0.7; }
  50%  { --beam-spike2-${e}: 1.4; }
  75%  { --beam-spike2-${e}: 0.8; }
  100% { --beam-spike2-${e}: 1.2; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${k}
${Ao(e)}
`;
}
const Zo = /* @__PURE__ */ new Set();
let xr = null, Ua = 0;
const hC = 1e3 / 30 - 2, gC = Math.PI * 2;
function Bc(t) {
  return (1 - Math.cos(gC * t)) / 2;
}
function Wf(t) {
  if (xr = requestAnimationFrame(Wf), t - Ua < hC) return;
  Ua = t;
  const e = t / 1e3;
  Zo.forEach(({ el: r, config: o }) => {
    for (const n of o.oscillators) {
      const a = (e - n.delay) / n.period, i = n.a + (n.b - n.a) * Bc(a);
      r.style.setProperty(
        n.prop,
        n.unit === "px" ? `${i.toFixed(2)}px` : i.toFixed(4)
      );
    }
    if (o.hue) {
      const { prop: n, range: a, period: i, continuous: s } = o.hue, c = s ? e / i % 1 * a : -a + 2 * a * Bc(e / i);
      r.style.setProperty(n, `${c.toFixed(2)}deg`);
    }
  });
}
function bC() {
  xr == null && (Ua = 0, xr = requestAnimationFrame(Wf));
}
function vC() {
  Zo.size === 0 && xr != null && (cancelAnimationFrame(xr), xr = null);
}
function xC(t, e) {
  const r = { el: t, config: e };
  return Zo.add(r), bC(), () => {
    Zo.delete(r), vC();
  };
}
function wC() {
  const [t, e] = Q(() => typeof window > "u" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  return le(() => {
    if (typeof window > "u") return;
    const r = window.matchMedia("(prefers-color-scheme: dark)"), o = (n) => {
      e(n.matches ? "dark" : "light");
    };
    return r.addEventListener("change", o), () => r.removeEventListener("change", o);
  }, []), t;
}
function yC(t, e) {
  return t === "auto" ? e : t;
}
const CC = Ke(
  function({
    children: t,
    size: e = "md",
    colorVariant: r = "colorful",
    theme: o = "dark",
    staticColors: n = !1,
    duration: a,
    active: i = !0,
    borderRadius: s,
    brightness: c,
    saturation: l,
    hueRange: f = 30,
    strength: d = 1,
    className: p,
    style: h,
    onActivate: b,
    onDeactivate: g,
    onAnimationEnd: v,
    ...w
  }, y) {
    const x = oo().replace(/:/g, "-"), C = wC(), E = pe(null), [k, S] = Q(i), [A, _] = Q(!1), [R, P] = Q(!0), [I, T] = Q(null), [D, z] = Q({ x: 1, y: 1 });
    le(() => {
      if (s != null) return;
      const q = E.current;
      if (!q) return;
      const re = () => {
        const Pe = q.firstElementChild;
        if (!Pe) return;
        const Ue = getComputedStyle(Pe), We = parseFloat(Ue.borderTopLeftRadius);
        !isNaN(We) && We > 0 && T(We);
      };
      re();
      const ne = new MutationObserver(re);
      return ne.observe(q, { childList: !0, subtree: !1 }), () => ne.disconnect();
    }, [s, t]), le(() => {
      i && !k && !A ? S(!0) : !i && k && !A && _(!0);
    }, [i, k, A]), le(() => {
      const q = E.current;
      if (!q || typeof IntersectionObserver > "u") return;
      const re = new IntersectionObserver(
        (ne) => {
          for (const Pe of ne) P(Pe.isIntersecting);
        },
        // Start animating slightly before the element scrolls into view.
        { rootMargin: "256px" }
      );
      return re.observe(q), () => re.disconnect();
    }, []), le(() => {
      if (e !== "pulse-outside") {
        z({ x: 1, y: 1 });
        return;
      }
      const q = E.current;
      if (!q) return;
      const re = 350, ne = 140, Pe = 0.35, Ue = 4, We = (ur) => Math.max(Pe, Math.min(Ue, ur)), dt = () => {
        const ur = q.firstElementChild;
        if (!ur) return;
        const dr = ur.getBoundingClientRect();
        if (!dr.width || !dr.height) return;
        const Yt = +We(dr.width / re).toFixed(3), hs = +We(dr.height / ne).toFixed(3);
        z((Bn) => Bn.x === Yt && Bn.y === hs ? Bn : { x: Yt, y: hs });
      };
      if (dt(), typeof ResizeObserver > "u") return;
      const Et = q.firstElementChild;
      if (!Et) return;
      const So = new ResizeObserver(dt);
      return So.observe(Et), () => So.disconnect();
    }, [e, t]);
    const O = Re(
      (q) => {
        const re = q.animationName;
        re.includes("fade-out") ? (S(!1), _(!1), g == null || g()) : re.includes("fade-in") && (b == null || b()), v == null || v(q);
      },
      [b, g, v]
    ), N = yC(o, C), B = W5[e][N], V = U5[e], L = e === "pulse-inner" || e === "pulse-outside", ee = s ?? I ?? V.borderRadius, X = a ?? (e === "line" ? 3.1 : L ? 2.3 : 1.96), j = l ?? B.saturation, oe = c ?? B.brightness ?? 1.3, H = e === "line" ? Math.min(f, 13) : f, U = r === "mono" ? !0 : n, te = Fe(
      () => lC({
        id: x,
        borderRadius: ee,
        borderWidth: V.borderWidth,
        duration: X,
        strokeOpacity: B.strokeOpacity,
        innerOpacity: B.innerOpacity,
        bloomOpacity: B.bloomOpacity,
        innerShadow: B.innerShadow,
        size: e,
        colorVariant: r,
        staticColors: U,
        brightness: oe,
        saturation: j,
        hueRange: H,
        theme: N,
        hairlineOpacity: B.hairlineOpacity
      }),
      [
        x,
        ee,
        V.borderWidth,
        X,
        B.strokeOpacity,
        B.innerOpacity,
        B.bloomOpacity,
        B.innerShadow,
        B.hairlineOpacity,
        e,
        r,
        U,
        oe,
        j,
        H,
        N
      ]
    ), G = Fe(
      () => L ? cC(e, N, X, H, U, x) : null,
      [L, e, N, X, H, U, x]
    );
    le(() => {
      var q;
      if (!G || !(k || A) || !R) return;
      const re = E.current;
      if (re && !(typeof window < "u" && (q = window.matchMedia) != null && q.call(window, "(prefers-reduced-motion: reduce)").matches))
        return xC(re, G);
    }, [G, k, A, R]);
    const J = Re(
      (q) => {
        E.current = q, typeof y == "function" ? y(q) : y && (y.current = q);
      },
      [y]
    ), Z = {
      ...h ?? {},
      "--beam-strength": Math.max(0, Math.min(1, d)),
      ...e === "pulse-outside" ? { "--pulse-glow-sx": D.x, "--pulse-glow-sy": D.y } : {}
    };
    return /* @__PURE__ */ $(ve, { children: [
      /* @__PURE__ */ u("style", { children: te }),
      /* @__PURE__ */ $(
        "div",
        {
          ...w,
          ref: J,
          "data-beam": x,
          "data-active": k && !A ? "" : void 0,
          "data-fading": A ? "" : void 0,
          "data-paused": k && !A && !R ? "" : void 0,
          className: p,
          style: Z,
          onAnimationEnd: O,
          children: [
            t,
            /* @__PURE__ */ u("div", { "data-beam-bloom": !0 })
          ]
        }
      )
    ] });
  }
);
function zr(t = 1) {
  const [e, r] = Q(t);
  return le(() => {
    const o = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => r(o.matches ? 0 : t);
    return n(), o.addEventListener("change", n), () => o.removeEventListener("change", n);
  }, [t]), e;
}
function t_({
  duration: t,
  size: e = "md",
  active: r = !0,
  strength: o = 1,
  theme: n,
  className: a,
  style: i,
  children: s,
  ...c
}) {
  const { theme: l } = Mr(), f = zr(1);
  return /* @__PURE__ */ u(
    CC,
    {
      size: e,
      duration: t,
      active: r && f > 0,
      strength: o,
      colorVariant: "ocean",
      theme: n ?? l,
      staticColors: !0,
      borderRadius: 0,
      className: M("w-full rounded-none", a),
      style: i,
      ...c,
      children: /* @__PURE__ */ u("div", { className: "su-frame p-su5 text-body", children: s })
    }
  );
}
const he = {
  paper: "#ffffff",
  paperDark: "#0a0c12",
  canvas: "#f5f5f7",
  ink: "#1d1d1f",
  ink2: "#6e6e73",
  navy: "#0f2971",
  action: "#1d4ed8",
  blue: "#3b82f6",
  mint: "#5eead4",
  cyan: "#22c1e0",
  teal: "#2dd4bf"
}, AC = [
  he.paper,
  he.canvas,
  he.mint,
  he.action,
  he.navy
], SC = [
  he.navy,
  he.action,
  he.mint,
  he.canvas
], _C = [
  he.mint,
  he.action,
  he.cyan
], kC = `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`, zc = 1920 * 1080 * 4;
let RC = class {
  constructor(e, r, o, n, a = 0, i = 0, s = 2, c = zc, l = []) {
    K(this, "parentElement");
    K(this, "canvasElement");
    K(this, "gl");
    K(this, "program", null);
    K(this, "uniformLocations", {});
    /** The fragment shader that we are using */
    K(this, "fragmentShader");
    /** Stores the RAF for the render loop */
    K(this, "rafId", null);
    /** Time of the last rendered frame */
    K(this, "lastRenderTime", 0);
    /** Total time that we have played any animation, passed as a uniform to the shader for time-based VFX */
    K(this, "currentFrame", 0);
    /** The speed that we progress through animation time (multiplies by delta time every update). Allows negatives to play in reverse. If set to 0, rAF will stop entirely so static shaders have no recurring performance costs */
    K(this, "speed", 0);
    /** Actual speed used that accounts for visibility: we pause the shader if the tab is hidden or the element out of the viewport */
    K(this, "currentSpeed", 0);
    /** Uniforms that are provided by the user for the specific shader being mounted (not including uniforms that this Mount adds, like time and resolution) */
    K(this, "providedUniforms");
    /** Names of the uniforms that should have mipmaps generated for them */
    K(this, "mipmaps", []);
    /** Just a sanity check to make sure frames don't run after we're disposed */
    K(this, "hasBeenDisposed", !1);
    /** If the resolution of the canvas has changed since the last render */
    K(this, "resolutionChanged", !0);
    /** Store textures that are provided by the user */
    K(this, "textures", /* @__PURE__ */ new Map());
    K(this, "minPixelRatio");
    K(this, "maxPixelCount");
    K(this, "isSafari", IC());
    K(this, "uniformCache", {});
    K(this, "textureUnitMap", /* @__PURE__ */ new Map());
    K(this, "ownerDocument");
    K(this, "initProgram", () => {
      const e = EC(this.gl, kC, this.fragmentShader);
      e && (this.program = e);
    });
    K(this, "setupPositionAttribute", () => {
      const e = this.gl.getAttribLocation(this.program, "a_position"), r = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, r);
      const o = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(o), this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(e), this.gl.vertexAttribPointer(e, 2, this.gl.FLOAT, !1, 0, 0);
    });
    K(this, "setupUniforms", () => {
      const e = {
        u_time: this.gl.getUniformLocation(this.program, "u_time"),
        u_pixelRatio: this.gl.getUniformLocation(this.program, "u_pixelRatio"),
        u_resolution: this.gl.getUniformLocation(this.program, "u_resolution")
      };
      Object.entries(this.providedUniforms).forEach(([r, o]) => {
        if (e[r] = this.gl.getUniformLocation(this.program, r), o instanceof HTMLImageElement) {
          const n = `${r}AspectRatio`;
          e[n] = this.gl.getUniformLocation(this.program, n);
        }
      }), this.uniformLocations = e;
    });
    /**
     * The scale that we should render at.
     * - Used to target 2x rendering even on 1x screens for better antialiasing
     * - Prevents the virtual resolution from going beyond the maximum resolution
     * - Accounts for the page zoom level so we render in physical device pixels rather than CSS pixels
     */
    K(this, "renderScale", 1);
    K(this, "parentWidth", 0);
    K(this, "parentHeight", 0);
    K(this, "parentDevicePixelWidth", 0);
    K(this, "parentDevicePixelHeight", 0);
    K(this, "devicePixelsSupported", !1);
    K(this, "intersectionObserver", null);
    K(this, "isInViewport", !0);
    K(this, "resizeObserver", null);
    K(this, "setupResizeObserver", () => {
      this.resizeObserver = new ResizeObserver(([e]) => {
        var r;
        if (e != null && e.borderBoxSize[0]) {
          const o = (r = e.devicePixelContentBoxSize) == null ? void 0 : r[0];
          o !== void 0 && (this.devicePixelsSupported = !0, this.parentDevicePixelWidth = o.inlineSize, this.parentDevicePixelHeight = o.blockSize), this.parentWidth = e.borderBoxSize[0].inlineSize, this.parentHeight = e.borderBoxSize[0].blockSize;
        }
        this.handleResize();
      }), this.resizeObserver.observe(this.parentElement);
    });
    K(this, "setupIntersectionObserver", () => {
      const e = this.ownerDocument.defaultView;
      e != null && e.IntersectionObserver && (this.intersectionObserver = new e.IntersectionObserver(([r]) => {
        this.isInViewport = (r == null ? void 0 : r.isIntersecting) ?? !0, this.updateCurrentSpeed();
      }), this.intersectionObserver.observe(this.parentElement));
    });
    // Visual viewport resize handler, mainly used to react to browser zoom changes.
    // Resize observer by itself does not react to pinch zoom, and although it usually
    // reacts to classic browser zoom, it's not guaranteed in edge cases.
    // Since timing between visual viewport changes and resize observer is complex
    // and because we'd like to know the device pixel sizes of elements, we just restart
    // the observer to get a guaranteed fresh callback regardless if it would have triggered or not.
    K(this, "handleVisualViewportChange", () => {
      var e;
      (e = this.resizeObserver) == null || e.disconnect(), this.setupResizeObserver();
    });
    /** Resize handler for when the container div changes size or the max pixel count changes and we want to resize our canvas to match */
    K(this, "handleResize", () => {
      let e = 0, r = 0;
      const o = Math.max(1, window.devicePixelRatio), n = (visualViewport == null ? void 0 : visualViewport.scale) ?? 1;
      if (this.devicePixelsSupported) {
        const f = Math.max(1, this.minPixelRatio / o);
        e = this.parentDevicePixelWidth * f * n, r = this.parentDevicePixelHeight * f * n;
      } else {
        let f = Math.max(o, this.minPixelRatio) * n;
        if (this.isSafari) {
          const d = TC(this.ownerDocument);
          f *= Math.max(1, d);
        }
        e = Math.round(this.parentWidth) * f, r = Math.round(this.parentHeight) * f;
      }
      const a = Math.sqrt(this.maxPixelCount) / Math.sqrt(e * r), i = Math.min(1, a), s = Math.round(e * i), c = Math.round(r * i), l = s / Math.round(this.parentWidth);
      (this.canvasElement.width !== s || this.canvasElement.height !== c || this.renderScale !== l) && (this.renderScale = l, this.canvasElement.width = s, this.canvasElement.height = c, this.resolutionChanged = !0, this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.render(performance.now()));
    });
    K(this, "render", (e) => {
      if (this.hasBeenDisposed) return;
      if (this.program === null) {
        console.warn("Tried to render before program or gl was initialized");
        return;
      }
      const r = e - this.lastRenderTime;
      this.lastRenderTime = e, this.currentSpeed !== 0 && (this.currentFrame += r * this.currentSpeed), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.useProgram(this.program), this.gl.uniform1f(this.uniformLocations.u_time, this.currentFrame * 1e-3), this.resolutionChanged && (this.gl.uniform2f(this.uniformLocations.u_resolution, this.gl.canvas.width, this.gl.canvas.height), this.gl.uniform1f(this.uniformLocations.u_pixelRatio, this.renderScale), this.resolutionChanged = !1), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), this.currentSpeed !== 0 ? this.requestRender() : this.rafId = null;
    });
    K(this, "requestRender", () => {
      this.rafId !== null && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(this.render);
    });
    /** Creates a texture from an image and sets it into a uniform value */
    K(this, "setTextureUniform", (e, r) => {
      if (!r.complete || r.naturalWidth === 0)
        throw new Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);
      const o = this.textures.get(e);
      o && this.gl.deleteTexture(o), this.textureUnitMap.has(e) || this.textureUnitMap.set(e, this.textureUnitMap.size);
      const n = this.textureUnitMap.get(e);
      this.gl.activeTexture(this.gl.TEXTURE0 + n);
      const a = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, a), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, r), this.mipmaps.includes(e) && (this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR));
      const i = this.gl.getError();
      if (i !== this.gl.NO_ERROR || a === null) {
        console.error("Paper Shaders: WebGL error when uploading texture:", i);
        return;
      }
      this.textures.set(e, a);
      const s = this.uniformLocations[e];
      if (s) {
        this.gl.uniform1i(s, n);
        const c = `${e}AspectRatio`, l = this.uniformLocations[c];
        if (l) {
          const f = r.naturalWidth / r.naturalHeight;
          this.gl.uniform1f(l, f);
        }
      }
    });
    /** Utility: recursive equality test for all the uniforms */
    K(this, "areUniformValuesEqual", (e, r) => e === r ? !0 : Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.every((o, n) => this.areUniformValuesEqual(o, r[n])) : !1);
    /** Sets the provided uniform values into the WebGL program, can be a partial list of uniforms that have changed */
    K(this, "setUniformValues", (e) => {
      this.gl.useProgram(this.program), Object.entries(e).forEach(([r, o]) => {
        let n = o;
        if (o instanceof HTMLImageElement && (n = `${o.src.slice(0, 200)}|${o.naturalWidth}x${o.naturalHeight}`), this.areUniformValuesEqual(this.uniformCache[r], n)) return;
        this.uniformCache[r] = n;
        const a = this.uniformLocations[r];
        if (!a) {
          console.warn(`Uniform location for ${r} not found`);
          return;
        }
        if (o instanceof HTMLImageElement)
          this.setTextureUniform(r, o);
        else if (Array.isArray(o)) {
          let i = null, s = null;
          if (o[0] !== void 0 && Array.isArray(o[0])) {
            const c = o[0].length;
            if (o.every((l) => l.length === c))
              i = o.flat(), s = c;
            else {
              console.warn(`All child arrays must be the same length for ${r}`);
              return;
            }
          } else
            i = o, s = i.length;
          switch (s) {
            case 2:
              this.gl.uniform2fv(a, i);
              break;
            case 3:
              this.gl.uniform3fv(a, i);
              break;
            case 4:
              this.gl.uniform4fv(a, i);
              break;
            case 9:
              this.gl.uniformMatrix3fv(a, !1, i);
              break;
            case 16:
              this.gl.uniformMatrix4fv(a, !1, i);
              break;
            default:
              console.warn(`Unsupported uniform array length: ${s}`);
          }
        } else typeof o == "number" ? this.gl.uniform1f(a, o) : typeof o == "boolean" ? this.gl.uniform1i(a, o ? 1 : 0) : console.warn(`Unsupported uniform type for ${r}: ${typeof o}`);
      });
    });
    /** Gets the current total animation time from 0ms */
    K(this, "getCurrentFrame", () => this.currentFrame);
    /** Set a frame to get a deterministic result, frames are literally just milliseconds from zero since the animation started */
    K(this, "setFrame", (e) => {
      this.currentFrame = e, this.lastRenderTime = performance.now(), this.render(performance.now());
    });
    /** Set an animation speed (or 0 to stop animation) */
    K(this, "setSpeed", (e = 1) => {
      this.speed = e, this.updateCurrentSpeed();
    });
    /** Apply the target speed, pausing (0) while the tab is hidden or the element is out of the viewport */
    K(this, "updateCurrentSpeed", () => {
      this.setCurrentSpeed(this.ownerDocument.hidden || !this.isInViewport ? 0 : this.speed);
    });
    K(this, "setCurrentSpeed", (e) => {
      this.currentSpeed = e, this.rafId === null && e !== 0 && (this.lastRenderTime = performance.now(), this.rafId = requestAnimationFrame(this.render)), this.rafId !== null && e === 0 && (cancelAnimationFrame(this.rafId), this.rafId = null);
    });
    /** Set the maximum pixel count for the shader, this will limit the number of pixels that will be rendered */
    K(this, "setMaxPixelCount", (e = zc) => {
      this.maxPixelCount = e, this.handleResize();
    });
    /** Set the minimum pixel ratio for the shader */
    K(this, "setMinPixelRatio", (e = 2) => {
      this.minPixelRatio = e, this.handleResize();
    });
    /** Update the uniforms that are provided by the outside shader, can be a partial set with only the uniforms that have changed */
    K(this, "setUniforms", (e) => {
      this.setUniformValues(e), this.providedUniforms = { ...this.providedUniforms, ...e }, this.render(performance.now());
    });
    K(this, "handleDocumentVisibilityChange", () => {
      this.updateCurrentSpeed();
    });
    /** Dispose of the shader mount, cleaning up all of the WebGL resources */
    K(this, "dispose", () => {
      this.hasBeenDisposed = !0, this.rafId !== null && (cancelAnimationFrame(this.rafId), this.rafId = null), this.gl && this.program && (this.textures.forEach((e) => {
        this.gl.deleteTexture(e);
      }), this.textures.clear(), this.gl.deleteProgram(this.program), this.program = null, this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.getError()), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = null), visualViewport == null || visualViewport.removeEventListener("resize", this.handleVisualViewportChange), this.ownerDocument.removeEventListener("visibilitychange", this.handleDocumentVisibilityChange), this.uniformLocations = {}, this.canvasElement.remove(), delete this.parentElement.paperShaderMount;
    });
    if ((e == null ? void 0 : e.nodeType) === 1)
      this.parentElement = e;
    else
      throw new Error("Paper Shaders: parent element must be an HTMLElement");
    if (this.ownerDocument = e.ownerDocument, !this.ownerDocument.querySelector("style[data-paper-shader]")) {
      const p = this.ownerDocument.createElement("style");
      p.innerHTML = PC, p.setAttribute("data-paper-shader", ""), this.ownerDocument.head.prepend(p);
    }
    const f = this.ownerDocument.createElement("canvas");
    this.canvasElement = f, this.parentElement.prepend(f), this.fragmentShader = r, this.providedUniforms = o, this.mipmaps = l, this.currentFrame = i, this.minPixelRatio = s, this.maxPixelCount = c;
    const d = f.getContext("webgl2", n);
    if (!d)
      throw new Error("Paper Shaders: WebGL is not supported in this browser");
    this.gl = d, this.initProgram(), this.setupPositionAttribute(), this.setupUniforms(), this.setUniformValues(this.providedUniforms), this.setupResizeObserver(), visualViewport == null || visualViewport.addEventListener("resize", this.handleVisualViewportChange), this.setupIntersectionObserver(), this.setSpeed(a), this.parentElement.setAttribute("data-paper-shader", ""), this.parentElement.paperShaderMount = this, this.ownerDocument.addEventListener("visibilitychange", this.handleDocumentVisibilityChange);
  }
};
function Fc(t, e, r) {
  const o = t.createShader(e);
  return o ? (t.shaderSource(o, r), t.compileShader(o), t.getShaderParameter(o, t.COMPILE_STATUS) ? o : (console.error("An error occurred compiling the shaders: " + t.getShaderInfoLog(o)), t.deleteShader(o), null)) : null;
}
function EC(t, e, r) {
  const o = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT), n = o ? o.precision : null;
  n && n < 23 && (e = e.replace(/precision\s+(lowp|mediump)\s+float;/g, "precision highp float;"), r = r.replace(/precision\s+(lowp|mediump)\s+float/g, "precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g, "$1 highp $3"));
  const a = Fc(t, t.VERTEX_SHADER, e), i = Fc(t, t.FRAGMENT_SHADER, r);
  if (!a || !i) return null;
  const s = t.createProgram();
  return s ? (t.attachShader(s, a), t.attachShader(s, i), t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) ? (t.detachShader(s, a), t.detachShader(s, i), t.deleteShader(a), t.deleteShader(i), s) : (console.error("Unable to initialize the shader program: " + t.getProgramInfoLog(s)), t.deleteProgram(s), t.deleteShader(a), t.deleteShader(i), null)) : null;
}
const PC = `@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;
function IC() {
  const t = navigator.userAgent.toLowerCase();
  return t.includes("safari") && !t.includes("chrome") && !t.includes("android");
}
function TC(t) {
  const e = (visualViewport == null ? void 0 : visualViewport.scale) ?? 1, r = (visualViewport == null ? void 0 : visualViewport.width) ?? window.innerWidth, o = window.innerWidth - t.documentElement.clientWidth, n = e * r + o, a = outerWidth / n, i = Math.round(100 * a);
  return i % 5 === 0 ? i / 100 : i === 33 ? 1 / 3 : i === 67 ? 2 / 3 : i === 133 ? 4 / 3 : a;
}
const fs = {
  fit: "contain",
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
  originX: 0.5,
  originY: 0.5,
  worldWidth: 0,
  worldHeight: 0
}, On = {
  fit: "none",
  scale: 1,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
  originX: 0.5,
  originY: 0.5,
  worldWidth: 0,
  worldHeight: 0
}, lr = {
  none: 0,
  contain: 1,
  cover: 2
}, Fr = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`, $n = `
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`, MC = `
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`, Hf = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`, DC = `
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`, NC = `
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`, ps = `
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`, Gf = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`, OC = `
float fiberRandom(vec2 p) {
  vec2 uv = floor(p) / 100.;
  return texture(u_noiseTexture, fract(uv)).b;
}

float fiberValueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = fiberRandom(i);
  float b = fiberRandom(i + vec2(1.0, 0.0));
  float c = fiberRandom(i + vec2(0.0, 1.0));
  float d = fiberRandom(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float fiberNoiseFbm(in vec2 n, vec2 seedOffset) {
  float total = 0.0, amplitude = 1.;
  for (int i = 0; i < 4; i++) {
    n = rotate(n, .7);
    total += fiberValueNoise(n + seedOffset) * amplitude;
    n *= 2.;
    amplitude *= 0.6;
  }
  return total;
}

float fiberNoise(vec2 uv, vec2 seedOffset) {
  float epsilon = 0.001;
  float n1 = fiberNoiseFbm(uv + vec2(epsilon, 0.0), seedOffset);
  float n2 = fiberNoiseFbm(uv - vec2(epsilon, 0.0), seedOffset);
  float n3 = fiberNoiseFbm(uv + vec2(0.0, epsilon), seedOffset);
  float n4 = fiberNoiseFbm(uv - vec2(0.0, epsilon), seedOffset);
  return length(vec2(n1 - n2, n3 - n4)) / (2.0 * epsilon);
}
`, Lc = {
  maxColorCount: 10
}, $C = `#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${Lc.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${Fr}
${$n}
${Hf}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${Lc.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`, BC = `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorMid;
uniform vec4 u_colorBack;
uniform float u_brightness;
uniform float u_contrast;

in vec2 v_patternUV;

out vec4 fragColor;

${$n}

float neuroShape(vec2 uv, float t) {
  vec2 sine_acc = vec2(0.);
  vec2 res = vec2(0.);
  float scale = 8.;

  for (int j = 0; j < 15; j++) {
    uv = rotate(uv, 1.);
    sine_acc = rotate(sine_acc, 1.);
    vec2 layer = uv * scale + float(j) + sine_acc - t;
    sine_acc += sin(layer);
    res += (.5 + .5 * cos(layer)) / scale;
    scale *= (1.2);
  }
  return res.x + res.y;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .13;

  float t = .5 * u_time;

  float noise = neuroShape(shape_uv, t);

  noise = (1. + u_brightness) * noise * noise;
  noise = pow(noise, .7 + 6. * u_contrast);
  noise = min(1.4, noise);

  float blend = smoothstep(0.7, 1.4, noise);

  vec4 frontC = u_colorFront;
  frontC.rgb *= frontC.a;
  vec4 midC = u_colorMid;
  midC.rgb *= midC.a;
  vec4 blendFront = mix(midC, frontC, blend);

  float safeNoise = max(noise, 0.0);
  vec3 color = blendFront.rgb * safeNoise;
  float opacity = clamp(blendFront.a * safeNoise, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${ps}

  fragColor = vec4(color, opacity);
}
`, zC = `#version 300 es
precision mediump float;

uniform vec4 u_colorBack;
uniform vec4 u_colorFill;
uniform vec4 u_colorStroke;
uniform float u_dotSize;
uniform float u_gapX;
uniform float u_gapY;
uniform float u_strokeWidth;
uniform float u_sizeRange;
uniform float u_opacityRange;
uniform float u_shape;

in vec2 v_patternUV;

out vec4 fragColor;

${Fr}
${Gf}

float polygon(vec2 p, float N, float rot) {
  float a = atan(p.x, p.y) + rot;
  float r = TWO_PI / float(N);

  return cos(floor(.5 + a / r) * r - a) * length(p);
}

void main() {

  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  vec2 shape_uv = 100. * v_patternUV;

  vec2 gap = max(abs(vec2(u_gapX, u_gapY)), vec2(1e-6));
  vec2 grid = fract(shape_uv / gap) + 1e-4;
  vec2 grid_idx = floor(shape_uv / gap);
  float sizeRandomizer = .5 + .8 * snoise(2. * vec2(grid_idx.x * 100., grid_idx.y));
  float opacity_randomizer = .5 + .7 * snoise(2. * vec2(grid_idx.y, grid_idx.x));

  vec2 center = vec2(0.5) - 1e-3;
  vec2 p = (grid - center) * vec2(u_gapX, u_gapY);

  float baseSize = u_dotSize * (1. - sizeRandomizer * u_sizeRange);
  float strokeWidth = u_strokeWidth * (1. - sizeRandomizer * u_sizeRange);

  float dist;
  if (u_shape < 0.5) {
    // Circle
    dist = length(p);
  } else if (u_shape < 1.5) {
    // Diamond
    strokeWidth *= 1.5;
    dist = polygon(1.5 * p, 4., .25 * PI);
  } else if (u_shape < 2.5) {
    // Square
    dist = polygon(1.03 * p, 4., 1e-3);
  } else {
    // Triangle
    strokeWidth *= 1.5;
    p = p * 2. - 1.;
    p *= .9;
    p.y = 1. - p.y;
    p.y -= .75 * baseSize;
    dist = polygon(p, 3., 1e-3);
  }

  float edgeWidth = fwidth(dist);
  float shapeOuter = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist - strokeWidth);
  float shapeInner = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist);
  float stroke = shapeOuter - shapeInner;

  float dotOpacity = max(0., 1. - opacity_randomizer * u_opacityRange);
  stroke *= dotOpacity;
  shapeInner *= dotOpacity;

  stroke *= u_colorStroke.a;
  shapeInner *= u_colorFill.a;

  vec3 color = vec3(0.);
  color += stroke * u_colorStroke.rgb;
  color += shapeInner * u_colorFill.rgb;
  color += (1. - shapeInner - stroke) * u_colorBack.rgb * u_colorBack.a;

  float opacity = 0.;
  opacity += stroke;
  opacity += shapeInner;
  opacity += (1. - opacity) * u_colorBack.a;

  fragColor = vec4(color, opacity);
}
`, FC = {
  circle: 0,
  diamond: 1,
  square: 2,
  triangle: 3
}, Vc = {
  maxColorCount: 10
}, LC = `#version 300 es
precision mediump float;

uniform float u_time;
uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${Vc.maxColorCount}];
uniform float u_colorsCount;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

in vec2 v_patternUV;

out vec4 fragColor;

${Fr}
${$n}
float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}


void main() {
  vec2 uv = v_patternUV;
  uv *= .5;

  const float firstFrameOffset = 118.;
  float t = 0.0625 * (u_time + firstFrameOffset);

  float n1 = valueNoise(uv * 1. + t);
  float n2 = valueNoise(uv * 2. - t);
  float angle = n1 * TWO_PI;
  uv.x += 4. * u_distortion * n2 * cos(angle);
  uv.y += 4. * u_distortion * n2 * sin(angle);

  float swirl = u_swirl;
  for (int i = 1; i <= 20; i++) {
    if (i >= int(u_swirlIterations)) break;
    float iFloat = float(i);
    //    swirl *= (1. - smoothstep(.0, .25, length(fwidth(uv))));
    uv.x += swirl / iFloat * cos(t + iFloat * 1.5 * uv.y);
    uv.y += swirl / iFloat * cos(t + iFloat * 1. * uv.x);
  }

  float proportion = clamp(u_proportion, 0., 1.);

  float shape = 0.;
  if (u_shape < .5) {
    vec2 checksShape_uv = uv * (.5 + 3.5 * u_shapeScale);
    shape = .5 + .5 * sin(checksShape_uv.x) * cos(checksShape_uv.y);
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else if (u_shape < 1.5) {
    vec2 stripesShape_uv = uv * (2. * u_shapeScale);
    float f = fract(stripesShape_uv.y);
    shape = smoothstep(.0, .55, f) * (1.0 - smoothstep(.45, 1., f));
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else {
    float shapeScaling = 5. * (1. - u_shapeScale);
    float e0 = 0.45 - shapeScaling;
    float e1 = 0.55 + shapeScaling;
    shape = smoothstep(min(e0, e1), max(e0, e1), 1.0 - uv.y + 0.3 * (proportion - 0.5));
  }

  float mixer = shape * (u_colorsCount - 1.);
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float aa = fwidth(shape);
  for (int i = 1; i < ${Vc.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0.0, 1.0);

    float localMixerStart = floor(m);
    float softness = .5 * u_softness + fwidth(m);
    float smoothed = smoothstep(max(0., .5 - softness - aa), min(1., .5 + softness + aa), m - localMixerStart);
    float stepped = localMixerStart + smoothed;

    m = mix(stepped, m, u_softness);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${ps}

  fragColor = vec4(color, opacity);
}
`, VC = {
  checks: 0,
  stripes: 1,
  edge: 2
}, UC = `#version 300 es
precision mediump float;

uniform float u_time;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;

out vec4 fragColor;

${Gf}
${Fr}
${MC}
${Hf}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {
  float t = .5 * u_time;

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec2 shapeUV = normalizedUV;

  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 boxSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  
  if (u_shape > 3.5) {
    vec2 objectBoxSize = vec2(0.);
    // fit = none
    objectBoxSize.x = min(boxSize.x, boxSize.y);
    if (u_fit == 1.) { // fit = contain
      objectBoxSize.x = min(u_resolution.x, u_resolution.y);
    } else if (u_fit == 2.) { // fit = cover
      objectBoxSize.x = max(u_resolution.x, u_resolution.y);
    }
    objectBoxSize.y = objectBoxSize.x;
    vec2 objectWorldScale = u_resolution.xy / objectBoxSize;

    shapeUV *= objectWorldScale;
    shapeUV += boxOrigin * (objectWorldScale - 1.);
    shapeUV += vec2(-u_offsetX, u_offsetY);
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
  } else {
    vec2 patternBoxSize = vec2(0.);
    // fit = none
    patternBoxSize.x = patternBoxRatio * min(boxSize.x / patternBoxRatio, boxSize.y);
    float patternWorldNoFitBoxWidth = patternBoxSize.x;
    if (u_fit == 1.) { // fit = contain
      patternBoxSize.x = patternBoxRatio * min(u_resolution.x / patternBoxRatio, u_resolution.y);
    } else if (u_fit == 2.) { // fit = cover
      patternBoxSize.x = patternBoxRatio * max(u_resolution.x / patternBoxRatio, u_resolution.y);
    }
    patternBoxSize.y = patternBoxSize.x / patternBoxRatio;
    vec2 patternWorldScale = u_resolution.xy / patternBoxSize;

    shapeUV += vec2(-u_offsetX, u_offsetY) / patternWorldScale;
    shapeUV += boxOrigin;
    shapeUV -= boxOrigin / patternWorldScale;
    shapeUV *= u_resolution.xy;
    shapeUV /= u_pixelRatio;
    if (u_fit > 0.) {
      shapeUV *= (patternWorldNoFitBoxWidth / patternBoxSize.x);
    }
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
    shapeUV += boxOrigin / patternWorldScale;
    shapeUV -= boxOrigin;
    shapeUV += .5;
  }

  float shape = 0.;
  if (u_shape < 1.5) {
    // Simplex noise
    shapeUV *= .001;

    shape = 0.5 + 0.5 * getSimplexNoise(shapeUV, t);
    shape = smoothstep(0.3, 0.9, shape);

  } else if (u_shape < 2.5) {
    // Warp
    shapeUV *= .003;

    for (float i = 1.0; i < 6.0; i++) {
      shapeUV.x += 0.6 / i * cos(i * 2.5 * shapeUV.y + t);
      shapeUV.y += 0.6 / i * cos(i * 1.5 * shapeUV.x + t);
    }

    shape = .15 / max(0.001, abs(sin(t - shapeUV.y - shapeUV.x)));
    shape = smoothstep(0.02, 1., shape);

  } else if (u_shape < 3.5) {
    // Dots
    shapeUV *= .05;

    float stripeIdx = floor(2. * shapeUV.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shapeUV.x) * cos(shapeUV.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);

  } else if (u_shape < 4.5) {
    // Sine wave
    shapeUV *= 4.;

    float wave = cos(.5 * shapeUV.x - 2. * t) * sin(1.5 * shapeUV.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shapeUV.y + wave);

  } else if (u_shape < 5.5) {
    // Ripple

    float dist = length(shapeUV);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Swirl

    float l = length(shapeUV);
    float angle = 6. * atan(shapeUV.y, shapeUV.x) + 4. * t;
    float twist = 1.2;
    float offset = 1. / pow(max(l, 1e-6), twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);

  } else {
    // Sphere
    shapeUV *= 2.;

    float d = 1. - pow(length(shapeUV), 2.);
    vec3 pos = vec3(shapeUV, sqrt(max(0., d)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }


  int type = int(floor(u_type));
  float dithering = 0.0;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), shape);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  dithering -= .5;
  float res = step(.5, shape + dithering);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`, WC = {
  simplex: 1,
  warp: 2,
  dots: 3,
  wave: 4,
  ripple: 5,
  swirl: 6,
  sphere: 7
}, HC = {
  random: 1,
  "2x2": 2,
  "4x4": 3,
  "8x8": 4
}, ia = {
  maxColorCount: 5,
  maxSpots: 4
}, GC = `#version 300 es
precision lowp float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${ia.maxColorCount}];
uniform float u_colorsCount;
uniform float u_roundness;
uniform float u_thickness;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_aspectRatio;
uniform float u_softness;
uniform float u_intensity;
uniform float u_bloom;
uniform float u_spotSize;
uniform float u_spots;
uniform float u_pulse;
uniform float u_smoke;
uniform float u_smokeSize;

uniform sampler2D u_noiseTexture;

in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;

out vec4 fragColor;

${Fr}

float beat(float time) {
  float first = pow(abs(sin(time * TWO_PI)), 10.);
  float second = pow(abs(sin((time - .15) * TWO_PI)), 10.);

  return clamp(first + 0.6 * second, 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float roundedBox(vec2 uv, vec2 halfSize, float distance, float cornerDistance, float thickness, float softness) {
  float borderDistance = abs(distance);
  float aa = 2. * fwidth(distance);
  float border = 1. - sst(min(mix(thickness, -thickness, softness), thickness + aa), max(mix(thickness, -thickness, softness), thickness + aa), borderDistance);
  float cornerFadeCircles = 0.;
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv + halfSize) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(-halfSize.x, halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(halfSize.x, -halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - halfSize) / thickness)));
  aa = fwidth(cornerDistance);
  float cornerFade = sst(0., mix(aa, thickness, softness), cornerDistance);
  cornerFade *= cornerFadeCircles;
  border += cornerFade;
  return border;
}

${NC}

float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

void main() {
  const float firstFrameOffset = 109.;
  float t = 1.2 * (u_time + firstFrameOffset);

  vec2 borderUV = v_responsiveUV;
  float pulse = u_pulse * beat(.18 * u_time);

  float canvasRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 halfSize = vec2(.5);
  borderUV.x *= max(canvasRatio, 1.);
  borderUV.y /= min(canvasRatio, 1.);
  halfSize.x *= max(canvasRatio, 1.);
  halfSize.y /= min(canvasRatio, 1.);

  float mL = u_marginLeft;
  float mR = u_marginRight;
  float mT = u_marginTop;
  float mB = u_marginBottom;
  float mX = mL + mR;
  float mY = mT + mB;

  if (u_aspectRatio > 0.) {
    float shapeRatio = canvasRatio * (1. - mX) / max(1. - mY, 1e-6);
    float freeX = shapeRatio > 1. ? (1. - mX) * (1. - 1. / max(abs(shapeRatio), 1e-6)) : 0.;
    float freeY = shapeRatio < 1. ? (1. - mY) * (1. - shapeRatio) : 0.;
    mL += freeX * 0.5;
    mR += freeX * 0.5;
    mT += freeY * 0.5;
    mB += freeY * 0.5;
    mX = mL + mR;
    mY = mT + mB;
  }

  float thickness = .5 * u_thickness * min(halfSize.x, halfSize.y);

  halfSize.x *= (1. - mX);
  halfSize.y *= (1. - mY);

  vec2 centerShift = vec2(
  (mL - mR) * max(canvasRatio, 1.) * 0.5,
  (mB - mT) / min(canvasRatio, 1.) * 0.5
  );

  borderUV -= centerShift;
  halfSize -= mix(thickness, 0., u_softness);

  float radius = mix(0., min(halfSize.x, halfSize.y), u_roundness);
  vec2 d = abs(borderUV) - halfSize + radius;
  float outsideDistance = length(max(d, .0001)) - radius;
  float insideDistance = min(max(d.x, d.y), .0001);
  float cornerDistance = abs(min(max(d.x, d.y) - .45 * radius, .0));
  float distance = outsideDistance + insideDistance;

  float borderThickness = mix(thickness, 3. * thickness, u_softness);
  float border = roundedBox(borderUV, halfSize, distance, cornerDistance, borderThickness, u_softness);
  border = pow(border, 1. + u_softness);

  vec2 smokeUV = .3 * u_smokeSize * v_patternUV;
  float smoke = clamp(3. * valueNoise(2.7 * smokeUV + .5 * t), 0., 1.);
  smoke -= valueNoise(3.4 * smokeUV - .5 * t);
  float smokeThickness = thickness + .2;
  smokeThickness = min(.4, max(smokeThickness, .1));
  smoke *= roundedBox(borderUV, halfSize, distance, cornerDistance, smokeThickness, 1.);
  smoke = 30. * smoke * smoke;
  smoke *= mix(0., .5, pow(u_smoke, 2.));
  smoke *= mix(1., pulse, u_pulse);
  smoke = clamp(smoke, 0., 1.);
  border += smoke;

  border = clamp(border, 0., 1.);

  vec3 blendColor = vec3(0.);
  float blendAlpha = 0.;
  vec3 addColor = vec3(0.);
  float addAlpha = 0.;

  float bloom = 4. * u_bloom;
  float intensity = 1. + (1. + 4. * u_softness) * u_intensity;

  float angle = atan(borderUV.y, borderUV.x) / TWO_PI;

  for (int colorIdx = 0; colorIdx < ${ia.maxColorCount}; colorIdx++) {
    if (colorIdx >= int(u_colorsCount)) break;
    float colorIdxF = float(colorIdx);

    vec3 c = u_colors[colorIdx].rgb * u_colors[colorIdx].a;
    float a = u_colors[colorIdx].a;

    for (int spotIdx = 0; spotIdx < ${ia.maxSpots}; spotIdx++) {
      if (spotIdx >= int(u_spots)) break;
      float spotIdxF = float(spotIdx);

      vec2 randVal = randomGB(vec2(spotIdxF * 10. + 2., 40. + colorIdxF));

      float time = (.1 + .15 * abs(sin(spotIdxF * (2. + colorIdxF)) * cos(spotIdxF * (2. + 2.5 * colorIdxF)))) * t + randVal.x * 3.;
      time *= mix(1., -1., step(.5, randVal.y));

      float mask = .5 + .5 * mix(
      sin(t + spotIdxF * (5. - 1.5 * colorIdxF)),
      cos(t + spotIdxF * (3. + 1.3 * colorIdxF)),
      step(mod(colorIdxF, 2.), .5)
      );

      float p = clamp(2. * u_pulse - randVal.x, 0., 1.);
      mask = mix(mask, pulse, p);

      float atg1 = fract(angle + time);
      float spotSize = .05 + .6 * pow(u_spotSize, 2.) + .05 * randVal.x;
      spotSize = mix(spotSize, .1, p);
      float sector = sst(.5 - spotSize, .5, atg1) * (1. - sst(.5, .5 + spotSize, atg1));

      sector *= mask;
      sector *= border;
      sector *= intensity;
      sector = clamp(sector, 0., 1.);

      vec3 srcColor = c * sector;
      float srcAlpha = a * sector;

      blendColor += ((1. - blendAlpha) * srcColor);
      blendAlpha = blendAlpha + (1. - blendAlpha) * srcAlpha;
      addColor += srcColor;
      addAlpha += srcAlpha;
    }
  }

  vec3 accumColor = mix(blendColor, addColor, bloom);
  float accumAlpha = mix(blendAlpha, addAlpha, bloom);
  accumAlpha = clamp(accumAlpha, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;

  ${ps}

  fragColor = vec4(color, opacity);
}`, YC = {
  auto: 0,
  square: 1
}, QC = `#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_contrast;
uniform float u_roughness;
uniform float u_fiber;
uniform float u_fiberSize;
uniform float u_crumples;
uniform float u_crumpleSize;
uniform float u_folds;
uniform float u_foldCount;
uniform float u_drops;
uniform float u_seed;
uniform float u_fade;

uniform sampler2D u_noiseTexture;

in vec2 v_imageUV;

out vec4 fragColor;

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1. - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1. - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

${Fr}
${$n}
${DC}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
float fbm(vec2 n) {
  float total = 0.0, amplitude = .4;
  for (int i = 0; i < 3; i++) {
    total += valueNoise(n) * amplitude;
    n *= 1.99;
    amplitude *= 0.65;
  }
  return total;
}


float randomG(vec2 p) {
  vec2 uv = floor(p) / 50. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float roughness(vec2 p) {
  p *= .1;
  float o = 0.;
  for (float i = 0.; ++i < 4.; p *= 2.1) {
    vec4 w = vec4(floor(p), ceil(p));
    vec2 f = fract(p);
    o += mix(
    mix(randomG(w.xy), randomG(w.xw), f.y),
    mix(randomG(w.zy), randomG(w.zw), f.y),
    f.x);
    o += .2 / exp(2. * abs(sin(.2 * p.x + .5 * p.y)));
  }
  return o / 3.;
}

${OC}

vec2 randomGB(vec2 p) {
  vec2 uv = floor(p) / 50. + .5;
  return texture(u_noiseTexture, fract(uv)).gb;
}
float crumpledNoise(vec2 t, float pw) {
  vec2 p = floor(t);
  float wsum = 0.;
  float cl = 0.;
  for (int y = -1; y < 2; y += 1) {
    for (int x = -1; x < 2; x += 1) {
      vec2 b = vec2(float(x), float(y));
      vec2 q = b + p;
      vec2 q2 = q - floor(q / 8.) * 8.;
      vec2 c = q + randomGB(q2);
      vec2 r = c - t;
      float w = pow(smoothstep(0., 1., 1. - abs(r.x)), pw) * pow(smoothstep(0., 1., 1. - abs(r.y)), pw);
      cl += (.5 + .5 * sin((q2.x + q2.y * 5.) * 8.)) * w;
      wsum += w;
    }
  }
  return pow(wsum != 0.0 ? cl / wsum : 0.0, .5) * 2.;
}
float crumplesShape(vec2 uv) {
  return crumpledNoise(uv * .25, 16.) * crumpledNoise(uv * .5, 2.);
}


vec2 folds(vec2 uv) {
  vec3 pp = vec3(0.);
  float l = 9.;
  for (float i = 0.; i < 15.; i++) {
    if (i >= u_foldCount) break;
    vec2 rand = randomGB(vec2(i, i * u_seed));
    float an = rand.x * TWO_PI;
    vec2 p = vec2(cos(an), sin(an)) * rand.y;
    float dist = distance(uv, p);
    l = min(l, dist);

    if (l == dist) {
      pp.xy = (uv - p.xy);
      pp.z = dist;
    }
  }
  return mix(pp.xy, vec2(0.), pow(pp.z, .25));
}

float drops(vec2 uv) {
  vec2 iDropsUV = floor(uv);
  vec2 fDropsUV = fract(uv);
  float dropsMinDist = 1.;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 neighbor = vec2(float(i), float(j));
      vec2 offset = randomGB(iDropsUV + neighbor);
      offset = .5 + .5 * sin(10. * u_seed + TWO_PI * offset);
      vec2 pos = neighbor + offset - fDropsUV;
      float dist = length(pos);
      dropsMinDist = min(dropsMinDist, dropsMinDist*dist);
    }
  }
  return 1. - smoothstep(.05, .09, pow(dropsMinDist, .5));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = 5. * (patternUV * vec2(u_imageAspectRatio, 1.));

  vec2 roughnessUv = 1.5 * (gl_FragCoord.xy - .5 * u_resolution) / u_pixelRatio;
  float roughness = roughness(roughnessUv + vec2(1., 0.)) - roughness(roughnessUv - vec2(1., 0.));

  vec2 crumplesUV = fract(patternUV * .02 / u_crumpleSize - u_seed) * 32.;
  float crumples = u_crumples * (crumplesShape(crumplesUV + vec2(.05, 0.)) - crumplesShape(crumplesUV));

  vec2 fiberUV = 2. / u_fiberSize * patternUV;
  float fiber = fiberNoise(fiberUV, vec2(0.));
  fiber = .5 * u_fiber * (fiber - 1.);

  vec2 normal = vec2(0.);
  vec2 normalImage = vec2(0.);

  vec2 foldsUV = patternUV * .12;
  foldsUV = rotate(foldsUV, 4. * u_seed);
  vec2 w = folds(foldsUV);
  foldsUV = rotate(foldsUV + .007 * cos(u_seed), .01 * sin(u_seed));
  vec2 w2 = folds(foldsUV);

  float drops = u_drops * drops(patternUV * 2.);

  float fade = u_fade * fbm(.17 * patternUV + 10. * u_seed);
  fade = clamp(8. * fade * fade * fade, 0., 1.);

  w = mix(w, vec2(0.), fade);
  w2 = mix(w2, vec2(0.), fade);
  crumples = mix(crumples, 0., fade);
  drops = mix(drops, 0., fade);
  fiber *= mix(1., .5, fade);
  roughness *= mix(1., .5, fade);

  normal.xy += u_folds * min(5. * u_contrast, 1.) * 4. * max(vec2(0.), w + w2);
  normalImage.xy += u_folds * 2. * w;

  normal.xy += crumples;
  normalImage.xy += 1.5 * crumples;

  normal.xy += 3. * drops;
  normalImage.xy += .2 * drops;

  normal.xy += u_roughness * 1.5 * roughness;
  normal.xy += fiber;

  normalImage += u_roughness * .75 * roughness;
  normalImage += .2 * fiber;

  vec3 lightPos = vec3(1., 2., 1.);
  float res = dot(normalize(vec3(normal, 9.5 - 9. * pow(u_contrast, .1))), normalize(lightPos));

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  imageUV += .02 * normalImage;
  float frame = getUvFrame(imageUV);
  vec4 image = texture(u_image, imageUV);
  image.rgb += .6 * pow(u_contrast, .4) * (res - .7);

  frame *= image.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);
  opacity = mix(opacity, 1., frame);

  color -= .007 * drops;

  color.rgb = mix(color, image.rgb, frame);

  fragColor = vec4(color, opacity);
}
`;
function Ge(t) {
  if (Array.isArray(t))
    return t.length === 4 ? t : t.length === 3 ? [...t, 1] : gr;
  if (typeof t != "string")
    return gr;
  let e, r, o, n = 1;
  if (t.startsWith("#"))
    [e, r, o, n] = XC(t);
  else if (t.startsWith("rgb")) {
    const a = jC(t);
    if (a === null) return gr;
    [e, r, o, n] = a;
  } else if (t.startsWith("hsl")) {
    const a = KC(t);
    if (a === null) return gr;
    [e, r, o, n] = qC(a);
  } else
    return console.error("Unsupported color format", t), gr;
  return [zo(e, 0, 1), zo(r, 0, 1), zo(o, 0, 1), zo(n, 0, 1)];
}
function XC(t) {
  if (t = t.replace(/^#/, ""), (t.length === 3 || t.length === 4) && (t = t.split("").map((a) => a + a).join("")), t.length === 6 && (t = t + "ff"), !/^[0-9a-f]{8}$/i.test(t))
    return console.warn("Invalid hex color"), gr;
  const e = parseInt(t.slice(0, 2), 16) / 255, r = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, n = parseInt(t.slice(6, 8), 16) / 255;
  return [e, r, o, n];
}
function jC(t) {
  const e = t.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);
  return e ? [
    parseInt(e[1] ?? "0") / 255,
    parseInt(e[2] ?? "0") / 255,
    parseInt(e[3] ?? "0") / 255,
    e[4] === void 0 ? 1 : parseFloat(e[4])
  ] : null;
}
function KC(t) {
  const e = t.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);
  return e ? [
    parseInt(e[1] ?? "0"),
    parseInt(e[2] ?? "0"),
    parseInt(e[3] ?? "0"),
    e[4] === void 0 ? 1 : parseFloat(e[4])
  ] : null;
}
function qC(t) {
  const [e, r, o, n] = t, a = e / 360, i = r / 100, s = o / 100;
  let c, l, f;
  if (r === 0)
    c = l = f = s;
  else {
    const d = (b, g, v) => (v < 0 && (v += 1), v > 1 && (v -= 1), v < 0.16666666666666666 ? b + (g - b) * 6 * v : v < 0.5 ? g : v < 0.6666666666666666 ? b + (g - b) * (0.6666666666666666 - v) * 6 : b), p = s < 0.5 ? s * (1 + i) : s + i - s * i, h = 2 * s - p;
    c = d(h, p, a + 1 / 3), l = d(h, p, a), f = d(h, p, a - 1 / 3);
  }
  return [c, l, f, n];
}
const zo = (t, e, r) => Math.min(Math.max(t, e), r), gr = [0.5, 0.5, 0.5, 1];
function ms() {
  if (typeof window > "u")
    return;
  const t = new Image();
  return t.src = JC, t;
}
const JC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUCAQMBAf7/AgMD/wID//7+/wT+A/4FAmYIAqIKnw7+//4EAisEAUgGBIYIewkFVhEJjAoFAuEFA8GWAv6T/gz+AzER/25z/wu1/w1nAggL/049BQUC/y39BrckAQQp/wr+AZYNOvx9AQkN/pELUvMFaAZTBAgIRgsO/7cJNQT+YgkLwRELIf5O/wlP/v79/q4IGAYLK4+kAQ1tAv4IdMpc/4xNMBF2/lQN2vTFAws9BLf9/3kJJgsMRF3+HwkLxfv9BVL8BHEN/9gMsg7cA/13/vv9OAqWA0sOofP9TAsIe/4FQqoF4Q/aAgsQwnKQAwa5BP0JW21NqgmY/f3Z/wkI7whGjAr7oAkLrGGf/JH8jg4zAj4R0Qr+xQ8VZv1Y/8O6//wfA/5bAT79/lQ1AGn8egkKdom0BgYOsfjtBAVDBoz9/zG0A238P/tsbQ/+A9rIig/HCEtvIgrM/1lwBWgIlmr62Q5qA5FndnEIXa+PthUMrqiRfw6SAodE/0cQm6UOirP5swuMCrEOjvo/dBVSA/79KvCgSBL9M1E/TwjUag/e//2WdPZ2TQ9ZMvfPxRD7aPpmOFqXSPu3pww5B/wR00wTgVf3y6dXW137ffv3c7GNj/icJG+4xvYQ61++CZOVll8p//uXzgyTKg6m/1L47w3cAY8EI1T7xvgKbkr7UsGBJPNsB7xL2wuvd5z3svmDmgipcGT8jez8oP0R6bNYuVpUxRn9LZVkqIijYxK7K/dZBtjH/71ZT/1myfz52fVm2WBfk0vxUFj+Vfv9/9plbfz3yl6VUl+flbNijrpfpfz5TZSGRKAI15X14pSt4vwQKMHOTQlKifz1sKW6A9u2A7R65waprffGcfeY/8iyUsFh3rn4lGERMUHJolveAs+PBdb5iZFuX8S8SH7Ekfe8Lwy0t5cLwsD3s2TzbHXa/478nLtNQ6NtstW15QvaKgr25FJm4vyXwFlPInIPId79dUr77fmr18BGdLHIS/mGx6dKw64L7v6k32XMJrWl8ELA3C70AAAgAElEQVR42gTBCTyUeQMA4P97zIx3ZjDvHGaMYQxjhhm33BGTY8h95sodkaNkXVGhKGdUri+SIxQ6nG36VUhS0rnZ6tsVfR2ibKlta7/d5wH7kMaTxlOVozEoHgU29/ayNC9YlrZdyVT+Lf/dAsDDc/xfzX+MLBa2LK23goK0aXhCxZ8qIAdXYj+c8zviDOtRkhEtRxNajHWLuCtdcfQqV2mgRlpDD6wJpKpBrGON27qa4nNeQOU8ViU0pZ2eCMN5mWO7bfR17Q9ItpsqgZJNJcJSq6cSWiV4q1zIDMmkqzAdpqT8gI5G3qm3YEyliPPG9kiwF7P99ghNn7zLs9EXFvFdLmlOdKBAp2ZyGTcI4JuBPYrWyGCYwgFwOhTmHeYC0zEDSp1iX3W71cqoW332M++OAYJUrEySVX0c5lzmDgLcAQ1yFVVOgQ5l+j1k6TEBidTUek7OF4T2kDYo2eVGwOrglKyGBXYyBrxFv9ptR16B+BJ0IFCsryJve0ZEuzNjLeEcw/0aK/kyku6JW0BiicnCBFptKAQRRNRrtmUV/YOn6GNMHXddsFf1YZCHMnFWgcyp2gnLOWTTBcVQVvM/FTgJAHl0NWHHzL0eqzuRXTDCEO03DoThV3kezhrtpNqKW0Bb3MSSAJMmmVnLEpexS8JrmYOr4KXz1cUmByty3N/sbEzBSP8tfGSCJ3caYDhymsPdGbwO4HAl/+PYDCZNf+H6kofkNk4N4Zn6NM4y1lJD7Tt2gyklnrR48dgbfHXgd9uzHvpamm3wKhcaLcawXWxL5T97dL7MeW3aZ7NDWksVZyZv8VQyjm94CDU7UjtbedqOCvB2DdE+wFC6a5JcEIgkKRJ8cfTGmW/2jMS5LEWWKiGY0BFaDNQ++2+sOifPMQ7CcHeFx+PPpcbzRoy4IKmVwHg/1842BwoGc2qlRVoNjCF59oXsrcBgVEP4u1GIX7jshIMqqPdbGTRJzMXcyyyiNG5fr5qFrUVntrktt4QdJugkr1kzNJCK1roWpTraix9JVMpZcsxGYsJlGiSyEgOFZzHy6YVlilnicmxUVkdX/PetzMBk92PNJNkIaLhmA30XPCrMuncWxOZK9kpLnqpYOOsLFFmaf2Mk8OH+BbwPH7HBX2KGI0Ns80gleH+Y6k0YZcF0sWgpoJA30BBbG59XaKyBHoxFtc2p9sFvyXqo2v2aRKN+1HLPshCibfZESAESYsLXmz3tT4wNMp0Wali+VPN93JIJaQ0AcXGrNMnSS0YASPcaNh32NhO0sWHKPhrNVpCBzyk4EWR/PnmKE+3s2cDO+YF6OddPNx7G4AIrZBPldw6tcss4bqzb6hBy6ccf3YaBSNRBFELueRFp7DXWNMFVAT9J1LNTntEyEI2gJS64oyKMKvSRrbpPQGE0rEEmHyqCl2oQravq51FwJXG0m/pPdRA6Xp3sSLdwGwNytaLg3g3VEE2eFESy/GijQPwmYPjwJT+bH/ax0dNT0NZAFQxyIqKzET00vUDuJ+T25QGCclaGZiJBxsjtz3YMZ0PPsq751h0ldwbZstMgHfnauk/7n1eZxEmYIPf5wPt0KJvg2V9bcYWGgua/Lvn/xG5q98tPLcGzHaac2+Cbs3niyPtGgfYgBT2OHgxvhGxzApoPxPoCOtUNCXX+ojW0ug7DOuyrOOG5GkWhaAzx6ZyGE8qbCPS1oxzPjcWSrG/ICNaNMKsra8bIlQVvmRQ/FY4WiHhnrVz/VfdOiOu6u66gG3NKogJ/0rGdbC+iPN1pbZ4HQAZODS+mC2z9dNBqSzd6mTQWKq+EI3fXgJQdqfqz6jY6Fbs4sWT/QkaLUOBnMhWRmSdrpTy769BcCql1UOmaqtFbDA9d7qEox8Lpa+TPXX+xm40jrB7EBK1lwu6IMud9xh7NBZCbq6PNN/QdTu0BVa2neF+s8b1dGns5tMGxQIP/+fiY60jZNp9n5D9MLm4NLWO2gXVG4xwDXHeHXMFEAITOVUGJRoBUwOV3miiTEPPzLrwDm74zFsW9zkfCASQvPi2RaF9qJ2HHWMJNxCHzDym6tNfXiEe28ZnjmHVGwlSvfgBo4afqcoTh4NNq7QQ1KrPJW+1uHEK1VvTghGa0DAePo8D6D1NCYgEPY239D/RQSUMxWJsAIi5KEp/3/9LH1wSTwl8/mfekwWyIhAwMPErzWxVSL7sFnFT1NqJ+Zb8hX4cqwyucXdUVkaqNeVL7abNtJV++aASn/d+Fw9qlVwplz4SqpVw5CBK7nq483nxbZ8p/8TtFwr8oD5uhq+lxfovd0x4+MHo1Wv14SJzqBo9Un1KCZ8NWfbA7jLeoMjnCcS8bjtKuxii0+0RPZlLS6NdhNKHeN2NSdCswa+K+aGFUTD9MLW9R7mhPT5i88TZvV5rWtuek07W/vBev9eJznPGkM8FrCZ53AB8+Ig7vKms99yRb5fpyoQssijTwz0i22O+HvjsjyGXpqseb4t4j6YW86PfJF2cnjmy8EKVF8sIomGUdVGBquOIDIlHsrgPkJEzw7KovqHB/kS+NPgs9nG9FkG1MJiA0GNwTyj5dRS0uiWTfSLf7jpL0ioLExajL/OJPkUbA6CIdKjpU6XrSY/6mE5Z1IDBoHX7tGx9fFkJZQPrPIW49pj9oUEykkiolzaein8mBh/C/0eAzYoFXHWJxYZWrv/ayPmcWsjfWyDy8ndnmPTldcJ05MaxOoIHWPcND2SOan44Wc1Oxyk59KHbiXwbrxB3qvAEA+Pd3zc3MkDFmxjG3K4ZxjHHfFXKNI691kyRLjmRCUmTQWnQo6XS8JNFBsTkqiRQpijalraTe1VPbpa1394/4PM+naUIl5jb9OQw4tXHsFyAoD/x8vmlYJu23hfowcTnJOXSMUdKum4IqKUd4HJguRiprd/Etw9K/NJ+UKE+T2v39ms2JRGhtNDxShw6kmZEdsr6fwVSzZUCgj/xK8CaD46MMqjtVmEE0DTPS7yo7so402lkAAr5A9TA8YbapYO+4tLHK+uBAqCsdrmkNB/tSNQxgrZRiBjhVSt904TQbBmEDW36UhZEwZN9TbWh1vtrLVYdkQKayJHgjO5aVftyaOhbtIVFjq0gImWcFJbXqPp+aGTaOzHzPptvWbli/tEz5BHs2WdU4y01sOWIdG+CPWbxSDnQ/KbYgddG1ggtPPUFvXeLdNH2EoslAveJl8GUVaLs6WWsoo3G2Q8KnvSkrNV13rJm4fF2jG2NKE3FMgjWPyCyVVZXDxk0WKQyzIcdGvhovfXwvS237WZN3PvX9Dh50V1CMuemc5AkPWBJzzlg8giqz/M3mICBajNsO3PSuByw3zV51gCTybHlfu/R+zXwVekhzN1C0gZCgqc3x8EUR5Mt8LndPRv3AbLnf2ZMLJ2TZBapthY8hSsIET5/vpH1T7/l1IKZl4pTp2eMVFT8J+1JyElnizM32GmBQTaTDJOwuvPCV3QDonD/6xjwgR6SA92MF+v+Xlo/BDyOZJpkM7QFh73uKxzX9hlDol/x5HVESyPM/HNyF6MwCg866UWXm9Jd2xsjrXyEKgjl11K41nEwzFzjyP0V9T87dStAustB/MkOwBaQoOCNG0+6dfSw2YIL2d+aAFbtewoPIATWJC+6il2nDFDx8Vlxg2a22oZG4My48gnrQEcDxOuE71wz51mkfvC3B8gjF04baNRpg6SGoHIAc+zB2Qqqn9yEzCXfpmpdN2kxdkiMQ/W/X7iT/RzkpBGvlGrx2Bs4pl3s8Akl3mRTsubk3x+CQH47r1ZNgECzf7IP0nV8lRUj1XqsW9+wNI0+oAx/lOGVsHcmalqdAqT/Rb+rp3wthEPxjXI6irxhTZc9U20OHSbYAJCX6MKHYW/P8XRlyam7KHfk5VTu8Tmebd889NmQ7hiuPb6bQu8inM/FOXkO7iEWd9hgyBVEErR+8P+Om2lFcXGp8DGe734LHfS2Pk7/pzSwPvdrkd7/NgVo0V8s5ir4NYME0CzGbOVoiygQKh+vexBN5PkUBa1bYInKhFqBi7f3FP9xdy5wmH5ByEL6YmlsN4H+lvQJBG8TSvwBmhcGUafV9uPlIYlkx7S81YuG+rzfC3Eb07PGLSnvKO1ujlkiGMoliWkYJ6XYpHzhP4z5odeImZqKxZT1hFN+arPz5Dw2e00ODXsBCGrf4jB+45ZT7UrN7VBRUYgrUJx0WkxNyMCSxRCIYwgyqxP8Zv9VC+6aiUgB0eIt08YI0fh2ZFRqSilUuRRvmt5jejdoSCjfaRFSca6RXh9kVAjX/OeC8Fbgdo+Ffx9K0zF8p4sLEk27kG2vWNThL82M/h1BScI2Kr8fOKkYdh+WXxAYVPhsD11sx5SDIEyx5CGwE1cQ3osdYdlEP3/AZPwvH8oc1WdqXU/OM6fdPELtY9JRSNHEepmC3ZWgsLZss2H2qwq00xxA81SAexVdwbL1ektQlJeVMZAGObIMXLK5lkb95dhjMzkc/Lq17iiAPa1uAovfIZZLe/kaNzRCUCr39gjN5YW18DwBEKdQkVriaJc5BKEHi5s3DEMukQIe9bStXDHyciJ0Xv84FSgb6OW6WuhFqtyjdjWTw/jt87MnpqzC9LTP5d6vqhMo3Y4u6dwfNAzL++6ah0G8ahltlcWiZPeGtcG104UJ67f4QMwOqq/jMIFw8leQ9VsbOhuOtjYqx9cXIaiBcng3fueAQPIz7hl+NJ2ltWAECQIyl81LAaRwlbECUyuuxtH/i/nb25kFilIsdm9q0qzIVxbO2/dyBPwsOdwI/A1NIhXctIgDDfKCMOLIhEHXE0TYiDRDEMkzWtQ9aBbO3WRIhTdI8MGpPh+xE3SEvZM3TsaSkSwo8aIp7vcBPSpNIUWc9dx2ihGIUfcCMA6h6H0sgzlYo2LzwzsSBG/vPLUKBRAIDClNo2hylJMPNHUF6/FyCi7vsPpUBU5f1Zryco/9dyqeIEYzdzRL4fhRqyDTW1lv0jlQjuBtfaUaKBPI7Hr/G7RcawKWd8xytCCHq0tGrABFlLf+tFnXvcFRUS9SdsaU+DOI67yy47KiS86yVHnkbvbnhw7R5+QMX6efQ0ueOVdVkKZ5o+0GzRYPc72WXnZ220/EEPvQ2mJs9umccvaJ9JQDlWujkWdH+bCuOl6OBriPwtt/6D57aofIHy0JVbraWRZDo7xiUeThF4JL+APjur4ftrBDOoDbMmJGGRvnl0iv71YPgcPgMSa8PT1ZvFkRgx3zPM6BFff0dTJbRNIHNd92hlQTTuYNVd2W6Pu7Myx+NgVOiFPeih7aHHc/Dn2tVtPIQZTLWhr1BSVJzNpZo72uzoDQW1D6KG7aCPz+193FdMxFtZ/hYE8idJqfsq7jHo6USnTep5tp8D4LWtSPqIJS9+U4cc8Ym8lJ94wuv8uj5DlIsflhtItJUoeNhAnkdEmUMIsLbGt6thjaw5suLGIwXg96aII8ttrigpcKpcdmqmOegLraj5h8AAQj+90zF3YhqscELTAFaWZuUAQMThYiUb/FNHAlDUttdbQAyP0iCmwvBlXj3bwwGkEZxh7Y8fY1TB+UUdVfjDXKAaoLYaWGWCmVzzxQxUQK7wSFq7btNyjcmKx2vXgKNSocDI3W0q3gacABoST1YfO0NC0OZ3VJ2PUAwXIcsOj7fJ6GGGw3hkT0GAMOIASUuHGB1NI2BNAAuhQtFj2vT4FWOBwA8AZQCJQw8v+fPYq97G8tFNng/7Ieg+y8KHAcI5wACkQOUMBG9bgUsiYNGzPHqgpWonRw8Fzw7aDForw4oGUkSvQQ4H18ev2sHhEVc+aMCAykFFh8LmGKQVJKhIlOdALmkAKIDBkf5txoCxwKdUAz0ToWOJaUGAeneA3pOjwFyZwApO7V3akpwjkl8oyOFoQqEjYfUC0cBHVCoAzuMMH42EggBKSJqxhsQWwBEu1doBqQKAktnbzMzwTSck8w4yPZwGjYeKiAjDxSHIz0HE3EjHAUOAk5RLXQHqIsOrysqUAHM8BmGZRVNw6Mi1QOeAQRaLLABABIkQAM0yABTbYCxYAC+HWBJ00xdN0r3YZU7ubbjAi0CrjFHxLMzaNEjFLz+4ScStCg4r358a5kbAtifbaHcTY18qVrMIdEEISdanHgWFdkBnM8/SEkTKfoHaS1aNTmZvNwAflsqqgZLAjBXyAMFyrIpbAVGV6oAKrCcPqAr45KYS/sfi9mObGiSlB0D+wALckOOCGOriDK83ywNfxUfTw5tHzwDGiJaJ4SU9holF5fx3X6qZhsRAQeNjT8E/kvHIKvUY1sAUZAea4Onlj9sE68EoEUB458HLCDmAB8MIw6JSiQAN73SPLEOfGU31KMYEYrTousmiyRtBTQ7ClaT3ANP6uFYKL84ahsIP6ssogAAK2ks+AYESgB6V3UYAypGWgKVqngClwwJ4MMim9fqCAHJWh0U5DQ7OVAdSk8dtdOMDCrNkgSBo/c0qyIuBDEFbkh0SUHxE+47GQEo0sga4YD6zesDkgAXwjKzLArVShiyFFWSYXkS3iSlNQsBUb4kAQKUESNv4bFLCMoBtfxJAAAACsmEpW4PjIM0DDK2ZbpZmBCz6FoZBgXsbtnLKab9EAxgAVmSeUimBgihp8IvMSfWAwTyz2AE0IhEJxVzmmrwNT0PncoCGQXQtXwua50xk3uPDI1DfqKHdklTBVYAioGcInu/CGIX1GcrkE1cTAHQHxBAprY2Ib/AxT4WBxZveQAd5CwBQsaMPgkdmgYbVQpqCW6JAP29BmFQDW+aDAMuXCMvfT9WrGXn00cmaaaXZvgDOV/4nwXQKgfTiEmisC6eemBCMrpfiElpnHRef3auBiVEA0qLWeFLEAUBBa5BCblqmQV/CgAZ1UEFS2EgCvpyuAMpGyc9BVooZsCBADmIoACXkboDAEwGNNmnABevAQcGNhceIVFDux3uWIIEPQAsjr5l1g8ClQpMAwJsOVsOFi0Uvq4cDl8PEVl0AAdaC6mFaVQiDNeeA9ECv47hpTZ7Qk1VRRwbdRax8vFXryTiYolAIwprBlZ0pa+KKl5wBU1lQRMCjFIw0l0YdXYDC6i9MgDUC6kp3+A48fLH86hBDQILLQBhZJ5hWwInm3QIHgYZEWvbV70xWqoFLAPERDLK4HM5/cWVKbX8bAMEE7o/Am2aue5ZF6OcLqqvVu8EC6f8aJbYBZOWXW5xKyBANEqjA6AskyIoAf5MBQGnKBpoPTABR+0/oFUHAU1VAKsOqV5NYgBBHwZZh1rUncwDCp7sSWwDQTYKBQdpCzmIrMgNN5QDEbEvW2QFgmmkKFOns0WDQamWLPHDNVGTniIfRQ5HqfKsg8Uue/ER8pZHd+ebUSOm7KgF63WiTIhrWg6oJYgEMYc0LhWELTvncXdcgScC3S+BnrjLYYsZK1PXQ4GJZugCuQAClGncjGcMCJwGMHx8c7mRwoVCQAMJPQO/MQBbcs68Zz2lDQgs/R85PVvPAzRJwGkC7MYIF/UDBRoHd1GhwYuAEoXDO6sFqIIUr3wOHGmZFK1zH11Bh8iGFWc8HgEoQwXvQRxHJDEUBTF/AplEfWUmWSMJpiEUvAcghlFGEQtETwA/BxQAeDBBt1IYKa4cADo6WpUuAAMg0w4DBroB1hgTiAJ/RN9REX0qcIM3Fb7b2AEEm+mOawIEXgFg1ne8ByE6fvMKVpI3IjdsAQETBiWUmjZGDQhjQTF8FgldAgNRNiACM16kCBXhkWoUp+4SP+hEEghL9k9wZjlmc6scT6cUqAASj5U5aTAbAwOEl3ICCG25JR4ffsEKYfUNKIkoY2UMcAkXDqEhrGQ2b2RrqaXjAx81CAUWeXVrAI4mGDm6bXtoAwYVMi4GSk5PUVtclscH8gIhvXQ9UiUA1unQH3gHBwkwq/5SRAaUD0GYbE0QL2MAiQbzlasuGxcYAwE0vhmvfgAe3CW/9BQfAiZ8Tnxx5COM3BRtf6U+K/tpYA+lJQO+LQPteW4WmCHRYyCQALcpWAIX8w0S5CQPI1seMBmCcEAegczCb/8FJpCzbAWD3H5NorMaMENXbcyM+SqnzMa1KAA9KRESUQB+C5mbhqFe5lVYhRtCGAK/a7AxcRIgu2O0PwDuLixjUViaEgz3FA0zqDci2tBRCSARPgRBM/NkGRlZeCFnHlEiyaQrgIgQyl66REcXNJslVzwimlyANCOKfrhClEyKOdFL7hiibMlFBQQg1jaLPAADCPz3BFXbRsbE1+oiTTkKCl8XnvRMQbUbRUgqR+ICSw/lJnACx3kIAhaIfB8W/BnkAGo4MoPAYEEA7RTnB5Sg3RinVnQRBQYS8wR+CaYzXT07BdYMDs8Gu44ABtULIyJHDl9wejIEAGo6jg0VoCpEOI0/YewzCgIzcEmGYDY8+rhtRfEyZQblSwUeDSI/X7sFhPM8FQbc4nCqKe0BtEIkeVqJcscyajxYOUfpyk2ANDYfAOmZD6zJTRSBDpgL/N5wnUqyClKcYB05MI1UBooALCvUhuAcyf9sJiv8GyJRzX/IQQCyC3ZBSzwcO9sXB4AIlRE2vh0HBpcF5grsAQPnqAA7obcALildiZ92TM224bdMmAwPQINWrPd+RCgHJxgDfwMv0YKRlEBHJnpxkJytDXXpANUtIEdWWmUSBAcJCSPkZZ0GEy8MDKof72cdh+oTQjqaLH0McSmDa3cQnJ6lQ0N/+aitLGabIwgrEzCvmmp/o49p5V0GNlRLPRbu2UehI31oa8rgCQhEB6mYuZpU0KMCA2URBW47L4EFCEEgFz8IC8xlQBN3t0iRJY+oxFKsIMEPAMBxbQZ5ChYjF24zfKVBA5UGcHmAAsQ3Zgwn9mMueQ53L9/rahkcB2PJEpl5AIasYhP/UBsSETYp00xgawArAIQDBEgPegICAY7xP353eEuT/Ty9fCWnKMRFNQQACMlLA661MINMsM2jlS7bJr8GyFo0bmasanYGCDqsgIONKQqkAGeBYAkHowDYzhhEM59lCAFQLOH9SCzwQAl9AQZI8AdUPFsoFXJbAAEoFp1vvyL6CQ8nDsdymYQNX0B+FM0EBi+IBmIX5R0i5ed+S0/eRBB2EQBmGBUDWLTLNyEHJKJOPiJaTmkSDpwQNgYCGQqA1LUHqtAwOYMi/of0CMIHTBipAIYEO2MKkkC1BQPDFD4Ax8nmll9bNkZ7bmwv1wIH6qkQQndEHQYPeXxUrLUnE28cVsctUWoZGjYVKWe9VAI7RFHZnmsoBWVmYD4xTWNtGZ9wFawr+wAASdAIf6sAjAbfucWuRAx4jNliQHDSAII30QYUYqZ4xSGTct2+WT1bCnw+AJcbNXKKSE8ZFR+fPATWLFkeHQcVH4CxT9sDtA1cAFADBk8ZBBaRRpJovyFHBAEoMwPaXYvvOh8bfQxDvxShtHKe4KQeeg/AXhcIJKBkjxwgXgB+PCAtPifdTwusJGdXJibqGQzCPyySkBZJpz9En7iGYiCX83wDeQbt1TdkV6IAAGxhL0wERTmBBzESBRUdFRMctnmVblQLazgBAsJXtHhcHCclXRoeywgpDynhVqyFWAZBYTWCEviIXzaHwMxdN05xDT5FAwDkBC0TbBYFo2ssKCNOTQkodAEG0uYMXix5sMvSBZxfQ3Egc5k+AjwvJQOEN9rFpuYXv4oFPCULWRr5AKprOYWuCATtAAlKBrcGkIICAd6cnwxqtl0lfz/5+hUR6q/mHdbFA68Qz8syO8Gibp8LetHFNF8tRAV0bEYORkJhTRQFxAMdPwUJMicmXlQKBmMsZwKoAMA1DGAAEQEnMhcBtQZgNggLxcHiAoCFFYEMAd91E7K+4vHKXBbOfJrOAG1E1YEkqxGsNwUr0w0pR2MitIQ5BlqXAA1atwMCSgBYnTuUtAxxNg0ApC4fgrhL7D5sQQM+pLcGg2RmHwIZNZPGC/cI+3Dbb8WlBSCJ/uO2txmjCBULLyHgqeRjEBLnACxYAkBvBQE2owNsMXy0kzWqADm6Oh7HbSK2kQ53AIoKAFWwN02IAuhiBIQgP30OBTUCcpQr5T2fJjB+bUd/2g5Go9sMv5CrnFlpfAWsi+mamCLtIz5VFsBrbb4AM42rGna4cyoQ2eMO3z8NN8BeNKCKBQp3jFrOL+zqP9WWCQukQGBjmPsTAChybv4zgnVctaQ+ynQlaFQJtTPSxEAsRLwRAK0pStgs2M0EBQtIBmKomNWHKHU1uDIsAg2kEHvlUc5/AgICJ34VcpskFZHSgGFydLhFCo6nCXFfWXgIGgY6R9CKIkFdswK6euK1SRkYAxdXV1Z+9UWpQQOzIqloZy0FIoAZfxX7FAEasEKHC04pAAbnGP4CkFFkEZniWC3xBD13ADNArAFjkW8nICQKAOvmzBI8y+QwMBUgcrY0WJdtSxl0hFiiptgP3hDTlmpdVwDTCwZ0BDrZS0eTQt5GALQLQQJcPsQNOkguZZwCIMTEeadTAyR+ijoz4Qo4VzZZAAAlkSVs6VUcZJepUq0Svzx14BNIbWLpMC7XFJGvfVpoWr+cAI4twmWi2I9wqgwAaiwDPtB9E7z2SlYSA4hvaKQ1nAZ/MnZ2kRZ5P60FIq16lCYDVwVsKAx1BqPRgzsOZvKTPIoBn9kCKTDuDtMFqtp2nRYWNRw6ZBc0MvZ2DYu0CLhiWBeCK9jSZwBQ2CySAafnVwKo3rdJXGWGUQv5gHlWsQQUAFUmWXi4AQNX/oqvEnkEUKG6tlZ9QkzDT1jLpmR9fWCg4wByAi0AWeNCBgYJ12ItvmMCNwrVZkYzcU5GBs8aT0XcqZ04IN6FTgQuL9dZDbIa1W0ER64dUb07oB0eE80fZ8/do84xBFGBcwGbppkJq530TW9GuGMsjLJLNAWrBU0KAKYedUoDH3QB0iGTAE7OOxuOVL8BIAMPUxKLA7HUBjHBHEQvFD87HYE40ZqAAXEF3+EI/FQAACAASURBVAA5VAcYSqwlTR4TFY8AFHwtHQXQhYMABwj490xjbrxCQRY1FA0MBmQdfy8KK5JQK5jIhiNb0AgjOAP7zB0TqcsihQUwRXSdVE4CD0RhWQx6EEYLhhYAeoE3P05iEwbgIiTEHEUiq1SOJcmGFl7Xv0dlavCgAliw5QDiemOUAuaucf5lhTXGhc5AoiqoZFu0WZDr+oQYAoJy3YAB2FsNETiWuCXLoc1tIQasfWYAMgQUTgYARFslHwpiRDUs1hBRoB0bQ7+s0NKTRd1E/RCeHiCeUK9JN5EAdJfznAEq8htHb5ADuUQCf8tY/UgQKaRCDSYrhAiA7UateS9WPksK2cYTfUrVpCTmA0SUrFBkXh0Am/veTf7P7Lb4DU8aKbKXz0zdwW3XchzRimAwkx59hHaKO2GnMbYaFW0YBYkNxWp1SEXiNNCm5g3DNIMgtw+ShZNpOpYq/Q8AswmkIiOEHX99N+JMMAC+JKYI7yrXvJWhZgcNbtz2wQA+bk7APAHTMxnOjSWcrcbzX+OZWahITJEaSlVq6X0QGs2kD7jsDlU8ixd3KQOKAgHdAVMANmNMOIuMjEusSjd7Aw4HHBUmlmJgCkxWYk4Veq5jVQ9CFDiuddoVjHF4dDYARDwtTkEhkSROFdWSdDsWaCj4BExuaA8OTiCxBNJIORyAAoMOTk1iT5wDLiZJBrs7VV4uAKKQCxESEKAfymPGhzOP0pVhBGA8ol5iCxpyOoZZFCJJRRXFTm8sA7PfEnuAEgFx0kBskwNQZhyzMLaesB4SdgBuQAKmhMetRhYAICQAP7EL9S9J8rk7xDAYgIxMIlDWBG0DAW8BYAdGkayHGwwrAi4b/r5sA0rCezgdXjtnijaFR5eSBAz/aVQ+mggCDxmYem6hDQtN369pqjuUEgAYD0BSUCT2CaA0BkkSSiDM6jOEQDOFjTDiIQAVX1TPI7bMwK6hF1sFT16bBoFTnVAAFcgndTYODzc/52xpHRZyNxDDkQBPhGMNhklGAbYDJLs3NFGGnC8lCpbuAl06ZWbRM0QQJgfnBAVVCyqR6L9SLIHQDAVNGpYiAIc1AJk8AIAA0TfDOzNArLrhf7hEtVMnMAEBCT81VCmAL7wJ+AKFpQS0Xx0tbQDcQgEJZzcdBW4AOQB2yAAFEeGWwhWAatIHABBbsCfCPlQAikYBjxdYEHgjNAUNL8OWdGkAXgMfOQDJ05gDZyTItT4pIibKF7+xXSp4Shfkxy9Vylsra8P4h50uKHAGw0KZJbkH2GZs1xvMPI3ddzg1sNxcsWHdA6IsCN0GeRJtVDCuDUWwaQAlQj0Ad2Ca6wMJA8+cfEoKOwP0EoXGHg6EdQUZaed7cUveOVMeswMfGy++GDwFsSsb6S9ehSIqVZF71JbZh6LBFLIRDiAACUrQGh3yN1sIIYIkUOeTKl1MTeQYCiMBFATQgh+ynTsCSAOav9AxNUF/AClE0gY7BIsUJiVNABBFJRT2FwgAslkF4mtM9lMDI6AGHrsDBEMhcPQBAnwmdg8o7YkIzxJYkJ77A35vQ2M8AOfeGivv6N1CumQj+RUGPQOXLeEAqgIp1Ig6o3nGdRl8PTUJyQFDEAJ/KNdr3gkIBywcNHDoiAfNW0CHClyw+AbbsU+ruOwbBAncmpU0WePmFgtJd4UAHD+zLgBSQQAugirUKWA8ERwyAjfDPLchDh3EdJRQgbHANWS4bDX2QWzJ2mJZh18YFTBxVgJsBe9gFSoE7VZXKLlzBo5G6q7l1hLxmQMMA6MLWH9PJUb3QgGZC4SBAx0BINreFj822QBjNwMgk00EK/kAtPUvcwxhc8cPRQBSsLgAbRwSGiMBLa5gDN0OekNWCnc1aV9sqeReuiznCC+PLMjJAh4xhq9iAwgOI3IvvyBg2TibaC5IlpM0Lkp8BdcGL9/LB3D9u3oJVwBZDSkkPQIITsjVS5NtqzukBoSUItLaLUeGQlRph9bxmRwAOCK8upGsTd/aP9AhFkwjBnErDQYAAT28k+5LG8IaPTLcvCciEHIbDW8PS3F7ZABuCV2xjgQ+9MHk5jktIvwbTCddCpWOGVBD4QIOfa+MURkdX70FKoRNAA08ttApUKfTq7tHm6YZAJYNRtEWHxgn4AKWIzQrKipAgSK8tk9aOQpky24DUkQGZnVQoRUBP0NDRI/UwgIAMfAoEBSLZDEgLRO1Br6SV38EF7rXIx/JAQ8E3EALBQcSgN0AFFDXMM+Lcw4EFpWDb2knRW/mRYYdfAUdfQLwWhkUCJQyms1ksgTMpHhbAHil+gEBS7anHDTwiRpCrmULHlgkaWl2VL1GDsrg1apysgeLQcKytiGpZUOcDMqz7zAAQwIiuAc+MjjuBK+JmoanK95NcXD4JyZd2Nh5dmU8IRLLDQdeCTYLvtBn6g+P6dw9JTYeVpoGi4ogu1N/K1HYkQC/YBpZAtrEZABeIfY1qIPPzFLFqQ4DDANRwxLNOQFjDca2WfiWsYh/pDePNz8H8AwduiJsSFkTWQRoen8WGw4Ahh81nyQBP5AGhR0E26ZwQ6DHcrwHTrJhA8yogTgLH9PiAFsgFGUJZgB2SLsyWzN9ASa5CB0yXwEJCam2WKEPNT54YlMBn+0OZwAdDwgEA9SnqxNDFoEDQT0NGaOFEHRADFm8F23JWUQQGhMCArWvLhNCfHChBBcNC6QNK40boQEAO+lRHA2CUxLhZyStpJ7pkDc/Cj5S9VMYHgC1PkR/KyVZmwEdKqJACDEcjSYbdxq+AKHVJUhxUMLPdHUdbAACCP33H9UAA8AELkYySGs1NZFvoAsnLu86CBTGMDtrpS3xOIHVHOVVSwUjxA3XFS3diDMPLbOzB9k7Wc9QwVJ5rhsB6E8S1AAGLXom2BIGMhblrl1bFXIYjQSmRiUtBVEKRbNsx4GKS0NiJC+HPpi9LQ76mjyf6OVwqBcGUmYEXgMTd2A6HWqzv7eGEQxBjkcBU/NVLCeshKpDLHJlq2tKGXeSSwFCJS0yAwEd0QEQYULiWW5o1uMgCv2UbVQVInoFKCv7FzYEEgB+31t4HjUs6mheCcGtRwxkMsMlBBHf1b0ADh8dZLtXOJM2kDUSjgxbWZmpAjISVgRbC4sCJugEjdR31gAp7hMAnkgTM5YXSQOZPGsHOAKwefkwknwPEBMqfn0NhJUI15ICbM0TWmmseAWuYeBQiaoWCRAA1AKbxAo92wPXEUQw7wDfnSIrnG4CGV3YXaBnPavwW4OXApQBfZxDwQ1iC6MENCEJAOKZqDFUARg48iFDTDLhNwWjqH4WHAE7PALJFQV7EwMBmYl4Mx4WDqsCAVgA3AQC/Ncp2LMA2aotBnxeNApPDKe9EVSiGS9JMEtKwJUIlwMUDac5oIEPRnapEikLMwAhzQUgJ3QiA/CiOgqWe23hYA0ZAglKDSQZOAEOC72KBJoavjfOPF3IWRciaEYtEzhLKwC2bklkNZgpRwI6WBtPAw+npsDsD6wU0TJ18JCbBy4aNIHPCstFAhRbFzkDOiYSlyULWoWJuUmHMaMPQhe5B3kbXkVL5bZfW0cOMzb+WAAAkGLfDwBkZAAVpGI4umrpsOchSIGKAzcBIjSXoBNokAlDLAFxFpsCbPTQTw5xswgtiyR9QVUGBDzWTAaVDqEAbCsATiO9za1IUezkU2NfcW/LHFaJ0Z8ACSpJVAV9AnL57hOjBs+jBFaPVyvne8dqLUfbF8GOEKVCDVsBLgxdJgBoClkAqUMmZS9cZrUUCgko/DTSHhYGPC75Dm1CIhnzGV44TgJ57DncEMTOEBWMAIEzFCASqi8BMQDtz2WwAChwVFEFYF5qEVJU837Uyx7fUGxE1YBGgu1N0nEsGiYBARCJGiv7nw4CCctmfyoGrnruhwzdwJUyHQMCWypq8T6caAAE20uVHZAlymbvOgSEAwDthEIcfAVjEQBvBRkXkhxrAm2ikI8RNt45FNuOoFokRRdegaaQOtexKJK1HiUAJWEDJgZz22IINjqFaReWG/QEzfsCRBPGyDdYRgcCrzIksE9ZRSXiAdKtH2VYAuzuqgMa3rADi5QGUH9vDzLeOQIEWwAJV4ubXVPDh5EkEzIVBjBkdMcxmAdVxQcDjxzkZr7HeTUzAQ3p9AaLaZGNHWb007EKkvOzc+9NfzgpIllL5myLFbQLygM4XgYF1J2Tvk0uFwIOEtlkSmFFA/yLJ80NAoMAXcbeHgxwl1jcouxbixCh2lPHTFx3qtaG2fp20wrwOgAL5yMrCgRJvQQtg38vXwf6doIW284PZBpHpsBJPzedw5AHCAEMS7YabRQzbkW6L7ndADPqNCkhAZiLdAMYfiZIPOYjGAwGD9Y6vGuiItqzLShPPJ6nT1V7ZoqepyOwL/dvFVxifBwAiHaMARYTQUxgAgACKxRvBh4kjk4AAwUq3gAAEeZC8yAMw5i22C0+GDtgBDwBXg98AwkROUA8S8YCBF903leViZjUa90cdTEOBrwDXHw1Bg8SIAD9EsSgIQwFDEcasGfBcl/3AGhtMD6YjLVaO7gLSl0BA32wU8o5AecqKYOtbh4BdQNIjo0geknWgXWS7wGzHxZ0A3NqHQEBcwCtNqlyt+c0AOkASngGAApBSYNSsGARwxoqz0NA/ggLh2AmkXEAlkauySUDu3QbBNpQUzkdYm+uYokbAjUmTZkCjHh5Zg4uAQ1OY2Z3mUl9vCwNoKYnFjSlbmiP4RmPUKK7eZ0DPgnn0ZqDmJDuA98yAQ+aL1PCSm9NBjcyE3BMmwCmEOyvBOilD8z03gZJS04dEK5yxwBKUnLULgA795xy0+1MXWEPe0MSTWdOSllnH4JfHofxViJmgMVAnbIMYSY+wAUMGScQ1g8AYqARnwEBAwBI5pMFeFOj84MHBNMeuweIjvkDExPKh9omslGCSVgAiN7YEB44Qpp2LiBjPdarEADOBIQdaOdMeA1XMJ8TpvwQ2tGMe61kiAcdEAoCrtBNJ2/Rhs5WfILCBiM/lIG64B5EVH5MfuQS8x03Za2ACu7cEw7NMQ8fIgA9EhYzJYmjV4svwhdqDI+guRTTWvBAXB1UdpDG1QI4DIY3NMjq48cHAg/PbAeQEFlY8rE5ClIACwBx5RxSJp0jQxFhGENVSjUQBQw2iMOKTHxkGjWS9SnbArELcrY0rwyMZT8ShykQV+FwUJMuUgaIWSeyRBZdbRACRCCiiSAml2AEGGImDUh7HGwsHG5KaxaGKsADQ18qC6KJsaYtDUsAATMPnDFfNa8EAH09YH2HsN5GykhFWAxNkwAGCSh0Vh/nMSOlhmUY7RVMBADQmDc6QPpXOVQoBbAMOyECuunUyxPgsQ0ETnBwRXQBAD4Z9IYX3tRMpbUBBbEOtydiCAIYue+9ssJjHgR/2AeVIIGbAmlLYUymQyRwZQTXBlCWmgNl48hVM7QSIL0CdJNSu2lFnk8fiZUZPRFODQCEH0ExjxJKSHJHTWlhSvJmIZZqczI+ADBfRQ6D4Q78UtkAAwsBw2I4MWsZlxhDLwD/BwD4WAUGCne4shiGGyeronSUAQXP5UkAOZ+BfwIRRANQS2eyNSEDcP67cPQAAA5dPwTl5Eg5FHSFGiQZF6BZBxttv2GoyEQFB0xSNBUW/EssG1aRABX0L0oXTk9w9P/nm+ZVMmhBQhcIGxhYOHHoHwNzJldxFQB0KHapYgBDkY+WKIQBBS3cJQYOvmYAR0qKAE8GApuhVQDTKawrE0mPBQG0gt28GoU0YHBDwfqHHhjbkDpoSWVWA6kEs0e1jAIvmkyegpM6G1IBXUzELwUOM2kAISwmADRsQ0MwYxeYL/A6RQABzliwKBgSK4MIxgogDTzGA86dDMa+XUMCLkazOuVDGApvbCfg4CQac2iJU8SvkQMoMrD+PQICV+oinEEdBm0iJT4MyAhTZgFYEnkWnG9xn0y74ilvXe25Jbli4UIJQAJDDjXiA4QDDSiVdiMi/rXIbh7VAPAPxA4UU/bFj9kDQwQKkZtHAlmRGwAt1n4c5uKmg4kORgd5WBq/V17bNiFuAu4AXIauVmwyb1tJ3gLMkljMvYJpCGEM79RBkhofAX06o1gaLwLwTDaMDQEFuzw6UlE9ASVc4VhyijlwMBC8q5TXBwY+MsgHe0VJoAJjlgAUvh8zAAcyNgUYl0e7u2JdGR5GbEOPBQRZBIQBZnrZAvJGzYKVQg8nTwskXgRp1hvgBRwEizz0V35fMqtosBADNwJ5EsGJBAriES8rADV+1ohgBwcBL3YBFAiISgIAAaiaHtpdDgh2Oj1Dg8G1gzdxdGkYQwW7CQCTNDW1GGtT5qJptqfhAAM2bhqP/YwZCWvDU8wVZmt9qQ2yMo6+KHLZ/dslAgWy5BanAIcBnb5hcjI7WBZ6AqTuASP9LHZRiHh0WQ1dJzgqMXGNqSWF7duSohXEqt3EAck4ZwUVVX45ChZEIBYeFnpOC5wPIwA/Gt0cIcKsoqTJPZ1UTRMBWA9OMqWcK8/YAIvfnzBhEwXifwgthgYgEecXBAsQZSVfVQ0ER3w4TgE8iE6ZEIwoFTYzUwGwt2El03Wp4Q2IALsOJnVYBGZdKCUBwQAqAFqlQEZJRbtrwqcgXlIIUx2NcEShuvIBbgq0XVCNBAKhUT4JQB/OBgqIf3FzY6V7OyKAOAoBASg2GU9GAA4AfSMKojG0m5gyqAe3MXWTUgDAAgxFtBcbx3gCmAYBRCEIaWdBmXYDgQdPhQMSeVkjt+IFTuC6Ij8N8+cIOhMxFvN0DJU7rf6eCTpJ9QNR1LoQQQMgEY26fApxVC5HOGr9sKU9GORpdSRjAW4rUEs3GgRFo9IJvYmKIxn3EuAwADMMjc+dCqyePSGpQbkhEXoVHwb9SJ5eMR3zbXZ4JW2BqZVw2l7pIXRrAhSAEAVRS84yK4rNO2l2wNVcCFW7FQwbADpohDhH+ALV5AgD4rQpGReMQ9tkmLIzbxPPHStlIdXCbS1hCEj4yktcH8cO9QspuSFFc2sfFMjhw8WBfwH4AL00SwUDOthSQB54xEsG0i0ACE7WuddaHtLJZxcCSUEYrDRF7xRceFE3AC2x0k8HnShj+8mn1AICDQvHh7yrNLLpdSMBOF7XG0MIKTpg3XePZSgxj4EUDQW6ERczAmkHACMqRzp7jwLBHE1J+9rgGE0jMKR9eAC3iUeONakBJAvMALJ5jyVnHDpo4HcqIQQqJDKFNBhoGQpAAb6m34tpMCwA0p2et1pv9wIkr2yOkSgpxQLKc1IqDDsWJgQWiFnICOdG5B2pQ1FQEqBk2k0FSQ8oLkFGe38tCE61lDAABt0AMaACES7m5uDMWkOQJp0/Hg41dp5mhRNyv+xrYjkRExpXAACXB7ToUYIOVBcRGpltVbe8OYgfXFsByY4hGhkpkyoB7hcF6K0uvEqfZ3griUwBA1c/lD66CQFPcuK8UwRxQHrjeyZEa4w1vRQqYTgxzxgQEhpdGRUUHRNnf4vqR4ObYGCWlrtDMwhWI0ZhExohPDYcfbYDowruYrcukRU+j0IGABZOTatOWA6DbwRHWnODFRc4PImVa24k7ATGb0kbQpcSsL4YFbkgARWhBHl6vFpBPRSyVmOdTmIXefPQCLgLUWUpNV+MAwdW3p10p0eu5BxC504BVIXy9c4JWFeJA2BjBxPZAnIBVQAZhQU1ADH4DjnMGeNHLOhzGY0L6yQtbYoXAJyb6u1PF7UZ5yAt4JwGYldYBd0VembYLQBnVTpvhSA/ckID5KwqDCHKBp0YAiR0oOcfXFD5GQY+oUJH5JqHAR8UBB9QqIcTPwQDE/cukJsaOVIbAuUBaxEVKvd3i2+Q8BAfV8nGOwKY/DtMAgkLMOnoHpCTARcGXgIUhPyYDnVrAExDQSJ1gGIMGgtYAytm5mAuUxtoB58TXTtv6wUAa0NdRSmbkMUEc15QPzEmWRQCSiw5cA1VoRQfWtxc+T0F03kr1T9b7QirrbwAXiw9TpIQLwMRz1BPIlLVz2C9KLQez0US9jMGnUkwCDWWKKWkjQlmXDZjQFxL7nsoey5VQwonAARTHV+7T2o2FlIjAghKc4pLVFWlP5YBH+iWBrccMUpWvxfLgF2Uc3GlpxBgKSA1C26DD6lECOuPBZ1vBhzxaoJkOfOGBXEfH4SpqLmcqQgHLqpA2FJvoLGFBTTtEVwPgIAWD5czgF1YKwbKK0omhid9pnsG3sdBFgMCnWEwrAt/AAxsDcl3PWYuBXYZt/VAEHZFRyu9ERMlZA7aGdcCBgAJCPb3D2AtAxKrHCcRQEh3PMxxSgZzhpKkABTYngRSabRPLwAEwOdIZ7q4CXUDSQBW4y0NAs3GAJEzApI+A3ch8L5wJxDHl31utHwtomsfuOkYFHczQFQ9YpEkspI90XQaQREGQDYArfYUTT1n+WnEVRlkMK0YFEehewNFXB9Qf7NnPPRJozTB8ggFWhokACEeqsVTFD4NFOtfQSlGkYutE1BndA5zBjM1zCAsKWfDYBYCKsZanqqU8mgF3ANrEAI/HOsHDjgi8oycUYmlahbDEym+E2RZoJ7CuZQvFIZ+Jo+CNsk+dvgAXSsCovgCRS0tyH+aFYaA2V8ApQLIFAW2ZfgiAlIEuwIO4Ap2I1xnL9wAdig3UgIGf6YE6DbBBHsBdxUYPHjSAHNWkIRV4yToTJo9fHKeIa32X0luKS0KMxP3Ko1eRBJCWkIMxCT0QmGFVau4JCE8fyjMBrtGXRFQD0ey3ylvRggAFQMds0jrARM9SsnGPBPwES6Nxm00yQBywllTABaqCdwPMUoO5Qd85Skqddq+OgvwnB0cAXVO92EWHA4IdbRkNjHKtgz1P9igRVKWJTcjwZrR8wLfBG0HCOFOoHq8bxdTQkAxKg8nE1DGHtA3kQgro0sY9PUYwjnZqgN5FQeHiEMAFRkElNIELGVYpCzs7psuagceOx6VnFMNPy/MDQe9BwEqPVUNBAhc0tpXAFewAxZ+AKsGSriss+52JIsIOj6JVHuNtiQnblFpaV8ED8LHvw4EmBgHL1UP5gNrBQ0SQdz+AxUBqnMDNuBtmgbCMweoGxIq9AbOQIyvOd0DVEUOXzQAcJCuFF52j5Jz5aHRQ5YwMny8QQJcFYgAF1sGkRMQBTDDzDdfK4SKytaorCm44gSOswA1lc1IVWqFuh+6x3LnBSUAE2QIWigFHb3YC1BVDwWdb4eIFzrNRimjqSKpwzltIIWEdI49Mh06XQYKBw41oWjUAHwgEoKXEKItKQEDAAsANWhxAN8K2QR2g1UjAts3mDkh2jA/LHK7BM5OEQ6oBqLLHj0aA3U3MX2Kb1wEBNIHNul/ogAnOGEERQWVVxvZA01dshtiBA9sUJqjJEs0APzrxA5TLhld+ImbOIIBSAJ5CsWQ9nwDE4EAmwYAFsoF28p6D1uFMYMFfgYtE6qkNwAATiwqvE9QADoAAQBqF4wG3QAumBeeN0klpFMCJGmFA9QrBAiYUiAsAFvNnm/HCXOBHKIZXyFlQikDC34xeT4IqQES+kh8NAMYAUEAvgB0HiVoCiMIbI4DGSYNQndiOymW01MRHDwWzs/FkmNBosBbZlMJj0LSAQJUiguvPQAHSxcATgAEbkceKlAmA966PQGGvYaul2NcZG64cOS55stIjxIVAZyuYlwBAVoJLrV6cSQeOwLpDQQb3gMFBUOMOKCAHgTAJd/0fsZGRCZz9eoBhQZ9Lx+BmQgjUNWgNZEbkzIzJz7Kn22XMHV5p49UihqXk6EAeqS6kDqzQcAcjElhAwsAIw4bkjXuBXHmkwJFAT8NLgCQSA9fAmoWAII8yBinKIFM5qNFDVITCBY3q1P2BKNnIPIJoA1wSGtOVkMVL0wuW3qGmRItFEJdIwMNRwI4VlZyFA5ntqYu3bk8FuzvX73m+0e8MiSObrkfXIS3PqwgW30csgKb+sNWNAqkAUAHHBcAHisPF8KyNVwdjib4CQEEqB8BBk3RmxoOcAYqEdnBQnikHk+GCzazSTmuSQXIjV1IPVWWBJEz61wSEA0AQA89r+DVIWexHfEtWzwaxWhXkAxh4jFolqsEVsMROEk9ijfAAR5jTmj6exsBtYRyIiMoZ/4tVhPlPMTKWBfLMQIxUwEAmQxJGCMFSwPjJwj2GUxYFhcWg5u0ntEASB9dCwNnhlcp7wADVo2t9ZEqG8wJWw3bW4IBpoWxDiGWcPxTjgYaN78JGGW0oA4BFsFpqTAKAAQ80REueg8DlcPFnx1jXTAK5NnxwgEb60cNmUb1gDo4IDUGyQgCAW8uBE8AClg+kQEACiJyVT5uW8RBG87AFApFlOwHAicmhoIYJ5YKAQzVZCfCeuuSnEUSeZckEiordDgJUX3LlPazKnfNjiIeqMxVZAZZADTEEkZ8EXGL+gFGwrjaTHyCEb//H6AY7NQKJgsWLAEZPFuLZnZGRnQtp1EuJRVuJTGdca2pHwCthB51+ZgAuXp+lRMyJ2SAgrYB6m0Q+/4YDM6aKGi/fSuVCQVuWtMBKztbqWEoa85PVdo7zihmsFxiXjnaYQAUn5bbKOh6s08RBhjdaU82QD8htgUalV8OGmIHAFTgUJyiMgTgxg8fON4ZAaBIgnxJeaqd1gRvBBMITAdGJWRKWx0lAVHR0j4AdvYAdQNaQJUDRHlHml5cSLMjaYxAqHmbAaTZAZcZ5s6JLJGip7sCXaw2LCRnK1YMO4sFRAgVWgfXMfc+zt038JeI6lkCDQU5yCGeZRBOA9aMG3e0AZ7cmQmKjgeCWvmJnn7yAwY8uoEEL1wLBADizps1VFIzm5UYtBHFT5Qy46UAsQTBZCwPgljNPekNGEwdic0FR1JmP5AAhShTl4MCWwq2By1NKlUqzQQGAidkywDoSgYGtQ8JRdefJLqPjw5YsD85GiBWlRsDZ2GzVDkCvRSyUzIq16YUXEBLd2kGn+rLIwAAAK1JREFUf54DD3C0WwmGPi9OSjpCA0A7fFwUZTm0ktDZLl5VXmbFDDQACl7+QSry5QCM2bfNC+WAFj1LAzLsiwEBaQCW/1EGcMN/tG8OViQtylulBUxRADYm5SEBRAcAARkeMC5iRNgZhOoxnz4oHApa6gD3ASdbmF188wxpDZVKUL4RUhTSSRvrQAZLDcgauImabgJzkXIaALePAXot1j6Bdwe3AXoQAnXMFVuCApGWbjuRvTu7AAAAAElFTkSuQmCC", ZC = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
function eA(t) {
  const e = m.useRef(void 0), r = m.useCallback((o) => {
    const n = t.map((a) => {
      if (a != null) {
        if (typeof a == "function") {
          const i = a, s = i(o);
          return typeof s == "function" ? s : () => {
            i(null);
          };
        }
        return a.current = o, () => {
          a.current = null;
        };
      }
    });
    return () => {
      n.forEach((a) => a == null ? void 0 : a());
    };
  }, t);
  return m.useMemo(() => t.every((o) => o == null) ? null : (o) => {
    e.current && (e.current(), e.current = void 0), o != null && (e.current = r(o));
  }, t);
}
function Uc(t) {
  if (t.naturalWidth < 1024 && t.naturalHeight < 1024) {
    if (t.naturalWidth < 1 || t.naturalHeight < 1)
      return;
    const e = t.naturalWidth / t.naturalHeight;
    t.width = Math.round(e > 1 ? 1024 * e : 1024), t.height = Math.round(e > 1 ? 1024 : 1024 / e);
  }
}
async function Wc(t) {
  const e = {}, r = [], o = (a) => {
    try {
      return a.startsWith("/") || new URL(a), !0;
    } catch {
      return !1;
    }
  }, n = (a) => {
    try {
      return a.startsWith("/") ? !1 : new URL(a, window.location.origin).origin !== window.location.origin;
    } catch {
      return !1;
    }
  };
  return Object.entries(t).forEach(([a, i]) => {
    if (typeof i == "string") {
      const s = i || ZC;
      if (!o(s)) {
        console.warn(`Uniform "${a}" has invalid URL "${s}". Skipping image loading.`);
        return;
      }
      const c = new Promise((l, f) => {
        const d = new Image();
        n(s) && (d.crossOrigin = "anonymous"), d.onload = () => {
          Uc(d), e[a] = d, l();
        }, d.onerror = () => {
          console.error(`Could not set uniforms. Failed to load image at ${s}`), f();
        }, d.src = s;
      });
      r.push(c);
    } else if (i instanceof HTMLImageElement) {
      const s = i.decode().then(() => {
        Uc(i), e[a] = i;
      });
      r.push(s);
    } else
      e[a] = i;
  }), await Promise.all(r), e;
}
const Gt = Ke(
  function({
    fragmentShader: e,
    uniforms: r,
    webGlContextAttributes: o,
    speed: n = 0,
    frame: a = 0,
    width: i,
    height: s,
    minPixelRatio: c,
    maxPixelCount: l,
    mipmaps: f,
    style: d,
    ...p
  }, h) {
    const [b, g] = Q(!1), v = pe(null), w = pe(null), y = pe(o);
    le(() => ((async () => {
      const E = await Wc(r);
      v.current && !w.current && (w.current = new RC(
        v.current,
        e,
        E,
        y.current,
        n,
        a,
        c,
        l,
        f
      ), g(!0));
    })(), () => {
      var E;
      (E = w.current) == null || E.dispose(), w.current = null;
    }), [e]), le(() => {
      let C = !1;
      return (async () => {
        var S;
        const k = await Wc(r);
        C || (S = w.current) == null || S.setUniforms(k);
      })(), () => {
        C = !0;
      };
    }, [r, b]), le(() => {
      var C;
      (C = w.current) == null || C.setSpeed(n);
    }, [n, b]), le(() => {
      var C;
      (C = w.current) == null || C.setMaxPixelCount(l);
    }, [l, b]), le(() => {
      var C;
      (C = w.current) == null || C.setMinPixelRatio(c);
    }, [c, b]), le(() => {
      var C;
      (C = w.current) == null || C.setFrame(a);
    }, [a, b]);
    const x = eA([v, h]);
    return /* @__PURE__ */ u(
      "div",
      {
        ref: x,
        style: i !== void 0 || s !== void 0 ? {
          width: typeof i == "string" && isNaN(+i) === !1 ? +i : i,
          height: typeof s == "string" && isNaN(+s) === !1 ? +s : s,
          ...d
        } : d,
        ...p
      }
    );
  }
);
Gt.displayName = "ShaderMount";
function Lr(t, e) {
  var r, o, n;
  if (Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const a in t) {
    if (a === "colors") {
      const i = Array.isArray(t.colors), s = Array.isArray(e.colors);
      if (!i || !s) {
        if (Object.is(t.colors, e.colors) === !1)
          return !1;
        continue;
      }
      if (((r = t.colors) == null ? void 0 : r.length) !== ((o = e.colors) == null ? void 0 : o.length) || !((n = t.colors) != null && n.every((c, l) => {
        var f;
        return c === ((f = e.colors) == null ? void 0 : f[l]);
      })))
        return !1;
      continue;
    }
    if (Object.is(t[a], e[a]) === !1)
      return !1;
  }
  return !0;
}
const Te = {
  params: {
    ...fs,
    speed: 1,
    frame: 0,
    colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"],
    distortion: 0.8,
    swirl: 0.1,
    grainMixer: 0,
    grainOverlay: 0
  }
}, tA = rr(function({
  // Own props
  speed: e = Te.params.speed,
  frame: r = Te.params.frame,
  colors: o = Te.params.colors,
  distortion: n = Te.params.distortion,
  swirl: a = Te.params.swirl,
  grainMixer: i = Te.params.grainMixer,
  grainOverlay: s = Te.params.grainOverlay,
  // Sizing props
  fit: c = Te.params.fit,
  rotation: l = Te.params.rotation,
  scale: f = Te.params.scale,
  originX: d = Te.params.originX,
  originY: p = Te.params.originY,
  offsetX: h = Te.params.offsetX,
  offsetY: b = Te.params.offsetY,
  worldWidth: g = Te.params.worldWidth,
  worldHeight: v = Te.params.worldHeight,
  ...w
}) {
  const y = {
    // Own uniforms
    u_colors: o.map(Ge),
    u_colorsCount: o.length,
    u_distortion: n,
    u_swirl: a,
    u_grainMixer: i,
    u_grainOverlay: s,
    // Sizing uniforms
    u_fit: lr[c],
    u_rotation: l,
    u_scale: f,
    u_offsetX: h,
    u_offsetY: b,
    u_originX: d,
    u_originY: p,
    u_worldWidth: g,
    u_worldHeight: v
  };
  return /* @__PURE__ */ u(
    Gt,
    {
      ...w,
      speed: e,
      frame: r,
      fragmentShader: $C,
      uniforms: y
    }
  );
}, Lr), Me = {
  params: {
    ...On,
    speed: 1,
    frame: 0,
    colorFront: "#ffffff",
    colorMid: "#47a6ff",
    colorBack: "#000000",
    brightness: 0.05,
    contrast: 0.3
  }
}, rA = rr(function({
  // Own props
  speed: e = Me.params.speed,
  frame: r = Me.params.frame,
  colorFront: o = Me.params.colorFront,
  colorMid: n = Me.params.colorMid,
  colorBack: a = Me.params.colorBack,
  brightness: i = Me.params.brightness,
  contrast: s = Me.params.contrast,
  // Sizing props
  fit: c = Me.params.fit,
  scale: l = Me.params.scale,
  rotation: f = Me.params.rotation,
  originX: d = Me.params.originX,
  originY: p = Me.params.originY,
  offsetX: h = Me.params.offsetX,
  offsetY: b = Me.params.offsetY,
  worldWidth: g = Me.params.worldWidth,
  worldHeight: v = Me.params.worldHeight,
  ...w
}) {
  const y = {
    // Own uniforms
    u_colorFront: Ge(o),
    u_colorMid: Ge(n),
    u_colorBack: Ge(a),
    u_brightness: i,
    u_contrast: s,
    // Sizing uniforms
    u_fit: lr[c],
    u_scale: l,
    u_rotation: f,
    u_offsetX: h,
    u_offsetY: b,
    u_originX: d,
    u_originY: p,
    u_worldWidth: g,
    u_worldHeight: v
  };
  return /* @__PURE__ */ u(Gt, { ...w, speed: e, frame: r, fragmentShader: BC, uniforms: y });
}, Lr), Ce = {
  params: {
    ...On,
    colorBack: "#000000",
    colorFill: "#ffffff",
    colorStroke: "#ffaa00",
    size: 2,
    gapX: 32,
    gapY: 32,
    strokeWidth: 0,
    sizeRange: 0,
    opacityRange: 0,
    shape: "circle"
  }
}, oA = rr(function({
  // Own props
  colorBack: e = Ce.params.colorBack,
  colorFill: r = Ce.params.colorFill,
  colorStroke: o = Ce.params.colorStroke,
  size: n = Ce.params.size,
  gapX: a = Ce.params.gapX,
  gapY: i = Ce.params.gapY,
  strokeWidth: s = Ce.params.strokeWidth,
  sizeRange: c = Ce.params.sizeRange,
  opacityRange: l = Ce.params.opacityRange,
  shape: f = Ce.params.shape,
  // Sizing props
  fit: d = Ce.params.fit,
  scale: p = Ce.params.scale,
  rotation: h = Ce.params.rotation,
  originX: b = Ce.params.originX,
  originY: g = Ce.params.originY,
  offsetX: v = Ce.params.offsetX,
  offsetY: w = Ce.params.offsetY,
  worldWidth: y = Ce.params.worldWidth,
  worldHeight: x = Ce.params.worldHeight,
  // Other props
  maxPixelCount: C = 6016 * 3384,
  // Higher max resolution for this shader
  ...E
}) {
  const k = {
    // Own uniforms
    u_colorBack: Ge(e),
    u_colorFill: Ge(r),
    u_colorStroke: Ge(o),
    u_dotSize: n,
    u_gapX: a,
    u_gapY: i,
    u_strokeWidth: s,
    u_sizeRange: c,
    u_opacityRange: l,
    u_shape: FC[f],
    // Sizing uniforms
    u_fit: lr[d],
    u_scale: p,
    u_rotation: h,
    u_offsetX: v,
    u_offsetY: w,
    u_originX: b,
    u_originY: g,
    u_worldWidth: y,
    u_worldHeight: x
  };
  return /* @__PURE__ */ u(Gt, { ...E, maxPixelCount: C, fragmentShader: zC, uniforms: k });
}, Lr), Ae = {
  params: {
    ...On,
    rotation: 0,
    speed: 1,
    frame: 0,
    colors: ["#121212", "#9470ff", "#121212", "#8838ff"],
    proportion: 0.45,
    softness: 1,
    distortion: 0.25,
    swirl: 0.8,
    swirlIterations: 10,
    shapeScale: 0.1,
    shape: "checks"
  }
}, nA = rr(function({
  // Own props
  speed: e = Ae.params.speed,
  frame: r = Ae.params.frame,
  colors: o = Ae.params.colors,
  proportion: n = Ae.params.proportion,
  softness: a = Ae.params.softness,
  distortion: i = Ae.params.distortion,
  swirl: s = Ae.params.swirl,
  swirlIterations: c = Ae.params.swirlIterations,
  shapeScale: l = Ae.params.shapeScale,
  shape: f = Ae.params.shape,
  // Sizing props
  fit: d = Ae.params.fit,
  scale: p = Ae.params.scale,
  rotation: h = Ae.params.rotation,
  originX: b = Ae.params.originX,
  originY: g = Ae.params.originY,
  offsetX: v = Ae.params.offsetX,
  offsetY: w = Ae.params.offsetY,
  worldWidth: y = Ae.params.worldWidth,
  worldHeight: x = Ae.params.worldHeight,
  ...C
}) {
  const E = {
    // Own uniforms
    u_colors: o.map(Ge),
    u_colorsCount: o.length,
    u_proportion: n,
    u_softness: a,
    u_distortion: i,
    u_swirl: s,
    u_swirlIterations: c,
    u_shapeScale: l,
    u_shape: VC[f],
    u_noiseTexture: ms(),
    // Sizing uniforms
    u_scale: p,
    u_rotation: h,
    u_fit: lr[d],
    u_offsetX: v,
    u_offsetY: w,
    u_originX: b,
    u_originY: g,
    u_worldWidth: y,
    u_worldHeight: x
  };
  return /* @__PURE__ */ u(Gt, { ...C, speed: e, frame: r, fragmentShader: LC, uniforms: E });
}, Lr), De = {
  params: {
    ...On,
    speed: 1,
    frame: 0,
    scale: 0.6,
    colorBack: "#000000",
    colorFront: "#00b2ff",
    shape: "sphere",
    type: "4x4",
    size: 2
  }
}, aA = rr(function({
  // Own props
  speed: e = De.params.speed,
  frame: r = De.params.frame,
  colorBack: o = De.params.colorBack,
  colorFront: n = De.params.colorFront,
  shape: a = De.params.shape,
  type: i = De.params.type,
  pxSize: s,
  size: c = s === void 0 ? De.params.size : s,
  // Sizing props
  fit: l = De.params.fit,
  scale: f = De.params.scale,
  rotation: d = De.params.rotation,
  originX: p = De.params.originX,
  originY: h = De.params.originY,
  offsetX: b = De.params.offsetX,
  offsetY: g = De.params.offsetY,
  worldWidth: v = De.params.worldWidth,
  worldHeight: w = De.params.worldHeight,
  ...y
}) {
  const x = {
    // Own uniforms
    u_colorBack: Ge(o),
    u_colorFront: Ge(n),
    u_shape: WC[a],
    u_type: HC[i],
    u_pxSize: c,
    // Sizing uniforms
    u_fit: lr[l],
    u_scale: f,
    u_rotation: d,
    u_offsetX: b,
    u_offsetY: g,
    u_originX: p,
    u_originY: h,
    u_worldWidth: v,
    u_worldHeight: w
  };
  return /* @__PURE__ */ u(Gt, { ...y, speed: e, frame: r, fragmentShader: UC, uniforms: x });
}), ue = {
  params: {
    ...fs,
    speed: 1,
    frame: 0,
    scale: 0.6,
    colorBack: "#000000",
    colors: ["#0dc1fd", "#d915ef", "#ff3f2ecc"],
    roundness: 0.25,
    thickness: 0.1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    aspectRatio: "auto",
    softness: 0.75,
    intensity: 0.2,
    bloom: 0.25,
    spots: 5,
    spotSize: 0.5,
    pulse: 0.25,
    smoke: 0.3,
    smokeSize: 0.6
  }
}, iA = rr(function({
  // Own props
  speed: e = ue.params.speed,
  frame: r = ue.params.frame,
  colors: o = ue.params.colors,
  colorBack: n = ue.params.colorBack,
  roundness: a = ue.params.roundness,
  thickness: i = ue.params.thickness,
  aspectRatio: s = ue.params.aspectRatio,
  softness: c = ue.params.softness,
  bloom: l = ue.params.bloom,
  intensity: f = ue.params.intensity,
  spots: d = ue.params.spots,
  spotSize: p = ue.params.spotSize,
  pulse: h = ue.params.pulse,
  smoke: b = ue.params.smoke,
  smokeSize: g = ue.params.smokeSize,
  margin: v,
  marginLeft: w = v ?? ue.params.marginLeft,
  marginRight: y = v ?? ue.params.marginRight,
  marginTop: x = v ?? ue.params.marginTop,
  marginBottom: C = v ?? ue.params.marginBottom,
  // Sizing props
  fit: E = ue.params.fit,
  rotation: k = ue.params.rotation,
  scale: S = ue.params.scale,
  originX: A = ue.params.originX,
  originY: _ = ue.params.originY,
  offsetX: R = ue.params.offsetX,
  offsetY: P = ue.params.offsetY,
  worldWidth: I = ue.params.worldWidth,
  worldHeight: T = ue.params.worldHeight,
  ...D
}) {
  const z = {
    // Own uniforms
    u_colorBack: Ge(n),
    u_colors: o.map(Ge),
    u_colorsCount: o.length,
    u_roundness: a,
    u_thickness: i,
    u_marginLeft: w,
    u_marginRight: y,
    u_marginTop: x,
    u_marginBottom: C,
    u_aspectRatio: YC[s],
    u_softness: c,
    u_intensity: f,
    u_bloom: l,
    u_spots: d,
    u_spotSize: p,
    u_pulse: h,
    u_smoke: b,
    u_smokeSize: g,
    u_noiseTexture: ms(),
    // Sizing uniforms
    u_fit: lr[E],
    u_rotation: k,
    u_scale: S,
    u_offsetX: R,
    u_offsetY: P,
    u_originX: A,
    u_originY: _,
    u_worldWidth: I,
    u_worldHeight: T
  };
  return /* @__PURE__ */ u(
    Gt,
    {
      ...D,
      speed: e,
      frame: r,
      fragmentShader: GC,
      uniforms: z
    }
  );
}, Lr), be = {
  params: {
    ...fs,
    fit: "cover",
    scale: 0.6,
    speed: 0,
    frame: 0,
    colorFront: "#9fadbc",
    colorBack: "#ffffff",
    contrast: 0.3,
    roughness: 0.4,
    fiber: 0.3,
    fiberSize: 0.2,
    crumples: 0.3,
    crumpleSize: 0.35,
    folds: 0.65,
    foldCount: 5,
    fade: 0,
    drops: 0.2,
    seed: 5.8
  }
}, sA = rr(function({
  // Own props
  speed: e = be.params.speed,
  frame: r = be.params.frame,
  colorFront: o = be.params.colorFront,
  colorBack: n = be.params.colorBack,
  image: a = "",
  contrast: i = be.params.contrast,
  roughness: s = be.params.roughness,
  fiber: c = be.params.fiber,
  crumples: l = be.params.crumples,
  folds: f = be.params.folds,
  drops: d = be.params.drops,
  seed: p = be.params.seed,
  // Reworked props
  fiberScale: h,
  fiberSize: b = h === void 0 ? be.params.fiberSize : 0.2 / h,
  crumplesScale: g,
  crumpleSize: v = g === void 0 ? be.params.crumpleSize : 0.2 / g,
  blur: w,
  fade: y = w === void 0 ? be.params.fade : w,
  foldsNumber: x,
  foldCount: C = x === void 0 ? be.params.foldCount : x,
  // Sizing props
  fit: E = be.params.fit,
  scale: k = be.params.scale,
  rotation: S = be.params.rotation,
  originX: A = be.params.originX,
  originY: _ = be.params.originY,
  offsetX: R = be.params.offsetX,
  offsetY: P = be.params.offsetY,
  worldWidth: I = be.params.worldWidth,
  worldHeight: T = be.params.worldHeight,
  ...D
}) {
  const z = typeof window < "u" && { u_noiseTexture: ms() }, O = {
    // Own uniforms
    u_image: a,
    u_colorFront: Ge(o),
    u_colorBack: Ge(n),
    u_contrast: i,
    u_roughness: s,
    u_fiber: c,
    u_fiberSize: b,
    u_crumples: l,
    u_crumpleSize: v,
    u_foldCount: C,
    u_folds: f,
    u_fade: y,
    u_drops: d,
    u_seed: p,
    ...z,
    // Sizing uniforms
    u_fit: lr[E],
    u_scale: k,
    u_rotation: S,
    u_offsetX: R,
    u_offsetY: P,
    u_originX: A,
    u_originY: _,
    u_worldWidth: I,
    u_worldHeight: T
  };
  return /* @__PURE__ */ u(
    Gt,
    {
      ...D,
      speed: e,
      frame: r,
      fragmentShader: QC,
      mipmaps: ["u_image"],
      uniforms: O
    }
  );
}, Lr);
function o_({
  colorBack: t = he.paper,
  colorFront: e = he.ink2,
  contrast: r = 0.28,
  roughness: o = 0.35,
  fiber: n = 0.25,
  fiberSize: a = 0.22,
  crumples: i = 0.2,
  folds: s = 0.35,
  foldCount: c = 4,
  drops: l = 0.12,
  className: f,
  style: d,
  ...p
}) {
  return /* @__PURE__ */ u(
    sA,
    {
      colorBack: t,
      colorFront: e,
      contrast: r,
      roughness: o,
      fiber: n,
      fiberSize: a,
      crumples: i,
      folds: s,
      foldCount: c,
      drops: l,
      className: M("block w-full rounded-none", f),
      style: { width: "100%", height: 220, ...d },
      ...p
    }
  );
}
function n_({
  colorBack: t = he.paper,
  colorFront: e = he.action,
  shape: r = "wave",
  type: o = "4x4",
  size: n = 2,
  speed: a = 0.35,
  className: i,
  style: s,
  ...c
}) {
  const l = zr(a);
  return /* @__PURE__ */ u(
    aA,
    {
      colorBack: t,
      colorFront: e,
      shape: r,
      type: o,
      size: n,
      speed: l,
      className: M("block w-full rounded-none", i),
      style: { width: "100%", height: 220, ...s },
      ...c
    }
  );
}
function a_({
  colorFront: t = he.mint,
  colorMid: e = he.action,
  colorBack: r = he.navy,
  brightness: o = 0.12,
  contrast: n = 0.35,
  speed: a = 0.4,
  className: i,
  style: s,
  ...c
}) {
  const l = zr(a);
  return /* @__PURE__ */ u(
    rA,
    {
      colorFront: t,
      colorMid: e,
      colorBack: r,
      brightness: o,
      contrast: n,
      speed: l,
      className: M("block w-full rounded-none", i),
      style: { width: "100%", height: 220, ...s },
      ...c
    }
  );
}
function i_({
  colors: t = [...AC],
  distortion: e = 0.45,
  swirl: r = 0.12,
  grainMixer: o = 0.08,
  grainOverlay: n = 0.05,
  speed: a = 0.25,
  className: i,
  style: s,
  ...c
}) {
  const l = zr(a);
  return /* @__PURE__ */ u(
    tA,
    {
      colors: t,
      distortion: e,
      swirl: r,
      grainMixer: o,
      grainOverlay: n,
      speed: l,
      className: M("block w-full rounded-none", i),
      style: { width: "100%", height: 220, ...s },
      ...c
    }
  );
}
function s_({
  colorBack: t = he.paper,
  colorFill: e = he.ink2,
  colorStroke: r = he.action,
  shape: o = "square",
  size: n = 2,
  gapX: a = 24,
  gapY: i = 24,
  strokeWidth: s = 0,
  className: c,
  style: l,
  ...f
}) {
  return /* @__PURE__ */ u(
    oA,
    {
      colorBack: t,
      colorFill: e,
      colorStroke: r,
      shape: o,
      size: n,
      gapX: a,
      gapY: i,
      strokeWidth: s,
      className: M("block w-full rounded-none", c),
      style: { width: "100%", height: 220, ...l },
      ...f
    }
  );
}
function c_({
  colors: t = [..._C],
  colorBack: e = he.paper,
  roundness: r = 0,
  thickness: o = 0.08,
  softness: n = 0.45,
  bloom: a = 0.08,
  intensity: i = 0.35,
  spots: s = 3,
  spotSize: c = 0.4,
  pulse: l = 0.2,
  smoke: f = 0,
  speed: d = 0.55,
  className: p,
  style: h,
  ...b
}) {
  const g = zr(d);
  return /* @__PURE__ */ u(
    iA,
    {
      colors: t,
      colorBack: e,
      roundness: r,
      thickness: o,
      softness: n,
      bloom: a,
      intensity: i,
      spots: s,
      spotSize: c,
      pulse: l,
      smoke: f,
      speed: g,
      className: M("block w-full rounded-none", p),
      style: { width: "100%", height: 220, ...h },
      ...b
    }
  );
}
function l_({
  colors: t = [...SC],
  speed: e = 0.3,
  className: r,
  style: o,
  ...n
}) {
  const a = zr(e);
  return /* @__PURE__ */ u(
    nA,
    {
      colors: t,
      speed: a,
      className: M("block w-full rounded-none", r),
      style: { width: "100%", height: 220, ...o },
      ...n
    }
  );
}
const cA = {
  dither: () => import("./dither.webgl-DOieBjdm.js"),
  pure: () => import("./pure.webgl-CtYpj3qv.js"),
  grain: () => import("./grain.webgl-CR16E7wC.js"),
  halftone: () => import("./halftone.webgl-BqEDp_-D.js")
};
function Hc(t) {
  return getComputedStyle(t).colorScheme.includes("dark") ? "dark" : "light";
}
function u_({
  variant: t = "dither",
  theme: e,
  autoplay: r = !0,
  onError: o,
  className: n,
  style: a,
  ...i
}) {
  const s = pe(null), c = pe(null), { theme: l } = Mr();
  return le(() => {
    const f = s.current;
    if (!f) return;
    const d = new AbortController(), p = (h) => o == null ? void 0 : o(h instanceof Error ? h : new Error(String(h)));
    return cA[t]().then(({ createShader: h }) => {
      d.signal.aborted || (c.current = h(f, {
        theme: e ?? Hc(f),
        background: { light: he.paper, dark: he.paperDark },
        autoplay: r,
        signal: d.signal,
        onError: p
      }));
    }).catch(p), () => {
      d.abort(), c.current = null;
    };
  }, [t, r]), le(() => {
    const f = s.current;
    if (!f) return;
    const d = () => {
      var b;
      return (b = c.current) == null ? void 0 : b.setTheme(e ?? Hc(f));
    };
    d();
    const p = window.matchMedia("(prefers-color-scheme: dark)"), h = new MutationObserver(d);
    return p.addEventListener("change", d), h.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme"] }), () => {
      p.removeEventListener("change", d), h.disconnect();
    };
  }, [e, l]), /* @__PURE__ */ u(
    "canvas",
    {
      ref: s,
      "aria-hidden": "true",
      className: M(
        // Brand guide: before the first frame, and without WebGL2, a gradient of blue-deep and cyan on paper.
        "block w-full rounded-none bg-[radial-gradient(120%_80%_at_20%_100%,var(--su-blue-deep),var(--su-cyan)_45%,var(--su-paper)_80%)]",
        n
      ),
      style: { width: "100%", height: 220, ...a },
      ...i
    }
  );
}
export {
  JS as Affix,
  VS as Alert,
  _A as Anchor,
  ZS as App,
  JA as AutoComplete,
  CS as Avatar,
  AS as Badge,
  t_ as BorderBeam,
  kA as Breadcrumb,
  Be as Button,
  _S as Calendar,
  kS as Card,
  Uw as Carousel,
  Ww as CarouselItem,
  nS as Cascader,
  iS as Checkbox,
  fA as Chrome,
  um as Col,
  ES as Collapse,
  sS as ColorPicker,
  V0 as ConfigProvider,
  pm as Content,
  t1 as DatePicker,
  r1 as DateRangePicker,
  PS as Descriptions,
  n_ as Dithering,
  xA as Divider,
  s_ as DotGrid,
  US as Drawer,
  PA as Dropdown,
  FA as DropdownCheckboxItem,
  TA as DropdownContent,
  OA as DropdownGroup,
  MA as DropdownItem,
  NA as DropdownLabel,
  LA as DropdownRadioGroup,
  VA as DropdownRadioItem,
  DA as DropdownSeparator,
  $A as DropdownSub,
  zA as DropdownSubContent,
  BA as DropdownSubTrigger,
  IA as DropdownTrigger,
  IS as Empty,
  wA as Flex,
  vA as FloatButton,
  mm as Footer,
  KA as Form,
  qA as FormItem,
  oc as FormLabel,
  pA as Glass,
  yA as Grid,
  dm as Header,
  Mt as Icon,
  TS as Image,
  Uv as Input,
  cS as InputNumber,
  tn as Layout,
  u_ as LightField,
  A2 as List,
  C2 as ListItem,
  H2 as Listy,
  G2 as ListyItem,
  AA as Masonry,
  lS as Mentions,
  UA as Menu,
  i_ as MeshGradient,
  Zy as MessageProvider,
  t5 as Modal,
  a_ as NeuroNoise,
  Mf as Notification,
  WA as Pagination,
  o_ as PaperTexture,
  bA as Paragraph,
  GS as Popconfirm,
  DS as Popover,
  QS as Progress,
  c_ as PulsingBorder,
  NS as QRCode,
  E1 as Radio,
  dS as RadioGroup,
  fS as Rate,
  XS as Result,
  lm as Row,
  zw as Segmented,
  oS as Select,
  fm as Sider,
  jS as Skeleton,
  mS as Slider,
  Qa as SlotSpinner,
  CA as Space,
  KS as Spin,
  SA as Splitter,
  OS as Statistic,
  HA as Steps,
  mA as Surface,
  up as SvgIcon,
  gS as Switch,
  yo as Table,
  YA as Tabs,
  jA as TabsContent,
  QA as TabsList,
  XA as TabsTrigger,
  $S as Tag,
  gA as Text,
  bS as TimePicker,
  BS as Timeline,
  hA as Title,
  ky as Tooltip,
  FS as Tour,
  vS as Transfer,
  LS as Tree,
  xS as TreeSelect,
  ja as Typography,
  wS as Upload,
  l_ as Warp,
  qS as Watermark,
  _C as beamBrandColors,
  M as cn,
  wn as dropdownItemClass,
  Kt as iconDefaults,
  AC as meshBrandColors,
  mt as message,
  No as paginationRange,
  he as shaderPalette,
  e_ as useApp,
  Mr as useConfig,
  At as useFormContext,
  Ee as useFormItemContext,
  e5 as useMessage,
  zr as useShaderSpeed,
  SC as warpBrandColors
};
