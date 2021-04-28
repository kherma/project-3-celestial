import React from 'react';
import styles from './Terminal.module.scss';

const Terminal = () => {
  return (
    <section className={styles.root}>
      <div className={styles.screen}>
        <p className={styles.terminalText}>
          With the year 2021, the earth and all intelligent creatures that
          inhabit it gain access to the imaginary interdimensional
          <span className={styles.logoText}> celestials </span>auction.
        </p>
        <span className={styles.terminalGrid}></span>
      </div>
    </section>
  );
};

export default Terminal;
