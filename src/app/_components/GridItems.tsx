import React from "react";

type Props = {
  logo: React.ReactNode;
  heading: string;
  description: string;
};

function GridItems({ logo, heading, description }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-5">
      <div>{logo}</div>
      <h2 className="text-2xl text-neutral-200">{heading}</h2>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}

export default GridItems;
