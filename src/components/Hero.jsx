import React from "react";
import Button from "./Buttons";
import Tabs from "./Tabs";

const Hero = () => {
  return (
    <>
      <div className="text-center p-4 flex items-center justify-center flex-col gap-3">
        <h1 className="font-sans text-[#f2f2f2]  md:text-6xl font-semibold text-3xl ">
          Win more deals. <br /> Pitch.
        </h1>
        <p className="md:w-[50%] font-extralight md:tracking-wider md:text-base text-sm text-[#f2f2f2] md:leading-9">
          Pitch turns presentations into your team's superpower for closing
          deals, winning clients, and expanding accounts, all while staying on
          brand.
        </p>
        <div className="flex md:flex-row flex-col items-center justify-center gap-3">
          <Button text="Get Started For Free" variant="primary" />
          <Button text="Explore Plans" variant="secondary" />
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default Hero;
