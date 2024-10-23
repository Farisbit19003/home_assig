import React from "react";

const Button = ({ text, variant, onClick }) => {
  let buttonClasses =
    "h-fit py-3 px-6 md:mt-7 mt-2 w-full flex items-center justify-center font-sans transition-transform hover:scale-95 font-semibold rounded-lg text-xs cursor-pointer ";

  if (variant === "primary") {
    buttonClasses += "bg-[#f2f2f2] text-black";
  } else if (variant === "secondary") {
    buttonClasses += "border border-[#f2f2f2] text-[#f2f2f2]";
  }

  return (
    <>
      <input
        type="button"
        value={text}
        onClick={onClick}
        className={buttonClasses}
      />
    </>
  );
};

export default Button;
