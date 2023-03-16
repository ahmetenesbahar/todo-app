import React from "react";
import { useState, FC } from "react";
import TodoList from "./TodoList";

const TodoInput: FC = () => {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const handleAdd = () => {
    console.log(item);
    setItems([item, ...items]);
  };
  return (
    <>
      <div className="input-card">
        <div className="input-group">
          <input
            type="text"
            placeholder="Write something to do"
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <TodoList items={items} />
    </>
  );
};

export default TodoInput;
