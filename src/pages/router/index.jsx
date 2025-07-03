import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../AdminPortal/components/Dashboard/Dashboard";
import AdminPortal from "../AdminPortal/AdminPortal";
import SignIn from "../SignIn/SignIn";
import Challenge from "../AdminPortal/components/Challenge/Challenge";
import PublicRoute from "../../components/PublicRoute";
import PrivateRoute from "../../components/PrivateRoute";

const hasToken = () => !!localStorage.getItem("access_token");

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <Navigate to={hasToken() ? "/dashboard" : "/login"} replace />,
  },
  {
    path: "/",
    element:
      <PrivateRoute>
        <AdminPortal />
      </PrivateRoute>

    ,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "challenges",
        element: <Challenge />,
      },
    ],
  },
]);

export default router;
