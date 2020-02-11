import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

const Articles = ({ articles, isCategory }) => {
  const leftArticlesCount = 2;
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  const IndexArticles = () => (
    <section className="articles section">
      <h1 className="pl title is-size-4">Fresh batch</h1>
      <div className="grid-2">
        {leftArticles.map((article) => (
          <Card key={`article__${article.node.id}`} article={article} />
        ))}
      </div>
      <h2 className="pl pt-2 subtitle is-size-4">More reading</h2>
      <div className="grid-3">
        {rightArticles.map((article) => (
          <Card key={`article__${article.node.id}`} article={article} />
        ))}
      </div>
    </section>
  );

  const CategoryArticles = () => (
    <div className="category-articles section grid-2">
      {articles.map((article) => (
        <Card article={article} />
      ))}
    </div>
  );

  return isCategory ? <CategoryArticles /> : <IndexArticles />;
};

Articles.defaultProps = {
  isCategory: false,
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  isCategory: PropTypes.bool,
};

export default Articles;
