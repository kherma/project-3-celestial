import React from 'react';
import styles from './LandingFooter.module.scss';

import FooterInfo from '../../common/FooterInfo/FooterInfo';
import WalkMan from '../../common/WalkMan/WalkMan';

const LandingFooter = () => {
  return (
    <footer className={styles.root}>
      <WalkMan />
      <FooterInfo />
    </footer>
  );
};

export default LandingFooter;

//imaginary multiverse intergalactic multidimensional earthly
