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
    <div className="card w-96 rounded-xl border border-black shadow-xl hover:skew-y-3 hover:border-4 hover:border-dotted">
      <h1 className="flex items-center justify-center pt-2 text-xl font-bold">
        {location}
      </h1>
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {clicked ? <h1>{description}</h1> : null}

        <div className="card-actions flex flex-col items-center">
          {!clicked ? (
            <button
              onClick={ShowRightText}
              className="btn btn-primary cursor-pointer"
            >
              More Info{" "}
            </button>
          ) : (
            <button
              onClick={() => OpenLinkOnClick(title)}
              className="btn btn-secondary cursor-pointer"
            >
              Lets Go{" "}
            </button>
          )}

          <button onClick={ShowOnMap}>ShowOnTheMap</button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
