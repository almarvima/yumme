import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../constants";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";

/**
 * Renders the SignUp component
 * @return {JSX.Element}
 */
const SignUp = () => {
  const navigate = useNavigate();

  /* The `useForm` hook from the `react-hook-form` library is being used to create a form with the
  following properties:
  - `register` is a function that registers input fields to the form. It is used to collect the
  values of the input fields when the form is submitted.
  - `handleSubmit` is a function that is used to handle the form submission.
  - `watch` is a function that watches the input fields and returns their values.
  - `formState` is an object that contains the state of the form, including any errors. */

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
   * Handles the form submission.
   *
   * @param {Object} data - The form data.
   */
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 sm:pt-16">
      <div className="w-full max-w-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-10 pt-6 pb-10 mb-8"
        >
          <div className="mb-4">
            <h1 className="text-center md:text-6xl font-bold mb-8">Sign In</h1>
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="username"
            >
              User Name
            </Label>
            <Input
              {...register("username", { required: true })}
              aria-invalid={errors.username ? "true" : "false"}
              id="username"
              type="text"
              placeholder="joe_doe"
              className="w-full"
            />
            {errors.username?.type === "required" && (
              <p role="alert" className="text-destructive">
                The username is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="firstName"
            >
              First Name
            </Label>
            <Input
              aria-invalid={errors.firstName ? "true" : "false"}
              {...register("firstName", { required: true })}
              id="firstName"
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
