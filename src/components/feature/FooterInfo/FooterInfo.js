import React, { useState } from 'react';
import styles from './FooterInfo.module.scss';

const FooterInfo = () => {
  const [current, setCurrent] = useState(0);
  const data = [
    'imaginary',
    'multiverse',
    'intergalactic',
    'multidimensional',
    'earthly',
  ];

  const increase = () => {
    current === data.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const decrease = () => {
    current === 0 ? setCurrent(data.length - 1) : setCurrent(current - 1);
  };

  return (
    <div className={styles.root}>
      <div className={styles.pager}>
        <div className={styles.controllers}>
          <button onClick={increase}></button>
          <button onClick={decrease}></button>
        </div>
        <div className={styles.screen}>
          <p className={styles.text}>
            Copyright &copy; 2021 Celestial all{' '}
            <span className={styles.textSpecial}>{data[current]}</span> rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
