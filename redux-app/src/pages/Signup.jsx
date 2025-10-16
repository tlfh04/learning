import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// signup 액션 : 회원가입 비동기 네트워크 처리 액션
// resetIsSignup 액션 : isSignup 상태 초기화 액션
import { signup, resetIsSignup } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSignup = useSelector((state) => state.auth.isSignup);
  const error = useSelector((state) => state.auth.error);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signup({ email: email, password: password }));
  }
  // 회원가입 성공 했을 때 알람창 띄우고 홈페이지로 이동
  useEffect(() => {
    if (isSignup) {
      console.log(isSignup);
      alert("회원가입을 성공했습니다.");
      dispatch(resetIsSignup);
      navigate("/");
    }
  }, [isSignup, dispatch]);

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
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}
