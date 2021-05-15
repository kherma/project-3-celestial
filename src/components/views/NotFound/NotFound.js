import React from 'react';
import styles from './NotFound.module.scss';

import { Link } from 'react-router-dom';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <ArticlePaper className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>Sorry, we couldn&apos;t find this page</p>
        </div>
        <div className={styles.planet}></div>
        <div className={styles.linkContainer}>
          <Link to="/dashboard" className={styles.link}>
            Go back to Dashboard
          </Link>
        </div>
      </ArticlePaper>
    </div>
  );
};

export default NotFound;
