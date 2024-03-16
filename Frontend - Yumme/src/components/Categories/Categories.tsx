import React from "react";
import { categories } from "../../constants";
import CategoryBox from "./CategoryBox";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const categoryParams = searchParams.get("q");

  return (
    //  <div className="flex flex-row gap-4">
    //
    //  </div>

    <Carousel
      opts={{
        dragFree: true,
        align: "center",
        
      }}
      
    >
      <CarouselContent className="-ml-4 md:-ml-0 ">
        {categories.map((category, i) => (
          <CarouselItem
          key={i}
            className={cn(
              "basis-1/4 xs:basis-1/5 md:basis-1/8 lg:basis-1/10 xl:basis-1/12 pl-0",
              {
                "  border-b border-primary": category.label === categoryParams,
              }
            )}
            onClick={() => setSearchParams({ q: category.label })}
          >
            <CategoryBox key={i} category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
              
      <CarouselPrevious className=" hidden md:flex md:-left-2" />
      <CarouselNext className="hidden md:flex md:-right-2" />
    </Carousel>
  );
};

export default Categories;
