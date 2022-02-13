import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
	const location = useLocation().pathname;

	const [playerName, setplayerName] = useState(null);
	const [playerStats, setplayerStats] = useState({});

    // Search for players logic here (

    const handleSubmit = (e) => {
		e.preventDefault();
		console.lo(playerName);
	};

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
						<NavbarInput placeholder="Search Player" />

					</div>
				</div>
			</div>
		</nav>
	);
}
