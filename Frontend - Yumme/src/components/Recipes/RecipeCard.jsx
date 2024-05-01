import { Clock, Heart, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Routes } from "../../constants";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import StarRating from "./Rating";
import { useRecipes } from "@/api/recipes";
import { queryClient } from "@/config";

/**
 * Each RecipeCard component is a card that displays the recipe image, title, description, and category.
 * @param {string} id - The id of the recipe.
 * @param {string} image - The image of the recipe.
 * @param {string} title - The title of the recipe.
 * @param {string} description - The description of the recipe.
 * @param {number} cookingTime - The cooking time of the recipe.
 * @param {number} perPerson - The number of people the recipe serves.
 * @param {string} category - The category of the recipe.
 * @param {boolean} isFavorite - The favorite status of the recipe.
 * @returns {JSX.Element} - The RecipeCard component.
 */
const RecipeCard = ({
  id,
  image,
  title,
  description,
  cookingTime,
  perPerson,
  category,
  favoriteRecipes,
  score,
}) => {
  const { favoriteRecipe } = useRecipes();

  const { mutate } = favoriteRecipe();

  const isFavorite = favoriteRecipes?.includes(id);

  return (
    <div className="relative group">
      <Button
        onClick={() =>
          mutate(
            { id },
            {
              onSuccess: () => queryClient.invalidateQueries({queryKey: ["favoriteRecipes"]}),
            }
          )
        }
        className="absolute top-2 z-50 right-2 rounded-full  group-hover:scale-125 transition-transform p-2 hover:bg-gray-50/20"
        variant={"ghost"}
        size={"icon"}
      >
        <Heart
          className={`size-8`}
          fill={`${isFavorite ? "red" : "transparent"} `}
          color="red"
        />
      </Button>
      <Link
        key={id}
        className="border cursor-pointer  relative bg-card text-card-foreground hover:scale-105 transition-transform shadow-sm flex flex-col w-full rounded-md"
        to={`${Routes.RECIPE}/${id}`}
      >
        <img
          src={image || "https://via.placeholder.com/260"}
          alt={title}
          className="w-full object-cover rounded-t-md aspect-square"
        />
        <div className="px-6 py-4 flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="text-lg border-none font-semibold">{title}</h2>
            <p className="line-clamp-3 max-w-[80ch] text-xs text-muted-foreground">
              {description}
            </p>
          </div>

          <StarRating small score={score} />
          <div className="flex gap-4">
            <Badge variant={"outline"} className="flex gap-2 py-1 max-w-max">
              <Clock className="size-4" /> {cookingTime} min
            </Badge>
            <Badge variant={"outline"} className="flex gap-2 py-1 max-w-max">
              <Users2 className="size-4" /> {perPerson}
            </Badge>
          </div>

          <Badge variant={"secondary"} className="w-min">
            {category}
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
