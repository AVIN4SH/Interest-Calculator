import React from "react";
import { Link } from "react-router-dom";
import GithubLogo from '../assets/GITHUBicon.png';

function Header() {
  return (
    <div className="navbar bg-[#181818] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/si">Simple Interest</Link>
            </li>
            <li>
              <Link to="/ci">Compound Interest</Link>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-lg">Home</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 sm:text-xl sm:mt-2">
          <li className="sm:px-2">
            <Link className="hover:scale-105 hover:bg-[#181818]" to="/si">Simple Interest</Link>
          </li>
          <li className="sm:px-2">
            <Link className="hover:scale-105 hover:bg-[#181818]" to="/ci">Compound Interest</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  bg-[#181818] text-white" href="https://github.com/AVIN4SH">
          
          <img src={GithubLogo}  alt="Github Logo" className="w-12" />
          </a>
      </div>
    </div>
  );
}

export default Header;
