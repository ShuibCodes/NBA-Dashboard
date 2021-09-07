import React, { useState, useEffect } from "react";

function Timer() {
  const [days, setDays] = useState(32);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(21);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0 && isActive) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0 && isActive) {
        if (minutes === 0 && isActive) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes, isActive]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
          
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
         
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
      
        </span>{" "}
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-5xl countdown">
        
        </span>
        sec
      </div>
    </div>
  );
}

export default Timer;
