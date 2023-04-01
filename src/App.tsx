import React from "react";
import "./App.scss";
import { FC } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./components/context/TodoContext";
import { UserProvider } from "./components/context/UserContext";

const App: FC = () => {
  return (
    <TodoProvider>
      <UserProvider>
        <Login />
        <Navbar />
        <TodoForm />
        <TodoList />
      </UserProvider>
    </TodoProvider>
  );
};

export default App;
