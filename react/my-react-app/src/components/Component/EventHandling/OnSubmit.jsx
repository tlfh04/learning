import React from "react";

export default function OnSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event["target"]["email"]["value"]);
    console.log(event["target"]["password"]["value"]);
  }
  return (
    <div>
      {/* form 태그의 onSubmit 속성에서 handlesubmit 함수를 호출하는 코드 작성 */}
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" name="email" className="border-1 m-2" />
        <input type="password" name="password" className="border-1 m-2" />
        <input type="submit" value="제출" className="border-1 m-2" />
      </form>
    </div>
  );
}
