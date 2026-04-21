import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useIsMobile } from "./ui/use-mobile";

export function Experience() {
  const steps = [
    {
      number: "01",
      title: "Choose & Book",
      description:
        "Select your preferred tour type and time slot. Instant confirmation via email or WhatsApp.",
      icon: "⚓",
    },
    {
      number: "02",
      title: "Meet at Gate A",
      description:
        "Find us at Gate A, R. da Praia 110, Porto. Look for the On Nautic Tour flag.",
      icon: "📍",
    },
    {
      number: "03",
      title: "Experience the Douro",
      description:
        "Relax as we guide you along Porto's iconic river, sharing stories and serving refreshments.",
      icon: "🌊",
    },
  ];

  function Reveal({
    children,
    delay = 0,
    className,
  }: {
    children: ReactNode;
    delay?: number;
    className?: string;
  }) {
    const isMobile = useIsMobile();
    const revealDistance = isMobile ? 12 : 36;
    const revealDuration = isMobile ? 0.28 : 0.65;
    const revealDelay = isMobile ? Math.min(delay, 0.02) : delay;

    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: revealDistance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: isMobile ? 0.12 : 0.22 }}
        transition={{
          duration: revealDuration,
          ease: "easeOut",
          delay: revealDelay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #04111E 0%, #071830 50%, #0B2D52 100%)",
      }}
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,232,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,232,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,232,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side — steps */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, #00D4E8)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#00D4E8",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                  }}
                >
                  The Process
                </span>
              </div>

              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                How Your{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    background: "linear-gradient(135deg, #00D4E8, #00FFE7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Tour
                </span>{" "}
                Works
              </h2>

              <p
                className="mb-12"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "15px",
                  color: "rgba(122,155,181,0.8)",
                  lineHeight: 1.8,
                }}
              >
                From booking to boarding, we have made it simple. Just three
                steps separate you from an unforgettable river experience.
              </p>
            </Reveal>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <Reveal
                  key={step.number}
                  className="flex gap-6 group"
                  delay={0.12 + i * 0.08}
                >
                  {/* Number */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className="w-14 h-14 rounded flex items-center justify-center"
                      style={{
                        background: "rgba(0,212,232,0.07)",
                        border: "1px solid rgba(0,212,232,0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "22px",
                          fontWeight: 600,
                          background:
                            "linear-gradient(135deg, #00D4E8, #00FFE7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="absolute left-7 top-14 w-px h-8"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,212,232,0.3), transparent)",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 pt-2">
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "24px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "14px",
                        color: "rgba(122,155,181,0.75)",
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right side — map mockup */}
          <Reveal className="relative" delay={0.22}>
            <div
              className="rounded relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #060F1C 0%, #071A32 100%)",
                border: "1px solid rgba(0,212,232,0.15)",
                boxShadow:
                  "0 0 60px rgba(0,212,232,0.08), 0 40px 80px rgba(0,0,0,0.4)",
                padding: "2px",
                borderRadius: "8px",
              }}
            >
              {/* Gradient border top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #00D4E8, transparent)",
                }}
              />

              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "28px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                    }}
                  >
                    River Route
                  </div>
                  <div
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0,212,232,0.1)",
                      border: "1px solid rgba(0,212,232,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        color: "#00D4E8",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Live
                    </span>
                  </div>
                </div>

                <svg viewBox="0 0 420 280" className="w-full mb-8">
                  <defs>
                    <linearGradient
                      id="routeGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#00D4E8", stopOpacity: 0.2 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#00FFE7", stopOpacity: 0.9 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#00D4E8", stopOpacity: 0.2 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="waterGrad"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "rgba(0,212,232,0.08)" }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "transparent" }}
                      />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Water fill */}
                  <path
                    d="M 30 240 Q 100 170, 210 190 T 390 140 L 390 280 L 30 280 Z"
                    fill="url(#waterGrad)"
                  />

                  {/* Bridge lines */}
                  {[130, 180, 230, 280, 320, 360].map((x, i) => (
                    <line
                      key={i}
                      x1={x}
                      y1="155"
                      x2={x}
                      y2="230"
                      stroke="rgba(0,212,232,0.12)"
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                    />
                  ))}

                  {/* Route path */}
                  <path
                    d="M 30 240 Q 110 170, 210 190 T 390 140"
                    fill="none"
                    stroke="url(#routeGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />

                  {/* Animated dots on path */}
                  <circle
                    cx="30"
                    cy="240"
                    r="7"
                    fill="#00D4E8"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.4;1;0.4"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values="5;8;5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="30" cy="240" r="14" fill="rgba(0,212,232,0.15)">
                    <animate
                      attributeName="r"
                      values="10;18;10"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0;0.4"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle
                    cx="210"
                    cy="190"
                    r="6"
                    fill="#00D4E8"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.4;1;0.4"
                      dur="2s"
                      begin="0.7s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle
                    cx="390"
                    cy="140"
                    r="7"
                    fill="#C9A84C"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.4;1;0.4"
                      dur="2s"
                      begin="1.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values="5;8;5"
                      dur="2s"
                      begin="1.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="390" cy="140" r="14" fill="rgba(201,168,76,0.15)">
                    <animate
                      attributeName="r"
                      values="10;18;10"
                      dur="2s"
                      begin="1.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0;0.4"
                      dur="2s"
                      begin="1.4s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Labels */}
                  <text
                    x="16"
                    y="262"
                    fill="#7A9BB5"
                    fontSize="11"
                    fontFamily="'Space Grotesk', sans-serif"
                    fontWeight="600"
                  >
                    START
                  </text>
                  <text
                    x="186"
                    y="210"
                    fill="#7A9BB5"
                    fontSize="11"
                    fontFamily="'Space Grotesk', sans-serif"
                    fontWeight="600"
                  >
                    BRIDGES
                  </text>
                  <text
                    x="362"
                    y="132"
                    fill="#C9A84C"
                    fontSize="11"
                    fontFamily="'Space Grotesk', sans-serif"
                    fontWeight="600"
                  >
                    RETURN
                  </text>

                  {/* Bridge labels */}
                  {[
                    "D.Luís",
                    "Inf.",
                    "D.Maria",
                    "Arr.",
                    "Freixo",
                    "S.João",
                  ].map((name, i) => (
                    <text
                      key={i}
                      x={[122, 172, 222, 272, 312, 352][i]}
                      y="248"
                      fill="rgba(122,155,181,0.4)"
                      fontSize="8"
                      fontFamily="'Space Grotesk', sans-serif"
                    >
                      {name}
                    </text>
                  ))}
                </svg>

                {/* Info cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded"
                    style={{
                      background: "rgba(0,212,232,0.07)",
                      border: "1px solid rgba(0,212,232,0.15)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "#00D4E8",
                        boxShadow: "0 0 6px #00D4E8",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#00D4E8",
                        }}
                      >
                        Open every day
                      </div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "11px",
                          color: "#7A9BB5",
                        }}
                      >
                        9am — Sunset
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded"
                    style={{
                      background: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "#C9A84C",
                        boxShadow: "0 0 6px #C9A84C",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#C9A84C",
                        }}
                      >
                        6 Bridges
                      </div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "11px",
                          color: "#7A9BB5",
                        }}
                      >
                        Full route
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
