import { FC, useRef, useState, useEffect } from "react";

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
  const { deleteTask, editTask, setSelectedId, selectedId } = useTodo();

  const checktext = useRef<HTMLParagraphElement>(null);

  const handleEditClick = () => {
    editTask(item);
    setSelectedId(item.id);
  };

  const handleCheck = (id: number) => {
    checktext.current?.classList.toggle("check");
  };

  const taskCardClass =
    selectedId == item.id ? "task-card selected" : "task-card";

  return (
    <div className={taskCardClass}>
      <input
        type="checkbox"
        className="checkbox"
        onClick={() => {
          handleCheck(item.id);
        }}
      />
      <p className="task-text" ref={checktext}>
        {item.text}
      </p>
      <div className="card-btn">
        <FaTrash className="delete" onClick={() => deleteTask(item.id)} />
        <FaEdit className="edit" onClick={handleEditClick} />
      </div>
    </div>
  );
};

export default TodoItem;
