import React from 'react';
import styles from './PlanetPage.module.scss';
import PropTypes from 'prop-types';

const PlanetPage = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>PlanetPage</h2>
      {children}
    </div>
  );
};

PlanetPage.propTypes = {
  children: PropTypes.node,
};

export default PlanetPage ;
