import { createContext, useCallback, useEffect, useState } from "react";

type TaskProps = {
  id: number;
  text: string;
};
interface IType {
  task: {
    id: number;
    text: string;
  }[];
  addTask: (newTask: { text: string; id: number }) => void;
  deleteTask: (id: number) => void;
  editTask: (task: { id: number; text: string }) => void;
  edit: {
    item: {
      text: string;
      id: number;
    };
    edit: boolean;
  };
  updateTask: (newTask: { text: string; id: number }) => void;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedId: number | null;
  filteredTask: TaskProps[];
  searchTask: (text: string) => void;
}
const TodoContext = createContext<IType>({
  task: [],
  addTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  edit: {
    item: {
      text: "",
      id: 0,
    },
    edit: false,
  },
  updateTask: () => {},
  setSelectedId: () => {},
  selectedId: null,
  filteredTask: [],
  searchTask: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [task, setTask] = useState<TaskProps[]>(
    JSON.parse(localStorage.getItem("task")!) ?? []
  );
  const [edit, setEdit] = useState({
    item: {
      text: "",
      id: 0,
    },
    edit: false,
  });

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [filteredTask, setFilteredTask] = useState<TaskProps[]>(task);

  //? SetFiltered Task
  const searchTask = useCallback(
    (text: string) => {
      setFilteredTask(task.filter((item) => item.text.includes(text)));
    },
    [task]
  );
  //* const searchTask = (text: string) => {
  //*  setFilteredTask(current=>current.filter((item) => item.text.includes(text)));
  //* };

  //? Get Task from Local Storage
  const setLocalTask = () => {
    localStorage.setItem("task", JSON.stringify(task));
  };

  //? Add Task
  const addTask = (newTask: { text: string; id: number }) => {
    if (newTask.text !== "") {
      setTask([newTask, ...task]);
    }
  };

  //? Task Local Storage
  useEffect(() => {
    setLocalTask();
    setFilteredTask(task);
  }, [task]);

  //? Delete Task
  const deleteTask = (id: number) => {
    setTask(task.filter((item) => item.id !== id));
  };

  //? Edit Task
  const editTask = (item: { id: number; text: string }) => {
    setEdit({
      item,
      edit: true,
    });
  };

  //? Update Task
  const updateTask = (newTask: { text: string; id: number }) => {
    setTask(
      task.map((item) =>
        item.id === newTask.id ? { ...item, text: newTask.text } : item
      )
    );
    document
      .querySelectorAll(".task-card")
      .forEach((item) => item.classList.remove("selected"));
  };

  return (
    <TodoContext.Provider
      value={{
        addTask,
        task,
        updateTask,
        deleteTask,
        editTask,
        edit,
        setSelectedId,
        selectedId,
        filteredTask,
        searchTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
