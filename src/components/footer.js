import React from 'react';

const Footer = () => (
  <footer className="footer" style={{width: '100%', height: '11rem', position: 'absolute', bottom: '0'}}>
    <div className="content has-text-centered">
      <p>
        <strong>© {new Date().getFullYear()} Mac Gaming Central.</strong> All
        rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
