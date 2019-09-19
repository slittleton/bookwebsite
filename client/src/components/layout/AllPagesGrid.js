import React from 'react'

function AllPagesGrid({API, pageNums, setPageNum}) {
  return (
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
  )
}

export default AllPagesGrid
