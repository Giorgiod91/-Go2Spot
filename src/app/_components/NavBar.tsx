import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="mx-auto flex w-full items-center justify-between bg-primary px-4">
      <div className="flex items-center">
        <h2 className="text-2xl">go2spot</h2>
      </div>
      <div className="flex items-center space-x-4">
        <h2>Info</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default NavBar;
