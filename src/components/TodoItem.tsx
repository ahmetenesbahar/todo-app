import { FC, useState } from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

import { useTodo } from "@context/TodoContext";

type ChildProps = {
  item: {
    id: number;
    text: string;
    checked: boolean;
  };
};

const TodoItem: FC<ChildProps> = ({ item }) => {
  const { deleteTask, editTask, setSelectedId, selectedId, handleChecked } =
    useTodo();

  const handleEditClick = () => {
    editTask(item);
    setSelectedId(item.id);
  };

  const taskCardClass =
    selectedId == item.id ? "task-card selected" : "task-card";

  return (
    <div className={taskCardClass}>
      <input
        type="checkbox"
        className="checkbox"
        onClick={() => {
          handleChecked(item.id);
        }}
      />
      <p className={"task-text"}>{item.text}</p>
      <div className="card-btn">
        <FaTrash className="delete" onClick={() => deleteTask(item.id)} />
        <FaEdit className="edit" onClick={handleEditClick} />
      </div>
    </div>
  );
};

export default TodoItem;
