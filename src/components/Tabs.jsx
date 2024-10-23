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
    <div className="mt-5">
      {/* Tabs Container */}
      <div className="flex gap-1 whitespace-nowrap">
        <div className="overflow-scroll overflow-x-auto flex">
          {" "}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center justify-center space-x-2 font-sans px-1 md:px-2 py-2 w-fit md:text-base text-sm  ${
                activeTab === tab.id ? "border-b-2 text-[#f2f2f2]" : "text-[#f2f2f2]"
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
       <div className="mt-4 p-4 border rounded-lg flex items-center justify-center bg-[#f2f2f2] text-black font-sans">
        {activeTab === "design" && <p>Content for Design tab.</p>}
        {activeTab === "collaborate" && <p>Content for Collaborate tab.</p>}
        {activeTab === "convert" && <p>Content for Convert tab.</p>}
        {activeTab === "analyze" && <p>Content for Analyze tab.</p>}
      </div> 
    </div>
  );
};

export default Tabs;
