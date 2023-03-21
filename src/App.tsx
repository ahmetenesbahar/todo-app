import React from "react";
import "./App.scss";
import { useState, FC } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoData from "./components/data/DummyData";

const App: FC = () => {
  const [task, setTask] = useState([...TodoData]);

  const addFeedback = (newTask: { text: string; id: number }) => {
    setTask([newTask, ...task]);
  };
  const deleteTask = (id: number) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setTask(task.filter((task) => task.id !== id));
    }
  };
  return (
    <>
      <TodoForm handleAdd={addFeedback} />
      <TodoList task={task} handleDelete={deleteTask} />
    </>
  );
};

export default App;
