import React from "react";

import CalenderButton from "./CalenderButton";
import DashboardStatsGrid from "./DashboardStatsGrid";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Billing Overview</h1>
        <CalenderButton />
      </div>
      <DashboardStatsGrid />
    </div>
  );
}
