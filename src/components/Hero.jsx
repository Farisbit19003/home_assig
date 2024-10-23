import React from "react";
import Button from "./Buttons";
import Tabs from "./Tabs";

const Hero = () => {
  return (
    <>
      <div>
        <div className="text-center p-2 flex items-center justify-center flex-col gap-3">
          <h1 className="font-sans text-[#f2f2f2] md:text-7xl font-semibold text-4xl">
            Win more deals. <br /> Pitch.
          </h1>
          <p className="md:w-[42%] text-[#f2f2f2] md:leading-9">
            Pitch turns presentations into your team's superpower for closing
            deals, winning clients, and expanding accounts, all while staying on
            brand.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center gap-3">
            <Button text="Get Started For Free" variant="primary" />
            <Button text="Explore Plans" variant="secondary" />
          </div>
          <Tabs/>
        </div>
      </div>
    </>
  );
};

export default Hero;
