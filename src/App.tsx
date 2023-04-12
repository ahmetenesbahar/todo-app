import { FC } from "react";
import "./App.scss";

import { Helmet } from "react-helmet";

import { Login, Navbar, TodoForm, TodoList } from "@components";

import { TodoProvider, UserProvider } from "@context";
import { useTheme } from "@context/ThemeContext";

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
