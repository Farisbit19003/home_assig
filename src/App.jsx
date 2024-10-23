import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dc367rgig/image/upload/v1729619790/patrick-hendry-rGoxQdG6GXc-unsplash_iljtmn.jpg')] bg-fixed h-screen bg-center p-2 bg-cover md:w-full bg-no-repeat ">
        <Hero />
      </div>
    </>
  );
}

export default App;
