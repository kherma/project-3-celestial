import React from 'react';
import styles from './PlanetProductViz.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import AddToCart from '../../common/AddToCart/AddToCartContainer';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../PlanetView/PlanetView';

const PlanetProductViz = ({ className, planetStyles, name, price, id }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.planetContainer}>
        <PlanetView {...planetStyles} className={styles.planet} />
      </div>
      <div className={styles.currancyContainer}>
        <CurrancyDisplay containerClass={styles.currancy} amount={price} />
        <AddToCart id={id} />
      </div>
    </ArticlePaper>
  );
};

PlanetProductViz.propTypes = {
  planetStyles: PropTypes.object,
  name: PropTypes.string,
  className: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
};

export default PlanetProductViz;
