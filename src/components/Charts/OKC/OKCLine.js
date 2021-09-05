import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";


const westbrook = [
    {
        season: 2015,
        pts: 22.2,
      },
    {
        season: 2016,
        pts: 31.1,
      },
      {
        season: 2017,
        pts: 25.4,
      },
      {
        season: 2018,
        pts: 22.2,
      },
      {
        season: 2019,
        pts: 25.3,
      },
    
      {
        season: 2020,
        pts: 22.2,
      },
]


function LebronLine() {

  const data = [
    {
      id: "Lebron James",
      color: "hsl(22, 70%, 50%)",
      data: [],
    },
  ];

 

  const filteredData = (data, nbaData) => {
    const newData = data[0].data.push(...nbaData);
    console.log(data);
    const fd = data[0].data;
    console.log(data);
    const newFd = fd.map((e) => Object.keys(fd[0]));
    console.log(fd);
    // replacing with x and y
    var i;
    for (i = 0; i < fd.length; i++) {
      fd[i].x = fd[i]["season"];
      fd[i].y = fd[i]["pts"];
    }
    console.log(data);
    return data;
  };

  const russ  = filteredData(data, westbrook);
 
  
  // work out how to put tie all the array of objects together to make multiple lines on the chart
  // style={{ height: "400px", width: "680px" }}
  return (
    <div class="h-96 w-96 lg:w-inner" >
      <ResponsiveLine
        data={russ}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "10",
          max: "40",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "seasons",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "points",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top",
            direction: "row",
            justify: false,
            translateX: 126,
            translateY: -50,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default LebronLine;