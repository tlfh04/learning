import React from "react";
import Child from "./Child";

export default function Parent() {
  const user = {
    name: "영희",
    age: 20,
    isAdmin: true,
  };
  return (
    <div>
      <Child user={user} />
    </div>
  );
}
