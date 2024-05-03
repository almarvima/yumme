import { LogOut, UserRound } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../auth';
import { Routes } from '../../constants';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

/**
 * UserDropdown component - A component that displays the user dropdown in the header
 * @returns {JSX.Element} UserDropdown component
 */
const UserDropdown = () => {
  const { logOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <UserRound />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link className="text-primary" to={`${Routes.USER_PROFILE}`}>
            My recipes
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <Link className="text-primary" to={`${Routes.USER_SETTINGS}`}>
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex  justify-between items-center"
          onClick={() => logOut()}
        >
          Logout <LogOut color="hsl(var(--destructive))" className="size-5" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
