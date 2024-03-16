import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";
import { menuItems } from "../../constants/index";

const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="size-7" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[220px] md:hidden" align="end">
        <DropdownMenuLabel>Yumme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index}>
            <Link
              to={item.to}
              className="text-black hover:text-teal-500 flex gap-2 items-center "
            >
              {item.icon}
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem className="mt-2 hover:bg-none bg-none">
          <Link
            to="sign-in"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "w-full"
            )}
          >
            Sign In
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to="sign-up"
            className={cn(buttonVariants({ size: "sm" }), "w-full gap-2")}
          >
            <User className="size-5" />
            Sign Up
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BurgerMenu;
