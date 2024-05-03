/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { fetchData } from ".";

/**
 * Custom hook for fetching categories from the server.
 * Used to know the categories available in the store.
 * @returns An object containing the `getCategories` function.
 */
export const useCategories = () => {


  /**
   * Fetches the categories from the server.
   * @returns A promise that resolves to the fetched categories.
   */
  const getCategories = () => {
    return useQuery({
      queryKey: ["categories"],
      queryFn: async () => fetchData("/public/category"),
    });
  };


  return {
    getCategories,
  };
};
