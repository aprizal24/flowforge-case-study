import type { ReactNode } from "react";

type ProcessStage = {
  id: string;
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  duration: string;
  position: "top" | "bottom";
  icon: ReactNode;
};

const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6">
    <circle cx="11" cy="11" r="6.5" stroke="#CADFFF" strokeWidth="1.75" />
    <path d="M16 16L20 20" stroke="#CADFFF" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6">
    <circle cx="12" cy="12" r="8.25" stroke="#CADFFF" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="5" stroke="#CADFFF" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="2" fill="#CADFFF" />
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M12 3.5L3.5 8.5L12 13.5L20.5 8.5L12 3.5Z" stroke="#CADFFF" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M3.5 13.5L12 18.5L20.5 13.5" stroke="#CADFFF" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>
);

const IconPencil = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6">
    <path
      d="M15.5 4.5L19.5 8.5L9 19H5V15L15.5 4.5Z"
      stroke="#CADFFF"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path d="M14 6L18 10" stroke="#CADFFF" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const IconSpark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6">
    <path
      d="M12 3L13.8 9.2L20 11L13.8 12.8L12 19L10.2 12.8L4 11L10.2 9.2L12 3Z"
      stroke="#CADFFF"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  </svg>
);

const STAGES: ProcessStage[] = [
  { id: "research", number: 1, title: "Research", duration: "4 Days", position: "top", icon: <IconSearch /> },
  { id: "define", number: 2, title: "Define", duration: "5 Days", position: "bottom", icon: <IconTarget /> },
  { id: "structure", number: 3, title: "Structure", duration: "7 Days", position: "top", icon: <IconLayers /> },
  { id: "design", number: 4, title: "Design", duration: "10 Days", position: "bottom", icon: <IconPencil /> },
  { id: "refine", number: 5, title: "Refine", duration: "3 Days", position: "top", icon: <IconSpark /> },
];

function TimelineBlocks() {
  const blocks = 34;
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between gap-[2px] sm:gap-[3px] md:gap-1"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      {Array.from({ length: blocks }).map((_, i) => {
        const isAnchor = i === 0 || i === 8 || i === 16 || i === 25 || i === blocks - 1;
        return (
          <div
            key={i}
            className="h-3 rounded-[3px] border shrink-0"
            style={{
              width: "10px",
              backgroundColor: isAnchor ? "#CFDFF2" : "#E2ECF8",
              borderColor: "#C9DDF2",
            }}
          />
        );
      })}
    </div>
  );
}

