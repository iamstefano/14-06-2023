import "./index.css";

const Todo = ({ todo, emoji }) => {
  const onHandleClick = () => alert(todo.completed);
  return (
    <div className="todo" onClick={onHandleClick}>
      <i
        className={
          todo.completed ? "fa-solid fa-check-double" : "fa-solid fa-clipboard"
        }
      ></i>
      <p className="todo__p">
        {todo.todo}
        <span>{emoji}</span>
      </p>
    </div>
  );
};

export default Todo;
