// 레이아웃 컴포넌트 불러오기
import AuthLayout from "../../layout/AuthLayout";

// 회원 컴포넌트
import Login from "../../pages/AuthPages/Login";
import Signup from "../../pages/AuthPages/Signup";
import AuthHome from "../../pages/AuthPages/AuthHome";
import PATHS from "../../constants/paths";

const authRoute = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      { index: true, Component: AuthHome },
      { path: PATHS.AUTH.LOGIN, Component: Login },
      { path: PATHS.AUTH.SIGNUP, Component: Signup },
    ],
  },
];

export default authRoute;
