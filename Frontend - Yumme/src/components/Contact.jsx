import React from 'react'

import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPin } from 'lucide-react'

import { Linkedin } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Twitch } from 'lucide-react'

/**
 * Renders the Contact component with an image and contact information
 * @return {JSX.Element}
 */
const Contact = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-wrap items-center justify-center'>
        {/* Contact Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src='./contact_img.webp' alt='Contact' className='rounded-full shadow-md' />
        </div>

        {/* Contact Information */}
        <div className='w-full sm:w-1/2 p-4'>
          <h2 className='text-5xl font-bold mb-4'>Get in Touch</h2>
          <p className='mb-4'>Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
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
