"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;
    let counterObserver: IntersectionObserver;

    // Double rAF — wait for Next.js to finish painting the new page
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const els = document.querySelectorAll("[data-reveal]");
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => observer.observe(el));

        // Stats counters — animate numbers like "15+", "500+", "100%" (skip "24/7")
        const counters = document.querySelectorAll(".stat-num");
        counterObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el = entry.target as HTMLElement;
              counterObserver.unobserve(el);
              const text = el.textContent || "";
              const match = text.match(/^(\d+)(.*)$/);
              if (!match || text.includes("/")) return;
              const target = parseInt(match[1], 10);
              const suffix = match[2];
              const duration = 1600;
              const start = performance.now();
              const tick = (now: number) => {
                const p = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - p, 4);
                el.textContent = Math.round(target * ease) + suffix;
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            });
          },
          { threshold: 0.6 }
        );
        counters.forEach((el) => counterObserver.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      observer?.disconnect();
      counterObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
