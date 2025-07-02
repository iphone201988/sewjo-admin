import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../AdminPortal/components/Dashboard/Dashboard";
import AdminPortal from "../AdminPortal/AdminPortal";
import SignIn from "../SignIn/SignIn";
import Challenge from "../AdminPortal/components/Challenge/Challenge";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <AdminPortal />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path:"challenges",
        element:<Challenge/>
      }
    ],
  },
]);

export default router;
