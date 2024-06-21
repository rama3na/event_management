import React from 'react';

function Footer() {
  const footerStyle = {
    minHeight: '100vh',
    height: '300px', // Set the height to 300px
    backgroundColor: '#333', // Example background color
    color: 'white', // Example text color
    textAlign: 'center',
    paddingTop: '20px', // Add some padding if needed
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@manager.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media:</p>
            <a href="#" className="social-icon ">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
        <hr />
        <p>&copy; {new Date().getFullYear()} Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
