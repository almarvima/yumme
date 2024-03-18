import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routes } from '../constants'

import { Input } from './ui/input'
import { Button } from './ui/button'

/**
 * Renders the SignUp component
 * @return {JSX.Element}
 */
const SignUp = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle the submit logic here
  }

  return (
    <div className='min-h-screen flex flex-col items-center pt-8 sm:pt-16'>
      <div className='w-full max-w-xl'>
        <form className='bg-white shadow-md rounded px-10 pt-6 pb-10 mb-8' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <h1 className='text-center md:text-6xl font-bold mb-8'>Sign Up</h1>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='firstName'>
              First Name
            </label>
            <Input id='firstName' type='text' placeholder='First Name' className='w-full' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='lastName'>
              Last Name
            </label>
            <Input id='lastName' type='text' placeholder='Last Name' className='w-full' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='email'>
              Email Address
            </label>
            <Input id='email' type='email' placeholder='Email' className='w-full' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='password'>
              Password
            </label>
            <Input id='password' type='password' placeholder='Password' className='w-full' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <Input id='confirmPassword' type='password' placeholder='Confirm Password' className='w-full' />
          </div>
          <div className='flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0'>
            <Button variant='outline' type='submit' className='w-full py-2 text-base'>
              Sign Up
            </Button>
            <Button
              variant='secondary'
              className='w-full py-2 md:ml-4 text-base border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100'
              onClick={() => {
                navigate(Routes.HOME)
              }}>
              Cancel
            </Button>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs md:text-lg'>
          Already have a user account?{' '}
          <Link to={Routes.SIGN_IN} className='text-purple-500 hover:text-purple-600'>
            Click here to sign in!
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
