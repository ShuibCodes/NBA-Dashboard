import React from "react";
import RocketsLineChart from "./RocketsLineChart";
import RocketsBar from './RocketsBar'

function Rockets() {
  return (
    <div className="grid grid-cols-1 gap-14">
        <RocketsLineChart/>
      <div className="col-start-4 col-end-6  mb-14">
       <RocketsBar/>
      </div>
    </div>
  );
}

export default Rockets;
