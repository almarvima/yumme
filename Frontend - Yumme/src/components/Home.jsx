import React from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Categories from "./Categories/Categories";
import HeroSection from "./HeroSection";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const mockRecipes = [
  {
    id: 1,
    title: "Pasta",
    description: "Pasta with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Pizza",
    description: "Pizza with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Burger",
    description: "Burger with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Salad",
    description: "Salad with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Tacos",
    description: "Tacos with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Sushi",
    description: "Sushi with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Ramen",
    description: "Ramen with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
];

export const Home = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["recipes"],
  //   queryFn: async () => {
  //     const data = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     return data;
  //   },
  // });

  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <Separator />

      <Categories />

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 gap-4">
          {/* TODO: CARTA DE SHADCN */}
          {mockRecipes.map((recipe) => (
            <div key={recipe.id} className=" flex flex-col gap-2   rounded-md">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg border-none font-semibold">
                {recipe.title}
              </h2>
              <p>{recipe.description}</p>
              <Badge variant={"secondary"} className="w-min">
                Category
              </Badge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
