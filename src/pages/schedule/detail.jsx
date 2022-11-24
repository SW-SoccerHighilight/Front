import React from "react";
import style from "../../style/detail.module.css";

const Detail = ({ data }) => {
  return (
    <li className={style.detail}>
      <span>{data.time}</span>
      <span>{data.play}</span>
      <span>{data.detail}</span>
    </li>
  );
};

export default Detail;
