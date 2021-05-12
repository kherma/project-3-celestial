import React from 'react';
import styles from './PlanetView.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const PlanetView = ({ planet, rings, className }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div style={planet} className={styles.planet}></div>
      {rings.show && <div style={rings} className={styles.rings}></div>}
    </div>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.object,
  rings: PropTypes.object,
  className: PropTypes.string,
};

PlanetView.defaultProps = {
  rings: { show: false },
};

export default PlanetView;
