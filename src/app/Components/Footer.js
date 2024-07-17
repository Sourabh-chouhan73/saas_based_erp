// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading company in providing the best quality products and services.
              Our mission is to bring satisfaction to our customers.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              City, State 12345<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
