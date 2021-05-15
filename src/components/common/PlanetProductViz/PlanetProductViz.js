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
      <PlanetView {...planetStyles} className={styles.planet} />
      <div className={styles.currancyContainer}>
        <div className={styles.container}>
          <CurrancyDisplay containerClass={styles.currancy} amount={price} />
          <div className={styles.cartContainer}>
            <AddToCart id={id} />
          </div>
        </div>
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
