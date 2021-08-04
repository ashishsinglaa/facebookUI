import React, { useState } from "react";
import { data } from "./AppConst";

const App = () => {
  //Defining state for setting index numbers according to msg
  const [dataIndex, setDataIndex] = useState(0);

  // calling when button "click me" press and increasing the index number into the "dataIndex" state
  const clickHandler = () => {
    dataIndex === data.length - 1
      ? setDataIndex(0)
      : setDataIndex(dataIndex + 1);
  };

  return (
    <div>
      <h1>{data[dataIndex]}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default App;
