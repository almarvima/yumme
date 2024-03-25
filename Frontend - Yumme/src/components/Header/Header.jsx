<<<<<<< HEAD
import React from 'react'
import { NavLink } from 'react-router-dom'
=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> frontend

import { menuItems } from "../../constants/";
import BurgerMenu from "./BurgerMenu.jsx";
import HeadersButtons from "./HeaderButtons.jsx";

const Header = () => {
  // get from local storage token
  // const token = localStorage.getItem('token')

  return (
    <header className="w-full  flex flex-col shadow-sm bg-teal-100 ">
      <div className=" flex justify-between gap-4  items-center p-8 container ">
        <Link to={"/"}>
          <img src="/logo.png" className="w-32 rounded-xl" alt="app logo" />
        </Link>

        <div className="gap-4 hidden w-full justify-between items-center md:flex">
          <div className="flex flex-col w-full  md:flex-row gap-8 md:justify-center md:text-lg">


            {/* TODO: IMPLEMENTAR NAVLINK EN EL SPRINT 3 */}
            {menuItems.map((item, index) => (
<<<<<<< HEAD
              <NavLink key={index} to={item.to} className={({ isActive }) => (isActive ? 'text-black border-b-2 border-teal-500' : 'text-black hover:text-teal-500')}>
=======
              <Link
                key={index}
                to={item.to}
                className="text-black hover:text-teal-500"
              >
>>>>>>> frontend
                {item.label}
              </NavLink>
            ))}
          </div>

          <HeadersButtons />
        </div>

        <div className="flex md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
