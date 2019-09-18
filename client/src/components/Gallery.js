import React, { useState } from "react";
import "../css/gallery.css";

const API = process.env.REACT_APP_API_URL;

let pageNums = Array.from(Array(38).keys());

const Gallery = React.forwardRef((props, galleryRef) => {
  const [pageNum, setPageNum] = useState(0);

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="title-container">
        <div className="title">Gallery</div>
      </div>
      <div className="text-container">
        <div className="text">
          You can read the entire book here or download it to check it out
          offline.
        </div>
      </div>

      <div className="main-img">
        <img src={`${API}/pages/${pageNum}.jpg`} alt="page" />
      </div>

      <div className="img-nav-container">
        <div className="img-nav">
          <div className="img-grid">
            {pageNums.map(num => {
              return (
                <div
                  className="page"
                  onClick={() => {
                    setPageNum(num);
                  }}
                >
                  
                  <img
                    src={`${API}/pages/${num}.jpg`}
                    alt="page"
                    className="thumb"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gallery;
