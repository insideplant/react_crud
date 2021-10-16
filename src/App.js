import { useEffect, useState } from 'react';
// import './styles.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if(savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    } 
  });
  const [todo,setTodo] = useState("");
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

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

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
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
          <li key={todo.id}>
            {todo.text}<button onClick={() => handleDeleteClick(todo.id)}>X</button></li>
        ))}
      </ul>
      <h1>Todo App</h1>
    </div>
  );
}