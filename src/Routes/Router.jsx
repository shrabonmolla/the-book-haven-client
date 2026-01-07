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
import Error from "../Pages/Error";
import Loading from "../Components/Loading";
import EnglishBook from "../Pages/EnglishBook";
import FilteredBooks from "../Pages/FilteredBooks";
import Contact from "../Pages/Contact";
import OfferPage from "../Pages/OfferPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MianLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBoooks />,
        // loader: () =>
        //   // fetch("https://book-haven-server-nine.vercel.app/all-books"),
        //   fetch("http://localhost:3000/all-books"),
      },
      {
        path: "/english-book",
        element: <EnglishBook />,
      },
      {
        path: "/books/:type/:value",
        element: <FilteredBooks />,
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
          fetch(
            `https://book-haven-server-nine.vercel.app/book-details/${params.id}`
          ),
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offer",
        element: <OfferPage />,
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
          fetch(
            `https://book-haven-server-nine.vercel.app/book-details/${params.id}`
          ),
      },
    ],
  },
]);
