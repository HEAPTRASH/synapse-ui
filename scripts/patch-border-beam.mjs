/**
 * Recolour border-beam's "ocean" palette to the SynapseWare ramp.
 * Runs after install so the beam ships in action blue + mint instead of the library's violet.
 *
 * Every `ocean: {…}` / `ocean: […]` block in the bundle is walked and each rgb()/rgba() literal in
 * it is mapped by hue — violet → action, blue → blue/press, cyan → mint — so a version bump that
 * changes the literals cannot leave an off-brand colour behind. Brand and grey literals are left
 * alone, which also makes the script idempotent. Exits non-zero if any ocean literal is still
 * off-ramp afterwards.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "node_modules/border-beam/dist/index.es.js",
  "node_modules/border-beam/dist/index.cjs.js",
].map((f) => path.join(root, f));

const BRAND = {
  action: [29, 78, 216], // #1D4ED8
  blue: [59, 130, 246], // #3B82F6
  press: [23, 66, 159], // #17429F
  mint: [94, 234, 212], // #5EEAD4
};
const brandSet = new Set(Object.values(BRAND).map((c) => c.join(",")));

function hue([r, g, b]) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  if (d === 0) return null; // grey
  let h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return h * 60;
}
const isGrey = ([r, g, b]) => Math.max(r, g, b) - Math.min(r, g, b) < 24;
const onRamp = (rgb) => brandSet.has(rgb.join(",")) || isGrey(rgb);

/** Violet and indigo → action / press; blue → blue; anything cooler than that → mint. */
function toBrand(rgb, i) {
  const h = hue(rgb);
  if (h === null) return rgb;
  if (h >= 238) return i % 2 ? BRAND.press : BRAND.action;
  if (h >= 215) return i % 2 ? BRAND.action : BRAND.blue;
  return BRAND.mint;
}

const LITERAL = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/g;

/** Index of the closing bracket for the block that opens at `open`. */
function blockEnd(src, open) {
  const pairs = { "{": "}", "[": "]" };
  const stack = [];
  for (let i = open; i < src.length; i++) {
    const ch = src[i];
    if (pairs[ch]) stack.push(pairs[ch]);
    else if (ch === stack[stack.length - 1]) { stack.pop(); if (!stack.length) return i + 1; }
  }
  throw new Error("Unbalanced ocean block");
}

function recolour(src) {
  let out = "", cursor = 0, swapped = 0, leftover = [];
  const key = /\bocean\s*:\s*/g;
  let m;
  while ((m = key.exec(src))) {
    const open = m.index + m[0].length;
    if (open < cursor || !"{[".includes(src[open])) continue;
    const end = blockEnd(src, open);
    let i = 0;
    const block = src.slice(open, end).replace(LITERAL, (lit, r, g, b, a) => {
      const rgb = [r, g, b].map(Number);
      if (onRamp(rgb)) return lit;
      const [nr, ng, nb] = toBrand(rgb, i++);
      swapped++;
      return a === undefined ? `rgb(${nr}, ${ng}, ${nb})` : `rgba(${nr}, ${ng}, ${nb}, ${a})`;
    });
    for (const lit of block.matchAll(LITERAL)) {
      const rgb = [lit[1], lit[2], lit[3]].map(Number);
      if (!onRamp(rgb)) leftover.push(lit[0]);
    }
    out += src.slice(cursor, open) + block;
    cursor = end;
    key.lastIndex = end;
  }
  return { src: out + src.slice(cursor), swapped, leftover };
}

let failed = false;
for (const file of files) {
  if (!fs.existsSync(file)) { console.warn("skip missing", file); continue; }
  const { src, swapped, leftover } = recolour(fs.readFileSync(file, "utf8"));
  fs.writeFileSync(file, src);
  const rel = path.relative(root, file);
  if (leftover.length) { failed = true; console.error(`FAIL ${rel}: off-ramp literals left in ocean:`, [...new Set(leftover)].join(" ")); }
  else console.log(`patched ${rel} (${swapped} swapped, clean)`);
}
if (failed) process.exit(1);
