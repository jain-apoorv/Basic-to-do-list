import styles from "./TaskInput.module.css";
import { CgAddR } from "react-icons/cg";
import { useRef, useContext } from "react";
import TodoContext from "../store/todos-Context";
function TaskInput() {
  let todoNameInput = useRef();
  let todoDateInput = useRef();
  const dispatchTodo = useContext(TodoContext).dispatchTodo;
  function handleOnAddFinal(e) {
    e.preventDefault();

    const actionAdd = {
      type: "TASK_ADDED",
      payload: {
        namee: todoNameInput.current.value,
        datee: todoDateInput.current.value,
      },
    };

    dispatchTodo(actionAdd);

    todoNameInput.current.value = "";
    todoDateInput.current.value = "";
  }
  return (
    <>
      <form className={`row ${styles.inputrow}`} onSubmit={handleOnAddFinal}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Write your task here"
            ref={todoNameInput}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateInput} />
        </div>
        <div className="col">
          <button className="btn btn-success">
            <CgAddR></CgAddR>
          </button>
        </div>
      </form>
    </>
  );
}

export default TaskInput;
