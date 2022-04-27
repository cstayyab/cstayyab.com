import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import projects from "../../Assets/Projects/projects.json";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard {...project}
                  // imgPath={import(`../../Assets/Projects/${project.imgPath}`)}
                  // isBlog={project.isBlog}
                  // title={project.title}
                  // description={project.description}
                  // link={project.link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
