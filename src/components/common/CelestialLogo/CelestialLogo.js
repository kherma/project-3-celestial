import React from 'react';
import styles from './CelestialLogo.module.scss';

const CelestialLogo = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.text}>Celestial</h1>
      <div className={styles.logo}>
        <div className={styles.bag}></div>
      </div>
    </div>
  );
};

export default CelestialLogo;
