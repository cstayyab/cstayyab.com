import React from "react";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { GiCook, GiPhotoCamera, GiHiking } from "react-icons/gi";
import { Spoiler } from "react-spoiler-tag";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Tayyab Sheikh </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am (<Spoiler text="pretending to be" textColor="#c770f0" hiddenColor="#c770f0" revealedColor="transparent" />) a professional <span className="purple">Software Developer</span> in Industry for about 3 years now.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <a href={"https://www.clickasnap.com/cstayyab"} target="_blank"  rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}}><GiPhotoCamera size={"32px"} /> Photography 🔗 </a>
            </li>
            <li className="about-activity">
              <GiCook size={"32px"} /> Cooking
            </li>
            <li className="about-activity">
              <GiHiking size={"32px"} /> Hiking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
