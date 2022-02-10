import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import axios from "axios";

const MVPBarChart = () => {
//  Step 1. use Axios to return points, rebounds & assists from 4 MVP players

// Step 2. should be in following format which will be inputed into the data prop - line 44 

	const MVPChart = [
		{ "Player": 'Lebron', "Points": 27, "Assits": 10, "Rebounds": 5 },
		{ "Player": 'Curry', "Points": 27, "Assits": 10, "Rebounds": 5 },
		{ "Player": 'Durant', "Points": 27, "Assits": 10, "Rebounds": 5 },
		{ "Player": 'Westbrook', "Points": 27, "Assits": 10, "Rebounds": 5 },
	];


// Example

// gets Lebrons points from MVP season (2012)
        axios.get("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&season=2012")
        .then(async res => {
            // points 
            console.log(res.data.data[0])
          console.log(res.data.data[0].pts)
         
          // return an array of ojects with Lebron's points,assits and rebounds
          console.log(
            [
              { "Player": "Lebron", "points": res.data.data[0].pts, "assits": res.data.data[0].ast, "rebounds": res.data.data[0].reb},

                

            ]
        )
          // store this into state
        }).catch(err => {
          console.log(err)
        })
      
    


// Old Bar Chart Data

const FinalChartData = [
    {"Player": "Lebron", "2016": 25.3, "2017": 27.5, "2018": 27.4, "2019": 25.3, "2020": 25, },
     {"Player": "Westbrook","2016": 31.6, "2017": 25.4, "2018": 22.2, "2019": 25.3, "2020": 22.2,},
    {"Player": "Curry","2016": 25.3, "2017": 26.4, "2018": 27.3, " 2019": 20.2, "2020": 32.0,},
    {"Player": "Durant", "2016": 25.1, "2017": 26.4,"2018": 27.3, " 2019": 20.2, "2020": 32.0,}
    ]
    

	return (
		<div class="h-96 w-timer  relative right-8">
			<ResponsiveBar
				data={FinalChartData}
				indexBy="Player"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				keys={['2016', '2017', '2018', '2019', '2020']}
				valueScale={{ type: 'linear' }}
				indexScale={{ type: 'band', round: true }}
				valueFormat={{ format: '', enabled: false }}
				colors={{ scheme: 'nivo' }}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: '#38bcb2',
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: '#eed312',
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				fill={[
					{
						match: {
							id: 'fries',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'sandwich',
						},
						id: 'lines',
					},
				]}
				borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Player',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Points',
					legendPosition: 'middle',
					legendOffset: -40,
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				
			/>
		</div>
	);
};

export default MVPBarChart;
