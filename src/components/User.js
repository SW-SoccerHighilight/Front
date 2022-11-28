import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  return (
    <div>
      <div className="user-icon">
        <h1>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </h1>

        <div className="text">
          <h1>사용자 이름</h1>
          <h1>내 댓글</h1>
          <h1>내가 추천한 동영상 수</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
