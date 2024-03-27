import React from "react";
import { useRecipes } from "../../api/recipes";

import { Button } from "../ui/button";

const CreateRecipe = () => {
  const { createRecipe } = useRecipes();


  //  Recoger estos datos de un formulario 
  const mockRecipe = {
    title: "Pasta a la bolonyesa",
    description: "",
    cookingTime: 20,
    perPerson: 2,
    ingredients: "Macarrons, tomàquet, oli, sal, tomàquet, carn picada",
    recipeCategory: "Pasta",
  };

  const { mutate, isSuccess } = createRecipe();

  const handleCreateRecipe = () => {
    mutate(mockRecipe, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <>
      {isSuccess && (
        <div>
          Recipe created successfully
          You can see it for the moment in the database
        </div>
      )}
      <Button onClick={handleCreateRecipe}>
        Test button to create a recipe
      </Button>
    </>
  );
};

export default CreateRecipe;
