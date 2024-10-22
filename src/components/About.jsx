import React from "react";

const About = () => {
  return (
    <>
      <div className="flex-col flex md:flex-row gap-3">
        <div className="flex lg:justify-start justify-center">
        <p className="md:text-7xl text-6xl mx-1  w-fit  my-2 lg:text-start text-center p-2  font-CG text-[#1890d7] break-words whitespace-normal sm:text-left">
          This is the <br />
          <span className="whitespace-nowrap">Hunza Valley!</span>
        </p>
        </div>
        <p className="font-epi my-2 w-fit p-5 text-xl md:text-3xl text-[#1890d7] ">
          Hunza is a hidden gem tucked away in the heart of the Himalayas. This
          beautiful region is home to majestic mountains, crystal-clear lakes,
          and lush green valleys. With a rich history and culture dating back
          thousands of years, Hunza is a fascinating destination for travelers
          who appreciate both natural beauty and ancient traditions.
        </p>
      </div>
    </>
  );
};

export default About;
