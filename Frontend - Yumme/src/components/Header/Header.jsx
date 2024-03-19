import React from 'react'
import { NavLink } from 'react-router-dom'

import { menuItems } from '../../constants/index.jsx'
import BurgerMenu from './BurgerMenu.jsx'
import HeadersButtons from './HeaderButtons.jsx'

const Header = () => {
  return (
    <header className='w-full  flex flex-col shadow-sm bg-teal-100 '>
      <div className=' flex justify-between gap-4  items-center p-8 container '>
        <div className=''>
          <img src='/logo.png' className='w-32 rounded-xl' alt='app logo' />
        </div>

        <div className='gap-4 hidden w-full justify-between items-center md:flex'>
          <div className='flex flex-col w-full  md:flex-row gap-8 md:justify-center md:text-lg'>
            {menuItems.map((item, index) => (
              <NavLink key={index} to={item.to} className={({ isActive }) => (isActive ? 'text-black border-b-2 border-teal-500' : 'text-black hover:text-teal-500')}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* The buttons in the header */}
          <HeadersButtons />
        </div>

        <div className='flex md:hidden'>
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
