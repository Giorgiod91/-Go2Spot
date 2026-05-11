export type Activity =
  | "hiking"
  | "bar"
  | "food"
  | "museum"
  | "park"
  | "nightlife"
  | "photo"
  | "sightseeing";

export type Spot = {
  id: number;
  title: string;
  img: string;
  description: string;
  location: string;
  lat: number;
  lng: number;
  activities: Activity[];
  rating: number;
};

export const ACTIVITY_META: Record<Activity, { emoji: string; label: string; color: string }> = {
  hiking:      { emoji: "🥾", label: "Hiking",      color: "bg-emerald-100 text-emerald-700 border-emerald-300" },
  bar:         { emoji: "🍺", label: "Bar & Beer",   color: "bg-amber-100 text-amber-700 border-amber-300" },
  food:        { emoji: "🍕", label: "Food",         color: "bg-orange-100 text-orange-700 border-orange-300" },
  museum:      { emoji: "🏛️", label: "Museum",       color: "bg-violet-100 text-violet-700 border-violet-300" },
  park:        { emoji: "🌿", label: "Parks",        color: "bg-green-100 text-green-700 border-green-300" },
  nightlife:   { emoji: "🎉", label: "Nightlife",    color: "bg-pink-100 text-pink-700 border-pink-300" },
  photo:       { emoji: "📸", label: "Photo Spots",  color: "bg-sky-100 text-sky-700 border-sky-300" },
  sightseeing: { emoji: "🏰", label: "Sightseeing",  color: "bg-indigo-100 text-indigo-700 border-indigo-300" },
};

export const CITIES = ["Barcelona", "London", "Berlin", "Munich", "Amsterdam"] as const;

