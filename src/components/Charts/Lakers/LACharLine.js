import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import LebronLine from './LebronLine';
export default function ChartLine(props) {
	return (
		<Card>
			<CardHeader color="orange" contentPosition="left">
				{props.playerAssists === undefined ? (
					<h3 className="text-white text-2xl"> Points Per Season 2015-2021</h3>
				) : (
					<h3 className="text-white text-2xl"> 2021/22 Season Averages - {props.playerName}</h3>
				)}
			</CardHeader>
			<CardBody>
				<div className="relative h-96 w-24">
					<LebronLine
						playerGames={props.playerGames}
						playerPoints={props.playerPoints}
						playerAssists={props.playerAssists}
						playerRebounds={props.playerRebounds}
						playerName={props.playerName}
					/>
				</div>
			</CardBody>
		</Card>
	);
}
