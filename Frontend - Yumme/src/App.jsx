import './App.css'
import { Outlet } from 'react-router-dom'
import Layout from './components/Layout.jsx'
// import { useEffect } from 'react'

import { ThemeProvider } from './contexts/ThemeContext'

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <ThemeProvider>
      <div className='w-full lg:h-screen flex flex-col gap-8 bg-white dark:bg-custom-green dark:text-white'>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </ThemeProvider> 
  )
}

export default App
