"use client";

import { useEffect, useRef, useState } from "react";

export function FlowForgeOutcome() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
  ref={sectionRef}
  id="outcome"
  className="relative bg-background-primary pt-20 sm:pt-24 lg:pt-28 xl:pt-32 overflow-hidden"
  style={{
    minHeight: "100vh",
    maxHeight: "1100px",
  }}
>
  <div
    className="container-ff relative flex flex-col"
    style={{
      height: "clamp(720px, 84vh, 840px)",
    }}
  >
        {/* ========= Thank You heading + supporting text ========= */}
        <div
          className="max-w-4xl mx-auto text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(22px)",
            transition:
              "opacity 900ms ease 120ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
          }}
        >
          <h1
            className="font-bold tracking-tight leading-[1.02]"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              letterSpacing: "-0.04em",
              color: "#3E4F69",
            }}
          >
            Thank You
          </h1>
          <p
            className="mt-6 sm:mt-8 lg:mt-10 leading-relaxed max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(1rem, 1.35vw, 1.125rem)",
              color: "#3E4F69",
              opacity: 0.88,
            }}
          >
            Thanks for scrolling — hope you enjoyed the process.
          </p>
        </div>

        {/* ========= Large whitespace ========= */}
        <div className="flex-grow" />

        {/* ========= Divider + Designer credit (aligned to content width) ========= */}
        <div
          className="max-w-4xl w-full mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 900ms ease 260ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 260ms",
          }}
        >
          <hr
            aria-hidden="true"
            className="border-t-0"
            style={{
              borderTop: "1px solid rgba(201, 221, 242, 0.85)",
              width: "100%",
            }}
          />
          <p
            className="mt-4 sm:mt-5 lg:mt-6 text-right"
            style={{
              color: "#3E4F69",
              opacity: 0.82,
              fontSize: "clamp(0.8125rem, 1.1vw, 0.9375rem)",
              letterSpacing: "0.02em",
            }}
          >
            Designed by Rian · UI/UX Designer
          </p>
        </div>

        {/* ========= Decorative FlowForge typography — bottom, oversized, editorial ========= */}
        <div
          aria-hidden="true"
          className="mt-12 sm:mt-16 lg:mt-20 w-full text-center pointer-events-none select-none"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(22px)",
            transition:
              "opacity 900ms ease 420ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 420ms",
          }}
        >
          <span
            className="block tracking-tight font-semibold whitespace-nowrap"
            style={{
              color: "#98AACD",
              opacity: 0.34,
              fontSize: "clamp(4.5rem, 18vw, 12.5rem)",
              lineHeight: 0.78,
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              marginBottom: "-0.18em",
            }}
          >
            FlowForge
          </span>
        </div>
      </div>
    </section>
  );
}
