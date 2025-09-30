import React from "react";
import LoginStatus from "./LoginStatus";
import AdminLink from "./AdminLink";
export default function Container() {
  return (
    <div>
      <AdminLink isAdmin={true} />
      <AdminLink isAdmin={false} />
    </div>
  );
}
