import React from "react";
import { Button } from "./ui/button";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="w-full flex flex-col shadow-sm bg-gray-50 ">
      <div className=" flex justify-between gap-4  items-center p-8 ">
        <div>logo</div>
        <HeaderMenu />
        <div>
          <Button variant={"outline"}>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
