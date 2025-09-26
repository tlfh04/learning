import React from "react";

// export default : 모듈 기본 내보내기
// function : 함수
// return : 요스를 반환

// 파일 당 하나 존재하는 함수는 컴포넌트를 뜻하는데
// 컴포넌트 함수는 HTML 요소를 반환

export default function Rule() {
  return (
    <>
      <div>App</div>
      <div>App</div>
      <div>App</div>

      <p className="font-bold text-5xl text-red-700">p 태그{1 + 0}</p>

      <p style={{ fontSize: "3rem", color: "blue" }}>p 태그 2 + 0</p>
    </>
  );
}
