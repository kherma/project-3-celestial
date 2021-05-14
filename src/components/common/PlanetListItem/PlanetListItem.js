import React from 'react';
import styles from './PlanetListItem.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import PlanetView from '../PlanetView/PlanetView';
import CurrancyDisplay from '../CurrancyDisplay/CurrancyDisplay';
import AddToCart from '../AddToCart/AddToCartContainer';

const PlanetListItem = ({ data }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.name}>{data.data.name}</h3>
      <Link
        to={{
          pathname: `/planet/${data.id}`,
          state: data.id,
        }}
        className={styles.planetContainer}
      >
        <PlanetView
          {...data.styles}
          className={clsx(
            styles.planet,
            data.data.size === 'small' && styles.smallT,
            data.data.size === 'medium' && styles.mediumT,
            data.data.size === 'large' && styles.largeT,
            data.data.size === 'huge' && styles.hugeT
          )}
        />
      </Link>
      <div className={styles.container}>
        <CurrancyDisplay
          containerClass={styles.currancy}
          amount={data.data.price}
        />
        <div className={styles.cartContainer}>
          <AddToCart id={data.id} />
        </div>
      </div>
    </div>
  );
};

PlanetListItem.propTypes = {
  data: PropTypes.object,
};

PlanetListItem.defaultProps = {
  data: { data: {} },
};

export default PlanetListItem;
