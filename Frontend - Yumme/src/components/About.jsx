import React from 'react'

/**
 * Renders the Contact component with an image and contact information
 * @return {JSX.Element}
 */
const About = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='md:w-1/2'>
          <img src='/yumMe_logo.webp' alt='About Us' className='rounded-full shadow-lg size-96' />
        </div>
        <div className='md:w-1/2 md:pl-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>About Us</h1>
          <p className='text-gray-600 mb-4'>
            Welcome to YumMe, your ultimate source for delicious and reliable recipe ideas! Whether you're a beginner or a seasoned chef, our site is designed to inspire your culinary journey and enhance your cooking skills.
          </p>
          <p className='text-gray-600 mb-4'>
            Our journey began a few years ago, with a passion for cooking and a desire to share our favorite recipes with food lovers worldwide. We believe that cooking should be accessible to everyone, and through our website, we aim to provide
            easy-to-follow recipes that yield consistent results.
          </p>
          <p className='text-gray-600'>
            From hearty meals to quick snacks, our carefully curated recipes are tested in our kitchen to ensure they're perfect before reaching your table. Join us as we explore the world of flavors, celebrate the joy of cooking, and bring
            deliciousness right into your kitchen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
