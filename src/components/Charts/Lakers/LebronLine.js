/* eslint-disable */
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
function LebronLine(props) {
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
	console.log(props);

	const data = [
		{
			id: 'Lebron James',
			color: 'hsl(22, 70%, 50%)',
			data: [],
		},
	];

	const filteredData = (data, nbaData) => {
		const newData = data[0].data.push(...nbaData);
		const fd = data[0].data;
		const newFd = fd.map((e) => Object.keys(fd[0]));
		var i;
		for (i = 0; i < fd.length; i++) {
			fd[i].x = fd[i]['season'];
			fd[i].y = fd[i]['pts'];
		}
		console.log(data);
		return data;
	};

	const lebron = filteredData(data, lebron_line);

	const player_stats = [
		{
			id: 'Points',
			label: 'Points',
			value: props.playerPoints,
			color: 'hsl(18, 70%, 50%)',
		},
		{
			id: 'Rebounds',
			label: 'Rebounds',
			value: props.playerRebounds,
			color: 'hsl(230, 70%, 50%)',
		},
		{
			id: 'Assists',
			label: 'Assists',
			value: props.playerAssists,
			color: 'hsl(243, 70%, 50%)',
		},
	];

	return (
		<div class="h-96 w-96 lg:w-inner">
			{props.playerAssists === undefined ? (
				<ResponsiveLine
					data={lebron}
					margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
					xScale={{ type: 'point' }}
					yScale={{
						type: 'linear',
						min: '10',
						max: '40',
						stacked: true,
						reverse: false,
					}}
					axisTop={null}
					axisRight={null}
					axisBottom={{
						orient: 'bottom',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'seasons',
						legendOffset: 36,
						legendPosition: 'middle',
					}}
					axisLeft={{
						orient: 'left',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'points',
						legendOffset: -40,
						legendPosition: 'middle',
					}}
					colors={{ scheme: 'category10' }}
					pointSize={10}
					pointColor={{ theme: 'background' }}
					pointBorderWidth={2}
					pointBorderColor={{ from: 'serieColor' }}
					pointLabelYOffset={-12}
					useMesh={true}
					legends={[
						{
							anchor: 'top',
							direction: 'row',
							justify: false,
							translateX: 60,
							translateY: -50,
							itemsSpacing: 0,
							itemDirection: 'left-to-right',
							itemWidth: 80,
							itemHeight: 20,
							itemOpacity: 0.75,
							symbolSize: 12,
							symbolShape: 'circle',
							symbolBorderColor: 'rgba(0, 0, 0, .5)',
							effects: [
								{
									on: 'hover',
									style: {
										itemBackground: 'rgba(0, 0, 0, .03)',
										itemOpacity: 1,
									},
								},
							],
						},
					]}
				/>
			) : (
				<ResponsivePie
					data={player_stats}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: 'color',
						modifiers: [['darker', 0.2]],
					}}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabelsTextColor="#333333"
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: 'color' }}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{
						from: 'color',
						modifiers: [['darker', 2]],
					}}
					defs={[
						{
							id: 'dots',
							type: 'patternDots',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
							size: 4,
							padding: 1,
							stagger: true,
						},
						{
							id: 'lines',
							type: 'patternLines',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
							rotation: -45,
							lineWidth: 6,
							spacing: 10,
						},
					]}
					legends={[
						{
							anchor: 'bottom',
							direction: 'row',
							justify: false,
							translateX: 0,
							translateY: 56,
							itemsSpacing: 0,
							itemWidth: 100,
							itemHeight: 18,
							itemTextColor: '#999',
							itemDirection: 'left-to-right',
							itemOpacity: 1,
							symbolSize: 18,
							symbolShape: 'circle',
							effects: [
								{
									on: 'hover',
									style: {
										itemTextColor: '#000',
									},
								},
							],
						},
					]}
				/>
			)}
		</div>
	);
}

export default LebronLine;
