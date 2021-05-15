import React from 'react';
import styles from './PlanetProductData.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { IoMan } from 'react-icons/io5';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import SizeComparison from '../../common/SizeComparison/SizeComparison';

const PlanetProductData = ({ className, size, temperature, population }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <ArticlePaper
        className={clsx(
          styles.temperatureContainer,
          temperature > 60 && styles.hot,
          temperature <= 60 && temperature >= 0 && styles.regular,
          temperature < 0 && styles.cold
        )}
      >
        <h4 className={styles.temperature}>
          {temperature} <>&#x000B0;C</>
        </h4>
      </ArticlePaper>
      <ArticlePaper className={styles.populationContainer}>
        <IoMan className={styles.icon} />
        <h4 className={styles.population}>{population}</h4>
      </ArticlePaper>
      <ArticlePaper className={styles.sizeContainer}>
        <SizeComparison size={size} />
        <h5 className={styles.size}>{size}</h5>
      </ArticlePaper>
    </div>
  );
};

PlanetProductData.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  temperature: PropTypes.number,
  population: PropTypes.number,
};

export default PlanetProductData;
