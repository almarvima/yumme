import React from 'react'
import { useForm } from 'react-hook-form'

import { Instagram, Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/**
 * Renders the Contact component with an image and contact information
 * @return {JSX.Element}
 */
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    // Lógica para enviar los datos del formulario a un servidor o API.
    console.log(data)
    reset() // resetear el formulario después del envío
  }

  return (
    <div className='container mx-auto p-4 md:p-8'>
      <div className='flex flex-wrap lg:flex-nowrap items-center gap-8 justify-center'>
        {/* Contact Image */}
        <div className=''>
          <img src='./contact_img.webp' alt='Contact' className='rounded-full object-cover shadow-md sm:size-96' />
        </div>

        {/* Contact Information */}
        <div className='flex flex-col'>
          <h2 className='text-5xl font-bold mb-4'>Get in Touch</h2>
          <p className='mb-4 text-pretty'>Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
          <div className='space-y-3'>
            <div className='flex items-center'>
              <Phone height={'40'} width={'40'} />
              <span className='ml-2'>+123 456 7890</span>
            </div>
            <div className='flex items-center'>
              <Mail height={'40'} width={'40'} />
              <span className='ml-3'>contact@yumme.com</span>
            </div>
            <div className='flex items-center'>
              <MapPin height={'40'} width={'40'} />
              <span className='ml-2'>123 Business Avenue, Barcelona, Spain</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Form */}
      <div className='max-w-xxl mx-auto p-6 border-2 mt-24 mb-28'>
        <h2 className='text-5xl font-bold mb-4'>Feedback Form</h2>
        <h3 className='text-xl font-semibold mb-8'>We'd love to hear from you!</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <Label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
              Full Name
            </Label>
            <Input id='fullName' type='text' {...register('fullName', { required: true })} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' placeholder='Your full name' />
            {errors.fullName && <span className='text-red-500'>This field is required</span>}
          </div>

          <div>
            <Label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email Address
            </Label>
            <Input
              id='email'
              type='email'
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Please enter a valid email address'
                }
              })}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              placeholder='you@email.com'
            />
            {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>

          <div>
            <Label htmlFor='feedback' className='block text-sm font-medium text-gray-700'>
              Your Feedback
            </Label>
            <Textarea
              id='feedback'
              {...register('feedback', { required: true })}
              className='mt-1 block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              rows='5'
              placeholder='Please enter your suggestions or complaints here...'
            />
            {errors.feedback && <span className='text-red-500'>This field is required</span>}
          </div>

          <div className='flex justify-end'>
            <Button type='submit' className='w-full py-2 text-base dark:text-teal-900 dark:hover:bg-teal-800 dark:hover:text-teal-50'>
              Send Feedback
            </Button>
          </div>
        </form>
      </div>
      {/* Social Media Links */}
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold mb-4'>Follow us on Social Media</h3>
        <div className='flex justify-center space-x-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800'>
            <Facebook size={40} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-600'>
            <Twitter size={40} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-pink-600 hover:text-pink-800'>
            <Instagram size={40} />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:text-blue-900'>
            <Linkedin size={40} />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='text-red-600 hover:text-red-800'>
            <Youtube size={40} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
