import React from "react";
import { FC } from "react";
type ChildProps = {
  items: string[];
};
const TodoList: FC<ChildProps> = ({ items }) => {
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
                <button className="delete">Delete</button>
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
