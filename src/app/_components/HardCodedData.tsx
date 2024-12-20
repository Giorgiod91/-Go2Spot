import { describe } from "node:test";

type City = {
  id: number;
  title: string;
  img: string;
  description: string;
  location: string;
  lat: number;
  lng: number;
};

export const CityData: Record<string, City[]> = {
  Barcelona: [
    {
      id: 1,
      title: "Sagrada Familia",
      img: "./sagrada.png",
      description: "Good looking church",
      location: "Barcelona, Spain",
      lat: 41.403629,
      lng: 2.174356,
    },
    {
      id: 2,
      title: "Park Güell",
      img: "./park.png",
      description: "Colorful park with amazing architecture by Gaudí",
      location: "Barcelona, Spain",
      lat: 41.414494,
      lng: 2.152694,
    },
    {
      id: 3,
      title: "Casa Batlló",
      img: "./Casa.png",
      description: "Iconic modernist building designed by Gaudí",
      location: "Barcelona, Spain",
      lat: 41.39164,
      lng: 2.164864,
    },
  ],
  London: [
    {
      id: 1,
      title: "Big Ben & Houses of Parliament",
      img: "./bigben.png",
      description: "Iconic clock tower and seat of the UK Parliament",
      location: "London, England",
      lat: 51.500729,
      lng: -0.124625,
    },
    {
      id: 2,
      title: "Tower of London",
      img: "./toweroflondon.png",
      description: "Historic castle housing the Crown Jewels",
      location: "London, England",
      lat: 51.508112,
      lng: -0.075949,
    },
    {
      id: 3,
      title: "London Eye",
      img: "./londoneye.png",
      description: "Giant Ferris wheel offering panoramic views of London",
      location: "London, England",
      lat: 51.503324,
      lng: -0.119543,
    },
  ],
  Berlin: [
    {
      id: 1,
      title: "Brandenburg Gate",
      img: "./brandenburg.png",
      description: "Historic monument and symbol of reunification",
      location: "Berlin, Germany",
      lat: 52.516275,
      lng: 13.377704,
    },
    {
      id: 2,
      title: "Berlin Wall Memorial",
      img: "./berlinwall.png",
      description: "Preserved section of the Berlin Wall with a memorial",
      location: "Berlin, Germany",
      lat: 52.535097,
      lng: 13.39037,
    },
    {
      id: 3,
      title: "Museum Island",
      img: "./museumisland.png",
      description: "Collection of world-class museums on an island",
      location: "Berlin, Germany",
      lat: 52.516934,
      lng: 13.401001,
    },
  ],
};
