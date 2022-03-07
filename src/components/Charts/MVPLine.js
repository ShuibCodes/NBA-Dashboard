import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";

const lebron_line = [
  {
    season: 2015,
    pts: 35.8,
  },
  {
    season: 2016,
    pts: 25.3,
  },
  {
    season: 2017,
    pts: 27.5,
  },
  {
    season: 2018,
    pts: 27.4,
  },
  {
    season: 2019,
    pts: 25.3,
  },
  {
    season: 2020,
    pts: 25,
  },
  {
    season: 2021,
    pts: 25,
  },
];

const kd = [
  {
    season: 2016,
    pts: 25.1,
  },
  {
    season: 2017,
    pts: 26.4,
  },
  {
    season: 2018,
    pts: 26.0,
  },
  {
    season: 2019,
    pts: 0,
  },

  {
    season: 2020,
    pts: 26.9,
  },
];

const curry = [
    {
        season: 2015,
        pts: 30.1,
      },
    {
        season: 2016,
        pts: 25.3,
      },
      {
        season: 2017,
        pts: 26.4,
      },
      {
        season: 2018,
        pts: 27.3,
      },
      {
        season: 2019,
        pts: 0,
      },
    
      {
        season: 2020,
        pts: 32,
      },
]

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
function MVP() {
  const data = [
    {
      id: "Lebron",
      color: "hsl(22, 70%, 50%)",
      data: [],
    },
  ];

  const durantSet = [
    {
      id: "Durant",
      color: "hsl(22, 70%, 50%)",
      data: [],
    },
  ];
  const russSet = [
    {
      id: "Westbrook",
      color: "hsl(22, 70%, 50%)",
      data: [],
    },
  ];
  const currySet = [
    {
      id: "Curry",
      color: "hsl(22, 70%, 50%)",
      data: [],
    },
  ];

// function to put the stats into an array of objects like the one above. Needs to follow same format as Nivo.rocks line chart data
  
  const filteredData = (data, nbaData) => {
     data[0].data.push(...nbaData);
    const fd = data[0].data;
    // console.log(data);
    fd.map((e) => Object.keys(fd[0]));
    // console.log(fd);
    // replacing with x and y
    var i;
    for (i = 0; i < fd.length; i++) {
      fd[i].x = fd[i]["season"];
      fd[i].y = fd[i]["pts"];
    }
    // console.log(data);
    return data;
  };

  const kevin = filteredData(durantSet, kd);
  const lebron = filteredData(data, lebron_line);
  const russ = filteredData(russSet,westbrook)
  const steph = filteredData(currySet,curry)



  lebron.push(kevin[0],russ[0],steph[0]);

  // work out how to put tie all the array of objects together to make multiple lines on the chart
  // style={{ height: "400px", width: "680px" }}
  return (
    <div class="h-96 w-64  lg:h-96 w-96 lg:w-inner" >
      <ResponsiveLine
        data={lebron}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "point",
          min: "auto",
          max: "auto",
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

export default MVP;
