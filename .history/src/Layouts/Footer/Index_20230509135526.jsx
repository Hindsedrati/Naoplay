import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>APISec University</h3>
          <p>Learn how to secure your APIs with us</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="/">Email</a></li>
            <li><a href="/">Phone</a></li>
            <li><a href="/">Address</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 APISec University. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
