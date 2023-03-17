import React from "react";
import { useState, FC } from "react";
import TodoList from "./TodoList";

interface IItem {
  text: string;
  id?: string;
}

const TodoInput: FC = () => {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const handleAdd = () => {
    if (item == "") {
      return 0;
    }
    setItems([item, ...items]);
    setItem("");
  };
  return (
    <>
      <div className="input-card">
        <div className="input-group">
          <input
            type="text"
            placeholder="Write something to do"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <TodoList items={items} setItems={setItems} />
    </>
  );
};

export default TodoInput;
