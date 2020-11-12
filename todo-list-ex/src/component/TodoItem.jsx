import React, { Component } from "react";
import "../css/TodoItem.css";

class TodoItem extends Component {
  render() {
    const { todo, onToggle, onDeleteItem } = this.props;
    const onClick = (e, id) => {
      if (e.target.className === "todo-delete") {
        if (window.confirm("삭제할까요?")) {
          onDeleteItem(id);
          return false;
        }
      } else {
        onToggle(id);
      }
    };
    return (
      <div className="todo-item" onClick={(e) => onClick(e, todo.id)}>
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
