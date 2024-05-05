import React from 'react'
import { useForm } from 'react-hook-form'
import { usePasswordReset } from '../../api/usePasswordReset'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth'

import { Card } from '../ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

/**
 * ResetPassword component renders the form to reset the password
 * @returns {JSX.Element} ResetPassword
 */
const ResetPassword = () => {
  const { resetPassword } = usePasswordReset()
  const { mutate } = resetPassword()
  const { toast } = useToast()
  const { navigate } = useNavigate()
  const { logOut } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    // Sends data to backend for password reset
    console.log(data.password)

    mutate(
      {password: data.password},
      {
        onSuccess: (res) => {
          if (res.status === 200) {
            toast({
              title: 'Password reset!',
              description: 'Your password has been reset successfully! You can now log in.'
            })
            setTimeout(() => {
              logOut()
            }, 3500) // Log out after 3 seconds
          }
        },
        onError: (error) => {
          console.error('Error reseting your password:', error)
          navigate('/error')
        }
      }
    )
  }

  // Watch the password input field to compare with the password_repeat field
  const password = watch('password')

  return (
    <>
      <Card className='flex flex-col'>
        <div className='container mx-auto p-4 my-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-sm mx-auto'>
            <h2 className='text-center text-2xl font-bold mb-6'>Reset Password</h2>

            <div className='mb-4'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 dark:text-teal-50 '>
                New Password
              </label>
              <input
                type='password'
                id='password'
                {...register('password', {
                  required: 'You must specify a password',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters'
                  }
                })}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:text-teal-900'
              />
              {errors.password && <p className='text-red-500 text-xs mt-2'>{errors.password.message}</p>}
            </div>

            <div className='mb-6'>
              <label htmlFor='password_repeat' className='block text-sm font-medium text-gray-700 dark:text-teal-50'>
                Confirm Password
              </label>
              <input
                type='password'
                id='password_repeat'
                {...register('password_repeat', {
                  validate: (value) => value === password || 'The passwords do not match'
                })}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:text-teal-900'
              />
              {errors.password_repeat && <p className='text-red-500 text-xs mt-2'>{errors.password_repeat.message}</p>}
            </div>

            <Button type='submit' className='w-full py-2 text-base dark:text-teal-900 dark:hover:bg-teal-800 dark:hover:text-teal-50'>
              Reset Password
            </Button>
          </form>
        </div>
      </Card>
    </>
  )
}

export default ResetPassword
