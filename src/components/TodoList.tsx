import React from "react";
import { useState, FC, useContext } from "react";
import TodoContext from "./context/TodoContext";
import ThemeContext from "./context/ThemeContext";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const { task } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);
  if (!task || task.length === 0) {
    return <p>No Task :D</p>;
  }

  return (
    <div className={`task-list ${theme}`}>
      {task.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
