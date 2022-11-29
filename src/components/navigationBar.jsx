import { useNavigate } from "react-router-dom";
import { Button, Row, Col, ButtonGroup } from "react-bootstrap";

const NavigationBar = () => {
    const navigate = useNavigate();
    const goToUser = () => {
      navigate(`/bookmark`)
    }
    const goToMain = () => {
      navigate(`/homepage`)
    }

    const goToLogin = () => {
      navigate(`/login`)
    }
  return (
    <div>
      <Row>
        <Col className ="logo-main" lg = {4}>
        <div className="logo">Sports</div>
        <div className="logo_back"> now</div>
        </Col>
        <Col className = "navbar" lg = {8}>
        <ButtonGroup className="main-button"> 
        <Button variant="dark" onClick={goToMain}>홈</Button>
        </ButtonGroup>
        <ButtonGroup className="main-button"> 
        <Button variant="dark" onClick={goToMain}>일정</Button>
        </ButtonGroup>
        <ButtonGroup className="main-button"> 
        <Button variant="dark" onClick={goToUser}>내 정보</Button>
        </ButtonGroup>
        <ButtonGroup className="main-button"> 
        <Button variant="dark" onClick={goToLogin}>로그인</Button>
        </ButtonGroup>
        </Col>
        </Row>
        </div>
  );
};

export default NavigationBar;
