"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function FlowForgeSmartWorkspace() {
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
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="smart-workspace"
      className="relative bg-background-primary pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-20 sm:pb-24 lg:pb-28 xl:pb-32"
      style={{ overflowX: "clip", overflowY: "visible" }}
    >
      <div className="container-ff relative">
        {/* Section label with flanking dashed lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 h-px border-t border-dashed"
            style={{ borderColor: "#C9DDF2" }}
          />
          <span
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-label-medium tracking-[0.14em] uppercase border"
            style={{
              backgroundColor: "#E8F2FC",
              borderColor: "#C9DDF2",
              color: "#5374A9",
            }}
          >
            Smart Workspace
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 h-px border-t border-dashed"
            style={{ borderColor: "#C9DDF2" }}
          />
        </div>

        {/* Description */}
        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-3xl mx-auto text-center">
          <h2
            className="font-bold tracking-tight leading-[1.1]"
            style={{
              fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
              color: "#3E4F69",
            }}
          >
            Built-In AI Assistant
          </h2>
          <p
            className="mt-6 sm:mt-8 lg:mt-10 leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: "#3E4F69",
            }}
          >
            FlowForge&apos;s AI Assistant helps teams understand project
            activity, identify what needs attention, and get useful insights
            without manually going through multiple screens.
          </p>
        </div>

        {/* ========== MAIN VISUAL — single composite image ========== */}
        <div
          className="mt-16 sm:mt-20 lg:mt-24 xl:mt-28 w-full flex items-center justify-center"
          style={{
            zIndex: 10,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(26px)",
            transition:
              "opacity 900ms ease 140ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 140ms",
          }}
        >
          {/* Subtle CSS grid / dot backdrop layer behind the composite */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              zIndex: 0,
              left: "-3%",
              right: "-3%",
              top: "-4%",
              bottom: "-6%",
              maxWidth: "min(100vw, 100%)",
            }}
          >
            {/* Soft radial glow */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 50%, rgba(166, 195, 228, 0.34) 0%, rgba(166, 195, 228, 0.18) 22%, rgba(166, 195, 228, 0.09) 44%, rgba(166, 195, 228, 0.04) 70%, rgba(166, 195, 228, 0.02) 84%, transparent 95%)",
              }}
            />
            {/* Large-spaced subtle grid using the global primary token */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, color-mix(in srgb, var(--background-primary) 14%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--background-primary) 14%, transparent) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          {/* Composite image — raw image only, NO outer card/frame */}
          <div
            className="relative w-full flex items-center justify-center"
            style={{ zIndex: 2 }}
          >
            <Image
              priority={false}
              src="/images/flowforge/ai-assistant-composite.svg"
              alt="FlowForge AI Assistant interface with laptop mockup, AI response card on the left, and user message card on the right"
              width={1268}
              height={747}
              sizes="(max-width: 1279px) 88vw, (max-width: 1440px) 78vw, 72vw"
              className="block w-full max-w-[1280px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
