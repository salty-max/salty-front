/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image, type, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            url
            title
            description
            author
            twitterHandle
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const metaTitle = title || site.siteMetadata.title;

  const metaUrl = url || site.siteMetadata.url;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`${metaTitle} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:title',
          content: `New article 👉 ${metaTitle}`,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.url}${image}`,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitterHandle,
        },
        {
          name: 'twitter:title',
          content: `New article 👉 ${metaTitle}`,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      script={[
        {
          src: 'https://kit.fontawesome.com/b0e78de94e.js',
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: 'Salt & Paper',
  image: '',
  type: 'website',
  url: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;
