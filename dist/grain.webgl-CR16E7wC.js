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
const float HUE_TRAVEL = 1.44193923;
const float CHROMA = 0.169910237;
const float LIGHTNESS = 0.634463131;
const float COLOUR_CYCLE = 0.0867320299;
const float THETA = 2.1098094;
const float SHEAR = 0.965752244;
const float SHRINK = 0.949467599;
const float LAYERS = 73.0;
const float WARP_FREQ_X = 0.379137516;
const float WARP_FREQ_Y = 2.12239861;
const float WARP_AMP_X = 0.120524235;
const float WARP_AMP_Y = 0.0309455767;
const float ASPECT_X = 2.13210988;
const float ASPECT_Y = 0.155404404;
const float OFFSET_X = 0.400128156;
const float OFFSET_Y = -0.0160429683;
const float TILT = -1.81867838;
const float ZOOM = 1.10020888;
const float CENTRE_X = -0.299092203;
const float CENTRE_Y = 0.483654141;
const float GLOW_SIZE = 0.00153047324;
const float FALLOFF = 0.438500613;
const float VIGNETTE = 0.0112166498;
const float FLOW_SPEED = 0.628476322;
const float FLOW_DIRECTION = 1.0;
const float BREATH_RATE = 0.518217206;
const float BREATH_AMOUNT = 0.0773748606;
const float PHASE = 76.0120773;
const float ECHO = 0.0;
const float ECHO_SHIFT = 0.130346075;
const float SOFTNESS = 0.00149745529;
const float LIGHT_SWING = 0.202911302;

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

const float uStrength = 0.71150434;
const float uScale = 0.873413563;
const float uSeed = 0.0988876373;

const float TAU = 6.28318530718;
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

vec3 toInk(vec3 c) { return mix(c - uDarkBackground, uLightBackground - c, uLightMode); }
vec3 fromInk(vec3 ink) { return mix(uDarkBackground + ink, uLightBackground - ink, uLightMode); }
vec3 sceneInk(vec2 uv) { return toInk(texture(tScene, clamp(uv, 0.0, 1.0)).rgb); }

float blueNoise(vec2 p, float frame) {
  p += 5.588238 * mod(frame, 64.0);
  return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y));
}

uvec3 pcg3d(uvec3 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  return v;
}
vec3 hash3(vec3 p) { return vec3(pcg3d(uvec3(ivec3(floor(p)) + 0x4000))) / 4294967295.0; }

