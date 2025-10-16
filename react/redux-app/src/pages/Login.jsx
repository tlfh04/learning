import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// signup 액션 : 회원가입 비동기 네트워크 처리 액션
// resetIsSignup 액션 : isSignup 상태 초기화 액션
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => {
    return state.auth.token;
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  }
  // 회원가입 성공 했을 때 알람창 띄우고 홈페이지로 이동
  useEffect(() => {
    if (token) {
      alert("로그인 상태입니다.");
      console.log(token);
    }
  }, [token]);

  // 회운가입 폼 구조
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}
