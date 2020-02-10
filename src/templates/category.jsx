import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ArticlesComponent from '../components/articles';
import SEO from '../components/seo';
import Layout from '../components/layout';

import Stripes from '../images/stripes-light.png';

export const query = graphql`
  query Category($id: String!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          subtitle
          slug
          category {
            name
          }
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
      icon
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const { name, icon } = data.category;

  return (
    <Layout>
      <SEO title={name} />
      <section
        style={{ backgroundImage: `url(${Stripes})` }}
        className="section category-page mt-0 px-0"
      >
        <div className="category-title">
          <div className="category-title-mask" />
          <h1 className="title is-size-2 has-text-centered">
            <span className="icon mr-2">
              <i className={`fas fa-${icon}`} />
            </span>
            <span>{name}</span>
          </h1>
        </div>
        <ArticlesComponent articles={articles} />
      </section>
    </Layout>
  );
};

Category.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default Category;
