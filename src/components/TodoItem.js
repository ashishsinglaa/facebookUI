import React from "react";

const TodoItem = ({ user, hook }) => {
  const [userData, setUserData] = hook;
  // removing element from this list after clicking "remove" button
  const removeUser = (id) => {
    setUserData(
      userData.filter((data) => {
        return data.id !== id;
      })
    );
  };

  return (
    <div>
      <span>
        Name : {user.name} and Age : {user.age}
      </span>
      <button
        onClick={() => {
          removeUser(user.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
