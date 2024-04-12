/**
 * In this file, we will define all the API calls that we will be making in our application.
 * We're using the react-query library + axios  to make the API calls.
 *
 * @see https://tanstack.com/query/v5/
 * @see https://axios-http.com/docs/intro
 *
 */

import axios from "axios";

export const fetchData = async (url: string, isPrivate?: boolean) => {
  console.log("🚀 ~ fetchData ~ isPrivate:", isPrivate);
  const { data } = await axios.get(
    url,
    isPrivate
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      : {}
  );
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

export const deleteData = async (url: string, isPrivate?: boolean) => {
  const response = await axios.delete(
    url,
    isPrivate
      ? {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      : {}
  );
  return response.data;
};
