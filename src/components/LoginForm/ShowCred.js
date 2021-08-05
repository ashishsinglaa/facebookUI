import React from "react";

const ShowCred = ({ credValue }) => {
  return (
    <div>
      <h3>Username : {credValue.username}</h3>
      <h3>Password : {credValue.password}</h3>
    </div>
  );
};

export default ShowCred;
