import React from "react";

// Then create a TasksList component that accepts props to build out the list instead of doing it in our main app

const TasksList = (props) => {
  const listItems = props.todo.map((item) => (
    <li key={item.taskId}>
      {item.taskName}
      <button type="button" onClick={() => props.deleteTask(item)}>
        Delete
      </button>
      <button type="button" onClick={() => props.updateTask(item)}>
        Update
      </button>
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default TasksList;
