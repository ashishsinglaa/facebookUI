// initial value of cred which is a state variable
export const initCred = {
  username: "",
  password: "",
};

// this function runs on change of input field and insert the updated value to state variable
export const changeHandler = (credState, event) => {
  const [cred, setCred] = credState;
  setCred({ ...cred, [event.target.name]: event.target.value });
};
