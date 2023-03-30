import { createContext, useState } from "react";

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
    task: {
      text: string;
      id: number;
    };
    edit: boolean;
  };
  updateTask: (newTask: { text: string; id: number }) => void;
}
const TodoContext = createContext<IType>({
  task: [],
  addTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  edit: {
    task: {
      text: "",
      id: 0,
    },
    edit: false,
  },
  updateTask: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [edit, setEdit] = useState({
    task: {
      text: "",
      id: 0,
    },
    edit: false,
  });

  // Add Task
  const addTask = (newTask: { text: string; id: number }) => {
    setTask([newTask, ...task]);
  };
  //Delete Task
  const deleteTask = (id: number) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setTask(task.filter((item) => item.id !== id));
    }
  };
  //Edit Task

  const editTask = (task: { id: number; text: string }) => {
    setEdit({
      task,
      edit: true,
    });
  };
  // Update Task
  const updateTask = (newTask: { text: string; id: number }) => {
    setTask(
      task.map((item) =>
        item.id === newTask.id ? { ...item, text: newTask.text } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        task,
        updateTask,
        addTask,
        deleteTask,
        editTask,
        edit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
