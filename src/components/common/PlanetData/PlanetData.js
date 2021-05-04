import React from 'react';
import styles from './PlanetData.module.scss';
import PropTypes from 'prop-types';

const PlanetData = ({ children }) => {
  return (
    <div className={styles.root}>
      <h2>Data</h2>
      {children}
    </div>
  );
};

PlanetData.propTypes = {
  children: PropTypes.node,
};

export default PlanetData;
