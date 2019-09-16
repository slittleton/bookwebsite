import React from 'react';

const Download = React.forwardRef((props, downloadRef) => {
  return(
    <div className="download"  ref={downloadRef}>
      Download
    </div>
  )
})

export default Download;