import React from "react";
import ClippersLine from "./ClippersLine";
import ClippersBar from './ClippersBar'
function Clippers() {


  return (
    <div className="grid grid-cols-1 gap-14">
    <ClippersLine />
    <div className="col-start-4 col-end-6  mb-14">
      <ClippersBar />
    </div>
  </div>
  );
}

export default Clippers;