export const CityData: Record<string, Spot[]> = {
  Barcelona: [
    {
      id: 1,
      title: "Sagrada Familia",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
      description: "Gaudí's breathtaking basilica — one of the most unique architectural masterpieces in the world. A must-see for photography and sightseeing.",
      location: "Barcelona, Spain",
      lat: 41.403629, lng: 2.174356,
      activities: ["sightseeing", "photo"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Park Güell",
      img: "https://images.unsplash.com/photo-1558618047-3e46b9a97043?auto=format&fit=crop&w=800&q=80",
      description: "Colorful hilltop park by Gaudí with mosaic terraces, stunning city views, and wooded trails perfect for hiking.",
      location: "Barcelona, Spain",
      lat: 41.414494, lng: 2.152694,
      activities: ["park", "hiking", "photo"],
      rating: 4.6,
    },
    {
      id: 3,
      title: "Casa Batlló",
      img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
      description: "Gaudí's surreal dragon-back building on the Passeig de Gràcia — a stunning mix of museum and living architecture.",
      location: "Barcelona, Spain",
      lat: 41.39164, lng: 2.164864,
      activities: ["sightseeing", "photo", "museum"],
      rating: 4.7,
    },
    {
      id: 4,
      title: "El Born Beer & Tapas",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      description: "Lively tapas bars and craft-beer spots in the trendy El Born quarter. Perfect for a cold cerveza after sightseeing.",
      location: "Barcelona, Spain",
      lat: 41.385, lng: 2.182,
      activities: ["bar", "food", "nightlife"],
      rating: 4.4,
    },
    {
      id: 5,
      title: "Montjuïc Hiking Trail",
      img: "https://images.unsplash.com/photo-1525081905268-fc0b46e83698?auto=format&fit=crop&w=800&q=80",
      description: "Scenic hill trails with breathtaking panoramas over the city and sea. Barcelona's favorite hiking escape.",
      location: "Barcelona, Spain",
      lat: 41.364, lng: 2.157,
      activities: ["hiking", "park", "photo"],
      rating: 4.5,
    },
  ],
  London: [
    {
      id: 1,
      title: "Big Ben & Westminster",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      description: "London's most iconic clock tower beside the Thames. Classic sightseeing and an unmissable photo stop.",
      location: "London, UK",
      lat: 51.500729, lng: -0.124625,
      activities: ["sightseeing", "photo"],
      rating: 4.7,
    },
    {
      id: 2,
      title: "Tower of London",
      img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
      description: "900-year-old fortress housing the Crown Jewels. Rich history, medieval towers, and world-class exhibitions.",
      location: "London, UK",
      lat: 51.508112, lng: -0.075949,
      activities: ["museum", "sightseeing"],
      rating: 4.5,
    },
    {
      id: 3,
      title: "Hyde Park",
      img: "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&w=800&q=80",
      description: "London's green lung — perfect for leisurely walks, jogging trails, pedal boats on the Serpentine, and picnics.",
      location: "London, UK",
      lat: 51.507268, lng: -0.16573,
      activities: ["park", "hiking"],
      rating: 4.6,
    },
    {
      id: 4,
      title: "Shoreditch Bars & Nightlife",
      img: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?auto=format&fit=crop&w=800&q=80",
      description: "East London's hippest district — craft beer pubs, rooftop bars, and an electric nightlife scene.",
      location: "London, UK",
      lat: 51.5246, lng: -0.0765,
      activities: ["bar", "nightlife"],
      rating: 4.3,
    },
    {
      id: 5,
      title: "Borough Market",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      description: "London's most beloved food market — street food, artisan produce, and outstanding chef-quality dishes.",
      location: "London, UK",
      lat: 51.5055, lng: -0.091,
      activities: ["food", "photo"],
      rating: 4.7,
    },
  ],
  Berlin: [
    {
      id: 1,
      title: "Brandenburg Gate",
      img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
      description: "The iconic symbol of German reunification — a powerful landmark and one of Berlin's top photo spots.",
      location: "Berlin, Germany",
      lat: 52.516275, lng: 13.377704,
      activities: ["sightseeing", "photo"],
      rating: 4.7,
    },
    {
      id: 2,
      title: "Tiergarten Park",
      img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
      description: "Berlin's massive central park — great for cycling, hiking, and lazy afternoons among the trees.",
      location: "Berlin, Germany",
      lat: 52.514, lng: 13.35,
      activities: ["park", "hiking"],
      rating: 4.6,
    },
    {
      id: 3,
      title: "Museum Island",
      img: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80",
      description: "Five world-class museums on a UNESCO-listed island — Egyptian antiquities, ancient art, and European masters.",
      location: "Berlin, Germany",
      lat: 52.516934, lng: 13.401001,
      activities: ["museum", "sightseeing"],
      rating: 4.8,
    },
    {
      id: 4,
      title: "Kreuzberg Bars & Clubs",
      img: "https://images.unsplash.com/photo-1545128485-c35305837192?auto=format&fit=crop&w=800&q=80",
      description: "Berlin's most legendary nightlife district — from gritty techno clubs to cozy craft-beer kneipen.",
      location: "Berlin, Germany",
      lat: 52.4988, lng: 13.3982,
      activities: ["nightlife", "bar"],
      rating: 4.3,
    },
    {
      id: 5,
      title: "Markthalle Neun",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      description: "Historic market hall with street food, craft beer, and local vendors — Thursday is Street Food Thursday.",
      location: "Berlin, Germany",
      lat: 52.499, lng: 13.432,
      activities: ["food", "bar"],
      rating: 4.5,
    },
  ],
  Munich: [
    {
      id: 1,
      title: "Englischer Garten",
      img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80",
      description: "One of Europe's largest city parks — beer gardens, Eisbach surfers, and miles of hiking & cycling paths.",
      location: "Munich, Germany",
      lat: 48.1642, lng: 11.6069,
      activities: ["park", "hiking", "bar"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Hofbräuhaus",
      img: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?auto=format&fit=crop&w=800&q=80",
      description: "Munich's legendary beer hall — lederhosen, oompah bands, and liter steins of Märzen. The ultimate Bavarian bar experience.",
      location: "Munich, Germany",
      lat: 48.1376, lng: 11.5798,
      activities: ["bar", "food"],
      rating: 4.4,
    },
    {
      id: 3,
      title: "Marienplatz & Glockenspiel",
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      description: "Munich's central square with its famous carillon tower — a top sightseeing and photo stop.",
      location: "Munich, Germany",
      lat: 48.1374, lng: 11.5755,
      activities: ["sightseeing", "photo"],
      rating: 4.6,
    },
    {
      id: 4,
      title: "Deutsches Museum",
      img: "https://images.unsplash.com/photo-1532094349884-543559153086?auto=format&fit=crop&w=800&q=80",
      description: "The world's largest science and technology museum — hands-on exhibits across 73,000 m².",
      location: "Munich, Germany",
      lat: 48.13, lng: 11.5831,
      activities: ["museum"],
      rating: 4.5,
    },
    {
      id: 5,
      title: "Isar River Trail",
      img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
      description: "Scenic riverside hiking and cycling trail — popular for wild swimming and sunset walks.",
      location: "Munich, Germany",
      lat: 48.0991, lng: 11.5563,
      activities: ["hiking", "park", "photo"],
      rating: 4.7,
    },
  ],
  Amsterdam: [
    {
      id: 1,
      title: "Vondelpark",
      img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
      description: "Amsterdam's beloved park — gardens, ponds, open-air concerts, and the best spot for a sunny afternoon.",
      location: "Amsterdam, Netherlands",
      lat: 52.3579, lng: 4.8686,
      activities: ["park", "hiking"],
      rating: 4.6,
    },
    {
      id: 2,
      title: "Rijksmuseum",
      img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=800&q=80",
      description: "The Netherlands' national museum — Rembrandt, Vermeer, and centuries of Dutch Golden Age masterpieces.",
      location: "Amsterdam, Netherlands",
      lat: 52.36, lng: 4.8852,
      activities: ["museum", "sightseeing"],
      rating: 4.9,
    },
    {
      id: 3,
      title: "Jordaan Canal Photo Walk",
      img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
      description: "The most photogenic neighbourhood in Europe — narrow canals, crooked gabled houses, and charming bridges.",
      location: "Amsterdam, Netherlands",
      lat: 52.3738, lng: 4.8836,
      activities: ["photo", "sightseeing"],
      rating: 4.7,
    },
    {
      id: 4,
      title: "Brown Cafés & Heineken Experience",
      img: "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6d3?auto=format&fit=crop&w=800&q=80",
      description: "Tour the Heineken brewery then explore Amsterdam's iconic brown cafés for local beers and cosy vibes.",
      location: "Amsterdam, Netherlands",
      lat: 52.3576, lng: 4.8912,
      activities: ["bar", "food"],
      rating: 4.4,
    },
    {
      id: 5,
      title: "Foodhallen",
      img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80",
      description: "Amsterdam's coolest indoor food market — 21 stalls, craft cocktails, and an amazing weekend atmosphere.",
      location: "Amsterdam, Netherlands",
      lat: 52.3635, lng: 4.8642,
      activities: ["food", "nightlife"],
      rating: 4.6,
    },
  ],
};
