import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

const Articles = ({ articles }) => {
  const leftArticlesCount = 2;
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <section className="articles section">
      <div className="tile is-ancestor">
        <div className="tile is-parent is-vertical">
          <div className="tile is-parent">
            {leftArticles.map((article) => (
              <div
                key={`article__${article.node.id}`}
                className="tile is-parent is-6"
              >
                <div className="tile is-child">
                  <Card article={article} />
                </div>
              </div>
            ))}
          </div>
          <div className="tile is-parent">
            {rightArticles.map((article) => (
              <div
                key={`article__${article.node.id}`}
                className="tile is-parent is-4"
              >
                <div className="tile is-child">
                  <Card article={article} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Articles;
