import React, { useState } from 'react';
import styles from './TopbarMobile.module.scss';
import { Link } from 'react-router-dom';
import { FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TopbarMobile = () => {
  return (
    <div className={styles.root}>
      <section className={styles.dropdownChart}>
        <div className={styles.chartContainer}></div>
        <div className={styles.chartItems}></div>
      </section>
    </div>
  );
};

export default TopbarMobile;
