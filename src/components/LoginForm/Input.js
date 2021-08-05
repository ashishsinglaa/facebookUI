import React from "react";
import { changeHandler } from "./LoginFormStatic";

const Input = ({ credState, label, inputType, name }) => {
  const cred = credState[0]; //[cred, setCred] = credState

  return (
    <div>
      <span>{label}</span>
      <input
        onChange={(event) => changeHandler(credState, event)}
        type={inputType}
        name={name}
        value={cred[name]}
      />
    </div>
  );
};

export default Input;
