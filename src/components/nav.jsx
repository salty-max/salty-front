import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Nav = () => {
  const [menuActive, toggleMenuActive] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  const { categories, socials } = useStaticQuery(
    graphql`
      query {
        socials: allStrapiSocial {
          edges {
            node {
              strapiId
              link
              icon
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
              icon
              slug
            }
          }
        }
      }
    `,
  );

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
          <Link className="navbar-item" to="/">
            {'<Home />'}
          </Link>
          <Link className="navbar-item" to="/about">
            {'<About />'}
          </Link>
          <div
            className={`navbar-item has-dropdown ${categoriesDropdownOpen &&
              'is-active'}`}
          >
            <a
              onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
              className="navbar-link"
            >
              Categories
            </a>
            <div className="navbar-dropdown">
              {categories.edges.map(
                ({ node: { strapiId, slug, name, icon } }) => (
                  <Link
                    className="navbar-item"
                    key={strapiId}
                    to={`/node/${slug}`}
                  >
                    <span className="icon">
                      <i className={`fas fa-${icon}`} />
                    </span>
                    <span>{name}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="navbar-end">
          {socials.edges.map(({ node: { strapiId, link, icon } }) => (
            <a
              key={strapiId}
              className="navbar-item social"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon mr">
                <i className={`${icon}`} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
