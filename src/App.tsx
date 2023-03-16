import React from "react";
import { FC } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <TodoInput />
    </>
  );
};

export default App;
