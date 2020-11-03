import React, { useState, useRef } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";
/*
id, name, number의 요소를 갖는 JSON 객체를 3개 포함하는 배열을 선언과 생성
*/
const PhoneMain = () => {
  // react에서 변수를 선언할때 state형태로 변수를 선언한다
  // state는 react엔진이 이 변수의 값이 변하는 가를 감시하고 있다가
  // 어느순간 값이 변화가 되면 화면을 다시 rendering을 수행한다.
  // useState() 함수는 변수를 선언하고 state 형태로 React엔진에 등록하는
  // 일을 수행한다.
  // useState(값) : state형 변수를 선언하고 초기화시키는 일을 수행
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "010-1234-1234" },
    { id: 2, name: "홍길동", number: "010-1234-5678" },
    { id: 3, name: "성춘향", number: "010-5678-5678" },
  ]);

  // onClickSave라는 함수를 Main에서 선언을 하고
  const onClickSave = (name, number) => {
    // window.alert("저장버튼이 클릭됨");
    setPhoneBook([
      ...phoneBook,
      { id: phoneId.current++, name: { name }, number: { number } },
    ]);
  };
  /*
  useRef(초기값) 함수를 사용하여 Ref 객체를 선언하면
  current라는 속성이 자동으로 생성되고 초기화된다.
  변수.current 속성은 state 변수와 달리 아무곳에서나 변수 값을 수정할 수 있다.
  Ref 객체는 값이 변경이 되더라도 React에서 재 rendering 하지 않는다.
  */
  const phoneId = useRef(4);

  /*
  child Component에 변수와 함수 전달하기
  변수와 함수를 전달하는 방법은 같은방법으로 하면 된다.
  전달할 변수 = {값}, 전달할 이름 = {함수 이름}

  facade 패턴, React패턴
  parent Component에서 선언된 state 변수를 child로 전달을 하게 되면
  child에서는 ReadOnly 상태가 되어 변수를 변경할 수 없다.
  변수를 변경하려면 변경하는 함수를 전달하고 그 함수를 실행하도록 코딩한다.
  */
  return (
    <>
      <PhoneInsert onClickSave={onClickSave} />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
