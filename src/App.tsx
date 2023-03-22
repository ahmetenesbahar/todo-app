import React from "react";
import "./App.scss";
import { useState, FC, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoData from "./components/data/DummyData";
import { TodoProvider } from "./components/context/TodoContext";

const App: FC = () => {
  const [task, setTask] = useState([...TodoData]);
  const [edit, setEdit] = useState({
    task: {},
    edit: false,
  });

  // Add Task
  const addTask = (newTask: { text: string; id: number }) => {
    setTask([newTask, ...task]);
  };
  //Delete Task
  const deleteTask = (id: number) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setTask(task.filter((task) => task.id !== id));
    }
  };
  //Edit Task

  const editTask = (task: { id: number; text: string }[]) => {
    setEdit({
      task,
      edit: true,
    });
  };

  return (
    <TodoProvider>
      <TodoForm handleAdd={addTask} />
      <TodoList task={task} handleDelete={deleteTask} handleEdit={editTask} />
    </TodoProvider>
  );
};

export default App;
