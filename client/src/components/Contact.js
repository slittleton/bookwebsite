import React from "react";
import "../css/contact.css";

const Contact = React.forwardRef((props, contactRef) => {
  return (
    <div className="contact" ref={contactRef}>
      <div className="title">Contact</div>
      <div className="subtitle lg-margin">
        Email:{" "}
        <a className="email" href="mailto:	katiaandscott@gmail.com">
          katiaandscott@gmail.com
        </a>
      </div>

      {/* <div className="contact-form">
        <form className="form">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />
          </div>
        </form>
      </div> */}
    </div>
  );
});

export default Contact;
