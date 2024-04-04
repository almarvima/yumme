import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import { Home } from '../components/Home'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import About from '../components/About'
import Contact from '../components/Contact'
import { Routes } from '../constants'
import PrivateRoutes from '../components/PrivateRoutes'
import CreateRecipe from '../components/Recipes/CreateRecipe'
import UserProfile from '../components/User/UserProfile'
import UserSettings from '../components/User/UserSettings'
import UserRecipes from '../components/User/UserRecipes'
import NotFound from '../components/ErrorPages/NotFound'
import Forbidden from '../components/ErrorPages/Forbidden'
import UnexpectedError from '../components/ErrorPages/UnexpectedError'
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

    // errorElement: <div>Not found </div>,
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
      },
      {
        path: Routes.FORBIDDEN,
        element: <Forbidden />
      },
      {
        path: Routes.ERROR,
        element: <UnexpectedError />
      },
      {
        path: '*',
        element: <NotFound />
      },
      // Private routes
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: Routes.CREATE_RECIPE,
            element: <CreateRecipe />
          },
          {
            path: Routes.USER_PROFILE,
            element: <UserProfile />,
            children: [
              {
                index: true,
                element: <UserRecipes />
              },

              {
                path: Routes.CREATE_RECIPE,
                element: <CreateRecipe />
              },

              {
                path: Routes.USER_SETTINGS,
                element: <UserSettings />
              }
            ]
          }
          // More private routes can be added here
        ]
      }
    ]
  }
])
