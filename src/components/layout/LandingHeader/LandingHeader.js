import React from 'react';
import styles from './LandingHeader.module.scss';

import CelestialLogo from '../../common/CelestialLogo/CelestialLogo';

const LandingHeader = () => {
  return (
    <header className={styles.root}>
      <CelestialLogo />
    </header>
  );
};

export default LandingHeader;
