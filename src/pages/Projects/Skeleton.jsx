import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    className="projects__list-item card"
    speed={2}
    width={360}
    height={431}
    viewBox="0 0 360 431"
    backgroundColor="#607b96"
    foregroundColor="#5a728c"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="360" height="175" />
    <rect x="25" y="198" rx="0" ry="0" width="308" height="10" />
    <rect x="25" y="224" rx="0" ry="0" width="308" height="10" />
    <rect x="28" y="388" rx="8" ry="8" width="98" height="40" />
    <rect x="238" y="388" rx="8" ry="8" width="98" height="40" />
    <rect x="25" y="250" rx="0" ry="0" width="308" height="10" />
  </ContentLoader>
);

export default MyLoader;
