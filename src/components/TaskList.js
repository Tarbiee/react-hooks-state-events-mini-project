import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    <ul>
      {tasks.map((task) => (
      <Task key={task.id} task={task} />  
      ))}
    </ul>
    </div>
  );
}

export default TaskList;