import { useContext } from "react";
import Task from "./Task";
import TodoContext from "../store/todos-Context";

function TaskList() {
  let todos = useContext(TodoContext).todos;
  return (
    <>
      {todos.map((todo, i) => {
        return (
          <Task
            key={i}
            idx={i}
            task={todos[i].namee}
            day={todos[i].datee}
          ></Task>
        );
      })}
    </>
  );
}

export default TaskList;
