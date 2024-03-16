import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { Home } from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export const Routes = {
  HOME: "/",
  RECIPE: "/recipe/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  SIGN_IN: "/sign-in",
  SIGN_OUT: "/sign-up",
};

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Routes.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: Routes.SIGN_OUT,
        element: <SignUp />,
      },
      {
        path: Routes.RECIPE,
        element: <div>Recipe id</div>,
      },
      {
        path: Routes.ABOUT,
        element: <div>About</div>,
      },
      {
        path: Routes.CONTACT,
        element: <div>Contact</div>,
      },
    ],
  },
]);
