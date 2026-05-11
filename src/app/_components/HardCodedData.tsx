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
      img: "/sagrada.png",
      description: "Gaudí's breathtaking basilica — one of the most unique architectural masterpieces in the world. A must-see for photography and sightseeing.",
      location: "Barcelona, Spain",
      lat: 41.403629, lng: 2.174356,
      activities: ["sightseeing", "photo"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Park Güell",
      img: "/park.png",
      description: "Colorful hilltop park by Gaudí with mosaic terraces, stunning city views, and wooded trails perfect for hiking.",
      location: "Barcelona, Spain",
      lat: 41.414494, lng: 2.152694,
      activities: ["park", "hiking", "photo"],
      rating: 4.6,
    },
    {
      id: 3,
      title: "Casa Batlló",
      img: "/Casa.png",
      description: "Gaudí's surreal dragon-back building on the Passeig de Gràcia — a stunning mix of museum and living architecture.",
      location: "Barcelona, Spain",
      lat: 41.39164, lng: 2.164864,
      activities: ["sightseeing", "photo", "museum"],
      rating: 4.7,
    },
    {
      id: 4,
      title: "El Born Beer & Tapas",
      img: "/vibe.png",
      description: "Lively tapas bars and craft-beer spots in the trendy El Born quarter. Perfect for a cold cerveza after sightseeing.",
      location: "Barcelona, Spain",
      lat: 41.385, lng: 2.182,
      activities: ["bar", "food", "nightlife"],
      rating: 4.4,
    },
    {
      id: 5,
      title: "Montjuïc Hiking Trail",
      img: "/park.png",
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
      img: "/onetwo.PNG",
      description: "London's most iconic clock tower beside the Thames. Classic sightseeing and an unmissable photo stop.",
      location: "London, UK",
      lat: 51.500729, lng: -0.124625,
      activities: ["sightseeing", "photo"],
      rating: 4.7,
    },
    {
      id: 2,
      title: "Tower of London",
      img: "/cards1.png",
      description: "900-year-old fortress housing the Crown Jewels. Rich history, medieval towers, and world-class exhibitions.",
      location: "London, UK",
      lat: 51.508112, lng: -0.075949,
      activities: ["museum", "sightseeing"],
      rating: 4.5,
    },
    {
      id: 3,
      title: "Hyde Park",
      img: "/park.png",
      description: "London's green lung — perfect for leisurely walks, jogging trails, pedal boats on the Serpentine, and picnics.",
      location: "London, UK",
      lat: 51.507268, lng: -0.16573,
      activities: ["park", "hiking"],
      rating: 4.6,
    },
    {
      id: 4,
      title: "Shoreditch Bars & Nightlife",
      img: "/vibe.png",
      description: "East London's hippest district — craft beer pubs, rooftop bars, and an electric nightlife scene.",
      location: "London, UK",
      lat: 51.5246, lng: -0.0765,
      activities: ["bar", "nightlife"],
      rating: 4.3,
    },
    {
      id: 5,
      title: "Borough Market",
      img: "/cards.png",
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
      img: "/cards1.png",
      description: "The iconic symbol of German reunification — a powerful landmark and one of Berlin's top photo spots.",
      location: "Berlin, Germany",
      lat: 52.516275, lng: 13.377704,
      activities: ["sightseeing", "photo"],
      rating: 4.7,
    },
    {
      id: 2,
      title: "Tiergarten Park",
      img: "/park.png",
      description: "Berlin's massive central park — great for cycling, hiking, and lazy afternoons among the trees.",
      location: "Berlin, Germany",
      lat: 52.514, lng: 13.35,
      activities: ["park", "hiking"],
      rating: 4.6,
    },
    {
      id: 3,
      title: "Museum Island",
      img: "/cards.png",
      description: "Five world-class museums on a UNESCO-listed island — Egyptian antiquities, ancient art, and European masters.",
      location: "Berlin, Germany",
      lat: 52.516934, lng: 13.401001,
      activities: ["museum", "sightseeing"],
      rating: 4.8,
    },
    {
      id: 4,
      title: "Kreuzberg Bars & Clubs",
      img: "/vibe.png",
      description: "Berlin's most legendary nightlife district — from gritty techno clubs to cozy craft-beer kneipen.",
      location: "Berlin, Germany",
      lat: 52.4988, lng: 13.3982,
      activities: ["nightlife", "bar"],
      rating: 4.3,
    },
    {
      id: 5,
      title: "Markthalle Neun",
      img: "/cards1.png",
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
      img: "/park.png",
      description: "One of Europe's largest city parks — beer gardens, Eisbach surfers, and miles of hiking & cycling paths.",
      location: "Munich, Germany",
      lat: 48.1642, lng: 11.6069,
      activities: ["park", "hiking", "bar"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Hofbräuhaus",
      img: "/vibe.png",
      description: "Munich's legendary beer hall — lederhosen, oompah bands, and liter steins of Märzen. The ultimate Bavarian bar experience.",
      location: "Munich, Germany",
      lat: 48.1376, lng: 11.5798,
      activities: ["bar", "food"],
      rating: 4.4,
    },
    {
      id: 3,
      title: "Marienplatz & Glockenspiel",
      img: "/cards.png",
      description: "Munich's central square with its famous carillon tower — a top sightseeing and photo stop.",
      location: "Munich, Germany",
      lat: 48.1374, lng: 11.5755,
      activities: ["sightseeing", "photo"],
      rating: 4.6,
    },
    {
      id: 4,
      title: "Deutsches Museum",
      img: "/cards1.png",
      description: "The world's largest science and technology museum — hands-on exhibits across 73,000 m².",
      location: "Munich, Germany",
      lat: 48.13, lng: 11.5831,
      activities: ["museum"],
      rating: 4.5,
    },
    {
      id: 5,
      title: "Isar River Trail",
      img: "/park.png",
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
      img: "/park.png",
      description: "Amsterdam's beloved park — gardens, ponds, open-air concerts, and the best spot for a sunny afternoon.",
      location: "Amsterdam, Netherlands",
      lat: 52.3579, lng: 4.8686,
      activities: ["park", "hiking"],
      rating: 4.6,
    },
    {
      id: 2,
      title: "Rijksmuseum",
      img: "/cards1.png",
      description: "The Netherlands' national museum — Rembrandt, Vermeer, and centuries of Dutch Golden Age masterpieces.",
      location: "Amsterdam, Netherlands",
      lat: 52.36, lng: 4.8852,
      activities: ["museum", "sightseeing"],
      rating: 4.9,
    },
    {
      id: 3,
      title: "Jordaan Canal Photo Walk",
      img: "/sagrada.png",
      description: "The most photogenic neighbourhood in Europe — narrow canals, crooked gabled houses, and charming bridges.",
      location: "Amsterdam, Netherlands",
      lat: 52.3738, lng: 4.8836,
      activities: ["photo", "sightseeing"],
      rating: 4.7,
    },
    {
      id: 4,
      title: "Brown Cafés & Heineken Experience",
      img: "/vibe.png",
      description: "Tour the Heineken brewery then explore Amsterdam's iconic brown cafés for local beers and cosy vibes.",
      location: "Amsterdam, Netherlands",
      lat: 52.3576, lng: 4.8912,
      activities: ["bar", "food"],
      rating: 4.4,
    },
    {
      id: 5,
      title: "Foodhallen",
      img: "/cards.png",
      description: "Amsterdam's coolest indoor food market — 21 stalls, craft cocktails, and an amazing weekend atmosphere.",
      location: "Amsterdam, Netherlands",
      lat: 52.3635, lng: 4.8642,
      activities: ["food", "nightlife"],
      rating: 4.6,
    },
  ],
};
