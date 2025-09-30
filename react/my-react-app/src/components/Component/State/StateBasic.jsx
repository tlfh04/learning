import React from "react";
import { useState } from "react";
import Container from "./Container";
export default function StateBasic() {
  const [array, setArray] = useState([1, 2, 3]);
  function handleClick() {
    const newArray = [...array, 4];
    setArray(newArray);
  }
  return (
    <div>
      <p>{array}</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        4
      </button>
    </div>
  );
}
