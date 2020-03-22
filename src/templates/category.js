import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from "../layouts/layout";
import PostCard from '../components/post-card';
import CategoryStyles from './category.module.scss';
import ClientApi from '../api/client-api';

const Category = ({ data }) => {
  const category = data.wordpressCategory;
  let postsDisplay;

  const [posts, setPosts] = useState();
  useEffect(() => {
    ClientApi.getPostsByCategorySlug(category.slug).then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  if (!posts) {
    postsDisplay = (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'grey'
      }}>
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </div>
    );
  } else if (posts.length > 0) {
    postsDisplay = posts.map((post) => <PostCard key={post.slug} post={post} className={CategoryStyles.storyCard} />);
  } else {
    postsDisplay = <h3 className="title is-4">No Posts Found</h3>;
  }
  
  return (
    <Layout>
      <SEO title={category.name} />
      <div className="container">
        <div style={{marginTop: '3rem'}}>
          <div className={CategoryStyles.storyListHeader}>
            <h1 className={CategoryStyles.title + ' title'}>
              { category.name }
            </h1>
            <hr style={{marginBottom: '1rem'}} />
          </div>
          <section className="columns is-marginless">
            <div className="column">
              {postsDisplay}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    wordpressCategory(slug: {eq: $slug}) {
      name
      slug
    }
  }
`;

export default Category;