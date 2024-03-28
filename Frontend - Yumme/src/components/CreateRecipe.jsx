import React, { useState } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    estimatedTime: '',
    ingredientsNeeded: '',
    image: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipe({ ...recipe, [name]: value })
  }

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // lógica para enviar la información al servidor
    console.log('Creating recipe:', recipe)
  }

  return (
    <div className='container mx-auto p-8'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='md:text-6xl font-bold text-center mb-20'>Create Recipe</h1>
        <form onSubmit={handleSubmit} className='md:flex md:justify-between'>
          <div className='md:w-1/2 md:pr-4'>
            <div className='mb-4'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='title'>
                Recipe Title
              </Label>
              <Input
                id='title'
                name='title'
                type='text'
                onChange={handleChange}
                value={recipe.title}
                className='shadow appearance-none border rounded w-full mb-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Title'
              />
            </div>
            <div className='mb-4'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='description'>
                Recipe Description
              </Label>
              <Textarea
                id='description'
                name='description'
                onChange={handleChange}
                value={recipe.description}
                className='shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Description'
              />
            </div>
            <div className='mb-8 mt-8'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='imageUpload'>
                Recipe Image
              </Label>
              <Input id='imageUpload' name='imageUpload' type='file' onChange={handleImageChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div className='flex flex-col md:flex-row-reverse items-center justify-between  gap-4 md:gap-4'>
              <Button type='submit' className='w-full py-2 text-base'>
                Create Recipe
              </Button>
              <Button variant='outline' className='w-full py-2  text-base border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100'>
                Cancel
              </Button>
            </div>
          </div>
          <div className='md:w-1/2 md:pl-4'>
            <div className='mt-8 md:mt-0 '>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='estimatedTime'>
                Estimated Time
              </Label>
              <Input
                id='estimatedTime'
                name='estimatedTime'
                type='text'
                onChange={handleChange}
                value={recipe.estimatedTime}
                className='shadow appearance-none border rounded w-full mb-8  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Estimated Time'
              />
            </div>
            <div className='mb-4'>
              <Label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='ingredientsNeeded'>
                Ingredients Needed
              </Label>
              <Textarea
                id='ingredientsNeeded'
                name='ingredientsNeeded'
                onChange={handleChange}
                value={recipe.ingredientsNeeded}
                className='shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Ingredients'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRecipe
