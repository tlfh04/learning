import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    alert("로그인 상태가 아닙니다. 로그인 페이지로 이동합니다.");
    // React Router를 사용한다면 다른 페이지로 이동시킬 수 있다
    // navigate("/login");
  };

  return (
    <div>
      {token ? (
        <div>
          로그인 상태
          <button
            onClick={() => {
              handleLogout();
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div>비로그인 상태</div>
      )}
    </div>
  );
}
