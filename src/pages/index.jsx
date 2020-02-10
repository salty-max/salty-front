import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlesComponent from '../components/articles';

import Stripes from '../images/stripes-light.png';

import '../assets/scss/main.scss';

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Accueil" />
      <StaticQuery
        query={graphql`
          query {
            allStrapiArticle {
              edges {
                node {
                  strapiId
                  title
                  subtitle
                  slug
                  content
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
          <section
            style={{ backgroundImage: `url(${Stripes})` }}
            className="index-page section"
          >
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </section>
        )}
      />
    </Layout>
  </>
);

export default IndexPage;
