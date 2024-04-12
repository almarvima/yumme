import React from 'react'
import { useTheme } from '../../contexts/ThemeContext.tsx'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button className='border-2 max-w-max border-black' variant={theme === 'dark' ? 'secondary' : 'primary'} onClick={toggleTheme}>
      {theme === 'dark' ? <Sun className='mr-1' /> : <Moon className='mr-1' />} Switch to {theme === 'dark' ? 'light' : 'dark'} mode
    </Button>
  )
}

export default ThemeToggleButton
