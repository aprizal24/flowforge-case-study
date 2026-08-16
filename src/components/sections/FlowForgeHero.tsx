import Image from "next/image";

export function FlowForgeHero() {
  return (
    <section className="relative overflow-x-hidden">
      <div
        className="relative w-full max-w-[90rem] mx-auto pt-12 pb-0 sm:pt-14 sm:pb-0 lg:pt-16 xl:pt-20 min-h-[360px] lg:min-h-[680px] xl:min-h-[860px] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#F4F9FF] to-[#ADC6E0]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(152, 170, 205, 0.28) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 min-h-[inherit]">
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] flex items-start justify-center pointer-events-none overflow-hidden"
          >
            <h1
              aria-label="FlowForge"
              className="select-none font-bold tracking-tighter text-[#BCCDEE] leading-none text-center whitespace-nowrap"
              style={{
                fontSize: "clamp(1.5rem, 12vw, 13rem)",
                marginTop: "clamp(0.5rem, 1.5vh, 2.5rem)",
              }}
            >
              FlowForge
            </h1>
          </div>

          <div className="relative z-[3]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-8">
              <div
                className="inline-flex items-center justify-center px-4 py-2 rounded-2xl text-label-medium tracking-[0.14em] uppercase border"
                style={{
                  backgroundColor: "#E8F2FC",
                  borderColor: "#C9DDF2",
                  color: "#5374A9",
                }}
              >
                2026
              </div>
              <div className="flex flex-wrap flex-col sm:flex-row sm:items-end gap-2">
                <span
                  className="inline-flex items-center justify-center px-4 py-2 rounded-2xl text-label-medium tracking-[0.14em] uppercase border"
                  style={{
                    backgroundColor: "#E8F2FC",
                    borderColor: "#C9DDF2",
                    color: "#5374A9",
                  }}
                >
                  UI/UX
                </span>
                <span
                  className="inline-flex items-center justify-center px-4 py-2 rounded-2xl text-label-medium tracking-[0.14em] uppercase border"
                  style={{
                    backgroundColor: "#E8F2FC",
                    borderColor: "#C9DDF2",
                    color: "#5374A9",
                  }}
                >
                  Web App
                </span>
              </div>
            </div>
          </div>

          <div
            aria-hidden="false"
            className="flowforge-hero-visual"
            style={{
              transform: "translateY(2%)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              priority
              src="/images/flowforge/hero-laptop.svg"
              alt="FlowForge project interface displayed on a laptop"
              width={1440}
              height={1024}
              sizes="(max-width: 640px) 77vw, (max-width: 1024px) 70vw, (max-width: 1280px) 65vw, 63vw"
              className="w-full h-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 20px 40px rgba(58, 79, 105, 0.10)) drop-shadow(0 8px 16px rgba(58, 79, 105, 0.06))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
