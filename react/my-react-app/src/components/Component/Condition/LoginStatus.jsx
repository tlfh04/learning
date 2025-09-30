import React from "react";

export default function LoginStatus({ isLogin, userName }) {
  return (
    <div>
      <p>로그인 상태 : {isLogin ? "로그인" : "비로그인"}</p>
      <p>{isLogin ? `${userName}님 환영합니다` : "로그인 해주세요"}</p>
      <button className="border-1 bg-gray-300">
        {isLogin ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}
