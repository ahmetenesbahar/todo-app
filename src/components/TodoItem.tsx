import React from "react";
import { FC, useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import TodoContext from "./context/TodoContext";

type ChildProps = {
  item: {
    id: number;
    text: string;
  };
};

const TodoItem: FC<ChildProps> = ({ item }) => {
  const { deleteTask, editTask, selected } = useContext(TodoContext);
  return (
    <div className={`task-card ${selected}`}>
      <input type="checkbox" className="checkbox" />
      <p className="task-text">{item.text}</p>
      <div className="card-btn">
        <FaTrash className="delete" onClick={() => deleteTask(item.id)} />
        <FaEdit className="edit" onClick={() => editTask(item)} />
      </div>
    </div>
  );
};

export default TodoItem;
