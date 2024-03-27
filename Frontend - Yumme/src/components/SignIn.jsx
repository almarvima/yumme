import { useToast } from "@/components/ui/use-toast";
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
 * Renders the SignIn component
 * @return {JSX.Element}
 */
const SignIn = () => {
  const { userIsAuthenticated, useFormAuth } = useAuth();

  const navigate = useNavigate();

  const [isVisble, setIsVisible] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    userIsAuthenticated() && navigate("/");
  }, [navigate, userIsAuthenticated]);

  const { mutate: onSubmit } = useFormAuth(Routes.LOGIN, {
    successTitle: (
      <div className="flex  items-center  gap-2">
        <BadgeCheck color="#000000" />
        <span className="">Welcome back!</span>
      </div>
    ),
    successDescription: "You logged in successfully!",
    errorDescription:
      "The user name or password is incorrect. Please try again.",
  });

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 sm:pt-16">
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-md rounded px-10 pt-6 pb-10 mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <h1 className="text-center md:text-6xl font-bold mb-8">Sign In</h1>
            <Label
              className="block text-gray-700 text-lg font-bold mb-2 font-sans"
              htmlFor="userName"
            >
              User Name
            </Label>
            <Input
              {...register("userName", { required: true })}
              type="text"
              defaultValue={"test"}
              placeholder="User Name"
              className="w-full"
            />
            {errors.userName?.type === "required" && (
              <p role="alert" className="text-destructive">
                This field is required
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
              {...register("password", { required: true })}
              id="password"
              type="password"
              placeholder="*************"
              className="w-full"
            />
            {errors.password?.type === "required" && (
              <p role="alert" className="text-destructive">
                Fill the password
              </p>
            )}
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between space-y-2 md:space-y-0">
            <Button
              variant="secondary"
              className="w-full py-2  text-base border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full py-2 text-base">
              Sign In
            </Button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs md:text-lg">
          Don't have a user account?{" "}
          <Link
            to={Routes.SIGN_UP}
            className="text-purple-500 hover:text-teal-900"
          >
            Click here to sign up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
