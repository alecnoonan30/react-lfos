import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Alert } from "react-bootstrap";
import Insta from "./instabutton";
import Soundcloud from "./soundcloudbutton";

const Result = () => {
    return (
    <Alert className="form-control" variant="secondary">
        <p className="alerttext">Thank you! Your inquiry sent successfully. I will reach out to you shortly.</p>
    </Alert>
    )
}

export default function ContactUs() {

    const [result,showResult] = useState(false)
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_f8lh4ri', 'template_sr47u4d', e.target, 'uDgH5pvreSz7puc7T')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
    }

    useEffect(() => {
        if(result === true) {
            setTimeout(() => {
                showResult(false);
            }, 6000);
        }
    }, [result]);

    return (
        <>
            <Container className="backpic" fluid="md" responsive>
            <h2 className="contheader">Contact Us</h2>
                <form onSubmit={sendEmail}>
                    <Row>
                        <Col className="col-9 pt-4 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </Col>
                        <Col className="col-9 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </Col>
                        <Col className="col-9 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </Col>
                        <Col className="col-9 form-group pt-3 mx-auto">
                            <textarea className="form-control" id="tarea" cols="10" rows="8" placeholder="Your Inquiry" name="message"></textarea>
                        </Col>
                        <Col className="col-9 pt-3 pb-4 mx-auto">
                            <input type="submit" className="btn btn-secondary form-control" value="Submit"></input>
                        </Col>
                    </Row>
                    {result ? <Result /> : null} 
                </form>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <Container className="containsocials">
                <Row className="d-flex justify-content-center">
                    <Col className="d-flex justify-content-center">
                        <Insta />
                        <Soundcloud />
                    </Col>
                </Row>
            </Container>
            <br></br>
        </>
    )
}
