import React from 'react';
import styles from './WalkMan.module.scss';

const WalkMan = () => {
  return (
    <div className={styles.root}>
      <div className={styles.walkMan}>
        <span className={styles.switch}></span>
        <div className={styles.controllers}>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default WalkMan;
