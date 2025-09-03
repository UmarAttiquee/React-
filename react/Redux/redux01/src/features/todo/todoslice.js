// Importing createSlice to create Redux logic, and nanoid to generate unique IDs
import { createSlice, nanoid } from "@reduxjs/toolkit";

// ✅ Initial state of the Redux store
// We're using an object with a `todos` key that holds an array of todo items
const initialState = {
  todos: [{ id: 1, text: "Hello World" }] // Preloaded default todo
};

// ✅ Creating the todo slice
export const todoSlice = createSlice({
  name: "todos",          // Name of the slice (used internally by Redux)
  initialState,           // Our starting state
  reducers: {             // All reducer functions (actions that modify state)

    // ➕ Action to add a new todo
    addData: (state, action) => {
      // Create a new todo object
      const todo = {
        id: nanoid(),        // Generate a unique ID for the new todo
        text: action.payload // The text comes from the dispatched action payload
      };

      // Push the new todo into the existing array in state
      state.todos.push(todo);
    },

    // ❌ Action to remove a todo by its ID
    removeData: (state, action) => {
      // Filter out the todo whose ID matches the payload
      // The payload is expected to be just the ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }

    // ✅ You can add more reducers here: updateData, toggleComplete, etc.
  }
});

// ✅ Exporting the action creators so you can dispatch them from components
export const { addData, removeData } = todoSlice.actions;

// ✅ Exporting the reducer so it can be used in the store configuration
export default todoSlice.reducer;
