import React from 'react';
import styles from './HomePage.module.scss';

import LoginBox from '../../common/LoginBox/LoginBox';
import MainInfoBox from '../../common/MainInfoBox/MainInfoBox';

const HomePage = () => {
  return (
    <main className={styles.root}>
      <aside className={styles.aside}>
        <LoginBox />
        <MainInfoBox />
      </aside>
      <article className={styles.article}>
        <section className={styles.terminal}>
          <div className={styles.screen}>
            <p className={styles.terminalText}>
              With the year 2021, the earth and all intelligent creatures that
              inhabit it gain access to the imaginary interdimensional
              <span className={styles.logoText}> celestials </span>auction.
            </p>
            <span className={styles.terminalGrid}></span>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HomePage;
