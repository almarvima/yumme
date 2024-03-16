import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";

const HeaderButtons = () => {
  return (
    <div className="flex py-4 md:py-0 flex-col md:flex-row gap-2 md:gap-4">
      <Link
        to={Routes.SIGN_IN}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        <User height={"20"} />
        Sign In
      </Link>
      <Link to={Routes.SIGN_UP} className={cn(buttonVariants())}>
        Sign Up
      </Link>
    </div>
  );
};

export default HeaderButtons;
