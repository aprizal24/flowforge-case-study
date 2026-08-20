"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ShowcaseProps = {
  index: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  naturalW: number;
  naturalH: number;
  sizes: string;
  inView: boolean;
  transitionDelay: string;
  reverse: boolean;
};

function Showcase({
  title,
  description,
  src,
  alt,
  naturalW,
  naturalH,
  sizes,
  inView,
  transitionDelay,
  reverse,
}: ShowcaseProps) {
  return (
    <div className="w-full">
      <div
        className={`grid w-full grid-cols-1 gap-10 sm:gap-12 lg:gap-14 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        } lg:grid-cols-12`}
      >
        {/* TEXT PANEL */}
        <div className="lg:col-span-5 w-full">
          <div
            className="relative w-full max-w-xl rounded-[28px] p-8 sm:p-9 lg:p-10"
            style={{
              background: "linear-gradient(135deg, #E8F2FC 0%, #C9DDF2 60%, #ADC6E0 100%)",
              border: "1px solid rgba(201, 221, 242, 0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              boxShadow: "0 16px 42px rgba(58, 79, 105, 0.06)",
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateY(0)"
                : reverse
                  ? "translateY(26px) translateX(20px)"
                  : "translateY(26px) translateX(-20px)",
              transition: `opacity 900ms ease ${transitionDelay}, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${transitionDelay}`,
            }}
          >
            <p
              className="text-label-medium tracking-[0.18em] uppercase font-semibold"
              style={{ color: "#5374A9" }}
            >
              {title}
            </p>
            <p
              className="mt-5 sm:mt-6 text-body-medium sm:text-body-large leading-relaxed"
              style={{ color: "#3E4F69" }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* IMAGE PANEL */}
        <div className="lg:col-span-7 w-full">
          <div
            className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden"
            style={{
              border: "1px solid rgba(201, 221, 242, 0.9)",
              boxShadow:
                "0 26px 62px rgba(58, 79, 105, 0.11), 0 6px 18px rgba(58, 79, 105, 0.05)",
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateY(0)"
                : reverse
                  ? "translateY(26px) translateX(-20px)"
                  : "translateY(26px) translateX(20px)",
              transition: `opacity 900ms ease ${transitionDelay}, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${transitionDelay}`,
            }}
          >
            <div className="relative w-full">
              <Image
                priority={false}
                src={src}
                alt={alt}
                width={naturalW}
                height={naturalH}
                sizes={sizes}
                className="w-full h-auto block object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UIPresentationFrame({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <div
      className="relative w-full rounded-[22px] overflow-hidden"
      style={{
        border: "1px solid rgba(201, 221, 242, 0.7)",
        boxShadow: small
          ? "0 18px 46px rgba(58, 79, 105, 0.09), 0 4px 12px rgba(58, 79, 105, 0.04)"
          : "0 26px 62px rgba(58, 79, 105, 0.11), 0 6px 18px rgba(58, 79, 105, 0.05)",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
      }}
    >
      {children}
    </div>
  );
}

