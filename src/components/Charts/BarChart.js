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




 const [arr, setArr ] = useState([])


 

 
 useEffect(() => {
// gets players points from MVP seasons

    
    
      axios.get('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=115&player_ids[]=237&player_ids[]=140&player_ids[]=15')
      .then(async res => {

        const data = [
            {
                "Player": "Giannis", "Points": res.data.data[0].pts , "Assists":res.data.data[0].ast, "Rebounds":res.data.data[0].reb
            },
            {
                "Player": "Curry", "Points": res.data.data[1].pts, "Assists":res.data.data[1].ast, "Rebounds":res.data.data[1].reb
            },
            {
                "Player": "Durant", "Points": res.data.data[2].pts, "Assists":res.data.data[2].ast, "Rebounds":res.data.data[2].reb
            },
            {
                "Player": "Lebron", "Points": res.data.data[3].pts, "Assists":res.data.data[3].ast, "Rebounds":res.data.data[3].reb
            }
        ]
        console.log(res.data.data)
        setArr( data)
       
      }).catch(err => {
        console.log(err)
      })


},[])


console.log(arr)


// Old Bar Chart Data



	return (
		<div class="h-96 w-timer  relative right-8">
			<ResponsiveBar
				data={arr}
				indexBy="Player"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				keys={['Points', 'Assists', 'Rebounds']}
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
				// fill={[
				// 	{
				// 		match: {
				// 			id: 'fries',
				// 		},
				// 		id: 'dots',
				// 	},
				// 	{
				// 		match: {
				// 			id: 'sandwich',
				// 		},
				// 		id: 'lines',
				// 	},
				// ]}
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
