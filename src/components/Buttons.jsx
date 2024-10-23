import React from "react";

const Button = ({ text, variant, onClick }) => {
  let buttonClasses =
    "h-12 p-3 w-fit flex items-center justify-center font-sans transition-transform hover:scale-95 font-semibold rounded-lg text-base cursor-pointer ";

  if (variant === "primary") {
    buttonClasses += "bg-[#f2f2f2] text-black";
  } else if (variant === "secondary") {
    buttonClasses += "border-2 border-[#f2f2f2] text-[#f2f2f2]";
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
