import { FC, useEffect, useCallback } from "react";
import "./App.scss";

import { Helmet } from "react-helmet";
import { Route, Routes, Navigate } from "react-router-dom";

import { Login, Navbar, TodoForm, TodoList } from "@components";

import { TodoProvider, UserProvider } from "@context";
import { useTheme } from "@context/ThemeContext";
import { useUserContext } from "@context/UserContext";

const App: FC = () => {
  const { theme } = useTheme();
  const { isLoggedIn } = useUserContext();

  return (
    <TodoProvider>
      <Helmet>
        <title>Todo App</title>
      </Helmet>
      <main className={`app ${theme}`}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <TodoForm />
                  <TodoList />
                </>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </main>
    </TodoProvider>
  );
};

export default App;
