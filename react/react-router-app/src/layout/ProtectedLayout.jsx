import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function ProtectedLayout() {
  const isLogin = false;

  if (!isLogin) {
    return <Navigate to="/auth/login"></Navigate>;
  }
  return <Outlet></Outlet>;
}
