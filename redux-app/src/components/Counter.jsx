import React from "react";
import { useSelector } from "react-redux";

// 자식 컴포넌트
import CounterIncrement from "./CounterIncrement";
import CounterIncrementByAmount from "./CounterIncrementByAmount";
import CounterReset from "./CounterReset";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      전역 상태 Count : {count}
      <CounterIncrement />
      <CounterIncrementByAmount />
      <CounterReset />
    </div>
  );
}
