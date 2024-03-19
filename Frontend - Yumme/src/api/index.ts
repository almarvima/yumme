/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * In this file, we will define all the API calls that we will be making in our application.
 * We're using the react-query library + axios  to make the API calls.
 *
 * @see https://tanstack.com/query/v5/
 * @see https://axios-http.com/docs/intro
 *
 */

const fetchData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const useRecipes = () => {
  const getRecipes = () => {
    return useQuery({
      queryKey: ["recipes"],
      queryFn: () => fetchData("https://jsonplaceholder.typicode.com/posts"),
    });
  };

  const getRecipe = (id: string) => {
    return useQuery({
      queryKey: ["recipe", id],
      queryFn: () =>
        fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`),
    });
  };

  const createRecipe = (recipe: unknown) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", recipe);
  };

  return {
    getRecipes,
    getRecipe,
    createRecipe,
  };
};

export const useUser = () => {
  const getUser = (id: string) => {
    return useQuery({
      queryKey: ["user", id],
      queryFn: () =>
        fetchData(`https://jsonplaceholder.typicode.com/users/${id}`),
    });
  };

  const registerUser = (user) => {
    console.log(user);

    return useMutation({
      mutationFn: () =>
        axios.post("https://jsonplaceholder.typicode.com/users", user),
      onSuccess: () => {
        console.log("User registered");
      },
    });
  };

  return {
    getUser,
    registerUser,
  };
};
