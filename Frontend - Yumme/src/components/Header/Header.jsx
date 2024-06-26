import React from "react";
import { Link, NavLink } from "react-router-dom";

import { menuItems } from "../../constants/";
import BurgerMenu from "./BurgerMenu.jsx";
import HeadersButtons from "./HeaderButtons.jsx";
import { useAuth } from "../../auth/index";
import UserDropdown from "./UserDropdown.jsx";


/**
 * Header component - A component that displays the header of the website
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const { userIsAuthenticated } = useAuth();

  return (
    <header className="w-full  flex flex-col shadow-sm bg-teal-100 ">
      <div className=" flex justify-between gap-4  items-center p-8 container ">
        <Link to={"/"}>
          <img src="/logo.png" className="w-32 rounded-xl" alt="app logo" />
        </Link>

        <div className="gap-4 hidden w-full justify-between items-center md:flex">
          <div className="flex flex-col w-full  md:flex-row gap-8 md:justify-center md:text-lg">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b-2 border-teal-500"
                    : "text-black hover:text-teal-500"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <HeadersButtons />
        </div>

        <div className="flex md:hidden">
          {userIsAuthenticated() ? (
            <>
              <UserDropdown />
            </>
          ) : (
            <BurgerMenu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
