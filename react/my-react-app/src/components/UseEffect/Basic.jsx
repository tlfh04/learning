import React, { useState } from "react";
import { useEffect } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  useEffect(() => {
    console.log("의존성 배열이 없는 useEffect");
  });
  useEffect(() => {
    console.log("의존성 배열이 number 상태가 저장");
  }, [number]);
  useEffect(() => {
    console.log("의존성 배열이 number2 상태가 저장");
  }, [number2]);
  return (
    <>
      <div
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </div>
      <div
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </div>
    </>
  );
}
