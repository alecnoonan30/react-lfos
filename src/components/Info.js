import React from "react";
import "../App.css";
import "../index.css";
import "../Info.css";
import Video from "./homevideo";
import AudioButton from "./audio";
import { Container, Row, Col } from "react-bootstrap";

export default function Info() {
  return (
      <Container className="justify-content-center">
        <Row className="h-50 pb-5">
            <Col className="d-flex justify-content-center">
                <Video />   
            </Col>     
        </Row>
        <br></br>
        <br></br>
        <Row>
            <Col className="d-flex justify-content-center">
                <AudioButton />   
            </Col>            
        </Row>
        <br></br>
      </Container>
  );
}
