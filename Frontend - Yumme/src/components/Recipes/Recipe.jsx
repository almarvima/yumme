import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../../api/recipes";
import CommentSection from "./CommentSection";

import { Skeleton } from "@/components/ui/skeleton";
import StarRating from "./Rating";
import { useAuth } from "@/auth";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { queryClient } from "@/config";

/**
 * Recipe component - A component that displays a single recipe
 * @returns {JSX.Element} Recipe component
 */
const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getRecipe, getFavoriteRecipes } = useRecipes();

  const { userIsAuthenticated } = useAuth();

  const {
    data: recipe,
    isLoading,
    isError,
  } = getRecipe(id, userIsAuthenticated());

  if (isError) {
    navigate("/error");
  }

  const { favoriteRecipe } = useRecipes();

  const { mutate } = favoriteRecipe();

  const { data: favoriteRecipes } = getFavoriteRecipes();
  

  const isFavorite = favoriteRecipes?.includes(Number(id));
 
 

  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row md:items-start gap-8 border border-teal-400 shadow-lg p-4 rounded-lg">
        <Skeleton className="h-[250px] w-[250px] rounded-xl" />
        <div className="space-y-4 w-full md:w-1/2">
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="h-5 w-full" count={4} />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto p-4 flex flex-col gap-16">
      {recipe && (
        <>
          <article className="flex relative flex-col md:flex-row md:items-start gap-8 border border-teal-400 shadow-lg p-4 rounded-lg">
            <Button
              onClick={() =>
                mutate(
                  { id },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries({
                        queryKey: ["favoriteRecipes"],
                      });
                    },
                  }
                )
              }
              className="absolute top-2 z-50 right-2 rounded-full  group-hover:scale-125 transition-transform p-2 hover:bg-red-400/20"
              variant={"ghost"}
              size={"icon"}
            >
              <Heart
                className={`size-8`}
                fill={`${isFavorite ? "red" : "transparent"} `}
                color="red"
              />
            </Button>
            <div className="flex flex-col gap-4 w-full h-full">
              <img
                src={recipe.imgUrl}
                alt={recipe.title}
                className="rounded-lg shadow-md w-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <span className="font-medium space-y-2">
                Average Score
                <StarRating score={recipe.score} small />
              </span>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-teal-500 pt-4 md:pt-0 md:pl-4 space-y-4 w-full md:w-1/2">
              <h1 className="text-5xl font-bold pb-4">{recipe.title}</h1>
              <p className="text-lg text-teal-900 tracking-wide pb-4 dark:text-white">
                {recipe.description}
              </p>
              <div className="text-lg text-teal-900 font-light space-y-2 dark:text-white">
                <p className="mb-6">
                  <span className="font-semibold"> Ingredients: </span>{" "}
                  {recipe.ingredients}
                </p>
                <p className="pb-4">
                  <span className="font-semibold">Cooking Time:</span>{" "}
                  {recipe.cookingTime} minutes
                </p>
                <p className="pb-4">
                  <span className="font-semibold"> Servings: </span>
                  {recipe.perPerson}
                  {recipe.perPerson === 1 ? " person" : " people"}
                </p>
                <p>
                  <span className="font-semibold"> Type of food: </span>
                  {recipe.categoryName}{" "}
                </p>
              </div>

              <StarRating score={recipe.score} recipeId={id} />
            </div>
          </article>

          <CommentSection id={id} comments={recipe.comment || []} />
        </>
      )}
    </section>
  );
};

export default Recipe;
