import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodoForm from './components/AddTodoForm';
import EditForm from './components/EditForm';
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
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleAddInputChange = e => {
    setTodo(e.target.value);
  }
  const handleEditInputChange = e => {
    setCurrentTodo({...currentTodo, text: e.target.value});
    console.log(currentTodo);
  }
  
  const handleAddFormSubmit = e => {
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

  const handleEditFormSubmit = e => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  const handleDeleteClick = id => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  const handleUpdateTodo = (id, updatedTodo) =>{
    const updateItem = todos.map((todo) => {
      return todo.id ===id? updatedTodo : todo;
    });
    setIsEditing(false);
    console.log(updateItem)
    setTodos(updateItem);
    
  }

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({...todo});
  }

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo = {currentTodo}
          setIsEditing = {setIsEditing}
          onEditFormSubimit= {handleEditFormSubmit}
          onEditInputChange= {handleEditInputChange}
        />
      ) : (
        <AddTodoForm 
          todo = {todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo)=>(
          <TodoItem 
            key = {todo.id}
            todo={todo} 
            onHandleEditClick={handleEditClick}
            onHandleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
      <h1>Todo App</h1>
    </div>
  );
}