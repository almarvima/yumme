import React from "react";
import { Button } from "./ui/button";

/**
 * HeroSection component
 * @status : todo
 */
const HeroSection = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container px-4 grid  grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="">
          <img
            alt="Delicious Recipe"
            className="w-full rounded-lg aspect-video"
            src="https://via.placeholder.com/1400"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-left">Delicious Homemade Recipes</h1>
          <p className="text-left">
            Explore a world of flavors and create culinary delights with our
            collection of homemade recipes.
          </p>
          <Button className="rounded-full" size={"lg"}>
            Explore recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
