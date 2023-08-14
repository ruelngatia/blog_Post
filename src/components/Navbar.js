import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DropDown from "./DropDown";

// import '../assets/dark-theme-logo.svg'

export default function Navbar() {
  return (
    <nav className="ml-6 flex flex-row lg:justify-between items-center  text-lg">
      <div className=" flex items-center justify-between md:justify-normal md:space-x-32 py-6 px-2 ">
        <img
          className="w-32"
          src="https://inros.gbjsolution.com/content/images/2021/12/dark-theme-logo.svg"
          alt="logo"
        />
        <div className="hidden lg:block lg:w-auto">
          <ul className="flex items-center md:space-x-6">
            <li>Features</li>
            <li>Elements</li>
            <li>Membership</li>
            <li>Tags</li>
            <div className="relative group">
              <button className="z-10">
                More
                <ExpandMoreIcon />
              </button>
              <ul
                id="dropdown"
                className=" flex-col space-y-5 text-sm font-medium min-w-max hidden group-hover:flex absolute z-20 p-3 rounded-lg border border-border-grey"
              >
                <li>Authors</li>
                <li>Monthly archive</li>
                <li>Monthly archive 2</li>
                <li>Yearly archive</li>
                <li>Yearly archive 2</li>
                <li>Contact</li>
                <li>Documentation</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className="mr-4 hidden lg:block">
        <ul className="flex flex-row items-center space-x-4">
          <li>Sign in</li>
          <li>
            <button className="bg-sk-blue rounded-xl px-3 py-1">Sign Up</button>
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <LightModeIcon />
          </li>
        </ul>
      </div>
      <div className="ml-auto mr-4 lg:hidden relative">
        <button>
            <MenuIcon fontSize="large"/>
        </button>
        {/* <DropDown/> */}
      </div>
    </nav>
  );
}
