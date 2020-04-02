import React, { Component } from "react";

import TasksList from "./TasksList";
import ToDoForm from "./ToDoForm";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
      taskId: 0,
    };
    this.deleteTask = this.deleteTask.bind(this);
  }

  // Complete the handleChange and the addItem methods
  addItem = (event) => {
    event.preventDefault();

    const task = {
      taskId: this.state.taskId,
      taskName: this.state.currentToDo,
    };

    this.setState({
      taskId: this.state.taskId + 1,
      todos: [...this.state.todos, task],
    });
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      currentToDo: event.target.value,
    });
  };

  // Then add a delete method that removes any todo in the list
  deleteTask = (event) => {
    let temp = this.state.todos;
    let arr = [];
    for (var task in temp) {
      if (temp[task] === event) {
        continue;
      } else {
        arr.push(temp[task]);
      }
    }
    temp = arr;

    this.setState({
      todos: temp,
    });
  };

  // Complete an Update method and add an Update button to each list item that will allow you to update the individual item.
  updateTask = (event) => {
    let currentToDo = this.state.currentToDo;
    let temp = this.state.todos;
    for (var task in temp) {
      if (temp[task] === event) {
        temp[task].taskName = currentToDo;
      }
    }

    this.setState({
      todos: temp,
    });
  };

  render() {
    return (
      <div className="container">
        {/* <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input
            onChange={this.handleChange}
            name="taskName"
            type="text"
            placeholder="Add to do here!"
          />
          <button type="submit">Add Task</button>
        </form> */}
        <ToDoForm
          addItem={this.state.addItem}
          handleChange={this.state.handleChange}
        />

        <TasksList
          todo={this.state.todos}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}

export default ToDoList;
