/*
 * Light field · generated from the OpenShaders name-card module (MIT · openshaders.com)
 * seed "synapseware" · hue 266° → 175° · chroma 0.143 · lightness 0.62 · dither
 * Size the canvas with CSS. Set background.dark and background.light to your page colours as #rrggbb.
 */

const VERTEX_SHADER = `#version 300 es
void main() {
  vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`;

const FIELD_SHADER = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float uLightMode;
uniform vec3 uDarkBackground;
uniform vec3 uLightBackground;
out vec4 fragColor;

const float HUE = 0.73888886;
const float HUE_SPREAD = -0.252777785;
const float HUE_TRAVEL = 2.48845243;
const float CHROMA = 0.142670244;
const float LIGHTNESS = 0.618842661;
const float COLOUR_CYCLE = 0.105956584;
const float THETA = 2.11155462;
const float SHEAR = 0.971593857;
const float SHRINK = 0.952518165;
const float LAYERS = 74.0;
const float WARP_FREQ_X = 0.312960356;
const float WARP_FREQ_Y = 2.31005049;
const float WARP_AMP_X = 0.151205271;
const float WARP_AMP_Y = 0.0343666784;
const float ASPECT_X = 2.32533312;
const float ASPECT_Y = 0.184769988;
const float OFFSET_X = 0.32272619;
const float OFFSET_Y = 0.0192350373;
const float TILT = 2.19713879;
const float ZOOM = 1.12586045;
const float CENTRE_X = 0.0214347765;
const float CENTRE_Y = -0.620428443;
const float GLOW_SIZE = 0.00170580135;
const float FALLOFF = 0.32649377;
const float VIGNETTE = 0.0558313131;
const float FLOW_SPEED = 0.451002747;
const float FLOW_DIRECTION = 1.0;
const float BREATH_RATE = 0.415629953;
const float BREATH_AMOUNT = 0.102426365;
const float PHASE = 86.6933136;
const float ECHO = 0.0;
const float ECHO_SHIFT = -0.150530353;
const float SOFTNESS = 0.00175084767;
const float LIGHT_SWING = 0.260063082;

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

const RARITY_SHADER = `#version 300 es
precision highp float;

uniform sampler2D tScene;
uniform vec2 iResolution;
uniform float iTime;
uniform float uLightMode;
uniform vec3 uDarkBackground;
uniform vec3 uLightBackground;
uniform float uPixelRatio;
out vec4 fragColor;

const float uStrength = 0.961771846;
const float uScale = 0.813576996;
const float uSeed = 0.189838111;

const float TAU = 6.28318530718;
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

vec3 toInk(vec3 c) { return mix(c - uDarkBackground, uLightBackground - c, uLightMode); }
vec3 fromInk(vec3 ink) { return mix(uDarkBackground + ink, uLightBackground - ink, uLightMode); }
vec3 sceneInk(vec2 uv) { return toInk(texture(tScene, clamp(uv, 0.0, 1.0)).rgb); }

const mat4 BAYER = mat4(
  0.94118, 0.29412, 0.76471, 0.05882,
  0.47059, 0.70588, 0.23529, 0.52941,
  0.82353, 0.11765, 0.88235, 0.17647,
  0.35294, 0.58824, 0.41176, 0.64706
);

vec3 dither(vec2 frag) {
  float cell = max(2.0, floor(uScale * 2.2 * uPixelRatio + 0.5));
  vec2 grid = floor(frag / cell);
  vec3 soft = sceneInk(frag / iResolution);
  vec3 ink = sceneInk((grid + 0.5) * cell / iResolution);
  float level = dot(ink, LUMA);
  float levels = 8.0;
  ivec2 b = ivec2(mod(grid, 4.0));
  float v = pow(max(level, 0.0), 0.8) * levels + BAYER[b.x][b.y];
  float quantised = pow(floor(v) / levels, 1.25);
  vec3 dithered = ink * (quantised / max(level, 1e-4));
  float presence = smoothstep(0.03, 0.14, level) * (0.38 + 0.2 * uStrength);
  return mix(soft, dithered, presence);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec3 ink = dither(frag);
  vec3 color = fromInk(clamp(ink, 0.0, 1.0));
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;

const MAX_PIXELS = 2400000;
const THEME_EASE = 7;

function parseHex(hex) {
  const match = /^#([0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) throw new Error(`Background colours must be #rrggbb, got "${hex}".`);
  return [0, 2, 4].map((i) => parseInt(match[1].slice(i, i + 2), 16) / 255);
}

