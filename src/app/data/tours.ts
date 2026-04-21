// src/app/data/tours.ts
// Dados das tours disponíveis para reserva.
// Cada tour pode ter preços diferentes consoante o barco escolhido.

import type { Boat } from "./boats";

// Liga uma tour a um barco específico.
// É aqui que definimos preço, unidade de preço e capacidade apresentada no modal.
export interface BoatTourOption {
  boatId: Boat["id"];
  price?: number;
  priceLabel?: string;
  priceUnit: string;
  capacity: string;
}

// Estrutura base de uma tour apresentada no site.
export interface Tour {
  title: string;
  badge?: string;
  badgeColor?: "cyan" | "gold";
  tags: string[];
  description: string;
  buttonText: string;
  duration: string;
  includes: string[];
  highlights: string[];
  gradient: string;
  image?: string;
  boatOptions: BoatTourOption[];
}

export const privateTours: Tour[] = [
  {
    title: "Daytime",
    badge: "Most Popular",
    badgeColor: "cyan",
    tags: ["Private", "2 hours"],
    description:
      "Cruise the Douro River during the day with personalized service.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Exclusive use of the boat",
      "Welcome drink",
      "River commentary",
    ],
    highlights: [
      "Scenic views of Porto",
      "Iconic bridges",
      "Flexible departure times",
    ],
    gradient: "linear-gradient(135deg, #0B2D52 0%, #063A5E 50%, #00506A 100%)",
    image: "/Sunrise.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 349,
        priceUnit: "per boat",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 449,
        priceUnit: "per boat",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Food & Wine Tasting",
    tags: ["Private", "2.5 hours", "Gourmet"],
    description:
      "Indulge in Portuguese gastronomy paired with local wines as you explore the river.",
    buttonText: "Book Now",
    duration: "2.5 hours",
    includes: [
      "Full gourmet food spread",
      "Wine & cocktail pairing",
      "Traditional Portuguese tapas",
      "Dessert & coffee",
    ],
    highlights: [
      "Chef-curated menu",
      "Local artisan produce",
      "Multi-course river dining",
    ],
    gradient: "linear-gradient(135deg, #0B3D2D 0%, #065E38 50%, #006A3A 100%)",
    image: "/Food_and_wine_tasting.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 349,
        priceUnit: "per boat",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 449,
        priceUnit: "per boat",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Night Lights",
    tags: ["Private", "Evening", "Champagne"],
    description:
      "Experience Porto illuminated at night with champagne, mood lighting, and an intimate atmosphere.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Premium champagne",
      "Mood lighting setup",
      "Bluetooth speaker",
      "Personalized playlist",
    ],
    highlights: [
      "Illuminated bridge views",
      "Ribeira at night",
      "Perfect for celebrations",
    ],
    gradient: "linear-gradient(135deg, #04111E 0%, #0B2D52 50%, #1A1A4E 100%)",
    image: "/night_lights.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 349,
        priceUnit: "per boat",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 449,
        priceUnit: "per boat",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Bachelorette Party",
    tags: ["Private", "Celebration", "Music"],
    description:
      "Celebrate on the Douro with drinks, music, and a private setting for your group.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Exclusive use of the boat",
      "Welcome drinks",
      "Bluetooth speaker",
      "Celebration setup",
    ],
    highlights: [
      "Private party atmosphere",
      "Perfect for groups",
      "Daytime or sunset options",
    ],
    gradient: "linear-gradient(135deg, #3D0B2D 0%, #5E0644 50%, #6A0050 100%)",
    image: "/Bachelor_party.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 399,
        priceUnit: "per boat",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 499,
        priceUnit: "per boat",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Marriage Proposal",
    tags: ["Private", "Romantic", "Special Moment"],
    description:
      "Create a memorable proposal on the river with a private and romantic atmosphere.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Exclusive use of the boat",
      "Welcome drink",
      "Romantic coordination",
      "Flexible timing",
    ],
    highlights: [
      "Intimate river setting",
      "Sunset timing available",
      "Designed for special moments",
    ],
    gradient: "linear-gradient(135deg, #2D0B0B 0%, #5E2306 50%, #6A1000 100%)",
    image: "/Proposal.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 499,
        priceUnit: "starting price",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 599,
        priceUnit: "starting price",
        capacity: "Up to 10 guests",
      },
    ],
  },
];

