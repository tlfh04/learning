import React from "react";

export default function Interpolation() {
  const number = 10;
  function greet(name) {
    return <p>저는 {name} 입니다</p>;
  }

  return (
    <>
      <p>{1 + 1}</p>
      <p>{2 * 2}</p>
      <p>{1 === 1}</p>
      <p>{1 > 2}</p>
      <p>{greet("홍길동")}</p>
    </>
  );
}
