/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "@tanstack/react-query";
import { postData } from ".";

export const useComments = () => {



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
