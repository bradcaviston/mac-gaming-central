import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import LargeFeatureStyles from './large-feature.module.scss';
import UrlHelper from '../../js/UrlHelper';

const LargeFeature = ({ post }) => {
  return (
    <Link to={`/${UrlHelper.getPostUrl(post)}`}>
      <div className={LargeFeatureStyles.feature1 + ' has-background-light'}>
        <Img
          className={LargeFeatureStyles.image}
          fluid={post.featured_media.localFile.childImageSharp.fluid}
          alt="Feature Image"
          style={{maxHeight: '35rem'}}
        />
        <div className={LargeFeatureStyles.infoOverlay + ' is-overlay'}>
          <div className={LargeFeatureStyles.info}>
            <h1 dangerouslySetInnerHTML={{__html: post.title }} className={LargeFeatureStyles.customTitle + ' title'} />
            <div className={LargeFeatureStyles.text} dangerouslySetInnerHTML={{__html: post.excerpt }} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LargeFeature;
