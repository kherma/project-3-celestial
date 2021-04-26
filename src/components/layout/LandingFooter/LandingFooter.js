import React from 'react';
import styles from './LandingFooter.module.scss';

import FooterInfo from '../../common/FooterInfo/FooterInfo';
import WalkMan from '../../common/WalkMan/WalkMan';

const LandingFooter = () => {
  return (
    <div className={styles.root}>
      <FooterInfo />
      <WalkMan />
    </div>
  );
};

export default LandingFooter;

// Copyright &copy; 2021 Celestial All imaginary multiverse intergalactic multidimensional earthly rights reserved
