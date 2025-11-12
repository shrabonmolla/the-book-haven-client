import { createBrowserRouter } from "react-router";
import App from "../App";
import MianLayout from "../Layouts/MianLayout";
import Home from "../Pages/Home";
import AllBoooks from "../Pages/AllBoooks";
import AddBooks from "../Pages/AddBooks";
import MyBooks from "../Pages/MyBooks";
import Login from "../Authentication/AuthPages/Login";
import Register from "../Authentication/AuthPages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MianLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBoooks />,
      },
      {
        path: "/addbooks",
        element: <AddBooks />,
      },
      {
        path: "/mybooks",
        element: <MyBooks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
