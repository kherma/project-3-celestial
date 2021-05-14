import React from 'react';
import styles from './TopbarDesktop.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../../common/PlanetView/PlanetView';

const TopbarDesktop = ({ total, planets, remove }) => {
  return (
    <div className={styles.root}>
      <div className={styles.cartItems}>
        <ul className={styles.cartList}>
          {planets.map(({ id, newStyles, price }) => (
            <li className={styles.cartItem} key={id}>
              <Link
                to={{
                  pathname: `/planet/${id}`,
                  state: id,
                }}
                className={styles.link}
              >
                <PlanetView {...newStyles} className={styles.planet} />
              </Link>
              <button className={styles.trash} onClick={() => remove(id)}>
                <FaTrash />
              </button>
              <div className={styles.priceTag}>
                <CurrancyDisplay
                  containerClass={styles.currancyTag}
                  amount={price}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.currancyContainer}>
        <CurrancyDisplay containerClass={styles.currancy} amount={total} />
      </div>
    </div>
  );
};

TopbarDesktop.propTypes = {
  total: PropTypes.any,
  planets: PropTypes.array,
  remove: PropTypes.func,
};

TopbarDesktop.defaultProps = {
  planets: [],
};

export default TopbarDesktop;
