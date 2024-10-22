import React from "react";
import Button from "./Buttons";
import Tabs from "./Tabs";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('https://res.cloudinary.com/dc367rgig/image/upload/v1729619790/patrick-hendry-rGoxQdG6GXc-unsplash_iljtmn.jpg')] bg-fixed h-screen bg-center p-2 bg-cover md:w-full bg-no-repeat ">
        <div className="text-center p-2 flex items-center justify-center flex-col gap-3">
          <h1 className="font-sans text-white md:text-7xl font-semibold text-4xl">
            Win more deals. <br /> Pitch.
          </h1>
          <p className="w-[42%] text-white md:leading-9">
            Pitch turns presentations into your team's superpower for closing
            deals, winning clients, and expanding accounts, all while staying on
            brand.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button text="Get Started For Free" variant="primary" />
            <Button text="Explore Plans" variant="secondary" />
          </div>
          <Tabs/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
