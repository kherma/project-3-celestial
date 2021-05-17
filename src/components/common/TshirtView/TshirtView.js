import React from 'react';
import styles from './TshirtView.module.scss';
import PropTypes from 'prop-types';
import PlanetView from '../../common/PlanetView/PlanetView';
import clsx from 'clsx';

const TshirtView = ({ planetStyles, tshirt, size }) => {
  return (
    <>
      <span
        ref={tshirt}
        className={clsx(
          styles.tshirt,
          size === 'small' && styles.tSmall,
          size === 'large' && styles.tLarge
        )}
      ></span>

      <div
        className={clsx(
          styles.planetContainer,
          size === 'small' && styles.cSmall,
          size === 'large' && styles.cLarge
        )}
      >
        <PlanetView {...planetStyles} />
      </div>
    </>
  );
};

TshirtView.propTypes = {
  planetStyles: PropTypes.object,
  tshirt: PropTypes.object,
  size: PropTypes.string,
};

export default TshirtView;
