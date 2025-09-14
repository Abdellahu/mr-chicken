import { createContext, useContext, useState } from "react";
const ThemeContext = createContext("light");

function Brightness({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function useTheme() {
  return useContext(ThemeContext);
}

export { Brightness, useTheme };
