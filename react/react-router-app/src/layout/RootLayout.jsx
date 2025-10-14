import React from "react";
import { Link, Outlet } from "react-router-dom";
import PATHS from "../constants/paths";

export default function RootLayout() {
  return (
    <div>
      <div className="flex gap-4 p-2 border-2 border-gray-300">
        <Link to={PATHS.ROOT.INDEX}>홈페이지</Link>
        <Link to={PATHS.ROOT.ABOUT}>소개페이지</Link>
        <Link to={PATHS.ROOT.PROFILE}>사용자 정보 페이지</Link>
        <Link to={PATHS.AUTH.INDEX}>인증 페이지</Link>
        <Link to={PATHS.ROOT.POSTS}>포스트 페이지</Link>
      </div>
      <Outlet />
    </div>
  );
}
