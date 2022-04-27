import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  let tweetHref = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(`ඞ Imposter Alert!\n@CSTayyab has been pretending to be a Software Developer for about ${(new Date()).getFullYear()-2019} years now.\nCheck his work on https://cstayyab.com`)
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started learning computer programming in my early teenage and I have been pretending to be 
              (<a className="purple" href={tweetHref} target="_blank" rel="noreferrer">
                Report me on Twitter</a>) a professional <span className="purple">Software Developer</span> in the industry for almost <span className="purple">3 years</span> now. 🤷‍♂️
              <br />
              <br />I have been able to write the infamous <span className="purple">Hello, World!</span> in a few languages including <br/>
              <i>
                <b className="purple"> Javascript, Python and PHP </b>
              </i>
              <br />
              <br />
              I take interest in building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> along with some {" "}<br/>
                <b className="purple">
                  Mobile App Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Svelte</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cstayyab"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/CSTayyab"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cstayyab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cstayyab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
