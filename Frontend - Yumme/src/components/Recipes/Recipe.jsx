import React from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../../api/recipes";

const Recipe = () => {
  const { id } = useParams();

  const { getRecipe } = useRecipes();
  const { data: recipe, isLoading, isError } = getRecipe(id);

  // !! @MANUEL - TIENES EL isLoading que te servira para mejorar la UX puedes cargarlos como quieras, y usarlo donde quieras en el componente
  /** 
   * {isLoading && <div>Loading...</div>} o bien {isLoading ? <div>Loading...</div> : <div>Cargado</div>}
   * Además tenemos instalado el componente de skeleton que es super fácil de usar <Skeleton className="h-[x] w-[y]" />
   * Al skeleton le puedes dar la forma que quieras, no tiene que ser card https://ui.shadcn.com/docs/components/skeleton
   * 
   * Puedes verlo en el componente <Recipes /> 
   * 
   * la receta 2 es la que muestra img, el resto esta bloqueado por corb
   * */ 
  


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
