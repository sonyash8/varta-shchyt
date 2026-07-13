"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (barRef.current) {
        barRef.current.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: "0%",
        background: "#F5A623",
        boxShadow: "0 0 8px rgba(245,166,35,0.35)",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    />
  );
}
