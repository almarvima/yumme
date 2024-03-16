import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import { User } from "lucide-react";

const HeaderButtons = () => {
  return (
    <div className="flex gap-4">
      <Link to="sign-in" className={cn(buttonVariants({ variant: "outline" }))}>
        <User height={"20"} />
        Sign In
      </Link>
      <Link to="sign-up" className={cn(buttonVariants())}>
        Sign Up
      </Link>
    </div>
  );
};

export default HeaderButtons;
