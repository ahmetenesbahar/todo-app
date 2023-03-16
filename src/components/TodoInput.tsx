import React from "react";

function TodoInput() {
  return (
    <div className="input-card">
      <div className="input-group">
        <input type="text" placeholder="Write something to do" />
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
