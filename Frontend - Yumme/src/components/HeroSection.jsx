import React from 'react'
import { Button } from './ui/button'

/**
 * HeroSection component
 * @status : todo
 */
const HeroSection = () => {
  return (
    <section className='w-full py-12 '>
      <div className='container px-4 grid  grid-cols-1 md:grid-cols-2 gap-8 '>
        <div className=''>
          <img alt='Delicious Recipe' className='w-full rounded-lg aspect-video transition-transform duration-300 ease-in-out hover:scale-105' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg' />
        </div>
        <div className='space-y-3'>
          <h1 className='text-left'>Delicious Homemade Recipes</h1>
          <p className='text-left'>Explore a world of flavors and create culinary delights with our collection of homemade recipes.</p>
          <Button className='rounded-full dark:text-teal-900 dark:hover:text-teal-50 dark:hover:bg-teal-800' size={'lg'}>
            Explore recipes
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
