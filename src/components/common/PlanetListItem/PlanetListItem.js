import React from 'react';
import styles from './PlanetListItem.module.scss';
import PropTypes from 'prop-types';

const PlanetListItem = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>PlanetListItem</h2>
      {children}
    </div>
  );
};

PlanetListItem.propTypes = {
  children: PropTypes.node,
};

export default PlanetListItem ;
