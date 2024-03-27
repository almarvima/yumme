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

export const postData = async (url: string, data: unknown) => {
  console.log(data);
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user-token")}`,
    },
  });
  return response.data;
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
