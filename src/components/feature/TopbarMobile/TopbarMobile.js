import React, { useState } from 'react';
import styles from './TopbarMobile.module.scss';
import { Link } from 'react-router-dom';

import { FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';

const TopbarMobile = () => {
  const [isToggled, setIsToggeld] = useState(false);
  return (
    <section className={styles.root}>
      <div className={styles.chartContainer}>
        <CurrancyDisplay containerClass={styles.currancyTag} amount={10000} />
        {isToggled ? (
          <FaChevronUp
            className={styles.icon}
            onClick={() => {
              setIsToggeld(false);
            }}
          />
        ) : (
          <FaChevronDown
            className={styles.icon}
            onClick={() => {
              setIsToggeld(true);
            }}
          />
        )}
      </div>
      {isToggled && (
        <div className={styles.chartItems}>
          <ul className={styles.chartList}>
            <li className={styles.chartItem}>
              <div className={styles.planetContainer}></div>
              <CurrancyDisplay
                containerClass={styles.currancyTagItem}
                amount={10000}
              />
              <div className={styles.trashIconContainer}>
                <FaTrash className={styles.trashIcon} />
              </div>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default TopbarMobile;
