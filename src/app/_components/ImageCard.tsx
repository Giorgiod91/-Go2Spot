"use client";
import { useState } from "react";
import { CityData } from "./HardCodedData";
import { useChoose } from "context/ChooseContext";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="card w-96 rounded-3xl border border-base-200 bg-base-100 shadow-lg backdrop-blur-md"
    >
      <h1 className="pt-4 text-center text-sm font-medium text-neutral-content">
        {location}
      </h1>

      <figure className="px-6 pt-4">
        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={img}
          alt={title}
          className="rounded-2xl shadow-sm"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold text-primary">
          {title}
        </h2>

        <p className="text-sm text-neutral-content/80">
          {clicked && description}
        </p>

        <div className="mt-4 flex w-full flex-col gap-3">
          <motion.button
            onClick={ShowRightText}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hover:bg-neutral-focus btn w-full rounded-full bg-neutral text-white"
          >
            More Info
          </motion.button>

          <motion.button
            onClick={() => OpenLinkOnClick(title)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hover:bg-primary-focus btn w-full rounded-full bg-primary text-white"
          >
            Let’s Go
          </motion.button>

          <motion.button
            onClick={ShowOnMap}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn w-full rounded-full bg-base-200 text-base-content hover:bg-base-300"
          >
            Show on Map
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ImageCard;
