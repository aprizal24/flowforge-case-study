"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ScreenGroupProps = {
  kicker: string;
  title: string;
  src: string;
  alt: string;
  naturalW: number;
  naturalH: number;
  sizes: string;
  zIndex: number;
  rotationDeg: number;
  inView: boolean;
  transitionDelay: string;
  floatDuration: string;
  floatDelay: string;
  floatAmount: "dash" | "proj" | "task";
  borderColor: string;
  shadow: string;
};

function ScreenGroup({
  kicker,
  title,
  src,
  alt,
  naturalW,
  naturalH,
  sizes,
  zIndex,
  rotationDeg,
  inView,
  transitionDelay,
  floatDuration,
  floatDelay,
  floatAmount,
  borderColor,
  shadow,
}: ScreenGroupProps) {
  const floatId = `wf-float-${floatAmount}-${kicker.replace(/\s+/g, "").toLowerCase()}`;
  return (
    <div
      className="absolute"
      style={{
        zIndex,
        opacity: inView ? 1 : 0,
        transform: inView
          ? `rotate(${rotationDeg}deg) translateY(0)`
          : `rotate(${rotationDeg}deg) translateY(26px)`,
        transition: `opacity 900ms ease ${transitionDelay}, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${transitionDelay}`,
        animation: inView
          ? `${floatId} ${floatDuration} ease-in-out ${floatDelay} infinite`
          : "none",
      }}
    >
      <div
        className="flex flex-col items-start"
        style={{ transform: `rotate(${-rotationDeg * 0.25}deg)` }}
      >
        <div
          className="flex flex-col items-start mb-2 sm:mb-2.5 md:mb-3"
          style={{ paddingLeft: "2px" }}
        >
          <span
            className="inline-flex items-center justify-center px-2.5 sm:px-3 py-1 rounded-full border text-label-small tracking-[0.16em] uppercase"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.78)",
              borderColor: "#C9DDF2",
              color: "#8592a2ff",
              backdropFilter: "blur(2px)",
            }}
          >
            {kicker}
          </span>
          <span
            className="mt-1.5 sm:mt-2 font-regular italic tracking-tight"
            style={{
              color: "#596982ff",
              fontSize: "clamp(1.0625rem, 1.55vw, 1.375rem)",
              fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
            }}
          >
            {title}
          </span>
        </div>

        <div
        >
          <Image
            priority={false}
            src={src}
            alt={alt}
            width={naturalW}
            height={naturalH}
            sizes={sizes}
            className="px-1 py-1 block"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes ${floatId}-dash {
          0%,
          100% {
            transform: rotate(${rotationDeg}deg) translateY(0px);
          }
          50% {
            transform: rotate(${rotationDeg - 0.15}deg) translateY(-6px);
          }
        }
        @keyframes ${floatId}-proj {
          0%,
          100% {
            transform: rotate(${rotationDeg}deg) translateY(0px);
          }
          50% {
            transform: rotate(${rotationDeg + 0.15}deg) translateY(-5px);
          }
        }
        @keyframes ${floatId}-task {
          0%,
          100% {
            transform: rotate(${rotationDeg}deg) translateY(0px);
          }
          50% {
            transform: rotate(${rotationDeg + 0.15}deg) translateY(-7px);
          }
        }
        @keyframes ${floatId} {
          0%,
          100% {
            transform: rotate(${rotationDeg}deg) translateY(0px);
          }
          50% {
            transform: rotate(${floatAmount === "task"
              ? rotationDeg + 0.15
              : floatAmount === "proj"
                ? rotationDeg + 0.15
                : rotationDeg - 0.15}deg)
              translateY(${floatAmount === "task"
                ? "-7px"
                : floatAmount === "proj"
                  ? "-5px"
                  : "-6px"});
          }
        }
      `}</style>
    </div>
  );
}

export function FlowForgeWireframe() {
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="wireframe"
      className="relative overflow-x-hidden bg-background-primary pt-16 sm:pt-20 lg:pt-24 xl:pt-28"
    >
      <div className="container-ff relative">
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
            Wireframe
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 h-px border-t border-dashed"
            style={{ borderColor: "#C9DDF2" }}
          />
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-3xl mx-auto text-center">
          <p
            className="leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: "#3E4F69",
            }}
          >
            Early wireframes helped establish content hierarchy, layout
            structure, and key interactions before refining the interface into
            the final visual design.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 relative rounded-[40px] overflow-hidden">
            {/* SEPARATE RADIAL GLOW LAYER — behind grid + wireframes */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Desktop glow: centered around the three-screen overlap (~50% x, 55% y) */}
              <div
                className="hidden md:block absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 50% 52%, rgba(156, 187, 222, 0.59) 0%, rgba(134, 170, 210, 0.28) 20%, rgba(125, 164, 210, 0.14) 40%, rgba(128, 162, 201, 0.06) 60%, rgba(122, 158, 200, 0.02) 78%, transparent 92%)",
                }}
              />
              {/* Mobile glow: centered around stacked vertical wireframes (~50% x, 52% y) */}
              <div
                className="md:hidden absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 50% 52%, rgba(166, 195, 228, 0.5) 0%, rgba(166, 195, 228, 0.28) 20%, rgba(166, 195, 228, 0.14) 40%, rgba(166, 195, 228, 0.06) 60%, rgba(166, 195, 228, 0.02) 78%, transparent 92%)",
                }}
              />
            </div>

            {/* Fine 22px grid — uses existing var(--background-primary) via color-mix for subtlety */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 1,
                backgroundImage:
                  "linear-gradient(to right, color-mix(in srgb, var(--background-primary) 20%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--background-primary) 50%, transparent) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* MOBILE: Vertical stack — each label group moves together */}
            <div className="md:hidden relative px-5 sm:px-6 pt-10 sm:pt-12">
              <div className="space-y-10 sm:space-y-12">
                <MobileScreenGroup
                  kicker="SCREEN 01"
                  title="Dashboard"
                  src="/images/flowforge/wireframe-dashboard.svg"
                  alt="Dashboard wireframe showing overview layout and analytics structure"
                  naturalW={689}
                  naturalH={689}
                  inView={inView}
                  delayMs={0}
                />
                <MobileScreenGroup
                  kicker="SCREEN 02"
                  title="Projects"
                  src="/images/flowforge/wireframe-projects.svg"
                  alt="Projects wireframe showing project list and organization layout"
                  naturalW={659}
                  naturalH={506}
                  inView={inView}
                  delayMs={120}
                />
                <MobileScreenGroup
                  kicker="SCREEN 03"
                  title="Task Management"
                  src="/images/flowforge/wireframe-task-management.svg"
                  alt="Task Management wireframe showing task assignment and progress layout"
                  naturalW={610}
                  naturalH={483}
                  inView={inView}
                  delayMs={240}
                />
              </div>
            </div>

            {/* DESKTOP / TABLET: Layered overlapping composition with Label+Image groups */}
            <div className="hidden md:block relative">
              <div
                className="relative w-full"
                style={{ paddingTop: "76%" }}
              >
                {/* GROUP 1: Dashboard — left, back, large */}
                <div
                  style={{
                    position: "absolute",
                    left: "1%",
                    top: "4%",
                    width: "55%",
                  }}
                >
                  <ScreenGroup
                    kicker="SCREEN 01"
                    title="Dashboard"
                    src="/images/flowforge/wireframe-dashboard.svg"
                    alt="Dashboard wireframe showing overview layout and analytics structure"
                    naturalW={689}
                    naturalH={689}
                    sizes="(max-width: 1279px) 48vw, (max-width: 1440px) 44vw, 40vw"
                    zIndex={10}
                    rotationDeg={1.4}
                    inView={inView}
                    transitionDelay="100ms"
                    floatDuration="9s"
                    floatDelay="1400ms"
                    floatAmount="dash"
                    borderColor="rgba(210, 219, 236, 0.55)"
                    shadow="0 18px 44px rgba(58, 79, 105, 0.10), 0 4px 12px rgba(58, 79, 105, 0.05)"
                  />
                </div>

                {/* GROUP 2: Projects — upper right, mid */}
                <div
                  style={{
                    position: "absolute",
                    right: "2%",
                    top: "7%",
                    width: "42%",
                  }}
                >
                  <ScreenGroup
                    kicker="SCREEN 02"
                    title="Projects"
                    src="/images/flowforge/wireframe-projects.svg"
                    alt="Projects wireframe showing project list and organization layout"
                    naturalW={659}
                    naturalH={506}
                    sizes="(max-width: 1279px) 37vw, (max-width: 1440px) 34vw, 31vw"
                    zIndex={20}
                    rotationDeg={1.1}
                    inView={inView}
                    transitionDelay="240ms"
                    floatDuration="10s"
                    floatDelay="1500ms"
                    floatAmount="proj"
                    borderColor="rgba(210, 219, 236, 0.55)"
                    shadow="0 20px 50px rgba(58, 79, 105, 0.11), 0 5px 14px rgba(58, 79, 105, 0.05)"
                  />
                </div>

                {/* GROUP 3: Task Management — front lower center */}
                <div
                  style={{
                    position: "absolute",
                    left: "26%",
                    top: "40%",
                    width: "45%",
                  }}
                >
                  <ScreenGroup
                    kicker="SCREEN 03"
                    title="Task Management"
                    src="/images/flowforge/wireframe-task-management.svg"
                    alt="Task Management wireframe showing task assignment and progress layout"
                    naturalW={610}
                    naturalH={483}
                    sizes="(max-width: 1279px) 39vw, (max-width: 1440px) 36vw, 33vw"
                    zIndex={30}
                    rotationDeg={-1.9}
                    inView={inView}
                    transitionDelay="380ms"
                    floatDuration="11s"
                    floatDelay="1600ms"
                    floatAmount="task"
                    borderColor="rgba(210, 219, 236, 0.55)"
                    shadow="0 26px 60px rgba(58, 79, 105, 0.13), 0 6px 18px rgba(58, 79, 105, 0.06)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}

function MobileScreenGroup({
  kicker,
  title,
  src,
  alt,
  naturalW,
  naturalH,
  inView,
  delayMs,
}: {
  kicker: string;
  title: string;
  src: string;
  alt: string;
  naturalW: number;
  naturalH: number;
  inView: boolean;
  delayMs: number;
}) {
  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      style={{
        transition:
          "opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delayMs}ms, ${delayMs}ms`,
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(24px) scale(0.985)",
      }}
    >
      <div
        className="flex flex-col items-start mb-2.5 sm:mb-3"
        style={{ paddingLeft: "2px" }}
      >
        <span
          className="inline-flex items-center justify-center px-2.5 sm:px-3 py-1 rounded-full border text-label-small tracking-[0.16em] uppercase"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.78)",
            borderColor: "#C9DDF2",
            color: "#5374A9",
          }}
        >
          {kicker}
        </span>
        <span
          className="mt-1.5 sm:mt-2 font-semibold italic tracking-tight"
          style={{
            color: "#3E4F69",
            fontSize: "clamp(1.0625rem, 4.2vw, 1.375rem)",
            lineHeight: 1.15,
            fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {title}
        </span>
      </div>

      <div
        className="relative w-full rounded-2xl overflow-hidden border"
        style={{
          borderColor: "rgba(152, 170, 205, 0.55)",
          boxShadow:
            "0 14px 38px rgba(58, 79, 105, 0.09), 0 3px 10px rgba(58, 79, 105, 0.04)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <Image
          priority={false}
          src={src}
          alt={alt}
          width={naturalW}
          height={naturalH}
          sizes="(max-width: 767px) 92vw, 86vw"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
