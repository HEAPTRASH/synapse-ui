const N = `#version 300 es
void main() {
  vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`, W = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float uLightMode;
uniform vec3 uDarkBackground;
uniform vec3 uLightBackground;
out vec4 fragColor;

const float HUE = 0.73888886;
const float HUE_SPREAD = -0.252777785;
const float HUE_TRAVEL = 2.29757094;
const float CHROMA = 0.109664999;
const float LIGHTNESS = 0.510210276;
const float COLOUR_CYCLE = 0.237373203;
const float THETA = 2.12723231;
const float SHEAR = 0.958773494;
const float SHRINK = 0.957181931;
const float LAYERS = 94.0;
const float WARP_FREQ_X = 0.345389724;
const float WARP_FREQ_Y = 2.30383372;
const float WARP_AMP_X = 0.132420808;
const float WARP_AMP_Y = 0.0348778181;
const float ASPECT_X = 2.05117106;
const float ASPECT_Y = 0.168761343;
const float OFFSET_X = 0.326441884;
const float OFFSET_Y = 0.0330561996;
const float TILT = 2.2089479;
const float ZOOM = 1.15885079;
const float CENTRE_X = 0.783927023;
const float CENTRE_Y = 0.00986180454;
const float GLOW_SIZE = 0.00183953636;
const float FALLOFF = 0.262828976;
const float VIGNETTE = 0.0738503486;
const float FLOW_SPEED = 0.568646967;
const float FLOW_DIRECTION = 1.0;
const float BREATH_RATE = 0.416830957;
const float BREATH_AMOUNT = 0.110573679;
const float PHASE = 80.1599426;
const float ECHO = 0.0;
const float ECHO_SHIFT = 0.1783133;
const float SOFTNESS = 0.00136450643;
const float LIGHT_SWING = 0.288746893;

const float TAU = 6.28318530718;

vec3 oklchToLinear(float L, float C, float h) {
  float a = C * cos(h), b = C * sin(h);
  float l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  float m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  float s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  vec3 lms = vec3(l_, m_, s_);
  lms = lms * lms * lms;
  return mat3(4.0767416621, -1.2684380046, -0.0041960863,
              -3.3077115913, 2.6097574011, -0.7034186147,
              0.2309699292, -0.3413193965, 1.7076147010) * lms;
}

float blueNoise(vec2 p, float frame) {
  p += 5.588238 * mod(frame, 64.0);
  return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y));
}

