import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div
      className="contact-us"
      style={{
        backgroundColor: props.mode === "dark" ? "#787a49" : "#faf5fa",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>Contact Us</h1>
      <div className="info">
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Main St, Anytown, USA</p>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <i className="fas fa-envelope"></i>
          <p>hello@reallygreatsite.com</p>
        </div>
        <div>
          <i className="fas fa-globe"></i>
          <p>www.reallygreatsite.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
