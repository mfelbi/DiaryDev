import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer custom-footer">
      <div className="container">
        <p className="mb-0">© 2024 DiaryDev. All rights reserved.</p>
        <p className="mb-0">
          <a href="/privacy" className="text-white">Privacy Policy</a> | 
          <a href="/terms" className="text-white"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
