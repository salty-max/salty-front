import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Nav = () => {
  const [menuActive, toggleMenuActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Salt & Paper
        </Link>
        <a
          role="button"
          className={`navbar-burger ${menuActive && 'is-active'}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => toggleMenuActive(!menuActive)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={`navbar-menu ${menuActive && 'is-active'}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
        </div>
        <div className="navbar-end">
          <StaticQuery
            query={graphql`
              query {
                allStrapiSocial {
                  edges {
                    node {
                      strapiId
                      link
                      icon
                    }
                  }
                }
              }
            `}
            render={(data) =>
              data.allStrapiSocial.edges.map(
                ({ node: { strapiId, link, icon } }) => (
                  <a
                    key={strapiId}
                    className="navbar-item"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon mr">
                      <i className={`${icon}`} />
                    </span>
                  </a>
                ),
              )
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
