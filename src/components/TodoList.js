import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { initUserData } from "./TodoListStatic";

const TodoList = () => {
  const [userData, setUserData] = useState(initUserData);

  const clearList = () => {
    setUserData([]);
  };

  return (
    <div>
      {userData.length ? (
        userData.map((user) => {
          return (
            <TodoItem
              key={user.id}
              user={user}
              hook={[userData, setUserData]}
            />
          );
        })
      ) : (
        <h2>List is Empty</h2>
      )}
      <button onClick={clearList}>Clear</button>
    </div>
  );
};

export default TodoList;
