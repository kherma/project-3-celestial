import React from 'react';
import styles from './PlanetListItem.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import PlanetView from '../PlanetView/PlanetView';
import CurrancyDisplay from '../CurrancyDisplay/CurrancyDisplay';
import AddToCart from '../AddToCart/AddToCartContainer';

const PlanetListItem = ({
  data: {
    data: { name, size, price, numberSize },
    styles: planetStyles,
    _id,
  },
}) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.name}>{name}</h3>
      <Link
        to={{
          pathname: `/planet/${_id}`,
          state: _id,
        }}
        className={styles.planetContainer}
      >
        <PlanetView
          {...planetStyles}
          className={clsx(
            styles.planet,
            size === 'small' && styles.smallT,
            size === 'medium' && styles.mediumT,
            size === 'large' && styles.largeT,
            size === 'huge' && styles.hugeT
          )}
        />
      </Link>
      <div className={styles.container}>
        <CurrancyDisplay containerClass={styles.currancy} amount={price} />
        <div className={styles.cartContainer}>
          <AddToCart
            id={_id}
            planetStyles={planetStyles}
            price={price}
            numberSize={numberSize}
          />
        </div>
      </div>
    </div>
  );
};

PlanetListItem.propTypes = {
  data: PropTypes.object,
};

PlanetListItem.defaultProps = {
  data: { data: {}, styles: {}, _id: '', numberSize: 0 },
};

export default PlanetListItem;
