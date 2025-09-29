import React from "react";

export default function OnClick() {
  function handleClick() {
    alert("클릭!");
  }
  return (
    <div>
      <button
        className="border-1 m-2"
        onClick={() => {
          handleClick();
        }}
      >
        클릭
      </button>
    </div>
  );
}
