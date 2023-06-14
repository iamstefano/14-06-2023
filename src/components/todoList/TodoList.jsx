import Todo from "../todo/Todo";
import "./index.css";
/* import { useState } from "react"; */

const TodoList = ({ todos, emoji }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} emoji={emoji} />
      ))}
    </div>
  );
};

export default TodoList;
