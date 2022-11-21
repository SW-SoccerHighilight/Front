import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../style/signup.module.css";

const Signup = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const onNameHandler = (event) => {
    setName(event.target.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onPasswordCheckHandler = (event) => {
    setPasswordCheck(event.target.value);
  };

  const onSignupHandler = (event) => {
    // 이메일이 중복되는지 확인 코드
    // 아이디 생성 코드
    if (password !== passwordCheck) {
      alert("비밀번호 불일치");
    }
  };
  const onCancleHandler = (event) => {
    navigate("/");
  };

  return (
    <div className={style.section}>
      <div className={style.login}>
        <div className={style.title}>
          <span>Sports </span>
          <span className={style.titlenow}>now</span>
        </div>
        <input
          type="text"
          className={style.input}
          placeholder="이름"
          onChange={onNameHandler}
          required
        />
        <input
          type="text"
          className={style.input}
          placeholder="이메일"
          onChange={onEmailHandler}
          required
        />
        <input
          type="password"
          className={style.input}
          placeholder="비밀번호"
          onChange={onPasswordHandler}
          required
        />
        <input
          type="password"
          className={style.input}
          placeholder="비밀번호 확인"
          onChange={onPasswordCheckHandler}
          required
        />
        <div className={style.btn}>
          <button className={style.btndetail} onClick={onSignupHandler}>
            회원 가입
          </button>
          <button className={style.btndetail} onClick={onCancleHandler}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
