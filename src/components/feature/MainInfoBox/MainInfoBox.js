import React from 'react';
import styles from './MainInfoBox.module.scss';

import { CgWebsite } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MainInfoBox = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.screen}>
        <li className={styles.screenItem}>
          <p>
            designed and created with love and passions by Kamil Herma
            &#94;&#94;
          </p>
        </li>
        <li className={styles.screenItem}>
          <p>have fun and play hard</p>
        </li>
        <li className={styles.screenItem}>
          <p>peace and love</p>
        </li>
      </ul>
      <ul className={styles.keyboard}>
        <li className={styles.keyboardItem}>
          <a href="https://github.com/kherma" rel="noreferrer" target="_blank">
            <FaGithub /> <span className={styles.linkName}>GitHub</span>
          </a>
        </li>
        <li className={styles.keyboardItem}>
          <a
            href="https://www.linkedin.com/in/kamil-herma/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin /> <span className={styles.linkName}>LinkedIn</span>
          </a>
        </li>
        <li className={styles.keyboardItem}>
          <a href="https://kherma.github.io/" rel="noreferrer" target="_blank">
            <CgWebsite /> <span className={styles.linkName}>Website</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainInfoBox;
