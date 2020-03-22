import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function PostSEO({ post, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  
  const title = post.title.replace(/&nbsp;/g,' ');
  const description = post.excerpt.replace(/<[^>]*>/g, '');
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // Facebook
        {
          property: `og:url`,
          content: process.env.URL + path,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: post.featured_media.source_url,
        },
        // Twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: post.featured_media.source_url,
        }
      ]}
    >
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org/",
          "@type": "Article",
          "author": {
            "@type": "Organization",
            "name": "Mac Gaming Central"
          },
          "datePublished": "${post.date}",
          "dateModified": "${post.modified}",
          "headline": "${title}",
          "image": "${post.featured_media.source_url}",
          "publisher": {
            "@type": "Organization",
            "name": "Mac Gaming Central",
            "logo": {
              "@type": "ImageObject",
              "height": "60px",
              "url": "${process.env.URL}/images/amp-logo.png",
              "width": "600px"
            }
          }
        }
      `}</script>
      <link rel="canonical" href={process.env.URL + path} />
    </Helmet>
  );
}

export default PostSEO;
