import React from "react";
import "./Task.css";
import trashcan from "../../assets/images/trashcan.png";
import ok from "../../assets/images/ok.png";
import cancel from "../../assets/images/cancel.png";

const Task = props => {
  return (
    <div className={`item ${props.index % 2 === 0 ? "item-grey" : null}`}>
      <span onClick={props.toggleDone}>
        <img src={props.done ? cancel : ok} alt="task" />
      </span>
      <div
        className={`task ${props.done ? "completedTask" : "incompleteTask"}`}
      >
        {props.task}
      </div>
      <span onClick={props.deleteItem}>
        <img src={trashcan} alt="delete" />
      </span>
    </div>
  );
};

export default Task;
