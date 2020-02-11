import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer className="footer is-dark">
    <div className="content">
      <p>
        <span>&copy; </span>
        <span>{moment(Date.now()).format('YYYY')}</span>
        <span> - Maxime Blanc</span>
      </p>
      <p>
        <span>Made with </span>
        <i className="fas fa-heart has-text-danger" />
        <span> by Jellycat Studios</span>
      </p>
    </div>
  </footer>
);

export default Footer;
