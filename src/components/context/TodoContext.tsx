import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

const TodoContext = createContext({});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState({
    task: {},
    edit: false,
  });
  const [text, setText] = useState("");
  const [id, setId] = useState(5);

  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
export default TodoContext;
