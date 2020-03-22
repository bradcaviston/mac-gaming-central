import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import Img from 'gatsby-image';
import PostCardStyles from './post-card.module.scss';
import UrlHelper from '../js/UrlHelper';

const PostCard = ({ post }) => {
  let image;

  if ("featured_media" in post) {
    if (post.localFile != null) {
      image = <Img className={PostCardStyles.image} fluid={post.featured_media.localFile.childImageSharp.fluid} alt="Story Image" />;
    } else {
      image = <img className={PostCardStyles.image} src={post.featured_media.source_url} alt="Story Image" />;
    }
  } else {
    image = <img className={PostCardStyles.image} src={post.featured_image} alt="Story Image" />;
  }
  
  return (
    <Link to={`/${UrlHelper.getPostUrl(post)}`} className={PostCardStyles.storyCard + ' is-paddingless columns is-mobile'}>
      <figure className={PostCardStyles.figure + ' column is-paddingless'}>
        {image}
        <div className={PostCardStyles.overlay + ' is-overlay'} />
      </figure>
      <div className={PostCardStyles.text + ' column is-three-quarters'}>
        <div className={PostCardStyles.wrapper}>
          <strong className={PostCardStyles.title + ' title is-size-4'} dangerouslySetInnerHTML={{__html: post.title }} />
          <div className={PostCardStyles.info} dangerouslySetInnerHTML={{__html: post.excerpt }} />
          <small className={PostCardStyles.small}>
            <time dateTime={post.date}>
              { moment(post.date).format('LLL') }
            </time>
          </small>
        </div>
      </div>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
