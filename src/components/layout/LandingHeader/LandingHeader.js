import React from 'react';
import styles from './LandingHeader.module.scss';

import CelestialLogo from '../../common/CelestialLogo/CelestialLogo';

const LandingHeader = () => {
  return (
    <div className={styles.root}>
      <CelestialLogo />
    </div>
  );
};

export default LandingHeader;
