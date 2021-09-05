import React from "react";
import GSWLineChart from './GSWLineChart'
import GSWBar from './GSWBar'
function GSW() {
  return (
    <div className="grid grid-cols-1 gap-14">
        <GSWLineChart/>
      <div className="col-start-4 col-end-6  mb-14">
        <GSWBar/>
      </div>
    </div>
  );
}

export default GSW;
