import { FC, useState } from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

import { useTodo } from "@context/TodoContext";

type ChildProps = {
  item: {
    id: number;
    text: string;
  };
};

const TodoItem: FC<ChildProps> = ({ item }) => {
  const { deleteTask, editTask, setSelectedId, selectedId } = useTodo();

  const [checked, setChecked] = useState(false);

  const handleEditClick = () => {
    editTask(item);
    setSelectedId(item.id);
  };

  const handleChecked = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const taskCardClass =
    selectedId == item.id ? "task-card selected" : "task-card";

  return (
    <div className={taskCardClass}>
      <input type="checkbox" className="checkbox" onClick={handleChecked} />
      <p className={checked ? "task-text checked" : "task-text"}>{item.text}</p>
      <div className="card-btn">
        <FaTrash className="delete" onClick={() => deleteTask(item.id)} />
        <FaEdit className="edit" onClick={handleEditClick} />
      </div>
    </div>
  );
};

export default TodoItem;
