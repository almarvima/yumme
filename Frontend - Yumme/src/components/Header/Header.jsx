import React from "react";

import HeaderButtons from "./HeaderButtons";
import BurgerMenu from "./BurgerMenu.jsx";
import { menuItems } from "../../constants/index.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full  flex flex-col shadow-sm bg-gray-50 ">
      <div className=" flex justify-between gap-4  items-center p-8 container ">
        <div className="">
          <img src="/logo.png" className="w-20 rounded-xl" alt="" />
        </div>

        <div className="gap-4 hidden w-full justify-between items-center md:flex">
          <div className="flex flex-col w-full  md:flex-row gap-8 md:justify-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-black hover:text-teal-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <HeaderButtons />
        </div>

        <div className="flex md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;