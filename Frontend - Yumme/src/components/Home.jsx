import React from "react";
import Recipes from "./Recipes/Recipes";
import Categories from "./Categories/Categories";
import HeroSection from "./HeroSection";
import { Separator } from "./ui/separator";


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
      <Recipes />
    </div>
  );
};
