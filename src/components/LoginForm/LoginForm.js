import React, { useState } from "react";
import Input from "./Input";
import LoginBtn from "./LoginBtn";
import ShowCred from "./ShowCred";
import { initCred } from "./LoginFormStatic";

const LoginForm = () => {
  const [cred, setCred] = useState(initCred);
  const [visible, setVisible] = useState(false);

  // after login "cred" value has been vanished out that's why storing value in a const because no updation have been done on this variable
  const credValue = cred;

  return (
    <div>
      <Input
        credState={[cred, setCred]}
        label="Username"
        inputType="text"
        name="username"
      />
      <Input
        credState={[cred, setCred]}
        label="Password"
        inputType="password"
        name="password"
      />
      <LoginBtn setVisible={setVisible} credState={[cred, setCred]} />
      {visible && <ShowCred credValue={credValue} />}
    </div>
  );
};

export default LoginForm;
