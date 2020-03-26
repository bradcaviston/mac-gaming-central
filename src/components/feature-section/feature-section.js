import React from 'react';
import FeatureSectionStyles from './feature-section.module.scss';

import LargeFeature from './large-feature';
import FeatureCard from './feature-card';

const FeatureSection = ({ posts }) => {
  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  const sideContent = () => {
    if (sidePosts.length) {
      return sidePosts.map((post) => <FeatureCard key={post.id} post={post} />);
    }
  };

  return (
    <div className={FeatureSectionStyles.feature + ' container is-fullhd'}>
      <div className="columns" style={{height: '100%'}}>
        <div className="column is-three-quarters" style={{paddingRight: '0rem', paddingBottom: '0rem'}}>
          {mainPost && 
            <LargeFeature post={mainPost} />
          }
        </div>
          <div className={FeatureSectionStyles.sideColumn + ' column'}>
            {sideContent()}
          </div>
      </div>
    </div>
  );
};

export default FeatureSection;
