import React, { useState } from "react";
import { userInfo } from "./UseStateStat";

const UseState = () => {
  const [data, setData] = useState(userInfo);

  const clickHandler = () => {
    setData([]);
  };

  return (
    <div>
      {data.length ? (
        data.map((user) => {
          return (
            <h3>
              Name : {user.name} and Age : {user.age}
            </h3>
          );
        })
      ) : (
        <div>List is empty</div>
      )}
      <button onClick={clickHandler}>Clear</button>
    </div>
  );
};

export default UseState;
