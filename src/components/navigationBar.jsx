import style from '../style/navigationBar.module.css';

const NavigationBar = (props) => {
  return (
      <div className={style.section}>
        <span className={style.logo}>
          <span className={style.logo_front}>Sport </span>
          <span className={style.logo_back}>now</span>
        </span>
        <span className={style.navbar}>홈</span>
        <span className={style.navbar}>일정</span>
        <span className={style.navbar}>검색</span>
        <span className={style.navbar}>내 정보</span>
      </div>
  );
}

export default NavigationBar;