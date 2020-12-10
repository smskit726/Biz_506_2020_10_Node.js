/**
 * node-schedule 을 사용하여 일정 시간마다
 * 노선정보를 가져와서 DB에 저장하도록 수행할 것!
 */
import schedule from "node-schedule";
import gjDataVO from "../models/GJStation.js";
import request from "request";

import {
  GO_DATA_SERVICE_KEY,
  GJ_BUS_STATION_URL,
} from "../modules/Data.go.kr.js";

const execStation = () => {
  // UTF-8 로 URI Encoding을 수행하기
  const goDataServiceKey = encodeURIComponent(GO_DATA_SERVICE_KEY);
  const queryString =
    GJ_BUS_STATION_URL +
    "?" +
    encodeURIComponent("ServiceKey") +
    "=" +
    goDataServiceKey;

  const reqOption = {
    url: queryString,
    method: "GET",
  };

  // 시간 추정
  console.time("Station");
  // request를 통해서 reqOption에 담긴 방식으로 데이터를 요청하면 body에 데이터가 담겨서 사용할 준비가 된다.
  request(reqOption, async (err, response, body) => {
    const data = JSON.parse(body);
    const resCode = data.RESULT.RESULT_CODE;
    const resMessage = data.RESULT.RESULT_MSG;

    console.log(resCode, resMessage);

    // 노선정보 데이터 추출
    const station_list = data.STATION_LIST;
    console.log("노선정보 데이터 개수 : ", station_list.length);

    // tbl_gjbus에 담긴 데이터를 모두 지워라
    await gjDataVO.deleteMany();
    await gjDataVO
      .insertMany(station_list)
      .then((result) => console.log("DB INSERT OK"))
      .catch((err) => console.log("DB INSERT ERROR : ", err));
  });
  console.timeEnd("Station");
};

export const bis_Schedule = () => {
  // cron type 스케쥴러
  // 초 분 시 일 월 요일 단위로 스케쥴링을 수행하는 코드
  // 일정한 시간에 execStation 함수를 실행하여
  // openAPI로부터 데이터를 가져와서 db에 insert를 수행한다.
  // (매일 00시 00분 00초) execStation 실행!
  schedule.scheduleJob("0 0 0 * * *", execStation);
};

// 개발을 위한 execStation 즉시 실행 export
export const justExec = () => execStation();
