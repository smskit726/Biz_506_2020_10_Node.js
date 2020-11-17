import React, { Component } from "react";
import BbsInsert from "../main/BbsInsert";
import BbsList from "../main/BbsList";
import axios from "axios";

const BBS_INSERT_URL = "/api/insert";
const BBS_UPDATE_URL = "/api/update";
const BBS_FETCH_URL = "/api/bbsList";
const BBS_FIND_BY_ID = "/api/view/";

class BbsMain extends Component {
  timer = "";
  state = {
    isFetch: false,
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
    bbsData: {
      isUpdate: false,
      b_id: 0,
      b_writer: "",
      b_subject: "",
      b_content: "",
      b_date_time: "",
    },
  };

  componentDidMount() {
    this.fetchBbsList();
    // setInterval(callback, time)
    // 최초에 callback함수가 실행되고 이후에 time 만큼 경과하면
    // 또 callback함수를 계속해서 실행하라
    // this.timer = setInterval(() => this.fetchBbsList(), 5000);
  }

  // react에서 setInterval()를 사용하여 어떤 함수를 실행하면
  // 반드시 WillUnmount() 메서드에서
  // react가 종료되기 전에 timer를 제거해주어야 한다.
  componentWillUnmount() {
    this.timer = null;
  }

  // JS에 표준으로 내장된 ajax method
  fetchBbsList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BBS_FETCH_URL)
      .then((res) => {
        // response 객체가 통째로 수신된 상태
        // response 객체 중에서 body부분만 json으로 변환되어
        // return
        return res.json();
      })
      .then((result) => {
        // 앞의 then에서 return 한 데이터를 result 변수에 받고
        // bbsList에 데이터를 적용
        this.setState({
          bbsList: result,
          isFetch: false,
        });
      })
      .catch((err) => console.log(err));
  };

  bbsSave = (bbsData) => {
    const { b_id, b_writer, b_subject, b_content, isUpdate } = bbsData;
    const url = isUpdate ? BBS_UPDATE_URL : BBS_INSERT_URL;
    const b_date_time = isUpdate ? bbsData.b_date_time : Date().toString;

    axios
      .post(url, {
        b_id: b_id,
        b_writer: b_writer,
        b_subject: b_subject,
        b_content: b_content,
        b_date_time: b_date_time,
      })
      .then((result) => {
        console.log(result);
        this.fetchBbsList();
      })
      .catch((err) => console.log(err));
  };

  handleUpdate = (id) => {
    fetch(BBS_FIND_BY_ID + id)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        // 서버로부터 가져온 게시판 데이터를 bbsData에 풀어놓고
        // isUpdate 칼럼만 true로 만들어라
        this.setState({ bbsData: { ...result, isUpdate: true } });
        console.log(this.state.bbsData);
      });
  };
  render() {
    const { state, bbsSave, fetchBbsList, handleUpdate } = this;
    const { bbsList, bbsData, isFetch } = state;
    return (
      <div className="bbs-main">
        <BbsInsert bbsSave={bbsSave} bbsData={bbsData} />
        <p>{isFetch ? "데이터 가져오는 중..." : "완료"}</p>
        <BbsList
          bbsList={bbsList}
          fetchBbs={fetchBbsList}
          handleUpdate={handleUpdate}
        />
      </div>
    );
  }
}

export default BbsMain;
