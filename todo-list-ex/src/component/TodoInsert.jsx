import React, { Component } from "react";
import "../css/TodoInsert.css";
class TodoInsert extends Component {
  state = {
    todo: "",
  };

  onChage = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCreate = (e) => {
    const { onCreate } = this.props;
    onCreate(this.state.todo);
  };
  render() {
    return (
      <form className="todo-insert">
        <input
          placeholder="해야할 일을 적어주세요 &#9997;"
          value={this.state.todo}
          onChange={this.onChage}
          name="todo"
        />
        <button type="button" onClick={this.onCreate}>
          추가
        </button>
      </form>
    );
  }
}

export default TodoInsert;
