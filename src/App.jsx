import Navbar from "./components/navbar";
import Todo from "./components/todo";
import { todos } from "./mocks/todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My first react app is a to-do list</h1>
      <div className="App">
        <div className="App__todosList ">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
