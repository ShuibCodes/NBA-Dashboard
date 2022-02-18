import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import axios from "axios";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
	const location = useLocation().pathname;

	const [playerName, setplayerName] = useState(null);
	const [playerStats, setplayerStats] = useState({});

	
 // Search for players logic here (YT video on Notion)
	const handleSubmit = (e) => {
		e.preventDefault();
		
		getPlayerId()
		console.log(playerName);
		 setplayerName("")
	};

	const handleChange = (event) => {
		const replace = event.target.value;
		if(replace.length > 0){
		  setplayerName(replace)
		  
		  console.log(playerName)
		} else {
		  console.log("Please type players name!")
		}

	}



	const getPlayerId = () => {
		axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
		.then(async res => {
		  console.log(res.data.data)
		  if(res.data.data[0] === undefined){
			alert("This player is either injured or hasn't played yet!")
		  } else if(res.data.data.length > 1){
			alert("Pleases specify the name more!")
		  } else{
			await getPlayerStats(res.data.data[0].id)
	
		  }
		}).catch(err => {
		  console.log(err)
		})
	  }



	  const getPlayerStats = (playerId) => {
		axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`)
		.then(async res => {
		  console.log(res.data.data)
		  setplayerStats( res.data.data[0])
		 
		}).catch(err => {
		  console.log(err)
		})
	  }

	return (
		<nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
			<div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
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
						<h3>

						</h3>
					</div>
					
				</div>
			</div>
		</nav>
	);
}
