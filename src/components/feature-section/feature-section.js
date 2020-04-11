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
    <div className="container is-fullhd">
      <div className={FeatureSectionStyles.feature + ' columns is-gapless'}>
        <div className="column is-three-quarters">
          {mainPost && 
            <LargeFeature post={mainPost} />
          }
        </div>
        <div className="column">
          <div className={FeatureSectionStyles.sideColumn}>
            {sideContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
