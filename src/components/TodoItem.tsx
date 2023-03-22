import React from "react";
import { useState, FC } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

type ChildProps = {
  task: {
    id: number;
    text: string;
  };
  handleDelete: (id: number) => void;
  handleEdit: (task: any) => void;
};

const TodoItem: FC<ChildProps> = ({ task, handleDelete, handleEdit }) => {
  return (
    <div className="task-card">
      <input type="checkbox" className="checkbox" />
      <p className="task-text">{task.text}</p>
      <div className="card-btn">
        <FaTrash className="delete" onClick={() => handleDelete(task.id)} />
        <FaEdit className="edit" onClick={() => handleEdit(task)} />
      </div>
    </div>
  );
};

export default TodoItem;
