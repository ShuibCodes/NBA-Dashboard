import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import logo from "../assets/img/nba-log.png";
import phoenix from "../assets/img/phoenix-suns.png";
import  rockets from "../assets/img/houston-rockets.png";
import gs from "../assets/img/gsw-logo.png";
import laclippers from "../assets/img/laclippers.png";
import lalakers from "../assets/img/lalakers.png";
import LaLakers from '../assets/SVG/LaLakers'

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <img
              className="h-27 w-logo relative left-2 px-10"
              src={logo}
              alt="logo"
            ></img>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="dashboard" size="2xl" />
                  Dashboard
                </NavLink>
              </li>
              <li
                className="rounded-lg mb-2 flex"
                activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
              >
                <img src={phoenix} alt="suns"></img>
                <NavLink
                  to="/phoenix_suns"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {/* <Icon name="phoenix_suns" size="2xl" /> */}
                  Phoenix Suns
                </NavLink>
              </li>

              <li
                className="rounded-lg mb-2 flex"
                activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
              >
                <LaLakers/>
                <NavLink
                  to="/Lakers"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {/* <Icon name="phoenix_suns" size="2xl" /> */}
                LA Lakers
                </NavLink>
              </li>
              <li
                className="rounded-lg mb-2 flex"
                activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
              >
                <img src={laclippers} alt="la"></img>
                <NavLink
                  to="/clippers"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {/* <Icon name="phoenix_suns" size="2xl" /> */}
                LA Clippers
                </NavLink>
              </li>
              <li
                className="rounded-lg mb-2 flex"
                activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
              >
                <img src={gs} alt="gsw"></img>
                <NavLink
                  to="/GSW"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {/* <Icon name="phoenix_suns" size="2xl" /> */}
                  Golden State Warriors 
                </NavLink>
              </li>
              <li
                className="rounded-lg mb-2 flex"
                activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
              >
                <img src={rockets} alt="rockets"></img>
                <NavLink
                  to="/Rockets"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {/* <Icon name="phoenix_suns" size="2xl" /> */}
                Houston Rockets
                </NavLink>
              </li>
              <li
                className="rounded-lg mb-2 flex"
                activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
              >
                <img src={phoenix} alt="suns"></img>
                <NavLink
                  to="/OKC"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                >
                  {/* <Icon name="phoenix_suns" size="2xl" /> */}
                Oklahoma City Thunder
                </NavLink>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
