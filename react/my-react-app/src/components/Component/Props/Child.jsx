import React from "react";

export default function Child({ user }) {
  return (
    <div>
      <h4>
        {user.name}
        {user.age}
        {user.isAdmin}
      </h4>
    </div>
  );
}
