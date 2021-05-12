import React from 'react';
import styles from './LoginBox.module.scss';
import { Link } from 'react-router-dom';

const LoginBox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.screen}>
        <p className={styles.text}>
          are you <span className={styles.textSpecial}> ready </span>?
        </p>
      </div>
      <Link to="/dashboard" className={styles.buttonLogin}>
        journey begins
      </Link>
    </div>
  );
};

export default LoginBox;
