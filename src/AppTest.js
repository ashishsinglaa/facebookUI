import React, { useState } from "react";
import { BeforeClicking, AfterClicking } from "./AppConst";

const App = () => {
  let Status = BeforeClicking;

  console.log("this is useState", useState());

  // function runs on button call
  const clickHandler = () => {
    if (Status === BeforeClicking) Status = AfterClicking;
  };

  return (
    <div>
      <h1>{Status}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default App;
