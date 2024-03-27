import { LogOut, Plus, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { useAuth } from "../../auth";
import { Separator } from "../ui/separator";

const HeaderButtons = () => {
  const { userIsAuthenticated, logOut } = useAuth();

  return (
    <>
    <Separator className="block md:hidden" />
      <div className="flex  w-10/12 md:w-auto mx-auto md:py-0 flex-col md:flex-row gap-4 md:gap-4">
      
        {userIsAuthenticated() ? (
          <>
          
            <Link to={Routes.CREATE_RECIPE} className={cn(buttonVariants())}>
              <Plus className="size-5" />
              New recipe
            </Link>

            <Button onClick={logOut} className="flex gap-2" variant={"outline"}>
              Logout
              <LogOut />
            </Button>
          </>
        ) : (
          <>
            <Link to={Routes.SIGN_UP} className={cn(buttonVariants())}>
              Sign Up
            </Link>
            <Link
              to={Routes.SIGN_IN}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <User height={"20"} />
              Sign In
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default HeaderButtons;
