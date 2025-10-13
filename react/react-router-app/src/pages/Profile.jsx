import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const isLogin = true;
  const navigate = useNavigate();

  if (!isLogin) {
    return (
      <nav>
        <Navigate to="/"></Navigate>;
      </nav>
    );
  }

  return (
    <div>
      사용자 정보
      <button
        className="border p-2 cursor-pointer"
        onClick={() => {
          alert("홈페이지로 이동합니다.");
          navigate("/");
        }}
      >
        홈페이지로 이동
      </button>
    </div>
  );
}
