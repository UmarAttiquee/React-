import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItems({ todo }) {
  // Access context methods
  const { updtodo, deltodo, toggletodo } = useTodo(); // ✅ Added ()

  // Local state to manage editing and updated message
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [isTodoMsg, setIsTodoMsg] = useState(todo.todo);
  

  // Toggle completion status
  const toggleCompleted = () => {
    toggletodo(todo.id);
  };

  // Save updated todo
  const handleEditSave = () => {
    if (isTodoMsg.trim() === '') return;
    updtodo(todo.id, { ...todo, todo: isTodoMsg });
    setIsTodoEditable(false); // Exit edit mode
  };

  // Delete todo
  const handleDelete = () => {
    deltodo(todo.id);
  };

  return (
    <div
      className={`flex items-center justify-between p-2 rounded mb-2 ${
        todo.completed ? 'bg-green-200' : 'bg-yellow-200'
      }`}
    >
      {/* Checkbox to toggle completion */}
      <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />

      {/* Input field for the todo text */}
      <input
        type="text"
        value={isTodoMsg}
        onChange={(e) => setIsTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`border p-1 mx-2 w-full rounded ${
          isTodoEditable ? 'bg-white' : 'bg-transparent'
        }`}
      />

      {/* Toggle Edit/Save Button */}
      {isTodoEditable ? (
        <button
          onClick={handleEditSave}
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsTodoEditable(true)}
          className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
        >
          Edit
        </button>
      )}

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItems;
