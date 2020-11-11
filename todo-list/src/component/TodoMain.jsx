import React, { Component } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import "../css/TodoMain.css";

/**
 * Class방식의 Component
 * 반드시 react Component 클래스를 상속받아야 한다.
 * render() method를 사용하여 실제 view를 구현하도록 되어있다.
 * 함수 방식에서 바로 나타나던 return 문이 render() method 내부에 위치한다.
 */
class TodoMain extends Component {
  id = 3;
  // class 방식에서 state변수 선언하기
  state = {
    todoList: [
      { id: 0, text: "빼빼로데이", isComplete: false },
      { id: 1, text: "수요일", isComplete: true },
      { id: 2, text: "ToDo List 만들기", isComplete: false },
    ],
  };

  /**
   * Class 방식의 main에서 event 함수를 선언하는 방법
   * const 키워드 없이 함수를 선언하라!
   */
  onToggle = (id) => {
    // alert(id + " toggle 됨");
    // id값을 기준으로 todoList 변수의 isComplete를 변경
    // 1. this.state에서 todoList 변수를 추출
    const { todoList } = this.state;
    const compTodoList = todoList.map((todo) => {
      if (todo.id === Number(id))
        return { ...todo, isComplete: !todo.isComplete };
      else return todo;
    });
    /**
     * Class방식 Component에서는 State변수를 setting하기 위한 Setter를 별도로 만들지 않는다.
     * State 변수를 Setting하기 위해서는 this.setState()라는 공통함수를 사용한다.
     *
     * this.setState( {state변수 : 새로운 값} ) 형식으로 Setting을 한다.
     */
    this.setState({ todoList: compTodoList });
  };

  onCreate = (todo) => {
    console.log(...this.state.todoList);
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
        <h3>ToDo List &#9889;</h3>
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
