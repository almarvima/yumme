/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteData, fetchData, postData } from ".";
import { queryClient } from "@/config";

/**
 * A custom hook for managing recipes.
 * It provides functions for fetching, creating, and deleting recipes.
 * @see https://tanstack.com/query/v5/
 * @see https://axios-http.com/docs/intro
 * @returns An object containing functions for interacting with recipes.
 */
export const useRecipes = () => {
  /**
   * Fetches all recipes.
   * @returns A query object for fetching recipes.
   */
  const getRecipes = () => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: async () => fetchData("/public/recipe"),
    });
  };

  /**
   * Fetches a recipe by its ID.
   * @param id - The ID of the recipe.
   * @param isPrivate - Whether the recipe is private (default: false).
   * @returns A query object for fetching the recipe.
   */
  const getRecipe = (id: number, isPrivate = false) => {
    return useQuery({
      queryKey: ["recipe", id],
      queryFn: async () => fetchData(`/public/recipe/${id}`, isPrivate),
    });
  };

  /**
   * Creates a new recipe.
   * @returns A mutation object for creating the recipe.
   */
  const createRecipe = () => {
    return useMutation({
      mutationKey: ["createRecipe"],
      mutationFn: async (recipe) => postData("/api/recipe", recipe),
    });
  };

  /**
   * Fetches recipes by category.
   * @param category - The category of the recipes.
   * @returns A query object for fetching the recipes.
   */
  const getRecipeByCategory = (category: string) => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: async () => fetchData("/public/recipe"),
      select: (data) => {
        return data.filter((recipe) => recipe.categoryName === category);
      },
    });
  };

  /**
   * Fetches recipes created by the current user.
   * @returns A query object for fetching the recipes.
   */
  const getRecipesPerUser = () => {
    return useQuery({
      queryKey: ["recipes", "user"],
      queryFn: async () => fetchData("/api/recipe/user", true),
    });
  };

  /**
   * Deletes a recipe by its ID.
   * @returns A mutation object for deleting the recipe.
   */
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

  /**
   * This function is used to vote a score on a recipe.
   * @returns A mutation object for voting on a recipe.
   */
  const voteRecipe = () => {
    return useMutation({
      mutationKey: ["voteRecipe"],
      mutationFn: async ({ id, score }: { id: number; score: number }) =>
        postData(`/api/score/recipe/${id}`, score),
    });
  };


  /**
   * This function is used to favorite a recipe.
   * @see https://tanstack.com/query/v5/
   * @returns A mutation object for favoriting a recipe.
   */
  const favoriteRecipe = () => {
    return useMutation({
      mutationKey: ["favoriteRecipe"],
      mutationFn: async ({ id }: { id: number }) =>
        postData(`/api/recipe/${id}/favorite`, ""),
    });
  };

  /**
   *  Fetches favorite recipes.
   * @returns A query object for fetching favorite recipes.
   */
  const getFavoriteRecipes = () => {
    return useQuery({
      queryKey: ["favoriteRecipes"],
      queryFn: async () => fetchData("/api/recipe/favorite", true),
    });
  };

  return {
    getRecipes,
    getRecipe,
    createRecipe,
    getRecipeByCategory,
    getRecipesPerUser,
    deleteRecipe,
    voteRecipe,
    favoriteRecipe,
    getFavoriteRecipes,
  };
};
