import React from 'react'
import myImage from '../../images/pageNotFound_404_error.png'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center my-4 p-4 md:pt-10'>
      <h2 className='text-6xl font-bold mb-6'>Not Found</h2>
      <p className='mb-6 text-lg'>Sorry! We couldn't find the page you're looking for.</p>
      <img className='w-3/4 max-w-4xl mx-auto shadow-2xl' src={myImage} alt='404 Not Found' />
    </div>
  )
}

export default NotFound
