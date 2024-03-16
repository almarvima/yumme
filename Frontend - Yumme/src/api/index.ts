import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getRecipes = async () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const  data  = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });
};

