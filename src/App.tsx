import React from "react";
import "./App.scss";
import { useState, FC, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoData from "./components/data/DummyData";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./components/context/TodoContext";

const App: FC = () => {
  return (
    <TodoProvider>
      <Navbar />
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
