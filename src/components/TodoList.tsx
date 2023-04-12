import { FC } from "react";

import { TodoItem } from "@/components";

import { useTheme } from "@/context/ThemeContext";
import { useTodo } from "@/context/TodoContext";

const TodoList: FC = () => {
  const { filteredTask } = useTodo();
  const { theme } = useTheme();

  if (!filteredTask || filteredTask.length === 0) {
    return <p>No Task :D</p>;
  }

  const RenderTodoList = () => {
    return (
      <>
        {filteredTask.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </>
    );
  };

  return (
    <div className={`task-list ${theme}`}>
      <RenderTodoList />
    </div>
  );
};

export default TodoList;
