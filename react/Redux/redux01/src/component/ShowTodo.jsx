// ✅ Import React and Redux hooks
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ✅ Import the removeData action from the todo slice
import { removeData } from '../features/todo/todoslice';

function ShowTodo() {
  // ✅ useSelector is used to access the Redux state
  // We specifically access the nested `todos` array inside `state.todos`
  const todos = useSelector((state) => state.todos.todos);

  // ✅ useDispatch gives us access to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      {/* ✅ Map through each todo item and display it */}
      {todos.map((data) => (
        <li key={data.id}>
          {/* ✅ Display the text of the todo item */}
          {data.text}

          {/* ✅ Button to delete a todo by dispatching the removeData action with the todo's id */}
          <button onClick={() => dispatch(removeData(data.id))}>Del</button>
        </li>
      ))}
    </div>
  );
}

export default ShowTodo;
