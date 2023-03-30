import React from "react";
import { useState, FC, useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import TodoContext from "./context/TodoContext";

type ChildProps = {
  item: {
    id: number;
    text: string;
  };
};

const TodoItem: FC<ChildProps> = ({ item }) => {
  const { deleteTask, editTask } = useContext(TodoContext);
  return (
    <div className="task-card">
      <input type="checkbox" className="checkbox" />
      <p className="task-text">{item.text}</p>
      <div className="card-btn">
        <FaTrashAlt className="delete" onClick={() => deleteTask(item.id)} />
        <FaEdit className="edit" onClick={() => editTask(item)} />
      </div>
    </div>
  );
};

export default TodoItem;
