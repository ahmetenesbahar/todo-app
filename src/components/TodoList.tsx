import React from "react";

function TodoList() {
  return (
    <div className="todo-list">
      <div className="card-list">
        <div className="list-item">
          <input type="checkbox" />
          <p className="item-text">abc</p>
          <div className="item-btn">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
