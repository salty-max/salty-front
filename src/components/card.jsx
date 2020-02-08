import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Card = ({ article }) => (
  <Link to={`/article/${article.node.strapiId}`} className="uk-link-reset">
    <div className="uk-card uk-card-muted">
      <div className="uk-card-media-top">
        <Img fixed={article.node.image.childImageSharp.fixed} />
      </div>
      <div className="uk-card-body">
        <p className="category" className="uk-text-uppercase">
          {article.node.category.name}
        </p>
        <p className="title" className="uk-text-large">
          {article.node.title}
        </p>
      </div>
    </div>
  </Link>
);

export default Card;
