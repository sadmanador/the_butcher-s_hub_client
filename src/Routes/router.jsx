import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home.jsx";
import ChefDetail from "../pages/ChefDetail/ChefDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NoDataFound from "../pages/NoDataFound/NoDataFound";
import Favorite from "../pages/Favorite/Favorite";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          fetch(
            "https://b7a10-chef-recipe-hunter-server-side-sadmanador-sadmanador.vercel.app/chefs"
          ),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetail></ChefDetail>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-sadmanador-sadmanador.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/favorite",
        element: <PrivateRoute><Favorite></Favorite></PrivateRoute>,
        loader: async () =>  fetch('https://b7a10-chef-recipe-hunter-server-side-sadmanador-sadmanador.vercel.app/recipes')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: async () => fetch('https://b7a10-chef-recipe-hunter-server-side-sadmanador-sadmanador.vercel.app/answers')
        
      },
      {
        path: '*',
        element: <NoDataFound></NoDataFound>
      }
    ],
  }
]);
