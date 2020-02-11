import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlesComponent from '../components/articles';

import '../assets/scss/main.scss';

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Accueil" />
      <StaticQuery
        query={graphql`
          query {
            allStrapiArticle(sort: { fields: published_at, order: DESC }) {
              edges {
                node {
                  strapiId
                  title
                  subtitle
                  slug
                  content
                  published_at
                  category {
                    slug
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
          }
        `}
        render={(data) => (
          <section className="index-page page">
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </section>
        )}
      />
    </Layout>
  </>
);

export default IndexPage;
