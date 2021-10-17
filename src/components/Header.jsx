import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <header>
        <div className="px-4 py-2 text-white flex  justify-between bg-blue-900">
          <h1>LOGO</h1>
          <div
            className={
              toggleMenu
                ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
                : "hidden md:flex"
            }
            id="menu"
          >
            <ul>
              <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
                <NavLink to="/events">Events</NavLink>
              </li>
              <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                <NavLink to="/team">Team</NavLink>
              </li>
              <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="cursor-pointer md:hidden">
            <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
            <label
              class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
              for="menu-btn"
            >
              <span
                onClick={handleToggle}
                class="navicon bg-white-darkest flex items-center relative"
              ></span>
            </label>
          </div>
        </div>
      </header>
    </>
  );
};
