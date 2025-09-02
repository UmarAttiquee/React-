import { createContext, useContext } from "react";

// 1. Create the context
const _TodoContext = createContext({
  todo: [
    {
      id: 1,
      completed: false,
      todo: "Msg Here",
    },
  ],
  addtodo: (todo) => {},
  updtodo: (todo, id) => {},
  deltodo: (id) => {},
  toggletodo: (id) => {},
});

// ✅ 2. Export it by name
export const TodoContext = _TodoContext;

// ✅ 3. Custom hook
export const useTodo = () => useContext(_TodoContext);

// ✅ 4. Provider (not the best practice, but OK if you're passing `value={...}` in App.js)
export const TodoContextProvider = _TodoContext.Provider;

