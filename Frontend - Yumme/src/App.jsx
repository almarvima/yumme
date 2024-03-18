import './App.css'
import { Outlet } from 'react-router-dom'
import Layout from './components/Layout'

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className='w-full h-screen flex flex-col gap-8 bg-white'>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
