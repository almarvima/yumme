import { Edit } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { Routes } from "../../constants";

const userProfileLink = [
  {
    name: "My Recipes",
    to: Routes.USER_PROFILE,
  },
  {
    name: "Settings",
    to: Routes.USER_SETTINGS,
  },
];

export function UserProfile() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <section className="sticky top-0 flex h-16 px-0 items-center gap-4 border-b ">
        <nav className="md:text-lg font-medium flex flex-row md:items-center gap-4 text-sm lg:gap-6">
          <Edit className="size-6 sr-only md:not-sr-only" />
          <span className="sr-only">Your Recipes</span>

          {userProfileLink.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 pb-1 border-teal-500 transition-all"
                  : "text-gray-900 hover:text-teal-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </section>
      <Outlet />
    </div>
  );
}

export default UserProfile;
