import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  console.log("component renders");
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("use effects runs >=");
    if (num) {
      document.title = num;
    } else {
      document.title = "nothing";
    }
  }, [num]);

  const clickHandler = () => {
    setNum(num + 1);
    document.title = num + 1;
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default ChangeTitle;
