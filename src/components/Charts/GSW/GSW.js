import React from "react";
import GSWLineChart from './GSWLineChart'
import GSWBar from './GSWBar'
function GSW() {
  return (
    <div className="grid grid-cols-1 gap-14">
        <GSWLineChart/>
      <div className="mb-14">
        <GSWBar/>
      </div>
    </div>
  );
}

export default GSW;
