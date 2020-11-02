import React, { useState } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "010-1234-1234" },
    { id: 2, name: "홍길동", number: "010-1234-5678" },
    { id: 3, name: "성춘향", number: "010-5678-5678" },
  ]);
  return (
    <>
      <PhoneInsert />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
