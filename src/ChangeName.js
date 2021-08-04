import React, { useState } from "react";
import { initData } from "./ChangeNameConst";

const ChangeName = () => {
  const [data, setData] = useState(initData);

  const updateName = () => {
    setData((preValue) => ({
      ...preValue,
      name: "Manu",
    }));
  };

  return (
    <div>
      <h2>
        Name : {data.name} , Age : {data.age} and profession : {data.profession}
      </h2>
      <button onClick={updateName}>Update</button>
    </div>
  );
};

export default ChangeName;
