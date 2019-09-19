import React from "react";
import "../../css/menu.css";
import homebtn from "../../assets/img/buttons/homebtn.png";
import aboutbtn from "../../assets/img/buttons/aboutbtn.png";
import gallerybtn from "../../assets/img/buttons/gallerybtn.png";
import downloadbtn from "../../assets/img/buttons/downloadbtn.png";
import shopbtn from "../../assets/img/buttons/shopbtn.png";
import contactbtn from "../../assets/img/buttons/contactbtn.png";

const Menu = props => {
  const {
    navClick,
    homeRef,
    aboutRef,
    contactRef,
    downloadRef,
    galleryRef,
    shopRef
  } = props;
  return (
    <div className="menu">
      <nav className="menu-bar">
        <ul className="list">
          <li onClick={() => navClick(homeRef)} className="list-item">
            <img src={homebtn} alt="button" className="img-btn" />
            <div className="small-menubtn">Home</div>
          </li>
          <li className="list-item" onClick={() => navClick(aboutRef)}>
            <img src={aboutbtn} alt="button" className="img-btn" />
            <div className="small-menubtn">About</div>
          </li>
          <li className="list-item" onClick={() => navClick(galleryRef)}>
            <img src={gallerybtn} alt="button" className="img-btn" />
            <div className="small-menubtn">Gallery</div>
          </li>
          <li className="list-item" onClick={() => navClick(downloadRef)}>
            <img src={downloadbtn} alt="button" className="img-btn" />
            <div className="small-menubtn">Download</div>
          </li>
          <li className="list-item" onClick={() => navClick(shopRef)}>
            <img src={shopbtn} alt="button" className="img-btn" />
            <div className="small-menubtn">Shop</div>
          </li>
          <li className="list-item" onClick={() => navClick(contactRef)}>
            <img src={contactbtn} alt="button" className="img-btn" />
            <div className="small-menubtn">Contact</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