export const sharedTours: Tour[] = [
  {
    title: "Sunset",
    tags: ["Shared", "2 hours"],
    description: "Experience the magic of Porto at sunset with a shared tour.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: ["Shared boat experience", "Welcome drink", "River commentary"],
    highlights: [
      "Breathtaking sunset views",
      "Iconic landmarks",
      "Social atmosphere",
    ],
    gradient: "linear-gradient(135deg, #FF6E7F 0%, #BFE9FF 100%)",
    image: "/Sunrise.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 49,
        priceUnit: "per person",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 59,
        priceUnit: "per person",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Daytime Sunset",
    tags: ["Shared", "2 hours", "Max 8 guests"],
    description:
      "Join a small group for an intimate cruise along the Douro, perfect for solo travelers and couples.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Welcome drink",
      "River commentary",
      "Small-group atmosphere",
      "Photo stops",
    ],
    highlights: [
      "All 6 iconic bridges",
      "Ribeira waterfront views",
      "New friends from around the world",
    ],
    gradient: "linear-gradient(135deg, #0B2D52 0%, #063A5E 50%, #00506A 100%)",
    image: "/Sunrise.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 49,
        priceUnit: "per person",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 59,
        priceUnit: "per person",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Porto Wine Tasting",
    tags: ["Shared", "2 hours", "Wine included"],
    description:
      "Experience Porto's wine culture with a guided tasting as you sail through the historic river.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "3 Porto wines included",
      "Guided tasting notes",
      "Panoramic views",
      "Snacks on board",
    ],
    highlights: [
      "Learn about wine heritage",
      "Views of Gaia lodges",
      "Expert host guidance",
    ],
    gradient: "linear-gradient(135deg, #2D0B52 0%, #3E0663 50%, #5A006A 100%)",
    image: "/porto_wine_tasting.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 49,
        priceUnit: "per person",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 59,
        priceUnit: "per person",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Night Lights",
    tags: ["Shared", "Evening", "Small group"],
    description:
      "See Porto glow after dark on a relaxed shared cruise through the illuminated riverfront.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Shared boat experience",
      "Welcome drink",
      "Night river commentary",
      "Cosy atmosphere",
    ],
    highlights: [
      "Illuminated bridges",
      "Porto skyline at night",
      "Small-group experience",
    ],
    gradient: "linear-gradient(135deg, #04111E 0%, #0B2D52 50%, #1A1A4E 100%)",
    image: "/night_lights.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 69,
        priceUnit: "per person",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 79,
        priceUnit: "per person",
        capacity: "Up to 10 guests",
      },
    ],
  },
  {
    title: "Food & Wine Tasting",
    tags: ["Shared", "2 hours", "Food pairing"],
    description:
      "Enjoy a shared Douro cruise with local wine tasting and small food pairings on board.",
    buttonText: "Book Now",
    duration: "2 hours",
    includes: [
      "Shared boat experience",
      "Wine tasting",
      "Small food tasting",
      "River commentary",
    ],
    highlights: [
      "Local wine and food pairing",
      "Views of Gaia wine lodges",
      "Social tasting experience",
    ],
    gradient: "linear-gradient(135deg, #0B3D2D 0%, #065E38 50%, #006A3A 100%)",
    image: "/Food_and_wine_tasting.png",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        price: 89,
        priceUnit: "per person",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        price: 99,
        priceUnit: "per person",
        capacity: "Up to 10 guests",
      },
    ],
  },
];

export const premiumTours: Tour[] = [
  {
    title: "Douro River Upstream Experience",
    badge: "Premium",
    badgeColor: "gold",
    tags: ["Premium", "5 hours", "Tailor-made"],
    description:
      "Sail upstream along the Douro River on a private 5-hour journey tailored to your preferred pace, stops, and onboard experience.",
    buttonText: "Contact Us",
    duration: "5 hours",
    includes: [
      "Private itinerary planning",
      "Exclusive boat experience",
      "Welcome drink",
      "Tailored onboard service",
    ],
    highlights: [
      "Extended Douro River route",
      "Personalized schedule",
      "Ideal for special occasions",
    ],
    gradient: "linear-gradient(135deg, #04111E 0%, #0B2D52 55%, #C9A84C 140%)",
    image: "/On_Nautic_Tour.jpg",
    boatOptions: [
      {
        boatId: "on-nautic-i",
        priceLabel: "Contact us",
        priceUnit: "tailor-made experience",
        capacity: "Up to 8 guests",
      },
      {
        boatId: "on-nautic-ii",
        priceLabel: "Contact us",
        priceUnit: "tailor-made experience",
        capacity: "Up to 10 guests",
      },
    ],
  },
];
