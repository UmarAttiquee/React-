import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodo] = useState([]);

  // Add a new todo
  const addtodo = (todoText) => {
    setTodo((prev) => [...prev,{
        id: Date.now(),
        todo: todoText,
        completed: false
      }
    ]);
  };

  // Update a todo by ID
  const updtodo = (id, updatedTodo) => {
    setTodo((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  // Delete a todo by ID
  const deltodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle completion status
  const toggletodo = (id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed }: todo
      )
    );
  };

  // Load from localStorage on first mount
  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosFromStorage && todosFromStorage.length > 0) {
      setTodo(todosFromStorage);
    }
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addtodo, updtodo, deltodo, toggletodo }}
    >
      <h1 className="text-4xl text-amber-500 font-bold underline mb-4">
        Todo World!
      </h1>

      <TodoForm />

      <div className="mt-4">
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoContextProvider>
  );
}

export default App;
