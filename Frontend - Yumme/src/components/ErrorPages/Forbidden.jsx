import React from 'react'
import myImage from '../../images/403.png'


/**
 * Forbidden component - A component that displays the forbidden page of the website
 * @returns {JSX.Element} Forbidden component
 */
const Forbidden = () => {
  return (
    <div className='flex flex-col items-center justify-center my-4 p-4 md:pt-10'>
      <h2 className='text-6xl font-bold mb-6'>Forbidden</h2>
      <p className='mb-6 text-lg'>Oh oh! You can't access this page.</p>
      <img className='w-3/4 max-w-2xl mx-auto shadow-2xl' src={myImage} alt='Forbidden access' />
    </div>
  )
}

export default Forbidden
