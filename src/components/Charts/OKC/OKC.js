import React from "react";
import OKCLineChart from "./OKCLineChart";
import OKCBar from "./OKCBar";
function OKC() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-14">
        <OKCLineChart />
        <div style={{position:"relative", left:"100px"}}  className="mb-14 ">
          <OKCBar />
        </div>  
      </div>
    </div>
  );
}

export default OKC;
