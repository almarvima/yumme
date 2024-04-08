import React from 'react'
import { useRecipes } from '../../api/recipes'
import { categories } from '../../constants' // Import the categories from the constants file
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useToast } from '../ui/use-toast'


const CreateRecipe = () => {
  const { createRecipe } = useRecipes()
  const navigate = useNavigate()
  const { mutate } = createRecipe()

  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: 'Success',
          description: 'Your recipe has been created!',
          status: 'success',
          duration: 5000,
          isClosable: true
        })
        reset()
      },
      onError: () => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      }
    })
  }

  return (
    <section className=' '>
      <div className='bg-white  rounded py-8 flex flex-col gap-4 border-b-none  mb-4'>
        <h2 className=' font-bold text-left no-underline '>New Recipe</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='md:flex md:justify-between'>
          <div className='md:w-1/2 md:pr-4'>
            <div className='mb-4'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='title'>
                Recipe Title
              </Label>
              <Input
                {...register('title', { required: true })}
                id='title'
                name='title'
                type='text'
                className='shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Title'
              />
              {errors.title && (
                <p role='alert' className='text-destructive'>
                  Your recipe needs a title
                </p>
              )}
            </div>
            <div className='mb-4 mt-8'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='description'>
                Recipe Description
              </Label>
              <Textarea
                {...register('description', { required: true })}
                id='description'
                name='description'
                className='shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Description'
              />
              {errors.description && (
                <p role='alert' className='text-destructive'>
                  This field is required
                </p>
              )}
            </div>
            <div className='mb-8 mt-8'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='imageUpload'>
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
                type='text'
                {...register('imageUrl', {
                  required: 'Image URL is required',
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i,
                    message: 'Please enter a valid image URL'
                  }
                })}
                placeholder='https://example.com/image.jpg'
              />
              {errors.imageUrl && (
                <p role='alert' className='text-destructive'>
                  {errors.imageUrl.message}
                </p>
              )}
            </div>
          </div>
          <div className='md:w-1/2 md:pl-4'>
            <div className='mt-8 md:mt-0 '>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='cookingTime'>
                Cooking Time
              </Label>
              <Input
                {...register('cookingTime', { pattern: /^[0-9]*$/ })}
                id='cookingTime'
                name='cookingTime'
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Cooking Time'
              />
              {errors.cookingTime && <p className='text-red-600'>Please enter a valid time in minutes</p>}
              {errors.description && (
                <p role='alert' className='text-destructive'>
                  Please enter a valid time in minutes
                </p>
              )}
            </div>
            <div className='grid auto-rows-max items-start mb-10 mt-8 gap-4 lg:gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle>Servings per person</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-6'>
                    <div className='grid gap-3'>
                      <Label htmlFor='perPerson'></Label>
                      <select {...register('perPerson', { required: true })} id='perPerson' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                        <option value=''>Select servings per person</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                      </select>
                      {errors.perPerson && <p className='text-destructive'> Please select a serving...</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className='mb-10'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='ingredients'>
                Ingredients Needed
              </Label>
              <Textarea
                {...register('ingredients', { required: true })}
                id='ingredients'
                name='ingredients'
                className='shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Ingredients'
              />
              {errors.ingredients && (
                <p role='alert' className='text-destructive'>
                  This field is required
                </p>
              )}
            </div>
            <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle>Recipe Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-6'>
                    <div className='grid gap-3'>
                      <Label htmlFor='recipeCategory'>Type</Label>
                      <select
                        {...register('recipeCategory', { required: 'You must select a recipe type.' })}
                        id='recipeCategory'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                        <option value=''>Select recipe type</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category.to}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                      {errors.recipeCategory && <p className='text-destructive'>{errors.recipeCategory.message}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className='flex flex-col md:flex-row-reverse items-center mt-20 justify-between  gap-4 md:gap-4'>
              <Button type='submit' className='w-full py-2 text-base'>
                Create Recipe
              </Button>
              <Button
                variant='outline'
                className='w-full py-2  text-base border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100'
                onClick={() => {
                  navigate('/profile')
                }}>
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateRecipe
