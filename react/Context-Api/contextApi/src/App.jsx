import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import { ThemeProvider } from "./context/theme";
import UserContextProvider from "./context/UserContextProvider";
import Btn from "./components/Btn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    // Nest the providers. The components inside will have access to both contexts.
    <UserContextProvider>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <h1 className="p-4 bg-green-300 text-2xl font-bold dark:bg-green-700 dark:text-gray-100">
            Hello World
          </h1>
          <div className="p-8">
            <Btn />
            <Card />
          </div>
          {/* Example of using components that might need UserContext */}
          {/* <Login /> */}
          {/* <Signup /> */}
        </div>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <h1 className="p-4 text-2xl font-bold bg-green-300 dark:bg-green-700 dark:text-white">
            Hello World
          </h1>
          <div className="p-8">
            <Btn />
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
