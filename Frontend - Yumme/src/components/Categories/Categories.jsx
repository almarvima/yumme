import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import { useSearchParams } from "react-router-dom";

import { categories } from "../../constants";
import CategoryBox from "./CategoryBox";

/**
 * Renders a carousel of categories.
 *
 * @returns {JSX.Element} The Categories component.
 */
const Categories = () => {
  /**
   * Api calls are  done with query params
   * in the url to both make the app more SEO friendly and save the
   * state of the query so the users can share without losing the
   * state of the app
   * */
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const categoryParams = searchParams.get("q");

  return (
    <Carousel
      opts={{
        dragFree: true, // This allows the free move and it doesn't snap to the next item
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
            onClick={() =>
              categoryParams
                ? setSearchParams({})
                : setSearchParams({ q: category.label })
            }
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
