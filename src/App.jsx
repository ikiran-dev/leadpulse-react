import React from "react";
import { createContext, useState } from "react";
import "./App.css";
import Home from "./Home";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Home state={setTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
