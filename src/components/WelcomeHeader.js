import React from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import cover from "../assets/cover.PNG";
import ParticlesComponent from "./Particles";
const WelcomeHeader = props => {
  return (
    <Jumbotron fluid className="introduction">
   
        <Container >
          <Row>
            <Col className="header-col">
              <h1>Student Medium</h1>
              <p>
                Studying resources for students, by students.
                <br />
                Student Medium provides you with resources you need to easily
                learn and improve your skills.
              </p>
              <Button variant="success" onClick={props.redirection} block>
                Sing Up Now
              </Button>
            </Col>
            <Col className="header-img">
              <Image src={cover} rounded />
            </Col>
          </Row>
        </Container>
        <ParticlesComponent style={{postion:'absolute'}}/>
    </Jumbotron>
  );
};

export default WelcomeHeader;
