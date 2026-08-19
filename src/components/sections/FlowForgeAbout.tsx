import Image from "next/image";

export function FlowForgeAbout() {
  return (
    <section
      id="about"
      className="relative overflow-x-hidden bg-background-primary pt-16 sm:pt-20 lg:py-24 xl:py-28"
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
            About
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 h-px border-t border-dashed"
            style={{ borderColor: "#C9DDF2" }}
          />
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-3xl mx-auto text-center">
          <h2
            className="font-bold tracking-tight leading-[1.1]"
            style={{
              fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
              color: "#3E4F69",
            }}
          >
            What is FlowForge?
          </h2>
          <p
            className="mt-6 sm:mt-8 lg:mt-10 leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: "#3E4F69",
            }}
          >
            <span style={{ color: "#5374A9" }}>FlowForge</span>{" "}
            <span style={{ color: "#3E4F69" }}>
              — A centralized workspace{" "}
            </span>
            <span style={{ color: "#5374A9" }}>designed to</span>{" "}
            <span style={{ color: "#5374A9" }}>
              help teams plan, organize, collaborate, and track
            </span>{" "}
            <span style={{ color: "#3E4F69" }}>
              their work more efficiently.
            </span>
          </p>
        </div>

        <div
          className="mt-12 sm:mt-16 lg:mt-20 mx-auto h-px"
          style={{
            maxWidth: "640px",
            background:
              "linear-gradient(90deg, rgba(152,170,205,0), rgba(152,170,205,0.6), rgba(152,170,205,0))",
          }}
        />

        <dl className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 lg:gap-x-12">
          {[
            { label: "Role", value: "UI/UX Designer" },
            { label: "Category", value: "SaaS / Productivity" },
            { label: "Platform", value: "Web Application" },
            { label: "Tools", value: "Figma" },
            { label: "Focus", value: "UI/UX Design" },
          ].map((item) => (
            <div key={item.label} className="min-w-0">
              <dt
                className="text-label-medium tracking-[0.14em] uppercase font-semibold"
                style={{ color: "#3E4F69" }}
              >
                {item.label}
              </dt>
              <dd
                className="mt-2 text-body-medium leading-relaxed"
                style={{ color: "#98AACD" }}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-20 sm:mt-24 lg:mt-28">
          <div className="relative grid grid-cols-12 gap-6 lg:gap-x-8">
            <div className="col-span-12 md:col-span-9 lg:col-span-6 lg:col-start-1">
              <article
                className="relative rounded-3xl p-8 sm:p-10 lg:p-12"
                style={{
                  background:
                    "linear-gradient(135deg, #E8F2FC 0%, #C9DDF2 60%, #ADC6E0 100%)",
                }}
              >
                <p
                  className="text-label-medium tracking-[0.18em] uppercase font-semibold"
                  style={{ color: "#5374A9" }}
                >
                  The Problem
                </p>
                <p
                  className="mt-5 text-body-large leading-relaxed"
                  style={{ color: "#3E4F69" }}
                >
                  Managing projects across multiple tools can make tasks,
                  communication, and progress difficult to keep organized.
                </p>
              </article>
            </div>

            <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:mt-24 xl:mt-28 mt-8 sm:mt-10 md:mt-12">
              <article
                className="relative rounded-3xl p-8 sm:p-10 lg:p-12"
                style={{
                  background:
                    "linear-gradient(135deg, #E8F2FC 0%, #C9DDF2 60%, #ADC6E0 100%)",
                }}
              >
                <p
                  className="text-label-medium tracking-[0.18em] uppercase font-semibold"
                  style={{ color: "#5374A9" }}
                >
                  The Solution
                </p>
                <p
                  className="mt-5 text-body-large leading-relaxed"
                  style={{ color: "#3E4F69" }}
                >
                  FlowForge combines project management, task tracking,
                  collaboration, analytics, and workflow management into one
                  workspace.
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div
            className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #FFFFFF 0%, #E6EFFA 40%, #83A5CD 100%, transparent 50%)",
              minHeight: "360px",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(157, 174, 202, 0.40) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                backgroundPosition: "40px 40px",
              }}
            />

            <div className="relative pt-12 sm:pt-16 lg:pt-20 pb-2 sm:pb-3 lg:pb-4 px-4 sm:px-6 lg:px-10 xl:px-16">
              <div className="relative w-full mx-auto max-w-[1200px] flex items-end justify-center translate-y-6 sm:translate-y-8 lg:translate-y-10">
                <Image
                  priority={false}
                  src="/images/flowforge/about-laptop.png"
                  alt="FlowForge dashboard workspace displayed on a laptop with a hand interacting with the trackpad"
                  width={1600}
                  height={1100}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, (max-width: 1280px) 78vw, 72vw"
                  className="relative w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
