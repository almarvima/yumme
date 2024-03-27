import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { Routes } from "../constants";
import { SERVER_MESSAGES } from "@/config";

/**
 * Custom hook to handle authentication
 * @returns object
 * @property userIsAuthenticated - Checks if the user is authenticated
 * @property logOut - Logs out the user
 * @property useFormAuth - Custom hook to handle form authentication
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  /**
   * Checks if the user is authenticated
   * @returns boolean
   */
  const userIsAuthenticated = () => {
    return localStorage.getItem("user-token") ? true : false;
  };

  /**
   * Logs out the user and removes the token from the local storage
   * @return void
   */
  const logOut = () => {
    localStorage.removeItem("user-token");
    navigate("/");
    toast({
      description: "You have been logged out.",
      variant: "success",
    });
  };

  /**
   * Custom hook to handle form authentication
   * @param endpoint - The endpoint to send the form data
   * @param options - The options to display the toast, it's not defined in TS,  the keys are `successTitle`, `successDescription`, `errorDescription`
   */
  const useFormAuth = (endpoint: string, options: Record<string, string>) => {
    const { successTitle, successDescription, errorDescription } = options;

    return useMutation({
      mutationFn: async (values) => {
        // Temporary fix, the form shuld not send confirmPassword to the server
        endpoint === Routes.REGISTER && delete values?.confirmPassword;
        console.log(values);
        return await axios.post(endpoint, values);
      },
      onSuccess: ({ data }) => {
        localStorage.setItem("user-token", data.token);

        toast({
          title: successTitle,
          description: successDescription,
          variant: "success",
        });
      },
      onError: (err: AxiosError) => {
        const { code } = err.response?.data as {
          code: keyof typeof SERVER_MESSAGES;
        };

        toast({
          title: "Oh no!",
          description: SERVER_MESSAGES[code],
          variant: "destructive",
        });
      },
    });
  };

  return { userIsAuthenticated, logOut, useFormAuth };
};
