import React from 'react';
import styles from './PlanetAtmosphere.module.scss';
import PropTypes from 'prop-types';

const PlanetAtmosphere = ({ children }) => {
  return (
    <div className={styles.root}>
      <h2>Atmosphere</h2>
      {children}
    </div>
  );
};

PlanetAtmosphere.propTypes = {
  children: PropTypes.node,
};

export default PlanetAtmosphere;
