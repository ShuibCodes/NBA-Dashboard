import React from 'react';
import Card from '@material-tailwind/react/Card';
import west from  '../assets/img/west.png'
import east from '../assets/img/east.png'

function PlayerCard(props) {
	return (
		<Card>
			<div className="p-4">

				<h1 className="text-lg leading-6 font-medium text-gray-900 text-center py-8">{props.name}</h1>
				
				<div className="flex">
			
				{
					props.playerConference === "West"?
					<img className="w-12 h-12" src={west} alt="west"/>: <img  className="w-24 h-24"  src={east} alt="east"/>
				}
				<h1 className="text-lg leading-6 font-medium text-gray-900 relative top-2 ml-2">{props.playerTeam}</h1>
				</div>

				<h6 className="text-lg leading-6 font-medium text-gray-900">Games Played: <span
                className="font-medium text-gray-900"
                >
                {props.playerGames} 	
                </span> </h6>

				<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
					<div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Points</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">{props.playerPoints}</dd>
					</div>
					<div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Assists</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">{props.playerAssist}</dd>
					</div>
					<div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Rebounds</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">{props.playerRebounds}</dd>
					</div>
				</dl>
			</div>
		</Card>
	);
}

export default PlayerCard;
