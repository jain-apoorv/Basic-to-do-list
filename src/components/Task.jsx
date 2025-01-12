import styles from "./Task.module.css";
import { MdDeleteForever } from "react-icons/md";
import TodoContext from "../store/todos-Context";
import { useContext } from "react";

function Task({ idx, task, day }) {
  // const handleOnRemove = useContext(TodoContext).handleOnRemove;
  const dispatchTodo = useContext(TodoContext).dispatchTodo;
  return (
    <>
      <div className={`row ${styles.taskRow}`}>
        <div className="col-6">{task}</div>
        <div className="col-4"> {day}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={(e) => {
              dispatchTodo({ type: "TASK_REMOVED", payload: { i: idx } });
            }}
          >
            <MdDeleteForever></MdDeleteForever>
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
