import React from "react";
import RocketsLineChart from "./RocketsLineChart";
import RocketsBar from './RocketsBar'

function Rockets() {
  return (
    <div className="grid grid-cols-1 gap-14">
        <RocketsLineChart/>
      <div className="mb-14">
       <RocketsBar/>
      </div>
    </div>
  );
}

export default Rockets;
