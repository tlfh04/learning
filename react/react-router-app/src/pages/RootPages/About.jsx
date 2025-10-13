import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-4xl">소개 페이지</h1>
      <NavLink to="/" className="m-2">
        홈
      </NavLink>
      <NavLink to="/about" className="m-2">
        소개
      </NavLink>
      <NavLink to="/profile" className="m-2">
        프로필
      </NavLink>
    </div>
  );
}
