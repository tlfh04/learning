import React from "react";
import User from "./User";
export default function Container() {
  const arr = [1, 2, 3, 4, 5];
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];
  return (
    <div>
      {arr.map((ele) => {
        return <li>{ele}</li>;
      })}
      {userArray.map((user) => {
        {
          return <User user={user}></User>;
        }
      })}
    </div>
  );
}
