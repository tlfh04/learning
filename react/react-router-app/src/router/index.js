import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);

export default router;
