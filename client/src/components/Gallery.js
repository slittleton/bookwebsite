import React, { useState } from "react";
import "../css/gallery.css";

const API = process.env.REACT_APP_API_URL;

let pageNums = Array.from(Array(39).keys());

const Gallery = React.forwardRef((props, galleryRef) => {
  const [pageNum, setPageNum] = useState(0);

  const pageChange = val => e => {
    if (val === "up") {
      if (pageNum <= 37) setPageNum(pageNum + 1);
    }
    if (val === "down") {
      if (pageNum >= 1) setPageNum(pageNum - 1);
    }
  };

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

      <div className="main-img-container">
        <img src={`${API}/pages/${pageNum}.jpg`} alt="page" className="main-img"/>
      </div>

      <div className="select-box">
        <div className="page-direction">
          <div className="page-select" onClick={pageChange("down")}>{`<-`}</div>
          <div className="page-num">{pageNum + 1}</div>
          <div className="page-select" onClick={pageChange("up")}>{`->`}</div>
        </div>
      </div>

      <div className="img-nav-container">
        <div className="img-nav">
          <div className="img-grid">
            {pageNums.map(num => {
              return (
                <div
                  key={num}
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
