import { increment } from "../store/counterSlice";
import { useDispatch } from "react-redux";

export default function CounterIncrement() {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  return (
    <div>
      <button onClick={() => handleIncrement()}>증가</button>
    </div>
  );
}
