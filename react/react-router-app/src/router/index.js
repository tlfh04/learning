import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Signup";
import AuthHome from "../pages/AuthPages/AuthHome";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: AuthHome },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
    ],
  },
]);

export default router;
