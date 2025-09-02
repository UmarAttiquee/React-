import React, { useState } from 'react';
import { useTodo } from './../context/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("");

  // ✅ Correct use of useTodo()
  const { addtodo } = useTodo(); 

  const handle = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addtodo(todo); // ✅ Just pass the todo string
    setTodo(""); // ✅ Clear the input
  };

  return (
    <form onSubmit={handle}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
