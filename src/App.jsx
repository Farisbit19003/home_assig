import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dc367rgig/image/upload/v1729660934/pexels-adrien-olichon-1257089-2387793_necwvj.jpg')] bg-fixed h-screen bg-center p-2 bg-cover md:w-full bg-no-repeat ">
        <Hero />
      </div>
    </>
  );
}

export default App;