function animate(options, draw, canvas, release, maxDimension = Infinity) {
  const autoplay = options.autoplay !== false;
  const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");
  let resolution = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
  let deviceRatio = window.devicePixelRatio || 1;
  let width = canvas.clientWidth, height = canvas.clientHeight;
  let visible = true;
  let disposed = false;
  let targetTheme = options.theme === "light" ? 1 : 0;
  let theme = targetTheme;
  let frame = 0;
  let elapsed = 0;
  let lastTime = 0;
  let previous = null;

  function canDraw() {
    return !disposed && !document.hidden && visible && width > 0 && height > 0;
  }

  function fitCanvas() {
    const scale = Math.min(deviceRatio, 2, Math.sqrt(MAX_PIXELS / (width * height)), maxDimension / width, maxDimension / height);
    const w = Math.max(1, Math.floor(width * scale)), h = Math.max(1, Math.floor(height * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    return w / width;
  }

  function render(time) {
    if (disposed) return;
    lastTime = time;
    if (!canDraw()) return;
    try {
      draw(time, theme, fitCanvas());
    } catch (error) {
      destroy();
      const failure = error instanceof Error ? error : new Error(String(error));
      if (options.onError) options.onError(failure);
      else console.error(failure);
    }
  }

  function schedule() {
    if (!frame && canDraw()) frame = requestAnimationFrame(tick);
  }

  function refresh() {
    if (!canDraw()) {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = null;
    } else schedule();
  }

  function tick(now) {
    frame = 0;
    if (!canDraw()) { previous = null; return; }
    const delta = previous === null ? 0 : Math.min((now - previous) / 1000, 0.1);
    previous = now;
    if (autoplay) {
      if (!stillness.matches) elapsed += delta;
      theme += (targetTheme - theme) * (1 - Math.exp(-delta * THEME_EASE));
      if (Math.abs(targetTheme - theme) < 0.002) theme = targetTheme;
    }
    render(autoplay ? elapsed : lastTime);
    if (autoplay && (!stillness.matches || theme !== targetTheme)) schedule();
    else previous = null;
  }

  function pixelRatioChanged() {
    if (disposed) return;
    const next = window.devicePixelRatio || 1;
    if (deviceRatio === next) return;
    deviceRatio = next;
    resolution.removeEventListener("change", pixelRatioChanged);
    resolution = window.matchMedia(`(resolution: ${next}dppx)`);
    resolution.addEventListener("change", pixelRatioChanged);
    refresh();
  }

  const observer = new ResizeObserver(([entry]) => {
    if (disposed || !entry) return;
    const next = entry.contentRect;
    if (width === next.width && height === next.height) return;
    width = next.width;
    height = next.height;
    refresh();
  });
  const intersection = new IntersectionObserver(([entry]) => {
    if (disposed || !entry || visible === entry.isIntersecting) return;
    visible = entry.isIntersecting;
    refresh();
  });

  function destroy() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    frame = 0;
    observer.disconnect();
    intersection.disconnect();
    resolution.removeEventListener("change", pixelRatioChanged);
    stillness.removeEventListener("change", refresh);
    document.removeEventListener("visibilitychange", refresh);
    window.removeEventListener("resize", pixelRatioChanged);
    options.signal?.removeEventListener("abort", destroy);
    release();
  }

  observer.observe(canvas);
  intersection.observe(canvas);
  resolution.addEventListener("change", pixelRatioChanged);
  stillness.addEventListener("change", refresh);
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("resize", pixelRatioChanged);
  options.signal?.addEventListener("abort", destroy, { once: true });
  if (options.signal?.aborted) destroy();
  else schedule();

  return {
    setTheme(next) {
      if (disposed) return;
      targetTheme = next === "light" ? 1 : 0;
      if (autoplay) refresh();
      else { theme = targetTheme; render(lastTime); }
    },
    render,
    destroy,
  };
}

function attach(gl, program, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("WebGL could not create a shader object.");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(`Shader failed to compile: ${gl.getShaderInfoLog(shader)}`);
  gl.attachShader(program, shader);
  gl.deleteShader(shader);
}

function compile(gl, fragmentSource) {
  const program = gl.createProgram();
  attach(gl, program, gl.VERTEX_SHADER, VERTEX_SHADER);
  attach(gl, program, gl.FRAGMENT_SHADER, fragmentSource);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(`Shader failed to link: ${gl.getProgramInfoLog(program)}`);
  return program;
}

function uniforms(gl, program, names) {
  return Object.fromEntries(names.map((name) => [name, gl.getUniformLocation(program, name)]));
}

export function createShader(canvas, options = {}) {
  const gl = canvas.getContext("webgl2", { alpha: false, antialias: false, depth: false, stencil: false });
  if (!gl) throw new Error("WebGL2 is not available in this browser.");
  const dark = parseHex(options.background?.dark ?? "#090909");
  const light = parseHex(options.background?.light ?? "#ffffff");

  const field = compile(gl, FIELD_SHADER);
  const fieldUniforms = uniforms(gl, field, ["iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground"]);
  const post = compile(gl, RARITY_SHADER);
  const postUniforms = uniforms(gl, post, ["tScene", "iResolution", "iTime", "uLightMode", "uDarkBackground", "uLightBackground", "uPixelRatio"]);
  const framebuffer = gl.createFramebuffer();
  const scene = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, scene);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  let sceneWidth = 0, sceneHeight = 0;

  const setFrame = (locations, time, theme) => {
    gl.uniform2f(locations.iResolution, canvas.width, canvas.height);
    gl.uniform1f(locations.iTime, time);
    gl.uniform1f(locations.uLightMode, theme);
    gl.uniform3fv(locations.uDarkBackground, dark);
    gl.uniform3fv(locations.uLightBackground, light);
  };

  return animate(options, (time, theme, pixelRatio) => {
    const { width, height } = canvas;
    gl.viewport(0, 0, width, height);
    if (sceneWidth !== width || sceneHeight !== height) {
      sceneWidth = width;
      sceneHeight = height;
      gl.bindTexture(gl.TEXTURE_2D, scene);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, scene, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    const drawThemed = (mode) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.useProgram(field);
      setFrame(fieldUniforms, time, mode);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      gl.useProgram(post);
      setFrame(postUniforms, time, mode);
      gl.uniform1f(postUniforms.uPixelRatio, pixelRatio);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, scene);
      gl.uniform1i(postUniforms.tScene, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    if (theme <= 0 || theme >= 1) { drawThemed(theme); return; }
    drawThemed(0);
    gl.enable(gl.BLEND);
    gl.blendColor(0, 0, 0, theme);
    gl.blendFunc(gl.CONSTANT_ALPHA, gl.ONE_MINUS_CONSTANT_ALPHA);
    drawThemed(1);
    gl.disable(gl.BLEND);
  }, canvas, () => {
    gl.deleteProgram(field);
    gl.deleteProgram(post);
    gl.deleteFramebuffer(framebuffer);
    gl.deleteTexture(scene);
  }, Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE), gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)));
}
