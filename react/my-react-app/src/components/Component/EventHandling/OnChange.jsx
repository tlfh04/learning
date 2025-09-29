import React from "react";

export default function OnChange() {
  // 이벤트 핸들러의 event 객체 : 이벤트 정보 저장한 객체
  function handleChange(event) {
    console.log(event);
    console.log(event["target"]);
    console.log(event["target"]["value"]);
  }
  function handleNumberChange(event) {
    if (event["target"]["value"] < 10) {
      console.log("10보다 작은 수");
    } else {
      console.log("10보다 큰 수");
    }
  }
  return (
    <div>
      <input
        className="border-1 rounded-sm m-4"
        type="text"
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <input
        className="border-1 rounded-sm m-4"
        type="number"
        onChange={(event) => {
          handleNumberChange(event);
        }}
      />
    </div>
  );
}
