import React from "react";
import Child from "./Child";
export default function Parent() {
  return (
    <div>
      <Child>
        <div>
          <p>나는 길동</p>
          <p>20살 이에요</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 철수</p>
          <p>22살 이에요</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는 짱구</p>
          <p>21살 이에요</p>
        </div>
      </Child>
    </div>
  );
}
