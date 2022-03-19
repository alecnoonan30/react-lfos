import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";

export default function SIS() {
  return (
    <Container className="pb-5">
      <Col className="align-items-end">
        <a href="/things">
          <Image className="arrow" src="./images/arrowforthings.png" alt="" />
        </a>
      </Col>
      <Row>
        <div className="col-sm-6">
          <Carousel variant="dark" interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/shibuyacapf.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/shibwhite1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/shibtwopeople.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/shibwhite2.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/shibblack1.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-6 d-flex align-items-center">
          <Row>
            <h4 className="shibcapheader">
              "Somewhere in Shibuya" Hat, Black/White
            </h4>
            <p className="shibcapdesc">
              I made a hat inspired by Tokyo's club scene in the year 2021.
              During Tokyo's 2021 strict regulation for COVID, clubs had no
              option but to go deeper than underground. “Somewhere in Shibuya”
              was written on every party flyer to give people a hint of where
              secret parties were held. It was first a way to limit the people,
              but once they realized where “Somewhere in Shibuya” was, it became
              more of a trendy phrase to use during that time.
            </p>
          </Row>
        </div>
      </Row>
    </Container>
  );
}
