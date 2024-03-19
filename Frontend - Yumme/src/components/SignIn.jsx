import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routes } from '../constants'

import { Input } from './ui/input'
import { Button } from './ui/button'

/**
 * Renders the SignIn component
 * @return {JSX.Element}
 */
const SignIn = () => {
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
            <h1 className='text-center md:text-6xl font-bold mb-8'>Sign In</h1>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='email'>
              Email Address
            </label>
            <Input id='email' type='email' placeholder='Email' className='w-full' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-lg font-bold mb-2 font-sans' htmlFor='password'>
              Password
            </label>
            <Input id='password' type='password' placeholder='*************' className='w-full' />
          </div>
          <div className='flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0'>
            <Button variant='outline' type='submit' className='w-full py-2 text-base'>
              Sign In
            </Button>
            <Button
              variant='secondary'
              className='w-full py-2 md:ml-4 text-base border border-gray-500 hover:border-teal-50 hover:bg-teal-900 hover:text-teal-50 bg-teal-100'
              onClick={() => {
                /* navigates to home */
                navigate('/')
              }}>
              Cancel
            </Button>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs md:text-lg'>
          Don't have a user account?{' '}
          <Link to={Routes.SIGN_UP} className='text-purple-500 hover:text-teal-900'>
            Click here to sign up!
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
