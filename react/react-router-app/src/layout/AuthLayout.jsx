import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import PATHS from "../constants/paths";

export default function AuthLayout() {
  // 기본 스타일
  const baseClass = "text-blue-900 font-bold p-2";
  // 활성화 스타일
  const activeClass = "border-2 border-red-900";
  return (
    <div>
      <div className="flex gap-2">
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to={PATHS.AUTH.INDEX}
          end
        >
          인증 홈페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to={PATHS.AUTH.LOGIN}
        >
          로그인 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to={PATHS.AUTH.SIGNUP}
        >
          회원가입 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to={PATHS.ROOT.INDEX}
        >
          홈페이지
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