void main() {
  vec2 R = iResolution.xy;
  vec2 pos = (gl_FragCoord.xy - 0.5 * R) / R.y;
  float t = iTime * FLOW_SPEED * FLOW_DIRECTION + PHASE;
  float breath = (-sin(iTime * BREATH_RATE * 1.5) + sin(iTime * BREATH_RATE + 1.0)) * 0.25 + 0.5;

  vec2 u = (pos - vec2(CENTRE_X, CENTRE_Y)) * (ZOOM - breath * BREATH_AMOUNT);
  float ct = cos(TILT), st = sin(TILT);
  u = mat2(ct, st, -st, ct) * u;

  mat2 fold = mat2(cos(THETA), sin(THETA), -SHEAR, cos(THETA));

  float hue0 = HUE * TAU;
  float hue1 = hue0 + HUE_SPREAD * TAU;
  vec3 color = vec3(0.0);

  for (float i = 1.0; i <= 96.0; i += 1.0) {
    if (i > LAYERS) break;
    u.x += -sin(u.y * WARP_FREQ_X + t + i * 0.007) * WARP_AMP_X;
    u.y += -sin(u.x * WARP_FREQ_Y - t + i * 0.02) * WARP_AMP_Y;
    u = fold * u * SHRINK;

    vec2 q = u - vec2(OFFSET_X + breath * 0.1, OFFSET_Y);
    vec2 s = vec2(q.x * ASPECT_X, q.y * ASPECT_Y);
    float glow = GLOW_SIZE / (dot(s, s) + SOFTNESS);
#ifndef SKIP_ECHO
    vec2 e = vec2((q.x - ECHO_SHIFT) * ASPECT_X, s.y);
    glow += ECHO * GLOW_SIZE / (dot(e, e) + SOFTNESS);
#endif
    glow *= 0.25 + breath * 0.4;

    float r = length(u);
    float k = sin(i * COLOUR_CYCLE + t * 1.2 + r * HUE_TRAVEL) * 0.5 + 0.5;
    vec3 tint = clamp(oklchToLinear(LIGHTNESS + LIGHT_SWING * k, CHROMA * (0.75 + 0.35 * k), mix(hue0, hue1, k)), 0.0, 1.0);
    color += glow * tint * exp2(-r * FALLOFF);
  }

  vec3 x = max(color, 0.0);
  color = (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
  color = pow(clamp(color, 0.0, 1.0), vec3(0.85, 0.92, 0.98));

  float edge = smoothstep(0.5, 1.6, length(pos));
  color *= 1.0 - edge * VIGNETTE;

  vec3 dark = uDarkBackground + color * (1.0 - uDarkBackground);
  float strength = max(color.r, max(color.g, color.b));
  vec3 light = uLightBackground * (1.0 - strength) + color * 0.96;
  color = mix(dark, light, uLightMode);

  color += (blueNoise(gl_FragCoord.xy, floor(iTime * 24.0)) - 0.5) / 255.0;
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;
function C(t) {
  const n = /^#([0-9a-f]{6})$/i.exec(t.trim());
  if (!n) throw new Error(`Background colours must be #rrggbb, got "${t}".`);
  return [0, 2, 4].map((e) => parseInt(n[1].slice(e, e + 2), 16) / 255);
}
function X(t, n, e, E, a = 1 / 0) {
  var b, x;
  const u = t.autoplay !== !1, g = window.matchMedia("(prefers-reduced-motion: reduce)");
  let d = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), _ = window.devicePixelRatio || 1, l = e.clientWidth, i = e.clientHeight, m = !0, c = !1, s = t.theme === "light" ? 1 : 0, f = s, T = 0, I = 0, w = 0, S = null;
  function v() {
    return !c && !document.hidden && m && l > 0 && i > 0;
  }
  function p() {
    const o = Math.min(_, 2, Math.sqrt(24e5 / (l * i)), a / l, a / i), r = Math.max(1, Math.floor(l * o)), L = Math.max(1, Math.floor(i * o));
    return (e.width !== r || e.height !== L) && (e.width = r, e.height = L), r / l;
  }
  function H(o) {
    if (!c && (w = o, !!v()))
      try {
        n(o, f, p());
      } catch (r) {
        A();
        const L = r instanceof Error ? r : new Error(String(r));
        t.onError ? t.onError(L) : console.error(L);
      }
  }
  function P() {
    !T && v() && (T = requestAnimationFrame(k));
  }
  function h() {
    v() ? P() : (cancelAnimationFrame(T), T = 0, S = null);
  }
  function k(o) {
    if (T = 0, !v()) {
      S = null;
      return;
    }
    const r = S === null ? 0 : Math.min((o - S) / 1e3, 0.1);
    S = o, u && (g.matches || (I += r), f += (s - f) * (1 - Math.exp(-r * 7)), Math.abs(s - f) < 2e-3 && (f = s)), H(u ? I : w), u && (!g.matches || f !== s) ? P() : S = null;
  }
  function R() {
    if (c) return;
    const o = window.devicePixelRatio || 1;
    _ !== o && (_ = o, d.removeEventListener("change", R), d = window.matchMedia(`(resolution: ${o}dppx)`), d.addEventListener("change", R), h());
  }
  const O = new ResizeObserver(([o]) => {
    if (c || !o) return;
    const r = o.contentRect;
    l === r.width && i === r.height || (l = r.width, i = r.height, h());
  }), F = new IntersectionObserver(([o]) => {
    c || !o || m === o.isIntersecting || (m = o.isIntersecting, h());
  });
  function A() {
    var o;
    c || (c = !0, cancelAnimationFrame(T), T = 0, O.disconnect(), F.disconnect(), d.removeEventListener("change", R), g.removeEventListener("change", h), document.removeEventListener("visibilitychange", h), window.removeEventListener("resize", R), (o = t.signal) == null || o.removeEventListener("abort", A), E());
  }
  return O.observe(e), F.observe(e), d.addEventListener("change", R), g.addEventListener("change", h), document.addEventListener("visibilitychange", h), window.addEventListener("resize", R), (b = t.signal) == null || b.addEventListener("abort", A, { once: !0 }), (x = t.signal) != null && x.aborted ? A() : P(), {
    setTheme(o) {
      c || (s = o === "light" ? 1 : 0, u ? h() : (f = s, H(w)));
    },
    render: H,
    destroy: A
  };
}
function M(t, n, e, E) {
  const a = t.createShader(e);
  if (!a) throw new Error("WebGL could not create a shader object.");
  if (t.shaderSource(a, E), t.compileShader(a), !t.getShaderParameter(a, t.COMPILE_STATUS)) throw new Error(`Shader failed to compile: ${t.getShaderInfoLog(a)}`);
  t.attachShader(n, a), t.deleteShader(a);
}
function D(t, n) {
  const e = t.createProgram();
  if (M(t, e, t.VERTEX_SHADER, N), M(t, e, t.FRAGMENT_SHADER, n), t.linkProgram(e), !t.getProgramParameter(e, t.LINK_STATUS)) throw new Error(`Shader failed to link: ${t.getProgramInfoLog(e)}`);
  return e;
}
function U(t, n, e) {
  return Object.fromEntries(e.map((E) => [E, t.getUniformLocation(n, E)]));
}
function B(t, n = {}) {
  var _, l;
  const e = t.getContext("webgl2", { alpha: !1, antialias: !1, depth: !1, stencil: !1 });
  if (!e) throw new Error("WebGL2 is not available in this browser.");
  const E = C(((_ = n.background) == null ? void 0 : _.dark) ?? "#090909"), a = C(((l = n.background) == null ? void 0 : l.light) ?? "#ffffff"), u = D(e, W), g = U(e, u, ["iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground"]), d = (i, m, c) => {
    e.uniform2f(i.iResolution, t.width, t.height), e.uniform1f(i.iTime, m), e.uniform1f(i.uLightMode, c), e.uniform3fv(i.uDarkBackground, E), e.uniform3fv(i.uLightBackground, a);
  };
  return X(n, (i, m, c) => {
    const { width: s, height: f } = t;
    e.viewport(0, 0, s, f), e.useProgram(u), d(g, i, m), e.drawArrays(e.TRIANGLES, 0, 3);
  }, t, () => {
    e.deleteProgram(u);
  }, Math.min(e.getParameter(e.MAX_TEXTURE_SIZE), e.getParameter(e.MAX_RENDERBUFFER_SIZE)));
}
export {
  B as createShader
};
