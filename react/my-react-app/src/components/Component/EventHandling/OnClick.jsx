import React from "react";

export default function OnClick() {
  // 클릭 이벤트 핸들링 함수
  // 관례적으로 핸드링 함수명은 handle이벤트명
  function handleClick() {
    alert("클릭!");
  }

  function handleParamClick(param) {
    alert(param);
  }
  return (
    <div>
      <button
        className="cursor-pointer border-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-400 m-4 rounded-sm"
        onClick={() => {
          handleClick();
        }}
      >
        클릭
      </button>
      <button
        className="cursor-pointer border-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-400 rounded-sm"
        onClick={() => {
          handleParamClick("hello world!");
        }}
      >
        매개변수가 있는 함수 클릭
      </button>
    </div>
  );
}
