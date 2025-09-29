import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnClick from "./components/Component/EventHandling/OnClick";
import OnChange from "./components/Component/EventHandling/OnChange";
import OnSubmit from "./components/Component/EventHandling/OnSubmit";

function App() {
  return (
    <div>
      <OnSubmit />
      <OnClick />
    </div>
  );
}
export default App;
