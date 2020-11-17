import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";

class BbsItem extends Component {
  handleClick = (id) => {
    const { fetchBbs } = this.props;
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost:5000/api/delete/${id}`)
        .then((result) => {
          console.log(result);
          fetchBbs();
        })
        .catch((result) => console.log(result));
    }
  };

  render() {
    const { index, bbs, handleUpdate } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{bbs.b_writer}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{bbs.b_date_time}</Moment>
        </td>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => handleUpdate(bbs.b_id)}
        >
          {bbs.b_subject}
        </td>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => this.handleClick(bbs.b_id)}
        >
          &times;
        </td>
      </tr>
    );
  }
}

export default BbsItem;
