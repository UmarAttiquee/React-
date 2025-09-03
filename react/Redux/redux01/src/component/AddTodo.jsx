// ✅ Import necessary dependencies from React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// ✅ Import the addData action creator from the todo slice
import { addData } from '../features/todo/todoslice';

function AddTodo() {
  // ✅ Local state to store the input value from the user
  const [data, setData] = useState('');

  // ✅ useDispatch hook gives access to the Redux dispatch function
  const dispatch = useDispatch();

  // ✅ Handle form submission
  function handle(e) {
    e.preventDefault(); // Prevent page reload

    // ✅ Prevent adding empty or whitespace-only todos
    if (!data.trim()) return;

    // ✅ Dispatch the addData action to add the new todo to Redux store
    dispatch(addData(data));

    // ✅ Clear the input field after submission
    setData('');
  }

  return (
    // ✅ The form calls `handle` on submission
    <form onSubmit={handle}>
      {/* ✅ Controlled input field */}
      <input
        value={data}                        // input value is bound to `data` state
        onChange={(e) => setData(e.target.value)}  // update state on change
        type="text"
        placeholder="Enter your text here"
      />

      {/* ✅ Button to submit the form */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
