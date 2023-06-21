import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const goToNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="inline-flex bg-blue-200 items-center  p-1 rounded-lg justify-between mb-4">
        <button
          className="p-2 rounded-md bg-indigo-900  text-white"
          onClick={goToPreviousDay}
        >
          &lt;
        </button>
        <h2 className="text-sm font-semibold px-5 ">
          {currentDate.toDateString()}
        </h2>
        <button
          className="p-2  rounded-md bg-indigo-900 text-white"
          onClick={goToNextDay}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Calendar;
