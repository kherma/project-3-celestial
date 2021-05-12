import React from 'react';
import styles from './LandingFooter.module.scss';

import FooterInfo from '../../feature/FooterInfo/FooterInfo';
import WalkMan from '../../feature/WalkMan/WalkMan';

const LandingFooter = () => {
  return (
    <footer className={styles.root}>
      <WalkMan />
      <FooterInfo />
    </footer>
  );
};

export default LandingFooter;
