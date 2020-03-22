import React from 'react';
import FeatureSectionStyles from './feature-section.module.scss';

import LargeFeature from './large-feature';
import FeatureCard from './feature-card';

const FeatureSection = ({ posts }) => {
  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <div className={FeatureSectionStyles.feature + ' container is-fullhd'}>
      <div className="columns">
        <div className="column is-three-quarters">
          {mainPost && 
            <LargeFeature post={mainPost} />
          }
        </div>
          <div className={FeatureSectionStyles.sideColumn + ' column'}>
            {sidePosts.length && 
              sidePosts.map((post) => <FeatureCard key={post.id} post={post} />)
            }
          </div>
      </div>
    </div>
  );
};

export default FeatureSection;
