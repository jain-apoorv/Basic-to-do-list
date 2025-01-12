import { useReducer, useState } from "react";
import Container from "./components/Container";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TasksList";
import TodoContext from "./store/todos-Context";

function todosReducer(currTodos, action) {
  let newTodos = [];
  if (action.type === "TASK_ADDED") {
    if (
      action.payload.namee.length === 0 ||
      action.payload.datee.length === 0
    ) {
      newTodos = currTodos;
      alert("enter both the fields");
    } else {
      newTodos = [...currTodos, action.payload];
    }
  } else if (action.type === "TASK_REMOVED") {
    newTodos = currTodos.filter((_, i) => i != action.payload.i);
  }

  return newTodos;
}

function App() {
  const [todos, dispatchTodo] = useReducer(todosReducer, [
    { namee: "Learning React", datee: "2024-12-10" },
  ]);

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        dispatchTodo: dispatchTodo,
      }}
    >
      <Container>
        <h1 style={{ margin: "3%", textAlign: "center" }}>
          Appu's To Do Itinary
        </h1>
        <TaskInput></TaskInput>
        <TaskList></TaskList>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
