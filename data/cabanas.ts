export type CabanaCategory =
  | "Garden Retreat Cabana"
  | "Tropical View Cabana"
  | "Honeymoon Coconut Cabana"
  | "Family Nature Cabana"
  | "Premium Garden Cabana";

export interface Cabana {
  name: string;
  collection: string;
  category: CabanaCategory;
  slug: string;
  bed: string;
  rooms: string;
  size: string;
  capacity: string;
  heroImage: string;
  gallery: string[];
  perfectFor: string[];
  amenities: string[];
}

export const cabanas: Cabana[] = [
  {
    name: "Koko Hana – Coconut Bloom Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Garden Retreat Cabana",
    slug: "koko-hana-coconut-bloom-cabana",
    bed: "King",
    rooms: "1",
    size: "20–25 m²",
    capacity: "2",
    heroImage: "/images/image1.jpeg",
    gallery: [
      "/images/image1.jpeg",
      "/images/image.jpg",
      "/images/image4.jpg"
    ],
    perfectFor: [
      "Couples seeking a quiet garden hideaway",
      "Design-forward travelers who appreciate minimal interiors",
      "Guests beginning or ending a Sri Lankan journey in calm"
    ],
    amenities: [
      "Private garden terrace with coconut canopy",
      "King bed with premium natural linens",
      "Curated tea & slow coffee corner",
      "Rain shower with botanically infused amenities",
      "Thoughtful lighting designed for nighttime calm",
      "Silent ceiling fan & discreet air conditioning"
    ]
  },
  {
    name: "Koko Hana – Garden Breeze Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Garden Retreat Cabana",
    slug: "koko-hana-garden-breeze-cabana",
    bed: "King",
    rooms: "1",
    size: "20–25 m²",
    capacity: "2",
    heroImage: "/images/image2.jpeg",
    gallery: [
      "/images/image2.jpeg",
      "/images/image5.jpg",
      "/images/image6.jpg"
    ],
    perfectFor: [
      "Long-stay guests who value gentle breezes and leafy outlooks",
      "Remote creatives seeking silent working days",
      "Those who favor privacy over proximity to crowds"
    ],
    amenities: [
      "Louvered windows capturing cross-breezes",
      "Outdoor seating in dappled shade",
      "King bed with pillow menu on request",
      "Dedicated writing and reading nook",
      "Soft, dimmable bedside lighting",
      "Complimentary high-speed Wi-Fi"
    ]
  },
  {
    name: "Koko Hana – Palm Whisper Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Tropical View Cabana",
    slug: "koko-hana-palm-whisper-cabana",
    bed: "King",
    rooms: "1",
    size: "20–25 m²",
    capacity: "2",
    heroImage: "/images/image.jpg",
    gallery: [
      "/images/image.jpg",
      "/images/image3-alt.jpg",
      "/images/image4.jpg"
    ],
    perfectFor: [
      "Guests who love waking to filtered tropical light",
      "Honeymooners seeking a first or last stop in Sri Lanka",
      "Slow travelers moving with the rhythm of the coast"
    ],
    amenities: [
      "Elevated views over palm canopy",
      "King bed dressed in crisp, cool cotton",
      "Indoor-outdoor seating with garden outlook",
      "Curated mini-bar with Sri Lankan touches",
      "Rain shower with separate dressing area",
      "Turn-down ritual upon request"
    ]
  },
  {
    name: "Koko Hana – Tropical Nest Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Tropical View Cabana",
    slug: "koko-hana-tropical-nest-cabana",
    bed: "King",
    rooms: "1",
    size: "20–25 m²",
    capacity: "2",
    heroImage: "/images/image3.png",
    gallery: [
      "/images/image3.png",
      "/images/image7.jpg",
      "/images/image8.jpg"
    ],
    perfectFor: [
      "Couples who want to feel wrapped by tropical green",
      "Guests who favor a gently cocooned atmosphere",
      "Those arriving from busy cities seeking immediate calm"
    ],
    amenities: [
      "Framed views of layered tropical foliage",
      "King bed with upholstered headboard for reading",
      "Compact lounging nook with floor cushions",
      "Signature scent inspired by coastal gardens",
      "Rain shower with handcrafted ceramics",
      "Filtered water & glass carafes"
    ]
  },
  {
    name: "Koko Hana – Island Serenity Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Honeymoon Coconut Cabana",
    slug: "koko-hana-island-serenity-cabana",
    bed: "King",
    rooms: "1",
    size: "30–35 m²",
    capacity: "2",
    heroImage: "/images/image5.jpg",
    gallery: [
      "/images/image5.jpg",
      "/images/image6.jpg",
      "/images/image7.jpg"
    ],
    perfectFor: [
      "Newlyweds dreaming of a quiet, tropical sanctuary",
      "Anniversary escapes and milestone celebrations",
      "Couples seeking privacy without ostentation"
    ],
    amenities: [
      "Generous open-plan cabana with lounge area",
      "King bed oriented to morning garden light",
      "Freestanding tub or oversized rain shower",
      "Private terrace for in-cabana breakfast",
      "Soft ambient lighting and candle ritual",
      "Discreet in-cabana service on request"
    ]
  },
  {
    name: "Koko Hana – Coconut Grove Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Family Nature Cabana",
    slug: "koko-hana-coconut-grove-cabana",
    bed: "Twin / King",
    rooms: "1",
    size: "30–35 m²",
    capacity: "3–4",
    heroImage: "/images/image3.png",
    gallery: [
      "/images/image3.png",
      "/images/image7.jpg",
      "/images/image8.jpg"
    ],
    perfectFor: [
      "Families who value calm, nature-forward stays",
      "Multi-generational trips with unhurried days",
      "Parents introducing children to slow travel"
    ],
    amenities: [
      "Flexible bedding configuration: Twin / King",
      "Additional daybed or trundle for children",
      "Shaded outdoor space for family time",
      "Child-friendly amenities upon request",
      "Spacious bathroom with generous storage",
      "Board games and analog entertainment"
    ]
  },
  {
    name: "Koko Hana – Golden Palm Cabana",
    collection: "Koko Hana Cabana Collection",
    category: "Premium Garden Cabana",
    slug: "koko-hana-golden-palm-cabana",
    bed: "King",
    rooms: "1",
    size: "25–30 m²",
    capacity: "2",
    heroImage: "/images/image.jpg",
    gallery: [
      "/images/image.jpg",
      "/images/image3-alt.jpg",
      "/images/image4.jpg"
    ],
    perfectFor: [
      "Design-conscious travelers who appreciate subtle luxury",
      "Couples seeking a garden sanctuary with added space",
      "Return guests looking for their ‘usual’ cabana"
    ],
    amenities: [
      "Larger footprint with defined lounge area",
      "King bed with luxury mattress and linens",
      "Refined finishes with warm wood accents",
      "Curated art and handcrafted objects",
      "Premium in-cabana bar selection",
      "Evening turndown with local sweet treats"
    ]
  }
];


