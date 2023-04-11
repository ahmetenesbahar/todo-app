import React, { FC, useEffect } from "react";
import "./App.scss";

import { Helmet } from "react-helmet";

import { TodoProvider } from "./components/context/TodoContext";
import { UserProvider } from "./components/context/UserContext";
import { useTheme } from "./components/context/ThemeContext";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <TodoProvider>
      <UserProvider>
        <Helmet>
          <title>Todo App</title>
        </Helmet>
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
