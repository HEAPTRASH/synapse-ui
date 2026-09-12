const D = `#version 300 es
void main() {
  vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`, B = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float uLightMode;
uniform vec3 uDarkBackground;
uniform vec3 uLightBackground;
out vec4 fragColor;

const float HUE = 0.73888886;
const float HUE_SPREAD = -0.252777785;
const float HUE_TRAVEL = 1.85564995;
const float CHROMA = 0.139933154;
const float LIGHTNESS = 0.564759076;
const float COLOUR_CYCLE = 0.172344819;
const float THETA = 2.13523293;
const float SHEAR = 0.969922304;
const float SHRINK = 0.955266297;
const float LAYERS = 88.0;
const float WARP_FREQ_X = 0.595658302;
const float WARP_FREQ_Y = 2.59342885;
const float WARP_AMP_X = 0.11348936;
const float WARP_AMP_Y = 0.0230298974;
const float ASPECT_X = 2.55728769;
const float ASPECT_Y = 0.192587033;
const float OFFSET_X = 0.334900409;
const float OFFSET_Y = -0.0312041771;
const float TILT = 0.16558747;
const float ZOOM = 0.905751884;
const float CENTRE_X = -0.387970626;
const float CENTRE_Y = -0.388877511;
const float GLOW_SIZE = 0.00160184945;
const float FALLOFF = 0.2969971;
const float VIGNETTE = 0.123292826;
const float FLOW_SPEED = 0.454602391;
const float FLOW_DIRECTION = 1.0;
const float BREATH_RATE = 0.622301102;
const float BREATH_AMOUNT = 0.0639646351;
const float PHASE = 81.7453842;
const float ECHO = 0.616664588;
const float ECHO_SHIFT = 0.186719298;
const float SOFTNESS = 0.00171129056;
const float LIGHT_SWING = 0.187406674;

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
`, X = `#version 300 es
precision highp float;

uniform sampler2D tScene;
uniform vec2 iResolution;
uniform float iTime;
uniform float uLightMode;
uniform vec3 uDarkBackground;
uniform vec3 uLightBackground;
uniform float uPixelRatio;
out vec4 fragColor;

const float uStrength = 0.766337991;
const float uScale = 0.832122624;
const float uSeed = 0.65742296;

const float TAU = 6.28318530718;
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

vec3 toInk(vec3 c) { return mix(c - uDarkBackground, uLightBackground - c, uLightMode); }
vec3 fromInk(vec3 ink) { return mix(uDarkBackground + ink, uLightBackground - ink, uLightMode); }
vec3 sceneInk(vec2 uv) { return toInk(texture(tScene, clamp(uv, 0.0, 1.0)).rgb); }

float blueNoise(vec2 p, float frame) {
  p += 5.588238 * mod(frame, 64.0);
  return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y));
}

