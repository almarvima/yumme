import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../components/Home";
import { menuItems } from "../constants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipe/:id",
        element: <div>Recipe id</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);
