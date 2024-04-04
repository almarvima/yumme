import React from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../../api/recipes";


const Recipe = () => {
  const { id } = useParams();

  const { getRecipe } = useRecipes();
  const { data: recipe, isLoading, isError } = getRecipe(id);

  return (
    <section className="flex">
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
      {recipe && (
        // los datos que hay que maquetar
        <div>
          <h1>{recipe.title}</h1>

          <p>{recipe.description}</p>
          <img src={recipe.imgUrl} alt={recipe.title} />
          <p>{recipe.cookingTime}</p>
          <p>{recipe.perPerson}</p>
        </div>
      )}
    </section>
  );
};

export default Recipe;
