import { createBrowserRouter } from "react-router";
import App from "../App";
import MianLayout from "../Layouts/MianLayout";
import Home from "../Pages/Home";
import AllBoooks from "../Pages/AllBoooks";
import AddBooks from "../Pages/AddBooks";
import MyBooks from "../Pages/MyBooks";
import Login from "../Authentication/AuthPages/Login";
import Register from "../Authentication/AuthPages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import ViewDetails from "../Pages/ViewDetails";
import EditBook from "../Pages/EditBook";

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
        loader: () => fetch("http://localhost:3000/all-books"),
      },
      {
        path: "/addbooks",
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/mybooks",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book-details/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/book-details/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book-details/${params.id}`),
      },
      {
        path: "/update-book/:id",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book-details/${params.id}`),
      },
    ],
  },
]);
