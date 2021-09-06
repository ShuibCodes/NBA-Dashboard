import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
  } from "react";
  
  import { ResponsiveBar } from "@nivo/bar";
  
  import { useInterval } from 'use-interval';
  
  
  // Moved all this static data out of the component so that
  // rerenders dont need to re compute it again.
  
  
  
  function Curry() {
  
  
  
    const season16 = [ { "games_played": 74,
    "player_id": 237,
    "season": 2016,
    "min": "37:45",
    "fgm": 9.95,
    "fga": 18.16,
    "fg3m": 1.68,
    "fg3a": 4.62,
    "ftm": 4.84,
    "fta": 7.18,
    "oreb": 1.31,
    "dreb": 7.32,
    "reb": 10.7,
    "ast": 10.4,
    "stl": 1.24,
    "blk": 0.59,
    "turnover": 4.09,
    "pf": 1.81,
    "pts": 31.1,
    "fg_pct": 0.548,
    "fg3_pct": 0.363,
    "ft_pct": 0.674
  }]
  
  
  const season17 = [{
    "games_played": 82,
    "player_id": 237,
    "season": 2017,
    "min": "36:53",
    "fgm": 10.45,
    "fga": 19.27,
    "fg3m": 1.82,
    "fg3a": 4.95,
    "ftm": 4.73,
    "fta": 6.48,
    "oreb": 1.18,
    "dreb": 7.46,
    "reb": 10,
    "ast": 10,
    "stl": 1.41,
    "blk": 0.87,
    "turnover": 4.23,
    "pf": 1.66,
    "pts": 25.4,
    "fg_pct": 0.542,
    "fg3_pct": 0.367,
    "ft_pct": 0.731
  }]
  
  const season18 = [{
    
    "games_played": 55,
    "player_id": 237,
    "season": 2018,
    "min": "35:13",
    "fgm": 10.15,
    "fga": 19.91,
    "fg3m": 2.02,
    "fg3a": 5.95,
    "ftm": 5.05,
    "fta": 7.6,
    "oreb": 1.02,
    "dreb": 7.42,
    "reb": 11.1,
    "ast": 10.7,
    "stl": 1.31,
    "blk": 0.6,
    "turnover": 3.58,
    "pf": 1.71,
    "pts": 22.9,
    "fg_pct": 0.51,
    "fg3_pct": 0.339,
    "ft_pct": 0.665
  }]
  
    const season19 = [
      {
        games_played: 67,
        player_id: 237,
        season: 2019,
        min: "34:34",
        fgm: 9.6,
        fga: 19.45,
        fg3m: 2.21,
        fg3a: 6.34,
        ftm: 3.94,
        fta: 5.69,
        oreb: 0.96,
        dreb: 6.85,
        reb: 7.9,
        ast: 7.7,
        stl: 1.16,
        blk: 0.55,
        turnover: 3.9,
        pf: 1.76,
        pts: 27.2,
        fg_pct: 0.493,
        fg3_pct: 0.348,
        ft_pct: 0.693,
      },
    ];
    
    const season20 = [
      {
        games_played: 45,
        player_id: 237,
        season: 2020,
        min: "33:24",
        fgm: 9.38,
        fga: 18.29,
        fg3m: 2.31,
        fg3a: 6.33,
        ftm: 3.96,
        fta: 5.67,
        oreb: 0.64,
        dreb: 7.02,
        reb: 11.5,
        ast: 11.7,
        stl: 1.07,
        blk: 0.56,
        turnover: 3.73,
        pf: 1.56,
        pts: 22.2,
        fg_pct: 0.513,
        fg3_pct: 0.365,
        ft_pct: 0.698,
      },
    ];
    
    const season21 = [
        {
            games_played: 45,
            player_id: 237,
            season: 2020,
            min: "33:24",
            fgm: 9.38,
            fga: 18.29,
            fg3m: 2.31,
            fg3a: 6.33,
            ftm: 3.96,
            fta: 5.67,
            oreb: 0.64,
            dreb: 7.02,
            reb: 11.5,
            ast: 11.7,
            stl: 1.07,
            blk: 0.56,
            turnover: 3.73,
            pf: 1.56,
            pts: 22.2,
            fg_pct: 0.513,
            fg3_pct: 0.365,
            ft_pct: 0.698,
          },
    ];
  
  
    const [open, setOpen] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    // storing table data in state
    const [data, setData] = useState({});
    // keeping a reference of the current idx via a ref as we dont want it to change with re renders unless
    // we want it to.
    const idx = useRef(0);
    // memoizing these 2 constants
    
    const seasons = useMemo(() => [season16, season17, season18,season19, season20, season21], []);
    const stats = useMemo(
      () => [
        { stat: "Points", ppg: "" },
        { stat: "Rebounds", ast: "" },
        { stat: "Assists", reb: "" },
      ],
      []
    );
    // storing dataset
    const [dataset, setDataset] = useState([]);
  
  
    // change year function using useRef and usecallback 
  
    // converted this function to use a useCallback as its dependant
    // on seasons
    const yearChanger = useCallback(() => {
      // idx = useRef()
      // increase the current index by 1
      idx.current = idx.current += 1;
      // check if the current index is greater than the amount of seasons
      // we have
      if (idx.current >= seasons.length) {
        // reset index currently at 0 stored in useRef so no rerenders 
        idx.current = 0;
        setDataset(seasons[idx.current]);
        console.log(idx.current)
      } else {
        setDataset(seasons[idx.current]);
        console.log(idx.current)
  
      }
    }, [seasons]);
  
  
    // change data set depending on year (adding stats)
  
    const sortedData = useCallback((dataset, nums) => {
      // added some checks to make sure we actually have a dataset
      if (dataset && dataset.length) {
        const finalData = nums.map((stat) => {
          if (Object.values(stat).includes("Points")) {
            return {
              ...stat,
              PPG: dataset[0].pts,
            };
          } else if (Object.values(stat).includes("Rebounds")) {
            return {
              ...stat,
              REB: dataset[0].reb,
            };
          } else if (Object.values(stat).includes("Assists")) {
            return {
              ...stat,
             AST: dataset[0].ast,
            };
          }
        });
        console.log(finalData)
        return finalData;
      }
      // return null if we dont have a dataset
      return null;
    }, []);
  
  
  
    // update the data every 2 seconds using the useInterval hook
    useInterval(() => {
      yearChanger();
    }, 2000);
  
    useEffect(() => {
      // compute the table data
      const data = sortedData(dataset, stats);
      // set the table data
      setData(data);
    }, [dataset, sortedData, stats]);
  
  
   
  const [layout , setLayout] = useState("vertical")
  
    
    const changeLayout = () => {
        if(layout === "vertical"){
          setLayout("horizontal")
        } else if(layout == "horizontal"){
          setLayout("vertical")
  
        }
    }
  
    return (
      <>
        <div className="w-auto h-auto ">
      
      <button class="bg-blue-300 w-46  h-10 ml-10   rounded px-2 py-1 cursor-pointer w- whitespace-nowrap "  onClick={changeLayout} > Change Orientation </button>
        <div class="w-auto h-96 px-11 relative right-24 ">
          {data ? (
            <ResponsiveBar
              data={data}
              indexBy="stat"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              maxValue={40}
              layout={layout}
              keys={["PPG", "AST", "REB"]}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              valueFormat={{ format: "", enabled: false }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "stats",
                legendPosition: "middle",
                legendOffset: 40,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 170,
                  translateY: -130,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          ) : null}
        </div>
        </div>
      </>
    );
  }
  
  export default Curry ;