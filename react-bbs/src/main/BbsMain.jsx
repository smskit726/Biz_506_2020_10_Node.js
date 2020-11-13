import React, { Component } from "react";
import BbsInsert from "../main/BbsInsert";
import BbsList from "../main/BbsList";
class BbsMain extends Component {
  render() {
    return (
      <div className="bbs-main">
        <BbsInsert />
        <BbsList />
      </div>
    );
  }
}

export default BbsMain;
