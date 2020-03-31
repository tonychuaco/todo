import React, { Component } from "react";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    };
  }

  addItem = (event) => {
    event.preventDefault();
    console.log("addItem method executed");
  };

  handleChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input
            onChange={this.handleChange}
            name="taskName"
            type="text"
            placeholder="Add to do here!"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default ToDoList;
