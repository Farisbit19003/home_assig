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
      {/* Tabs Container */}
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`md:flex items-center space-x-2 px-4 py-2 min-w-max ${
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

      {/* Content for Active Tab */}
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
