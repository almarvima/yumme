import { Skeleton } from "@/components/ui/skeleton";

import { useRecipes } from "../../api/recipes";
import RecipeCard from "../Recipes/RecipeCard";
import UploadedRecipe from "./UploadedRecipe";

/**
 * FavoriteRecipes component.
 * @returns {JSX.Element} The rendered FavoriteRecipes component.
 */
const FavoriteRecipes = () => {
  const { getFavoriteRecipes, getRecipes } = useRecipes();
  const { data: favoriteRecipes, isLoading, isError } = getFavoriteRecipes();
  const { data: recipes } = getRecipes();

  return (
    <section className="py-8">
      {isError && (
        <div className="flex flex-col gap-4 items-center w-full">
          <img
            src="/cartoon_avocado.png"
            alt="error message"
            className="w-72"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center">Whoops!</h2>
            <p className="text-muted-foreground">
              We're having some problems, try again later.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 justify-items-center gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 gap-4">
        {isLoading &&
          Array(8)
            .fill()
            .map((_, index) => (
              <article key={index} className="flex relative flex-col gap-4">
                <Skeleton className="size-60" />
                <Skeleton className="w-1/2 h-3" />
                <Skeleton className="w-1/4 h-3" />
              </article>
            ))}

        {recipes &&
          recipes
            .filter((recipe) => favoriteRecipes.includes(recipe.id))
            .map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                description={recipe.description}
                image={recipe.imgUrl}
                cookingTime={recipe.cookingTime}
                perPerson={recipe.perPerson}
                category={recipe.categoryName}
                score={recipe.score}
                favoriteRecipes={favoriteRecipes}
              />
            ))}
      </div>
    </section>
  );
};

export default FavoriteRecipes;
