import React, { Component } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import "../css/TodoMain.css";

class TodoMain extends Component {
  id = 3;
  state = {
    todoList: [
      { id: 0, text: "오늘은 목요일", isComplete: true },
      { id: 1, text: "오늘은 뭘할까?", isComplete: false },
      { id: 2, text: "내일은 금요일", isComplete: false },
    ],
  };
  render() {
    return (
      <main className="todo-main">
        <h3>ToDo List &#127866;</h3>
        <TodoInsert />
        <TodoList todoList={this.state.todoList} />
      </main>
    );
  }
}

export default TodoMain;
