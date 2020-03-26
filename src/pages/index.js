import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import IndexStyles from './index.module.scss';
import PostCard from '../components/post-card';
import FeatureSection from '../components/feature-section/feature-section';

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges.map((edge) => edge.node);
  
  return (
    <Layout>
      <SEO />
      <FeatureSection posts={posts}/>
      <div className={IndexStyles.horizontalAd + ' container is-fullhd  has-background-light'}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        {/* Home Horizontal Ad */}
        <ins
          className="adsbygoogle"
          style={{display: `block`}}
          data-ad-client="ca-pub-6866016391090213"
          data-ad-slot="4239601838"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
      <div className="container">
        <div className={IndexStyles.storyList}>
          <div className={IndexStyles.storyListHeader}>
            <h3 className="is-size-4">
              Latest Stories
            </h3>
            <hr style={{marginBottom: `1rem`}} />
          </div>
          <section className="columns is-marginless">
            <div className="column is-two-thirds">
              {posts.map((post) => 
                <PostCard key={post.id} post={post} className={IndexStyles.storyCard} />
              )}
            </div>
            <div className={IndexStyles.adColumn + ' column has-background-light'}>
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              {/* Home Side Ad */}
              <ins
                className="adsbygoogle"
                style={{display: `block`}}
                data-ad-client="ca-pub-6866016391090213"
                data-ad-slot="6961952181"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWordpressPost(limit: 15, sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          slug
          date
          excerpt
          title
          featured_media {
            source_url
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
