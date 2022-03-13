import { useState, useEffect } from 'react';
import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Button from '@material-tailwind/react/Button';
import Timer from '../Timer';
import Icon from '@material-tailwind/react/Icon';
import { useLocation } from 'react-router-dom';
import Tweets from 'components/Tweets';
import axios from 'axios';
import PlayerCard from 'components/PlayerCard';
import '../assets/img/west.png'
import '../assets/img/east.png'




export default function Dashboard({ showSidebar, setShowSidebar }) {
	// API Search logic here

	const [playerName, setplayerName] = useState(null);
	const [playerStats, setplayerStats] = useState('');
	const [playerInfo, setPlayerInfo] = useState('');

	// Search for players, reset input 
	const handleSubmit = (e) => {
		e.preventDefault();
		getPlayerId();
		setplayerName('');
	};

	const handleChange = (event) => {
		const replace = event.target.value;
		if (replace.length >= 0) {
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
				// player info (ID , position, team
				if (res.data.data[0] === undefined) {
					alert("This player is not recognized or is injured");
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

			<Timer />

			<div className="bg-light-blue-500 px-3 md:px-8 h-40" />

			<div className="px-3 md:px-8 -mt-24">
				{playerStats ? (
					<PlayerCard
						name={`${playerInfo[0]?.first_name}` + ' ' + `${playerInfo[0]?.last_name}`}
						playerSeason={playerStats.season}
						playerTeam={playerInfo[0]?.['team'].full_name}
						playerGames={playerStats.games_played}
						playerPoints={playerStats.pts}
						playerAssist={playerStats.ast}
						playerRebounds={playerStats.reb}
						playerConference={playerInfo[0]?.["team"]?.conference}
					/>
				) : (
					<div className="px-3 md:px-8 -mt-24">
						<div className="container mx-auto max-w-full">
							{/* for non-mobile screen- 5 cols, mobile = 1 cols */}
							<div className="grid grid-cols-1 xl:grid-cols-5">
								{/* line chart = start on col one, end 5 */}
								<div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
									<ChartLine />
								</div>
								{/* bar chart = start on col 4, end 6 */}
								<div className="xl:col-start-4 xl:col-end-6 px- mb-14">
									<ChartBar />
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="mt-32 px-3 md:px-8">
					<div className="container mx-auto max-w-full">
						
							<Tweets />
						
					</div>
				</div>
			</div>
		</>
	);
}
