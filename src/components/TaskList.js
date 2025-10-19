import React from "react";
import Task from "./Task";
import { TASKS } from "../data";



function TaskList({ tasks, onDeleteTask }) {
  const taskItems = tasks.map((task) => (
    <Task 
    key={task.text} 
    text={task.text} 
    category={task.category}
    onDeleteTask={onDeleteTask} />
  ))
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
