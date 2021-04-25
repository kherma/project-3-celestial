import React from 'react';
import styles from './Explore.module.scss';
import PropTypes from 'prop-types';

const Explore = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>Explore</h2>
      {children}
    </div>
  );
};

Explore.propTypes = {
  children: PropTypes.node,
};

export default Explore ;
