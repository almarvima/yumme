/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, postData } from ".";

export const useRecipes = () => {
  const getRecipes = () => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: async () => fetchData("/public/recipe"),
    });
  };

  const getRecipe = (id: number) => {
    console.log(id);
    return useQuery({
      queryKey: ["recipe", id],
      queryFn: async () =>
        fetchData(`/public/recipe/${id}`)
    });
  };

  const createRecipe = () => {
    return useMutation({
      mutationKey: ["createRecipe"],
      mutationFn: async (recipe) => postData("/api/recipe", recipe),
    });
  };

  return {
    getRecipes,
    getRecipe,
    createRecipe,
  };
};
