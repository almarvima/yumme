/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteData, fetchData, postData } from ".";
import { queryClient } from "@/config";

export const useRecipes = () => {
  const getRecipes = () => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: async () => fetchData("/public/recipe"),
    });
  };

  const getRecipe = (id: number) => {
    return useQuery({
      queryKey: ["recipe", id],
      queryFn: async () => fetchData(`/public/recipe/${id}`),
    });
  };

  const createRecipe = () => {
    return useMutation({
      mutationKey: ["createRecipe"],
      mutationFn: async (recipe) => postData("/api/recipe", recipe),
    });
  };

  // Fake API call to get recipes by category while waiting for the real API
  const getRecipeByCategory = (category: string) => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: async () => fetchData("/public/recipe"),
      select: (data) => {
        return data.filter((recipe) => recipe.categoryName === category);
      },
    });
  };

  const getRecipesPerUser = () => {
    return useQuery({
      queryKey: ["recipes", "user"],
      queryFn: async () => fetchData("/api/recipe/user", true),
    });
  };

  const deleteRecipe = () => {
    return useMutation({
      mutationKey: ["deleteRecipe"],
      mutationFn: async (id: number) => deleteData(`/api/recipe/${id}`, true),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["recipes"],
        });
      },
    });
  };

  return {
    getRecipes,
    getRecipe,
    createRecipe,
    getRecipeByCategory,
    getRecipesPerUser,
    deleteRecipe,
  };
};
