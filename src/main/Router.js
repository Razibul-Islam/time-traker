import { Link, createBrowserRouter } from "react-router-dom";
import Main from "./main";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import { Button } from "@material-tailwind/react";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: (
      <>
        <div className="text-4xl font-bold h-screen flex justify-center items-center flex-col">
          <p>This is error Page</p>
          <Link to="/">
            <Button variant="outlined" className="mt-5">
              Back Home Page
            </Button>
          </Link>
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
