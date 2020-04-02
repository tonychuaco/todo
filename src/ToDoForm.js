import React from "react";

// Then create a ToDoForm component that accepts props to fire the correct methods when the corresponding event listeners are fired.

const ToDoForm = (props) => {
  const formInput = (
    <form onSubmit={props.addItem}>
      <label htmlFor="taskName">Task Name:</label>
      <input
        onChange={props.handleChange}
        name="taskName"
        type="text"
        placeholder="Add to do here!"
      />
      <button type="submit">Add Task</button>
    </form>
  );

  return <div>{formInput}</div>;
};

export default ToDoForm;
