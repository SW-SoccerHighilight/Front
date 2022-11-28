import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Play = () => {
  return (
    <div>
      <div className="item">
        <div>
          <h2>1.</h2>
        </div>
        <div>
          <h3>이미지</h3>
        </div>
        <div>
          <h2>한국 vs 스페인</h2>
          <h4>2022년 11월 15일</h4>
        </div>
        <div>
          <h1>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Play;