vec3 halftone(vec2 frag) {
  float cell = max(3.0, uScale * 3.6 * uPixelRatio);
  float angle = 0.26 + uSeed * 0.3;
  mat2 turn = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  vec2 rotated = turn * frag;
  vec2 grid = floor(rotated / cell);
  vec2 centre = (grid + 0.5) * cell;
  vec2 source = transpose(turn) * centre;
  vec3 soft = sceneInk(frag / iResolution);
  vec3 ink = sceneInk(source / iResolution);
  float level = clamp(dot(ink, LUMA), 0.0, 1.0);
  float radius = cell * sqrt(pow(level, 0.9) / 3.14159265);
  float dist = length(rotated - centre);
  float aa = 0.7 * uPixelRatio;
  float dot_ = 1.0 - smoothstep(radius - aa, radius + aa, dist);
  vec3 dots = ink * min(0.8 / max(level, 1e-3), 2.2) * dot_;
  float presence = smoothstep(0.03, 0.16, level) * (0.3 + 0.14 * uStrength);
  return mix(soft, dots, presence);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec3 ink = halftone(frag);
  vec3 color = fromInk(clamp(ink, 0.0, 1.0));
  color += (blueNoise(frag, floor(iTime * 24.0)) - 0.5) / 255.0;
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;
function H(t) {
  const n = /^#([0-9a-f]{6})$/i.exec(t.trim());
  if (!n) throw new Error(`Background colours must be #rrggbb, got "${t}".`);
  return [0, 2, 4].map((e) => parseInt(n[1].slice(e, e + 2), 16) / 255);
}
function W(t, n, e, g, i = 1 / 0) {
  var M, w;
  const R = t.autoplay !== !1, L = window.matchMedia("(prefers-reduced-motion: reduce)");
  let T = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), A = window.devicePixelRatio || 1, c = e.clientWidth, a = e.clientHeight, S = !0, l = !1, s = t.theme === "light" ? 1 : 0, u = s, E = 0, f = 0, d = 0, m = null;
  function h() {
    return !l && !document.hidden && S && c > 0 && a > 0;
  }
  function F() {
    const o = Math.min(A, 2, Math.sqrt(24e5 / (c * a)), i / c, i / a), r = Math.max(1, Math.floor(c * o)), P = Math.max(1, Math.floor(a * o));
    return (e.width !== r || e.height !== P) && (e.width = r, e.height = P), r / c;
  }
  function v(o) {
    if (!l && (d = o, !!h()))
      try {
        n(o, u, F());
      } catch (r) {
        k();
        const P = r instanceof Error ? r : new Error(String(r));
        t.onError ? t.onError(P) : console.error(P);
      }
  }
  function x() {
    !E && h() && (E = requestAnimationFrame(N));
  }
  function _() {
    h() ? x() : (cancelAnimationFrame(E), E = 0, m = null);
  }
  function N(o) {
    if (E = 0, !h()) {
      m = null;
      return;
    }
    const r = m === null ? 0 : Math.min((o - m) / 1e3, 0.1);
    m = o, R && (L.matches || (f += r), u += (s - u) * (1 - Math.exp(-r * 7)), Math.abs(s - u) < 2e-3 && (u = s)), v(R ? f : d), R && (!L.matches || u !== s) ? x() : m = null;
  }
  function b() {
    if (l) return;
    const o = window.devicePixelRatio || 1;
    A !== o && (A = o, T.removeEventListener("change", b), T = window.matchMedia(`(resolution: ${o}dppx)`), T.addEventListener("change", b), _());
  }
  const I = new ResizeObserver(([o]) => {
    if (l || !o) return;
    const r = o.contentRect;
    c === r.width && a === r.height || (c = r.width, a = r.height, _());
  }), p = new IntersectionObserver(([o]) => {
    l || !o || S === o.isIntersecting || (S = o.isIntersecting, _());
  });
  function k() {
    var o;
    l || (l = !0, cancelAnimationFrame(E), E = 0, I.disconnect(), p.disconnect(), T.removeEventListener("change", b), L.removeEventListener("change", _), document.removeEventListener("visibilitychange", _), window.removeEventListener("resize", b), (o = t.signal) == null || o.removeEventListener("abort", k), g());
  }
  return I.observe(e), p.observe(e), T.addEventListener("change", b), L.addEventListener("change", _), document.addEventListener("visibilitychange", _), window.addEventListener("resize", b), (M = t.signal) == null || M.addEventListener("abort", k, { once: !0 }), (w = t.signal) != null && w.aborted ? k() : x(), {
    setTheme(o) {
      l || (s = o === "light" ? 1 : 0, R ? _() : (u = s, v(d)));
    },
    render: v,
    destroy: k
  };
}
function O(t, n, e, g) {
  const i = t.createShader(e);
  if (!i) throw new Error("WebGL could not create a shader object.");
  if (t.shaderSource(i, g), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) throw new Error(`Shader failed to compile: ${t.getShaderInfoLog(i)}`);
  t.attachShader(n, i), t.deleteShader(i);
}
function C(t, n) {
  const e = t.createProgram();
  if (O(t, e, t.VERTEX_SHADER, D), O(t, e, t.FRAGMENT_SHADER, n), t.linkProgram(e), !t.getProgramParameter(e, t.LINK_STATUS)) throw new Error(`Shader failed to link: ${t.getProgramInfoLog(e)}`);
  return e;
}
function U(t, n, e) {
  return Object.fromEntries(e.map((g) => [g, t.getUniformLocation(n, g)]));
}
function G(t, n = {}) {
  var u, E;
  const e = t.getContext("webgl2", { alpha: !1, antialias: !1, depth: !1, stencil: !1 });
  if (!e) throw new Error("WebGL2 is not available in this browser.");
  const g = H(((u = n.background) == null ? void 0 : u.dark) ?? "#090909"), i = H(((E = n.background) == null ? void 0 : E.light) ?? "#ffffff"), R = C(e, B), L = U(e, R, ["iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground"]), T = C(e, X), A = U(e, T, ["tScene", "iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground", "uPixelRatio"]), c = e.createFramebuffer(), a = e.createTexture();
  e.bindTexture(e.TEXTURE_2D, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
  let S = 0, l = 0;
  const s = (f, d, m) => {
    e.uniform2f(f.iResolution, t.width, t.height), e.uniform1f(f.iTime, d), e.uniform1f(f.uLightMode, m), e.uniform3fv(f.uDarkBackground, g), e.uniform3fv(f.uLightBackground, i);
  };
  return W(n, (f, d, m) => {
    const { width: h, height: F } = t;
    e.viewport(0, 0, h, F), (S !== h || l !== F) && (S = h, l = F, e.bindTexture(e.TEXTURE_2D, a), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, h, F, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.bindFramebuffer(e.FRAMEBUFFER, c), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, a, 0), e.bindFramebuffer(e.FRAMEBUFFER, null));
    const v = (x) => {
      e.bindFramebuffer(e.FRAMEBUFFER, c), e.useProgram(R), s(L, f, x), e.drawArrays(e.TRIANGLES, 0, 3), e.bindFramebuffer(e.FRAMEBUFFER, null), e.useProgram(T), s(A, f, x), e.uniform1f(A.uPixelRatio, m), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(A.tScene, 0), e.drawArrays(e.TRIANGLES, 0, 3);
    };
    if (d <= 0 || d >= 1) {
      v(d);
      return;
    }
    v(0), e.enable(e.BLEND), e.blendColor(0, 0, 0, d), e.blendFunc(e.CONSTANT_ALPHA, e.ONE_MINUS_CONSTANT_ALPHA), v(1), e.disable(e.BLEND);
  }, t, () => {
    e.deleteProgram(R), e.deleteProgram(T), e.deleteFramebuffer(c), e.deleteTexture(a);
  }, Math.min(e.getParameter(e.MAX_TEXTURE_SIZE), e.getParameter(e.MAX_RENDERBUFFER_SIZE)));
}
export {
  G as createShader
};
