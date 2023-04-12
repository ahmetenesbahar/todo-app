import { FC } from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { TodoItem } from "@components/index";

import { useTheme } from "@context/ThemeContext";
import { useTodo } from "@context/TodoContext";

const TodoList: FC = () => {
  const { filteredTask } = useTodo();
  const { theme } = useTheme();

  const [animationParent] = useAutoAnimate();

  if (!filteredTask || filteredTask.length === 0) {
    return <p className="no-task">No Task Added</p>;
  }

  return (
    <div className={`task-list ${theme}`} ref={animationParent}>
      {filteredTask.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
