import React, { useState } from "react";
import BillingOverview from "./BillingOverview";

const DashboardStatsGrid = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 0,
      name: "Patient Name1",
      photo: "https://source.unsplash.com/160x160/?person",
      age: 30,
      gender: "Male",
    },
    {
      id: 1,
      name: "Patient Name2",
      photo: "https://source.unsplash.com/160x160/?person",
      age: 25,
      gender: "Female",
    },
    {
      id: 2,
      name: "Patient Name3",
      photo: "https://source.unsplash.com/160x160/?person",
      age: 45,
      gender: "Male",
    },
    {
      id: 3,
      name: "Patient Name4",
      photo: "https://source.unsplash.com/160x160/?person",
      age: 55,
      gender: "Female",
    },
    {
      id: 4,
      name: "Patient Name5",
      photo: "https://source.unsplash.com/160x160/?person",
      age: 35,
      gender: "Male",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex">
      <div className="w-1/4  py-2 pl-2">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`cursor-pointer p-2 mb-2 ${
              activeTab === index
                ? "bg-white"
                : "bg-blue-200 rounded-lg mb-3 mr-3"
            }`}
            onClick={() => handleTabClick(index)}
          >
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-md overflow-hidden mr-2">
                <img
                  src={tab.photo}
                  alt="Patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-medium">{tab.name}</h2>
                <p className="font-medium ">{`${tab.age}, ${tab.gender}`}</p>
                {activeTab === index ? (
                  <button className="px-1 bg-gray-50 border border-gray-600 rounded-2xl">
                    View Prescription
                  </button>
                ) : (
                  <p>
                    Bill No: <span className="font-medium "> 01234678</span>{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-3/4 bg-white shadow-md rounded-2xl ">
        <BillingOverview user={tabs[activeTab]} />
      </div>
    </div>
  );
};

export default DashboardStatsGrid;
