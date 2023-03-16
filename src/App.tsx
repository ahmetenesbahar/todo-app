import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
