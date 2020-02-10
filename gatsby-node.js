const fs = require('fs-extra');
const path = require('path');

exports.onPostBootstrap = () => {
  console.log('Copying locales');
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales'),
  );
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges;
  const categories = result.data.categories.edges;

  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.slug}`,
      component: require.resolve('./src/templates/article.jsx'),
      context: {
        id: article.node.strapiId,
      },
    });
  });

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.slug}`,
      component: require.resolve('./src/templates/category.jsx'),
      context: {
        id: category.node.strapiId,
      },
    });
  });
};
