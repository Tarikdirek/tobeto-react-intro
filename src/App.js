import "./App.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodos = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTodos = (index) => {
    const updatedTodos = todos.filter((_,i)=> i !== index)
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className="center">
        <p>To Do List</p>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="button" onClick={addTodos} className="addButton">
          Add
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <span className="delete"><button onClick={() => {return removeTodos(index)}}>Delete</button></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
