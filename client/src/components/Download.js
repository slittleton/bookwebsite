import React from "react";
import "../css/download.css";

const API = process.env.REACT_APP_API_URL;

const Download = React.forwardRef((props, downloadRef) => {
  return (
    <div className="download" ref={downloadRef}>
      <div className="title-container">
        <div className="title">Download</div>
      </div>
      <div className="text-container">
        <div className="shop-text">
          You can get a free digital copy of The Boogeyman Investigation right
          here:{" "}
          <a className="link" href={`${API}/boogymaninvestigation.mobi`}>
            Download The Book
          </a>
        </div>
      </div>
    </div>
  );
});

export default Download;
