import React from "react";
import { NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PlayCard = ({ play }) => {
  const navigate = useNavigate();

  return (
    <div className="play-card">
      <img src="" />
      <div>경기 : {play?.title}</div>
      <div>날짜 : {play?.date}</div>
      <div>추천수 : {play?.recommentRate}</div>
    </div>
  );
};

export default PlayCard;
