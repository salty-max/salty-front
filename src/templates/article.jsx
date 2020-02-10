import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import 'moment/locale/fr';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/share';

export const query = graphql`
  query ArticleQuery($id: String!) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      slug
      subtitle
      content
      published_at
      image {
        publicURL
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Article = ({ data }) => {
  const {
    image,
    title,
    slug,
    subtitle,
    content,
    published_at: publishedAt,
  } = data.strapiArticle;

  const { siteMetadata } = data.site;

  return (
    <Layout>
      <SEO
        title={title}
        description={subtitle}
        image={image.publicURL}
        type="article"
        url={`${siteMetadata.url}/article/${slug}`}
      />
      <article className="article">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${image.childImageSharp.fluid.src})`,
          }}
        >
          <h1 className="title is-size-1">{title}</h1>
        </div>
        <Share
          url={`${siteMetadata.url}/article/${slug}`}
          title={`🚨New article at Salt & Paper 👇\n${title}\n`}
          twitterHandle={siteMetadata.twitterHandle}
        />

        <section className="section">
          <div className="content">
            <ReactMarkdown
              source={content}
              transformImageUri={(uri) =>
                uri.startsWith('http')
                  ? uri
                  : `${process.env.IMAGE_BASE_URL}${uri}`
              }
              escapeHtml={false}
            />
            <p>
              <Moment format="Do MMMM YYYY">{publishedAt}</Moment>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default Article;
