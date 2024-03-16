import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { menuItems } from "../../constants";
import HeaderButtons from "./HeaderButtons";

/**
 * Renders a burger menu component in small devices in the header component.
 *
 * @returns {JSX.Element} The burger menu component.
 */
const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="size-7" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[220px] space-y-4 md:hidden"
        align="end"
      >
        <DropdownMenuLabel>Yumme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {menuItems.map((item, index) => (
          <DropdownMenuItem className="" key={index}>
            <Link
              to={item.to}
              className="text-black w-full h-full hover:text-teal-700 flex gap-2 items-center "
            >
              {item.icon}
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}

        <HeaderButtons />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BurgerMenu;
