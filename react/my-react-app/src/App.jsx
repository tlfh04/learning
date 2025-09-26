import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";

function App() {
  return (
    <div>
      <MyList />
      <MyButton />
    </div>
  );
}
export default App;
