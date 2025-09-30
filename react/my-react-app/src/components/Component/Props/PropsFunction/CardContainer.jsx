import React from "react";
import Card from "./Card";

export default function CardContainer() {
  function handleClick() {
    alert(user["name"]);
    console.log(user);
  }
  const user = {
    name: "홍길동",
    age: 20,
  };
  return (
    <div>
      <Card user={user} onClickProps={handleClick} />
    </div>
  );
}
