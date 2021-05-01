import React from 'react';
import styles from './TopbarDesktop.module.scss';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';

const TopbarDesktop = () => {
  return (
    <div className={styles.root}>
      <div className={styles.cartItems}>
        <ul className={styles.cartList}>
          {[...Array(5)].map((item, index) => (
            <li className={styles.cartItem} key={index}>
              <Link to={`/planet/${index}`}>
                <span className={styles.planet}></span>
              </Link>
              <span className={styles.trash}>
                <FaTrash />
              </span>
              <div className={styles.priceTag}>
                <CurrancyDisplay
                  containerClass={styles.currancyTag}
                  amount={10000 * index}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.currancyContainer}>
        <CurrancyDisplay containerClass={styles.currancy} amount={0} />
      </div>
    </div>
  );
};

export default TopbarDesktop;
