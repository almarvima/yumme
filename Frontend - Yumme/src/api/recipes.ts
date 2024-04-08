/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, postData } from ".";

export const useRecipes = () => {
  const getRecipes = () => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: () => fetchData("/public/recipe"),
    });
  };

  const getRecipe = (id: string) => {
    return useQuery({
      queryKey: ["recipe", id],
      queryFn: () =>
        fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`),
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
