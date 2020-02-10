import React from 'react';
import PropTypes from 'prop-types';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Share from './share';

const Card = ({ article: { node } }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            url
            twitterHandle
          }
        }
      }
    `,
  );

  return (
    <div className="card">
      <Link to={`/article/${node.slug}`}>
        <div className="card-image">
          <figure className="image">
            <Img
              className="image-wrapper"
              fluid={node.image.childImageSharp.fluid}
            />
          </figure>
          <div className="card-title">
            <div className="card-title-mask" />
            <h2 className="is-size-4">{node.title}</h2>
          </div>
        </div>
      </Link>
      <div className="card-content">
        <div className="content">
          <div className="content-header">
            <div className="categories">
              <Link
                to={`/category/${node.category.slug}`}
                className="tag is-small"
              >
                <span className="icon">
                  <i className="fas fa-tag" />
                </span>
                <span>{node.category.name}</span>
              </Link>
            </div>
            <Share
              url={siteMetadata.url}
              title={node.title}
              twitterHandle={siteMetadata.twitterHandle}
            />
          </div>
          <div className="excerpt">{node.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  article: PropTypes.shape({
    node: PropTypes.shape.isRequired,
  }).isRequired,
};

export default Card;
