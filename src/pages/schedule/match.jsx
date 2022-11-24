import React from "react";
import style from "../../style/match.module.css";
import Detail from "./detail";

const Match = ({ game }) => {
  console.log(game);
  return (
    <div className={style.section}>
      <div className={style.title}>리그A</div>
      <ul className={style.match}>
        <li className={style.detail}>
          <span>시간</span>
          <span>경기</span>
          <span>중계 정보</span>
        </li>
        {/* <li className={style.detail}> */}
        {game.map((data) => (
          <Detail data={data} />
        ))}
        {/* </li> */}
      </ul>
    </div>
  );
};

export default Match;
