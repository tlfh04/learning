// 레이아웃 컴포넌트 불러오기
import RootLayout from "../../layout/RootLayout";
import ProtectedLayout from "../../layout/ProtectedLayout";
// 페이지 컴포넌트
import Home from "../../pages/RootPages/Home";
import About from "../../pages/RootPages/About";
import Profile from "../../pages/RootPages/Profile";
// 포스트 컴포넌트
import PostList from "../../pages/RootPages/PostList";
import PostDetail from "../../components/PostDetail";
import PATHS from "../../constants/paths";

const rootRoutes = [
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
];

export default rootRoutes;
