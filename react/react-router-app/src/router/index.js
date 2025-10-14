import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import ProtectedLayout from "../layout/ProtectedLayout";
// 페이지 컴포넌트
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";
// 회원 컴포넌트
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Signup";
import AuthHome from "../pages/AuthPages/AuthHome";
// 포스트 컴포넌트
import PostList from "../pages/RootPages/PostList";
import PostDetail from "../components/PostDetail";
import PATHS from "../constants/paths";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: PATHS.ROOT.ABOUT, Component: About },
      {
        Component: ProtectedLayout,
        children: [{ path: PATHS.ROOT.PROFILE, Component: Profile }],
      },
      {
        path: PATHS.ROOT.POSTS,
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POST_DETAIL,
        Component: PostDetail,
      },
    ],
  },
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      { index: true, Component: AuthHome },
      { path: PATHS.AUTH.LOGIN, Component: Login },
      { path: PATHS.AUTH.SIGNUP, Component: Signup },
    ],
  },
]);

export default router;
