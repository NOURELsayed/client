import React from "react";
import { FaLinkedinIn,FaFacebookF,FaTwitter,FaGithub } from "react-icons/fa";
import { Row, Container, Col, Image } from "react-bootstrap";
import "../styles/Footer.scss";
export default function AboutTeamWork() {
    function shoot() {
        alert("Great !");
      }
  return (
    <Container>
      <div className="team-section text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>

        {/* <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p> */}

        <Row>
          <Col lg={3} md={6} >
            <div className="avatar mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
            <p className="text-uppercase blue-text">
              <strong>Graphic designer</strong>
            </p>
            <p className="grey-text">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci sed quia non numquam modi tempora eius.
            </p>
            <ul className="list-unstyled mb-0">
            <FaFacebookF  className="social" size="20"/>
              <FaLinkedinIn  className="social" size="20" onClick={shoot}/>
              <FaTwitter className="social" size="20"/>
            </ul>
          </Col>

          <Col lg={3} md={6} >
            <div className="avatar mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
            <p className="text-uppercase blue-text">
              <strong>Web developer</strong>
            </p>
            <p className="grey-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              ipsa accusantium doloremque rem laudantium totam aperiam.
            </p>
            <ul class="list-unstyled mb-0">
            <FaFacebookF  className="social" size="20"/>
              <FaLinkedinIn  className="social" size="20" onClick={shoot}/>
              <FaTwitter className="social" size="20"/>
            </ul>
          </Col>

          <Col lg={3} md={6} >
            <div className="avatar mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
            <p className="text-uppercase blue-text">
              <strong>Photographer</strong>
            </p>
            <p className="grey-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim est fugiat nulla id eu laborum.
            </p>
            <ul className="list-unstyled mb-0">
            <FaFacebookF  className="social" size="20"/>
              <FaLinkedinIn  className="social" size="20" onClick={shoot}/>
              <FaTwitter className="social" size="20"/>
            </ul>
          </Col>

          <Col lg={3} md={6} >
            <div className="avatar mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                class="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
            <p className="text-uppercase blue-text">
              <strong>Backend developer</strong>
            </p>
            <p className="grey-text">
              Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi
              qui consectetur totam officia voluptates perferendis voluptatibus
              aut.
            </p>
            <ul className="list-unstyled mb-0">
            <FaFacebookF  className="social" size="20"/>
              <FaLinkedinIn  className="social" size="20" onClick={shoot}/>
              <FaTwitter className="social" size="20"/>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
