import React from 'react';
import styles from './TshirtView.module.scss';
import PropTypes from 'prop-types';
import PlanetView from '../../common/PlanetView/PlanetView';
import clsx from 'clsx';

const TshirtView = ({ planetStyles, tshirt, className }) => {
  return (
    <>
      <span ref={tshirt} className={clsx(styles.tshirt, className)}></span>

      <div className={styles.planetContainer}>
        <PlanetView {...planetStyles} className={styles.planet} />
      </div>
    </>
  );
};

TshirtView.propTypes = {
  planetStyles: PropTypes.object,
  tshirt: PropTypes.object,
  className: PropTypes.string,
};

export default TshirtView;
