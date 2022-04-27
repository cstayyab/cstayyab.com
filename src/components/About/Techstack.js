import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCoffeescript,
  DiPhp,
} from "react-icons/di";
import {
  SiPostgresql,
  SiJavascript
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CoffeeScript">
        <DiCoffeescript title="CoffeeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <DiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus title="C++" />
      </Col>
    </Row>
  );
}

export default Techstack;
