import React from "react";
import {
  FC,
  useContext,
  ChangeEvent,
  useEffect,
  useState,
  FormEvent,
} from "react";
import { FaPlus } from "react-icons/fa";
import TodoContext from "./context/TodoContext";

const TodoForm: FC = () => {
  const { addTask, edit } = useContext(TodoContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  const [id, setId] = useState();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
    const generateId = Math.floor(Math.random() * 10000000000000);
    // setId(generateId);
    addTask({ text, id: generateId });
  };

  useEffect(() => {
    if (edit.edit) {
      console.log("edit");
    } else {
      console.log("add");
    }
  }, [edit]);

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
