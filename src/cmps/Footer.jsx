import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} [Ido Feffer]. All rights reserved.</p>
        <div className="social-links">
          {/* Add social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;