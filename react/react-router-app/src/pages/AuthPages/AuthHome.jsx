import React from "react";
import { Link } from "react-router-dom";
export default function AuthHome() {
  return (
    <div>
      인증 페이지
      <div>
        <Link to="/auth/Login">로그인 페이지</Link>
        <Link to="/auth/Signup">회원가입</Link>
      </div>
    </div>
  );
}
