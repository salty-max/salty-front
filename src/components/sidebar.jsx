import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <aside className="menu">
      <p className="menu-label">{t('sidebar.categories')}</p>
      <ul className="menu-list">
        <StaticQuery
          query={graphql`
            query {
              allStrapiCategory {
                edges {
                  node {
                    strapiId
                    name
                    slug
                    icon
                  }
                }
              }
            }
          `}
          render={(data) =>
            data.allStrapiCategory.edges.map(
              ({ node: { strapiId, name, slug, icon } }) => (
                <li key={strapiId}>
                  <Link to={`/category/${slug}`}>
                    <span className="icon mr">
                      <i className={`fas fa-${icon}`} />
                    </span>
                    <span>{name}</span>
                  </Link>
                </li>
              ),
            )
          }
        />
      </ul>
      <p className="menu-label">{t('sidebar.latests')}</p>
      <ul className="menu-list">
        <li>
          <a href="/">
            <span className="mr tag is-success">Gaming</span>
            <span>For Hodor</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="mr tag is-success">Gaming</span>
            <span>Toss a coin to...</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
