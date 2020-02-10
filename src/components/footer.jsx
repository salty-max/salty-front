import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer className="footer is-dark">
    <div className="content">
      <p>
        <span>&copy;</span>
        <span>{moment(Date.now()).format('YYYY')}</span>
        <span>- Maxime Blanc</span>
      </p>
      <div className="socials">
        <a className="social" href="github.com/max-jellycat">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
        </a>
        <a className="social" href="twitter.com/salty_max">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
