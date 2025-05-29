import { useState } from "react";
import { CityData } from "./HardCodedData";
import { useChoose } from "context/ChooseContext";

type ImageCardProps = {
  title: string;
  img: string;
  description: string;
  location: string;
};

function ImageCard({ title, img, description, location }: ImageCardProps) {
  //useState and function to keep track if something is clicked to then show the right text thats linked to the spot button that is clicked on
  const [clicked, setClicked] = useState(false);

  const { setChoose } = useChoose();
  const ShowRightText = () => {
    setClicked(true);
  };
  //function for one of the buttons to then open more specifics about the place to then be able to book and so on
  //::TODO: Later add a booking side instead of just google search or maybe a guide site ....
  const OpenLinkOnClick = (title: string) => {
    //opens a search window with google search and takes the string title as an argument cause i want to search for the title
    window.open("https://www.google.com/search?q=${title}");
  };

  const ShowOnMap = () => {
    setChoose(title);
  };

  return (
    <div className="card w-96 rounded-3xl border-none bg-purple-50 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <h1 className="flex items-center justify-center pt-2 text-2xl font-semibold text-gray-700 opacity-90">
        {location}
      </h1>
      <figure className="px-8 pt-8">
        <img
          src={img}
          alt={title}
          className="transform rounded-3xl border-2 border-[#2c2c2e] shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
        />
      </figure>
      <div className="card-body text-center text-white">
        <h2 className="card-title text-xl font-semibold text-[#a760ff]">
          {title}
        </h2>

        <button
          onClick={ShowRightText}
          className="btn cursor-pointer rounded-full bg-[#8a2bff] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#a760ff]"
        >
          More Info
        </button>

        <button
          onClick={() => OpenLinkOnClick(title)}
          className="btn cursor-pointer rounded-full bg-[#2c2c2e] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#3a3a3c]"
        >
          Let's Go
        </button>

        <button
          onClick={ShowOnMap}
          className="btn btn-outline rounded-full border-[#c494ff] px-6 py-3 text-lg font-semibold text-[#c494ff] transition-all duration-300 ease-in-out hover:bg-[#c494ff] hover:text-black"
        >
          Show on Map
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
