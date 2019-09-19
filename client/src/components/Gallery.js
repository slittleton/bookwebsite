import React, { useState } from "react";
import "../css/gallery.css";
import AllPagesGrid from "./layout/AllPagesGrid";

const API = process.env.REACT_APP_API_URL;

let pageNums = Array.from(Array(39).keys());

const Gallery = React.forwardRef((props, galleryRef) => {
  const [pageNum, setPageNum] = useState(0);
  const [thumbsPerPage, setThumbsPerPage] = useState(6);

  const lastThumb = pageNum + thumbsPerPage;
  const firstThumb = pageNum;
  const currentThumbs = pageNums.slice(firstThumb, lastThumb);

  const pageChange = val => e => {
    if (val === "up") {
      if (pageNum <= 37) setPageNum(pageNum + 1);
    }
    if (val === "down") {
      if (pageNum >= 1) setPageNum(pageNum - 1);
    }

    if (val === "thumb-up") {
      if (pageNum <= 33) setPageNum(pageNum + 5);
    }
    if (val === "thumb-down") {
      if (pageNum >= 5) setPageNum(pageNum - 5);
    }
  };

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="title-container mb-3">
        <div className="title ">Gallery</div>
      </div>
      <div className="text-container">
        <div className="text mb-3">
          You can read the entire book here or download it to check it out
          offline.
        </div>
      </div>

      <div className="main-img-container">
        <img
          src={`${API}/pages/${pageNum}.jpg`}
          alt="page"
          className="main-img"
        />
      </div>

      <div className="select-box">
        <div className="page-direction">
          <div className="page-select" onClick={pageChange("down")}>{`<-`}</div>
          <div className="page-num">{pageNum + 1}</div>
          <div className="page-select" onClick={pageChange("up")}>{`->`}</div>
        </div>
      </div>

      <div className="pages-outerbox">
        <div className="pages-grid">
          <div
            className="thumb-select"
            onClick={pageChange("thumb-down")}
          >{`<-`}</div>
          {currentThumbs.map(num => {
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
                <div className="thumb-num">{num + 1}</div>
              </div>
            );
          })}
          <div
            className="thumb-select"
            onClick={pageChange("thumb-up")}
          >{`->`}</div>
        </div>
      </div>

      {/* <AllPagesGrid setPageNum={setPageNum} pageNums={pageNums} API={API} /> */}
    </div>
  );
});

export default Gallery;
