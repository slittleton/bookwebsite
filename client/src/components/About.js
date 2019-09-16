import React from 'react';

const About = React.forwardRef((props, aboutRef) => {
  return(
    <div className="about" ref={aboutRef}>
      About
    </div>
  )
})

export default About;