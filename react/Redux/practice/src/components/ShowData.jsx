import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData, updateData, toggleData } from "../features/TodoSlice";

function ShowData() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // Keep track of which todo is being edited and its new text
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function del(id) {
    dispatch(removeData(id));
  }

  function toggleCompleted(todo) {
    dispatch(
      toggleData({
        id: todo.id,
        completed: !todo.completed,
      })
    );
  }

  function startEditing(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function saveEdit(todo) {
    dispatch(
      updateData({
        id: todo.id,
        text: editText,
      })
    );
    setEditingId(null);
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo)}
          />

          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(todo)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span
                style={{
                  backgroundColor: todo.completed ? "red" : "green",
                
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => del(todo.id)}>Del</button>
              <button onClick={() => startEditing(todo)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </>
  );
}

export default ShowData;
