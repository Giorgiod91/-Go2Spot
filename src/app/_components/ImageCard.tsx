import { useState } from "react";

type ImageCardProps = {
  title: string;
  img: string;
  description: string;
  location: string;
};

function ImageCard({ title, img, description, location }: ImageCardProps) {
  //useState and function to keep track if something is clicked to then show the right text thats linked to the spot button that is clicked on
  const [clicked, setClicked] = useState(false);
  const ShowRightText = () => {
    setClicked(true);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:skew-y-3 hover:border-4 hover:border-dotted">
      <h1>{location}</h1>
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {clicked ? <h1>{description}</h1> : null}

        <div className="card-actions">
          {!clicked ? (
            <button
              onClick={ShowRightText}
              className="btn btn-primary cursor-pointer"
            >
              More Info{" "}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
