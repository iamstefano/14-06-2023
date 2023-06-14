import "./index.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <i
        className={
          todo.completed ? "fa-solid fa-check-double" : "fa-solid fa-clipboard"
        }
      ></i>
      <p className="todo__p">{todo.todo}</p>
    </div>
  );
};

export default Todo;
