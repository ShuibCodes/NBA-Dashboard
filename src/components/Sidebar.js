import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import LaLakers from '../assets/SVG/LaLakers'
import Rockets from '../assets/SVG/Rocketslogo'
import  Gsw from '../assets/SVG/GSWlogo'
import Clippers from '../assets/SVG/clipperslogo'
import Suns from '../assets/SVG/Phoenixlogo'
import Okc from '../assets/SVG/OKClogo'
import logo from '../assets/img/nba-log.png'


export default function Sidebar() {

  const [showSidebar, setShowSidebar] = useState("-left-12");
  const [open, setOpen]= useState(true)

  useEffect(() => {
    setOpen(true)
    
  }, []);

  return (
  
 
    <>
               <button style={{margin:"20px", padding:"7px" , borderRadius:"10px", backgroundColor:"#0292DC", fontSize:"22px",}} className=" z-40 border-2 bg-amber-200  text-3xl lg:hidden" onClick={() => setOpen(!open)}  > Menu </button>
    { open ?
    <div>
      {/* <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <div
            className="mt-2 text-center w-full inline-block"
          >
            <button style={{margin:"20px", padding:"7px" , borderRadius:"10px", backgroundColor:"#0292DC", fontSize:"22px", position:"relative", left:"5.2rem"}} className="z-40 lg:hidden  border-2 bg-amber-200  text-3xl" onClick={() => setOpen(!open)}  > Menu </button>
            <img
              className="h-27 w-logo relative left-2 px-10"
              src={logo}
              alt="logo"
            ></img>
          </div>
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
                <Suns/>
                <NavLink
                  to="/sunsCharts"
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
                <Clippers/>
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
                <Gsw/>
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
                <Rockets/>
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
                <Okc/>
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
      </div>
     :
     <></>
     }
    </>
  );
}
