import React from "react";
import { initCred } from "./LoginFormStatic";

const LoginBtn = ({ setVisible, credState }) => {
  const [cred, setCred] = credState;
  // runs after click on "login" and visible the crediantial on screen
  const clickHandler = () => {
    // checking if all field having values
    for (let i in cred) {
      if (!cred[i]) {
        alert("Enter field");
        return;
      }
    }
    setVisible(true);
    setCred(initCred);
  };

  return (
    <div>
      <button onClick={clickHandler}>Login</button>
    </div>
  );
};

export default LoginBtn;
