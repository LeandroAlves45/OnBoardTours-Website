import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      alpha: number;
    }[] = [];

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const particleCount = prefersReducedMotion ? 12 : isMobile ? 28 : 55;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.15,
      });
    }

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 232, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToTours = () => {
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 30%, rgba(0,212,232,0.09) 0%, transparent 55%),
          radial-gradient(ellipse 60% 60% at 80% 70%, rgba(11,45,82,0.5) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 50% 100%, rgba(0,212,232,0.06) 0%, transparent 60%),
          linear-gradient(160deg, #04111E 0%, #071830 40%, #0B2D52 75%, #062040 100%)
        `,
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-150px",
            background:
              "radial-gradient(circle, rgba(0,212,232,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-50px",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(0,212,232,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: "300px",
            height: "300px",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        {/* New: centre-top cyan glow */}
        <div
          className="absolute rounded-full blur-[140px]"
          style={{
            width: "400px",
            height: "300px",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, rgba(0,212,232,0.07) 0%, transparent 70%)",
          }}
        />
        {/* New: diagonal streak bottom-left to top-right */}
        <div
          className="absolute pointer-events-none opacity-[0.06]"
          style={{
            inset: 0,
            background:
              "linear-gradient(125deg, transparent 0%, rgba(0,212,232,0.15) 35%, transparent 50%, rgba(0,255,231,0.08) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Horizontal scan lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,232,1) 3px, rgba(0,212,232,1) 4px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,232,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 py-32 lg:py-40 text-center">
        {/* Gradient glow centred behind headline */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "700px",
            height: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            background:
              "radial-gradient(ellipse at center, rgba(0,212,232,0.08) 0%, rgba(11,45,82,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
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
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00D4E8",
            }}
          >
            Porto · Douro River
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, #00D4E8, transparent)",
            }}
          />
        </div>

        {/* Main headline */}
        <h1
          className="mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            lineHeight: 1.05,
          }}
        >
          <div
            style={{
              fontSize: "clamp(52px, 9vw, 96px)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Discover Porto
          </div>
          <div
            style={{
              fontSize: "clamp(44px, 14vw, 96px)",
              fontWeight: 300,
              letterSpacing: "0",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.5)" }}>from the </span>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                background:
                  "linear-gradient(135deg, #00D4E8 0%, #00FFE7 50%, #00B8CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(0,212,232,0.4))",
              }}
            >
              Water
            </span>
          </div>
        </h1>

        <p
          className="mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 300,
            color: "rgba(122,155,181,0.9)",
            lineHeight: 1.8,
            letterSpacing: "0.01em",
          }}
        >
          Premium boat tours along Porto&#39;s iconic Douro River — six bridges,
          historic wine cellars, and stunning riverside architecture await.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button
            onClick={scrollToTours}
            className="group relative px-9 py-4 rounded-sm overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,212,232,0.4)]"
            style={{
              background: "linear-gradient(135deg, #00D4E8 0%, #0098AA 100%)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#04111E",
              letterSpacing: "0.05em",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span className="relative z-10">Explore Tours</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #00FFE7, #00D4E8)",
              }}
            />
          </button>
          <button
            className="px-9 py-4 rounded-sm transition-all hover:-translate-y-1 hover:border-[#00FFE7] hover:shadow-[0_0_20px_rgba(0,212,232,0.15)]"
            style={{
              border: "1.5px solid rgba(0,212,232,0.4)",
              color: "#FFFFFF",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              background: "rgba(0,212,232,0.05)",
              cursor: "pointer",
              letterSpacing: "0.05em",
              backdropFilter: "blur(8px)",
            }}
          >
            Chat on WhatsApp
          </button>
        </div>

        {/* Stats bar */}
        <div
          className="hidden md:block max-w-3xl mx-auto rounded p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,232,0.05) 0%, rgba(11,45,82,0.12) 50%, rgba(0,212,232,0.04) 100%)",
            border: "1px solid rgba(0,212,232,0.14)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="grid grid-cols-4 gap-6">
            {[
              { value: "6", label: "Iconic Bridges" },
              { value: "2h", label: "River Experience" },
              { value: "8", label: "Max Guests" },
              { value: "€59", label: "From" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "38px",
                    fontWeight: 600,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #00D4E8, #00FFE7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "10px",
                    color: "rgba(122,155,181,0.7)",
                    marginTop: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToTours}
          className="mt-14 flex flex-col items-center gap-2 mx-auto transition-opacity hover:opacity-70"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "10px",
              color: "rgba(122,155,181,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <ChevronDown
            size={18}
            style={{
              color: "rgba(0,212,232,0.4)",
              animation: "bounce 2s infinite",
            }}
          />
        </button>
      </div>

      {/* Gradient transition into Tours section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "180px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.03) 60%, rgba(255,255,255,0.08) 100%)",
        }}
      />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
