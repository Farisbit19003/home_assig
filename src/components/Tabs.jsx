import React, { useState } from "react";
import { FaPalette, FaUsers, FaExchangeAlt, FaChartBar } from "react-icons/fa";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Design", icon: <FaPalette /> },
    { id: "collaborate", label: "Collaborate", icon: <FaUsers /> },
    { id: "convert", label: "Convert", icon: <FaExchangeAlt /> },
    { id: "analyze", label: "Analyze", icon: <FaChartBar /> },
  ];

  return (
    <>
      <div className="md:mt-12 mt-6">
        {/* Tabs Container */}
        <div className="whitespace-nowrap flex md:gap-8 gap-2 max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center uppercase justify-center space-x-1 md:space-x-2 font-sans px-1 md:px-2 py-2 w-fit text-xs ${
                activeTab === tab.id
                  ? "border-b-2 text-[#f2f2f2]"
                  : "text-[#f2f2f2]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content for Active Tab */}
      <div className="mt-4 p-4 md:w-10/12 md:text-2xl w-full border rounded-lg flex items-center justify-center md:font-semibold bg-[#f2f2f2] text-black font-sans">
        {activeTab === "design" && <p>Content for Design tab.</p>}
        {activeTab === "collaborate" && <p>Content for Collaborate tab.</p>}
        {activeTab === "convert" && <p>Content for Convert tab.</p>}
        {activeTab === "analyze" && <p>Content for Analyze tab.</p>}
      </div>
    </>
  );
};

export default Tabs;
