// import { useToast } from "@/components/ui/use-toast";
import { BadgeCheck } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../auth";
import { Routes } from "../constants";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

/**
 * Renders the SignUp component
 * @return {JSX.Element}
 */
const SignUp = () => {
  const navigate = useNavigate();

  const { userIsAuthenticated, useFormAuth } = useAuth();

  useEffect(() => {
    userIsAuthenticated() && navigate("/");
  }, [navigate, userIsAuthenticated]);

  /**
   * The `useForm` hook from the `react-hook-form` library is being used to create a form with the
  following properties:
    @see https://react-hook-form.com/docs
   */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /* The `watch` function is used to watch the input fields and return their values. The `watch` function
  is used to get the values of the `password` and `confirmPassword` input fields. */

  const password = watch("password");

  /**
   * Handles form submission for user registration.
   * @see useFormAuth
   * @param {function} onSubmit - The submit function provided by the useFormAuth hook.
   * @returns {void}
   */
  const { mutate: onSubmit } = useFormAuth(Routes.REGISTER, {
    successTitle: (
      <div className="flex  items-center  gap-2">
        <BadgeCheck color="#000000" />
        <span className="">Welcome!</span>
      </div>
    ),
    successDescription: "You signed in successfully!",
    errorDescription:
      "It seems there is already an account with this Username.",
  });

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 sm:pt-16">
      <div className="w-full max-w-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-background shadow-md rounded px-10 pt-6 pb-10 mb-8"
        >
          <div className="mb-4">
            <h1 className="text-center md:text-6xl font-bold mb-8">Sign Up</h1>
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="userName"
            >
              User Name
            </Label>
            <Input
              {...register("userName", { required: true })}
              aria-invalid={errors.userName ? "true" : "false"}
              id="userName"
              type="text"
              placeholder="joe_doe"
              className="w-full"
              defaultValue={"test"}
            />
            {errors.userName?.type === "required" && (
              <p role="alert" className="text-destructive">
                The username is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="name"
            >
              First Name
            </Label>
            <Input
              defaultValue={"test"}
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Joe"
              className="w-full"
            />
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-destructive">
                The first name is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="lastName"
            >
              Last Name
            </Label>
            <Input
              defaultValue={"test"}
              aria-invalid={errors.lastName ? "true" : "false"}
              {...register("lastName", { required: true })}
              id="lastName"
              type="text"
              placeholder="Doe"
              className="w-full"
            />
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-destructive">
                The last name is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="email"
            >
              Email Address
            </Label>
            <Input
              defaultValue={"test@test.com"}
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              id="email"
              type="email"
              placeholder="example@example.com"
              className="w-full"
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-destructive">
                The email is required
              </p>
            )}
          </div>
          <div className="mb-6">
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              defaultValue={"test"}
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", { required: true })}
              id="password"
              type="password"
              placeholder="*************"
              className="w-full"
            />
            {errors.password?.type === "required" && (
              <p role="alert" className="text-destructive">
                Please enter a password
              </p>
            )}
          </div>
          <div className="mb-6">
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </Label>
            <Input
              aria-invalid={errors.confirmPassword ? "true" : "false"}
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              id="confirmPassword"
              type="password"
              placeholder="*************"
              className="w-full"
            />
            {errors.confirmPassword && (
              <p role="alert" className="text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between  gap-4 md:gap-4">
            <Button type="submit" className="w-full py-2 text-base">
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="w-full py-2  text-base border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100"
              onClick={() => {
                navigate(Routes.HOME);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs md:text-lg">
          Already have a user account?{" "}
          <Link
            to={Routes.SIGN_IN}
            className="text-purple-500 hover:text-purple-600"
          >
            Click here to sign in!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
