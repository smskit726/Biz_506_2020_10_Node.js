import React, { Component } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import "../css/TodoMain.css";

class TodoMain extends Component {
  id = 3;
  state = {
    todoList: [
      { id: 0, text: "20.11.12", isComplete: true },
      { id: 1, text: "목요일", isComplete: false },
      { id: 2, text: "리액트 TodoList", isComplete: false },
    ],
  };

  onToggle = (id) => {
    const { todoList } = this.state;
    const compTodoList = todoList.map((todo) => {
      if (todo.id === Number(id))
        return { ...todo, isComplete: !todo.isComplete };
      else return todo;
    });
    this.setState({ todoList: compTodoList });
  };

  onCreate = (todo) => {
    const newTodoList = [
      ...this.state.todoList,
      { id: this.id++, text: todo, isComplete: false },
    ];
    this.setState({ todoList: newTodoList });
  };

  onDeleteItem = (id) => {
    const deleteTodoList = this.state.todoList.filter((todo) => {
      if (todo.id !== Number(id)) return todo;
    });
    this.setState({ todoList: deleteTodoList });
  };

  render() {
    return (
      <main className="todo-main">
        <h3>ToDo List &#127866;</h3>
        <TodoInsert onCreate={this.onCreate} />
        <TodoList
          todoList={this.state.todoList}
          onToggle={this.onToggle}
          onDeleteItem={this.onDeleteItem}
        />
      </main>
    );
  }
}

export default TodoMain;
