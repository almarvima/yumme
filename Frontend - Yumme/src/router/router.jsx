import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import { Home } from '../components/Home'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import About from '../components/About'
import Contact from '../components/Contact'
import { Routes } from '../constants'
import Recipe from '../components/Recipes/Recipe'


/**
 * The router configuration for the application.
 * @type {BrowserRouter}
 
  * @see https://reactrouter.com/en/6.22.3/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    
    errorElement: <div>Not found</div>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: Routes.SIGN_IN,
        element: <SignIn />
      },
      {
        path: Routes.SIGN_UP,
        element: <SignUp />
      },
      {
        path: `${Routes.RECIPE}/:id`,
        element: <Recipe />
      },
      {
        path: Routes.ABOUT,
        element: <About />
      },
      {
        path: Routes.CONTACT,
        element: <Contact />
      }
    ]
  }
])
