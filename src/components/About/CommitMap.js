import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function CommitMap() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Open-Source</strong> Development
      </h1>
      <GitHubCalendar
        username="cstayyab"
        blockSize={15}
        blockMargin={3}
        color="#c084f5"
        fontSize={16}
        blockRadius={15}
      />
    </Row>
  );
}

export default CommitMap;
