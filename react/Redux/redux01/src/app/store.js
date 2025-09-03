// ✅ Importing configureStore from Redux Toolkit to create the store
import { configureStore } from '@reduxjs/toolkit';

// ✅ Importing the reducer we created in the todo slice
import todoReducer from '../features/todo/todoslice';

// ✅ Creating the Redux store
export const store = configureStore({
  // The reducer object defines the structure of your Redux state
  reducer: {
    // 'todos' becomes the key in your Redux state (state.todos)
    // and todoReducer manages that part of the state
    todos: todoReducer
  }
});
     




 




   