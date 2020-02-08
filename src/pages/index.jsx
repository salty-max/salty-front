import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import ArticlesComponent from '../components/articles';

import '../assets/scss/main.scss';

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  childImageSharp {
                    fixed(width: 200, height: 125) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Salt & Paper</h1>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
);

export default IndexPage;
