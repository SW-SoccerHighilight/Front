import React from "react";
import Play from "../components/Play";
import User from "../components/User";
import "../style/bookmark.css";
import { Container, Row, Col } from "react-bootstrap";

function Bookmarkpage() {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col lg={3}>
            <User />
          </Col>
          <Col lg={9}>
            <Play />
            <Play />
            <Play />
            <Play />
            <Play />
            <Play />
            <Play />
            <Play />
            <Play />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bookmarkpage;
