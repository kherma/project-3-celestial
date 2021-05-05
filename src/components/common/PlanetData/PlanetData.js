import React from 'react';
import styles from './PlanetData.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { CgArrowsHAlt } from 'react-icons/cg';
import { IoMan } from 'react-icons/io5';

import CurrancyDisplay from '../CurrancyDisplay/CurrancyDisplay';
import SizeComparison from '../SizeComparison/SizeComparison';

const PlanetData = ({
  name,
  size,
  distanceFromSun,
  temperature,
  population,
  price,
}) => {
  return (
    <div className={styles.root}>
      {name && size && distanceFromSun && price ? (
        <>
          <h4 className={styles.title}>{name}</h4>
          <ul className={styles.dataList}>
            <li className={clsx(styles.dataItem, styles.sizeComparison)}>
              <SizeComparison size={size} />
              <p>{size}</p>
            </li>
            <li className={clsx(styles.dataItem, styles.distance)}>
              <p>{distanceFromSun} M</p>
              <CgArrowsHAlt className={styles.arrow} />
              <p>miles</p>
            </li>
            <li
              className={clsx(
                styles.dataItem,
                styles.temperature,
                temperature > 60 && styles.hot,
                temperature > 0 && temperature <= 60 && styles.normal,
                temperature <= 0 && styles.cold
              )}
            >
              <h4>
                {temperature} <>&#x000B0;C</>
              </h4>
            </li>
            <li className={clsx(styles.dataItem, styles.population)}>
              <h5 className={styles.populationContainer}>
                <IoMan />
                {population ? `${population} M` : 0}
              </h5>
            </li>
          </ul>
          <CurrancyDisplay
            amount={price}
            containerClass={styles.currancyContainer}
          />
        </>
      ) : (
        <h2 className={styles.filler}>...</h2>
      )}
    </div>
  );
};

PlanetData.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  distanceFromSun: PropTypes.number,
  temperature: PropTypes.number,
  population: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  price: PropTypes.number,
};

export default PlanetData;
