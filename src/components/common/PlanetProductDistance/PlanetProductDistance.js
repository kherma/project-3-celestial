import React from 'react';
import styles from './PlanetProductDistance.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../ArticlePaper/ArticlePaper';

const PlanetProductDistance = ({ className, distanceFromSun }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <h2>PlanetProductDistance</h2>
    </ArticlePaper>
  );
};

PlanetProductDistance.propTypes = {
  className: PropTypes.string,
  distanceFromSun: PropTypes.number,
};

export default PlanetProductDistance;
