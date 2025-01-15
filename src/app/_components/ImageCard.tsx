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
    <div className="card w-96 rounded-3xl border-none bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <h1 className="flex items-center justify-center pt-2 text-2xl font-semibold text-white opacity-90">
        {location}
      </h1>
      <figure className="px-8 pt-8">
        <img
          src={img}
          alt={title}
          className="transform rounded-3xl border-2 border-[#4b4b4b] shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
        />
      </figure>
      <div className="card-body text-center text-white">
        <h2 className="card-title text-xl font-semibold text-[#d9905e]">
          {title}
        </h2>

        <button
          onClick={ShowRightText}
          className="btn cursor-pointer rounded-full bg-[#d9905e] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#c77f50]"
        >
          More Info
        </button>

        <button
          onClick={() => OpenLinkOnClick(title)}
          className="btn cursor-pointer rounded-full bg-[#34495e] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#2c3e50]"
        >
          Let's Go
        </button>

        <button
          onClick={ShowOnMap}
          className="btn btn-outline rounded-full border-[#d9905e] px-6 py-3 text-lg font-semibold text-[#d9905e] transition-all duration-300 ease-in-out hover:bg-[#d9905e] hover:text-white"
        >
          Show on Map
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
