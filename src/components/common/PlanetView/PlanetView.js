import React from 'react';
import styles from './PlanetView.module.scss';
import PropTypes from 'prop-types';

const PlanetView = ({ planet, rings }) => {
  return (
    <div className={styles.root}>
      <div style={planet} className={styles.planet}></div>
      {rings.show && <div style={rings} className={styles.rings}></div>}
    </div>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.object,
  rings: PropTypes.object,
};

PlanetView.defaultProps = {
  rings: { show: false },
};

export default PlanetView;
