// src/app/components/BoatSelector.tsx
// Mostrar os barcos disponíveis para determinada tour e avisar o componente pai
// quando o utilizador seleciona um barco para reservar.

import type { Boat } from "../data/boats";

interface BoatSelectorProps {
  boats: Boat[];
  selectedBoatId: Boat["id"];
  onSelectBoat: (boatId: Boat["id"]) => void;
}

export function BoatSelector({
  boats,
  selectedBoatId,
  onSelectBoat,
}: BoatSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {boats.map((boat) => {
        const isSelected = boat.id === selectedBoatId;

        return (
          <button
            key={boat.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelectBoat(boat.id)}
            className="text-left rounded p-4 transition-all cursor-pointer"
            style={{
              border: isSelected
                ? "1px solid #00D4E8"
                : "1px solid rgba(0,212,232,0.16)",
              background: isSelected
                ? "linear-gradient(135deg, rgba(0,212,232,0.14), rgba(0,255,231,0.06))"
                : "rgba(0,212,232,0.04)",
              boxShadow: isSelected ? "0 0 24px rgba(0,212,232,0.18)" : "none",
            }}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  {boat.name}
                </div>

                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#00D4E8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: "4px",
                  }}
                >
                  {boat.model}
                </div>
              </div>

              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  border: isSelected
                    ? "5px solid #00D4E8"
                    : "1px solid rgba(255,255,255,0.28)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
            </div>

            <div
              className="flex flex-wrap gap-2 mb-3"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              <span>Up to {boat.capacity} guests</span>
              <span>/</span>
              <span>Crew of {boat.crew}</span>
            </div>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {boat.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
