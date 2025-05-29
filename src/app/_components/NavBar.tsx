import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="mx-auto flex w-full items-center justify-between bg-purple-50 px-6 py-4 shadow-md">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold text-black">go2</h2>
        <h2 className="text-2xl font-bold text-black">spot</h2>
      </div>
      <div className="flex items-center space-x-8">
        <h2 className="cursor-pointer text-lg text-[#b0b0b0] transition-all duration-300 ease-in-out hover:text-[#4a90e2]">
          Info
        </h2>
        <h2 className="cursor-pointer text-lg text-[#b0b0b0] transition-all duration-300 ease-in-out hover:text-[#4a90e2]">
          Contact
        </h2>
      </div>
    </div>
  );
}

export default NavBar;
