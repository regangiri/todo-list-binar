import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todo = ({ todos }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id}>{todo.text}</div>
    </div>
  ));
};

export default Todo;
