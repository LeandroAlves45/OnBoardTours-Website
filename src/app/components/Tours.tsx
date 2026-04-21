import { useState, useRef, useEffect, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  Users,
  Wine,
  Star,
  Check,
} from "lucide-react";
import { boats } from "../data/boats";
import { BoatSelector } from "./BoatSelector";
import {
  premiumTours,
  privateTours,
  sharedTours,
  type Tour,
} from "../data/tours";
import { useIsMobile } from "./ui/use-mobile";
import { motion, AnimatePresence } from "motion/react";

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
  const revealDistance = isMobile ? 18 : 36;
  const revealDuration = isMobile ? 0.38 : 0.65;
  const revealDelay = isMobile ? Math.min(delay, 0.04) : delay;

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

function TourModal({ tour, onClose }: { tour: Tour; onClose: () => void }) {
  const isMobile = useIsMobile();

  // Busca os barcos disponíveis para a tour selecionada.
  const availableBoats = boats.filter((boat) =>
    tour.boatOptions.some((option) => option.boatId === boat.id),
  );

  // Estado para o barco selecionado no modal.
  const [selectedBoatId, setSelectedBoatId] = useState(availableBoats[0]?.id);

  const selectedBoatOption = tour.boatOptions.find(
    (option) => option.boatId === selectedBoatId,
  );

  const finalPrice =
    selectedBoatOption?.price !== undefined
      ? `€${selectedBoatOption.price}`
      : selectedBoatOption?.priceLabel ??
        tour.boatOptions[0]?.priceLabel ??
        "Contact us";
  const finalPriceUnit =
    selectedBoatOption?.priceUnit ?? tour.boatOptions[0]?.priceUnit ?? "";
  const finalCapacity =
    selectedBoatOption?.capacity ??
    tour.boatOptions[0]?.capacity ??
    "On request";

  useEffect(() => {
    // Previne scroll da página quando o modal estiver aberto
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(16px)" }}
      initial={{ background: "rgba(4,17,30,0)" }}
      animate={{ background: "rgba(4,17,30,0.88)" }}
      exit={{ background: "rgba(4,17,30,0)" }}
      transition={{ duration: isMobile ? 0.18 : 0.35 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        data-lenis-prevent
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        style={{
          background:
            "linear-gradient(160deg, #04111E 0%, #071830 60%, #0B2D52 100%)",
          border: "1px solid rgba(0,212,232,0.2)",
          boxShadow:
            "0 0 80px rgba(0,212,232,0.15), 0 40px 80px rgba(0,0,0,0.7)",
          overscrollBehavior: "contain",
        }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: isMobile ? 12 : 24, scale: 0.97 }}
        transition={{
          duration: isMobile ? 0.22 : 0.4,
          ease: isMobile ? "easeOut" : [0.34, 1.56, 0.64, 1],
        }}
      >
        {/* Header gradient band */}
        <div
          className="relative h-60 overflow-hidden"
          style={{ background: tour.gradient, borderRadius: "4px 4px 0 0" }}
        >
          {tour.image && (
            <img
              src={tour.image}
              alt={tour.title}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: 0.72 }}
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(4,17,30,0.18) 0%, rgba(4,17,30,0.76) 100%)",
            }}
          />
          {/* Scan-line pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,232,0.12) 3px, rgba(0,212,232,0.12) 4px)",
            }}
          />
          {/* Glowing horizontal line at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,212,232,0.6) 40%, rgba(0,255,231,0.4) 60%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            {tour.badge && (
              <span
                className="inline-flex mb-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background:
                    tour.badgeColor === "gold"
                      ? "rgba(201,168,76,0.15)"
                      : "rgba(0,212,232,0.2)",
                  border: `1px solid ${tour.badgeColor === "gold" ? "#C9A84C" : "#00D4E8"}`,
                  color: tour.badgeColor === "gold" ? "#C9A84C" : "#00D4E8",
                  fontFamily: "'Space Grotesk', sans-serif",
                  width: "fit-content",
                }}
              >
                {tour.badge}
              </span>
            )}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "36px",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              {tour.title}
            </h2>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, background: "rgba(0,212,232,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <X size={18} style={{ color: "#fff" }} />
          </motion.button>
        </div>

        <div className="p-8">
          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          >
            {tour.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full"
                style={{
                  background: "rgba(0,212,232,0.08)",
                  border: "1px solid rgba(0,212,232,0.2)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "#00D4E8",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="mb-8"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "15px",
              color: "rgba(122,155,181,0.9)",
              lineHeight: 1.75,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            {tour.description}
          </motion.p>

          {/* Escolha dos barcos disponíveis */}
          {availableBoats.length > 0 && selectedBoatId && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.23 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#00D4E8",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Choose Your Boat
                </span>
              </div>

              <BoatSelector
                boats={availableBoats}
                selectedBoatId={selectedBoatId}
                onSelectBoat={setSelectedBoatId}
              />
            </motion.div>
          )}

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          >
            <div
              className="flex items-center gap-3 p-4 rounded"
              style={{
                background: "rgba(0,212,232,0.05)",
                border: "1px solid rgba(0,212,232,0.1)",
              }}
            >
              <Clock size={18} style={{ color: "#00D4E8" }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "10px",
                    color: "#7A9BB5",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Duration
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {tour.duration}
                </div>
              </div>
            </div>
            <div
              className="flex items-center gap-3 p-4 rounded"
              style={{
                background: "rgba(0,212,232,0.05)",
                border: "1px solid rgba(0,212,232,0.1)",
              }}
            >
              <Users size={18} style={{ color: "#00D4E8" }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "10px",
                    color: "#7A9BB5",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Capacity
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {finalCapacity}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Includes */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Wine size={14} style={{ color: "#00D4E8" }} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#00D4E8",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                What&apos;s Included
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Check
                    size={14}
                    style={{ color: "#00D4E8", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star size={14} style={{ color: "#C9A84C" }} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Highlights
              </span>
            </div>
            <div className="space-y-2">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#C9A84C" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            className="flex items-center justify-between pt-6"
            style={{ borderTop: "1px solid rgba(0,212,232,0.1)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "10px",
                  color: "#7A9BB5",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                Price
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "42px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #00D4E8, #00FFE7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {finalPrice}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  color: "#7A9BB5",
                }}
              >
                {finalPriceUnit}
              </div>
            </div>
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 0 30px rgba(0,212,232,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-sm transition-all"
              style={{
                background: "linear-gradient(135deg, #00D4E8, #0098AA)",
                color: "#04111E",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                border: "none",
                cursor: "pointer",
              }}
            >
              {tour.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TourCard({ tour, onClick }: { tour: Tour; onClick: () => void }) {
  const prices = tour.boatOptions
    .map((option) => option.price)
    .filter((price): price is number => typeof price === "number");
  const lowestPrice =
    prices.length > 0
      ? `€${Math.min(...prices)}`
      : tour.boatOptions[0]?.priceLabel ?? "Contact us";

  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 cursor-pointer rounded overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group"
      style={{
        border: "1px solid rgba(0,212,232,0.15)",
        background: "linear-gradient(160deg, #060F1C 0%, #08192E 100%)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        width: "100%",
        minHeight: "565px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 48px rgba(0,212,232,0.18), 0 0 0 1px rgba(0,212,232,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.3)";
      }}
    >
      {/* Card image/gradient area */}
      <div
        className="relative h-[200px] overflow-hidden"
        style={{ background: tour.gradient }}
      >
        {tour.image && (
          <img
            src={tour.image}
            alt={tour.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ opacity: 0.78 }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,17,30,0.1) 0%, rgba(4,17,30,0.72) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,232,0.12) 3px, rgba(0,212,232,0.12) 4px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(0,212,232,0.15) 0%, transparent 70%)",
          }}
        />
        {tour.badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1.5 rounded-sm"
            style={{
              background:
                tour.badgeColor === "gold"
                  ? "rgba(201,168,76,0.12)"
                  : "rgba(0,212,232,0.15)",
              border: `1px solid ${tour.badgeColor === "gold" ? "#C9A84C" : "#00D4E8"}`,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              textTransform: "uppercase",
              color: tour.badgeColor === "gold" ? "#C9A84C" : "#00D4E8",
              letterSpacing: "0.12em",
              backdropFilter: "blur(8px)",
            }}
          >
            {tour.badge}
          </div>
        )}
        {/* View details hint */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "10px",
              color: "#00D4E8",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            View details →
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "26px",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.15,
          }}
        >
          {tour.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tour.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(0,212,232,0.07)",
                border: "1px solid rgba(0,212,232,0.12)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                color: "#7A9BB5",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className="mb-6 flex-1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            color: "rgba(122,155,181,0.8)",
            lineHeight: 1.7,
            minHeight: "66px",
          }}
        >
          {tour.description}
        </p>

        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(0,212,232,0.1)" }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "9px",
                color: "#7A9BB5",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "2px",
              }}
            >
              From
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "34px",
                fontWeight: 600,
                lineHeight: 1.2,
                background: "linear-gradient(135deg, #00D4E8, #00FFE7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {lowestPrice}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="px-5 py-2.5 rounded-sm transition-all hover:-translate-y-0.5"
            style={{
              background:
                tour.buttonText === "Book Now"
                  ? "linear-gradient(135deg, #00D4E8, #0098AA)"
                  : "transparent",
              border:
                tour.buttonText === "Book Now"
                  ? "none"
                  : "1.5px solid rgba(0,212,232,0.4)",
              color: tour.buttonText === "Book Now" ? "#04111E" : "#00D4E8",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              cursor: "pointer",
            }}
          >
            {tour.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Tours() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<
    "private" | "shared" | "premium"
  >("private");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const tours =
    activeTab === "private"
      ? privateTours
      : activeTab === "shared"
        ? sharedTours
        : premiumTours;
  const isPremiumTab = activeTab === "premium";
  const CARD_WIDTH = 360; // Width de cada card, incluindo margin
  const CARD_GAP = 24; // Gap entre cards
  const CARDS_VISIBLE = { sm: 1, md: 2, lg: 4 }; // Número de cards visíveis por breakpoint

  const desktopMaxIndex = Math.max(0, tours.length - CARDS_VISIBLE.lg);
  const mobileMaxIndex = Math.max(0, tours.length - 1);
  const desktopIndex = Math.min(currentIndex, desktopMaxIndex);
  const mobileTour = tours[currentIndex] ?? tours[0];

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const nextDesktop = () =>
    setCurrentIndex((i) => Math.min(desktopMaxIndex, i + 1));
  const nextMobile = () =>
    setCurrentIndex((i) => Math.min(mobileMaxIndex, i + 1));

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const translateX = -(desktopIndex * (CARD_WIDTH + CARD_GAP));

  return (
    <section
      id="tours"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F0F8FF 60%, #E8F4FA 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,232,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(11,45,82,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
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
              Our Experiences
            </span>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, #00D4E8, transparent)",
              }}
            />
          </div>
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 400,
              color: "#0B2D52",
              lineHeight: 1.1,
            }}
          >
            Choose Your{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #00D4E8, #0098AA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </h2>

          {/* Tab toggle */}
          <div
            className="inline-flex rounded-full p-1.5"
            style={{
              background: "linear-gradient(135deg, #0B2D52, #071830)",
              border: "1px solid rgba(0,212,232,0.2)",
            }}
          >
            {(["private", "shared", "premium"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-8 py-2.5 rounded-full transition-all"
                style={{
                  background:
                    activeTab === tab
                      ? "linear-gradient(135deg, #00D4E8, #0098AA)"
                      : "transparent",
                  color: activeTab === tab ? "#04111E" : "#7A9BB5",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  letterSpacing: "0.04em",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    activeTab === tab ? "0 0 20px rgba(0,212,232,0.3)" : "none",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal className="relative" delay={0.12}>
          {isPremiumTab ? (
            <div className="max-w-[520px] mx-auto">
              {tours[0] && (
                <motion.div
                  key={tours[0].title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  style={{ display: "flex" }}
                >
                  <TourCard
                    tour={tours[0]}
                    onClick={() => setSelectedTour(tours[0])}
                  />
                </motion.div>
              )}
            </div>
          ) : (
            <>
              {/* Navigation buttons */}
              <button
                onClick={prev}
                disabled={desktopIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-5 w-11 h-11 rounded-full items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed hidden lg:flex"
                style={{
                  background: "linear-gradient(135deg, #0B2D52, #071830)",
                  border: "1px solid rgba(0,212,232,0.3)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  cursor: desktopIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                <ChevronLeft size={20} style={{ color: "#00D4E8" }} />
              </button>

              <button
                onClick={nextDesktop}
                disabled={desktopIndex >= desktopMaxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-5 w-11 h-11 rounded-full items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed hidden lg:flex"
                style={{
                  background: "linear-gradient(135deg, #0B2D52, #071830)",
                  border: "1px solid rgba(0,212,232,0.3)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  cursor:
                    desktopIndex >= desktopMaxIndex ? "not-allowed" : "pointer",
                }}
              >
                <ChevronRight size={20} style={{ color: "#00D4E8" }} />
              </button>

              {/* Cards container */}
              <div className="overflow-hidden" ref={carouselRef}>
                {/* Desktop: sliding carousel */}
                <div
                  className="hidden lg:flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{ transform: `translateX(${translateX}px)` }}
                >
                  {tours.map((tour, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.55,
                        ease: "easeOut",
                        delay: idx * 0.08,
                      }}
                      style={{
                        width: `${CARD_WIDTH}px`,
                        flexShrink: 0,
                        display: "flex",
                      }}
                    >
                      <TourCard
                        tour={tour}
                        onClick={() => setSelectedTour(tour)}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Mobile/tablet: single-card carousel */}
                <div className="lg:hidden">
                  {mobileTour && (
                    <motion.div
                      key={`${activeTab}-${currentIndex}`}
                      initial={{ opacity: 0, y: isMobile ? 18 : 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: isMobile ? 0.12 : 0.2 }}
                      transition={{
                        duration: isMobile ? 0.32 : 0.55,
                        ease: "easeOut",
                      }}
                      style={{ display: "flex" }}
                    >
                      <TourCard
                        tour={mobileTour}
                        onClick={() => setSelectedTour(mobileTour)}
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Dots */}
              {tours.length > CARDS_VISIBLE.lg && (
                <div className="hidden lg:flex justify-center gap-2 mt-8">
                  {Array.from({ length: desktopMaxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="transition-all duration-300"
                      style={{
                        width: desktopIndex === i ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        background:
                          desktopIndex === i
                            ? "linear-gradient(90deg, #00D4E8, #00FFE7)"
                            : "rgba(0,212,232,0.25)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Mobile nav buttons */}
              <div className="lg:hidden flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #0B2D52, #071830)",
                    border: "1px solid rgba(0,212,232,0.3)",
                    cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  <ChevronLeft size={18} style={{ color: "#00D4E8" }} />
                </button>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0B2D52",
                    minWidth: "48px",
                    textAlign: "center",
                  }}
                >
                  {currentIndex + 1} / {tours.length}
                </span>
                <button
                  onClick={nextMobile}
                  disabled={currentIndex >= mobileMaxIndex}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #0B2D52, #071830)",
                    border: "1px solid rgba(0,212,232,0.3)",
                    cursor:
                      currentIndex >= mobileMaxIndex
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  <ChevronRight size={18} style={{ color: "#00D4E8" }} />
                </button>
              </div>
            </>
          )}
        </Reveal>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTour && (
          <TourModal
            tour={selectedTour}
            onClose={() => setSelectedTour(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
