import React from "react";
import "../css/about.css";
import authors from "../assets/img/authors-1.jpg";

const About = React.forwardRef((props, aboutRef) => {
  return (
    <div className="about" ref={aboutRef}>
      <div className="about-container">
        <div className="authors">
          <div className="title">About The Authors</div>
          <div className="subtitle">Katia Quirarte and Scott Littleton</div>
          <div className="text">
            As parents to a beautiful little girl, we feel the importance of
            having available fun books that promote critical thinking and
            science. Each of us hold a MA in biological anthropology. We hold
            the philosophical world view that reason and science provide the
            right tools to help us understand the world around us. With this in
            mind we have decided to write books that we hope everyone can enjoy.
          </div>
        </div>
        <img src={authors} alt="authors pic" className="authors-img" />
      </div>
    </div>
  );
});

export default About;
