"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useColorScheme } from "@mui/material/styles";

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uDpr;
uniform float uTime;
uniform float uDark;
uniform float uLevel; // 1=トップの霧 / 低いほど静かな霧
uniform float uMass; // 柱はトップにだけ立つ
uniform vec3 uTrail[14];

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + vec2(17.0, 9.0);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  vec2 screen = vec2(frag.x, uRes.y - frag.y);
  vec2 world = screen - 0.5 * uRes + vec2(uTime * 7.0, uTime * 3.0);

  // 触れた所は掻き乱れ、ゆっくり治る
  float disturb = 0.0;
  for (int i = 0; i < 14; i++) {
    vec3 tp = uTrail[i];
    if (tp.z > 0.004) {
      vec2 d = screen - tp.xy;
      float infl = tp.z * exp(-dot(d, d) / (190.0 * 190.0));
      disturb += infl;
    }
  }
  disturb = min(disturb, 1.2);

  // ドメインワープした霧。大きくゆっくりした構造
  vec2 p = world * 0.0011;
  float tt = uTime * 0.03;
  vec2 q = vec2(
    fbm(p + vec2(0.0, tt * 0.7)),
    fbm(p + vec2(5.2, 1.3) - vec2(tt * 0.5, 0.0))
  );
  float f = fbm(p + 1.6 * q + vec2(tt * 0.2, -tt * 0.15));
  // 地はほぼ紙。影は局所に溜まる
  float tone = smoothstep(0.08, 0.62, f);
  // 掻き乱された所は霧が泡立つ(変形ではなく乱流)。輪郭は柔らかく
  float churn = 0.62 * vnoise(world * 0.004 + vec2(uTime * 0.3, -uTime * 0.22))
              + 0.38 * vnoise(world * 0.009 - vec2(uTime * 0.24, uTime * 0.18));
  tone += (churn - 0.5) * disturb * 0.6;
  tone -= disturb * 0.07;

  // 明暗の符号: light=-1(暗くする) / dark=+1(明るくする)
  float sgn = uDark * 2.0 - 1.0;

  // 影の色温度はゆっくり漂う(暖⇄寒)
  float hueN = smoothstep(0.3, 0.7, fbm(p * 0.55 + vec2(3.7, 8.1) + tt * 0.1));

  vec3 paper = vec3(0.966, 0.954, 0.928);
  vec3 shade = mix(vec3(0.60, 0.582, 0.548), vec3(0.556, 0.574, 0.588), hueN);
  // 静かなページでは影が浅くなる
  vec3 light = mix(mix(paper, shade, uLevel), paper, tone);

  vec3 paperD = vec3(0.052, 0.052, 0.058);
  vec3 smoke = mix(vec3(0.245, 0.238, 0.222), vec3(0.205, 0.220, 0.235), hueN);
  vec3 dark = mix(paperD, mix(paperD, smoke, uLevel), 1.0 - tone);

  vec3 col = mix(light, dark, uDark);

  // 糸状の筋。パッチの中でだけ現れる繊維
  float rr = fbm(p * 3.2 + q * 2.2 + vec2(tt * 0.15, 0.0));
  float ridge = pow(1.0 - abs(2.0 * rr - 1.0), 7.0);
  float fmask = smoothstep(0.52, 0.78, fbm(p * 0.7 + vec2(9.3, 2.6)));
  col += sgn * ridge * fmask * 0.05 * uLevel;

  // 図: 粒でできた柱。上端は霧に溶け、下に行くほど濃い
  float aspect = uRes.x / uRes.y;
  vec2 su = screen / uRes.y;
  float bx = min(0.26, aspect * 0.30);
  vec2 c = vec2(aspect * 0.70, 1.18);
  vec2 qq = abs(su - c) - vec2(0.0, 0.62 - bx);
  float sd = length(max(qq, 0.0)) + min(max(qq.x, qq.y), 0.0) - bx;
  float soft = mix(0.17, 0.05, smoothstep(0.56, 1.0, su.y));
  float mass = 1.0 - smoothstep(-soft, soft, sd);
  float grad = smoothstep(0.50, 1.02, su.y);
  float density = mass * (0.22 + 0.78 * grad);
  density *= 0.82 + 0.36 * fbm(p * 2.3 + vec2(4.4, 1.9));
  vec3 massCol = mix(vec3(0.088, 0.086, 0.083), vec3(0.905, 0.892, 0.868), uDark);
  col = mix(col, massCol, clamp(density, 0.0, 1.0) * 0.94 * uMass);

  // 縦の傷。数本だけ、途切れながら。たまに引き直される
  float sseed = floor(uTime / 9.0);
  float scr = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float sx = uRes.x * hash(vec2(fi * 3.17, sseed + fi));
    float wob = (vnoise(vec2(frag.y * 0.011, fi * 7.0 + sseed)) - 0.5) * 3.0;
    float dline = abs(frag.x - sx + wob);
    float broken = smoothstep(0.42, 0.75, vnoise(vec2(frag.y * 0.017 + fi * 31.0, sseed * 5.0)));
    scr += smoothstep(1.3, 0.0, dline) * broken * (0.3 + 0.7 * hash(vec2(fi, sseed)));
  }
  col += sgn * scr * 0.05 * uLevel;

  // 塵。まれな斑点がゆっくり入れ替わる
  float dseed = floor(uTime / 1.7);
  float dh = hash(floor(frag * 0.55) + vec2(dseed * 17.0, dseed * 5.0));
  if (dh > 0.9994) {
    col += sgn * ((dh - 0.9994) / 0.0006) * 0.30;
  }

  // 粒子は生きている。トーンの移ろう場所ほど粒が濃い
  float gSeed = floor(uTime * 24.0);
  float g1 = hash(gl_FragCoord.xy + vec2(gSeed * 13.1, gSeed * 7.7));
  float g2 = hash(floor(frag * 0.85) + vec2(gSeed * 3.3, gSeed * 11.9));
  float g = mix(g1, g2, 0.55);
  float lum = dot(col, vec3(0.3333));
  float midw = lum * (1.0 - lum) * 4.0;
  col += (g - 0.5) * (0.034 + 0.09 * midw + disturb * 0.1);

  gl_FragColor = vec4(col, 1.0);
}
`;

// トップは全強度。他ページは静かな霧が残る
const QUIET_LEVEL = 0.45;

export default function FogGround() {
  const { mode, systemMode } = useColorScheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const darkRef = React.useRef(0);
  if (mode !== undefined) {
    darkRef.current =
      mode === "dark" || (mode === "system" && systemMode === "dark") ? 1 : 0;
  }
  const levelRef = React.useRef(isHome ? 1 : QUIET_LEVEL);
  levelRef.current = isHome ? 1 : QUIET_LEVEL;
  const massRef = React.useRef(isHome ? 1 : 0);
  massRef.current = isHome ? 1 : 0;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("[fog-ground] shader compile:", gl.getShaderInfoLog(s));
      }
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("[fog-ground] program link:", gl.getProgramInfoLog(prog));
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = {
      res: gl.getUniformLocation(prog, "uRes"),
      dpr: gl.getUniformLocation(prog, "uDpr"),
      time: gl.getUniformLocation(prog, "uTime"),
      dark: gl.getUniformLocation(prog, "uDark"),
      level: gl.getUniformLocation(prog, "uLevel"),
      mass: gl.getUniformLocation(prog, "uMass"),
      trail: gl.getUniformLocation(prog, "uTrail"),
    };

    // 触れた軌跡。動くほど強く掻き乱れ、時間で治る
    const TRAIL = 14;
    const trail = new Float32Array(TRAIL * 3);
    let trailHead = 0;
    let lastPX = -1;
    let lastPY = -1;
    let lastPT = 0;
    const onPointerMove = (e: PointerEvent) => {
      const now = performance.now();
      if (lastPX >= 0) {
        const dx = e.clientX - lastPX;
        const dy = e.clientY - lastPY;
        const dist = Math.hypot(dx, dy);
        if (dist < 7 && now - lastPT < 40) return;
        const speed = dist / Math.max(now - lastPT, 1);
        const strength = Math.min(0.45 + speed * 0.35, 1.0);
        trail[trailHead * 3] = e.clientX;
        trail[trailHead * 3 + 1] = e.clientY;
        trail[trailHead * 3 + 2] = strength;
        trailHead = (trailHead + 1) % TRAIL;
      }
      lastPX = e.clientX;
      lastPY = e.clientY;
      lastPT = now;
    };
    window.addEventListener("pointermove", onPointerMove);

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // MUIのmode解決前はInitColorSchemeScriptが書いたhtmlクラスに従う
    const htmlDark = document.documentElement.classList.contains("dark")
      ? 1
      : 0;
    darkRef.current = htmlDark;
    const start = performance.now();
    let darkMix = htmlDark;
    let levelMix = levelRef.current;
    let massMix = massRef.current;
    let last = start;
    let raf = 0;
    const frame = (now: number) => {
      const t = (now - start) / 1000;
      const dtRaw = (now - last) / 1000;
      const dt = Math.min(dtRaw, 0.5);
      last = now;
      // テーマ切替は霧がクロスフェードする(時間ベース。フレーム間引きに強い)
      darkMix += (darkRef.current - darkMix) * Math.min(1, dt * 6);
      // ページ遷移で霧の濃さがゆっくり変わる
      levelMix += (levelRef.current - levelMix) * Math.min(1, dt * 3);
      massMix += (massRef.current - massMix) * Math.min(1, dt * 3);

      // 航跡の減衰。フレームが疎でも実時間で治る
      const decay = Math.exp(-Math.min(dtRaw, 10) / 1.4);
      for (let i = 0; i < TRAIL; i++) {
        trail[i * 3 + 2] *= decay;
      }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      gl.uniform2f(u.res, w, h);
      gl.uniform1f(u.dpr, dpr);
      gl.uniform1f(u.time, t);
      gl.uniform1f(u.dark, darkMix);
      gl.uniform1f(u.level, levelMix);
      gl.uniform1f(u.mass, massMix);
      gl.uniform3fv(u.trail, trail);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  const resolvedDark =
    mode === "dark" || (mode === "system" && systemMode === "dark");

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          // 背景の霧。ページのコンテンツ(見出しやInstancesの3D)より必ず後ろに敷く。
          // 0のままだと、位置指定された霧canvasが非位置指定のコンテンツより前に描画され、
          // template のフェードイン(site-wrapperのopacity)完了後にInstancesのブロックを覆い隠す。
          // Instancesの3D canvas(zIndex:-1)より更に後ろに置く。
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
      {/* 周縁の極小文字。情報は存在するが素材より先に届かない */}
      {mode !== undefined && isHome && (
        <div
          aria-hidden
          style={{
            position: "fixed",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 0,
            writingMode: "vertical-rl",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: 9,
            letterSpacing: "0.42em",
            whiteSpace: "nowrap",
            maxHeight: "78vh",
            overflow: "hidden",
            opacity: 0.5,
            color: resolvedDark
              ? "rgba(233, 229, 220, 0.55)"
              : "rgba(24, 22, 20, 0.55)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          existence precedes its reasons
        </div>
      )}
    </>
  );
}
