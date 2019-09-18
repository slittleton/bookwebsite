import React from "react";
import "../css/gallery.css";

const API = process.env.REACT_APP_API_URL;
const pageNum = 1;

const Gallery = React.forwardRef((props, galleryRef) => {
  return (
    <div className="gallery" ref={galleryRef}>
      <div className="title-container">
        <div className="title">Gallery</div>
      </div>
      <div className="text-container">
        <div className="text">
          You can read the entire book here or download it to check it out offline.
        </div>
      </div>

      <div className="main-img">
        <img src={`${API}/pages/${pageNum}.jpg`} alt="page"/>
      </div>



    </div>
  );
});

export default Gallery;
