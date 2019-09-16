import React from 'react';

const Gallery =  React.forwardRef((props, galleryRef) => {
  return(
    <div className="gallery"  ref={galleryRef}>
      Gallery
    </div>
  )
})

export default Gallery;