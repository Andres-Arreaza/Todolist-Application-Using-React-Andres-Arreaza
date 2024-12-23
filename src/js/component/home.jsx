import React, { useState } from "react";
import { Footer } from '../component/footer.jsx';
import '../../styles/index.css';

// Crear tu primer componente
const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");  // Resetea el campo donde se ingresan los valores en el input
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="card">
      <h1 className="title">Todos</h1>
      <div className="container">
        <div className="container-input">
          <input 
            type="text" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && addTodo()} 
            className="input"
            placeholder="What needs to be done?"
          />
        </div>
        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index} className="todo-item">
              {item}
              <span className="delete-icon" onClick={() => removeTodo(index)}>
                <i className="bi bi-x-lg"></i>
              </span>
            </li>
          ))}
        </ul>
        <p className="todo-count">{todos.length} Item left</p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
