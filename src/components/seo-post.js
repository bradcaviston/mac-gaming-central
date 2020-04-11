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
            siteUrl
          }
        }
      }
    `
  );
  
  const title = post.title.replace(/&nbsp;/g,' ');
  const description = post.excerpt.replace(/<[^>]*>/g, '');
  const metaDescription = description || site.siteMetadata.description;
  const url = site.siteMetadata.siteUrl;

  let imageUrl = post.featured_media.source_url;

  if (post.featured_media.localFile) {
    imageUrl = url + post.featured_media.localFile.childImageSharp.fluid.src;
  }

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
          content: url + path,
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
          content: imageUrl,
        },
        // Twitter
        {
          name: `twitter:card`,
          content: `summary_large_image`,
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
          content: imageUrl,
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
              "url": "${url}/images/amp-logo.png",
              "width": "600px"
            }
          }
        }
      `}</script>
      <script data-ad-client="ca-pub-6866016391090213" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <link rel="canonical" href={url + path} />
    </Helmet>
  );
}

export default PostSEO;
