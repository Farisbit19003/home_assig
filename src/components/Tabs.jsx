import React, { useState } from "react";
import { FaPalette, FaUsers, FaExchangeAlt, FaChartBar } from "react-icons/fa"; // Importing the icons

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Design", icon: <FaPalette /> },        // Design Icon
    { id: "collaborate", label: "Collaborate", icon: <FaUsers /> }, // Collaborate Icon
    { id: "convert", label: "Convert", icon: <FaExchangeAlt /> },   // Convert Icon
    { id: "analyze", label: "Analyze", icon: <FaChartBar /> },      // Analyze Icon
  ];

  return (
    <div className="mt-5">
      <div className="flex md:space-x-4 space-x-1 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center md:overflow-hidden overflow-x-auto space-x-1 md:space-x-2 px-4 py-2 ${
              activeTab === tab.id
                ? "border-b-2 text-white"
                : "text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} 
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded-lg flex items-center justify-center bg-gray-100">
        {activeTab === "design" && <p>Content for Design tab.</p>}
        {activeTab === "collaborate" && <p>Content for Collaborate tab.</p>}
        {activeTab === "convert" && <p>Content for Convert tab.</p>}
        {activeTab === "analyze" && <p>Content for Analyze tab.</p>}
      </div>
    </div>
  );
};

export default Tabs;
