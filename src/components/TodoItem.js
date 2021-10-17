export default function TodoItem ({
  todo,
  onHandleDeleteClick,
  onHandleEditClick
}){

  return(
    <li>
      {todo.text}
      <button onClick={() => onHandleEditClick(todo)}>Edit</button>
      <button onClick={() => onHandleDeleteClick(todo.id)}>Delete</button>
    </li>
  )
}