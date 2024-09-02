import { ForgotPassword } from "@/Auth/ForgotPassword";
import { Login } from "@/Auth/Login";
import SignUp from "@/Auth/SignUp";
import { AuthLayout } from "@/components/layouts";
import Dashboard from "@/Dashboard/Dashboard";
import Inventory from "@/Dashboard/Inventory";
import { DashboardLayout } from "@/Dashboard/Layout/Layout";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

const login = true;
const loginLoader = async () => {
   // Get the current location
  if (!login) { // Check if not logged in and not on the login page
    return redirect("/login"); // Redirect to login if not logged in
  }  

  return null;
}

const dashboardLoader = async () => {
  // Get the current location
 if (login) { // Check if not logged in and not on the login page
    return redirect("/dashboard"); // Redirect to login if not logged in
 }  

 return null;
}

const routes = createBrowserRouter([
  {
    path: "/", // Catch-all route
    loader: () => redirect("/login"), // Redirect to login for any undefined routes
  },
  {
    id: "root",
    path: "/",
    element: <AuthLayout />,
    loader: dashboardLoader,
    children: [
        {
          id: "index",
          path:"login",
          index: true,
          element: <Login />,
        },
        {
          path:"signup",
          element: <SignUp />,
        },
        {
          path:"forgot-password",
          element: <ForgotPassword />,
        }
      ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    loader: loginLoader, // Use the loader to check login status
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
    },
    ],
    },
    {
      path: "*", // Catch-all route
      loader: () => redirect("/login"), // Redirect to login for any undefined routes
    },
  ]);

const Routers = () => {
  return (
    <RouterProvider router={routes}  fallbackElement={<p>Loading...</p>}  />
  )

}

export default Routers;
