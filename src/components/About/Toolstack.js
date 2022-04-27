import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiLinode,
  SiNetlify,
  SiAmazonaws,
  SiVagrant,
  SiAnsible
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Amazon AWS">
        <SiAmazonaws title="Amazon AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vagrant">
        <SiVagrant title="Vagrant" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ansible">
        <SiAnsible title="Ansible" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linode">
        <SiLinode title="Linode" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku title="Heroku" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify title="Netlify" />
      </Col>
    </Row>
  );
}

export default Toolstack;
