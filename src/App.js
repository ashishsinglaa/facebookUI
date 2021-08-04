import React, { useState } from "react";
import { data } from "./AppConst";

const App = () => {
  //state hook for status
  const [dataIndex, setDataIndex] = useState(0);

  // function runs on button call
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
