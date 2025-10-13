import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">홈페이지</h1>
      <Link to="/" className="m-2">
        홈
      </Link>
      <Link to="/about" className="m-2">
        소개
      </Link>
      <Link to="/profile" className="m-2">
        프로필
      </Link>
    </div>
  );
}
