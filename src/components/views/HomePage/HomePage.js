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
        <h2>HomePage</h2>
      </article>
    </main>
  );
};

export default HomePage;
