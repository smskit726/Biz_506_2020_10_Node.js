import React, { Component } from "react";
import "../css/BbsInsert.css";

class BbsInsert extends Component {
  state = {
    b_writer: "",
    b_subject: "",
    b_content: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { b_writer, b_subject, b_content } = this.state;
    return (
      <div className="bbs-insert">
        <input
          name="b_writer"
          value={b_writer}
          onChange={this.handleOnChange}
          placeholder="작성자"
        />
        <input
          name="b_subject"
          value={b_subject}
          onChange={this.handleOnChange}
          placeholder="제목"
        />
        <input
          name="b_content"
          value={b_content}
          onChange={this.handleOnChange}
          placeholder="내용을 입력해주세요"
        />
        <button type="button">저장</button>
      </div>
    );
  }
}

export default BbsInsert;
