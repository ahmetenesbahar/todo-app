import React from "react";
import { useState, FC, useContext } from "react";
import TodoContext from "./context/TodoContext";
import TodoItem from "./TodoItem";

type ChildProps = {
  task: {
    id: number;
    text: string;
  }[];
  handleDelete: (id: number) => void;
  handleEdit: (task: any) => void;
};
const TodoList: FC<ChildProps> = ({ task, handleDelete, handleEdit }) => {
  // const {task} = useContext(TodoContext);
  if (!task || task.length === 0) {
    return <p>No Task :D</p>;
  }

  return (
    <div className="task-list">
      {task.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
