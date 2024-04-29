import React from "react";
import Recipes from "./Recipes/Recipes";
import Categories from "./Categories/Categories";
import HeroSection from "./HeroSection";
import { Separator } from "./ui/separator";

/**
 * Home component - A component that displays the home page of the website
 * @returns {JSX.Element} Home component
 */
const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <Separator />
      <Categories />
      <Recipes />
    </div>
  );
};

export default Home;
