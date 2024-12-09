import React from "react";

type Props = {};

function InputField({}: Props) {
  return (
    <div className="h-35 w-[340px] border">
      <input
        className="w-full text-black"
        type="Your Destination"
        placeholder="Your Destination"
      />
    </div>
  );
}

export default InputField;
