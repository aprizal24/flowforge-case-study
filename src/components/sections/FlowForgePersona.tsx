import Image from "next/image";

export function FlowForgePersona() {
  return (
    <section
      id="persona"
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
            Persona
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 h-px border-t border-dashed"
            style={{ borderColor: "#C9DDF2" }}
          />
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto text-center">
          <h2
            className="font-bold tracking-tight leading-[1.1]"
            style={{
              fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
              color: "#3E4F69",
            }}
          >
            Meet the Primary User
          </h2>
          <p
            className="mt-6 sm:mt-8 lg:mt-10 leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: "#3E4F69",
            }}
          >
            <span style={{ color: "#5374A9" }}>Andrea</span>{" "}
            <span style={{ color: "#3E4F69" }}>
              represents the core audience for FlowForge — a project lead balancing
              multiple teams, tools, and deadlines every week.
            </span>
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 relative">
          <div
            className="relative mx-auto w-full"
            style={{ maxWidth: "72.5rem" }}
          >
            <div className="relative w-full">
              <Image
                priority={false}
                src="/images/flowforge/persona.svg"
                alt="Andrea Rodrigo persona composite including Goals, Needs, and Frustrations insights, connectors, and persona information card over a light grid background"
                width={1600}
                height={900}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, (max-width: 1280px) 78vw, 72vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
