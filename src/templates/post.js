import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Img from 'gatsby-image';
import PostSEO from '../components/seo-post';
import Layout from "../layouts/layout";
import PostStyles from "./post.module.scss";

const Post = ({ data, path }) => {
  const post = data.wordpressPost;
  
  return (
    <Layout>
      <PostSEO post={post}  path={path}/>
      <div className="container">
        <div className={PostStyles.adTop + ' container is-fullhd  has-background-light'}>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          {/* Article Top Ad */}
          <ins
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-6866016391090213"
            data-ad-slot="6934032025"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        <article className={PostStyles.storySection}>
          <div className={PostStyles.storyHeader}>
            <h1 className="title is-1" dangerouslySetInnerHTML={{__html: post.title }} />
            <h2 className="subtitle" dangerouslySetInnerHTML={{__html: post.excerpt }} />
            <div>
              Published&nbsp;
              <time dateTime="post.date">
                { moment(post.date).format('LLL') }
              </time>
            </div>
            <hr />
          </div>
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="story" dangerouslySetInnerHTML={{__html: post.content }} />
              {/*
              <div className="story-bottom">
                <b-icon
                    icon="tags"
                    size="is-small"
                    style="margin-right: 1rem;">
                </b-icon>
                <nuxt-link :to="{ path: `/${post.categories}` }" className="tag is-link">
                  { post.categories }
                </nuxt-link>
              </div>
              */}
            </div>
            <div className={PostStyles.adColumn + ' column'}>
              <div className="has-background-light" style={{height: '100%', padding: '.75rem'}}>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                {/* Side Article Ad */}
                <ins
                  className="adsbygoogle"
                  style={{display: 'block'}}
                  data-ad-client="ca-pub-6866016391090213"
                  data-ad-slot="2284340572"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      title
      date
      modified
      excerpt
      content
      featured_media {
        source_url
      }
    }
  }
`;

export default Post;
