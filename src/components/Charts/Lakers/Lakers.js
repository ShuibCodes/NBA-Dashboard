import React from 'react';
import LAChartLine from './LACharLine';
import LebronBar from './LebronBar';
import CardBody from '@material-tailwind/react/CardBody';
import Card from '@material-tailwind/react/Card';
import { useState, useEffect } from 'react';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import CardHeader from '@material-tailwind/react/CardHeader';
function Lakers({ showSidebar, setShowSidebar }) {
	// API Search logic here

	const [playerName, setplayerName] = useState(null);
	const [playerStats, setplayerStats] = useState('');
	const [playerInfo, setPlayerInfo] = useState('');

	// change API endpoint to pints from 2015-2021

	// Search for players
	const handleSubmit = (e) => {
		e.preventDefault();
		getPlayerId();
		setplayerName('');
	};

	const handleChange = (event) => {
		const replace = event.target.value;
		if (replace.length > 0) {
			setplayerName(replace);
		} else {
			console.log('Please type players name!');
		}
	};

	// grab player
	const getPlayerId = () => {
		axios
			.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
			.then(async (res) => {
				// player info (ID , position, team)
				console.log(res.data.data);

				if (res.data.data[0] === undefined) {
				
					alert("This player is either injured or hasn't played yet!");
				} else if (res.data.data.length > 1) {
					alert('Pleases specify the name more!');
				} else {
					setPlayerInfo(res.data.data);
					await getPlayerStats(res.data.data[0].id);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// function takes player id and logs full stats from 2021 (make this dynamic so current years stats show?)

	const getPlayerStats = (playerId) => {
		axios
			.get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`)
			.then(async (res) => {
				// full player stats
				console.log(res.data.data);
				setplayerStats(res.data.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const location = useLocation().pathname;
	return (
		<>
			<div className="max-w-screen ">
				<nav className="bg-light-blue-500 md:ml-12 py-6 px-3">
					<div className="container max-w-screen mx-auto flex items-center justify-between md:pr-8 md:pl-10">
						<div className="md:hidden">
							<Button
								color="lightBlue"
								buttonType="link"
								size="lg"
								iconOnly
								rounded
								ripple="light"
								onClick={() => setShowSidebar('left-0')}
							>
								<Icon name="menu" size="2xl" color="white" />
							</Button>
							<div
								className={`absolute top-2 md:hidden ${
									showSidebar === 'left-0' ? 'left-64' : '-left-64'
								} z-50 transition-all duration-300`}
							></div>
						</div>

						<div className="flex justify-between items-center w-full">
							<h4 className="uppercase text-white text-sm tracking-wider mt-1">
								{location === '/' ? 'DASHBOARD' : location.toUpperCase().replace('/', '')}
							</h4>

							<div className="flex">
								<form onSubmit={handleSubmit}>
									<NavbarInput
										placeholder="Enter Players name"
										type="text"
										value={playerName}
										onChange={handleChange}
									/>
								</form>
								
							</div>
						</div>
					</div>
				</nav>
			</div>

			<div className="mt-8 grid grid-cols-1 xl:grid-cols-5">
				{/* line chart = start on col one, end 5 */}
				<div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
					<LAChartLine
						playerGames={playerStats.games_played}
						playerPoints={playerStats.pts}
						playerAssists={playerStats.ast}
						playerRebounds={playerStats.reb}
						playerName={`${playerInfo[0]?.first_name}` + ' ' + `${playerInfo[0]?.last_name}`}
					/>
				</div>
				{/* bar chart = start on col 4, end 6 */}
				<div className="xl:col-start-4 xl:col-end-6 px- mb-14">
					<Card>
						<CardHeader color="pink" contentPosition="left">
							<h6 className="uppercase text-gray-200 text-xs font-medium">Overview</h6>
							<h3 className="text-white text-2xl">Stats Per Season 2015-2021</h3>
						</CardHeader>
						<CardBody>
							<div className="relative h-96">
								<LebronBar />
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			<undefined />
		</>
	);
}

export default Lakers;
