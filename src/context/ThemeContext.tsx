import { createContext, useState, useEffect, useContext } from "react";
import { useUserContext } from "./UserContext";

const ThemeContext = createContext({
  theme: "light" as "light" | "dark" | "order66",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark" | "order66">(
    JSON.parse(localStorage.getItem("theme")!) ?? "dark"
  ); //!

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext);
