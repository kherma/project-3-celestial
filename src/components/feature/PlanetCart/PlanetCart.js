import React from 'react';
import styles from './PlanetCart.module.scss';
import PropTypes from 'prop-types';

import { FaTrash } from 'react-icons/fa';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../../common/PlanetView/PlanetView';

const PlanetCart = ({ cart, remove }) => {
  return (
    <ArticlePaper>
      <ul className={styles.list}>
        {cart.map(({ id, newStyles, price }) => (
          <li key={id} className={styles.listItem}>
            <div className={styles.planetContainer}>
              <PlanetView {...newStyles} className={styles.planet} />
            </div>
            <div className={styles.data}>
              <CurrancyDisplay
                containerClass={styles.currancy}
                amount={price}
              />
              <button
                className={styles.iconContainer}
                onClick={() => remove({ id })}
              >
                <FaTrash className={styles.icon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </ArticlePaper>
  );
};

PlanetCart.propTypes = {
  cart: PropTypes.array,
  remove: PropTypes.func,
};

export default PlanetCart;
