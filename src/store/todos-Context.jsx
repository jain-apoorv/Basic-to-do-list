import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  dispatchTodo: () => {},
});

export default TodoContext;
