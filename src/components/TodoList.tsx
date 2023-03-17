import React from "react";
import { FC } from "react";
import { IItem } from "./Interfaces";
type ChildProps = {
  items: IItem[];
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
};
const TodoList: FC<ChildProps> = ({ items, setItems }) => {
  const handleDelete = (id: number): void => {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <>
      {items.map((item) => (
        <div className="todo-list">
          <div className="card-list">
            <div className="list-item">
              <input type="checkbox" />
              <p className="item-text">{item.text}</p>
              <div className="item-btn">
                <button className="edit">Edit</button>
                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
// *? süslü koyarsam return yazmak zorundayım normal koyarsam oluo

//TODO
