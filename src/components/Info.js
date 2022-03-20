import React from "react";
import "../App.css";
import "../index.css";
import "../Info.css";
import Video from "./homevideo";
import AudioButton from "./audio";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Info() {
  return (
      <Container fluid className="justify-content-center">
        <Row className="h-50 pb-5">
            <Col className="d-flex justify-content-center">
            <Card>
                <Video />   
            </Card> 
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
