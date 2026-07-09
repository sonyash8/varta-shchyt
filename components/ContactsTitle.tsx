"use client";
import { useRef, useEffect, useState } from "react";

const LINES   = ["ЗВ'ЯЖІТЬСЯ", "З НАМИ"];
const FONT    = "900 64px Montserrat, sans-serif";
const SAMPLE  = 2;
const RADIUS  = 60;
const REPEL   = 4;
const SPRING  = 0.12;
const FRICTION = 0.8;

interface P { ox:number; oy:number; x:number; y:number; vx:number; vy:number }

export default function ContactsTitle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ptRef     = useRef<P[]>([]);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const raf       = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr    = window.devicePixelRatio || 1;
      const LINE_H = 74;
      const PAD    = 6;
      const H      = LINES.length * LINE_H + PAD * 2;

      ctx.font = FONT;
      const W = Math.max(...LINES.map(l => ctx.measureText(l).width)) + PAD * 2;

      canvas.width        = Math.round(W * dpr);
      canvas.height       = Math.round(H * dpr);
      canvas.style.width  = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.scale(dpr, dpr);
      ctx.font         = FONT;
      ctx.textBaseline = "top";
      ctx.fillStyle    = "#ffffff";
      LINES.forEach((line, i) => ctx.fillText(line, PAD, PAD + i * LINE_H));

      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pts: P[] = [];

      for (let cy = 0; cy < H; cy += SAMPLE) {
        for (let cx = 0; cx < W; cx += SAMPLE) {
          const px  = Math.round(cx * dpr);
          const py  = Math.round(cy * dpr);
          const idx = (py * canvas.width + px) * 4;
          if (data[idx + 3] > 120)
            pts.push({ ox: cx, oy: cy, x: cx, y: cy, vx: 0, vy: 0 });
        }
      }
      ptRef.current = pts;

      cancelAnimationFrame(raf.current);
      const tick = () => {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "#ffffff";

        const { x: mx, y: my } = mouse.current;
        for (const p of ptRef.current) {
          const dx   = p.x - mx;
          const dy   = p.y - my;
          const dist = Math.hypot(dx, dy);

          if (dist < RADIUS && dist > 0.5) {
            const force = (1 - dist / RADIUS) * REPEL;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          p.vx += (p.ox - p.x) * SPRING;
          p.vy += (p.oy - p.y) * SPRING;
          p.vx *= FRICTION;
          p.vy *= FRICTION;
          p.x  += p.vx;
          p.y  += p.vy;

          ctx.fillRect(p.x, p.y, SAMPLE, SAMPLE);
        }
        raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    };

    document.fonts.load(FONT).then(init);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  if (isMobile) {
    return (
      <div className="hero-title" style={{ marginBottom: "20px" }}>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "clamp(36px, 10vw, 52px)", lineHeight: 1.1, textTransform: "uppercase", color: "#fff", margin: 0 }}>
          ЗВ&apos;ЯЖІТЬСЯ<br />З НАМИ
        </h1>
      </div>
    );
  }

  return (
    <div className="hero-title" style={{ marginBottom: "20px", userSelect: "none" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", cursor: "default" }}
        onMouseMove={(e) => {
          const r = canvasRef.current?.getBoundingClientRect();
          if (r) mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        }}
        onMouseLeave={() => { mouse.current = { x: -9999, y: -9999 }; }}
      />
    </div>
  );
}
