import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Routes } from "../../constants";
import { Dot } from "lucide-react";

const userSettingsLink = [
  {
    name: "General",
    to: Routes.USER_SETTINGS,
  },
  {
    name: "Appearance",
    to: Routes.APPEARANCE,
  },
  {
    name: "Reset Password",
    to: Routes.RESET_PASSWORD,
  },
  {
    name: "Delete Account",
    to: Routes.DELETE_ACCOUNT,
  },
];

const UserSettings = () => {
  return (
    <section className="flex min-h-[calc(100vh_-_theme(spacing.16))] py-8 flex-1 flex-col gap-4   md:gap-8 ">
      <div className="mx-auto grid w-full max-w-7xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground ">
          {userSettingsLink.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-primary w-full bg-primary/10 font-bold transition-colors p-2 rounded-lg dark:bg-teal-800"
                  : "text-primary p-2 hover:font-semibold hover:bg-primary/5 transition-colors rounded-lg"
              }
            >
              {link.name}
              
            </NavLink>
          ))}
        </nav>

        <div className="grid gap-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default UserSettings;
