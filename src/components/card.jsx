import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment/locale/fr';

import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Card = ({ article: { node } }) => {
  const {
    slug,
    title,
    subtitle,
    image,
    category,
    published_at: publishedAt,
  } = node;

  return (
    <div className="card">
      <Link to={`/article/${slug}`}>
        <div className="card-image">
          <figure className="image">
            <Img
              className="image-wrapper"
              fluid={image.childImageSharp.fluid}
            />
          </figure>
          <div className="card-title">
            <div className="card-title-mask" />
            <h2 className="is-size-4">{title}</h2>
          </div>
        </div>
      </Link>
      <div className="card-content">
        <div className="content">
          <div className="content-header">
            <div className="categories">
              <Link to={`/category/${category.slug}`} className="tag is-small">
                <span className="icon">
                  <i className="fas fa-tag" />
                </span>
                <span>{category.name}</span>
              </Link>
            </div>
            <Moment className="mx date" format="Do MMMM YYYY">
              {publishedAt}
            </Moment>
          </div>
          <div className="excerpt">{subtitle}</div>
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
