import React, { useState, useEffect } from "react";



function Timer() {


  const targetTime = new Date("2021-10-21").getTime();

  
    const [currentTime, setCurrentTime] = useState(Date.now());
  
    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(Date.now());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  return (
   
<div class="min-w-screen min-h-96 flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
    <div class="text-black-100">
        <h1 class="text-2xl lg:text-4xl   text-center mb-3 font-medium">The 2021/2022 NBA Season has Started </h1>
        <div class="text-6xl text-center  flex w-timer lg: w-screen  items-center justify-center">
            <div class="text-2xl mr-1 font-extralight">in</div>
            <div style={{color:"#CF1B5D"}} class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div class="font-mono leading-none" x-text="days">{days}</div>
                <div class="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div style={{color:"#CF1B5D"}} class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div class="font-mono leading-none" x-text="hours">{hours}</div>
                <div class="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            <div style={{color:"#CF1B5D"}} class="w-24 mx-1 p-2 bg-white text-yellow-500  rounded-lg">
                <div class="font-mono leading-none" x-text="minutes">   {minutes}</div>
                <div class="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div class="text-2xl mx-1 font-extralight">and</div>
            <div style={{color:"#CF1B5D"}} class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div class="font-mono leading-none" x-text="seconds">{seconds}
                <div class="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>

    </div>
</div>
</div>
  );
}

export default Timer;




