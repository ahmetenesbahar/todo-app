import React from "react";
import { useState, FC, ChangeEvent, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
type ChildProps = {
  handleAdd: (newTask: { text: string; id: number }) => void;
};
const TodoForm: FC<ChildProps> = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(5);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      text,
      id: id,
    };
    let generateId = Math.floor(Math.random() * 10000000000000);
    setId(generateId);
    handleAdd(newTask);
    setText("");
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task !"
        value={text}
        className="form"
        onChange={handleChange}
      />
      <button>
        <FaPlus className="add" />
      </button>
    </form>
  );
};

export default TodoForm;
