import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import LargeFeatureStyles from './large-feature.module.scss';
import UrlHelper from '../../js/UrlHelper';

const LargeFeature = ({ post }) => {
  let image;
  const test = null;

  if (!post.localFile) {
    image = (
      <Img
        className={LargeFeatureStyles.image}
        fluid={post.featured_media.localFile.childImageSharp.fluid}
        alt="Feature Image"
        style={{maxHeight: '35rem'}}
      />
    );
  } else {
    image = <img className={LargeFeatureStyles.image} style={{maxHeight: '35rem'}} src={post.featured_media.source_url} alt="Feature Image" />;
  }

  return (
    <Link to={`/${UrlHelper.getPostUrl(post)}`}>
      <div className={LargeFeatureStyles.feature1 + ' has-background-light'}>
        {image}
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
