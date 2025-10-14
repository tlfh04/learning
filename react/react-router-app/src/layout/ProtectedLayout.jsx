import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import PATHS from "../constants/paths";

export default function ProtectedLayout() {
  const isLogin = false;

  if (!isLogin) {
    return <Navigate to={PATHS.AUTH.LOGIN}></Navigate>;
  }
  return <Outlet></Outlet>;
}
