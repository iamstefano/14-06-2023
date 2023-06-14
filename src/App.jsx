import Navbar from "./components/navbar";
import Title from "./components/title";
import Todo from "./components/todo";
/* import Element from "./components/element"; */
import { todos } from "./mocks/todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Todo />
    </div>
  );
}

export default App;
