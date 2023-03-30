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
  const { addTask, edit, updateTask } = useContext(TodoContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const [text, setText] = useState<string>("");
  const [id, setId] = useState<number>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit.edit) {
      updateTask({ text, id: edit.task.id });
      edit.edit = false;
    } else {
      const generateId = Math.floor(Math.random() * 10000000000000);
      addTask({ text, id: generateId });
    }
    setText("");

    // setId(generateId);
  };

  useEffect(() => {
    if (edit.edit) {
      setText(edit.task.text);
      setId(edit.task.id);
    }
  }, [edit]);

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <button>
        <FaPlus className="add" />
      </button>
      <input
        type="text"
        placeholder="Add task !"
        value={text}
        className="form"
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
