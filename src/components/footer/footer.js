import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Made with ❤️ by </span>
        <a 
          href="https://github.com/alanhe421" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Alan He
        </a>
        <span className="separator">|</span>
        <a 
          href="https://github.com/alanhe421/markdown-to-medium" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer; 