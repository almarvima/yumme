import React from "react";
import { useRecipes } from "../../api/recipes";
// import { Routes } from '../../constants' // Import the categories from the constants file
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "@/components/ui/use-toast";
import { SERVER_MESSAGES } from "../../config/index";
import { useCategories } from "../../api/categories";
import { Skeleton } from "../../components/ui/skeleton";

/**
 * CreateRecipe component - A component that displays the form to create a new recipe
 * @returns {JSX.Element} CreateRecipe component
 */
const CreateRecipe = () => {
  const { createRecipe } = useRecipes();
  const navigate = useNavigate();
  const { mutate } = createRecipe();

  const { toast } = useToast();

  /**
   * @see https://react-hook-form.com/get-started
   * */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { getCategories } = useCategories();

  const { data: categories, isLoading } = getCategories();

  const onSubmit = (data) => {
    const { recipeCategory } = data;
    const recipeData = {
      ...data,
      recipeCategory:
        recipeCategory.charAt(0).toUpperCase() + recipeCategory.slice(1),
    };

    mutate(recipeData, {
      onSuccess: (res) => {
        if (res.code === "RECIPE_CREATED") {
          navigate(`/profile`);

          toast({
            title: "Yay! 🎉",
            description:
              SERVER_MESSAGES[res.code] || "Recipe created successfully",
            variant: "success",
          });
        }
      },
    }),
      reset();
  };

  return (
    <section className=" ">
      <div className="bg-background  rounded py-8 flex flex-col gap-4 border-b-none  mb-4">
        <h2 className=" font-bold text-left no-underline ">New Recipe</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:flex md:justify-between"
        >
          <div className="md:w-1/2 md:pr-4">
            <div className="mb-4">
              <Label
                className="block text-gray-700 text-lg font-bold mb-2 dark:text-teal-50"
                htmlFor="title"
              >
                Recipe Title
              </Label>
              <Input
                {...register("title", { required: true })}
                id="title"
                name="title"
                type="text"
                className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-teal-50"
                placeholder="Title"
              />
              {errors.title && (
                <p role="alert" className="text-destructive">
                  Your recipe needs a title
                </p>
              )}
            </div>
            <div className="mb-4 mt-8">
              <Label
                className="block text-gray-700 text-lg font-bold mb-2 dark:text-teal-50"
                htmlFor="description"
              >
                Recipe Description
              </Label>
              <Textarea
                {...register("description", { required: true })}
                id="description"
                name="description"
                className="shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-teal-50"
                placeholder="Description"
              />
              {errors.description && (
                <p role="alert" className="text-destructive">
                  This field is required
                </p>
              )}
            </div>
            <div className="mb-8 mt-8">
              <Label
                className="block text-gray-700 text-lg font-bold mb-2 dark:text-teal-50"
                htmlFor="imgUrl"
              >
                Recipe Image
              </Label>
              {/* <Input
                id='imageUpload'
                name='imageUpload'
                type='file'
                // onChange={handleImageChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              /> */}
              <Input
                type="text"
                id="imgUrl"
                name="imgUrl"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("imgUrl", {
                  required: "Image URL is required",
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i,
                    message: "Please enter a valid image URL",
                  },
                })}
                placeholder="https://example.com/image.jpg"
              />
              {errors.imgUrl && (
                <p role="alert" className="text-destructive">
                  {errors.imgUrl.message}
                </p>
              )}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <div className="mt-8 md:mt-0 ">
              <Label
                className="block text-gray-700 text-lg font-bold mb-2 dark:text-teal-50"
                htmlFor="cookingTime"
              >
                Cooking Time
              </Label>
              <Input
                {...register("cookingTime", {
                  required: "Cooking time is required",
                  pattern: {
                    value: /^[1-9][0-9]*$/,
                    message: "Please enter a valid time in minutes",
                  },
                })}
                id="cookingTime"
                name="cookingTime"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-teal-50"
                placeholder="Cooking Time"
              />
              {errors.cookingTime && (
                <p role="alert" className="text-destructive">
                  {errors.cookingTime.message}
                </p>
              )}
            </div>
            <div className="grid auto-rows-max items-start mb-10 mt-8 gap-4 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Servings per person</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="perPerson"></Label>
                      <select
                        {...register("perPerson", { required: true })}
                        id="perPerson"
                        title="perPerson"
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">Select servings per person</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                      {errors.perPerson && (
                        <p className="text-destructive">
                          {" "}
                          Please select a serving...
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mb-10">
              <Label
                className="block text-gray-700 text-lg font-bold mb-2 dark:text-teal-50"
                htmlFor="ingredients"
              >
                Ingredients Needed
              </Label>
              <Textarea
                {...register("ingredients", { required: true })}
                id="ingredients"
                name="ingredients"
                className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-teal-50"
                placeholder="Ingredients"
              />
              {errors.ingredients && (
                <p role="alert" className="text-destructive">
                  This field is required
                </p>
              )}
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              {isLoading ? (
                <Skeleton className="w-full h-40" />
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Recipe category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="recipeCategory">Type</Label>
                        <select
                          {...register("recipeCategory", {
                            required: "You must select a recipe type.",
                          })}
                          id="recipeCategory"
                          title="recipeCategory"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select recipe category</option>

                          {categories &&
                            categories.map((category) => (
                              <option
                                key={category.id}
                                value={category.category}
                              >
                                {category.category}
                              </option>
                            ))}
                        </select>
                        {errors.recipeCategory && (
                          <p className="text-destructive">
                            {errors.recipeCategory.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center mt-20 justify-between  gap-4 md:gap-4">
              <Button
                type="submit"
                className="w-full py-2 text-base dark:text-teal-900 dark:hover:text-teal-50 dark:hover:bg-teal-800"
              >
                Create Recipe
              </Button>
              <Button
                variant="outline"
                className="w-full py-2  text-base dark:text-teal-900 dark:hover:text-teal-50 border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateRecipe;
