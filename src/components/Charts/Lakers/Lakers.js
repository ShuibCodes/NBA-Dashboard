import React from "react";
import LAChartLine from "./LACharLine";
import LebronBar from './LebronBar'

function Lakers() {
  return (
    <div className="grid grid-cols-1 gap-14">
      <LAChartLine />
      <div className="col-start-4 col-end-6  mb-14">
        <LebronBar />
      </div>
    </div>
  );
}

export default Lakers;
