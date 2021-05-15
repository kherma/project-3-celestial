import React from 'react';
import styles from './PlanetProductDistance.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  clacArrowWidth,
  calcArrowPosition,
  calcPlanetPosition,
} from '../../../utils/calcArrow';

import ArticlePaper from '../ArticlePaper/ArticlePaper';
import PlanetView from '../PlanetView/PlanetView';

const PlanetProductDistance = ({
  className,
  distanceFromSun,
  planetStyles,
}) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <p className={styles.text}>{distanceFromSun} M miles</p>
      <div className={styles.contentContainer}>
        <span
          style={{
            maxWidth: `${clacArrowWidth(distanceFromSun)}%`,
            left: `${calcArrowPosition(distanceFromSun)}%`,
          }}
          className={styles.arrow}
        ></span>
        <div
          className={styles.planetContainer}
          style={{
            left: `${calcPlanetPosition(distanceFromSun)}%`,
          }}
        >
          <PlanetView {...planetStyles} className={styles.planet} />
        </div>
      </div>
    </ArticlePaper>
  );
};

PlanetProductDistance.propTypes = {
  className: PropTypes.string,
  distanceFromSun: PropTypes.number,
  planetStyles: PropTypes.object,
};

export default PlanetProductDistance;