function ProcessCard({ stage }: { stage: ProcessStage }) {
  return (
    <div
      className="rounded-2xl p-4 sm:p-5 lg:p-6 border mx-auto w-full max-w-[230px]"
      style={{
        backgroundColor: "#d7eaffa7",
        borderColor: "#a0bad5ff",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="shrink-0 rounded-xl flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11"
          style={{
            backgroundColor: "#83A5CD",
          }}
        >
          {stage.icon}
        </div>
        <div className="min-w-0">
          <p
            className="font-semibold text-body-medium sm:text-body-large truncate"
            style={{ color: "#3E4F69" }}
          >
            {stage.title}
          </p>
          <p
            className="text-label-small mt-0.5"
            style={{ color: "#98AACD" }}
          >
            {stage.duration}
          </p>
        </div>
      </div>
    </div>
  );
}

function NumberCircle({ n }: { n: number }) {
  return (
    <div
      className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border shrink-0"
      style={{
        backgroundColor: "#E8F2FC",
        borderColor: "#ADC6E0",
        boxShadow:
          "0 2px 8px rgba(83, 116, 169, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      <span
        className="text-sm sm:text-[0.9375rem] font-semibold"
        style={{ color: "#5374A9" }}
      >
        {n}
      </span>
    </div>
  );
}

export function FlowForgeDesignProcess() {
  return (
    <section
      id="design-process"
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
            Design Process
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block flex-1 h-px border-t border-dashed"
            style={{ borderColor: "#C9DDF2" }}
          />
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto text-center">
          <p
            className="leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: "#3E4F69",
            }}
          >
            A structured process to understand the problem, define user needs, and turn insights into a clear and scalable product experience.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 relative">
          <div
            className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden"
            style={{
              background: "#F4F9FF",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(129, 157, 202, 0.29) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                backgroundPosition: "40px 40px",
              }}
            />

            <div className="relative px-5 sm:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
              {/* Mobile vertical layout */}
              <div className="md:hidden relative space-y-4">
                {STAGES.map((stage) => (
                  <div key={stage.id} className="relative flex gap-4 items-start">
                    <div className="flex flex-col items-center shrink-0">
                      <NumberCircle n={stage.number} />
                      {stage.number < 5 && (
                        <div
                          aria-hidden="true"
                          className="w-px flex-1 min-h-[3rem]"
                          style={{
                            background:
                              "linear-gradient(180deg, #C9DDF2 0%, rgba(201,221,242,0) 100%)",
                          }}
                        />
                      )}
                    </div>
                    <div
                      className="flex-1 rounded-2xl p-5 border"
                      style={{
                        backgroundColor: "#F1F7FD",
                        borderColor: "#C9DDF2",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="shrink-0 rounded-xl flex items-center justify-center w-10 h-10"
                          style={{
                            backgroundColor: "#D7E5F5",
                          }}
                        >
                          {stage.icon}
                        </div>
                        <div className="min-w-0">
                          <p
                            className="font-semibold text-body-large"
                            style={{ color: "#3E4F69" }}
                          >
                            {stage.title}
                          </p>
                          <p
                            className="text-label-small mt-0.5"
                            style={{ color: "#98AACD" }}
                          >
                            {stage.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop horizontal timeline */}
              <div className="hidden md:block relative">
                {/* Row 1: Top cards */}
                <div className="grid grid-cols-5 gap-x-4 lg:gap-x-6">
                  {STAGES.map((stage) => (
                    <div
                      key={`top-card-${stage.id}`}
                      className={
                        stage.position === "top"
                          ? "flex justify-center"
                          : "pointer-events-none"
                      }
                    >
                      {stage.position === "top" && <ProcessCard stage={stage} />}
                    </div>
                  ))}
                </div>

                {/* Row 2: Top connectors (from top cards down) */}
                <div className="grid grid-cols-5 gap-x-4 lg:gap-x-6 mt-4 lg:mt-6">
                  {STAGES.map((stage) => (
                    <div
                      key={`conn-top-${stage.id}`}
                      className="flex justify-center"
                    >
                      {stage.position === "top" && (
                        <div
                          aria-hidden="true"
                          className="w-px"
                          style={{
                            height: "clamp(1rem, 2vh, 2rem)",
                            background:
                              "linear-gradient(180deg, #C9DDF2 0%, #ADC6E0 100%)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Row 3: Timeline zone (absolute blocks + numbered circle anchors) */}
                <div className="relative h-12 sm:h-14 flex items-center">
                  <TimelineBlocks />
                  <div className="relative w-full grid grid-cols-5 gap-x-4 lg:gap-x-6 items-center">
                    {STAGES.map((stage) => (
                      <div
                        key={`num-${stage.id}`}
                        className="flex justify-center"
                      >
                        <NumberCircle n={stage.number} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 4: Bottom connectors (from timeline down) */}
                <div className="grid grid-cols-5 gap-x-4 lg:gap-x-6 mt-4 lg:mt-6">
                  {STAGES.map((stage) => (
                    <div
                      key={`conn-bot-${stage.id}`}
                      className="flex justify-center"
                    >
                      {stage.position === "bottom" && (
                        <div
                          aria-hidden="true"
                          className="w-px"
                          style={{
                            height: "clamp(1rem, 2vh, 2rem)",
                            background:
                              "linear-gradient(180deg, #ADC6E0 0%, #C9DDF2 100%)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Row 5: Bottom cards */}
                <div className="grid grid-cols-5 gap-x-4 lg:gap-x-6">
                  {STAGES.map((stage) => (
                    <div
                      key={`bot-card-${stage.id}`}
                      className={
                        stage.position === "bottom"
                          ? "flex justify-center"
                          : "pointer-events-none"
                      }
                    >
                      {stage.position === "bottom" && <ProcessCard stage={stage} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
