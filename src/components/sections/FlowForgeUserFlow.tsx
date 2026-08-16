import type { ReactNode } from "react";

type FlowNode = {
  id: string;
  label: string;
  kind: "start" | "card";
  x: number; // 0..100 (% of container)
  y: number; // 0..100 (% of container)
};

const NODES: FlowNode[] = [
  { id: "start", label: "START", kind: "start", x: 8, y: 7 },
  { id: "dashboard", label: "Dashboard", kind: "card", x: 18, y: 16.5 },
  { id: "projects", label: "Projects", kind: "card", x: 28, y: 26.5 },
  { id: "create-project", label: "Create Project", kind: "card", x: 38, y: 36.5 },
  { id: "add-members", label: "Add Members", kind: "card", x: 48, y: 46.5 },
  { id: "project-overview", label: "Project Overview", kind: "card", x: 58, y: 56.5 },
  { id: "create-assign", label: "Create & Assign Tasks", kind: "card", x: 68, y: 66.5 },
  { id: "track-progress", label: "Track Progress", kind: "card", x: 78, y: 76.5 },
  { id: "complete", label: "Complete", kind: "card", x: 88, y: 86.5 },
];

function Node({ node }: { node: FlowNode }) {
  if (node.kind === "start") {
    return (
      <div
        aria-label="Start"
        className="absolute"
        style={{
          left: `${node.x}%`,
          top: `${node.y}%`,
          transform: "translate(-50%, -50%)",
          zIndex: 3,
        }}
      >
        <div
          className="flex items-center justify-center rounded-full border"
          style={{
            width: "clamp(56px, 6.2vw, 88px)",
            height: "clamp(56px, 6.2vw, 88px)",
            background:
              "linear-gradient(135deg, rgba(232,242,252,0.95) 0%, rgba(201,221,242,0.95) 100%)",
            borderColor: "#ADC6E0",
            boxShadow:
              "0 6px 18px rgba(58,79,105,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          <span
            className="font-semibold tracking-[0.1em] uppercase"
            style={{
              color: "#5374A9",
              fontSize: "clamp(0.625rem, 0.8vw, 0.8125rem)",
            }}
          >
            {node.label}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 3,
      }}
    >
      <div
        className="flex items-center justify-center rounded-2xl border text-center px-4 sm:px-5"
        style={{
          minWidth: "clamp(128px, 14vw, 208px)",
          height: "clamp(44px, 4.5vw, 64px)",
          background:
            "linear-gradient(135deg, rgba(241,247,253,0.92) 0%, rgba(220,234,250,0.92) 100%)",
          borderColor: "#C9DDF2",
          boxShadow:
            "0 6px 18px rgba(58,79,105,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <span
          className="font-semibold whitespace-nowrap"
          style={{
            color: "#3E4F69",
            fontSize: "clamp(0.75rem, 0.95vw, 0.9375rem)",
          }}
        >
          {node.label}
        </span>
      </div>
    </div>
  );
}

function ConnectorPath({
  from,
  to,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
}) {
  const mx = (from.x + to.x) / 2;
  const d = `M ${from.x} ${from.y} C ${mx} ${from.y}, ${mx} ${to.y}, ${to.x} ${to.y}`;
  return (
    <path
      d={d}
      fill="none"
      stroke="url(#conn)"
      strokeWidth="0.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

export function FlowForgeUserFlow() {
  return (
    <section
      id="user-flow"
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
            User Flow
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
            A focused workflow that helps teams create projects, organize tasks, collaborate with members, and keep track of progress in one workspace.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 relative mx-auto w-full" style={{ maxWidth: "1200px" }}>
          <div
            className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #F0F6FD 0%, #DCE7F5 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(83,116,169,0.12) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "10px 10px",
              }}
            />

            {/* MOBILE LAYOUT: vertical stack with equal spacing */}
            <div className="md:hidden relative px-5 sm:px-8 py-12 space-y-5">
              {NODES.map((node, i) => (
                <div key={node.id} className="relative flex flex-col items-center">
                  <div className="w-full max-w-[240px] mx-auto flex justify-center">
                    {node.kind === "start" ? (
                      <div
                        className="flex items-center justify-center rounded-full border"
                        style={{
                          width: "72px",
                          height: "72px",
                          background:
                            "linear-gradient(135deg, rgba(232,242,252,0.95) 0%, rgba(201,221,242,0.95) 100%)",
                          borderColor: "#ADC6E0",
                          boxShadow:
                            "0 6px 18px rgba(58,79,105,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
                        }}
                      >
                        <span
                          className="font-semibold tracking-[0.1em] uppercase"
                          style={{ color: "#5374A9", fontSize: "0.75rem" }}
                        >
                          {node.label}
                        </span>
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-center rounded-2xl border text-center px-5 w-full"
                        style={{
                          height: "54px",
                          background:
                            "linear-gradient(135deg, rgba(241,247,253,0.92) 0%, rgba(220,234,250,0.92) 100%)",
                          borderColor: "#C9DDF2",
                          boxShadow:
                            "0 6px 18px rgba(58,79,105,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
                        }}
                      >
                        <span
                          className="font-semibold"
                          style={{ color: "#3E4F69", fontSize: "0.875rem" }}
                        >
                          {node.label}
                        </span>
                      </div>
                    )}
                  </div>
                  {i < NODES.length - 1 && (
                    <svg
                      aria-hidden="true"
                      className="mt-4 w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 2 L10 14 M5 10 L10 15 L15 10"
                        stroke="#8ea5c6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.6"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP LAYOUT: absolute nodes staggered diagonal with SVG connectors */}
            <div className="hidden md:block relative">
              <div
                className="relative w-full"
                style={{
                  paddingTop: "76%",
                }}
              >
                {/* SVG connectors (full container coords, using %) */}
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 1 }}
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient id="conn" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop
                        offset="0%"
                        stopColor="#98AACD"
                        stopOpacity="0.55"
                      />
                      <stop
                        offset="50%"
                        stopColor="#8ea5c6"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#6d8bb6"
                        stopOpacity="0.85"
                      />
                    </linearGradient>
                  </defs>
                  {NODES.slice(0, NODES.length - 1).map((fromNode, i) => {
                    const toNode = NODES[i + 1];
                    return (
                      <ConnectorPath
                        key={`conn-${fromNode.id}`}
                        from={{ x: fromNode.x, y: fromNode.y }}
                        to={{ x: toNode.x, y: toNode.y }}
                      />
                    );
                  })}
                </svg>

                {/* Flow nodes */}
                {NODES.map((node) => (
                  <Node key={node.id} node={node} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
