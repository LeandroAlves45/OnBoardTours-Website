// src/app/data/boats.ts
// Dados fixos dos barcos disponíveis para tours.

export interface Boat {
  // ID estável usado para ligar barcos às opções de preço das tours.
  id: "on-nautic-i" | "on-nautic-ii";
  name: string;
  model: string;
  capacity: number;
  crew: number;
  description: string;
  image?: string;
}

export const boats: Boat[] = [
  {
    id: "on-nautic-i",
    name: "On Nautic Tour Boat I",
    model: "Bayliner Ciera 2655",
    capacity: 8,
    crew: 2,
    description: "A comfortable boat for intimate Douro River experiences.",
    image: "/OPO_Boat_I_Bayliner_Ciera_2655.png",
  },
  {
    id: "on-nautic-ii",
    name: "On Nautic Tour Boat II",
    model: "Sessa Marina C35",
    capacity: 10,
    crew: 2,
    description: "A larger premium boat with extra comfort and capacity.",
    image: "/OPO_Boat_II_Sessa_Marina_C35.png",
  },
];
