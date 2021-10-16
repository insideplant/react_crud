import { useState } from 'react';
// import './styles.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState("");

  const handleInputChange = e => {
    setTodo(e.target.value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();

    if(todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("");
  }

  return (
    <div className="App">

      <form onSubmit={handleFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      <ul className="todo-list">
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <h1>Todo App</h1>
    </div>
  );
}