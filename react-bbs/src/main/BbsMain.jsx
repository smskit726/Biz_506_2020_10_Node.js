import React, { Component } from "react";
import BbsInsert from "../main/BbsInsert";
import BbsList from "../main/BbsList";
class BbsMain extends Component {
  state = {
    state1: "",
    state2: "",
    bbsList: [
      {
        id: 0,
        b_writer: "홍길동",
        b_date_time: "2020-11-13",
        b_subject: "게시판",
      },
      {
        id: 1,
        b_writer: "성춘향",
        b_date_time: "2020-11-13",
        b_subject: "게시판",
      },
      {
        id: 2,
        b_writer: "이몽룡",
        b_date_time: "2020-11-13",
        b_subject: "게시판",
      },
    ],
  };
  render() {
    const { bbsList, state2 } = this.state;
    return (
      <div className="bbs-main">
        <BbsInsert />
        <BbsList bbsList={bbsList} state1={this.state.state1} state2={state2} />
      </div>
    );
  }
}

export default BbsMain;
