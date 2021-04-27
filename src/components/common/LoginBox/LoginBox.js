import React from 'react';
import styles from './LoginBox.module.scss';

const LoginBox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.screen}>
        <p className={styles.text}>
          are you <span className={styles.textSpecial}> ready </span>?
        </p>
      </div>
      <button className={styles.buttonLogin}>journey begins</button>
    </div>
  );
};

export default LoginBox;
