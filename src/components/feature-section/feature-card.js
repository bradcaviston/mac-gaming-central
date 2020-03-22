import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import FeatureCardStyles from './feature-card.module.scss';
import UrlHelper from '../../js/UrlHelper';

const FeatureCard = ({ post }) => {
  return (
    <div className={FeatureCardStyles.sideCard}>
      <Link to={`/${UrlHelper.getPostUrl(post)}`}>
        <div className={FeatureCardStyles.featureCard}>
          <figure className={FeatureCardStyles.figure + ' has-background-light'}>
            <Img
              className={FeatureCardStyles.image}
              fluid={post.featured_media.localFile.childImageSharp.fluid}
              alt="Feature Image"
            />
            <div className={'is-overlay ' + FeatureCardStyles.overlay} />
          </figure>
          <div className={FeatureCardStyles.info}>
            <h2 dangerouslySetInnerHTML={{__html: post.title }} className={FeatureCardStyles.title + ' title is-size-4'} />
            <div className="feature-card-text is-size-7" dangerouslySetInnerHTML={{__html: post.excerpt }} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;