export function FlowForgeUIDesign() {
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
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ui-design"
      className="relative bg-background-primary pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-12 sm:pb-16 lg:pb-20 xl:pb-24"
      style={{ overflowX: "clip", overflowY: "visible" }}
    >
      <div className="container-ff relative">
        {/* Section header pill with flanking dashed lines */}
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
            UI Design
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
            The Final FlowForge Interface
          </h2>
          <p
            className="mt-6 sm:mt-8 lg:mt-10 leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: "#3E4F69",
            }}
          >
            An overview of the final FlowForge interface, designed to bring
            project management, task tracking, collaboration, and analytics
            into one focused workspace. The visual direction combines a
            lightweight interface, soft blue accents, and clear hierarchy to
            make FlowForge feel approachable while keeping complex workflows
            easy to navigate.
          </p>
        </div>

        {/* ========== LANDING PAGE EDITORIAL STAGE ========== */}
        {/* Stage height is NATURALLY driven by the Landing image in normal flow */}
        <div className="mt-16 sm:mt-20 lg:mt-24 relative">
          {/* Radial glow (covers the entire stage's visual area) */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              zIndex: 0,
              inset: "-6% -4% 0% -4%",
            }}
          >
            <div
              className="hidden md:block absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 42% 55%, rgba(166, 195, 228, 0.58) 0%, rgba(166, 195, 228, 0.32) 20%, rgba(166, 195, 228, 0.16) 40%, rgba(166, 195, 228, 0.07) 60%, rgba(166, 195, 228, 0.03) 76%, transparent 90%)",
              }}
            />
            <div
              className="md:hidden absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 50%, rgba(166, 195, 228, 0.48) 0%, rgba(166, 195, 228, 0.26) 20%, rgba(166, 195, 228, 0.13) 42%, rgba(166, 195, 228, 0.05) 66%, rgba(166, 195, 228, 0.02) 82%, transparent 94%)",
              }}
            />
          </div>

          {/* Grid layer — primarily covers the right-side composition */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              zIndex: 1,
              inset: "-2% -4% 0% 34%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, color-mix(in srgb, var(--background-primary) 18%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--background-primary) 18%, transparent) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Mobile: simple full composition grid (more subtle) */}
          <div
            aria-hidden="true"
            className="md:hidden pointer-events-none absolute inset-0"
            style={{ zIndex: 1 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, color-mix(in srgb, var(--background-primary) 14%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--background-primary) 14%, transparent) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
          </div>

          {/* ============ DESKTOP / TABLET EDITORIAL COMPOSITION ============ */}
          {/* Stage is flow-driven: Landing image rendered IN normal flow sets height */}
          <div className="hidden md:block relative" style={{ zIndex: 10 }}>
            {/* Landing Page UI — rendered in normal flow at 54% width */}
            {/* It is the HEIGHT-DRIVER of this stage — no more paddingTop aspect hack */}
            <div
              className="relative"
              style={{
                width: "54%",
                zIndex: 20,
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateX(0) translateY(0)"
                  : "translateX(-24px) translateY(20px)",
                transition:
                  "opacity 900ms ease 120ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
              }}
            >
              <UIPresentationFrame>
                <Image
                  priority={false}
                  src="/images/flowforge/ui-landing-page.png"
                  alt="FlowForge Landing Page UI design showing the final visual direction with soft blue accents and clear content hierarchy"
                  width={900}
                  height={1380}
                  sizes="(max-width: 1279px) 46vw, (max-width: 1440px) 42vw, 39vw"
                  className="w-full h-auto block rounded-[20px]"
                />
              </UIPresentationFrame>
            </div>

            {/* SECONDARY ELEMENTS remain absolute, positioned against the same stage */}
            {/* Editorial "Landing Page" title — UPPER RIGHT, above secondary UI */}
            <div
              className="absolute"
              style={{
                left: "61%",
                top: "14%",
                width: "36%",
                zIndex: 25,
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0)"
                  : "translateY(18px)",
                transition:
                  "opacity 800ms ease 220ms, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 220ms",
              }}
            >
              <h2
                className="italic font-light leading-[0.98] tracking-tight"
                style={{
                  color: "#98AACD",
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "clamp(2.5rem, 6.2vw, 5.5rem)",
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                Landing
                <br />
                Page
              </h2>
            </div>

            {/* Secondary UI Product Showcase — RIGHT, below title */}
            <div
              className="absolute"
              style={{
                right: "4%",
                top: "38%",
                width: "32%",
                zIndex: 30,
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) rotate(0.7deg)"
                  : "translateY(22px) rotate(0.7deg)",
                transition:
                  "opacity 900ms ease 340ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 340ms",
              }}
            >
              <UIPresentationFrame small>
                <Image
                  priority={false}
                  src="/images/flowforge/ui-secondary-showcase.png"
                  alt="FlowForge product UI showcase showing dashboard, projects, and task management screens in the final visual design"
                  width={700}
                  height={900}
                  sizes="(max-width: 1279px) 28vw, (max-width: 1440px) 25vw, 23vw"
                  className="w-full h-auto block rounded-[18px]"
                />
              </UIPresentationFrame>
            </div>
          </div>

          {/* ============ MOBILE: CLEAN VERTICAL LAYOUT ============ */}
          <div className="md:hidden relative" style={{ zIndex: 10 }}>
            <div className="relative px-5 sm:px-6 py-10 sm:py-12">
              <div className="max-w-xl mx-auto">
                {/* Landing Page Title */}
                <div
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition:
                      "opacity 700ms ease 120ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
                  }}
                  className="mb-6 sm:mb-8"
                >
                  <h2
                    className="italic font-light leading-[0.98] tracking-tight"
                    style={{
                      color: "#98AACD",
                      fontFamily:
                        "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                      fontSize: "clamp(2.25rem, 14.5vw, 3.75rem)",
                    }}
                  >
                    Landing
                    <br />
                    Page
                  </h2>
                </div>

                {/* Landing Page image (mobile: dominant, center) */}
                <div
                  className="mb-10 sm:mb-12"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition:
                      "opacity 700ms ease 200ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 200ms",
                  }}
                >
                  <UIPresentationFrame>
                    <Image
                      priority={false}
                      src="/images/flowforge/ui-landing-page.png"
                      alt="FlowForge Landing Page UI design showing the final visual direction with soft blue accents and clear content hierarchy"
                      width={900}
                      height={1380}
                      sizes="(max-width: 767px) 92vw, 86vw"
                      className="w-full h-auto block rounded-[20px]"
                    />
                  </UIPresentationFrame>
                </div>

                {/* Secondary UI image */}
                <div
                  className="max-w-md mx-auto"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition:
                      "opacity 700ms ease 320ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 320ms",
                  }}
                >
                  <UIPresentationFrame small>
                    <Image
                      priority={false}
                      src="/images/flowforge/ui-secondary-showcase.png"
                      alt="FlowForge product UI showcase showing dashboard, projects, and task management screens in the final visual design"
                      width={700}
                      height={900}
                      sizes="(max-width: 767px) 78vw, 72vw"
                      className="w-full h-auto block rounded-[18px]"
                    />
                  </UIPresentationFrame>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== PRODUCT PAGE SHOWCASE STACK (Dashboard / Projects / Tasks / Analytics) ========== */}
        <div className="mt-20 sm:mt-24 lg:mt-28 xl:mt-32 space-y-20 sm:space-y-24 lg:space-y-28 xl:space-y-32">
          {/* 1. Dashboard — Text Left / Image Right */}
          <Showcase
            index={0}
            title="Dashboard"
            description="A centralized overview of projects, tasks, team activity, and progress, giving users a clear snapshot of their workspace at a glance."
            src="/images/flowforge/dashboard.png"
            alt="FlowForge Dashboard interface showing workspace overview, projects, tasks, and team activity analytics"
            naturalW={826}
            naturalH={904}
            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 48vw, (max-width: 1440px) 44vw, 40vw"
            inView={inView}
            transitionDelay="100ms"
            reverse={false}
          />

          {/* 2. Projects — Image Left / Text Right */}
          <Showcase
            index={1}
            title="Projects"
            description="A structured project workspace that helps users organize active projects, monitor status, and quickly access important project information."
            src="/images/flowforge/projects.png"
            alt="FlowForge Projects interface showing active project list, organization filters, and project status tracking"
            naturalW={1012}
            naturalH={759}
            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 48vw, (max-width: 1440px) 44vw, 40vw"
            inView={inView}
            transitionDelay="220ms"
            reverse={true}
          />

          {/* 3. Tasks — Text Left / Image Right */}
          <Showcase
            index={2}
            title="Tasks"
            description="A focused task management interface for organizing work, assigning responsibilities, tracking priorities, and monitoring task progress."
            src="/images/flowforge/tasks.png"
            alt="FlowForge Tasks interface showing task list, assignment, priority levels, and progress tracking"
            naturalW={1239}
            naturalH={929}
            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 48vw, (max-width: 1440px) 44vw, 40vw"
            inView={inView}
            transitionDelay="340ms"
            reverse={false}
          />

          {/* 4. Analytics — Image Left / Text Right */}
          <Showcase
            index={3}
            title="Analytics"
            description="A visual overview of project performance, productivity, task distribution, and team activity to help users identify progress and make better decisions."
            src="/images/flowforge/analytics.png"
            alt="FlowForge Analytics interface showing performance charts, productivity metrics, task distribution, and team activity visuals"
            naturalW={1115}
            naturalH={1482}
            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 48vw, (max-width: 1440px) 44vw, 40vw"
            inView={inView}
            transitionDelay="460ms"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}
