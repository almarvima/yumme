/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "@tanstack/react-query";
import { postData } from ".";

/**
 * Custom hook for handling comments.
 * @returns An object containing the `addComment` function.
 */
export const useComments = () => {
  /**
   * Adds a comment to a recipe.
   * It sends a POST request to the server.
   * @returns A mutation object with the `mutationKey` and `mutationFn` properties.
   */
  const addComment = () => {
    return useMutation({
      mutationKey: ["addComment"],
      mutationFn: async (recipe: { id: number; comment: string }) =>
        await postData(`/api/recipe/${recipe.id}/comment`, {
          comment: recipe.comment,
        }),
    });
  };
  return { addComment };
};
