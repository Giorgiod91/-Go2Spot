import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div>
        <h2>go2spot</h2>
      </div>
      <div className="flex space-x-4">
        <h2>Info</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default NavBar;
