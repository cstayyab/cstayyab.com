import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Chaos Engineer",
          "JavaScript Mechanic",
          "Backend Artist",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        typeSpeed: 100
      }}
    />
  );
}

export default Type;
