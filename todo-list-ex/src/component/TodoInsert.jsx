import React, { Component } from "react";
import "../css/TodoInsert.css";
class TodoInsert extends Component {
  render() {
    return (
      <form className="todo-insert">
        <input placeholder="해야할 일을 적어주세요 &#9997;" />
        <button type="button">저장</button>
      </form>
    );
  }
}

export default TodoInsert;
