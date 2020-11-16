import React, { Component } from "react";
import BbsItem from "./BbsItem";
import "../css/BbsList.css";

class BbsList extends Component {
  render() {
    const { bbsList, fetchBbs, handleUpdate } = this.props;
    const bbsItemList = bbsList.map((bbs, index) => (
      <BbsItem
        key={bbs.id}
        index={index}
        bbs={bbs}
        fetchBbs={fetchBbs}
        handleUpdate={handleUpdate}
      />
    ));
    return (
      <table className="bbs-list">
        <thead>
          <tr>
            <th>No</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>제목</th>
            <th>&hearts;</th>
          </tr>
        </thead>
        <tbody>{bbsItemList}</tbody>
      </table>
    );
  }
}

export default BbsList;
