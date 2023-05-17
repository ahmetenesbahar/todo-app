import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type TaskProps = {
  id: number;
  text: string;
  checked: boolean;
};
interface IType {
  task: {
    id: number;
    text: string;
    checked: boolean;
  }[];
  addTask: (newTask: { text: string; id: number; checked: boolean }) => void;
  deleteTask: (id: number) => void;
  editTask: (item: { id: number; text: string; checked: boolean }) => void;
  edit: {
    item: {
      text: string;
      id: number;
      checked: boolean;
    };
    edit: boolean;
  };
  updateTask: (newTask: { text: string; id: number }) => void;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedId: number | null;
  filteredTask: TaskProps[];
  searchTask: (text: string) => void;
  localCheck: (id: number) => void;
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
      checked: false,
    },
    edit: false,
  },
  updateTask: () => {},
  setSelectedId: () => {},
  selectedId: null,
  filteredTask: [],
  searchTask: () => {},
  localCheck: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [task, setTask] = useState<TaskProps[]>(
    JSON.parse(localStorage.getItem("task")!) ?? []
  );
  const [edit, setEdit] = useState({
    item: {
      text: "",
      id: 0,
      checked: false,
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

  //? Sets checked value in local
  const localCheck = (id: number) => {
    setTask((current) =>
      current.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  //? Get Task from Local Storage
  const setLocalTask = () => {
    localStorage.setItem("task", JSON.stringify(task));
  };

  //? Add Task
  const addTask = (newTask: { text: string; id: number; checked: boolean }) => {
    if (newTask.text !== "") {
      setTask([newTask, ...task]);
    }
    if (
      newTask.text.toLowerCase().includes("order 66") ||
      newTask.text.toLowerCase().includes("execute order 66")
    ) {
      window.open("https://www.youtube.com/watch?v=G2QhAynp1FY");
    }
  };

  //? Delete Task
  const deleteTask = (id: number) => {
    setTask(task.filter((item) => item.id !== id));
  };

  //? Edit Task
  const editTask = (item: { id: number; text: string; checked: boolean }) => {
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

  //? Task Local Storage
  useEffect(() => {
    setLocalTask();
    setFilteredTask(task);
  }, [task]);

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
        localCheck,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
