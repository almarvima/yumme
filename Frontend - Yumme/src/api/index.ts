import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * In this file, we will define all the API calls that we will be making in our application.
 * We're using the react-query library + axios  to make the API calls.
 * 
 * @see https://tanstack.com/query/v5/
 * @see https://axios-http.com/docs/intro
 * 
 */

export const getRecipes = async () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });
};
