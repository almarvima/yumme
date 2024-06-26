import { QueryClient } from "@tanstack/react-query";

// Client which allows us to use react-query
export const queryClient = new QueryClient();

export const SERVER_MESSAGES = {
  USER_NOT_EXIST: "It seems like you don't have an account yet. Please sign up.",
  USER_ALREADY_EXIST: 'It seems like you already have an account. Please sign in.',
  RECIPE_CREATED: 'Recipe created successfully.',
}
