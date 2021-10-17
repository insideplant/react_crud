export default function EditForm ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>Edit Todo</h2>
      <label htmlFor="UpdateTodo">Update todo: </label>
      <input
        name="UpdateTodo"
        type="text"
        placeholder="Update todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <button type="submit" onClick={onEditFormSubmit}>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  )
}