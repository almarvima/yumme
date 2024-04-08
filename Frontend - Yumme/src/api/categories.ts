/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { fetchData } from ".";

export const useCategories = () => {
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
