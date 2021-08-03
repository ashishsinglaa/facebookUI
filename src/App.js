import React, { useState } from "react";
import { BeforeClicking, AfterClicking } from "./AppConst";

const App = () => {
  //state hook for status
  const [statusText, setStatusText] = useState(BeforeClicking);

  // function runs on button call
  const clickHandler = () => {
    if (statusText === BeforeClicking) setStatusText(AfterClicking);
    if (statusText === AfterClicking) setStatusText(BeforeClicking);
  };

  return (
    <div>
      <h1>{statusText}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default App;
