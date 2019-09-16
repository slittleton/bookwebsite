import React from 'react';

const Contact = React.forwardRef((props, contactRef) => {
  return(
    <div className="contact"  ref={contactRef}>
      Contact
    </div>
  )
})

export default Contact;