import React from "react";
import { FC } from "react";
type ChildProps = {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
};
const TodoList: FC<ChildProps> = ({ items, setItems }) => {
  const handleDelete = (e: any) => {
    console.log(e);
    setItems(items.filter(e));
  };
  return (
    <>
      {items.map((item) => (
        <div className="todo-list">
          <div className="card-list">
            <div className="list-item">
              <input type="checkbox" />
              <p className="item-text">{item}</p>
              <div className="item-btn">
                <button className="edit">Edit</button>
                <button className="delete" onClick={(e) => handleDelete(e)}>
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
