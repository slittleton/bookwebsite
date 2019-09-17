import React from "react";
import "../css/home.css";

import bordertop from "../assets/img/border-main-top-4.png";
import borderbottom from "../assets/img/border-main-bottom-2.png";
import cover from "../assets/img/boogey-cov.png";
import back from "../assets/img/boogey-back.png";

const Home = React.forwardRef((props, homeRef) => {
  return (
    <div className="home" ref={homeRef}>
      <div className="banner-container">
        <div className="title-main">The Boogeyman Invesitagtion</div>
      </div>

      <div className="main-img">
        <div className="border">
          <img src={bordertop} alt="" className="banner-decor" />
        </div>

        <div className="covers">
        <img src={cover} alt="" className="cover" />
        <img src={back} alt="" className="cover" />

        </div>

        <div className="border">
          <img src={borderbottom} alt="" className="banner-decor" />
        </div>
      </div>
    </div>
  );
});

export default Home;
