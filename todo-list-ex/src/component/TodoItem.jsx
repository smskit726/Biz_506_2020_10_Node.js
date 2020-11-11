import React, { Component } from "react";
import "../css/TodoItem.css";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="todo-item">
        <div className="todo-delete">&times;</div>
        <div className={`todo-text ${todo.isComplete ? "checked" : ""}`}>
          {todo.text}
        </div>
        {todo.isComplete && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default TodoItem;
