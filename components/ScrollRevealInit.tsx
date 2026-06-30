"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

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
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
