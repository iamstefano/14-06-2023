import "./index.css";
import { useState } from "react";

const Element = ({ dataElement }) => {
  const [isCompleted, setCompleted] = useState(dataElement.completed);

  const handleToggle = () => {
    setCompleted(!isCompleted);
  };

  return (
    <>
      <li
        key={dataElement.id}
        className={` todo__li ${isCompleted ? "completed" : ""}`}
        id={dataElement.id}
        onClick={handleToggle}
      >
        {dataElement.todo}
      </li>
    </>
  );
};

export default Element;
