import React from 'react';
import styles from './FooterInfo.module.scss';

const FooterInfo = () => {
  return (
    <div className={styles.root}>
      <div className={styles.pager}>
        <div className={styles.controllers}>
          <button></button>
          <button></button>
        </div>
        <div className={styles.screen}>
          <p className={styles.text}>
            Copyright &copy; 2021 Celestial all{' '}
            <span className={styles.textSpecial}>imaginary</span> rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
