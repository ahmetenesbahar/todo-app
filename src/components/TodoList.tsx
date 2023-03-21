import React from "react";
import { useState, FC } from "react";
import TodoItem from "./TodoItem";
type ChildProps = {
  task: {
    id: number;
    text: string;
  }[];
  handleDelete: (id: number) => void;
};
const TodoList: FC<ChildProps> = ({ task, handleDelete }) => {
  if (!task || task.length === 0) {
    return <p>No Task :D</p>;
  }

  return (
    <div className="task-list">
      {task.map((task) => (
        <TodoItem key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
