/**
 * In this file, we will define all the API calls that we will be making in our application.
 * We're using the react-query library + axios  to make the API calls.
 *
 * @see https://tanstack.com/query/v5/
 * @see https://axios-http.com/docs/intro
 *
 */

import axios from "axios";

/**
 * Fetches data from the specified URL.
 * @param url - The URL to fetch data from.
 * @param isPrivate - Optional parameter indicating whether the request requires authentication.
 * @returns A Promise that resolves to the fetched data.
 */
export const fetchData = async (url: string, isPrivate?: boolean) => {
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

/**
 * Sends a POST request to the specified URL.
 * @param url - The URL to send the POST request to.
 * @param data - The data to send in the POST request.
 * @returns A Promise that resolves to the response data.
 */
export const postData = async (url: string, data: unknown) => {
  console.log("data", data);
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user-token")}`,
    },
  });
  return response.data;
};

/**
 * Sends a DELETE request to the specified URL.
 * @param url - The URL to send the DELETE request to.
 * @param data - The data to send in the DELETE request.
 * @returns A Promise that resolves to the response data.
 */
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