vec3 grain(vec2 frag) {
  vec3 ink = sceneInk(frag / iResolution);
  float size = max(1.0, uPixelRatio * 1.6 * uScale);
  vec2 n = hash3(vec3(floor(frag / size), floor(iTime * 24.0))).xy;
  float g = n.x + n.y - 1.0;
  float shade = clamp(dot(ink, LUMA), 0.0, 1.0);
  float response = 4.0 * shade * (1.0 - shade);
  return ink + g * (0.035 + 0.1 * response) * uStrength;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec3 ink = grain(frag);
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
function y(t, n, e, g, i = 1 / 0) {
  var M, w;
  const v = t.autoplay !== !1, L = window.matchMedia("(prefers-reduced-motion: reduce)");
  let m = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), _ = window.devicePixelRatio || 1, c = e.clientWidth, a = e.clientHeight, S = !0, l = !1, s = t.theme === "light" ? 1 : 0, u = s, E = 0, f = 0, d = 0, T = null;
  function h() {
    return !l && !document.hidden && S && c > 0 && a > 0;
  }
  function x() {
    const o = Math.min(_, 2, Math.sqrt(24e5 / (c * a)), i / c, i / a), r = Math.max(1, Math.floor(c * o)), P = Math.max(1, Math.floor(a * o));
    return (e.width !== r || e.height !== P) && (e.width = r, e.height = P), r / c;
  }
  function A(o) {
    if (!l && (d = o, !!h()))
      try {
        n(o, u, x());
      } catch (r) {
        k();
        const P = r instanceof Error ? r : new Error(String(r));
        t.onError ? t.onError(P) : console.error(P);
      }
  }
  function F() {
    !E && h() && (E = requestAnimationFrame(N));
  }
  function R() {
    h() ? F() : (cancelAnimationFrame(E), E = 0, T = null);
  }
  function N(o) {
    if (E = 0, !h()) {
      T = null;
      return;
    }
    const r = T === null ? 0 : Math.min((o - T) / 1e3, 0.1);
    T = o, v && (L.matches || (f += r), u += (s - u) * (1 - Math.exp(-r * 7)), Math.abs(s - u) < 2e-3 && (u = s)), A(v ? f : d), v && (!L.matches || u !== s) ? F() : T = null;
  }
  function b() {
    if (l) return;
    const o = window.devicePixelRatio || 1;
    _ !== o && (_ = o, m.removeEventListener("change", b), m = window.matchMedia(`(resolution: ${o}dppx)`), m.addEventListener("change", b), R());
  }
  const I = new ResizeObserver(([o]) => {
    if (l || !o) return;
    const r = o.contentRect;
    c === r.width && a === r.height || (c = r.width, a = r.height, R());
  }), p = new IntersectionObserver(([o]) => {
    l || !o || S === o.isIntersecting || (S = o.isIntersecting, R());
  });
  function k() {
    var o;
    l || (l = !0, cancelAnimationFrame(E), E = 0, I.disconnect(), p.disconnect(), m.removeEventListener("change", b), L.removeEventListener("change", R), document.removeEventListener("visibilitychange", R), window.removeEventListener("resize", b), (o = t.signal) == null || o.removeEventListener("abort", k), g());
  }
  return I.observe(e), p.observe(e), m.addEventListener("change", b), L.addEventListener("change", R), document.addEventListener("visibilitychange", R), window.addEventListener("resize", b), (M = t.signal) == null || M.addEventListener("abort", k, { once: !0 }), (w = t.signal) != null && w.aborted ? k() : F(), {
    setTheme(o) {
      l || (s = o === "light" ? 1 : 0, v ? R() : (u = s, A(d)));
    },
    render: A,
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
function W(t, n = {}) {
  var u, E;
  const e = t.getContext("webgl2", { alpha: !1, antialias: !1, depth: !1, stencil: !1 });
  if (!e) throw new Error("WebGL2 is not available in this browser.");
  const g = H(((u = n.background) == null ? void 0 : u.dark) ?? "#090909"), i = H(((E = n.background) == null ? void 0 : E.light) ?? "#ffffff"), v = C(e, B), L = U(e, v, ["iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground"]), m = C(e, X), _ = U(e, m, ["tScene", "iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground", "uPixelRatio"]), c = e.createFramebuffer(), a = e.createTexture();
  e.bindTexture(e.TEXTURE_2D, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
  let S = 0, l = 0;
  const s = (f, d, T) => {
    e.uniform2f(f.iResolution, t.width, t.height), e.uniform1f(f.iTime, d), e.uniform1f(f.uLightMode, T), e.uniform3fv(f.uDarkBackground, g), e.uniform3fv(f.uLightBackground, i);
  };
  return y(n, (f, d, T) => {
    const { width: h, height: x } = t;
    e.viewport(0, 0, h, x), (S !== h || l !== x) && (S = h, l = x, e.bindTexture(e.TEXTURE_2D, a), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, h, x, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.bindFramebuffer(e.FRAMEBUFFER, c), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, a, 0), e.bindFramebuffer(e.FRAMEBUFFER, null));
    const A = (F) => {
      e.bindFramebuffer(e.FRAMEBUFFER, c), e.useProgram(v), s(L, f, F), e.drawArrays(e.TRIANGLES, 0, 3), e.bindFramebuffer(e.FRAMEBUFFER, null), e.useProgram(m), s(_, f, F), e.uniform1f(_.uPixelRatio, T), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, a), e.uniform1i(_.tScene, 0), e.drawArrays(e.TRIANGLES, 0, 3);
    };
    if (d <= 0 || d >= 1) {
      A(d);
      return;
    }
    A(0), e.enable(e.BLEND), e.blendColor(0, 0, 0, d), e.blendFunc(e.CONSTANT_ALPHA, e.ONE_MINUS_CONSTANT_ALPHA), A(1), e.disable(e.BLEND);
  }, t, () => {
    e.deleteProgram(v), e.deleteProgram(m), e.deleteFramebuffer(c), e.deleteTexture(a);
  }, Math.min(e.getParameter(e.MAX_TEXTURE_SIZE), e.getParameter(e.MAX_RENDERBUFFER_SIZE)));
}
export {
  W as createShader
};
