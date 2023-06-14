import "./index.css";

import Element from "../element/Element";

const Todo = ({ todos }) => {
  return (
    <>
      <ul className="todo__ul">
        {todos.map((element) => (
          <Element data={element} key={element.id} />
        ))}
      </ul>
    </>
  );
};

export default Todo;
