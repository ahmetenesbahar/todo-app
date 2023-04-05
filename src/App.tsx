import React from "react";
import "./App.scss";
import { FC } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./components/context/TodoContext";
import { UserProvider } from "./components/context/UserContext";
import { useTheme } from "./components/context/ThemeContext";

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <TodoProvider>
      <UserProvider>
        <main className={`app ${theme}`}>
          <Login />
          <Navbar />
          <TodoForm />
          <TodoList />
        </main>
      </UserProvider>
    </TodoProvider>
  );
};

export default App;
